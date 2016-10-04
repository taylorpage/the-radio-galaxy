const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  url: String,
  thumbs: {
    up: 0,
    down: 0
  }
});

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;