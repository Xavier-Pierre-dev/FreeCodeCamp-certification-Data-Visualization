<div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Now that you're getting data from a JSON API, you can display it in the HTML.</p>
<p>You can use a <code>forEach</code> method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.</p>
<p>First, declare an html variable with <code>let html = "";</code>.</p>
<p>Then, loop through the JSON, adding HTML to the variable that wraps the key names in <code>strong</code> tags, followed by the value. When the loop is finished, you render it.</p>
<p>Here's the code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;div class = 'cat'&gt;"</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token string">"&lt;strong&gt;"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"&lt;/strong&gt;: "</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;br&gt;"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  html <span class="token operator">+=</span> <span class="token string">"&lt;/div&gt;&lt;br&gt;"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Note:</strong> For this challenge, you need to add new HTML elements to the page, so you cannot rely on <code>textContent</code>. Instead, you need to use <code>innerHTML</code>, which can make a site vulnerable to cross-site scripting attacks.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>forEach</code> method to loop over the JSON data and create the HTML elements to display it.</p>
<p>Here is some example JSON:</p>
<pre class="language-json" tabindex="0"><code class="language-json">[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
</code></pre>
</section></div><hr/></div>