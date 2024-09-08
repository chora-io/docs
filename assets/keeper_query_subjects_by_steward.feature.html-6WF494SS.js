import{_ as t,o as u,c as o,e}from"./app-CiOG3kca.js";const q={},n=e(`<p>Feature: Query/SubjectsBySteward</p><p>Query/SubjectsBySteward is successful when:</p><ul><li>subject is a bech32 address</li></ul><p>Query/SubjectsBySteward has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: The subject address must be a valid bech32 address</p><pre><code>Scenario: valid subject address
  When query subjects by steward
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: invalid subject address
  When query subjects by steward
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;foo&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  steward: decoding bech32 failed: invalid bech32 string length 3: invalid address
  &quot;&quot;&quot;
</code></pre><p>Rule: The query response is returned</p><pre><code>Background: subject by different subject
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
    &quot;steward&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;

Scenario: response with no subjects by steward
  When query subjects by steward
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;subjects&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: response with one subject by subject
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  When query subjects by steward
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;subjects&quot;: [
      {
        &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: response with two subjects by steward
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
  }
  &quot;&quot;&quot;
  Given subject
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;lxDqH19hS9D1Nom8zAvt3vUFS4136FKa6bluwHhbetE=&quot;,
    &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
  }
  &quot;&quot;&quot;
  When query subjects by steward
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;subjects&quot;: [
      {
        &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
      },
      {
        &quot;address&quot;: &quot;chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn&quot;,
        &quot;metadata&quot;: &quot;chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 2
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[n];function s(a,c){return u(),o("div",null,r)}const i=t(q,[["render",s],["__file","keeper_query_subjects_by_steward.feature.html.vue"]]),j=JSON.parse('{"path":"/specs/mods/subject/keeper_query_subjects_by_steward.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/subject/keeper_query_subjects_by_steward.feature"}');export{i as comp,j as data};
