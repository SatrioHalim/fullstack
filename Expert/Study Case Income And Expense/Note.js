const {Income, Expense} = require('./IncomeExpense');
const fs = require('fs');

class Note{
    // constructor(list){
    //     this.list = list || [];
    // }
    // addIncome(name,total){
    //     let income = new Income(name,total,"Income");
    //     this.list.push(income);  
    // }
    // addExpense(name,total){
    //     let expense = new Expense(name,total,"Expense");
    //     this.list.push(expense);
    // }
    // listIncome(){
    //     console.log("List Income : ");
    //     let idx = 1;
    //     this.list.forEach(element => {
    //         if(element.category === "Income"){
    //             console.log(`${idx} ${element.name} , Rp. ${element.total}`);
    //             idx++;
    //         }
    //     });
    // }
    // listExpense(){
    //     console.log("List Expense : ");
    //     let idx = 1;
    //     this.list.forEach(element => {
    //         if(element.category === "Expense"){
    //             console.log(`${idx} ${element.name} , Rp. ${element.total}`);
    //             idx++;
    //         }
    //     });
    // }
    // balance(){
    //     let totalIncome = 0;
    //     let totalExpense = 0;
    //     this.list.forEach(element => {
    //         if(element.category === "Income"){
    //             totalIncome += element.total;
    //         }else{
    //             totalExpense += element.total;
    //         }
    //     });

    //     // Status : plus, minus, balance
    //     let total = totalIncome - totalExpense;
    //     if(total === 0) console.log("Status : Balance");
    //     else if(total > 0) console.log(`Status : Plus Rp. ${total}`);
    //     else console.log(`Status : Minus Rp. ${total}`);
    // }
    static listIncome(){
        let temp = JSON.parse(fs.readFileSync('./data2.json','utf8'));
        let incomes = temp.incomes;
        console.log("List Income : ");
        let idx = 1;
        incomes.forEach(element => {
            const{name,total} = element;
            console.log(`${idx} ${name} , Rp. ${total}`);
            idx++;
        });
    }
    static listExpense(){
        let temp = JSON.parse(fs.readFileSync('./data2.json','utf8'));
        let expenses = temp.expenses;
        console.log("List Expense : ");
        let idx = 1;
        expenses.forEach(element => {
            const{name,total} = element;
            console.log(`${idx} ${name} , Rp. ${total}`);
            idx++;
        });
    }
    static addIncome(name,total){
        let temp = JSON.parse(fs.readFileSync('./data2.json','utf8'));
        let income = new Income(name,total,"Income");
        temp.incomes.push(income);
        // console.log(temp);
        this.save(temp);
    }
    static addExpense(name,total){
        let temp = JSON.parse(fs.readFileSync('./data2.json','utf8'));
        let expense = new Expense(name,total,"Expense");
        temp.expenses.push(expense);
        this.save(temp);
    }
    static balance(){
        let temp = JSON.parse(fs.readFileSync('./data2.json','utf8'));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach(element => {
            totalIncome += element.total;
        });
        temp.expenses.forEach(element => {
            totalExpense += element.total;
        });
        // Status : plus, minus, balance
        let total = totalIncome - totalExpense;
        if(total === 0) console.log("Status : Balance");
        else if(total > 0) console.log(`Status : Plus Rp. ${total}`);
    }
    static save(data){
        fs.writeFileSync('./data2.json',JSON.stringify(data,null,3));
    }
}

module.exports = Note;