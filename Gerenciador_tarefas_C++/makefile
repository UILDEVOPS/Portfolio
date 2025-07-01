# Compilador
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Iinclude

# Arquivos objeto
OBJS = src/Task.o src/TaskManager.o src/MenuSystem.o main.o

# Nome do executável
TARGET = task_manager

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $^

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

clean:
	rm -f $(OBJS) $(TARGET)

.PHONY: all clean