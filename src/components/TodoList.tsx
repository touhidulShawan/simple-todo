import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; todo: string }[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id} className="todo_item">
          <span>{t.todo}</span>
          <button className="btn btn--delete" onClick={() => onDelete(t.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
