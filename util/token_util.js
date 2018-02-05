export const getToken = () => {
  return fetch('/api/token/personality_insight').then(function(res){
    return res.text();
  });
};