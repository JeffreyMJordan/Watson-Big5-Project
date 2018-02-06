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
    .then(res => receiveAssessment(res));
};