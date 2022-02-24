"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[81],{5424:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(3325),n=i(5827),a=i(172),r=i(6952),l=i(7352),o=i(8085),c=i(2936),h=i(6505),u=i(9131),p=i(1824),d=(0,s.Z)(r.Z,u.Z,h.Z,o.Z,(0,l.d)("chipGroup"),(0,c.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const n=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(n,s),e)}})},549:function(t,e,i){function s(t,e,i){const s=e.value,n=e.options||{passive:!0};window.addEventListener("resize",s,n),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:s,options:n},e.modifiers&&e.modifiers.quiet||s()}function n(t,e,i){var s;if(null==(s=t._onResize)||!s[i.context._uid])return;const{callback:n,options:a}=t._onResize[i.context._uid];window.removeEventListener("resize",n,a),delete t._onResize[i.context._uid]}const a={inserted:s,unbind:n};e["Z"]=a},9617:function(t,e,i){i.d(e,{Z:function(){return r}});var s=i(8083),n=i(1824),a=i(144);function r(t){return a.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){s.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){s.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,i,s){if(this.isIntersecting=s,s)for(let a=0,r=t.onVisible.length;a<r;a++){const e=this[t.onVisible[a]];"function"!==typeof e?(0,n.Kd)(t.onVisible[a]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}},6640:function(t,e,i){i.d(e,{yo:function(){return r},if:function(){return l}});i(1703);var s=i(1618),n=i(5321),a=i(7376);async function r(t){const e=(0,n.JU)(s.ZP,"/users",""+a.Z.state.common.currentUser.id);await(0,n.r7)(e,{raceUser:t})}async function l(t,e){console.log({selectionIndex:t,pict:e});const i=a.Z.state.common.currentUser.id,r=(0,n.JU)(s.ZP,"/users",""+a.Z.state.common.currentUser.raceUser);let l=a.Z.state.seller.currentRace;if(l[t].pictures||(l[t].pictures={}),l[t].pictLinks||(l[t].pictLinks={}),l[t].pictLinks[e.original])throw new Error("Alreaady taken");let o=1,c=l[t].pictures[i];c&&(delete l[t].pictLinks[c.original],o=0),l[t].pictures[i]=e,l[t].pictLinks[e.original]=e,console.log({newRaceInfo:l});let h=a.Z.state.seller.currentRaceUserInfo;h.sellers||(h.sellers={}),h.sellers[a.Z.state.common.currentUser.id]?h.sellers[a.Z.state.common.currentUser.id].proposals+=o:h.sellers[a.Z.state.common.currentUser.id]={proposals:o,score:0},await(0,n.r7)(r,{...h,race:l})}},3408:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.loading?t._e():i("v-row",{staticClass:"word-bar",attrs:{align:"center",justify:"center"}},[i("v-chip",{staticStyle:{"font-size":"large"},attrs:{color:"primary"}},[t._v(t._s(t.selection?t.selection.word:"..."))])],1),i("v-container",{staticStyle:{"padding-top":"15px"}},[t.loading||t.loadingctrl||!t.selection?i("loading"):t.selection.selected?i("v-container",[i("v-img",{staticClass:"my-3",attrs:{contain:"",src:t.selection.selected.original,"lazy-src":t.selection.selected.thumbnail,"max-height":"400px","min-height":"400px"}},[i("template",{slot:"placeholder"},[i("img-placeholder")],1)],2),t._v(" "+t._s(t.selection.selected.title)+" "),i("br"),i("div",{staticStyle:{color:"green"}},[t._v(" From seller: "+t._s(t.selection.selected.user)+" ")])],1):t.thumbnailView?i("v-container",[i("v-row",{attrs:{"align-content":"center",justify:"center"}},t._l(t.renderedThumbnails,(function(e,s){return i("v-col",{key:s,staticClass:"pict-card"},[i("tooltip",{attrs:{text:e.title}},[i("v-img",{staticClass:"my-3 thumbnail",attrs:{contain:"",src:e.thumbnail,"lazy-src":e.thumbnail,"max-height":"200px","min-height":"200px","min-width":"270px",transition:"fade"},on:{click:function(){return t.showCarousel(20*(t.page-1)+s)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("img-placeholder")]},proxy:!0}],null,!0)})],1)],1)})),1),i("v-row",{staticClass:"pagination-bar",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"8"}},[i("v-container",{staticClass:"max-width"},[i("v-pagination",{staticClass:"my-4",attrs:{length:t.totalPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1):i("div",{staticClass:"carousel-container"},[i("v-carousel",{attrs:{"hide-delimiters":"","show-arrows-on-hover":"","hide-delimiter-background":""},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.pictures,(function(e,s){return i("div",{key:s,attrs:{text:e.title}},[i("v-carousel-item",[i("v-sheet",{staticClass:"transparent-sheet",attrs:{height:"100%"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("v-img",{attrs:{contain:"",src:e.original,height:"100%","lazy-src":e.thumbnail},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("img-placeholder")]},proxy:!0}],null,!0)})],1)],1)],1)],1)})),0),i("v-row",{staticClass:"actions-row"},[i("tooltip",{attrs:{text:"Select current image"}},[i("v-btn",{staticClass:"action-btn",attrs:{fab:"",small:"",color:"primary",disabled:t.selectDisabled},on:{click:function(){return t.select(t.carousel)}}},[t.selecting?i("v-progress-circular",{attrs:{indeterminate:""}}):i("v-icon",[t._v(" mdi-check ")])],1)],1),i("tooltip",{attrs:{text:"Close preview"}},[i("v-btn",{staticClass:"action-btn",attrs:{fab:"",small:"",color:"primary"},on:{click:function(e){t.thumbnailView=!0}}},[i("v-icon",[t._v(" mdi-close ")])],1)],1)],1)],1)],1)],1)},n=[],a=i(920),r=i(629),l=i(5418),o=i(6640),c=(i(1703),i(1485)),h=i(9669),u=i.n(h);let p=c.Z+"/search.json";async function d(t,e=0){let i=await u().get(`${p}?q=${t}&ijn=${e}`);if(i.data.error)throw new Error(i.data.error);let s=i.data.search_information&&"Fully empty"===i.data.search_information.image_results_state;return s?[]:i.data.images_results}var g=i(7873),v={components:{Loading:a.Z,Tooltip:l.Z,ImgPlaceholder:g.Z},data(){return{selected:-1,thumbnailView:!0,carousel:0,confirmDialog:!1,id:-1,page:1,pictures:[],loadingctrl:!1,selecting:!1}},computed:{...(0,r.rn)("seller",["currentRace"]),...(0,r.rn)("common",["currentUser"]),loading(){return!Boolean(this.currentRace)},renderedThumbnails(){return this.pictures.slice(20*(this.page-1),Math.min(20*this.page,this.pictures.length))},totalPages(){return this.pictures.length/20},selection(){return this.currentRace[this.id]},selectDisabled(){return Boolean(this.selection&&this.selection.pictLinks&&this.pictures&&this.selection.pictLinks[this.pictures[this.carousel].original])}},watch:{loading:{immediate:!0,handler(t){if(t)return;let e=+this.$router.currentRoute.params.idx-1;console.log({id:e}),(Number.isNaN(e)||e>=this.currentRace.length||e<0)&&(this.$toast.error("No se encuentra la ruta solicitada"),this.$router.push("/404")),this.id=e,this.currentRace[e].selected||this.fetchImages()}},thumbnailView(t){t&&(this.page=Math.floor(this.carousel/20+1))}},methods:{async fetchImages(){this.loadingctrl=!0;try{this.pictures=(await d(this.selection.word)).map((t=>({...t,lazy:!1}))),this.loadingctrl=!1;let t=this.selection.pictures[this.currentUser.id];t&&(this.carousel=this.pictures.findIndex((e=>e.original===t.original)),this.carousel>0&&(this.thumbnailView=!1))}catch(t){this.$toast.error(t.message)}},toggleSelected(t){this.selected===t?this.selected=null:this.selected=t},showCarousel(t){this.thumbnailView=!1,this.carousel=t},async select(t){this.selecting=!0;try{await(0,o["if"])(this.id,this.pictures[t]),this.$toast.success("Image successfully selected"),this.$router.push("/seller")}catch(e){this.$toast.error(e.message)}finally{this.selecting=!1}}}},m=v,f=i(1001),b=i(3453),y=i.n(b),x=i(3150),C=i(7426),$=i(4062),w=i(5424),Z=i(2102),_=i(9846),k=i(6428),I=i(7047),L=i(172),V=i(549),S=i(6952),B=i(9617),R=i(8085),z=i(3325),U=(0,z.Z)(S.Z,(0,B.Z)({onVisible:["init"]}),R.Z).extend({name:"v-pagination",directives:{Resize:V.Z},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+i;if(this.value>s&&this.value<n){const t=1,e=this.length,n=this.value-s+2,a=this.value+s-2-i,r=n-1===t+1?2:"...",l=a+1===e-1?a+1:"...";return[1,r,...this.range(n,a),l,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===n){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(n,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,s,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:s}},[t(L.Z,[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),A=i(624),E=i(2877),P=i(3385),N=(0,f.Z)(m,s,n,!1,null,null,null),j=N.exports;y()(N,{VBtn:x.Z,VCarousel:C.Z,VCarouselItem:$.Z,VChip:w.Z,VCol:Z.Z,VContainer:_.Z,VIcon:k.Z,VImg:I.Z,VPagination:U,VProgressCircular:A.Z,VRow:E.Z,VSheet:P.Z})}}]);
//# sourceMappingURL=81.3af8bd4b.js.map