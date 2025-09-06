import { useContext } from "react";
import Styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <h1 className={Styles.msg}>Enjoy Your Day!</h1>
  );
};

export default WelcomeMsg;