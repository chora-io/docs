import{_ as e,o as t,c as n,e as a}from"./app-CiOG3kca.js";const r={},s=a(`<h1 id="msg-createcontent" tabindex="-1"><a class="header-anchor" href="#msg-createcontent"><span>Msg/CreateContent</span></a></h1><p>Msg/CreateContent is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/CreateContent has the following outcomes:</p><ul><li>message response returned</li><li>Content is added to state</li><li>EventCreateContent is emitted</li></ul><h2 id="an-error-is-never-returned" tabindex="-1"><a class="header-anchor" href="#an-error-is-never-returned"><span>An error is never returned</span></a></h2><h3 id="never-error" tabindex="-1"><a class="header-anchor" href="#never-error"><span>never error</span></a></h3><p><em>When</em> msg create content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg create content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-is-added-to-state" tabindex="-1"><a class="header-anchor" href="#content-is-added-to-state"><span>Content is added to state</span></a></h2><h3 id="state-content-added" tabindex="-1"><a class="header-anchor" href="#state-content-added"><span>state content added</span></a></h3><p><em>When</em> msg create content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventcreatecontent-is-emitted" tabindex="-1"><a class="header-anchor" href="#eventcreatecontent-is-emitted"><span>EventCreateContent is emitted</span></a></h2><h3 id="event-create-emitted" tabindex="-1"><a class="header-anchor" href="#event-create-emitted"><span>event create emitted</span></a></h3><p><em>When</em> msg create content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event create content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),d=[s];function i(o,l){return t(),n("div",null,d)}const u=e(r,[["render",i],["__file","keeper_msg_create_content.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/content/keeper_msg_create_content.html","title":"Msg/CreateContent","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"An error is never returned","slug":"an-error-is-never-returned","link":"#an-error-is-never-returned","children":[{"level":3,"title":"never error","slug":"never-error","link":"#never-error","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Content is added to state","slug":"content-is-added-to-state","link":"#content-is-added-to-state","children":[{"level":3,"title":"state content added","slug":"state-content-added","link":"#state-content-added","children":[]}]},{"level":2,"title":"EventCreateContent is emitted","slug":"eventcreatecontent-is-emitted","link":"#eventcreatecontent-is-emitted","children":[{"level":3,"title":"event create emitted","slug":"event-create-emitted","link":"#event-create-emitted","children":[]}]}],"git":{},"filePathRelative":"specs/mods/content/keeper_msg_create_content.md"}');export{u as comp,v as data};