import{_ as t,o as e,c as u,e as o}from"./app-CiOG3kca.js";const n={},q=o(`<p>Feature: Query/Subject</p><p>Query/Subject is successful when:</p><ul><li>subject with identifier exists</li></ul><p>Query/Subject has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The subject must exist</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: subject exists
  When query subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: subject does not exist
  When query subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  subject with address chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background:
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: query response returned
  When query subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[q];function s(c,a){return e(),u("div",null,r)}const i=t(n,[["render",s],["__file","keeper_query_subject.feature.html.vue"]]),h=JSON.parse('{"path":"/specs/mods/subject/keeper_query_subject.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/subject/keeper_query_subject.feature"}');export{i as comp,h as data};
