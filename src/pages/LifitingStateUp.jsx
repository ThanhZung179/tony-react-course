import React from 'react';

// component
import Todos from '../components/Todos/Todos'

function LifitingStateUp() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'javascript',
      status: false
    },
    {
      id: 2,
      title: 'angular',
      status: false
    }
  ])

  function toggleTodo(todoId) {
    setTodos(prevState => {
      const newTodos = [...prevState];
      const todoIndex = newTodos.findIndex(todo => todo.id === todoId);
      newTodos[todoIndex].status = !newTodos[todoIndex].status; // toogle
      return newTodos;
    })
  }

  return (
    <div>
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default LifitingStateUp