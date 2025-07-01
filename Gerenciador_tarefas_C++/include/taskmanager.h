/**
 * @file TaskManager.h
 * @brief Sistema de gerenciamento de tarefas
 */
#pragma once

#include "Task.h"
#include <vector>
#include <memory>

class TaskManager {
public:
    // Operações CRUD
    void addTask(const std::string& description, const std::string& dueDate);
    void listAllTasks() const;
    void markTaskCompleted(int taskId);
    void removeTask(int taskId);
    
    // Buscas
    void listPendingTasks() const;
    void listCompletedTasks() const;
    
private:
    std::vector<std::unique_ptr<Task>> tasks; // Uso de smart pointers
    
    // Função auxiliar
    Task* findTaskById(int taskId);
};