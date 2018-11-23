import React, { Component } from "react";
import drawAustralia from "../helper/drawAustralia";

class Australia extends Component {
  componentDidMount() {
    drawAustralia(this.svgRef);
  }
  render() {
    return (
      <div className="col s12 l6">
        <svg ref={svgRef => (this.svgRef = svgRef)}>
          <g id="australia" />
        </svg>
      </div>
    );
  }
}

export default Australia;
