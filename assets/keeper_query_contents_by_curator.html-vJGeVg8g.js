import{_ as e,o as t,c as n,e as a}from"./app-CiOG3kca.js";const s={},r=a(`<h1 id="query-contentsbycurator" tabindex="-1"><a class="header-anchor" href="#query-contentsbycurator"><span>Query/ContentsByCurator</span></a></h1><p>Query/ContentsByCurator is successful when:</p><ul><li>curator is a bech32 address</li></ul><p>Query/ContentsByCurator has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="the-curator-address-must-be-a-valid-bech32-address" tabindex="-1"><a class="header-anchor" href="#the-curator-address-must-be-a-valid-bech32-address"><span>The curator address must be a valid bech32 address</span></a></h2><h3 id="valid-curator-address" tabindex="-1"><a class="header-anchor" href="#valid-curator-address"><span>valid curator address</span></a></h3><p><em>When</em> query contents by curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="invalid-curator-address" tabindex="-1"><a class="header-anchor" href="#invalid-curator-address"><span>invalid curator address</span></a></h3><p><em>When</em> query contents by curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;foo&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curator: decoding bech32 failed: invalid bech32 string length 3: invalid address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="response-with-no-contents-by-curator" tabindex="-1"><a class="header-anchor" href="#response-with-no-contents-by-curator"><span>response with no contents by curator</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query contents by curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;contents&quot;: [],
  &quot;pagination&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-one-content-by-curator" tabindex="-1"><a class="header-anchor" href="#response-with-one-content-by-curator"><span>response with one content by curator</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query contents by curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;contents&quot;: [
    {
      &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-two-contents-by-curator" tabindex="-1"><a class="header-anchor" href="#response-with-two-contents-by-curator"><span>response with two contents by curator</span></a></h3><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Given</em> content</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;hash&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query contents by curator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;contents&quot;: [
    {
      &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    },
    {
      &quot;hash&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),i=[r];function d(u,o){return t(),n("div",null,i)}const c=e(s,[["render",d],["__file","keeper_query_contents_by_curator.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/content/keeper_query_contents_by_curator.html","title":"Query/ContentsByCurator","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The curator address must be a valid bech32 address","slug":"the-curator-address-must-be-a-valid-bech32-address","link":"#the-curator-address-must-be-a-valid-bech32-address","children":[{"level":3,"title":"valid curator address","slug":"valid-curator-address","link":"#valid-curator-address","children":[]},{"level":3,"title":"invalid curator address","slug":"invalid-curator-address","link":"#invalid-curator-address","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"response with no contents by curator","slug":"response-with-no-contents-by-curator","link":"#response-with-no-contents-by-curator","children":[]},{"level":3,"title":"response with one content by curator","slug":"response-with-one-content-by-curator","link":"#response-with-one-content-by-curator","children":[]},{"level":3,"title":"response with two contents by curator","slug":"response-with-two-contents-by-curator","link":"#response-with-two-contents-by-curator","children":[]}]}],"git":{},"filePathRelative":"specs/mods/content/keeper_query_contents_by_curator.md"}');export{c as comp,v as data};
