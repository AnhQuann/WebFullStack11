const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');

//-----------------------------------------------------------------------------

Router.get('/:id', (req, res) => {
  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let question = questionList[req.params.id - 1];
  res.render('question', {
    question: question.questionContent,
    yesAnswer: question.yes,
    noAnswer: question.no,
    percentYes: Math.round((question.yes/(question.yes + question.no))*100),
    percentNo: Math.round((question.no/(question.yes + question.no))*100),

  });
})

//-----------------------------------------------------------------------------
Router.post('/:id', (req, res) => {
  if (req.body.other) {
    res.redirect('/');
  }
})
module.exports = Router;
