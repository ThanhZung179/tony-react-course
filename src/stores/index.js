import { combineReducers, createStore } from "redux";

// reducer
import { appReducer } from '../reducers/app.reducer';
import { todoReducer } from '../reducers/todo.reducer';

// combine reducer
const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

const store = createStore(rootReducer)

export default store;