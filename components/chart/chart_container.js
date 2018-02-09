import {connect} from "react-redux";
import Chart from './chart';

const mapStateToProps = (state, ownProps) => {
  return {
    personality: state.assessment.personality
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);