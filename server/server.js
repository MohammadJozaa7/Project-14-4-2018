//make express lib inside var
var express = require('express');
//make bodyParser lib inside var
var bodyParser = require('body-parser');
//make items lib inside var
var items = require('../database-mongo');
//make expreess fun  inside var
var app = express();
//make path lib inside var
var path = require('path');
//now when req Home page by GET request
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
//GET request
app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});



//some trying
app.get('/', function(req, res) {
  //console log if get  work
  console.log('GET WORK\n');
  //response to the request by take the things inside
  //must change here
  res.sendFile(path.join(__dirname , '../index.html'));
});

app.post('/', function(req, res) {
  console.log('POST WORK\n');
  //response to the request by take the things inside
  //the file index.html (main page)
  res.send('done post');
});










app.listen(3000, function() {
  console.log('SERVER ON TO SEE IT OPEN THIS LINK:\n', 'http://localhost:3000\n');
});
