import React from 'react';

class TextForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }


  render(){
    return (
      <div className="form">
        <form action="">
          <label htmlFor="">Corpus
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    );
  }
} 

export default TextForm;