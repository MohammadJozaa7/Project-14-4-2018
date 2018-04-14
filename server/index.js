//make express lib inside var express
var express = require('express');
//make bodyParser lib inside var bodyParser
var bodyParser = require('body-parser');
//make database lib inside var items
var items = require('../database-mongo');
// var items = require('../database-mysql');
//make expreess function inside var app
var app = express();
//make path lib inside var path
var path = require('path');
//make express use the angular-client and node_modules
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));
// app.use(express.static(__dirname + '/../react-client/dist'));

//must know what is this----------------------------------
app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

//some trying/////////////////////////////////////////////////////////
//when req Home page by GET request
app.get('/', function(req, res) {
  //console log if get  work
  console.log('GET WORK\n');
  //response to the request by take the html inside main html file
  res.sendFile(path.join(__dirname , '../angular-client/index.html'));
});

app.post('/', function(req, res) {
  console.log('POST WORK\n');
  //response to the request by take the things inside
  //the file index.html (main page)
  res.send('done post');
});


app.listen(3000, function() {
  console.log('SERVER WORK, TO OPEN IT GO TO THIS LINK:\n', 'http://localhost:3000\n');
});
