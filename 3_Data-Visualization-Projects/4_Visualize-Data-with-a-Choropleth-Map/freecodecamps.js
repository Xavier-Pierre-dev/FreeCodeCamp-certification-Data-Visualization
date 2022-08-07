let countyURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
let educationURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

let countyData
let educationData

let defLegend = () => {
//let formatPercent = d3.format(".0%"),
// formatNumber = d3.format(".0f");


let threshold = d3.scaleThreshold()
    .domain([15, 30, 45])
    .range(["#F06348","#F3A403","#90EE90", "#2B8000"]);
  
let xLegend = d3.scaleLinear()
    .domain([0, 100])
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

let canvas = d3.select("#canvas");
let tooltip = d3.select("#tooltip").style('opacity', 0);

let drawMap = () => {
  
canvas.selectAll("path")
  .data(countyData)
  .enter()
  .append("path")
  .attr("d", d3.geoPath())
  .attr("class", "county")
  .attr("fill", (countyDataItem) => {
    let id = countyDataItem.id
    let county = educationData.find((item) =>{
      return item["fips"] === id;
    })
    let percentage = county["bachelorsOrHigher"]
    if(percentage <= 15)
      {
        return "tomato"
      }
    else if(percentage <= 30)
      {
        return "orange"
      }
    else if(percentage <= 45)
      {
        return "lightgreen"
      }
    else
      {
        return "green"
      }
  })
  .attr('data-fips', (item) => {
    return item['id']
  })
  .attr('data-education', (item) => {
      let fips = item['id']
      let county = educationData.find((county) => {
          return county['fips'] === fips
      })
      let percentage = county['bachelorsOrHigher']
      return percentage
  })
    .on('mouseover', function(event, countyDataItem){
      const [x, y] = d3.pointer(event);
      tooltip.transition()
            .style('visibility', 'visible')
      
      tooltip.style('opacity', 0.9);
  
      let fips = countyDataItem['id']
      let county = educationData.find((county) => {
          return county['fips'] === fips
      })
      tooltip.attr('data-education', county['bachelorsOrHigher'])

      tooltip.html
      (
        county['fips'] + ' - ' + county['area_name'] + ', ' + 
        county['state'] + ' : ' + county['bachelorsOrHigher'] + '%'
      )
    .style('left', event.pageX + 10 +  'px')
    .style('top', event.pageY + 10 + 'px');
    })
    .on('mouseout', function(){
    tooltip.transition()
            .style('visibility', 'hidden')
    });
}




d3.json(countyURL).then((data, error) => {
  if(error)
    {
      console.log(error)
    }
  else
    {
      countyData = topojson.feature(data, data.objects.counties).features
      console.log(countyData)
      d3.json(educationURL).then((data, error) =>{
        if(error)
          {
            console.log(error)
          }
        else
          {
            educationData = data
            console.log(educationData)
            drawMap();
            defLegend();
          }
      })
    }
})