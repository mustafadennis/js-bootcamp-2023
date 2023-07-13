import { useState } from "react";
import "./TodoList.css";
import { useEffect } from "react";
import TodoItem from "../todoItem/TodoItem";
import { ITodoItem } from "../../types";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);
  const [text, setText] = useState<ITodoItem>({
    input: "",
    isChecked: false,
  });

  const handleOnClick = () => {
    setTodos([...todos, text]);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storedTodos) {
      setTodos(storedTodos);
    }
    setIsComponentLoaded(true);
  }, []);

  useEffect(() => {
    isComponentLoaded && localStorage.setItem("todos", JSON.stringify(todos));
    const remainingTodos = todos.filter((todo) => !todo.isChecked).length;

    setRemainingItems(remainingTodos);
  }, [text.isChecked, todos, isComponentLoaded]);

  if (!isComponentLoaded) {
    <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>REMAINING TODOS: {remainingItems}</h1>
      {/* this can be specific compoonent */}
      <input
        onChange={(event) => setText({ ...text, input: event.target.value })}
        type="text"
      />
      <br />
      <button onClick={handleOnClick}>ADD TODOS</button>
      {/* this can be specific compoonent */}

      <TodoItem todos={todos} setTodos={setTodos} />
      {/* this can be specific compoonent  2*/}
      <button
        onClick={() => {
          const remainingTodos = todos.filter((todo) => !todo.isChecked);
          setTodos(remainingTodos);
        }}
      >
        CLEAR TODOS
      </button>
      {/* this can be specific compoonent 2*/}
    </div>
  );
};

export default TodoList;
