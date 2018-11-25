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

const tip = d3tip()
  .attr("class", "tip card")
  .html(d => {
    //console.log(d.data.cost);
    let content = `<div class="name">${d.properties.STATE_NAME}</div>`;
    console.log(d.properties);
    return content;
  });

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
