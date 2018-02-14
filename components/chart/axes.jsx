import React from "react";
import Axis from './axis';
import generate from "../../../../Library/Caches/typescript/2.6/node_modules/@types/babel-generator";

export default ({scales, margins, svgDimensions}) => {
  const {height, width} = svgDimensions;
  const xProps = {
    orientation: 'Bottom',
    scale: scales.xScale,
    translate: `transalte(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  };

  const yProps = {
    orientation: 'Left',
    scale: scales.yScale,
    translate: `transalte(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right
  };

  return (
    <g>
      <Axis {...xProps}/>
      <Axis {...yProps}/>
    </g>
  );
};

