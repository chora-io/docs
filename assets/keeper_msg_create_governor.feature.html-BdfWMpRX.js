import{_ as e,o,c as t,e as r}from"./app-CiOG3kca.js";const n={},u=r(`<p>Feature: Msg/CreateGovernor</p><p>Msg/CreateGovernor is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/CreateGovernor has the following outcomes:</p><ul><li>Governor is added to state</li><li>EventCreateGovernor is emitted</li><li>MsgCreateGovernorResponse is returned</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When msg create governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: Governor is added to state</p><pre><code>Scenario: state governor added
  When msg create governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventCreateGovernor is emitted</p><pre><code>Scenario: event create governor emitted
  When msg create governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event create governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre><p>Rule: MsgCreateGovernorResponse is returned</p><pre><code>Background:
  Given admin &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;

Scenario: message response returned
  When msg create governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre>`,13),a=[u];function s(q,c){return o(),t("div",null,a)}const i=e(n,[["render",s],["__file","keeper_msg_create_governor.feature.html.vue"]]),h=JSON.parse('{"path":"/specs/mods/governor/keeper_msg_create_governor.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/governor/keeper_msg_create_governor.feature"}');export{i as comp,h as data};
