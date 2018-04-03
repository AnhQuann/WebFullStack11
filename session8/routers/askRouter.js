const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController.js');

//-----------------------------------------------------------------------------

Router.get('/', (req, res) => {
  res.render('ask');
});

Router.post('/', (req, res) => {
  try {
    questionController.addQuestion(req.body.question, function(err, doc) {
      if (err) console.log(err);
      else {
        res.redirect('/question/'+ doc._id)
      }
    });
  } catch (ex) {
    console.log(ex);
  }
})

//-----------------------------------------------------------------------------

module.exports = Router;
