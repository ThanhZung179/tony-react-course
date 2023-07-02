import { SET_USER, SET_THEME, AUTHENTICATED } from './app.actions';

// initial state
const initialState = {
  user: null,
  loading: false,
  theme: 'light',
  isAuth: false
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

    case AUTHENTICATED: {
      return {
        ...state,
        isAuth: true
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
