import React from "react";
import Australia from "./australia";
import GenderChart from "./genderChart";

const ChartContainer = () => {
  return (
    <div className="container section">
      <div className="row">
        <Australia />
        <GenderChart />
      </div>
    </div>
  );
};

export default ChartContainer;
