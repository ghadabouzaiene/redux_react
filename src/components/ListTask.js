import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';
import '../components/ListTask.css'


const ListTask = () => {

    const todoList = useSelector(state=>state.todos)
         return (
            <div className='todo-container'>
                {todoList.map((task) => (
                    <Task description ={task.description} done={task.done} id={task.id} />
                ))}
            </div>
        );
}

export default ListTask
