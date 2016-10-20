const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  url: String,
  description: String,
  title: String,
  thumbs: 0
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;