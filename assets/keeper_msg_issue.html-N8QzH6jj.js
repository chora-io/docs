import{_ as e,o as t,c as i,e as s}from"./app-CiOG3kca.js";const n={},a=s(`<h1 id="msg-issue" tabindex="-1"><a class="header-anchor" href="#msg-issue"><span>Msg/Issue</span></a></h1><p>Msg/Issue is successful when:</p><ul><li>issuer is the voucher issuer</li><li>expiration must be in the future</li></ul><p>Msg/Issue has the following outcomes:</p><ul><li>message response returned</li><li>Balance is added to or updated in state</li><li>EventIssue is emitted</li></ul><h2 id="the-issuer-must-be-the-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#the-issuer-must-be-the-voucher-issuer"><span>The issuer must be the voucher issuer</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> block time &quot;2020-01-01T00:00:00Z&quot;</p><p><em>And</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issuer-is-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#issuer-is-voucher-issuer"><span>issuer is voucher issuer</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="issuer-is-not-voucher-issuer" tabindex="-1"><a class="header-anchor" href="#issuer-is-not-voucher-issuer"><span>issuer is not voucher issuer</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-expiration-must-be-in-the-future" tabindex="-1"><a class="header-anchor" href="#the-expiration-must-be-in-the-future"><span>The expiration must be in the future</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> block time &quot;2020-01-01T00:00:00Z&quot;</p><p><em>And</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expiration-is-greater-than-current-block-time" tabindex="-1"><a class="header-anchor" href="#expiration-is-greater-than-current-block-time"><span>expiration is greater than current block time</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="expiration-is-equal-to-current-block-time" tabindex="-1"><a class="header-anchor" href="#expiration-is-equal-to-current-block-time"><span>expiration is equal to current block time</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2020-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>expiration must be in the future: received 2020-01-01 00:00:00 +0000 UTC: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="expiration-is-less-than-current-block-time" tabindex="-1"><a class="header-anchor" href="#expiration-is-less-than-current-block-time"><span>expiration is less than current block time</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2019-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>expiration must be in the future: received 2019-01-01 00:00:00 +0000 UTC: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> block time &quot;2020-01-01T00:00:00Z&quot;</p><p><em>And</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="balance-is-added-to-or-updated-in-state" tabindex="-1"><a class="header-anchor" href="#balance-is-added-to-or-updated-in-state"><span>Balance is added to or updated in state</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> block time &quot;2020-01-01T00:00:00Z&quot;</p><p><em>And</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-balance-added" tabindex="-1"><a class="header-anchor" href="#state-balance-added"><span>state balance added</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;amount&quot;: &quot;1.250000000000000000&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-balance-updated" tabindex="-1"><a class="header-anchor" href="#state-balance-updated"><span>state balance updated</span></a></h3><p><em>Given</em> balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;amount&quot;: &quot;2.500000000000000000&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventissue-is-emitted" tabindex="-1"><a class="header-anchor" href="#eventissue-is-emitted"><span>EventIssue is emitted</span></a></h2><h3 id="background-4" tabindex="-1"><a class="header-anchor" href="#background-4"><span>Background</span></a></h3><p><em>Given</em> block time &quot;2020-01-01T00:00:00Z&quot;</p><p><em>And</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-issue-emitted" tabindex="-1"><a class="header-anchor" href="#event-issue-emitted"><span>event issue emitted</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-issue-emitted-with-metadata" tabindex="-1"><a class="header-anchor" href="#event-issue-emitted-with-metadata"><span>event issue emitted with metadata</span></a></h3><p><em>When</em> msg issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event issue</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),u=[a];function d(r,l){return t(),i("div",null,u)}const c=e(n,[["render",d],["__file","keeper_msg_issue.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/voucher/keeper_msg_issue.html","title":"Msg/Issue","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The issuer must be the voucher issuer","slug":"the-issuer-must-be-the-voucher-issuer","link":"#the-issuer-must-be-the-voucher-issuer","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"issuer is voucher issuer","slug":"issuer-is-voucher-issuer","link":"#issuer-is-voucher-issuer","children":[]},{"level":3,"title":"issuer is not voucher issuer","slug":"issuer-is-not-voucher-issuer","link":"#issuer-is-not-voucher-issuer","children":[]}]},{"level":2,"title":"The expiration must be in the future","slug":"the-expiration-must-be-in-the-future","link":"#the-expiration-must-be-in-the-future","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"expiration is greater than current block time","slug":"expiration-is-greater-than-current-block-time","link":"#expiration-is-greater-than-current-block-time","children":[]},{"level":3,"title":"expiration is equal to current block time","slug":"expiration-is-equal-to-current-block-time","link":"#expiration-is-equal-to-current-block-time","children":[]},{"level":3,"title":"expiration is less than current block time","slug":"expiration-is-less-than-current-block-time","link":"#expiration-is-less-than-current-block-time","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Balance is added to or updated in state","slug":"balance-is-added-to-or-updated-in-state","link":"#balance-is-added-to-or-updated-in-state","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"state balance added","slug":"state-balance-added","link":"#state-balance-added","children":[]},{"level":3,"title":"state balance updated","slug":"state-balance-updated","link":"#state-balance-updated","children":[]}]},{"level":2,"title":"EventIssue is emitted","slug":"eventissue-is-emitted","link":"#eventissue-is-emitted","children":[{"level":3,"title":"Background","slug":"background-4","link":"#background-4","children":[]},{"level":3,"title":"event issue emitted","slug":"event-issue-emitted","link":"#event-issue-emitted","children":[]},{"level":3,"title":"event issue emitted with metadata","slug":"event-issue-emitted-with-metadata","link":"#event-issue-emitted-with-metadata","children":[]}]}],"git":{},"filePathRelative":"specs/mods/voucher/keeper_msg_issue.md"}');export{c as comp,v as data};
