import './App.css';
import Addtask from './components/Addtask';

import {useDispatch} from 'react-redux'
import ListTask from './components/ListTask';
import { filtertodo} from './features/toDoSlice';





function App() {

  const dispatch = useDispatch()

  const handleDoneButton =()=>{
    dispatch(filtertodo({
        done:true
    }))
}




  return (
    <div className="App">
    <div className="container">
      <div className="buttons">
        <button className="done-button" onClick={handleDoneButton} > Done</button>
        </div>
   
    <ListTask></ListTask>
      <div className="todo-container">

      <Addtask></Addtask>

      
      </div>
      
      </div>
    </div>
  );
}

export default App;
