import { createContext } from "react";
import { Todo } from "../types/Todo.types";

export type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default createContext({} as TodoContextType);
