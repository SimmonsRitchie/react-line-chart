import React, { Component } from "react";
import * as d3 from "d3";
import Axis from "./Axis"

class LineChart extends Component {
  state = {
    xScale: d3
      .scaleLinear()
      .domain(d3.extent(this.props.data, d=>d.x))
      .range([0, this.props.width]),
    yScale: d3
      .scaleLinear()
      .domain([0, 1])
      .range([this.props.height, 0]),
  };

  valueLine = d3.line()
    .x(d => this.state.xScale(d.x))
    .y(d => this.state.yScale(d.y))

  static getDerivedStateFromProps(props, state) {
    let { xScale, yScale } = state;
    xScale.range([0, props.width]);
    yScale.range([props.height, 0]);
    return { ...state, xScale, yScale };
  }

  render() {
    const { x, y, height, data, dataline } = this.props;    
    const { xScale, yScale } = this.state;
    console.log(this.valueLine(data))
    return (
      <g transform={`translate(${x}, ${y})`}>
        { dataline({d: this.valueLine(data)})}
        <Axis x={0} y={0} type={"Left"} label="Y" scale={yScale} />
        <Axis x={0} y={height} type={"Bottom"} label="x" scale={xScale} />
      </g>
    );
  }
}

export default LineChart;
