const express = require('express');
const tasksController = require('../controllers/tasks.controller');

/**
 * Configuração de rotas relacionadas a tarefas
 * Define os endpoints da API e seus handlers
 */
const router = express.Router();

// Rota GET para buscar tarefas do dia anterior
router.get('/buscar-tarefas-do-dia-anterior', tasksController.getPreviousDayTasks);

module.exports = router;