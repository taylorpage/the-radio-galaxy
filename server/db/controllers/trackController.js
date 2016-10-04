const Track = require('../models/track');

module.exports = {

  //Create a new admin account

  create: (req, callback) => {
    Track.create({
      url: req.body.url
    }, (err, data) => {
      callback(data);
    });
  },

  //Get all admin accounts

  getAll: (callback) => {
    Track.find({}, (err, admins) => {
      callback(admins);
    })
  }
}