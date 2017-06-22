const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/todolist101')

const Todo = require('./schema/todo.schema')

app.get('/showTodoLists', (req , res) => {
  Todo.find({}).then((todos) => {
    res.send(todos)
  })
})

app.post('/addTodo', (req, res) => {
  console.log(req.body)
  let obj = new Todo(req.body)
  obj.save((err, obj) => {
    if (err) {
      res.send(err)
    } else {
      res.send(obj)
    }
  })
})

app.listen(3000)
