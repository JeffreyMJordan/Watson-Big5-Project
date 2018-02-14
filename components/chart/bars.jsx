import React from "react";
import * as d3 from "d3";

class Bars extends React.Component{
  constructor(props){
   super(props);
   this.colorScale = d3.scaleLinear().domain([0, 1]).range(['#F3E5F5', '#7B1FA2']).interpolate(d3.interpolateLab);
  }

  render(){
    console.log("re-rendered");
    const {scales, margins, data, svgDimensions} = this.props;
    console.log(data);
    const {xScale, yScale} = scales;
    const {height} = svgDimensions;
    const bars = (
      data.map(datum => 
        (
        <g transform={`translate(${xScale(datum.name)}, ${yScale(datum.percentile*100)})`}>
        <text x={`${xScale.bandwidth()/2}`} textAnchor={'middle'}>
              {Math.floor((datum.percentile*100))}
          </text>
        <rect 
          key={datum.name}
          // x={xScale(datum.name)}
          // y={yScale(datum.percentile*100)}
          height={height - margins.bottom - scales.yScale(datum.percentile*100)}
          width={xScale.bandwidth()}
          fill={this.colorScale(datum.percentile)}
        />
        </g>)
      )
    );
    console.log(bars);
    return (
      <g>{bars}</g>
    );
  }


}

export default Bars;