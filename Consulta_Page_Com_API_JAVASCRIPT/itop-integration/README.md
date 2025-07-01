# Integração com iTop API

Este projeto fornece uma interface para integrar com a API do iTop, especificamente para buscar tarefas do dia anterior.

## 📋 Funcionalidades

- Busca tarefas do dia anterior no iTop
- Armazena os resultados em cache em memória
- Expõe endpoint REST para consulta dos dados

## 🛠️ Tecnologias

- Node.js
- Express
- Axios (para chamadas HTTP)
- Dotenv (para variáveis de ambiente)

## 🚀 Como Executar

1. **Configuração inicial**:
   ```bash
   npm install
   cp .env.example .env


itop-integration/
├── config/
│   ├── index.js              # Configurações gerais da aplicação
│   └── itop.config.js        # Configurações específicas da API iTop/Arquivo seguro - NUNCA faça commit deste
├── src/
│   ├── controllers/          # Lógica de manipulação das requisições HTTP
│   │   └── tasks.controller.js
│   ├── services/             # Lógica de negócio e integrações
│   │   ├── itop.service.js   # Serviço de comunicação com a API iTop
│   │   └── memory-cache.service.js # Serviço de cache em memória
│   ├── routes/               # Definição das rotas da API
│   │   └── tasks.routes.js
│   ├── utils/                # Utilitários e helpers
│   │   ├── date.helper.js    # Funções auxiliares para datas
│   │   └── error.helper.js   # Tratamento de erros
│   └── app.js                # Configuração principal do Express
├── .env                      # Variáveis de ambiente (sensíveis)/ Arq. com variáveis sensíveis (gitignorado)
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Documentação do projeto