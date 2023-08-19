import React, { useContext, useState } from 'react'
import todoDespatchContext from '../../Context/todoDespatchContext'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Actions/todoActions'

const AddTodo = ({ addTodo }) => {
  
  // const dispatch = useDispatch();   // this is the dispatch method provided by react-redux


    const [inputText, setInputText] = useState('')

    // const { dispatch } = useContext(todoDespatchContext);


  return (
    <div>
        
        <input 
            type='text'
            placeholder='Add your todo...'
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />

        <button onClick={()=>{ 
                // dispatch(addTodo(inputText)) 

                addTodo(inputText);
                setInputText('')
            }}> Add </button>

    </div>
  )
}

export default AddTodo