(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),o=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u(""))},children:[Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})," "]})},d=n(10),j=n(6),l=n.n(j),f=n(8),m=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=E4rmBaV9oSgVKBnnnN3d9nRQLHL6flTi"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn ",children:[Object(o.jsx)("img",{src:n,alt:e})," ",Object(o.jsxs)("p",{children:[" ",e," "]})," "]})},p=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(b,Object(d.a)({},t),t.id)}))})]})},O=function(){document.querySelector("#moon");document.body.classList.toggle("modoNocturno")},h=function(t){var e=t.titulo,n=Object(a.useState)([""]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{onClick:O,className:"far fa-moon"}),Object(o.jsxs)("h2",{children:[" ",e," "]})," ",Object(o.jsx)(u,{setCategories:s})," ",Object(o.jsx)("hr",{})," "," ",Object(o.jsxs)("ol",{children:[" ",r.map((function(t){return Object(o.jsx)(p,{category:t},t)}))," "]})," "]})};h.defaultProps={titulo:"GifExpertApp"};n(17);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.61edfa13.chunk.js.map