/* eslint-disable react/prop-types */
import React from 'react'

// component
import TodoItem from './TodoItem'

function Todos({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <>
          <TodoItem todo={todo} toggleTodo={toggleTodo} />
          <br />
        </>
      ))}
    </div>
  )
}

export default Todos