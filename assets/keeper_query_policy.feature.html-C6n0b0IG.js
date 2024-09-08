import{_ as e,o,c as n,e as r}from"./app-CiOG3kca.js";const t={},u=r(`<p>Feature: Query/Policy</p><p>Query/Policy is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Policy has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  Given policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;
  When query policy
  Then expect no error

Scenario: never error with zero value
  When query policy
  Then expect no error

# No failing scenario - only internal errors can occur
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: query response returned
  Given policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;
  When query policy
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 100
  }
  &quot;&quot;&quot;

Scenario: query response returned with zero value
  Given policy
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 0
  }
  &quot;&quot;&quot;
  When query policy
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;signedBlocksWindow&quot;: 0
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),i=[u];function s(c,l){return o(),n("div",null,i)}const p=e(t,[["render",s],["__file","keeper_query_policy.feature.html.vue"]]),a=JSON.parse('{"path":"/specs/mods/validator/keeper_query_policy.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_query_policy.feature"}');export{p as comp,a as data};
