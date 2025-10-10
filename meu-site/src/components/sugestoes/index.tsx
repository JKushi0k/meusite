import React, { useEffect, useState, } from "react";
import axios from 'axios';

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";

import {
    Barra,
    Button,
    Column,
    Container,
    SugesTitle,
    Row,
    Wrapper,
    Acao,
    Acoes,
    Comentario,
    Conteudo,
    Foto,
    InputContainer,
    Nome,
    Textarea,
    Texto,
    BarraTwo,
    ButtonTwo,
    ComentarioTwo,
    AcaoTwo,
    AcoesTwo
} from "./style"
import { comment } from "postcss";

interface Resposta {
    ID: number;
    SugestaoID: number;
    Nome: string;
    Foto: string;
    Mensagem: string;
    Likes: number;
    Dislikes: number;
    DataCriacao:  string;
    respostas?: Resposta[];
}

interface Sugestao {
    ID: number;
    Nome: string;
    Foto: string;
    Mensagem: string;
    Likes: number;
    Dislikes: number;
    respostas: Resposta[];
}

const Sugestao = () =>{
    const [mensagem, setMensagem] = useState('');
    const [sugestoes, setSugestoes] = useState<Sugestao[]>([]);
    const [respostaVisiveis, setRespostaVisiveis] = useState<Record<number, boolean>>({});
    const [mensagensRespostas, setMensagensRespostas] = useState<Record<number, string>>({});
    const usuarioId = "user123";

    useEffect(() => {
        carregarSugestoes();
    }, []);

    // Buscar sugestões do backend
    const carregarSugestoes = async () => {
        try {
            const res = await axios.get<Sugestao[]>('http://localhost:3001/api/sugestoes');
            setSugestoes(res.data);
        } catch (err) {
            console.error('Erro ao carregar sugestões', err);
        }
    };

    // Enviar nova sugestão
    const enviarSugestao = async () => {
        if (mensagem.trim() == '') return;

        try {
            const res = await axios.post<Sugestao>('http://localhost:3001/api/sugestoes', {
                nome: 'Visitante',
                foto: 'https://placehold.co/50',
                mensagem,
            });

            setSugestoes([res.data, ...sugestoes]);
            setMensagem('');
        } catch (err) {
            console.error('Erro ao enviar sugestão', err);
        }
    };

    const toggleResposta = (id: number) => {
        setRespostaVisiveis(prev => ({ ...prev, [id]: !prev[id] }));
    };
    
    const enviarResposta = async (sugestaoId: number, respostaId?: number) => {
        const mensagem = mensagensRespostas[respostaId || sugestaoId];
        if (!mensagem?.trim()) return;

        try {
            const res = await axios.post<Resposta>("http://localhost:3001/api/resposta", {
                nome: "Visitante",
                foto: "https://placehold.co/35x35",
                mensagem,
                sugestaoId: respostaId ? null : sugestaoId, // se for resposta de resposta, zera sugestaoId
                respostaId: respostaId ?? null,             // se existir, envia respostaId
            });

            console.log("Resposta Salva:", res.data)
            carregarSugestoes();

            setMensagensRespostas(prev => ({
                ...prev,
                [respostaId || sugestaoId]: "",
            }));
        } catch (err) {
            console.error("Erro ao enviar resposta", err);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault();
            enviarSugestao();
        }
    };

    const reagirSugestao = async (sugestaoId: number, tipo: 'like' | 'dislike') => {
        try {
            await fetch(`http://localhost:3001/api/like`, { 
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    usuarioId,
                    sugestaoId,
                    tipo
                })
            });
            carregarSugestoes();
        } catch (err) {
            console.error("Erro na reação", err)
        }
        
    };

    const reagirResposta = async (respostaId: number, tipo: 'like' | 'dislike') => {
        try {
            await fetch(`http://localhost:3001/api/like`, { 
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    usuarioId,
                    respostaId,
                    tipo
                })
            });
            carregarSugestoes();
        } catch (err) {
            console.error("Erro na reação", err)
        }
        
    };

    const reportar = async (id: number, motivo: string, tipo: "sugestao" | "resposta") => {
        try {
            await axios.post("http://localhost:3001/api/report", {
                usuarioId: "visitante",
                motivo,
                sugestaoId: tipo == "sugestao" ? id : null,
                respostaId: tipo == "resposta" ? id : null,
            });
            alert(`Comentário reportado`);
        } catch (err) {
            console.error("Erro no like", err)
        }
    };


    return(
        <>
            <Wrapper>
                <Container>
                    <Column>
                        <Row>
                            <SugesTitle>Sugestões</SugesTitle>
                        </Row>

                        <InputContainer>
                            <Row>
                                <form onSubmit={(e) => { e.preventDefault(); enviarSugestao(); }}>
                                    <Row>
                                        <Barra placeholder="Escreva sua sugestão" value={mensagem} onChange={(e) => setMensagem(e.target.value)} onKeyDown={handleKeyPress} />
                                        <Button type="submit" onClick={enviarSugestao}>Enviar</Button>
                                    </Row>
                                </form>
                            </Row>
                        </InputContainer>

                        <Column>
                            {sugestoes.map((s, index) =>(
                                <Comentario key={`${s.ID ?? 'sug'}-${index}`}>
                                    <Row>
                                        <Foto src={s.Foto} alt={s.Nome} />
                                        <Column>
                                            <Conteudo>
                                                <Nome>{s.Nome}</Nome>
                                                <Texto>{s.Mensagem}</Texto>

                                                <Acoes>
                                                    <Acao onClick={() => reagirSugestao(s.ID, 'like')}><BiSolidLike /> {s.Likes}</Acao>
                                                    <Acao onClick={() => reagirSugestao(s.ID, 'dislike')}><BiSolidDislike /> {s.Dislikes}</Acao>
                                                    <Acao onClick={() => {
                                                        const motivo = prompt("Digite o motivo do report:");
                                                        if (motivo) reportar(s.ID, motivo, "sugestao");
                                                    }}><MdReport /> Reportar</Acao>
                                                    <Acao onClick={() => toggleResposta(s.ID)}><BsChatDotsFill />{respostaVisiveis[s.ID] ? "Cancelar" : "Responder"}</Acao>
                                                </Acoes>

                                                {respostaVisiveis[s.ID] && (
                                                    <Row>
                                                        <form style={{ marginTop: 8 }}>
                                                            <Row>
                                                                <BarraTwo placeholder="Responder..." value={mensagensRespostas[s.ID] || ''} onChange={(e) => setMensagensRespostas(prev => ({ 
                                                                    ...prev, [s.ID]: e.target.value }))} onKeyDown={(e) => {
                                                                        if (e.key == 'Enter' && !e.shiftKey) {
                                                                            e.preventDefault();
                                                                            enviarResposta(s.ID);
                                                                        }
                                                                    }} 
                                                                />
                                                                <ButtonTwo type="button" onClick={() => enviarResposta(s.ID)}>Enviar</ButtonTwo>
                                                            </Row>
                                                        </form>
                                                    </Row>
                                                )}

                                                {s.respostas && s.respostas.length > 0 && (
                                                    <div style={{ marginTop: 12, paddingLeft: 20 }}>
                                                        {s.respostas.map((r, index) => (
                                                            <ComentarioTwo key={`${s.ID}-${r.ID || 'resp'}-${index}`}>
                                                                <Row>
                                                                    <Foto src={r.Foto || "https://placehold.co/35x35"} alt={r.Nome || "User"} />
                                                                    <Column>
                                                                    <Conteudo>
                                                                        <Nome>{r.Nome || 'Admin' }</Nome>
                                                                        <Texto>{r.Mensagem}</Texto>
                                                                        
                                                                        <AcoesTwo>
                                                                            <AcaoTwo onClick={() => reagirResposta(r.ID, 'like')}><BiSolidLike /> {r.Likes ?? 0}</AcaoTwo>
                                                                            <AcaoTwo onClick={() => reagirResposta(r.ID, 'dislike')}><BiSolidDislike /> {r.Dislikes ?? 0}</AcaoTwo>
                                                                            <AcaoTwo onClick={() => {
                                                                                const motivo = prompt("Digite o motivo do report:");
                                                                                if (motivo) reportar(r.ID, motivo, "resposta");
                                                                            }}><MdReport /> Reportar</AcaoTwo>
                                                                            <AcaoTwo onClick={() => toggleResposta(r.ID)}><BsChatDotsFill />{respostaVisiveis[r.ID] ? "Cancelar" : "Responder"}</AcaoTwo>
                                                                        </AcoesTwo>

                                                                        {respostaVisiveis[r.ID] && (
                                                                            <Row>
                                                                                <form style={{ marginTop: 8 }} onSubmit={(e) => { e.preventDefault(); enviarResposta(s.ID, r.ID); }}>
                                                                                    <Row>
                                                                                        <BarraTwo placeholder="Responder..." value={mensagensRespostas[r.ID] || ''} onChange={(e) =>    setMensagensRespostas(prev => ({ 
                                                                                            ...prev, [r.ID]: e.target.value }))} onKeyDown={(e) => {
                                                                                                if (e.key == 'Enter' && !e.shiftKey) {
                                                                                                    e.preventDefault();
                                                                                                    enviarResposta(s.ID, r.ID);
                                                                                                }
                                                                                            }} 
                                                                                        />
                                                                                        <ButtonTwo type="button" onClick={() => enviarResposta(s.ID, r.ID)}>Enviar</ButtonTwo>
                                                                                    </Row>
                                                                                </form>
                                                                            </Row>
                                                                        )}
                                                                    </Conteudo>
                                                                    </Column>
                                                                </Row>
                                                            </ComentarioTwo>
                                                        ))}
                                                    </div>
                                                )}
                                            </Conteudo>
                                        </Column>
                                    </Row>
                                </Comentario>
                            ))}
                        </Column>
                    </Column>
                </Container>
            </Wrapper>
        </>
    )

}

export { Sugestao }