import * as WatsonApiUtl from '../util/watson_util';


export const RECEIVE_ASSESSMENT = "RECEIVE_ASSESSMENT";

export const receiveAssessment = (assessment) => {
  return {
    type: RECEIVE_ASSESSMENT,
    assessment: assessment
  };
};

export const getAssessment = (content) => (dispatch) => {
  return WatsonApiUtl.getFormInsight(content)
    .then(res => dispatch(receiveAssessment(res)));
};

export const getTwitterAssessment = (screen_name) => (dispatch) => {
  return WatsonApiUtl.getTwitterInsight(screen_name)
    .then(res => dispatch(receiveAssessment(res)));
};