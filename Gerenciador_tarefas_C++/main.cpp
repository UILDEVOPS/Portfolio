/**
 * @file main.cpp
 * @brief Ponto de entrada do programa
 */
#include "TaskManager.h"
#include "MenuSystem.h"

int main() {
    TaskManager manager;
    MenuSystem menu(manager);
    
    std::cout << "Bem-vindo ao Gerenciador de Tarefas!" << std::endl;
    menu.run();
    
    return 0;
}