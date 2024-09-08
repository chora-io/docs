import{_ as n,o as t,c as o,e as u}from"./app-CiOG3kca.js";const e={},q=u(`<p>Feature: Msg/UpdateAdmin</p><p>UpdateAdmin is successful when:</p><ul><li>admin is admin account</li></ul><p>UpdateAdmin has the following outcomes:</p><ul><li>message response returned</li><li>Admin is updated in state</li><li>EventUpdateAdmin is emitted</li></ul><p>Rule: The admin must be the admin account</p><pre><code>Background:
  Given admin
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
  }
  &quot;&quot;&quot;

Scenario: admin is admin account
  When msg update admin
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect no error

Scenario: admin is not admin account
  When msg update admin
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect the error
  &quot;&quot;&quot;
  admin chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: admin account chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
  &quot;&quot;&quot;
</code></pre><p>Rule: The message response is returned</p><pre><code>Background:
  Given admin
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
  }
  &quot;&quot;&quot;

Scenario: message response returned
  When msg update admin
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect response
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - response is never returned when message fails
</code></pre><p>Rule: Admin is updated in state</p><pre><code>Background:
  Given admin
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
  }
  &quot;&quot;&quot;

Scenario: state admin updated
  When msg update admin
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect state admin
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - state is never updated when message fails
</code></pre><p>Rule: EventUpdateAdmin emitted</p><pre><code>Background:
  Given admin
  &quot;&quot;&quot;
  {
    &quot;address&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;
  }
  &quot;&quot;&quot;

Scenario: event update admin emitted
  When msg update admin
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;
  Then expect event update
  &quot;&quot;&quot;
  {
    &quot;admin&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
    &quot;new_admin&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
  }
  &quot;&quot;&quot;

# No failing scenario - event is never emitted when message fails
</code></pre>`,13),a=[q];function d(s,i){return t(),o("div",null,a)}const c=n(e,[["render",d],["__file","keeper_msg_update_admin.feature.html.vue"]]),m=JSON.parse('{"path":"/specs/mods/admin/keeper_msg_update_admin.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/admin/keeper_msg_update_admin.feature"}');export{c as comp,m as data};
