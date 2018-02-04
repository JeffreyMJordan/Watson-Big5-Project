import * as WatsonApiUtil from './util/watson_util';
document.addEventListener('DOMContentLoaded', () => {
  window.getFormInsight = WatsonApiUtil.getFormInsight;
  window.getToken = WatsonApiUtil.getToken;
});