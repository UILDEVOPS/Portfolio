const axios = require('axios');
const { itopRoot } = require('../../config');
const itopConfig = require('../../config/itop.config');

/**
 * Serviço para comunicação com a API iTop
 * Encapsula todas as chamadas à API externa
 */
class ItopService {
  constructor() {
    this.baseUrl = itopRoot;     // URL base da API
  }

  /**
   * Busca tarefas no iTop por data
   * @param {string} date - Data no formato YYYY-MM-DD
   * @returns {Promise<Array>} Lista de tarefas
   */
  async getTasksByDate(date) {
    try {
      const url = `${this.baseUrl}${itopConfig.endpoints.tasks}`;
      const params = {
        version: itopConfig.apiVersion,
        class: itopConfig.class,
        operation: itopConfig.operation,
        date,
        status: itopConfig.defaultStatus
      };

      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(`Itop API error: ${error.message}`);
    }
  }
}

// Exporta uma instância singleton do serviço
module.exports = new ItopService();