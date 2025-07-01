/**
 * @file Task.h
 * @brief Definição da classe Task para representar uma tarefa
 */
#pragma once

#include <string>
#include <chrono>

class Task {
public:
    Task(const std::string& description, const std::string& dueDate);
    
    // Getters
    int getId() const;
    std::string getDescription() const;
    std::string getDueDate() const;
    bool isCompleted() const;
    
    // Setters
    void setDescription(const std::string& description);
    void setDueDate(const std::string& dueDate);
    void toggleCompleted();
    
    // Exibição
    void display() const;
    
private:
    static int nextId;      // Contador estático para IDs
    int id;                 // ID único da tarefa
    std::string description;
    std::string dueDate;    // Formato: DD/MM/AAAA
    bool completed;
};