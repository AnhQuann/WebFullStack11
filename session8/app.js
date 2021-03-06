const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Router = express.Router();

//-----------------------------------------------------------------------------

const showAskRouter = require('./routers/showAskRouter');
const askRouter = require('./routers/askRouter');
const questionRouter = require('./routers/questionRouter');
const questionController = require('./controllers/questionController.js');


//-----------------------------------------------------------------------------

const fileController = require('./fileController');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//-----------------------------------------------------------------------------

app.use('/', showAskRouter);
app.use('/ask', askRouter);
app.use('/question/', questionRouter);
app.post('/testajax', (req, res)=>{
  res.send("Hihi");
});

app.post('/getquestion', (req, res) => {
  questionController.loadData((question, err) => {
    if (err) console.log(err);
    console.log("tét ",question);
    res.json(question);
  });
});

//-----------------------------------------------------------------------------

app.use(express.static(__dirname + '/public'));

//-----------------------------------------------------------------------------

mongoose.connect('mongodb://localhost/FirstConnect', (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connect Success!");
})

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App is start at port 8080');
});
