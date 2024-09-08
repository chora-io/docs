import{_ as t,o,c as u,e as n}from"./app-CiOG3kca.js";const e={},r=n(`<p>Feature: Msg/UpdateContentCurator</p><p>UpdateContentCurator is successful when:</p><ul><li>curator is the content curator</li></ul><p>UpdateContentCurator has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateContentCurator is emitted</li></ul><p>Rule: The curator must be the content curator</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: curator is content curator
  When msg update content curator
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
    &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: curator is not content curator
  When msg update content curator
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
    &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  curator chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: content curator chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: The message response is returned</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update content curator
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
     &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
   &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Content is updated in state</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state content updated
  When msg update content curator
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
    &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect state content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdateContentCurator emitted</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event update curator emitted
  When msg update content curator
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;,
    &quot;new_curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect event update content curator
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),q=[r];function a(c,s){return o(),u("div",null,q)}const i=t(e,[["render",a],["__file","keeper_msg_update_content_curator.feature.html.vue"]]),d=JSON.parse('{"path":"/specs/mods/content/keeper_msg_update_content_curator.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/content/keeper_msg_update_content_curator.feature"}');export{i as comp,d as data};
