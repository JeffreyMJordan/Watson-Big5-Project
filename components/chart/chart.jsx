import React from "react";
import * as d3 from "d3";
import Axes from './axes';
import Bars from './bars';

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.xScale = d3.scaleBand();
    this.yScale = d3.scaleLinear();
  }


  render(){
    const margins = {top: 50, right: 20, bottom: 100, left: 60};
    const svgDimensions = {width: 800, height: 500};
    const xScale = this.xScale.padding(0.5)
                        .domain(this.props.personality.map(trait => trait.name))
                        .range([margins.left, svgDimensions.width - margins.right]);

    const yScale = this.yScale.domain([0, 100])
                              .range([svgDimensions.height - margins.bottom, margins.top]);
    return (
      <div className="chart flex-vertical">
        {/* <h1>Big 5 Analysis for: </h1> */}
        <svg className="flex-vertical" width={svgDimensions.width} height={svgDimensions.height}>
          <Axes scales={{xScale, yScale}} margins={margins} svgDimensions={svgDimensions}/>

          <Bars 
            scales={{xScale, yScale}}
            margins={margins}
            data={this.props.personality}
            svgDimensions={svgDimensions}
          />
          <text transform={`translate(${20}, ${svgDimensions.height/2 + 13})rotate(-90)`}>Percentile</text>
          <text transform={`translate(${svgDimensions.width/2 - 40}, ${svgDimensions.height + margins.top - 100})`}>Personality Traits</text>
        </svg>
      </div>
    );
  }
}

export default Chart;