import React from "react";

const InputForm = () => {
    return (
        <div className="input-form">
            <div className="form-item">
                <label>Transaction Name :</label>
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