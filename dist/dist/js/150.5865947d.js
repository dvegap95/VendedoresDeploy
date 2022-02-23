"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[150],{3150:function(e,t,i){i.d(t,{Z:function(){return m}});var s=i(5648),n=i(624),r=n.Z,a=i(7352),o=i(2936),l=i(3377),c=i(3536),h=i(6505),u=i(9131),d=i(3325),p=i(1824);const v=(0,d.Z)(s.Z,h.Z,c.Z,u.Z,(0,a.d)("btnToggle"),(0,o.d)("inputValue"));var m=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...h.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(e=this.ripple)?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,p.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(i,this.disabled?s:n(this.color,s),t)}})},624:function(e,t,i){i.d(t,{Z:function(){return a}});var s=i(8083),n=i(6952),r=i(4589),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,i){this.isVisible=i}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},5648:function(e,t,i){var s=i(3385);t["Z"]=s.Z},6286:function(e,t,i){i.d(t,{Z:function(){return k}});var s=i(4589);const n=80;function r(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e){return"TouchEvent"===e.constructor.name}function o(e){return"KeyboardEvent"===e.constructor.name}const l=(e,t,i={})=>{let s=0,n=0;if(!o(e)){const i=t.getBoundingClientRect(),r=a(e)?e.touches[e.touches.length-1]:e;s=r.clientX-i.left,n=r.clientY-i.top}let r=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,r=t.clientWidth/2,r=i.center?r:r+Math.sqrt((s-r)**2+(n-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*r)/2+"px",h=(t.clientHeight-2*r)/2+"px",u=i.center?c:s-r+"px",d=i.center?h:n-r+"px";return{radius:r,scale:l,x:u,y:d,centerX:c,centerY:h}},c={show(e,t,i={}){if(!t._ripple||!t._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:a,scale:o,x:c,y:h,centerX:u,centerY:d}=l(e,t,i),p=2*a+"px";n.className="v-ripple__animation",n.style.width=p,n.style.height=p,t.appendChild(s);const v=window.getComputedStyle(t);v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),r(n,`translate(${c}, ${h}) scale3d(${o},${o},${o})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),r(n,`translate(${u}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const i=t[t.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode&&e.removeChild(i.parentNode)}),300)}),n)}};function h(e){return"undefined"===typeof e||!!e}function u(e){const t={},i=e.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,a(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(t.center=i._ripple.centered||o(e),i._ripple.class&&(t.class=i._ripple.class),a(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(e,i,t)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(e,i,t)}}function d(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{d(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),c.hide(t)}}function p(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let v=!1;function m(e){v||e.keyCode!==s.Do.enter&&e.keyCode!==s.Do.space||(v=!0,u(e))}function g(e){v=!1,d(e)}function b(e){!0===v&&(v=!1,d(e))}function f(e,t,i){const s=h(t.value);s||c.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=s;const n=t.value||{};n.center&&(e._ripple.centered=!0),n.class&&(e._ripple.class=t.value.class),n.circle&&(e._ripple.circle=n.circle),s&&!i?(e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",u),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",m),e.addEventListener("keyup",g),e.addEventListener("blur",b),e.addEventListener("dragstart",d,{passive:!0})):!s&&i&&C(e)}function C(e){e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",u),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",p),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",m),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",d),e.removeEventListener("blur",b)}function _(e,t,i){f(e,t,!1)}function x(e){delete e._ripple,C(e)}function y(e,t){if(t.value===t.oldValue)return;const i=h(t.oldValue);f(e,t,i)}const w={bind:_,unbind:x,update:y};var k=w},7352:function(e,t,i){i.d(t,{d:function(){return n}});var s=i(6257);function n(e,t,i){return(0,s.f)(e,t,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},6257:function(e,t,i){i.d(t,{f:function(){return a},J:function(){return o}});var s=i(144),n=i(1824);function r(e,t){return()=>(0,n.Kd)(`The ${e} component must be used inside a ${t}`)}function a(e,t,i){const n=t&&i?{register:r(t,i),unregister:r(t,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[e]:{default:n}}})}function o(e,t=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},6505:function(e,t,i){var s=i(144),n=i(6286),r=i(4589);t["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:e,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,i="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})}}]);
//# sourceMappingURL=150.5865947d.js.map