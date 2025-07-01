=== GERENCIADOR DE TAREFAS ===
1. Adicionar Tarefa
2. Listar Todas as Tarefas
3. Listar Tarefas Pendentes
4. Listar Tarefas Concluídas
5. Marcar Tarefa como Concluída
6. Remover Tarefa
7. Sair

💻 Funcionalidades Detalhadas
1. Adicionar Tarefas
Descrição detalhada

Data de vencimento com validação

Status inicial automático como "pendente"

2. Visualização
ID: 1 | Descrição: Reunião com equipe | Data: 15/07/2023 | Status: Pendente
ID: 2 | Descrição: Entregar relatório | Data: 20/07/2023 | Status: Concluída

3. Filtros
Listar Todas: Mostra todas as tarefas

Pendentes: Apenas tarefas não concluídas

Concluídas: Apenas tarefas finalizadas

4. Gerenciamento
Alteração de status

Remoção por ID

Validação de operações

Gerenciador_tarefas/
├── include/
│   ├── Task.h             # Definição da classe Task
│   ├── TaskManager.h      # Interface do gerenciador
│   └── MenuSystem.h       # Sistema de menu
├── src/
│   ├── Task.cpp           # Implementação da Task
│   ├── TaskManager.cpp    # Lógica do gerenciador
│   └── MenuSystem.cpp     # Implementação do menu
├── main.cpp               # Ponto de entrada
├── Makefile               # Configuração de compilação
└── README.md              # Descrição do Codigo