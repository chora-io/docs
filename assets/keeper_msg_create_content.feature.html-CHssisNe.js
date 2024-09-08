import{_ as e,o as t,c as o,e as n}from"./app-CiOG3kca.js";const r={},u=n(`<p>Feature: Msg/CreateContent</p><p>Msg/CreateContent is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Msg/CreateContent has the following outcomes:</p><ul><li>message response returned</li><li>Content is added to state</li><li>EventCreateContent is emitted</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When msg create content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

# No failing scenario - only internal errors can occur
</code></pre><p>Rule: The message response is returned</p><pre><code>Scenario: message response returned
  When msg create content
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
</code></pre><p>Rule: Content is added to state</p><pre><code>Scenario: state content added
  When msg create content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect state content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventCreateContent is emitted</p><pre><code>Scenario: event create emitted
  When msg create content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect event create content
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),q=[u];function s(a,c){return t(),o("div",null,q)}const h=e(r,[["render",s],["__file","keeper_msg_create_content.feature.html.vue"]]),d=JSON.parse('{"path":"/specs/mods/content/keeper_msg_create_content.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/content/keeper_msg_create_content.feature"}');export{h as comp,d as data};
