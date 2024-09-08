import{_ as t,o,c as u,e as q}from"./app-CiOG3kca.js";const n={},e=q(`<p>Feature: Query/BalancesByAddress</p><p>Query/BalancesByAddress is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/BalancesByAddress has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Background:
  Given balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;

Scenario: balance exists
  When query balances by address
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: balance does not exist
  When query balances by address
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: query response returned with no amounts
  When query balances by address
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;total_amounts&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: query response returned with one amount
  Given balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  When query balances by address
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;total_amounts&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;total_amount&quot;: &quot;1.250000000000000000&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: query response returned with multiple amounts
  Given balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  And balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2022-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  And balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  When query balances by address
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;total_amounts&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;total_amount&quot;: &quot;2.500000000000000000&quot;
      },
      {
        &quot;id&quot;: 2,
        &quot;total_amount&quot;: &quot;1.250000000000000000&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 3
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),a=[e];function r(s,d){return o(),u("div",null,a)}const i=t(n,[["render",r],["__file","keeper_query_balances_by_address.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_balances_by_address.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_balances_by_address.feature"}');export{i as comp,l as data};
