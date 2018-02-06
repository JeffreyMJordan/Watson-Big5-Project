var Twit = require('twitter');
var twitter_credentials = require('./twitter_credentials');
var T = new Twit(twitter_credentials.credentials);

T.get('statuses/user_timeline', {screen_name: 'katyperry', count: 200}, function(error, tweets, response) {
  if (!error) {
    console.log(tweets.length);
  }else{
    console.log(error);
  }
});