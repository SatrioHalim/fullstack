class TodoController {
    static getTodos(req,res){
        const arrObjects = [
            {
                id:1,
                title: 'Belajar Node.js',
            },{
                id:2,
                title: 'Belajar Express.js',
            },{
                id:3,
                title: 'Belajar Sequelize',
            }
        ]
        res.json(arrObjects);
    }

    static addTodo(req,res){
        res.json({
            message: 'Todo item added successfully',
        });
    }
}

module.exports = TodoController;