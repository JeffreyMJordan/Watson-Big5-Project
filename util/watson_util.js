export const getFormInsight = (content) => {
  return $.ajax({
    method: "POST",
    url: '/api/personality_insight',
    data: {content: content}
  });
};

export const getTwitterInsight = (screen_name) => {
  return $.ajax({
    method: "POST",
    url: '/api/twitter_insight',
    data: {screen_name: screen_name}
  });
};