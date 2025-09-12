import React,{useState} from "react";
import axios from "axios";

function Form(){

    const [task,setTask] = useState("");
    const submitHandler = ()=>{
        axios({
            method: 'POST',
            url: 'http://localhost:3000/todos',
            data:{
                task,
                status: false
            }
        })
        .then(result=>{
            console.log(result.data);
            alert("Task added successfully");
        })
        .catch(err=>{
            console.log(err);
            alert("Error adding task");
        })
    }

    return(
        <div className="app-form">
            <div className="form-item">
                <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
            </div>
            <div className="form-item">
                <button onClick={()=>submitHandler()}>+ Add Task</button>
            </div>
        </div>
    )
}

export default Form;