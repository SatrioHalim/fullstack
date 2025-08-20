class TodoController {
    static getTodos(req,res){
        res.send('Main page Todos');
    }

    static addTodo(req,res){
        res.send('Add Todo Page');
    }
}

module.exports = TodoController;