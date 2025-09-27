const route = require('express').Router();

route.get('/',(req,res)=>{
    res.json({
        message: "Home Page"
    })
})

const incomeRoutes = require('./income');
const expenseRoutes = require('./expense');
route.use('/incomes',incomeRoutes);
route.use('/expenses',expenseRoutes);

module.exports = route;