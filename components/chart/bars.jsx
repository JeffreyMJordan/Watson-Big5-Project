import React from "react";
import * as d3 from "d3";

class Bars extends React.Component{
  constructor(props){
   super(props);
   this.colorScale = d3.scaleLinear().domain([0, 100]).range(['#F3E5F5', '#7B1FA2']).interpolate(d3.interpolateLab);
  }

  render(){
    const {scales, margins, data, svgDimensions} = this.props;
    const {xScale, yScale} = scales;
    const {height} = svgDimensions;
    const bars = (
      data.map(datum => 
        <rect 
          key={datum.name}
          x={xScale(datum.name)}
          y={yScale(datum.percentile)}
          height={height - margins.bottom - scales.yScale(datum.percentile)}
          width={xScale.bandwidth()}
          fill={this.colorScale(datum.percentile)}
        />
      )
    );

    return (
      <g>{bars}</g>
    );
  }


}

export default Bars;