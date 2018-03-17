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
  res.render('home', {
    number: {
      a: Math.random()*2001 - 1000
    },
    htmlData: '<h2>Render HTML</h2>'
  });
});

app.get('/ask', (req, res) => {
  res.render('ask');
});

app.post('/ask', (req, res) => {
  let questionList = [ ...fileController.readFileSync('./data.json') ];
  let id = questionList.length + 1;
  let newQuestion = {
    id: id,
    questionContent: req.body.question
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
    question: question.questionContent
  });
})
// app.get('/', (req, res)=>{
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(__dirname + '/static'));


app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App is start at port 8080');
});
