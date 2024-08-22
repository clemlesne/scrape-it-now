(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var t=ba(this);function u(a,b){if(b)a:{var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&r(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(k||"")+"_"+f++,k)}
function c(k,e){this.g=k;r(this,"description",{configurable:!0,writable:!0,value:e})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",f=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=t[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&r(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},w;
if(typeof Object.setPrototypeOf=="function")w=Object.setPrototypeOf;else{var x;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;x=ia.a;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=w;
function y(){this.j=!1;this.h=null;this.m=void 0;this.g=1;this.u=this.l=0;this.i=null}
function z(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}
y.prototype.s=function(a){this.m=a};
function B(a,b){a.i={P:b,R:!0};a.g=a.l||a.u}
y.prototype.return=function(a){this.i={return:a};this.g=this.u};
function C(a,b,c){a.g=c;return{value:b}}
function ka(a){this.g=new y;this.h=a}
function la(a,b){z(a.g);var c=a.g.h;if(c)return ma(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return D(a)}
function ma(a,b,c,d){try{var f=b.call(a.g.h,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.j=!1,f;var k=f.value}catch(e){return a.g.h=null,B(a.g,e),D(a)}a.g.h=null;d.call(a.g,k);return D(a)}
function D(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(c){a.g.m=void 0,B(a.g,c)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.R)throw b.P;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function na(a){this.next=function(b){z(a.g);a.g.h?b=ma(a,a.g.h.next,b,a.g.s):(a.g.s(b),b=D(a));return b};
this.throw=function(b){z(a.g);a.g.h?b=ma(a,a.g.h["throw"],b,a.g.s):(B(a.g,b),b=D(a));return b};
this.return=function(b){return la(a,b)};
this[Symbol.iterator]=function(){return this}}
function oa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,f){function k(e){e.done?d(e.value):Promise.resolve(e.value).then(b,c).then(k,f)}
k(a.next())})}
function pa(a){return oa(new na(new ka(a)))}
u("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.s=!1;var g=this.j();try{e(g.resolve,g.reject)}catch(h){g.reject(h)}}
function c(){this.g=null}
function d(e){return e instanceof b?e:new b(function(g){g(e)})}
if(a)return a;c.prototype.h=function(e){if(this.g==null){this.g=[];var g=this;this.i(function(){g.l()})}this.g.push(e)};
var f=t.setTimeout;c.prototype.i=function(e){f(e,0)};
c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var g=0;g<e.length;++g){var h=e[g];e[g]=null;try{h()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(e){this.i(function(){throw e;})};
b.prototype.j=function(){function e(l){return function(m){h||(h=!0,l.call(g,m))}}
var g=this,h=!1;return{resolve:e(this.K),reject:e(this.l)}};
b.prototype.K=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.M(e);else{a:switch(typeof e){case "object":var g=e!=null;break a;case "function":g=!0;break a;default:g=!1}g?this.J(e):this.m(e)}};
b.prototype.J=function(e){var g=void 0;try{g=e.then}catch(h){this.l(h);return}typeof g=="function"?this.N(g,e):this.m(e)};
b.prototype.l=function(e){this.u(2,e)};
b.prototype.m=function(e){this.u(1,e)};
b.prototype.u=function(e,g){if(this.h!=0)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.h);this.h=e;this.i=g;this.h===2&&this.L();this.B()};
b.prototype.L=function(){var e=this;f(function(){if(e.T()){var g=t.console;typeof g!=="undefined"&&g.error(e.i)}},1)};
b.prototype.T=function(){if(this.s)return!1;var e=t.CustomEvent,g=t.Event,h=t.dispatchEvent;if(typeof h==="undefined")return!0;typeof e==="function"?e=new e("unhandledrejection",{cancelable:!0}):typeof g==="function"?e=new g("unhandledrejection",{cancelable:!0}):(e=t.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return h(e)};
b.prototype.B=function(){if(this.g!=null){for(var e=0;e<this.g.length;++e)k.h(this.g[e]);this.g=null}};
var k=new c;b.prototype.M=function(e){var g=this.j();e.A(g.resolve,g.reject)};
b.prototype.N=function(e,g){var h=this.j();try{e.call(g,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(e,g){function h(q,A){return typeof q=="function"?function(ca){try{l(q(ca))}catch(da){m(da)}}:A}
var l,m,n=new b(function(q,A){l=q;m=A});
this.A(h(e,l),h(g,m));return n};
b.prototype.catch=function(e){return this.then(void 0,e)};
b.prototype.A=function(e,g){function h(){switch(l.h){case 1:e(l.i);break;case 2:g(l.i);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.g==null?k.h(h):this.g.push(h);this.s=!0};
b.resolve=d;b.reject=function(e){return new b(function(g,h){h(e)})};
b.race=function(e){return new b(function(g,h){for(var l=v(e),m=l.next();!m.done;m=l.next())d(m.value).A(g,h)})};
b.all=function(e){var g=v(e),h=g.next();return h.done?d([]):new b(function(l,m){function n(ca){return function(da){q[ca]=da;A--;A==0&&l(q)}}
var q=[],A=0;do q.push(void 0),A++,d(h.value).A(n(q.length-1),m),h=g.next();while(!h.done)})};
return b});
function E(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)E(d,f)&&(a[f]=d[f])}return a};
u("Object.assign",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(h){this.g=(g+=Math.random()+1).toString();if(h){h=v(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return l==="object"&&h!==null||l==="function"}
function f(h){if(!E(h,e)){var l=new c;r(h,e,{value:l})}}
function k(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&f(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(m.get(h)!=2||m.get(l)!=3)return!1;m.delete(h);m.set(l,4);return!m.has(h)&&m.get(l)==4}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var g=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");f(h);if(!E(h,e))throw Error("WeakMap key fail: "+h);h[e][this.g]=l;return this};
b.prototype.get=function(h){return d(h)&&E(h,e)?h[e][this.g]:void 0};
b.prototype.has=function(h){return d(h)&&E(h,e)&&E(h[e],this.g)};
b.prototype.delete=function(h){return d(h)&&E(h,e)&&E(h[e],this.g)?delete h[e][this.g]:!1};
return b});
u("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,h){var l=g[1];return ea(function(){if(l){for(;l.head!=g[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(g,h){var l=h&&typeof h;l=="object"||l=="function"?k.has(h)?l=k.get(h):(l=""+ ++e,k.set(h,l)):l="p_"+h;var m=g[0][l];if(m&&E(g[0],l))for(g=0;g<m.length;g++){var n=m[g];if(h!==h&&n.key!==n.key||h===n.key)return{id:l,list:m,index:g,o:n}}return{id:l,list:m,index:-1,o:void 0}}
function f(g){this[0]={};this[1]=b();this.size=0;if(g){g=v(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var g=Object.seal({x:4}),h=new a(v([[g,"s"]]));if(h.get(g)!="s"||h.size!=1||h.get({x:4})||h.set({x:4},"t")!=h||h.size!=2)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=g||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var k=new WeakMap;f.prototype.set=function(g,h){g=g===0?0:g;var l=d(this,g);l.list||(l.list=this[0][l.id]=[]);l.o?l.o.value=h:(l.o={next:this[1],previous:this[1].previous,head:this[1],key:g,value:h},l.list.push(l.o),this[1].previous.next=l.o,this[1].previous=l.o,this.size++);return this};
f.prototype.delete=function(g){g=d(this,g);return g.o&&g.list?(g.list.splice(g.index,1),g.list.length||delete this[0][g.id],g.o.previous.next=g.o.next,g.o.next.previous=g.o.previous,g.o.head=null,this.size--,!0):!1};
f.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
f.prototype.has=function(g){return!!d(this,g).o};
f.prototype.get=function(g){return(g=d(this,g).o)&&g.value};
f.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
f.prototype.keys=function(){return c(this,function(g){return g.key})};
f.prototype.values=function(){return c(this,function(g){return g.value})};
f.prototype.forEach=function(g,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,g.call(h,m[1],m[0],this)};
f.prototype[Symbol.iterator]=f.prototype.entries;var e=0;return f});
u("Set",function(a){function b(c){this.g=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var f=d.entries(),k=f.next();if(k.done||k.value[0]!=c||k.value[1]!=c)return!1;k=f.next();return k.done||k.value[0]==c||k.value[0].x!=4||k.value[1]!=k.value[0]?!1:f.next().done}catch(e){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var f=this;this.g.forEach(function(k){return c.call(d,k,k,f)})};
return b});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,k=0;k<f;k++){var e=d[k];if(b.call(c,e,k,d)){b=e;break a}}b=void 0}return b}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(g){return g};
var f=[],k=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof k=="function"){b=k.call(b);for(var e=0;!(k=b.next()).done;)f.push(c.call(d,k.value,e++))}else for(k=b.length,e=0;e<k;e++)f.push(c.call(d,b[e],e));return f}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var F=this||self;function G(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function ra(a){return Object.prototype.hasOwnProperty.call(a,sa)&&a[sa]||(a[sa]=++ta)}
var sa="closure_uid_"+(Math.random()*1E9>>>0),ta=0;function ua(a,b,c){return a.call.apply(a.bind,arguments)}
function va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}
function wa(a,b,c){wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ua:va;return wa.apply(null,arguments)}
function H(a,b){a=a.split(".");var c=F;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function xa(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Y=function(d,f,k){for(var e=Array(arguments.length-2),g=2;g<arguments.length;g++)e[g-2]=arguments[g];return b.prototype[f].apply(d,e)}}
;var ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=typeof a==="string"?a.split(""):a,k=0;k<d;k++)k in f&&b.call(c,f[k],k,a)};
function za(a,b){b=ya(a,b);b>=0&&Array.prototype.splice.call(a,b,1)}
function Aa(a){return Array.prototype.concat.apply([],arguments)}
function Ba(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function Ca(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Ca.prototype.get=function(){if(this.h>0){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};var Da=/&/g,Ea=/</g,Fa=/>/g,Ga=/"/g,Ha=/'/g,Ia=/\x00/g,Ja=/[\x00&<>"']/;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function J(a){this.g=a}
J.prototype.toString=function(){return this.g};
var Ka=new J("about:invalid#zClosurez");function La(a){this.S=a}
function K(a){return new La(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ma=[K("data"),K("http"),K("https"),K("mailto"),K("ftp"),new La(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Na(a){var b=b===void 0?Ma:b;a:if(b=b===void 0?Ma:b,!(a instanceof J)){for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof La&&d.S(a)){a=new J(a);break a}}a=void 0}return a||Ka}
var Oa=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Pa={X:0,V:1,W:2,0:"FORMATTED_HTML_CONTENT",1:"EMBEDDED_INTERNAL_CONTENT",2:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function L(a,b){b=Error.call(this,a+" cannot be used with intent "+Pa[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
var M=Error;L.prototype=fa(M.prototype);L.prototype.constructor=L;if(ja)ja(L,M);else for(var N in M)if(N!="prototype")if(Object.defineProperties){var Qa=Object.getOwnPropertyDescriptor(M,N);Qa&&Object.defineProperty(L,N,Qa)}else L[N]=M[N];L.I=M.prototype;
function Ra(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof J)if(b instanceof J)b=b.g;else throw Error("");else b=Oa.test(b)?b:void 0;b!==void 0&&(a.src=b)}
;function Sa(a){Ja.test(a)&&(a.indexOf("&")!=-1&&(a=a.replace(Da,"&amp;")),a.indexOf("<")!=-1&&(a=a.replace(Ea,"&lt;")),a.indexOf(">")!=-1&&(a=a.replace(Fa,"&gt;")),a.indexOf('"')!=-1&&(a=a.replace(Ga,"&quot;")),a.indexOf("'")!=-1&&(a=a.replace(Ha,"&#39;")),a.indexOf("\x00")!=-1&&(a=a.replace(Ia,"&#0;")));return a}
;var Ta,O;a:{for(var Ua=["CLOSURE_FLAGS"],P=F,Va=0;Va<Ua.length;Va++)if(P=P[Ua[Va]],P==null){O=null;break a}O=P}var Wa=O&&O[610401301];Ta=Wa!=null?Wa:!1;function Xa(){var a=F.navigator;return a&&(a=a.userAgent)?a:""}
var Q,Ya=F.navigator;Q=Ya?Ya.userAgentData||null:null;function Za(){return Ta?Q?Q.brands.some(function(a){return(a=a.brand)&&a.indexOf("Chromium")!=-1}):!1:!1}
function R(a){return Xa().indexOf(a)!=-1}
;function $a(){return Ta?!!Q&&Q.brands.length>0:!1}
function ab(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function bb(){for(var a=Xa(),b=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);a=ab(c);return($a()?Za():(R("Chrome")||R("CriOS"))&&($a()||!R("Edge"))||R("Silk"))?a(["Chrome","CriOS","HeadlessChrome"]):""}
function cb(){if($a()){var a=Q.brands.find(function(b){return b.brand==="Chromium"});
if(!a||!a.version)return NaN;a=a.version.split(".")}else{a=bb();if(a==="")return NaN;a=a.split(".")}return a.length===0?NaN:Number(a[0])}
;function db(){var a=document;var b="IFRAME";a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)}
;var eb;function fb(){var a=F.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!R("Presto")&&(a=function(){var f=db();f.style.display="none";document.documentElement.appendChild(f);var k=f.contentWindow;f=k.document;f.open();f.close();var e="callImmediate"+Math.random(),g=k.location.protocol=="file:"?"*":k.location.protocol+"//"+k.location.host;f=wa(function(h){if((g=="*"||h.origin==g)&&h.data==e)this.port1.onmessage()},this);
k.addEventListener("message",f,!1);this.port1={};this.port2={postMessage:function(){k.postMessage(e,g)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var f=c.F;c.F=null;f()}};
return function(f){d.next={F:f};d=d.next;b.port2.postMessage(0)}}return function(f){F.setTimeout(f,0)}}
;function gb(a){F.setTimeout(function(){throw a;},0)}
;function hb(){this.h=this.g=null}
hb.prototype.add=function(a,b){var c=ib.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
hb.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var ib=new Ca(function(){return new jb},function(a){return a.reset()});
function jb(){this.next=this.scope=this.g=null}
jb.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
jb.prototype.reset=function(){this.next=this.scope=this.g=null};var S,kb=!1,lb=new hb;function mb(a){S||nb();kb||(S(),kb=!0);lb.add(a,void 0)}
function nb(){if(F.Promise&&F.Promise.resolve){var a=F.Promise.resolve(void 0);S=function(){a.then(ob)}}else S=function(){var b=ob;
typeof F.setImmediate!=="function"||F.Window&&F.Window.prototype&&F.Window.prototype.setImmediate==F.setImmediate?(eb||(eb=fb()),eb(b)):F.setImmediate(b)}}
function ob(){for(var a;a=lb.remove();){try{a.g.call(a.scope)}catch(c){gb(c)}var b=ib;b.j(a);b.h<100&&(b.h++,a.next=b.g,b.g=a)}kb=!1}
;function T(){this.i=this.i;this.j=this.j}
T.prototype.i=!1;T.prototype.dispose=function(){this.i||(this.i=!0,this.C())};
T.prototype[Symbol.dispose]=function(){this.dispose()};
T.prototype.addOnDisposeCallback=function(a,b){this.i?b!==void 0?a.call(b):a():(this.j||(this.j=[]),b&&(a=a.bind(b)),this.j.push(a))};
T.prototype.C=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function U(a){T.call(this);this.s=1;this.l=[];this.m=0;this.g=[];this.h={};this.u=!!a}
xa(U,T);p=U.prototype;p.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var f=this.s;this.g[f]=a;this.g[f+1]=b;this.g[f+2]=c;this.s=f+3;d.push(f);return f};
function pb(a,b,c){var d=V;if(a=d.h[a]){var f=d.g;(a=a.find(function(k){return f[k+1]==b&&f[k+2]==c}))&&d.D(a)}}
p.D=function(a){var b=this.g[a];if(b){var c=this.h[b];this.m!=0?(this.l.push(a),this.g[a+1]=function(){}):(c&&za(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
p.H=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),f=1,k=arguments.length;f<k;f++)d[f-1]=arguments[f];if(this.u)for(f=0;f<c.length;f++){var e=c[f];qb(this.g[e+1],this.g[e+2],d)}else{this.m++;try{for(f=0,k=c.length;f<k&&!this.i;f++)e=c[f],this.g[e+1].apply(this.g[e+2],d)}finally{if(this.m--,this.l.length>0&&this.m==0)for(;c=this.l.pop();)this.D(c)}}return f!=0}return!1};
function qb(a,b,c){mb(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.D,this),delete this.h[a])}else this.g.length=0,this.h={}};
p.C=function(){U.I.C.call(this);this.clear();this.l.length=0};var rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(a){var b=a.match(rb);a=b[1];var c=b[2],d=b[3];b=b[4];var f="";a&&(f+=a+":");d&&(f+="//",c&&(f+=c+"@"),f+=d,b&&(f+=":"+b));return f}
function tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ub(a){var b=[],c;for(c in a)tb(c,a[c],b);return b.join("&")}
var vb=/#|$/;var wb=["https://www.google.com"];function xb(){var a=this;this.g=[];this.h=function(){Promise.all(a.g.map(function(b){document.requestStorageAccessFor(b)})).then(function(){window.removeEventListener("click",a.h)})}}
function yb(){return pa(function(a){var b=a.return;var c=cb()>=119;return b.call(a,c&&!!navigator.permissions&&!!navigator.permissions.query&&"requestStorageAccessFor"in document)})}
function zb(){var a=new xb,b=["https://www.youtube.com"];b=b===void 0?wb:b;pa(function(c){switch(c.g){case 1:return C(c,yb(),2);case 2:if(!c.m){c.g=3;break}return C(c,Promise.all(b.map(function(d){var f;return pa(function(k){if(k.g==1)return k.l=2,C(k,navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:d}),4);k.g!=2?(f=k.m,f.state==="prompt"&&a.g.push(d),k.g=0,k.l=0):(k.l=0,k.i=null,k.g=0)})})),4);
case 4:a.g.length>0&&window.addEventListener("click",a.h);case 3:return c.return()}})}
;var W={},Ab=[],V=new U,Bb={};function Cb(){for(var a=v(Ab),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Db(a,b){return a.tagName.toLowerCase().substring(0,3)==="yt:"?a.getAttribute(b):a.dataset?a.dataset[b]:a.getAttribute("data-"+b)}
function Eb(a){V.H.apply(V,arguments)}
;function Fb(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function X(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(d!==void 0)return d}return null}
function Gb(a,b,c){Y||(Y={},Hb=new Set,Ib.addEventListener("message",function(d){a:if(Hb.has(d.origin)){try{var f=JSON.parse(d.data)}catch(g){break a}var k=Y[f.id];if(k&&d.origin===k.O)switch(d=k.U,d.s=!0,d.s&&(I(d.m,d.sendMessage,d),d.m.length=0),k=f.event,f=f.info,k){case "apiInfoDelivery":if(G(f))for(var e in f)f.hasOwnProperty(e)&&(d.v[e]=f[e]);break;case "infoDelivery":Jb(d,f);break;case "initialDelivery":G(f)&&(clearInterval(d.i),d.playerInfo={},d.v={},Kb(d,f.apiInterface),Jb(d,f));break;default:d.j.i||
(e={target:d,data:f},d.j.H(k,e),Eb("player."+k,e))}}}));
a=String(X(a,"host"));Y[c]={U:b,O:a};Hb.add(a)}
var Y=null,Hb=null,Ib=window;function Lb(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Mb(a){return a.search("get")===0||a.search("is")===0}
;var Nb=window;
function Z(a,b){this.v={};this.playerInfo={};this.videoTitle="";this.l=this.g=this.h=null;this.i=0;this.s=!1;this.m=[];this.j=null;this.B={};if(!a)throw Error("YouTube player element ID required.");this.id=ra(this);b=Object.assign({title:"video player",videoId:"",width:640,height:360},b||{});var c=document;if(a=typeof a==="string"?c.getElementById(a):a)if(Nb.yt_embedsEnableRsaforFromIframeApi&&zb(),c=a.tagName.toLowerCase()==="iframe",b.host||(b.host=c?sb(a.src):"https://www.youtube.com"),this.h=
new Fb(b),c||(b=Ob(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+ra(this.g)),W[this.g.id]=this,window.postMessage){this.j=new U;Pb(this);b=X(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var f in Bb)Bb.hasOwnProperty(f)&&Qb(this,f)}}
p=Z.prototype;p.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
p.getIframe=function(){return this.g};
p.addEventListener=function(a,b){var c=b;typeof b==="string"&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Rb(this,a);return this};
function Qb(a,b){b=b.split(".");if(b.length===2){var c=b[1];"player"===b[0]&&Rb(a,c)}}
p.destroy=function(){this.g&&this.g.id&&(W[this.g.id]=null);var a=this.j;a&&typeof a.dispose=="function"&&a.dispose();if(this.l){a=this.l;var b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Y&&(Y[this.id]=null);this.h=null;this.g&&this.u&&this.g.removeEventListener("load",this.u);this.l=this.g=null};
function Sb(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.m.push(b)}
function Ob(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,f=b.length;d<f;d++){var k=b[d].value;k!=null&&k!==""&&k!=="null"&&c.setAttribute(b[d].name,k)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title","YouTube "+X(a.h,"title"));(b=X(a.h,"width"))&&
c.setAttribute("width",b.toString());(b=X(a.h,"height"))&&c.setAttribute("height",b.toString());var e=Tb(a);e.enablejsapi=window.postMessage?1:0;window.location.host&&(e.origin=window.location.protocol+"//"+window.location.host);e.widgetid=a.id;window.location.href&&I(["debugjs","debugcss"],function(g){var h=window.location.href;var l=h.search(vb);b:{var m=0;for(var n=g.length;(m=h.indexOf(g,m))>=0&&m<l;){var q=h.charCodeAt(m-1);if(q==38||q==63)if(q=h.charCodeAt(m+n),!q||q==61||q==38||q==35)break b;
m+=n+1}m=-1}if(m<0)h=null;else{n=h.indexOf("&",m);if(n<0||n>l)n=l;m+=g.length+1;h=decodeURIComponent(h.slice(m,n!==-1?n:0).replace(/\+/g," "))}h!==null&&(e[g]=h)});
Nb.yt_embedsEnableIframeApiSendFullEmbedUrl&&(window.location.href&&(e.forigin=window.location.href),b=window.location.ancestorOrigins,e.aoriginsup=b===void 0?0:1,b&&b.length>0&&(e.aorigins=Array.from(b).join(",")),window.document.referrer&&(e.gporigin=window.document.referrer));a=""+X(a.h,"host")+("/embed/"+X(a.h,"videoId"))+"?"+ub(e);Nb.yt_embedsEnableIframeSrcWithIntent?(Ra(c,Na(a)),c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=a;return c}
p.G=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):clearInterval(this.i)};
function Pb(a){Gb(a.h,a,a.id);a.i=setInterval(a.G.bind(a),250);a.g&&(a.u=function(){clearInterval(a.i);a.i=setInterval(a.G.bind(a),250)},a.g.addEventListener("load",a.u))}
function Rb(a,b){a.B[b]||(a.B[b]=!0,Sb(a,"addEventListener",[b]))}
p.sendMessage=function(a){a.id=this.id;a.channel="widget";a=JSON.stringify(a);var b=[sb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var c=0;c<b.length;c++)try{this.g.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&d.name==="SyntaxError")d.message&&d.message.indexOf("target origin ''")>0||console&&console.warn&&console.warn(d);else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};
function Tb(a){var b=X(a.h,"playerVars");if(b){var c={},d;for(d in b)c[d]=b[d];b=c}else b={};window!==window.top&&document.referrer&&(b.widget_referrer=document.referrer.substring(0,256));if(a=X(a.h,"embedConfig")){if(G(a))try{a=JSON.stringify(a)}catch(f){console.error("Invalid embed config JSON",f)}b.embed_config=a}return b}
function Jb(a,b){if(G(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+X(a.h,"title"))))}}
function Kb(a,b){I(b,function(c){this[c]||(c==="getCurrentTime"?this[c]=function(){var d=this.playerInfo.currentTime;if(this.playerInfo.playerState===1){var f=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;f>0&&(d+=Math.min(f,1))}return d}:Lb(c)?this[c]=function(){this.playerInfo={};
this.v={};Sb(this,c,arguments);return this}:Mb(c)?this[c]=function(){var d=0;
c.search("get")===0?d=3:c.search("is")===0&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Sb(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=X(this.h,"host")+("/embed/"+X(this.h,"videoId")),b=Number(X(this.h,"width")),c=Number(X(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Sa(a);d=Sa(d!=null?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
p.getOptions=function(a){return this.v.namespaces?a?this.v[a]?this.v[a].options||[]:[]:this.v.namespaces||[]:[]};
p.getOption=function(a,b){if(this.v.namespaces&&a&&b&&this.v[a])return this.v[a][b]};
function Ub(a){if(a.tagName.toLowerCase()!=="iframe"){var b=Db(a,"videoid");b&&(b={videoId:b,width:Db(a,"width"),height:Db(a,"height")},new Z(a,b))}}
;H("YT.PlayerState.UNSTARTED",-1);H("YT.PlayerState.ENDED",0);H("YT.PlayerState.PLAYING",1);H("YT.PlayerState.PAUSED",2);H("YT.PlayerState.BUFFERING",3);H("YT.PlayerState.CUED",5);H("YT.get",function(a){return W[a]});
H("YT.scan",Cb);H("YT.subscribe",function(a,b,c){V.subscribe(a,b,c);Bb[a]=!0;for(var d in W)W.hasOwnProperty(d)&&Qb(W[d],a)});
H("YT.unsubscribe",function(a,b,c){pb(a,b,c)});
H("YT.Player",Z);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.getIframe;Z.prototype.addEventListener=Z.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Ab.push(function(a){var b=a;b||(b=document);a=Ba(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var f=b.getElementsByClassName("yt-player");b=f}else{f=b.getElementsByTagName("*");var k={};for(c=d=0;b=f[c];c++){var e=b.className,g;if(g=typeof e.split=="function")g=ya(e.split(/\s+/),
"yt-player")>=0;g&&(k[d++]=b)}k.length=d;b=k}}b=Ba(b);I(Aa(a,b),Ub)});
typeof YTConfig!=="undefined"&&YTConfig.parsetags&&YTConfig.parsetags!=="onload"||Cb();var Vb=F.onYTReady;Vb&&Vb();var Wb=F.onYouTubeIframeAPIReady;Wb&&Wb();var Xb=F.onYouTubePlayerAPIReady;Xb&&Xb();}).call(this);
