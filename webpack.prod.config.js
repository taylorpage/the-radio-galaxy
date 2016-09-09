const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtools: 'source-map',

  entry: [
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'client', 'styles')
      }
    ]
  }
}