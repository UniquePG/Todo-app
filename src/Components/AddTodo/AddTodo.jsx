import React, { useState } from 'react'

const AddTodo = ({updateTodo}) => {

    const [inputText, setInputText] = useState('')

  return (
    <div>
        
        <input 
            type='text'
            placeholder='Add your todo...'
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />

        <button onClick={()=>{ 
                updateTodo(inputText)
                setInputText('')
            }}>Add</button>

    </div>
  )
}

export default AddTodo