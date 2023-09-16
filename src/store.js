import { createStore, combineReducers } from 'redux';

//import our reducer
// import todoReducer from './Reducer/todoReducer.js'
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slices/todoSlice'


// const reducers = combineReducers({todo: todoReducer});

// const store = createStore(reducers);

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: true
})

export default store;