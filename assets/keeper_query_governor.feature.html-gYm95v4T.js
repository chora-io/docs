import{_ as o,o as e,c as t,e as r}from"./app-CiOG3kca.js";const n={},u=r(`<p>Feature: Query/Governor</p><p>Query/Governor is successful when:</p><ul><li>governor with address exists</li></ul><p>Query/Governor has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The governor must exist</p><pre><code>Background:
  Given governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: governor exists
  When query governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: governor does not exist
  When query governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  governor with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background:
  Given governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: query response returned
  When query governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),q=[u];function s(a,c){return e(),t("div",null,q)}const h=o(n,[["render",s],["__file","keeper_query_governor.feature.html.vue"]]),i=JSON.parse('{"path":"/specs/mods/governor/keeper_query_governor.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/governor/keeper_query_governor.feature"}');export{h as comp,i as data};
