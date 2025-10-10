require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  port: parseInt(process.env.SQL_PORT || '1433'),
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

sql.connect(config)
  .then(() => {
    console.log('✅ Conectado ao SQL Server com sucesso!');
  })
  .catch(err => {
    console.error('❌ Erro na conexão:', err);
  });