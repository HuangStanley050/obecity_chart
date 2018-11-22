import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import Header from "./components/header";
import ChartContainer from "./components/chartContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChartContainer />
      </div>
    );
  }
}

export default App;
