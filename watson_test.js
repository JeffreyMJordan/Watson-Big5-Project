var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var beeMovieScript = require('./bee_movie');
var credentials = require('./credentials');
var personality_insights = new PersonalityInsightsV3(credentials.credentials);

personality_insights.profile(
  {
    content: JSON.stringify(beeMovieScript),
    content_type: 'text/plain',
    // consumption_preferences: true
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);