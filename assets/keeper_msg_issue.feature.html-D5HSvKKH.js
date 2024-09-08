import{_ as t,o as u,c as o,e as q}from"./app-CiOG3kca.js";const n={},e=q(`<p>Feature: Msg/Issue</p><p>Msg/Issue is successful when:</p><ul><li>issuer is the voucher issuer</li><li>expiration must be in the future</li></ul><p>Msg/Issue has the following outcomes:</p><ul><li>message response returned</li><li>Balance is added to or updated in state</li><li>EventIssue is emitted</li></ul><p>Rule: The issuer must be the voucher issuer</p><pre><code>Background:
  Given block time &quot;2020-01-01T00:00:00Z&quot;
  And voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: issuer is voucher issuer
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: issuer is not voucher issuer
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: The expiration must be in the future</p><pre><code>Background:
  Given block time &quot;2020-01-01T00:00:00Z&quot;
  And voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: expiration is greater than current block time
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: expiration is equal to current block time
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2020-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  expiration must be in the future: received 2020-01-01 00:00:00 +0000 UTC: invalid request
  &quot;&quot;&quot;

Scenario: expiration is less than current block time
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2019-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  expiration must be in the future: received 2019-01-01 00:00:00 +0000 UTC: invalid request
  &quot;&quot;&quot;
</code></pre><p>Rule: The message response is returned</p><pre><code>Background:
  Given block time &quot;2020-01-01T00:00:00Z&quot;
  And voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Balance is added to or updated in state</p><pre><code>Background:
  Given block time &quot;2020-01-01T00:00:00Z&quot;
  And voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state balance added
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect state balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;amount&quot;: &quot;1.250000000000000000&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;

Scenario: state balance updated
  Given balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect state balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;amount&quot;: &quot;2.500000000000000000&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventIssue is emitted</p><pre><code>Background:
  Given block time &quot;2020-01-01T00:00:00Z&quot;
  And voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event issue emitted
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  Then expect event issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

Scenario: event issue emitted with metadata
  When msg issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;recipient&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event issue
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,15),s=[e];function r(i,a){return u(),o("div",null,s)}const h=t(n,[["render",r],["__file","keeper_msg_issue.feature.html.vue"]]),d=JSON.parse('{"path":"/specs/mods/voucher/keeper_msg_issue.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_msg_issue.feature"}');export{h as comp,d as data};
