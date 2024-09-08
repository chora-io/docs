import{_ as e,o as s,c as a,e as r}from"./app-CiOG3kca.js";const d={},t=r(`<h1 id="msgremovesubject" tabindex="-1"><a class="header-anchor" href="#msgremovesubject"><span>MsgRemoveSubject</span></a></h1><h2 id="valid-message" tabindex="-1"><a class="header-anchor" href="#valid-message"><span>valid message</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect no error.</p><h2 id="an-error-is-returned-if-address-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-address-is-empty"><span>an error is returned if address is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>address: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-address-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-address-is-not-a-bech32-address"><span>an error is returned if address is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>address: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-steward-is-empty" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-steward-is-empty"><span>an error is returned if steward is empty</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>steward: empty address string is not allowed: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="an-error-is-returned-if-steward-is-not-a-bech32-address" tabindex="-1"><a class="header-anchor" href="#an-error-is-returned-if-steward-is-not-a-bech32-address"><span>an error is returned if steward is not a bech32 address</span></a></h2><p><em>Given</em> message</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> validate message</p><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>steward: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),i=[t];function n(l,c){return s(),a("div",null,i)}const u=e(d,[["render",n],["__file","types_msg_remove_subject.html.vue"]]),m=JSON.parse('{"path":"/specs/mods/subject/types_msg_remove_subject.html","title":"MsgRemoveSubject","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"valid message","slug":"valid-message","link":"#valid-message","children":[]},{"level":2,"title":"an error is returned if address is empty","slug":"an-error-is-returned-if-address-is-empty","link":"#an-error-is-returned-if-address-is-empty","children":[]},{"level":2,"title":"an error is returned if address is not a bech32 address","slug":"an-error-is-returned-if-address-is-not-a-bech32-address","link":"#an-error-is-returned-if-address-is-not-a-bech32-address","children":[]},{"level":2,"title":"an error is returned if steward is empty","slug":"an-error-is-returned-if-steward-is-empty","link":"#an-error-is-returned-if-steward-is-empty","children":[]},{"level":2,"title":"an error is returned if steward is not a bech32 address","slug":"an-error-is-returned-if-steward-is-not-a-bech32-address","link":"#an-error-is-returned-if-steward-is-not-a-bech32-address","children":[]}],"git":{},"filePathRelative":"specs/mods/subject/types_msg_remove_subject.md"}');export{u as comp,m as data};