/**
 * @file MenuSystem.cpp
 * @brief Implementação do sistema de menu
 */
#include "MenuSystem.h"
#include "TaskManager.h"
#include <iostream>
#include <limits>

MenuSystem::MenuSystem(TaskManager& manager) : taskManager(manager) {}

void MenuSystem::run() {
    int choice;
    do {
        displayMenu();
        std::cin >> choice;
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        handleInput(choice);
    } while (choice != 7);
}

void MenuSystem::displayMenu() const {
    std::cout << "\n=== GERENCIADOR DE TAREFAS ===" << std::endl;
    std::cout << "1. Adicionar Tarefa" << std::endl;
    std::cout << "2. Listar Todas as Tarefas" << std::endl;
    std::cout << "3. Listar Tarefas Pendentes" << std::endl;
    std::cout << "4. Listar Tarefas Concluídas" << std::endl;
    std::cout << "5. Marcar Tarefa como Concluída" << std::endl;
    std::cout << "6. Remover Tarefa" << std::endl;
    std::cout << "7. Sair" << std::endl;
    std::cout << "Escolha uma opção: ";
}

void MenuSystem::handleInput(int choice) {
    switch (choice) {
        case 1: addTaskMenu(); break;
        case 2: taskManager.listAllTasks(); break;
        case 3: taskManager.listPendingTasks(); break;
        case 4: taskManager.listCompletedTasks(); break;
        case 5: markCompletedMenu(); break;
        case 6: removeTaskMenu(); break;
        case 7: std::cout << "Saindo..." << std::endl; break;
        default: std::cout << "Opção inválida!" << std::endl;
    }
}

void MenuSystem::addTaskMenu() {
    std::string description, dueDate;
    
    std::cout << "Descrição da tarefa: ";
    std::getline(std::cin, description);
    
    std::cout << "Data de vencimento (DD/MM/AAAA): ";
    std::getline(std::cin, dueDate);
    
    taskManager.addTask(description, dueDate);
}

void MenuSystem::markCompletedMenu() {
    int taskId;
    std::cout << "ID da tarefa a marcar como concluída: ";
    std::cin >> taskId;
    
    taskManager.markTaskCompleted(taskId);
}

void MenuSystem::removeTaskMenu() {
    int taskId;
    std::cout << "ID da tarefa a remover: ";
    std::cin >> taskId;
    
    taskManager.removeTask(taskId);
}