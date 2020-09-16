import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (text: string, id: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitTodoHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    const enteredText = textInput.current!.value;
    props.onAddTodo(enteredText, uuid());
    textInput.current!.value = "";
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <div className="input_container">
        <label htmlFor="todoInput">Type your todo</label>
        <input
          type="text"
          name="todoInput"
          ref={textInput}
          placeholder="Type here..."
          maxLength={25}
          required
        />
      </div>
      <button className="btn btn--submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
