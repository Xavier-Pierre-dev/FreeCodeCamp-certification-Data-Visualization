function App(){
    const [cyclistData, setCyclistData] = React.useState([]);
    
    React.useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json");
        const data = await response.json();
        setCyclistData(data);
      }
      fetchData();
    }, []);
    
    return (
      <div>
        <Scatterplot data={cyclistData} />
      </div>
    );
    
  };
  
  
  
  
  function Scatterplot({data}){
    let margin = {
      top: 100,
      right: 20,
      bottom: 30,
      left: 60
      };
    const [height , setHeight] = React.useState(630 - margin.top - margin.bottom);
    const [width, setWidth] = React.useState(920 - margin.left - margin.right);
    
    React.useEffect(()=>{
      //avoid the creation of graph when no data was passed
      if(data.length !== 0){
        //reset remaining data to make sur it's fine with react
        resetGraph();
        createScatterplot();
      }
    }, [data]);
    
    
     //==========================
     //define the div for the tooltip
     //==========================
     let overTooltip = d3.select(".visHolder")
     .append("div")
     .attr("id", "tooltip")
     .style("opacity", 0);
    
    const resetGraph = () => {
      //==========================
      //usefull to pass the test only since with react the method was called twice, one time without data and one time with data 
      //so in order to pass the test i should remove one #x-axis since otherwise there is a duplicate value for it 
      //because of that the test trigger the 1st one and the test fail otherwise
      //reset also previous appended dot
      //==========================
      let svgXLike = d3.select("#x-axis");
      console.log("test" + svgXLike.empty());
      
      if(!svgXLike.empty()){
        svgXLike.remove()
      }
      
      let svgYLike = d3.select("#y-axis");
      console.log("test" + svgYLike.empty());
      
      if(!svgYLike.empty()){
        svgYLike.remove()
      }
      let svg = d3.select("svg")
      svg.selectAll(".dot").remove();
      //==========================
    }
    
    
    const createScatterplot = () => {
      //==========================
      //define our axis :
      //range = space taken by the graphe axis
      //domain = min value to max value in order to scale the value properly inside the space range
      //==========================
      let xScale = d3.scaleLinear()
                .range([0, width])
                .domain([
                  d3.min(data, (d) => new Date(d.Year - 1)),
                  d3.max(data, (d) => new Date(d.Year + 1))
                ]);
      
      //change format to time format so that our yAxis can display time
      data.forEach(function (d) {
        d.Place = +d.Place;
        var parsedTime = d.Time.split(':');
        d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
      });
      
  
      
      let yScale = d3.scaleTime()
                .range([0, height])
                .domain(d3.extent(data, (d) => d.Time));
      
      let timeFormat = d3.timeFormat('%M:%S');
      
      let xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
      let yAxis = d3.axisLeft(yScale).tickFormat(timeFormat);
      
  
      
      //==========================
      //define the svg where the graph will be displayed
      //==========================
      let svg = d3.select("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .attr("class", "graph")
                  .append("g")
                  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      
      
      //==========================
      //usefull to pass the test only since with react the method was called twice, one time without data and one time with data 
      //so in order to pass the test i should remove one #x-axis since otherwise there is a duplicate value for it 
      //because of that the test trigger the 1st one and the test fail otherwise
      //reset also previous appended dot
      //==========================
      /*
      let svgXLike = d3.select("#x-axis");
      console.log("test" + svgXLike.empty());
      
      if(!svgXLike.empty()){
        svgXLike.remove()
      }
      
      let svgYLike = d3.select("#y-axis");
      console.log("test" + svgYLike.empty());
      
      if(!svgYLike.empty()){
        svgYLike.remove()
      }
      
      svg.selectAll(".dot").remove();
      */
      //==========================
      
      
      //define the axis on the graph :
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .append('text')
        .attr('class', 'x-axis-label')
        .attr('x', width)
        .attr('y', -6);
  
      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('id', 'y-axis')
        .call(yAxis)
        .append('text')
        .attr('class', 'label')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em');
  
      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -160)
        .attr('y', -44)
        .style('font-size', 18)
        .text('Time in Minutes');
      
      //==========================
      //put our data points on the graph
      //==========================
      svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("r", 6)
      .attr('cx', function (d) {
        return xScale(d.Year);
      })
      .attr('cy', function (d) {
        return yScale(d.Time);
      })
      .attr('data-xvalue', function (d) {
        return d.Year;
      })
      .attr("data-yvalue", function (d) {
        //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
        return d.Time.toISOString();
      })
      .style("fill", function (d) {
        return d.Doping !== "" ? "#ff2222" : "#ff8832";
      })
      .on('mouseover', function(event, d){
        
        overTooltip.style('opacity', 0.9);
        overTooltip.attr('data-year', d.Year);
        overTooltip.html
        (
          d.Name + ': ' + d.Nationality +
          '<br/>' +
          'Year: ' + d.Year + ', Time: ' + timeFormat(d.Time) + (d.Doping ? '<br/><br/>' + d.Doping : '')
        )
      .style('left', event.pageX + 10 +  'px')
      .style('top', event.pageY + 10 + 'px');
      })
      .on('mouseout', function(){
        overTooltip.style('opacity', 0);
      });
  
    
      //==========================
      //title
      //==========================
      svg
        .append('text')
        .attr('id', 'title')
        .attr('x', width / 2)
        .attr('y', 0 - margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '30px')
        .text('Doping in Professional Bicycle Racing');
    
      //==========================
      // subtitle
      //==========================
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', 0 - margin.top / 2 + 25)
        .attr('text-anchor', 'middle')
        .style('font-size', '20px')
        .text("35 Fastest times up Alpe d'Huez");  
    
      //==========================
      // legend
      //==========================
      var legendContainer = svg.append('g').attr('id', 'legend');
      var legend = legendContainer
        .selectAll('#legend')
        .data(["#ff2222", "#ff8832"])
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
        .text(function (d) {
          if (d === "#ff2222") {
            return 'Riders with doping allegations';
          } else {
            return 'No doping allegations';
          }
        });
      };
    
    return (
    <>
        <div className="visHolder">
          <svg width={width} height={height}></svg>
        </div>
    </>
    );
  
  };
  
  
  ReactDOM.render(<App/>, document.getElementById('app'));
  
    
  