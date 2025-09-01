const todoRoute = require('express').Router();
const TodoController = require('../controllers/TodoController');

// GET METHOD
todoRoute.get('/', TodoController.getTodos);

// POST METHOD -> create
todoRoute.post('/add', TodoController.addTodo);

// GET METHOD -> find by id
todoRoute.get('/find/:id', TodoController.findById);

todoRoute.delete('/delete/:id', TodoController.deleteTodo);

todoRoute.put('/update/:id', TodoController.updateTodo);

module.exports = todoRoute;