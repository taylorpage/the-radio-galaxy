const helpers = require('../helpers/helpers');
const trackController = require('../db/controllers/trackController');
const userController = require('../db/controllers/userController');
const articleController = require('../db/controllers/articleController');

module.exports = function(app, express) {
  app.post('/concertSearch', function(req, res) {
    var genre = req.body.genre;
    var query = req.body.query;
    var latlong = `${req.body.lat},${req.body.long}`;

    helpers.bandsInTown(query, data => {
      res.status(200).send(data);
    });
  })

  app.get('/tracks/all', function(req, res) {
    trackController.getAll(data => {
      res.status(200).send(data);
    })
  })
  app.post('/tracks/create', (req, res) => {
    let url = req.body.url;
    let name = req.body.name;
    let artist = req.body.artist;

    trackController.create(url, name, artist, data => {
      res.status(200).send(data);
    })
  })
  app.post('/user/create', (req, res) => {
    userController.create(req, data => {
      res.status(200).send(data);
    })
  })
  app.post('/user/getUser', (req, res) => {
    userController.findUser(req, data => {
      res.status(200).send(data);
    })
  })
  app.post('/user/login', (req, res) => {
    userController.login(req, data => {
      res.status(200).send(data);
    })
  })
  app.get('/user/all', (req, res) => {
    userController.getAll(data => {
      res.status(200).send(data);
    })
  })
  app.post('/user/checkEmails', (req, res) => {
    userController.checkEmailsForDuplicates(req, data => {
      res.status(200).send(data);
    })
  })
  app.post('/user/updateVotes', (req, res) => {
    userController.updateVotes(req, data => {
      res.status(200).send(data);
    })
  })
  app.get('/articles/all', (req, res) => {
    articleController.getAll(data => {
      res.status(200).send(data);
    })
  })
  app.post('/articles/create', (req, res) => {
    articleController.create(req, data => {
      res.status(200).send(data);
    })
  })
  //THUMBS
  app.post('/tracks/thumbs', (req, res) => {
    trackController.thumbs(req, data => {
      res.status(200).send(data);
    })
  })
  app.post('/articles/thumbs', (req, res) => {
    trackController.thumbs(req, data => {
      res.status(200).send(data);
    })
  })
}