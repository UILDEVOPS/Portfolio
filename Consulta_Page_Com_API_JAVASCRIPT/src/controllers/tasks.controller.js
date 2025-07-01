const itopService = require('../services/itop.service');
const cacheService = require('../services/memory-cache.service');
const { formatPreviousDate } = require('../utils/date.helper');

/**
 * Controller para manipulação de tarefas
 * Responsável por tratar as requisições HTTP e preparar as respostas
 */
class TasksController {
  /**
   * Busca tarefas do dia anterior no iTop e armazena em cache
   * @param {Object} req - Objeto de requisição Express
   * @param {Object} res - Objeto de resposta Express
   */
  async getPreviousDayTasks(req, res) {
    try {
      // Obtém a data do dia anterior formatada
      const previousDate = formatPreviousDate();
      
      // Busca tarefas no iTop
      const tasks = await itopService.getTasksByDate(previousDate);

      // Verifica se existem tarefas
      if (!tasks || tasks.length === 0) {
        return res.status(404).json({ message: 'No tasks found for the previous day' });
      }

      // Armazena cada tarefa no cache em memória
      tasks.forEach(task => {
        const { id, numero_tarefa, descricao_tarefa, numero_ticket, url, tegue_correcao, tegue_melhoria } = task;
        cacheService.store(id, {
          numero_tarefa,
          descricao_tarefa,
          numero_ticket,
          url,
          tegue_correcao,
          tegue_melhoria
        });
      });

      // Retorna todas as tarefas armazenadas no cache
      res.json(cacheService.getAll());
    } catch (error) {
      // Tratamento de erros
      res.status(500).json({ error: error.message });
    }
  }
}

// Exporta uma instância singleton do controller
module.exports = new TasksController();