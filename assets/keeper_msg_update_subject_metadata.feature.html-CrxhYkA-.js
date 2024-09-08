import{_ as t,o as u,c as e,e as o}from"./app-CiOG3kca.js";const q={},a=o(`<p>Feature: Msg/UpdateSubjectMetadata</p><p>UpdateSubjectMetadata is successful when:</p><ul><li>steward is the subject steward</li></ul><p>UpdateSubjectMetadata has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateSubjectMetadata is emitted</li></ul><p>Rule: The steward must be the subject steward</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: steward is subject steward
  When msg update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: steward is not subject steward
  When msg update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  steward chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: subject steward chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: The message response is returned</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Content is updated in state</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state subject updated
  When msg update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdateSubjectMetadata emitted</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event update subject metadata emitted
  When msg update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event update subject metadata
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),n=[a];function r(s,d){return u(),e("div",null,n)}const i=t(q,[["render",r],["__file","keeper_msg_update_subject_metadata.feature.html.vue"]]),p=JSON.parse('{"path":"/specs/mods/subject/keeper_msg_update_subject_metadata.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/subject/keeper_msg_update_subject_metadata.feature"}');export{i as comp,p as data};
