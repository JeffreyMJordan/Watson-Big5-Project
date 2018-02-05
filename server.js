const express = require('express');
const app = express();
var watson = require('watson-developer-cloud');
var credentials = require('./credentials');
// bundle the code
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/' 
  })
);

app.use(express.static('public/'));

// For local development, specify the username and password or set env properties
var ltAuthService = new watson.AuthorizationV1({
  username: credentials.credentials.username,
  password: credentials.credentials.password,
  url: watson.PersonalityInsightsV3.URL
});

app.get('/api/token/personality_insight', function(req, res) {
  ltAuthService.getToken(function(err, token) {
    if (err) {
      console.log('Error retrieving token: ', err);
      return res.status(500).send('Error retrieving token');
    }
    res.send(token);
  });
});

var port = 3000;

app.listen(port, function() {
  console.log('Watson browserify example server running at http://localhost:%s/', port);
});