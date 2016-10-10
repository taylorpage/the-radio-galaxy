const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  website: String,
  location: String,
  email: String,
  password: String,
  tracks: []
});

const User = mongoose.model('User', UserSchema);

module.exports = User;