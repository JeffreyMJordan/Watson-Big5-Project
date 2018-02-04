import * as WatsonAPIutil from './util/watson_util';
document.addEventListener('DOMContentLoaded', () => {
  console.log(WatsonAPIutil);
  window.getFormInsight = WatsonAPIutil.getFormInsight;
});