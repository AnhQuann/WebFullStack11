const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');

//-----------------------------------------------------------------------------

Router.get('/', (req, res) => {

  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let id = Math.floor(Math.random() * questionList.length)
  let question = questionList[id];
  // console.log(questionList.length);

  if (questionList.length > 0) {
    res.render('showAsk', {
      // arr: questionList,
      question: question.questionContent,
      id: question.id,
    })
  } else {
    res.render('showAsk', {
      question: '<h1>Not found any question</h1>',
      id: question.id,
    })
  }
});

// ----------------------------------------------------------------------------
Router.post('/', (req, res) => {
  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let id = req.body.id;
  let question = questionList[id];

  // console.log(questionList);

  if (req.body.yes) {
    questionList.forEach(function(el){
      if (el.id == id) {
        el.yes += 1
      }
    })
  } else if (req.body.no) {
    questionList.forEach(function(el){
      if (el.id == id) {
        el.no += 1
      }
    })
  } else if (req.body.other) {
    res.redirect('/');
  }

  // console.log(questionList);
  fileController.writeFile('./data.json', questionList, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/question/' + id);
});

//-----------------------------------------------------------------------------

module.exports = Router;
