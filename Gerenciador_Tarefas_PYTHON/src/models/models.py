from dataclasses import dataclass
from datetime import datetime

@dataclass
class Task:
    title: str
    description: str = ""
    due_date: datetime = None
    completed: bool = False

    def __str__(self):
        status = "✓" if self.completed else "✗"
        due = f" (Due: {self.due_date.strftime('%d/%m/%Y')}" if self.due_date else ""
        return f"{status} {self.title}{due}"