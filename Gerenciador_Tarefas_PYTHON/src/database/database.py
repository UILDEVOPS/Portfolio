import json
from pathlib import Path
from datetime import datetime
from typing import List
from .models import Task

DB_PATH = Path("tasks.json")

class Database:
    @staticmethod
    def save_tasks(tasks: List[Task]):
        data = [{
            "title": task.title,
            "description": task.description,
            "due_date": task.due_date.isoformat() if task.due_date else None,
            "completed": task.completed
        } for task in tasks]
        
        with open(DB_PATH, "w") as f:
            json.dump(data, f, indent=2)

    @staticmethod
    def load_tasks() -> List[Task]:
        if not DB_PATH.exists():
            return []
            
        with open(DB_PATH) as f:
            data = json.load(f)
            return [
                Task(
                    title=item["title"],
                    description=item["description"],
                    due_date=datetime.fromisoformat(item["due_date"]) if item["due_date"] else None,
                    completed=item["completed"]
                ) for item in data
            ]