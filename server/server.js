//make express lib inside var
var express = require('express');
//make app lib inside var
var app = express();
//make path lib inside var
var path = require('path');
//now when req Home page by GET request
app.get('/', function(req, res) {
	//response to the request by take the things inside
	//the file index.html (main page)
    res.sendFile(path.join(__dirname , '../index.html'));
});
//make the app listen to the port
app.listen(8080);
// and console logthe link for server 
console.log("SERVER WORK:", 'http://localhost:8080')

