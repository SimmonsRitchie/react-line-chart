import React, { Component } from "react";
import * as d3 from "d3";
import Axis from "./Axis"
import withResponsiveContainer from "./hoc/withResponsiveContainer"



class LineChart extends Component {
  state = {
    xScale: d3
      .scaleLinear()
      .domain(this.getExtent(d => d.x))
      .range([0, this.props.width]),
    yScale: d3
      .scaleLinear()
      .domain(this.getExtent(d => d.y))
      .range([this.props.height, 0]),
  };

  getExtent(accessorFunc) {
    // Flattens an array of arrays
    const arr = [].concat.apply([], this.props.data);
    return d3.extent(arr, accessorFunc)

  }

  valueLine = d3.line()
    .x(d => this.state.xScale(d.x))
    .y(d => this.state.yScale(d.y))

  static getDerivedStateFromProps(props, state) {
    // We use getDerivedStateFromProps to ensure that our scales update properly on re-renders
    // getDerivedStateFromProps is generally discouraged because it can hurt performance. We use it with caution.
    let { xScale, yScale } = state;
    xScale.range([0, props.width]);
    yScale.range([props.height, 0]);
    return { ...state, xScale, yScale };
  }

  render() {
    const { x, y, height, data, dataline } = this.props;    
    const { xScale, yScale } = this.state;
    return (
      <g transform={`translate(${x}, ${y})`}>
        { data.map((item, idx) => {
          return dataline({d: this.valueLine(item), idx})
        })}
        <Axis x={0} y={0} type={"Left"} label="Y" scale={yScale} />
        <Axis x={0} y={height} type={"Bottom"} label="x" scale={xScale} />
      </g>
    );
  }
}

const ResponsiveLineChart = withResponsiveContainer(LineChart)


export default ResponsiveLineChart;
