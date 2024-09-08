import{_ as e,o as s,c as i,e as r}from"./app-CiOG3kca.js";const n={},d=r(`<h1 id="query-vouchersbyissuer" tabindex="-1"><a class="header-anchor" href="#query-vouchersbyissuer"><span>Query/VouchersByIssuer</span></a></h1><p>Query/VouchersByIssuer is successful when:</p><ul><li>issuer is a bech32 address</li></ul><p>Query/VouchersByIssuer has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="the-issuer-address-must-be-a-valid-bech32-address" tabindex="-1"><a class="header-anchor" href="#the-issuer-address-must-be-a-valid-bech32-address"><span>The issuer address must be a valid bech32 address</span></a></h2><h3 id="valid-issuer-address" tabindex="-1"><a class="header-anchor" href="#valid-issuer-address"><span>valid issuer address</span></a></h3><p><em>When</em> query vouchers by issuer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="invalid-issuer-address" tabindex="-1"><a class="header-anchor" href="#invalid-issuer-address"><span>invalid issuer address</span></a></h3><p><em>When</em> query vouchers by issuer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>issuer: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="background-voucher-by-different-issuer" tabindex="-1"><a class="header-anchor" href="#background-voucher-by-different-issuer"><span>Background (voucher by different issuer)</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 1,
  &quot;issuer&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-no-vouchers-by-issuer" tabindex="-1"><a class="header-anchor" href="#response-with-no-vouchers-by-issuer"><span>response with no vouchers by issuer</span></a></h3><p><em>When</em> query vouchers by issuer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;vouchers&quot;: [],
  &quot;pagination&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-one-voucher-by-issuer" tabindex="-1"><a class="header-anchor" href="#response-with-one-voucher-by-issuer"><span>response with one voucher by issuer</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 2,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query vouchers by issuer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;vouchers&quot;: [
    {
      &quot;id&quot;: 2,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-two-vouchers-by-issuer" tabindex="-1"><a class="header-anchor" href="#response-with-two-vouchers-by-issuer"><span>response with two vouchers by issuer</span></a></h3><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 2,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Given</em> voucher</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;id&quot;: 3,
  &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query vouchers by issuer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;vouchers&quot;: [
    {
      &quot;id&quot;: 2,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    },
    {
      &quot;id&quot;: 3,
      &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),a=[d];function t(u,l){return s(),i("div",null,a)}const v=e(n,[["render",t],["__file","keeper_query_vouchers_by_issuer.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_vouchers_by_issuer.html","title":"Query/VouchersByIssuer","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The issuer address must be a valid bech32 address","slug":"the-issuer-address-must-be-a-valid-bech32-address","link":"#the-issuer-address-must-be-a-valid-bech32-address","children":[{"level":3,"title":"valid issuer address","slug":"valid-issuer-address","link":"#valid-issuer-address","children":[]},{"level":3,"title":"invalid issuer address","slug":"invalid-issuer-address","link":"#invalid-issuer-address","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"Background (voucher by different issuer)","slug":"background-voucher-by-different-issuer","link":"#background-voucher-by-different-issuer","children":[]},{"level":3,"title":"response with no vouchers by issuer","slug":"response-with-no-vouchers-by-issuer","link":"#response-with-no-vouchers-by-issuer","children":[]},{"level":3,"title":"response with one voucher by issuer","slug":"response-with-one-voucher-by-issuer","link":"#response-with-one-voucher-by-issuer","children":[]},{"level":3,"title":"response with two vouchers by issuer","slug":"response-with-two-vouchers-by-issuer","link":"#response-with-two-vouchers-by-issuer","children":[]}]}],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_vouchers_by_issuer.md"}');export{v as comp,c as data};
