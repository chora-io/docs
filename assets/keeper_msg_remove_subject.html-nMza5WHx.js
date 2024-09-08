import{_ as e,o as t,c as s,e as a}from"./app-CiOG3kca.js";const d={},i=a(`<h1 id="msg-removesubject" tabindex="-1"><a class="header-anchor" href="#msg-removesubject"><span>Msg/RemoveSubject</span></a></h1><p>Msg/RemoveSubject is successful when:</p><ul><li>steward is the subject steward</li></ul><p>Msg/RemoveSubject has the following outcomes:</p><ul><li>message response returned</li><li>Subject is removed from state</li><li>EventRemoveSubject is emitted</li></ul><h2 id="steward-is-the-subject-steward" tabindex="-1"><a class="header-anchor" href="#steward-is-the-subject-steward"><span>Steward is the subject steward</span></a></h2><h3 id="steward-is-subject-steward" tabindex="-1"><a class="header-anchor" href="#steward-is-subject-steward"><span>steward is subject steward</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no error.</p><h3 id="steward-is-not-subject-steward" tabindex="-1"><a class="header-anchor" href="#steward-is-not-subject-steward"><span>steward is not subject steward</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect the error</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>steward chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: subject steward chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-message-response-is-returned" tabindex="-1"><a class="header-anchor" href="#the-message-response-is-returned"><span>The message response is returned</span></a></h2><h3 id="message-response-returned" tabindex="-1"><a class="header-anchor" href="#message-response-returned"><span>message response returned</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect response</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="subject-is-removed-from-state" tabindex="-1"><a class="header-anchor" href="#subject-is-removed-from-state"><span>Subject is removed from state</span></a></h2><h3 id="state-subject-removed" tabindex="-1"><a class="header-anchor" href="#state-subject-removed"><span>state subject removed</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect no state subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventremovesubject-is-emitted" tabindex="-1"><a class="header-anchor" href="#eventremovesubject-is-emitted"><span>EventRemoveSubject is emitted</span></a></h2><h3 id="event-remove-emitted" tabindex="-1"><a class="header-anchor" href="#event-remove-emitted"><span>event remove emitted</span></a></h3><p><em>Given</em> subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=&quot;,
  &quot;steward&quot;: &quot;BTZfSbi0JKqguZ/tIAPUIhdAa7Y=&quot;,
  &quot;metadata&quot;: &quot;chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>When</em> msg remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;,
  &quot;steward&quot;: &quot;chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Then</em> expect event remove subject</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;address&quot;: &quot;chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),n=[i];function r(u,l){return t(),s("div",null,n)}const o=e(d,[["render",r],["__file","keeper_msg_remove_subject.html.vue"]]),v=JSON.parse('{"path":"/specs/mods/subject/keeper_msg_remove_subject.html","title":"Msg/RemoveSubject","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Steward is the subject steward","slug":"steward-is-the-subject-steward","link":"#steward-is-the-subject-steward","children":[{"level":3,"title":"steward is subject steward","slug":"steward-is-subject-steward","link":"#steward-is-subject-steward","children":[]},{"level":3,"title":"steward is not subject steward","slug":"steward-is-not-subject-steward","link":"#steward-is-not-subject-steward","children":[]}]},{"level":2,"title":"The message response is returned","slug":"the-message-response-is-returned","link":"#the-message-response-is-returned","children":[{"level":3,"title":"message response returned","slug":"message-response-returned","link":"#message-response-returned","children":[]}]},{"level":2,"title":"Subject is removed from state","slug":"subject-is-removed-from-state","link":"#subject-is-removed-from-state","children":[{"level":3,"title":"state subject removed","slug":"state-subject-removed","link":"#state-subject-removed","children":[]}]},{"level":2,"title":"EventRemoveSubject is emitted","slug":"eventremovesubject-is-emitted","link":"#eventremovesubject-is-emitted","children":[{"level":3,"title":"event remove emitted","slug":"event-remove-emitted","link":"#event-remove-emitted","children":[]}]}],"git":{},"filePathRelative":"specs/mods/subject/keeper_msg_remove_subject.md"}');export{o as comp,v as data};
