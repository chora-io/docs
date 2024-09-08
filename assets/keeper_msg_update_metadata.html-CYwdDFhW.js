import{_ as e,o as t,c as a,e as s}from"./app-CiOG3kca.js";const i={},d=s(`<h1 id="msg-updatemetadata" tabindex="-1"><a class="header-anchor" href="#msg-updatemetadata"><span>Msg/UpdateMetadata</span></a></h1><p>UpdateMetadata is successful when:</p><ul><li>issuer is the voucher issuer</li></ul><p>UpdateMetadata has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateMetadata is emitted</li></ul><h2 id="the-issuer-must-be-the-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#the-issuer-must-be-the-voucher-issuer"><span>The issuer must be the voucher issuer</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issuer-is-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#issuer-is-voucher-issuer"><span>issuer is voucher issuer</span></a></h3><p><em>When</em> msg update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="issuer-is-not-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#issuer-is-not-voucher-issuer"><span>issuer is not voucher issuer</span></a></h3><p><em>When</em> msg update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-is-updated-in-state" tabindex="-1"><a class="header-anchor" href="#content-is-updated-in-state"><span>Content is updated in state</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-voucher-updated" tabindex="-1"><a class="header-anchor" href="#state-voucher-updated"><span>state voucher updated</span></a></h3><p><em>When</em> msg update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventupdatemetadata-emitted" tabindex="-1"><a class="header-anchor" href="#eventupdatemetadata-emitted"><span>EventUpdateMetadata emitted</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-update-metadata-emitted" tabindex="-1"><a class="header-anchor" href="#event-update-metadata-emitted"><span>event update metadata emitted</span></a></h3><p><em>When</em> msg update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event update metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),n=[d];function u(r,l){return t(),a("div",null,n)}const c=e(i,[["render",u],["__file","keeper_msg_update_metadata.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/voucher/keeper_msg_update_metadata.html","title":"Msg/UpdateMetadata","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The issuer must be the voucher issuer","slug":"the-issuer-must-be-the-voucher-issuer","link":"#the-issuer-must-be-the-voucher-issuer","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"issuer is voucher issuer","slug":"issuer-is-voucher-issuer","link":"#issuer-is-voucher-issuer","children":[]},{"level":3,"title":"issuer is not voucher issuer","slug":"issuer-is-not-voucher-issuer","link":"#issuer-is-not-voucher-issuer","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Content is updated in state","slug":"content-is-updated-in-state","link":"#content-is-updated-in-state","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"state voucher updated","slug":"state-voucher-updated","link":"#state-voucher-updated","children":[]}]},{"level":2,"title":"EventUpdateMetadata emitted","slug":"eventupdatemetadata-emitted","link":"#eventupdatemetadata-emitted","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"event update metadata emitted","slug":"event-update-metadata-emitted","link":"#event-update-metadata-emitted","children":[]}]}],"git":{},"filePathRelative":"specs/mods/voucher/keeper_msg_update_metadata.md"}');export{c as comp,v as data};
