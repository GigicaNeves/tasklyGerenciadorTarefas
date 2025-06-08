// Importa o Pool do pacote 'pg' para conexão com o PostgreSQL
const { Pool } = require("pg");

// Carrega variáveis de ambiente do arquivo .env
require("dotenv").config();

// Cria uma instância de Pool usando as configurações do .env
const pool = new Pool({
  user: process.env.DB_USER,           // Usuário do banco de dados
  host: process.env.DB_HOST,           // Host do banco de dados
  database: process.env.DB_DATABASE,   // Nome do banco de dados
  password: process.env.DB_PASSWORD,   // Senha do banco de dados
  port: process.env.DB_PORT,           // Porta do banco de dados
  ssl: process.env.DB_SSL === "true"   // Usa SSL se definido como "true"
    ? { rejectUnauthorized: false }
    : false,
});

// Exporta funções para executar queries e conectar manualmente ao banco
module.exports = {
  query: (text, params) => pool.query(text, params), // Executa uma query SQL
  connect: () => pool.connect(),                     // Retorna uma conexão manual
};
