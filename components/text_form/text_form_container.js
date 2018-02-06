import {connect} from "react-redux";
import {getAssessment} from '../../actions/assessment_actions';
import TextForm from './text_form';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {assessment: state.assessment};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAssessment: (content) => dispatch(getAssessment(content))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);

