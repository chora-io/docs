import{_ as n,o as s,c as r,a as e}from"./app-CiOG3kca.js";const t={},i=e("p",null,"Feature: Query/Admin",-1),o=e("p",null,"Query/Admin is successful when:",-1),a=e("ul",null,[e("li",null,"admin with identifier exists")],-1),l=e("p",null,"Query/Admin has the following outcomes:",-1),u=e("ul",null,[e("li",null,"query response returned")],-1),d=e("p",null,"Rule: The query response is returned",-1),_=e("pre",null,[e("code",null,`Background:
  Given admin
  """
  {
    "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
  }
  """

Scenario: query response returned
  When query admin
  """
  {}
  """
  Then expect response
  """
  {
    "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
  }
  """

# No failing scenario - response is never returned when query fails
`)],-1),c=[i,o,a,l,u,d,_];function m(h,p){return s(),r("div",null,c)}const q=n(t,[["render",m],["__file","keeper_query_admin.feature.html.vue"]]),y=JSON.parse('{"path":"/specs/mods/admin/keeper_query_admin.feature","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"specs/mods/admin/keeper_query_admin.feature"}');export{q as comp,y as data};
