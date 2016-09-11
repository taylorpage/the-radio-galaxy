const request = require('request');
const apikey = require('../config/config');
/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

exports.bandsInTown = function(query, cb) {
  var url = `http://api.bandsintown.com/artists/${query}/events.json?api_version=2.0&app_id=theradiogalaxy`
  request(url, function(err, res) {
    cb(res.body);
  });
}