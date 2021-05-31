import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import './Task.css'
import {useDispatch} from 'react-redux'
import {toggledone, deletetodo,edittodo} from '../features/toDoSlice'


const Task = ({description,done,id}) => {

    const dispatch = useDispatch()


   

    const handleDone =()=>{
            dispatch(toggledone({
                id : id,
                done:!done,
            }))
    }

    const handleDelete =()=> {
            dispatch(deletetodo({
                id : id 
            }))
    }
    const handleEdit =(e)=> {
        description = e.target.value
        }

    return (
        <div className="task">
            <Checkbox
        checked={done}
        onChange={handleDone}
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
            <p className={done && 'task--done'} >{description}</p>
            <input type='text' onChange={handleEdit}></input>
            <button className="btn" onClick={handleEdit}>Edit</button>
            <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Task

