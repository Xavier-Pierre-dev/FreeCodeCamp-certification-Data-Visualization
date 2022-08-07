let videoGamesDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"


let dataUrl = videoGamesDataUrl
let color =   [
    '#1f77b4',
    '#aec7e8',
    '#ff7f0e',
    '#ffbb78',
    '#2ca02c',
    '#98df8a',
    '#d62728',
    '#ff9896',
    '#9467bd',
    '#c5b0d5',
    '#8c564b',
    '#c49c94',
    '#e377c2',
    '#f7b6d2',
    '#7f7f7f',
    '#c7c7c7',
    '#bcbd22',
    '#dbdb8d',
    '#17becf',
    '#9edae5'
  ]


let canvas = d3.select("#canvas")
let tooltip = d3.select("#tooltip").style('opacity', 0);

let drawTreeMap = () => {
  
  let hierarchy = d3.hierarchy(videoGamesData, (node) => {
    return node['children']
  })
  .sum((node) => {
    return node['value']
  })
  .sort((node1, node2) => {
    return node2['value'] - node2['value']
  })
  
  
  
  let createTreeMap = d3.treemap().size([1000, 600])
  createTreeMap(hierarchy)
  
  let videoGamesDataTiles = hierarchy.leaves()
  console.log(videoGamesDataTiles);
  
  
   let categories = hierarchy.leaves().map(function (nodes) {
      return nodes.data.category;
    });
   categories = categories.filter(function (category, index, self) {
        return self.indexOf(category) === index;
   });
  console.log(categories)

  
  
  let block = canvas.selectAll("g")
  .data(videoGamesDataTiles)
  .enter()
  .append('g')
  .attr('transform', (videoGame) => {
    return 'translate (' + videoGame['x0'] + ', ' + videoGame['y0'] +')'
  })
  
  block.append('rect')
  .attr("class", "tile")
  .attr("fill", (videoGame) => {
    let category = videoGame["data"]["category"]
    for(let i = 0; i < categories.length; i++)
     {
       if(category === categories[i])
         {
           return color[i];
         }
     }
  })
  .attr("data-name", (videoGame) => {
    return videoGame["data"]["name"]
  })
  .attr("data-category", (videoGame) => {
    return videoGame["data"]["category"]
  })
  .attr("data-value", (videoGame) => {
    return videoGame["data"]["value"]
  })
  .attr("width", (videoGame) =>{
    return videoGame["x1"] - videoGame["x0"]
  })
  .attr("height", (videoGame) =>{
    return videoGame["y1"] - videoGame["y0"]
  })
        .on('mousemove', function (event, d) {
        tooltip.style('opacity', 0.9);
        tooltip
          .html(
            'Name: ' +
              d.data.name +
              '<br>Category: ' +
              d.data.category +
              '<br>Value: ' +
              d.data.value
          )
          .attr('data-value', d.data.value)
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        tooltip.style('opacity', 0);
      });
  
  
  block.append("text")
      .attr('class', 'tile-text')
      .selectAll('tspan')
      .data(function (d) {
        return d.data.name.split(/(?=[A-Z][^A-Z])/g);
      })
      .enter()
      .append('tspan')
      .attr('x', 4)
      .attr('y', function (d, i) {
        return 13 + i * 10;
      })
      .text(function (d) {
        return d;
      });
  
  let heightLegendBox = 40
  let paddingLegendBox = 5
  let legend = d3.select("#legend")
  .attr("height", () => {
    return categories.length * (heightLegendBox + paddingLegendBox) + "px"
  })
  .attr("width", "150px")
  
  let blockLegend = legend.selectAll("g").data(categories)
  .enter()
  .append('g')
  .attr("transform", (category) => {
    for(let i = 0; i < categories.length; i++)
     {
       if(category === categories[i])
         {
           return "translate(15," + i * ( heightLegendBox + paddingLegendBox ) + ")";
         }
     }
 })
  
 blockLegend.append("rect")
 .attr("class", "legend-item")
 .attr("width", "40px")
 .attr("height", "40px")
 /*
 .attr("x", "10")
 .attr("y", (category) => {
    for(let i = 0; i < categories.length; i++)
     {
       if(category === categories[i])
         {
           return i * ( heightLegendBox + paddingLegendBox ) + "px";
         }
     }
 })
 */
 .attr("fill", (category) => {
    for(let i = 0; i < categories.length; i++)
     {
       if(category === categories[i])
         {
           return color[i];
         }
     }
 })
  
 blockLegend.append("text")
  .attr("x", "60px")
  .attr("y", "27px")
  /*
  .attr("y", (category) => {
    for(let i = 0; i < categories.length; i++)
     {
       if(category === categories[i])
         {
           return i * ( heightLegendBox + paddingLegendBox * 3 ) + "px";
         }
     }
 })
 */
  .text((category) => {
   return category
 })
  .style("font-size", "20px")
  .attr("fill","white")
  
  
}

d3.json(dataUrl)
  .then((data, error)=>{
  if(error)
  {
    console.log(error)
  }
  else
  {
    videoGamesData = data
    drawTreeMap();
  }
})