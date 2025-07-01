/**
 * Serviço de cache em memória
 * Implementa um simples armazenamento key-value em memória
 * Útil para persistir dados entre requisições sem DB
 */
class MemoryCacheService {
  constructor() {
    this.cache = {}; // Objeto que armazena os dados em memória
  }

  /**
   * Armazena um valor no cache
   * @param {string} key - Chave de identificação
   * @param {any} data - Dados a serem armazenados
   */
  store(key, data) {
    this.cache[key] = data;
  }

  /**
   * Recupera um valor do cache
   * @param {string} key - Chave de identificação
   * @returns {any} Dados armazenados ou undefined
   */
  retrieve(key) {
    return this.cache[key];
  }

  /**
   * Retorna todo o conteúdo do cache
   * @returns {Object} Todas as entradas do cache
   */
  getAll() {
    return this.cache;
  }
}

// Exporta uma instância singleton do serviço
module.exports = new MemoryCacheService();