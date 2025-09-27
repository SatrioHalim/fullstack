const {expense} = require('../models')
class ExpenseController {
    static getExpenses(req,res){
        expense.findAll()
        .then(expenses=>{
            res.json(expenses)
        })
        .catch(err=>{
            res.json(err);
        })
    }
    static add(req,res){
        const {name,total} = req.body;

        expense.create({
            name,total
        })
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            res.json(err);
        })
    }
    static delete(req,res){
        const id = +req.params.id;
        expense.destroy({
            where:{
                id
            }
        })
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            res.json(err);
        })
    }
    static update(req,res){
        const id = +req.params.id; 
        const {name,total} = req.body;

        expense.update({
            name,total
        },{
            where:{
                id
            }
        })
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            res.json(err);
        })
    }
}

module.exports = ExpenseController;