import {RECEIVE_ASSESSMENT} from '../actions/assessment_actions';
import {merge} from 'lodash';

export default (state={}, action) => {
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
