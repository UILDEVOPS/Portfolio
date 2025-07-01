/**
 * Utilitário para tratamento de erros
 * Contém funções para padronizar respostas de erro
 */

/**
 * Formata erros para resposta da API
 * @param {Error} error - Objeto de erro
 * @returns {Object} Objeto padronizado de erro
 */
function formatError(error) {
    return {
      timestamp: new Date().toISOString(),
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };
  }
  
  module.exports = {
    formatError
  };