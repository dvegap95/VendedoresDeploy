(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[551],{6790:function(t,e,i){"use strict";var n=i(7854),s=i(3157),o=i(6244),r=i(9974),a=n.TypeError,l=function(t,e,i,n,c,u,d,h){var v,f,p=c,m=0,g=!!d&&r(d,h);while(m<n){if(m in i){if(v=g?g(i[m],m,e):i[m],u>0&&s(v))f=o(v),p=l(t,e,v,f,p,u-1)-1;else{if(p>=9007199254740991)throw a("Exceed the acceptable array length");t[p]=v}p++}m++}return p};t.exports=l},4944:function(t,e,i){"use strict";var n=i(2109),s=i(6790),o=i(7908),r=i(6244),a=i(9303),l=i(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),i=r(e),n=l(e,0);return n.length=s(n,e,e,i,0,void 0===t?1:a(t)),n}})},3792:function(t,e,i){var n=i(1223);n("flat")},4048:function(t,e,i){var n=i(2109);n({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},3237:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=i(4367),s=(i(9653),i(4944),i(3792),i(5648)),o=i(4981),r=i(6505),a=i(3325),l=(0,a.Z)(o.Z,r.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,n.Z)((0,n.Z)({"v-card":!0},r.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s.Z.options.computed.classes.call(this))},styles:function(){var t=(0,n.Z)({},s.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,i){"use strict";i.d(e,{h7:function(){return o},ZB:function(){return a},EB:function(){return l}});var n=i(3237),s=i(4589),o=(0,s.Ji)("v-card__actions"),r=(0,s.Ji)("v-card__subtitle"),a=(0,s.Ji)("v-card__text"),l=(0,s.Ji)("v-card__title");n.Z},5424:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(5200),s=i(4367),o=(i(1539),i(7327),i(3325)),r=i(5827),a=i(172),l=i(6952),c=i(7352),u=i(8085),d=i(2936),h=i(6505),v=i(9131),f=i(1824),p=(0,o.Z)(l.Z,v.Z,h.Z,u.Z,(0,c.d)("chipGroup"),(0,d.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({"v-chip":!0},h.Z.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=(0,n.Z)(e,2),s=i[0],o=i[1];t.$attrs.hasOwnProperty(s)&&(0,f.fK)(s,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r.Zq,t)},genClose:function(){var t=this;return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,o=i.data;o.attrs=(0,s.Z)((0,s.Z)({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,o),e)}})},6662:function(t,e,i){"use strict";i.d(e,{Z:function(){return k}});var n=i(4367),s=i(8932),o=i(3796),r=(i(9653),i(3210),i(6699),i(2023),i(1539),i(9826),i(3242)),a=i(5795),l=i(5907),c=i(3944),u=i(1058),d=u.Z,h=i(4589),v=i(144),f=v.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=(0,h.KK)(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&((0,h.qh)(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h.Do.up,h.Do.pageup],i=[h.Do.down,h.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,s=e.shiftKey||e.deltaX?"x":"y",o="y"===s?e.deltaY:e.deltaX||e.deltaY;"y"===s?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var r=o<0,a=o>0;return!(i||!r)||(!(n||!a)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=(0,h.iZ)(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,h.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),p=i(423),m=i(5703),g=i(2936),y=i(5600),Z=i(3325),w=i(1824),b=(0,Z.Z)(a.Z,l.Z,c.Z,f,p.Z,m.Z,g.Z),k=b.extend({name:"v-dialog",directives:{ClickOutside:y.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},(0,o.Z)(t,"v-dialog ".concat(this.contentClass).trim(),!0),(0,o.Z)(t,"v-dialog--active",this.isActive),(0,o.Z)(t,"v-dialog--persistent",this.persistent),(0,o.Z)(t,"v-dialog--fullscreen",this.fullscreen),(0,o.Z)(t,"v-dialog--scrollable",this.scrollable),(0,o.Z)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&(0,w.Jk)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===h.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=(0,s.Z)(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r.Z,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:(0,n.Z)({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=(0,n.Z)((0,n.Z)({},t.style),{},{maxWidth:(0,h.kb)(this.maxWidth),width:(0,h.kb)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9762:function(t,e,i){"use strict";i(8582);var n=i(4589);e["Z"]=(0,n.Ji)("spacer","div","v-spacer")},1058:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=i(4367),s=(i(9653),i(6952)),o=i(8085),r=i(2936),a=i(3325),l=(0,a.Z)(s.Z,o.Z,r.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return(0,n.Z)({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},3242:function(t,e,i){"use strict";i(9826),i(1539);var n=i(8085);e["Z"]=n.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n.Z.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},5600:function(t,e,i){"use strict";var n=i(9726),s=(i(1539),i(1706));function o(){return!0}function r(t,e,i){if(!t||!1===a(t,i))return!1;var o=(0,s.e)(e);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var r=("object"===(0,n.Z)(i.value)&&i.value.include||function(){return[]})();return r.push(e),!r.some((function(e){return e.contains(t.target)}))}function a(t,e){var i="object"===(0,n.Z)(e.value)&&e.value.closeConditional||o;return i(t)}function l(t,e,i,n){var s="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&r(t,e,i)&&setTimeout((function(){a(t,i)&&s&&s(t)}),0)}function c(t,e){var i=(0,s.e)(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var u={inserted:function(t,e,i){var n=function(n){return l(n,t,e,i)},s=function(i){t._clickOutside.lastMousedownWasOutside=r(i,t,e)};c(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",s,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:s}},unbind:function(t,e,i){t._clickOutside&&(c(t,(function(e){var n;if(e&&null!=(n=t._clickOutside)&&n[i.context._uid]){var s=t._clickOutside[i.context._uid],o=s.onClick,r=s.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",r,!0)}})),delete t._clickOutside[i.context._uid])}};e["Z"]=u},4981:function(t,e,i){"use strict";i(9653);var n=i(144),s=i(7420);e["Z"]=n.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s.Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},423:function(t,e,i){"use strict";var n=i(144);e["Z"]=n.Z.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},1706:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,{e:function(){return n}})},1130:function(t,e,i){"use strict";i.d(e,{p5:function(){return l},if:function(){return u}});var n=i(8932),s=i(6198),o=(i(5666),i(1539),i(4747),i(1703),i(2222),i(1618)),r=i(7376),a=i(5321);function l(t){return c.apply(this,arguments)}function c(){return c=(0,s.Z)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log({store:r.Z}),r.Z.state.user.currentRace&&r.Z.state.user.currentRace.forEach((function(t){if(t.word===e)throw new Error("Word already exists")})),i=(0,a.JU)(o.ZP,"/users",""+r.Z.state.common.currentUser.id),t.next=5,(0,a.r7)(i,{race:[].concat((0,n.Z)(r.Z.state.user.currentRace),[{word:e,pictures:{}}])});case 5:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function u(t,e){return d.apply(this,arguments)}function d(){return d=(0,s.Z)(regeneratorRuntime.mark((function t(e,i){var n,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log({selected:i,selectionIndex:e}),n=(0,a.JU)(o.ZP,"/users",""+r.Z.state.common.currentUser.id),s=r.Z.state.user.currentRace,s[e].selected=i,l=r.Z.state.common.currentUser.sellers,l[i.user].score+=3,l[i.user].proposals-=1,console.log({newRaceInfo:s,sellers:l}),t.next=10,(0,a.r7)(n,{race:s,sellers:l});case 10:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},5982:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return z}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.loading?t._e():i("v-row",{staticClass:"word-bar",attrs:{align:"center",justify:"center"}},[i("v-chip",{staticStyle:{"font-size":"large"},attrs:{color:"primary",link:"",to:"/user"}},[t._v(t._s(t.selection?t.selection.word:"..."))])],1),i("v-container",{staticStyle:{"padding-top":"15px"}},[t.loading?i("loading"):t.selection.selected?i("v-container",[i("v-img",{staticClass:"my-3",attrs:{contain:"",src:t.selection.selected.original,"lazy-src":t.selection.selected.thumbnail,"max-height":"400px","min-height":"400px"}},[i("template",{slot:"placeholder"},[i("img-placeholder")],1)],2),t._v(" "+t._s(t.selection.selected.title)+" "),i("br"),i("div",{staticStyle:{color:"green"}},[t._v(" From seller: "+t._s(t.selection.selected.user)+" ")])],1):Object.entries(t.pictures).length?t.thumbnailView?i("v-container",[i("v-row",{attrs:{"align-content":"center",justify:"center"}},t._l(t.pictures,(function(e,n){return i("v-col",{key:n,staticClass:"pict-card"},[i("tooltip",{attrs:{text:e.title}},[i("div",{staticClass:"img-container"},[i("v-img",{staticClass:"my-3 thumbnail",attrs:{contain:"",src:e.thumbnail,"lazy-src":e.thumbnail,"max-height":"200px","min-height":"200px","min-width":"270px"},on:{click:function(){return t.showCarousel(n)}}},[i("template",{slot:"placeholder"},[i("img-placeholder")],1)],2)],1)])],1)})),1)],1):i("div",{staticClass:"carousel-container"},[i("v-carousel",{attrs:{"hide-delimiters":"","show-arrows-on-hover":"","hide-delimiter-background":""},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.pictures,(function(e,n){return i("div",{key:n,attrs:{text:e.title}},[i("v-carousel-item",[i("v-sheet",{staticClass:"transparent-sheet",attrs:{height:"100%"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("v-img",{attrs:{contain:"",src:e.original,height:"100%","lazy-src":e.thumbnail},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("img-placeholder")]},proxy:!0}],null,!0)})],1)],1)],1)],1)})),0),i("v-row",{staticClass:"actions-row"},[i("tooltip",{attrs:{text:"Select current image"}},[i("v-btn",{staticClass:"action-btn",attrs:{fab:"",small:"",color:"primary",disabled:t.selecting},on:{click:function(e){t.confirmDialog=!0}}},[t.selecting?i("v-progress-circular",{attrs:{indeterminate:""}}):i("v-icon",[t._v(" mdi-check ")])],1)],1),i("tooltip",{attrs:{text:"Close preview"}},[i("v-btn",{staticClass:"action-btn",attrs:{fab:"",small:"",color:"primary"},on:{click:function(e){t.thumbnailView=!0}}},[i("v-icon",[t._v(" mdi-close ")])],1)],1)],1),i("confirm-dialog",{attrs:{text:"Once you select the image there's no going back, the corresponding seller will recive the points and the quiz related to this word ("+t.selection.word+") would be closed"},on:{accept:function(){return t.select(t.carousel)}},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}})],1):i("v-row",{staticClass:"fill-height",staticStyle:{"margin-top":"20%"},attrs:{"align-content":"center",justify:"center"}},[i("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[i("h3",[t._v(" Awaiting proposals ..."),i("router-link",{attrs:{to:"/user"}},[t._v(" go back.")])],1),i("i",{staticStyle:{"font-size":"small"}},[t._v("No user has proposed any image yet")])])],1)],1)],1)},s=[],o=i(6198),r=i(4367),a=(i(5666),i(1249),i(9720),i(4048),i(9653),i(920)),l=i(629),c=i(5418),u=i(1130),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(t.title||"Confirm?")+" ")]),t.text?i("v-card-text",[t._v(t._s(t.text))]):t._e(),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:t.cancel}},[t._v(" "+t._s(t.cancelText||"cancel")+" ")]),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.accept}},[t._v(" "+t._s(t.okText||"ok")+" ")])],1)],1)],1)],1)},h=[],v={props:{title:String,text:String,okText:String,cancelText:String,value:Boolean},methods:{accept:function(){this.$emit("input",!1),this.$emit("accept",!0)},cancel:function(){this.$emit("input",!1)}}},f=v,p=i(1001),m=i(3453),g=i.n(m),y=i(3150),Z=i(3237),w=i(7118),b=i(6662),k=i(2877),C=i(9762),x=(0,p.Z)(f,d,h,!1,null,null,null),_=x.exports;g()(x,{VBtn:y.Z,VCard:Z.Z,VCardActions:w.h7,VCardText:w.ZB,VCardTitle:w.EB,VDialog:b.Z,VRow:k.Z,VSpacer:C.Z});var $=i(7873),S={components:{Loading:a.Z,Tooltip:c.Z,ConfirmDialog:_,ImgPlaceholder:$.Z},data:function(){return{selected:-1,thumbnailView:!0,carousel:0,confirmDialog:!1,id:-1,selecting:!1}},computed:(0,r.Z)((0,r.Z)({},(0,l.rn)("user",["currentRace"])),{},{loading:function(){return!Boolean(this.currentRace)},pictures:function(){return Object.entries(this.selection.pictures).map((function(t){return(0,r.Z)((0,r.Z)({},t[1]),{},{user:t[0]})}))},selection:function(){return this.currentRace[this.id]}}),watch:{loading:{immediate:!0,handler:function(t){if(!t){var e=+this.$router.currentRoute.params.idx-1;console.log({id:e}),(Number.isNaN(e)||e>=this.currentRace.length||e<0)&&(this.$toast.error("No se encuentra la ruta solicitada"),this.$router.push("/404")),this.id=e}}}},methods:{toggleSelected:function(t){this.selected===t?this.selected=null:this.selected=t},showCarousel:function(t){this.thumbnailView=!1,this.carousel=t},select:function(t){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.selecting=!0,i.prev=1,i.next=4,(0,u["if"])(e.id,e.pictures[t]);case 4:e.$toast.success("Image successfully selected"),e.$toast.success("+3pts to "+t),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](1),e.$toast.error(i.t0.message);case 11:return i.prev=11,e.selecting=!1,i.finish(11);case 14:case"end":return i.stop()}}),i,null,[[1,8,11,14]])})))()}}},E=S,O=i(7426),B=i(4062),A=i(5424),I=i(2102),N=i(9846),T=i(6428),V=i(7047),L=i(624),R=i(3385),D=(0,p.Z)(E,n,s,!1,null,null,null),z=D.exports;g()(D,{VBtn:y.Z,VCarousel:O.Z,VCarouselItem:B.Z,VChip:A.Z,VCol:I.Z,VContainer:N.Z,VIcon:T.Z,VImg:V.Z,VProgressCircular:L.Z,VRow:k.Z,VSheet:R.Z})}}]);
//# sourceMappingURL=551-legacy.4872850b.js.map