/**
 * Configurações centrais da aplicação
 * Carrega e exporta todas as variáveis de ambiente
 * com valores padrão quando necessário
 */
require('dotenv').config(); // Carrega variáveis do arquivo .env

module.exports = {
  itopRoot: process.env.ITOP_API_ROOT, // URL base da API iTop
  port: process.env.PORT || 3000,      // Porta do servidor (3000 padrão)
  dbName: process.env.DB_NAME || 'seu_banco_de_dados' // Nome do DB
};