import React from "react";
import { filtertodo } from "../features/toDoSlice";
import { useDispatch } from "react-redux";
import './Filter.css'



export const Filtre = (todos) => {
  const dispatch = useDispatch();
  const hundleFiltre = (e) => {
    // j'ai changé dispatch(filtertodo(e.target.done))
    dispatch(filtertodo(e.target.id));
  };
  return (
    <div className="todos_filter">
      {/*j'ai ajouté un id*/}
      <li
        id="all"
        style={{
          
          fontFamily:"cursive",
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        All{" "}
      </li>
      <span style={{color:"white" , margin :"10px" ,textAlign :"center" }}>***</span>
      <li
        id="done"
        style={{
          
          fontFamily:"cursive",
          marginLeft: 20,
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        Done{" "}
      </li>
      <span style={{color:"white" , margin :"10px" ,textAlign :"center" }}>***</span>
      <li
        id="undone"
        style={{
         
          fontFamily:"cursive",
          marginLeft: 20,
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        Not-Done{" "}
      </li>
      <span style={{color:"white" , margin :"10px" ,textAlign :"center" }}>***</span>
    </div>
  );
};