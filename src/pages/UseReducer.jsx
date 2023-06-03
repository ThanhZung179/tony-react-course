import React, { useEffect } from 'react'

// component
import Button from '../components/Button';

// constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = 'SHOW_LOADING';
const SHOW_ERROR = 'SHOW_ERROR';
const HIDE_ERROR = 'HIDE_ERROR';

// initial state
const initialState = {
  count: 0,
  loading: false,
  error: false,
}

// action creator
// const increment = (number) => {
//   return {
//     type: 'INCREMENT',
//     payload: number
//   }
// }
const increment = (number) => ({
  type: INCREMENT,
  payload: number
});

const decrement = (number) => ({
  type: DECREMENT,
  payload: number
});

const hideLoading = () => ({
  type: HIDE_LOADING
})

const showLoading = () => ({
  type: SHOW_LOADING
})

const showError = () => ({
  type: SHOW_ERROR
})

const hideError = () => ({
  type: HIDE_ERROR
})

// reducer
function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload
      }
    case HIDE_LOADING:
      return {
        ...state,
        loading: false
      }
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case SHOW_ERROR:
      return {
        ...state,
        error: true
      }
    case HIDE_ERROR:
      return {
        ...state,
        error: false
      }
    default:
      return state;
  }
}

function UseReducer() {
  // const [count, setCount] = React.useState(0);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(false);
  const [{ count, loading, error }, dispatch] = React.useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch(showLoading());

    dispatch(increment(1));

    setTimeout(() => {
      dispatch(hideLoading());
    }, 500)
  }

  function handleDecrement() {
    dispatch(showLoading());

    dispatch(decrement(2));

    setTimeout(() => {
      dispatch(hideLoading());
    }, 500)
  }

  useEffect(() => {
    if (count < 0) {
      dispatch(showError());
    } else {
      dispatch(hideError());
    }
  }, [count])

  return (
    <div>
      
      <Button 
        text="Increment" 
        handleClick={handleIncrement}
      />
      <p>{count}</p>
      <Button 
        text="Decremenet" 
        handleClick={handleDecrement}
      />

      <br />

      {loading && <p>Loading...</p>}

      {error && <p>Count cannot be less than 0</p>}

    </div>
  )
}

export default UseReducer

// click increment -> show loading  -> + 1
// click decrement -> show loading  -> - 1
// if count < 0 -? error