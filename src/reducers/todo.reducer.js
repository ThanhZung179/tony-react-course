import { SET_TODO, SET_THEME } from './todo.actions';

// initial state
const initialState = {
  todos: [],
  theme: 'pink'
}

// reducer
export function todoReducer(state = initialState, action) {
  console.log('todoReducer');
  switch (action.type) {
    case SET_TODO: {
      return {
        ...state,
        todos: action.payload
      }
    }

    case SET_THEME: {
      return {
        ...state,
        theme: action.payload
      }
    }

    default:
      return state
  }
}