const todoRoute = require('express').Router();
const TodoController = require('../controllers/TodoController');

// GET METHOD
todoRoute.get('/', TodoController.getTodos);

// POST METHOD -> create
todoRoute.post('/add', TodoController.addTodo);

todoRoute.get('/find/:id', TodoController.findById);

module.exports = todoRoute;