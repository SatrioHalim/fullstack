const {todo} = require('../models');

class TodoController {
    static getTodos(req,res){
        todo.findAll()
        .then(todos => {
            res.json(todos);
        })
        .catch(err=>{
            res.json(err);
        })
    }

    static addTodo(req,res){
        res.json({
            message: 'Todo item added successfully',
            status:'success'
        });
    }
}

module.exports = TodoController;