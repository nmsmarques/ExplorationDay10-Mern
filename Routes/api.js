const express = require ('express');
const router = express.Router();
const Tasks = require('../models/todo');

router.get('/todos', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Tasks.find({}).sort({'createdAt': 1})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Tasks.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Tasks.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;