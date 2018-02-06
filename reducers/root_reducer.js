import {combineReducers} from 'redux';
import AssessmentReducer from './assessment_reducer';

export default combineReducers({
  assessment: AssessmentReducer
});

