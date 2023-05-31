import React, { useState } from 'react'
import TodoItem from '../components/Todos/TodoItem'
import Button from '../components/Button';

function LiftingStateUp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'learn javascript',
      status: false
    },
    {
      id: 2,
      title: 'learn angular',
      status: false
    },
    {
      id: 3,
      title: 'learn vue',
      status: false
    },
  ])

  function toggleTodo(todoId) {
    // const clonedTodos = [...todos]; // shallow clone 
    const clonedTodos = JSON.parse(JSON.stringify(todos)); // deep clone
    const todoIndex = clonedTodos.findIndex(todo => todo.id === todoId);
    clonedTodos[todoIndex].status = !clonedTodos[todoIndex].status; // toogle

    setTodos(clonedTodos);
  }

  function handleAddTodo() {
    const todoItem = {
      id: Date.now(),
      title: 'learn javascript' + Date.now(),
      status: false
    }

    setTodos(prevState => {
      return prevState.concat(todoItem);
    }); // es5
    // setTodos(prevState => {
    //   return [...prevState, todoItem];
    // }); // push 1 item to array with ES6
  }

  return (
    <div>
      <Button text="Add Todo" handleClick={handleAddTodo} />
      {todos.length > 0 ? (
        <>
          {todos.map(todo => {
            return (
              <TodoItem todo={todo} toggleTodo={toggleTodo} />
            )
          })}
        </>
      ): (
        <div>no data</div>
      ) }


    </div>
  )
}

export default LiftingStateUp