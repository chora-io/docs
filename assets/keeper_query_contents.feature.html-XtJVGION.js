import{_ as t,o,c as n,e as u}from"./app-CiOG3kca.js";const e={},q=u(`<p>Feature: Query/Contents</p><p>Query/Contents is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Contents has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When query contents
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: response with no contents
  When query contents
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;contents&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: response with one content
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  When query contents
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;contents&quot;: [
      {
        &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: response with two contents
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Given content
  &quot;&quot;&quot;
  {
    &quot;curator&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;hash&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  When query contents
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;contents&quot;: [
      {
        &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;hash&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      },
      {
        &quot;curator&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;hash&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 2
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[q];function s(c,a){return o(),n("div",null,r)}const h=t(e,[["render",s],["__file","keeper_query_contents.feature.html.vue"]]),p=JSON.parse('{"path":"/specs/mods/content/keeper_query_contents.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/content/keeper_query_contents.feature"}');export{h as comp,p as data};
