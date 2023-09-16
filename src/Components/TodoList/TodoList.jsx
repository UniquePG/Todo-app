import "./todolist.css"

import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext'
import todoDespatchContext from '../../Context/todoDespatchContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, finishedTodo } from '../../Actions/todoActions';


const TodoList = ( { deleteTodo, editTodo, finishedTodo }) => {

    // const dispatch = useDispatch();

    // now we get our state list from selector method
    const todoList = useSelector( (state) => state.todo.todoList)    //* it gives the access of todo(we define in combineReducer)

    console.log(todoList);

    // const { todoList} = useContext(TodoContext);

    // const { dispatch } = useContext(todoDespatchContext);


    function onFinished(todo, isFinished){
       //! 1st 
        // const updatedList = todoList.map((t) => {
        //     if(t.id === todo.id){
        //         todo.finished = isFinished
        //     }

        //     return t;
        // })

        // setTodoList(updatedList)

        //! 2nd
        // dispatch( { type: 'finish_todo', payload: { todo, isFinished } });
        
        //! 3rd
        // dispatch(finishedTodo(todo, isFinished));
        
        //! 4th
        finishedTodo({todo, isFinished})

    }

    function onDelete(todo){

        //! 1st 
        // const updatedList = todoList.filter(t => t.id != todo.id)

        // setTodoList(updatedList)
        
        //! 2nd
        // dispatch( { type: 'delete_todo', payload: { todo } } ); 

        //! 3rd
        // dispatch(deleteTodo(todo)); 

        //! 4th
        deleteTodo({todo});
    }


    function onEdit(todo, newTodoText){

        //! 1st
        // const updatedList = todoList.map((t) => {
        //     if(t.id === todo.id){
        //         todo.todoData = newTodoText
        //     }

        //     return t;
        // })

        // setTodoList(updatedList)

        //! 2nd
        // dispatch({ type: 'edit_todo', payload: { todo, newTodoText } });   

        //! 3rd
        // dispatch(editTodo(todo, newTodoText));
        
        //! 4th
        editTodo({todo, newTodoText})
    }

  return (
    <div className="todo-list">
        {
            todoList.length > 0 && 
            todoList.map( (todo)=> <Todo 
                                        key={todo.id} 
                                        id={todo.id}
                                        isFinished={todo.finished} 
                                        todoData={todo.todoData}
                                        changeFinished={(isFinished)=> onFinished(todo, isFinished) }
                                        
                                        onDelete={()=>  onDelete(todo) }
                                        
                                        onEdit={(todoText)=> onEdit(todo, todoText) }
                                        />)
        }
    </div>
  )
}

export default TodoList