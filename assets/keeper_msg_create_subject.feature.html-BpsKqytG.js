import{_ as e,o as t,c as o,e as u}from"./app-CiOG3kca.js";const n={},q=u(`<p>Feature: Msg/CreateSubject</p><p>Msg/CreateSubject is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/CreateSubject has the following outcomes:</p><ul><li>message response returned</li><li>Subject is added to state</li><li>EventCreateSubject is emitted</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  Given subject sequence
  &quot;&quot;&quot;
  {
    &quot;sequence&quot;: &quot;0&quot;
  }
  &quot;&quot;&quot;
  When msg create subject
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

# No failing scenario - only internal errors can occur
</code></pre><p>Rule: The message response is returned</p><pre><code>Scenario: message response returned
  Given subject sequence
  &quot;&quot;&quot;
  {
    &quot;sequence&quot;: &quot;0&quot;
  }
  &quot;&quot;&quot;
  When msg create subject
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora140dhknrxj0vjsn4serghtw7wydm2a6mykxmkl3lmecegk4pp32dqf6sw5n&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Subject is added to state</p><pre><code>Scenario: state subject added
  Given subject sequence
  &quot;&quot;&quot;
  {
    &quot;sequence&quot;: &quot;0&quot;
  }
  &quot;&quot;&quot;
  When msg create subject
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;q9t7TGaT2ShOsMjRdbvOI3au62Sxt2/H+84yi1Qhipo=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventCreateSubject is emitted</p><pre><code>Scenario: event create emitted
  Given subject sequence
  &quot;&quot;&quot;
  {
    &quot;sequence&quot;: &quot;0&quot;
  }
  &quot;&quot;&quot;
  When msg create subject
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event create subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora140dhknrxj0vjsn4serghtw7wydm2a6mykxmkl3lmecegk4pp32dqf6sw5n&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),r=[q];function s(a,c){return t(),o("div",null,r)}const i=e(n,[["render",s],["__file","keeper_msg_create_subject.feature.html.vue"]]),p=JSON.parse('{"path":"/specs/mods/subject/keeper_msg_create_subject.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/subject/keeper_msg_create_subject.feature"}');export{i as comp,p as data};
