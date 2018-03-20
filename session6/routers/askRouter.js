const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');

//-----------------------------------------------------------------------------

Router.get('/', (req, res) => {
  res.render('ask');
});

Router.post('/', (req, res) => {
  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let id = questionList.length + 1;
  let newQuestion = {
    id: id,
    questionContent: req.body.question,
    yes: 0,
    no: 0
  };
  questionList.push(newQuestion);
  fileController.writeFile('./data.json', questionList, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/question/' + id);
  });
})

//-----------------------------------------------------------------------------

module.exports = Router;
