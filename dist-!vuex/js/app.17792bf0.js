(function(e){function t(t){for(var i,o,a=t[0],l=t[1],c=t[2],d=0,m=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00a7":function(e,t,n){},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"047c":function(e,t,n){},"0c13":function(e,t,n){"use strict";var i=n("5145"),r=n.n(i);r.a},"0c14":function(e,t,n){},"225e":function(e,t,n){"use strict";var i=n("0c14"),r=n.n(i);r.a},5145:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("034f"),n("2877")),a={},l=Object(o["a"])(a,r,s,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("head_text",{attrs:{show:e.logged}}),1==e.logged?n("user",{attrs:{username:e.username}}):n("nonuser")],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-overlay",{attrs:{variant:e.transparent,show:e.working,rounded:"sm"},scopedSlots:e._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center"},[n("b-icon",{attrs:{icon:"gear-fill","font-scale":"3",animation:"spin"}}),n("p",{staticClass:"cancel"},[e._v(e._s(e.text_msg))])],1)]},proxy:!0}])},[n("b-card",{staticClass:"b-class-ins"},[n("div",{staticClass:"form-container"},[n("span",[e._v("Reminder: ")]),n("b-form-input",{staticClass:"rem-text",attrs:{id:"nested-street"},model:{value:e.reminder,callback:function(t){e.reminder=t},expression:"reminder"}}),n("b-button",{attrs:{disabled:e.reminder.length<=0},on:{click:function(t){return e.save()}}},[e._v("Save")])],1),e._l(e.reminders,(function(t,i){return n("div",{key:e.reminders[i].id,staticClass:"rem-container"},[t.dis?n("div",{staticClass:"rem-div",on:{dblclick:function(t){return e.toggle(i)}}},[e._v(e._s(e.reminders[i].rem))]):n("input",{directives:[{name:"model",rawName:"v-model",value:e.reminders[i].rem,expression:"reminders[index].rem"}],staticClass:"rem-inp",attrs:{id:"nested-street"},domProps:{value:e.reminders[i].rem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.toggle(i)},input:function(t){t.target.composing||e.$set(e.reminders[i],"rem",t.target.value)}}}),n("div",{staticClass:"x-btn",on:{click:function(t){return e.del(i)}}},[n("b-icon",{attrs:{icon:"trash2"}})],1)])}))],2)],1)],1)},f=[],g=(n("4160"),n("a434"),n("159b"),n("8aa5")),h=Object(g["initializeApp"])({apiKey:"AIzaSyBFPs4tNxs-AyrG_2AEv90GFRT-p7imwIk",authDomain:"eloquent-anthem-238617.firebaseapp.com",databaseURL:"https://eloquent-anthem-238617.firebaseio.com",projectId:"eloquent-anthem-238617",storageBucket:"eloquent-anthem-238617.appspot.com",messagingSenderId:"693290027904",appId:"1:693290027904:web:c30ad24120b0451525cf65"}),b=h.firestore(),v=n("2f62"),w={name:"user",props:{username:String},data:function(){return{preminder:"",reminder:"",reminders:[],working:!1,text_msg:""}},methods:{toggle:function(e){this.reminders[e].dis=!this.reminders[e].dis,this.reminders[e].dis?this.reminders[e].rem!==this.preminder?b.collection(this.username).doc(this.reminders[e].id).update({rem:this.reminders[e].rem}).then((function(){console.log("updated")})):this.preminder="":this.preminder=this.reminders[e].rem},save:function(){var e=this;this.text_msg="Adding Reminder..",this.working=!this.working;var t={id:"",rem:this.reminder,dis:!0};b.collection(this.username).add({rem:this.reminder}).then((function(){b.collection(e.username).get().then((function(e){e.forEach((function(e){e.rem===t.rem&&(t.id=e.id)}))})).then((function(){e.working=!e.working,e.reminders.push(t),e.reminder="",e.text_msg="",console.log("Saved")}))})).catch((function(){console.log("Save Reminder Failed")}))},readData:function(){var e=this;b.collection(this.username).get().then((function(t){t.forEach((function(t){e.reminders.push({id:t.id,rem:t.data().rem,dis:!0})})),e.working=!e.working,e.text_msg=""})).catch((function(t){e.text_msg="Loading Failed. Check Internet and Reload."}))},del:function(e){var t=this;this.text_msg="Deleting Reminder..",this.working=!this.working,b.collection(this.username).doc(this.reminders[e].id).delete().then((function(){console.log("deleted"),t.reminders.splice(e,1),t.working=!t.working,t.text_msg=""}))}},mounted:function(){this.text_msg="Loading Reminders. Please wait",this.working=!this.working,this.readData()}},_=w,k=(n("225e"),Object(o["a"])(_,p,f,!1,null,"22823299",null)),x=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-overlay",{attrs:{show:e.working,rounded:"sm"},scopedSlots:e._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center"},[n("b-icon",{attrs:{icon:"gear","font-scale":"3",animation:"spin"}}),n("p",{attrs:{id:"cancel-label"}},[e._v(e._s(e.text_msg))])],1)]},proxy:!0}])},[n("div",{staticClass:"forms"},[e.disp_login?n("div",[n("p",[e._v("Login")]),n("b-card",[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Email:","label-align-sm":"right","label-for":"nested-street"}},[n("b-form-input",{attrs:{type:"email",id:"nested-street"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Password:","label-align-sm":"right","label-for":"nested-city"}},[n("b-form-input",{attrs:{type:"password",id:"nested-city"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),n("div",{staticClass:"btn-container"},[n("b-button",{attrs:{variant:"success",disabled:e.check()},on:{click:function(t){return e.login()}}},[e._v("Login")]),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.toggle_disp()}}},[e._v(e._s(e.disp_text))])],1)],1)],1):n("div",[n("p",[e._v("Create an account")]),n("b-card",[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Email:","label-align-sm":"right","label-for":"nested-street"}},[n("b-form-input",{attrs:{type:"email",id:"nested-street"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Password:","label-align-sm":"right","label-for":"nested-street"}},[n("b-form-input",{attrs:{id:"nested-street"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Confirm Password:","label-align-sm":"right","label-for":"nested-city"}},[n("b-form-input",{attrs:{type:"password",id:"nested-city"},model:{value:e.cpwd,callback:function(t){e.cpwd=t},expression:"cpwd"}})],1),n("div",{staticClass:"btn-container"},[n("b-button",{attrs:{variant:"success",disabled:e.check()},on:{click:function(t){return e.signup()}}},[e._v("Sign Up")]),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.toggle_disp()}}},[e._v(e._s(e.disp_text))])],1)],1)],1)])])],1)},C=[],O={data:function(){return{disp_login:!0,disp_text:"New User? Signup",email:"",cpwd:"",pwd:"",working:!1,text_msg:""}},methods:{toggle_disp:function(){this.disp_login=!this.disp_login,this.disp_text=this.disp_login?"New User? Signup":"Already User? Login",this.email="",this.cemail="",this.pwd=""},check:function(){return this.disp_login?""===this.email||""==this.pwd:""===this.email||""==this.pwd||this.pwd!==this.cpwd},login:function(){var e=this;this.text_msg="Logging In. Please Wait.",this.working=!this.working;var t=!1;b.collection("user-pwd").get().then((function(n){n.forEach((function(n){var i=n.data();e.email===i.user&&e.pwd===i.pwd&&(t=!0,console.log("logged"),e.$cookie.set("username",e.email),e.working=!e.working,e.$router.go())}))})).then((function(n){t||alert("User or Password Incorrect"),e.working=!e.working}))},signup:function(){var e=this;this.working=!this.working,this.text_msg="Saving Details. Please Wait.";var t=!0;b.collection("user-pwd").get().then((function(n){n.forEach((function(n){var i=n.data();e.email===i.user&&(e.working=!e.working,alert("Account Already exists"),t=!1)}))})).then((function(){console.log(t),t&&b.collection("user-pwd").add({user:e.email,pwd:e.pwd}).then((function(){alert("Account Creation Successfull"),e.$cookie.set("username",e.email),e.working=!e.working,e.$router.go()}))}))}}},S=O,j=(n("0c13"),Object(o["a"])(S,y,C,!1,null,null,null)),P=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",{staticClass:"title"},[e._v("Todo-List")]),e.show?n("div",{staticClass:"header-right"},[n("b-button",{on:{click:function(t){return e.logout()}}},[e._v("Logout")]),n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"tool",attrs:{title:"Double Click to edit. Then press Enter to save"}},[n("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"dark"}})],1)],1):e._e()])},$=[],L={name:"head_text",props:["show"],data:function(){return{}},methods:{logout:function(){this.text_msg="Logging Out.",this.working=!this.working,this.$cookie.delete("username"),this.$router.go()}},create:function(){}},A=L,I=(n("8bdc"),Object(o["a"])(A,E,$,!1,null,"7b4045c2",null)),R=I.exports,D={name:"Home",components:{head_text:R,user:x,nonuser:P},data:function(){return{logged:!0,username:""}},created:function(){this.username=this.$cookie.get("username"),null===this.username&&(this.logged=!1)}},T=D,U=(n("9145"),Object(o["a"])(T,d,m,!1,null,"056234e4",null)),N=U.exports;i["default"].use(u["a"]);var q=[{path:"/",name:"Home",component:N}],F=new u["a"]({routes:q}),M=F;i["default"].use(v["a"]);var z=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=n("5f5b"),G=n("b1e0"),H=(n("f9e3"),n("2dd8"),n("00e7"));i["default"].config.productionTip=!1,i["default"].use(B["a"]),i["default"].use(G["a"]),i["default"].use(H),new i["default"]({router:M,store:z,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},"8bdc":function(e,t,n){"use strict";var i=n("047c"),r=n.n(i);r.a},9145:function(e,t,n){"use strict";var i=n("00a7"),r=n.n(i);r.a}});
//# sourceMappingURL=app.17792bf0.js.map