const express = require('express');
const app = express();
var watson = require('watson-developer-cloud');
var credentials = require('./credentials');
// bundle the code
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');
let PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var compiler = webpack(webpackConfig);
var Twit = require('twitter');
var twitter_credentials = require('./twitter_credentials');
var T = new Twit(twitter_credentials.credentials);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/' 
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

const personality_insights = new PersonalityInsightsV3(credentials.credentials);

app.post('/api/personality_insight', (req, res) => {
  console.log(req.body);
  personality_insights.profile(
    {
      content: JSON.stringify(req.body.content),
      content_type: 'text/plain',
      // consumption_preferences: true
    },
    function(err, response) {
      if (err) {
        res.send(JSON.stringify(err));
      } else {
        res.send(response);
      }
    }
  );
});

app.post('/api/twitter_insight', (req, res) => {
  T.get('statuses/user_timeline', {screen_name: req.body.screen_name, count: 200, tweet_mode: 'extended'}, function(error, tweets, response) {
    if (!error) {
      let body = "";
      tweets.forEach((tweet) => {
        body += tweet.full_text;
        console.log(tweet.full_text);
      });
      // console.log(body);
    }else{
      console.log(error);
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var port = 3000;

app.listen(port, function() {
  console.log('Watson browserify example server running at http://localhost:%s/', port);
});