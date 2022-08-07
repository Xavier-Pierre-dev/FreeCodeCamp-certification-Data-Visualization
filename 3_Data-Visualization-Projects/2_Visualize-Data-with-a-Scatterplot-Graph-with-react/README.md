<div class="challenge-instructions"><div><section id="description">
<p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://codepen.io/freeCodeCamp/full/bgpXyK" rel="noopener noreferrer nofollow" target="_blank">https://codepen.io/freeCodeCamp/full/bgpXyK</a>.</p>
<p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
<p>You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at <a href="https://github.com/d3/d3/blob/master/API.md#axes-d3-axis">https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a>. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.</p>
<p><strong>User Story #1:</strong> I can see a title element that has a corresponding <code>id="title"</code>.</p>
<p><strong>User Story #2:</strong> I can see an x-axis that has a corresponding <code>id="x-axis"</code>.</p>
<p><strong>User Story #3:</strong> I can see a y-axis that has a corresponding <code>id="y-axis"</code>.</p>
<p><strong>User Story #4:</strong> I can see dots, that each have a class of <code>dot</code>, which represent the data being plotted.</p>
<p><strong>User Story #5:</strong> Each dot should have the properties <code>data-xvalue</code> and <code>data-yvalue</code> containing their corresponding <code>x</code> and <code>y</code> values.</p>
<p><strong>User Story #6:</strong> The <code>data-xvalue</code> and <code>data-yvalue</code> of each dot should be within the range of the actual data and in the correct data format. For <code>data-xvalue</code>, integers (full years) or <code>Date</code> objects are acceptable for test evaluation. For <code>data-yvalue</code> (minutes), use <code>Date</code> objects.</p>
<p><strong>User Story #7:</strong> The <code>data-xvalue</code> and its corresponding dot should align with the corresponding point/value on the x-axis.</p>
<p><strong>User Story #8:</strong> The <code>data-yvalue</code> and its corresponding dot should align with the corresponding point/value on the y-axis.</p>
<p><strong>User Story #9:</strong> I can see multiple tick labels on the y-axis with <code>%M:%S</code> time format.</p>
<p><strong>User Story #10:</strong> I can see multiple tick labels on the x-axis that show the year.</p>
<p><strong>User Story #11:</strong> I can see that the range of the x-axis labels are within the range of the actual x-axis data.</p>
<p><strong>User Story #12:</strong> I can see that the range of the y-axis labels are within the range of the actual y-axis data.</p>
<p><strong>User Story #13:</strong> I can see a legend containing descriptive text that has <code>id="legend"</code>.</p>
<p><strong>User Story #14:</strong> I can mouse over an area and see a tooltip with a corresponding <code>id="tooltip"</code> which displays more information about the area.</p>
<p><strong>User Story #15:</strong> My tooltip should have a <code>data-year</code> property that corresponds to the <code>data-xvalue</code> of the active area.</p>
<p>Here is the dataset you will need to complete this project: <code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json</code></p>
<p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" rel="noopener noreferrer nofollow" target="_blank">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
<p>Once you're done, submit the URL to your working project with all its tests passing.</p>
</section></div><hr/></div>