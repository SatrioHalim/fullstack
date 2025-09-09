import React from "react";

function Task(props){
    const {task, status} = props.todo;
    
    function statusConverter(status){
        if(status === false) return "Not Completed";
        else return "Completed";
    }

    return (
        <div>
            <h1>Task : {task}</h1>
            <p>Status : {statusConverter(status)}</p>
            <hr/>
        </div>
    ) 
}

export default Task;