const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
// const fileController = require('../fileController');
const questionController = require('../controllers/questionController.js');

//-----------------------------------------------------------------------------

Router.get('/:id', (req, res) => {
  try {
    questionController.loadData((result) => {
      let question = result.questionContent;
      res.render('question', {
        question: result.questionContent,
        yesAnswer: result.yes,
        noAnswer: result.no,
        percentYes: Math.round((result.yes/(result.yes + result.no))*100),
        percentNo: Math.round((result.no/(result.yes + result.no))*100),

      });
    });
  } catch (ex) {
    console.log(ex);
  }
  // let questionList = [ ...fileController.readFileSync('./data.json') ];
  // let question = questionList[req.params.id - 1];

})

//-----------------------------------------------------------------------------
Router.post('/:id', (req, res) => {
  try {
    questionController.loadData((result) => {
      if (req.body.other) {
        res.redirect('/');
        return;
      }
    });
  } catch (ex) {
    console.log(ex);
  }

})
module.exports = Router;
