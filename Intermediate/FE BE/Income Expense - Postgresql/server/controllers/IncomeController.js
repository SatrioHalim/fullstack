const { where } = require('sequelize');
const {income} = require('../models')
class IncomeController {
    static getIncomes(req,res){
        income.findAll()
        .then(incomes=>{
            res.json(incomes)
        })
        .catch(err=>{
            res.json(err);
        })
    }
    static add(req,res){
        const {name,total} = req.body;

        income.create({
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
        income.destroy({
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

        income.update({
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

module.exports = IncomeController;