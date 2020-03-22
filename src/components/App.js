import React, { Component } from "react";
import "../styles/App.css";
import ResponsiveLineChart from "./LineChart";
import Line from "./Line"
import * as d3 from "d3";
import Container from "./Container";

const generateData = () => {
  // * Generates an array of arrays of {x, y} objects 
  // * Each represents a line for a multi-series line chart
  return d3.range(5).map(_ => {
    return d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
  })
}

class App extends Component {
  state = {
    data: generateData()
  }

  updateData = () => {
    const data= generateData()
    this.setState({data})
  }

  render() {
    return (
      <Container>
        <ResponsiveLineChart
          data={this.state.data}
          dataline={({ d, idx }) => <Line d={d} seriesNo={idx} key={idx} />}
        />
        <button onClick={this.updateData}>Generate random data</button>
      </Container>
    );
  }
}

export default App;