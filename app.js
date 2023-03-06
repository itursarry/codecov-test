const express = require('express')
const app = express()

var router = express.Router();
const port = 3000

var indexRouter = require('./src/routes/index');


app.use('/', router.get('/', indexRouter));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
