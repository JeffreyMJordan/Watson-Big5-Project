import React from "react";

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="header flex-horizontal">
        <div className="blue-sheet flex-horizontal">
          <h1>Big 5 Twitter Analyzer</h1>
        </div>
      </div>
    );
  }
}

export default Header;