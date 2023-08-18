import React, { useContext, useState } from 'react'
import todoDespatchContext from '../../Context/todoDespatchContext'

const AddTodo = () => {

    const [inputText, setInputText] = useState('')

    const { dispatch } = useContext(todoDespatchContext);

  return (
    <div>
        
        <input 
            type='text'
            placeholder='Add your todo...'
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />

        <button onClick={()=>{ 
                dispatch({ type: 'add_todo', payload: { todoData: inputText} }) 
                setInputText('')
            }}> Add </button>

    </div>
  )
}

export default AddTodo