import{_ as o,o as t,c as e,e as n}from"./app-CiOG3kca.js";const u={},r=n(`<p>Feature: Query/Governors</p><p>Query/Governors is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/Governors has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Scenario: never error
  When query governors
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: response with no governors
  When query governors
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;governors&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: response with one governor
  Given governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  When query governors
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;governors&quot;: [
      {
        &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: response with two governors
  Given governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Given governor
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  When query governors
  &quot;&quot;&quot;
  {}
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;governors&quot;: [
      {
        &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      },
      {
        &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 2
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),q=[r];function s(a,i){return t(),e("div",null,q)}const d=o(u,[["render",s],["__file","keeper_query_governors.feature.html.vue"]]),p=JSON.parse('{"path":"/specs/mods/governor/keeper_query_governors.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/governor/keeper_query_governors.feature"}');export{d as comp,p as data};
