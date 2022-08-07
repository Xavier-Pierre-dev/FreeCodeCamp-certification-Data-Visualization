function App(){
  
    const [countryData, setCountryData] = React.useState([]);
    const [datatype, setDatatype] = React.useState("casesPerOneMillion");
    const [widthOfBar, setWidthOfBar] = React.useState(5);
    
    React.useEffect(()=>{
      async function fetchCovidData(){
        const response = await fetch("https://disease.sh/v3/covid-19/countries?sort=" + datatype);
        const data = await response.json();
        setCountryData(data);
      }
      
      fetchCovidData();
    }, [datatype, widthOfBar])
    
    return(
    <>
        <div className="container">
          <h1>Covid Stats</h1>
          <div className="container-menu">
          <select name="datatype" id="datatype" onChange={(e)=>setDatatype(e.target.value)}>
            <option value="casesPerOneMillion">cases per one million</option>
            <option value="cases">cases</option>
            <option value="deaths">deaths</option>
            <option value="deathsPerOneMillion">deaths per one million</option>
          </select>
          <label htmlFor="withofbar">width of bar
            <input name="withofbar" type="number" value={widthOfBar} onChange={(e)=>setWidthOfBar(e.target.value)} />
          </label>
          </div>
  
          <div className="visHolder">
  
            <BarChart data={countryData} height={500} widthOfBar={widthOfBar} width={countryData.length * widthOfBar} dataType={datatype} />
          </div>
        </div>
    </>
    );
  }
  
  
  function BarChart({data, height, width, widthOfBar, dataType}){
    
    React.useEffect(()=>{
      createBarChart();
    },[data, widthOfBar]);
    
    let overTooltip = d3.select(".visHolder")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);
    
    const createBarChart = () => {
      const countryData = data.map((country) => country[dataType]);
      console.log("casesPerOneMillion", countryData);
      const countries = data.map((country) => country.country);
      console.log("hellopoto" + countries.length);
      console.log("hellopoto" + countries[3]);
      const dataMax = d3.max(countryData);
      const yScale = d3.scaleLinear().domain([0, dataMax]).range([0, height]);
      d3.select("svg").selectAll("rect").data(countryData).enter().append("rect").attr('class', 'bar');
      d3.select("svg").selectAll("rect").data(countryData).style("fill", (d, i) => (i % 2 == 0 ? "#499FED" : "#1D3E80"))
        .attr('index', (d, i) => i)
        .attr("x", (d, i) => i * widthOfBar)
        .attr("y", (d) => height - yScale(d + dataMax * 0.1))
        .attr("height", (d, i) => yScale(d + dataMax * 0.1))
        .attr("width", widthOfBar)
        .on('mouseover', function(event, d) {
        
        
        let i = this.getAttribute('index');
        d3.select("svg").selectAll("rect").data(countryData).style("fill", (d, index) => {
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
        
        const [x, y] = d3.pointer(event);
  
        
        const countries = data.map((country) => country.country);
        overTooltip.style("opacity", 0.9);
        overTooltip.html(countries[i] + `<br/> ${dataType}: ` + d)
        .style("left", x + 40 + "px")
        .style("top", y + 60 + "px");
        console.log("hello" + countries);
      })
        .on("mouseout", (d) => {
        overTooltip.style("opacity", 0);
        d3.select("svg").selectAll("rect").data(countryData).style("fill", (d, i) => (i % 2 == 0 ? "#499FED" : "#1D3E80"));
      });
    }
    
    return(
    <>
        <div className="visHolder">
          <svg width={width} height={height}></svg>
        </div>
    </>
    )
    
  };
  
  ReactDOM.render(<App/>, document.getElementById('app'));