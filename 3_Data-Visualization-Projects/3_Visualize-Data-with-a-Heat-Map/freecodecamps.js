let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
let req = new XMLHttpRequest();

let baseTemp;
let values = [];

let xScale;
let yScale;

let width = 1200;
let height = 600;
let padding = 60;

let minYear;
let maxYear;
let maxTemp;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let color = [];



color = ["#4681B4", "#B0C4DE", "#F3A403", "#DC143C"];
color = ['#4575B4', '#74ADD1', '#ABD9E9', '#E0F3F8', '#F9E090', '#F4AE61', '#F06D43', '#D73027'];

let tooltip = d3.select("#tooltip").style('opacity', 0);


let canvas = d3.select("#canvas")
.attr('width', width)
.attr('height', height);



//https://bl.ocks.org/mbostock/4573883 
let defLegend = () => {
//let formatPercent = d3.format(".0%"),
// formatNumber = d3.format(".0f");

//generate domain for us
//if color.length = 4 expected output : [0.25 * maxTemp, 0.50 * maxTemp, 0.75 * maxTemp]
let domain = [];
for(let i = 1; i < color.length; i++)
{
    domain.push(1 / (color.length) * i * maxTemp);
}

//both equal if color.length = 4
//console.log(domain)
//console.log([0.25 * maxTemp, 0.50 * maxTemp, 0.75 * maxTemp])

let threshold = d3.scaleThreshold()
    .domain(domain)
    .range(color);
  
let xLegend = d3.scaleLinear()
    .domain([0, maxTemp])
    .range([0, 300]);

let xAxisLegend = d3.axisBottom(xLegend)
    .tickSize(13)
    .tickValues(threshold.domain())
    .tickFormat(function(d) { return d })
;

let legend = d3.select("#legend");
  
let g = legend.select("g")
.attr("transform", "translate(0,30)")
.call(xAxisLegend);
  

g.select(".domain")
    .remove();

legend.append("g").selectAll("rect")
  .data(threshold.range().map(function(color) {
    var d = threshold.invertExtent(color);
    if (d[0] == null) d[0] = xLegend.domain()[0];
    if (d[1] == null) d[1] = xLegend.domain()[1];
    return d;
  }))
  .enter().insert("rect", ".tick")
    .attr("height", 30)
    .attr("x", function(d) { return xLegend(d[0]); })
    .attr("width", function(d) { return xLegend(d[1]) - xLegend(d[0]); })
    .attr("fill", function(d) { return threshold(d[0]); });

}

let defHeading = () => {

let heading = d3.select('heading');
  heading
    .append('h3')
    .attr('id', 'description')
    .html(
      values[0].year +
        ' - ' +
        values[values.length - 1].year +
        ': base temperature ' +
        baseTemp +
        '&#8451;'
    );  
}

let generateScales = () => {
  
  minYear = d3.min(values, (item) => {
    return item.year;
  })
  
  maxYear = d3.max(values, (item) => {
    return item.year;
  })
  
  xScale = d3.scaleLinear()
  .domain([minYear, maxYear])
  .range([padding, width - padding]);
  
  yScale = d3.scaleTime()
  .domain([new Date(0, 0, 0, 0, 0, 0, 0, 0), new Date(0, 12, 0, 0, 0, 0, 0, 0)])
  .range([padding, height - padding]);
  

  
}

let drawCells = () => {
  
  canvas.selectAll('rect')
  .data(values)
  .enter()
  .append('rect')
  .attr("class", "cell")
  .attr("fill", (item) => {
    console.log(item);
    temperature = baseTemp + item.variance;

    
    var resultColor = color[0];
    for(let i = 1; i < color.length - 1; i++)
    {
        if(temperature > (1 / (color.length - 1) * i * maxTemp))
        {
          resultColor = color[i+1];
        }
    }
    return resultColor;
    
    /*
    //example for color = ["#4681B4", "#B0C4DE", "#F3A403", "#DC143C"];
    //so for color.length = 4
    if(temperature <= maxTemp * 0.25)
    {
      
      return color[0];
    }
    else if(temperature <= maxTemp * 0.5)
    {
      return color[1];   
    }
    else if(temperature <= maxTemp * 0.75)
    {
      return color[2];
    }
    else
    {
      return color[3];
    }
    */
  })
  .attr("data-year", (item) => {
    return item.year;
  })
  .attr("data-month",(item) => {
    return item.month - 1;
  })
  .attr("data-temp",(item) => {
    return baseTemp + item.variance;
  })
  .attr("height", ((height - 2 * padding) / 12))
  .attr("y", (item) => {
    return yScale(new Date(0, item.month - 1, 0, 0, 0, 0, 0))
  })
  .attr("width", (width - 2 * padding) / (maxYear - minYear))
  .attr("x", (item) => {
    return xScale(item.year);
  })
  .on('mouseover', function(event, d){
      const [x, y] = d3.pointer(event);
      //console.log(d);
      let temperature = baseTemp + d.variance;
      tooltip.style('opacity', 0.9);
      tooltip.attr('data-year', d.year);
      tooltip.html
      (
        d.year + ' - ' + months[d.month - 1] +
        '<br/>' +
        'Temperature : ' + temperature + 
        '<br/>' +
        'Variance : ' + d.variance
      )
    .style('left', event.pageX + 10 +  'px')
    .style('top', event.pageY + 10 + 'px');
    })
    .on('mouseout', function(){
      tooltip.style('opacity', 0);
    });
  
}

let drawAxes = () => {
  let xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format('d'));
  
  canvas.append('g')
  .call(xAxis)
  .attr("transform", "translate(0, " + (height - padding) + ")")
  .attr("id", "x-axis");
  
  let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%B'));
  
  canvas.append('g')
  .call(yAxis)
  .attr("transform", "translate(" + padding + ", 0)")
  .attr("id", "y-axis");
}

req.open('GET', url, true);
req.onload = () => {
  let object = JSON.parse(req.responseText);
  baseTemp = object.baseTemperature;
  values = object.monthlyVariance;
  
  
  let variance = values.map(function (val) {
    return val.variance;
});

  maxTemp = baseTemp + Math.max.apply(null, variance);
  
  defHeading();
  generateScales();
  drawCells();
  drawAxes();
  defLegend();
}
req.send();