import{_ as e,o as n,c as t,e as i}from"./app-CiOG3kca.js";const a={},s=i(`<h1 id="query-balance" tabindex="-1"><a class="header-anchor" href="#query-balance"><span>Query/Balance</span></a></h1><p>Query/Balance is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Balance has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="an-error-is-never-returned" tabindex="-1"><a class="header-anchor" href="#an-error-is-never-returned"><span>An error is never returned</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="balance-exists" tabindex="-1"><a class="header-anchor" href="#balance-exists"><span>balance exists</span></a></h3><p><em>When</em> query balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="balance-does-not-exist" tabindex="-1"><a class="header-anchor" href="#balance-does-not-exist"><span>balance does not exist</span></a></h3><p><em>When</em> query balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 2,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="query-response-returned-with-no-amounts" tabindex="-1"><a class="header-anchor" href="#query-response-returned-with-no-amounts"><span>query response returned with no amounts</span></a></h3><p><em>When</em> query balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;total_amount&quot;: &quot;0.000000000000000000&quot;,
  &quot;amounts&quot;: []
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-response-returned-with-one-amount" tabindex="-1"><a class="header-anchor" href="#query-response-returned-with-one-amount"><span>query response returned with one amount</span></a></h3><p><em>Given</em> balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;amount&quot;: &quot;1.250000000000000000&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;total_amount&quot;: &quot;1.250000000000000000&quot;,
  &quot;amounts&quot;: [
    {
      &quot;amount&quot;: &quot;1.250000000000000000&quot;,
      &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-response-returned-with-multiple-amounts" tabindex="-1"><a class="header-anchor" href="#query-response-returned-with-multiple-amounts"><span>query response returned with multiple amounts</span></a></h3><p><em>Given</em> balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Given</em> balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;amount&quot;: &quot;1.25&quot;,
  &quot;expiration&quot;: &quot;2022-01-01T00:00:00Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query balance</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;total_amount&quot;: &quot;2.500000000000000000&quot;,
  &quot;amounts&quot;: [
    {
      &quot;amount&quot;: &quot;1.25&quot;,
      &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
    },
    {
      &quot;amount&quot;: &quot;1.25&quot;,
      &quot;expiration&quot;: &quot;2022-01-01T00:00:00Z&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),d=[s];function u(r,l){return n(),t("div",null,d)}const c=e(a,[["render",u],["__file","keeper_query_balance.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_balance.html","title":"Query/Balance","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"An error is never returned","slug":"an-error-is-never-returned","link":"#an-error-is-never-returned","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"balance exists","slug":"balance-exists","link":"#balance-exists","children":[]},{"level":3,"title":"balance does not exist","slug":"balance-does-not-exist","link":"#balance-does-not-exist","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"query response returned with no amounts","slug":"query-response-returned-with-no-amounts","link":"#query-response-returned-with-no-amounts","children":[]},{"level":3,"title":"query response returned with one amount","slug":"query-response-returned-with-one-amount","link":"#query-response-returned-with-one-amount","children":[]},{"level":3,"title":"query response returned with multiple amounts","slug":"query-response-returned-with-multiple-amounts","link":"#query-response-returned-with-multiple-amounts","children":[]}]}],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_balance.md"}');export{c as comp,v as data};