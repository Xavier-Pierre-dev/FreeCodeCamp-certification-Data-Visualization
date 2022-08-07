<div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div><div class="challenge-instructions data-visualization-with-d3"><div><section id="description">
<p>D3 has several methods that let you add and change elements in your document.</p>
<p>The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> anchor <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The <code>d3</code> part of the example is a reference to the D3 object, which is how you access D3 methods.</p>
<p>Two other useful methods are <code>append()</code> and <code>text()</code>.</p>
<p>The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.</p>
<p>The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.</p>
<p>Here's an example that selects an unordered list, appends a list item, and adds text:</p>
<pre class="language-js" tabindex="0"><code class="language-js">d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Very important item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>D3 allows you to chain several methods together with periods to perform a number of actions in a row.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text <code>Learning D3</code> into the <code>h1</code> element.</p>
</section></div><hr/></div>