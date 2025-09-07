import React from "react";

function Heading(props){
    const {name, age} = props;
    
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p>Age : {age}</p>
            <hr/>
        </div>
    ) 
}

export default Heading;