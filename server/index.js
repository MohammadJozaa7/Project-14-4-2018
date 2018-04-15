const express = require('express');
const github = require('../helpers/github.js')
var bodyParser = require('body-parser')
const db = require('../database/index.js')
let app = express();
//to open home page first // then to use parser json
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  var allData = github.getReposByUsername(req.body.username, function(err, data){
    //we have all the data for the user
   //console.log("HERE DATA HERE:",data) 

   db.save(data)
  })
  res.send('') 
});

app.get('/repos', function (req, res) {
  db.Repo.find({}, function(err, data){
  	var arr = []
  	for (var i = data.length - 1; i >= data.length - 3; i--) {
  		arr.push(data[i])
  	}
  	res.send(arr)
  })
  
});

//the posr will the srver listen to it
let port = 3000;
app.listen(port, function() {
  console.log(`SERVER WORK OPEN => http://localhost:${port}`);
});

