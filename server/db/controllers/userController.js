const User = require('../models/user');
const bcrypt = require('bcrypt');

function createPassword(text) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(text, salt);
  return hash;
}

function decodePassword(text, hash) {
  return bcrypt.compareSync(text, hash)
}

module.exports = {
  create: (req, callback) => {
    User.create({
      name: req.body.name,
      website: req.body.website,
      location: req.body.location,
      email: req.body.email,
      password: createPassword(req.body.password),
      tracks: []
    }, (err, data) => {
      callback(data);
    });
  },

  findUser: (req, callback) => {
    User.findOne({ email: req.body.email }, (err, data) => {
      callback(data);
    })
  },

  login: (req, callback) => {
    User.findOne({ email: req.body.email }, (err, data) => {
      callback(decodePassword(req.body.password, data.password));
    })
  },

  checkEmailsForDuplicates: (req, callback) => {
    User.findOne({ email: req.body.email }, (err, data) => {
      return data
    }).then((data) => {
      callback(data ? true : false);
    })
  },

  getAll: callback => {
    User.find({}, (err, data) => {
      callback(data);
    });
  }
}