import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import Header from "./components/header";
import ChartContainer from "./components/chartContainer";
import Reference from "./components/reference";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChartContainer />
        <Reference />
      </div>
    );
  }
}

export default App;
