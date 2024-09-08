import{_ as e,o as i,c as t,e as a}from"./app-CiOG3kca.js";const n={},r=a(`<h1 id="msgissue" tabindex="-1"><a class="header-anchor" href="#msgissue"><span>MsgIssue</span></a></h1><h2 id="valid-message" tabindex="-1"><a class="header-anchor" href="#valid-message"><span>valid message</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-id-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-id-is-empty"><span>an error is returned if id is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>id: empty or zero is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-issuer-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-issuer-is-empty"><span>an error is returned if issuer is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>issuer: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-issuer-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-issuer-is-not-a-bech32-address"><span>an error is returned if issuer is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>issuer: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-recipient-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-recipient-is-empty"><span>an error is returned if recipient is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>recipient: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-recipient-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-recipient-is-not-a-bech32-address"><span>an error is returned if recipient is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>recipient: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-amount-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-amount-is-empty"><span>an error is returned if amount is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>amount: empty string is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-amount-is-zero" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-amount-is-zero"><span>an error is returned if amount is zero</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;0&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>amount: expected a positive decimal, got 0.000000000000000000: invalid decimal string: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-amount-is-negative" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-amount-is-negative"><span>an error is returned if amount is negative</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;-1.25&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>amount: expected a positive decimal, got -1.250000000000000000: invalid decimal string: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-expiration-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-expiration-is-empty"><span>an error is returned if expiration is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>expiration: empty timestamp is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-metadata-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-metadata-is-empty"><span>an error is returned if metadata is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>metadata: empty string is not allowed: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-metadata-exceeds-128-characters" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-metadata-exceeds-128-characters"><span>an error is returned if metadata exceeds 128 characters</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>And</em> metadata with length &quot;129&quot;</p><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>metadata: exceeds max length 128: invalid request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,73),s=[r];function d(l,u){return i(),t("div",null,s)}const m=e(n,[["render",d],["__file","types_msg_issue.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/voucher/types_msg_issue.html","title":"MsgIssue","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid message","slug":"valid-message","link":"#valid-message","children":[]},{"level":2,"title":"an error is returned if id is empty","slug":"an-error-is-returned-if-id-is-empty","link":"#an-error-is-returned-if-id-is-empty","children":[]},{"level":2,"title":"an error is returned if issuer is empty","slug":"an-error-is-returned-if-issuer-is-empty","link":"#an-error-is-returned-if-issuer-is-empty","children":[]},{"level":2,"title":"an error is returned if issuer is not a bech32 address","slug":"an-error-is-returned-if-issuer-is-not-a-bech32-address","link":"#an-error-is-returned-if-issuer-is-not-a-bech32-address","children":[]},{"level":2,"title":"an error is returned if recipient is empty","slug":"an-error-is-returned-if-recipient-is-empty","link":"#an-error-is-returned-if-recipient-is-empty","children":[]},{"level":2,"title":"an error is returned if recipient is not a bech32 address","slug":"an-error-is-returned-if-recipient-is-not-a-bech32-address","link":"#an-error-is-returned-if-recipient-is-not-a-bech32-address","children":[]},{"level":2,"title":"an error is returned if amount is empty","slug":"an-error-is-returned-if-amount-is-empty","link":"#an-error-is-returned-if-amount-is-empty","children":[]},{"level":2,"title":"an error is returned if amount is zero","slug":"an-error-is-returned-if-amount-is-zero","link":"#an-error-is-returned-if-amount-is-zero","children":[]},{"level":2,"title":"an error is returned if amount is negative","slug":"an-error-is-returned-if-amount-is-negative","link":"#an-error-is-returned-if-amount-is-negative","children":[]},{"level":2,"title":"an error is returned if expiration is empty","slug":"an-error-is-returned-if-expiration-is-empty","link":"#an-error-is-returned-if-expiration-is-empty","children":[]},{"level":2,"title":"an error is returned if metadata is empty","slug":"an-error-is-returned-if-metadata-is-empty","link":"#an-error-is-returned-if-metadata-is-empty","children":[]},{"level":2,"title":"an error is returned if metadata exceeds 128 characters","slug":"an-error-is-returned-if-metadata-exceeds-128-characters","link":"#an-error-is-returned-if-metadata-exceeds-128-characters","children":[]}],"git":{},"filePathRelative":"specs/mods/voucher/types_msg_issue.md"}');export{m as comp,c as data};