import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setTodo } from '../../reducers/todo.actions';

// selector
import { todoSelector } from '../../reducers/todo.selector';


function Todo() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // async function initialTodo() {
    //   const res = await fetch('https://tony-auth-express.vercel.app/api/todo');
    //   const data = await res.json();
    //   dispatch(setTodo(data.data))
    // }
    // initialTodo();

    // apply redux thunk
    dispatch(setTodo())
  }, [])

  return (
    <div>
      Todo
      {todos.map(todo => (
        <div key={todo._id}>
          Title: {todo.title}
        </div>
      ))}
    </div>
  )
}

export default Todo