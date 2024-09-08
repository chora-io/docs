import{_ as e,o as t,c as n,e as a}from"./app-CiOG3kca.js";const r={},s=a(`<h1 id="msg-updatecontentcurator" tabindex="-1"><a class="header-anchor" href="#msg-updatecontentcurator"><span>Msg/UpdateContentCurator</span></a></h1><p>UpdateContentCurator is successful when:</p><ul><li>curator is the content curator</li></ul><p>UpdateContentCurator has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateContentCurator is emitted</li></ul><h2 id="the-curator-must-be-the-content-curator" tabindex="-1"><a class="header-anchor" href="#the-curator-must-be-the-content-curator"><span>The curator must be the content curator</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="curator-is-content-curator" tabindex="-1"><a class="header-anchor" href="#curator-is-content-curator"><span>curator is content curator</span></a></h3><p><em>When</em> msg update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
  &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="curator-is-not-content-curator" tabindex="-1"><a class="header-anchor" href="#curator-is-not-content-curator"><span>curator is not content curator</span></a></h3><p><em>When</em> msg update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
  &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curator chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: content curator chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
   &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
 &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-is-updated-in-state" tabindex="-1"><a class="header-anchor" href="#content-is-updated-in-state"><span>Content is updated in state</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-content-updated" tabindex="-1"><a class="header-anchor" href="#state-content-updated"><span>state content updated</span></a></h3><p><em>When</em> msg update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
  &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventupdatecontentcurator-emitted" tabindex="-1"><a class="header-anchor" href="#eventupdatecontentcurator-emitted"><span>EventUpdateContentCurator emitted</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-update-curator-emitted" tabindex="-1"><a class="header-anchor" href="#event-update-curator-emitted"><span>event update curator emitted</span></a></h3><p><em>When</em> msg update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
  &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event update content curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),u=[s];function d(i,o){return t(),n("div",null,u)}const l=e(r,[["render",d],["__file","keeper_msg_update_content_curator.html.vue"]]),h=JSON.parse('{"path":"/specs/mods/content/keeper_msg_update_content_curator.html","title":"Msg/UpdateContentCurator","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The curator must be the content curator","slug":"the-curator-must-be-the-content-curator","link":"#the-curator-must-be-the-content-curator","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"curator is content curator","slug":"curator-is-content-curator","link":"#curator-is-content-curator","children":[]},{"level":3,"title":"curator is not content curator","slug":"curator-is-not-content-curator","link":"#curator-is-not-content-curator","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Content is updated in state","slug":"content-is-updated-in-state","link":"#content-is-updated-in-state","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"state content updated","slug":"state-content-updated","link":"#state-content-updated","children":[]}]},{"level":2,"title":"EventUpdateContentCurator emitted","slug":"eventupdatecontentcurator-emitted","link":"#eventupdatecontentcurator-emitted","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"event update curator emitted","slug":"event-update-curator-emitted","link":"#event-update-curator-emitted","children":[]}]}],"git":{},"filePathRelative":"specs/mods/content/keeper_msg_update_content_curator.md"}');export{l as comp,h as data};