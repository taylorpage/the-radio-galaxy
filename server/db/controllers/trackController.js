const Track = require('../models/track');

module.exports = {

  create: (url, name, artist, callback) => {
    Track.create({
      url: url,
      name: name,
      artist: artist,
      thumbs: {
        up: 0,
        down: 0
      }
    }, (err, data) => {
      callback(data);
    });
  },

  getAll: (callback) => {
    Track.find({}, (err, tracks) => {
      callback(tracks);
    })
  },

  thumbs: (req, callback) => {
    let thumbs;

    Track.findOne({ url: req.body.url }, (err, track) => {
      if ( req.body.status === 'up') {
        track.thumbs.up++;
      } else {
        track.thumbs.down++;
      }
      thumbs = track.thumbs;
      Track.update({ url: req.body.url }, { thumbs: thumbs }, {}, (err, track) => {
        callback(track);
      })
    })
  }
}