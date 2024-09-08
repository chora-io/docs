import{_ as e,o as a,c as t,e as n}from"./app-CiOG3kca.js";const i={},s=n(`<h1 id="msg-removevalidator" tabindex="-1"><a class="header-anchor" href="#msg-removevalidator"><span>Msg/RemoveValidator</span></a></h1><p>RemoveValidator is successful when:</p><ul><li>validator with address exists</li></ul><p>RemoveValidator has the following outcomes:</p><ul><li>Validator is removed from state</li><li>ValidatorSigningInfo is removed from state</li><li>EventRemoveValidator is emitted</li><li>MsgRemoveValidatorResponse is returned</li></ul><h2 id="the-validator-must-exist" tabindex="-1"><a class="header-anchor" href="#the-validator-must-exist"><span>The validator must exist</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> validator signing info</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;missed_blocks&quot;: [],
  &quot;missed_blocks_count&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="validator-exists" tabindex="-1"><a class="header-anchor" href="#validator-exists"><span>validator exists</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="validator-does-not-exist" tabindex="-1"><a class="header-anchor" href="#validator-does-not-exist"><span>validator does not exist</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>validator with address chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: not found: not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="validator-is-removed-from-state" tabindex="-1"><a class="header-anchor" href="#validator-is-removed-from-state"><span>Validator is removed from state</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> validator signing info</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;missed_blocks&quot;: [],
  &quot;missed_blocks_count&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-validator-removed" tabindex="-1"><a class="header-anchor" href="#state-validator-removed"><span>state validator removed</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no validator with address &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;.</p><h2 id="validatorsigninginfo-is-removed-from-state" tabindex="-1"><a class="header-anchor" href="#validatorsigninginfo-is-removed-from-state"><span>ValidatorSigningInfo is removed from state</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> validator signing info</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;missed_blocks&quot;: [],
  &quot;missed_blocks_count&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-validator-removed-1" tabindex="-1"><a class="header-anchor" href="#state-validator-removed-1"><span>state validator removed</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no validator signing info with address &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;.</p><h2 id="eventremovevalidator-emitted" tabindex="-1"><a class="header-anchor" href="#eventremovevalidator-emitted"><span>EventRemoveValidator emitted</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> validator signing info</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;missed_blocks&quot;: [],
  &quot;missed_blocks_count&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-remove-emitted" tabindex="-1"><a class="header-anchor" href="#event-remove-emitted"><span>event remove emitted</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event remove</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="msgremovevalidatorresponse-is-returned" tabindex="-1"><a class="header-anchor" href="#msgremovevalidatorresponse-is-returned"><span>MsgRemoveValidatorResponse is returned</span></a></h2><h3 id="background-4" tabindex="-1"><a class="header-anchor" href="#background-4"><span>Background</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> validator signing info</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;missed_blocks&quot;: [],
  &quot;missed_blocks_count&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg remove validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),d=[s];function r(o,l){return a(),t("div",null,d)}const v=e(i,[["render",r],["__file","keeper_msg_remove_validator.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/validator/keeper_msg_remove_validator.html","title":"Msg/RemoveValidator","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The validator must exist","slug":"the-validator-must-exist","link":"#the-validator-must-exist","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"validator exists","slug":"validator-exists","link":"#validator-exists","children":[]},{"level":3,"title":"validator does not exist","slug":"validator-does-not-exist","link":"#validator-does-not-exist","children":[]}]},{"level":2,"title":"Validator is removed from state","slug":"validator-is-removed-from-state","link":"#validator-is-removed-from-state","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"state validator removed","slug":"state-validator-removed","link":"#state-validator-removed","children":[]}]},{"level":2,"title":"ValidatorSigningInfo is removed from state","slug":"validatorsigninginfo-is-removed-from-state","link":"#validatorsigninginfo-is-removed-from-state","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"state validator removed","slug":"state-validator-removed-1","link":"#state-validator-removed-1","children":[]}]},{"level":2,"title":"EventRemoveValidator emitted","slug":"eventremovevalidator-emitted","link":"#eventremovevalidator-emitted","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"event remove emitted","slug":"event-remove-emitted","link":"#event-remove-emitted","children":[]}]},{"level":2,"title":"MsgRemoveValidatorResponse is returned","slug":"msgremovevalidatorresponse-is-returned","link":"#msgremovevalidatorresponse-is-returned","children":[{"level":3,"title":"Background","slug":"background-4","link":"#background-4","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]}],"git":{},"filePathRelative":"specs/mods/validator/keeper_msg_remove_validator.md"}');export{v as comp,c as data};
