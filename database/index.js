const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherr');

let repoSchema = mongoose.Schema({
  username : String,
  url: {type: String, unique : true},
  repoName : String,
  private : Boolean
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (r) => {
  repo = new Repo({
	  username : r.owner.login,
	  url: r.html_url,
	  repoName : r.name,
	  private : r.private
  })
  repo.save()
}

module.exports.save = save;
module.exports.Repo = Repo;
