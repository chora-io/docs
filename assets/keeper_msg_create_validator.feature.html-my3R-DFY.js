import{_ as t,o as e,c as o,e as a}from"./app-CiOG3kca.js";const r={},u=a(`<p>Feature: Msg/CreateValidator</p><p>Msg/CreateValidator is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/CreateValidator has the following outcomes:</p><ul><li>Validator is added to state</li><li>EventCreateValidator is emitted</li><li>MsgCreateValidatorResponse is returned</li></ul><p>Rule: The operator must be the validator operator</p><pre><code>Scenario: never error
  When msg create validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: Validator is added to state</p><pre><code>Scenario: state validator added
  When msg create validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventCreateValidator is emitted</p><pre><code>Scenario: event add emitted
  When msg create validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event add
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre><p>Rule: MsgCreateValidatorResponse is returned</p><pre><code>Scenario: message response returned
  When msg create validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre>`,13),n=[u];function q(s,d){return e(),o("div",null,n)}const c=t(r,[["render",q],["__file","keeper_msg_create_validator.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/validator/keeper_msg_create_validator.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_msg_create_validator.feature"}');export{c as comp,l as data};
