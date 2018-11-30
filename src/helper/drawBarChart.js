import * as d3 from "d3";

const barChart = (svgRef, data) => {
  //console.log(data);
  const margin = { top: 10, right: 10, bottom: 40, left: 40 };
  const width = 480;
  const height = 320;
  const svg = d3
    .select(svgRef)
    .attr("width", width)
    .attr("height", height);

  /*var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range ([height, 0]);*/

  const graph = svg
    .select("#chart")
    .attr("width", width - margin.right - margin.left)
    .attr("height", height - margin.top - margin.bottom)
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const xAxisGroup = graph
    .select("#xAxis")
    .attr("transform", `translate(0,${height - margin.top - margin.bottom})`);

  const yAxisGroup = graph.select("#yAxis");

  const y = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

  const x = d3
    .scaleBand()
    .range([0, 450])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const xAxis = d3.axisBottom(x);
  const yAxis = d3
    .axisLeft(y)
    .ticks(5)
    .tickFormat(d => d + "%");

  //console.log(rects);

  y.domain([0, d3.max(data, d => d.percent)]);
  x.domain(data.map(ageGroup => ageGroup.age));

  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

  xAxisGroup
    .selectAll("text")
    .attr("transform", "rotate(-40)")
    .attr("text-anchor", "end");

  const rects = graph.selectAll("rect").data(data);

  rects
    .attr("width", x.bandwidth)
    .attr("fill", "steelblue")
    .transition()
    .duration(1000)
    .attr("x", d => x(d.age))
    .attr("height", d => height - margin.top - margin.bottom - y(d.percent))
    .attr("y", d => y(d.percent));

  //console.log(rects);

  rects
    .enter()
    .append("rect")
    .attr("width", x.bandwidth)
    .attr("height", 0)
    .attr("fill", "steelblue")
    .attr("x", d => x(d.age))
    .attr("y", d => y(d.percent))
    .transition()
    .duration(1000)
    .attr("height", d => height - margin.top - margin.bottom - y(d.percent))
    .attr("y", d => y(d.percent));
};

export default barChart;
