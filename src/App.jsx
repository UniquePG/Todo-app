
import { useReducer } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'

import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext'
// import todoReducer from './Reducer/todoReducer'
import TodoDespatchContext from './Context/todoDespatchContext'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
// import { addTodo, deleteTodo, editTodo, finishedTodo } from './Actions/todoActions'
import todoReducer, { addTodo, editTodo, deleteTodo, finishedTodo } from './Slices/todoSlice'



function App() {

//   const [todoList, setTodoList] = useState([
//     {id: 1, todoData: "todo 1", finished: false},
//     {id: 2, todoData: "todo 2", finished: true}
// ])


    // const [todoList, dispatch] = useReducer(todoReducer, [])  // we have to pass our reducer(todoReducer) and inition state[]


//! 3rd
    const dispatch = useDispatch();   // this is the dispatch method provided by react-redux

    const actions = bindActionCreators({  addTodo, deleteTodo, editTodo, finishedTodo }, dispatch)
  

  return (

    <>
      <AddTodo addTodo={actions.addTodo} />

      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} finishedTodo={actions.finishedTodo} />

    </>
  )
}

export default App
