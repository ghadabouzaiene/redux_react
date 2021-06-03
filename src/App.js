import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import { Filtre } from './components/Filter';


//App is the final displayed component, but also we used here a filter to kinda sort tasks by done and undone actions.


function App() {

  





  return (
    <div className="App">
    <div className="container">
        <img src="https://todolist.org.uk/wp-content/uploads/2017/12/todolistlogo-1.png" alt ="logo"></img>
      <div className="buttons">
      <Filtre></Filtre>
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
