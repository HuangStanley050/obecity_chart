import React, { Component } from "react";
import { connect } from "react-redux";
import { select } from "../store/actions/category";
import barChart from "../helper/drawBarChart";

class GenderChart extends Component {
  state = {
    selectOption: "total"
  };
  handleSelect = e => {
    // e.preventDefault();
    //console.log(e.target.name);
    this.props.select(e.target.name);
    this.setState({
      selectOption: e.target.name
    });
  };
  componentDidMount() {
    console.log("mounted");
    barChart(this.svgRef, this.props.data);
  }
  componentDidUpdate() {
    console.log("updated");
    barChart(this.svgRef, this.props.data);
  }
  render() {
    return (
      <div className="col s12 l6">
        <form style={{ display: "flex", justifyContent: "space-around" }}>
          <p>
            <label>
              <input
                onChange={this.handleSelect}
                name="total"
                type="radio"
                checked={this.state.selectOption === "total"}
              />
              <span>Total Population</span>
            </label>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleSelect}
                name="male"
                type="radio"
                checked={this.state.selectOption === "male"}
              />
              <span>Male</span>
            </label>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleSelect}
                name="female"
                type="radio"
                checked={this.state.selectOption === "female"}
              />
              <span>Female</span>
            </label>
          </p>
        </form>
        <svg ref={el => (this.svgRef = el)}>
          <g id="chart">
            <g />
            <g />
          </g>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.percentage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: category => dispatch(select(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderChart);
