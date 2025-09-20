import React,{useState, useEffect, use} from "react";
import axios from "axios";

const Income = () => {
    const [incomes, setIncomes] = useState([]);
    const getIncomes = () => {
        axios({
            method: "GET",
            url: "http://localhost:3000/income"
        })
        .then(incomes => {
            setIncomes(incomes.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getIncomes();
    },[]);

    return(
        <div className="income-list">
            <div className="income-heading">
                <h3>Income List</h3>
            </div>
            <div className="income-items">
                {
                    incomes.length !==0 ? 
                    incomes.map(income => {
                        return (
                            <div className="card-item">
                                <div className="item-left">
                                    <h4>{income.name}</h4>
                                    <p>Rp. {income.amount}</p>
                                </div>
                                <div className="item-right">
                                    <button>Delete</button>
                                </div>
                            </div>
                        )
                    }) : <p>There is No Income</p>
                }
                
            </div>
        </div>
    )
}

export default Income;