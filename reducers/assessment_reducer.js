import {RECEIVE_ASSESSMENT} from '../actions/assessment_actions';
import {merge} from 'lodash';

const blankPersonality = {
  personality: [{name: 'Openness', percentile: 0.0}, {name: 'Conscientiousness', 
  percentile: 0.0}, {name: 'Extraversion', percentile: 0.0}, {name: 'Agreeableness', percentile: 0.0}, {name: 'Emotional range', percentile: 0.0},]
};

export default (state=blankPersonality, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ASSESSMENT:
      newState = merge({}, action.assessment);
      return newState;
    default: 
      return state;
  }
};
