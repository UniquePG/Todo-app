import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext'

const TodoList = () => {

    const { todoList, setTodoList} = useContext(TodoContext)

  return (
    <div>
        {
            todoList.length > 0 && 
            todoList.map( (todo)=> <Todo 
                                        key={todo.id} 
                                        id={todo.id}
                                        isFinished={todo.finished} 
                                        todoData={todo.todoData}
                                        changeFinished={(isFinished)=> {
                                            console.log("isFinished", isFinished);
                                            const updatedList = todoList.map((t) => {
                                                if(t.id === todo.id){
                                                    todo.finished = isFinished
                                                }

                                                return t;
                                            })

                                            setTodoList(updatedList)
                                        }}
                                        
                                        onDelete={()=> {
                                            const updatedList = todoList.filter(t => t.id != todo.id)

                                            setTodoList(updatedList)
                                        }}

                                        onEdit={(todoText)=> {
                                            const updatedList = todoList.map((t) => {
                                                if(t.id === todo.id){
                                                    todo.todoData = todoText
                                                }

                                                return t;
                                            })

                                            setTodoList(updatedList)
                                        }}
                                        />)
        }
    </div>
  )
}

export default TodoList