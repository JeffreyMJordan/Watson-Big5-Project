import React from "react";
import * as d3 from 'd3';
import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3-selection';


class Axis extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    console.log(this.props);
    const axisType = `axis${this.props.orientation}`;
    console.log(axisType);
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize)
      .tickPadding([12])
      .ticks([4]);

    d3Select(this.axisElement).call(axis);
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={this.props.translate}
      />
    );
  }
}

export default Axis;