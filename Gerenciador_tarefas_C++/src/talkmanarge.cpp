/**
 * @file TaskManager.cpp
 * @brief Implementação do gerenciador de tarefas
 */
#include "TaskManager.h"
#include <algorithm>

void TaskManager::addTask(const std::string& description, const std::string& dueDate) {
    tasks.push_back(std::make_unique<Task>(description, dueDate));
    std::cout << "Tarefa adicionada com sucesso!" << std::endl;
}

void TaskManager::listAllTasks() const {
    if (tasks.empty()) {
        std::cout << "Nenhuma tarefa cadastrada." << std::endl;
        return;
    }
    
    for (const auto& task : tasks) {
        task->display();
    }
}

Task* TaskManager::findTaskById(int taskId) {
    auto it = std::find_if(tasks.begin(), tasks.end(), 
        [taskId](const std::unique_ptr<Task>& task) {
            return task->getId() == taskId;
        });
    
    return (it != tasks.end()) ? it->get() : nullptr;
}

void TaskManager::markTaskCompleted(int taskId) {
    Task* task = findTaskById(taskId);
    if (task) {
        task->toggleCompleted();
        std::cout << "Status da tarefa atualizado." << std::endl;
    } else {
        std::cout << "Tarefa não encontrada." << std::endl;
    }
}

void TaskManager::removeTask(int taskId) {
    auto it = std::remove_if(tasks.begin(), tasks.end(), 
        [taskId](const std::unique_ptr<Task>& task) {
            return task->getId() == taskId;
        });
    
    if (it != tasks.end()) {
        tasks.erase(it, tasks.end());
        std::cout << "Tarefa removida com sucesso." << std::endl;
    } else {
        std::cout << "Tarefa não encontrada." << std::endl;
    }
}

void TaskManager::listPendingTasks() const {
    for (const auto& task : tasks) {
        if (!task->isCompleted()) {
            task->display();
        }
    }
}

void TaskManager::listCompletedTasks() const {
    for (const auto& task : tasks) {
        if (task->isCompleted()) {
            task->display();
        }
    }
}