import Styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    <div className={`${Styles["items-container"]}`}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;