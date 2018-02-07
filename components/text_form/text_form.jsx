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
      <div className="form flex-vertical">
        <form className="flex-vertical" action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Twitter username
            <textarea onChange={this.handleChange('content')} name="" id="" cols="30" rows="10"></textarea>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
} 

export default TextForm;