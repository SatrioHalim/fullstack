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
}

module.exports = TodoController;