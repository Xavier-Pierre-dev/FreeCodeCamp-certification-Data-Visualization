let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
let req = new XMLHttpRequest();

let values = [];

let xScale;
let yScale;

let xAxis;
let yAxis;

let width = 800;
let height = 600;
let padding = 40;

let svg_article = d3.select("#article");
let svg = d3.select("svg");
let tooltip = d3.select("#tooltip").style('opacity', 0);

let generateScales = () => {
  xScale = d3
    .scaleLinear()
    .domain([
      d3.min(values, (item) => {
        return item["Year"];
      }) - 1,
      d3.max(values, (item) => {
        return item["Year"];
      }) + 1
    ])
    .range([padding, width - padding]);

  yScale = d3
    .scaleTime()
    .domain([
      d3.min(values, (item) => {
        return new Date(item["Seconds"] * 1000);
      }),
      d3.max(values, (item) => {
        return new Date(item["Seconds"] * 1000);
      })
    ])
    .range([padding, height - padding]);
};

let drawCanvas = () => {
  svg.attr("width", width);
  svg.attr("height", height);
};

let drawPoints = () => {
  svg
    .selectAll("circle")
    .data(values)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", "5")
    .attr("data-xvalue", (item) => {
      return item["Year"];
    })
    .attr("data-yvalue", (item) => {
      return new Date(item["Seconds"] * 1000);
    })
    .attr("cx", (item) => {
      return xScale(item["Year"]);
    })
    .attr("cy", (item) => {
      return yScale(new Date(item["Seconds"] * 1000));
    })
    .attr("fill", (item) => {
      if (item["URL"] !== "") {
        return "#ff2222";
      } else {
        return "lightgreen";
      }
    })
    .on('mouseover', function(event, d){
      const [x, y] = d3.pointer(event);
      tooltip.style('opacity', 0.9);
      tooltip.attr('data-year', d.Year);
      tooltip.html
      (
        d.Name + ': ' + d.Nationality +
        '<br/>' +
        'Year: ' + d.Year + ', Time: ' + d.Time + (d.Doping ? '<br/><br/>' + d.Doping : '')
      )
    .style('left', event.pageX + 10 +  'px')
    .style('top', event.pageY + 10 + 'px');
    })
    .on('mouseout', function(){
      tooltip.style('opacity', 0);
    })
    .on("click", function(event, d) { 
    
    svg_article.selectAll('embed').remove();
    svg_article.selectAll('h2').remove();
      if (d["URL"] !== "") {
        svg_article.append('h2').text("Source [Article] : "+ d.Name)
        svg_article.append('embed').attr("type","text/html").attr("src", d.URL).attr('width', width).attr('height', height)
      }

    })
};

let generateAxes = () => {
  xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

  yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

  svg
    .append("g")
    .call(xAxis)
    .attr("id", "x-axis")
    .attr("transform", "translate(0, " + (height - padding) + ")");

  svg
    .append("g")
    .call(yAxis)
    .attr("id", "y-axis")
    .attr("transform", "translate(" + padding + ", 0)");
  
  
    //==========================
    // legend
    //==========================
    var legendContainer = svg.append('g').attr('id', 'legend');
    var legend = legendContainer
      .selectAll('#legend')
      .data(["#ff2222", "lightgreen"])
      .enter()
      .append('g')
      .attr('class', 'legend-label')
      .attr('transform', function (d, i) {
        return 'translate(0,' + (height / 2 - i * 20) + ')';
      });

    legend
      .append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (d) => d);

    legend
      .append('text')
      .attr('x', width - 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .style('fill', 'white')
      .text(function (d) {
        if (d === "#ff2222") {
          return 'Riders with doping allegations';
        } else {
          return 'No doping allegations';
        }
      });
};


req.open("GET", url, true);
req.onload = () => {
  values = JSON.parse(req.responseText);
  console.log(values);
  drawCanvas();
  generateScales();
  drawPoints();
  generateAxes();
};
req.send();
