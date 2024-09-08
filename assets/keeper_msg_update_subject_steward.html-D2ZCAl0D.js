import{_ as e,o as t,c as s,e as a}from"./app-CiOG3kca.js";const d={},n=a(`<h1 id="msg-updatesubjectsteward" tabindex="-1"><a class="header-anchor" href="#msg-updatesubjectsteward"><span>Msg/UpdateSubjectSteward</span></a></h1><p>UpdateSubjectSteward is successful when:</p><ul><li>steward is the subject steward</li></ul><p>UpdateSubjectSteward has the following outcomes:</p><ul><li>message response returned</li><li>Content is updated in state</li><li>EventUpdateSubjectSteward is emitted</li></ul><h2 id="the-steward-must-be-the-subject-steward" tabindex="-1"><a class="header-anchor" href="#the-steward-must-be-the-subject-steward"><span>The steward must be the subject steward</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="steward-is-subject-steward" tabindex="-1"><a class="header-anchor" href="#steward-is-subject-steward"><span>steward is subject steward</span></a></h3><p><em>When</em> msg update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="steward-is-not-subject-steward" tabindex="-1"><a class="header-anchor" href="#steward-is-not-subject-steward"><span>steward is not subject steward</span></a></h3><p><em>When</em> msg update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;,
  &quot;new_steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>steward chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: subject steward chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>When</em> msg update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-is-updated-in-state" tabindex="-1"><a class="header-anchor" href="#content-is-updated-in-state"><span>Content is updated in state</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-subject-updated" tabindex="-1"><a class="header-anchor" href="#state-subject-updated"><span>state subject updated</span></a></h3><p><em>When</em> msg update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect state subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;hEyiXxUCaFQmkbuhO9r+QDscjIY=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventupdatesubjectsteward-emitted" tabindex="-1"><a class="header-anchor" href="#eventupdatesubjectsteward-emitted"><span>EventUpdateSubjectSteward emitted</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-update-subject-steward-emitted" tabindex="-1"><a class="header-anchor" href="#event-update-subject-steward-emitted"><span>event update subject steward emitted</span></a></h3><p><em>When</em> msg update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;,
  &quot;new_steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event update subject steward</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),u=[n];function i(r,c){return t(),s("div",null,u)}const o=e(d,[["render",i],["__file","keeper_msg_update_subject_steward.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/subject/keeper_msg_update_subject_steward.html","title":"Msg/UpdateSubjectSteward","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The steward must be the subject steward","slug":"the-steward-must-be-the-subject-steward","link":"#the-steward-must-be-the-subject-steward","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"steward is subject steward","slug":"steward-is-subject-steward","link":"#steward-is-subject-steward","children":[]},{"level":3,"title":"steward is not subject steward","slug":"steward-is-not-subject-steward","link":"#steward-is-not-subject-steward","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Content is updated in state","slug":"content-is-updated-in-state","link":"#content-is-updated-in-state","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"state subject updated","slug":"state-subject-updated","link":"#state-subject-updated","children":[]}]},{"level":2,"title":"EventUpdateSubjectSteward emitted","slug":"eventupdatesubjectsteward-emitted","link":"#eventupdatesubjectsteward-emitted","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"event update subject steward emitted","slug":"event-update-subject-steward-emitted","link":"#event-update-subject-steward-emitted","children":[]}]}],"git":{},"filePathRelative":"specs/mods/subject/keeper_msg_update_subject_steward.md"}');export{o as comp,v as data};