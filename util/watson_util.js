export const getFormInsight = (content) => {
  return $.ajax({
    method: "POST",
    url: '/api/personality_insight',
    data: {content: content}
  });
};