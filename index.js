const express = require('express')
const app = express()
const port = 5000

const mongooes = require('mongoose')
mongooes.connect('mongodb+srv://reactdbTest:reputer2021@mongodbtest.kjcuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world!'))
app.listen(port, () => console.log('Example app listening on port ${port}!'))
