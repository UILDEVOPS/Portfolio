const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');
const config = require('../config');

// Cria a aplicação Express
const app = express();
const port = config.port || 3000;

// Middlewares
app.use(express.json()); // Habilita parsing de JSON no body das requisições

// Configuração das rotas
app.use('/api', tasksRoutes); // Prefixo '/api' para todas as rotas

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});