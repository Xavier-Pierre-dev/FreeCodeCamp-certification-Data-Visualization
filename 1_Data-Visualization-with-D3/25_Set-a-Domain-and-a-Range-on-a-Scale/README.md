<div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.</p>
<p>Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.</p>
<p>You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.</p>
<p>The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js">scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scale<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">325</span><span class="token punctuation">)</span>
<span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">750</span><span class="token punctuation">)</span>
d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>In order, the following values would be displayed in the console: <code>10</code>, <code>500</code>, <code>323.37</code>, and <code>807.67</code>.</p>
<p>Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.</p>
<p><strong>Note:</strong> You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.</p>
</section></div><hr/></div>