// import constants
import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "../Constants/action_consts";


// define our action creators(function) -> action object ---> action creators

export const addTodo = ( inputText ) => ( { type: ADD_TODO, payload: { todoData: inputText} }  );
export const finishedTodo = (todo, isFinished )=> ( { type: FINISH_TODO, payload: { todo, isFinished } } )
export const deleteTodo = ( todo )=> ( { type: DELETE_TODO, payload: { todo } } )
export const editTodo = (todo, newTodoText)=> ( { type: EDIT_TODO, payload: { todo, newTodoText } } )
