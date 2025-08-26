const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

// biar bisa request body nya kebaca pake JSON di Postman
app.use(express.json());
// biar bisa request body pake x-www-form-urlencoded di Postman
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
