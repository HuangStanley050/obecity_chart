import React, { Component } from "react";

class GenderChart extends Component {
  state = {
    selectOption: "total"
  };
  handleSelect = e => {
    // e.preventDefault();
    //console.log(e.target.name);
    this.setState({
      selectOption: e.target.name
    });
  };
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
      </div>
    );
  }
}

export default GenderChart;
