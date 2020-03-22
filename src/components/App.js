import React, { Component } from "react";
import "../styles/App.css";
import ResponsiveLineChart from "./LineChart";
import Line from "./Line"
import * as d3 from "d3";

import Container from "./Container";

// * Generates an array of arrays of {x, y} objects 
// * Each represents a line for a multi-series line chart
const data = d3.range(5).map(_ => {
  return d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
})

class App extends Component {

  render() {

    return (
      <Container>
        <ResponsiveLineChart
          data={data}
          dataline={({ d, idx }) => <Line d={d} seriesNo={idx} key={idx} />}
          test={"hello?"}
        />
      </Container>
    );
  }
}

export default App;