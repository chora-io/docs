import{_ as e,o as t,c as o,e as u}from"./app-CiOG3kca.js";const n={},r=u(`<p>Feature: Msg/Create</p><p>Msg/Create is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/Create has the following outcomes:</p><ul><li>message response returned</li><li>Voucher is added to state</li><li>EventCreate is emitted</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When msg create
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

# No failing scenario - only internal errors can occur
</code></pre><p>Rule: The message response is returned</p><pre><code>Scenario: message response returned
  When msg create
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Voucher is added to state</p><pre><code>Scenario: state voucher added
  When msg create
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;issuer&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventCreate is emitted</p><pre><code>Scenario: event create emitted
  When msg create
  &quot;&quot;&quot;
  {
    &quot;issuer&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event create
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),q=[r];function s(a,c){return t(),o("div",null,q)}const d=e(n,[["render",s],["__file","keeper_msg_create.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/voucher/keeper_msg_create.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_msg_create.feature"}');export{d as comp,l as data};
