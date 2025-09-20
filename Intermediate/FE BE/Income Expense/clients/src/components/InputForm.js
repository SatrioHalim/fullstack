import React,{useState} from "react";

const InputForm = () => {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState(0);
    
    
    return (
        <div className="input-form">
            <div className="form-item">
                <label>Transaction Name :</label>
                <input type="text"></input>
            </div>
            <div className="form-item">
                <label>Amount :</label>
                <input type="text"></input>
            </div>
            <div className="submit-form">
                <button>Add Income</button>
                <button>Add Expense</button>
            </div>
            
        </div>
    )
}

export default InputForm;