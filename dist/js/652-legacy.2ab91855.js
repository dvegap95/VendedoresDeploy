"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[652],{3343:function(t,i,e){e.d(i,{Z:function(){return T}});var o=e(4367),n=(e(9253),e(9653),e(6656)),r=e(9726);function s(t,i,e){var o=i.modifiers||{},n=o.self,s=void 0!==n&&n,l=i.value,c="object"===(0,r.Z)(l)&&l.options||{passive:!0},a="function"===typeof l||"handleEvent"in l?l:l.handler,h=s?t:i.arg?document.querySelector(i.arg):window;h&&(h.addEventListener("scroll",a,c),t._onScroll=Object(t._onScroll),t._onScroll[e.context._uid]={handler:a,options:c,target:s?void 0:h})}function l(t,i,e){var o;if(null!=(o=t._onScroll)&&o[e.context._uid]){var n=t._onScroll[e.context._uid],r=n.handler,s=n.options,l=n.target,c=void 0===l?t:l;c.removeEventListener("scroll",r,s),delete t._onScroll[e.context._uid]}}var c={inserted:s,unbind:l},a=c,h=e(3536),u=e(3325);function p(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,u.Z)((0,h.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unregister(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var d=e(1824),f=e(144),v=f.Z.extend({name:"scrollable",directives:{Scroll:c},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,d.Kd)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),m=e(9177),g=e(2936),S=e(4589),b=(0,u.Z)(n.Z,v,m.Z,g.Z,p("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),T=b.extend({name:"v-app-bar",directives:{Scroll:a},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return v.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return(0,o.Z)((0,o.Z)({},n.Z.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.Z.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,i=this.computedOriginalHeight;return t+(i-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,i=1.5;return t+(i-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.Z.options.computed.isCollapsed.call(this)},isProminent:function(){return n.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return(0,o.Z)((0,o.Z)({},n.Z.options.computed.styles.call(this)),{},{fontSize:(0,S.kb)(this.computedFontSize,"rem"),marginTop:(0,S.kb)(this.computedMarginTop),transform:"translateY(".concat((0,S.kb)(this.computedTransform),")"),left:(0,S.kb)(this.computedLeft),right:(0,S.kb)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var i=n.Z.options.render.call(this,t);return i.data=i.data||{},this.canScroll&&(i.data.directives=i.data.directives||[],i.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),i}})},9762:function(t,i,e){e(8582);var o=e(4589);i["Z"]=(0,o.Ji)("spacer","div","v-spacer")},5194:function(t,i,e){e.d(i,{Z:function(){return p}});var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tooltip",{attrs:{text:"Logout"}},[e("div",{staticStyle:{cursor:"pointer"},on:{click:t.logout}},[t._t("default")],2)])},n=[],r=e(4367),s=e(629),l=e(5418),c={components:{Tooltip:l.Z},methods:(0,r.Z)((0,r.Z)({},(0,s.nv)("common",["clearCurrentUser"])),{},{logout:function(){this.clearCurrentUser(),this.$router.push({path:"/login"})}})},a=c,h=e(1001),u=(0,h.Z)(a,o,n,!1,null,null,null),p=u.exports},5418:function(t,i,e){e.d(i,{Z:function(){return Z}});var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on,n=i.attrs;return[e("div",t._g(t._b({},"div",n,!1),o),[t._t("default")],2)]}}],null,!0)},[e("span",[t._v(t._s(t.text))])])},n=[],r={name:"Tooltip",props:{text:String}},s=r,l=e(1001),c=e(3453),a=e.n(c),h=e(3796),u=(e(9653),e(5795)),p=e(6952),d=e(4561),f=e(5907),v=e(5936),m=e(2936),g=e(4589),S=e(1824),b=e(3325),T=(0,b.Z)(p.Z,d.Z,f.Z,v.Z,m.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,i=t.activator,e=t.content,o=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?i.offsetLeft:i.left,r=0;return this.top||this.bottom||o?r=n+i.width/2-e.width/2:(this.left||this.right)&&(r=n+(this.right?i.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,i=t.activator,e=t.content,o=!1!==this.attach?i.offsetTop:i.top,n=0;return this.top||this.bottom?n=o+(this.bottom?i.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=o+i.height/2-e.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,g.kb)(this.maxWidth),minWidth:(0,g.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,g.sp)(this,"activator",!0)&&(0,S.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,i=u.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(i.focus=function(i){t.getActivator(i),t.runDelay("open")},i.blur=function(i){t.getActivator(i),t.runDelay("close")}),i.keydown=function(i){i.keyCode===g.Do.esc&&(t.getActivator(i),t.runDelay("close"))},i},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},(0,h.Z)(t,this.contentClass,!0),(0,h.Z)(t,"menuable__content__active",this.isActive),(0,h.Z)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var i=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[i.genTransition()]})),this.genActivator()])}}),y=(0,l.Z)(s,o,n,!1,null,null,null),Z=y.exports;a()(y,{VTooltip:T})},6806:function(t,i,e){t.exports=e.p+"img/selectImage.b134857d.png"}}]);
//# sourceMappingURL=652-legacy.2ab91855.js.map