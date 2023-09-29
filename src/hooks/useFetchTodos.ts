import { useCallback, useEffect } from "react";
import useTodoContext from "./useTodoContext";
import { Todo } from "../types/Todo.types";
import { makeFetch } from "../utils/makeFetch";

export default function useFetchTodos(endpoint: string) {
  const { todos = [], setTodos } = useTodoContext();

  const fetchTodos = useCallback(async () => {
    let todos = await makeFetch<Todo>(endpoint);
    // let todos: Todo[] = await respose.json();
    if (Array.isArray(todos)) {
      todos = todos.slice(0, 10);
      console.log({ todos });
      setTodos(todos);
    }
  }, [endpoint, setTodos]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos };
}
