from datetime import datetime

def parse_date(date_str: str) -> datetime:
    """Converte string no formato DD/MM/YYYY para datetime"""
    try:
        return datetime.strptime(date_str, "%d/%m/%Y")
    except ValueError:
        return None