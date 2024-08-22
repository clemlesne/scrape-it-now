;(function (w) {
  if (w.__clearbit_tagsjs) {
    w.console &&
      w.console.error &&
      w.console.error("Clearbit tags.js snippet included twice.");
    return;
  }

  w.__clearbit_tagsjs = true;

  

  var destjs = document.createElement("script");
  destjs.src = 'https://x.clearbitjs.com/v2/pk_3d711a6e26de5ddb47443d8db170d506/destinations.min.js';
  destjs.referrerPolicy = 'strict-origin-when-cross-origin';

  var first = document.getElementsByTagName("script")[0];
  destjs.async = true;
  first.parentNode.insertBefore(destjs, first);


  
    
      var tracking = (w.clearbit = w.clearbit || []);

      
      w.clearbit._writeKey = 'pk_3d711a6e26de5ddb47443d8db170d506';
      w.clearbit._apiHost = 'x.clearbitjs.com';

      

      if (!tracking.initialize) {
        if (tracking.invoked) {
          w.console &&
            console.error &&
            console.error("Clearbit tracking snippet included twice.");
        } else {
          (tracking.invoked = !0),
            (tracking.methods = [
              "trackSubmit",
              "trackClick",
              "trackLink",
              "trackForm",
              "pageview",
              "identify",
              "reset",
              "group",
              "track",
              "ready",
              "alias",
              "page",
              "once",
              "off",
              "on",
            ]),
            (tracking.factory = function (e) {
              return function () {
                var r = Array.prototype.slice.call(arguments);
                return r.unshift(e), tracking.push(r), tracking;
              };
            });

          for (var r = 0; r < tracking.methods.length; r++) {
            var o = tracking.methods[r];
            tracking[o] = tracking.factory(o);
          }

          var clearbitjs = document.createElement("script");
          clearbitjs.src = 'https://x.clearbitjs.com/v2/pk_3d711a6e26de5ddb47443d8db170d506/tracking.min.js';
          clearbitjs.referrerPolicy = 'strict-origin-when-cross-origin';

          var first = document.getElementsByTagName("script")[0];
          clearbitjs.async = true;
          first.parentNode.insertBefore(clearbitjs, first);
        }
      }
    

    
      tracking.page();
    

    
      parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BHXf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tryClearbitIdentify=exports.extractUserIdFromTraits=exports.looksLikeBusinessEmail=exports.isCurrentFormLooksValuable=exports.isCurrentPathLooksValuable=exports.canIdentifyFromFormsAndFetch=exports.canAutomaticallyIdentify=void 0;var e=["login","register","signup","sign-up","signin","sign-in","auth","create-account","contact","about","request","pricing"],i=["wpforms-form","elementor-form","hs-form","jotform-form"],n=["formspree","getform","list-manage","mailerlite","mandrill","sendgrid","sendinblue","activehosted"];function o(e){return"function"==typeof e}function t(){return"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}function r(){var e,i;return window.analytics&&o(window.analytics.identify)&&o(window.analytics.ready)&&Boolean((null===(e=window.analytics)||void 0===e?void 0:e.SNIPPET_VERSION)||(null===(i=window.analytics.settings)||void 0===i?void 0:i.writeKey))}function d(){return window.amplitude&&o(window.amplitude.identify)}function a(){var e;return!!(null===(e=null===window||void 0===window?void 0:window.mixpanel)||void 0===e?void 0:e.people)}function l(){return window.heap&&o(window.heap.addUserProperties)}function s(e){return!!t()&&("any"===e?r()||d()||a()||l():"segment"===e?r():"amplitude"===e?d():"mixpanel"===e?a():"heap"===e&&l())}function u(){return"undefined"!=typeof document&&"undefined"!=typeof window&&void 0!==document.addEventListener&&void 0!==document.querySelector&&void 0!==window.fetch&&"undefined"!=typeof Promise}function c(){var i=(window.__test_location_pathname||window.location.pathname||"").toLowerCase();return!!e.some(function(e){return i.indexOf(e.toLowerCase())>-1})}function w(e){return!(!n.some(function(i){var n;return null===(n=e.action)||void 0===n?void 0:n.includes(i)})&&!i.some(function(i){var n;return null===(n=e.className)||void 0===n?void 0:n.includes(i)}))}function f(e){return!!/^\S+@\S+\.\S+$/.test(e)&&!/@(?:hotmail|gmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t-online|web\.|online\.|aol\.|live\.)/i.test(e)}function m(e){return(null==e?void 0:e.userId)?e.userId:(null==e?void 0:e.user_id)?e.user_id:(null==e?void 0:e.email)?e.email:(null==e?void 0:e.Email)?e.Email:void 0}function v(e,i,n){var o,t,r,d;if(i){var a="sessionStorage"in window&&(null===(o=null===window||void 0===window?void 0:window.sessionStorage)||void 0===o?void 0:o.setItem);if(a&&(null===(r=(t=window.sessionStorage).getItem)||void 0===r?void 0:r.call(t,"cbi"))===i.toString())return!1;var l=JSON.parse(JSON.stringify(n||{}));if(l.method=e,null===(d=null===window||void 0===window?void 0:window.clearbit)||void 0===d?void 0:d.identify)return window.clearbit.identify(i,l),a&&window.sessionStorage.setItem("cbi",i.toString()),!0}return!1}exports.canAutomaticallyIdentify=s,exports.canIdentifyFromFormsAndFetch=u,exports.isCurrentPathLooksValuable=c,exports.isCurrentFormLooksValuable=w,exports.looksLikeBusinessEmail=f,exports.extractUserIdFromTraits=m,exports.tryClearbitIdentify=v;
},{}],"bOht":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapAmplitudeIdentify=void 0;var n=require("./util");function o(e){for(var t={},r=0;r<e.length;r++){var n=e[r],o=n.name,i=n.args;"set"!==o&&"setOnce"!==o||(t[i[0]]=i[1])}return t}function i(e){return e&&void 0!==e._q}function s(){window.amplitude&&(window.amplitude=new Proxy(window.amplitude,{get:function(s,a,l){for(var f=[],u=3;u<arguments.length;u++)f[u-3]=arguments[u];return"__isProxy"===a||("identify"===a?function(u,p){for(var c=[],y=2;y<arguments.length;y++)c[y-2]=arguments[y];var d=s[a];if(d instanceof Function){try{if(!s.__isProxy){var v=void 0,m=void 0;if(i(u))m=o(r([],u._q,!0));else if("function"==typeof u.getUserProperties){(g=u.getUserProperties())&&(m=t(t({},g.$set||{}),g.$setOnce||{}))}else if("object"===e(u.userPropertiesOperations)){var g;(g=u.userPropertiesOperations)&&(m=t(t({},g.$set||{}),g.$setOnce||{}))}v=(null==p?void 0:p.user_id)?p.user_id:(0,n.extractUserIdFromTraits)(m),(0,n.tryClearbitIdentify)("amplitude",v,m)}}catch(_){}return Reflect.apply(d,s,r([u,p],c,!0))}return Reflect.get.apply(Reflect,r([s,a,l],f,!1))}:Reflect.get.apply(Reflect,r([s,a,l],f,!1)))}}))}exports.wrapAmplitudeIdentify=s;
},{"./util":"BHXf"}],"ybEZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapFormSubmit=void 0;var e=require("./util");function t(){"readyState"in document&&"loading"===document.readyState?document.addEventListener("DOMContentLoaded",r,!1):r()}function r(){document.querySelectorAll("form").forEach(function(e){e.hasAttribute("data-cb-wrapper")||(e.addEventListener("submit",a,{capture:!0,passive:!1}),e.setAttribute("data-cb-wrapper","true"))})}function a(t){try{var r="",a=t.currentTarget,i=Array.from(a.elements),n=i.find(function(e){return"email"===e.type||"email"===e.name.toLowerCase()});if(n)(0,e.looksLikeBusinessEmail)(n.value)&&(r=n.value);else{var o=i.find(function(t){return(0,e.looksLikeBusinessEmail)(t.value||"")});o&&(r=o.value)}((0,e.isCurrentPathLooksValuable)()||(0,e.isCurrentFormLooksValuable)(a))&&(0,e.tryClearbitIdentify)("form",r,{email:r})}catch(u){}}exports.wrapFormSubmit=t;
},{"./util":"BHXf"}],"rXKW":[function(require,module,exports) {
"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}var t=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapHeapUserProperties=void 0;var e=require("./util");function o(){(null===window||void 0===window?void 0:window.heap)&&(window.heap=new Proxy(window.heap,{get:function(o,n,i){for(var a=this,p=[],c=3;c<arguments.length;c++)p[c-3]=arguments[c];return"__isProxy"===n||("addUserProperties"===n?function(){for(var t=[],p=0;p<arguments.length;p++)t[p]=arguments[p];var c=o[n];if(c instanceof Function){try{if(!o.__isProxy){var l=void 0;"object"===r(t[0])&&(l=t[0]);var y=(0,e.extractUserIdFromTraits)(l);(0,e.tryClearbitIdentify)("heap",y,l)}}catch(s){}return c.apply(a===i?o:a,t)}return c}:Reflect.get.apply(Reflect,t([o,n,i],p,!1)))}}))}exports.wrapHeapUserProperties=o;
},{"./util":"BHXf"}],"fqEG":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapMixpanelPeople=void 0;var o=require("./util");function r(){var r;(null===(r=null===window||void 0===window?void 0:window.mixpanel)||void 0===r?void 0:r.people)&&(window.mixpanel.people=new Proxy(window.mixpanel.people,{get:function(r,n,i){for(var l=[],p=3;p<arguments.length;p++)l[p-3]=arguments[p];return"__isProxy"===n||("set"===n||"set_once"===n?function(){for(var p=[],a=0;a<arguments.length;a++)p[a]=arguments[a];var c=r[n];if(c instanceof Function){try{if(!r.__isProxy){var f=void 0;"string"==typeof p[0]?(f=f||{})[p[0]]=p[1]:"object"===e(p[0])&&(f=p[0]);var y=(0,o.extractUserIdFromTraits)(f);(0,o.tryClearbitIdentify)("mixpanel",y,f)}}catch(u){}return Reflect.apply(c,r,p)}return Reflect.get.apply(Reflect,t([r,n,i],l,!1))}:Reflect.get.apply(Reflect,t([r,n,i],l,!1)))}}))}exports.wrapMixpanelPeople=r;
},{"./util":"BHXf"}],"rxXe":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,n=0,i=e.length;n<i;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapSegmentIdentify=void 0;var r=require("./util");function o(){window.analytics=new Proxy(analytics,{get:function(o,n,i){for(var y=[],c=3;c<arguments.length;c++)y[c-3]=arguments[c];return"__isProxy"===n||("identify"===n?function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];var f=o[n];if(f instanceof Function){try{if(!o.__isProxy){var l=void 0,p=void 0;"string"==typeof c[0]?(l=c[0],"object"===t(c[1])&&(p=c[1])):Array.isArray(c[0])?(l=c[0][0],"object"===t(c[0][1])&&(p=c[0][1])):"object"===t(c[0])&&(p=c[0],l=(0,r.extractUserIdFromTraits)(p)),(0,r.tryClearbitIdentify)("segment",l,p)}}catch(s){}return Reflect.apply(f,o,c)}return Reflect.get.apply(Reflect,e([o,n,i],y,!1))}:Reflect.get.apply(Reflect,e([o,n,i],y,!1)))}})}exports.wrapSegmentIdentify=o;
},{"./util":"BHXf"}],"GliP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapWindowFetch=void 0;var e=require("./util");function t(){window.fetch=i(window.fetch)}function i(t){return function(){for(var i,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];try{if("post"===(o[1]&&o[1].method?o[1].method:"GET").toLowerCase()){var s=null===(i=o[1])||void 0===i?void 0:i.body,a="";if(s)if("string"==typeof s&&s.length<512){var n=s.match(/"email"\s*:\s*"([^"]+?@[^"]+?\.[^"]+?)"/i);if(n&&n[1])(0,e.looksLikeBusinessEmail)(n[1])&&(a=n[1]);else{var l=s.match(/"([^"]+?@[^"]+?\.[^"]+?)"/);l&&l[1]&&(0,e.looksLikeBusinessEmail)(l[1])&&(a=l[1])}}else if(s instanceof FormData){var f=s.get("email")||s.get("Email")||s.get("EMAIL");f?(0,e.looksLikeBusinessEmail)(f.toString())&&(a=f.toString()):s.forEach(function(t){t&&"string"==typeof t&&(0,e.looksLikeBusinessEmail)(t)&&(a=t)})}!(0,e.canAutomaticallyIdentify)("any")&&(0,e.isCurrentPathLooksValuable)()&&(0,e.tryClearbitIdentify)("fetch",a,{email:a})}}catch(c){}return Promise.resolve(t.apply(window,o))}}exports.wrapWindowFetch=t;
},{"./util":"BHXf"}],"DPGg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.automaticIdentifies=exports.setAnalyticsLibraryWrapped=void 0;var e=require("./util"),t=require("./wrap-amplitude-identify"),i=require("./wrap-form-submit"),r=require("./wrap-heap-user-properties"),a=require("./wrap-mixpanel-people"),n=require("./wrap-segment-identify"),p=require("./wrap-window-fetch"),o=3,u=1e3,c=!1;function s(i){void 0===i&&(i=0);try{if((0,e.canAutomaticallyIdentify)("segment")?(c=!0,(0,n.wrapSegmentIdentify)(),analytics.ready(function(){(0,n.wrapSegmentIdentify)()})):(0,e.canAutomaticallyIdentify)("amplitude")?(c=!0,(0,t.wrapAmplitudeIdentify)(),setTimeout(function(){(0,t.wrapAmplitudeIdentify)()},1e4)):(0,e.canAutomaticallyIdentify)("mixpanel")?(c=!0,(0,a.wrapMixpanelPeople)(),setTimeout(function(){(0,a.wrapMixpanelPeople)()},1e4)):(0,e.canAutomaticallyIdentify)("heap")&&(c=!0,(0,r.wrapHeapUserProperties)(),setTimeout(function(){(0,r.wrapHeapUserProperties)()},1e4)),!c&&i<o){var d=u*Math.pow(2,i);setTimeout(function(){s(i+1)},d)}else!c&&(0,e.canIdentifyFromFormsAndFetch)()&&(0,p.wrapWindowFetch)()}catch(m){}}function d(){if((0,e.canIdentifyFromFormsAndFetch)())try{(0,i.wrapFormSubmit)(),setTimeout(d,5e3)}catch(t){}}function m(e){c=e}function f(){s(),d()}exports.setAnalyticsLibraryWrapped=m,exports.automaticIdentifies=f;
},{"./util":"BHXf","./wrap-amplitude-identify":"bOht","./wrap-form-submit":"ybEZ","./wrap-heap-user-properties":"rXKW","./wrap-mixpanel-people":"fqEG","./wrap-segment-identify":"rxXe","./wrap-window-fetch":"GliP"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./automatic-identifies");(0,e.automaticIdentifies)();
},{"./automatic-identifies":"DPGg"}]},{},["QCba"], null)
//# sourceMappingURL=/index.js.map
    
  

  
})(window);
