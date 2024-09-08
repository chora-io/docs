import{_ as e,o as a,c as n,e as t}from"./app-CiOG3kca.js";const r={},i=t(`<h1 id="query-validators" tabindex="-1"><a class="header-anchor" href="#query-validators"><span>Query/Validators</span></a></h1><p>Query/Validators is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Validators has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="an-error-is-never-returned" tabindex="-1"><a class="header-anchor" href="#an-error-is-never-returned"><span>An error is never returned</span></a></h2><h3 id="never-error" tabindex="-1"><a class="header-anchor" href="#never-error"><span>never error</span></a></h3><p><em>When</em> query validators</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="response-with-no-validators" tabindex="-1"><a class="header-anchor" href="#response-with-no-validators"><span>response with no validators</span></a></h3><p><em>When</em> query validators</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;validators&quot;: [],
  &quot;pagination&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-one-validator" tabindex="-1"><a class="header-anchor" href="#response-with-one-validator"><span>response with one validator</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query validators</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;validators&quot;: [
    {
      &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-two-validators" tabindex="-1"><a class="header-anchor" href="#response-with-two-validators"><span>response with two validators</span></a></h3><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Given</em> validator</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query validators</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;validators&quot;: [
    {
      &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    },
    {
      &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),s=[i];function d(l,o){return a(),n("div",null,s)}const v=e(r,[["render",d],["__file","keeper_query_validators.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/validator/keeper_query_validators.html","title":"Query/Validators","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"An error is never returned","slug":"an-error-is-never-returned","link":"#an-error-is-never-returned","children":[{"level":3,"title":"never error","slug":"never-error","link":"#never-error","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"response with no validators","slug":"response-with-no-validators","link":"#response-with-no-validators","children":[]},{"level":3,"title":"response with one validator","slug":"response-with-one-validator","link":"#response-with-one-validator","children":[]},{"level":3,"title":"response with two validators","slug":"response-with-two-validators","link":"#response-with-two-validators","children":[]}]}],"git":{},"filePathRelative":"specs/mods/validator/keeper_query_validators.md"}');export{v as comp,c as data};
