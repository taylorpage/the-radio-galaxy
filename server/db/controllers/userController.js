const User = require('../models/user');

module.exports = {
  create: (req, callback) => {
    Track.create({
      name: req.body.name,
      website: req.body.website,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,
      tracks: []
    }, (err, data) => {
      callback(data);
    });
  }
}