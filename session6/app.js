const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const Router = express.Router();

//-----------------------------------------------------------------------------

const showAskRouter = require('./routers/showAskRouter');
const askRouter = require('./routers/askRouter');
const questionRouter = require('./routers/questionRouter');

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

//-----------------------------------------------------------------------------

app.use(express.static(__dirname + '/public'));

//-----------------------------------------------------------------------------

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App is start at port 8080');
});
