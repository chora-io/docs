import{_ as t,o,c as e,e as n}from"./app-CiOG3kca.js";const u={},r=n(`<p>Feature: Msg/RemoveContent</p><p>RemoveContent is successful when:</p><ul><li>curator is the content curator</li></ul><p>RemoveContent has the following outcomes:</p><ul><li>message response returned</li><li>Content is removed from state</li><li>EventRemoveContent is emitted</li></ul><p>Rule: The curator must be the content curator</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: curator is content curator
  When msg remove content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: curator is not content curator
  When msg remove content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
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
  When msg remove content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Content is removed from state</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: state content removed
  When msg remove content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no state content with hash &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventRemoveContent emitted</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: event delete emitted
  When msg remove content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event remove content
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),q=[r];function a(c,s){return o(),e("div",null,q)}const i=t(u,[["render",a],["__file","keeper_msg_remove_content.feature.html.vue"]]),f=JSON.parse('{"path":"/specs/mods/content/keeper_msg_remove_content.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/content/keeper_msg_remove_content.feature"}');export{i as comp,f as data};
