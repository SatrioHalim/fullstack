// DOM Button
let btnIncome = document.getElementById('btnIncome');
let btnExpense = document.getElementById('btnExpense');

// tBody table
let tBodyInc = document.getElementById('tBody-inc');
let tBodyExp = document.getElementById('tBody-exp');

function incomeHandler() {
    // console.log('Income button clicked');
    alert('Income button clicked');
}
function expenseHandler() {
    // console.log('Expense button clicked');
    alert('Expense button clicked');
}

// Add Event Listener
btnIncome.addEventListener('click', incomeHandler);
btnExpense.addEventListener('click', expenseHandler);
