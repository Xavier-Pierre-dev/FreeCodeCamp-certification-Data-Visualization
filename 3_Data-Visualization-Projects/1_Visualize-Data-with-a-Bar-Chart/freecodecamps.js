const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

/** with async **/
async function fetchAsyncData(){
      const response = await fetch(url);
      const data = await response.json();
      createBarChart(data);
}

/** with promise **/
function fetchPromiseData(){ 
  fetch(url)
  .then(response => response.json())
  .then(response => {
  data = response;
  createBarChart(data);
})
}


function createBarChart(data){
  
  const width = 960;
  const height = 500;
  const barWidth = 5;
  const padding = 60;
  
  var dataMap = data.data.map(d => [d[0], d[1]]);
  

  
  /** scale y axis 
  from 0 to the maximum value inside our set of data => dataMap
  axis range equal height  
  dataMap[0][1] = value
  **/
  const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataMap, d => d[1])])
      .range([height - padding, padding]);
  
  /** scale y axis 
  from minimum date value to the maximum date value inside our set of data => dataMap
  axis range equal height  
  dataMap[0][0] = date
  **/
  const xScale = d3.scaleTime()
      .domain([d3.min(dataMap, d => new Date(d[0])), d3.max(dataMap, d => new Date(d[0]))])
      .range([padding, width - padding])
  
  const svg = d3.select("#container").append("svg")
    .attr("width", width).attr("height", height);
  
  let overTooltip = d3.select(".visHolder")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0);
  
  svg.selectAll('rect')
      .data(dataMap)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('index', (d, i) => i)
      .attr('data-date', d => d[0])
      .attr('data-gdp', d => d[1])
      .attr('x', d => xScale(new Date(d[0])))
      .attr('y', d => yScale(d[1]))
      .attr("width", barWidth)
      .attr('height', d => height - yScale(d[1]) - padding);
  
  d3.select("svg").selectAll("rect").data(dataMap).style("fill", (d, i) => (i % 2 == 0 ? "#499FED" : "#1D3E80"))
    .on('mouseover', function(event, d) {

      let i = this.getAttribute('index');
      d3.select("svg").selectAll("rect").data(dataMap).style("fill", (d, index) => {
      if(i == index){
        return "red";
      }
      else if(index % 2 == 0){
        return "#499FED";
      }
      else{
        return "#1D3E80";
      }
      });
      console.log( data.data[i][1])
    
      const [x, y] = d3.pointer(event);

      
      overTooltip.style("opacity", 0.9);
      overTooltip.html(
            data.data[i][0] +
              '<br>' +
              '$' + data.data[i][1] +
              ' Billion'
          )
      .style("left", x + 40 + "px")
      .style("top", y + 60 + "px")
      .attr('data-date', data.data[i][0]);

      })
      .on("mouseout", (d) => {
      overTooltip.style("opacity", 0);
      d3.select("svg").selectAll("rect").data(dataMap).style("fill", (d, i) => (i % 2 == 0 ? "#499FED" : "#1D3E80"));
    });

  
  
    // create axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  

  
  svg.append("g")
    .attr('id', 'x-axis')
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);
  
  svg.append("g")
    .attr('id', 'y-axis')
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);
  

  
}


fetchAsyncData();
//fetchPromiseData();






