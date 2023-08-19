import { createStore, combineReducers } from 'redux';

//import our reducer
import todoReducer from './Reducer/todoReducer.js'

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;