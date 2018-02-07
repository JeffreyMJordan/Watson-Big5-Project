import {connect} from "react-redux";
import {getAssessment, getTwitterAssessment} from '../../actions/assessment_actions';
import TextForm from './text_form';

const mapStateToProps = (state, ownProps) => {
  return {assessment: state.assessment};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAssessment: (content) => dispatch(getAssessment(content)),
    getTwitterAssessment: (screen_name) => dispatch(getTwitterAssessment(screen_name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);

