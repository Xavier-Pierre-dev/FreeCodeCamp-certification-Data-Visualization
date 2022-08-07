<div class="challenge-instructions"><div><section id="description">
<p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://codepen.io/freeCodeCamp/full/GrZVaM" rel="noopener noreferrer nofollow" target="_blank">https://codepen.io/freeCodeCamp/full/GrZVaM</a>.</p>
<p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
<p>You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at <a href="https://github.com/d3/d3/blob/master/API.md#axes-d3-axis">https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a>. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.</p>
<p><strong>User Story #1:</strong> My chart should have a title with a corresponding <code>id="title"</code>.</p>
<p><strong>User Story #2:</strong> My chart should have a <code>g</code> element x-axis with a corresponding <code>id="x-axis"</code>.</p>
<p><strong>User Story #3:</strong> My chart should have a <code>g</code> element y-axis with a corresponding <code>id="y-axis"</code>.</p>
<p><strong>User Story #4:</strong> Both axes should contain multiple tick labels, each with a corresponding <code>class="tick"</code>.</p>
<p><strong>User Story #5:</strong> My chart should have a <code>rect</code> element for each data point with a corresponding <code>class="bar"</code> displaying the data.</p>
<p><strong>User Story #6:</strong> Each bar should have the properties <code>data-date</code> and <code>data-gdp</code> containing <code>date</code> and <code>GDP</code> values.</p>
<p><strong>User Story #7:</strong> The bar elements' <code>data-date</code> properties should match the order of the provided data.</p>
<p><strong>User Story #8:</strong> The bar elements' <code>data-gdp</code> properties should match the order of the provided data.</p>
<p><strong>User Story #9:</strong> Each bar element's height should accurately represent the data's corresponding <code>GDP</code>.</p>
<p><strong>User Story #10:</strong> The <code>data-date</code> attribute and its corresponding bar element should align with the corresponding value on the x-axis.</p>
<p><strong>User Story #11:</strong> The <code>data-gdp</code> attribute and its corresponding bar element should align with the corresponding value on the y-axis.</p>
<p><strong>User Story #12:</strong> I can mouse over an area and see a tooltip with a corresponding <code>id="tooltip"</code> which displays more information about the area.</p>
<p><strong>User Story #13:</strong> My tooltip should have a <code>data-date</code> property that corresponds to the <code>data-date</code> of the active area.</p>
<p>Here is the dataset you will need to complete this project: <code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json</code></p>
<p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" rel="noopener noreferrer nofollow" target="_blank">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code>.</p>
<p>Once you're done, submit the URL to your working project with all its tests passing.</p>
</section></div><hr/></div>