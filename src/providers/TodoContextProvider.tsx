import React, { useState } from "react";
import TodoContext from "../context/Todo.context";
import { Todo } from "../types/Todo.types";

type TodoContextProviderProps = {
  children: React.ReactNode
}
export const TodoContextProvider = (props: TodoContextProviderProps) => {
  const { children } = props
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
