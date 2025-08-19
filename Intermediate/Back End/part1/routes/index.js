const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('Hello World!')
})

route.get('/assalamualaikum', (req,res)=> {
    res.send('Waalaikumsalam habibi');
})
route.get('/bio', (req,res)=> {
    res.send('Wassup, I am a Fullstack Developer');
})
route.get('/catfact', (req,res)=> {
    res.send('cats sleep for 70% of their lives');
})

module.exports = route