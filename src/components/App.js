import React, { Component } from "react";
import "../styles/App.css";
import ResponsiveLineChart from "./LineChart";
import Line from "./Line"
import * as d3 from "d3";

import Container from "./Container";

const data = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
const data2 = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
const data3 = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));

class App extends Component {

  render() {

    return (
      <Container>
        <ResponsiveLineChart
          data={[data, data2, data3]}
          dataline={({ d, idx }) => <Line d={d} key={idx} />}
        />
      </Container>
    );
  }
}

export default App;


// <LineChart
// x={margin.right}
// y={margin.top}
// height={height - (margin.top + margin.bottom)}
// width={width - (margin.left + margin.right)}
// data={[data, data2, data3]}
// dataline={({ d, idx }) => <Line d={d} key={idx} />}
// />