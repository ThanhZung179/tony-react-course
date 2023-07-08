// constant
export const SET_TODO = 'TODO/SET_TODO';
export const SET_THEME = 'TODO/SET_THEME';

// actions
// export function setTodo(payload) {
//   return {
//     type: SET_TODO,
//     payload
//   }
// }

export const addTodo = () => async (dispatch, getState) => {
  const todos = getState().todo.todos;
  if(todos.length > 4) return;
  // add todo ( dispatch action)
}


export const setTodo = () => async (dispatch, getState) => {
  const todos = getState().todo.todos;
  if(todos.length > 0) return;

  // code logic 
  const res = await fetch('https://tony-auth-express.vercel.app/api/todo');
  const data = await res.json();
  dispatch({
    type: SET_TODO,
    payload: data.data
  })
}
