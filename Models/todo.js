const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TasksSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  finished: {
    type: String,
    required: [true, 'The todo status, finished if true']
  }
})

//create model for todo
const Tasks = mongoose.model('tasks', TasksSchema);

module.exports = Tasks;