<div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div><div class="challenge-instructions json-apis-and-ajax"><div><section id="description">
<p>Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.</p>
<p>The navigator will get the user's current longitude and latitude.</p>
<p>You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.</p>
<p>By selecting allow, you will see the text on the output phone change to your latitude and longitude.</p>
<p>Here's code that does this:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">"latitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude <span class="token operator">+</span> <span class="token string">"&lt;br&gt;longitude: "</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.</p>
</section></div><hr/></div>