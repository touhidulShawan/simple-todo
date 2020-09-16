import React, { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

interface Todo {
  id: string;
  todo: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // add new todo handler
  const addTodoHandler = (text: string, id: string) => {
    const newTodo = { id: id, todo: text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // remove a todo
  const removeTodoHandler = (id: string) => {
    const updateTodos = todos.filter((t) => t.id !== id);
    setTodos(updateTodos);
  };

  return (
    <main className="main">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDelete={removeTodoHandler} />
    </main>
  );
};

export default App;
