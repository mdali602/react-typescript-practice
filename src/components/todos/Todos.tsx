import { useMemo } from 'react';
import useFetchTodos from '../../hooks/useFetchTodos';

function Todos() {

  const { todos } = useFetchTodos('todos')

  const renderMemoizedTodos = useMemo(() => {
    return (
      <>
        {todos.map((todo, index) => (
          <ul key={todo.id}>
            <li>
              Title: {index + 1} {todo.title}
            </li>
            <li>Status: {todo.completed ? "Completed" : "Pending"}</li>
            <hr />
          </ul>
        ))}
      </>
    );
  }, [todos]);
  return (
    <>
      <h1>Todos</h1>
      {renderMemoizedTodos}
    </>
  )
}

export default Todos