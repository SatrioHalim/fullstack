const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('This is the home page')
})

// Route untuk endpoint todo
const todoRoutes = require('./todo.js')
route.use('/todos', todoRoutes)

route.get('/items', (req,res)=> {
    res.send('Cart Page with items added');
})

module.exports = route