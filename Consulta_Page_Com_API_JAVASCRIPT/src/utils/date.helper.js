/**
 * Utilitário para manipulação de datas
 * Contém funções auxiliares para formatação e cálculo de datas
 */

/**
 * Formata a data do dia anterior no padrão YYYY-MM-DD
 * @returns {string} Data formatada
 */
function formatPreviousDate() {
  const hoje = new Date();
  const ontem = new Date(hoje);
  ontem.setDate(hoje.getDate() - 1); // Subtrai 1 dia da data atual
  return ontem.toISOString().split('T')[0]; // Formata como YYYY-MM-DD
}

module.exports = {
  formatPreviousDate
};