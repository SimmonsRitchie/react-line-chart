import React, { Component } from 'react';
import * as d3 from "d3"

class LineChart extends Component {
  state = { 
    xScale: d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, this.props.width]),
    yScale: d3
      .scaleLinear()
      .domain([0, 1])
      .range([this.props.height, 0])
  }
  render() { 
    return (  );
  }
}

export default LineChart;