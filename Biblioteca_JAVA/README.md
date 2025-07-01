# Sistema de Biblioteca em Java

Um sistema simples para gerenciamento de livros em Java

## Como executar

1. Certifique-se de ter o JDK 11+ instalado
2. Clone este repositório
3. Compile e execute:
   ```bash
   javac src/Main.java
   java -cp src Main

## Estrutura

   Biblioteca/
├── src/
│   ├── model/
│   │   ├── Livro.java          (Classe modelo)
│   │   └── Autor.java          (Classe modelo)
│   ├── service/
│   │   ├── BibliotecaService.java (Lógica principal)
│   │   └── LeitorArquivo.java  (Opcional - para salvar dados)
│   └── Main.java               (Menu interativo)
└── README.md                   (Documentação)