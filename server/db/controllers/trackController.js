const Track = require('../models/track');

module.exports = {

  create: (url, callback) => {
    Track.create({
      url: url
    }, (err, data) => {
      callback(data);
    });
  },

  getAll: (callback) => {
    Track.find({}, (err, admins) => {
      callback(admins);
    })
  }
}