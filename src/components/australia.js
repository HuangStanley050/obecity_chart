import React, { Component } from "react";
import drawAustralia from "../helper/drawAustralia";
//import { connect } from "react-redux";

class Australia extends Component {
  componentDidMount() {
    drawAustralia(this.svgRef, this.props.data);
  }
  /*componentDidUpdate() {
    drawAustralia(this.svgRef, this.props.data);
  }*/
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

/*const mapStateToProsp = state => {
  return {
    data: state.data.AusStates
  };
};
*/

export default Australia;
