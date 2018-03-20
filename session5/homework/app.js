const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');

const fileController = require('./fileController');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {

  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let id = Math.floor(Math.random() * questionList.length)
  let question = questionList[id];
  // console.log(questionList.length);

  if (questionList.length > 0) {
    console.log(questionList);
    res.render('showAsk', {
      arr: questionList,
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

app.post('/', (req, res) => {
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
  }

  // console.log(questionList);
  fileController.writeFile('./data.json', questionList, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/question/' + id);
});


app.get('/ask', (req, res) => {
  res.render('ask');
});

app.post('/ask', (req, res) => {
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

app.get('/question/:id', (req, res) => {
  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let question = questionList[req.params.id - 1];
  res.render('question', {
    question: question.questionContent,
    yesAnswer: question.yes,
    noAnswer: question.no
  });
})


app.use(express.static(__dirname + '/static'));


app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App is start at port 8080');
});
