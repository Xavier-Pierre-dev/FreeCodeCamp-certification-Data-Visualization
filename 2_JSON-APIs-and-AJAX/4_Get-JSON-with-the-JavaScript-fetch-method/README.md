<div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another way to request external data is to use the JavaScript <code>fetch()</code> method. It is equivalent to <code>XMLHttpRequest</code>, but the syntax is considered easier to understand.</p>
<p>Here is the code for making a GET request to <code>/json/cats.json</code></p>
<pre class="language-js" tabindex="0"><code class="language-js">
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>Take a look at each piece of this code.</p>
<p>The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a <code>GET</code> request to the URL specified. The method returns a Promise.</p>
<p>After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.</p>
<p>The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for!</p>
<p>Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.</p>
</section></div><hr/></div>