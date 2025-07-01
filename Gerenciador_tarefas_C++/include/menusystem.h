/**
 * @file MenuSystem.h
 * @brief Sistema de menu interativo
 */
#pragma once

class TaskManager;

class MenuSystem {
public:
    MenuSystem(TaskManager& manager);
    void run();
    
private:
    TaskManager& taskManager;
    
    void displayMenu() const;
    void handleInput(int choice);
    void addTaskMenu();
    void markCompletedMenu();
    void removeTaskMenu();
};