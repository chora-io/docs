import{_ as t,o,c as e,e as n}from"./app-CiOG3kca.js";const u={},r=n(`<p>Feature: Query/Content</p><p>Query/Content is successful when:</p><ul><li>content with identifier exists</li></ul><p>Query/Content has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The content must exist</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: content exists
  When query content
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: content does not exist
  When query content
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  content with hash chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background:
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: query response returned
  When query content
  &quot;&quot;&quot;
  {
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),q=[r];function c(s,a){return o(),e("div",null,q)}const i=t(u,[["render",c],["__file","keeper_query_content.feature.html.vue"]]),f=JSON.parse('{"path":"/specs/mods/content/keeper_query_content.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/content/keeper_query_content.feature"}');export{i as comp,f as data};
