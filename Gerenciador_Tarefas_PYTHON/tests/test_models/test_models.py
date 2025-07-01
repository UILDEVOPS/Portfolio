import pytest
from datetime import datetime
from src.models import Task

def test_task_creation():
    task = Task("Test Task")
    assert task.title == "Test Task"
    assert not task.completed

def test_task_with_due_date():
    due_date = datetime(2023, 12, 31)
    task = Task("Test", "Description", due_date)
    assert task.due_date == due_date