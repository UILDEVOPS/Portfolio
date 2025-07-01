# User Manager API

API simples para gerenciamento de usuários com Node.js

## Funcionalidades
- Cadastro de usuários
- Listagem de usuários
- Busca por ID

## Como usar
1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Rodar testes:
```bash
npm test
```

## Estrutura

Sistema_Cadastro_Usuários/
├── src/
│   ├── models/
│   │   └── User.js
│   ├── services/
│   │   └── userService.js
│   ├── utils/
│   │   └── fileHelper.js
│   └── app.js
├── tests/
│   └── userService.test.js
├── data/
│   └── users.json
├── package.json
└── README.md