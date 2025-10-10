require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

// Configuraçães do SQL Server
const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    port: parseInt(process.env.SQL_PORT || '1433'),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// Conectar uma vez e usar sempre
sql.connect(config).then(pool => {
    console.log("Conectado ao SQL Server");

    // [1] Enviar Sugestão
    app.post('/api/sugestoes', async (req, res) => {
        const { nome, foto, mensagem } = req.body;
        try {
            const result = await pool.request()
            .input('nome', sql.VarChar, nome)
            .input('foto', sql.VarChar, foto)
            .input('mensagem', sql.VarChar, mensagem)
            .query(`
                INSERT INTO Sugestoes (Nome, Foto, Mensagem, Likes, Dislikes)
                VALUES (@nome, @foto, @mensagem, 0, 0);
                SELECT SCOPE_IDENTITY() AS ID;
            `);
            const id = result.recordset[0].ID;
            res.json({ id, nome, foto, mensagem, likes: 0, dislikes: 0 , respostas: [] });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao inserir");
        }
    });

    // [2] Listar Sugestões + Respostas
    app.get('/api/sugestoes', async (req, res) => {
        try {
            const sugestoesResult = await pool.request().query(`
                SELECT s.ID, s.Nome, s.Foto, s.Mensagem, s.Likes, s.Dislikes
                FROM Sugestoes s ORDER BY s.ID DESC
            `);

            const respostasResult = await pool.request().query(`
                SELECT r.ID, r.SugestaoID, r.Nome, r.Foto, r.Mensagem, r.DataCriacao, r.Likes, r.Dislikes
                FROM Respostas r ORDER BY ID DESC
            `);

            // Agrupar respostas por sugestaoid
            const respostasPorSugestao = respostasResult.recordset.reduce((acc, r) => {
                if (!acc[r.SugestaoID]) acc[r.SugestaoID] = [];
                acc[r.SugestaoID].push(r);
                return acc;
            }, {});

            const sugestoesComRespostas = sugestoesResult.recordset.map(s => ({
                ...s,
                respostas: respostasPorSugestao[s.ID] || []
            }));

            res.json(sugestoesComRespostas);
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao buscar sugestões");
        }
    });

    // [3] Like/Dislike
    app.post('/api/like', async (req, res) => {
        const { usuarioId, sugestaoId, respostaId, tipo } = req.body;

        if (!usuarioId || !tipo || (!sugestaoId && !respostaId) || (sugestaoId && respostaId)) {
            return res.status(400).json({ error: 'Informe usuarioId, tipo e apenas um alvo (sugestaoId OU respostaId).' })
        }

        const alvoTabela = sugestaoId ? 'Sugestoes' : 'Respostas';
        const alvoId = sugestaoId ?? respostaId;
        const campoAdd = (tipo == 'like') ? 'Likes' : 'Dislikes';
        const campoRem = (tipo == 'like') ? 'Dislikes' : 'Likes';

        const tx = new sql.Transaction(pool);
        try {
            await tx.begin();

            const request = new sql.Request(tx);
            request.input('usuarioId', sql.VarChar, usuarioId);
            request.input('sugestaoId', sql.Int, sugestaoId || null);
            request.input('respostaId', sql.Int, respostaId || null);

            // Verificar se já existe reação
            const check = await request.query(`
                SELECT Tipo FROM Interacoes 
                WHERE UsuarioID = @usuarioId
                AND ((SugestaoID = @sugestaoId AND @sugestaoId IS NOT NULL)
                OR (RespostaID = @respostaId AND @respostaId IS NOT NULL))
            `);

            if (check.recordset.length > 0) {
                const tipoAtual = check.recordset[0].Tipo;

                // Se já deu like, remove
                if (tipoAtual == tipo) {
                    await new sql.Request(tx)
                    .input('usuarioId', sql.VarChar, usuarioId)
                    .input('sugestaoId', sql.Int, sugestaoId || null)
                    .input('respostaId', sql.Int, respostaId || null)
                    .query(`
                        DELETE FROM Interacoes 
                        WHERE UsuarioID = @usuarioId
                        AND ((SugestaoID = @sugestaoId AND @sugestaoId IS NOT NULL)
                        OR (RespostaID = @respostaId AND @respostaId IS NOT NULL))
                    `);

                    await new sql.Request(tx)
                    .input('id', sql.Int, alvoId)
                    .query(`
                        UPDATE ${alvoTabela} SET ${campoAdd} = CASE WHEN ${campoAdd} > 0 THEN ${campoAdd} - 1 ELSE 0 END
                        WHERE ID = @id;
                    `);

                    await tx.commit();
                    return res.json({ action: 'removed' });
                } else {
                    // Trocar dislike para like
                    await new sql.Request(tx)
                    .input('usuarioId', sql.VarChar, usuarioId)
                    .input('sugestaoId', sql.Int, sugestaoId || null)
                    .input('respostaId', sql.Int, respostaId || null)
                    .input('tipo', sql.VarChar, tipo)
                    .query(`
                        UPDATE Interacoes SET Tipo = @tipo
                        WHERE UsuarioID = @usuarioId
                        AND ((SugestaoID = @sugestaoId AND @sugestaoId IS NOT NULL)
                        OR (RespostaID = @respostaId AND @respostaId IS NOT NULL))
                    `);

                    await new sql.Request(tx)
                    .input('id', sql.Int, alvoId)
                    .query(`
                        UPDATE ${alvoTabela} SET ${campoAdd} = ${campoAdd} + 1, ${campoRem} = CASE WHEN ${campoRem} > 0 THEN ${campoRem} - 1 ELSE 0 END
                        WHERE ID = @id;
                    `);

                    await tx.commit();
                    return res.json({ action: 'changed' });
                }
            }

            // Novo like
            await new sql.Request(tx)
            .input('usuarioId', sql.VarChar, usuarioId)
            .input('sugestaoId', sql.Int, sugestaoId || null)
            .input('respostaId', sql.Int, respostaId || null)
            .input('tipo', sql.VarChar, tipo)
            .query(`
                INSERT INTO Interacoes (UsuarioID, SugestaoID, RespostaID, Tipo) 
                VALUES (@usuarioId, @sugestaoId, @respostaId, @tipo)
            `);

            await new sql.Request(tx)
            .input('id', sql.Int, alvoId)
            .query(`
                UPDATE ${alvoTabela} SET ${campoAdd} = ${campoAdd} + 1
                WHERE ID = @id;
            `);
            
            await tx.commit();
            return res.json({ action: 'added' });
        } catch (err) {
            if (tx._aborted !== true) {
                try {await tx.rollback(); } catch {}
            }
            console.error("Erro /api/like:", err);

            if (err && err.number == 2627) {
                return res.status(409).json({ error: 'Já existe uma interação para este usuário.' });
            }
            res.status(500).json({ error: "Erro no like/dislike" });
        }
    });

    
    // [4] Denunciar
    app.post('/api/report', async (req, res) => {
        const { motivo, sugestaoId, respostaId } = req.body;

        if((!sugestaoId && !respostaId) || (sugestaoId && respostaId)){
            return res.status(400).json({ error: 'Informe apenas sugestaoId ou respostaId.' });
        }

        try {
            await pool.request()
            .input('motivo', sql.VarChar, motivo)
            .input('sugestaoId', sql.Int, sugestaoId || null)
            .input('respostaId', sql.Int, respostaId || null)
            .query(`
                INSERT INTO Reports ( Motivo, SugestaoID, RespostaID, DataReport)
                VALUES ( @motivo, @sugestaoId, @respostaId, GETDATE())
            `);

            return res.sendStatus(201).json({ sucesso: true });
        } catch (err) {
            console.error (err);
            return res.status(500).send("Erro ao reportar")
        }
    });

    // [5] Enviar Resposta
    app.post('/api/resposta', async (req, res) => {
        try{
            let { nome, foto, mensagem, sugestaoId, respostaId } = req.body;
            
            if((!sugestaoId && !respostaId) || (sugestaoId && respostaId)){
                return res.status(400).json({ error: 'Informe apenas sugestaoId ou respostaId.' });
            }

            if (!sugestaoId && respostaId) {
              const result = await pool.request()
                .input('respostaId', sql.Int, respostaId)
                .query(`
                  SELECT SugestaoID FROM Respostas WHERE ID = @respostaId
                `);
                
              if (result.recordset.length === 0) {
                return res.status(404).json({ error: 'Resposta pai não encontrada.' });
              }
          
              sugestaoId = result.recordset[0].SugestaoID; 
            }

            await pool.request()
            .input('nome', sql.VarChar, nome)
            .input('foto', sql.VarChar, foto)
            .input('mensagem', sql.VarChar, mensagem)
            .input('sugestaoId', sql.Int, sugestaoId)
            .input('respostaId', sql.Int, respostaId || null)
            .query(` 
                INSERT INTO Respostas (SugestaoID, RespostaID, Nome, Foto, Mensagem, DataCriacao, Likes, Dislikes) 
                VALUES (@sugestaoId, @respostaId, @nome, @foto, @mensagem, GETDATE(), 0, 0);
            `);

            res.status(201).send({ sucesso: true });
        } catch (err) {
            console.error(err);
            res.status(500).send("erro ao responder");
        }
    })

    // [6] Buscar respostas de uma sugestão
    app.get(`/api/respostas/:sugestaoId`, async (req, res) =>{
        const { sugestaoId } = req.params;

        try{
            const result = await pool.request()
            .input('sugestaoId', sql.VarChar, sugestaoId)
            .query(` 
                SELECT * FROM Respostas WHERE SugestaoID = @sugestaoId ORDER BY ID ASC 
            `);

            const resposta = result.recordset;

            // Organiza em árvore
            const mapa = {};
            respostas.forEach(r => mapa[r.ID] = { ...r, resposta: [] });
            
            const raiz = {};
            respostas.forEach(r => {
                if (r.RespostaID) {
                    mapa[r.RespostaID]?.respostas.push(mapa[r.ID]);
                }else {
                    raiz.push(mapa[r.ID]);
                }
            });

            res.json(raiz);
        } catch (err) {
            console.error(err);
            res.status(500).send("erro ao buscar resposta");
        }
    })

    app.listen(3001, () => {
        console.log("API rodando em http://localhost:3001");
    });
    
}).catch(err => {
    console.error("Erro na conexão com SQL Server:", err);
});