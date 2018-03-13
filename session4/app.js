const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

// app.get('/static/style.css', (req, res)=>{
//   res.sendFile(__dirname + '/static/style.css');
// });

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App is start at port 8080');
});
