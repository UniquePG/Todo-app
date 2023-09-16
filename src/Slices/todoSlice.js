
import { createSlice } from '@reduxjs/toolkit'

// first define initial value
const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=> {        // here state is todo
            let todoText = action.payload.todoData;
        // we dont need to return new state we can just push(because we use array state) into our state
            state.todoList.push ( {id: state.todoList.length + 1,  todoData: todoText, finished: false} )

        },

        editTodo: (state, action)=> {
            let todo = action.payload.todo;
            let todoText = action.payload.newTodoText;

            state.todoList = state.todoList.map((t) => {
                if(t.id === todo.id){
                    t.todoData = todoText
                }

                return t;
            })


        },
        
        deleteTodo: (state, action)=> {
            let todo = action.payload.todo
            state.todoList = state.todoList.filter(t => t.id != todo.id)
    

        },

        finishedTodo: (state, action)=> {
            let todo = action.payload.todo;
            let isFinished = action.payload.isFinished;
    
            state.todoList = state.todoList.map((t) => {
                if(t.id === todo.id){
                    t.finished = isFinished
                }
    
                return t;
            })
        },

    },
});


export const {addTodo, deleteTodo, editTodo, finishedTodo } = todoSlice.actions;
export default todoSlice.reducer;




