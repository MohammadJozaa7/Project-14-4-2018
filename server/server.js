//make express lib inside var
var express = require('express');
//make app lib inside var
var app = express();
//make path lib inside var
var path = require('path');
//now when req Home page by GET request
app.get('/', function(req, res) {
  //console log if get  work
  console.log('GET WORK\n');
  //response to the request by take the things inside
  //the file index.html (main page)
  res.sendFile(path.join(__dirname , '../index.html'));
  
});
//make the app listen to any port	
app.listen(8080);
//console log the link for server 
console.log('SERVER ON TO SEE IT OPEN THIS LINK:\n', 'http://localhost:8080\n');

app.post('/', function(req, res) {
  console.log('POST WORK\n');
  //response to the request by take the things inside
  //the file index.html (main page)
  res.send('done post');
});
