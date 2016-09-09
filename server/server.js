const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const middleware = './middleware/middleware';
const routes = './routes/routes';
const path = require('path');

const app = express();

app.use(cors());

// Routes and middleware
require('./middleware/middleware')(app, express);

// Connect to Database

const mongouri = process.env.MONGODB_URI || 'mongodb://localhost/marvin'
mongoose.connect(mongouri);

require('./routes/routes')(app, express);

app.get('*', function(request,response){
  response.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});



const port = process.env.PORT || 3000;

// For development, webpack willbe used
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);
}

app.listen(port);

module.exports = app;