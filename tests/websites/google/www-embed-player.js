(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),oa;
if(typeof Object.setPrototypeOf=="function")oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function x(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function va(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.I=this.j=null}
function wa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,dd:!0};a.h=a.o||a.D}
va.prototype.return=function(a){this.j={return:a};this.h=this.D};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.F=function(a){this.h=a};
function ya(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function za(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.dd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.u;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Ea(a)}a.h.u=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.dd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u["throw"],b,a.h.G):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return na});
u("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.D)}};
b.prototype.W=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.u(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.pa(h,g):this.u(g)};
b.prototype.D=function(g){this.G(2,g)};
b.prototype.u=function(g){this.G(1,g)};
b.prototype.G=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ea();this.I()};
b.prototype.ea=function(){var g=this;e(function(){if(g.S()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.S=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Xb(h.resolve,h.reject)};
b.prototype.pa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(y){m(y)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())d(m.value).Xb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(y){r[w]=y;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Xb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||sa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ka(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ka(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
function Ia(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ia(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ja=Ja||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Na(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var db;function eb(){if(db===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){C.console&&C.console.error(c.message)}db=a}else db=a}return db}
;function fb(a,b){this.h=a===gb&&b||""}
fb.prototype.toString=function(){return this.h};
function hb(a){return new fb(gb,a)}
var gb={};hb("");function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){if(a instanceof ib&&a.constructor===ib)return a.h;Oa(a);return"type_error:TrustedResourceUrl"}
var kb={};function mb(a){var b=eb();a=b?b.createScriptURL(a):a;return new ib(a,kb)}
;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var nb=ha([""]),ob=ia(["\x00"],["\\0"]),pb=ia(["\n"],["\\n"]),qb=ia(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.je=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};function Db(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Fb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Gb(a,b){if(b instanceof ib)a.href=jb(b).toString(),a.rel="stylesheet";else{if(Fb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Hb(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h+""};function Jb(a){var b=Hb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Kb(a,b){if(b instanceof Ib)b=b.h;else throw Error("");a.textContent=b;Jb(a)}
function Lb(a,b){a.src=jb(b);Jb(a)}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Rb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Sb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Tb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ub(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Vb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Wb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Xb[c])c=Xb[c];else{c=String(c);if(!Xb[c]){var f=/function\s+([^\(]+)/m.exec(c);Xb[c]=f?f[1]:"[Anonymous]"}c=Xb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Wb(a,b){b||(b={});b[Yb(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Yb(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=Wb(a,b));return c}
function Yb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Xb={};function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];(e=jc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;function nc(a){var b=b===void 0?Number("27"):b;for(var c=[],d=0;d<oc(a,pc,1).length;d++){var e=oc(a,pc,1)[d];qc(e,2)<=b&&c.push(Number(qc(e,1)))}return c}
function rc(a){var b=b===void 0?Number("27"):b;for(var c=[],d=0;d<oc(a,pc,1).length;d++){var e=oc(a,pc,1)[d];qc(e,2)>b&&c.push(Number(qc(e,1)))}return c}
;function sc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function tc(a){this.h=a}
;function uc(a,b,c){this.o=a;this.j=b;this.fields=c||[];this.h=new Map}
function vc(a){return a.fields.map(function(b){return b.fieldType})}
function wc(a){return a.fields.map(function(b){return b.fieldName})}
p=uc.prototype;p.Gd=function(a){var b=B.apply(1,arguments),c=this.uc(b);c?c.push(new tc(a)):this.rd(a,b)};
p.rd=function(a){var b=this.Nc(B.apply(1,arguments));this.h.set(b,[new tc(a)])};
p.uc=function(){var a=this.Nc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.Wd=function(){var a=this.uc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Nc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function xc(a,b){uc.call(this,a,3,b)}
x(xc,uc);xc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.Wd(b);d&&(c=d.h);this.rd(c+a,b)};function yc(a,b){uc.call(this,a,2,b)}
x(yc,uc);yc.prototype.record=function(a){this.Gd(a,B.apply(1,arguments))};function zc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Ac(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?Ac.apply(null,d):zc(d)}}
;function H(){this.ga=this.ga;this.D=this.D}
H.prototype.ga=!1;H.prototype.dispose=function(){this.ga||(this.ga=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function Bc(a,b){a.addOnDisposeCallback(Xa(zc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ga?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
H.prototype.ba=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function Cc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Cc.prototype.stopPropagation=function(){this.j=!0};
Cc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Dc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Ec=Na(610401301,!1),Fc=Na(645172343,Na(1,!0));function Gc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Hc,Ic=C.navigator;Hc=Ic?Ic.userAgentData||null:null;function Jc(a){return Ec?Hc?Hc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Gc().indexOf(a)!=-1}
;function Kc(){return Ec?!!Hc&&Hc.brands.length>0:!1}
function Lc(){return Kc()?!1:J("Opera")}
function Mc(){return J("Firefox")||J("FxiOS")}
function Nc(){return Kc()?Jc("Chromium"):(J("Chrome")||J("CriOS"))&&!(Kc()?0:J("Edge"))||J("Silk")}
;function Oc(){return Ec?!!Hc&&!!Hc.platform:!1}
function Pc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;var Qc=Lc(),Rc=Kc()?!1:J("Trident")||J("MSIE"),Sc=J("Edge"),Tc=J("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Uc=Gc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");Uc&&J("Mobile");Oc()||J("Macintosh");Oc()||J("Windows");(Oc()?Hc.platform==="Linux":J("Linux"))||Oc()||J("CrOS");var Vc=Oc()?Hc.platform==="Android":J("Android");Pc();J("iPad");J("iPod");Pc()||J("iPad")||J("iPod");Gc().toLowerCase().indexOf("kaios");function Wc(a,b){Cc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Wc,Cc);
Wc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Wc.Ba.preventDefault.call(this)};
Wc.prototype.stopPropagation=function(){Wc.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Wc.prototype.preventDefault=function(){Wc.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xc="closure_listenable_"+(Math.random()*1E6|0);var Yc=0;function Zc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++Yc;this.Ob=this.Wb=!1}
function $c(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function ad(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function bd(a){var b=cd,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function dd(a){for(var b in a)return!1;return!0}
function ed(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function fd(a){return a!==null&&"privembed"in a?a.privembed:!1}
function gd(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function hd(a){var b={},c;for(c in a)b[c]=a[c];return b}
function id(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=id(a[c]);return b}
var jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kd(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jd.length;f++)c=jd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ld(a){this.src=a;this.listeners={};this.h=0}
ld.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=md(a,b,d,e);g>-1?(b=a[g],c||(b.Wb=!1)):(b=new Zc(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
ld.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=md(e,b,c,d);return b>-1?($c(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function nd(a,b){var c=b.type;c in a.listeners&&Sb(a.listeners[c],b)&&($c(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function md(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var od="closure_lm_"+(Math.random()*1E6|0),pd={},qd=0;function rd(a,b,c,d,e){if(d&&d.once)sd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else c=td(c),a&&a[Xc]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):ud(a,b,c,!1,d,e)}
function ud(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=vd(a);h||(a[od]=h=new ld(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=wd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Dc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qd++}}
function wd(){function a(c){return b.call(a.src,a.listener,c)}
var b=yd;return a}
function sd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sd(a,b[f],c,d,e);else c=td(c),a&&a[Xc]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):ud(a,b,c,!0,d,e)}
function zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=td(c),a&&a[Xc])?a.h.remove(String(b),c,d,e):a&&(a=vd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=md(b,c,d,e)),(c=a>-1?b[a]:null)&&Ad(c))}
function Ad(a){if(typeof a!=="number"&&a&&!a.Ob){var b=a.src;if(b&&b[Xc])nd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qd--;(c=vd(b))?(nd(c,a),c.h==0&&(c.src=null,b[od]=null)):$c(a)}}}
function xd(a){return a in pd?pd[a]:pd[a]="on"+a}
function yd(a,b){if(a.Ob)a=!0;else{b=new Wc(b,this);var c=a.listener,d=a.dc||a.src;a.Wb&&Ad(a);a=c.call(d,b)}return a}
function vd(a){a=a[od];return a instanceof ld?a:null}
var Bd="__closure_events_fn_"+(Math.random()*1E9>>>0);function td(a){if(typeof a==="function")return a;a[Bd]||(a[Bd]=function(b){return a.handleEvent(b)});
return a[Bd]}
;function Cd(){H.call(this);this.h=new ld(this);this.Ka=this;this.ea=null}
Za(Cd,H);Cd.prototype[Xc]=!0;p=Cd.prototype;p.addEventListener=function(a,b,c,d){rd(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){zd(this,a,b,c,d)};
function Dd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ka;c=b.type||b;typeof b==="string"?b=new Cc(b,a):b instanceof Cc?b.target=b.target||a:(e=b,b=new Cc(c,a),kd(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Ed(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ed(g,c,!0,b)&&e,b.j||(e=Ed(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ed(g,c,!1,b)&&e}
p.ba=function(){Cd.Ba.ba.call(this);this.removeAllListeners();this.ea=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,$c(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ed(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Wb&&nd(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Fd(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Fd.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Gd(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Hd(){}
function Id(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Jd(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Jd.prototype;p.clone=function(){return new Jd(this.x,this.y)};
p.equals=function(a){return a instanceof Jd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Kd(a,b){this.width=a;this.height=b}
p=Kd.prototype;p.clone=function(){return new Kd(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Ld(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Md(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Nd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Od;function Pd(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Md("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Rc;c.Rc=null;e()}};
return function(e){d.next={Rc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Qd(a){C.setTimeout(function(){throw a;},0)}
;function Rd(){this.i=this.h=null}
Rd.prototype.add=function(a,b){var c=Sd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Rd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Sd=new Fd(function(){return new Td},function(a){return a.reset()});
function Td(){this.next=this.scope=this.h=null}
Td.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Td.prototype.reset=function(){this.next=this.scope=this.h=null};var Ud,Vd=!1,Wd=new Rd;function Xd(a,b){Ud||Yd();Vd||(Ud(),Vd=!0);Wd.add(a,b)}
function Yd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Ud=function(){a.then(Zd)}}else Ud=function(){var b=Zd;
typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Od||(Od=Pd()),Od(b)):C.setImmediate(b)}}
function Zd(){for(var a;a=Wd.remove();){try{a.h.call(a.scope)}catch(b){Qd(b)}Gd(Sd,a)}Vd=!1}
;function $d(a){this.h=0;this.A=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=Hd)try{var b=this;a.call(void 0,function(c){ae(b,2,c)},function(c){ae(b,3,c)})}catch(c){ae(this,3,c)}}
function be(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
be.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ce=new Fd(function(){return new be},function(a){a.reset()});
function de(a,b,c){var d=ce.get();d.i=a;d.h=b;d.context=c;return d}
function ee(a){return new $d(function(b,c){c(a)})}
$d.prototype.then=function(a,b,c){return fe(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
$d.prototype.$goog_Thenable=!0;p=$d.prototype;p.oc=function(a,b){return fe(this,null,a,b)};
p.catch=$d.prototype.oc;p.cancel=function(a){if(this.h==0){var b=new ge(a);Xd(function(){he(this,b)},this)}};
function he(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?he(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):ie(c),je(c,e,3,b)))}a.j=null}else ae(a,3,b)}
function ke(a,b){a.i||a.h!=2&&a.h!=3||le(a);a.o?a.o.next=b:a.i=b;a.o=b}
function fe(a,b,c,d){var e=de(null,null,null);e.child=new $d(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ge?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ke(a,e);return e.child}
p.Ze=function(a){this.h=0;ae(this,2,a)};
p.af=function(a){this.h=0;ae(this,3,a)};
function ae(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ze,f=a.af;if(d instanceof $d){ke(d,de(e||Hd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){me(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,le(a),b!=3||c instanceof ge||ne(a,c))}}
function me(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function le(a){a.u||(a.u=!0,Xd(a.Rd,a))}
function ie(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Rd=function(){for(var a;a=ie(this);)je(this,a,this.h,this.A);this.u=!1};
function je(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,oe(b,c,d);else try{b.j?b.i.call(b.context):oe(b,c,d)}catch(e){pe.call(null,e)}Gd(ce,b)}
function oe(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ne(a,b){a.D=!0;Xd(function(){a.D&&pe.call(null,b)})}
var pe=Qd;function ge(a){ab.call(this,a)}
Za(ge,ab);ge.prototype.name="cancel";function qe(a,b){Cd.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.We,this);this.u=Ya()}
Za(qe,Cd);p=qe.prototype;p.enabled=!1;p.Fa=null;p.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
p.We=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Fa=this.i.setTimeout(this.o,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),Dd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
p.ba=function(){qe.Ba.ba.call(this);this.stop();delete this.i};
function re(a,b,c){if(typeof a==="function")c&&(a=Wa(a,c));else if(a&&typeof a.handleEvent=="function")a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:C.setTimeout(a,b||0)}
;function se(a){H.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new qe(this.flushInterval);this.h.listen("tick",this.Ab,!1,this);Bc(this,this.h)}
x(se,H);p=se.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function te(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Ab()}
p.Ab=function(){var a=this.i.values();a=[].concat(ja(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);ue(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Ra=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new xc(a,b))};
p.Db=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new yc(a,b))};
function ve(a,b){return a.A.has(b)?void 0:a.i.get(b)}
p.zb=function(a){this.Ed(a,1,B.apply(1,arguments))};
p.Ed=function(a,b){var c=B.apply(2,arguments),d=ve(this,a);d&&d instanceof xc&&(d.i(b,c),te(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=ve(this,a);d&&d instanceof yc&&(d.record(b,c),te(this))};
function ue(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function we(a){this.h=a;this.h.Ra("/client_streamz/bg/fic",F("ke"))}
function xe(a){this.h=a;this.h.Ra("/client_streamz/bg/fiec",F("rk"),F("ke"),sc("ec"))}
function ye(a){this.h=a;this.h.Db("/client_streamz/bg/fil",F("rk"),F("ke"))}
ye.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ze(a){this.h=a;this.h.Ra("/client_streamz/bg/fcc",sc("ph"),F("ke"))}
function Ae(a){this.h=a;this.h.Db("/client_streamz/bg/fcd",sc("ph"),F("ke"))}
Ae.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Be(a){this.h=a;this.h.Ra("/client_streamz/bg/fsc",F("rk"),F("ke"))}
function Ce(a){this.h=a;this.h.Db("/client_streamz/bg/fsl",F("rk"),F("ke"))}
Ce.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function De(a){this.h=a;this.h.Db("/client_streamz/bg/wrl",F("mn"),sc("ac"),sc("sc"),F("rk"),F("mk"))}
De.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ee(a){this.h=a;this.h.Db("/client_streamz/bg/el",F("en"),F("bk"),F("rk"),F("mk"))}
Ee.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Fe(a){this.h=a;this.h.Ra("/client_streamz/bg/cec",sc("ec"),F("bk"),F("rk"),F("mk"))}
function Ge(a){this.h=a;this.h.Ra("/client_streamz/bg/po/csc",sc("cs"),F("rk"),F("mk"))}
function He(a){this.h=a;this.h.Ra("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function Ie(a){this.h=a;this.h.Ra("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;Mc();var Je=Pc()||J("iPod"),Ke=J("iPad");!J("Android")||Nc()||Mc()||Lc()||J("Silk");Nc();var Le=J("Safari")&&!(Nc()||(Kc()?0:J("Coast"))||Lc()||(Kc()?0:J("Edge"))||(Kc()?Jc("Microsoft Edge"):J("Edg/"))||(Kc()?Jc("Opera"):J("OPR"))||Mc()||J("Silk")||J("Android"))&&!(Pc()||J("iPad")||J("iPod"));var Me={},Ne=null;function Oe(a,b){Pa(a);b===void 0&&(b=0);Pe();b=Me[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Qe(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Re(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Re(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ne[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Pe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Pe(){if(!Ne){Ne={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Me[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Ne[f]===void 0&&(Ne[f]=e)}}}}
;var Se=typeof Uint8Array!=="undefined",Te=!Rc&&typeof btoa==="function";function Ue(a){if(!Te)return Oe(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ve=/[-_.]/g,We={"-":"+",_:"/",".":"="};function Xe(a){return We[a]||""}
function Ye(a){return Se&&a!=null&&a instanceof Uint8Array}
var Ze={};var $e;function af(a){if(a!==Ze)throw Error("illegal external caller");}
function bf(a,b){af(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
bf.prototype.sizeBytes=function(){af(Ze);var a=this.h;if(a!=null&&!Ye(a))if(typeof a==="string")if(Te){Ve.test(a)&&(a=a.replace(Ve,Xe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Qe(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var cf;function df(){var a=Error();Ub(a,"incident");Qd(a)}
function ef(a){a=Error(a);Ub(a,"warning");return a}
;function ff(){return typeof BigInt==="function"}
;function gf(a){return Array.prototype.slice.call(a)}
;var hf=typeof Symbol==="function"&&typeof Symbol()==="symbol";function jf(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var kf=jf(),lf=jf("2ex"),mf=jf("1oa");Math.max.apply(Math,ja(Object.values({zg:1,xg:2,wg:4,Cg:8,Bg:16,Ag:32,rf:64,Eg:128,vg:256,ug:512,yg:1024,wf:2048,Dg:4096,xf:8192})));var nf=hf?function(a,b){a[kf]|=b}:function(a,b){a.h!==void 0?a.h|=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},of=hf?function(a){return a[kf]|0}:function(a){return a.h|0},pf=hf?function(a){return a[kf]}:function(a){return a.h},qf=hf?function(a,b){a[kf]=b}:function(a,b){a.h!==void 0?a.h=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function rf(a,b){qf(b,(a|0)&-14591)}
function sf(a,b){qf(b,(a|34)&-14557)}
;var tf={},uf={};function vf(a){return!(!a||typeof a!=="object"||a.h!==uf)}
function wf(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function xf(a){return!Array.isArray(a)||a.length?!1:of(a)&1?!0:!1}
var yf,zf=[];qf(zf,55);yf=Object.freeze(zf);function Af(a){if(a&2)throw Error();}
var Bf=Object.freeze({});Object.freeze({});var Cf=Object.freeze({});var Df=0,Ef=0;function Ff(a){var b=a>>>0;Df=b;Ef=(a-b)/4294967296>>>0}
function Gf(a){if(a<0){Ff(0-a);var b=v(Hf(Df,Ef));a=b.next().value;b=b.next().value;Df=a>>>0;Ef=b>>>0}else Ff(a)}
function If(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ff()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Jf(c)+Jf(a));return c}
function Jf(a){a=String(a);return"0000000".slice(a.length)+a}
function Kf(){var a=Df,b=Ef;b&2147483648?ff()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Hf(a,b)),a=b.next().value,b=b.next().value,a="-"+If(a,b)):a=If(a,b);return a}
function Hf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Lf(a){a.Pg=!0;return a}
;var Mf=Lf(function(a){return typeof a==="number"}),Nf=Lf(function(a){return typeof a==="string"}),Of=Lf(function(a){return typeof a==="boolean"});
function Pf(){var a=Qf;return Lf(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Rf=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Sf(a){var b=a;if(Nf(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Mf(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Rf?BigInt(a):a=Of(a)?a?"1":"0":Nf(a)?a.trim()||"0":String(a)}
var Yf=Lf(function(a){return Rf?a>=Tf&&a<=Uf:a[0]==="-"?Vf(a,Wf):Vf(a,Xf)}),Wf=Number.MIN_SAFE_INTEGER.toString(),Tf=Rf?BigInt(Number.MIN_SAFE_INTEGER):void 0,Xf=Number.MAX_SAFE_INTEGER.toString(),Uf=Rf?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Vf(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;function Zf(a){return a.displayName||a.name||"unknown type name"}
function $f(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var ag=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function bg(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:ag.test(a)}
function cg(a){if(typeof a!=="number")throw ef("int32");if(!Number.isFinite(a))throw ef("int32");return a|0}
function dg(a){return a==null?a:cg(a)}
function eg(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function fg(a){var b=0;b=b===void 0?0:b;if(!bg(a))throw ef("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return gg(a);case "bigint":return String(BigInt.asIntN(64,a));default:return hg(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Sf(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=ff()?Sf(BigInt.asIntN(64,BigInt(a))):Sf(ig(a))),a;case "bigint":return Sf(BigInt.asIntN(64,a));default:return Sf(jg(a))}case 0:switch(c){case "string":return gg(a);
case "bigint":return Sf(BigInt.asIntN(64,a));default:return jg(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function kg(a){return a==null?a:fg(a)}
function lg(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function ig(a){a.indexOf(".");if(lg(a))return a;if(a.length<16)Gf(Number(a));else if(ff())a=BigInt(a),Df=Number(a&BigInt(4294967295))>>>0,Ef=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Ef=Df=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Ef*=1E6,Df=Df*1E6+d,Df>=4294967296&&(Ef+=Math.trunc(Df/4294967296),Ef>>>=0,Df>>>=0);b&&(b=v(Hf(Df,Ef)),a=b.next().value,b=b.next().value,Df=a,Ef=b)}return Kf()}
function jg(a){bg(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Gf(a);var b=Df,c=Ef;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function hg(a){bg(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);lg(b)?a=b:(Gf(a),a=Kf())}return a}
function gg(a){bg(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return ig(a)}
function mg(a){if(a==null)return a;if(typeof a==="bigint")return Yf(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=Yf(a)?Number(a):String(a)),a;if(bg(a))return typeof a==="number"?jg(a):gg(a)}
function ng(a){if(typeof a!=="string")throw Error();return a}
function og(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function pg(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Zf(b)+" but got "+(a&&Zf(a.constructor)));}
function qg(a,b,c){if(a!=null&&typeof a==="object"&&a.Bc===tf)return a;if(Array.isArray(a)){var d=of(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&qf(a,e);return new b(a)}}
;function rg(a){var b=sg(a);if(b)return b;if(Math.random()>.01)return a;if(tg===void 0)if(typeof Proxy!=="function")tg=null;else try{tg=Proxy.toString().indexOf("[native code]")!==-1?Proxy:null}catch(c){tg=null}b=tg;if(!b)return a;b=new b(a,{set:function(c,d,e){ug();c[d]=e;return!0}});
vg(a,b);return b}
function ug(){df()}
var wg=void 0,xg=void 0;function sg(a){var b;return(b=wg)==null?void 0:b.get(a)}
function yg(a){var b;return((b=xg)==null?void 0:b.get(a))||a}
function vg(a,b){(wg||(wg=new WeakMap)).set(a,b);(xg||(xg=new WeakMap)).set(b,a)}
var tg=void 0;var zg;function Ag(a,b){of(b);zg=b;a=new a(b);zg=void 0;return a}
function K(a,b,c){a==null&&(a=zg);zg=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=of(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(wf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}qf(a,d);return a}
;function Bg(a,b){return Cg(b)}
function Cg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(xf(a))return}else{if(Ye(a))return Ue(a);if(a instanceof bf){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Ue(b)}}}return a}
;function Dg(a,b,c){a=gf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Eg(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=xf(a)?void 0:e&&of(a)&2?a:Fg(a,b,c,d!==void 0,e);else if(wf(a)){var f={},g;for(g in a)f[g]=Eg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Fg(a,b,c,d,e){var f=d||c?of(a):0;d=d?!!(f&32):void 0;a=gf(a);for(var g=0;g<a.length;g++)a[g]=Eg(a[g],b,c,d,e);c&&c(f,a);return a}
function Gg(a){return a.Bc===tf?a.toJSON():Cg(a)}
;function Hg(a,b,c){c=c===void 0?sf:c;if(a!=null){if(Se&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=of(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(qf(a,(d|34)&-12293),a):Fg(a,Hg,d&4?sf:c,!0,!0)}a.Bc===tf&&(c=a.H,d=pf(c),a=d&2?a:Ag(a.constructor,Ig(c,d,!0)));return a}}
function Ig(a,b,c){var d=c||b&2?sf:rf,e=!!(b&32);a=Dg(a,b,function(f){return Hg(f,e,d)});
nf(a,32|(c?2:0));return a}
function Jg(a){var b=a.H,c=pf(b);return c&2?Ag(a.constructor,Ig(b,c,!1)):a}
;function Kg(a,b){a=a.H;return Lg(a,pf(a),b)}
function Mg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Lg(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Mg(a,b,e,c)&&lf!=null){var g;a=(g=cf)!=null?g:cf={};g=a[lf]||0;g>=4||(a[lf]=g+1,df())}return d}return Mg(a,b,e,c)}}
function Ng(a,b,c){var d=a.H,e=pf(d);Af(e);Og(d,e,b,c);return a}
function Og(a,b,c,d,e){wf(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Fc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&qf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Pg(a){return Qg(a,Rg,11,!1)!==void 0}
function Sg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Tg(a,b,c){var d=a.H,e=pf(d);Af(e);if(b==null)return Og(d,e,3),a;b=yg(b);if(!Array.isArray(b))throw ef();var f=of(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Cf||!1);if(!(4&f))for(f=21,h&&(b=gf(b),g=0,f=Ug(f,e),f=Vg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=gf(b),g=0,f=Ug(f,e),f=Vg(f,e,!0));f!==g&&qf(b,f);Og(d,e,3,b);return a}
function Wg(a,b,c,d){a=a.H;var e=pf(a);Af(e);if(d==null){var f=Zg(a);if($g(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Zg(a);var g=$g(f,a,e,c);g!==b&&(g&&(e=Og(a,e,g)),f.set(c,b))}Og(a,e,b,d)}
function Zg(a){if(hf){var b;return(b=a[mf])!=null?b:a[mf]=new Map}if(mf in a)return a[mf];b=new Map;Object.defineProperty(a,mf,{value:b});return b}
function $g(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Lg(b,c,g)!=null&&(e!==0&&(c=Og(b,c,e)),e=g)}a.set(d,e);return e}
function Qg(a,b,c,d){a=a.H;var e=pf(a),f=Lg(a,e,c,d);b=qg(f,b,e);b!==f&&b!=null&&Og(a,e,c,b,d);return b}
function ah(a,b,c,d){d=d===void 0?!1:d;b=Qg(a,b,c,d);if(b==null)return b;a=a.H;var e=pf(a);if(!(e&2)){var f=Jg(b);f!==b&&(b=f,Og(a,e,c,b,d))}return b}
function oc(a,b,c){var d=void 0===Bf?2:5;var e=a.H,f=pf(e);a=f;var g=!(2&f),h=!!(2&a);f=h?1:d;g&&(g=!h);d=Lg(e,a,c);d=Array.isArray(d)?d:yf;var k=of(d);h=!!(4&k);if(!h){var l=k;l===0&&(l=Ug(l,a));k=d;l|=1;var m=a,n=!!(2&l);n&&(m|=2);for(var r=!n,t=!0,w=0,y=0;w<k.length;w++){var z=qg(k[w],b,m);if(z instanceof b){if(!n){var G=!!(of(z.H)&2);r&&(r=!G);t&&(t=G)}k[y++]=z}}y<w&&(k.length=y);l|=4;l=t?l|16:l&-17;l=r?l|8:l&-9;qf(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(f===1||f===4&&32&k))){Sg(k)&&
(d=gf(d),k=Ug(k,a),a=Og(e,a,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=Jg(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;qf(b,g);k=g}var I;f===1||f===4&&32&k?Sg(k)||(c=k,a=!!(32&k),k|=!d.length||16&k&&(!h||a)?2:2048,k!==c&&qf(d,k),Object.freeze(d)):(h=f!==5?!1:!!(32&k)||Sg(k)||!!sg(d),(f===2||h)&&Sg(k)&&(d=gf(d),k=Ug(k,a),k=Vg(k,a,!1),qf(d,k),a=Og(e,a,c,d)),Sg(k)||(c=k,k=Vg(k,a,!1),k!==c&&qf(d,k)),h&&(I=rg(d)));return I||d}
function bh(a,b,c,d){d!=null?pg(d,b):d=void 0;return Ng(a,c,d)}
function ch(a,b,c,d){var e=a.H,f=pf(e);Af(f);if(d==null)return Og(e,f,c),a;d=yg(d);if(!Array.isArray(d))throw ef();for(var g=of(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Cf||!1),n=!0,r=!0,t=0;t<d.length;t++){var w=d[t];pg(w,b);k||(w=!!(of(w.H)&2),n&&(n=!w),r&&(r=w))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);if(m||l&&g!==h)d=gf(d),h=0,g=Ug(g,f),g=Vg(g,f,!0);g!==h&&qf(d,g);Og(e,f,c,d);return a}
function Ug(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function Vg(a,b,c){32&b&&c||(a&=-33);return a}
function dh(a){a=Kg(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):bg(a)?c==="string"?gg(a):b?hg(a):jg(a):void 0;return b}
function eh(a,b){return a!=null?a:b}
function fh(a){var b=b===void 0?!1:b;a=Kg(a,4);return eh(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function qc(a,b,c){c=c===void 0?0:c;return eh(eg(Kg(a,b)),c)}
function gh(a,b){var c=c===void 0?"":c;a=Kg(a,b);return eh(a==null||typeof a==="string"?a:void 0,c)}
function hh(a){var b=0;b=b===void 0?0:b;a=Kg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return eh(a,b)}
function ih(a,b,c){return Ng(a,b,og(c))}
function jh(a,b,c){if(c!=null){if(!Number.isFinite(c))throw ef("enum");c|=0}return Ng(a,b,c)}
;function kh(a){return a}
function lh(a){return a}
function mh(a,b,c,d){return nh(a,b,c,d,oh,ph)}
function qh(a,b,c,d){return nh(a,b,c,d,rh,sh)}
function nh(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=th(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var w=m,y=c.length-1;y>=0;y--){var z=c[y];if(!(z==null||d&&y===c.length-1&&z===d)){z=y-b;var G=e(z,t)+f(n,r,w);G<l&&(a=1+z,l=G);n++;t--;w+=th(z);r=Math.max(r,z)}}b=e(0,0)+f(n,r,w);b<l&&(a=0,l=b);if(d){n=h;r=g;w=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,w-=I.length,g=e(d,t)+f(n,r,w),g<l&&(a=1+d,l=g))}return a}
function sh(a,b,c){return c+a*3+(a>1?a-1:0)}
function rh(a,b){return(a>1?a-1:0)+(a-b)*4}
function ph(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function oh(a){return 40+4*a}
function th(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var uh,vh;function L(a,b,c){this.H=K(a,b,c)}
p=L.prototype;p.toJSON=function(){return wh(this)};
p.serialize=function(a){try{return vh=!0,a&&(uh=a===lh||a!==kh&&a!==mh&&a!==qh?lh:a),JSON.stringify(wh(this),Bg)}finally{a&&(uh=void 0),vh=!1}};
function xh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");nf(b,32);return Ag(a,b)}
p.clone=function(){var a=this.H,b=pf(a);return Ag(this.constructor,Ig(a,b,!1))};
p.Bc=tf;p.toString=function(){try{return vh=!0,wh(this).toString()}finally{vh=!1}};
function wh(a){var b;vh?b=a.H:b=Fg(a.H,Gg,void 0,void 0,!1);var c=!vh,d=pf(c?a.H:b);if(a=b.length){var e=b[a-1],f=wf(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!uh&&Fc&&!(d&512);var k,l=(k=uh)!=null?k:lh;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;f={};l=!1;if(h)for(var r=Math.max(0,k+g);r<m.length;r++){var t=m[r],w=r-g;t==null||xf(t)||vf(t)&&t.size===0||(m[r]=void 0,f[w]=t,l=!0)}if(n)for(var y in n)if(r=+y,isNaN(r))f[y]=n[y];else if(t=n[y],Array.isArray(t)&&
(xf(t)||vf(t)&&t.size===0)&&(t=null),t==null&&(l=!0),h&&r<k){l=!0;t=r+g;for(w=m.length;w<=t;w++)m.push(void 0);m[t]=n[r]}else t!=null&&(f[y]=t);if(l){for(var z in f){n=f;break b}n=null}}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){y=d[a-1];if(!(y==null||xf(y)||vf(y)&&y.size===0))break;var G=!0}if(d!==b||m||G){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(G||m||n)d.length=a;n&&d.push(n)}G=d}else G=b;return G}
;function yh(a){this.H=K(a)}
x(yh,L);function zh(a,b){return Tg(a,b,cg)}
;function Ah(a){this.H=K(a)}
x(Ah,L);var Bh=[1,2,3];function Ch(a){this.H=K(a)}
x(Ch,L);var Dh=[1,2,3];function Eh(a){this.H=K(a)}
x(Eh,L);function Fh(a){this.H=K(a)}
x(Fh,L);function Gh(a){this.H=K(a)}
x(Gh,L);function Hh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Ih(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],y=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=z^w&(y^z);var N=1518500249}else I=w^y^z,N=1859775393;else t<60?(I=w&y|z&(w|y),N=2400959708):(I=w^y^z,N=3395469782);I=((n<<5|n>>>27)&4294967295)+I+G+N+r[t]&4294967295;G=z;z=y;y=(w<<30|w>>>2)&4294967295;w=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,y=n.length;w<y;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Nd:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function Jh(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Kh(Hh(d),a,c||null)].join(" "):null}
function Kh(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),Lh(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=Lh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Lh(a){var b=Ih();b.update(a);return b.Nd().toLowerCase()}
;var Mh={};function Nh(a){this.h=a||{cookie:""}}
p=Nh.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.De;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Mb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Oh=new Nh(typeof document=="undefined"?null:document);function Ph(a){return!!Mh.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Qh(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ph(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Nh(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Ph(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Rh(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Nh(document)).get(b));return a?Jh(a,c,d):null}
function Sh(a,b){b=b===void 0?!1:b;var c=Hh(String(C.location.href)),d=[];if(Qh(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Nh(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Jh(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ph(b)&&((b=Rh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=Rh("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Th(a){this.H=K(a)}
x(Th,L);function Uh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
Uh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Uh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Uh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Uh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Vh(a){this.H=K(a)}
x(Vh,L);function Wh(a){this.H=K(a)}
x(Wh,L);function Xh(a){this.h=this.i=this.j=a}
Xh.prototype.reset=function(){this.h=this.i=this.j};
Xh.prototype.getValue=function(){return this.i};function Yh(a){this.H=K(a)}
x(Yh,L);Yh.prototype.cc=function(){return hh(this)};function Zh(a){this.H=K(a)}
x(Zh,L);function $h(a){this.H=K(a)}
x($h,L);function ai(a,b){ch(a,Zh,1,b)}
;function Rg(a){this.H=K(a)}
x(Rg,L);var bi=["platform","platformVersion","architecture","model","uaFullVersion"],ci=new $h,di=null;function ei(a,b){b=b===void 0?bi:b;if(!di){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Zh;f=ih(f,1,e.brand);return ih(f,2,e.version)});
ai(Ng(ci,2,$f(a.mobile)),c);di=a.getHighEntropyValues(b)}var d=new Set(b);return di.then(function(e){var f=ci.clone();d.has("platform")&&ih(f,3,e.platform);d.has("platformVersion")&&ih(f,4,e.platformVersion);d.has("architecture")&&ih(f,5,e.architecture);d.has("model")&&ih(f,6,e.model);d.has("uaFullVersion")&&ih(f,7,e.uaFullVersion);return f}).catch(function(){return ci.clone()})}
;function fi(a){this.H=K(a)}
x(fi,L);function gi(a){this.H=K(a,4)}
x(gi,L);function hi(a){this.H=K(a,35)}
x(hi,L);function ii(a){this.H=K(a,19)}
x(ii,L);ii.prototype.Pb=function(a){return jh(this,2,a)};function ji(a){this.H=K(a,8)}
x(ji,L);var ki=function(a){return function(b){return xh(a,b)}}(ji);function li(a){this.H=K(a)}
x(li,L);var mi=new function(){this.ctor=li;this.isRepeated=0;this.h=ah;this.defaultValue=void 0};function ni(a){H.call(this);var b=this;this.componentId="";this.j=[];this.W="";this.pageId=null;this.ea=this.S=-1;this.experimentIds=null;this.I=this.u=0;this.ia=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Ib=a.Ib||function(){};
this.i=new oi(a.logSource,a.bb);this.network=a.network;this.xb=a.xb||null;this.bufferSize=1E3;this.A=a.bf||null;this.sessionIndex=a.sessionIndex||null;this.Gb=a.Gb||!1;this.logger=null;this.withCredentials=!a.Uc;this.bb=a.bb||!1;this.G=typeof URLSearchParams!=="undefined"&&!!(new URL(pi())).searchParams&&!!(new URL(pi())).searchParams.set;var c=jh(new fi,1,1);qi(this.i,c);this.o=new Xh(1E4);a=ri(this,a.Oc);this.h=new Uh(this.o.getValue(),a);this.V=new Uh(6E5,a);this.Gb||this.V.start();this.bb||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.sc()}),document.addEventListener("pagehide",this.sc.bind(this)))}
x(ni,H);function ri(a,b){return a.G?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=ni.prototype;p.ba=function(){this.sc();this.h.stop();this.V.stop();H.prototype.ba.call(this)};
p.log=function(a){if(this.G){a=a.clone();var b=this.ia++;a=Ng(a,21,kg(b));this.componentId&&ih(a,26,this.componentId);if(dh(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Ng(b,1,kg(c))}mg(Kg(a,15))==null&&Ng(a,15,kg((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),bh(b,Th,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Gb||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ea>d&&this.S<d)b&&b("throttled");else{this.network&&(typeof this.network.cc==="function"?si(this.i,this.network.cc()):si(this.i,0));var e=ti(this.i,this.j,this.u,this.I,this.xb);d={};var f=this.Ib();f&&(d.Authorization=f);this.A||(this.A=pi());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.W===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,Hg:1,od:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=ki(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=eh(dh(l),m),k=k(m),k>0&&(c.S=Date.now(),c.ea=c.S+k),l=mi.ctor?mi.h(l,mi.ctor,175237375,!0):mi.h(l,175237375,null,!0),l=l===null?void 0:l)&&(l=qc(l,1,-1),l!==-1&&(c.o=new Xh(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.I=0};
h=function(k,l){var m=oc(e,hi,3);var n=mg(Kg(e,14)),r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round((Math.random()-.5)*.2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.W=f);n&&(c.u+=n);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Gb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.I};
c.network&&c.network.send(d,g,h)}}}};
p.sc=function(){ui(this.i,!0);this.flush();ui(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function pi(){return"https://play.google.com/log?format=json&hasfast=true"}
function oi(a,b){this.bb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new ii;Number.isInteger(a)&&this.h.Pb(a);b||(this.locale=document.documentElement.getAttribute("lang"));qi(this,new fi)}
oi.prototype.Pb=function(a){this.h.Pb(a);return this};
function qi(a,b){bh(a.h,fi,1,b);hh(b)||jh(b,1,1);a.bb||(b=vi(a),gh(b,5)||ih(b,5,a.locale));a.i&&(b=vi(a),ah(b,$h,9)||bh(b,$h,9,a.i))}
function si(a,b){Pg(wi(a))&&(a=xi(a),jh(a,1,b))}
function ui(a,b){Pg(wi(a))&&(a=xi(a),Ng(a,2,$f(b)))}
function wi(a){return ah(a.h,fi,1)}
function yi(a){var b=b===void 0?bi:b;var c=a.bb?void 0:window;c?ei(c,b).then(function(d){a.i=d;d=vi(a);bh(d,$h,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function vi(a){a=wi(a);var b=ah(a,Rg,11);b||(b=new Rg,bh(a,Rg,11,b));return b}
function xi(a){a=vi(a);var b=ah(a,Yh,10);b||(b=new Yh,Ng(b,2,$f(!1)),bh(a,Yh,10,b));return b}
function ti(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(Pg(wi(a))){var h=xi(a);Ng(h,3,dg(d))}Pg(wi(a))&&(d=xi(a),Ng(d,4,dg(f)));Pg(wi(a))&&(f=xi(a),Ng(f,5,dg(g)));a=a.h.clone();g=Date.now().toString();a=Ng(a,4,kg(g));b=b.slice();b=ch(a,hi,3,b);e&&(a=new Vh,e=Ng(a,13,dg(e)),a=new Wh,e=bh(a,Vh,2,e),a=new gi,e=bh(a,Wh,1,e),e=jh(e,2,9),bh(b,gi,18,e));c&&Ng(b,14,kg(c));return b}
;function zi(){this.Fd=typeof AbortController!=="undefined"}
zi.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:return f=(e=d.Fd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.od)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.F(3);break}if((l=b)==null){w.F(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.I=[w.j];w.o=0;w.D=0;clearTimeout(f);Aa(w);break;case 2:m=za(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.F(3)}})};
zi.prototype.cc=function(){return 4};function Ai(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.i=this.xb=null}
x(Ai,H);Ai.prototype.Uc=function(){this.u=!0;return this};
function Bi(a){a.network||(a.network=new zi);var b=new ni({logSource:a.logSource,Ib:a.Ib?a.Ib:Sh,sessionIndex:a.sessionIndex,bf:a.j,bb:a.o,Gb:!1,Uc:a.u,Oc:a.Oc,network:a.network});Bc(a,b);if(a.h){var c=a.h,d=vi(b.i);ih(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.xb&&(b.xb=a.xb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new Th),c=b.experimentIds,d=d.serialize(),ih(c,4,d)):b.experimentIds&&Ng(b.experimentIds,4));yi(b.i);a.network.Pb&&a.network.Pb(a.logSource);
a.network.Oe&&a.network.Oe(b);return b}
;function Ci(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Ai(a,"0"),a.componentId=b,Bc(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&(a.h=e),g&&(a.network=g),b=Bi(a));this.h=b}
x(Ci,H);
Ci.prototype.flush=function(a){var b=a||[];if(b.length){a=new Gh;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Fh;f=ih(f,1,e.o);var g=wc(e);f=Tg(f,g,ng);g=[];var h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.j;for(var n=e.uc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],y=w&&w.h;w=new Ch;switch(m){case 3:y=Number(y);Number.isFinite(y)&&Wg(w,1,Dh,kg(y));break;case 2:y=Number(y);if(y!=null&&typeof y!=="number")throw Error("Value of float/double field must be a number, found "+typeof y+
": "+y);Wg(w,2,Dh,y)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new Eh;r=bh(t,Ch,2,r);t=l;w=[];y=vc(e);for(var z=0;z<y.length;z++){var G=y[z],I=t[z],N=new Ah;switch(G){case 3:Wg(N,1,Bh,og(String(I)));break;case 2:G=Number(I);Number.isFinite(G)&&Wg(N,2,Bh,dg(G));break;case 1:Wg(N,3,Bh,$f(I==="true"))}w.push(N)}ch(r,Ah,1,w);g.push(r)}}ch(f,Eh,4,g);c.push(f);e.clear()}ch(a,Fh,1,c);b=this.h;b.G&&(a instanceof hi?b.log(a):(c=new hi,a=a.serialize(),a=ih(c,8,a),b.log(a)));this.h.flush()}};function Di(){}
Di.prototype.serialize=function(a){var b=[];Ei(this,a,b);return b.join("")};
function Ei(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ei(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Fi(d,c),c.push(":"),Ei(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fi(a,b){b.push('"',a.replace(Hi,function(c){var d=Gi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Gi[c]=d);return d}),'"')}
;function Ii(){}
Ii.prototype.h=null;Ii.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Ji;function Ki(){}
Za(Ki,Ii);Ji=new Ki;function Li(a){Cd.call(this);this.headers=new Map;this.ya=a||null;this.i=!1;this.I=this.U=null;this.o=this.W="";this.j=this.V=this.u=this.S=!1;this.G=0;this.A=null;this.pa="";this.ia=!1}
Za(Li,Cd);var Mi=/^https?$/i,Ni=["POST","PUT"],Oi=[];function Pi(a,b,c,d,e,f,g){var h=new Li;Oi.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Ld,!0,void 0,void 0);f&&(h.G=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
p=Li.prototype;p.Ld=function(){this.dispose();Sb(Oi,this)};
p.send=function(a,b,c,d){if(this.U)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.o="";this.S=!1;this.i=!0;this.U=new XMLHttpRequest;this.I=this.ya?this.ya.getOptions():Ji.getOptions();this.U.onreadystatechange=Wa(this.jd,this);try{this.getStatus(),this.V=!0,this.U.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();Qi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Mb(Ni,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.U.setRequestHeader(d,c);this.pa&&(this.U.responseType=this.pa);"withCredentials"in this.U&&this.U.withCredentials!==this.ia&&(this.U.withCredentials=this.ia);try{Ri(this),this.G>0&&(this.getStatus(),this.A=re(this.Ye,this.G,this)),this.getStatus(),this.u=!0,this.U.send(a),this.u=
!1}catch(g){this.getStatus(),Qi(this,g)}};
p.Ye=function(){typeof Ja!="undefined"&&this.U&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Dd(this,"timeout"),this.abort(8))};
function Qi(a,b){a.i=!1;a.U&&(a.j=!0,a.U.abort(),a.j=!1);a.o=b;Si(a);Ti(a)}
function Si(a){a.S||(a.S=!0,Dd(a,"complete"),Dd(a,"error"))}
p.abort=function(){this.U&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.U.abort(),this.j=!1,Dd(this,"complete"),Dd(this,"abort"),Ti(this))};
p.ba=function(){this.U&&(this.i&&(this.i=!1,this.j=!0,this.U.abort(),this.j=!1),Ti(this,!0));Li.Ba.ba.call(this)};
p.jd=function(){this.ga||(this.V||this.u||this.j?Ui(this):this.re())};
p.re=function(){Ui(this)};
function Ui(a){if(a.i&&typeof Ja!="undefined")if(a.I[1]&&Vi(a)==4&&a.getStatus()==2)a.getStatus();else if(a.u&&Vi(a)==4)re(a.jd,0,a);else if(Dd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Wi(a))Dd(a,"complete"),Dd(a,"success");else{try{var b=Vi(a)>2?a.U.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Si(a)}}finally{Ti(a)}}}
function Ti(a,b){if(a.U){Ri(a);var c=a.U,d=a.I[0]?function(){}:null;
a.U=null;a.I=null;b||Dd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Ri(a){a.A&&(C.clearTimeout(a.A),a.A=null)}
p.isActive=function(){return!!this.U};
p.isComplete=function(){return Vi(this)==4};
function Wi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=bc(1,String(a.W)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Mi.test(a?a.toLowerCase():"");c=b}return c}
function Vi(a){return a.U?a.U.readyState:0}
p.getStatus=function(){try{return Vi(this)>2?this.U.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Xi(){}
Xi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Pi(a.url,function(d){d=d.target;if(Wi(d)){try{var e=d.U?d.U.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.od,a.timeoutMillis,a.withCredentials)};
Xi.prototype.cc=function(){return 1};function Yi(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Zi()}
Yi.prototype.start=function(){this.h=Zi()};
Yi.prototype.done=function(){this.h!=null&&this.logger.Lb(this.event,Zi()-this.h)};
function $i(){H.apply(this,arguments)}
x($i,H);function aj(a,b){var c=Zi();b=b();a.Lb("n",Zi()-c);return b}
function bj(){$i.apply(this,arguments)}
x(bj,$i);p=bj.prototype;p.ed=function(){};
p.yc=function(){};
p.Lb=function(){};
p.Ha=function(){};
p.Ga=function(){};
p.wd=function(){};
function cj(a,b,c,d,e,f){c=c===void 0?"":c;d=d===void 0?[]:d;e=e===void 0?[]:e;$i.call(this);this.Ea=a;this.V=b;this.W=c;this.G=d;this.i=e;this.I=f;this.u=new Map;this.j=new Map;this.A=void 0;this.S=!1;a=new yh;var g;((g=this.V)==null?0:fh(g))?(this.G=d.sort(function(h,k){return h-k}),this.i=e.sort(function(h,k){return h-k}),zh(a,this.G.concat(this.i))):zh(a,d);
dj(this,a);this.u.set("h",1);this.u.set("u",2);this.u.set("k",3);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4)}
x(cj,$i);p=cj.prototype;p.wd=function(a){var b;(b=this.V)!=null&&fh(b)&&(a=a.sort(function(c,d){return c-d}),this.i!==a&&(this.i=a,a=zh(new yh,this.G.concat(this.i)),dj(this,a)))};
function dj(a,b){var c=new Ai(1828,"0");c.h="27";c.network=new Xi;c.i=b;a.h&&(a.Ga(),a.h.dispose());a.o&&a.o.dispose();a.o=new Ci(1828,"","",!1,"",Bi(c));a.h=new se(a.o);a.h.o=1E5;b=a.h;b.flushInterval=3E4;b.h.setInterval(3E4);a.Xa=new ye(a.h);a.kb=new Be(a.h);a.Bb=new Ce(a.h);a.Ka=new xe(a.h);a.ea=new ze(a.h);a.ia=new Ae(a.h);a.errorCount=new Fe(a.h);a.pa=new Ee(a.h);new De(a.h);new Ge(a.h);new He(a.h);new Ie(a.h);a.ya=new we(a.h);Bc(a,a.o);Bc(a,a.h)}
p.ed=function(){var a;(a=this.ya)!=null&&a.h.zb("/client_streamz/bg/fic",this.Ea)};
p.yc=function(){var a;(a=this.kb)!=null&&a.h.zb("/client_streamz/bg/fsc","",this.Ea)};
p.Lb=function(a,b){if(a==="t"){var c;(c=this.Xa)==null||c.record(b,"",this.Ea)}else if(a==="n"){var d;(d=this.Bb)==null||d.record(b,"",this.Ea)}else if(a==="h"||a==="u"||a==="k"){if(a=this.u.get(a)){var e;(e=this.ea)!=null&&e.h.zb("/client_streamz/bg/fcc",a,this.Ea);var f;(f=this.ia)==null||f.record(b,a,this.Ea)}}else{var g;(g=this.pa)==null||g.record(b,a,"",this.W,this.Ea)}};
p.Ha=function(a){var b=this.j.get(a);if(b){var c;(c=this.Ka)!=null&&c.h.zb("/client_streamz/bg/fiec","",this.Ea,b)}else{var d;(d=this.errorCount)!=null&&d.h.zb("/client_streamz/bg/cec",a,"",this.W,this.Ea)}};
p.Ga=function(){var a=this;if(!this.I){var b;(b=this.h)==null||b.Ab()}else if(!this.S)if(b=Zi(),this.A===void 0){this.A=b;var c;(c=this.h)==null||c.Ab()}else if(c=b-this.A,c>=this.I){this.A=b;var d;(d=this.h)==null||d.Ab()}else this.S=!0,setTimeout(function(){a.ga||(a.S=!1,a.Ga())},this.I-c)};
function Zi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function pc(a){this.H=K(a)}
x(pc,L);function ej(a){this.H=K(a)}
x(ej,L);function fj(a){this.H=K(a,0,"bfkj")}
x(fj,L);var gj=function(a){return Lf(function(b){return b instanceof a&&!(of(b.H)&2)})}(fj);function hj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ij(a){function b(z,G,I,N){Promise.resolve().then(function(){n.done();d.X.Ga();m.resolve({Id:z,Re:G,Wg:I,Kg:N})})}
function c(z,G,I,N){var S="k";G?S="h":I&&(S="u");S!=="k"?N!==0&&d.X.Lb(S,z):d.j<=0?(d.X.Lb(S,z),d.j=Math.floor(Math.random()*200)):d.j--}
H.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&gj(a.challenge)){var e=gh(a.challenge,4);var f=gh(a.challenge,5);this.h=ah(a.challenge,ej,6)}else e=a.program,f=a.Yd;var g=new H;this.addOnDisposeCallback(function(){var z,G,I;return A(function(N){if(N.h==1)return N.yield(d.o,2);if(N.h!=3)return z=N.i,G=z.Re,N.yield(Promise.all(d.i),3);d.i=[];d.X.Ga();(I=G)==null||I();g.dispose();N.h=0})});
if(a.xe!==!1)if(a.X){this.X=a.X;var h;((h=this.h)==null?0:fh(h))&&this.X.wd(nc(this.h))}else{h=[];var k;if((k=this.h)==null?0:fh(k))h=nc(this.h);var l;Bc(g,this.X=new cj((l=a.Ea)!=null?l:"_",this.h,"",[],h))}else Bc(g,this.X=new bj);var m=new hj;this.o=m.promise;var n=new Yi(this.X,"t",!0);this.X.ed();if(!C[f])throw this.X.Ha(25),this.X.Ga(),Error("EGOU");if(!C[f].a)throw this.X.Ha(26),this.X.Ga(),Error("ELIU");try{var r=C[f].a;f=[[],[]];var t;if((t=this.h)==null?0:fh(t)){var w=nc(this.h);for(t=0;t<
w.length;t++)f[0].push(w[t]),f[1].push(1);var y=rc(this.h);for(w=0;w<y.length;w++)f[0].push(y[w]),f[1].push(0)}this.u=v(r(e,b,!0,a.hh,c,f)).next().value;this.Qe=m.promise.then(function(){})}catch(z){throw this.X.Ha(28),this.X.Ga(),z;
}}
x(ij,H);ij.prototype.snapshot=function(a){var b=this;if(this.ga)throw Error("Already disposed");var c=new hj;this.i.push(c.promise);this.X.yc();return this.o.then(function(d){var e=d.Id;return new Promise(function(f){var g=new Yi(b.X,"n");e(function(h){g.done();b.X.Ga();f(h)},[a.Tc,
a.Se,a.df,a.Te])})}).finally(function(){return void c.resolve()})};
ij.prototype.td=function(a){var b=this;if(this.ga)throw Error("Already disposed");this.X.yc();var c=aj(this.X,function(){return b.u([a.Tc,a.Se,a.df,a.Te])});
this.X.Ga();return c};
ij.prototype.getLogger=function(){return this.X};var jj=window;hb("csi.gstatic.com");hb("googleads.g.doubleclick.net");hb("partner.googleadservices.com");hb("pubads.g.doubleclick.net");hb("securepubads.g.doubleclick.net");hb("tpc.googlesyndication.com");function kj(a){var b=lj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function mj(){var a=[];kj(function(b){a.push(b)});
return a}
var lj={ef:"allow-forms",ff:"allow-modals",gf:"allow-orientation-lock",hf:"allow-pointer-lock",jf:"allow-popups",kf:"allow-popups-to-escape-sandbox",lf:"allow-presentation",mf:"allow-same-origin",nf:"allow-scripts",pf:"allow-top-navigation",qf:"allow-top-navigation-by-user-activation"},nj=Id(function(){return mj()});
function oj(){var a=pj(),b={};Nb(nj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function qj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var rj=(new Date).getTime();function sj(a){Cd.call(this);var b=this;this.A=this.j=0;this.Da=a!=null?a:{qa:function(e,f){return setTimeout(e,f)},
ra:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(tj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||uj(this)}
x(sj,Cd);function vj(){var a=wj;sj.h||(sj.h=new sj(a));return sj.h}
sj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.ra(this.A);delete sj.h};
sj.prototype.wa=function(){return this.i};
function uj(a){a.A=a.Da.qa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(tj(a),3):c.yield(tj(a),3);uj(a);c.h=0})},3E4)}
function tj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Da.qa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.I=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Da.ra(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Dd(a,"networkstatus-online"):Dd(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.F(3)}})})}
;function xj(){this.data=[];this.h=-1}
xj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
xj.prototype.get=function(a){return!!this.data[a]};
function yj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function zj(){this.blockSize=-1}
;function Aj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(Aj,zj);Aj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Bj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Aj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Bj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Bj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Bj(this,e);f=0;break}}this.i=f;this.o+=b}};
Aj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Bj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Cj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Dj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ej(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Cj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Fj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ej(a,"inverted-hdpi")&&Dj(a,Array.prototype.filter.call(a.classList?a.classList:Cj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Gj(){}
Gj.prototype.next=function(){return Hj};
var Hj={done:!0,value:void 0};Gj.prototype.lb=function(){return this};function Ij(a){if(a instanceof Jj||a instanceof Kj||a instanceof Lj)return a;if(typeof a.next=="function")return new Jj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Jj(function(){return a[Symbol.iterator]()});
if(typeof a.lb=="function")return new Jj(function(){return a.lb()});
throw Error("Not an iterator or iterable.");}
function Jj(a){this.h=a}
Jj.prototype.lb=function(){return new Kj(this.h())};
Jj.prototype[Symbol.iterator]=function(){return new Lj(this.h())};
Jj.prototype.i=function(){return new Lj(this.h())};
function Kj(a){this.h=a}
x(Kj,Gj);Kj.prototype.next=function(){return this.h.next()};
Kj.prototype[Symbol.iterator]=function(){return new Lj(this.h)};
Kj.prototype.i=function(){return new Lj(this.h)};
function Lj(a){Jj.call(this,function(){return a});
this.j=a}
x(Lj,Jj);Lj.prototype.next=function(){return this.j.next()};function M(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
Za(M,H);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Sb(a)}return!1};
p.Sb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Sb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.jb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Mj(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ga;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Sb(c)}}return e!=0}return!1};
function Mj(a,b,c){Xd(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Sb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){M.Ba.ba.call(this);this.clear();this.j.length=0};function Nj(a){this.h=a}
Nj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Di).serialize(b))};
Nj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Nj.prototype.remove=function(a){this.h.remove(a)};function Oj(a){this.h=a}
Za(Oj,Nj);function Pj(a){this.data=a}
function Qj(a){return a===void 0||a instanceof Pj?a:new Pj(a)}
Oj.prototype.set=function(a,b){Oj.Ba.set.call(this,a,Qj(b))};
Oj.prototype.i=function(a){a=Oj.Ba.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Oj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rj(a){this.h=a}
Za(Rj,Oj);Rj.prototype.set=function(a,b,c){if(b=Qj(b)){if(c){if(c<Ya()){Rj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}Rj.Ba.set.call(this,a,b)};
Rj.prototype.i=function(a){var b=Rj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())Rj.prototype.remove.call(this,a);else return b}};function Sj(){}
;function Tj(){}
Za(Tj,Sj);Tj.prototype[Symbol.iterator]=function(){return Ij(this.lb(!0)).i()};
Tj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Uj(a){this.h=a;this.i=null}
Za(Uj,Tj);p=Uj.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){Vj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Vj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Vj(this);this.h.removeItem(a)};
p.lb=function(a){Vj(this);var b=0,c=this.h,d=new Gj;d.next=function(){if(b>=c.length)return Hj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Vj(this);this.h.clear()};
p.key=function(a){Vj(this);return this.h.key(a)};
function Vj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Qd(Error("Storage mechanism: Storage unavailable"))}
;function Wj(){var a=null;try{a=C.localStorage||null}catch(b){}Uj.call(this,a)}
Za(Wj,Uj);function Xj(a,b){this.i=a;this.h=b+"::"}
Za(Xj,Tj);Xj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Xj.prototype.get=function(a){return this.i.get(this.h+a)};
Xj.prototype.remove=function(a){this.i.remove(this.h+a)};
Xj.prototype.lb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Gj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Yj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Jc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Zj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ak={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){return[].concat.apply([],a)}};
O.Pe=function(){Yj?(O.ib=Uint8Array,O.Ja=Uint16Array,O.Dd=Int32Array,O.assign(O,Zj)):(O.ib=Array,O.Ja=Array,O.Dd=Array,O.assign(O,ak))};
O.Pe();var bk=!0;try{new Uint8Array(1)}catch(a){bk=!1}
function ck(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.ib(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var dk={};dk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ek={},fk,gk=[],hk=0;hk<256;hk++){fk=hk;for(var ik=0;ik<8;ik++)fk=fk&1?3988292384^fk>>>1:fk>>>1;gk[hk]=fk}ek=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^gk[(a^b[d])&255];return a^-1};var jk={};jk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function kk(a){for(var b=a.length;--b>=0;)a[b]=0}
var lk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],mk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],nk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ok=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],pk=Array(576);kk(pk);var qk=Array(60);kk(qk);var rk=Array(512);kk(rk);var sk=Array(256);kk(sk);var tk=Array(29);kk(tk);var uk=Array(30);kk(uk);function vk(a,b,c,d,e){this.ud=a;this.Ud=b;this.Td=c;this.Od=d;this.pe=e;this.Zc=a&&a.length}
var wk,xk,yk;function zk(a,b){this.Vc=a;this.ub=0;this.Va=b}
function Ak(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Bk(a,b,c){a.ja>16-c?(a.oa|=b<<a.ja&65535,Ak(a,a.oa),a.oa=b>>16-a.ja,a.ja+=c-16):(a.oa|=b<<a.ja&65535,a.ja+=c)}
function Ck(a,b,c){Bk(a,c[b*2],c[b*2+1])}
function Dk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Ek(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Dk(d[e]++,e))}
function Fk(a){var b;for(b=0;b<286;b++)a.sa[b*2]=0;for(b=0;b<30;b++)a.Za[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.sa[512]=1;a.Qa=a.yb=0;a.za=a.matches=0}
function Gk(a){a.ja>8?Ak(a,a.oa):a.ja>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ja=0}
function Hk(a,b,c){Gk(a);Ak(a,c);Ak(a,~c);O.mb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Ik(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Jk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Oa;){e<a.Oa&&Ik(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Ik(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Kk(a,b,c){var d=0;if(a.za!==0){do{var e=a.aa[a.Fb+d*2]<<8|a.aa[a.Fb+d*2+1];var f=a.aa[a.xc+d];d++;if(e===0)Ck(a,f,b);else{var g=sk[f];Ck(a,g+256+1,b);var h=lk[g];h!==0&&(f-=tk[g],Bk(a,f,h));e--;g=e<256?rk[e]:rk[256+(e>>>7)];Ck(a,g,c);h=mk[g];h!==0&&(e-=uk[g],Bk(a,e,h))}}while(d<a.za)}Ck(a,256,b)}
function Lk(a,b){var c=b.Vc,d=b.Va.ud,e=b.Va.Zc,f=b.Va.Od,g,h=-1;a.Oa=0;a.pb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Oa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Oa<2;){var k=a.da[++a.Oa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Qa--;e&&(a.yb-=d[k*2+1])}b.ub=h;for(g=a.Oa>>1;g>=1;g--)Jk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Oa--],Jk(a,c,1),d=a.da[1],a.da[--a.pb]=g,a.da[--a.pb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Jk(a,c,1);while(a.Oa>=
2);a.da[--a.pb]=a.da[1];g=b.Vc;k=b.ub;d=b.Va.ud;e=b.Va.Zc;f=b.Va.Ud;var l=b.Va.Td,m=b.Va.pe,n,r=0;for(n=0;n<=15;n++)a.La[n]=0;g[a.da[a.pb]*2+1]=0;for(b=a.pb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.La[n]++;var w=0;t>=l&&(w=f[t-l]);var y=g[t*2];a.Qa+=y*(n+w);e&&(a.yb+=y*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.La[n]===0;)n--;a.La[n]--;a.La[n+1]+=2;a.La[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.La[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Qa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Ek(c,h,a.La)}
function Mk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Nk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Ck(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Ck(a,l,a.ka),g--),Ck(a,16,a.ka),Bk(a,g-3,2)):g<=10?(Ck(a,17,a.ka),Bk(a,g-3,3)):(Ck(a,18,a.ka),Bk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Ok(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.sa[c*2]!==0)return 0;if(a.sa[18]!==0||a.sa[20]!==0||a.sa[26]!==0)return 1;for(c=32;c<256;c++)if(a.sa[c*2]!==0)return 1;return 0}
var Pk=!1;function Qk(a,b,c){a.aa[a.Fb+a.za*2]=b>>>8&255;a.aa[a.Fb+a.za*2+1]=b&255;a.aa[a.xc+a.za]=c&255;a.za++;b===0?a.sa[c*2]++:(a.matches++,b--,a.sa[(sk[c]+256+1)*2]++,a.Za[(b<256?rk[b]:rk[256+(b>>>7)])*2]++);return a.za===a.Kb-1}
;function Rk(a,b){a.msg=jk[b];return b}
function Sk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Tk(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(O.mb(a.output,b.aa,b.Nb,c,a.vb),a.vb+=c,b.Nb+=c,a.Kc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Nb=0))}
function Uk(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.qc===2&&(a.M.qc=Ok(a));Lk(a,a.fc);Lk(a,a.Zb);Mk(a,a.sa,a.fc.ub);Mk(a,a.Za,a.Zb.ub);Lk(a,a.Pc);for(e=18;e>=3&&a.ka[ok[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Bk(a,b?1:0,3),Hk(a,c,d);else if(a.strategy===4||g===f)Bk(a,2+(b?1:0),3),Kk(a,pk,qk);else{Bk(a,4+(b?1:0),3);c=a.fc.ub+1;d=a.Zb.ub+1;e+=1;Bk(a,c-257,5);Bk(a,d-1,5);Bk(a,e-4,4);for(f=0;f<e;f++)Bk(a,a.ka[ok[f]*
2+1],3);Nk(a,a.sa,c-1);Nk(a,a.Za,d-1);Kk(a,a.sa,a.Za)}Fk(a);b&&Gk(a);a.va=a.v;Tk(a.M)}
function P(a,b){a.aa[a.pending++]=b}
function Vk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Wk(a,b){var c=a.gd,d=a.v,e=a.xa,f=a.hd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ia,m=a.v+258,n=h[d+e-1],r=h[d+e];a.xa>=a.Yc&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.tb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function Xk(a){var b=a.ma,c;do{var d=a.Bd-a.B-a.v;if(a.v>=b+(b-262)){O.mb(a.window,a.window,b,b,0);a.tb-=b;a.v-=b;a.va-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.mb(c,e.input,e.fb,g,f),e.state.wrap===1?e.K=dk(e.K,c,g,f):e.state.wrap===2&&(e.K=ek(e.K,c,g,f)),e.fb+=g,e.hb+=g,c=g);a.B+=c;if(a.B+a.ta>=3)for(d=a.v-a.ta,a.P=a.window[d],
a.P=(a.P<<a.Na^a.window[d+1])&a.Ma;a.ta&&!(a.P=(a.P<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Wa]=a.head[a.P],a.head[a.P]=d,d++,a.ta--,a.B+a.ta<3););}while(a.B<262&&a.M.na!==0)}
function Yk(a,b){for(var c;;){if(a.B<262){Xk(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,c=a.Ia[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.T=Wk(a,c));if(a.T>=3)if(c=Qk(a,a.v-a.tb,a.T-3),a.B-=a.T,a.T<=a.zc&&a.B>=3){a.T--;do a.v++,a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,a.Ia[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Na^a.window[a.v+1])&a.Ma;else c=Qk(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(Uk(a,!1),a.M.R===0))return 1}a.ta=a.v<2?a.v:2;return b===4?(Uk(a,!0),a.M.R===0?3:4):a.za&&(Uk(a,!1),a.M.R===0)?1:2}
function Zk(a,b){for(var c,d;;){if(a.B<262){Xk(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,c=a.Ia[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.T;a.ld=a.tb;a.T=2;c!==0&&a.xa<a.zc&&a.v-c<=a.ma-262&&(a.T=Wk(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.tb>4096)&&(a.T=2));if(a.xa>=3&&a.T<=a.xa){d=a.v+a.B-3;c=Qk(a,a.v-1-a.ld,a.xa-3);a.B-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,a.Ia[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.cb=0;a.T=2;a.v++;if(c&&(Uk(a,!1),a.M.R===0))return 1}else if(a.cb){if((c=Qk(a,0,a.window[a.v-1]))&&Uk(a,!1),a.v++,a.B--,a.M.R===0)return 1}else a.cb=1,a.v++,a.B--}a.cb&&(Qk(a,0,a.window[a.v-1]),a.cb=0);a.ta=a.v<2?a.v:2;return b===4?(Uk(a,!0),a.M.R===0?3:4):a.za&&(Uk(a,!1),a.M.R===0)?1:2}
function $k(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){Xk(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=Qk(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=Qk(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(Uk(a,!1),a.M.R===0))return 1}a.ta=0;return b===4?(Uk(a,!0),a.M.R===0?3:4):
a.za&&(Uk(a,!1),a.M.R===0)?1:2}
function al(a,b){for(var c;;){if(a.B===0&&(Xk(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=Qk(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(Uk(a,!1),a.M.R===0))return 1}a.ta=0;return b===4?(Uk(a,!0),a.M.R===0?3:4):a.za&&(Uk(a,!1),a.M.R===0)?1:2}
function bl(a,b,c,d,e){this.Zd=a;this.oe=b;this.qe=c;this.ne=d;this.Vd=e}
var cl;cl=[new bl(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.B<=1){Xk(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,Uk(a,!1),a.M.R===0)return 1;if(a.v-a.va>=a.ma-262&&(Uk(a,!1),a.M.R===0))return 1}a.ta=0;if(b===4)return Uk(a,!0),a.M.R===0?3:4;a.v>a.va&&Uk(a,!1);return 1}),
new bl(4,4,8,4,Yk),new bl(4,5,16,8,Yk),new bl(4,6,32,32,Yk),new bl(4,4,16,16,Zk),new bl(8,16,32,32,Zk),new bl(8,16,128,128,Zk),new bl(8,32,128,256,Zk),new bl(32,128,258,1024,Zk),new bl(32,258,258,4096,Zk)];
function dl(){this.M=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Nb=this.Aa=0;this.J=null;this.Ca=0;this.method=8;this.rb=-1;this.Wa=this.Mc=this.ma=0;this.window=null;this.Bd=0;this.head=this.Ia=null;this.hd=this.Yc=this.strategy=this.level=this.zc=this.gd=this.xa=this.B=this.tb=this.v=this.cb=this.ld=this.T=this.va=this.Na=this.Ma=this.vc=this.ec=this.P=0;this.sa=new O.Ja(1146);this.Za=new O.Ja(122);this.ka=new O.Ja(78);Sk(this.sa);Sk(this.Za);Sk(this.ka);this.Pc=this.Zb=this.fc=
null;this.La=new O.Ja(16);this.da=new O.Ja(573);Sk(this.da);this.pb=this.Oa=0;this.depth=new O.Ja(573);Sk(this.depth);this.ja=this.oa=this.ta=this.matches=this.yb=this.Qa=this.Fb=this.za=this.Kb=this.xc=0}
function el(a,b){if(!a||!a.state||b>5||b<0)return a?Rk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Rk(a,a.R===0?-5:-2);c.M=a;var d=c.rb;c.rb=b;if(c.status===42)if(c.wrap===2)a.K=0,P(c,31),P(c,139),P(c,8),c.J?(P(c,(c.J.text?1:0)+(c.J.Ta?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),P(c,c.J.time&255),P(c,c.J.time>>8&255),P(c,c.J.time>>16&255),P(c,c.J.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(P(c,c.J.extra.length&255),P(c,c.J.extra.length>>8&255)),c.J.Ta&&(a.K=ek(a.K,c.aa,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.Mc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Vk(c,e+(31-e%31));c.v!==0&&(Vk(c,a.K>>>16),Vk(c,a.K&65535));a.K=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Ca<(c.J.extra.length&65535)&&(c.pending!==c.Aa||
(c.J.Ta&&c.pending>e&&(a.K=ek(a.K,c.aa,c.pending-e,e)),Tk(a),e=c.pending,c.pending!==c.Aa));)P(c,c.J.extra[c.Ca]&255),c.Ca++;c.J.Ta&&c.pending>e&&(a.K=ek(a.K,c.aa,c.pending-e,e));c.Ca===c.J.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Aa&&(c.J.Ta&&c.pending>e&&(a.K=ek(a.K,c.aa,c.pending-e,e)),Tk(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.J.name.length?c.J.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(f!==0);c.J.Ta&&c.pending>
e&&(a.K=ek(a.K,c.aa,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.J.Ta&&c.pending>e&&(a.K=ek(a.K,c.aa,c.pending-e,e)),Tk(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.J.comment.length?c.J.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(f!==0);c.J.Ta&&c.pending>e&&(a.K=ek(a.K,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.Ta?(c.pending+2>c.Aa&&Tk(a),c.pending+2<=c.Aa&&(P(c,
a.K&255),P(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(Tk(a),a.R===0)return c.rb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Rk(a,-5);if(c.status===666&&a.na!==0)return Rk(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?al(c,b):c.strategy===3?$k(c,b):cl[c.level].Vd(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.rb=-1),0;if(d===2&&(b===1?(Bk(c,2,3),Ck(c,256,pk),c.ja===16?(Ak(c,c.oa),c.oa=0,c.ja=0):c.ja>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ja-=8)):b!==5&&(Bk(c,0,3),Hk(c,0,0),b===3&&(Sk(c.head),c.B===0&&(c.v=0,c.va=0,c.ta=0))),Tk(a),a.R===0))return c.rb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.K&255),P(c,a.K>>8&255),P(c,a.K>>16&255),P(c,a.K>>24&255),P(c,a.hb&255),P(c,a.hb>>8&255),P(c,a.hb>>16&255),P(c,a.hb>>24&255)):(Vk(c,a.K>>>16),Vk(c,a.K&65535));Tk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var fl={};fl=function(){this.input=null;this.hb=this.na=this.fb=0;this.output=null;this.Kc=this.R=this.vb=0;this.msg="";this.state=null;this.qc=2;this.K=0};var gl=Object.prototype.toString;
function hl(a){if(!(this instanceof hl))return new hl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new fl;this.M.R=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Rk(b,-2);else{e===8&&(e=9);var k=new dl;b.state=k;k.M=b;k.wrap=h;k.J=null;k.Mc=e;k.ma=1<<k.Mc;k.Wa=k.ma-1;k.vc=f+7;k.ec=1<<k.vc;k.Ma=k.ec-1;k.Na=~~((k.vc+3-1)/3);k.window=new O.ib(k.ma*2);k.head=new O.Ja(k.ec);k.Ia=new O.Ja(k.ma);k.Kb=1<<f+6;k.Aa=k.Kb*4;k.aa=new O.ib(k.Aa);k.Fb=1*k.Kb;k.xc=3*k.Kb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.hb=b.Kc=0;b.qc=2;c=b.state;c.pending=0;c.Nb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.rb=0;if(!Pk){d=Array(16);for(f=g=0;f<28;f++)for(tk[f]=g,e=0;e<1<<lk[f];e++)sk[g++]=f;sk[g-1]=f;for(f=g=0;f<16;f++)for(uk[f]=g,e=0;e<1<<mk[f];e++)rk[g++]=f;for(g>>=7;f<30;f++)for(uk[f]=g<<7,e=0;e<1<<mk[f]-7;e++)rk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)pk[e*2+1]=8,e++,d[8]++;for(;e<=255;)pk[e*2+1]=9,e++,d[9]++;for(;e<=279;)pk[e*2+1]=7,e++,d[7]++;for(;e<=287;)pk[e*2+1]=8,e++,d[8]++;Ek(pk,287,d);for(e=0;e<30;e++)qk[e*2+1]=5,qk[e*2]=Dk(e,5);wk=new vk(pk,lk,257,286,15);xk=new vk(qk,
mk,0,30,15);yk=new vk([],nk,0,19,7);Pk=!0}c.fc=new zk(c.sa,wk);c.Zb=new zk(c.Za,xk);c.Pc=new zk(c.ka,yk);c.oa=0;c.ja=0;Fk(c);c=0}else c=Rk(b,-2);c===0&&(b=b.state,b.Bd=2*b.ma,Sk(b.head),b.zc=cl[b.level].oe,b.Yc=cl[b.level].Zd,b.hd=cl[b.level].qe,b.gd=cl[b.level].ne,b.v=0,b.va=0,b.B=0,b.ta=0,b.T=b.xa=2,b.cb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(jk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=ck(a.dictionary):
gl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.K=dk(a.K,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(Sk(l.head),l.v=0,l.va=0,l.ta=0),c=new O.ib(l.ma),O.mb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.fb;e=a.input;a.na=g;a.fb=0;a.input=f;for(Xk(l);l.B>=3;){f=l.v;g=l.B-2;do l.P=(l.P<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Wa]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.B=2;Xk(l)}l.v+=l.B;l.va=l.v;l.ta=l.B;l.B=0;l.T=l.xa=2;l.cb=0;a.fb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(jk[b]);this.Fg=!0}}
hl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=ck(a):gl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.na=c.input.length;do{c.R===0&&(c.output=new O.ib(d),c.vb=0,c.R=d);a=el(c,e);if(a!==1&&a!==0)return il(this,a),this.ended=!0,!1;if(c.R===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.Jc(c.output,c.vb);b=f;f=f.length;if(f<65537&&(b.subarray&&bk||!b.subarray))b=
String.fromCharCode.apply(null,O.Jc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Jc(c.output,c.vb),this.chunks.push(b)}while((c.na>0||c.R===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Rk(c,-2):(c.state=null,a=d===113?Rk(c,-3):0)):a=-2,il(this,a),this.ended=!0,a===0;e===2&&(il(this,0),c.R=0);return!0};
function il(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.Wc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function jl(a,b){b=b||{};b.gzip=!0;b=new hl(b);b.push(a,!0);if(b.err)throw b.msg||jk[b.err];return b.result}
;function kl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function ll(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function ml(a){this.name=a}
;var nl=new ml("rawColdConfigGroup");var ol=new ml("rawHotConfigGroup");function pl(a){this.H=K(a)}
x(pl,L);var ql=new ml("continuationCommand");var rl=new ml("webCommandMetadata");var sl=new ml("signalServiceEndpoint");var tl={vf:"EMBEDDED_PLAYER_MODE_UNKNOWN",sf:"EMBEDDED_PLAYER_MODE_DEFAULT",uf:"EMBEDDED_PLAYER_MODE_PFP",tf:"EMBEDDED_PLAYER_MODE_PFL"};var ul=new ml("feedbackEndpoint");function vl(a){this.H=K(a)}
x(vl,L);vl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new bf(a,Ze):$e||($e=new bf(null,Ze));else if(a.constructor!==bf)if(Ye(a))a=a.length?new bf(new Uint8Array(a),Ze):$e||($e=new bf(null,Ze));else throw Error();return Ng(this,1,a)};var Qf={kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Af:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Bf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Ff:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Df:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Ef:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Cf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED"};var wl=new ml("shareEndpoint"),xl=new ml("shareEntityEndpoint"),yl=new ml("shareEntityServiceEndpoint"),zl=new ml("webPlayerShareEntityServiceEndpoint");var Al=new ml("playlistEditEndpoint");var Bl=new ml("modifyChannelNotificationPreferenceEndpoint");var Cl=new ml("unsubscribeEndpoint");var Dl=new ml("subscribeEndpoint");function El(){var a=Fl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Gl(a){D("yt.ads.biscotti.lastId_",a)}
;function Hl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Il=C.window,Jl,Kl,Ll=(Il==null?void 0:(Jl=Il.yt)==null?void 0:Jl.config_)||(Il==null?void 0:(Kl=Il.ytcfg)==null?void 0:Kl.data_)||{};D("yt.config_",Ll);function Ml(){Hl(Ll,arguments)}
function R(a,b){return a in Ll?Ll[a]:b}
function Nl(a){var b=Ll.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Ol=[];function Pl(a){Ol.forEach(function(b){return b(a)})}
function Ql(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rl(b)}}:a}
function Rl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ml("ERRORS",b));Pl(a)}
function Sl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ml("ERRORS",f))}
;var Tl=/^[\w.]*$/,Ul={q:!0,search_query:!0};function Vl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Wl(f[0]||""),h=Wl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Tb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Vl);l.args=[{key:m,value:f[1],query:a,method:Xl===n?"unchanged":n}];Ul.hasOwnProperty(m)||Sl(l)}}return c}
var Xl=String(Vl);function Yl(a){var b=[];ad(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Zl(a){a.charAt(0)==="?"&&(a=a.substring(1));return Vl(a,"&")}
function $l(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Zl(a.length>1?a[1]:a[0])):{}}
function am(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Zl(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function bm(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(bc(4,b))||null)===(Number(bc(4,a))||null):!0;return a}
function Wl(a){return a&&a.match(Tl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function cm(a){var b=dm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=rj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?jj:g;try{var h=g.history.length}catch(Ka){h=0}e.u_his=h;var k;e.u_h=(k=jj.screen)==null?void 0:k.height;var l;e.u_w=(l=jj.screen)==null?void 0:l.width;var m;e.u_ah=(m=jj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=jj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=jj.screen)==null?void 0:r.colorDepth}catch(Ka){}h=b.h;try{var t=h.screenX;var w=h.screenY}catch(Ka){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Ka){}try{var G=h.innerWidth;var I=h.innerHeight}catch(Ka){}try{var N=h.screenLeft;var S=h.screenTop}catch(Ka){}try{G=h.innerWidth,I=h.innerHeight}catch(Ka){}try{var ta=h.screen.availWidth;var lb=h.screen.availTop}catch(Ka){}t=[N,S,t,w,ta,lb,y,z,G,I];try{var T=(b.h.top||window).document,ua=T.compatMode==
"CSS1Compat"?T.documentElement:T.body;var La=(new Kd(ua.clientWidth,ua.clientHeight)).round()}catch(Ka){La=new Kd(-12245933,-12245933)}T=La;La={};var Ma=Ma===void 0?C:Ma;ua=new xj;"SVGElement"in Ma&&"createElementNS"in Ma.document&&ua.set(0);w=oj();w["allow-top-navigation-by-user-activation"]&&ua.set(1);w["allow-popups-to-escape-sandbox"]&&ua.set(2);Ma.crypto&&Ma.crypto.subtle&&ua.set(3);"TextDecoder"in Ma&&"TextEncoder"in Ma&&ua.set(4);Ma=yj(ua);La.bc=Ma;La.bih=T.height;La.biw=T.width;La.brdim=t.join();
b=b.i;b=(La.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,La.wgl=!!jj.WebGLRenderingContext,La);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var dm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Yl(cm(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var em="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function fm(){if(!em)return null;var a=em();return"open"in a?a:null}
function gm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function hm(a,b){typeof a==="function"&&(a=Ql(a));return window.setTimeout(a,b)}
;var im="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(im),["client_dev_set_cookie"]);function U(a){a=jm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function km(a,b){a=jm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function jm(a){return R("EXPERIMENT_FLAGS",{})[a]}
function lm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var mm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},nm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(im)),om=!1;
function pm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Ql(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=fm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=qm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=rm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Sl(n)}}l.send(d);return l}
function rm(a,b){b=b===void 0?{}:b;var c=bm(a),d=R("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in mm){var g=R(mm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(cc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=cc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ac(bc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=Yl(cm()));return b}
function sm(a,b){b.method="POST";b.postParams||(b.postParams={});return tm(a,b)}
function tm(a,b){var c=b.format||"JSON";a=um(a,b);var d=wm(a,b),e=!1,f=xm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=gm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=ym(a,c,k,b.convertToSafeHtml);l&&(l=zm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=hm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function um(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=am(a,b||{},!0);return a}
function wm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Zl(e),kd(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):hc(e));f=e||f&&!dd(f);!om&&f&&b.method!=="POST"&&(om=!0,Rl(Error("AJAX request with postData should use POST")));return e}
function ym(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Sl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Am(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Bm(g)})}d&&Cm(e);
return e}
function Cm(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=eb();d=new Cb(e?e.createHTML(d):d);a[c]=d}else Cm(a[b])}}
function zm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Am(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Bm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function qm(a){var b=window.location.search,c=cc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&bm(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Zl(b),f={};Nb(nm,function(g){e[g]&&(f[g]=e[g])});
return am(a,f||{},!1)}
var xm=pm;var Dm=[{Ac:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ac:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ac:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Fm={Ua:[],Sa:[{callback:Em,weight:500}]};function Em(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Gm(){this.Sa=[];this.Ua=[]}
var Hm;function Im(){if(!Hm){var a=Hm=new Gm;a.Ua.length=0;a.Sa.length=0;Fm.Ua&&a.Ua.push.apply(a.Ua,Fm.Ua);Fm.Sa&&a.Sa.push.apply(a.Sa,Fm.Sa)}return Hm}
;var Jm=new M;function Km(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Lm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Lm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Lm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Lm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Mm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Nm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Km(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Nm(f+".ve",g,h,k):0;d+=f;d+=Nm(e,a[e],b,c);if(d>500)break}}else c[b]=Om(a),d+=c[b].length;else c[b]=Om(a),d+=c[b].length;return d}
function Nm(a,b,c,d){c+="."+a;a=Om(b);d[c]=a;return c.length+a.length}
function Om(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Pm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Qm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Rm(){this.Ue=!0}
function Sm(){Rm.h||(Rm.h=new Rm);return Rm.h}
function Tm(a,b){a={};var c=[],d=U("enable_first_party_auth_v2")||(b==null?void 0:b.bd)&&U("enable_first_party_auth_v2_on_get_account_menu");"USER_SESSION_ID"in Ll&&d&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=Sh(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ll||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in
Ll&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var Um={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Vm(a,b,c,d,e){Oh.set(""+a,b,{Mb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Wm(a){return Oh.get(""+a,void 0)}
function Xm(a,b,c){Oh.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Ym(){if(U("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Oh.isEnabled())return!1;if(Oh.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?Oh.set("TESTCOOKIESENABLED","1",{Mb:60,De:"none",secure:!0}):Oh.set("TESTCOOKIESENABLED","1",{Mb:60});if(Oh.get("TESTCOOKIESENABLED")!=="1")return!1;Oh.remove("TESTCOOKIESENABLED");return!0}
;var Zm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Zm);function $m(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Wm(this.h);a&&this.parse(a)}
var an;function bn(){an||(an=new $m);return an}
p=$m.prototype;p.get=function(a,b){cn(a);dn(a);a=Zm[a]!==void 0?Zm[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){cn(a);dn(a);if(b==null)throw Error("ExpectedNotNull");Zm[a]=b.toString()};
function en(a){return!!((fn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){cn(a);dn(a);delete Zm[a]};
p.clear=function(){for(var a in Zm)delete Zm[a]};
function dn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fn(a){a=Zm[a]!==void 0?Zm[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Zm[d]=c.toString())}};var gn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function jn(){var a=C.navigator;return a?a.connection:void 0}
function kn(){var a=jn();if(a){var b=gn[a.type||"unknown"]||"CONN_UNKNOWN";a=gn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function ln(){var a=jn();if(a!=null&&a.effectiveType)return hn.hasOwnProperty(a.effectiveType)?hn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
x(V,Error);function mn(){try{return nn(),!0}catch(a){return!1}}
function nn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function on(){}
function pn(a,b){return wj.Ya(a,0,b)}
on.prototype.qa=function(a,b){return this.Ya(a,1,b)};
on.prototype.Cb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var qn=km("web_emulated_idle_callback_delay",300),rn=1E3/60-3,sn=[8,5,4,3,2,1,0];
function tn(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.W=this.h=0;this.V=this.u=!1;this.I=[];this.S=this.ea=!1;for(var b=v(sn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.pc=a.timeout||1;this.G=rn;this.A=0;this.pa=this.se.bind(this);this.Bb=this.Xe.bind(this);this.Ka=this.Hd.bind(this);this.Xa=this.ae.bind(this);this.kb=this.we.bind(this);this.ya=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.pa)}
x(tn,H);p=tn.prototype;p.Cb=function(a){var b=Ya();un(this,a);a=Ya()-b;this.u||(this.G-=a)};
p.Ya=function(a,b,c){++this.W;if(b===10)return this.Cb(a),this.W;var d=this.W;this.j[d]=a;this.u&&!c?this.I.push({id:d,priority:b}):(this.i[b].push(d),this.V||this.u||(this.h!==0&&vn(this)!==this.A&&this.stop(),this.start()));return d};
p.ra=function(a){delete this.j[a]};
function wn(a){a.I.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function xn(a){return!a.isHidden()&&a.ia}
function vn(a){if(a.i[8].length){if(a.S)return 4;if(xn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?xn(a)?3:2:1;return 0}
p.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function un(a,b){try{b()}catch(c){a.Ha(c)}}
function yn(a){for(var b=v(sn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ae=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;zn(this,b);this.ea=!1};
p.Xe=function(){zn(this)};
p.Hd=function(){An(this)};
p.we=function(a){this.S=!0;var b=vn(this);b===4&&b!==this.A&&(this.stop(),this.start());zn(this,void 0,a);this.S=!1};
p.se=function(){this.isHidden()||An(this);this.h&&(this.stop(),this.start())};
function An(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&un(a,e)}Bn(a);a.u=!1;yn(a)&&a.start();b=Ya()-b;a.G-=b}
function Bn(a){for(var b=0,c=a.I.length;b<c;b++){var d=a.I[b];a.i[d.priority].push(d.id)}a.I.length=0}
function zn(a,b,c){a.S&&a.A===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&un(a,f);d=a.ea?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&un(a,c)}while(c&&Ya()<b)}a.u=!1;Bn(a);a.G=rn;yn(a)&&a.start()}
p.start=function(){this.V=!1;if(this.h===0)switch(this.A=vn(this),this.A){case 1:var a=this.Xa;this.h=this.ya?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,qn);break;case 2:this.h=window.setTimeout(this.Bb,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.kb);break;case 4:this.h=window.setTimeout(this.Ka,0)}};
p.pause=function(){this.stop();this.V=!0};
p.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.ya?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){wn(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.pa);H.prototype.ba.call(this)};var Cn=E("yt.scheduler.instance.timerIdMap_")||{},Dn=km("kevlar_tuner_scheduler_soft_state_timer_ms",800),En=0,Fn=0;function Gn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ga)a=new tn(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Hn(){In();var a=E("ytglobal.schedulerInstanceInstance_");a&&(zc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function In(){wn(Gn());for(var a in Cn)Cn.hasOwnProperty(a)&&delete Cn[Number(a)]}
function Jn(a,b,c){if(!c)return c=c===void 0,-Gn().Ya(a,b,c);var d=window.setTimeout(function(){var e=Gn().Ya(a,b);Cn[d]=e},c);
return d}
function Kn(a){Gn().Cb(a)}
function Ln(a){var b=Gn();if(a<0)b.ra(-a);else{var c=Cn[a];c?(b.ra(c),delete Cn[a]):window.clearTimeout(a)}}
function Mn(){Nn()}
function Nn(){window.clearTimeout(En);Gn().start()}
function On(){Gn().pause();window.clearTimeout(En);En=window.setTimeout(Mn,Dn)}
function Pn(){window.clearTimeout(Fn);Fn=window.setTimeout(function(){Qn(0)},Dn)}
function Qn(a){Pn();var b=Gn();b.o=a;b.start()}
function Rn(a){Pn();var b=Gn();b.o>a&&(b.o=a,b.start())}
function Sn(){window.clearTimeout(Fn);var a=Gn();a.o=0;a.start()}
;function Tn(){on.apply(this,arguments)}
x(Tn,on);function Un(){Tn.h||(Tn.h=new Tn);return Tn.h}
Tn.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):hm(a,c||0)};
Tn.prototype.ra=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Tn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Tn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var wj=Un();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Hn),D("yt.scheduler.instance.addJob",Jn),D("yt.scheduler.instance.addImmediateJob",Kn),D("yt.scheduler.instance.cancelJob",Ln),D("yt.scheduler.instance.cancelAllJobs",In),D("yt.scheduler.instance.start",Nn),D("yt.scheduler.instance.pause",On),D("yt.scheduler.instance.setPriorityThreshold",Qn),D("yt.scheduler.instance.enablePriorityThreshold",Rn),D("yt.scheduler.instance.clearPriorityThreshold",Sn),D("yt.scheduler.initialized",
!0));function Vn(a){var b=new Wj;this.h=(a=b.isAvailable()?a?new Xj(b,a):b:null)?new Rj(a):null;this.i=document.domain||window.location.hostname}
Vn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Di).serialize(b))}catch(f){return}else e=escape(b);Vm(a,e,c,this.i)};
Vn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Wm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vn.prototype.remove=function(a){this.h&&this.h.remove(a);Xm(a,"/",this.i)};var Wn=function(){var a;return function(){a||(a=new Vn("ytidb"));return a}}();
function Xn(){var a;return(a=Wn())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yn=[],Zn,$n=!1;function ao(){var a={};for(Zn=new bo(a.handleError===void 0?co:a.handleError,a.logEvent===void 0?eo:a.logEvent);Yn.length>0;)switch(a=Yn.shift(),a.type){case "ERROR":Zn.Ha(a.payload);break;case "EVENT":Zn.logEvent(a.eventType,a.payload)}}
function fo(a){$n||(Zn?Zn.Ha(a):(Yn.push({type:"ERROR",payload:a}),Yn.length>10&&Yn.shift()))}
function go(a,b){$n||(Zn?Zn.logEvent(a,b):(Yn.push({type:"EVENT",eventType:a,payload:b}),Yn.length>10&&Yn.shift()))}
;function ho(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function io(a){return a.substr(0,a.indexOf(":"))||a}
;var jo=Je||Ke;function ko(a){var b=Gc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var lo={},mo=(lo.AUTH_INVALID="No user identifier specified.",lo.EXPLICIT_ABORT="Transaction was explicitly aborted.",lo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",lo.MISSING_INDEX="Index not created.",lo.MISSING_OBJECT_STORES="Object stores not created.",lo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",lo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",lo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
lo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",lo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",lo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",lo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",lo),no={},oo=(no.AUTH_INVALID="ERROR",no.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",no.EXPLICIT_ABORT="IGNORED",no.IDB_NOT_SUPPORTED="ERROR",no.MISSING_INDEX=
"WARNING",no.MISSING_OBJECT_STORES="ERROR",no.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",no.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",no.QUOTA_EXCEEDED="WARNING",no.QUOTA_MAYBE_EXCEEDED="WARNING",no.UNKNOWN_ABORT="WARNING",no.INCOMPATIBLE_DB_VERSION="WARNING",no),po={},qo=(po.AUTH_INVALID=!1,po.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,po.EXPLICIT_ABORT=!1,po.IDB_NOT_SUPPORTED=!1,po.MISSING_INDEX=!1,po.MISSING_OBJECT_STORES=!1,po.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,po.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,po.QUOTA_EXCEEDED=!1,po.QUOTA_MAYBE_EXCEEDED=!0,po.UNKNOWN_ABORT=!0,po.INCOMPATIBLE_DB_VERSION=!1,po);function ro(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?mo[a]:c;d=d===void 0?oo[a]:d;e=e===void 0?qo[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,ro.prototype)}
x(ro,V);function so(a,b){ro.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,so.prototype)}
x(so,ro);function to(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,to.prototype)}
x(to,Error);var uo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vo(a,b,c,d){b=io(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof ro)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new ro("QUOTA_EXCEEDED",a);if(Le&&e.name==="UnknownError")return new ro("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof to)return new ro("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&uo.some(function(f){return e.message.includes(f)}))return new ro("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new ro("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",kd:e.name})];e.level="WARNING";return e}
function wo(a,b,c){var d=Xn();return new ro("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function xo(a){if(!a)throw Error();throw a;}
function yo(a){return a}
function zo(a){this.h=a}
function Ao(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ao.all=function(a){return new Ao(new zo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={qb:0};f.qb<a.length;f={qb:f.qb},++f.qb)Ao.resolve(a[f.qb]).then(function(g){return function(h){d[g.qb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Ao.resolve=function(a){return new Ao(new zo(function(b,c){a instanceof Ao?a.then(b,c):b(a)}))};
Ao.reject=function(a){return new Ao(new zo(function(b,c){c(a)}))};
Ao.prototype.then=function(a,b){var c=this,d=a!=null?a:yo,e=b!=null?b:xo;return new Ao(new zo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Bo(c,c,d,f,g)}),c.i.push(function(){Co(c,c,e,f,g)})):c.state.status==="FULFILLED"?Bo(c,c,d,f,g):c.state.status==="REJECTED"&&Co(c,c,e,f,g)}))};
Ao.prototype.catch=function(a){return this.then(void 0,a)};
function Bo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ao?Do(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Co(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ao?Do(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Do(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ao?Do(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Eo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fo(a){return new Promise(function(b,c){Eo(a,b,c)})}
function Go(a){return new Ao(new zo(function(b,c){Eo(a,b,c)}))}
;function Ho(a,b){return new Ao(new zo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Io=window,W=Io.ytcsi&&Io.ytcsi.now?Io.ytcsi.now:Io.performance&&Io.performance.timing&&Io.performance.now&&Io.performance.timing.navigationStart?function(){return Io.performance.timing.navigationStart+Io.performance.now()}:function(){return(new Date).getTime()};function Jo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
p=Jo.prototype;p.add=function(a,b,c){return Ko(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Ko(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Ko(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function Lo(a,b,c){a=a.h.createObjectStore(b,c);return new Mo(a)}
p.delete=function(a,b){return Ko(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Ko(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function No(a,b,c){return Ko(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return Go(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ko(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,y;return A(function(z){switch(z.h){case 1:var G={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){z.F(4);break}g++;k=Math.round(W());ya(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var I=new Oo(l);I=Po(I,d);return G.call(z,I,7);case 7:return m=z.i,n=Math.round(W()),Qo(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=za(z);t=Math.round(W());w=vo(r,
a.h.name,b.join(),a.h.version);if((y=w instanceof ro&&!w.h)||g>=f)Qo(a,k,t,g,w,b.join(),e),h=w;z.F(2);break;case 4:return z.return(Promise.reject(h))}})}
function Qo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof ro&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&go("QUOTA_EXCEEDED",{dbName:io(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof ro&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),go("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Ro(a,!1,d,f,b,g.tag),fo(e)):Ro(a,!0,d,f,b,g.tag)}
function Ro(a,b,c,d,e,f){go("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Mo(a){this.h=a}
p=Mo.prototype;p.add=function(a,b){return Go(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Go(this.h.clear()).then(function(){})};
function So(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Go(this.h.count(a))};
function To(a,b){return Uo(a,{query:b},function(c){return c.delete().then(function(){return Vo(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?To(this,a):Go(this.h.delete(a))};
p.get=function(a){return Go(this.h.get(a))};
p.index=function(a){try{return new Wo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new to(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Uo(a,b,c){a=a.h.openCursor(b.query,b.direction);return Xo(a).then(function(d){return Ho(d,c)})}
function Oo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=ro;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Po(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Oo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new ro("EXPLICIT_ABORT");};
Oo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Mo(a),this.i.set(a,b));return b};
function Wo(a){this.h=a}
p=Wo.prototype;p.count=function(a){return Go(this.h.count(a))};
p.delete=function(a){return Yo(this,{query:a},function(b){return b.delete().then(function(){return Vo(b)})})};
p.get=function(a){return Go(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function Yo(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Xo(a).then(function(d){return Ho(d,c)})}
function Zo(a,b){this.request=a;this.cursor=b}
function Xo(a){return Go(a).then(function(b){return b?new Zo(a,b):null})}
function Vo(a){a.cursor.continue(void 0);return Xo(a.request)}
Zo.prototype.delete=function(){return Go(this.cursor.delete()).then(function(){})};
Zo.prototype.getValue=function(){return this.cursor.value};
Zo.prototype.update=function(a){return Go(this.cursor.update(a))};function $o(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Jo(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Jd,k=c.blocking,l=c.Ve,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&go("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:io(a)});var w=f(),y=new Oo(g.transaction);
m&&m(w,function(z){return t.oldVersion<z&&t.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){go("IDB_UNEXPECTEDLY_CLOSED",{dbName:io(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ap(a,b,c){c=c===void 0?{}:c;return $o(a,b,c)}
function bp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Jd)&&c.addEventListener("blocked",function(){e()}),g.yield(Fo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=za(g),vo(f,a,"",-1);})}
;function cp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
cp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return ap(a,b,c)};
cp.prototype.delete=function(a){a=a===void 0?{}:a;return bp(this.name,a)};
function dp(a,b){return new ro("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function ep(a,b){if(!b)throw wo("openWithToken",io(a.name));return a.open()}
cp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return A(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,G=c.options,I=[],N=v(Object.keys(G.wb)),S=N.next();!S.done;S=N.next()){S=S.value;var ta=G.wb[S],lb=ta.ye===void 0?Number.MAX_VALUE:ta.ye;!(z.h.version>=ta.Eb)||z.h.version>=lb||z.h.objectStoreNames.contains(S)||I.push(S)}k=I;if(k.length===0){y.F(5);break}l=Object.keys(c.options.wb);
m=h.objectStoreNames();if(c.D<km("ytidb_reopen_db_retries",0))return c.D++,h.close(),fo(new ro("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<km("ytidb_remake_db_retries",1))){y.F(6);break}c.o++;return y.yield(c.delete(),7);case 7:return fo(new ro("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new so(m,l);case 5:return y.return(h);case 2:n=za(y);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){y.F(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=y.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,dp(c,t);return y.return(r);case 8:throw b(),n instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),vo(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw dp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ve:b,upgrade:this.options.upgrade};return this.h=d=a()};var fp=new cp("YtIdbMeta",{wb:{databases:{Eb:1}},upgrade:function(a,b){b(1)&&Lo(a,"databases",{keyPath:"actualName"})}});
function gp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(ep(fp,b),2);c=d.i;return d.return(Ko(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Go(f.h.put(a,void 0)).then(function(){})})}))})}
function hp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(ep(fp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function ip(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(ep(fp,b),2)):e.h!=3?(d=e.i,e.yield(Ko(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return Uo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Vo(g)})}),3)):e.return(c)})}
function jp(a){return ip(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function kp(a,b,c){return ip(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function lp(a){var b,c;return A(function(d){if(d.h==1)return b=nn("YtIdbMeta hasAnyMeta other"),d.yield(ip(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var mp,np=new function(){}(new function(){});
function op(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Xn();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jo)f=/WebKit\/([0-9]+)/.exec(Gc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Gc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Sc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(gp(d,np),4);case 4:return e.yield(hp("yt-idb-test-do-not-use",np),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function pp(){if(mp!==void 0)return mp;$n=!0;return mp=op().then(function(a){$n=!1;var b;if((b=Wn())!=null&&b.h){var c;b={hasSucceededOnce:((c=Xn())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Wn())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function qp(){return E("ytglobal.idbToken_")||void 0}
function rp(){var a=qp();return a?Promise.resolve(a):pp().then(function(b){(b=b?np:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var sp=0;function tp(a,b){sp||(sp=wj.qa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(rp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(kp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(bp(f.actualName),7);case 7:return h.yield(hp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=za(h),fo(g),d=!1;case 4:wj.ra(sp),sp=0,d&&tp(a,b),h.h=0}})}))}
function up(){var a;return A(function(b){return b.h==1?b.yield(rp(),2):(a=b.i)?b.return(lp(a)):b.return(!1)})}
new hj;function vp(a){if(!mn())throw a=new ro("AUTH_INVALID",{dbName:a}),fo(a),a;var b=nn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function wp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(rp(),2);case 2:g=m.i;if(!g)throw h=wo("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),fo(h),h;ho(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:vp(a);ya(m,3);return m.yield(gp(k,g),5);case 5:return m.yield(ap(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),ya(m,7),m.yield(hp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:za(m);case 8:throw l;}})}
function xp(a,b,c){c=c===void 0?{}:c;return wp(a,b,!1,c)}
function yp(a,b,c){c=c===void 0?{}:c;return wp(a,b,!0,c)}
function zp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(rp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();ho(a);d=vp(a);return e.yield(bp(d.actualName,b),3)}return e.yield(hp(d.actualName,c),0)})}
function Ap(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(bp(d.actualName,b),2):e.yield(hp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Bp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(rp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();ho("LogsDatabaseV2");return d.yield(jp(b),3)}c=d.i;return d.yield(Ap(c,a,b),0)})}
function Cp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(rp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();ho(a);return d.yield(bp(a,b),3)}return d.yield(hp(a,c),0)})}
;function Dp(a,b){cp.call(this,a,b);this.options=b;ho(a)}
x(Dp,cp);function Ep(a,b){var c;return function(){c||(c=new Dp(a,b));return c}}
Dp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?yp:xp)(a,b,Object.assign({},c))};
Dp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Cp:zp)(this.name,a)};
function Fp(a,b){return Ep(a,b)}
;var Gp={},Hp=Fp("ytGcfConfig",{wb:(Gp.coldConfigStore={Eb:1},Gp.hotConfigStore={Eb:1},Gp),shared:!1,upgrade:function(a,b){b(1)&&(So(Lo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),So(Lo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Ip(a){return ep(Hp(),a)}
function Jp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Ip(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(No(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Kp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Ip(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(No(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Lp(a){var b,c;return A(function(d){return d.h==1?d.yield(Ip(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Ko(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return Yo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Mp(a){var b,c;return A(function(d){return d.h==1?d.yield(Ip(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Ko(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return Yo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Np(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ja(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(Np,H);Np.prototype.ba=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function Op(){this.h=0;this.i=new Np}
function Pp(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function Qp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=qp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Mp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Jp(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Rp(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=qp())?c?h.F(4):h.yield(Lp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Kp(c,b,g,d),0)})}
function Sp(){if(!Op.h){var a=new Op;Op.h=a}a=Op.h;var b=W()-a.h;if(!(a.h!==0&&b<km("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Op.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Tp(){return"INNERTUBE_API_KEY"in Ll&&"INNERTUBE_API_VERSION"in Ll}
function Up(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),be:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Og:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),de:R("INNERTUBE_CONTEXT_HL"),ce:R("INNERTUBE_CONTEXT_GL"),ee:R("INNERTUBE_HOST_OVERRIDE")||"",he:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ge:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Vp(a){var b={client:{hl:a.de,gl:a.ce,clientName:a.cd,clientVersion:a.innertubeContextClientVersion,configInfo:a.be}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=lm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.cd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Qm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=kn())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=ln())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=Sp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Zl(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Wp(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Gg:(a=Tm(Sm()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Xp=typeof TextEncoder!=="undefined"?new TextEncoder:null,Yp=Xp?function(a){return Xp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Zp(a,b){this.version=a;this.args=b}
Zp.prototype.serialize=function(){return{version:this.version,args:this.args}};function $p(a,b){this.topic=a;this.h=b}
$p.prototype.toString=function(){return this.topic};var aq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.jb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",aq);var bq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",bq);var cq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",cq);var dq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",dq);
D("ytPubsub2Pubsub2SkipSubKey",null);function eq(a,b){var c=fq();c&&c.publish.call(c,a.toString(),a,b)}
function gq(a){var b=hq,c=fq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(bq[d])try{if(f&&b instanceof $p&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.zd){var l=new h;h.zd=l.version}var m=h.zd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var w=Array(t);for(k=0;k<t;k++)w[k]=r[k];var y=w}else y=[];f=n.call(m,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Rl(z)}},dq[b.toString()]?E("yt.scheduler.instance")?wj.qa(g):hm(g,0):g())});
bq[d]=!0;cq[b.toString()]||(cq[b.toString()]=[]);cq[b.toString()].push(d);return d}
function iq(){var a=jq,b=gq(function(c){a.apply(void 0,arguments);kq(b)});
return b}
function kq(a){var b=fq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete bq[c]}))}
function fq(){return E("ytPubsub2Pubsub2Instance")}
;function lq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&eq("meta_logging_csi_event",{timerName:a,gh:b})}
;var mq=void 0,nq=void 0;function oq(){nq||(nq=kl(R("WORKER_SERIALIZATION_URL")));return nq||void 0}
function pq(){var a=oq();mq||a===void 0||(mq=new Worker(jb(a),void 0));return mq}
;var qq=km("max_body_size_to_compress",5E5),rq=km("min_body_size_to_compress",500),sq=!0,tq=0,uq=0,vq=km("compression_performance_threshold_lr",250),wq=km("slow_compressions_before_abandon_count",4),xq=!1,yq=new Map,zq=1,Aq=!0;function Bq(){if(typeof Worker==="function"&&oq()&&!xq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=yq.get(c.key);d&&(Cq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),yq.delete(c.key))}},b=pq();
b&&(b.addEventListener("message",a),b.onerror=function(){yq.clear()},xq=!0)}}
function Dq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(sq)try{var g=Eq(b);if(g!=null&&(g>qq||g<rq))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!Aq||!U("initial_gzip_use_main_thread"))){xq||Bq();var h=pq();if(h&&!e){yq.set(zq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:zq});zq++;return}}var k=jl(Yp(b));Cq(k,f,a,c,d)}}catch(l){Sl(l),d(a,c)}else d(a,c)}
function Cq(a,b,c,d,e){Aq=!1;var f=W();b.ticks.gelc=f;uq++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=vq&&(tq++,U("abandon_compression_after_N_slow_zips")?uq===km("compression_disable_point")&&tq>wq&&(sq=!1):sq=!1);Fq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Gq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(sq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Eq(g);if(h!=null&&(h>qq||h<rq))return a;c=b?{level:1}:void 0;f=jl(Yp(g),c);var k=W();e.ticks.gelc=k;if(b){uq++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=vq)if(tq++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=tq/uq;var l=wq/km("compression_disable_point");uq>0&&uq%km("compression_disable_point")===0&&b>=l&&(sq=!1)}else sq=!1;Fq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Sl(m),a}}else return a}
function Eq(a){try{return(new Blob(a.split(""))).size}catch(b){return Sl(b),null}}
function Fq(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||lq("gel_compression",a,{sampleRate:.1})}
;function Hq(a){a=Object.assign({},a);delete a.Authorization;var b=Sh();if(b){var c=new Aj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Oe(c.digest(),3)}return a}
;var Iq;function Jq(){Iq||(Iq=new Vn("yt.innertube"));return Iq}
function Kq(a,b,c,d){if(d)return null;d=Jq().get("nextId",!0)||1;var e=Jq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Hq(c),requestTime:Math.round(W())};Jq().set("nextId",d+1,86400,!0);Jq().set("requests",e,86400,!0);return d}
function Lq(a){var b=Jq().get("requests",!0)||{};delete b[a];Jq().set("requests",b,86400,!0)}
function Mq(a){var b=Jq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=Hq(Wp(!1));gd(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Nq(a,d.method,e,{}));delete b[c]}}Jq().set("requests",b,86400,!0)}}
;function Oq(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ob=function(){};
this.now=Date.now;this.Hb=!1;var b;this.vd=(b=a.vd)!=null?b:100;var c;this.qd=(c=a.qd)!=null?c:1;var d;this.nd=(d=a.nd)!=null?d:2592E6;var e;this.md=(e=a.md)!=null?e:12E4;var f;this.pd=(f=a.pd)!=null?f:5E3;var g;this.Y=(g=a.Y)!=null?g:void 0;this.ac=!!a.ac;var h;this.Yb=(h=a.Yb)!=null?h:.1;var k;this.jc=(k=a.jc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.ob&&(this.ob=a.ob);a.Hb&&(this.Hb=a.Hb);a.Vb&&(this.Vb=a.Vb);this.Z=a.Z;this.Da=a.Da;this.ha=a.ha;this.fa=a.fa;this.sendFn=a.sendFn;
this.Gc=a.Gc;this.Dc=a.Dc;Pq(this)&&(!this.Z||this.Z("networkless_logging"))&&Qq(this)}
function Qq(a){Pq(a)&&!a.Hb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.ha.Kd(a.Y),Rq(a),a.fa.wa()&&a.Rb(),a.fa.listen(a.Gc,a.Rb.bind(a)),a.fa.listen(a.Dc,a.Qc.bind(a)))}
p=Oq.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Pq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(d,this.Y).then(function(e){d.id=e;c.fa.wa()&&Sq(c,d)}).catch(function(e){Sq(c,d);
Tq(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Pq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z&&this.Z("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.wa()||this.Z&&this.Z("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ha.set(e,d.Y).catch(function(l){Tq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ha.set(e,this.Y).catch(function(g){d.sendFn(a,b,e.skipRetry);
Tq(d,g)})}else this.sendFn(a,b,this.Z&&this.Z("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Pq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ha.nb(d.id,c.Y):e=!0;c.fa.eb&&c.Z&&c.Z("vss_network_hint")&&c.fa.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ha.set(d,this.Y).then(function(g){d.id=g;e&&c.ha.nb(d.id,c.Y)}).catch(function(g){Tq(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Rb=function(){var a=this;if(!Pq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.qa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ha.Xc("NEW",a.Y),2);if(c.h!=3)return b=c.i,b?c.yield(Sq(a,b),3):(a.Qc(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.vd))};
p.Qc=function(){this.Da.ra(this.i);this.i=0};
function Sq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Pq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.ha.le(b.id,a.Y),3);case 3:(c=d.i)||a.ob(Error("The request cannot be found in the database."));case 2:if(Uq(a,b,a.nd)){d.F(4);break}a.ob(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.ha.nb(b.id,a.Y),5);case 5:return d.return();case 4:b.skipRetry||(b=Vq(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.ha.nb(b.id,a.Y),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Vq(a,b){if(!Pq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=Wq(f);(h=Xq(f))&&a.Z&&a.Z("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Z&&a.Z("nwl_consider_error_code")&&g||a.Z&&!a.Z("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){m.F(2);break}if(!a.fa.nc){m.F(3);break}return m.yield(a.fa.nc(),3);case 3:if(a.fa.wa()){m.F(2);break}c(e,f);if(!a.Z||!a.Z("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.ha.Hc(b.id,a.Y,!1),6);case 6:return m.return();case 2:if(a.Z&&a.Z("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.qd?m.yield(a.ha.Hc(b.id,a.Y,!0,h?!1:void 0),12):m.yield(a.ha.nb(b.id,a.Y),8);case 12:a.Da.qa(function(){a.fa.wa()&&a.Rb()},a.pd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.ha.nb(b.id,a.Y),2);a.fa.eb&&a.Z&&a.Z("vss_network_hint")&&a.fa.eb(!0);d(e,f);h.h=0})};
return b}
function Uq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Rq(a){if(!Pq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.Xc("QUEUED",a.Y).then(function(b){b&&!Uq(a,b,a.md)?a.Da.qa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.ha.Hc(b.id,a.Y),2);Rq(a);c.h=0})}):a.fa.wa()&&a.Rb()})}
function Tq(a,b){a.Cd&&!a.fa.wa()?a.Cd(b):a.handleError(b)}
function Pq(a){return!!a.Y||a.Vb}
function Wq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Xq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Yq;
function Zq(){if(Yq)return Yq();var a={};Yq=Fp("LogsDatabaseV2",{wb:(a.LogsRequestsStore={Eb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Lo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),So(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Yq()}
;function $q(a){return ep(Zq(),a)}
function ar(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield($q(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(No(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();br(c);return g.return(f)})}
function cr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield($q(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Ko(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(n){return Yo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();br(c);return m.return(l)})}
function dr(a,b){var c;return A(function(d){if(d.h==1)return d.yield($q(b),2);c=d.i;return d.return(Ko(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Go(f.h.put(g,void 0)).then(function(){return g})})}))})}
function er(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield($q(b),2);e=f.i;return f.return(Ko(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Go(h.h.put(k,void 0)).then(function(){return k})):Ao.resolve(void 0)})}))})}
function fr(a,b){var c;return A(function(d){if(d.h==1)return d.yield($q(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function gr(a){var b,c;return A(function(d){if(d.h==1)return d.yield($q(a),2);b=d.i;c=W()-2592E6;return d.yield(Ko(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return Uo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Vo(f)})})}),0)})}
function hr(){A(function(a){return a.yield(Bp(),0)})}
function br(a){U("nwl_csi_killswitch")||lq("networkless_performance",a,{sampleRate:1})}
;var ir={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var jr={},kr=Fp("ServiceWorkerLogsDatabase",{wb:(jr.SWHealthLog={Eb:1},jr),shared:!0,upgrade:function(a,b){b(1)&&So(Lo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function lr(a){return ep(kr(),a)}
function mr(a){var b,c;A(function(d){if(d.h==1)return d.yield(lr(a),2);b=d.i;c=W()-2592E6;return d.yield(Ko(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return Uo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Vo(f)})})}),0)})}
function nr(a){var b;return A(function(c){if(c.h==1)return c.yield(lr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var or={},pr=0;function qr(a){var b=new Image,c=""+pr++;or[c]=b;b.onload=b.onerror=function(){delete or[c]};
b.src=a}
;var rr;function sr(){rr||(rr=new Vn("yt.offline"));return rr}
function tr(a){if(U("offline_error_handling")){var b=sr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);sr().set("errors",b,2592E3,!0)}}
;function ur(){this.h=new Map;this.i=!1}
function vr(){if(!ur.h){var a=E("yt.networkRequestMonitor.instance")||new ur;D("yt.networkRequestMonitor.instance",a);ur.h=a}return ur.h}
ur.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ur.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
ur.prototype.removeParams=function(a){return a.split("?")[0]};
ur.prototype.removeParams=ur.prototype.removeParams;ur.prototype.isEndpointCFR=ur.prototype.isEndpointCFR;ur.prototype.requestComplete=ur.prototype.requestComplete;ur.getInstance=vr;function wr(){Cd.call(this);var a=this;this.j=!1;this.i=vj();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=sr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Rl(d)}sr().set("errors",{},2592E3,!0)}}})}
x(wr,Cd);function xr(){if(!wr.h){var a=E("yt.networkStatusManager.instance")||new wr;D("yt.networkStatusManager.instance",a);wr.h=a}return wr.h}
p=wr.prototype;p.wa=function(){return this.i.wa()};
p.eb=function(a){this.i.i=a};
p.Xd=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Pd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.nc=function(a){a=tj(this.i,a);a.then(function(b){U("use_cfr_monitor")&&vr().requestComplete("generate_204",b)});
return a};
wr.prototype.sendNetworkCheckRequest=wr.prototype.nc;wr.prototype.listen=wr.prototype.listen;wr.prototype.enableErrorFlushing=wr.prototype.Pd;wr.prototype.getWindowStatus=wr.prototype.Xd;wr.prototype.networkStatusHint=wr.prototype.eb;wr.prototype.isNetworkAvailable=wr.prototype.wa;wr.getInstance=xr;function yr(a){a=a===void 0?{}:a;Cd.call(this);var b=this;this.i=this.u=0;this.j=xr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){zr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Dd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Dd(b,"publicytnetworkstatus-offline")})))}
x(yr,Cd);yr.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
yr.prototype.eb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
yr.prototype.nc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&vr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function zr(a,b){a.rateLimit?a.i?(wj.ra(a.u),a.u=wj.qa(function(){a.o!==b&&(Dd(a,b),a.o=b,a.i=W())},a.rateLimit-(W()-a.i))):(Dd(a,b),a.o=b,a.i=W()):Dd(a,b)}
;var Ar;function Br(){var a=Oq.call;Ar||(Ar=new yr({Tg:!0,Mg:!0}));a.call(Oq,this,{ha:{Kd:gr,nb:fr,Xc:cr,le:dr,Hc:er,set:ar},fa:Ar,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Sl(new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Rl(b)},
ob:Sl,sendFn:Cr,now:W,Cd:tr,Da:Un(),Gc:"publicytnetworkstatus-online",Dc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,jc:km("potential_esf_error_limit",10),Z:U,Hb:!(mn()&&Dr())});this.j=new hj;U("networkless_immediately_drop_all_requests")&&hr();Cp("LogsDatabaseV2")}
x(Br,Oq);function Er(){var a=E("yt.networklessRequestController.instance");a||(a=new Br,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&rp().then(function(b){a.Y=b;Qq(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.Y&&mr(a.Y);U("networkless_immediately_drop_sw_health_store")&&Fr(a)}));
return a}
Br.prototype.writeThenSend=function(a,b){b||(b={});b=Gr(a,b);mn()||(this.h=!1);Oq.prototype.writeThenSend.call(this,a,b)};
Br.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Gr(a,b);mn()||(this.h=!1);Oq.prototype.sendThenWrite.call(this,a,b,c)};
Br.prototype.sendAndWrite=function(a,b){b||(b={});b=Gr(a,b);mn()||(this.h=!1);Oq.prototype.sendAndWrite.call(this,a,b)};
Br.prototype.awaitInitialization=function(){return this.j.promise};
function Fr(a){var b;A(function(c){if(!a.Y)throw b=wo("clearSWHealthLogsDb"),b;return c.return(nr(a.Y).catch(function(d){a.handleError(d)}))})}
function Cr(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Kr(a,b);if(U("use_request_time_ms_header"))b.headers&&bm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)pm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)pm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.o){var l=ac(bc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(kc),r=jc(a,0,"ri",n);if(r<0)var t=null;else{var w=a.indexOf("&",r);if(w<0||w>n)w=n;t=decodeURIComponent(a.slice(r+3,w!==-1?w:0).replace(/\+/g," "))}m=t!=="1"}var y=!m;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=
!1;c||qr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Dq(a,b.postBody,b,tm,d)):Dq(a,JSON.stringify(b.postParams),b,sm,d):tm(a,b)}
function Gr(a,b){U("use_event_time_ms_header")&&bm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Kr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){vr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){vr().requestComplete(a,!0);d(e,f)}}
function Dr(){return cc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Lr=!1,Mr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Lr};D("ytNetworklessLoggingInitializationOptions",Mr);function Nr(){var a;A(function(b){if(b.h==1)return b.yield(rp(),2);a=b.i;if(!a||!mn()&&!U("nwl_init_require_datasync_id_killswitch")||!Dr())return b.F(0);Lr=!0;Mr.isNwlInitialized=Lr;return b.yield(Er().awaitInitialization(),0)})}
;function Or(a){var b=this;this.config_=null;a?this.config_=a:Tp()&&(this.config_=Up());pn(function(){Mq(b)},5E3)}
Or.prototype.isReady=function(){!this.config_&&Tp()&&(this.config_=Up());return!!this.config_};
function Nq(a,b,c,d){function e(w){w=w===void 0?!1:w;var y;if(d.retry&&h!="www.youtube-nocookie.com"&&(w||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(y=Kq(b,c,l,k)),y)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(S,ta){Lq(y);z(S,ta)};
c.onFetchSuccess=function(S,ta){Lq(y);G(S,ta)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Er().writeThenSend(t,g):Er().sendAndWrite(t,g);
else if(d.compress){var I=!d.networklessOptions.writeThenSend;if(g.postBody){var N=g.postBody;typeof N!=="string"&&(N=JSON.stringify(g.postBody));Dq(t,N,g,tm,I)}else Dq(t,JSON.stringify(g.postParams),g,sm,I)}else U("web_all_payloads_via_jspb")?tm(t,g):sm(t,g)}catch(S){if(S.name==="InvalidAccessError")y&&(Lq(y),y=0),Sl(Error("An extension is blocking network request."));else throw S;}y&&pn(function(){Mq(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Sl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);Rl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,y){if(d.onError)d.onError(y)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ee)&&(h=f);var k=a.config_.he||!1,l=Wp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=a.config_.ge&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.innertubeApiKey);var t=am(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Mr.isNwlInitialized:Lr)?pp().then(function(w){e(w)}):e(!1)}
;var Pr=0,Qr=Uc?"webkit":Tc?"moz":Rc?"ms":Qc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Pr});var Rr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Tr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Sr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var cd=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",cd);var Ur=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Ur);
function Vr(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bd(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&gd(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Wr(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vr(a,b,c,d);if(e)return e;e=++Ur.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sr(h);if(!Nd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sr(h);
h.currentTarget=a;return c.call(a,h)};
g=Ql(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xr()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);cd[e]=[a,b,c,g,d];return e}
function Yr(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in cd){var c=cd[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xr()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete cd[b]}}))}
var Xr=Id(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Zr(a){this.G=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.S=Wr(window,"mousemove",Wa(this.V,this));a=Wa(this.I,this);typeof a==="function"&&(a=Ql(a));this.W=window.setInterval(a,25)}
Za(Zr,H);Zr.prototype.V=function(a){a.h===void 0&&Tr(a);var b=a.h;a.i===void 0&&Tr(a);this.h=new Jd(b,a.i)};
Zr.prototype.I=function(){if(this.h){var a=W();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
Zr.prototype.ba=function(){window.clearInterval(this.W);Yr(this.S)};var $r={};
function as(a){var b=a===void 0?{}:a;a=b.ue===void 0?!1:b.ue;b=b.Qd===void 0?!0:b.Qd;if(E("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&bs();Wr(document,"keydown",bs);Wr(document,"keyup",bs);Wr(document,"mousedown",bs);Wr(document,"mouseup",bs);a?Wr(window,"touchmove",function(){cs("touchmove",200)},{passive:!0}):(Wr(window,"resize",function(){cs("resize",200)}),b&&Wr(window,"scroll",function(){cs("scroll",200)}));
new Zr(function(){cs("mouse",100)});
Wr(document,"touchstart",bs,{passive:!0});Wr(document,"touchend",bs,{passive:!0})}}
function cs(a,b){$r[a]||($r[a]=!0,wj.qa(function(){bs();$r[a]=!1},b))}
function bs(){E("_lact",window)==null&&as();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function ds(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var es=C.ytPubsubPubsubInstance||new M,gs=C.ytPubsubPubsubSubscribedKeys||{},hs=C.ytPubsubPubsubTopicToKeys||{},is=C.ytPubsubPubsubIsSynchronous||{};function js(a,b){var c=ks();if(c&&b){var d=c.subscribe(a,function(){function e(){gs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{is[a]?e():hm(e,0)}catch(g){Rl(g)}},void 0);
gs[d]=!0;hs[a]||(hs[a]=[]);hs[a].push(d);return d}return 0}
function ls(a){var b=ks();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete gs[c]}))}
function ms(a,b){var c=ks();c&&c.publish.apply(c,arguments)}
function ns(a){var b=ks();if(b)if(b.clear(a),a)ps(a);else for(var c in hs)ps(c)}
function ks(){return C.ytPubsubPubsubInstance}
function ps(a){hs[a]&&(a=hs[a],Nb(a,function(b){gs[b]&&delete gs[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.jb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",es);D("ytPubsubPubsubTopicToKeys",hs);D("ytPubsubPubsubIsSynchronous",is);D("ytPubsubPubsubSubscribedKeys",gs);var qs=Symbol("injectionDeps");function rs(a){this.name=a}
rs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ss(a){this.key=a}
function ts(){this.i=new Map;this.j=new Map;this.h=new Map}
function us(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);if(c)try{c.bh(a.resolve(b.lc))}catch(d){c.Zg(d)}}
ts.prototype.resolve=function(a){return a instanceof ss?vs(this,a.key,[],!0):vs(this,a,[])};
function vs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.yd!==void 0)var e=d.yd;else if(d.cf)e=d[qs]?ws(a,d[qs],c):[],e=d.cf.apply(d,ja(e));else if(d.xd){e=d.xd;var f=e[qs]?ws(a,e[qs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.fh||a.h.set(b,e);return e}
function ws(a,b,c){return b?b.map(function(d){return d instanceof ss?vs(a,d.key,c,!0):vs(a,d,c)}):[]}
;var xs;function ys(){xs||(xs=new ts);return xs}
;var zs=window;function As(){var a,b;return"h5vcc"in zs&&((a=zs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=zs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in zs&&zs.performance.mark&&zs.performance.measure?2:0}
function Bs(a){var b=As();switch(b){case 1:zs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:zs.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function Cs(a){var b=As();switch(b){case 1:zs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";zs.performance.mark(c);zs.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var Ds=U("web_enable_lifecycle_monitoring")&&As()!==0,Es=U("web_enable_lifecycle_monitoring");function Fs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Un():d;this.j=c;this.scheduler=d;this.i=new hj;this.h=a;for(a={ab:0};a.ab<this.h.length;a={ic:void 0,ab:a.ab},a.ab++)a.ic=this.h[a.ab],c=function(e){return function(){e.ic.wc();b.h[e.ab].kc=!0;b.h.every(function(f){return f.kc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.Ya(c,d),this.h[a.ab]=Object.assign({},a.ic,{wc:c,
jobId:d})}
function Gs(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.kc||(a.scheduler.ra(c.jobId),a.scheduler.Ya(c.wc,10))}
Fs.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.kc||this.scheduler.ra(b.jobId),b.kc=!0;this.i.resolve()};
Fs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Hs(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Ds&&Bs(this.state)}
p=Hs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Ds&&Cs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Gs(this.j),this.j=void 0);Is(this,a,b);this.state=a;Ds&&Bs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Js(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Js(a,b){var c=b.filter(function(e){return Ks(a,e)===10}),d=b.filter(function(e){return Ks(a,e)!==10});
return a.A.eh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Be.apply(a,[c].concat(ja(e))),2);a.sd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ce.apply(a,[c].concat(ja(e)));a.sd.apply(a,[d].concat(ja(e)))}}
p.Ce=function(a){for(var b=B.apply(1,arguments),c=Un(),d=v(a),e=d.next(),f={};!e.done;f={Jb:void 0},e=d.next())f.Jb=e.value,c.Cb(function(g){return function(){Ls(g.Jb.name);g.Jb.callback.apply(g.Jb,ja(b));Ms(g.Jb.name)}}(f))};
p.Be=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=Un(),d=v(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.sb=e.value;f.Tb=void 0;g=function(k){return function(){Ls(k.sb.name);var l=k.sb.callback.apply(k.sb,ja(b));typeof(l==null?void 0:l.then)==="function"?k.Tb=l.then(function(){Ms(k.sb.name)}):Ms(k.sb.name)}}(f);
c.Cb(g);return f.Tb?h.yield(f.Tb,3):h.F(3)}f={sb:void 0,Tb:void 0};e=d.next();return h.F(2)})};
p.sd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{wc:function(){Ls(e.name);e.callback.apply(e,ja(b));Ms(e.name)},
priority:Ks(c,e)}});
d.length&&(this.j=new Fs(d))};
function Ks(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ls(a){Ds&&a&&Bs(a)}
function Ms(a){Ds&&a&&Cs(a)}
function Is(a,b,c){Es&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Hs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ns(a){Hs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Os;x(Ns,Hs);Ns.prototype.i=function(a,b){var c=this;this.h=pn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Ns.prototype.D=function(a,b){this.h&&(wj.ra(this.h),this.h=null);a(b==null?void 0:b.event)};
function Ps(){Os||(Os=new Ns);return Os}
;var Qs=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Qs});function Rs(){this.store={};this.h={}}
Rs.prototype.storePayload=function(a,b){a=Ss(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Rs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ts(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
Rs.prototype.extractMatchingEntries=function(a){a=Ts(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Rs.prototype.getSequenceCount=function(a){a=Ts(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ts(a,b){var c=Ss(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Ss(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Us(b.auth,g[0])){var h=b.isJspb;Us(h===void 0?"undefined":h?"true":"false",g[1])&&Us(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Us(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Us(a,b){return a===void 0||a==="undefined"?!0:a===b}
Rs.prototype.getSequenceCount=Rs.prototype.getSequenceCount;Rs.prototype.extractMatchingEntries=Rs.prototype.extractMatchingEntries;Rs.prototype.smartExtractMatchingEntries=Rs.prototype.smartExtractMatchingEntries;Rs.prototype.storePayload=Rs.prototype.storePayload;function Ss(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Vs(a,b){if(a)return a[b.name]}
;var Ws=km("initial_gel_batch_timeout",2E3),Xs=km("gel_queue_timeout_max_ms",6E4),Ys=Math.pow(2,16)-1,Zs=km("gel_min_batch_size",5),$s=void 0;function at(){this.o=this.h=this.i=0;this.j=!1}
var bt=new at,ct=new at,dt=new at,et=new at,ft,gt=!0,ht=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ht);var jt={};function kt(){var a=E("yt.logging.ims");a||(a=new Rs,D("yt.logging.ims",a));return a}
function lt(a,b){if(a.endpoint==="log_event"){mt();var c=nt(a),d=ot(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=ir[d||""];var f,g,h,k=ys().resolve(new ss(Op))==null?void 0:(f=Pp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=pt(e.tier);if(k===400){qt(a,b);return}}jt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};kt().storePayload(e,a.payload);rt(b,c,e,d==="gelDebuggingEvent")}}
function rt(a,b,c,d){function e(){st({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&($s=new a);a=km("tvhtml5_logging_max_batch_ads_fork")||km("tvhtml5_logging_max_batch")||km("web_logging_max_batch")||100;var g=W(),h=tt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=kt().getSequenceCount(c));d>=1E3?e():d>=a?ft||(ft=ut(function(){e();ft=void 0},0)):g-k>=10&&(vt(f,c.tier),h.o=g)}
function qt(a,b){if(a.endpoint==="log_event"){mt();var c=nt(a),d=new Map;d.set(c,[a.payload]);var e=ot(a.payload)||"";b&&($s=new b);return new $d(function(f,g){$s&&$s.isReady()?wt(d,$s,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function nt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ht[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function st(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new $d(function(e,f){var g=tt(c,d),h=g.j;g.j=!1;xt(g.i);xt(g.h);g.h=0;$s&&$s.isReady()?d===void 0&&U("enable_web_tiered_gel")?zt(e,f,a,b,c,300,h):zt(e,f,a,b,c,d,h):(vt(c,d),e())})}
function zt(a,b,c,d,e,f,g){var h=$s;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?kt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):kt().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(jt)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?kt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):kt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete jt[l];wt(k,h,a,b,c,!1,g)}
function vt(a,b){function c(){st({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=tt(a,b),e=d===et||d===dt?5E3:Xs;U("web_gel_timeout_cap")&&!d.h&&(e=ut(function(){c()},e),d.h=e);
xt(d.i);e=R("LOGGING_BATCH_TIMEOUT",km("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&gt&&(e=Ws);e=ut(function(){km("gel_min_batch_size")>0?kt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Zs&&c():c()},e);
d.i=e}
function wt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var m=a.next();for(g={};!m.done;g={Cc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Fc:void 0,Ec:void 0},m=a.next()){var n=v(m.value);m=n.next().value;n=n.next().value;g.batchRequest=id({context:Vp(b.config_||Up())});if(!Pa(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=ht[m])&&
At(g.batchRequest,m,n);delete ht[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Bt(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Fc=function(r){U("start_client_gcf")&&wj.qa(function(){return A(function(t){return t.yield(Ct(r),0)})});
k--;k||c()};
g.Cc=0;g.Ec=function(r){return function(){r.Cc++;if(e.bypassNetworkless&&r.Cc===1)try{Nq(b,l,r.batchRequest,Dt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Fc,r.Ec,f)),gt=!1}catch(t){Rl(t),d()}k--;k||c()}}(g);
try{Nq(b,l,g.batchRequest,Dt(e,g.dangerousLogToVisitorSession,g.Fc,g.Ec,f)),gt=!1}catch(r){Rl(r),d()}}}
function Dt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ig:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Et()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Bt(a,b,c){Et()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Ys/2)),c++,c>Ys&&(c=1),Ml("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function At(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function mt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=jm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(Qs=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Qs),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Et(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function ut(a,b){return U("transport_use_scheduler")===!1?hm(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?pn(function(){if(Ps().currentState==="none")a();else{var c={};Ps().install((c.none={callback:a},c))}},b):pn(a,b)}
function xt(a){U("transport_use_scheduler")?wj.ra(a):window.clearTimeout(a)}
function Ct(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Vs(d,ol),g=(f=d)==null?void 0:f.hotHashData,h=Vs(d,nl),l=(k=d)==null?void 0:k.coldHashData,(m=ys().resolve(new ss(Op)))?g?e?n.yield(Qp(m,g,e),2):n.yield(Qp(m,g),2):n.F(2):n.return()):l?h?n.yield(Rp(m,l,h),0):n.yield(Rp(m,l),0):n.F(0)})}
function tt(a,b){b=b===void 0?200:b;return a?b===300?et:ct:b===300?dt:bt}
function ot(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ir[b])return b}
function pt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ft=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ft);
function Gt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ds();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ft[b]=b in Ft?Ft[b]+1:0,a.sequence={index:Ft[b],groupKey:b},d.endOfSequence&&delete Ft[d.sequenceGroup]);(d.sendIsolatedPayload?qt:lt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function eo(a,b,c){c=c===void 0?{}:c;var d=Or;R("ytLoggingEventsDefaultDisabled",!1)&&Or===Or&&(d=null);Gt(a,b,d,c)}
;var Ht=new Set,It=0,Jt=0,Kt=0,Lt=[],Mt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function co(a){Nt(a)}
function Ot(a){Nt(a,"WARNING")}
function Pt(a){a instanceof Error?Nt(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Ot(a))}
function Nt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(It>=5))){d=Lt;var k=Vb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Mm(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,y=Om(t[r]);c[w]=y;n+=w.length+y.length;if(n>500)break}}else c.params=Om(t)}if(d.length)for(r=0;r<d.length&&!(n=Mm(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Im();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Ug)){a=d.weight;break a}a=v(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Dm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=v(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Ac(f);break}r.params||(r.params={});a=Im();r.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Sa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));hb("sample").constructor!==fb&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);
if(r.sampleWeight!==0&&!Ht.has(r.message)){if(g&&U("web_enable_error_204"))Qt(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Jm.jb("handleError",r),U("record_app_crashed_web")&&Kt===0&&r.sampleWeight===1&&(Kt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),eo("appCrashed",g)),Jt++):b==="WARNING"&&Jm.jb("handleWarning",r);if(U("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=v(Mt);for(c=a.next();!c.done;c=a.next())if(ko(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Nl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(eo("clientError",h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&st(void 0,void 0,!1))}U("suppress_error_204_logging")||Qt(b,r)}try{Ht.add(r.message)}catch(z){}It++}}}
function Qt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}tm(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Rt(){this.register=new Map}
function St(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Yg("ABORTED")}
Rt.prototype.clear=function(){St(this);this.register.clear()};
var Tt=new Rt;var Ut=Date.now().toString();
function Vt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Ut)for(a=1,b=0;b<Ut.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ut.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Wt,Xt=C.ytLoggingDocDocumentNonce_;Xt||(Xt=Vt(),D("ytLoggingDocDocumentNonce_",Xt));Wt=Xt;function Yt(a){this.h=a}
p=Yt.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new vl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&Ng(a,2,dg(this.h.veType)),this.h.veCounter!==void 0&&Ng(a,6,dg(this.h.veCounter)),this.h.elementIndex!==void 0&&Ng(a,3,dg(this.h.elementIndex)),this.h.isCounterfactual&&Ng(a,5,$f(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();bh(a,vl,7,b)}this.h.youtubeData!==void 0&&bh(a,pl,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Zt(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function $t(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Ml("client-screen-nonce-store",c));c[b]=a}
function au(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function bu(a){return R(au(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",bu);function cu(){var a=R("csn-to-ctt-auth-info");a||(a={},Ml("csn-to-ctt-auth-info",a));return a}
function du(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function eu(a){a=Zt(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",eu);function fu(a,b,c){var d=cu();(c=eu(c))&&delete d[c];b&&(d[a]=b)}
function gu(a){return cu()[a]}
D("yt_logging_screen.getCttAuthInfo",gu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Zt(c)||b!==R(au(c)))if(fu(a,d,c),$t(a,c),Ml(au(c),b),b=function(){setTimeout(function(){a&&eo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Wt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function hu(){var a=hd(iu),b;return(new $d(function(c,d){a.onSuccess=function(e){gm(e)?c(new ju(e)):d(new ku("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ku("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ku("Request timed out","net.timeout",e))};
b=tm("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof ge){var d;
(d=b)==null||d.abort()}return ee(c)})}
function ku(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(ku,ab);function ju(a){this.xhr=a}
;function lu(){this.h=0;this.i=null}
lu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:mu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:nu(a):this};
lu.prototype.getValue=function(){return this.i};
lu.prototype.isRejected=function(){return this.h==2};
lu.prototype.$goog_Thenable=!0;function nu(a){var b=new lu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function mu(a){var b=new lu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function ou(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:bm(a)?"same-origin":"cors",credentials:bm(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function pu(){return Qh()||(Je||Ke)&&ko("applewebkit")&&!ko("version")&&(!ko("safari")||ko("gsa/"))||Vc&&ko("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function qu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in tl)if(tl[d]==c.embeddedPlayerMode){b=tl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function ru(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof su;this.isTimeout=a instanceof ku&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ge}
x(ru,ab);ru.prototype.name="BiscottiError";function su(){ab.call(this,"Biscotti ID is missing from server")}
x(su,ab);su.prototype.name="BiscottiMissingError";var iu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},tu=null;function uu(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!pu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(fd(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(qu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Fl(){var a=uu();if(a!==void 0)return ee(a);tu||(tu=hu().then(vu).oc(function(b){return wu(2,b)}));
return tu}
function vu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new su;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new su;a=a.id;Gl(a);tu=mu(a);xu(18E5,2);return a}
function wu(a,b){b=new ru(b);Gl("");tu=nu(b);a>0&&xu(12E4,a-1);throw b;}
function xu(a,b){hm(function(){hu().then(vu,function(c){return wu(b,c)}).oc(Hd)},a)}
function yu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Fl()}catch(b){return ee(b)}}
;var Bb=ha(["data-"]);function zu(a){a&&(a.dataset?a.dataset[Au()]="true":Db(a))}
function Bu(a){return a?a.dataset?a.dataset[Au()]:a.getAttribute("data-loaded"):null}
var Cu={};function Au(){return Cu.loaded||(Cu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Du(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||hd(b);this.assets=a.assets||{};this.attrs=a.attrs||hd(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Du.prototype.clone=function(){var a=new Du,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=hd(c):a[b]=c}return a};var Eu=["share/get_share_panel"],Fu=["share/get_web_player_share_panel"],Gu=["feedback"],Hu=["notification/modify_channel_preference"],Iu=["browse/edit_playlist"],Ju=["subscription/subscribe"],Ku=["subscription/unsubscribe"];var Lu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Lu);function Mu(a){Hl(Lu,arguments)}
;function Nu(a,b,c){Ou(a,b,c===void 0?null:c)}
function Pu(a){a=Qu(a);var b=document.getElementById(a);b&&(ns(a),b.parentNode.removeChild(b))}
function Ru(a,b){a&&b&&(a=""+Ra(b),(a=Su[a])&&ls(a))}
function Ou(a,b,c){c=c===void 0?null:c;var d=Qu(a),e=document.getElementById(d),f=e&&Bu(e),g=e&&!f;f?b&&b():(b&&(f=js(d,b),b=""+Ra(b),Su[b]=f),g||(e=Tu(a,d,function(){Bu(e)||(zu(e),ms(d),hm(function(){ns(d)},0))},c)))}
function Tu(a,b,c,d){d=d===void 0?null:d;var e=Md("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,ll(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Qu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Su={};function Uu(a){var b=Vu(a),c=document.getElementById(b),d=c&&Bu(c);d||c&&!d||(c=Wu(a,b,function(){if(!Bu(c)){zu(c);ms(b);var e=Xa(ns,b);hm(e,0)}}))}
function Wu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ll(a);Gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vu(a){var b=Md("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function Xu(a){var b=B.apply(1,arguments);if(!Yu(a)||b.some(function(d){return!Yu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Zu(a,c.value)}
function Zu(a,b){for(var c in b)if(Yu(b[c])){if(c in a&&!Yu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Zu(a[c],b[c])}else if($u(b[c])){if(c in a&&!$u(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);av(a[c],b[c])}else a[c]=b[c];return a}
function av(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Yu(c)?a.push(Zu({},c)):$u(c)?a.push(av([],c)):a.push(c);return a}
function Yu(a){return typeof a==="object"&&!Array.isArray(a)}
function $u(a){return typeof a==="object"&&Array.isArray(a)}
;var bv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function cv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:eu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&dv(a,b,f)}else dv(a,b)}
function dv(a,b,c){a=ev(a);b=b?hc(b):"";c=c||5;pu()&&Vm(a,b,c)}
function ev(a){for(var b=v(bv),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Zb(a).toString(36)}
;function fv(a){Zp.call(this,1,arguments);this.csn=a}
x(fv,Zp);var hq=new $p("screen-created",fv),gv=[],hv=0,iv=new Map,jv=new Map,kv=new Map;
function lv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=mv({cttAuthInfo:gu(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(dd(k)||!k.trackingParams&&!k.veType)&&Ot(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=nv(h,b);if(k.veType&&!jv.has(l)&&!kv.has(l)&&!e){if(!U("il_attach_cache_limit")||iv.size<1E3){iv.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&iv.size>1E3&&Ot(new V("IL Attach cache exceeded limit"))}h=nv(c,b);iv.has(h)?
ov(c,b):kv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?pv("visualElementAttached",f,c):a?Gt("visualElementAttached",c,a,f):eo("visualElementAttached",c,f)}
function pv(a,b,c){gv.push({te:a,payload:c,Qg:void 0,options:b});hv||(hv=iq())}
function jq(a){if(gv){for(var b=v(gv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,eo(c.te,c.payload,c.options));gv.length=0}hv=0}
function nv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function ov(a,b){a=nv(a,b);iv.has(a)&&(b=iv.get(a)||[],lv(b[0],b[1],b[2],[b[3]],!0),iv.delete(a))}
function mv(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function qv(){try{return!!self.localStorage}catch(a){return!1}}
;function rv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function sv(a){if(qv()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=rv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function tv(){if(!qv())return!1;var a=nn(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=rv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function uv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function vv(a){if(R("LOGGED_IN",!0)&&uv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=dc(a),(b=ec(b))?(b=ev(b),b=(b=Wm(b)||null)?Zl(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;uv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&cv(a,b)}}
;function wv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&cv(a,b);if(c)return!1;vv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ic(a,e);vv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.je(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function xv(a){if(fd(R("PLAYER_VARS",{}))!="1"){a&&El();try{yu().then(function(){},function(){}),hm(xv,18E5)}catch(b){Rl(b)}}}
;var yv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function zv(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=$l(a).theme;return yv.get(b)||null}catch(c){}return null}
;function Av(){this.h={};if(this.i=Ym()){var a=Wm("CONSISTENCY");a&&Bv(this,{encryptedTokenJarContents:a})}}
Av.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Pa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Bv(this,a)}};
function Bv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Vm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Cv=window.location.hostname.split(".").slice(-2).join(".");function Dv(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Ev(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Fv;function Gv(){Fv=E("yt.clientLocationService.instance");Fv||(Fv=new Dv,D("yt.clientLocationService.instance",Fv));return Fv}
p=Dv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Ev(this))&&this.h.set("yt-location-playability-token",a,15552E3):Vm("YT_CL",JSON.stringify({loctok:a}),15552E3,Cv,!0))};
function Ev(a){return a.h===void 0?new Vn("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Ev(this))&&this.h.remove("yt-location-playability-token"):Xm("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Hv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Iv(){this.h={}}
Iv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Iv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Iv.prototype.set=function(a,b){this.h[a]=b};
Iv.prototype.remove=function(a){delete this.h[a]};function Jv(){this.mappings=new Iv}
Jv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Jv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}}return a};
new Jv;function Kv(a){return function(){return new a}}
;var Lv={},Mv=(Lv.WEB_UNPLUGGED="^unplugged/",Lv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Lv.WEB_UNPLUGGED_OPS="^unplugged/",Lv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Lv.WEB_CREATOR="^creator/",Lv.WEB_KIDS="^kids/",Lv.WEB_EXPERIMENTS="^experiments/",Lv.WEB_MUSIC="^music/",Lv.WEB_REMIX="^music/",Lv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Lv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Lv);
function Nv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Mv[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Mv).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Ov(){}
Ov.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Um:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=id(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;bn();var l="USER_INTERFACE_THEME_LIGHT";en(165)?l="USER_INTERFACE_THEME_DARK":en(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:zv()||l;h.userInterfaceTheme=k;if(!f){if(k=kn())h.connectionType=k;U("web_log_effective_connection_type")&&(k=ln())&&(g.client.effectiveConnectionType=k)}var m;if(U("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}U("web_gcf_hashes_innertube")&&(k=Sp())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=$l(C.location.href);!U("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&Pm.h&&(n=Pm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Qm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(n=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ua){}r=
void 0}r&&(h.timeZone=r)}(r=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=lm();Av.h||(Av.h=new Av);h=Av.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!U("web_prequest_context_killswitch")&&(t=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=bn();t=en(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=eu())&&(g.clientScreenNonce=f):!f&&(f=eu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Gv().setLocationOnInnerTubeContext(g);try{var w=cm(),y=w.bid;delete w.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(w));for(var G=z.next();!G.done;G=z.next()){var I=v(G.value),N=I.next().value,S=I.next().value;w=N;y=S;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:w,value:""+
y})}var ta;if(((ta=g.client)==null?void 0:ta.clientName)==="TVHTML5"){var lb=R("INNERTUBE_CONTEXT");lb.adSignalsInfo&&(g.adSignalsInfo.advertisingId=lb.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=lb.adSignalsInfo.limitAdTracking)}}catch(ua){Nt(ua)}z=g}else Nt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(G=this.i(a)){this.h(z,G,b);var T;b="/youtubei/v1/"+Nv(this.j());
(G=(T=Vs(a.commandMetadata,rl))==null?void 0:T.apiUrl)&&(b=G);T=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(T=String(b)+String(dc(T)));b={};U("web_api_key_killswitch")&&(b.key=R("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");T=am(T,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:T,gb:ou(T),Pa:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}Nt(new V("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Ov.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Pv(){}
x(Pv,Ov);function Qv(){}
x(Qv,Pv);Qv.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",gb:ou("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
Qv.prototype.j=function(){return[]};
Qv.prototype.i=function(){};
Qv.prototype.h=function(){};var Rv={},Sv=(Rv.GET_DATASYNC_IDS=Kv(Qv),Rv);function Tv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Uv(){var a=Tv();a.info||(a.info={});return a.info}
function Vv(a){a=Tv(a);a.metadata||(a.metadata={});return a.metadata}
function Wv(a){a=Tv(a);a.tick||(a.tick={});return a.tick}
function Xv(a){a=Tv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Yv(a){a=Xv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Zv(a){var b=Tv(a).nonce;b||(b=Vt(),Tv(a).nonce=b);return b}
;function $v(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function aw(a){a=a||"";var b=E("ytcsi.reference");b||($v(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=$v(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},bw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",
X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]=
"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function cw(a,b){Zp.call(this,1,arguments);this.timer=b}
x(cw,Zp);var dw=new $p("aft-recorded",cw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ew=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",ew);function fw(){this.h=0}
function gw(){fw.h||(fw.h=new fw);return fw.h}
fw.prototype.tick=function(a,b,c,d){hw(this,"tick_"+a+"_"+b)||eo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
fw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");hw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,eo("latencyActionInfo",a,{cttAuthInfo:c}))};
fw.prototype.jspbInfo=function(){};
fw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");hw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,eo("latencyActionSpan",a,{cttAuthInfo:c}))};
function hw(a,b){ew[b]=ew[b]||{count:0};var c=ew[b];c.count++;c.time=W();a.h||(a.h=pn(function(){var d=W(),e;for(e in ew)ew[e]&&d-ew[e].time>6E4&&delete ew[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Ot(c)),!0):!1}
;var iw=window;function jw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function kw(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=lw(e.requestStart),e.responseEnd=lw(e.responseEnd),e.redirectStart=lw(e.redirectStart),e.redirectEnd=lw(e.redirectEnd),e.domainLookupEnd=lw(e.domainLookupEnd),e.connectStart=lw(e.connectStart),e.connectEnd=
lw(e.connectEnd),e.responseStart=lw(e.responseStart),e.secureConnectionStart=lw(e.secureConnectionStart),e.domainLookupStart=lw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function lw(a){return Math.round(mw()+a)}
function mw(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=iw.performance||iw.mozPerformance||iw.msPerformance||iw.webkitPerformance||new jw;var nw=!1,ow=!1,pw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Hd,Y);function qw(a,b){if(!U("web_csi_action_sampling_enabled")||!Tv(b).actionDisabled){var c=aw(b||"");Xu(c.info,a);a.loadType&&(c=a.loadType,Vv(b).loadType=c);Xu(Yv(b),a);c=Zv(b);b=Tv(b).cttAuthInfo;gw().info(a,c,b)}}
function rw(){var a,b,c,d;return((d=ys().resolve(new ss(Op))==null?void 0:(a=Pp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!Tv(c).actionDisabled){var d=Zv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(ys().resolve(new ss(Op))==null?0:Pp())&&!ow&&(ow=!0,Z("gcfl",W(),c));var f,g,h;e=(ys().resolve(new ss(Op))==null?void 0:(f=Pp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=rw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;Tv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,qw(f,c));Tv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=aw(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Xv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Wv(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Tv(c).cttAuthInfo;a==="_start"?(a=gw(),hw(a,"baseline_"+d)||eo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):gw().tick(a,d,b,f);sw(c);return e}}}
function tw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Qr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function uw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function vw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Hb(window)&&a.setAttribute("nonce",Hb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=mw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function ww(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",lw(b.startTime)),Z("wffe",lw(b.responseEnd)))}
function xw(a){var b=yw("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=yw(b[d],a);if(e)return e}return NaN}
function yw(a,b){if(a=Wv(b)[a])return typeof a==="number"?a:a[a.length-1]}
function sw(a){var b=yw("_start",a),c=xw(a),d=U("enable_cow_info_csi")||!nw;b&&c&&d&&(eq(dw,new cw(Math.round(c-b),a)),nw=!0)}
function zw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Rb(a,function(c){return c.name==="first-paint"}))return lw(a.startTime)}var b;
U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Vg;return b?Math.max(0,b):0}
;function Aw(a,b){Ql(function(){aw("").info.actionType=a;b&&Ml("TIMING_AFT_KEYS",b);Ml("TIMING_ACTION",a);var c=uw();Object.keys(c).length>0&&qw(c);c={isNavigation:!0,actionType:bw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=bw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=eu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=tw();if(d===1||d===-1)c.isVisible=!0;Vv();Uv();
c.loadType="cold";d=Uv();var e=kw(),f=mw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=zw();d>0&&Z("fpt",d);d=kw();d.isPerformanceNavigationTiming&&qw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=mw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&ww();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in pw)pw.hasOwnProperty(h)&&(e=pw[h],
vw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});qw(c);c=Xv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Yv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Vv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Wv();e=Xv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,yw(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Xu(c,d),Xu(k,d),d=!0;d&&qw(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Bw()&&xw()&&sw()})()}
function Bw(){return Ql(function(){return Cw()})()}
function Dw(a,b,c){Ql(qw)(a,b,c===void 0?!1:c)}
function Ew(a,b,c){return Ql(Z)(a,b,c)}
function Cw(){return Ql(function(){return"_start"in Wv()})()}
function Fw(){Ql(function(){var a=Zv();requestAnimationFrame(function(){setTimeout(function(){a===Zv()&&Ew("ol",void 0,void 0)},0)})})()}
var Gw=window;Gw.ytcsi&&(Gw.ytcsi.infoGel=Dw,Gw.ytcsi.tick=Ew);var Hw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Iw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Jw(a,b,c,d){this.D=a;this.fa=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},Sv,a.Qb)}
function Kw(a,b,c,d){if(Jw.h!==void 0){if(d=Jw.h,a=[a!==d.D,b!==d.fa,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Jw.h=new Jw(a,b,c,d)}
function Lw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Um:c;var d=Mw(a,b);return d?new $d(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));n.F(0);break}vv(h.input);l=((k=h.gb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.Ue){var r=h.config,t,w=r==null?void 0:(t=r.Ub)==null?void 0:t.sessionIndex,y;r=((y=Vs(r==null?void 0:r.command,
sl))==null?void 0:y.signal)==="GET_ACCOUNT_MENU"?!0:!1;w=Tm(0,{sessionIndex:w,bd:r});m=Object.assign({},Hv(l),w);n.F(4);break}return n.yield(Nw(h.config,l),5);case 5:m=n.i;case 4:e(Ow(a,h,m)),n.h=0}})}):ee(new V("Error: No request builder found for command.",b))}
function Pw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=v(Hw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Ow(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,y,z,G,I,N,S,ta,lb,T,ua,La,Ma,Ka,Xg,Yg,Hr,Ir,Jr;return A(function(fa){switch(fa.h){case 1:fa.F(2);break;case 3:if((e=fa.i)&&!e.isExpired())return fa.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Pa)==null?0:g.context)){fa.F(4);break}h=b.Pa.context;fa.F(5);break;case 5:k=v([]),l=k.next();case 8:if(l.done){fa.F(4);break}m=l.value;return fa.yield(m.Xg(h),9);case 9:l=k.next();fa.F(8);break;case 4:if((n=a.i)==null||!n.dh(b.input,b.Pa)){fa.F(12);break}return fa.yield(a.i.Sg(b.input,
b.Pa),13);case 13:return r=fa.i,U("kevlar_process_local_innertube_responses_killswitch")||Pw(a,r,b),fa.return(r);case 12:return(y=(w=b.config)==null?void 0:w.ah)&&a.h.has(y)?t=a.h.get(y):(z=JSON.stringify(b.Pa),N=(I=(G=b.gb)==null?void 0:G.headers)!=null?I:{},b.gb=Object.assign({},b.gb,{headers:Object.assign({},N,c)}),S=Object.assign({},b.gb),b.gb.method==="POST"&&(S=Object.assign({},S,{body:z})),((ta=b.config)==null?0:ta.ze)&&Ew(b.config.ze),lb=function(){return a.fa.fetch(b.input,S,b.config)},t=
lb(),y&&a.h.set(y,t)),fa.yield(t,14);
case 14:if((T=fa.i)&&"error"in T&&((ua=T)==null?0:(La=ua.error)==null?0:La.details))for(Ma=T.error.details,Ka=v(Ma),Xg=Ka.next();!Xg.done;Xg=Ka.next())Yg=Xg.value,(Hr=Yg["@type"])&&Iw.indexOf(Hr)>-1&&(delete Yg["@type"],T=Yg);y&&a.h.has(y)&&a.h.delete(y);((Ir=b.config)==null?0:Ir.Ae)&&Ew(b.config.Ae);if(T||(Jr=a.i)==null||!Jr.Jg(b.input,b.Pa)){fa.F(15);break}return fa.yield(a.i.Rg(b.input,b.Pa),16);case 16:T=fa.i;case 15:return Pw(a,T,b),d(),fa.return(T||void 0)}})}
function Mw(a,b){a:{a=a.D;var c,d=(c=Vs(b,sl))==null?void 0:c.signal;if(d&&a.Qb&&(c=a.Qb[d])){var e=c();break a}var f;if((c=(f=Vs(b,ql))==null?void 0:f.request)&&a.Md&&(f=a.Md[c])){e=f();break a}for(e in b)if(a.Sc[e]&&(b=a.Sc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Nw(a,b){var c,d,e,f,g,h,k;return A(function(l){if(l.h==1){e=(c=a)==null?void 0:(d=c.Ub)==null?void 0:d.sessionIndex;h=((g=Vs((f=a)==null?void 0:f.command,sl))==null?void 0:g.signal)==="GET_ACCOUNT_MENU"?!0:!1;var m=l.yield;var n=Tm(0,{sessionIndex:e,bd:h});if(!(n instanceof $d)){var r=new $d(Hd);ae(r,2,n);n=r}return m.call(l,n,2)}k=l.i;return l.return(Promise.resolve(Object.assign({},Hv(b),k)))})}
;var Qw=new rs("INNERTUBE_TRANSPORT_TOKEN");function Rw(){}
x(Rw,Pv);Rw.prototype.j=function(){return Ju};
Rw.prototype.i=function(a){return Vs(a,Dl)||void 0};
Rw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Rw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Sw(){}
x(Sw,Pv);Sw.prototype.j=function(){return Ku};
Sw.prototype.i=function(a){return Vs(a,Cl)||void 0};
Sw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Sw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Tw=new rs("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Uw(a){this.u=a}
x(Uw,Pv);Uw.prototype.j=function(){return Eu};
Uw.prototype.i=function(a){return Vs(a,xl)||Vs(a,yl)||Vs(a,wl)};
Uw.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
Uw[qs]=[Tw];function Vw(){}
x(Vw,Pv);Vw.prototype.j=function(){return Gu};
Vw.prototype.i=function(a){return Vs(a,ul)||void 0};
Vw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Vw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ww(){}
x(Ww,Pv);Ww.prototype.j=function(){return Hu};
Ww.prototype.i=function(a){return Vs(a,Bl)||void 0};
Ww.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Xw(){}
x(Xw,Pv);Xw.prototype.j=function(){return Iu};
Xw.prototype.i=function(a){return Vs(a,Al)||void 0};
Xw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Yw(){}
x(Yw,Pv);Yw.prototype.j=function(){return Fu};
Yw.prototype.i=function(a){return Vs(a,zl)};
Yw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Zw(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
x(Zw,V);var $w=new rs("NETWORK_SLI_TOKEN");function ax(a){this.h=a}
ax.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=bx(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ot(g);
if((c==null?0:c.Sd)&&g instanceof Zw&&g.errorType===1)return Promise.reject(g)}))})};
function bx(a,b,c){if(a.h){var d=ac(bc(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=Gq(c));return new window.Request(b,a)}
ax.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.ke)&&a.ok)return xh(b.ke,d);d=d.replace(")]}'","");if((b==null?0:b.Sd)&&d)try{var e=JSON.parse(d)}catch(g){throw new Zw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ng(),c=c.then(function(d){Ot(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
ax[qs]=[new ss($w)];var cx=new rs("NETWORK_MANAGER_TOKEN");var dx;function ex(){var a,b,c;return A(function(d){if(d.h==1)return a=ys().resolve(Qw),a?d.yield(Lw(a),2):(Ot(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ot(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Lg;return d.return(c)}Ot(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function fx(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var gx=C.caches,hx;function ix(a){var b=a.indexOf(":");return b===-1?{kd:a}:{kd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function jx(){return A(function(a){if(hx!==void 0)return a.return(hx);hx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(gx.open("test-only"),4);case 4:return d.yield(gx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(hx)})}
function kx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(jx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(gx.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ix(f),h=g.datasyncId,!h||a.includes(h)||b.push(gx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function lx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(jx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=nn("cache contains other");return h.yield(gx.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ix(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function mx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function nx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function ox(a){if(mx()){var b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=nx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function px(){if(!mx())return!1;var a=nn(),b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=nx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function qx(){ex().then(function(a){a&&(tp(a),kx(a),sv(a),ox(a))})}
function rx(){var a=new yr;wj.qa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=nn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];tp(h);kx(h);sv(h);ox(h);return g.return()}c=tv();d=px();return g.yield(lx(),3);case 3:return e=g.i,g.yield(up(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.wa()?qx():a.h.add("publicytnetworkstatus-online",qx,!0,void 0,void 0),g.h=0}})})}
;function sx(){this.state=1;this.h=null}
p=sx.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=eb(),f=new Ib(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=kl(a.interpreterSafeUrl).toString());tx(this,d,e,a.program,b,c)}else Ot(Error("Cannot initialize botguard without program"))};
function tx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Nu(c,function(){window[g]?ux(a,d,g,e):(a.state=3,Pu(c),Ot(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Md("SCRIPT"),b instanceof Ib?Kb(f,b):f.textContent=b,f.nonce=Hb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?ux(a,d,g,e):(a.state=4,Ot(new V("Unable to load Botguard from JS")))):Ot(new V("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function ux(a,b,c,d){a.state=5;try{var e=new ij({program:b,Yd:c,xe:U("att_web_record_metrics"),Ea:"aGIf"});e.Qe.then(function(){a.state=6;d&&d(b)});
a.Ic(e)}catch(f){a.state=7,f instanceof Error&&Ot(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Lc()?this.Ad({Tc:a}):null};
p.dispose=function(){this.Ic(null);this.state=8};
p.Lc=function(){return!!this.h};
p.Ad=function(a){return this.h.td(a)};
p.Ic=function(a){zc(this.h);this.h=a};var vx=[],wx=!1;function xx(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&pu()){var a=R("PLAYER_VARS",{});if(fd(a)!="1"&&!qu(a)){var b=function(){wx=!0;"google_ad_status"in window?Ml("DCLKSTAT",1):Ml("DCLKSTAT",2)};
try{Nu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}vx.push(wj.qa(function(){if(!(wx||"google_ad_status"in window)){try{Ru("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}wx=!0;Ml("DCLKSTAT",3)}},5E3))}}}
function yx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function zx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Ax(){sx.apply(this,arguments)}
x(Ax,sx);Ax.prototype.Ic=function(a){var b;(b=zx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.td.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Ax.prototype.Lc=function(){return!!zx()};
Ax.prototype.Ad=function(a){return zx().bgvmc(a)};function Bx(a){Hs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(Bx,Hs);Bx.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Bx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Bx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Bx.prototype.i=function(){this.h=new Map};function Cx(a){Hs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(Cx,Hs);Cx.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Cx.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Cx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Cx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Dx(){this.o=new Bx;this.D=new Cx}
Dx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function Ex(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Ex.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=eu(c===void 0?0:c)){a=this.client;d=new Yt({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=nv(d,c);jv.set(f,!0);ov(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=mv({cttAuthInfo:gu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?pv("visualElementGestured",f,d):a?Gt("visualElementGestured",d,a,f):eo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Ex.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Yt({trackingParams:a}),b,c===void 0?0:c)};
Ex.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=eu(d);a||(a=(a=bu(d===void 0?0:d))?new Yt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=mv({cttAuthInfo:gu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?pv("visualElementStateChanged",d,b):a?Gt("visualElementStateChanged",b,a,d):eo("visualElementStateChanged",b,d))}};
function Fx(a,b){if(b===void 0)for(var c=du(),d=0;d<c.length;d++)c[d]!==void 0&&Fx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&lv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Gx(){Dx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||pn(Hx)}
x(Gx,Dx);Gx.prototype.j=function(){eo("finalPayload",{csn:eu()})};
Gx.prototype.h=function(){St(Tt)};
Gx.prototype.i=function(){var a=Fx;Ex.h||(Ex.h=new Ex);a(Ex.h)};
function Hx(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Pf();a=v(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&eo("genericClientExperimentEvent",{eventType:c});delete Ll.CLIENT_EXPERIMENT_EVENTS}}
;function Ix(){}
function Jx(){var a=E("ytglobal.storage_");a||(a=new Ix,D("ytglobal.storage_",a));return a}
Ix.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Kx()):d.return()})};
function Kx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ix);function bo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
bo.prototype.Ha=function(a){this.handleError(a)};
bo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Lx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Lx(a,b){Jx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Mx(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Mx(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Mx(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Nx={},Ox=(Nx["api.invalidparam"]=2,Nx.auth=150,Nx["drm.auth"]=150,Nx["heartbeat.net"]=150,Nx["heartbeat.servererror"]=150,Nx["heartbeat.stop"]=150,Nx["html5.unsupportedads"]=5,Nx["fmt.noneavailable"]=5,Nx["fmt.decode"]=5,Nx["fmt.unplayable"]=5,Nx["html5.missingapi"]=5,Nx["html5.unsupportedlive"]=5,Nx["drm.unavailable"]=5,Nx["mrm.blocked"]=151,Nx["embedder.identity.denied"]=152,Nx);var Px=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Qx(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Rx(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Px);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Sx(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Tx(a){H.call(this);var b=this;this.api=a;this.V=this.u=!1;this.A=[];this.I={};this.j=[];this.i=[];this.W=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.S=U("web_player_split_event_bus_iframe");this.ea=U("embeds_error_code_as_integer");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=
c.source;c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.V=!0;b.u=!1;b.sendMessage("initialDelivery",Ux(b));b.sendMessage("onReady");e=v(b.A);for(d=e.next();!d.done;d=e.next())Vx(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.W&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.I[e]||
e==="onReady"||(c=Wx(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.S?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.I[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Qx(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Rx(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Rx(g);break;case "loadPlaylist":case "cuePlaylist":g=Sx(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Qx(e)&&Xx(b,Ux(b))}}}};
Yx.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;Zx(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.W=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Ox[c]||d:d;b.ea?b.sendMessage("onError",Number(b.errorCode)):b.sendMessage("onError",b.errorCode.toString())}});
Zx(this,"onVideoProgress",this.Le.bind(this));Zx(this,"onVolumeChange",this.Me.bind(this));Zx(this,"onApiChange",this.Ee.bind(this));Zx(this,"onPlaybackQualityChange",this.Ie.bind(this));Zx(this,"onPlaybackRateChange",this.Je.bind(this));Zx(this,"onStateChange",this.Ke.bind(this));Zx(this,"onWebglSettingsChanged",this.Ne.bind(this));Zx(this,"onCaptionsTrackListChanged",this.Fe.bind(this));Zx(this,"captionssettingschanged",this.Ge.bind(this))}
x(Tx,H);function Xx(a,b){a.sendMessage("infoDelivery",b)}
p=Tx.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.V?Vx(this,a):this.A.push(a)};
function Wx(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Zx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Ux(a){if(!a.api)return null;var b=a.api.getApiInterface();Sb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.Ke=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Xx(this,a)};
p.Ie=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Xx(this,a)};
p.Je=function(a){Xx(this,{playbackRate:a})};
p.Ee=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Me=function(){Xx(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Le=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Xx(this,a)};
p.Ne=function(){Xx(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Fe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Xx(this,a)}};
p.Ge=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Xx(this,a)}};
function Vx(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Ot(d)}}}
p.ba=function(){H.prototype.ba.call(this);Yx.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.S?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Yx=window;function $x(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=U("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ga){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=ay(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=by(g,f))&&cy(d,g,f))}}}}}};
dy.addEventListener("message",this.i);cy(this,"RECEIVING")}
x($x,H);p=$x.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.He.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.He=function(a,b){this.ga||cy(this,a,ey(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function ay(a,b){switch(a){case "loadVideoById":return[Rx(b)];case "cueVideoById":return[Rx(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Sx(b)];case "cuePlaylist":return[Sx(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function by(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function ey(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function cy(a,b,c){a.ga||(b={id:a.id,command:b},c&&(b.data=c),fy.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){dy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var dy=window,fy=window.parent;var gy=new Ax;function hy(){return gy.Lc()}
function iy(a){a=a===void 0?{}:a;return gy.invoke(a)}
;function jy(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Bb=e;this.Ka=!1;this.api={};this.ia=this.u=null;this.S=new M;this.h={};this.W=this.pa=this.elementId=this.Xa=this.config=null;this.V=!1;this.j=this.G=null;this.ya={};this.pc=["onReady"];this.lastError=null;this.kb=NaN;this.I={};this.ea=0;this.i=this.o=a;Bc(this,this.S);ky(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ly(this),my(this))}
x(jy,H);p=jy.prototype;p.getId=function(){return this.A};
p.loadNewVideoConfig=function(a){if(!this.ga){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Du||(b=new Du(b));this.config=b;this.setConfig(a);my(this);this.isReady()&&ny(this)}};
function ly(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Xa=a;this.config=oy(a);ly(this);if(!this.pa){var b;this.pa=py(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=qj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=qj(Number(a)||a))};
function ny(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function qy(a){var b=!0,c=ry(a);c&&a.config&&(b=c.dataset.version===sy(a));return b&&!!E("yt.player.Application.create")}
function my(a){if(!a.ga&&!a.V){var b=qy(a);if(b&&(ry(a)?"html5":null)==="html5")a.W="html5",a.isReady()||ty(a);else if(uy(a),a.W="html5",b&&a.j&&a.o)a.o.appendChild(a.j),ty(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=vy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?oy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Bb);ty(a)};
a.V=!0;b?a.G():(Nu(sy(a),a.G),(b=wy(a))&&Uu(b||""),xy(a)&&!c&&D("yt.player.Application.create",null))}}}
function ry(a){var b=Ld(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function ty(a){if(!a.ga){var b=ry(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.V=!1;if(!vy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}yy(a)}else a.kb=setTimeout(function(){ty(a)},50)}}
function yy(a){ky(a);a.Ka=!0;var b=ry(a);if(b){a.u=zy(a,b,"addEventListener");a.ia=zy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=zy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);ny(a);a.pa&&a.pa(a.api);a.S.jb("onReady",a.api)}
function zy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function ky(a){a.Ka=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&clearTimeout(Number(c));a.I={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Xa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Ka};
p.addEventListener=function(a,b){var c=this,d=py(this,b);d&&(Mb(this.pc,a)>=0||this.h[a]||(b=Ay(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ga||(b=py(this,b))&&this.S.unsubscribe(a,b)};
function py(a,b){var c=b;if(typeof b==="string"){if(a.ya[b])return a.ya[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.ya[b]=c}return c?c:null}
function Ay(a,b){function c(d){var e=setTimeout(function(){if(!a.ga){try{a.S.jb(b,d!=null?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.I;var g=String(e);g in f&&delete f[g]}},0);
ed(a.I,String(e))}
return a.h[b]=c}
p.getPlayerType=function(){return this.W||(ry(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function uy(a){a.cancel();ky(a);a.W=null;a.config&&(a.config.loaded=!1);var b=ry(a);b&&(qy(a)||!xy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&Ru(sy(this),this.G);clearTimeout(this.kb);this.V=!1};
p.ba=function(){uy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.ya=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Xa=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function xy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function sy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function wy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function vy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function oy(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?hd(e):e}return b}
;var By={},Cy="player_uid_"+(Math.random()*1E9>>>0);function Dy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Ld(c):c;var e=Cy+"_"+Ra(c),f=By[e];if(f&&d)return Ey(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new jy(c,e,a,b,void 0);By[e]=f;f.addOnDisposeCallback(function(){delete By[f.getId()]});
return f.api}
function Ey(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Fy=null,Gy=null;
function Hy(){Fw();var a=bn(),b=en(119),c=window.devicePixelRatio>1;if(document.body&&Ej(document.body,"exp-invert-logo"))if(c&&!Ej(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ej(d,"inverted-hdpi")){var e=Cj(d);Dj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ej(document.body,"inverted-hdpi")&&Fj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=fn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Zm[b]:(c=d.toString(16),Zm[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Zm)Zm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Zm[f])));var f=d.join("&");Vm(b,f,63072E3,a.i,c)}}
function Iy(){Jy()}
function Ky(){Ew("ep_init_pr");Jy()}
function Jy(){var a=Fy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ly(){Fy&&Fy.sendAbandonmentPing&&Fy.sendAbandonmentPing();R("PL_ATT")&&gy.dispose();for(var a=wj,b=0,c=vx.length;b<c;b++)a.ra(vx[b]);vx.length=0;Pu("//static.doubleclick.net/instream/ad_status.js");wx=!1;Ml("DCLKSTAT",0);Ac(Gy);Fy&&(Fy.removeEventListener("onVideoDataChange",Iy),Fy.destroy())}
;D("yt.setConfig",Ml);D("yt.config.set",Ml);D("yt.setMsg",Mu);D("yt.msgs.set",Mu);D("yt.logging.errors.log",Nt);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}xv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Aw("embed",["ol"]);c=fx();if(!c.serializedForcedExperimentIds){var d=$l(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Aw("watch",["pbs","pbu","pbp"]);Fy=Dy(a,c);Fy.addEventListener("onVideoDataChange",Iy);Fy.addEventListener("onReady",Ky);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Gy=new Tx(Fy):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Gy=new $x(Fy,a,b));xx();U("ytidb_create_logger_embed_killswitch")||ao();a={};Gx.h||(Gx.h=new Gx);Gx.h.install((a.flush_logs={callback:function(){st()}},a));
Nr();U("ytidb_clear_embedded_player")&&wj.qa(function(){var f,g;if(!dx){var h=ys();us(h,{lc:cx,xd:ax});var k={Sc:{feedbackEndpoint:Kv(Vw),modifyChannelNotificationPreferenceEndpoint:Kv(Ww),playlistEditEndpoint:Kv(Xw),shareEntityEndpoint:Kv(Uw),subscribeEndpoint:Kv(Rw),unsubscribeEndpoint:Kv(Sw),webPlayerShareEntityServiceEndpoint:Kv(Yw)}},l=Gv(),m={};l&&(m.client_location=l);f===void 0&&(f=Sm());g===void 0&&(g=h.resolve(cx));Kw(k,g,f,m);us(h,{lc:Qw,yd:Jw.h});dx=h.resolve(Qw)}rx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||hy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||iy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||yx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||wv);D("yt.util.activity.init",E("yt.util.activity.init")||as);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||ds);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||bs);window.addEventListener("load",Ql(function(){Hy()}));
window.addEventListener("pageshow",Ql(function(a){a.persisted||Hy()}));
window.addEventListener("pagehide",Ql(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ly():a.persisted||Ly()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=Nl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Nt(e):Ot(e))};
pe=Pt;window.addEventListener("unhandledrejection",function(a){Pt(a.reason)});
Nb(R("ERRORS")||[],function(a){Nt.apply(null,a)});
Ml("ERRORS",[]);}).call(this);
