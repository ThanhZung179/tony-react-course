import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducer
import { appReducer } from '../reducers/app.reducer';
import { todoReducer } from '../reducers/todo.reducer';

// combine reducer
const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

const store = createStore(rootReducer,  composeWithDevTools(
  applyMiddleware(thunk)
))

export default store;