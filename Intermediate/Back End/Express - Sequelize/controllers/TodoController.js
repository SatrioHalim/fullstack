const { where } = require('sequelize');
const {todo} = require('../models');

class TodoController {

    static getTodos(req,res){
        todo.findAll({
            // Kalau mau kasih kondisi atau validasi bisa kayak gini
            // where: {
            //     id:1
            // }

            // Kalau mau diurutkan bisa kayak gini 
            // ASC = ascending (dari kecil ke besar)
            // DESC = descending (dari besar ke kecil)
            // order: [
            //     ['id', 'DESC']
            // ]            
        })
        .then(todos => {
            res.json(todos);
        })
        .catch(err=>{
            res.json(err);
        })
    }

    static addTodo(req,res){
        const {task, status} = req.body;

        todo.create({
            task, status
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
        
    }

    static findById(req,res){
        // "+" convert string to number
        let id = +req.params.id;
        todo.findByPk(id)
        .then(result=>{
            // validasi kalau data ga ketemu
            if(!result){
                res.json("Data not found");
            } else {
                res.json(result);
            }
        }).catch(err => {
            res.json(err);
        })
    }

    // delete
    static deleteTodo(req,res){
        let id = +req.params.id;
        todo.destroy({
            where: {id}
        })
        .then(result=>{
            if(result === 0){
                res.json({
                    message : `Todo with id ${id} not found`
                });
            } else {
                res.json({
                    message : `Todo with id ${id} success to delete`
                });
            }
        })
        .catch(err=>{
            res.json(err);
        })
    }

    // update
    static updateTodo(req,res){
        let id = +req.params.id;
        const {task, status} = req.body;

        todo.update({
            task, 
            status: Boolean(status) // karena status itu boolean jadi harus di convert dulu
        },{
            where: {id}
        })
        .then(result=>{
            if(result[0] === 0){
                res.json({
                    message : `Todo with id ${id} not found or data is the same`
                });
            } else {
                res.json({
                    message : `Todo with id ${id} success to update`
                });
            }
        })
        .catch(err=>{
            res.json(err);
        })
    }
}

module.exports = TodoController;