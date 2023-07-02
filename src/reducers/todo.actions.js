// constant
export const SET_TODO = 'TODO/SET_TODO';
export const SET_THEME = 'TODO/SET_THEME';

// actions
export function setTodo(payload) {
  return {
    type: SET_TODO,
    payload
  }
}
