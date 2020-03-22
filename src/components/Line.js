import React from "react";
import styled from "styled-components";
import * as d3 from 'd3'

const StyledLine = styled.path`
  fill: none;
  stroke-width: ${props => (props.highlight ? 5 : 2)};
  stroke: ${props => props.strokeColor};
`;

class Line extends React.Component {
  state = {
    highlight: false
  }

  highlight = () => {
    this.setState({ highlight: true });
  };

  unhighlight = () => {
    this.setState({ highlight: false });
  };

  render() {
    const { d, seriesNo } = this.props;
    const { highlight} = this.state
    const strokeColor = d3.schemeSet1[seriesNo]
    return <StyledLine 
      d={d} 
      highlight={highlight}
      strokeColor={strokeColor}
      onMouseOver={this.highlight}
      onMouseOut={this.unhighlight}
      />;
  }
}

export default Line;
