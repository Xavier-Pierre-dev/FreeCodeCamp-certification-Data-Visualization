<div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>You can also request data from an external source. This is where APIs come into play.</p>
<p>Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</p>
<p>Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</p>
<p>JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.</p>
<p>These properties and their values are often referred to as "key-value pairs".</p>
<p>However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.</p>
<p>You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">'/json/cats.json'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable. Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a <code>GET</code> request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request. The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code to create and send a <code>GET</code> request to the freeCodeCamp Cat Photo API. Then click the <code>Get Message</code> button. Your AJAX function will replace the <code>The message will go here</code> text with the raw JSON output from the API.</p>
</section></div><hr/></div>