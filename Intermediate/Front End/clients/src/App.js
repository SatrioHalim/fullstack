import './App.css';
import Task from './components/Task'; 
import React,{useState} from 'react';
import axios from 'axios';

function App() {

  // profile sama setProfile disini mirip2 kaya setter getter di oop
  const [todos, setTodos] = useState([]);

  function getTodos(){
    // console.log("getTodos dipanggil");
    axios({
      method: 'GET',
      url: 'http://localhost:3000/todos'
    })
    .then(todos=>{
      // console.log(todos.data);
      setTodos(todos.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <button onClick={()=>getTodos()}>Get Todos</button>
      {/* .map ngembalikan array baru */}
      {todos.map(todo => {

        return(
          <Task todo={todo}></Task>
        )
      })}
      
    </div>
  );
}

export default App;
