"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[812],{3099:function(t,e,r){r.d(e,{Z:function(){return p}});var i=r(3274),s=r(4367),o=(r(9653),r(6428)),n=r(6952),a=r(8085),c=r(2936),l=r(6591),u=r(3536),h=r(3325),d=r(4589),f=["aria-atomic","aria-label","aria-live","role","title"],p=(0,h.Z)(n.Z,(0,u.d)(["left","bottom"]),a.Z,c.Z,l.Z).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return(0,s.Z)({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat((0,d.kb)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),r=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",r,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=(0,d.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(o.Z,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[(0,d.z9)(this)],s=this.$attrs,o=(s["aria-atomic"],s["aria-label"],s["aria-live"],s.role,s.title,(0,i.Z)(s,f));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},r)}})},1485:function(t,e,r){r.d(e,{bo:function(){return i},Z6:function(){return s},Zd:function(){return o},hS:function(){return n}});var i="https://picpicker.alwaysdata.net/alegra/api/v1",s="https://picpicker.alwaysdata.net/serpapi",o=2,n=20},9689:function(t,e,r){r.r(e),r.d(e,{default:function(){return S}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:"",height:"50"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pict Picker Logo",contain:"",src:r(6806),transition:"scale-transition",width:"40"}})],1),i("h2",{staticClass:"main-header",staticStyle:{color:"white","margin-left":"5px","margin-top":"10px"}},[t._v(" Pic Picker ")]),i("v-spacer"),i("div",{staticStyle:{margin:"10px",cursor:"pointer"},on:{click:t.userClick}},[t._v(" "+t._s(t.currentUser.id)+" ")]),i("tooltip",{attrs:{text:"Sellers on the race"}},[i("v-badge",{attrs:{color:t.sellersColor,content:t.sellersLength,overlap:""}},[i("v-icon",{staticStyle:{margin:"5px",cursor:"pointer"},attrs:{dark:""},on:{click:function(e){t.scoreDialog=!0}}},[t._v("mdi-account-tie")])],1)],1),i("tooltip",{attrs:{text:"Go back"}},[i("v-icon",{staticStyle:{margin:"5px",cursor:"pointer"},attrs:{dark:""},on:{click:t.goBack}},[t._v("mdi-keyboard-backspace")])],1),i("logout",[i("v-icon",[t._v("mdi-logout")])],1)],1),i("router-view"),i("v-dialog",{model:{value:t.scoreDialog,callback:function(e){t.scoreDialog=e},expression:"scoreDialog"}},[i("scores",{attrs:{sellers:t.currentUser.sellers}})],1)],1)},s=[],o=r(4367),n=(r(9720),r(4848)),a=r(1618),c=r(5321),l=r(629),u=r(5418),h=r(9381),d={components:{Logout:n.Z,Tooltip:u.Z,Scores:h.Z},data:function(){return{scoreDialog:!1}},computed:(0,o.Z)((0,o.Z)({},(0,l.rn)("common",["currentUser"])),{},{showLogout:function(){return"/user"===this.$router.currentRoute.fullPath},sellersLength:function(){return this.currentUser&&this.currentUser.sellers?Object.entries(this.currentUser.sellers).length||"0":"?"},sellersColor:function(){return"?"===this.sellersLength?"grey":this.sellersLength<2?"red":"green"}}),mounted:function(){this.syncRace()},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,l.nv)("user",["setCurrentRace"])),(0,l.nv)("common",["updateCurrentUser"])),{},{goBack:function(){this.$router.back()},userClick:function(){"/user"!==this.$router.currentRoute.fullPath&&this.$router.push("/user")},syncRace:function(){var t=this,e=(0,c.JU)(a.ZP,"/users",""+this.currentUser.id);(0,c.cf)(e,(function(e){console.log("Current user change detected"),console.log({data:e.data()});try{var r=e.data();if(!r)return void console.log("aborted");var i=r.race;i||(i=[]),t.updateCurrentUser(r),t.setCurrentRace(i)}catch(s){t.$toast.error(s.message),t.setCurrentRace(null)}}))}})},f=d,p=r(1001),g=r(3453),m=r.n(g),v=r(3343),b=r(3099),Z=r(9846),k=r(6662),C=r(6428),y=r(7047),B=r(9762),$=(0,p.Z)(f,i,s,!1,null,null,null),S=$.exports;m()($,{VAppBar:v.Z,VBadge:b.Z,VContainer:Z.Z,VDialog:k.Z,VIcon:C.Z,VImg:y.Z,VSpacer:B.Z})}}]);
//# sourceMappingURL=812-legacy.8238131c.js.map