<div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.</p>
<p>In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.</p>
<p>To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.</p>
<p>The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.</p>
<p>The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.</p>
<p><strong>Note:</strong> In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.</p>
</section></div><hr/></div>