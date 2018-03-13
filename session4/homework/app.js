const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.get('/frontendpractice', (req, res)=>{
  res.sendFile(__dirname + '/frontendpractice.html');
});

app.get('/flexbox', (req, res)=>{
  res.sendFile(__dirname + '/flexbox.html');
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('App started!');
})
