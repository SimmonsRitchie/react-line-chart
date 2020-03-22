import React, { Component } from "react";
import "../styles/App.css";
import LineChart from "./LineChart";
import * as d3 from "d3";
import Line from "./Line";
import Svg from "./Svg";
import Container from "./Container";
import { throttle } from "throttle-debounce";

const data = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
const data2 = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));
const data3 = d3.range(20).map((_, idx) => ({ x: idx, y: Math.random() }));

class App extends Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.state = {
      width: 0,
      height: 0
    };
    //! Important: must bind otherwise ref will be inacessible on event listener calls
    this.resize = this.resize.bind(this); 
    // * We use throttle to improve performance
    this.throttledHandleWindowResize = throttle(300, this.resize);
  }

  componentDidMount() {
    // initial sizing
    this.resize();
    // resize if window changes
    window.addEventListener("resize", this.throttledHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledHandleWindowResize);
  }

  resize() {
      const containerEl = this.containerRef.current;
      console.log(containerEl)
      const width = containerEl.getBoundingClientRect().width;
      const height = width * 0.7; // We set height as a ratio of width
      this.setState({
        width,
        height
      });
  }

  render() {
    const { width, height } = this.state;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    return (
      <Container ref={this.containerRef}>
        <Svg width={width} height={height}>
          <LineChart
            x={margin.right}
            y={margin.top}
            height={height - (margin.top + margin.bottom)}
            width={width - (margin.left + margin.right)}
            data={[data, data2, data3]}
            dataline={({ d, idx }) => <Line d={d} key={idx} />}
          />
        </Svg>
      </Container>
    );
  }
}

export default App;
