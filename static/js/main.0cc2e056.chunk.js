(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.DEFAULT=0]="DEFAULT",t[t.ALPHABET=1]="ALPHABET",t[t.LENGHT=2]="LENGHT"}(s||(s={}));var j=function(){var t=Object(a.useState)(s.DEFAULT),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],h=l[1],E=function(t,e){var n=e.sortField,c=e.isReversed,o=Object(r.a)(t);return n!==s.DEFAULT&&o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGHT:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(d,{sortField:n,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return c(s.ALPHABET)},className:u()("button","is-info",{"is-light":n!==s.ALPHABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return c(s.LENGHT)},className:u()("button","is-info",{"is-light":n!==s.LENGHT}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return h(!j)},className:u()("button is-warning",{"is-light":!j}),children:"Reverse"}),(j||n!==s.DEFAULT)&&Object(b.jsx)("button",{onClick:function(){c(s.DEFAULT),h(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:E.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0cc2e056.chunk.js.map