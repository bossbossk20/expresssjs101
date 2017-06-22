const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', Todo)
