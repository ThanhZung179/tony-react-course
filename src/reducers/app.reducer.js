import { SET_USER, SET_THEME } from './app.actions';

// initial state
const initialState = {
  user: null,
  loading: false,
  theme: 'light'
}

// reducer
export function appReducer(state = initialState, action) {
  console.log('appReducer');
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload
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
