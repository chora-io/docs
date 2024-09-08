import{_ as t,o,c as e,e as u}from"./app-CiOG3kca.js";const a={},q=u(`<p>Feature: Msg/UpdateValidator</p><p>UpdateValidator is successful when:</p><ul><li>validator with address exists</li></ul><p>UpdateValidator has the following outcomes:</p><ul><li>Validator is updated in state</li><li>EventUpdateValidator is emitted</li><li>MsgUpdateValidatorResponse is returned</li></ul><p>Rule: The validator must exist</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: validator exists
  When msg update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: validator does not exist
  When msg update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  validator with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: Validator is updated in state</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state validator updated
  When msg update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdateValidator emitted</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event update validator emitted
  When msg update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre><p>Rule: MsgUpdateValidatorResponse is returned</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre>`,13),n=[q];function r(d,s){return o(),e("div",null,n)}const c=t(a,[["render",r],["__file","keeper_msg_update_validator.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/validator/keeper_msg_update_validator.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_msg_update_validator.feature"}');export{c as comp,l as data};
