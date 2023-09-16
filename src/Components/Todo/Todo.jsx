import "./todo.css";
import React, { useState } from 'react';

const Todo = ({todoData, isFinished, changeFinished, onDelete}) => {

    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

  return (
    <div className="todo-item">
        <input className="checkbox" type='checkbox' checked={finished} onChange={(e)=> {
                                                    setFinished(e.target.checked)
                                                    changeFinished(e.target.checked)
                                                    }} />

        { (isEditing) ? <input className="edit-input" type='text' value={editText} onChange={(e)=> setEditText(e.target.value)} />  : <span className="todo-text"> { editText}</span> }

        <button className="edit-button" 
            onClick={()=> {
            setIsEditing(!isEditing);
            setEditText(editText);

        }}> 
            { (isEditing) ? 'Save' : 'Edit'}

        </button>

        <button className="delete-button" onClick={onDelete}> Delete</button>
    </div>
  )
}

export default Todo