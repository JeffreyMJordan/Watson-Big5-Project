let PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const credentials = require('../credentials');
const personality_insights = new PersonalityInsightsV3(credentials.credentials);

console.log(credentials.credentials);
export const getFormInsight = (content) => {
  return personality_insights.profile({
    content: JSON.stringify(content),
    content_type: 'text/plain'},

    function(err, response) {
      if (err) {
        console.log('error:', err);
      } else {
        console.log(JSON.stringify(response, null, 2));
      }
    }
  );
};