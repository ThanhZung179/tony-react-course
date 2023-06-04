import React from 'react';

// components
import Button from '../Button';

// context
import { useAppContext } from '../../context/AppContext';
import { useBookContext } from '../../context/BookContext';

function TodoItem({ todo, toggleTodo }) {
  const { theme } = useAppContext();
  const stateBook = useBookContext();

  console.log('TodoItem: ', stateBook)

  return (
    <div
      style={{ 
        color: todo.status ? 'red' : 'black'
      }}
    >
      id: {todo.id} - title: {todo.title} 
      <br />
      Theme: {theme}
      <Button text="Close" handleClick={() => toggleTodo(todo.id)} />
    </div>
  )
}

export default TodoItem