import pytest
import os
from src.database import Database
from src.models import Task
from datetime import datetime

@pytest.fixture
def cleanup():
    yield
    if os.path.exists("tasks.json"):
        os.remove("tasks.json")

def test_save_and_load_tasks(cleanup):
    tasks = [
        Task("Task 1", due_date=datetime(2023, 12, 1)),
        Task("Task 2", completed=True)
    ]
    Database.save_tasks(tasks)
    loaded = Database.load_tasks()
    
    assert len(loaded) == 2
    assert loaded[0].title == "Task 1"
    assert loaded[1].completed