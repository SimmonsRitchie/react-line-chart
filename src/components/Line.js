import React from "react";
import styled from "styled-components";

const StyledLine = styled.path`
  fill: none;
  stroke-width: ${props => (props.highlight ? 5 : 2)};
  stroke: ${props => props.customColor ? props.customColor : "red"};
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
    const { d } = this.props;
    const { highlight} = this.state
    return <StyledLine 
      d={d} 
      highlight={highlight}
      onMouseOver={this.highlight}
      onMouseOut={this.unhighlight}
      />;
  }
}

export default Line;
