// DOM Button
let btnIncome = document.getElementById('btnIncome');
let btnExpense = document.getElementById('btnExpense');


// Global Variable
let transactions = {
    income : [
        {
            id: 1,
            transaction: 'Gaji',
            balance: 5000000
        },
        {
            id: 2,
            transaction: 'Bonus',
            balance: 1000000
        }
    ],
    expense : [
        {
            id: 1,
            transaction: 'Makan',
            balance: 200000
        },
        {
            id: 2,
            transaction: 'Transportasi',
            balance: 150000 
        }
    ]
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
    getTransaction();
    balanceCount();
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
    getTransaction();
    balanceCount();
    alert(`"${valueTransactionName}" dengan saldo ${valueBalance} telah ditambahkan ke daftar pengeluaran`);
    console.log(transactions);
}

function getTransaction(){
    // tBody table
    let tBodyInc = document.getElementById('tBody-inc');
    let tBodyExp = document.getElementById('tBody-exp');
    tBodyInc.innerHTML = '';
    tBodyExp.innerHTML = '';
   
    transactions.income.forEach((inc) => {
        tBodyInc.innerHTML += `<tr>
            <td>${inc.id}</td>
            <td>${inc.transaction}</td>
            <td>${inc.balance}</td>
        </tr>`
    });

    transactions.expense.forEach((exp) => {
        tBodyExp.innerHTML += `<tr>
            <td>${exp.id}</td>
            <td>${exp.transaction}</td>
            <td>${exp.balance}</td>
        </tr>` 
    });
}

function balanceCount(){
    let balanceIncome = 0;
    let balanceExpense = 0;

    transactions.income.forEach((inc) => {
        // tanda + untuk mengkonversi string ke number
        balanceIncome += +inc.balance;
    });

    transactions.expense.forEach((exp) => {
        balanceExpense += +exp.balance;
    });

    let deviation = balanceIncome - balanceExpense;
    
    let saldoValue = document.getElementById('saldo-value');
    saldoValue.innerHTML = deviation;

    // console.log(`Total Pemasukan: ${balanceIncome}`);
    // console.log(`Total Pengeluaran: ${balanceExpense}`);
    // console.log(`Selisih: ${deviation}`);
}

// Add Event Listener
btnIncome.addEventListener('click', incomeHandler);
btnExpense.addEventListener('click', expenseHandler);
getTransaction();
balanceCount();
