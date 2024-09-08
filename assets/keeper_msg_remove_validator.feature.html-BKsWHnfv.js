import{_ as o,o as t,c as u,e as n}from"./app-CiOG3kca.js";const q={},e=n(`<p>Feature: Msg/RemoveValidator</p><p>RemoveValidator is successful when:</p><ul><li>validator with address exists</li></ul><p>RemoveValidator has the following outcomes:</p><ul><li>Validator is removed from state</li><li>ValidatorSigningInfo is removed from state</li><li>EventRemoveValidator is emitted</li><li>MsgRemoveValidatorResponse is returned</li></ul><p>Rule: The validator must exist</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  And validator signing info
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;missed_blocks&quot;: [],
    &quot;missed_blocks_count&quot;: 0
  }
  &quot;&quot;&quot;

Scenario: validator exists
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: validator does not exist
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  validator with address chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: not found: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: Validator is removed from state</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  And validator signing info
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;missed_blocks&quot;: [],
    &quot;missed_blocks_count&quot;: 0
  }
  &quot;&quot;&quot;

Scenario: state validator removed
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no validator with address &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: ValidatorSigningInfo is removed from state</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  And validator signing info
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;missed_blocks&quot;: [],
    &quot;missed_blocks_count&quot;: 0
  }
  &quot;&quot;&quot;

Scenario: state validator removed
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no validator signing info with address &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventRemoveValidator emitted</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  And validator signing info
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;missed_blocks&quot;: [],
    &quot;missed_blocks_count&quot;: 0
  }
  &quot;&quot;&quot;

Scenario: event remove emitted
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect event remove
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre><p>Rule: MsgRemoveValidatorResponse is returned</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  And validator signing info
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;missed_blocks&quot;: [],
    &quot;missed_blocks_count&quot;: 0
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg remove validator
  &quot;&quot;&quot;
  {
    &quot;operator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre>`,15),r=[e];function a(s,h){return t(),u("div",null,r)}const i=o(q,[["render",a],["__file","keeper_msg_remove_validator.feature.html.vue"]]),c=JSON.parse('{"path":"/specs/mods/validator/keeper_msg_remove_validator.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_msg_remove_validator.feature"}');export{i as comp,c as data};
