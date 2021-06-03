import React from 'react';
  import { filtertodo } from '../features/toDoSlice';
  import {  useDispatch } from "react-redux";
  export const Filtre = (todos) => {
    const dispatch = useDispatch();
    const hundleFiltre=(e)=>{
       
        dispatch(filtertodo(e.target.done))
    }
      return (
          <div className="todos_filter">

              <li   style={{textDecoration:"underline", color:"darkorange", fontWeight:"500"}} 
              onClick ={hundleFiltre}> All </li>
              <li  id="done" style={{textDecoration:"underline", marginLeft:20 , color:"darkorange", fontWeight:"500"}} 
              onClick ={hundleFiltre} > Done </li>
              <li id="undone" style={{textDecoration:"underline", marginLeft:20 , color:"darkorange", fontWeight:"500"}}  
              onClick ={hundleFiltre}> notDone </li>     
          </div>
      )
  }