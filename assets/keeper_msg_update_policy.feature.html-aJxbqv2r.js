import{_ as o,o as n,c as t,e}from"./app-CiOG3kca.js";const u={},q=e(`<p>Feature: Msg/UpdatePolicy</p><p>UpdatePolicy is successful when:</p><ul><li>admin is the admin address</li></ul><p>UpdatePolicy has the following outcomes:</p><ul><li>Policy is updated in state</li><li>EventUpdatePolicy is emitted</li><li>MsgUpdatePolicyResponse is returned</li></ul><p>Rule: The admin must be the admin address</p><pre><code>Background:
  Given admin &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  And policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;

Scenario: admin is admin address
  When msg update policy
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: admin is not admin address
  When msg update policy
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  admin: expected chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: received chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: Policy is updated in state</p><pre><code>Background:
  Given admin &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  And policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;

Scenario: policy updated
  When msg update policy
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;
  Then expect policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdatePolicy emitted</p><pre><code>Background:
  Given admin &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  And policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;

Scenario: event remove emitted
  When msg update policy
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;
  Then expect event update policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre><p>Rule: MsgUpdatePolicyResponse returned</p><pre><code>Background:
  Given admin &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  And policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update policy
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 200
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre>`,13),i=[q];function s(d,a){return n(),t("div",null,i)}const r=o(u,[["render",s],["__file","keeper_msg_update_policy.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/validator/keeper_msg_update_policy.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_msg_update_policy.feature"}');export{r as comp,l as data};
