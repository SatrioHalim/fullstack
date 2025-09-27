import React,{useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

const InputForm = () => {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState(0);
    const URL = "http://localhost:3000";

    const incomeHandler = () => {
        console.log("Income Added");
        axios({
            method: 'POST',
            url: `${URL}/income`,
            data: {
                name,amount: +amount
            }
        })
        .then(result => {
            console.log(result.data);
            Swal.fire({
                title: "Good job!",
                text: "Income added succesfully!",
                icon: "success"
            });
        })
        .catch(err=>{
            console.log(err);  
        })
        
    }

    const expenseHandler = () => {
        console.log("Expense Added");
        axios({
            method: 'POST',
            url: `${URL}/expense`,
            data: {
                name,amount: +amount
            }
        })
        .then(result => {
            console.log(result.data);
            Swal.fire({
                title: "Good job!",
                text: "Expense added succesfully!",
                icon: "success"
            });
        })
        .catch(err=>{
            console.log(err);  
        })
    }
    
    return (
        <div className="input-form">
            <div className="form-item">
                <label>Transaction Name :</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div className="form-item">
                <label>Amount :</label>
                <input type="text" onChange={(e)=>{setAmount(e.target.value)}}></input>
            </div>
            <div className="submit-form">
                <button onClick={()=>{incomeHandler()}}>Add Income</button>
                <button onClick={()=>{expenseHandler()}}>Add Expense</button>
            </div>
            
        </div>
    )
}

export default InputForm;