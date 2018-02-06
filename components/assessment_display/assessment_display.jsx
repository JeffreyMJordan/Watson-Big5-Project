import React from 'react';

class AssessmentDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="assessment-display">
        {JSON.stringify(this.props.assessment)}
      </div>
    );
  }
}

export default AssessmentDisplay;