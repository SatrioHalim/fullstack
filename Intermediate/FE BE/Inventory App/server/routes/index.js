const route = require('express').Router();

route.get('/', (req, res)=>{
    res.json({
        message : "Home Page"
    })
})

const itemRoutes = require('./item');
route.use('/items', itemRoutes);

module.exports = route;