/**
 * Configurações específicas para integração com a API iTop
 * Contém os endpoints, versão da API e parâmetros padrão
 */
module.exports = {
  apiVersion: '2.0.3',          // Versão da API iTop
  endpoints: {
    tasks: '/webservices/rest.php', // Endpoint para tarefas
  },
  defaultStatus: 'aguardando_atendimento', // Status padrão para filtro
  class: 'Task',                 // Classe de objetos no iTop
  operation: 'core/get'          // Operação padrão
};