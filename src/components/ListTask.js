import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task'; 

import './ListTask.css'


//mapping all Tasks inputed in one component named TaskList

const ListTask = () => {

  const todoList = useSelector(state=>state.todos)
  const filtred = useSelector(state=>state.filter)

  const showing = (todoList,filtred)=> {
      if (filtred==="done") {
        return todoList.map(todo=>todo.done===true)
      } else if  (filtred==="undone") {
        return todoList.map(todo=>todo.done===false)
  } else if (filtred==="all") { return todoList}}

  const todos = showing(todoList,filtred)

  return (
     <div className='todo-container'>
         {todos.map((task) => (
             <Task todo ={task} description ={task.description} done={task.done} id={task.id} />
         ))}
     </div>
 );
}

export default ListTask