const Article = require('../models/article');

module.exports = {

  create: (req, callback) => {
    Article.create({
      url: req.body.url,
      description: req.body.description,
      thumbs: 0
    }, (err, data) => {
      callback(data);
    });
  },

  getAll: (callback) => {
    Article.find({}, (err, articles) => {
      callback(articles);
    })
  },

  thumbs: (req, callback) => {
    let thumbs;

    Article.findOne({ url: req.body.url }, (err, article) => {
      if ( req.body.status === 'up') {
        article.thumbs++;
      } else {
        article.thumbs--;
      }
      thumbs = article.thumbs;
      Article.update({ url: req.body.url }, { thumbs: thumbs }, {}, (err, article) => {
        callback(article);
      })
    })
  }
}