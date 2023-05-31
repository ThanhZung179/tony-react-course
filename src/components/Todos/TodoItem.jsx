import React from 'react';

// components
import Button from '../Button';

function TodoItem({ todo, toggleTodo }) {
  return (
    <div
      style={{ 
        color: todo.status ? 'red' : 'black'
      }}
    >
      id: {todo.id} - title: {todo.title} 
      <Button text="Close" handleClick={() => toggleTodo(todo.id)} />
    </div>
  )
}

export default TodoItem