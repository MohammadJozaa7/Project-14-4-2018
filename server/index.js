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
  //console.log("HERE REQ NAME: ",req.body.username)
  var b = github.getReposByUsername(req.body.username, function(err, repos){
  	//console.log("HERE REPOS: ",repos)       
  	for(var i = 0; i < repos.length; i++){
      db.save(repos[i])
  		//c.push(repos[i])
  	}  
  })
  res.send('') 
});

app.get('/repos', function (req, res) {
  db.Repo.find({}, function(err, r){
  	var arr = []
  	for (var i = r.length - 1; i >= r.length - 3; i--) {
  		arr.push(r[i])
  	}
  	res.send(arr)
  })
  
});



//know what this
let port = 3000;
app.listen(port, function() {
  console.log(`SERVER WORK OPEN => http://localhost:${port}`);
});

