import{_ as o,o as t,c as u,e as n}from"./app-CiOG3kca.js";const q={},e=n(`<p>Feature: Query/BalancesByVoucher</p><p>Query/BalancesByVoucher is successful when:</p><ul><li>always (an error is never returned)</li></ul><p>Query/BalancesByVoucher has the following outcomes:</p><ul><li>query response returned</li></ul><p>Rule: An error is never returned</p><pre><code>Background:
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
  When query balances by voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: balance does not exist
  When query balances by voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 2
  }
  &quot;&quot;&quot;
  Then expect no error
</code></pre><p>Rule: The query response is returned</p><pre><code>Scenario: query response returned with no amounts
  When query balances by voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;total_amounts&quot;: [],
    &quot;pagination&quot;: {}
  }
  &quot;&quot;&quot;

Scenario: query response returned with one address
  Given balance
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  When query balances by voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;total_amounts&quot;: [
      {
        &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;total_amount&quot;: &quot;1.250000000000000000&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 1
    }
  }
  &quot;&quot;&quot;

Scenario: query response returned with multiple addresses
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
    &quot;id&quot;: 1,
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
    &quot;amount&quot;: &quot;1.25&quot;,
    &quot;expiration&quot;: &quot;2021-01-01T00:00:00Z&quot;
  }
  &quot;&quot;&quot;
  When query balances by voucher
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;id&quot;: 1,
    &quot;total_amounts&quot;: [
      {
        &quot;address&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
        &quot;total_amount&quot;: &quot;2.500000000000000000&quot;
      },
      {
        &quot;address&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
        &quot;total_amount&quot;: &quot;1.250000000000000000&quot;
      }
    ],
    &quot;pagination&quot;: {
      &quot;total&quot;: 3
    }
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when query fails
</code></pre>`,9),r=[e];function a(s,c){return t(),u("div",null,r)}const d=o(q,[["render",a],["__file","keeper_query_balances_by_voucher.feature.html.vue"]]),l=JSON.parse('{"path":"/specs/mods/voucher/keeper_query_balances_by_voucher.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/voucher/keeper_query_balances_by_voucher.feature"}');export{d as comp,l as data};
