const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController.js');

//-----------------------------------------------------------------------------

Router.get('/', (req, res) => {
  res.render('ask');
});

Router.post('/', (req, res) => {
  try {
    questionController.create(req.body.question);
    // questionController.loadAllData((el) => {
    //   console.log(el);
    // });
    id = req.params.id;
    console.log(id);
  } catch (ex) {
    console.log(ex);
  }
})

//-----------------------------------------------------------------------------

module.exports = Router;
