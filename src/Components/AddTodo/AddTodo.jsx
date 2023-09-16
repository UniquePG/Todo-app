import "./addtodo.css"

import React, { useContext, useState } from 'react'
import todoDespatchContext from '../../Context/todoDespatchContext'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Actions/todoActions'

const AddTodo = ({ addTodo }) => {
  
  // const dispatch = useDispatch();   // this is the dispatch method provided by react-redux


    const [inputText, setInputText] = useState('')

    // const { dispatch } = useContext(todoDespatchContext);


  return (
    <div className="todo-container">

    <div className="input-container">
        
        <input className="todo-input"
            type='text'
            placeholder='Add your todo...'
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />

        <button  className="add-button" 
          onClick={()=>{ 
                // dispatch(addTodo(inputText)) 
                // addTodo(inputText)
                
                addTodo({todoData: inputText});
                setInputText('')
            }}> Add </button>

    </div>
  </div>
  )
}

export default AddTodo