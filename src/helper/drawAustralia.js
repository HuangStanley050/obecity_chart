import * as d3 from "d3";
import * as topojson from "topojson";
import geoData from "../geoData/aus_state_topojson";

const draw = svgRef => {
  //console.log("drawing australia");
  //console.log(geoData);
  var geojson = topojson.feature(geoData, geoData.objects.aus_state);
  //console.log("geojson", geojson);
  var w = 518;
  var h = 400;

  //Define map projection
  var projection = d3
    .geoMercator()
    .center([132, -28])
    .translate([w / 2, h / 2])
    .scale(600);

  var path = d3.geoPath().projection(projection);
  console.log(path);

  const svg = d3
    .select(svgRef)
    .attr("width", w)
    .attr("height", h);

  const graph = svg.select("#australia");

  graph
    .selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "dimgray")
    .attr("fill", "blue");
};

export default draw;
