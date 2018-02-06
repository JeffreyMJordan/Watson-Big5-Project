import * as WatsonApiUtil from './util/watson_util';
import * as TokenApiUtil from './util/token_util';
import Root from './components/root';
import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import * as AssessmentActions from './actions/assessment_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.getFormInsight = WatsonApiUtil.getFormInsight;
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.dispatch = store.dispatch;
  window.getTwitterInsight = AssessmentActions.getTwitterAssessment;
});