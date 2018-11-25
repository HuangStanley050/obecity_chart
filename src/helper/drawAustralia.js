import * as d3 from "d3";
import * as topojson from "topojson";
import d3tip from "d3-tip";
import geoData from "../geoData/aus_state_topojson";

const mouseOver = (d, i, n) => {
  d3.select(n[i])
    .transition("changeSliceFill")
    .duration(300)
    .attr("fill", "red");
};

const mouseOut = (d, i, n) => {
  //console.log("out");
  d3.select(n[i])
    .transition()
    .duration(300)
    .attr("fill", "blue");
};

const getPercentage = state => {
  switch (state) {
    case "Victoria":
      return "63.3%";
    case "Western Australia":
      return "60.3%";
    case "New South Wales":
      return "63.2%";
    case "Northern Territory":
      return "64.3%";
    case "Tasmania":
      return "67.5%";
    case "Australian Capital Territory":
      return "63.5%";
    case "South Australia":
      return "65.8%";
    case "Queensland":
      return "63.6%";
    default:
      return "??";
  }
};

const tip = d3tip()
  .attr("class", "tip card")
  .html(d => {
    //console.log(d.data.cost);
    let content = `<div class="name">${d.properties.STATE_NAME}</div>`;
    content += `<div class="cost">${getPercentage(
      d.properties.STATE_NAME
    )}</div>`;
    //console.log(d.properties);
    //console.log(data);
    return content;
  });

const draw = (svgRef, data) => {
  //console.log(data);

  var geojson = topojson.feature(geoData, geoData.objects.aus_state);

  var w = 518;
  var h = 400;

  //Define map projection
  var projection = d3
    .geoMercator()
    .center([132, -28])
    .translate([w / 2, h / 2])
    .scale(600);

  var path = d3.geoPath().projection(projection);
  //console.log(path);

  const svg = d3
    .select(svgRef)
    .attr("width", w)
    .attr("height", h);

  const graph = svg.select("#australia");

  graph.call(tip);

  graph
    .selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "dimgray")
    .attr("fill", "blue");

  graph
    .selectAll("path")
    .on("mouseover", (d, i, n) => {
      mouseOver(d, i, n);
    })
    .on("mouseout", (d, i, n) => {
      tip.hide();
      mouseOut(d, i, n);
    })
    .on("click", (d, i, n) => tip.show(d, n[i]));
};

export default draw;
