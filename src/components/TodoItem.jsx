import { useContext } from "react";
import Styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={`row ${Styles["sb-row"]}`}>
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${Styles["sb-button"]}`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
