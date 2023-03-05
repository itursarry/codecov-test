const express = require('express')
const app = express()
const port = 3000

var indexRouter = require('./src/routes/index');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
