import{_ as u,o,c as t,e}from"./app-CiOG3kca.js";const q={},n=e(`<p>Feature: Query/VouchersByIssuer</p><p>Query/VouchersByIssuer is successful when:</p><ul><li>issuer is a bech32 address</li></ul><p>Query/VouchersByIssuer has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The issuer address must be a valid bech32 address</p><pre><code>Scenario: valid issuer address
  When query vouchers by issuer
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: invalid issuer address
  When query vouchers by issuer
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;foo&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  issuer: decoding bech32 failed: invalid bech32 string length 3: invalid address
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background: voucher by different issuer
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: response with no vouchers by issuer
  When query vouchers by issuer
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;vouchers&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: response with one voucher by issuer
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  When query vouchers by issuer
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
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
  &quot;&quot;&quot;

Scenario: response with two vouchers by issuer
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 3,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  When query vouchers by issuer
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
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
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[n];function s(i,a){return o(),t("div",null,r)}const h=u(q,[["render",s],["__file","keeper_query_vouchers_by_issuer.feature.html.vue"]]),d=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_vouchers_by_issuer.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_vouchers_by_issuer.feature"}');export{h as comp,d as data};
