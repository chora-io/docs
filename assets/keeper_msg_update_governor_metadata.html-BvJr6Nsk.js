import{_ as e,o as t,c as a,e as n}from"./app-CiOG3kca.js";const d={},r=n(`<h1 id="msg-updategovernormetadata" tabindex="-1"><a class="header-anchor" href="#msg-updategovernormetadata"><span>Msg/UpdateGovernorMetadata</span></a></h1><p>UpdateGovernorMetadata is successful when:</p><ul><li>governor with address exists</li></ul><p>UpdateGovernorMetadata has the following outcomes:</p><ul><li>Governor is updated in state</li><li>EventUpdateGovernorMetadata is emitted</li><li>MsgUpdateGovernorMetadataResponse is returned</li></ul><h2 id="the-governor-must-exist" tabindex="-1"><a class="header-anchor" href="#the-governor-must-exist"><span>The governor must exist</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="governor-exists" tabindex="-1"><a class="header-anchor" href="#governor-exists"><span>governor exists</span></a></h3><p><em>When</em> msg update governor metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="governor-does-not-exist" tabindex="-1"><a class="header-anchor" href="#governor-does-not-exist"><span>governor does not exist</span></a></h3><p><em>When</em> msg update governor metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>governor with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found: not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="governor-is-updated-in-state" tabindex="-1"><a class="header-anchor" href="#governor-is-updated-in-state"><span>Governor is updated in state</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-governor-updated" tabindex="-1"><a class="header-anchor" href="#state-governor-updated"><span>state governor updated</span></a></h3><p><em>When</em> msg update governor metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventupdategovernormetadata-emitted" tabindex="-1"><a class="header-anchor" href="#eventupdategovernormetadata-emitted"><span>EventUpdateGovernorMetadata emitted</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-update-governor-emitted" tabindex="-1"><a class="header-anchor" href="#event-update-governor-emitted"><span>event update governor emitted</span></a></h3><p><em>When</em> msg update governor metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event update governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="msgupdategovernormetadataresponse-is-returned" tabindex="-1"><a class="header-anchor" href="#msgupdategovernormetadataresponse-is-returned"><span>MsgUpdateGovernorMetadataResponse is returned</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> governor</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg update governor metadata</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),s=[r];function i(o,u){return t(),a("div",null,s)}const v=e(d,[["render",i],["__file","keeper_msg_update_governor_metadata.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/governor/keeper_msg_update_governor_metadata.html","title":"Msg/UpdateGovernorMetadata","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The governor must exist","slug":"the-governor-must-exist","link":"#the-governor-must-exist","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"governor exists","slug":"governor-exists","link":"#governor-exists","children":[]},{"level":3,"title":"governor does not exist","slug":"governor-does-not-exist","link":"#governor-does-not-exist","children":[]}]},{"level":2,"title":"Governor is updated in state","slug":"governor-is-updated-in-state","link":"#governor-is-updated-in-state","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"state governor updated","slug":"state-governor-updated","link":"#state-governor-updated","children":[]}]},{"level":2,"title":"EventUpdateGovernorMetadata emitted","slug":"eventupdategovernormetadata-emitted","link":"#eventupdategovernormetadata-emitted","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"event update governor emitted","slug":"event-update-governor-emitted","link":"#event-update-governor-emitted","children":[]}]},{"level":2,"title":"MsgUpdateGovernorMetadataResponse is returned","slug":"msgupdategovernormetadataresponse-is-returned","link":"#msgupdategovernormetadataresponse-is-returned","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]}],"git":{},"filePathRelative":"specs/mods/governor/keeper_msg_update_governor_metadata.md"}');export{v as comp,c as data};