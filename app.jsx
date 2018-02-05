import * as WatsonApiUtil from './util/watson_util';
import * as TokenApiUtil from './util/token_util';

document.addEventListener('DOMContentLoaded', () => {
  window.getFormInsight = WatsonApiUtil.getFormInsight;
});