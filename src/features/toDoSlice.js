import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from 'uuid'


const toDoSlice = createSlice ({
    name : "todos",
    initialState : [],
    reducers: {
        savetodo : (state,action)=>{
            const newTodo ={
                id : uuidv4(),
                description : action.payload.description,
                done : false
            }
            state.push(newTodo)
        },
        toggledone : (state,action) => {
            const index = state.findIndex((todo)=> todo.id===action.payload.id)
            state[index].done=action.payload.done
        },
        deletetodo :  (state,action) =>{
            return state.filter(todo => todo.id !== action.payload.id);
        },
        filtertodo : (state) => {
            return  state.filter(todo => todo.done === true);
        },
        edittodo : (state,action)=> {
           
        }
    }
}
);
export const {savetodo,
            toggledone,
            deletetodo,
            filtertodo, edittodo}=toDoSlice.actions

export default toDoSlice.reducer

