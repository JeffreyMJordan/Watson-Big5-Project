let PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const credentials = require('../credentials');
import * as TokenUtil from './token_util';

export const getFormInsight = (content) => {
  const personality_insights = new PersonalityInsightsV3({
    token: TokenUtil.getToken(),
    version_date: '2016-10-19'
  });
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