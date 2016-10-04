const helpers = require('../helpers/helpers');
const trackController = require('../db/controllers/trackController')

module.exports = function(app, express) {
  app.post('/concertSearch', function(req, res) {
    var genre = req.body.genre;
    var query = req.body.query;
    var latlong = `${req.body.lat},${req.body.long}`;

    helpers.bandsInTown(query, function(data) {
      res.status(200).send(data);
    });
  })

  app.get('/tracks', function(req, res) {
    trackController.getAll(function(data) {
      res.status(200).send(data);
    })
  })
}