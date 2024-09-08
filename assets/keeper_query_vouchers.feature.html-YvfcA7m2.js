import{_ as o,o as t,c as u,e}from"./app-CiOG3kca.js";const n={},q=e(`<p>Feature: Query/Vouchers</p><p>Query/Vouchers is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Vouchers has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When query vouchers
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: response with no vouchers
  When query vouchers
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;vouchers&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: response with one voucher
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  When query vouchers
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;vouchers&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: response with two vouchers
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  When query vouchers
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;vouchers&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      },
      {
        &quot;id&quot;: 2,
        &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 2
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[q];function s(a,c){return t(),u("div",null,r)}const h=o(n,[["render",s],["__file","keeper_query_vouchers.feature.html.vue"]]),p=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_vouchers.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_vouchers.feature"}');export{h as comp,p as data};
