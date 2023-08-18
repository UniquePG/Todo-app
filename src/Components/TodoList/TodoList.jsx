import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = () => {

    const todolist = [
        {id: 1, todoData: "todo 1"},
        {id: 2, todoData: "todo 2"}
    ]

  return (
    <div>
        {
            todolist.length > 0 && 
                todolist.map( (todo)=> <Todo key={todo.id} todoData={todo.todoData} />)
        }
    </div>
  )
}

export default TodoList