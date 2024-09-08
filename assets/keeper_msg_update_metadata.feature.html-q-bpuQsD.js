import{_ as t,o,c as u,e}from"./app-CiOG3kca.js";const n={},q=e(`<p>Feature: Msg/UpdateMetadata</p><p>UpdateMetadata is successful when:</p><ul><li>issuer is the voucher issuer</li></ul><p>UpdateMetadata has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateMetadata is emitted</li></ul><p>Rule: The issuer must be the voucher issuer</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: issuer is voucher issuer
  When msg update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: issuer is not voucher issuer
  When msg update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: The message response is returned</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Content is updated in state</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state voucher updated
  When msg update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdateMetadata emitted</p><pre><code>Background:
  Given voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event update metadata emitted
  When msg update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event update metadata
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),a=[q];function r(s,d){return o(),u("div",null,a)}const c=t(n,[["render",r],["__file","keeper_msg_update_metadata.feature.html.vue"]]),h=JSON.parse('{"path":"/specs/mods/voucher/keeper_msg_update_metadata.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_msg_update_metadata.feature"}');export{c as comp,h as data};
