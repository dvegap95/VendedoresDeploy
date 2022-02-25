"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[957],{6232:function(e,t,s){var a=s(3325),r=s(6210),l=s(6257);t["Z"]=(0,a.Z)(r.Z,(0,l.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},634:function(e,t,s){s.d(t,{Z:function(){return o},w:function(){return n}});var a=s(9669),r=s.n(a),l=s(1485);function i(e=Date.now()){var t=new Date(e),s=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return s.length<2&&(s="0"+s),a.length<2&&(a="0"+a),[r,s,a].join("-")}async function n(){return(await r().get(l.bo+"/sellers")).data}async function o(e,t){console.log({quantity:e,seller:t});let s=Date.now();return(await r().post(l.bo+"/invoices",{date:i(s),dueDate:i(s+6912e5),client:1,items:[{id:1,price:1,quantity:e}],seller:t,status:"open"})).data}},8957:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",[s("v-col",{attrs:{cols:"12",md:"12"}},[s("h2",{staticClass:"main-header"},[e._v("Enter your data")])]),s("v-col",{attrs:{cols:"12",md:"12"}},["user"===e.userType?s("v-text-field",{attrs:{disabled:e.loading,label:"User name*",required:"",type:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}):s("v-select",{attrs:{disabled:e.loading,items:e.alegraSellers,"item-text":"name",label:"User name",loading:e.loadingSellers},model:{value:e.alegraSeller,callback:function(t){e.alegraSeller=t},expression:"alegraSeller"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{label:"User type",items:["user","seller"],disabled:e.loading},model:{value:e.userType,callback:function(t){e.userType=t},expression:"userType"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{disabled:e.loading,label:"e-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{disabled:e.loading,label:"Password*",required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{disabled:e.loading,label:"Confirm password*",required:"",type:"password"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-btn",{staticClass:"mr-4",staticStyle:{width:"100%"},attrs:{type:"submit",disabled:e.invalid}},[e.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:"2"}}):s("div",[e._v("Sign-up")])],1)],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-row",{staticStyle:{padding:"20px"}},[s("v-spacer"),s("div",[e._v(" Already have an account?... "),s("router-link",{attrs:{to:"/login"}},[e._v(" Login ")])],1)],1)],1)],1)],1)},r=[],l=s(629),i=s(1618),n=s(634),o={data(){return{valid:!1,username:"",email:"",password:"",confirmPassword:"",userType:"user",loading:!1,loadingSellers:!1,alegraSellers:null,alegraSeller:null}},computed:{invalid(){return this.loading||!(this.valid&&this.username&&this.password&&this.confirmPassword==this.password)}},mounted(){let e=this.$router.currentRoute.params.type;console.log({type:e}),"seller"===e&&(this.userType="seller")},methods:{...(0,l.nv)("common",["setCurrentUser"]),async submit(){try{this.loading=!0;let e={};"seller"===this.userType&&(e=this.alegraSellers.find((e=>e.name===this.username)));let t={password:this.password,type:this.userType,email:this.email,race:[],sellers:{},alegraInfo:e};await(0,i.r4)(this.username,t),this.setCurrentUser({...t,id:this.username}),this.$router.push("#"),this.$toast.success("Welcome")}catch(e){this.$toast.error(e.message)}finally{this.loading=!1}}},watch:{async userType(e){if("seller"===e)try{this.loadingSellers=!0;let e=await(0,n.w)();this.alegraSellers=e,console.log(this.alegraSellers);let t=null;this.username&&(t=e.find((e=>e.name===this.username)),console.log("found",{seller:t})),t||(t=e[0]),this.username=t.name,this.alegraSeller=t.name}catch(t){this.$toast.error(t.message),this.userType="user"}finally{this.loadingSellers=!1}},alegraSeller:{handler(e){this.username="string"===typeof e?e:e.name},deep:!0}}},d=o,u=s(1001),c=s(3453),h=s.n(c),m=s(3150),p=s(2102),v=s(9846),g=s(6232),f=s(624),w=s(2877),y=s(5390),b=s(9762),S=s(314),_=(0,u.Z)(d,a,r,!1,null,null,null),V=_.exports;h()(_,{VBtn:m.Z,VCol:p.Z,VContainer:v.Z,VForm:g.Z,VProgressCircular:f.Z,VRow:w.Z,VSelect:y.Z,VSpacer:b.Z,VTextField:S.Z})}}]);
//# sourceMappingURL=957.e62b668f.js.map