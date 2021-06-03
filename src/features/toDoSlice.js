import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from 'uuid'

//todSlice to gather all reducers and actions 

const toDoSlice = createSlice ({
    name : "todos",
    initialState: [],
    
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
        edittodo : (state,action)=> {
            const newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
        },
       
    }
},
{ name : 'filter',
initialState: 'all',
reducers :{
    filtertodo : (state,action)=>{
        return {...state, filter : action.payload}
    }

}


}
);
export const {savetodo,
            toggledone,
            deletetodo , edittodo}=toDoSlice.actions
export const {filtertodo} = toDoSlice.actions

export default toDoSlice.reducer

