import { useState } from "react";
import "./TodoList.css";
import { useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);
  const [text, setText] = useState({
    input: "",
    isChecked: false,
  });

  const handleOnClick = () => {
    setTodos([...todos, text]);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
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
      <input
        onChange={(event) => setText({ ...text, input: event.target.value })}
        type="text"
      />
      <br />
      <button onClick={handleOnClick}>ADD TODOS</button>

      <ul>
        {todos.map((todo, index) => (
          <div className="todoListItem">
            <li
              style={{ textDecoration: todo.isChecked ? "line-through" : "" }}
            >
              {todo.input}
            </li>
            <input
              onClick={() => {
                const updatedTodos = todos.map((todo, i) =>
                  i === index ? { ...todo, isChecked: !todo.isChecked } : todo
                );
                setTodos(updatedTodos);
              }}
              type="checkbox"
            />
          </div>
        ))}
      </ul>

      <button
        onClick={() => {
          const remainingTodos = todos.filter((todo) => !todo.isChecked);
          setTodos(remainingTodos);
        }}
      >
        CLEAR TODOS
      </button>
    </div>
  );
};

export default TodoList;
