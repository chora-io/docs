import{_ as e,o,c as u,e as t}from"./app-CiOG3kca.js";const n={},r=t(`<p>Feature: Query/Voucher</p><p>Query/Voucher is successful when:</p><ul><li>voucher with identifier exists</li></ul><p>Query/Voucher has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The voucher must exist</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: voucher exists
  When query voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: voucher does not exist
  When query voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  voucher with id 2: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: query response returned
  When query voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),q=[r];function c(s,i){return o(),u("div",null,q)}const a=e(n,[["render",c],["__file","keeper_query_voucher.feature.html.vue"]]),d=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_voucher.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_voucher.feature"}');export{a as comp,d as data};
