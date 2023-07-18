function im(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(i,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function om(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ch={exports:{}},Xs={},uh={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=Symbol.for("react.element"),nm=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),um=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),pm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),gu=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var dh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hh=Object.assign,ph={};function ho(e,t,r){this.props=e,this.context=t,this.refs=ph,this.updater=r||dh}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fh(){}fh.prototype=ho.prototype;function pc(e,t,r){this.props=e,this.context=t,this.refs=ph,this.updater=r||dh}var fc=pc.prototype=new fh;fc.constructor=pc;hh(fc,ho.prototype);fc.isPureReactComponent=!0;var vu=Array.isArray,mh=Object.prototype.hasOwnProperty,mc={current:null},gh={key:!0,ref:!0,__self:!0,__source:!0};function vh(e,t,r){var i,o={},n=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(n=""+t.key),t)mh.call(t,i)&&!gh.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var a=Array(c),u=0;u<c;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:Cn,type:e,key:n,ref:s,props:o,_owner:mc.current}}function gm(e,t){return{$$typeof:Cn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cn}function vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var yu=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vm(""+e.key):t.toString(36)}function es(e,t,r,i,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Cn:case nm:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+bl(s,0):i,vu(o)?(r="",e!=null&&(r=e.replace(yu,"$&/")+"/"),es(o,t,r,"",function(u){return u})):o!=null&&(gc(o)&&(o=gm(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(yu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",vu(e))for(var c=0;c<e.length;c++){n=e[c];var a=i+bl(n,c);s+=es(n,t,r,a,o)}else if(a=mm(e),typeof a=="function")for(e=a.call(e),c=0;!(n=e.next()).done;)n=n.value,a=i+bl(n,c++),s+=es(n,t,r,a,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ln(e,t,r){if(e==null)return e;var i=[],o=0;return es(e,i,"","",function(n){return t.call(r,n,o++)}),i}function ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},ts={transition:null},bm={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:ts,ReactCurrentOwner:mc};Q.Children={map:Ln,forEach:function(e,t,r){Ln(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ln(e,function(){t++}),t},toArray:function(e){return Ln(e,function(t){return t})||[]},only:function(e){if(!gc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=ho;Q.Fragment=sm;Q.Profiler=am;Q.PureComponent=pc;Q.StrictMode=lm;Q.Suspense=hm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;Q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=hh({},e.props),o=e.key,n=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,s=mc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)mh.call(t,a)&&!gh.hasOwnProperty(a)&&(i[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:Cn,type:e.type,key:o,ref:n,props:i,_owner:s}};Q.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cm,_context:e},e.Consumer=e};Q.createElement=vh;Q.createFactory=function(e){var t=vh.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:dm,render:e}};Q.isValidElement=gc;Q.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:ym}};Q.memo=function(e,t){return{$$typeof:pm,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ts.transition;ts.transition={};try{e()}finally{ts.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return et.current.useCallback(e,t)};Q.useContext=function(e){return et.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return et.current.useDeferredValue(e)};Q.useEffect=function(e,t){return et.current.useEffect(e,t)};Q.useId=function(){return et.current.useId()};Q.useImperativeHandle=function(e,t,r){return et.current.useImperativeHandle(e,t,r)};Q.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return et.current.useMemo(e,t)};Q.useReducer=function(e,t,r){return et.current.useReducer(e,t,r)};Q.useRef=function(e){return et.current.useRef(e)};Q.useState=function(e){return et.current.useState(e)};Q.useSyncExternalStore=function(e,t,r){return et.current.useSyncExternalStore(e,t,r)};Q.useTransition=function(){return et.current.useTransition()};Q.version="18.2.0";uh.exports=Q;var Gi=uh.exports;const yh=om(Gi),M=im({__proto__:null,default:yh},[Gi]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=Gi,_m=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Cm=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sm={key:!0,ref:!0,__self:!0,__source:!0};function bh(e,t,r){var i,o={},n=null,s=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)km.call(t,i)&&!Sm.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:_m,type:e,key:n,ref:s,props:o,_owner:Cm.current}}Xs.Fragment=xm;Xs.jsx=bh;Xs.jsxs=bh;ch.exports=Xs;var D=ch.exports,aa={},wh={exports:{}},Ct={},_h={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,K){var Y=P.length;P.push(K);e:for(;0<Y;){var he=Y-1>>>1,$e=P[he];if(0<o($e,K))P[he]=K,P[Y]=$e,Y=he;else break e}}function r(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;e:for(var he=0,$e=P.length,$i=$e>>>1;he<$i;){var Qr=2*(he+1)-1,yl=P[Qr],Xr=Qr+1,Tn=P[Xr];if(0>o(yl,Y))Xr<$e&&0>o(Tn,yl)?(P[he]=Tn,P[Xr]=Y,he=Xr):(P[he]=yl,P[Qr]=Y,he=Qr);else if(Xr<$e&&0>o(Tn,Y))P[he]=Tn,P[Xr]=Y,he=Xr;else break e}}return K}function o(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var a=[],u=[],m=1,h=null,p=3,y=!1,g=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var K=r(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=P)i(u),K.sortIndex=K.expirationTime,t(a,K);else break;K=r(u)}}function w(P){if(_=!1,v(P),!g)if(r(a)!==null)g=!0,Se(x);else{var K=r(u);K!==null&&dt(w,K.startTime-P)}}function x(P,K){g=!1,_&&(_=!1,b(z),z=-1),y=!0;var Y=p;try{for(v(K),h=r(a);h!==null&&(!(h.expirationTime>K)||P&&!W());){var he=h.callback;if(typeof he=="function"){h.callback=null,p=h.priorityLevel;var $e=he(h.expirationTime<=K);K=e.unstable_now(),typeof $e=="function"?h.callback=$e:h===r(a)&&i(a),v(K)}else i(a);h=r(a)}if(h!==null)var $i=!0;else{var Qr=r(u);Qr!==null&&dt(w,Qr.startTime-K),$i=!1}return $i}finally{h=null,p=Y,y=!1}}var k=!1,S=null,z=-1,L=5,A=-1;function W(){return!(e.unstable_now()-A<L)}function te(){if(S!==null){var P=e.unstable_now();A=P;var K=!0;try{K=S(!0,P)}finally{K?ee():(k=!1,S=null)}}else k=!1}var ee;if(typeof f=="function")ee=function(){f(te)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ye=fe.port2;fe.port1.onmessage=te,ee=function(){ye.postMessage(null)}}else ee=function(){C(te,0)};function Se(P){S=P,k||(k=!0,ee())}function dt(P,K){z=C(function(){P(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Se(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Y=p;p=K;try{return P()}finally{p=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=p;p=P;try{return K()}finally{p=Y}},e.unstable_scheduleCallback=function(P,K,Y){var he=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?he+Y:he):Y=he,P){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=Y+$e,P={id:m++,callback:K,priorityLevel:P,startTime:Y,expirationTime:$e,sortIndex:-1},Y>he?(P.sortIndex=Y,t(u,P),r(a)===null&&P===r(u)&&(_?(b(z),z=-1):_=!0,dt(w,Y-he))):(P.sortIndex=$e,t(a,P),g||y||(g=!0,Se(x))),P},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(P){var K=p;return function(){var Y=p;p=K;try{return P.apply(this,arguments)}finally{p=Y}}}})(xh);_h.exports=xh;var $m=_h.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh=Gi,yt=$m;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ch=new Set,Go={};function ki(e,t){Zi(e,t),Zi(e+"Capture",t)}function Zi(e,t){for(Go[e]=t,e=0;e<t.length;e++)Ch.add(t[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bu={},wu={};function Em(e){return ca.call(wu,e)?!0:ca.call(bu,e)?!1:zm.test(e)?wu[e]=!0:(bu[e]=!0,!1)}function Am(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tm(e,t,r,i){if(t===null||typeof t>"u"||Am(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,r,i,o,n,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var vc=/[\-:]([a-z])/g;function yc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vc,yc);Ve[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vc,yc);Ve[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vc,yc);Ve[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function bc(e,t,r,i){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tm(t,r,o,i)&&(r=null),i||o===null?Em(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var yr=kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,In=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Sh=Symbol.for("react.provider"),$h=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),zh=Symbol.for("react.offscreen"),_u=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,wl;function Po(e){if(wl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var _l=!1;function xl(e,t){if(!e||_l)return"";_l=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),n=i.stack.split(`
`),s=o.length-1,c=n.length-1;1<=s&&0<=c&&o[s]!==n[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==n[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==n[c]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=c);break}}}finally{_l=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Po(e):""}function Lm(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Li:return"Fragment";case Ti:return"Portal";case ua:return"Profiler";case wc:return"StrictMode";case da:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $h:return(e.displayName||"Context")+".Consumer";case Sh:return(e._context.displayName||"Context")+".Provider";case _c:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:pa(e.type)||"Memo";case _r:t=e._payload,e=e._init;try{return pa(e(t))}catch{}}return null}function Im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(t);case 8:return t===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pm(e){var t=Eh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,n.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=Pm(e))}function Ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Eh(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,t){var r=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function xu(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Mr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Th(e,t){t=t.checked,t!=null&&bc(e,"checked",t,!1)}function ma(e,t){Th(e,t);var r=Mr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ga(e,t.type,r):t.hasOwnProperty("defaultValue")&&ga(e,t.type,Mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ga(e,t,r){(t!=="number"||fs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Oo=Array.isArray;function Hi(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Mr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Oo(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Mr(r)}}function Lh(e,t){var r=Mr(t.value),i=Mr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ih(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ih(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var On,Ph=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(On=On||document.createElement("div"),On.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=On.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Om=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(e){Om.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),No[t]=No[e]})});function Oh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||No.hasOwnProperty(e)&&No[e]?(""+t).trim():t+"px"}function Dh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Oh(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var Dm=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,ji=null,Wi=null;function $u(e){if(e=zn(e)){if(typeof xa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=tl(t),xa(e.stateNode,e.type,t))}}function Rh(e){ji?Wi?Wi.push(e):Wi=[e]:ji=e}function Nh(){if(ji){var e=ji,t=Wi;if(Wi=ji=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function Mh(e,t){return e(t)}function Fh(){}var kl=!1;function Bh(e,t,r){if(kl)return e(t,r);kl=!0;try{return Mh(e,t,r)}finally{kl=!1,(ji!==null||Wi!==null)&&(Fh(),Nh())}}function Jo(e,t){var r=e.stateNode;if(r===null)return null;var i=tl(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var ka=!1;if(pr)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ka=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ka=!1}function Rm(e,t,r,i,o,n,s,c,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var Mo=!1,ms=null,gs=!1,Ca=null,Nm={onError:function(e){Mo=!0,ms=e}};function Mm(e,t,r,i,o,n,s,c,a){Mo=!1,ms=null,Rm.apply(Nm,arguments)}function Fm(e,t,r,i,o,n,s,c,a){if(Mm.apply(this,arguments),Mo){if(Mo){var u=ms;Mo=!1,ms=null}else throw Error(E(198));gs||(gs=!0,Ca=u)}}function Ci(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Vh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(Ci(e)!==e)throw Error(E(188))}function Bm(e){var t=e.alternate;if(!t){if(t=Ci(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var n=o.alternate;if(n===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===r)return zu(o),e;if(n===i)return zu(o),t;n=n.sibling}throw Error(E(188))}if(r.return!==i.return)r=o,i=n;else{for(var s=!1,c=o.child;c;){if(c===r){s=!0,r=o,i=n;break}if(c===i){s=!0,i=o,r=n;break}c=c.sibling}if(!s){for(c=n.child;c;){if(c===r){s=!0,r=n,i=o;break}if(c===i){s=!0,i=n,r=o;break}c=c.sibling}if(!s)throw Error(E(189))}}if(r.alternate!==i)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Uh(e){return e=Bm(e),e!==null?Hh(e):null}function Hh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hh(e);if(t!==null)return t;e=e.sibling}return null}var jh=yt.unstable_scheduleCallback,Eu=yt.unstable_cancelCallback,Vm=yt.unstable_shouldYield,Um=yt.unstable_requestPaint,Ce=yt.unstable_now,Hm=yt.unstable_getCurrentPriorityLevel,Cc=yt.unstable_ImmediatePriority,Wh=yt.unstable_UserBlockingPriority,vs=yt.unstable_NormalPriority,jm=yt.unstable_LowPriority,Kh=yt.unstable_IdlePriority,Gs=null,er=null;function Wm(e){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(Gs,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:qm,Km=Math.log,Ym=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Km(e)/Ym|0)|0}var Dn=64,Rn=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,n=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~o;c!==0?i=Do(c):(n&=s,n!==0&&(i=Do(n)))}else s=r&~o,s!==0?i=Do(s):n!==0&&(i=Do(n));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,n=t&-t,o>=n||o===16&&(n&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Vt(t),o=1<<r,i|=e[r],t&=~o;return i}function Qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes;0<n;){var s=31-Vt(n),c=1<<s,a=o[s];a===-1?(!(c&r)||c&i)&&(o[s]=Qm(c,t)):a<=t&&(e.expiredLanes|=c),n&=~c}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yh(){var e=Dn;return Dn<<=1,!(Dn&4194240)&&(Dn=64),e}function Cl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function Gm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Vt(r),n=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~n}}function Sc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Vt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var ie=0;function qh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qh,$c,Xh,Gh,Zh,$a=!1,Nn=[],Ar=null,Tr=null,Lr=null,en=new Map,tn=new Map,kr=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":en.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tn.delete(t.pointerId)}}function wo(e,t,r,i,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:n,targetContainers:[o]},t!==null&&(t=zn(t),t!==null&&$c(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Jm(e,t,r,i,o){switch(t){case"focusin":return Ar=wo(Ar,e,t,r,i,o),!0;case"dragenter":return Tr=wo(Tr,e,t,r,i,o),!0;case"mouseover":return Lr=wo(Lr,e,t,r,i,o),!0;case"pointerover":var n=o.pointerId;return en.set(n,wo(en.get(n)||null,e,t,r,i,o)),!0;case"gotpointercapture":return n=o.pointerId,tn.set(n,wo(tn.get(n)||null,e,t,r,i,o)),!0}return!1}function Jh(e){var t=ri(e.target);if(t!==null){var r=Ci(t);if(r!==null){if(t=r.tag,t===13){if(t=Vh(r),t!==null){e.blockedOn=t,Zh(e.priority,function(){Xh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);_a=i,r.target.dispatchEvent(i),_a=null}else return t=zn(r),t!==null&&$c(t),e.blockedOn=r,!1;t.shift()}return!0}function Tu(e,t,r){rs(e)&&r.delete(t)}function e0(){$a=!1,Ar!==null&&rs(Ar)&&(Ar=null),Tr!==null&&rs(Tr)&&(Tr=null),Lr!==null&&rs(Lr)&&(Lr=null),en.forEach(Tu),tn.forEach(Tu)}function _o(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,e0)))}function rn(e){function t(o){return _o(o,e)}if(0<Nn.length){_o(Nn[0],e);for(var r=1;r<Nn.length;r++){var i=Nn[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ar!==null&&_o(Ar,e),Tr!==null&&_o(Tr,e),Lr!==null&&_o(Lr,e),en.forEach(t),tn.forEach(t),r=0;r<kr.length;r++)i=kr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<kr.length&&(r=kr[0],r.blockedOn===null);)Jh(r),r.blockedOn===null&&kr.shift()}var Ki=yr.ReactCurrentBatchConfig,bs=!0;function t0(e,t,r,i){var o=ie,n=Ki.transition;Ki.transition=null;try{ie=1,zc(e,t,r,i)}finally{ie=o,Ki.transition=n}}function r0(e,t,r,i){var o=ie,n=Ki.transition;Ki.transition=null;try{ie=4,zc(e,t,r,i)}finally{ie=o,Ki.transition=n}}function zc(e,t,r,i){if(bs){var o=za(e,t,r,i);if(o===null)Ol(e,t,i,ws,r),Au(e,i);else if(Jm(o,e,t,r,i))i.stopPropagation();else if(Au(e,i),t&4&&-1<Zm.indexOf(e)){for(;o!==null;){var n=zn(o);if(n!==null&&Qh(n),n=za(e,t,r,i),n===null&&Ol(e,t,i,ws,r),n===o)break;o=n}o!==null&&i.stopPropagation()}else Ol(e,t,i,null,r)}}var ws=null;function za(e,t,r,i){if(ws=null,e=kc(i),e=ri(e),e!==null)if(t=Ci(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Vh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ws=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hm()){case Cc:return 1;case Wh:return 4;case vs:case jm:return 16;case Kh:return 536870912;default:return 16}default:return 16}}var $r=null,Ec=null,is=null;function tp(){if(is)return is;var e,t=Ec,r=t.length,i,o="value"in $r?$r.value:$r.textContent,n=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===o[n-i];i++);return is=o.slice(e,1<i?1-i:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function Lu(){return!1}function St(e){function t(r,i,o,n,s){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Mn:Lu,this.isPropagationStopped=Lu,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=St(po),$n=ve({},po,{view:0,detail:0}),i0=St($n),Sl,$l,xo,Zs=ve({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Sl=e.screenX-xo.screenX,$l=e.screenY-xo.screenY):$l=Sl=0,xo=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Iu=St(Zs),o0=ve({},Zs,{dataTransfer:0}),n0=St(o0),s0=ve({},$n,{relatedTarget:0}),zl=St(s0),l0=ve({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=St(l0),c0=ve({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u0=St(c0),d0=ve({},po,{data:0}),Pu=St(d0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f0[e])?!!t[e]:!1}function Tc(){return m0}var g0=ve({},$n,{key:function(e){if(e.key){var t=h0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v0=St(g0),y0=ve({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=St(y0),b0=ve({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),w0=St(b0),_0=ve({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=St(_0),k0=ve({},Zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=St(k0),S0=[9,13,27,32],Lc=pr&&"CompositionEvent"in window,Fo=null;pr&&"documentMode"in document&&(Fo=document.documentMode);var $0=pr&&"TextEvent"in window&&!Fo,rp=pr&&(!Lc||Fo&&8<Fo&&11>=Fo),Du=String.fromCharCode(32),Ru=!1;function ip(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function z0(e,t){switch(e){case"compositionend":return op(t);case"keypress":return t.which!==32?null:(Ru=!0,Du);case"textInput":return e=t.data,e===Du&&Ru?null:e;default:return null}}function E0(e,t){if(Ii)return e==="compositionend"||!Lc&&ip(e,t)?(e=tp(),is=Ec=$r=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rp&&t.locale!=="ko"?null:t.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A0[e.type]:t==="textarea"}function np(e,t,r,i){Rh(i),t=_s(t,"onChange"),0<t.length&&(r=new Ac("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Bo=null,on=null;function T0(e){gp(e,0)}function Js(e){var t=Di(e);if(Ah(t))return e}function L0(e,t){if(e==="change")return t}var sp=!1;if(pr){var El;if(pr){var Al="oninput"in document;if(!Al){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Al=typeof Mu.oninput=="function"}El=Al}else El=!1;sp=El&&(!document.documentMode||9<document.documentMode)}function Fu(){Bo&&(Bo.detachEvent("onpropertychange",lp),on=Bo=null)}function lp(e){if(e.propertyName==="value"&&Js(on)){var t=[];np(t,on,e,kc(e)),Bh(T0,t)}}function I0(e,t,r){e==="focusin"?(Fu(),Bo=t,on=r,Bo.attachEvent("onpropertychange",lp)):e==="focusout"&&Fu()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(on)}function O0(e,t){if(e==="click")return Js(t)}function D0(e,t){if(e==="input"||e==="change")return Js(t)}function R0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:R0;function nn(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!ca.call(t,o)||!Ht(e[o],t[o]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var r=Bu(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bu(r)}}function ap(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ap(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cp(){for(var e=window,t=fs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fs(e.document)}return t}function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N0(e){var t=cp(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ap(r.ownerDocument.documentElement,r)){if(i!==null&&Ic(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,n=Math.min(i.start,o);i=i.end===void 0?n:Math.min(i.end,o),!e.extend&&n>i&&(o=i,i=n,n=o),o=Vu(r,n);var s=Vu(r,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),n>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M0=pr&&"documentMode"in document&&11>=document.documentMode,Pi=null,Ea=null,Vo=null,Aa=!1;function Uu(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Aa||Pi==null||Pi!==fs(i)||(i=Pi,"selectionStart"in i&&Ic(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&nn(Vo,i)||(Vo=i,i=_s(Ea,"onSelect"),0<i.length&&(t=new Ac("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Pi)))}function Fn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Oi={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},Tl={},up={};pr&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function el(e){if(Tl[e])return Tl[e];if(!Oi[e])return e;var t=Oi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in up)return Tl[e]=t[r];return e}var dp=el("animationend"),hp=el("animationiteration"),pp=el("animationstart"),fp=el("transitionend"),mp=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(e,t){mp.set(e,t),ki(t,[e])}for(var Ll=0;Ll<Hu.length;Ll++){var Il=Hu[Ll],F0=Il.toLowerCase(),B0=Il[0].toUpperCase()+Il.slice(1);Kr(F0,"on"+B0)}Kr(dp,"onAnimationEnd");Kr(hp,"onAnimationIteration");Kr(pp,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(fp,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function ju(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Fm(i,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var n=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],a=c.instance,u=c.currentTarget;if(c=c.listener,a!==n&&o.isPropagationStopped())break e;ju(o,c,u),n=a}else for(s=0;s<i.length;s++){if(c=i[s],a=c.instance,u=c.currentTarget,c=c.listener,a!==n&&o.isPropagationStopped())break e;ju(o,c,u),n=a}}}if(gs)throw e=Ca,gs=!1,Ca=null,e}function ce(e,t){var r=t[Oa];r===void 0&&(r=t[Oa]=new Set);var i=e+"__bubble";r.has(i)||(vp(t,e,2,!1),r.add(i))}function Pl(e,t,r){var i=0;t&&(i|=4),vp(r,e,i,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[Bn]){e[Bn]=!0,Ch.forEach(function(r){r!=="selectionchange"&&(V0.has(r)||Pl(r,!1,e),Pl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bn]||(t[Bn]=!0,Pl("selectionchange",!1,t))}}function vp(e,t,r,i){switch(ep(t)){case 1:var o=t0;break;case 4:o=r0;break;default:o=zc}r=o.bind(null,t,r,e),o=void 0,!ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ol(e,t,r,i,o){var n=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;c!==null;){if(s=ri(c),s===null)return;if(a=s.tag,a===5||a===6){i=n=s;continue e}c=c.parentNode}}i=i.return}Bh(function(){var u=n,m=kc(r),h=[];e:{var p=mp.get(e);if(p!==void 0){var y=Ac,g=e;switch(e){case"keypress":if(os(r)===0)break e;case"keydown":case"keyup":y=v0;break;case"focusin":g="focus",y=zl;break;case"focusout":g="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=w0;break;case dp:case hp:case pp:y=a0;break;case fp:y=x0;break;case"scroll":y=i0;break;case"wheel":y=C0;break;case"copy":case"cut":case"paste":y=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ou}var _=(t&4)!==0,C=!_&&e==="scroll",b=_?p!==null?p+"Capture":null:p;_=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,b!==null&&(w=Jo(f,b),w!=null&&_.push(ln(f,w,v)))),C)break;f=f.return}0<_.length&&(p=new y(p,g,null,r,m),h.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==_a&&(g=r.relatedTarget||r.fromElement)&&(ri(g)||g[fr]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(g=r.relatedTarget||r.toElement,y=u,g=g?ri(g):null,g!==null&&(C=Ci(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(_=Iu,w="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ou,w="onPointerLeave",b="onPointerEnter",f="pointer"),C=y==null?p:Di(y),v=g==null?p:Di(g),p=new _(w,f+"leave",y,r,m),p.target=C,p.relatedTarget=v,w=null,ri(m)===u&&(_=new _(b,f+"enter",g,r,m),_.target=v,_.relatedTarget=C,w=_),C=w,y&&g)t:{for(_=y,b=g,f=0,v=_;v;v=zi(v))f++;for(v=0,w=b;w;w=zi(w))v++;for(;0<f-v;)_=zi(_),f--;for(;0<v-f;)b=zi(b),v--;for(;f--;){if(_===b||b!==null&&_===b.alternate)break t;_=zi(_),b=zi(b)}_=null}else _=null;y!==null&&Wu(h,p,y,_,!1),g!==null&&C!==null&&Wu(h,C,g,_,!0)}}e:{if(p=u?Di(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var x=L0;else if(Nu(p))if(sp)x=D0;else{x=P0;var k=I0}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=O0);if(x&&(x=x(e,u))){np(h,x,r,m);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&ga(p,"number",p.value)}switch(k=u?Di(u):window,e){case"focusin":(Nu(k)||k.contentEditable==="true")&&(Pi=k,Ea=u,Vo=null);break;case"focusout":Vo=Ea=Pi=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,Uu(h,r,m);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Uu(h,r,m)}var S;if(Lc)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ii?ip(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(rp&&r.locale!=="ko"&&(Ii||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ii&&(S=tp()):($r=m,Ec="value"in $r?$r.value:$r.textContent,Ii=!0)),k=_s(u,z),0<k.length&&(z=new Pu(z,e,null,r,m),h.push({event:z,listeners:k}),S?z.data=S:(S=op(r),S!==null&&(z.data=S)))),(S=$0?z0(e,r):E0(e,r))&&(u=_s(u,"onBeforeInput"),0<u.length&&(m=new Pu("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:u}),m.data=S))}gp(h,t)})}function ln(e,t,r){return{instance:e,listener:t,currentTarget:r}}function _s(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,n=o.stateNode;o.tag===5&&n!==null&&(o=n,n=Jo(e,r),n!=null&&i.unshift(ln(e,n,o)),n=Jo(e,t),n!=null&&i.push(ln(e,n,o))),e=e.return}return i}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,r,i,o){for(var n=t._reactName,s=[];r!==null&&r!==i;){var c=r,a=c.alternate,u=c.stateNode;if(a!==null&&a===i)break;c.tag===5&&u!==null&&(c=u,o?(a=Jo(r,n),a!=null&&s.unshift(ln(r,a,c))):o||(a=Jo(r,n),a!=null&&s.push(ln(r,a,c)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var U0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(H0,"")}function Vn(e,t,r){if(t=Ku(t),Ku(e)!==t&&r)throw Error(E(425))}function xs(){}var Ta=null,La=null;function Ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(K0)}:Pa;function K0(e){setTimeout(function(){throw e})}function Dl(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),rn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);rn(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Jt="__reactFiber$"+fo,an="__reactProps$"+fo,fr="__reactContainer$"+fo,Oa="__reactEvents$"+fo,Y0="__reactListeners$"+fo,q0="__reactHandles$"+fo;function ri(e){var t=e[Jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[fr]||r[Jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=qu(e);e!==null;){if(r=e[Jt])return r;e=qu(e)}return t}e=r,r=e.parentNode}return null}function zn(e){return e=e[Jt]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function tl(e){return e[an]||null}var Da=[],Ri=-1;function Yr(e){return{current:e}}function ue(e){0>Ri||(e.current=Da[Ri],Da[Ri]=null,Ri--)}function ae(e,t){Ri++,Da[Ri]=e.current,e.current=t}var Fr={},Ye=Yr(Fr),nt=Yr(!1),ci=Fr;function Ji(e,t){var r=e.type.contextTypes;if(!r)return Fr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},n;for(n in r)o[n]=t[n];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function st(e){return e=e.childContextTypes,e!=null}function ks(){ue(nt),ue(Ye)}function Qu(e,t,r){if(Ye.current!==Fr)throw Error(E(168));ae(Ye,t),ae(nt,r)}function yp(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,Im(e)||"Unknown",o));return ve({},r,i)}function Cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,ci=Ye.current,ae(Ye,e),ae(nt,nt.current),!0}function Xu(e,t,r){var i=e.stateNode;if(!i)throw Error(E(169));r?(e=yp(e,t,ci),i.__reactInternalMemoizedMergedChildContext=e,ue(nt),ue(Ye),ae(Ye,e)):ue(nt),ae(nt,r)}var sr=null,rl=!1,Rl=!1;function bp(e){sr===null?sr=[e]:sr.push(e)}function Q0(e){rl=!0,bp(e)}function qr(){if(!Rl&&sr!==null){Rl=!0;var e=0,t=ie;try{var r=sr;for(ie=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}sr=null,rl=!1}catch(o){throw sr!==null&&(sr=sr.slice(e+1)),jh(Cc,qr),o}finally{ie=t,Rl=!1}}return null}var Ni=[],Mi=0,Ss=null,$s=0,$t=[],zt=0,ui=null,ar=1,cr="";function Zr(e,t){Ni[Mi++]=$s,Ni[Mi++]=Ss,Ss=e,$s=t}function wp(e,t,r){$t[zt++]=ar,$t[zt++]=cr,$t[zt++]=ui,ui=e;var i=ar;e=cr;var o=32-Vt(i)-1;i&=~(1<<o),r+=1;var n=32-Vt(t)+o;if(30<n){var s=o-o%5;n=(i&(1<<s)-1).toString(32),i>>=s,o-=s,ar=1<<32-Vt(t)+o|r<<o|i,cr=n+e}else ar=1<<n|r<<o|i,cr=e}function Pc(e){e.return!==null&&(Zr(e,1),wp(e,1,0))}function Oc(e){for(;e===Ss;)Ss=Ni[--Mi],Ni[Mi]=null,$s=Ni[--Mi],Ni[Mi]=null;for(;e===ui;)ui=$t[--zt],$t[zt]=null,cr=$t[--zt],$t[zt]=null,ar=$t[--zt],$t[zt]=null}var vt=null,ft=null,pe=!1,Bt=null;function _p(e,t){var r=Et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,ft=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ui!==null?{id:ar,overflow:cr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,ft=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(pe){var t=ft;if(t){var r=t;if(!Gu(e,t)){if(Ra(e))throw Error(E(418));t=Ir(r.nextSibling);var i=vt;t&&Gu(e,t)?_p(i,r):(e.flags=e.flags&-4097|2,pe=!1,vt=e)}}else{if(Ra(e))throw Error(E(418));e.flags=e.flags&-4097|2,pe=!1,vt=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Un(e){if(e!==vt)return!1;if(!pe)return Zu(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ia(e.type,e.memoizedProps)),t&&(t=ft)){if(Ra(e))throw xp(),Error(E(418));for(;t;)_p(e,t),t=Ir(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=Ir(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=vt?Ir(e.stateNode.nextSibling):null;return!0}function xp(){for(var e=ft;e;)e=Ir(e.nextSibling)}function eo(){ft=vt=null,pe=!1}function Dc(e){Bt===null?Bt=[e]:Bt.push(e)}var X0=yr.ReactCurrentBatchConfig;function Mt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var zs=Yr(null),Es=null,Fi=null,Rc=null;function Nc(){Rc=Fi=Es=null}function Mc(e){var t=zs.current;ue(zs),e._currentValue=t}function Ma(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Yi(e,t){Es=e,Rc=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ot=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Rc!==e)if(e={context:e,memoizedValue:t,next:null},Fi===null){if(Es===null)throw Error(E(308));Fi=e,Es.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var ii=null;function Fc(e){ii===null?ii=[e]:ii.push(e)}function kp(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,Fc(t)):(r.next=o.next,o.next=r),t.interleaved=r,mr(e,i)}function mr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xr=!1;function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Z&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,mr(e,r)}return o=i.interleaved,o===null?(t.next=t,Fc(i)):(t.next=o.next,o.next=t),i.interleaved=t,mr(e,r)}function ns(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Sc(e,r)}}function Ju(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?o=n=s:n=n.next=s,r=r.next}while(r!==null);n===null?o=n=t:n=n.next=t}else o=n=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function As(e,t,r,i){var o=e.updateQueue;xr=!1;var n=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var a=c,u=a.next;a.next=null,s===null?n=u:s.next=u,s=a;var m=e.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==s&&(c===null?m.firstBaseUpdate=u:c.next=u,m.lastBaseUpdate=a))}if(n!==null){var h=o.baseState;s=0,m=u=a=null,c=n;do{var p=c.lane,y=c.eventTime;if((i&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=e,_=c;switch(p=t,y=r,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(y,h,p);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,p=typeof g=="function"?g.call(y,h,p):g,p==null)break e;h=ve({},h,p);break e;case 2:xr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[c]:p.push(c))}else y={eventTime:y,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(u=m=y,a=h):m=m.next=y,s|=p;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;p=c,c=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(m===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else n===null&&(o.shared.lanes=0);hi|=s,e.lanes=s,e.memoizedState=h}}function ed(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var Sp=new kh.Component().refs;function Fa(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:ve({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var il={isMounted:function(e){return(e=e._reactInternals)?Ci(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Xe(),o=Dr(e),n=ur(i,o);n.payload=t,r!=null&&(n.callback=r),t=Pr(e,n,o),t!==null&&(Ut(t,e,o,i),ns(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Xe(),o=Dr(e),n=ur(i,o);n.tag=1,n.payload=t,r!=null&&(n.callback=r),t=Pr(e,n,o),t!==null&&(Ut(t,e,o,i),ns(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Xe(),i=Dr(e),o=ur(r,i);o.tag=2,t!=null&&(o.callback=t),t=Pr(e,o,i),t!==null&&(Ut(t,e,i,r),ns(t,e,i))}};function td(e,t,r,i,o,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,n,s):t.prototype&&t.prototype.isPureReactComponent?!nn(r,i)||!nn(o,n):!0}function $p(e,t,r){var i=!1,o=Fr,n=t.contextType;return typeof n=="object"&&n!==null?n=Tt(n):(o=st(t)?ci:Ye.current,i=t.contextTypes,n=(i=i!=null)?Ji(e,o):Fr),t=new t(r,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=n),t}function rd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Ba(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Sp,Bc(e);var n=t.contextType;typeof n=="object"&&n!==null?o.context=Tt(n):(n=st(t)?ci:Ye.current,o.context=Ji(e,n)),o.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(Fa(e,t,n,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&il.enqueueReplaceState(o,o.state,null),As(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var i=r.stateNode}if(!i)throw Error(E(147,e));var o=i,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(s){var c=o.refs;c===Sp&&(c=o.refs={}),s===null?delete c[n]:c[n]=s},t._stringRef=n,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Hn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function id(e){var t=e._init;return t(e._payload)}function zp(e){function t(b,f){if(e){var v=b.deletions;v===null?(b.deletions=[f],b.flags|=16):v.push(f)}}function r(b,f){if(!e)return null;for(;f!==null;)t(b,f),f=f.sibling;return null}function i(b,f){for(b=new Map;f!==null;)f.key!==null?b.set(f.key,f):b.set(f.index,f),f=f.sibling;return b}function o(b,f){return b=Rr(b,f),b.index=0,b.sibling=null,b}function n(b,f,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<f?(b.flags|=2,f):v):(b.flags|=2,f)):(b.flags|=1048576,f)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function c(b,f,v,w){return f===null||f.tag!==6?(f=Hl(v,b.mode,w),f.return=b,f):(f=o(f,v),f.return=b,f)}function a(b,f,v,w){var x=v.type;return x===Li?m(b,f,v.props.children,w,v.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_r&&id(x)===f.type)?(w=o(f,v.props),w.ref=ko(b,f,v),w.return=b,w):(w=ds(v.type,v.key,v.props,null,b.mode,w),w.ref=ko(b,f,v),w.return=b,w)}function u(b,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=jl(v,b.mode,w),f.return=b,f):(f=o(f,v.children||[]),f.return=b,f)}function m(b,f,v,w,x){return f===null||f.tag!==7?(f=ai(v,b.mode,w,x),f.return=b,f):(f=o(f,v),f.return=b,f)}function h(b,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hl(""+f,b.mode,v),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case In:return v=ds(f.type,f.key,f.props,null,b.mode,v),v.ref=ko(b,null,f),v.return=b,v;case Ti:return f=jl(f,b.mode,v),f.return=b,f;case _r:var w=f._init;return h(b,w(f._payload),v)}if(Oo(f)||yo(f))return f=ai(f,b.mode,v,null),f.return=b,f;Hn(b,f)}return null}function p(b,f,v,w){var x=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:c(b,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case In:return v.key===x?a(b,f,v,w):null;case Ti:return v.key===x?u(b,f,v,w):null;case _r:return x=v._init,p(b,f,x(v._payload),w)}if(Oo(v)||yo(v))return x!==null?null:m(b,f,v,w,null);Hn(b,v)}return null}function y(b,f,v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(v)||null,c(f,b,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case In:return b=b.get(w.key===null?v:w.key)||null,a(f,b,w,x);case Ti:return b=b.get(w.key===null?v:w.key)||null,u(f,b,w,x);case _r:var k=w._init;return y(b,f,v,k(w._payload),x)}if(Oo(w)||yo(w))return b=b.get(v)||null,m(f,b,w,x,null);Hn(f,w)}return null}function g(b,f,v,w){for(var x=null,k=null,S=f,z=f=0,L=null;S!==null&&z<v.length;z++){S.index>z?(L=S,S=null):L=S.sibling;var A=p(b,S,v[z],w);if(A===null){S===null&&(S=L);break}e&&S&&A.alternate===null&&t(b,S),f=n(A,f,z),k===null?x=A:k.sibling=A,k=A,S=L}if(z===v.length)return r(b,S),pe&&Zr(b,z),x;if(S===null){for(;z<v.length;z++)S=h(b,v[z],w),S!==null&&(f=n(S,f,z),k===null?x=S:k.sibling=S,k=S);return pe&&Zr(b,z),x}for(S=i(b,S);z<v.length;z++)L=y(S,b,z,v[z],w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?z:L.key),f=n(L,f,z),k===null?x=L:k.sibling=L,k=L);return e&&S.forEach(function(W){return t(b,W)}),pe&&Zr(b,z),x}function _(b,f,v,w){var x=yo(v);if(typeof x!="function")throw Error(E(150));if(v=x.call(v),v==null)throw Error(E(151));for(var k=x=null,S=f,z=f=0,L=null,A=v.next();S!==null&&!A.done;z++,A=v.next()){S.index>z?(L=S,S=null):L=S.sibling;var W=p(b,S,A.value,w);if(W===null){S===null&&(S=L);break}e&&S&&W.alternate===null&&t(b,S),f=n(W,f,z),k===null?x=W:k.sibling=W,k=W,S=L}if(A.done)return r(b,S),pe&&Zr(b,z),x;if(S===null){for(;!A.done;z++,A=v.next())A=h(b,A.value,w),A!==null&&(f=n(A,f,z),k===null?x=A:k.sibling=A,k=A);return pe&&Zr(b,z),x}for(S=i(b,S);!A.done;z++,A=v.next())A=y(S,b,z,A.value,w),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?z:A.key),f=n(A,f,z),k===null?x=A:k.sibling=A,k=A);return e&&S.forEach(function(te){return t(b,te)}),pe&&Zr(b,z),x}function C(b,f,v,w){if(typeof v=="object"&&v!==null&&v.type===Li&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case In:e:{for(var x=v.key,k=f;k!==null;){if(k.key===x){if(x=v.type,x===Li){if(k.tag===7){r(b,k.sibling),f=o(k,v.props.children),f.return=b,b=f;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_r&&id(x)===k.type){r(b,k.sibling),f=o(k,v.props),f.ref=ko(b,k,v),f.return=b,b=f;break e}r(b,k);break}else t(b,k);k=k.sibling}v.type===Li?(f=ai(v.props.children,b.mode,w,v.key),f.return=b,b=f):(w=ds(v.type,v.key,v.props,null,b.mode,w),w.ref=ko(b,f,v),w.return=b,b=w)}return s(b);case Ti:e:{for(k=v.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){r(b,f.sibling),f=o(f,v.children||[]),f.return=b,b=f;break e}else{r(b,f);break}else t(b,f);f=f.sibling}f=jl(v,b.mode,w),f.return=b,b=f}return s(b);case _r:return k=v._init,C(b,f,k(v._payload),w)}if(Oo(v))return g(b,f,v,w);if(yo(v))return _(b,f,v,w);Hn(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(r(b,f.sibling),f=o(f,v),f.return=b,b=f):(r(b,f),f=Hl(v,b.mode,w),f.return=b,b=f),s(b)):r(b,f)}return C}var to=zp(!0),Ep=zp(!1),En={},tr=Yr(En),cn=Yr(En),un=Yr(En);function oi(e){if(e===En)throw Error(E(174));return e}function Vc(e,t){switch(ae(un,t),ae(cn,e),ae(tr,En),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ya(t,e)}ue(tr),ae(tr,t)}function ro(){ue(tr),ue(cn),ue(un)}function Ap(e){oi(un.current);var t=oi(tr.current),r=ya(t,e.type);t!==r&&(ae(cn,e),ae(tr,r))}function Uc(e){cn.current===e&&(ue(tr),ue(cn))}var me=Yr(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function Hc(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var ss=yr.ReactCurrentDispatcher,Ml=yr.ReactCurrentBatchConfig,di=0,ge=null,Le=null,Pe=null,Ls=!1,Uo=!1,dn=0,G0=0;function je(){throw Error(E(321))}function jc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ht(e[r],t[r]))return!1;return!0}function Wc(e,t,r,i,o,n){if(di=n,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ss.current=e===null||e.memoizedState===null?tg:rg,e=r(i,o),Uo){n=0;do{if(Uo=!1,dn=0,25<=n)throw Error(E(301));n+=1,Pe=Le=null,t.updateQueue=null,ss.current=ig,e=r(i,o)}while(Uo)}if(ss.current=Is,t=Le!==null&&Le.next!==null,di=0,Pe=Le=ge=null,Ls=!1,t)throw Error(E(300));return e}function Kc(){var e=dn!==0;return dn=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Lt(){if(Le===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Pe===null?ge.memoizedState:Pe.next;if(t!==null)Pe=t,Le=e;else{if(e===null)throw Error(E(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function hn(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Lt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=Le,o=i.baseQueue,n=r.pending;if(n!==null){if(o!==null){var s=o.next;o.next=n.next,n.next=s}i.baseQueue=o=n,r.pending=null}if(o!==null){n=o.next,i=i.baseState;var c=s=null,a=null,u=n;do{var m=u.lane;if((di&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(c=a=h,s=i):a=a.next=h,ge.lanes|=m,hi|=m}u=u.next}while(u!==null&&u!==n);a===null?s=i:a.next=c,Ht(i,t.memoizedState)||(ot=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=a,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do n=o.lane,ge.lanes|=n,hi|=n,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Bl(e){var t=Lt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,n=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do n=e(n,s.action),s=s.next;while(s!==o);Ht(n,t.memoizedState)||(ot=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),r.lastRenderedState=n}return[n,i]}function Tp(){}function Lp(e,t){var r=ge,i=Lt(),o=t(),n=!Ht(i.memoizedState,o);if(n&&(i.memoizedState=o,ot=!0),i=i.queue,Yc(Op.bind(null,r,i,e),[e]),i.getSnapshot!==t||n||Pe!==null&&Pe.memoizedState.tag&1){if(r.flags|=2048,pn(9,Pp.bind(null,r,i,o,t),void 0,null),Oe===null)throw Error(E(349));di&30||Ip(r,t,o)}return o}function Ip(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pp(e,t,r,i){t.value=r,t.getSnapshot=i,Dp(t)&&Rp(e)}function Op(e,t,r){return r(function(){Dp(t)&&Rp(e)})}function Dp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ht(e,r)}catch{return!0}}function Rp(e){var t=mr(e,1);t!==null&&Ut(t,e,1,-1)}function od(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:e},t.queue=e,e=e.dispatch=eg.bind(null,ge,e),[t.memoizedState,e]}function pn(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Np(){return Lt().memoizedState}function ls(e,t,r,i){var o=Zt();ge.flags|=e,o.memoizedState=pn(1|t,r,void 0,i===void 0?null:i)}function ol(e,t,r,i){var o=Lt();i=i===void 0?null:i;var n=void 0;if(Le!==null){var s=Le.memoizedState;if(n=s.destroy,i!==null&&jc(i,s.deps)){o.memoizedState=pn(t,r,n,i);return}}ge.flags|=e,o.memoizedState=pn(1|t,r,n,i)}function nd(e,t){return ls(8390656,8,e,t)}function Yc(e,t){return ol(2048,8,e,t)}function Mp(e,t){return ol(4,2,e,t)}function Fp(e,t){return ol(4,4,e,t)}function Bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vp(e,t,r){return r=r!=null?r.concat([e]):null,ol(4,4,Bp.bind(null,t,e),r)}function qc(){}function Up(e,t){var r=Lt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&jc(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Hp(e,t){var r=Lt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&jc(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function jp(e,t,r){return di&21?(Ht(r,t)||(r=Yh(),ge.lanes|=r,hi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=r)}function Z0(e,t){var r=ie;ie=r!==0&&4>r?r:4,e(!0);var i=Ml.transition;Ml.transition={};try{e(!1),t()}finally{ie=r,Ml.transition=i}}function Wp(){return Lt().memoizedState}function J0(e,t,r){var i=Dr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Kp(e))Yp(t,r);else if(r=kp(e,t,r,i),r!==null){var o=Xe();Ut(r,e,i,o),qp(r,t,i)}}function eg(e,t,r){var i=Dr(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Kp(e))Yp(t,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var s=t.lastRenderedState,c=n(s,r);if(o.hasEagerState=!0,o.eagerState=c,Ht(c,s)){var a=t.interleaved;a===null?(o.next=o,Fc(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}r=kp(e,t,o,i),r!==null&&(o=Xe(),Ut(r,e,i,o),qp(r,t,i))}}function Kp(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Yp(e,t){Uo=Ls=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qp(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Sc(e,r)}}var Is={readContext:Tt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},tg={readContext:Tt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:nd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ls(4194308,4,Bp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var r=Zt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Zt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=J0.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:od,useDebugValue:qc,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=od(!1),t=e[0];return e=Z0.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=ge,o=Zt();if(pe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),Oe===null)throw Error(E(349));di&30||Ip(i,t,r)}o.memoizedState=r;var n={value:r,getSnapshot:t};return o.queue=n,nd(Op.bind(null,i,n,e),[e]),i.flags|=2048,pn(9,Pp.bind(null,i,n,r,t),void 0,null),r},useId:function(){var e=Zt(),t=Oe.identifierPrefix;if(pe){var r=cr,i=ar;r=(i&~(1<<32-Vt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=G0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rg={readContext:Tt,useCallback:Up,useContext:Tt,useEffect:Yc,useImperativeHandle:Vp,useInsertionEffect:Mp,useLayoutEffect:Fp,useMemo:Hp,useReducer:Fl,useRef:Np,useState:function(){return Fl(hn)},useDebugValue:qc,useDeferredValue:function(e){var t=Lt();return jp(t,Le.memoizedState,e)},useTransition:function(){var e=Fl(hn)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:Lp,useId:Wp,unstable_isNewReconciler:!1},ig={readContext:Tt,useCallback:Up,useContext:Tt,useEffect:Yc,useImperativeHandle:Vp,useInsertionEffect:Mp,useLayoutEffect:Fp,useMemo:Hp,useReducer:Bl,useRef:Np,useState:function(){return Bl(hn)},useDebugValue:qc,useDeferredValue:function(e){var t=Lt();return Le===null?t.memoizedState=e:jp(t,Le.memoizedState,e)},useTransition:function(){var e=Bl(hn)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:Lp,useId:Wp,unstable_isNewReconciler:!1};function io(e,t){try{var r="",i=t;do r+=Lm(i),i=i.return;while(i);var o=r}catch(n){o=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:o,digest:null}}function Vl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var og=typeof WeakMap=="function"?WeakMap:Map;function Qp(e,t,r){r=ur(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Os||(Os=!0,Ga=i),Va(e,t)},r}function Xp(e,t,r){r=ur(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Va(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){Va(e,t),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function sd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new og;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=yg.bind(null,e,t,r),t.then(e,e))}function ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ur(-1,1),t.tag=2,Pr(r,t,1))),r.lanes|=1),e)}var ng=yr.ReactCurrentOwner,ot=!1;function Qe(e,t,r,i){t.child=e===null?Ep(t,null,r,i):to(t,e.child,r,i)}function cd(e,t,r,i,o){r=r.render;var n=t.ref;return Yi(t,o),i=Wc(e,t,r,i,n,o),r=Kc(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(pe&&r&&Pc(t),t.flags|=1,Qe(e,t,i,o),t.child)}function ud(e,t,r,i,o){if(e===null){var n=r.type;return typeof n=="function"&&!ru(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=n,Gp(e,t,n,i,o)):(e=ds(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!(e.lanes&o)){var s=n.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(s,i)&&e.ref===t.ref)return gr(e,t,o)}return t.flags|=1,e=Rr(n,i),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,r,i,o){if(e!==null){var n=e.memoizedProps;if(nn(n,i)&&e.ref===t.ref)if(ot=!1,t.pendingProps=i=n,(e.lanes&o)!==0)e.flags&131072&&(ot=!0);else return t.lanes=e.lanes,gr(e,t,o)}return Ua(e,t,r,i,o)}function Zp(e,t,r){var i=t.pendingProps,o=i.children,n=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Vi,pt),pt|=r;else{if(!(r&1073741824))return e=n!==null?n.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Vi,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=n!==null?n.baseLanes:r,ae(Vi,pt),pt|=i}else n!==null?(i=n.baseLanes|r,t.memoizedState=null):i=r,ae(Vi,pt),pt|=i;return Qe(e,t,o,r),t.child}function Jp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ua(e,t,r,i,o){var n=st(r)?ci:Ye.current;return n=Ji(t,n),Yi(t,o),r=Wc(e,t,r,i,n,o),i=Kc(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(pe&&i&&Pc(t),t.flags|=1,Qe(e,t,r,o),t.child)}function dd(e,t,r,i,o){if(st(r)){var n=!0;Cs(t)}else n=!1;if(Yi(t,o),t.stateNode===null)as(e,t),$p(t,r,i),Ba(t,r,i,o),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var a=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=st(r)?ci:Ye.current,u=Ji(t,u));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||a!==u)&&rd(t,s,i,u),xr=!1;var p=t.memoizedState;s.state=p,As(t,i,s,o),a=t.memoizedState,c!==i||p!==a||nt.current||xr?(typeof m=="function"&&(Fa(t,r,m,i),a=t.memoizedState),(c=xr||td(t,r,c,i,p,a,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=a),s.props=i,s.state=a,s.context=u,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Cp(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Mt(t.type,c),s.props=u,h=t.pendingProps,p=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=Tt(a):(a=st(r)?ci:Ye.current,a=Ji(t,a));var y=r.getDerivedStateFromProps;(m=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==h||p!==a)&&rd(t,s,i,a),xr=!1,p=t.memoizedState,s.state=p,As(t,i,s,o);var g=t.memoizedState;c!==h||p!==g||nt.current||xr?(typeof y=="function"&&(Fa(t,r,y,i),g=t.memoizedState),(u=xr||td(t,r,u,i,p,g,a)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),s.props=i,s.state=g,s.context=a,i=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return Ha(e,t,r,i,n,o)}function Ha(e,t,r,i,o,n){Jp(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&Xu(t,r,!1),gr(e,t,n);i=t.stateNode,ng.current=t;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=to(t,e.child,null,n),t.child=to(t,null,c,n)):Qe(e,t,c,n),t.memoizedState=i.state,o&&Xu(t,r,!0),t.child}function ef(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),Vc(e,t.containerInfo)}function hd(e,t,r,i,o){return eo(),Dc(o),t.flags|=256,Qe(e,t,r,i),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function tf(e,t,r){var i=t.pendingProps,o=me.current,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(me,o&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,n?(i=t.mode,n=t.child,s={mode:"hidden",children:s},!(i&1)&&n!==null?(n.childLanes=0,n.pendingProps=s):n=ll(s,i,0,null),e=ai(e,i,r,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=Wa(r),t.memoizedState=ja,e):Qc(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return sg(e,t,s,i,c,o,r);if(n){n=i.fallback,s=t.mode,o=e.child,c=o.sibling;var a={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=a,t.deletions=null):(i=Rr(o,a),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?n=Rr(c,n):(n=ai(n,s,r,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,s=e.child.memoizedState,s=s===null?Wa(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},n.memoizedState=s,n.childLanes=e.childLanes&~r,t.memoizedState=ja,i}return n=e.child,e=n.sibling,i=Rr(n,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Qc(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jn(e,t,r,i){return i!==null&&Dc(i),to(t,e.child,null,r),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sg(e,t,r,i,o,n,s){if(r)return t.flags&256?(t.flags&=-257,i=Vl(Error(E(422))),jn(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=i.fallback,o=t.mode,i=ll({mode:"visible",children:i.children},o,0,null),n=ai(n,o,s,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,t.mode&1&&to(t,e.child,null,s),t.child.memoizedState=Wa(s),t.memoizedState=ja,n);if(!(t.mode&1))return jn(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,n=Error(E(419)),i=Vl(n,i,void 0),jn(e,t,s,i)}if(c=(s&e.childLanes)!==0,ot||c){if(i=Oe,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==n.retryLane&&(n.retryLane=o,mr(e,o),Ut(i,e,o,-1))}return tu(),i=Vl(Error(E(421))),jn(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bg.bind(null,e),o._reactRetry=t,null):(e=n.treeContext,ft=Ir(o.nextSibling),vt=t,pe=!0,Bt=null,e!==null&&($t[zt++]=ar,$t[zt++]=cr,$t[zt++]=ui,ar=e.id,cr=e.overflow,ui=t),t=Qc(t,i.children),t.flags|=4096,t)}function pd(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ma(e.return,t,r)}function Ul(e,t,r,i,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=i,n.tail=r,n.tailMode=o)}function rf(e,t,r){var i=t.pendingProps,o=i.revealOrder,n=i.tail;if(Qe(e,t,i.children,r),i=me.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,r,t);else if(e.tag===19)pd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ae(me,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Ts(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ul(t,!1,o,r,n);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ts(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ul(t,!0,r,null,n);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function as(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Rr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function lg(e,t,r){switch(t.tag){case 3:ef(t),eo();break;case 5:Ap(t);break;case 1:st(t.type)&&Cs(t);break;case 4:Vc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ae(zs,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ae(me,me.current&1),t.flags|=128,null):r&t.child.childLanes?tf(e,t,r):(ae(me,me.current&1),e=gr(e,t,r),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return rf(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(me,me.current),i)break;return null;case 22:case 23:return t.lanes=0,Zp(e,t,r)}return gr(e,t,r)}var of,Ka,nf,sf;of=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ka=function(){};nf=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,oi(tr.current);var n=null;switch(r){case"input":o=fa(e,o),i=fa(e,i),n=[];break;case"select":o=ve({},o,{value:void 0}),i=ve({},i,{value:void 0}),n=[];break;case"textarea":o=va(e,o),i=va(e,i),n=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=xs)}ba(r,i);var s;r=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in i){var a=i[u];if(c=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&a!==c&&(a!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&c[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(n||(n=[]),n.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(n=n||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(n=n||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",e),n||c===a||(n=[])):(n=n||[]).push(u,a))}r&&(n=n||[]).push("style",r);var u=n;(t.updateQueue=u)&&(t.flags|=4)}};sf=function(e,t,r,i){r!==i&&(t.flags|=4)};function Co(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function ag(e,t,r){var i=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return st(t.type)&&ks(),We(t),null;case 3:return i=t.stateNode,ro(),ue(nt),ue(Ye),Hc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Un(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(ec(Bt),Bt=null))),Ka(e,t),We(t),null;case 5:Uc(t);var o=oi(un.current);if(r=t.type,e!==null&&t.stateNode!=null)nf(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return We(t),null}if(e=oi(tr.current),Un(t)){i=t.stateNode,r=t.type;var n=t.memoizedProps;switch(i[Jt]=t,i[an]=n,e=(t.mode&1)!==0,r){case"dialog":ce("cancel",i),ce("close",i);break;case"iframe":case"object":case"embed":ce("load",i);break;case"video":case"audio":for(o=0;o<Ro.length;o++)ce(Ro[o],i);break;case"source":ce("error",i);break;case"img":case"image":case"link":ce("error",i),ce("load",i);break;case"details":ce("toggle",i);break;case"input":xu(i,n),ce("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!n.multiple},ce("invalid",i);break;case"textarea":Cu(i,n),ce("invalid",i)}ba(r,n),o=null;for(var s in n)if(n.hasOwnProperty(s)){var c=n[s];s==="children"?typeof c=="string"?i.textContent!==c&&(n.suppressHydrationWarning!==!0&&Vn(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(n.suppressHydrationWarning!==!0&&Vn(i.textContent,c,e),o=["children",""+c]):Go.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ce("scroll",i)}switch(r){case"input":Pn(i),ku(i,n,!0);break;case"textarea":Pn(i),Su(i);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(i.onclick=xs)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ih(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[Jt]=t,e[an]=i,of(e,t,!1,!1),t.stateNode=e;e:{switch(s=wa(r,i),r){case"dialog":ce("cancel",e),ce("close",e),o=i;break;case"iframe":case"object":case"embed":ce("load",e),o=i;break;case"video":case"audio":for(o=0;o<Ro.length;o++)ce(Ro[o],e);o=i;break;case"source":ce("error",e),o=i;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=i;break;case"details":ce("toggle",e),o=i;break;case"input":xu(e,i),o=fa(e,i),ce("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=ve({},i,{value:void 0}),ce("invalid",e);break;case"textarea":Cu(e,i),o=va(e,i),ce("invalid",e);break;default:o=i}ba(r,o),c=o;for(n in c)if(c.hasOwnProperty(n)){var a=c[n];n==="style"?Dh(e,a):n==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ph(e,a)):n==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Zo(e,a):typeof a=="number"&&Zo(e,""+a):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(Go.hasOwnProperty(n)?a!=null&&n==="onScroll"&&ce("scroll",e):a!=null&&bc(e,n,a,s))}switch(r){case"input":Pn(e),ku(e,i,!1);break;case"textarea":Pn(e),Su(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Mr(i.value));break;case"select":e.multiple=!!i.multiple,n=i.value,n!=null?Hi(e,!!i.multiple,n,!1):i.defaultValue!=null&&Hi(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)sf(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(r=oi(un.current),oi(tr.current),Un(t)){if(i=t.stateNode,r=t.memoizedProps,i[Jt]=t,(n=i.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:Vn(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vn(i.nodeValue,r,(e.mode&1)!==0)}n&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Jt]=t,t.stateNode=i}return We(t),null;case 13:if(ue(me),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ft!==null&&t.mode&1&&!(t.flags&128))xp(),eo(),t.flags|=98560,n=!1;else if(n=Un(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(E(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[Jt]=t}else eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),n=!1}else Bt!==null&&(ec(Bt),Bt=null),n=!0;if(!n)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ie===0&&(Ie=3):tu())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return ro(),Ka(e,t),e===null&&sn(t.stateNode.containerInfo),We(t),null;case 10:return Mc(t.type._context),We(t),null;case 17:return st(t.type)&&ks(),We(t),null;case 19:if(ue(me),n=t.memoizedState,n===null)return We(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)Co(n,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ts(e),s!==null){for(t.flags|=128,Co(n,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)n=r,e=i,n.flags&=14680066,s=n.alternate,s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ae(me,me.current&1|2),t.child}e=e.sibling}n.tail!==null&&Ce()>oo&&(t.flags|=128,i=!0,Co(n,!1),t.lanes=4194304)}else{if(!i)if(e=Ts(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Co(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!pe)return We(t),null}else 2*Ce()-n.renderingStartTime>oo&&r!==1073741824&&(t.flags|=128,i=!0,Co(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(r=n.last,r!==null?r.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Ce(),t.sibling=null,r=me.current,ae(me,i?r&1|2:r&1),t):(We(t),null);case 22:case 23:return eu(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?pt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function cg(e,t){switch(Oc(t),t.tag){case 1:return st(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ro(),ue(nt),ue(Ye),Hc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uc(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return ro(),null;case 10:return Mc(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Wn=!1,Ke=!1,ug=typeof WeakSet=="function"?WeakSet:Set,O=null;function Bi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){be(e,t,i)}else r.current=null}function Ya(e,t,r){try{r()}catch(i){be(e,t,i)}}var fd=!1;function dg(e,t){if(Ta=bs,e=cp(),Ic(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,n=i.focusNode;i=i.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var s=0,c=-1,a=-1,u=0,m=0,h=e,p=null;t:for(;;){for(var y;h!==r||o!==0&&h.nodeType!==3||(c=s+o),h!==n||i!==0&&h.nodeType!==3||(a=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===r&&++u===o&&(c=s),p===n&&++m===i&&(a=s),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}r=c===-1||a===-1?null:{start:c,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(La={focusedElem:e,selectionRange:r},bs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,C=g.memoizedState,b=t.stateNode,f=b.getSnapshotBeforeUpdate(t.elementType===t.type?_:Mt(t.type,_),C);b.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){be(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=fd,fd=!1,g}function Ho(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var n=o.destroy;o.destroy=void 0,n!==void 0&&Ya(t,r,n)}o=o.next}while(o!==i)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function qa(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[an],delete t[Oa],delete t[Y0],delete t[q0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function af(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xs));else if(i!==4&&(e=e.child,e!==null))for(Qa(e,t,r),e=e.sibling;e!==null;)Qa(e,t,r),e=e.sibling}function Xa(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Xa(e,t,r),e=e.sibling;e!==null;)Xa(e,t,r),e=e.sibling}var Me=null,Ft=!1;function wr(e,t,r){for(r=r.child;r!==null;)cf(e,t,r),r=r.sibling}function cf(e,t,r){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(Gs,r)}catch{}switch(r.tag){case 5:Ke||Bi(r,t);case 6:var i=Me,o=Ft;Me=null,wr(e,t,r),Me=i,Ft=o,Me!==null&&(Ft?(e=Me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Me.removeChild(r.stateNode));break;case 18:Me!==null&&(Ft?(e=Me,r=r.stateNode,e.nodeType===8?Dl(e.parentNode,r):e.nodeType===1&&Dl(e,r),rn(e)):Dl(Me,r.stateNode));break;case 4:i=Me,o=Ft,Me=r.stateNode.containerInfo,Ft=!0,wr(e,t,r),Me=i,Ft=o;break;case 0:case 11:case 14:case 15:if(!Ke&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var n=o,s=n.destroy;n=n.tag,s!==void 0&&(n&2||n&4)&&Ya(r,t,s),o=o.next}while(o!==i)}wr(e,t,r);break;case 1:if(!Ke&&(Bi(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){be(r,t,c)}wr(e,t,r);break;case 21:wr(e,t,r);break;case 22:r.mode&1?(Ke=(i=Ke)||r.memoizedState!==null,wr(e,t,r),Ke=i):wr(e,t,r);break;default:wr(e,t,r)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ug),t.forEach(function(i){var o=wg.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Rt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var n=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Me=c.stateNode,Ft=!1;break e;case 3:Me=c.stateNode.containerInfo,Ft=!0;break e;case 4:Me=c.stateNode.containerInfo,Ft=!0;break e}c=c.return}if(Me===null)throw Error(E(160));cf(n,s,o),Me=null,Ft=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){be(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Gt(e),i&4){try{Ho(3,e,e.return),nl(3,e)}catch(_){be(e,e.return,_)}try{Ho(5,e,e.return)}catch(_){be(e,e.return,_)}}break;case 1:Rt(t,e),Gt(e),i&512&&r!==null&&Bi(r,r.return);break;case 5:if(Rt(t,e),Gt(e),i&512&&r!==null&&Bi(r,r.return),e.flags&32){var o=e.stateNode;try{Zo(o,"")}catch(_){be(e,e.return,_)}}if(i&4&&(o=e.stateNode,o!=null)){var n=e.memoizedProps,s=r!==null?r.memoizedProps:n,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&n.type==="radio"&&n.name!=null&&Th(o,n),wa(c,s);var u=wa(c,n);for(s=0;s<a.length;s+=2){var m=a[s],h=a[s+1];m==="style"?Dh(o,h):m==="dangerouslySetInnerHTML"?Ph(o,h):m==="children"?Zo(o,h):bc(o,m,h,u)}switch(c){case"input":ma(o,n);break;case"textarea":Lh(o,n);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!n.multiple;var y=n.value;y!=null?Hi(o,!!n.multiple,y,!1):p!==!!n.multiple&&(n.defaultValue!=null?Hi(o,!!n.multiple,n.defaultValue,!0):Hi(o,!!n.multiple,n.multiple?[]:"",!1))}o[an]=n}catch(_){be(e,e.return,_)}}break;case 6:if(Rt(t,e),Gt(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,n=e.memoizedProps;try{o.nodeValue=n}catch(_){be(e,e.return,_)}}break;case 3:if(Rt(t,e),Gt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{rn(t.containerInfo)}catch(_){be(e,e.return,_)}break;case 4:Rt(t,e),Gt(e);break;case 13:Rt(t,e),Gt(e),o=e.child,o.flags&8192&&(n=o.memoizedState!==null,o.stateNode.isHidden=n,!n||o.alternate!==null&&o.alternate.memoizedState!==null||(Zc=Ce())),i&4&&gd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(Ke=(u=Ke)||m,Rt(t,e),Ke=u):Rt(t,e),Gt(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(O=e,m=e.child;m!==null;){for(h=O=m;O!==null;){switch(p=O,y=p.child,p.tag){case 0:case 11:case 14:case 15:Ho(4,p,p.return);break;case 1:Bi(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(_){be(i,r,_)}}break;case 5:Bi(p,p.return);break;case 22:if(p.memoizedState!==null){yd(h);continue}}y!==null?(y.return=p,O=y):yd(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(n=o.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(c=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=Oh("display",s))}catch(_){be(e,e.return,_)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){be(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rt(t,e),Gt(e),i&4&&gd(e);break;case 21:break;default:Rt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(af(r)){var i=r;break e}r=r.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Zo(o,""),i.flags&=-33);var n=md(e);Xa(e,n,o);break;case 3:case 4:var s=i.stateNode.containerInfo,c=md(e);Qa(e,c,s);break;default:throw Error(E(161))}}catch(a){be(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hg(e,t,r){O=e,df(e)}function df(e,t,r){for(var i=(e.mode&1)!==0;O!==null;){var o=O,n=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||Wn;if(!s){var c=o.alternate,a=c!==null&&c.memoizedState!==null||Ke;c=Wn;var u=Ke;if(Wn=s,(Ke=a)&&!u)for(O=o;O!==null;)s=O,a=s.child,s.tag===22&&s.memoizedState!==null?bd(o):a!==null?(a.return=s,O=a):bd(o);for(;n!==null;)O=n,df(n),n=n.sibling;O=o,Wn=c,Ke=u}vd(e)}else o.subtreeFlags&8772&&n!==null?(n.return=o,O=n):vd(e)}}function vd(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||nl(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ke)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Mt(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&ed(t,n,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ed(t,s,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&rn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ke||t.flags&512&&qa(t)}catch(p){be(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function yd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function bd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{nl(4,t)}catch(a){be(t,r,a)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(a){be(t,o,a)}}var n=t.return;try{qa(t)}catch(a){be(t,n,a)}break;case 5:var s=t.return;try{qa(t)}catch(a){be(t,s,a)}}}catch(a){be(t,t.return,a)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var pg=Math.ceil,Ps=yr.ReactCurrentDispatcher,Xc=yr.ReactCurrentOwner,At=yr.ReactCurrentBatchConfig,Z=0,Oe=null,ze=null,Fe=0,pt=0,Vi=Yr(0),Ie=0,fn=null,hi=0,sl=0,Gc=0,jo=null,it=null,Zc=0,oo=1/0,nr=null,Os=!1,Ga=null,Or=null,Kn=!1,zr=null,Ds=0,Wo=0,Za=null,cs=-1,us=0;function Xe(){return Z&6?Ce():cs!==-1?cs:cs=Ce()}function Dr(e){return e.mode&1?Z&2&&Fe!==0?Fe&-Fe:X0.transition!==null?(us===0&&(us=Yh()),us):(e=ie,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function Ut(e,t,r,i){if(50<Wo)throw Wo=0,Za=null,Error(E(185));Sn(e,r,i),(!(Z&2)||e!==Oe)&&(e===Oe&&(!(Z&2)&&(sl|=r),Ie===4&&Cr(e,Fe)),lt(e,i),r===1&&Z===0&&!(t.mode&1)&&(oo=Ce()+500,rl&&qr()))}function lt(e,t){var r=e.callbackNode;Xm(e,t);var i=ys(e,e===Oe?Fe:0);if(i===0)r!==null&&Eu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Eu(r),t===1)e.tag===0?Q0(wd.bind(null,e)):bp(wd.bind(null,e)),W0(function(){!(Z&6)&&qr()}),r=null;else{switch(qh(i)){case 1:r=Cc;break;case 4:r=Wh;break;case 16:r=vs;break;case 536870912:r=Kh;break;default:r=vs}r=bf(r,hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function hf(e,t){if(cs=-1,us=0,Z&6)throw Error(E(327));var r=e.callbackNode;if(qi()&&e.callbackNode!==r)return null;var i=ys(e,e===Oe?Fe:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Rs(e,i);else{t=i;var o=Z;Z|=2;var n=ff();(Oe!==e||Fe!==t)&&(nr=null,oo=Ce()+500,li(e,t));do try{gg();break}catch(c){pf(e,c)}while(1);Nc(),Ps.current=n,Z=o,ze!==null?t=0:(Oe=null,Fe=0,t=Ie)}if(t!==0){if(t===2&&(o=Sa(e),o!==0&&(i=o,t=Ja(e,o))),t===1)throw r=fn,li(e,0),Cr(e,i),lt(e,Ce()),r;if(t===6)Cr(e,i);else{if(o=e.current.alternate,!(i&30)&&!fg(o)&&(t=Rs(e,i),t===2&&(n=Sa(e),n!==0&&(i=n,t=Ja(e,n))),t===1))throw r=fn,li(e,0),Cr(e,i),lt(e,Ce()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:Jr(e,it,nr);break;case 3:if(Cr(e,i),(i&130023424)===i&&(t=Zc+500-Ce(),10<t)){if(ys(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pa(Jr.bind(null,e,it,nr),t);break}Jr(e,it,nr);break;case 4:if(Cr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-Vt(i);n=1<<s,s=t[s],s>o&&(o=s),i&=~n}if(i=o,i=Ce()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pg(i/1960))-i,10<i){e.timeoutHandle=Pa(Jr.bind(null,e,it,nr),i);break}Jr(e,it,nr);break;case 5:Jr(e,it,nr);break;default:throw Error(E(329))}}}return lt(e,Ce()),e.callbackNode===r?hf.bind(null,e):null}function Ja(e,t){var r=jo;return e.current.memoizedState.isDehydrated&&(li(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=it,it=r,t!==null&&ec(t)),e}function ec(e){it===null?it=e:it.push.apply(it,e)}function fg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],n=o.getSnapshot;o=o.value;try{if(!Ht(n(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cr(e,t){for(t&=~Gc,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),i=1<<r;e[r]=-1,t&=~i}}function wd(e){if(Z&6)throw Error(E(327));qi();var t=ys(e,0);if(!(t&1))return lt(e,Ce()),null;var r=Rs(e,t);if(e.tag!==0&&r===2){var i=Sa(e);i!==0&&(t=i,r=Ja(e,i))}if(r===1)throw r=fn,li(e,0),Cr(e,t),lt(e,Ce()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,it,nr),lt(e,Ce()),null}function Jc(e,t){var r=Z;Z|=1;try{return e(t)}finally{Z=r,Z===0&&(oo=Ce()+500,rl&&qr())}}function pi(e){zr!==null&&zr.tag===0&&!(Z&6)&&qi();var t=Z;Z|=1;var r=At.transition,i=ie;try{if(At.transition=null,ie=1,e)return e()}finally{ie=i,At.transition=r,Z=t,!(Z&6)&&qr()}}function eu(){pt=Vi.current,ue(Vi)}function li(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,j0(r)),ze!==null)for(r=ze.return;r!==null;){var i=r;switch(Oc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ks();break;case 3:ro(),ue(nt),ue(Ye),Hc();break;case 5:Uc(i);break;case 4:ro();break;case 13:ue(me);break;case 19:ue(me);break;case 10:Mc(i.type._context);break;case 22:case 23:eu()}r=r.return}if(Oe=e,ze=e=Rr(e.current,null),Fe=pt=t,Ie=0,fn=null,Gc=sl=hi=0,it=jo=null,ii!==null){for(t=0;t<ii.length;t++)if(r=ii[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,n=r.pending;if(n!==null){var s=n.next;n.next=o,i.next=s}r.pending=i}ii=null}return e}function pf(e,t){do{var r=ze;try{if(Nc(),ss.current=Is,Ls){for(var i=ge.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ls=!1}if(di=0,Pe=Le=ge=null,Uo=!1,dn=0,Xc.current=null,r===null||r.return===null){Ie=1,fn=t,ze=null;break}e:{var n=e,s=r.return,c=r,a=t;if(t=Fe,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=c,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ld(s);if(y!==null){y.flags&=-257,ad(y,s,c,n,t),y.mode&1&&sd(n,u,t),t=y,a=u;var g=t.updateQueue;if(g===null){var _=new Set;_.add(a),t.updateQueue=_}else g.add(a);break e}else{if(!(t&1)){sd(n,u,t),tu();break e}a=Error(E(426))}}else if(pe&&c.mode&1){var C=ld(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ad(C,s,c,n,t),Dc(io(a,c));break e}}n=a=io(a,c),Ie!==4&&(Ie=2),jo===null?jo=[n]:jo.push(n),n=s;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var b=Qp(n,a,t);Ju(n,b);break e;case 1:c=a;var f=n.type,v=n.stateNode;if(!(n.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Or===null||!Or.has(v)))){n.flags|=65536,t&=-t,n.lanes|=t;var w=Xp(n,c,t);Ju(n,w);break e}}n=n.return}while(n!==null)}gf(r)}catch(x){t=x,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(1)}function ff(){var e=Ps.current;return Ps.current=Is,e===null?Is:e}function tu(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||!(hi&268435455)&&!(sl&268435455)||Cr(Oe,Fe)}function Rs(e,t){var r=Z;Z|=2;var i=ff();(Oe!==e||Fe!==t)&&(nr=null,li(e,t));do try{mg();break}catch(o){pf(e,o)}while(1);if(Nc(),Z=r,Ps.current=i,ze!==null)throw Error(E(261));return Oe=null,Fe=0,Ie}function mg(){for(;ze!==null;)mf(ze)}function gg(){for(;ze!==null&&!Vm();)mf(ze)}function mf(e){var t=yf(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?gf(e):ze=t,Xc.current=null}function gf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cg(r,t),r!==null){r.flags&=32767,ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,ze=null;return}}else if(r=ag(r,t,pt),r!==null){ze=r;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ie===0&&(Ie=5)}function Jr(e,t,r){var i=ie,o=At.transition;try{At.transition=null,ie=1,vg(e,t,r,i)}finally{At.transition=o,ie=i}return null}function vg(e,t,r,i){do qi();while(zr!==null);if(Z&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var n=r.lanes|r.childLanes;if(Gm(e,n),e===Oe&&(ze=Oe=null,Fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Kn||(Kn=!0,bf(vs,function(){return qi(),null})),n=(r.flags&15990)!==0,r.subtreeFlags&15990||n){n=At.transition,At.transition=null;var s=ie;ie=1;var c=Z;Z|=4,Xc.current=null,dg(e,r),uf(r,e),N0(La),bs=!!Ta,La=Ta=null,e.current=r,hg(r),Um(),Z=c,ie=s,At.transition=n}else e.current=r;if(Kn&&(Kn=!1,zr=e,Ds=o),n=e.pendingLanes,n===0&&(Or=null),Wm(r.stateNode),lt(e,Ce()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(Os)throw Os=!1,e=Ga,Ga=null,e;return Ds&1&&e.tag!==0&&qi(),n=e.pendingLanes,n&1?e===Za?Wo++:(Wo=0,Za=e):Wo=0,qr(),null}function qi(){if(zr!==null){var e=qh(Ds),t=At.transition,r=ie;try{if(At.transition=null,ie=16>e?16:e,zr===null)var i=!1;else{if(e=zr,zr=null,Ds=0,Z&6)throw Error(E(331));var o=Z;for(Z|=4,O=e.current;O!==null;){var n=O,s=n.child;if(O.flags&16){var c=n.deletions;if(c!==null){for(var a=0;a<c.length;a++){var u=c[a];for(O=u;O!==null;){var m=O;switch(m.tag){case 0:case 11:case 15:Ho(8,m,n)}var h=m.child;if(h!==null)h.return=m,O=h;else for(;O!==null;){m=O;var p=m.sibling,y=m.return;if(lf(m),m===u){O=null;break}if(p!==null){p.return=y,O=p;break}O=y}}}var g=n.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}O=n}}if(n.subtreeFlags&2064&&s!==null)s.return=n,O=s;else e:for(;O!==null;){if(n=O,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Ho(9,n,n.return)}var b=n.sibling;if(b!==null){b.return=n.return,O=b;break e}O=n.return}}var f=e.current;for(O=f;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=f;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:nl(9,c)}}catch(x){be(c,c.return,x)}if(c===s){O=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,O=w;break e}O=c.return}}if(Z=o,qr(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(Gs,e)}catch{}i=!0}return i}finally{ie=r,At.transition=t}}return!1}function _d(e,t,r){t=io(r,t),t=Qp(e,t,1),e=Pr(e,t,1),t=Xe(),e!==null&&(Sn(e,1,t),lt(e,t))}function be(e,t,r){if(e.tag===3)_d(e,e,r);else for(;t!==null;){if(t.tag===3){_d(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){e=io(r,e),e=Xp(t,e,1),t=Pr(t,e,1),e=Xe(),t!==null&&(Sn(t,1,e),lt(t,e));break}}t=t.return}}function yg(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&r,Oe===e&&(Fe&r)===r&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>Ce()-Zc?li(e,0):Gc|=r),lt(e,t)}function vf(e,t){t===0&&(e.mode&1?(t=Rn,Rn<<=1,!(Rn&130023424)&&(Rn=4194304)):t=1);var r=Xe();e=mr(e,t),e!==null&&(Sn(e,t,r),lt(e,r))}function bg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),vf(e,r)}function wg(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),vf(e,r)}var yf;yf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ot=!1,lg(e,t,r);ot=!!(e.flags&131072)}else ot=!1,pe&&t.flags&1048576&&wp(t,$s,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;as(e,t),e=t.pendingProps;var o=Ji(t,Ye.current);Yi(t,r),o=Wc(null,t,i,e,o,r);var n=Kc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(i)?(n=!0,Cs(t)):n=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bc(t),o.updater=il,t.stateNode=o,o._reactInternals=t,Ba(t,i,e,r),t=Ha(null,t,i,!0,n,r)):(t.tag=0,pe&&n&&Pc(t),Qe(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(as(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=xg(i),e=Mt(i,e),o){case 0:t=Ua(null,t,i,e,r);break e;case 1:t=dd(null,t,i,e,r);break e;case 11:t=cd(null,t,i,e,r);break e;case 14:t=ud(null,t,i,Mt(i.type,e),r);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Mt(i,o),Ua(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Mt(i,o),dd(e,t,i,o,r);case 3:e:{if(ef(t),e===null)throw Error(E(387));i=t.pendingProps,n=t.memoizedState,o=n.element,Cp(e,t),As(t,i,null,r);var s=t.memoizedState;if(i=s.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){o=io(Error(E(423)),t),t=hd(e,t,i,r,o);break e}else if(i!==o){o=io(Error(E(424)),t),t=hd(e,t,i,r,o);break e}else for(ft=Ir(t.stateNode.containerInfo.firstChild),vt=t,pe=!0,Bt=null,r=Ep(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(eo(),i===o){t=gr(e,t,r);break e}Qe(e,t,i,r)}t=t.child}return t;case 5:return Ap(t),e===null&&Na(t),i=t.type,o=t.pendingProps,n=e!==null?e.memoizedProps:null,s=o.children,Ia(i,o)?s=null:n!==null&&Ia(i,n)&&(t.flags|=32),Jp(e,t),Qe(e,t,s,r),t.child;case 6:return e===null&&Na(t),null;case 13:return tf(e,t,r);case 4:return Vc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=to(t,null,i,r):Qe(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Mt(i,o),cd(e,t,i,o,r);case 7:return Qe(e,t,t.pendingProps,r),t.child;case 8:return Qe(e,t,t.pendingProps.children,r),t.child;case 12:return Qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,n=t.memoizedProps,s=o.value,ae(zs,i._currentValue),i._currentValue=s,n!==null)if(Ht(n.value,s)){if(n.children===o.children&&!nt.current){t=gr(e,t,r);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var c=n.dependencies;if(c!==null){s=n.child;for(var a=c.firstContext;a!==null;){if(a.context===i){if(n.tag===1){a=ur(-1,r&-r),a.tag=2;var u=n.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}n.lanes|=r,a=n.alternate,a!==null&&(a.lanes|=r),Ma(n.return,r,t),c.lanes|=r;break}a=a.next}}else if(n.tag===10)s=n.type===t.type?null:n.child;else if(n.tag===18){if(s=n.return,s===null)throw Error(E(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Ma(s,r,t),s=n.sibling}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}Qe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Yi(t,r),o=Tt(o),i=i(o),t.flags|=1,Qe(e,t,i,r),t.child;case 14:return i=t.type,o=Mt(i,t.pendingProps),o=Mt(i.type,o),ud(e,t,i,o,r);case 15:return Gp(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Mt(i,o),as(e,t),t.tag=1,st(i)?(e=!0,Cs(t)):e=!1,Yi(t,r),$p(t,i,o),Ba(t,i,o,r),Ha(null,t,i,!0,e,r);case 19:return rf(e,t,r);case 22:return Zp(e,t,r)}throw Error(E(156,t.tag))};function bf(e,t){return jh(e,t)}function _g(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,r,i){return new _g(e,t,r,i)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xg(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_c)return 11;if(e===xc)return 14}return 2}function Rr(e,t){var r=e.alternate;return r===null?(r=Et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ds(e,t,r,i,o,n){var s=2;if(i=e,typeof e=="function")ru(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Li:return ai(r.children,o,n,t);case wc:s=8,o|=8;break;case ua:return e=Et(12,r,t,o|2),e.elementType=ua,e.lanes=n,e;case da:return e=Et(13,r,t,o),e.elementType=da,e.lanes=n,e;case ha:return e=Et(19,r,t,o),e.elementType=ha,e.lanes=n,e;case zh:return ll(r,o,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sh:s=10;break e;case $h:s=9;break e;case _c:s=11;break e;case xc:s=14;break e;case _r:s=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Et(s,r,t,o),t.elementType=e,t.type=i,t.lanes=n,t}function ai(e,t,r,i){return e=Et(7,e,i,t),e.lanes=r,e}function ll(e,t,r,i){return e=Et(22,e,i,t),e.elementType=zh,e.lanes=r,e.stateNode={isHidden:!1},e}function Hl(e,t,r){return e=Et(6,e,null,t),e.lanes=r,e}function jl(e,t,r){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kg(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function iu(e,t,r,i,o,n,s,c,a){return e=new kg(e,t,r,c,a),t===1?(t=1,n===!0&&(t|=8)):t=0,n=Et(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(n),e}function Cg(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function wf(e){if(!e)return Fr;e=e._reactInternals;e:{if(Ci(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(st(r))return yp(e,r,t)}return t}function _f(e,t,r,i,o,n,s,c,a){return e=iu(r,i,!0,e,o,n,s,c,a),e.context=wf(null),r=e.current,i=Xe(),o=Dr(r),n=ur(i,o),n.callback=t??null,Pr(r,n,o),e.current.lanes=o,Sn(e,o,i),lt(e,i),e}function al(e,t,r,i){var o=t.current,n=Xe(),s=Dr(o);return r=wf(r),t.context===null?t.context=r:t.pendingContext=r,t=ur(n,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Pr(o,t,s),e!==null&&(Ut(e,o,s,n),ns(e,o,s)),s}function Ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ou(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function Sg(){return null}var xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}cl.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));al(e,t,null,null)};cl.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pi(function(){al(null,e,null,null)}),t[fr]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<kr.length&&t!==0&&t<kr[r].priority;r++);kr.splice(r,0,e),r===0&&Jh(e)}};function su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function $g(e,t,r,i,o){if(o){if(typeof i=="function"){var n=i;i=function(){var u=Ns(s);n.call(u)}}var s=_f(t,i,e,0,null,!1,!1,"",kd);return e._reactRootContainer=s,e[fr]=s.current,sn(e.nodeType===8?e.parentNode:e),pi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var u=Ns(a);c.call(u)}}var a=iu(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=a,e[fr]=a.current,sn(e.nodeType===8?e.parentNode:e),pi(function(){al(t,a,r,i)}),a}function dl(e,t,r,i,o){var n=r._reactRootContainer;if(n){var s=n;if(typeof o=="function"){var c=o;o=function(){var a=Ns(s);c.call(a)}}al(t,s,e,o)}else s=$g(r,t,e,o,i);return Ns(s)}Qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Do(t.pendingLanes);r!==0&&(Sc(t,r|1),lt(t,Ce()),!(Z&6)&&(oo=Ce()+500,qr()))}break;case 13:pi(function(){var i=mr(e,1);if(i!==null){var o=Xe();Ut(i,e,1,o)}}),ou(e,1)}};$c=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var r=Xe();Ut(t,e,134217728,r)}ou(e,134217728)}};Xh=function(e){if(e.tag===13){var t=Dr(e),r=mr(e,t);if(r!==null){var i=Xe();Ut(r,e,t,i)}ou(e,t)}};Gh=function(){return ie};Zh=function(e,t){var r=ie;try{return ie=e,t()}finally{ie=r}};xa=function(e,t,r){switch(t){case"input":if(ma(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=tl(i);if(!o)throw Error(E(90));Ah(i),ma(i,o)}}}break;case"textarea":Lh(e,r);break;case"select":t=r.value,t!=null&&Hi(e,!!r.multiple,t,!1)}};Mh=Jc;Fh=pi;var zg={usingClientEntryPoint:!1,Events:[zn,Di,tl,Rh,Nh,Jc]},So={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Eg={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uh(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||Sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yn.isDisabled&&Yn.supportsFiber)try{Gs=Yn.inject(Eg),er=Yn}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;Ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!su(t))throw Error(E(200));return Cg(e,t,null,r)};Ct.createRoot=function(e,t){if(!su(e))throw Error(E(299));var r=!1,i="",o=xf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=iu(e,1,!1,null,null,r,!1,i,o),e[fr]=t.current,sn(e.nodeType===8?e.parentNode:e),new nu(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Uh(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return pi(e)};Ct.hydrate=function(e,t,r){if(!ul(t))throw Error(E(200));return dl(null,e,t,!0,r)};Ct.hydrateRoot=function(e,t,r){if(!su(e))throw Error(E(405));var i=r!=null&&r.hydratedSources||null,o=!1,n="",s=xf;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=_f(t,null,e,1,r??null,o,!1,n,s),e[fr]=t.current,sn(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new cl(t)};Ct.render=function(e,t,r){if(!ul(t))throw Error(E(200));return dl(null,e,t,!1,r)};Ct.unmountComponentAtNode=function(e){if(!ul(e))throw Error(E(40));return e._reactRootContainer?(pi(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};Ct.unstable_batchedUpdates=Jc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!ul(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return dl(e,t,r,!1,i)};Ct.version="18.2.0-next-9e3b772b8-20220608";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),wh.exports=Ct;var Ag=wh.exports,Cd=Ag;aa.createRoot=Cd.createRoot,aa.hydrateRoot=Cd.hydrateRoot;const Cf=""+new URL("logo-61f423a9.svg",import.meta.url).href;var Sf=Object.defineProperty,Tg=Object.defineProperties,Lg=Object.getOwnPropertyDescriptor,Ig=Object.getOwnPropertyDescriptors,Sd=Object.getOwnPropertySymbols,Pg=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable,$d=(e,t,r)=>t in e?Sf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$f=(e,t)=>{for(var r in t||(t={}))Pg.call(t,r)&&$d(e,r,t[r]);if(Sd)for(var r of Sd(t))Og.call(t,r)&&$d(e,r,t[r]);return e},Dg=(e,t)=>Tg(e,Ig(t)),l=(e,t,r,i)=>{for(var o=i>1?void 0:i?Lg(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&Sf(t,r,o),o};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rg=new Set(["children","localName","ref","style","className"]),zd=new WeakMap,Ng=(e,t,r,i,o)=>{const n=o==null?void 0:o[t];n===void 0||r===i?r==null&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=r:((s,c,a)=>{let u=zd.get(s);u===void 0&&zd.set(s,u=new Map);let m=u.get(c);a!==void 0?m===void 0?(u.set(c,m={handleEvent:a}),s.addEventListener(c,m)):m.handleEvent=a:m!==void 0&&(u.delete(c),s.removeEventListener(c,m))})(e,n,r)},Mg=(e,t)=>{typeof e=="function"?e(t):e.current=t};function F(e=window.React,t,r,i,o){let n,s,c;if(t===void 0){const y=e;({tagName:s,elementClass:c,events:i,displayName:o}=y),n=y.react}else n=e,c=r,s=t;const a=n.Component,u=n.createElement,m=new Set(Object.keys(i??{}));class h extends a{constructor(){super(...arguments),this.o=null}t(g){if(this.o!==null)for(const _ in this.i)Ng(this.o,_,this.props[_],g?g[_]:void 0,i)}componentDidMount(){var g;this.t(),(g=this.o)===null||g===void 0||g.removeAttribute("defer-hydration")}componentDidUpdate(g){this.t(g)}render(){const{_$Gl:g,..._}=this.props;this.h!==g&&(this.u=b=>{g!==null&&Mg(g,b),this.o=b,this.h=g}),this.i={};const C={ref:this.u};for(const[b,f]of Object.entries(_))Rg.has(b)?C[b==="className"?"class":b]=f:m.has(b)||b in c.prototype?this.i[b]=f:C[b]=f;return C.suppressHydrationWarning=!0,u(s,C)}}h.displayName=o??c.name;const p=n.forwardRef((y,g)=>u(h,{...y,_$Gl:g},y==null?void 0:y.children));return p.displayName=h.displayName,p}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fg=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Bg=(e,t,r)=>{t.constructor.createProperty(r,e)};function d(e){return(t,r)=>r!==void 0?Bg(e,t,r):Fg(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e){return d({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lu=({finisher:e,descriptor:t})=>(r,i)=>{var o;if(i===void 0){const n=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:{...r,key:n};return e!=null&&(s.finisher=function(c){e(c,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zf(e){return lu({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return lu({descriptor:r=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var n,s;return this[o]===void 0&&(this[o]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vg(e){return lu({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wl;((Wl=window.HTMLSlotElement)===null||Wl===void 0?void 0:Wl.prototype.assignedElements)!=null;let tc="";function Ed(e){tc=e}function Ug(e=""){if(!tc){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)Ed(r.getAttribute("data-shoelace"));else{const i=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";i&&(o=i.getAttribute("src")),Ed(o.split("/").slice(0,-1).join("/"))}}return tc.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}const Hg={name:"default",resolver:e=>Ug(`assets/icons/${e}.svg`)};var jg=Hg;const Ad={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Wg={name:"system",resolver:e=>e in Ad?`data:image/svg+xml,${encodeURIComponent(Ad[e])}`:""};var Kg=Wg;let Yg=[jg,Kg],rc=[];function qg(e){rc.push(e)}function Qg(e){rc=rc.filter(t=>t!==e)}function Td(e){return Yg.find(t=>t.name===e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=window,au=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cu=Symbol(),Ld=new WeakMap;let Ef=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==cu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(au&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ld.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ld.set(r,t))}return t}toString(){return this.cssText}};const Xg=e=>new Ef(typeof e=="string"?e:e+"",void 0,cu),V=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Ef(r,e,cu)},Gg=(e,t)=>{au?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=hs.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},Id=au?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Xg(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kl;const Ms=window,Pd=Ms.trustedTypes,Zg=Pd?Pd.emptyScript:"",Od=Ms.reactiveElementPolyfillSupport,mn={toAttribute(e,t){switch(t){case Boolean:e=e?Zg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Af=(e,t)=>t!==e&&(t==t||e==e),Yl={attribute:!0,type:String,converter:mn,reflect:!1,hasChanged:Af},ic="finalized";let Ai=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const o=this._$Ep(i,r);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,r=Yl){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(o){const n=this[t];this[r]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Yl}static finalize(){if(this.hasOwnProperty(ic))return!1;this[ic]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of i)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)r.unshift(Id(o))}else t!==void 0&&r.push(Id(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gg(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=Yl){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:mn).toAttribute(r,i.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=o.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:mn;this._$El=n,this[n]=c.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Af)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ai[ic]=!0,Ai.elementProperties=new Map,Ai.elementStyles=[],Ai.shadowRootOptions={mode:"open"},Od==null||Od({ReactiveElement:Ai}),((Kl=Ms.reactiveElementVersions)!==null&&Kl!==void 0?Kl:Ms.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ql;const Fs=window,no=Fs.trustedTypes,Dd=no?no.createPolicy("lit-html",{createHTML:e=>e}):void 0,oc="$lit$",Sr=`lit$${(Math.random()+"").slice(9)}$`,Tf="?"+Sr,Jg=`<${Tf}>`,fi=document,gn=()=>fi.createComment(""),vn=e=>e===null||typeof e!="object"&&typeof e!="function",Lf=Array.isArray,ev=e=>Lf(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ql=`[ 	
\f\r]`,$o=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rd=/-->/g,Nd=/>/g,Gr=RegExp(`>|${Ql}(?:([^\\s"'>=/]+)(${Ql}*=${Ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Md=/'/g,Fd=/"/g,If=/^(?:script|style|textarea|title)$/i,tv=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$=tv(1),mt=Symbol.for("lit-noChange"),we=Symbol.for("lit-nothing"),Bd=new WeakMap,ni=fi.createTreeWalker(fi,129,null,!1);function Pf(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dd!==void 0?Dd.createHTML(t):t}const rv=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=$o;for(let c=0;c<r;c++){const a=e[c];let u,m,h=-1,p=0;for(;p<a.length&&(s.lastIndex=p,m=s.exec(a),m!==null);)p=s.lastIndex,s===$o?m[1]==="!--"?s=Rd:m[1]!==void 0?s=Nd:m[2]!==void 0?(If.test(m[2])&&(o=RegExp("</"+m[2],"g")),s=Gr):m[3]!==void 0&&(s=Gr):s===Gr?m[0]===">"?(s=o??$o,h=-1):m[1]===void 0?h=-2:(h=s.lastIndex-m[2].length,u=m[1],s=m[3]===void 0?Gr:m[3]==='"'?Fd:Md):s===Fd||s===Md?s=Gr:s===Rd||s===Nd?s=$o:(s=Gr,o=void 0);const y=s===Gr&&e[c+1].startsWith("/>")?" ":"";n+=s===$o?a+Jg:h>=0?(i.push(u),a.slice(0,h)+oc+a.slice(h)+Sr+y):a+Sr+(h===-2?(i.push(void 0),c):y)}return[Pf(e,n+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class yn{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const c=t.length-1,a=this.parts,[u,m]=rv(t,r);if(this.el=yn.createElement(u,i),ni.currentNode=this.el.content,r===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=ni.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith(oc)||p.startsWith(Sr)){const y=m[s++];if(h.push(p),y!==void 0){const g=o.getAttribute(y.toLowerCase()+oc).split(Sr),_=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:_[2],strings:g,ctor:_[1]==="."?ov:_[1]==="?"?sv:_[1]==="@"?lv:hl})}else a.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(If.test(o.tagName)){const h=o.textContent.split(Sr),p=h.length-1;if(p>0){o.textContent=no?no.emptyScript:"";for(let y=0;y<p;y++)o.append(h[y],gn()),ni.nextNode(),a.push({type:2,index:++n});o.append(h[p],gn())}}}else if(o.nodeType===8)if(o.data===Tf)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(Sr,h+1))!==-1;)a.push({type:7,index:n}),h+=Sr.length-1}n++}}static createElement(t,r){const i=fi.createElement("template");return i.innerHTML=t,i}}function so(e,t,r=e,i){var o,n,s,c;if(t===mt)return t;let a=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const u=vn(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,r,i)),i!==void 0?((s=(c=r)._$Co)!==null&&s!==void 0?s:c._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=so(e,a._$AS(e,t.values),a,i)),t}let iv=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:i},parts:o}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:fi).importNode(i,!0);ni.currentNode=n;let s=ni.nextNode(),c=0,a=0,u=o[0];for(;u!==void 0;){if(c===u.index){let m;u.type===2?m=new uu(s,s.nextSibling,this,t):u.type===1?m=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(m=new av(s,this,t)),this._$AV.push(m),u=o[++a]}c!==(u==null?void 0:u.index)&&(s=ni.nextNode(),c++)}return ni.currentNode=fi,n}v(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},uu=class Of{constructor(t,r,i,o){var n;this.type=2,this._$AH=we,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=so(this,t,r),vn(t)?t===we||t==null||t===""?(this._$AH!==we&&this._$AR(),this._$AH=we):t!==this._$AH&&t!==mt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ev(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==we&&vn(this._$AH)?this._$AA.nextSibling.data=t:this.$(fi.createTextNode(t)),this._$AH=t}g(t){var r;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=yn.createElement(Pf(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.v(i);else{const s=new iv(n,this),c=s.u(this.options);s.v(i),this.$(c),this._$AH=s}}_$AC(t){let r=Bd.get(t.strings);return r===void 0&&Bd.set(t.strings,r=new yn(t)),r}T(t){Lf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of t)o===r.length?r.push(i=new Of(this.k(gn()),this.k(gn()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},hl=class{constructor(t,r,i,o,n){this.type=1,this._$AH=we,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=we}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)t=so(this,t,r,0),s=!vn(t)||t!==this._$AH&&t!==mt,s&&(this._$AH=t);else{const c=t;let a,u;for(t=n[0],a=0;a<n.length-1;a++)u=so(this,c[i+a],r,a),u===mt&&(u=this._$AH[a]),s||(s=!vn(u)||u!==this._$AH[a]),u===we?t=we:t!==we&&(t+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!o&&this.j(t)}j(t){t===we?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ov=class extends hl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===we?void 0:t}};const nv=no?no.emptyScript:"";let sv=class extends hl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==we?this.element.setAttribute(this.name,nv):this.element.removeAttribute(this.name)}},lv=class extends hl{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){var i;if((t=(i=so(this,t,r,0))!==null&&i!==void 0?i:we)===mt)return;const o=this._$AH,n=t===we&&o!==we||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==we&&(o===we||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}};class av{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){so(this,t)}}const Vd=Fs.litHtmlPolyfillSupport;Vd==null||Vd(yn,uu),((ql=Fs.litHtmlVersions)!==null&&ql!==void 0?ql:Fs.litHtmlVersions=[]).push("2.7.5");const cv=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const c=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new uu(t.insertBefore(gn(),c),c,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xl,Gl;let Ko=class extends Ai{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cv(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return mt}};Ko.finalized=!0,Ko._$litElement$=!0,(Xl=globalThis.litElementHydrateSupport)===null||Xl===void 0||Xl.call(globalThis,{LitElement:Ko});const Ud=globalThis.litElementPolyfillSupport;Ud==null||Ud({LitElement:Ko});((Gl=globalThis.litElementVersions)!==null&&Gl!==void 0?Gl:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uv=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,dv=e=>e.strings===void 0,hv={},pv=(e,t=hv)=>e._$AH=t;function T(e,t){const r=Object.assign({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,s=Array.isArray(e)?e:[e];i.update=function(c){s.forEach(a=>{const u=a;if(c.has(u)){const m=c.get(u),h=this[u];m!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,h)}}),n.call(this,c)}}}var Df=globalThis&&globalThis.__decorate||function(e,t,r,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(n=(o<3?s(n):o>3?s(t,r,n):s(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};class N extends Ko{emit(t,r){const i=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return this.dispatchEvent(i),i}}Df([d()],N.prototype,"dir",void 0);Df([d()],N.prototype,"lang",void 0);const U=V`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var fv=V`
  ${U}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;const zo=Symbol(),qn=Symbol();let Zl;const Jl=new Map;let jt=class extends N{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let i;if(t!=null&&t.spriteSheet)return $`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?zo:qn}catch{return qn}try{const o=document.createElement("div");o.innerHTML=await i.text();const n=o.firstElementChild;if(((r=n==null?void 0:n.tagName)==null?void 0:r.toLowerCase())!=="svg")return zo;Zl||(Zl=new DOMParser);const c=Zl.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):zo}catch{return zo}}connectedCallback(){super.connectedCallback(),qg(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qg(this)}getUrl(){const e=Td(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Td(this.library),r=this.getUrl();if(!r){this.svg=null;return}let i=Jl.get(r);if(i||(i=this.resolveIcon(r,t),Jl.set(r,i)),!this.initialRender)return;const o=await i;if(o===qn&&Jl.delete(r),r===this.getUrl()){if(uv(o)){this.svg=o;return}switch(o){case qn:case zo:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};jt.styles=fv;l([j()],jt.prototype,"svg",2);l([d({reflect:!0})],jt.prototype,"name",2);l([d()],jt.prototype,"src",2);l([d()],jt.prototype,"label",2);l([d({reflect:!0})],jt.prototype,"library",2);l([T("label")],jt.prototype,"handleLabelChange",1);l([T(["name","src","library"])],jt.prototype,"setIcon",1);jt=l([B("sl-icon")],jt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pl=e=>(...t)=>({_$litDirective$:e,values:t});let fl=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=pl(class extends fl{constructor(e){var t;if(super(e),e.type!==lr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.nt)===null||r===void 0)&&r.has(n))&&this.it.add(n);return this.render(t)}const o=e.element.classList;this.it.forEach(n=>{n in t||(o.remove(n),this.it.delete(n))});for(const n in t){const s=!!t[n];s===this.it.has(n)||!((i=this.nt)===null||i===void 0)&&i.has(n)||(s?(o.add(n),this.it.add(n)):(o.remove(n),this.it.delete(n)))}return mt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rf=Symbol.for(""),mv=e=>{if((e==null?void 0:e.r)===Rf)return e==null?void 0:e._$litStatic$},Bs=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:Rf}),Hd=new Map,gv=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],c=[];let a,u=0,m=!1;for(;u<i;){for(a=t[u];u<i&&(n=r[u],(o=mv(n))!==void 0);)a+=o+t[++u],m=!0;u!==i&&c.push(n),s.push(a),u++}if(u===i&&s.push(t[i]),m){const h=s.join("$$lit$$");(t=Hd.get(h))===void 0&&(s.raw=s,Hd.set(h,t=s)),r=c}return e(t,...r)},Yo=gv($);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=e=>e??we;var vv=V`
  ${U}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let at=class extends N{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Bs`a`:Bs`button`;return Yo`
      <${t}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:"button")}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e&&this.target?"noreferrer noopener":void 0)}
        role=${R(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${R(this.name)}
          library=${R(this.library)}
          src=${R(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};at.styles=vv;l([I(".icon-button")],at.prototype,"button",2);l([j()],at.prototype,"hasFocus",2);l([d()],at.prototype,"name",2);l([d()],at.prototype,"library",2);l([d()],at.prototype,"src",2);l([d()],at.prototype,"href",2);l([d()],at.prototype,"target",2);l([d()],at.prototype,"download",2);l([d()],at.prototype,"label",2);l([d({type:Boolean,reflect:!0})],at.prototype,"disabled",2);at=l([B("sl-icon-button")],at);function _e(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Object.assign(Object.assign({},r),{duration:du()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function jd(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function du(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ee(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Vs(e,t){return e.map(r=>Object.assign(Object.assign({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const Nf=new Map,yv=new WeakMap;function bv(e){return e??{keyframes:[],options:{duration:0}}}function Wd(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function se(e,t){Nf.set(e,bv(t))}function xe(e,t,r){const i=yv.get(e);if(i!=null&&i[t])return Wd(i[t],r.dir);const o=Nf.get(t);return o?Wd(o,r.dir):{keyframes:[],options:{duration:0}}}class Dt{constructor(t,...r){this.slotNames=[],(this.host=t).addController(this),this.slotNames=r,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const r=t;if(r.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const r=t.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()}}function wv(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}const nc=new Set,_v=new MutationObserver(Bf),Ui=new Map;let Mf=document.documentElement.dir||"ltr",Ff=document.documentElement.lang||navigator.language,ti;_v.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function xv(...e){e.map(t=>{const r=t.$code.toLowerCase();Ui.has(r)?Ui.set(r,Object.assign(Object.assign({},Ui.get(r)),t)):Ui.set(r,t),ti||(ti=t)}),Bf()}function Bf(){Mf=document.documentElement.dir||"ltr",Ff=document.documentElement.lang||navigator.language,[...nc.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let kv=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){nc.add(this.host)}hostDisconnected(){nc.delete(this.host)}dir(){return`${this.host.dir||Mf}`.toLowerCase()}lang(){return`${this.host.lang||Ff}`.toLowerCase()}getTranslationData(t){var r,i;const o=new Intl.Locale(t),n=o==null?void 0:o.language.toLowerCase(),s=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",c=Ui.get(`${n}-${s}`),a=Ui.get(n);return{locale:o,language:n,region:s,primary:c,secondary:a}}exists(t,r){var i;const{primary:o,secondary:n}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[t]||n&&n[t]||r.includeFallback&&ti&&ti[t])}term(t,...r){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(o&&o[t])n=o[t];else if(ti&&ti[t])n=ti[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,r)}};const Cv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};xv(Cv);class ne extends kv{}function Ge(e,t){return new Promise(r=>{function i(o){o.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}var Sv=V`
  ${U}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;const Ei=Object.assign(document.createElement("div"),{className:"sl-toast-stack"});let Wt=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"icon","suffix"),this.localize=new ne(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ee(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=xe(this,"alert.show",{dir:this.localize.dir()});await _e(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Ee(this.base);const{keyframes:e,options:t}=xe(this,"alert.hide",{dir:this.localize.dir()});await _e(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ge(this,"sl-after-hide")}async toast(){return new Promise(e=>{Ei.parentElement===null&&document.body.append(Ei),Ei.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ei.removeChild(this),e(),Ei.querySelector("sl-alert")===null&&Ei.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${H({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Wt.styles=Sv;l([I('[part~="base"]')],Wt.prototype,"base",2);l([d({type:Boolean,reflect:!0})],Wt.prototype,"open",2);l([d({type:Boolean,reflect:!0})],Wt.prototype,"closable",2);l([d({reflect:!0})],Wt.prototype,"variant",2);l([d({type:Number})],Wt.prototype,"duration",2);l([T("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);l([T("duration")],Wt.prototype,"handleDurationChange",1);Wt=l([B("sl-alert")],Wt);se("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});se("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});F({tagName:"sl-alert",elementClass:Wt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});var $v=V`
  ${U}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;let It=class extends N{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};It.styles=$v;l([I(".animated-image__animated")],It.prototype,"animatedImage",2);l([j()],It.prototype,"frozenFrame",2);l([j()],It.prototype,"isLoaded",2);l([d()],It.prototype,"src",2);l([d()],It.prototype,"alt",2);l([d({type:Boolean,reflect:!0})],It.prototype,"play",2);l([T("play",{waitUntilFirstUpdate:!0})],It.prototype,"handlePlayChange",1);l([T("src")],It.prototype,"handleSrcChange",1);It=l([B("sl-animated-image")],It);F({tagName:"sl-animated-image",elementClass:It,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});const zv=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ev=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Av=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Tv=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Lv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Iv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Pv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ov=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nv=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Mv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bv=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Vv=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Uv=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Hv=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Wv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Kv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Yv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],qv=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Qv=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xv=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gv=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zv=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Jv=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ey=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],ty=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],ry=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],iy=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],oy=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],ny=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sy=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ly=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ay=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cy=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uy=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dy=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hy=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],py=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fy=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],my=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gy=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vy=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],yy=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],by=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],wy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],_y=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],xy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ky=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Cy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Sy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],$y=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],zy=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Ey=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Ay=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Ty=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Ly=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Iy=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Py=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Oy=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Dy=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ry=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ny=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],My=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Fy=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],By=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Vy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Uy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Hy=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Wy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Ky=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Yy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],qy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Qy=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xy=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gy=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zy=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Jy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],eb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],tb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],rb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ib=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ob=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],nb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],lb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ab=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ub=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],db=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hb=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],pb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],mb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],gb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Vf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},vb=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Bv,backInLeft:Vv,backInRight:Uv,backInUp:Hv,backOutDown:jv,backOutLeft:Wv,backOutRight:Kv,backOutUp:Yv,bounce:zv,bounceIn:qv,bounceInDown:Qv,bounceInLeft:Xv,bounceInRight:Gv,bounceInUp:Zv,bounceOut:Jv,bounceOutDown:ey,bounceOutLeft:ty,bounceOutRight:ry,bounceOutUp:iy,easings:Vf,fadeIn:oy,fadeInBottomLeft:ny,fadeInBottomRight:sy,fadeInDown:ly,fadeInDownBig:ay,fadeInLeft:cy,fadeInLeftBig:uy,fadeInRight:dy,fadeInRightBig:hy,fadeInTopLeft:py,fadeInTopRight:fy,fadeInUp:my,fadeInUpBig:gy,fadeOut:vy,fadeOutBottomLeft:yy,fadeOutBottomRight:by,fadeOutDown:wy,fadeOutDownBig:_y,fadeOutLeft:xy,fadeOutLeftBig:ky,fadeOutRight:Cy,fadeOutRightBig:Sy,fadeOutTopLeft:$y,fadeOutTopRight:zy,fadeOutUp:Ey,fadeOutUpBig:Ay,flash:Ev,flip:Ty,flipInX:Ly,flipInY:Iy,flipOutX:Py,flipOutY:Oy,headShake:Av,heartBeat:Tv,hinge:ib,jackInTheBox:ob,jello:Lv,lightSpeedInLeft:Dy,lightSpeedInRight:Ry,lightSpeedOutLeft:Ny,lightSpeedOutRight:My,pulse:Iv,rollIn:nb,rollOut:sb,rotateIn:Fy,rotateInDownLeft:By,rotateInDownRight:Vy,rotateInUpLeft:Uy,rotateInUpRight:Hy,rotateOut:jy,rotateOutDownLeft:Wy,rotateOutDownRight:Ky,rotateOutUpLeft:Yy,rotateOutUpRight:qy,rubberBand:Pv,shake:Ov,shakeX:Dv,shakeY:Rv,slideInDown:Qy,slideInLeft:Xy,slideInRight:Gy,slideInUp:Zy,slideOutDown:Jy,slideOutLeft:eb,slideOutRight:tb,slideOutUp:rb,swing:Nv,tada:Mv,wobble:Fv,zoomIn:lb,zoomInDown:ab,zoomInLeft:cb,zoomInRight:ub,zoomInUp:db,zoomOut:hb,zoomOutDown:pb,zoomOutLeft:fb,zoomOutRight:mb,zoomOutUp:gb},Symbol.toStringTag,{value:"Module"}));var yb=V`
  ${U}

  :host {
    display: contents;
  }
`;let Ae=class extends N{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Vf[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:vb[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!i?!1:(this.destroyAnimation(),this.animation=n.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ae.styles=yb;l([Vg("slot")],Ae.prototype,"defaultSlot",2);l([d()],Ae.prototype,"name",2);l([d({type:Boolean,reflect:!0})],Ae.prototype,"play",2);l([d({type:Number})],Ae.prototype,"delay",2);l([d()],Ae.prototype,"direction",2);l([d({type:Number})],Ae.prototype,"duration",2);l([d()],Ae.prototype,"easing",2);l([d({attribute:"end-delay",type:Number})],Ae.prototype,"endDelay",2);l([d()],Ae.prototype,"fill",2);l([d({type:Number})],Ae.prototype,"iterations",2);l([d({attribute:"iteration-start",type:Number})],Ae.prototype,"iterationStart",2);l([d({attribute:!1})],Ae.prototype,"keyframes",2);l([d({attribute:"playback-rate",type:Number})],Ae.prototype,"playbackRate",2);l([T(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ae.prototype,"handleAnimationChange",1);l([T("play")],Ae.prototype,"handlePlayChange",1);l([T("playbackRate")],Ae.prototype,"handlePlaybackRateChange",1);Ae=l([B("sl-animation")],Ae);F({tagName:"sl-animation",elementClass:Ae,react:M,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"}});var bb=V`
  ${U}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;let mi=class extends N{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <slot
        part="base"
        class=${H({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};mi.styles=bb;l([d({reflect:!0})],mi.prototype,"variant",2);l([d({type:Boolean,reflect:!0})],mi.prototype,"pill",2);l([d({type:Boolean,reflect:!0})],mi.prototype,"pulse",2);mi=l([B("sl-badge")],mi);F({tagName:"sl-badge",elementClass:mi,react:M,events:{}});var wb=V`
  ${U}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`;let gi=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return $`
      <div
        part="base"
        class=${H({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${e?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${R(this.target?this.target:void 0)}"
                rel=${R(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};gi.styles=wb;l([d()],gi.prototype,"href",2);l([d()],gi.prototype,"target",2);l([d()],gi.prototype,"rel",2);gi=l([B("sl-breadcrumb-item")],gi);F({tagName:"sl-breadcrumb-item",elementClass:gi,react:M,events:{}});var _b=V`
  ${U}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;let Us=class extends N{constructor(){super(...arguments),this.localize=new ne(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Us.styles=_b;Us=l([B("sl-spinner")],Us);const Eo=new WeakMap,Ao=new WeakMap,ea=new WeakSet,Qn=new WeakMap;class br{constructor(t,r){(this.host=t).addController(this),this.options=Object.assign({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),n=i.getAttribute("form");if(n)return o.getElementById(n)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!==null&&o!==void 0?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},r),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Qn.set(this.host,[]),this.options.assumeInteractionOn.forEach(r=>{this.host.addEventListener(r,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Qn.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Eo.has(this.form)?Eo.get(this.form).add(this.host):Eo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ao.has(this.form)||(Ao.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=Eo.get(this.form))===null||t===void 0||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ao.has(this.form)&&(this.form.reportValidity=Ao.get(this.form),Ao.delete(this.form))),this.form=void 0}handleFormData(t){const r=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!r&&!n&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{t.formData.append(i,s.toString())}):t.formData.append(i,o.toString()))}handleFormSubmit(t){var r;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Eo.get(this.form))===null||r===void 0||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Qn.set(this.host,[])}handleInteraction(t){const r=Qn.get(this.host);r.includes(t.type)||r.push(t.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const r of t)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0}setUserInteracted(t,r){r?ea.add(t):ea.delete(t),t.requestUpdate()}doAction(t,r){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",r&&(i.name=r.name,i.value=r.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{r.hasAttribute(o)&&i.setAttribute(o,r.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!==null&&t!==void 0?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const r=this.host,i=!!ea.has(r),o=!!r.required;r.toggleAttribute("data-required",o),r.toggleAttribute("data-optional",!o),r.toggleAttribute("data-invalid",!t),r.toggleAttribute("data-valid",t),r.toggleAttribute("data-user-invalid",!t&&i),r.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const r=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||r.preventDefault(),this.host.dispatchEvent(r)||t==null||t.preventDefault()}}const ml=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),xb=Object.freeze(Object.assign(Object.assign({},ml),{valid:!1,valueMissing:!0})),kb=Object.freeze(Object.assign(Object.assign({},ml),{valid:!1,customError:!0}));var Uf=V`
  ${U}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;let re=class extends N{constructor(){super(),this.formControlController=new br(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Dt(this,"[default]","prefix","suffix"),this.localize=new ne(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:ml}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Bs`a`:Bs`button`;return Yo`
      <${t}
        part="base"
        class=${H({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:this.type)}
        title=${this.title}
        name=${R(e?void 0:this.name)}
        value=${R(e?void 0:this.value)}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e?this.rel:void 0)}
        role=${R(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Yo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Yo`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};re.styles=Uf;l([I(".button")],re.prototype,"button",2);l([j()],re.prototype,"hasFocus",2);l([j()],re.prototype,"invalid",2);l([d()],re.prototype,"title",2);l([d({reflect:!0})],re.prototype,"variant",2);l([d({reflect:!0})],re.prototype,"size",2);l([d({type:Boolean,reflect:!0})],re.prototype,"caret",2);l([d({type:Boolean,reflect:!0})],re.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],re.prototype,"loading",2);l([d({type:Boolean,reflect:!0})],re.prototype,"outline",2);l([d({type:Boolean,reflect:!0})],re.prototype,"pill",2);l([d({type:Boolean,reflect:!0})],re.prototype,"circle",2);l([d()],re.prototype,"type",2);l([d()],re.prototype,"name",2);l([d()],re.prototype,"value",2);l([d()],re.prototype,"href",2);l([d()],re.prototype,"target",2);l([d()],re.prototype,"rel",2);l([d()],re.prototype,"download",2);l([d()],re.prototype,"form",2);l([d({attribute:"formaction"})],re.prototype,"formAction",2);l([d({attribute:"formenctype"})],re.prototype,"formEnctype",2);l([d({attribute:"formmethod"})],re.prototype,"formMethod",2);l([d({attribute:"formnovalidate",type:Boolean})],re.prototype,"formNoValidate",2);l([d({attribute:"formtarget"})],re.prototype,"formTarget",2);l([T("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);re=l([B("sl-button")],re);var Cb=F({tagName:"sl-button",elementClass:re,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"}}),Sb=V`
  ${U}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;let Kt=class extends N{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=$``;return this.initials?t=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=$`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <sl-icon name="person-fill" library="system"></sl-icon>
        </slot>
      `,$`
      <div
        part="base"
        class=${H({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Kt.styles=Sb;l([j()],Kt.prototype,"hasError",2);l([d()],Kt.prototype,"image",2);l([d()],Kt.prototype,"label",2);l([d()],Kt.prototype,"initials",2);l([d()],Kt.prototype,"loading",2);l([d({reflect:!0})],Kt.prototype,"shape",2);l([T("image")],Kt.prototype,"handleImageChange",1);Kt=l([B("sl-avatar")],Kt);F({tagName:"sl-avatar",elementClass:Kt,react:M,events:{}});var $b=V`
  ${U}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;let vi=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};vi.styles=$b;l([I("slot")],vi.prototype,"defaultSlot",2);l([I('slot[name="separator"]')],vi.prototype,"separatorSlot",2);l([d()],vi.prototype,"label",2);vi=l([B("sl-breadcrumb")],vi);F({tagName:"sl-breadcrumb",elementClass:vi,react:M,events:{}});var zb=V`
  ${U}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;let yi=class extends N{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=To(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=To(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=To(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=To(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=To(t);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};yi.styles=zb;l([I("slot")],yi.prototype,"defaultSlot",2);l([j()],yi.prototype,"disableRole",2);l([d()],yi.prototype,"label",2);yi=l([B("sl-button-group")],yi);function To(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}F({tagName:"sl-button-group",elementClass:yi,react:M,events:{}});var Eb=V`
  ${U}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;let Hs=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${H({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hs.styles=Eb;Hs=l([B("sl-card")],Hs);F({tagName:"sl-card",elementClass:Hs,react:M,events:{}});class Ab{constructor(t,r){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=r}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}}function Te(e,t,r){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>r?i(r):i(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Tb(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lb(e,t,r=1){const i=t===void 0?0:e;t!=null||(t=e);for(let o=i;r>0?o<t:t<o;o+=r)yield o}const Kd=Symbol(),Ib=e=>(t,r,i)=>{const o=i.value;i.value=function(...n){clearTimeout(this[Kd]),this[Kd]=window.setTimeout(()=>{o.apply(this,n)},e)}};class Hf{constructor(t){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()},this.handlePointerDown=r=>{if(r.pointerType==="touch")return;this.pointers.add(r.pointerId),this.mouseDragging&&!this.dragging&&r.button===0&&(r.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=r=>{const i=this.host.scrollContainer,o=!!r.movementX||!!r.movementY;!this.dragging&&o?(i.setPointerCapture(r.pointerId),this.handleDragStart()):i.hasPointerCapture(r.pointerId)&&this.handleDrag(r)},this.handlePointerUp=r=>{this.pointers.delete(r.pointerId),this.host.scrollContainer.releasePointerCapture(r.pointerId),this.pointers.size===0&&this.handleDragEnd()},this.handleTouchEnd=r=>{for(const i of r.changedTouches)this.pointers.delete(i.identifier)},this.handleTouchStart=r=>{for(const i of r.touches)this.pointers.add(i.identifier)},this.host=t,t.addController(this)}async hostConnected(){const t=this.host;await t.updateComplete;const r=t.scrollContainer;r.addEventListener("scroll",this.handleScroll,{passive:!0}),r.addEventListener("pointerdown",this.handlePointerDown),r.addEventListener("pointerup",this.handlePointerUp),r.addEventListener("pointercancel",this.handlePointerUp),r.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),r.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const r=this.host.scrollContainer;r.removeEventListener("scroll",this.handleScroll),r.removeEventListener("pointerdown",this.handlePointerDown),r.removeEventListener("pointerup",this.handlePointerUp),r.removeEventListener("pointercancel",this.handlePointerUp),r.removeEventListener("touchstart",this.handleTouchStart),r.removeEventListener("touchend",this.handleTouchEnd)}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handleDragStart(){const t=this.host;this.dragging=!0,t.scrollContainer.style.setProperty("scroll-snap-type","unset"),t.requestUpdate()}handleDrag(t){this.host.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY})}async handleDragEnd(){const t=this.host,r=t.scrollContainer;r.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const i=r.scrollLeft,o=r.scrollTop;r.style.removeProperty("scroll-snap-type");const n=r.scrollLeft,s=r.scrollTop;r.style.setProperty("scroll-snap-type","unset"),r.scrollTo({left:i,top:o,behavior:"auto"}),r.scrollTo({left:n,top:s,behavior:du()?"auto":"smooth"}),this.scrolling&&await Ge(r,"scrollend"),r.style.removeProperty("scroll-snap-type"),t.requestUpdate()}}l([Ib(100)],Hf.prototype,"handleScrollEnd",1);var Pb=V`
  ${U}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;let bn=class extends N{static isCarouselItem(e){return e instanceof Element&&e.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};bn.styles=Pb;bn=l([B("sl-carousel-item")],bn);var Ob=V`
  ${U}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;let ke=class extends N{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Ab(this,()=>this.next()),this.scrollController=new Hf(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new ne(this),this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>bn.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const i=r.target;i.toggleAttribute("inert",!r.isIntersecting),i.classList.toggle("--in-view",r.isIntersecting),i.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.floor(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:e=!0}={}){return[...this.slides].filter(t=>!e||!t.hasAttribute("data-clone"))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",n=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),n&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');c&&c.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"auto");return}r&&(this.activeSlide=e.indexOf(r.target))}initializeSlides(){const e=this.getSlides(),t=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((r,i)=>{t.unobserve(r),r.classList.remove("--in-view"),r.classList.remove("--is-active"),r.setAttribute("aria-label",this.localize.term("slideNum",i+1)),r.hasAttribute("data-clone")&&r.remove()}),this.loop){const r=this.slidesPerPage,i=e.slice(-r),o=e.slice(0,r);i.reverse().forEach((n,s)=>{const c=n.cloneNode(!0);c.setAttribute("data-clone",String(e.length-s-1)),this.prepend(c)}),o.forEach((n,s)=>{const c=n.cloneNode(!0);c.setAttribute("data-clone",String(s)),this.append(c)})}this.getSlides({excludeClones:!1}).forEach(r=>{t.observe(r)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}handleSlidesPerMoveChange(){const e=this.getSlides({excludeClones:!1}),t=this.slidesPerMove;e.forEach((r,i)=>{Math.abs(i-t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i,scrollContainer:o}=this,n=this.getSlides(),s=this.getSlides({excludeClones:!1}),c=(e+n.length)%n.length;this.activeSlide=c;const a=Te(e+(i?r:0),0,s.length-1),u=s[a],m=o.getBoundingClientRect(),h=u.getBoundingClientRect();o.scrollTo({left:h.left-m.left+o.scrollLeft,top:h.top-m.top+o.scrollTop,behavior:du()?"auto":t})}render(){const{scrollController:e,slidesPerPage:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.loop||i>0,n=this.loop||i<r-1,s=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${H({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${H({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!n})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Tb(Lb(r),c=>{const a=c===i;return $`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${H({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,r)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(c*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ke.styles=Ob;l([d({type:Boolean,reflect:!0})],ke.prototype,"loop",2);l([d({type:Boolean,reflect:!0})],ke.prototype,"navigation",2);l([d({type:Boolean,reflect:!0})],ke.prototype,"pagination",2);l([d({type:Boolean,reflect:!0})],ke.prototype,"autoplay",2);l([d({type:Number,attribute:"autoplay-interval"})],ke.prototype,"autoplayInterval",2);l([d({type:Number,attribute:"slides-per-page"})],ke.prototype,"slidesPerPage",2);l([d({type:Number,attribute:"slides-per-move"})],ke.prototype,"slidesPerMove",2);l([d()],ke.prototype,"orientation",2);l([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ke.prototype,"mouseDragging",2);l([I("slot:not([name])")],ke.prototype,"defaultSlot",2);l([I(".carousel__slides")],ke.prototype,"scrollContainer",2);l([I(".carousel__pagination")],ke.prototype,"paginationContainer",2);l([j()],ke.prototype,"activeSlide",2);l([T("loop",{waitUntilFirstUpdate:!0}),T("slidesPerPage",{waitUntilFirstUpdate:!0})],ke.prototype,"initializeSlides",1);l([T("activeSlide")],ke.prototype,"handelSlideChange",1);l([T("slidesPerMove")],ke.prototype,"handleSlidesPerMoveChange",1);l([T("autoplay")],ke.prototype,"handleAutoplayChange",1);l([T("mouseDragging")],ke.prototype,"handleMouseDraggingChange",1);ke=l([B("sl-carousel")],ke);F({tagName:"sl-carousel",elementClass:ke,react:M,events:{onSlSlideChange:"sl-slide-change"}});F({tagName:"sl-carousel-item",elementClass:bn,react:M,events:{}});const Si=(e="value")=>(t,r)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,s,c){var a;const u=i.getPropertyOptions(e),m=typeof u.attribute=="string"?u.attribute:e;if(n===m){const h=u.converter||mn,y=(typeof h=="function"?h:(a=h==null?void 0:h.fromAttribute)!==null&&a!==void 0?a:mn.fromAttribute)(c,u.type);this[e]!==y&&(this[r]=y)}o.call(this,n,s,c)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=pl(class extends fl{constructor(e){if(super(e),e.type!==lr.PROPERTY&&e.type!==lr.ATTRIBUTE&&e.type!==lr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dv(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===mt||t===we)return t;const r=e.element,i=e.name;if(e.type===lr.PROPERTY){if(t===r[i])return mt}else if(e.type===lr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return mt}else if(e.type===lr.ATTRIBUTE&&r.getAttribute(i)===t+"")return mt;return pv(e),t}});var Db=V`
  ${U}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;let De=class extends N{constructor(){super(...arguments),this.formControlController=new br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${H({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${R(this.value)}
          .indeterminate=${bi(this.indeterminate)}
          .checked=${bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?$`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?$`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};De.styles=Db;l([I('input[type="checkbox"]')],De.prototype,"input",2);l([j()],De.prototype,"hasFocus",2);l([d()],De.prototype,"title",2);l([d()],De.prototype,"name",2);l([d()],De.prototype,"value",2);l([d({reflect:!0})],De.prototype,"size",2);l([d({type:Boolean,reflect:!0})],De.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],De.prototype,"checked",2);l([d({type:Boolean,reflect:!0})],De.prototype,"indeterminate",2);l([Si("checked")],De.prototype,"defaultChecked",2);l([d({reflect:!0})],De.prototype,"form",2);l([d({type:Boolean,reflect:!0})],De.prototype,"required",2);l([T("disabled",{waitUntilFirstUpdate:!0})],De.prototype,"handleDisabledChange",1);l([T(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],De.prototype,"handleStateChange",1);De=l([B("sl-checkbox")],De);F({tagName:"sl-checkbox",elementClass:De,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});function mo(e){return e.split("-")[1]}function hu(e){return e==="y"?"height":"width"}function Nr(e){return e.split("-")[0]}function go(e){return["top","bottom"].includes(Nr(e))?"x":"y"}function Yd(e,t,r){let{reference:i,floating:o}=e;const n=i.x+i.width/2-o.width/2,s=i.y+i.height/2-o.height/2,c=go(t),a=hu(c),u=i[a]/2-o[a]/2,m=c==="x";let h;switch(Nr(t)){case"top":h={x:n,y:i.y-o.height};break;case"bottom":h={x:n,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:s};break;case"left":h={x:i.x-o.width,y:s};break;default:h={x:i.x,y:i.y}}switch(mo(t)){case"start":h[c]-=u*(r&&m?-1:1);break;case"end":h[c]+=u*(r&&m?-1:1)}return h}const Rb=async(e,t,r)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:s}=r,c=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:m,y:h}=Yd(u,i,a),p=i,y={},g=0;for(let _=0;_<c.length;_++){const{name:C,fn:b}=c[_],{x:f,y:v,data:w,reset:x}=await b({x:m,y:h,initialPlacement:i,placement:p,strategy:o,middlewareData:y,rects:u,platform:s,elements:{reference:e,floating:t}});m=f??m,h=v??h,y={...y,[C]:{...y[C],...w}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:m,y:h}=Yd(u,p,a)),_=-1)}return{x:m,y:h,placement:p,strategy:o,middlewareData:y}};function vo(e,t){return typeof e=="function"?e(t):e}function jf(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function js(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function pu(e,t){var r;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:s,elements:c,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:p=!1,padding:y=0}=vo(t,e),g=jf(y),_=c[p?h==="floating"?"reference":"floating":h],C=js(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(_)))==null||r?_:_.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:a})),b=h==="floating"?{...s.floating,x:i,y:o}:s.reference,f=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),v=await(n.isElement==null?void 0:n.isElement(f))&&await(n.getScale==null?void 0:n.getScale(f))||{x:1,y:1},w=js(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:f,strategy:a}):b);return{top:(C.top-w.top+g.top)/v.y,bottom:(w.bottom-C.bottom+g.bottom)/v.y,left:(C.left-w.left+g.left)/v.x,right:(w.right-C.right+g.right)/v.x}}const wn=Math.min,ei=Math.max;function sc(e,t,r){return ei(e,wn(t,r))}const Nb=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:i,placement:o,rects:n,platform:s,elements:c}=t,{element:a,padding:u=0}=vo(e,t)||{};if(a==null)return{};const m=jf(u),h={x:r,y:i},p=go(o),y=hu(p),g=await s.getDimensions(a),_=p==="y",C=_?"top":"left",b=_?"bottom":"right",f=_?"clientHeight":"clientWidth",v=n.reference[y]+n.reference[p]-h[p]-n.floating[y],w=h[p]-n.reference[p],x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let k=x?x[f]:0;k&&await(s.isElement==null?void 0:s.isElement(x))||(k=c.floating[f]||n.floating[y]);const S=v/2-w/2,z=k/2-g[y]/2-1,L=wn(m[C],z),A=wn(m[b],z),W=L,te=k-g[y]-A,ee=k/2-g[y]/2+S,fe=sc(W,ee,te),ye=mo(o)!=null&&ee!=fe&&n.reference[y]/2-(ee<W?L:A)-g[y]/2<0?ee<W?W-ee:te-ee:0;return{[p]:h[p]-ye,data:{[p]:fe,centerOffset:ee-fe+ye}}}}),Mb=["top","right","bottom","left"];Mb.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const Fb={left:"right",right:"left",bottom:"top",top:"bottom"};function Ws(e){return e.replace(/left|right|bottom|top/g,t=>Fb[t])}function Bb(e,t,r){r===void 0&&(r=!1);const i=mo(e),o=go(e),n=hu(o);let s=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Ws(s)),{main:s,cross:Ws(s)}}const Vb={start:"end",end:"start"};function ta(e){return e.replace(/start|end/g,t=>Vb[t])}const Ub=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:o,rects:n,initialPlacement:s,platform:c,elements:a}=t,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:g=!0,..._}=vo(e,t),C=Nr(i),b=Nr(s)===s,f=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=h||(b||!g?[Ws(s)]:function(W){const te=Ws(W);return[ta(W),te,ta(te)]}(s));h||y==="none"||v.push(...function(W,te,ee,fe){const ye=mo(W);let Se=function(dt,P,K){const Y=["left","right"],he=["right","left"],$e=["top","bottom"],$i=["bottom","top"];switch(dt){case"top":case"bottom":return K?P?he:Y:P?Y:he;case"left":case"right":return P?$e:$i;default:return[]}}(Nr(W),ee==="start",fe);return ye&&(Se=Se.map(dt=>dt+"-"+ye),te&&(Se=Se.concat(Se.map(ta)))),Se}(s,g,y,f));const w=[s,...v],x=await pu(t,_),k=[];let S=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&k.push(x[C]),m){const{main:W,cross:te}=Bb(i,n,f);k.push(x[W],x[te])}if(S=[...S,{placement:i,overflows:k}],!k.every(W=>W<=0)){var z,L;const W=(((z=o.flip)==null?void 0:z.index)||0)+1,te=w[W];if(te)return{data:{index:W,overflows:S},reset:{placement:te}};let ee=(L=S.filter(fe=>fe.overflows[0]<=0).sort((fe,ye)=>fe.overflows[1]-ye.overflows[1])[0])==null?void 0:L.placement;if(!ee)switch(p){case"bestFit":{var A;const fe=(A=S.map(ye=>[ye.placement,ye.overflows.filter(Se=>Se>0).reduce((Se,dt)=>Se+dt,0)]).sort((ye,Se)=>ye[1]-Se[1])[0])==null?void 0:A[0];fe&&(ee=fe);break}case"initialPlacement":ee=s}if(i!==ee)return{reset:{placement:ee}}}return{}}}},Hb=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,o=await async function(n,s){const{placement:c,platform:a,elements:u}=n,m=await(a.isRTL==null?void 0:a.isRTL(u.floating)),h=Nr(c),p=mo(c),y=go(c)==="x",g=["left","top"].includes(h)?-1:1,_=m&&y?-1:1,C=vo(s,n);let{mainAxis:b,crossAxis:f,alignmentAxis:v}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return p&&typeof v=="number"&&(f=p==="end"?-1*v:v),y?{x:f*_,y:b*g}:{x:b*g,y:f*_}}(t,e);return{x:r+o.x,y:i+o.y,data:o}}}};function jb(e){return e==="x"?"y":"x"}const Wb=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:o}=t,{mainAxis:n=!0,crossAxis:s=!1,limiter:c={fn:C=>{let{x:b,y:f}=C;return{x:b,y:f}}},...a}=vo(e,t),u={x:r,y:i},m=await pu(t,a),h=go(Nr(o)),p=jb(h);let y=u[h],g=u[p];if(n){const C=h==="y"?"bottom":"right";y=sc(y+m[h==="y"?"top":"left"],y,y-m[C])}if(s){const C=p==="y"?"bottom":"right";g=sc(g+m[p==="y"?"top":"left"],g,g-m[C])}const _=c.fn({...t,[h]:y,[p]:g});return{..._,data:{x:_.x-r,y:_.y-i}}}}},qd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:o,elements:n}=t,{apply:s=()=>{},...c}=vo(e,t),a=await pu(t,c),u=Nr(r),m=mo(r),h=go(r)==="x",{width:p,height:y}=i.floating;let g,_;u==="top"||u==="bottom"?(g=u,_=m===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(_=u,g=m==="end"?"top":"bottom");const C=y-a[g],b=p-a[_],f=!t.middlewareData.shift;let v=C,w=b;if(h){const k=p-a.left-a.right;w=m||f?wn(b,k):k}else{const k=y-a.top-a.bottom;v=m||f?wn(C,k):k}if(f&&!m){const k=ei(a.left,0),S=ei(a.right,0),z=ei(a.top,0),L=ei(a.bottom,0);h?w=p-2*(k!==0||S!==0?k+S:ei(a.left,a.right)):v=y-2*(z!==0||L!==0?z+L:ei(a.top,a.bottom))}await s({...t,availableWidth:w,availableHeight:v});const x=await o.getDimensions(n.floating);return p!==x.width||y!==x.height?{reset:{rects:!0}}:{}}}};function gt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rr(e){return gt(e).getComputedStyle(e)}function Wf(e){return e instanceof gt(e).Node}function Br(e){return Wf(e)?(e.nodeName||"").toLowerCase():"#document"}function Yt(e){return e instanceof HTMLElement||e instanceof gt(e).HTMLElement}function Qd(e){return typeof ShadowRoot<"u"&&(e instanceof gt(e).ShadowRoot||e instanceof ShadowRoot)}function _n(e){const{overflow:t,overflowX:r,overflowY:i,display:o}=rr(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(o)}function Kb(e){return["table","td","th"].includes(Br(e))}function lc(e){const t=fu(),r=rr(e);return r.transform!=="none"||r.perspective!=="none"||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function fu(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function gl(e){return["html","body","#document"].includes(Br(e))}const ac=Math.min,Qi=Math.max,Ks=Math.round,Xn=Math.floor,Vr=e=>({x:e,y:e});function Kf(e){const t=rr(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=Yt(e),n=o?e.offsetWidth:r,s=o?e.offsetHeight:i,c=Ks(r)!==n||Ks(i)!==s;return c&&(r=n,i=s),{width:r,height:i,$:c}}function dr(e){return e instanceof Element||e instanceof gt(e).Element}function mu(e){return dr(e)?e:e.contextElement}function Xi(e){const t=mu(e);if(!Yt(t))return Vr(1);const r=t.getBoundingClientRect(),{width:i,height:o,$:n}=Kf(t);let s=(n?Ks(r.width):r.width)/i,c=(n?Ks(r.height):r.height)/o;return s&&Number.isFinite(s)||(s=1),c&&Number.isFinite(c)||(c=1),{x:s,y:c}}const Yb=Vr(0);function Yf(e){const t=gt(e);return fu()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Yb}function wi(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),n=mu(e);let s=Vr(1);t&&(i?dr(i)&&(s=Xi(i)):s=Xi(e));const c=function(p,y,g){return y===void 0&&(y=!1),!(!g||y&&g!==gt(p))&&y}(n,r,i)?Yf(n):Vr(0);let a=(o.left+c.x)/s.x,u=(o.top+c.y)/s.y,m=o.width/s.x,h=o.height/s.y;if(n){const p=gt(n),y=i&&dr(i)?gt(i):i;let g=p.frameElement;for(;g&&i&&y!==p;){const _=Xi(g),C=g.getBoundingClientRect(),b=getComputedStyle(g),f=C.left+(g.clientLeft+parseFloat(b.paddingLeft))*_.x,v=C.top+(g.clientTop+parseFloat(b.paddingTop))*_.y;a*=_.x,u*=_.y,m*=_.x,h*=_.y,a+=f,u+=v,g=gt(g).frameElement}}return js({width:m,height:h,x:a,y:u})}function vl(e){return dr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function hr(e){var t;return(t=(Wf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qf(e){return wi(hr(e)).left+vl(e).scrollLeft}function lo(e){if(Br(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Qd(e)&&e.host||hr(e);return Qd(t)?t.host:t}function Qf(e){const t=lo(e);return gl(t)?e.ownerDocument?e.ownerDocument.body:e.body:Yt(t)&&_n(t)?t:Qf(t)}function Ys(e,t){var r;t===void 0&&(t=[]);const i=Qf(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),n=gt(i);return o?t.concat(n,n.visualViewport||[],_n(i)?i:[]):t.concat(i,Ys(i))}function Xd(e,t,r){let i;if(t==="viewport")i=function(o,n){const s=gt(o),c=hr(o),a=s.visualViewport;let u=c.clientWidth,m=c.clientHeight,h=0,p=0;if(a){u=a.width,m=a.height;const y=fu();(!y||y&&n==="fixed")&&(h=a.offsetLeft,p=a.offsetTop)}return{width:u,height:m,x:h,y:p}}(e,r);else if(t==="document")i=function(o){const n=hr(o),s=vl(o),c=o.ownerDocument.body,a=Qi(n.scrollWidth,n.clientWidth,c.scrollWidth,c.clientWidth),u=Qi(n.scrollHeight,n.clientHeight,c.scrollHeight,c.clientHeight);let m=-s.scrollLeft+qf(o);const h=-s.scrollTop;return rr(c).direction==="rtl"&&(m+=Qi(n.clientWidth,c.clientWidth)-a),{width:a,height:u,x:m,y:h}}(hr(e));else if(dr(t))i=function(o,n){const s=wi(o,!0,n==="fixed"),c=s.top+o.clientTop,a=s.left+o.clientLeft,u=Yt(o)?Xi(o):Vr(1);return{width:o.clientWidth*u.x,height:o.clientHeight*u.y,x:a*u.x,y:c*u.y}}(t,r);else{const o=Yf(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return js(i)}function Xf(e,t){const r=lo(e);return!(r===t||!dr(r)||gl(r))&&(rr(r).position==="fixed"||Xf(r,t))}function qb(e,t,r){const i=Yt(t),o=hr(t),n=r==="fixed",s=wi(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const a=Vr(0);if(i||!i&&!n)if((Br(t)!=="body"||_n(o))&&(c=vl(t)),Yt(t)){const u=wi(t,!0,n,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=qf(o));return{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function Gd(e,t){return Yt(e)&&rr(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Zd(e,t){const r=gt(e);if(!Yt(e))return r;let i=Gd(e,t);for(;i&&Kb(i)&&rr(i).position==="static";)i=Gd(i,t);return i&&(Br(i)==="html"||Br(i)==="body"&&rr(i).position==="static"&&!lc(i))?r:i||function(o){let n=lo(o);for(;Yt(n)&&!gl(n);){if(lc(n))return n;n=lo(n)}return null}(e)||r}const ps={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const o=Yt(r),n=hr(r);if(r===n)return t;let s={scrollLeft:0,scrollTop:0},c=Vr(1);const a=Vr(0);if((o||!o&&i!=="fixed")&&((Br(r)!=="body"||_n(n))&&(s=vl(r)),Yt(r))){const u=wi(r);c=Xi(r),a.x=u.x+r.clientLeft,a.y=u.y+r.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-s.scrollLeft*c.x+a.x,y:t.y*c.y-s.scrollTop*c.y+a.y}},getDocumentElement:hr,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:o}=e;const n=[...r==="clippingAncestors"?function(a,u){const m=u.get(a);if(m)return m;let h=Ys(a).filter(_=>dr(_)&&Br(_)!=="body"),p=null;const y=rr(a).position==="fixed";let g=y?lo(a):a;for(;dr(g)&&!gl(g);){const _=rr(g),C=lc(g);C||_.position!=="fixed"||(p=null),(y?!C&&!p:!C&&_.position==="static"&&p&&["absolute","fixed"].includes(p.position)||_n(g)&&!C&&Xf(a,g))?h=h.filter(b=>b!==g):p=_,g=lo(g)}return u.set(a,h),h}(t,this._c):[].concat(r),i],s=n[0],c=n.reduce((a,u)=>{const m=Xd(t,u,o);return a.top=Qi(m.top,a.top),a.right=ac(m.right,a.right),a.bottom=ac(m.bottom,a.bottom),a.left=Qi(m.left,a.left),a},Xd(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:Zd,getElementRects:async function(e){let{reference:t,floating:r,strategy:i}=e;const o=this.getOffsetParent||Zd,n=this.getDimensions;return{reference:qb(t,await o(r),i),floating:{x:0,y:0,...await n(r)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return Kf(e)},getScale:Xi,isElement:dr,isRTL:function(e){return getComputedStyle(e).direction==="rtl"}};function Qb(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,u=mu(e),m=o||n?[...u?Ys(u):[],...Ys(t)]:[];m.forEach(C=>{o&&C.addEventListener("scroll",r,{passive:!0}),n&&C.addEventListener("resize",r)});const h=u&&c?function(C,b){let f,v=null;const w=hr(C);function x(){clearTimeout(f),v&&v.disconnect(),v=null}return function k(S,z){S===void 0&&(S=!1),z===void 0&&(z=1),x();const{left:L,top:A,width:W,height:te}=C.getBoundingClientRect();if(S||b(),!W||!te)return;const ee={rootMargin:-Xn(A)+"px "+-Xn(w.clientWidth-(L+W))+"px "+-Xn(w.clientHeight-(A+te))+"px "+-Xn(L)+"px",threshold:Qi(0,ac(1,z))||1};let fe=!0;function ye(Se){const dt=Se[0].intersectionRatio;if(dt!==z){if(!fe)return k();dt?k(!1,dt):f=setTimeout(()=>{k(!1,1e-7)},100)}fe=!1}try{v=new IntersectionObserver(ye,{...ee,root:w.ownerDocument})}catch{v=new IntersectionObserver(ye,ee)}v.observe(C)}(!0),x}(u,r):null;let p,y=-1,g=null;s&&(g=new ResizeObserver(C=>{let[b]=C;b&&b.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{g&&g.observe(t)})),r()}),u&&!a&&g.observe(u),g.observe(t));let _=a?wi(e):null;return a&&function C(){const b=wi(e);!_||b.x===_.x&&b.y===_.y&&b.width===_.width&&b.height===_.height||r(),_=b,p=requestAnimationFrame(C)}(),r(),()=>{m.forEach(C=>{o&&C.removeEventListener("scroll",r),n&&C.removeEventListener("resize",r)}),h&&h(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(p)}}const Xb=(e,t,r)=>{const i=new Map,o={platform:ps,...r},n={...o.platform,_c:i};return Rb(e,t,{...o,platform:n})};function Gb(e){return Zb(e)}function ra(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Zb(e){for(let t=e;t;t=ra(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ra(e);t;t=ra(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}var Jb=V`
  ${U}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;let le=class extends N{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Qb(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Hb({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(qd({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ub({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Wb({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(qd({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Nb({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>ps.getOffsetParent(r,Gb):ps.getOffsetParent;Xb(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Dg($f({},ps),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:o,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let m="",h="",p="",y="";if(this.arrowPlacement==="start"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?g:"",y=s?"":g}else if(this.arrowPlacement==="end"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":g,y=s?g:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof a=="number"?`${a}px`:"",m=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:m,right:h,bottom:p,left:y,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${H({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};le.styles=Jb;l([I(".popup")],le.prototype,"popup",2);l([I(".popup__arrow")],le.prototype,"arrowEl",2);l([d()],le.prototype,"anchor",2);l([d({type:Boolean,reflect:!0})],le.prototype,"active",2);l([d({reflect:!0})],le.prototype,"placement",2);l([d({reflect:!0})],le.prototype,"strategy",2);l([d({type:Number})],le.prototype,"distance",2);l([d({type:Number})],le.prototype,"skidding",2);l([d({type:Boolean})],le.prototype,"arrow",2);l([d({attribute:"arrow-placement"})],le.prototype,"arrowPlacement",2);l([d({attribute:"arrow-padding",type:Number})],le.prototype,"arrowPadding",2);l([d({type:Boolean})],le.prototype,"flip",2);l([d({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],le.prototype,"flipFallbackPlacements",2);l([d({attribute:"flip-fallback-strategy"})],le.prototype,"flipFallbackStrategy",2);l([d({type:Object})],le.prototype,"flipBoundary",2);l([d({attribute:"flip-padding",type:Number})],le.prototype,"flipPadding",2);l([d({type:Boolean})],le.prototype,"shift",2);l([d({type:Object})],le.prototype,"shiftBoundary",2);l([d({attribute:"shift-padding",type:Number})],le.prototype,"shiftPadding",2);l([d({attribute:"auto-size"})],le.prototype,"autoSize",2);l([d()],le.prototype,"sync",2);l([d({type:Object})],le.prototype,"autoSizeBoundary",2);l([d({attribute:"auto-size-padding",type:Number})],le.prototype,"autoSizePadding",2);le=l([B("sl-popup")],le);function Jd(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Gf(e){var t,r;const i=[];function o(c){c instanceof HTMLElement&&(i.push(c),c.shadowRoot!==null&&c.shadowRoot.mode==="open"&&o(c.shadowRoot)),[...c.children].forEach(a=>o(a))}o(e);const n=(t=i.find(c=>Jd(c)))!==null&&t!==void 0?t:null,s=(r=i.reverse().find(c=>Jd(c)))!==null&&r!==void 0?r:null;return{start:n,end:s}}var e1=V`
  ${U}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;let qe=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Gf(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ge(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ee(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=xe(this,"dropdown.show",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ee(this);const{keyframes:e,options:t}=xe(this,"dropdown.hide",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${H({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};qe.styles=e1;l([I(".dropdown")],qe.prototype,"popup",2);l([I(".dropdown__trigger")],qe.prototype,"trigger",2);l([I(".dropdown__panel")],qe.prototype,"panel",2);l([d({type:Boolean,reflect:!0})],qe.prototype,"open",2);l([d({reflect:!0})],qe.prototype,"placement",2);l([d({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);l([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],qe.prototype,"stayOpenOnSelect",2);l([d({attribute:!1})],qe.prototype,"containingElement",2);l([d({type:Number})],qe.prototype,"distance",2);l([d({type:Number})],qe.prototype,"skidding",2);l([d({type:Boolean})],qe.prototype,"hoist",2);l([T("open",{waitUntilFirstUpdate:!0})],qe.prototype,"handleOpenChange",1);qe=l([B("sl-dropdown")],qe);se("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});se("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});const An=V`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var t1=V`
  ${U}
  ${An}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;let q=class extends N{constructor(){super(...arguments),this.formControlController=new br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Dt(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${R(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${R(this.placeholder)}
              minlength=${R(this.minlength)}
              maxlength=${R(this.maxlength)}
              min=${R(this.min)}
              max=${R(this.max)}
              step=${R(this.step)}
              .value=${bi(this.value)}
              autocapitalize=${R(this.autocapitalize)}
              autocomplete=${R(this.autocomplete)}
              autocorrect=${R(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${R(this.pattern)}
              enterkeyhint=${R(this.enterkeyhint)}
              inputmode=${R(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?$`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?$`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?$`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:$`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};q.styles=t1;l([I(".input__control")],q.prototype,"input",2);l([j()],q.prototype,"hasFocus",2);l([d()],q.prototype,"title",2);l([d({reflect:!0})],q.prototype,"type",2);l([d()],q.prototype,"name",2);l([d()],q.prototype,"value",2);l([Si()],q.prototype,"defaultValue",2);l([d({reflect:!0})],q.prototype,"size",2);l([d({type:Boolean,reflect:!0})],q.prototype,"filled",2);l([d({type:Boolean,reflect:!0})],q.prototype,"pill",2);l([d()],q.prototype,"label",2);l([d({attribute:"help-text"})],q.prototype,"helpText",2);l([d({type:Boolean})],q.prototype,"clearable",2);l([d({type:Boolean,reflect:!0})],q.prototype,"disabled",2);l([d()],q.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],q.prototype,"readonly",2);l([d({attribute:"password-toggle",type:Boolean})],q.prototype,"passwordToggle",2);l([d({attribute:"password-visible",type:Boolean})],q.prototype,"passwordVisible",2);l([d({attribute:"no-spin-buttons",type:Boolean})],q.prototype,"noSpinButtons",2);l([d({reflect:!0})],q.prototype,"form",2);l([d({type:Boolean,reflect:!0})],q.prototype,"required",2);l([d()],q.prototype,"pattern",2);l([d({type:Number})],q.prototype,"minlength",2);l([d({type:Number})],q.prototype,"maxlength",2);l([d()],q.prototype,"min",2);l([d()],q.prototype,"max",2);l([d()],q.prototype,"step",2);l([d()],q.prototype,"autocapitalize",2);l([d()],q.prototype,"autocorrect",2);l([d()],q.prototype,"autocomplete",2);l([d({type:Boolean})],q.prototype,"autofocus",2);l([d()],q.prototype,"enterkeyhint",2);l([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);l([d()],q.prototype,"inputmode",2);l([T("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);l([T("step",{waitUntilFirstUpdate:!0})],q.prototype,"handleStepChange",1);l([T("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);q=l([B("sl-input")],q);var r1=V`
  ${U}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;let qs=class extends N{render(){return $` <slot></slot> `}};qs.styles=r1;qs=l([B("sl-visually-hidden")],qs);function qo(e,t){function r(o){const n=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,c=n.left+s.pageXOffset,a=n.top+s.pageYOffset,u=o.pageX-c,m=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,m)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zf="important",i1=" !"+Zf,rt=pl(class extends fl{constructor(e){var t;if(super(e),e.type!==lr.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ut===void 0){this.ut=new Set;for(const i in t)this.ut.add(i);return this.render(t)}this.ut.forEach(i=>{t[i]==null&&(this.ut.delete(i),i.includes("-")?r.removeProperty(i):r[i]="")});for(const i in t){const o=t[i];if(o!=null){this.ut.add(i);const n=typeof o=="string"&&o.endsWith(i1);i.includes("-")||n?r.setProperty(i,n?o.slice(0,-11):o,n?Zf:""):r[i]=o}}return mt}});function Be(e,t){o1(e)&&(e="100%");var r=n1(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Gn(e){return Math.min(1,Math.max(0,e))}function o1(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function n1(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Jf(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Zn(e){return e<=1?"".concat(Number(e)*100,"%"):e}function si(e){return e.length===1?"0"+e:String(e)}function s1(e,t,r){return{r:Be(e,255)*255,g:Be(t,255)*255,b:Be(r,255)*255}}function eh(e,t,r){e=Be(e,255),t=Be(t,255),r=Be(r,255);var i=Math.max(e,t,r),o=Math.min(e,t,r),n=0,s=0,c=(i+o)/2;if(i===o)s=0,n=0;else{var a=i-o;switch(s=c>.5?a/(2-i-o):a/(i+o),i){case e:n=(t-r)/a+(t<r?6:0);break;case t:n=(r-e)/a+2;break;case r:n=(e-t)/a+4;break}n/=6}return{h:n,s,l:c}}function ia(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function l1(e,t,r){var i,o,n;if(e=Be(e,360),t=Be(t,100),r=Be(r,100),t===0)o=r,n=r,i=r;else{var s=r<.5?r*(1+t):r+t-r*t,c=2*r-s;i=ia(c,s,e+1/3),o=ia(c,s,e),n=ia(c,s,e-1/3)}return{r:i*255,g:o*255,b:n*255}}function th(e,t,r){e=Be(e,255),t=Be(t,255),r=Be(r,255);var i=Math.max(e,t,r),o=Math.min(e,t,r),n=0,s=i,c=i-o,a=i===0?0:c/i;if(i===o)n=0;else{switch(i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4;break}n/=6}return{h:n,s:a,v:s}}function a1(e,t,r){e=Be(e,360)*6,t=Be(t,100),r=Be(r,100);var i=Math.floor(e),o=e-i,n=r*(1-t),s=r*(1-o*t),c=r*(1-(1-o)*t),a=i%6,u=[r,s,n,n,c,r][a],m=[c,r,r,s,n,n][a],h=[n,n,c,r,r,s][a];return{r:u*255,g:m*255,b:h*255}}function rh(e,t,r,i){var o=[si(Math.round(e).toString(16)),si(Math.round(t).toString(16)),si(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function c1(e,t,r,i,o){var n=[si(Math.round(e).toString(16)),si(Math.round(t).toString(16)),si(Math.round(r).toString(16)),si(u1(i))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function u1(e){return Math.round(parseFloat(e)*255).toString(16)}function ih(e){return ht(e)/255}function ht(e){return parseInt(e,16)}function d1(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var cc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function h1(e){var t={r:0,g:0,b:0},r=1,i=null,o=null,n=null,s=!1,c=!1;return typeof e=="string"&&(e=m1(e)),typeof e=="object"&&(or(e.r)&&or(e.g)&&or(e.b)?(t=s1(e.r,e.g,e.b),s=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):or(e.h)&&or(e.s)&&or(e.v)?(i=Zn(e.s),o=Zn(e.v),t=a1(e.h,i,o),s=!0,c="hsv"):or(e.h)&&or(e.s)&&or(e.l)&&(i=Zn(e.s),n=Zn(e.l),t=l1(e.h,i,n),s=!0,c="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Jf(r),{ok:s,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var p1="[-\\+]?\\d+%?",f1="[-\\+]?\\d*\\.\\d+%?",Er="(?:".concat(f1,")|(?:").concat(p1,")"),oa="[\\s|\\(]+(".concat(Er,")[,|\\s]+(").concat(Er,")[,|\\s]+(").concat(Er,")\\s*\\)?"),na="[\\s|\\(]+(".concat(Er,")[,|\\s]+(").concat(Er,")[,|\\s]+(").concat(Er,")[,|\\s]+(").concat(Er,")\\s*\\)?"),Nt={CSS_UNIT:new RegExp(Er),rgb:new RegExp("rgb"+oa),rgba:new RegExp("rgba"+na),hsl:new RegExp("hsl"+oa),hsla:new RegExp("hsla"+na),hsv:new RegExp("hsv"+oa),hsva:new RegExp("hsva"+na),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function m1(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(cc[e])e=cc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=Nt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Nt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Nt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Nt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Nt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Nt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Nt.hex8.exec(e),r?{r:ht(r[1]),g:ht(r[2]),b:ht(r[3]),a:ih(r[4]),format:t?"name":"hex8"}:(r=Nt.hex6.exec(e),r?{r:ht(r[1]),g:ht(r[2]),b:ht(r[3]),format:t?"name":"hex"}:(r=Nt.hex4.exec(e),r?{r:ht(r[1]+r[1]),g:ht(r[2]+r[2]),b:ht(r[3]+r[3]),a:ih(r[4]+r[4]),format:t?"name":"hex8"}:(r=Nt.hex3.exec(e),r?{r:ht(r[1]+r[1]),g:ht(r[2]+r[2]),b:ht(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function or(e){return!!Nt.CSS_UNIT.exec(String(e))}var oh=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var i;if(t instanceof e)return t;typeof t=="number"&&(t=d1(t)),this.originalInput=t;var o=h1(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=r.format)!==null&&i!==void 0?i:o.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,i,o,n=t.r/255,s=t.g/255,c=t.b/255;return n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),c<=.03928?o=c/12.92:o=Math.pow((c+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Jf(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=th(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=th(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(i,"%, ").concat(o,"%)"):"hsva(".concat(r,", ").concat(i,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=eh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=eh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(i,"%, ").concat(o,"%)"):"hsla(".concat(r,", ").concat(i,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),rh(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),c1(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(i,")"):"rgba(".concat(t,", ").concat(r,", ").concat(i,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(Be(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(Be(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+rh(this.r,this.g,this.b,!1),r=0,i=Object.entries(cc);r<i.length;r++){var o=i[r],n=o[0],s=o[1];if(t===s)return n}return!1},e.prototype.toString=function(t){var r=!!t;t=t??this.format;var i=!1,o=this.a<1&&this.a>=0,n=!r&&o&&(t.startsWith("hex")||t==="name");return n?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=Gn(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=Gn(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=Gn(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=Gn(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var i=this.toRgb(),o=new e(t).toRgb(),n=r/100,s={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new e(s)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var i=this.toHsl(),o=360/r,n=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,n.push(new e(i));return n},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),i=r.h,o=r.s,n=r.v,s=[],c=1/t;t--;)s.push(new e({h:i,s:o,v:n})),n=(n+c)%1;return s},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),i=new e(t).toRgb(),o=r.a+i.a*(1-r.a);return new e({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),i=r.h,o=[this],n=360/t,s=1;s<t;s++)o.push(new e({h:(i+s*n)%360,s:r.s,l:r.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),g1=V`
  ${U}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const nh="EyeDropper"in window;let X=class extends N{constructor(){super(),this.formControlController=new br(this),this.isSafeValue=!1,this.localize=new ne(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),qo(t,{onMove:n=>{this.alpha=Te(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),qo(t,{onMove:n=>{this.hue=Te(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,qo(t,{onMove:(s,c)=>{this.saturation=Te(s/i*100,0,100),this.brightness=Te(100-c/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Te(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Te(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Te(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Te(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Te(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Te(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Te(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Te(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new oh(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=t.toRgb(),n=t.toHexString(),s=t.toHex8String(),c=t.toHsv(),a={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!nh)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const o=new oh(`hsva(${e}, ${t}, ${r}, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=$`
      <div
        part="base"
        class=${H({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${rt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${rt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${R(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${rt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${R(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${rt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${rt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${R(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${rt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${nh?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{const n=this.parseColor(o);return n?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${R(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(n.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${rt({backgroundColor:n.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${H({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${rt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};X.styles=g1;l([I('[part~="base"]')],X.prototype,"base",2);l([I('[part~="input"]')],X.prototype,"input",2);l([I(".color-dropdown")],X.prototype,"dropdown",2);l([I('[part~="preview"]')],X.prototype,"previewButton",2);l([I('[part~="trigger"]')],X.prototype,"trigger",2);l([j()],X.prototype,"hasFocus",2);l([j()],X.prototype,"isDraggingGridHandle",2);l([j()],X.prototype,"isEmpty",2);l([j()],X.prototype,"inputValue",2);l([j()],X.prototype,"hue",2);l([j()],X.prototype,"saturation",2);l([j()],X.prototype,"brightness",2);l([j()],X.prototype,"alpha",2);l([d()],X.prototype,"value",2);l([Si()],X.prototype,"defaultValue",2);l([d()],X.prototype,"label",2);l([d()],X.prototype,"format",2);l([d({type:Boolean,reflect:!0})],X.prototype,"inline",2);l([d({reflect:!0})],X.prototype,"size",2);l([d({attribute:"no-format-toggle",type:Boolean})],X.prototype,"noFormatToggle",2);l([d()],X.prototype,"name",2);l([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);l([d({type:Boolean})],X.prototype,"hoist",2);l([d({type:Boolean})],X.prototype,"opacity",2);l([d({type:Boolean})],X.prototype,"uppercase",2);l([d()],X.prototype,"swatches",2);l([d({reflect:!0})],X.prototype,"form",2);l([d({type:Boolean,reflect:!0})],X.prototype,"required",2);l([T("format",{waitUntilFirstUpdate:!0})],X.prototype,"handleFormatChange",1);l([T("opacity",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpacityChange",1);l([T("value")],X.prototype,"handleValueChange",1);X=l([B("sl-color-picker")],X);F({tagName:"sl-color-picker",elementClass:X,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var v1=V`
  ${U}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;let Pt=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1;return}await Ee(this.body),this.body.hidden=!1;const{keyframes:t,options:r}=xe(this,"details.show",{dir:this.localize.dir()});await _e(this.body,Vs(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.open=!0;return}await Ee(this.body);const{keyframes:t,options:r}=xe(this,"details.hide",{dir:this.localize.dir()});await _e(this.body,Vs(t,this.body.scrollHeight),r),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ge(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${H({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <div
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </div>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </div>
    `}};Pt.styles=v1;l([I(".details")],Pt.prototype,"details",2);l([I(".details__header")],Pt.prototype,"header",2);l([I(".details__body")],Pt.prototype,"body",2);l([I(".details__expand-icon-slot")],Pt.prototype,"expandIconSlot",2);l([d({type:Boolean,reflect:!0})],Pt.prototype,"open",2);l([d()],Pt.prototype,"summary",2);l([d({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);l([T("open",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleOpenChange",1);Pt=l([B("sl-details")],Pt);se("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});se("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});F({tagName:"sl-details",elementClass:Pt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});function y1(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const uc=new Set;function b1(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Qo(e){if(uc.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=b1();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Xo(e){uc.delete(e),uc.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function dc(e,t,r="vertical",i="smooth"){const o=y1(e,t),n=o.top+t.scrollTop,s=o.left+t.scrollLeft,c=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,u=t.scrollTop,m=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<c?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<u?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>m&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}let Lo=[];class em{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Lo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Lo=Lo.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Lo[Lo.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:r}=Gf(this.element),i=this.tabDirection==="forward"?t:r;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}}var w1=V`
  ${U}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let qt=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"footer"),this.localize=new ne(this),this.modal=new em(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qo(this))}disconnectedCallback(){super.disconnectedCallback(),Xo(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=xe(this,"dialog.denyClose",{dir:this.localize.dir()});_e(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ee(this.dialog),Ee(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=xe(this,"dialog.show",{dir:this.localize.dir()}),r=xe(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([_e(this.panel,t.keyframes,t.options),_e(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ee(this.dialog),Ee(this.overlay)]);const e=xe(this,"dialog.hide",{dir:this.localize.dir()}),t=xe(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([_e(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),_e(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Xo(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ge(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${R(this.noHeader?this.label:void 0)}
          aria-labelledby=${R(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};qt.styles=w1;l([I(".dialog")],qt.prototype,"dialog",2);l([I(".dialog__panel")],qt.prototype,"panel",2);l([I(".dialog__overlay")],qt.prototype,"overlay",2);l([d({type:Boolean,reflect:!0})],qt.prototype,"open",2);l([d({reflect:!0})],qt.prototype,"label",2);l([d({attribute:"no-header",type:Boolean,reflect:!0})],qt.prototype,"noHeader",2);l([T("open",{waitUntilFirstUpdate:!0})],qt.prototype,"handleOpenChange",1);qt=l([B("sl-dialog")],qt);se("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});se("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});se("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});se("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});se("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});F({tagName:"sl-dialog",elementClass:qt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"}});var _1=V`
  ${U}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;let ao=class extends N{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ao.styles=_1;l([d({type:Boolean,reflect:!0})],ao.prototype,"vertical",2);l([T("vertical")],ao.prototype,"handleVerticalChange",1);ao=l([B("sl-divider")],ao);F({tagName:"sl-divider",elementClass:ao,react:M,events:{}});function sh(e){return e.charAt(0).toUpperCase()+e.slice(1)}var x1=V`
  ${U}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let ct=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"footer"),this.localize=new ne(this),this.modal=new em(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qo(this)))}disconnectedCallback(){super.disconnectedCallback(),Xo(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=xe(this,"drawer.denyClose",{dir:this.localize.dir()});_e(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ee(this.drawer),Ee(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=xe(this,`drawer.show${sh(this.placement)}`,{dir:this.localize.dir()}),r=xe(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([_e(this.panel,t.keyframes,t.options),_e(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Xo(this)),await Promise.all([Ee(this.drawer),Ee(this.overlay)]);const e=xe(this,`drawer.hide${sh(this.placement)}`,{dir:this.localize.dir()}),t=xe(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([_e(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),_e(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qo(this)),this.open&&this.contained&&(this.modal.deactivate(),Xo(this))}async show(){if(!this.open)return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ge(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${R(this.noHeader?this.label:void 0)}
          aria-labelledby=${R(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ct.styles=x1;l([I(".drawer")],ct.prototype,"drawer",2);l([I(".drawer__panel")],ct.prototype,"panel",2);l([I(".drawer__overlay")],ct.prototype,"overlay",2);l([d({type:Boolean,reflect:!0})],ct.prototype,"open",2);l([d({reflect:!0})],ct.prototype,"label",2);l([d({reflect:!0})],ct.prototype,"placement",2);l([d({type:Boolean,reflect:!0})],ct.prototype,"contained",2);l([d({attribute:"no-header",type:Boolean,reflect:!0})],ct.prototype,"noHeader",2);l([T("open",{waitUntilFirstUpdate:!0})],ct.prototype,"handleOpenChange",1);l([T("contained",{waitUntilFirstUpdate:!0})],ct.prototype,"handleNoModalChange",1);ct=l([B("sl-drawer")],ct);se("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});se("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});se("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});se("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});se("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});se("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});se("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});se("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});se("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});se("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});se("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});F({tagName:"sl-drawer",elementClass:ct,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"}});var k1=F({tagName:"sl-dropdown",elementClass:qe,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});let co=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,n=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:o,unitDisplay:this.display})}};l([d({type:Number})],co.prototype,"value",2);l([d()],co.prototype,"unit",2);l([d()],co.prototype,"display",2);co=l([B("sl-format-bytes")],co);F({tagName:"sl-format-bytes",elementClass:co,react:M,events:{}});let Ze=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};l([d()],Ze.prototype,"date",2);l([d()],Ze.prototype,"weekday",2);l([d()],Ze.prototype,"era",2);l([d()],Ze.prototype,"year",2);l([d()],Ze.prototype,"month",2);l([d()],Ze.prototype,"day",2);l([d()],Ze.prototype,"hour",2);l([d()],Ze.prototype,"minute",2);l([d()],Ze.prototype,"second",2);l([d({attribute:"time-zone-name"})],Ze.prototype,"timeZoneName",2);l([d({attribute:"time-zone"})],Ze.prototype,"timeZone",2);l([d({attribute:"hour-format"})],Ze.prototype,"hourFormat",2);Ze=l([B("sl-format-date")],Ze);F({tagName:"sl-format-date",elementClass:Ze,react:M,events:{}});let bt=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([d({type:Number})],bt.prototype,"value",2);l([d()],bt.prototype,"type",2);l([d({attribute:"no-grouping",type:Boolean})],bt.prototype,"noGrouping",2);l([d()],bt.prototype,"currency",2);l([d({attribute:"currency-display"})],bt.prototype,"currencyDisplay",2);l([d({attribute:"minimum-integer-digits",type:Number})],bt.prototype,"minimumIntegerDigits",2);l([d({attribute:"minimum-fraction-digits",type:Number})],bt.prototype,"minimumFractionDigits",2);l([d({attribute:"maximum-fraction-digits",type:Number})],bt.prototype,"maximumFractionDigits",2);l([d({attribute:"minimum-significant-digits",type:Number})],bt.prototype,"minimumSignificantDigits",2);l([d({attribute:"maximum-significant-digits",type:Number})],bt.prototype,"maximumSignificantDigits",2);bt=l([B("sl-format-number")],bt);F({tagName:"sl-format-number",elementClass:bt,react:M,events:{}});var C1=F({tagName:"sl-icon",elementClass:jt,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});F({tagName:"sl-icon-button",elementClass:at,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var S1=V`
  ${U}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;let Ur=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),qo(this.base,{onMove:i=>{this.position=parseFloat(Te(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Te(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${H({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${rt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${rt({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `}};Ur.styles=S1;l([I(".image-comparer")],Ur.prototype,"base",2);l([I(".image-comparer__handle")],Ur.prototype,"handle",2);l([d({type:Number,reflect:!0})],Ur.prototype,"position",2);l([T("position",{waitUntilFirstUpdate:!0})],Ur.prototype,"handlePositionChange",1);Ur=l([B("sl-image-comparer")],Ur);F({tagName:"sl-image-comparer",elementClass:Ur,react:M,events:{onSlChange:"sl-change"}});const sa=new Map;function $1(e,t="cors"){const r=sa.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async o=>{const n={ok:o.ok,status:o.status,html:await o.text()};return sa.set(e,n),n});return sa.set(e,i),i}var z1=V`
  ${U}

  :host {
    display: block;
  }
`;let Hr=class extends N{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await $1(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};Hr.styles=z1;l([d()],Hr.prototype,"src",2);l([d()],Hr.prototype,"mode",2);l([d({attribute:"allow-scripts",type:Boolean})],Hr.prototype,"allowScripts",2);l([T("src")],Hr.prototype,"handleSrcChange",1);Hr=l([B("sl-include")],Hr);F({tagName:"sl-include",elementClass:Hr,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});var E1=V`
  ${U}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;let xn=class extends N{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const r=e.target.closest("sl-menu-item");!r||r.disabled||r.inert||(r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}}))}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};xn.styles=E1;l([I("slot")],xn.prototype,"defaultSlot",2);xn=l([B("sl-menu")],xn);var A1=F({tagName:"sl-menu",elementClass:xn,react:M,events:{onSlSelect:"sl-select"}});F({tagName:"sl-input",elementClass:q,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var T1=V`
  ${U}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;let wt=class extends N{constructor(){super(),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return wv(this.defaultSlot)}render(){return $`
      <div
        part="base"
        class=${H({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};wt.styles=T1;l([I("slot:not([name])")],wt.prototype,"defaultSlot",2);l([I(".menu-item")],wt.prototype,"menuItem",2);l([d()],wt.prototype,"type",2);l([d({type:Boolean,reflect:!0})],wt.prototype,"checked",2);l([d()],wt.prototype,"value",2);l([d({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);l([T("checked")],wt.prototype,"handleCheckedChange",1);l([T("disabled")],wt.prototype,"handleDisabledChange",1);l([T("type")],wt.prototype,"handleTypeChange",1);wt=l([B("sl-menu-item")],wt);var Io=F({tagName:"sl-menu-item",elementClass:wt,react:M,events:{}}),L1=V`
  ${U}

  :host {
    display: contents;
  }
`;let Ot=class extends N{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};Ot.styles=L1;l([d({reflect:!0})],Ot.prototype,"attr",2);l([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ot.prototype,"attrOldValue",2);l([d({attribute:"char-data",type:Boolean,reflect:!0})],Ot.prototype,"charData",2);l([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ot.prototype,"charDataOldValue",2);l([d({attribute:"child-list",type:Boolean,reflect:!0})],Ot.prototype,"childList",2);l([d({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);l([T("disabled")],Ot.prototype,"handleDisabledChange",1);l([T("attr",{waitUntilFirstUpdate:!0}),T("attr-old-value",{waitUntilFirstUpdate:!0}),T("char-data",{waitUntilFirstUpdate:!0}),T("char-data-old-value",{waitUntilFirstUpdate:!0}),T("childList",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleChange",1);Ot=l([B("sl-mutation-observer")],Ot);F({tagName:"sl-mutation-observer",elementClass:Ot,react:M,events:{onSlMutation:"sl-mutation"}});var I1=V`
  ${U}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`;let Qs=class extends N{render(){return $` <slot part="base" class="menu-label"></slot> `}};Qs.styles=I1;Qs=l([B("sl-menu-label")],Qs);F({tagName:"sl-menu-label",elementClass:Qs,react:M,events:{}});var P1=V`
  ${U}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;let _t=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return $`
      <div
        part="base"
        class=${H({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};_t.styles=P1;l([I(".option__label")],_t.prototype,"defaultSlot",2);l([j()],_t.prototype,"current",2);l([j()],_t.prototype,"selected",2);l([j()],_t.prototype,"hasHover",2);l([d({reflect:!0})],_t.prototype,"value",2);l([d({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);l([T("disabled")],_t.prototype,"handleDisabledChange",1);l([T("selected")],_t.prototype,"handleSelectedChange",1);l([T("value")],_t.prototype,"handleValueChange",1);_t=l([B("sl-option")],_t);F({tagName:"sl-option",elementClass:_t,react:M,events:{}});F({tagName:"sl-popup",elementClass:le,react:M,events:{onSlReposition:"sl-reposition"}});var O1=V`
  ${U}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;let _i=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${H({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${R(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${rt({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};_i.styles=O1;l([d({type:Number,reflect:!0})],_i.prototype,"value",2);l([d({type:Boolean,reflect:!0})],_i.prototype,"indeterminate",2);l([d()],_i.prototype,"label",2);_i=l([B("sl-progress-bar")],_i);F({tagName:"sl-progress-bar",elementClass:_i,react:M,events:{}});var D1=V`
  ${U}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`;let jr=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};jr.styles=D1;l([I(".progress-ring__indicator")],jr.prototype,"indicator",2);l([j()],jr.prototype,"indicatorOffset",2);l([d({type:Number,reflect:!0})],jr.prototype,"value",2);l([d()],jr.prototype,"label",2);jr=l([B("sl-progress-ring")],jr);F({tagName:"sl-progress-ring",elementClass:jr,react:M,events:{}});let tm=null;class rm{}rm.render=function(e,t){tm(e,t)};self.QrCreator=rm;(function(e){function t(c,a,u,m){var h={},p=e(u,a);p.u(c),p.J(),m=m||0;var y=p.h(),g=p.h()+2*m;return h.text=c,h.level=a,h.version=u,h.O=g,h.a=function(_,C){return _-=m,C-=m,0>_||_>=y||0>C||C>=y?!1:p.a(_,C)},h}function r(c,a,u,m,h,p,y,g,_,C){function b(f,v,w,x,k,S,z){f?(c.lineTo(v+S,w+z),c.arcTo(v,w,x,k,p)):c.lineTo(v,w)}y?c.moveTo(a+p,u):c.moveTo(a,u),b(g,m,u,m,h,-p,0),b(_,m,h,a,h,0,-p),b(C,a,h,a,u,p,0),b(y,a,u,m,u,0,p)}function i(c,a,u,m,h,p,y,g,_,C){function b(f,v,w,x){c.moveTo(f+w,v),c.lineTo(f,v),c.lineTo(f,v+x),c.arcTo(f,v,f+w,v,p)}y&&b(a,u,p,p),g&&b(m,u,-p,p),_&&b(m,h,-p,-p),C&&b(a,h,p,-p)}function o(c,a){var u=a.fill;if(typeof u=="string")c.fillStyle=u;else{var m=u.type,h=u.colorStops;if(u=u.position.map(y=>Math.round(y*a.size)),m==="linear-gradient")var p=c.createLinearGradient.apply(c,u);else if(m==="radial-gradient")p=c.createRadialGradient.apply(c,u);else throw Error("Unsupported fill");h.forEach(([y,g])=>{p.addColorStop(y,g)}),c.fillStyle=p}}function n(c,a){e:{var u=a.text,m=a.v,h=a.N,p=a.K,y=a.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var g=t(u,m,h,y);break e}catch{}g=void 0}if(!g)return null;for(u=c.getContext("2d"),a.background&&(u.fillStyle=a.background,u.fillRect(a.left,a.top,a.size,a.size)),m=g.O,p=a.size/m,u.beginPath(),y=0;y<m;y+=1)for(h=0;h<m;h+=1){var _=u,C=a.left+h*p,b=a.top+y*p,f=y,v=h,w=g.a,x=C+p,k=b+p,S=f-1,z=f+1,L=v-1,A=v+1,W=Math.floor(Math.min(.5,Math.max(0,a.R))*p),te=w(f,v),ee=w(S,L),fe=w(S,v);S=w(S,A);var ye=w(f,A);A=w(z,A),v=w(z,v),z=w(z,L),f=w(f,L),C=Math.round(C),b=Math.round(b),x=Math.round(x),k=Math.round(k),te?r(_,C,b,x,k,W,!fe&&!f,!fe&&!ye,!v&&!ye,!v&&!f):i(_,C,b,x,k,W,fe&&f&&ee,fe&&ye&&S,v&&ye&&A,v&&f&&z)}return o(u,a),u.fill(),c}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};tm=function(c,a){var u={};Object.assign(u,s,c),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,a instanceof HTMLCanvasElement?((a.width!==u.size||a.height!==u.size)&&(a.width=u.size,a.height=u.size),a.getContext("2d").clearRect(0,0,a.width,a.height),n(a,u)):(c=document.createElement("canvas"),c.width=u.size,c.height=u.size,u=n(c,u),a.appendChild(u))}})(function(){function e(a){var u=r.s(a);return{S:function(){return 4},b:function(){return u.length},write:function(m){for(var h=0;h<u.length;h+=1)m.put(u[h],8)}}}function t(){var a=[],u=0,m={B:function(){return a},c:function(h){return(a[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var y=0;y<p;y+=1)m.m((h>>>p-y-1&1)==1)},f:function(){return u},m:function(h){var p=Math.floor(u/8);a.length<=p&&a.push(0),h&&(a[p]|=128>>>u%8),u+=1}};return m}function r(a,u){function m(f,v){for(var w=-1;7>=w;w+=1)if(!(-1>=f+w||g<=f+w))for(var x=-1;7>=x;x+=1)-1>=v+x||g<=v+x||(y[f+w][v+x]=0<=w&&6>=w&&(x==0||x==6)||0<=x&&6>=x&&(w==0||w==6)||2<=w&&4>=w&&2<=x&&4>=x)}function h(f,v){for(var w=g=4*a+17,x=Array(w),k=0;k<w;k+=1){x[k]=Array(w);for(var S=0;S<w;S+=1)x[k][S]=null}for(y=x,m(0,0),m(g-7,0),m(0,g-7),w=n.G(a),x=0;x<w.length;x+=1)for(k=0;k<w.length;k+=1){S=w[x];var z=w[k];if(y[S][z]==null)for(var L=-2;2>=L;L+=1)for(var A=-2;2>=A;A+=1)y[S+L][z+A]=L==-2||L==2||A==-2||A==2||L==0&&A==0}for(w=8;w<g-8;w+=1)y[w][6]==null&&(y[w][6]=w%2==0);for(w=8;w<g-8;w+=1)y[6][w]==null&&(y[6][w]=w%2==0);for(w=n.w(p<<3|v),x=0;15>x;x+=1)k=!f&&(w>>x&1)==1,y[6>x?x:8>x?x+1:g-15+x][8]=k,y[8][8>x?g-x-1:9>x?15-x:14-x]=k;if(y[g-8][8]=!f,7<=a){for(w=n.A(a),x=0;18>x;x+=1)k=!f&&(w>>x&1)==1,y[Math.floor(x/3)][x%3+g-8-3]=k;for(x=0;18>x;x+=1)k=!f&&(w>>x&1)==1,y[x%3+g-8-3][Math.floor(x/3)]=k}if(_==null){for(f=c.I(a,p),w=t(),x=0;x<C.length;x+=1)k=C[x],w.put(4,4),w.put(k.b(),n.f(4,a)),k.write(w);for(x=k=0;x<f.length;x+=1)k+=f[x].j;if(w.f()>8*k)throw Error("code length overflow. ("+w.f()+">"+8*k+")");for(w.f()+4<=8*k&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*k)&&(w.put(236,8),!(w.f()>=8*k));)w.put(17,8);var W=0;for(k=x=0,S=Array(f.length),z=Array(f.length),L=0;L<f.length;L+=1){var te=f[L].j,ee=f[L].o-te;for(x=Math.max(x,te),k=Math.max(k,ee),S[L]=Array(te),A=0;A<S[L].length;A+=1)S[L][A]=255&w.B()[A+W];for(W+=te,A=n.C(ee),te=i(S[L],A.b()-1).l(A),z[L]=Array(A.b()-1),A=0;A<z[L].length;A+=1)ee=A+te.b()-z[L].length,z[L][A]=0<=ee?te.c(ee):0}for(A=w=0;A<f.length;A+=1)w+=f[A].o;for(w=Array(w),A=W=0;A<x;A+=1)for(L=0;L<f.length;L+=1)A<S[L].length&&(w[W]=S[L][A],W+=1);for(A=0;A<k;A+=1)for(L=0;L<f.length;L+=1)A<z[L].length&&(w[W]=z[L][A],W+=1);_=w}for(f=_,w=-1,x=g-1,k=7,S=0,v=n.F(v),z=g-1;0<z;z-=2)for(z==6&&--z;;){for(L=0;2>L;L+=1)y[x][z-L]==null&&(A=!1,S<f.length&&(A=(f[S]>>>k&1)==1),v(x,z-L)&&(A=!A),y[x][z-L]=A,--k,k==-1&&(S+=1,k=7));if(x+=w,0>x||g<=x){x-=w,w=-w;break}}}var p=o[u],y=null,g=0,_=null,C=[],b={u:function(f){f=e(f),C.push(f),_=null},a:function(f,v){if(0>f||g<=f||0>v||g<=v)throw Error(f+","+v);return y[f][v]},h:function(){return g},J:function(){for(var f=0,v=0,w=0;8>w;w+=1){h(!0,w);var x=n.D(b);(w==0||f>x)&&(f=x,v=w)}h(!1,v)}};return b}function i(a,u){if(typeof a.length>"u")throw Error(a.length+"/"+u);var m=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var y=Array(a.length-p+u),g=0;g<a.length-p;g+=1)y[g]=a[g+p];return y}(),h={c:function(p){return m[p]},b:function(){return m.length},multiply:function(p){for(var y=Array(h.b()+p.b()-1),g=0;g<h.b();g+=1)for(var _=0;_<p.b();_+=1)y[g+_]^=s.i(s.g(h.c(g))+s.g(p.c(_)));return i(y,0)},l:function(p){if(0>h.b()-p.b())return h;for(var y=s.g(h.c(0))-s.g(p.c(0)),g=Array(h.b()),_=0;_<h.b();_+=1)g[_]=h.c(_);for(_=0;_<p.b();_+=1)g[_]^=s.i(s.g(p.c(_))+y);return i(g,0).l(p)}};return h}r.s=function(a){for(var u=[],m=0;m<a.length;m++){var h=a.charCodeAt(m);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(m++,h=65536+((h&1023)<<10|a.charCodeAt(m)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var o={L:1,M:0,Q:3,H:2},n=function(){function a(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],m={w:function(h){for(var p=h<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return h<<12|p},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(p,y){return(p+y)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,y){return y%3==0};case 3:return function(p,y){return(p+y)%3==0};case 4:return function(p,y){return(Math.floor(p/2)+Math.floor(y/3))%2==0};case 5:return function(p,y){return p*y%2+p*y%3==0};case 6:return function(p,y){return(p*y%2+p*y%3)%2==0};case 7:return function(p,y){return(p*y%3+(p+y)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=i([1],0),y=0;y<h;y+=1)p=p.multiply(i([1,s.i(y)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),y=0,g=0;g<p;g+=1)for(var _=0;_<p;_+=1){for(var C=0,b=h.a(g,_),f=-1;1>=f;f+=1)if(!(0>g+f||p<=g+f))for(var v=-1;1>=v;v+=1)0>_+v||p<=_+v||(f!=0||v!=0)&&b==h.a(g+f,_+v)&&(C+=1);5<C&&(y+=3+C-5)}for(g=0;g<p-1;g+=1)for(_=0;_<p-1;_+=1)C=0,h.a(g,_)&&(C+=1),h.a(g+1,_)&&(C+=1),h.a(g,_+1)&&(C+=1),h.a(g+1,_+1)&&(C+=1),(C==0||C==4)&&(y+=3);for(g=0;g<p;g+=1)for(_=0;_<p-6;_+=1)h.a(g,_)&&!h.a(g,_+1)&&h.a(g,_+2)&&h.a(g,_+3)&&h.a(g,_+4)&&!h.a(g,_+5)&&h.a(g,_+6)&&(y+=40);for(_=0;_<p;_+=1)for(g=0;g<p-6;g+=1)h.a(g,_)&&!h.a(g+1,_)&&h.a(g+2,_)&&h.a(g+3,_)&&h.a(g+4,_)&&!h.a(g+5,_)&&h.a(g+6,_)&&(y+=40);for(_=C=0;_<p;_+=1)for(g=0;g<p;g+=1)h.a(g,_)&&(C+=1);return y+=Math.abs(100*C/p/p-50)/5*10}};return m}(),s=function(){for(var a=Array(256),u=Array(256),m=0;8>m;m+=1)a[m]=1<<m;for(m=8;256>m;m+=1)a[m]=a[m-4]^a[m-5]^a[m-6]^a[m-8];for(m=0;255>m;m+=1)u[a[m]]=m;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return a[h]}}}(),c=function(){function a(h,p){switch(p){case o.L:return u[4*(h-1)];case o.M:return u[4*(h-1)+1];case o.Q:return u[4*(h-1)+2];case o.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m={I:function(h,p){var y=a(h,p);if(typeof y>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=y.length/3,p=[];for(var g=0;g<h;g+=1)for(var _=y[3*g],C=y[3*g+1],b=y[3*g+2],f=0;f<_;f+=1){var v=b,w={};w.o=C,w.j=v,p.push(w)}return p}};return m}();return r}());const R1=QrCreator;var N1=V`
  ${U}

  :host {
    display: inline-block;
  }
`;let xt=class extends N{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&R1.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:null,size:this.size*2},this.canvas)}render(){var e;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${rt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};xt.styles=N1;l([I("canvas")],xt.prototype,"canvas",2);l([d()],xt.prototype,"value",2);l([d()],xt.prototype,"label",2);l([d({type:Number})],xt.prototype,"size",2);l([d()],xt.prototype,"fill",2);l([d()],xt.prototype,"background",2);l([d({type:Number})],xt.prototype,"radius",2);l([d({attribute:"error-correction"})],xt.prototype,"errorCorrection",2);l([T(["background","errorCorrection","fill","radius","size","value"])],xt.prototype,"generate",1);xt=l([B("sl-qr-code")],xt);F({tagName:"sl-qr-code",elementClass:xt,react:M,events:{}});var M1=V`
  ${U}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;let Qt=class extends N{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${H({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Qt.styles=M1;l([j()],Qt.prototype,"checked",2);l([j()],Qt.prototype,"hasFocus",2);l([d()],Qt.prototype,"value",2);l([d({reflect:!0})],Qt.prototype,"size",2);l([d({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);l([T("checked")],Qt.prototype,"handleCheckedChange",1);l([T("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);Qt=l([B("sl-radio")],Qt);F({tagName:"sl-radio",elementClass:Qt,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var F1=V`
  ${Uf}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;let kt=class extends N{constructor(){super(...arguments),this.hasSlotController=new Dt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Yo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${R(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};kt.styles=F1;l([I(".button")],kt.prototype,"input",2);l([I(".hidden-input")],kt.prototype,"hiddenInput",2);l([j()],kt.prototype,"hasFocus",2);l([d({type:Boolean,reflect:!0})],kt.prototype,"checked",2);l([d()],kt.prototype,"value",2);l([d({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);l([d({reflect:!0})],kt.prototype,"size",2);l([d({type:Boolean,reflect:!0})],kt.prototype,"pill",2);l([T("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);kt=l([B("sl-radio-button")],kt);F({tagName:"sl-radio-button",elementClass:kt,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var B1=V`
  ${U}
  ${An}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;let Re=class extends N{constructor(){super(...arguments),this.formControlController=new br(this),this.hasSlotController=new Dt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?kb:e?xb:ml}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(c=>!c.disabled),i=(t=r.find(c=>c.checked))!=null?t:r[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let s=r.indexOf(i)+o;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=$`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};Re.styles=B1;l([I("slot:not([name])")],Re.prototype,"defaultSlot",2);l([I(".radio-group__validation-input")],Re.prototype,"validationInput",2);l([j()],Re.prototype,"hasButtonGroup",2);l([j()],Re.prototype,"errorMessage",2);l([j()],Re.prototype,"defaultValue",2);l([d()],Re.prototype,"label",2);l([d({attribute:"help-text"})],Re.prototype,"helpText",2);l([d()],Re.prototype,"name",2);l([d({reflect:!0})],Re.prototype,"value",2);l([d({reflect:!0})],Re.prototype,"size",2);l([d({reflect:!0})],Re.prototype,"form",2);l([d({type:Boolean,reflect:!0})],Re.prototype,"required",2);l([T("size",{waitUntilFirstUpdate:!0})],Re.prototype,"handleSizeChange",1);l([T("value")],Re.prototype,"handleValueChange",1);Re=l([B("sl-radio-group")],Re);F({tagName:"sl-radio-group",elementClass:Re,react:M,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var V1=V`
  ${U}
  ${An}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;let de=class extends N{constructor(){super(...arguments),this.formControlController=new br(this),this.hasSlotController=new Dt(this,"help-text","label"),this.localize=new ne(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",n=t*e;if(o){const s=`${t-n}px + ${e} * ${i}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${i} / 2))`}else{const s=`${n}px - ${e} * ${i}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${R(this.name)}
              ?disabled=${this.disabled}
              min=${R(this.min)}
              max=${R(this.max)}
              step=${R(this.step)}
              .value=${bi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};de.styles=V1;l([I(".range__control")],de.prototype,"input",2);l([I(".range__tooltip")],de.prototype,"output",2);l([j()],de.prototype,"hasFocus",2);l([j()],de.prototype,"hasTooltip",2);l([d()],de.prototype,"title",2);l([d()],de.prototype,"name",2);l([d({type:Number})],de.prototype,"value",2);l([d()],de.prototype,"label",2);l([d({attribute:"help-text"})],de.prototype,"helpText",2);l([d({type:Boolean,reflect:!0})],de.prototype,"disabled",2);l([d({type:Number})],de.prototype,"min",2);l([d({type:Number})],de.prototype,"max",2);l([d({type:Number})],de.prototype,"step",2);l([d()],de.prototype,"tooltip",2);l([d({attribute:!1})],de.prototype,"tooltipFormatter",2);l([d({reflect:!0})],de.prototype,"form",2);l([Si()],de.prototype,"defaultValue",2);l([zf({passive:!0})],de.prototype,"handleThumbDragStart",1);l([T("value",{waitUntilFirstUpdate:!0})],de.prototype,"handleValueChange",1);l([T("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);l([T("hasTooltip",{waitUntilFirstUpdate:!0})],de.prototype,"syncRange",1);de=l([B("sl-range")],de);F({tagName:"sl-range",elementClass:de,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hc extends fl{constructor(t){if(super(t),this.et=we,t.type!==lr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===we||t==null)return this.ft=void 0,this.et=t;if(t===mt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}}hc.directiveName="unsafeHTML",hc.resultType=1;const la=pl(hc);var U1=V`
  ${U}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;let Ue=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),n=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return Te(n,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${H({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(i=>r>i&&r<i+1?$`
                <span
                  class=${H({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${rt({clipPath:e?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${la(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${rt({clipPath:e?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${la(this.getSymbol(i+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${la(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ue.styles=U1;l([I(".rating")],Ue.prototype,"rating",2);l([j()],Ue.prototype,"hoverValue",2);l([j()],Ue.prototype,"isHovering",2);l([d()],Ue.prototype,"label",2);l([d({type:Number})],Ue.prototype,"value",2);l([d({type:Number})],Ue.prototype,"max",2);l([d({type:Number})],Ue.prototype,"precision",2);l([d({type:Boolean,reflect:!0})],Ue.prototype,"readonly",2);l([d({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);l([d()],Ue.prototype,"getSymbol",2);l([zf({passive:!0})],Ue.prototype,"handleTouchMove",1);l([T("hoverValue")],Ue.prototype,"handleHoverValueChange",1);l([T("isHovering")],Ue.prototype,"handleIsHoveringChange",1);Ue=l([B("sl-rating")],Ue);F({tagName:"sl-rating",elementClass:Ue,react:M,events:{onSlChange:"sl-change",onSlHover:"sl-hover"}});const H1=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}];let ir=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:o}=H1.find(n=>Math.abs(r)<n.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;i==="minute"?n=Jn("second"):i==="hour"?n=Jn("minute"):i==="day"?n=Jn("hour"):n=Jn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),n)}return $` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};l([j()],ir.prototype,"isoTime",2);l([j()],ir.prototype,"relativeTime",2);l([j()],ir.prototype,"titleTime",2);l([d()],ir.prototype,"date",2);l([d()],ir.prototype,"format",2);l([d()],ir.prototype,"numeric",2);l([d({type:Boolean})],ir.prototype,"sync",2);ir=l([B("sl-relative-time")],ir);function Jn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}F({tagName:"sl-relative-time",elementClass:ir,react:M,events:{}});var j1=V`
  ${U}

  :host {
    display: contents;
  }
`;let uo=class extends N{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};uo.styles=j1;l([d({type:Boolean,reflect:!0})],uo.prototype,"disabled",2);l([T("disabled",{waitUntilFirstUpdate:!0})],uo.prototype,"handleDisabledChange",1);uo=l([B("sl-resize-observer")],uo);F({tagName:"sl-resize-observer",elementClass:uo,react:M,events:{onSlResize:"sl-resize"}});var W1=V`
  ${U}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;let Wr=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${H({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Wr.styles=W1;l([d({reflect:!0})],Wr.prototype,"variant",2);l([d({reflect:!0})],Wr.prototype,"size",2);l([d({type:Boolean,reflect:!0})],Wr.prototype,"pill",2);l([d({type:Boolean})],Wr.prototype,"removable",2);Wr=l([B("sl-tag")],Wr);var K1=V`
  ${U}
  ${An}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;let G=class extends N{constructor(){super(...arguments),this.formControlController=new br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Dt(this,"help-text","label"),this.localize=new ne(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(r||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let s=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=n+1,s>o.length-1&&(s=0)):e.key==="ArrowUp"?(s=n-1,s<0&&(s=o.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=o.length-1),this.setCurrentOption(o[s])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ee(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=xe(this,"select.show",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.currentOption&&dc(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ee(this);const{keyframes:e,options:t}=xe(this,"select.hide",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ge(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${H({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((s,c)=>c<this.maxOptionsVisible||this.maxOptionsVisible<=0?$`
                            <sl-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @sl-remove=${a=>this.handleTagRemove(a,s)}
                            >
                              ${s.getTextLabel()}
                            </sl-tag>
                          `:c===this.maxOptionsVisible?$` <sl-tag size=${this.size}> +${this.selectedOptions.length-c} </sl-tag> `:null)}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};G.styles=K1;l([I(".select")],G.prototype,"popup",2);l([I(".select__combobox")],G.prototype,"combobox",2);l([I(".select__display-input")],G.prototype,"displayInput",2);l([I(".select__value-input")],G.prototype,"valueInput",2);l([I(".select__listbox")],G.prototype,"listbox",2);l([j()],G.prototype,"hasFocus",2);l([j()],G.prototype,"displayLabel",2);l([j()],G.prototype,"currentOption",2);l([j()],G.prototype,"selectedOptions",2);l([d()],G.prototype,"name",2);l([d({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],G.prototype,"value",2);l([Si()],G.prototype,"defaultValue",2);l([d({reflect:!0})],G.prototype,"size",2);l([d()],G.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],G.prototype,"multiple",2);l([d({attribute:"max-options-visible",type:Number})],G.prototype,"maxOptionsVisible",2);l([d({type:Boolean,reflect:!0})],G.prototype,"disabled",2);l([d({type:Boolean})],G.prototype,"clearable",2);l([d({type:Boolean,reflect:!0})],G.prototype,"open",2);l([d({type:Boolean})],G.prototype,"hoist",2);l([d({type:Boolean,reflect:!0})],G.prototype,"filled",2);l([d({type:Boolean,reflect:!0})],G.prototype,"pill",2);l([d()],G.prototype,"label",2);l([d({reflect:!0})],G.prototype,"placement",2);l([d({attribute:"help-text"})],G.prototype,"helpText",2);l([d({reflect:!0})],G.prototype,"form",2);l([d({type:Boolean,reflect:!0})],G.prototype,"required",2);l([T("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);l([T("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);l([T("open",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpenChange",1);G=l([B("sl-select")],G);se("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});se("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});F({tagName:"sl-select",elementClass:G,react:M,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"}});var Y1=V`
  ${U}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;let kn=class extends N{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};kn.styles=Y1;l([d()],kn.prototype,"effect",2);kn=l([B("sl-skeleton")],kn);F({tagName:"sl-skeleton",elementClass:kn,react:M,events:{}});F({tagName:"sl-spinner",elementClass:Us,react:M,events:{}});var q1=V`
  ${U}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;let Je=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),qo(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let c;s.endsWith("%")?c=this.size*(parseFloat(s)/100):c=parseFloat(s),t&&!this.vertical&&(c=this.size-c),o>=c-this.snapThreshold&&o<=c+this.snapThreshold&&(o=c)}),this.position=Te(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Te(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${R(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Je.styles=q1;l([I(".divider")],Je.prototype,"divider",2);l([d({type:Number,reflect:!0})],Je.prototype,"position",2);l([d({attribute:"position-in-pixels",type:Number})],Je.prototype,"positionInPixels",2);l([d({type:Boolean,reflect:!0})],Je.prototype,"vertical",2);l([d({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);l([d()],Je.prototype,"primary",2);l([d()],Je.prototype,"snap",2);l([d({type:Number,attribute:"snap-threshold"})],Je.prototype,"snapThreshold",2);l([T("position")],Je.prototype,"handlePositionChange",1);l([T("positionInPixels")],Je.prototype,"handlePositionInPixelsChange",1);l([T("vertical")],Je.prototype,"handleVerticalChange",1);Je=l([B("sl-split-panel")],Je);F({tagName:"sl-split-panel",elementClass:Je,react:M,events:{onSlReposition:"sl-reposition"}});var Q1=V`
  ${U}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;let He=class extends N{constructor(){super(...arguments),this.formControlController=new br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${H({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${R(this.value)}
          .checked=${bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};He.styles=Q1;l([I('input[type="checkbox"]')],He.prototype,"input",2);l([j()],He.prototype,"hasFocus",2);l([d()],He.prototype,"title",2);l([d()],He.prototype,"name",2);l([d()],He.prototype,"value",2);l([d({reflect:!0})],He.prototype,"size",2);l([d({type:Boolean,reflect:!0})],He.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],He.prototype,"checked",2);l([Si("checked")],He.prototype,"defaultChecked",2);l([d({reflect:!0})],He.prototype,"form",2);l([d({type:Boolean,reflect:!0})],He.prototype,"required",2);l([T("checked",{waitUntilFirstUpdate:!0})],He.prototype,"handleCheckedChange",1);l([T("disabled",{waitUntilFirstUpdate:!0})],He.prototype,"handleDisabledChange",1);He=l([B("sl-switch")],He);F({tagName:"sl-switch",elementClass:He,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"}});var X1=V`
  ${U}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;let G1=0,Xt=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.attrId=++G1,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${H({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Xt.styles=X1;l([I(".tab")],Xt.prototype,"tab",2);l([d({reflect:!0})],Xt.prototype,"panel",2);l([d({type:Boolean,reflect:!0})],Xt.prototype,"active",2);l([d({type:Boolean})],Xt.prototype,"closable",2);l([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);l([T("active")],Xt.prototype,"handleActiveChange",1);l([T("disabled")],Xt.prototype,"handleDisabledChange",1);Xt=l([B("sl-tab")],Xt);F({tagName:"sl-tab",elementClass:Xt,react:M,events:{onSlClose:"sl-close"}});var Z1=V`
  ${U}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;let ut=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&dc(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=$f({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&dc(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),s=o.slice(0,o.indexOf(e)).reduce((c,a)=>({left:c.left+a.clientWidth,top:c.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${H({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ut.styles=Z1;l([I(".tab-group")],ut.prototype,"tabGroup",2);l([I(".tab-group__body")],ut.prototype,"body",2);l([I(".tab-group__nav")],ut.prototype,"nav",2);l([I(".tab-group__indicator")],ut.prototype,"indicator",2);l([j()],ut.prototype,"hasScrollControls",2);l([d()],ut.prototype,"placement",2);l([d()],ut.prototype,"activation",2);l([d({attribute:"no-scroll-controls",type:Boolean})],ut.prototype,"noScrollControls",2);l([T("noScrollControls",{waitUntilFirstUpdate:!0})],ut.prototype,"updateScrollControls",1);l([T("placement",{waitUntilFirstUpdate:!0})],ut.prototype,"syncIndicator",1);ut=l([B("sl-tab-group")],ut);F({tagName:"sl-tab-group",elementClass:ut,react:M,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"}});var J1=V`
  ${U}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;let ew=0,xi=class extends N{constructor(){super(...arguments),this.attrId=++ew,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};xi.styles=J1;l([d({reflect:!0})],xi.prototype,"name",2);l([d({type:Boolean,reflect:!0})],xi.prototype,"active",2);l([T("active")],xi.prototype,"handleActiveChange",1);xi=l([B("sl-tab-panel")],xi);F({tagName:"sl-tab-panel",elementClass:xi,react:M,events:{}});F({tagName:"sl-tag",elementClass:Wr,react:M,events:{onSlRemove:"sl-remove"}});var tw=V`
  ${U}
  ${An}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;let J=class extends N{constructor(){super(...arguments),this.formControlController=new br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Dt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${R(this.name)}
              .value=${bi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${R(this.placeholder)}
              rows=${R(this.rows)}
              minlength=${R(this.minlength)}
              maxlength=${R(this.maxlength)}
              autocapitalize=${R(this.autocapitalize)}
              autocorrect=${R(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${R(this.spellcheck)}
              enterkeyhint=${R(this.enterkeyhint)}
              inputmode=${R(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};J.styles=tw;l([I(".textarea__control")],J.prototype,"input",2);l([j()],J.prototype,"hasFocus",2);l([d()],J.prototype,"title",2);l([d()],J.prototype,"name",2);l([d()],J.prototype,"value",2);l([d({reflect:!0})],J.prototype,"size",2);l([d({type:Boolean,reflect:!0})],J.prototype,"filled",2);l([d()],J.prototype,"label",2);l([d({attribute:"help-text"})],J.prototype,"helpText",2);l([d()],J.prototype,"placeholder",2);l([d({type:Number})],J.prototype,"rows",2);l([d()],J.prototype,"resize",2);l([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);l([d({reflect:!0})],J.prototype,"form",2);l([d({type:Boolean,reflect:!0})],J.prototype,"required",2);l([d({type:Number})],J.prototype,"minlength",2);l([d({type:Number})],J.prototype,"maxlength",2);l([d()],J.prototype,"autocapitalize",2);l([d()],J.prototype,"autocorrect",2);l([d()],J.prototype,"autocomplete",2);l([d({type:Boolean})],J.prototype,"autofocus",2);l([d()],J.prototype,"enterkeyhint",2);l([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],J.prototype,"spellcheck",2);l([d()],J.prototype,"inputmode",2);l([Si()],J.prototype,"defaultValue",2);l([T("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);l([T("rows",{waitUntilFirstUpdate:!0})],J.prototype,"handleRowsChange",1);l([T("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);J=l([B("sl-textarea")],J);F({tagName:"sl-textarea",elementClass:J,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var rw=V`
  ${U}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`;let Ne=class extends N{constructor(){super(),this.localize=new ne(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=jd(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=jd(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Ee(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=xe(this,"tooltip.show",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Ee(this.body);const{keyframes:e,options:t}=xe(this,"tooltip.hide",{dir:this.localize.dir()});await _e(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ge(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};Ne.styles=rw;l([I("slot:not([name])")],Ne.prototype,"defaultSlot",2);l([I(".tooltip__body")],Ne.prototype,"body",2);l([I("sl-popup")],Ne.prototype,"popup",2);l([d()],Ne.prototype,"content",2);l([d()],Ne.prototype,"placement",2);l([d({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);l([d({type:Number})],Ne.prototype,"distance",2);l([d({type:Boolean,reflect:!0})],Ne.prototype,"open",2);l([d({type:Number})],Ne.prototype,"skidding",2);l([d()],Ne.prototype,"trigger",2);l([d({type:Boolean})],Ne.prototype,"hoist",2);l([T("open",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleOpenChange",1);l([T(["content","distance","hoist","placement","skidding"])],Ne.prototype,"handleOptionsChange",1);l([T("disabled")],Ne.prototype,"handleDisabledChange",1);Ne=l([B("sl-tooltip")],Ne);se("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});se("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});F({tagName:"sl-tooltip",elementClass:Ne,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lh(e,t,r){return e?t():r==null?void 0:r()}var iw=V`
  ${U}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;let oe=class extends N{constructor(){super(...arguments),this.localize=new ne(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ee(this.childrenContainer);const{keyframes:e,options:t}=xe(this,"tree-item.collapse",{dir:this.localize.dir()});await _e(this.childrenContainer,Vs(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&oe.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ee(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=xe(this,"tree-item.expand",{dir:this.localize.dir()});await _e(this.childrenContainer,Vs(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>oe.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${lh(this.loading,()=>$` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${lh(this.selectable,()=>$`
                <sl-checkbox
                  part="checkbox"
                  exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${bi(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `}};oe.styles=iw;l([j()],oe.prototype,"indeterminate",2);l([j()],oe.prototype,"isLeaf",2);l([j()],oe.prototype,"loading",2);l([j()],oe.prototype,"selectable",2);l([d({type:Boolean,reflect:!0})],oe.prototype,"expanded",2);l([d({type:Boolean,reflect:!0})],oe.prototype,"selected",2);l([d({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],oe.prototype,"lazy",2);l([I("slot:not([name])")],oe.prototype,"defaultSlot",2);l([I("slot[name=children]")],oe.prototype,"childrenSlot",2);l([I(".tree-item__item")],oe.prototype,"itemElement",2);l([I(".tree-item__children")],oe.prototype,"childrenContainer",2);l([I(".tree-item__expand-button slot")],oe.prototype,"expandButtonSlot",2);l([T("loading",{waitUntilFirstUpdate:!0})],oe.prototype,"handleLoadingChange",1);l([T("disabled")],oe.prototype,"handleDisabledChange",1);l([T("selected")],oe.prototype,"handleSelectedChange",1);l([T("expanded",{waitUntilFirstUpdate:!0})],oe.prototype,"handleExpandedChange",1);l([T("expanded",{waitUntilFirstUpdate:!0})],oe.prototype,"handleExpandAnimation",1);l([T("lazy",{waitUntilFirstUpdate:!0})],oe.prototype,"handleLazyChange",1);oe=l([B("sl-tree-item")],oe);se("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});se("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var ow=V`
  ${U}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function ah(e,t=!1){function r(n){const s=n.getChildrenItems({includeDisabled:!1});if(s.length){const c=s.every(u=>u.selected),a=s.every(u=>!u.selected&&!u.indeterminate);n.selected=c,n.indeterminate=!c&&!a}}function i(n){const s=n.parentElement;oe.isTreeItem(s)&&(r(s),i(s))}function o(n){for(const s of n.getChildrenItems())s.selected=t?n.selected||s.selected:!s.disabled&&n.selected,o(s);t&&r(n)}o(e),i(e)}let vr=class extends N{constructor(){super(),this.selection="single",this.localize=new ne(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(oe.isTreeItem),i=[...t.removedNodes].filter(oe.isTreeItem);r.forEach(this.initTreeItem),i.includes(this.lastFocusedItem)&&this.focusItem(this.getFocusableItems()[0])}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),oe.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}syncTreeItems(e){const t=this.getAllTreeItems();if(this.selection==="multiple")ah(e);else for(const r of t)r!==e&&(r.selected=!1)}selectItem(e){const t=[...this.selectedItems];this.selection==="multiple"?(e.selected=!e.selected,e.lazy&&(e.expanded=!0),this.syncTreeItems(e)):this.selection==="single"||e.isLeaf?(e.expanded=!e.expanded,e.selected=!0,this.syncTreeItems(e)):this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(a=>a.matches(":focus")),n=t[o],s=a=>{const u=t[Te(a,0,t.length-1)];this.focusItem(u)},c=a=>{n.expanded=a};e.key==="ArrowDown"?s(o+1):e.key==="ArrowUp"?s(o-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?s(o+1):c(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!n||n.disabled||n.isLeaf||!n.expanded?s(o-1):c(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(n.disabled||this.selectItem(n))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var n;return(n=o==null?void 0:o.classList)==null?void 0:n.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(this.selection==="multiple"&&i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>ah(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(r),!t.has(r)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `}};vr.styles=ow;l([I("slot:not([name])")],vr.prototype,"defaultSlot",2);l([I("slot[name=expand-icon]")],vr.prototype,"expandedIconSlot",2);l([I("slot[name=collapse-icon]")],vr.prototype,"collapsedIconSlot",2);l([d()],vr.prototype,"selection",2);l([T("selection")],vr.prototype,"handleSelectionChange",1);vr=l([B("sl-tree")],vr);F({tagName:"sl-tree",elementClass:vr,react:M,events:{onSlSelectionChange:"sl-selection-change"}});F({tagName:"sl-tree-item",elementClass:oe,react:M,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"}});F({tagName:"sl-visually-hidden",elementClass:qs,react:M,events:{}});const nw=()=>D.jsx("div",{className:"nav",children:D.jsxs("nav",{className:"container",children:[D.jsx("img",{className:"logo",src:Cf}),D.jsxs("ul",{className:"lista",children:[D.jsx("li",{children:"About"},"1"),D.jsx("li",{children:"Careers"},"2"),D.jsx("li",{children:"Events"},"3"),D.jsx("li",{children:"Products"},"4"),D.jsx("li",{children:"Support"},"5")]}),D.jsx("div",{className:"cuadroDeTexto",children:D.jsx("h1",{children:"IMMERSIVE EXPERIENCES THAT DELIVER "})}),D.jsxs(k1,{className:"burguer",children:[D.jsx(Cb,{slot:"trigger",caret:!0,children:D.jsx(C1,{slot:"prefix",name:"list"})}),D.jsxs(A1,{children:[D.jsx(Io,{children:"About"}),D.jsx(Io,{children:"Careers"}),D.jsx(Io,{children:"Events"}),D.jsx(Io,{children:"Products"}),D.jsx(Io,{children:"Support"})]})]})]})}),sw=""+new URL("image-interactive-9421aea3.jpg",import.meta.url).href,lw=""+new URL("image-deep-earth-d35ae09c.jpg",import.meta.url).href,aw=""+new URL("image-night-arcade-d2897e17.jpg",import.meta.url).href,cw=""+new URL("image-soccer-team-b6f8a5fd.jpg",import.meta.url).href,uw=""+new URL("image-grid-0fc1898e.jpg",import.meta.url).href,dw=""+new URL("image-from-above-ed7af1c0.jpg",import.meta.url).href,hw=""+new URL("image-pocket-borealis-a3b5e13c.jpg",import.meta.url).href,pw=""+new URL("image-curiosity-f32cf9c7.jpg",import.meta.url).href,fw=""+new URL("image-fisheye-e627b7d9.jpg",import.meta.url).href,mw=""+new URL("image-deep-earth-f0b09af3.jpg",import.meta.url).href,gw=""+new URL("image-night-arcade-f5304b1d.jpg",import.meta.url).href,vw=""+new URL("image-soccer-team-a07432dc.jpg",import.meta.url).href,yw=""+new URL("image-grid-43161770.jpg",import.meta.url).href,bw=""+new URL("image-from-above-bcb590f9.jpg",import.meta.url).href,ww=""+new URL("image-pocket-borealis-814c15ab.jpg",import.meta.url).href,_w=""+new URL("image-curiosity-d5bd29a8.jpg",import.meta.url).href,xw=""+new URL("image-fisheye-de2f99db.jpg",import.meta.url).href;const kw=({image:e,text:t})=>D.jsxs("div",{className:"CardBody",children:[D.jsx("img",{src:e}),D.jsx("p",{children:t})]});let Cw=[{id:1,src:lw,text:"DEEP EARTH"},{id:2,src:aw,text:"NIGHT ARCADE"},{id:3,src:cw,text:"SOCCER TEAM VR"},{id:4,src:uw,text:"THE GRID"},{id:5,src:dw,text:"FROM UP ABOVE VR"},{id:6,src:hw,text:"POCKET BOREALIS"},{id:7,src:pw,text:"THE CURIOSITY"},{id:8,src:fw,text:"MAKE IT FISHEYE"}],Sw=[{id:1,src:mw,text:"DEEP EARTH"},{id:2,src:gw,text:"NIGHT ARCADE"},{id:3,src:vw,text:"SOCCER TEAM VR"},{id:4,src:yw,text:"THE GRID"},{id:5,src:bw,text:"FROM UP ABOVE VR"},{id:6,src:ww,text:"POCKET BOREALIS"},{id:7,src:_w,text:"THE CURIOSITY"},{id:8,src:xw,text:"MAKE IT FISHEYE"}];const $w=()=>{const[e,t]=Gi.useState([{}]),r=()=>{i()},i=()=>{window.innerWidth<800?(t(Sw),console.log("under 768")):(t(Cw),console.log("upper 768"))};return Gi.useEffect(()=>{i(),window.addEventListener("resize",r)}),D.jsxs("div",{className:"containerMain",children:[D.jsxs("figure",{className:"figureContainer",children:[D.jsx("img",{className:"back1",src:sw}),D.jsxs("div",{className:"divText",children:[D.jsx("h2",{children:"THE LEADER IN INTERACTIVE VR"}),D.jsx("p",{children:"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe, Our award-winning creations have transformed business through digital experiences that bind to their brand."})]})]}),D.jsxs("div",{className:"BodyHeader",children:[D.jsx("h2",{children:"OUR CREATIONS"}),D.jsx("button",{className:"button",children:"See All"})]}),D.jsxs("div",{className:"BodyContainer",children:[console.log("que tengo",e),e==null?void 0:e.map(o=>D.jsx(kw,{image:o.src,text:o.text},o.id))]})]})};const zw=""+new URL("icon-twitter-f5e49159.svg",import.meta.url).href,Ew=""+new URL("icon-facebook-4e7e7f56.svg",import.meta.url).href,Aw=""+new URL("icon-instagram-25ecd746.svg",import.meta.url).href,Tw=""+new URL("icon-pinterest-8424ffc4.svg",import.meta.url).href,Lw=()=>D.jsxs("section",{className:"sectionFooter",children:[D.jsxs("article",{className:"iconos",children:[D.jsx("div",{className:"iconLoop",children:D.jsx("img",{className:"logo",src:Cf,alt:"Logo"})}),D.jsxs("ul",{className:"iconList",children:[D.jsx("li",{children:D.jsx("img",{src:Ew,alt:"Facebook",className:"icon"})}),D.jsx("li",{children:D.jsx("img",{src:zw,alt:"Twitter",className:"icon"})}),D.jsx("li",{children:D.jsx("img",{src:Tw,alt:"Pinterest",className:"icon"})}),D.jsx("li",{children:D.jsx("img",{src:Aw,alt:"Instagram",className:"icon"})})]})]}),D.jsxs("article",{className:"navbarFooter",children:[D.jsxs("ul",{className:"navList",children:[D.jsx("li",{children:"About"},"1"),D.jsx("li",{children:"Careers"},"2"),D.jsx("li",{children:"Events"},"3"),D.jsx("li",{children:"Products"},"4"),D.jsx("li",{children:"Support"},"5")]}),D.jsx("div",{className:"text",children:D.jsx("h2",{children:"@ 2021 Loopstudios. All rights reserved."})})]})]});function Iw(){return D.jsxs(D.Fragment,{children:[D.jsx(nw,{}),D.jsx($w,{}),D.jsx(Lw,{})]})}aa.createRoot(document.getElementById("root")).render(D.jsx(yh.StrictMode,{children:D.jsx(Iw,{})}));
