import {connect} from 'react-redux';
import AssessmentDisplay from './assessment_display';

const mapStateToProps = (state, ownProps) => {
  return {
    assessment: state.assessment
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentDisplay);