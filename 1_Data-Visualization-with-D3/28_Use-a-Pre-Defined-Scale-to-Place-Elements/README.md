<div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the <code>x</code> and <code>y</code> raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.</p>
<p>You set the coordinate attribute values for an SVG shape with the scaling function. This includes <code>x</code> and <code>y</code> attributes for <code>rect</code> or <code>text</code> elements, or <code>cx</code> and <code>cy</code> for <code>circles</code>. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">shape
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<p>Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the <code>text()</code> method for a tooltip or label.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>xScale</code> and <code>yScale</code> to position both the <code>circle</code> and <code>text</code> shapes onto the SVG canvas. For the <code>circles</code>, apply the scales to set the <code>cx</code> and <code>cy</code> attributes. Give them a radius of <code>5</code> units, too.</p>
<p>For the <code>text</code> elements, apply the scales to set the <code>x</code> and <code>y</code> attributes. The labels should be offset to the right of the dots. To do this, add <code>10</code> units to the <code>x</code> data value before passing it to the <code>xScale</code>.</p>
</section></div><hr/></div>