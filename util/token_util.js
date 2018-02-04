var watson = require('watson-developer-cloud');
var credentials = require('../credentials');

var authorization = new watson.AuthorizationV1({
 username: credentials.credentials.username,
 password: credentials.credentials.password,
 url: watson.PersonalityInsightsV3.URL
});

export const getAuthToken = () => authorization.getToken(function (err, token) {
 if (!token) {
   console.log('error:', err);
 } else {
   return token;
 }
});