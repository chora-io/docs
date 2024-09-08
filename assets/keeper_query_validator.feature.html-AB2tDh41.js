import{_ as t,o,c as e,e as u}from"./app-CiOG3kca.js";const r={},n=u(`<p>Feature: Query/Validator</p><p>Query/Validator is successful when:</p><ul><li>validator with address exists</li></ul><p>Query/Validator has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The validator must exist</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: validator exists
  When query validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: validator does not exist
  When query validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  validator with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background:
  Given validator
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: query response returned
  When query validator
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
</code></pre>`,9),q=[n];function a(s,d){return o(),e("div",null,q)}const c=t(r,[["render",a],["__file","keeper_query_validator.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/validator/keeper_query_validator.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/validator/keeper_query_validator.feature"}');export{c as comp,l as data};
