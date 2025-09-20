import React,{useState,useEffect} from "react";
import axios from "axios";

const Expense = () => {
    const [expenses, setExpenses] = useState([]);
    const getExpenses = () => {
        axios({
            method: "GET",
            url: "http://localhost:3000/expense"
        })
        .then(expenses => {
            setExpenses(expenses.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getExpenses();
    },[]);

    return(
        <div className="expense-list">
            <div className="expense-heading">
                <h3>Expense List</h3>
            </div>
            <div className="expense-items">
                {
                    expenses.length !==0 ? 
                    expenses.map(expense => {
                        return (
                            <div className="card-item">
                                <div className="item-left">
                                    <h4>{expense.name}</h4>
                                    <p>Rp. {expense.amount}</p>
                                </div>
                                <div className="item-right">
                                    <button>Delete</button>
                                </div>
                            </div>
                        )
                    }) : <p>There is No Expense</p>
                }
            </div>
        </div>
    )
}

export default Expense;