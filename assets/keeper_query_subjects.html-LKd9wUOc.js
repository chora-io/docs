import{_ as e,o as s,c as t,e as n}from"./app-CiOG3kca.js";const i={},r=n(`<h1 id="query-subjects" tabindex="-1"><a class="header-anchor" href="#query-subjects"><span>Query/Subjects</span></a></h1><p>Query/Subjects is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Subjects has the following outcomes:</p><ul><li>query response returned</li></ul><h2 id="an-error-is-never-returned" tabindex="-1"><a class="header-anchor" href="#an-error-is-never-returned"><span>An error is never returned</span></a></h2><h3 id="never-error" tabindex="-1"><a class="header-anchor" href="#never-error"><span>never error</span></a></h3><p><em>When</em> query subjects</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h2 id="the-query-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-query-response-is-returned"><span>The query response is returned</span></a></h2><h3 id="response-with-no-subjects" tabindex="-1"><a class="header-anchor" href="#response-with-no-subjects"><span>response with no subjects</span></a></h3><p><em>When</em> query subjects</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;subjects&quot;: [],
  &quot;pagination&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-one-subject" tabindex="-1"><a class="header-anchor" href="#response-with-one-subject"><span>response with one subject</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query subjects</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;subjects&quot;: [
    {
      &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
      &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-with-two-subjects" tabindex="-1"><a class="header-anchor" href="#response-with-two-subjects"><span>response with two subjects</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;lxDqH19hS9D1Nom8zAvt3vUFS4136FKa6bluwHhbetE=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> query subjects</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;subjects&quot;: [
    {
      &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
      &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
    },
    {
      &quot;address&quot;: &quot;chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn&quot;,
      &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
      &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;total&quot;: 2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),a=[r];function u(d,l){return s(),t("div",null,a)}const c=e(i,[["render",u],["__file","keeper_query_subjects.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/subject/keeper_query_subjects.html","title":"Query/Subjects","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"An error is never returned","slug":"an-error-is-never-returned","link":"#an-error-is-never-returned","children":[{"level":3,"title":"never error","slug":"never-error","link":"#never-error","children":[]}]},{"level":2,"title":"The query response is returned","slug":"the-query-response-is-returned","link":"#the-query-response-is-returned","children":[{"level":3,"title":"response with no subjects","slug":"response-with-no-subjects","link":"#response-with-no-subjects","children":[]},{"level":3,"title":"response with one subject","slug":"response-with-one-subject","link":"#response-with-one-subject","children":[]},{"level":3,"title":"response with two subjects","slug":"response-with-two-subjects","link":"#response-with-two-subjects","children":[]}]}],"git":{},"filePathRelative":"specs/mods/subject/keeper_query_subjects.md"}');export{c as comp,v as data};
