const incomeRoute = require("express").Router();
const IncomeController = require("../controllers/IncomeController");

incomeRoute.get('/',IncomeController.getIncomes);
incomeRoute.post('/',IncomeController.add);
incomeRoute.delete('/:id',IncomeController.delete);
incomeRoute.put('/:id',IncomeController.update);

module.exports = incomeRoute;