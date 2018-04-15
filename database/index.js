const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/JOZAA');

let repoSchema = mongoose.Schema({
  username : String,
  url: {type: String, unique : true},
  repoName : String,
  private : Boolean
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  repo = new Repo({
	  username : data.owner.login,
	  url: data.html_url,
	  repoName : data.name,
	  private : data.private
  })
  repo.save()
}

module.exports.save = save;

module.exports.Repo = Repo;
