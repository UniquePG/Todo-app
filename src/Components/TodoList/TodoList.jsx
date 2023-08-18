import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext'
import todoDespatchContext from '../../Context/todoDespatchContext';

const TodoList = () => {

    const { todoList} = useContext(TodoContext);

    const { dispatch } = useContext(todoDespatchContext);


    function onFinished(todo, isFinished){
        
        // const updatedList = todoList.map((t) => {
        //     if(t.id === todo.id){
        //         todo.finished = isFinished
        //     }

        //     return t;
        // })

        // setTodoList(updatedList)

        dispatch({ type: 'finish_todo', payload: { todo, isFinished } }) 

    }

    function onDelete(todo){
        // const updatedList = todoList.filter(t => t.id != todo.id)

        // setTodoList(updatedList)
        
        dispatch({ type: 'delete_todo', payload: { todo } }) 
    }


    function onEdit(todo, newTodoText){
        // const updatedList = todoList.map((t) => {
        //     if(t.id === todo.id){
        //         todo.todoData = newTodoText
        //     }

        //     return t;
        // })

        // setTodoList(updatedList)


        dispatch({ type: 'edit_todo', payload: { todo, newTodoText } })   
    }

  return (
    <div>
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