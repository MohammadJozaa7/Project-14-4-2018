const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/JOZAA');

let repoSchema = mongoose.Schema({
  login:String,
  html_url:String,
  type:String,
  location:String,
  bio:String,
  public_repos:Number,
  public_gists:Number,
  followers:Number,
  following:Number,
  created_at:String,
  updated_at:String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  repo = new Repo({
    login:data.login,
    html_url:data.html_url,
    type:data.type,
    location:data.location,
    bio:data.bio,
    public_repos:data.public_repos,
    public_gists:data.public_gists,
    followers:data.followers,
    following:data.following,
    created_at:data.created_at,
    updated_at:data.updated_at
  })
  console.log("here",repo)
  repo.save()
}

module.exports.save = save;

module.exports.Repo = Repo;

/*

{
  "login": "MohammadJozaa7",
  "html_url": "https://github.com/MohammadJozaa7",
  "type": "User",
  "location": "Jordan-Amman",
  "bio": "ALEX MERCER",
  "public_repos": 11,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2018-02-08T12:56:13Z",
  "updated_at": "2018-04-07T05:50:50Z"
}

{
  login
  html_url
  type
  location
  bio
  public_repos
  public_gists
  followers
  following
  created_at
  updated_at

}
*/



  