// webpack.config.js
var path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  node: {
    // see http://webpack.github.io/docs/configuration.html#node
    // and https://webpack.js.org/configuration/node/
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
};