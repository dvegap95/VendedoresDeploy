(function(){"use strict";var e={8971:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[t("router-view")],1)],1)},a=[],u={name:"App",data:function(){return{}}},c=u,i=t(1001),s=t(3453),l=t.n(s),f=t(7524),d=t(7877),p=(0,i.Z)(c,o,a,!1,null,null,null),m=p.exports;l()(p,{VApp:f.Z,VMain:d.Z});var h=t(8932),b=(t(2222),t(6755),t(8345)),v=(t(1539),t(8783),t(3948),[{path:"/login",component:function(){return Promise.all([t.e(938),t.e(325)]).then(t.bind(t,2325))},children:[{path:"",name:"login",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(414),t.e(712),t.e(845)]).then(t.bind(t,9845))}},{path:"sign-up/:type",name:"sign-up-type",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(414),t.e(53),t.e(712),t.e(30)]).then(t.bind(t,7493))}},{path:"sign-up",name:"sign-up",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(414),t.e(53),t.e(712),t.e(30)]).then(t.bind(t,7493))}}]},{path:"/",component:function(){return Promise.all([t.e(938),t.e(531),t.e(801),t.e(652),t.e(944)]).then(t.bind(t,5082))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(190)]).then(t.bind(t,5281))}}]},{path:"/about",name:"about",component:function(){return t.e(443).then(t.bind(t,3574))}},{path:"*",component:function(){return t.e(310).then(t.bind(t,8310))}}]),g=[{path:"/user",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(414),t.e(53),t.e(157),t.e(652),t.e(654),t.e(25)]).then(t.bind(t,7025))},children:[{path:"selection/:idx",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(706),t.e(551)]).then(t.bind(t,5982))}},{path:"",name:"user",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(414),t.e(706),t.e(29)]).then(t.bind(t,4562))}}]}],y=[{path:"/seller",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(414),t.e(53),t.e(157),t.e(652),t.e(654),t.e(707)]).then(t.bind(t,7707))},children:[{path:"selection/:idx",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(706),t.e(712),t.e(81)]).then(t.bind(t,3408))}},{path:"select-race",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(414),t.e(53),t.e(157),t.e(26)]).then(t.bind(t,78))}},{path:"",name:"seller",component:function(){return Promise.all([t.e(938),t.e(531),t.e(860),t.e(171),t.e(801),t.e(762),t.e(706),t.e(122)]).then(t.bind(t,8199))}}]}];r.Z.use(b.Z);var C=new b.Z({mode:"history",base:"/VendedoresDeploy/",routes:[].concat((0,h.Z)(g),(0,h.Z)(y),(0,h.Z)(v))});C.beforeEach((function(e,n,t){if("/"===e.fullPath)return t();var r=localStorage.getItem("currentUser");return r&&(r=JSON.parse(r)),console.log(r),console.log(e),e.fullPath.startsWith("/login")||null!==r&&r?!e.fullPath.startsWith("/user")&&r&&"user"===r.type?t({name:"user"}):!e.fullPath.startsWith("/seller")&&r&&"seller"===r.type&&r.raceUser?t({name:"seller"}):!r||"seller"!==r.type||r.raceUser||e.fullPath.startsWith("/seller/select-race")?r&&"seller"===r.type&&r.raceUser&&e.fullPath.startsWith("/seller/select-race")?t({name:"seller"}):t():(console.log("no race detected"),t({path:"/seller/select-race"})):t({path:"/login"})}));var U=C,P=t(7376),Z=t(9132);r.Z.use(Z.Z);var w=new Z.Z({icons:{iconfont:"mdi"}});r.Z.config.productionTip=!1,new r.Z({router:U,store:P.Z,vuetify:w,render:function(e){return e(m)}}).$mount("#app")},7376:function(e,n,t){t.d(n,{Z:function(){return T}});var r={};t.r(r),t.d(r,{setCurrentRace:function(){return b}});var o={};t.r(o),t.d(o,{setCurrentRace:function(){return v}});var a={};t.r(a),t.d(a,{setCurrentRace:function(){return U},setCurrentRaceUserInfo:function(){return P}});var u={};t.r(u),t.d(u,{setCurrentRace:function(){return Z},setCurrentRaceUserInfo:function(){return w}});var c={};t.r(c),t.d(c,{setCurrentUser:function(){return R},updateCurrentUser:function(){return k}});var i={};t.r(i),t.d(i,{clearCurrentUser:function(){return E},setCurrentUser:function(){return A},updateCurrentUser:function(){return I}});var s=t(144),l=t(629),f=t(4009),d=t.n(f);function p(){return{currentRace:null}}var m=t(8932),h=t(9726);t(1249),t(9720);function b(e,n){"object"===(0,h.Z)(n)&&(n=Object.entries(n).map((function(e){return e[1]}))),e.currentRace=(0,m.Z)(n)}function v(e,n){var t=e.commit;t("setCurrentRace",n)}var g={namespaced:!0,state:p,mutations:r,actions:o};function y(){return{currentRace:null,currentRaceUserInfo:null}}var C=t(4367);function U(e,n){"object"===(0,h.Z)(n)&&(n=Object.entries(n).map((function(e){return e[1]}))),e.currentRace=(0,m.Z)(n)}function P(e,n){n.race&&delete n.race,n.password&&delete n.password,e.currentRaceUserInfo=(0,C.Z)({},n)}function Z(e,n){var t=e.commit;t("setCurrentRace",n)}function w(e,n){var t=e.commit;Array.isArray(n.race),t("setCurrentRace",n.race),delete n.race,t("setCurrentRaceUserInfo",n)}var O={namespaced:!0,state:y,mutations:a,actions:u},S=localStorage.getItem("currentUser");if(S)try{S=JSON.parse(S)}catch(x){console.error(x),localStorage.removeItem("currentUser"),S=void 0}function j(){return{currentUser:S}}t(8862);function R(e,n){n&&n.password&&delete n.password,e.currentUser=n&&(0,C.Z)({},n),n?(n.race&&delete n.race,localStorage.setItem("currentUser",JSON.stringify(n))):localStorage.removeItem("currentUser")}function k(e,n){console.log({payload:n}),n&&n.password&&delete n.password,n?(n.race&&delete n.race,e.currentUser=(0,C.Z)((0,C.Z)({},e.currentUser),n),console.log("currentUser:",e.currentUser),localStorage.setItem("currentUser",JSON.stringify(e.currentUser))):localStorage.removeItem("currentUser")}function A(e,n){var t=e.commit;console.log({payload:n}),t("setCurrentUser",n)}function E(e,n){var t=e.commit;t("setCurrentUser",null)}function I(e,n){var t=e.commit;console.log({payload:n}),t("updateCurrentUser",n)}var N={namespaced:!0,state:j,mutations:c,actions:i};s.Z.use(l.ZP),s.Z.use(d(),{position:"bottom-right"});var T=new l.ZP.Store({modules:{user:g,seller:O,common:N}})}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(c=!1,a<u&&(u=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"-legacy."+{25:"fb4706db",26:"4d609a6f",29:"27a72e1f",30:"ad216e2f",53:"3f7e350c",81:"92b78b75",122:"cc3b2d25",157:"c1617236",171:"e40ebe85",190:"845a1918",310:"e070bbe5",325:"ff3e0031",414:"75916b8a",443:"ab85f876",531:"45f1496e",551:"4872850b",652:"2ab91855",654:"a6673d23",706:"a583ba41",707:"bf9f7562",712:"63702b47",762:"538a8a36",801:"e15ef31c",845:"4b4b1cd0",860:"e59a1a43",938:"6759d49a",944:"d4d14b23"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{26:"df87b117",29:"ab00a445",53:"985d378f",81:"8905c176",122:"d85bd5da",190:"a1e577b9",414:"2ecf55b7",551:"32e8f262",654:"863ce92a",845:"b85c30e5",938:"77b2a425",944:"54be6993"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vendedores:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var c,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/VendedoresDeploy/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var u=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=u,i.request=c,o.parentNode.removeChild(o),r(i)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),c=t.p+u;if(n(u,c))return o();e(r,c,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={26:1,29:1,53:1,81:1,122:1,190:1,414:1,551:1,654:1,845:1,938:1,944:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else if(938!=n){var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),c=new Error,i=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",c.name="ChunkLoadError",c.type=a,c.request=u,o[1](c)}};t.l(u,i,"chunk-"+n,n)}else e[n]=0},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],c=r[1],i=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(i)var l=i(t)}for(n&&n(r);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8971)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.e83ea8e6.js.map