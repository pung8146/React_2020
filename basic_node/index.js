const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pung8146:qwe123@reactstudy.kq8wb.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요 ~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})