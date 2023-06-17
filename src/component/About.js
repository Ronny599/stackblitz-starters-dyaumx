import * as React from 'react';
import * as d3 from 'd3';

export default function About(){
  let record =[54,21,27,69,15,24,58,97,10,95];
  let svgWidth=500,svgHeight=300,barPadding=5;
  let barwidth=(svgWidth/record.length);
  
  let svg=d3.select('svg').attr("width",svgWidth).attr("height",svgHeight);
  let barChart=svg.selectAll("rect").data(record).enter().append("rect").attr("y",function(d){
    return svgHeight-d;
  }).attr("height",function(d){
    return d;
  }).attr("width",barwidth=barPadding).attr("transform",function(d,i){
    var translate =[barwidth=i,0];
    return("translate("+translate+")");
  })
  return <>
     <svg

style={{

  height: 500,

  width: "100%",

  marginRight: "0px",

  marginLeft: "0px",

}}

>

<g className="plot-area" />

<g className="x-axis" />

<g className="y-axis" />

</svg>
  </>;
}
