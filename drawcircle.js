const d3 = require('d3');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>`);
const document = dom.window.document;
 
var svg = d3.select(document.body).append('svg')
         .attr('xmlns', 'http://www.w3.org/2000/svg')
         .attr('width', 500)
         .attr('height', 500);
 
 
svg.append("circle")
 .attr("cx",250)
 .attr("cy",250)
 .attr("r",250)
 .attr("fill","Red");
 
console.log(document.body.innerHTML);

//node drawcircle.js > mycircle.svg