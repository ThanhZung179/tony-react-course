/* eslint-disable react/prop-types */
import React from 'react'

function TodoItem({ todo, toggleTodo }) {
  return (
    <div 
      key={todo.id}
      className={todo.status ? 'red' : ''}
    >
      Id: {todo.id} <br />
      Title: {todo.title} <br />
      <button type="button" onClick={() => toggleTodo(todo.id)}>Toggle</button>
    </div>
  )
}

export default TodoItem