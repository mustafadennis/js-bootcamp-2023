import { ITodoItem } from "../../types";
import "./TodoItem.css";

interface TodoItemProps {
  todos: ITodoItem[];
  setTodos: any;
}

const TodoItem = ({ todos, setTodos }: TodoItemProps) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <div className="todoListItem">
          <li style={{ textDecoration: todo.isChecked ? "line-through" : "" }}>
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
            checked={todo.isChecked}
          />
        </div>
      ))}
    </ul>
  );
};

export default TodoItem;
