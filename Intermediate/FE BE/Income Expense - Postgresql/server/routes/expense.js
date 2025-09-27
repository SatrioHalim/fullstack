const expenseRoute = require("express").Router();
const ExpenseController = require("../controllers/ExpenseController");

expenseRoute.get('/',ExpenseController.getExpenses);
expenseRoute.post('/',ExpenseController.add);
expenseRoute.delete('/:id',ExpenseController.delete);
expenseRoute.put('/:id',ExpenseController.update);

module.exports = expenseRoute;