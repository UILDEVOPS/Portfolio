/**
 * @file Task.cpp
 * @brief Implementação da classe Task
 */
#include "Task.h"
#include <iostream>

int Task::nextId = 1; // Inicialização do contador estático

Task::Task(const std::string& description, const std::string& dueDate)
    : id(nextId++), description(description), dueDate(dueDate), completed(false) {}

int Task::getId() const { return id; }
std::string Task::getDescription() const { return description; }
std::string Task::getDueDate() const { return dueDate; }
bool Task::isCompleted() const { return completed; }

void Task::setDescription(const std::string& description) {
    this->description = description;
}

void Task::setDueDate(const std::string& dueDate) {
    this->dueDate = dueDate;
}

void Task::toggleCompleted() {
    completed = !completed;
}

void Task::display() const {
    std::cout << "ID: " << id 
              << " | Descrição: " << description 
              << " | Data: " << dueDate 
              << " | Status: " << (completed ? "Concluída" : "Pendente") 
              << std::endl;
}