(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],A=0,l=[];A<c.length;A++)i=c[A],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2f1d":function(e,t,n){e.exports=n.p+"img/qr-code.2473afb2.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("simplert"),n("v-dialog"),n("router-view")],1)},a=[],i={name:"App"},c=i,u=(n("034f"),n("2877")),s=Object(u["a"])(c,o,a,!1,null,null,null),f=s.exports,A=n("bb6f"),l=n.n(A),p=n("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("HOME")]),r("button",{staticClass:"scan-button",on:{click:function(t){return e.$router.push({name:"qrcode"})}}},[r("img",{attrs:{src:n("2f1d")}})])])},d=[],h={},B=h,g=(n("db3f"),Object(u["a"])(B,m,d,!1,null,"b5da03d2",null)),w=g.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"error"},[e._v(e._s(e.error))]),r("qrcode-stream",{attrs:{camera:e.camera},on:{decode:e.onDecode,init:e.onInit}},[r("button",{staticClass:"close-button",on:{click:function(t){return e.$router.back()}}},[r("img",{attrs:{src:n("cd5c")}})])])],1)},C=[],b=(n("b0c0"),n("96cf"),n("1da1")),v={data:function(){return{result:"",error:"",camera:"auto",obj:""}},methods:{onDecode:function(e){this.result=e,this.turnCameraOff(),""!=this.result&&(console.log(this.result),this.setModal(this.result))},setModal:function(e){this.obj={title:"TITLE",message:e,type:"info",disableOverlayClick:!0,useConfirmBtn:!0,customConfirmBtnText:"GO",customCloseBtnText:"Close",onConfirm:this.toStep,onClose:this.reload},this.$Simplert.open(this.obj)},toStep:function(){this.$router.push({name:this.result})},reload:function(){this.turnCameraOn()},turnCameraOn:function(){this.camera="auto"},turnCameraOff:function(){this.camera="off"},onInit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e;case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),"NotAllowedError"===n.t0.name?t.error="ERROR: you need to grant camera access permisson":"NotFoundError"===n.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===n.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===n.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===n.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===n.t0.name&&(t.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},D=v,O=(n("9685"),Object(u["a"])(D,E,C,!1,null,"19706e30",null)),j=O.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Redirection 1")]),r("button",{staticClass:"home-button",on:{click:function(t){return e.$router.push({name:"home"})}}},[r("img",{attrs:{src:n("fbf5")}})])])},M=[],F={},y=F,R=(n("968e"),Object(u["a"])(y,x,M,!1,null,"dc9b5818",null)),I=R.exports,H=[{path:"/",component:w,name:"home"},{path:"/qrcode",component:j,name:"qrcode"},{path:"/stepx",component:I,name:"stepx"}],z=H,P=n("1881"),T=n.n(P),V=n("8c62"),q=n.n(V);n("876c"),r["a"].config.productionTip=!1,r["a"].use(l.a),r["a"].use(p["a"]),r["a"].use(q.a),r["a"].use(T.a,{dialog:!0});var S=new p["a"]({routes:z});new r["a"]({router:S,render:function(e){return e(f)}}).$mount("#app")},"782a":function(e,t,n){},"85ec":function(e,t,n){},9685:function(e,t,n){"use strict";n("ae24")},"968e":function(e,t,n){"use strict";n("782a")},ae24:function(e,t,n){},b696:function(e,t,n){},cd5c:function(e,t){e.exports="data:image/png;base64,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"},db3f:function(e,t,n){"use strict";n("b696")},fbf5:function(e,t,n){e.exports=n.p+"img/home.508e0a98.png"}});
//# sourceMappingURL=app.8461a401.js.map