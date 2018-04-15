//must change this fucntion to take the info of facebook users
const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function (error, response, body) {
    let data = JSON.parse(body);
    cb(null, data)
  }); 
}
module.exports.getReposByUsername = getReposByUsername;