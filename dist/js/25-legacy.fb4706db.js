"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[25],{7025:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"",height:"50"}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pict Picker Logo",contain:"",src:r(6806),transition:"scale-transition",width:"40"}})],1),o("h2",{staticClass:"main-header",staticStyle:{color:"white","margin-left":"5px","margin-top":"10px"}},[t._v(" Pic Picker ")]),o("v-spacer"),o("div",{staticStyle:{margin:"10px",cursor:"pointer"},on:{click:t.userClick}},[t._v(" "+t._s(t.currentUser.id)+" ")]),o("tooltip",{attrs:{text:"Sellers on the race"}},[o("v-badge",{attrs:{color:"green",content:t.sellersLength,overlap:""}},[o("v-icon",{staticStyle:{margin:"5px",cursor:"pointer"},attrs:{dark:""},on:{click:function(e){t.scoreDialog=!0}}},[t._v("mdi-account-tie")])],1)],1),o("tooltip",{attrs:{text:"Go back"}},[o("v-icon",{staticStyle:{margin:"5px",cursor:"pointer"},attrs:{dark:""},on:{click:t.goBack}},[t._v("mdi-keyboard-backspace")])],1),o("logout",[o("v-icon",[t._v("mdi-logout")])],1)],1),o("router-view"),o("v-dialog",{model:{value:t.scoreDialog,callback:function(e){t.scoreDialog=e},expression:"scoreDialog"}},[o("scores",{attrs:{user:t.currentUser}})],1)],1)},n=[],s=r(4367),c=(r(9720),r(5194)),a=r(1618),i=r(5321),u=r(629),l=r(5418),d=r(4013),g={components:{Logout:c.Z,Tooltip:l.Z,Scores:d.Z},data:function(){return{scoreDialog:!1}},computed:(0,s.Z)((0,s.Z)({},(0,u.rn)("common",["currentUser"])),{},{showLogout:function(){return"/user"===this.$router.currentRoute.fullPath},sellersLength:function(){return this.currentUser&&this.currentUser.sellers?Object.entries(this.currentUser.sellers).length:"?"}}),mounted:function(){this.syncRace()},methods:(0,s.Z)((0,s.Z)((0,s.Z)({},(0,u.nv)("user",["setCurrentRace"])),(0,u.nv)("common",["updateCurrentUser"])),{},{goBack:function(){this.$router.back()},userClick:function(){"/user"!==this.$router.currentRoute.fullPath&&this.$router.push("/user")},syncRace:function(){var t=this,e=(0,i.JU)(a.ZP,"/users",""+this.currentUser.id);(0,i.cf)(e,(function(e){console.log("Current user change detected"),console.log({data:e.data()});try{var r=e.data();if(!r)return void console.log("aborted");var o=r.race;o||(o=[]),t.updateCurrentUser(r),t.setCurrentRace(o)}catch(n){t.$toast.error(n.message),t.setCurrentRace(null)}}))}})},p=g,h=r(1001),v=r(3453),m=r.n(v),f=r(3343),k=r(3099),Z=r(9846),C=r(6662),b=r(6428),x=r(7047),U=r(9762),y=(0,h.Z)(p,o,n,!1,null,null,null),_=y.exports;m()(y,{VAppBar:f.Z,VBadge:k.Z,VContainer:Z.Z,VDialog:C.Z,VIcon:b.Z,VImg:x.Z,VSpacer:U.Z})}}]);
//# sourceMappingURL=25-legacy.fb4706db.js.map