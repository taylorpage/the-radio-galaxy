const Track = require('../models/track');

module.exports = {

  create: (url, name, artist, callback) => {
    Track.create({
      url: url,
      name: name,
      artist: artist
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