const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController.js');

//-----------------------------------------------------------------------------

Router.get('/:id', (req, res) => {

  questionController.findQuestionById(req.params.id, (err, question)=>{
    if (err) {
      console.log(err);
    }
    else {
      res.render('question', {
        question: question.questionContent,
        yesAnswer: question.yes,
        noAnswer: question.no,
        percentYes: Math.round((question.yes/(question.yes + question.no))*100),
        percentNo: Math.round((question.no/(question.yes + question.no))*100)
      });
    }
  });
})

//-----------------------------------------------------------------------------
Router.post('/:id', (req, res) => {
  if (req.body.other) {
    res.redirect('/');
  }
})
module.exports = Router;
