from .models import Task
from .database import Database
from .utils.helpers import parse_date

class TodoCLI:
    def __init__(self):
        self.tasks = Database.load_tasks()

    def add_task(self, title: str, description: str = "", due_date: str = None):
        due = parse_date(due_date) if due_date else None
        self.tasks.append(Task(title, description, due))
        Database.save_tasks(self.tasks)
        print(f"Task '{title}' added!")

    def list_tasks(self, show_completed: bool = True):
        for i, task in enumerate(self.tasks):
            if show_completed or not task.completed:
                print(f"{i+1}. {task}")

    def complete_task(self, task_id: int):
        if 1 <= task_id <= len(self.tasks):
            self.tasks[task_id-1].completed = True
            Database.save_tasks(self.tasks)
            print(f"Task {task_id} marked as completed!")
        else:
            print("Invalid task ID")

def main():
    cli = TodoCLI()
    
    while True:
        print("\n=== To-Do App ===")
        print("1. Add Task")
        print("2. List Tasks")
        print("3. Complete Task")
        print("4. Exit")
        
        choice = input("Choose an option: ")
        
        if choice == "1":
            title = input("Title: ")
            desc = input("Description (optional): ")
            due = input("Due date (DD/MM/YYYY, optional): ")
            cli.add_task(title, desc, due)
        
        elif choice == "2":
            cli.list_tasks()
        
        elif choice == "3":
            cli.list_tasks(show_completed=False)
            task_id = input("Task number to complete: ")
            if task_id.isdigit():
                cli.complete_task(int(task_id))
        
        elif choice == "4":
            print("Goodbye!")
            break

if __name__ == "__main__":
    main()