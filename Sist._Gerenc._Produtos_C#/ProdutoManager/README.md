## Sistema de Gerenciamento de Produtos

Um sistema simples para cadastro e gerenciamento de produtos, desenvolvido em C# com arquitetura organizada.

## Funcionalidades

- Cadastro de produtos (nome, preço, estoque)
- Listagem completa de produtos
- Persistência em memória (podendo ser migrada para banco de dados)

## Estrutura

ProdutoManager/
├── Models/          # Entidades do sistema
├── Services/        # Lógica de negócio
├── Data/            # Camada de acesso a dados
├── Utils/           # Utilitários e helpers
└── Program.cs       # Ponto de entrada