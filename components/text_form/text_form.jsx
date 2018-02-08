import React from 'react';

class TextForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(){
    this.props.getTwitterAssessment(this.state.content);
  }


  render(){
    return (
      <div className="text-form flex-horizontal padding-vert-5">
        <div className="explainer-text med-font">
          Enter the username for any public twitter account to receive a detailed Big 5 personality analysis.
        </div>
        <form className="flex-horizontal" action="" onSubmit={this.handleSubmit}>
            <div className="margin-horiz-5">@</div>  
            <input type="text" onChange={this.handleChange('content')}></input>
          <input className="submit padding-horiz-5 flex-horizontal" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
} 

export default TextForm;