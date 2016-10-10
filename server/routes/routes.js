const helpers = require('../helpers/helpers');
const trackController = require('../db/controllers/trackController');
const userController = require('../db/controllers/userController')

module.exports = function(app, express) {
  app.post('/concertSearch', function(req, res) {
    var genre = req.body.genre;
    var query = req.body.query;
    var latlong = `${req.body.lat},${req.body.long}`;

    helpers.bandsInTown(query, function(data) {
      res.status(200).send(data);
    });
  })

  app.get('/tracks/get', function(req, res) {
    trackController.getAll(function(data) {
      res.status(200).send(data);
    })
  })
  app.post('/tracks/create', function(req, res) {
    let url = req.body.url;
    let name = req.body.name;
    let artist = req.body.artist;

    trackController.create(url, name, artist, function(data) {
      res.status(200).send(data);
    })
  })
  app.post('/user/create', function(req, res) {
    userController.create(req, function(data) {
      res.status(200).send(data);
    })
  })
}