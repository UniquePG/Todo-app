
import { useReducer } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'

import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext'
import todoReducer from './Reducer/todoReducer'
import TodoDespatchContext from './Context/todoDespatchContext'



function App() {

//   const [todoList, setTodoList] = useState([
//     {id: 1, todoData: "todo 1", finished: false},
//     {id: 2, todoData: "todo 2", finished: true}
// ])


    const [todoList, dispatch] = useReducer(todoReducer, [])  // we have to pass our reducer(todoReducer) and inition state[]

  return (
    <TodoContext.Provider value={{todoList}}>

      <TodoDespatchContext.Provider value={{dispatch}}>

          <AddTodo />

          <TodoList />

      </TodoDespatchContext.Provider>

     </TodoContext.Provider>
  )
}

export default App
