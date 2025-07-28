// DOM Button
let btnIncome = document.getElementById('btnIncome');
let btnExpense = document.getElementById('btnExpense');

// tBody table
let tBodyInc = document.getElementById('tBody-inc');
let tBodyExp = document.getElementById('tBody-exp');

// Global Variable
let transactions = {
    income : [],
    expense : []
}

// Handle Income Transaction
function incomeHandler() {
    // Input
    let valueTransactionName = document.getElementById('input-transaction-name').value;
    let valueBalance = document.getElementById('input-balance').value;
    let id;

    // Validation for id income
    if(transactions.income.length === 0) {
        id = 1;
    } else {
        id = transactions.income[transactions.income.length - 1].id + 1;
    }
    let tempObj = {
        id,
        transaction : valueTransactionName,
        balance : valueBalance
    }
    transactions.income.push(tempObj);
    alert(`"${valueTransactionName}" dengan saldo ${valueBalance} telah ditambahkan ke daftar pemasukan`);
    console.log(transactions);
}

// Handle Expense Transaction
function expenseHandler() {
    let valueTransactionName = document.getElementById('input-transaction-name').value;
    let valueBalance = document.getElementById('input-balance').value;
    let id;
    
    // Validation for id expense
    if(transactions.expense.length === 0) {
        id = 1;
    } else {
        id = transactions.expense[transactions.expense.length - 1].id + 1;
    }
    let tempObj = {
        id,
        transaction : valueTransactionName,
        balance : valueBalance
    }
    transactions.expense.push(tempObj);
    alert(`"${valueTransactionName}" dengan saldo ${valueBalance} telah ditambahkan ke daftar pengeluaran`);
    console.log(transactions);
}

// Add Event Listener
btnIncome.addEventListener('click', incomeHandler);
btnExpense.addEventListener('click', expenseHandler);
