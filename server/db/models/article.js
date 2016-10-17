const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  url: String,
  description: String,
  thumbs: {
    up: 0,
    down: 0
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;