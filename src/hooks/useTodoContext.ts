import { useContext } from "react";
import TodoContext from "../context/Todo.context";

export default function useTodoContext() {
  return useContext(TodoContext);
}
