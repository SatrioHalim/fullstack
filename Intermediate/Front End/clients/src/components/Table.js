import React,{useState,useEffect} from "react";
import axios from "axios";

function Table(){
        
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

    // useEffect agar function di dalamnya dipanggil saat pertama kali component di render
    useEffect(()=>{
        // console.log("useEffect dipanggil");
        getTodos();
    },[])

    // Atau kalau mau ubah boolean ke string bisa pake JSON.stringify(attribute_name)
    return (
        <div className='app-table'>
          <table border='1' cellSpacing={0}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                {
                 todos.map((todo)=>{
                  return(
                    <tr>
                      <td>{todo.id}</td>
                      <td>{todo.task}</td>
                      <td>{
                          todo.status ? "Done" : "In Progress"
                        }</td>
                    </tr>
                  )
                 }) 
                }   
            </tbody>
          </table>
          

      </div>
    ) 
}

export default Table;