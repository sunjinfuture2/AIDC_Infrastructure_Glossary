(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function G_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $m={exports:{}},fc={},Km={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),W_=Symbol.for("react.portal"),X_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),q_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),K_=Symbol.for("react.forward_ref"),Z_=Symbol.for("react.suspense"),Q_=Symbol.for("react.memo"),J_=Symbol.for("react.lazy"),Dh=Symbol.iterator;function ev(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Jm={};function ho(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Zm}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e0(){}e0.prototype=ho.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Zm}var Sd=yd.prototype=new e0;Sd.constructor=yd;Qm(Sd,ho.prototype);Sd.isPureReactComponent=!0;var Lh=Array.isArray,t0=Object.prototype.hasOwnProperty,Md={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t0.call(e,i)&&!n0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:Md.current}}function tv(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function nv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nv(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case W_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ic(o,0):i,Lh(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(Ed(r)&&(r=tv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ic(s,a);o+=ml(s,e,n,l,r)}else if(l=ev(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},gl={transition:null},rv={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Md};function r0(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=ho;nt.Fragment=X_;nt.Profiler=Y_;nt.PureComponent=yd;nt.StrictMode=j_;nt.Suspense=Z_;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;nt.act=r0;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t0.call(e,l)&&!n0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(t){return t={$$typeof:$_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q_,_context:t},t.Consumer=t};nt.createElement=i0;nt.createFactory=function(t){var e=i0.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:K_,render:t}};nt.isValidElement=Ed;nt.lazy=function(t){return{$$typeof:J_,_payload:{_status:-1,_result:t},_init:iv}};nt.memo=function(t,e){return{$$typeof:Q_,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};nt.unstable_act=r0;nt.useCallback=function(t,e){return _n.current.useCallback(t,e)};nt.useContext=function(t){return _n.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};nt.useEffect=function(t,e){return _n.current.useEffect(t,e)};nt.useId=function(){return _n.current.useId()};nt.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return _n.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};nt.useRef=function(t){return _n.current.useRef(t)};nt.useState=function(t){return _n.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return _n.current.useTransition()};nt.version="18.3.1";Km.exports=nt;var ri=Km.exports;const No=G_(ri);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=ri,ov=Symbol.for("react.element"),av=Symbol.for("react.fragment"),lv=Object.prototype.hasOwnProperty,cv=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uv={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)lv.call(e,i)&&!uv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ov,type:t,key:s,ref:o,props:r,_owner:cv.current}}fc.Fragment=av;fc.jsx=s0;fc.jsxs=s0;$m.exports=fc;var Le=$m.exports,ku={},o0={exports:{}},In={},a0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,oe){var le=I.length;I.push(oe);e:for(;0<le;){var ye=le-1>>>1,ke=I[ye];if(0<r(ke,oe))I[ye]=oe,I[le]=ke,le=ye;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var oe=I[0],le=I.pop();if(le!==oe){I[0]=le;e:for(var ye=0,ke=I.length,it=ke>>>1;ye<it;){var ne=2*(ye+1)-1,de=I[ne],Ae=ne+1,Me=I[Ae];if(0>r(de,le))Ae<ke&&0>r(Me,de)?(I[ye]=Me,I[Ae]=le,ye=Ae):(I[ye]=de,I[ne]=le,ye=ne);else if(Ae<ke&&0>r(Me,le))I[ye]=Me,I[Ae]=le,ye=Ae;else break e}}return oe}function r(I,oe){var le=I.sortIndex-oe.sortIndex;return le!==0?le:I.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var oe=n(c);oe!==null;){if(oe.callback===null)i(c);else if(oe.startTime<=I)i(c),oe.sortIndex=oe.expirationTime,e(l,oe);else break;oe=n(c)}}function S(I){if(y=!1,g(I),!_)if(n(l)!==null)_=!0,K(P);else{var oe=n(c);oe!==null&&ue(S,oe.startTime-I)}}function P(I,oe){_=!1,y&&(y=!1,u(b),b=-1),p=!0;var le=h;try{for(g(oe),d=n(l);d!==null&&(!(d.expirationTime>oe)||I&&!w());){var ye=d.callback;if(typeof ye=="function"){d.callback=null,h=d.priorityLevel;var ke=ye(d.expirationTime<=oe);oe=t.unstable_now(),typeof ke=="function"?d.callback=ke:d===n(l)&&i(l),g(oe)}else i(l);d=n(l)}if(d!==null)var it=!0;else{var ne=n(c);ne!==null&&ue(S,ne.startTime-oe),it=!1}return it}finally{d=null,h=le,p=!1}}var R=!1,T=null,b=-1,te=5,x=-1;function w(){return!(t.unstable_now()-x<te)}function $(){if(T!==null){var I=t.unstable_now();x=I;var oe=!0;try{oe=T(!0,I)}finally{oe?q():(R=!1,T=null)}}else R=!1}var q;if(typeof v=="function")q=function(){v($)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=$,q=function(){ae.postMessage(null)}}else q=function(){m($,0)};function K(I){T=I,R||(R=!0,q())}function ue(I,oe){b=m(function(){I(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var oe=3;break;default:oe=h}var le=h;h=oe;try{return I()}finally{h=le}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,oe){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var le=h;h=I;try{return oe()}finally{h=le}},t.unstable_scheduleCallback=function(I,oe,le){var ye=t.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ye+le:ye):le=ye,I){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=le+ke,I={id:f++,callback:oe,priorityLevel:I,startTime:le,expirationTime:ke,sortIndex:-1},le>ye?(I.sortIndex=le,e(c,I),n(l)===null&&I===n(c)&&(y?(u(b),b=-1):y=!0,ue(S,le-ye))):(I.sortIndex=ke,e(l,I),_||p||(_=!0,K(P))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var oe=h;return function(){var le=h;h=oe;try{return I.apply(this,arguments)}finally{h=le}}}})(l0);a0.exports=l0;var fv=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=ri,Un=fv;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,Qo={};function us(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Qo[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ih={},Nh={};function pv(t){return zu.call(Nh,t)?!0:zu.call(Ih,t)?!1:hv.test(t)?Nh[t]=!0:(Ih[t]=!0,!1)}function mv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gv(t,e,n,i){if(e===null||typeof e>"u"||mv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Td);en[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Td);en[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Td);en[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gv(e,n,r,i)&&(n=null),i||r===null?pv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Nc;function Fo(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function _v(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case bs:return"Portal";case Hu:return"Profiler";case Cd:return"StrictMode";case Vu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f0:return(t.displayName||"Context")+".Consumer";case u0:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:Wu(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Wu(t(e))}catch{}}return null}function vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xv(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=xv(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m0(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function ju(t,e){m0(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function Gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Oo(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function g0(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Sv=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(Sv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,Ws=null,Xs=null;function Hh(t){if(t=ya(t)){if(typeof Ju!="function")throw Error(me(280));var e=t.stateNode;e&&(e=gc(e),Ju(t.stateNode,t.type,e))}}function S0(t){Ws?Xs?Xs.push(t):Xs=[t]:Ws=t}function M0(){if(Ws){var t=Ws,e=Xs;if(Xs=Ws=null,Hh(t),e)for(t=0;t<e.length;t++)Hh(e[t])}}function E0(t,e){return t(e)}function w0(){}var Bc=!1;function T0(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return E0(t,e,n)}finally{Bc=!1,(Ws!==null||Xs!==null)&&(w0(),M0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var ef=!1;if(ki)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{ef=!1}function Mv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Go=!1,Nl=null,Fl=!1,tf=null,Ev={onError:function(t){Go=!0,Nl=t}};function wv(t,e,n,i,r,s,o,a,l){Go=!1,Nl=null,Mv.apply(Ev,arguments)}function Tv(t,e,n,i,r,s,o,a,l){if(wv.apply(this,arguments),Go){if(Go){var c=Nl;Go=!1,Nl=null}else throw Error(me(198));Fl||(Fl=!0,tf=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vh(t){if(fs(t)!==t)throw Error(me(188))}function Av(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vh(r),t;if(s===i)return Vh(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function C0(t){return t=Av(t),t!==null?R0(t):null}function R0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R0(t);if(e!==null)return e;t=t.sibling}return null}var P0=Un.unstable_scheduleCallback,Gh=Un.unstable_cancelCallback,Cv=Un.unstable_shouldYield,Rv=Un.unstable_requestPaint,kt=Un.unstable_now,Pv=Un.unstable_getCurrentPriorityLevel,Dd=Un.unstable_ImmediatePriority,b0=Un.unstable_UserBlockingPriority,Ol=Un.unstable_NormalPriority,bv=Un.unstable_LowPriority,D0=Un.unstable_IdlePriority,dc=null,Si=null;function Dv(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:Iv,Lv=Math.log,Uv=Math.LN2;function Iv(t){return t>>>=0,t===0?32:31-(Lv(t)/Uv|0)|0}var ba=64,Da=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function Nv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Nv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,Ud,N0,F0,O0,rf=!1,La=[],pr=null,mr=null,gr=null,ta=new Map,na=new Map,lr=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kv(t,e,n,i,r){switch(e){case"focusin":return pr=Eo(pr,t,e,n,i,r),!0;case"dragenter":return mr=Eo(mr,t,e,n,i,r),!0;case"mouseover":return gr=Eo(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,Eo(ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,Eo(na.get(s)||null,t,e,n,i,r)),!0}return!1}function B0(t){var e=Yr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=A0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){N0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qu=i,n.target.dispatchEvent(i),Qu=null}else return e=ya(n),e!==null&&Ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){_l(t)&&n.delete(e)}function zv(){rf=!1,pr!==null&&_l(pr)&&(pr=null),mr!==null&&_l(mr)&&(mr=null),gr!==null&&_l(gr)&&(gr=null),ta.forEach(Xh),na.forEach(Xh)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,zv)))}function ia(t){function e(r){return wo(r,t)}if(0<La.length){wo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&wo(pr,t),mr!==null&&wo(mr,t),gr!==null&&wo(gr,t),ta.forEach(e),na.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&lr.shift()}var js=Xi.ReactCurrentBatchConfig,kl=!0;function Hv(t,e,n,i){var r=gt,s=js.transition;js.transition=null;try{gt=1,Id(t,e,n,i)}finally{gt=r,js.transition=s}}function Vv(t,e,n,i){var r=gt,s=js.transition;js.transition=null;try{gt=4,Id(t,e,n,i)}finally{gt=r,js.transition=s}}function Id(t,e,n,i){if(kl){var r=sf(t,e,n,i);if(r===null)$c(t,e,i,zl,n),Wh(t,i);else if(kv(r,t,e,n,i))i.stopPropagation();else if(Wh(t,i),e&4&&-1<Bv.indexOf(t)){for(;r!==null;){var s=ya(r);if(s!==null&&I0(s),s=sf(t,e,n,i),s===null&&$c(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var zl=null;function sf(t,e,n,i){if(zl=null,t=bd(i),t=Yr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case Dd:return 1;case b0:return 4;case Ol:case bv:return 16;case D0:return 536870912;default:return 16}default:return 16}}var fr=null,Nd=null,vl=null;function z0(){if(vl)return vl;var t,e=Nd,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return vl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function jh(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:jh,this.isPropagationStopped=jh,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Nn(po),xa=Lt({},po,{view:0,detail:0}),Gv=Nn(xa),zc,Hc,To,hc=Lt({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(zc=t.screenX-To.screenX,Hc=t.screenY-To.screenY):Hc=zc=0,To=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Yh=Nn(hc),Wv=Lt({},hc,{dataTransfer:0}),Xv=Nn(Wv),jv=Lt({},xa,{relatedTarget:0}),Vc=Nn(jv),Yv=Lt({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Nn(Yv),$v=Lt({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=Nn($v),Zv=Lt({},po,{data:0}),qh=Nn(Zv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ex[t])?!!e[t]:!1}function Od(){return tx}var nx=Lt({},xa,{key:function(t){if(t.key){var e=Qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Nn(nx),rx=Lt({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Nn(rx),sx=Lt({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),ox=Nn(sx),ax=Lt({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Nn(ax),cx=Lt({},hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Nn(cx),fx=[9,13,27,32],Bd=ki&&"CompositionEvent"in window,Wo=null;ki&&"documentMode"in document&&(Wo=document.documentMode);var dx=ki&&"TextEvent"in window&&!Wo,H0=ki&&(!Bd||Wo&&8<Wo&&11>=Wo),Kh=" ",Zh=!1;function V0(t,e){switch(t){case"keyup":return fx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function hx(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(Zh=!0,Kh);case"textInput":return t=e.data,t===Kh&&Zh?null:t;default:return null}}function px(t,e){if(Ls)return t==="compositionend"||!Bd&&V0(t,e)?(t=z0(),vl=Nd=fr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H0&&e.locale!=="ko"?null:e.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mx[t.type]:e==="textarea"}function W0(t,e,n,i){S0(i),e=Hl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ra=null;function gx(t){tg(t,0)}function pc(t){var e=Ns(t);if(p0(e))return t}function _x(t,e){if(t==="change")return e}var X0=!1;if(ki){var Gc;if(ki){var Wc="oninput"in document;if(!Wc){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Wc=typeof Jh.oninput=="function"}Gc=Wc}else Gc=!1;X0=Gc&&(!document.documentMode||9<document.documentMode)}function ep(){Xo&&(Xo.detachEvent("onpropertychange",j0),ra=Xo=null)}function j0(t){if(t.propertyName==="value"&&pc(ra)){var e=[];W0(e,ra,t,bd(t)),T0(gx,e)}}function vx(t,e,n){t==="focusin"?(ep(),Xo=e,ra=n,Xo.attachEvent("onpropertychange",j0)):t==="focusout"&&ep()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(ra)}function yx(t,e){if(t==="click")return pc(e)}function Sx(t,e){if(t==="input"||t==="change")return pc(e)}function Mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:Mx;function sa(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,e){var n=tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ex(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(i!==null&&kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=np(n,s);var o=np(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wx=ki&&"documentMode"in document&&11>=document.documentMode,Us=null,of=null,jo=null,af=!1;function ip(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||Us==null||Us!==Il(i)||(i=Us,"selectionStart"in i&&kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&sa(jo,i)||(jo=i,i=Hl(of,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Xc={},$0={};ki&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function mc(t){if(Xc[t])return Xc[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $0)return Xc[t]=e[n];return t}var K0=mc("animationend"),Z0=mc("animationiteration"),Q0=mc("animationstart"),J0=mc("transitionend"),eg=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){eg.set(t,e),us(e,[t])}for(var jc=0;jc<rp.length;jc++){var Yc=rp[jc],Tx=Yc.toLowerCase(),Ax=Yc[0].toUpperCase()+Yc.slice(1);Rr(Tx,"on"+Ax)}Rr(K0,"onAnimationEnd");Rr(Z0,"onAnimationIteration");Rr(Q0,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(J0,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function sp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Tv(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;sp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;sp(r,a,c),s=l}}}if(Fl)throw t=tf,Fl=!1,tf=null,t}function Et(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function qc(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Na]){t[Na]=!0,c0.forEach(function(n){n!=="selectionchange"&&(Cx.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,qc("selectionchange",!1,e))}}function ng(t,e,n,i){switch(k0(e)){case 1:var r=Hv;break;case 4:r=Vv;break;default:r=Id}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}T0(function(){var c=s,f=bd(n),d=[];e:{var h=eg.get(t);if(h!==void 0){var p=Fd,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":p=ix;break;case"focusin":_="focus",p=Vc;break;case"focusout":_="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ox;break;case K0:case Z0:case Q0:p=qv;break;case J0:p=lx;break;case"scroll":p=Gv;break;case"wheel":p=ux;break;case"copy":case"cut":case"paste":p=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$h}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=ea(v,u),S!=null&&y.push(aa(v,S,g)))),m)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Qu&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[zi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Yr(_):null,_!==null&&(m=fs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Yh,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=$h,S="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:Ns(p),g=_==null?h:Ns(_),h=new y(S,v+"leave",p,n,f),h.target=m,h.relatedTarget=g,S=null,Yr(f)===c&&(y=new y(u,v+"enter",_,n,f),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,u=_,v=0,g=y;g;g=ps(g))v++;for(g=0,S=u;S;S=ps(S))g++;for(;0<v-g;)y=ps(y),v--;for(;0<g-v;)u=ps(u),g--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=ps(y),u=ps(u)}y=null}else y=null;p!==null&&op(d,h,p,y,!1),_!==null&&m!==null&&op(d,m,_,y,!0)}}e:{if(h=c?Ns(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=_x;else if(Qh(h))if(X0)P=Sx;else{P=xx;var R=vx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=yx);if(P&&(P=P(t,c))){W0(d,P,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Yu(h,"number",h.value)}switch(R=c?Ns(c):window,t){case"focusin":(Qh(R)||R.contentEditable==="true")&&(Us=R,of=c,jo=null);break;case"focusout":jo=of=Us=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,ip(d,n,f);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":ip(d,n,f)}var T;if(Bd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ls?V0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(H0&&n.locale!=="ko"&&(Ls||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ls&&(T=z0()):(fr=f,Nd="value"in fr?fr.value:fr.textContent,Ls=!0)),R=Hl(c,b),0<R.length&&(b=new qh(b,t,null,n,f),d.push({event:b,listeners:R}),T?b.data=T:(T=G0(n),T!==null&&(b.data=T)))),(T=dx?hx(t,n):px(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(f=new qh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}tg(d,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(t,n),s!=null&&i.unshift(aa(t,s,r)),s=ea(t,e),s!=null&&i.push(aa(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):r||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Px,"")}function Fa(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(me(425))}function Vl(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){return lp.resolve(null).then(t).catch(Lx)}:ff;function Lx(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),yi="__reactFiber$"+mo,la="__reactProps$"+mo,zi="__reactContainer$"+mo,df="__reactEvents$"+mo,Ux="__reactListeners$"+mo,Ix="__reactHandles$"+mo;function Yr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cp(t);t!==null;){if(n=t[yi])return n;t=cp(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[yi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function gc(t){return t[la]||null}var hf=[],Fs=-1;function Pr(t){return{current:t}}function Tt(t){0>Fs||(t.current=hf[Fs],hf[Fs]=null,Fs--)}function yt(t,e){Fs++,hf[Fs]=t.current,t.current=e}var Ar={},fn=Pr(Ar),Mn=Pr(!1),es=Ar;function eo(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Gl(){Tt(Mn),Tt(fn)}function up(t,e,n){if(fn.current!==Ar)throw Error(me(168));yt(fn,e),yt(Mn,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,vv(t)||"Unknown",r));return Lt({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,es=fn.current,yt(fn,t),yt(Mn,Mn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=ig(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,Tt(Mn),Tt(fn),yt(fn,t)):Tt(Mn),yt(Mn,n)}var Li=null,_c=!1,Zc=!1;function rg(t){Li===null?Li=[t]:Li.push(t)}function Nx(t){_c=!0,rg(t)}function br(){if(!Zc&&Li!==null){Zc=!0;var t=0,e=gt;try{var n=Li;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,_c=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),P0(Dd,br),r}finally{gt=e,Zc=!1}}return null}var Os=[],Bs=0,Xl=null,jl=0,Bn=[],kn=0,ts=null,Ui=1,Ii="";function Hr(t,e){Os[Bs++]=jl,Os[Bs++]=Xl,Xl=t,jl=e}function sg(t,e,n){Bn[kn++]=Ui,Bn[kn++]=Ii,Bn[kn++]=ts,ts=t;var i=Ui;t=Ii;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-ui(e)+r|n<<r|i,Ii=s+t}else Ui=1<<s|n<<r|i,Ii=t}function zd(t){t.return!==null&&(Hr(t,1),sg(t,1,0))}function Hd(t){for(;t===Xl;)Xl=Os[--Bs],Os[Bs]=null,jl=Os[--Bs],Os[Bs]=null;for(;t===ts;)ts=Bn[--kn],Bn[kn]=null,Ii=Bn[--kn],Bn[kn]=null,Ui=Bn[--kn],Bn[kn]=null}var Ln=null,Dn=null,Ct=!1,si=null;function og(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Dn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Ui,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Dn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(Ct){var e=Dn;if(e){var n=e;if(!dp(t,e)){if(pf(t))throw Error(me(418));e=_r(n.nextSibling);var i=Ln;e&&dp(t,e)?og(i,n):(t.flags=t.flags&-4097|2,Ct=!1,Ln=t)}}else{if(pf(t))throw Error(me(418));t.flags=t.flags&-4097|2,Ct=!1,Ln=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function Oa(t){if(t!==Ln)return!1;if(!Ct)return hp(t),Ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Dn)){if(pf(t))throw ag(),Error(me(418));for(;e;)og(t,e),e=_r(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Ln?_r(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=Dn;t;)t=_r(t.nextSibling)}function to(){Dn=Ln=null,Ct=!1}function Vd(t){si===null?si=[t]:si.push(t)}var Fx=Xi.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pp(t){var e=t._init;return e(t._payload)}function lg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Sr(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,S){return v===null||v.tag!==6?(v=ru(g,u.mode,S),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,S){var P=g.type;return P===Ds?f(u,v,g.props.children,S,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sr&&pp(P)===v.type)?(S=r(v,g.props),S.ref=Ao(u,v,g),S.return=u,S):(S=Al(g.type,g.key,g.props,null,u.mode,S),S.ref=Ao(u,v,g),S.return=u,S)}function c(u,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=su(g,u.mode,S),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,S,P){return v===null||v.tag!==7?(v=Jr(g,u.mode,S,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function d(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ru(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return g=Al(v.type,v.key,v.props,null,u.mode,g),g.ref=Ao(u,null,v),g.return=u,g;case bs:return v=su(v,u.mode,g),v.return=u,v;case sr:var S=v._init;return d(u,S(v._payload),g)}if(Oo(v)||So(v))return v=Jr(v,u.mode,g,null),v.return=u,v;Ba(u,v)}return null}function h(u,v,g,S){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(u,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===P?l(u,v,g,S):null;case bs:return g.key===P?c(u,v,g,S):null;case sr:return P=g._init,h(u,v,P(g._payload),S)}if(Oo(g)||So(g))return P!==null?null:f(u,v,g,S,null);Ba(u,g)}return null}function p(u,v,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,a(v,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ca:return u=u.get(S.key===null?g:S.key)||null,l(v,u,S,P);case bs:return u=u.get(S.key===null?g:S.key)||null,c(v,u,S,P);case sr:var R=S._init;return p(u,v,g,R(S._payload),P)}if(Oo(S)||So(S))return u=u.get(g)||null,f(v,u,S,P,null);Ba(v,S)}return null}function _(u,v,g,S){for(var P=null,R=null,T=v,b=v=0,te=null;T!==null&&b<g.length;b++){T.index>b?(te=T,T=null):te=T.sibling;var x=h(u,T,g[b],S);if(x===null){T===null&&(T=te);break}t&&T&&x.alternate===null&&e(u,T),v=s(x,v,b),R===null?P=x:R.sibling=x,R=x,T=te}if(b===g.length)return n(u,T),Ct&&Hr(u,b),P;if(T===null){for(;b<g.length;b++)T=d(u,g[b],S),T!==null&&(v=s(T,v,b),R===null?P=T:R.sibling=T,R=T);return Ct&&Hr(u,b),P}for(T=i(u,T);b<g.length;b++)te=p(T,u,b,g[b],S),te!==null&&(t&&te.alternate!==null&&T.delete(te.key===null?b:te.key),v=s(te,v,b),R===null?P=te:R.sibling=te,R=te);return t&&T.forEach(function(w){return e(u,w)}),Ct&&Hr(u,b),P}function y(u,v,g,S){var P=So(g);if(typeof P!="function")throw Error(me(150));if(g=P.call(g),g==null)throw Error(me(151));for(var R=P=null,T=v,b=v=0,te=null,x=g.next();T!==null&&!x.done;b++,x=g.next()){T.index>b?(te=T,T=null):te=T.sibling;var w=h(u,T,x.value,S);if(w===null){T===null&&(T=te);break}t&&T&&w.alternate===null&&e(u,T),v=s(w,v,b),R===null?P=w:R.sibling=w,R=w,T=te}if(x.done)return n(u,T),Ct&&Hr(u,b),P;if(T===null){for(;!x.done;b++,x=g.next())x=d(u,x.value,S),x!==null&&(v=s(x,v,b),R===null?P=x:R.sibling=x,R=x);return Ct&&Hr(u,b),P}for(T=i(u,T);!x.done;b++,x=g.next())x=p(T,u,b,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?b:x.key),v=s(x,v,b),R===null?P=x:R.sibling=x,R=x);return t&&T.forEach(function($){return e(u,$)}),Ct&&Hr(u,b),P}function m(u,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var P=g.key,R=v;R!==null;){if(R.key===P){if(P=g.type,P===Ds){if(R.tag===7){n(u,R.sibling),v=r(R,g.props.children),v.return=u,u=v;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sr&&pp(P)===R.type){n(u,R.sibling),v=r(R,g.props),v.ref=Ao(u,R,g),v.return=u,u=v;break e}n(u,R);break}else e(u,R);R=R.sibling}g.type===Ds?(v=Jr(g.props.children,u.mode,S,g.key),v.return=u,u=v):(S=Al(g.type,g.key,g.props,null,u.mode,S),S.ref=Ao(u,v,g),S.return=u,u=S)}return o(u);case bs:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=su(g,u.mode,S),v.return=u,u=v}return o(u);case sr:return R=g._init,m(u,v,R(g._payload),S)}if(Oo(g))return _(u,v,g,S);if(So(g))return y(u,v,g,S);Ba(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=ru(g,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return m}var no=lg(!0),cg=lg(!1),Yl=Pr(null),ql=null,ks=null,Gd=null;function Wd(){Gd=ks=ql=null}function Xd(t){var e=Yl.current;Tt(Yl),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){ql=t,Gd=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Gd!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(ql===null)throw Error(me(308));ks=t,ql.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var qr=null;function jd(t){qr===null?qr=[t]:qr.push(t)}function ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}function mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Lt({},d,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=d}}function gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var Sa={},Mi=Pr(Sa),ca=Pr(Sa),ua=Pr(Sa);function $r(t){if(t===Sa)throw Error(me(174));return t}function qd(t,e){switch(yt(ua,e),yt(ca,t),yt(Mi,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}Tt(Mi),yt(Mi,e)}function io(){Tt(Mi),Tt(ca),Tt(ua)}function dg(t){$r(ua.current);var e=$r(Mi.current),n=$u(e,t.type);e!==n&&(yt(ca,t),yt(Mi,n))}function $d(t){ca.current===t&&(Tt(Mi),Tt(ca))}var bt=Pr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Kd(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var Sl=Xi.ReactCurrentDispatcher,Jc=Xi.ReactCurrentBatchConfig,ns=0,Dt=null,Vt=null,$t=null,Zl=!1,Yo=!1,fa=0,Ox=0;function rn(){throw Error(me(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,s){if(ns=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Hx:Vx,t=n(i,r),Yo){s=0;do{if(Yo=!1,fa=0,25<=s)throw Error(me(301));s+=1,$t=Vt=null,e.updateQueue=null,Sl.current=Gx,t=n(i,r)}while(Yo)}if(Sl.current=Ql,e=Vt!==null&&Vt.next!==null,ns=0,$t=Vt=Dt=null,Zl=!1,e)throw Error(me(300));return t}function Jd(){var t=fa!==0;return fa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Dt.memoizedState=$t=t:$t=$t.next=t,$t}function qn(){if(Vt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=$t===null?Dt.memoizedState:$t.next;if(e!==null)$t=e,Vt=t;else{if(t===null)throw Error(me(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},$t===null?Dt.memoizedState=$t=t:$t=$t.next=t}return $t}function da(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=qn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ns&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Dt.lanes|=f,is|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=qn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hg(){}function pg(t,e){var n=Dt,i=qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,eh(_g.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,ha(9,gg.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(me(349));ns&30||mg(n,e,r)}return r}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,i){e.value=n,e.getSnapshot=i,vg(e)&&xg(t)}function _g(t,e,n){return n(function(){vg(e)&&xg(t)})}function vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function xg(t){var e=Hi(t,1);e!==null&&fi(e,t,1,-1)}function _p(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=zx.bind(null,Dt,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yg(){return qn().memoizedState}function Ml(t,e,n,i){var r=vi();Dt.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&Zd(i,o.deps)){r.memoizedState=ha(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=ha(1|e,n,s,i)}function vp(t,e){return Ml(8390656,8,t,e)}function eh(t,e){return vc(2048,8,t,e)}function Sg(t,e){return vc(4,2,t,e)}function Mg(t,e){return vc(4,4,t,e)}function Eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wg(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,Eg.bind(null,e,t),n)}function th(){}function Tg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ag(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cg(t,e,n){return ns&21?(hi(n,e)||(n=L0(),Dt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function Bx(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{gt=n,Jc.transition=i}}function Rg(){return qn().memoizedState}function kx(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(t))bg(e,n);else if(n=ug(t,e,n,i),n!==null){var r=gn();fi(n,t,i,r),Dg(n,e,i)}}function zx(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(t))bg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ug(t,e,r,i),n!==null&&(r=gn(),fi(n,t,i,r),Dg(n,e,i))}}function Pg(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function bg(t,e){Yo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}var Ql={readContext:Yn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Hx={readContext:Yn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kx.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:th,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=Bx.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=vi();if(Ct){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),Kt===null)throw Error(me(349));ns&30||mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vp(_g.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Kt.identifierPrefix;if(Ct){var n=Ii,i=Ui;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ox++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vx={readContext:Yn,useCallback:Tg,useContext:Yn,useEffect:eh,useImperativeHandle:wg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:eu,useRef:yg,useState:function(){return eu(da)},useDebugValue:th,useDeferredValue:function(t){var e=qn();return Cg(e,Vt.memoizedState,t)},useTransition:function(){var t=eu(da)[0],e=qn().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:pg,useId:Rg,unstable_isNewReconciler:!1},Gx={readContext:Yn,useCallback:Tg,useContext:Yn,useEffect:eh,useImperativeHandle:wg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:tu,useRef:yg,useState:function(){return tu(da)},useDebugValue:th,useDeferredValue:function(t){var e=qn();return Vt===null?e.memoizedState=t:Cg(e,Vt.memoizedState,t)},useTransition:function(){var t=tu(da)[0],e=qn().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:pg,useId:Rg,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=yr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(fi(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=yr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(fi(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=yr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(fi(e,t,i,n),yl(e,t,i))}};function xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,s):!0}function Lg(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=En(e)?es:fn.current,i=e.contextTypes,s=(i=i!=null)?eo(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=En(e)?es:fn.current,r.context=eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_f(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",i=e;do n+=_v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Ug(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ec||(ec=!0,Pf=i),xf(t,e)},n}function Ig(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ry.bind(null,t,e,n),e.then(t,t))}function Mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Xx=Xi.ReactCurrentOwner,Sn=!1;function pn(t,e,n,i){e.child=t===null?cg(e,null,n,i):no(e,t.child,n,i)}function wp(t,e,n,i,r){n=n.render;var s=e.ref;return Ys(e,r),i=Qd(t,e,n,i,s,r),n=Jd(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Ct&&n&&zd(e),e.flags|=1,pn(t,e,i,r),e.child)}function Tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ng(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ng(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sa(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return yf(t,e,n,i,r)}function Fg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Hs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Hs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Hs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Hs,bn),bn|=i;return pn(t,e,r,n),e.child}function Og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=En(n)?es:fn.current;return s=eo(e,s),Ys(e,r),n=Qd(t,e,n,i,s,r),i=Jd(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Ct&&i&&zd(e),e.flags|=1,pn(t,e,n,r),e.child)}function Ap(t,e,n,i,r){if(En(n)){var s=!0;Wl(e)}else s=!1;if(Ys(e,r),e.stateNode===null)El(t,e),Lg(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=En(n)?es:fn.current,c=eo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&yp(e,o,i,c),or=!1;var h=e.memoizedState;o.state=h,$l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Mn.current||or?(typeof f=="function"&&(_f(e,n,f,i),l=e.memoizedState),(a=or||xp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=En(n)?es:fn.current,l=eo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&yp(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,$l(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Mn.current||or?(typeof p=="function"&&(_f(e,n,p,i),_=e.memoizedState),(c=or||xp(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){Og(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fp(e,n,!1),Vi(t,e,s);i=e.stateNode,Xx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function Bg(t){var e=t.stateNode;e.pendingContext?up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&up(t,e.context,!1),qd(t,e.containerInfo)}function Cp(t,e,n,i,r){return to(),Vd(r),e.flags|=256,pn(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function kg(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(bt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),t=Jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):nh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&Vd(i),no(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(me(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=Mf,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=nu(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),fi(i,t,r,-1))}return lh(),i=nu(Error(me(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=_r(r.nextSibling),Ln=e,Ct=!0,si=null,t!==null&&(Bn[kn++]=Ui,Bn[kn++]=Ii,Bn[kn++]=ts,Ui=t.id,Ii=t.overflow,ts=e),e=nh(e,i.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yx(t,e,n){switch(e.tag){case 3:Bg(e),to();break;case 5:dg(e);break;case 1:En(e.type)&&Wl(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?kg(t,e,n):(yt(bt,bt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);yt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return Vi(t,e,n)}var Hg,wf,Vg,Gg;Hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};Vg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(Mi.current);var s=null;switch(n){case"input":r=Xu(t,r),i=Xu(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}Ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qx(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return En(e.type)&&Gl(),sn(e),null;case 3:return i=e.stateNode,io(),Tt(Mn),Tt(fn),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(Lf(si),si=null))),wf(t,e),sn(e),null;case 5:$d(e);var r=$r(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Vg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return sn(e),null}if(t=$r(Mi.current),Oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[la]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)Et(ko[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Oh(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":kh(i,s),Et("invalid",i)}Ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Ra(i),Bh(i,s,!0);break;case"textarea":Ra(i),zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[la]=i,Hg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zu(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)Et(ko[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":Oh(t,i),r=Xu(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":kh(t,i),r=qu(t,i),Et("invalid",t);break;default:r=i}Ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(t,l):typeof l=="number"&&Jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":Ra(t),Bh(t,i,!1);break;case"textarea":Ra(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=$r(ua.current),$r(Mi.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return sn(e),null;case 13:if(Tt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&Dn!==null&&e.mode&1&&!(e.flags&128))ag(),to(),e.flags|=98560,s=!1;else if(s=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[yi]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else si!==null&&(Lf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Gt===0&&(Gt=3):lh())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return io(),wf(t,e),t===null&&oa(e.stateNode.containerInfo),sn(e),null;case 10:return Xd(e.type._context),sn(e),null;case 17:return En(e.type)&&Gl(),sn(e),null;case 19:if(Tt(bt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>so&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ct)return sn(e),null}else 2*kt()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=bt.current,yt(bt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function $x(t,e){switch(Hd(e),e.tag){case 1:return En(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Tt(Mn),Tt(fn),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(Tt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(bt),null;case 4:return io(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var za=!1,cn=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,De=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ut(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){Ut(t,e,i)}}var Pp=!1;function Zx(t,e){if(lf=kl,t=q0(),kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},kl=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ti(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){Ut(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return _=Pp,Pp=!1,_}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wg(t){var e=t.alternate;e!==null&&(t.alternate=null,Wg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[la],delete e[df],delete e[Ux],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xg(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var Qt=null,ni=!1;function Ki(t,e,n){for(n=n.child;n!==null;)jg(t,e,n),n=n.sibling}function jg(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:cn||zs(n,e);case 6:var i=Qt,r=ni;Qt=null,Ki(t,e,n),Qt=i,ni=r,Qt!==null&&(ni?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(ni?(t=Qt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ia(t)):Kc(Qt,n.stateNode));break;case 4:i=Qt,r=ni,Qt=n.stateNode.containerInfo,ni=!0,Ki(t,e,n),Qt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!cn&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ut(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ki(t,e,n),cn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kx),e.forEach(function(i){var r=oy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,ni=!1;break e;case 3:Qt=a.stateNode.containerInfo,ni=!0;break e;case 4:Qt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Qt===null)throw Error(me(160));jg(s,o,r),Qt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),_i(t),i&4){try{qo(3,t,t.return),yc(3,t)}catch(y){Ut(t,t.return,y)}try{qo(5,t,t.return)}catch(y){Ut(t,t.return,y)}}break;case 1:Zn(e,t),_i(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(Zn(e,t),_i(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{Jo(r,"")}catch(y){Ut(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&m0(r,s),Zu(a,o);var c=Zu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?y0(r,d):f==="dangerouslySetInnerHTML"?v0(r,d):f==="children"?Jo(r,d):Ad(r,f,d,c)}switch(a){case"input":ju(r,s);break;case"textarea":g0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(y){Ut(t,t.return,y)}}break;case 6:if(Zn(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ut(t,t.return,y)}}break;case 3:if(Zn(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(y){Ut(t,t.return,y)}break;case 4:Zn(e,t),_i(t);break;case 13:Zn(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=kt())),i&4&&Dp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||f,Zn(e,t),cn=c):Zn(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(De=t,f=t.child;f!==null;){for(d=De=f;De!==null;){switch(h=De,p=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:zs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Ut(i,n,y)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){Up(d);continue}}p!==null?(p.return=h,De=p):Up(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",o))}catch(y){Ut(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Ut(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,t),_i(t),i&4&&Dp(t);break;case 21:break;default:Zn(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xg(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=bp(t);Rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bp(t);Cf(t,a,o);break;default:throw Error(me(161))}}catch(l){Ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qx(t,e,n){De=t,qg(t)}function qg(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=za;var c=cn;if(za=o,(cn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Ip(r):l!==null?(l.return=o,De=l):Ip(r);for(;s!==null;)De=s,qg(s),s=s.sibling;De=r,za=a,cn=c}Lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Lp(t)}}function Lp(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}cn||e.flags&512&&Af(e)}catch(h){Ut(e,e.return,h)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function Up(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function Ip(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var s=e.return;try{Af(e)}catch(l){Ut(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){Ut(e,o,l)}}}catch(l){Ut(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var Jx=Math.ceil,Jl=Xi.ReactCurrentDispatcher,ih=Xi.ReactCurrentOwner,jn=Xi.ReactCurrentBatchConfig,ut=0,Kt=null,Ht=null,Jt=0,bn=0,Hs=Pr(0),Gt=0,pa=null,is=0,Sc=0,rh=0,$o=null,xn=null,sh=0,so=1/0,Di=null,ec=!1,Pf=null,xr=null,Ha=!1,dr=null,tc=0,Ko=0,bf=null,wl=-1,Tl=0;function gn(){return ut&6?kt():wl!==-1?wl:wl=kt()}function yr(t){return t.mode&1?ut&2&&Jt!==0?Jt&-Jt:Fx.transition!==null?(Tl===0&&(Tl=L0()),Tl):(t=gt,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function fi(t,e,n,i){if(50<Ko)throw Ko=0,bf=null,Error(me(185));va(t,n,i),(!(ut&2)||t!==Kt)&&(t===Kt&&(!(ut&2)&&(Sc|=n),Gt===4&&cr(t,Jt)),wn(t,i),n===1&&ut===0&&!(e.mode&1)&&(so=kt()+500,_c&&br()))}function wn(t,e){var n=t.callbackNode;Fv(t,e);var i=Bl(t,t===Kt?Jt:0);if(i===0)n!==null&&Gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gh(n),e===1)t.tag===0?Nx(Np.bind(null,t)):rg(Np.bind(null,t)),Dx(function(){!(ut&6)&&br()}),n=null;else{switch(U0(i)){case 1:n=Dd;break;case 4:n=b0;break;case 16:n=Ol;break;case 536870912:n=D0;break;default:n=Ol}n=n_(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(wl=-1,Tl=0,ut&6)throw Error(me(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=Bl(t,t===Kt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nc(t,i);else{e=i;var r=ut;ut|=2;var s=Zg();(Kt!==t||Jt!==e)&&(Di=null,so=kt()+500,Qr(t,e));do try{ny();break}catch(a){Kg(t,a)}while(!0);Wd(),Jl.current=s,ut=r,Ht!==null?e=0:(Kt=null,Jt=0,e=Gt)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Df(t,r))),e===1)throw n=pa,Qr(t,0),cr(t,i),wn(t,kt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ey(r)&&(e=nc(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Df(t,s))),e===1))throw n=pa,Qr(t,0),cr(t,i),wn(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Vr(t,xn,Di);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=sh+500-kt(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(Vr.bind(null,t,xn,Di),e);break}Vr(t,xn,Di);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jx(i/1960))-i,10<i){t.timeoutHandle=ff(Vr.bind(null,t,xn,Di),i);break}Vr(t,xn,Di);break;case 5:Vr(t,xn,Di);break;default:throw Error(me(329))}}}return wn(t,kt()),t.callbackNode===n?$g.bind(null,t):null}function Df(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=nc(t,e),t!==2&&(e=xn,xn=n,e!==null&&Lf(e)),t}function Lf(t){xn===null?xn=t:xn.push.apply(xn,t)}function ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~rh,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(ut&6)throw Error(me(327));qs();var e=Bl(t,0);if(!(e&1))return wn(t,kt()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=pa,Qr(t,0),cr(t,e),wn(t,kt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,xn,Di),wn(t,kt()),null}function oh(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(so=kt()+500,_c&&br())}}function rs(t){dr!==null&&dr.tag===0&&!(ut&6)&&qs();var e=ut;ut|=1;var n=jn.transition,i=gt;try{if(jn.transition=null,gt=1,t)return t()}finally{gt=i,jn.transition=n,ut=e,!(ut&6)&&br()}}function ah(){bn=Hs.current,Tt(Hs)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bx(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:io(),Tt(Mn),Tt(fn),Kd();break;case 5:$d(i);break;case 4:io();break;case 13:Tt(bt);break;case 19:Tt(bt);break;case 10:Xd(i.type._context);break;case 22:case 23:ah()}n=n.return}if(Kt=t,Ht=t=Sr(t.current,null),Jt=bn=e,Gt=0,pa=null,rh=Sc=is=0,xn=$o=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function Kg(t,e){do{var n=Ht;try{if(Wd(),Sl.current=Ql,Zl){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if(ns=0,$t=Vt=Dt=null,Yo=!1,fa=0,ih.current=null,n===null||n.return===null){Gt=1,pa=e,Ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Mp(o);if(p!==null){p.flags&=-257,Ep(p,o,a,s,e),p.mode&1&&Sp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Sp(s,c,e),lh();break e}l=Error(me(426))}}else if(Ct&&a.mode&1){var m=Mp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ep(m,o,a,s,e),Vd(ro(l,a));break e}}s=l=ro(l,a),Gt!==4&&(Gt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Ug(s,l,e);mp(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xr===null||!xr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ig(s,a,e);mp(s,S);break e}}s=s.return}while(s!==null)}Jg(n)}catch(P){e=P,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function Zg(){var t=Jl.current;return Jl.current=Ql,t===null?Ql:t}function lh(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||!(is&268435455)&&!(Sc&268435455)||cr(Kt,Jt)}function nc(t,e){var n=ut;ut|=2;var i=Zg();(Kt!==t||Jt!==e)&&(Di=null,Qr(t,e));do try{ty();break}catch(r){Kg(t,r)}while(!0);if(Wd(),ut=n,Jl.current=i,Ht!==null)throw Error(me(261));return Kt=null,Jt=0,Gt}function ty(){for(;Ht!==null;)Qg(Ht)}function ny(){for(;Ht!==null&&!Cv();)Qg(Ht)}function Qg(t){var e=t_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Jg(t):Ht=e,ih.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$x(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Ht=null;return}}else if(n=qx(n,e,bn),n!==null){Ht=n;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Gt===0&&(Gt=5)}function Vr(t,e,n){var i=gt,r=jn.transition;try{jn.transition=null,gt=1,iy(t,e,n,i)}finally{jn.transition=r,gt=i}return null}function iy(t,e,n,i){do qs();while(dr!==null);if(ut&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===Kt&&(Ht=Kt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,n_(Ol,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=gt;gt=1;var a=ut;ut|=4,ih.current=null,Zx(t,n),Yg(n,t),Ex(cf),kl=!!lf,cf=lf=null,t.current=n,Qx(n),Rv(),ut=a,gt=o,jn.transition=s}else t.current=n;if(Ha&&(Ha=!1,dr=t,tc=r),s=t.pendingLanes,s===0&&(xr=null),Dv(n.stateNode),wn(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,t=Pf,Pf=null,t;return tc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===bf?Ko++:(Ko=0,bf=t):Ko=0,br(),null}function qs(){if(dr!==null){var t=U0(tc),e=jn.transition,n=gt;try{if(jn.transition=null,gt=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,tc=0,ut&6)throw Error(me(331));var r=ut;for(ut|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var f=De;switch(f.tag){case 0:case 11:case 15:qo(8,f,s)}var d=f.child;if(d!==null)d.return=f,De=d;else for(;De!==null;){f=De;var h=f.sibling,p=f.return;if(Wg(f),f===c){De=null;break}if(h!==null){h.return=p,De=h;break}De=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var v=t.current;for(De=v;De!==null;){o=De;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,De=g;else e:for(o=v;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(P){Ut(a,a.return,P)}if(a===o){De=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,De=S;break e}De=a.return}}if(ut=r,br(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(dc,t)}catch{}i=!0}return i}finally{gt=n,jn.transition=e}}return!1}function Fp(t,e,n){e=ro(n,e),e=Ug(t,e,1),t=vr(t,e,1),e=gn(),t!==null&&(va(t,1,e),wn(t,e))}function Ut(t,e,n){if(t.tag===3)Fp(t,t,n);else for(;e!==null;){if(e.tag===3){Fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=ro(n,t),t=Ig(e,t,1),e=vr(e,t,1),t=gn(),e!==null&&(va(e,1,t),wn(e,t));break}}e=e.return}}function ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(Jt&n)===n&&(Gt===4||Gt===3&&(Jt&130023424)===Jt&&500>kt()-sh?Qr(t,0):rh|=n),wn(t,e)}function e_(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=gn();t=Hi(t,e),t!==null&&(va(t,e,n),wn(t,n))}function sy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function oy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,Yx(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Ct&&e.flags&1048576&&sg(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=eo(e,fn.current);Ys(e,n),r=Qd(null,e,i,t,r,n);var s=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yd(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,Ct&&s&&zd(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ly(i),t=ti(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Ap(null,e,i,t,n);break e;case 11:e=wp(null,e,i,t,n);break e;case 14:e=Tp(null,e,i,ti(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ap(t,e,i,r,n);case 3:e:{if(Bg(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fg(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(me(423)),e),e=Cp(t,e,i,n,r);break e}else if(i!==r){r=ro(Error(me(424)),e),e=Cp(t,e,i,n,r);break e}else for(Dn=_r(e.stateNode.containerInfo.firstChild),Ln=e,Ct=!0,si=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),i===r){e=Vi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return dg(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),Og(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return kg(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=no(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),wp(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(Yl,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Mn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,n),r=Yn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Tp(t,e,i,r,n);case 15:return Ng(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),El(t,e),e.tag=1,En(i)?(t=!0,Wl(e)):t=!1,Ys(e,n),Lg(e,i,r),vf(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return zg(t,e,n);case 22:return Fg(t,e,n)}throw Error(me(156,e.tag))};function n_(t,e){return P0(t,e)}function ay(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new ay(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ly(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===Pd)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Jr(n.children,r,s,e);case Cd:o=8,r|=8;break;case Hu:return t=Gn(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Vu:return t=Gn(13,n,e,r),t.elementType=Vu,t.lanes=s,t;case Gu:return t=Gn(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case d0:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u0:o=10;break e;case f0:o=9;break e;case Rd:o=11;break e;case Pd:o=14;break e;case sr:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Jr(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,s,o,a,l){return t=new cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i_(t){if(!t)return Ar;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(En(n))return ig(t,n,e)}return e}function r_(t,e,n,i,r,s,o,a,l){return t=uh(n,i,!0,t,r,s,o,a,l),t.context=i_(null),n=t.current,i=gn(),r=yr(n),s=Oi(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,va(t,r,i),wn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=gn(),o=yr(r);return n=i_(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,o),t!==null&&(fi(t,r,o,s),yl(t,r,o)),o}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function fy(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}wc.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));Ec(t,e,null,null)};wc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Ec(null,t,null,null)}),e[zi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&B0(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ic(o);s.call(c)}}var o=r_(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[zi]=o.current,oa(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ic(l);a.call(c)}}var l=uh(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[zi]=l.current,oa(t.nodeType===8?t.parentNode:t),rs(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ic(o);a.call(l)}}Ec(e,o,t,r)}else o=dy(n,e,t,r,i);return ic(o)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Ld(e,n|1),wn(e,kt()),!(ut&6)&&(so=kt()+500,br()))}break;case 13:rs(function(){var i=Hi(t,1);if(i!==null){var r=gn();fi(i,t,1,r)}}),fh(t,1)}};Ud=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=gn();fi(e,t,134217728,n)}fh(t,134217728)}};N0=function(t){if(t.tag===13){var e=yr(t),n=Hi(t,e);if(n!==null){var i=gn();fi(n,t,e,i)}fh(t,e)}};F0=function(){return gt};O0=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};Ju=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gc(i);if(!r)throw Error(me(90));p0(i),ju(i,r)}}}break;case"textarea":g0(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};E0=oh;w0=rs;var hy={usingClientEntryPoint:!1,Events:[ya,Ns,gc,S0,M0,oh]},Ro={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},py={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{dc=Va.inject(py),Si=Va}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(me(200));return uy(t,e,null,n)};In.createRoot=function(t,e){if(!hh(t))throw Error(me(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,oa(t.nodeType===8?t.parentNode:t),new dh(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return rs(t)};In.hydrate=function(t,e,n){if(!Tc(e))throw Error(me(200));return Ac(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r_(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};In.render=function(t,e,n){if(!Tc(e))throw Error(me(200));return Ac(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(me(40));return t._reactRootContainer?(rs(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};In.unstable_batchedUpdates=oh;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Ac(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(t){console.error(t)}}o_(),o0.exports=In;var my=o0.exports,kp=my;ku.createRoot=kp.createRoot,ku.hydrateRoot=kp.hydrateRoot;function gy(){return Le.jsx("header",{className:"top-header",children:Le.jsx("div",{className:"h-title",children:Le.jsx("h1",{children:"인터랙티브 인프라 용어사전"})})})}const zp=t=>{let e;const n=new Set,i=(c,f)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const h=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(p=>p(e,h))}},r=()=>e,a={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,a);return a},_y=t=>t?zp(t):zp,vy=t=>t;function xy(t,e=vy){const n=No.useSyncExternalStore(t.subscribe,No.useCallback(()=>e(t.getState()),[t,e]),No.useCallback(()=>e(t.getInitialState()),[t,e]));return No.useDebugValue(n),n}const Hp=t=>{const e=_y(t),n=i=>xy(e,i);return Object.assign(n,e),n},yy=t=>t?Hp(t):Hp;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="169",Sy=0,Vp=1,My=2,a_=1,Ey=2,bi=3,Cr=0,Tn=1,oi=2,Mr=0,$s=1,Gp=2,Wp=3,Xp=4,wy=5,Wr=100,Ty=101,Ay=102,Cy=103,Ry=104,Py=200,by=201,Dy=202,Ly=203,Uf=204,If=205,Uy=206,Iy=207,Ny=208,Fy=209,Oy=210,By=211,ky=212,zy=213,Hy=214,Nf=0,Ff=1,Of=2,oo=3,Bf=4,kf=5,zf=6,Hf=7,mh=0,Vy=1,Gy=2,Er=0,Wy=1,Xy=2,jy=3,Yy=4,qy=5,$y=6,Ky=7,l_=300,ao=301,lo=302,Vf=303,Gf=304,Cc=306,Wf=1e3,Kr=1001,Xf=1002,Wn=1003,Zy=1004,Ga=1005,ai=1006,ou=1007,Zr=1008,Gi=1009,c_=1010,u_=1011,ma=1012,gh=1013,ss=1014,Ni=1015,Ma=1016,_h=1017,vh=1018,co=1020,f_=35902,d_=1021,h_=1022,ci=1023,p_=1024,m_=1025,Ks=1026,uo=1027,g_=1028,xh=1029,__=1030,yh=1031,Sh=1033,Cl=33776,Rl=33777,Pl=33778,bl=33779,jf=35840,Yf=35841,qf=35842,$f=35843,Kf=36196,Zf=37492,Qf=37496,Jf=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,fd=37820,dd=37821,Dl=36492,hd=36494,pd=36495,v_=36283,md=36284,gd=36285,_d=36286,Qy=3200,Jy=3201,x_=0,e1=1,ur="",ii="srgb",Dr="srgb-linear",Mh="display-p3",Rc="display-p3-linear",rc="linear",wt="srgb",sc="rec709",oc="p3",ms=7680,jp=519,t1=512,n1=513,i1=514,y_=515,r1=516,s1=517,o1=518,a1=519,Yp=35044,qp="300 es",Fi=2e3,ac=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $p=1234567;const Zs=Math.PI/180,ga=180/Math.PI;function _o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function Eh(t,e){return(t%e+e)%e}function l1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function c1(t,e,n){return t!==e?(n-t)/(e-t):0}function Zo(t,e,n){return(1-n)*t+n*e}function u1(t,e,n,i){return Zo(t,e,1-Math.exp(-n*i))}function f1(t,e=1){return e-Math.abs(Eh(t,e*2)-e)}function d1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function p1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function m1(t,e){return t+Math.random()*(e-t)}function g1(t){return t*(.5-Math.random())}function _1(t){t!==void 0&&($p=t);let e=$p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v1(t){return t*Zs}function x1(t){return t*ga}function y1(t){return(t&t-1)===0&&t!==0}function S1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function M1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function E1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Kp={DEG2RAD:Zs,RAD2DEG:ga,generateUUID:_o,clamp:mn,euclideanModulo:Eh,mapLinear:l1,inverseLerp:c1,lerp:Zo,damp:u1,pingpong:f1,smoothstep:d1,smootherstep:h1,randInt:p1,randFloat:m1,randFloatSpread:g1,seededRandom:_1,degToRad:v1,radToDeg:x1,isPowerOfTwo:y1,ceilPowerOfTwo:S1,floorPowerOfTwo:M1,setQuaternionFromProperEuler:E1,normalize:dn,denormalize:Ps};class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],v=r[1],g=r[4],S=r[7],P=r[2],R=r[5],T=r[8];return s[0]=o*y+a*v+l*P,s[3]=o*m+a*g+l*R,s[6]=o*u+a*S+l*T,s[1]=c*y+f*v+d*P,s[4]=c*m+f*g+d*R,s[7]=c*u+f*S+d*T,s[2]=h*y+p*v+_*P,s[5]=h*m+p*g+_*R,s[8]=h*u+p*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new Ze;function S_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function w1(){const t=lc("canvas");return t.style.display="block",t}const Zp={};function Ll(t){t in Zp||(Zp[t]=!0,console.warn(t))}function T1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function A1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function C1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jp=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Dr]:{transfer:rc,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:wt,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Rc]:{transfer:rc,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Qp)},[Mh]:{transfer:wt,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Qp).convertLinearToSRGB()}},R1=new Set([Dr,Rc]),ht={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!R1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Po[e].toReference,r=Po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Po[t].primaries},getTransfer:function(t){return t===ur?rc:Po[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Po[e].luminanceCoefficients)}};function Qs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class P1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=lc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qs(n[i]/255)*255):n[i]=Qs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b1=0;class M_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?P1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;class An extends go{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Kr,r=Kr,s=ai,o=Zr,a=ci,l=Gi,c=An.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=_o(),this.name="",this.source=new M_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=l_;An.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,P=(u+1)/2,R=(f+h)/4,T=(d+y)/4,b=(_+m)/4;return g>S&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-y)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L1 extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new M_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends L1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E_ extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U1 extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==p||f!==_){let m=1-a;const u=l*h+c*p+f*_+d*y,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,u*v);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const S=a*v;if(l=l*m+h*S,c=c*m+p*S,f=f*m+_*S,d=d*m+y*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-a*p,e[n+2]=c*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new z,em=new Ea;class as{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Xa.subVectors(this.max,bo),_s.subVectors(e.a,bo),vs.subVectors(e.b,bo),xs.subVectors(e.c,bo),Zi.subVectors(vs,_s),Qi.subVectors(xs,vs),Nr.subVectors(_s,xs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Nr.z,Nr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Nr.z,0,-Nr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Nr.y,Nr.x,0];return!fu(n,_s,vs,xs,Xa)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,_s,vs,xs,Xa))?!1:(ja.crossVectors(Zi,Qi),n=[ja.x,ja.y,ja.z],fu(n,_s,vs,xs,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,Wa=new as,_s=new z,vs=new z,xs=new z,Zi=new z,Qi=new z,Nr=new z,bo=new z,Xa=new z,ja=new z,Fr=new z;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),f=i.dot(Fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const I1=new as,Do=new z,du=new z;class wa{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):I1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(du)),this.expandByPoint(Do.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new z,hu=new z,Ya=new z,Ji=new z,pu=new z,qa=new z,mu=new z;class wh{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),a=Ji.dot(this.direction),l=-Ji.dot(Ya),c=Ji.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hu).addScaledVector(Ya,h),p}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),qa.subVectors(i,e),mu.crossVectors(pu,qa);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Ji,qa));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Ji));if(c<0||l+c>o)return null;const f=-a*Ji.dot(mu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,F1)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),er.crossVectors(i,Rn),er.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),er.crossVectors(i,Rn)),er.normalize(),$a.crossVectors(Rn,er),r[0]=er.x,r[4]=$a.x,r[8]=Rn.x,r[1]=er.y,r[5]=$a.y,r[9]=Rn.y,r[2]=er.z,r[6]=$a.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],v=i[3],g=i[7],S=i[11],P=i[15],R=r[0],T=r[4],b=r[8],te=r[12],x=r[1],w=r[5],$=r[9],q=r[13],ee=r[2],ae=r[6],K=r[10],ue=r[14],I=r[3],oe=r[7],le=r[11],ye=r[15];return s[0]=o*R+a*x+l*ee+c*I,s[4]=o*T+a*w+l*ae+c*oe,s[8]=o*b+a*$+l*K+c*le,s[12]=o*te+a*q+l*ue+c*ye,s[1]=f*R+d*x+h*ee+p*I,s[5]=f*T+d*w+h*ae+p*oe,s[9]=f*b+d*$+h*K+p*le,s[13]=f*te+d*q+h*ue+p*ye,s[2]=_*R+y*x+m*ee+u*I,s[6]=_*T+y*w+m*ae+u*oe,s[10]=_*b+y*$+m*K+u*le,s[14]=_*te+y*q+m*ue+u*ye,s[3]=v*R+g*x+S*ee+P*I,s[7]=v*T+g*w+S*ae+P*oe,s[11]=v*b+g*$+S*K+P*le,s[15]=v*te+g*q+S*ue+P*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],v=d*m*c-y*h*c+y*l*p-a*m*p-d*l*u+a*h*u,g=_*h*c-f*m*c-_*l*p+o*m*p+f*l*u-o*h*u,S=f*y*c-_*d*c+_*a*p-o*y*p-f*a*u+o*d*u,P=_*d*l-f*y*l-_*a*h+o*y*h+f*a*m-o*d*m,R=n*v+i*g+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*u-i*h*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(f*m*s-_*h*s+_*r*p-n*m*p-f*r*u+n*h*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(_*d*s-f*y*s-_*i*p+n*y*p+f*i*u-n*d*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=P*T,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*m+n*d*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,_=s*d,y=o*f,m=o*d,u=a*d,v=l*c,g=l*f,S=l*d,P=i.x,R=i.y,T=i.z;return r[0]=(1-(y+u))*P,r[1]=(p+S)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(h+u))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,f=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Fi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ac)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let _,y;if(a===Fi)_=(o+s)*d,y=-2*d;else if(a===ac)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new z,Jn=new Rt,N1=new z(0,0,0),F1=new z(1,1,1),er=new z,$a=new z,Rn=new z,tm=new Rt,nm=new Ea;class Ei{constructor(e=0,n=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O1=0;const im=new z,Ss=new Ea,Ci=new Rt,Ka=new z,Lo=new z,B1=new z,k1=new Ea,rm=new z(1,0,0),sm=new z(0,1,0),om=new z(0,0,1),am={type:"added"},z1={type:"removed"},Ms={type:"childadded",child:null},gu={type:"childremoved",child:null};class Zt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new z,n=new Ei,i=new Ea,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Lo,Ka,this.up):Ci.lookAt(Ka,Lo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(z1),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,B1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,k1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new z,Ri=new z,_u=new z,Pi=new z,Es=new z,ws=new z,lm=new z,vu=new z,xu=new z,yu=new z,Su=new It,Mu=new It,Eu=new It;class Hn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ri.subVectors(i,n),_u.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ri),l=ei.dot(_u),c=Ri.dot(Ri),f=Ri.dot(_u),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ri.subVectors(e,n),ei.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ei.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),ws.subVectors(s,i),vu.subVectors(e,i);const l=Es.dot(vu),c=ws.dot(vu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const f=Es.dot(xu),d=ws.dot(xu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Es,o);yu.subVectors(e,s);const p=Es.dot(yu),_=ws.dot(yu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ws,a);const m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return lm.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(lm,a);const u=1/(m+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=Eh(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return ht.fromWorkingColorSpace(an.copy(this),e),Math.round(mn(an.r*255,0,255))*65536+Math.round(mn(an.g*255,0,255))*256+Math.round(mn(an.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=ii){ht.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Za);const i=Zo(tr.h,Za.h,n),r=Zo(tr.s,Za.s,n),s=Zo(tr.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new We;We.NAMES=w_;let H1=0;class vo extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=$s,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=If,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uf&&(i.blendSrc=this.blendSrc),this.blendDst!==If&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pc extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new z,Qa=new ft;class di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yp,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class T_ extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let V1=0;const On=new Rt,Tu=new Zt,Ts=new z,Pn=new as,Uo=new as,qt=new z;class pi extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?A_:T_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Pn.min,Uo.min),Pn.expandByPoint(qt),qt.addVectors(Pn.max,Uo.max),Pn.expandByPoint(qt)):(Pn.expandByPoint(Uo.min),Pn.expandByPoint(Uo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)qt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),qt.add(Ts)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const c=new z,f=new z,d=new z,h=new ft,p=new ft,_=new ft,y=new z,m=new z;function u(b,te,x){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,te),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,te),_.fromBufferAttribute(s,x),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(w),a[b].add(y),a[te].add(y),a[x].add(y),l[b].add(m),l[te].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,te=v.length;b<te;++b){const x=v[b],w=x.start,$=x.count;for(let q=w,ee=w+$;q<ee;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const g=new z,S=new z,P=new z,R=new z;function T(b){P.fromBufferAttribute(r,b),R.copy(P);const te=a[b];g.copy(te),g.sub(P.multiplyScalar(P.dot(te))).normalize(),S.crossVectors(R,te);const w=S.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,w)}for(let b=0,te=v.length;b<te;++b){const x=v[b],w=x.start,$=x.count;for(let q=w,ee=w+$;q<ee;q+=3)T(e.getX(q+0)),T(e.getX(q+1)),T(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,f=new z,d=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new di(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Rt,Or=new wh,Ja=new wa,um=new z,el=new z,tl=new z,nl=new z,Au=new z,il=new z,fm=new z,rl=new z;class xt extends Zt{constructor(e=new pi,n=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Au.fromBufferAttribute(d,e),o?il.addScaledVector(Au,f):il.addScaledVector(Au.sub(n),f))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Ja.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Ja,um)===null||Or.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),Or.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const R=a.getX(S),T=a.getX(S+1),b=a.getX(S+2);r=sl(this,u,e,i,c,f,d,R,T,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=sl(this,o,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const R=S,T=S+1,b=S+2;r=sl(this,u,e,i,c,f,d,R,T,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=m,g=m+1,S=m+2;r=sl(this,o,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function G1(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const f=G1(t,e,n,i,el,tl,nl,fm);if(f){const d=new z;Hn.getBarycoord(fm,el,tl,nl,d),r&&(f.uv=Hn.getInterpolatedAttribute(r,a,l,c,d,new ft)),s&&(f.uv1=Hn.getInterpolatedAttribute(s,a,l,c,d,new ft)),o&&(f.normal=Hn.getInterpolatedAttribute(o,a,l,c,d,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Hn.getNormal(el,tl,nl,h.normal),f.face=h,f.barycoord=d}return f}class wi extends pi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(d,2));function _(y,m,u,v,g,S,P,R,T,b,te){const x=S/T,w=P/b,$=S/2,q=P/2,ee=R/2,ae=T+1,K=b+1;let ue=0,I=0;const oe=new z;for(let le=0;le<K;le++){const ye=le*w-q;for(let ke=0;ke<ae;ke++){const it=ke*x-$;oe[y]=it*v,oe[m]=ye*g,oe[u]=ee,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[m]=0,oe[u]=R>0?1:-1,f.push(oe.x,oe.y,oe.z),d.push(ke/T),d.push(1-le/b),ue+=1}}for(let le=0;le<b;le++)for(let ye=0;ye<T;ye++){const ke=h+ye+ae*le,it=h+ye+ae*(le+1),ne=h+(ye+1)+ae*(le+1),de=h+(ye+1)+ae*le;l.push(ke,it,de),l.push(it,ne,de),I+=6}a.addGroup(p,I,te),p+=I,h+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function W1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function C_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const X1={clone:fo,merge:hn};var j1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j1,this.fragmentShader=Y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=W1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class R_ extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new z,dm=new ft,hm=new ft;class zn extends R_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Cs=1;class q1 extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(As,Cs,e,n);r.layers=this.layers,this.add(r);const s=new zn(As,Cs,e,n);s.layers=this.layers,this.add(s);const o=new zn(As,Cs,e,n);o.layers=this.layers,this.add(o);const a=new zn(As,Cs,e,n);a.layers=this.layers,this.add(a);const l=new zn(As,Cs,e,n);l.layers=this.layers,this.add(l);const c=new zn(As,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class P_ extends An{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ao,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $1 extends os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new P_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Mr});s.uniforms.tEquirect.value=n;const o=new xt(r,s),a=n.minFilter;return n.minFilter===Zr&&(n.minFilter=ai),new q1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cu=new z,K1=new z,Z1=new Ze;class ar{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(K1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Z1.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new wa,ol=new z;class Ah{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-u).normalize(),i[1].setComponents(l+s,h+c,m+p,S+u).normalize(),i[2].setComponents(l+o,h+f,m+_,S+v).normalize(),i[3].setComponents(l-o,h-f,m-_,S-v).normalize(),i[4].setComponents(l-a,h-d,m-y,S-g).normalize(),n===Fi)i[5].setComponents(l+a,h+d,m+y,S+g).normalize();else if(n===ac)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Q1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class xo extends pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<f;u++){const v=u*h-o;for(let g=0;g<c;g++){const S=g*d-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,S=v+c*(u+1),P=v+1+c*(u+1),R=v+1+c*u;p.push(g,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var J1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,US=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:J1,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:rS,aomap_fragment:sS,aomap_pars_fragment:oS,batching_pars_vertex:aS,batching_vertex:lS,begin_vertex:cS,beginnormal_vertex:uS,bsdfs:fS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:SS,common:MS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:wS,displacementmap_pars_vertex:TS,displacementmap_vertex:AS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:PS,colorspace_pars_fragment:bS,envmap_fragment:DS,envmap_common_pars_fragment:LS,envmap_pars_fragment:US,envmap_pars_vertex:IS,envmap_physical_pars_fragment:XS,envmap_vertex:NS,fog_vertex:FS,fog_pars_vertex:OS,fog_fragment:BS,fog_pars_fragment:kS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:HS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:WS,lights_toon_fragment:jS,lights_toon_pars_fragment:YS,lights_phong_fragment:qS,lights_phong_pars_fragment:$S,lights_physical_fragment:KS,lights_physical_pars_fragment:ZS,lights_fragment_begin:QS,lights_fragment_maps:JS,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:rM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:lM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:uM,morphinstance_vertex:fM,morphcolor_vertex:dM,morphnormal_vertex:hM,morphtarget_pars_vertex:pM,morphtarget_vertex:mM,normal_fragment_begin:gM,normal_fragment_maps:_M,normal_pars_fragment:vM,normal_pars_vertex:xM,normal_vertex:yM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:wM,iridescence_pars_fragment:TM,opaque_fragment:AM,packing:CM,premultiplied_alpha_fragment:RM,project_vertex:PM,dithering_fragment:bM,dithering_pars_fragment:DM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:NM,shadowmap_vertex:FM,shadowmask_pars_fragment:OM,skinbase_vertex:BM,skinning_pars_vertex:kM,skinning_vertex:zM,skinnormal_vertex:HM,specularmap_fragment:VM,specularmap_pars_fragment:GM,tonemapping_fragment:WM,tonemapping_pars_fragment:XM,transmission_fragment:jM,transmission_pars_fragment:YM,uv_pars_fragment:qM,uv_pars_vertex:$M,uv_vertex:KM,worldpos_vertex:ZM,background_vert:QM,background_frag:JM,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:aE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:fE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:_E,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:ME,meshphysical_frag:EE,meshtoon_vert:wE,meshtoon_frag:TE,points_vert:AE,points_frag:CE,shadow_vert:RE,shadow_frag:PE,sprite_vert:bE,sprite_frag:DE},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},xi={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};xi.physical={uniforms:hn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const al={r:0,b:0,g:0},kr=new Ei,LE=new Rt;function UE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const S=_(v);S===null?u(a,l):S&&S.isColor&&(u(S,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const S=_(g);S&&(S.isCubeTexture||S.mapping===Cc)?(f===void 0&&(f=new xt(new wi(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:fo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),kr.copy(g.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(kr)),f.material.toneMapped=ht.getTransfer(S.colorSpace)!==wt,(d!==S||h!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new xo(2,2),new Wi({name:"BackgroundMaterial",uniforms:fo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ht.getTransfer(S.colorSpace)!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(al,C_(t)),i.buffers.color.setClear(al.r,al.g,al.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:m}}function IE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,w,$,q,ee){let ae=!1;const K=d(q,$,w);s!==K&&(s=K,c(s.object)),ae=p(x,q,$,ee),ae&&_(x,q,$,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,S(x,w,$,q),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function d(x,w,$){const q=$.wireframe===!0;let ee=i[x.id];ee===void 0&&(ee={},i[x.id]=ee);let ae=ee[w.id];ae===void 0&&(ae={},ee[w.id]=ae);let K=ae[q];return K===void 0&&(K=h(l()),ae[q]=K),K}function h(x){const w=[],$=[],q=[];for(let ee=0;ee<n;ee++)w[ee]=0,$[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:$,attributeDivisors:q,object:x,attributes:{},index:null}}function p(x,w,$,q){const ee=s.attributes,ae=w.attributes;let K=0;const ue=$.getAttributes();for(const I in ue)if(ue[I].location>=0){const le=ee[I];let ye=ae[I];if(ye===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;K++}return s.attributesNum!==K||s.index!==q}function _(x,w,$,q){const ee={},ae=w.attributes;let K=0;const ue=$.getAttributes();for(const I in ue)if(ue[I].location>=0){let le=ae[I];le===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),ee[I]=ye,K++}s.attributes=ee,s.attributesNum=K,s.index=q}function y(){const x=s.newAttributes;for(let w=0,$=x.length;w<$;w++)x[w]=0}function m(x){u(x,0)}function u(x,w){const $=s.newAttributes,q=s.enabledAttributes,ee=s.attributeDivisors;$[x]=1,q[x]===0&&(t.enableVertexAttribArray(x),q[x]=1),ee[x]!==w&&(t.vertexAttribDivisor(x,w),ee[x]=w)}function v(){const x=s.newAttributes,w=s.enabledAttributes;for(let $=0,q=w.length;$<q;$++)w[$]!==x[$]&&(t.disableVertexAttribArray($),w[$]=0)}function g(x,w,$,q,ee,ae,K){K===!0?t.vertexAttribIPointer(x,w,$,ee,ae):t.vertexAttribPointer(x,w,$,q,ee,ae)}function S(x,w,$,q){y();const ee=q.attributes,ae=$.getAttributes(),K=w.defaultAttributeValues;for(const ue in ae){const I=ae[ue];if(I.location>=0){let oe=ee[ue];if(oe===void 0&&(ue==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),ue==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const le=oe.normalized,ye=oe.itemSize,ke=e.get(oe);if(ke===void 0)continue;const it=ke.buffer,ne=ke.type,de=ke.bytesPerElement,Ae=ne===t.INT||ne===t.UNSIGNED_INT||oe.gpuType===gh;if(oe.isInterleavedBufferAttribute){const Me=oe.data,Ye=Me.stride,He=oe.offset;if(Me.isInstancedInterleavedBuffer){for(let tt=0;tt<I.locationSize;tt++)u(I.location+tt,Me.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let tt=0;tt<I.locationSize;tt++)m(I.location+tt);t.bindBuffer(t.ARRAY_BUFFER,it);for(let tt=0;tt<I.locationSize;tt++)g(I.location+tt,ye/I.locationSize,ne,le,Ye*de,(He+ye/I.locationSize*tt)*de,Ae)}else{if(oe.isInstancedBufferAttribute){for(let Me=0;Me<I.locationSize;Me++)u(I.location+Me,oe.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<I.locationSize;Me++)m(I.location+Me);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Me=0;Me<I.locationSize;Me++)g(I.location+Me,ye/I.locationSize,ne,le,ye*de,ye/I.locationSize*Me*de,Ae)}}else if(K!==void 0){const le=K[ue];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(I.location,le);break;case 3:t.vertexAttrib3fv(I.location,le);break;case 4:t.vertexAttrib4fv(I.location,le);break;default:t.vertexAttrib1fv(I.location,le)}}}}v()}function P(){b();for(const x in i){const w=i[x];for(const $ in w){const q=w[$];for(const ee in q)f(q[ee].object),delete q[ee];delete w[$]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const $ in w){const q=w[$];for(const ee in q)f(q[ee].object),delete q[ee];delete w[$]}delete i[x.id]}function T(x){for(const w in i){const $=i[w];if($[x.id]===void 0)continue;const q=$[x.id];for(const ee in q)f(q[ee].object),delete q[ee];delete $[x.id]}}function b(){te(),o=!0,s!==r&&(s=r,c(s.object))}function te(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:te,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function NE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function OE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,g=v*4;let S=u.clippingState||null;l.value=S,S=f(_,h,g,p);for(let P=0;P!==g;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function BE(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=ao:a===Gf&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class D_ extends R_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,pm=[.125,.215,.35,.446,.526,.582],Xr=20,Ru=new D_,mm=new We;let Pu=null,bu=0,Du=0,Lu=!1;const Gr=(1+Math.sqrt(5))/2,Rs=1/Gr,gm=[new z(-Gr,Rs,0),new z(Gr,Rs,0),new z(-Rs,0,Gr),new z(Rs,0,Gr),new z(0,Gr,-Rs),new z(0,Gr,Rs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class _m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,bu,Du),this._renderer.xr.enabled=Lu,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Ma,format:ci,colorSpace:Dr,depthBuffer:!1},r=vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kE(s)),this._blurMaterial=zE(s,e,n)}return r}_compileMaterial(e){const n=new xt(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(mm),f.toneMapping=Er,f.autoClear=!1;const p=new Pc({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new xt(new wi,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(mm),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;ll(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ao||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gm[(r-s-1)%gm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new xt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const u=[];let v=0;for(let T=0;T<Xr;++T){const b=T/y,te=Math.exp(-b*b/2);u.push(te),T===0?v+=te:T<m&&(v+=2*te)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],P=3*S*(r>g-Vs?r-g+Vs:0),R=4*(this._cubeSize-S);ll(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(d,Ru)}}function kE(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+pm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vs?l=pm[o-t+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,y=3,m=2,u=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,b=R>2?0:-1,te=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];v.set(te,y*_*R),g.set(h,m*_*R);const x=[R,R,R,R,R,R];S.set(x,u*_*R)}const P=new pi;P.setAttribute("position",new di(v,y)),P.setAttribute("uv",new di(g,m)),P.setAttribute("faceIndex",new di(S,u)),e.push(P),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vm(t,e,n){const i=new os(t,e,n);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zE(t,e,n){const i=new Float32Array(Xr),r=new z(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function xm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ym(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,f=l===ao||l===lo;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new _m(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new _m(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function VE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ll("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const P=v[g+0],R=v[g+1],T=v[g+2];h.push(P,R,R,T,T,P)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const P=g+0,R=g+1,T=g+2;h.push(P,R,R,T,T,P)}}else return;const m=new(S_(h)?A_:T_)(h,1);m.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function WE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,_);let u=0;for(let v=0;v<_;v++)u+=p[v];for(let v=0;v<y.length;v++)n.update(u,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function XE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jE(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*R*4*d),b=new E_(T,P,R,d);b.type=Ni,b.needsUpdate=!0;const te=S*4;for(let w=0;w<d;w++){const $=u[w],q=v[w],ee=g[w],ae=P*R*4*w;for(let K=0;K<$.count;K++){const ue=K*te;_===!0&&(r.fromBufferAttribute($,K),T[ae+ue+0]=r.x,T[ae+ue+1]=r.y,T[ae+ue+2]=r.z,T[ae+ue+3]=0),y===!0&&(r.fromBufferAttribute(q,K),T[ae+ue+4]=r.x,T[ae+ue+5]=r.y,T[ae+ue+6]=r.z,T[ae+ue+7]=0),m===!0&&(r.fromBufferAttribute(ee,K),T[ae+ue+8]=r.x,T[ae+ue+9]=r.y,T[ae+ue+10]=r.z,T[ae+ue+11]=ee.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new ft(P,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function YE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class L_ extends An{constructor(e,n,i,r,s,o,a,l,c,f=Ks){if(f!==Ks&&f!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ks&&(i=ss),i===void 0&&f===uo&&(i=co),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const U_=new An,Sm=new L_(1,1),I_=new E_,N_=new U1,F_=new P_,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mm[r];if(s===void 0&&(s=new Float32Array(r),Mm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Am.set(i),t.uniformMatrix2fv(this.addr,!1,Am),Xt(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),Xt(n,i)}}function ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;wm.set(i),t.uniformMatrix4fv(this.addr,!1,wm),Xt(n,i)}}function tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sm.compareFunction=y_,s=Sm):s=U_,n.setTexture2D(e||s,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||N_,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||F_,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||I_,r)}function hw(t){switch(t){case 5126:return qE;case 35664:return $E;case 35665:return KE;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return dw}}function pw(t,e){t.uniform1fv(this.addr,e)}function mw(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function gw(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function _w(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function vw(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xw(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yw(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sw(t,e){t.uniform1iv(this.addr,e)}function Mw(t,e){t.uniform2iv(this.addr,e)}function Ew(t,e){t.uniform3iv(this.addr,e)}function ww(t,e){t.uniform4iv(this.addr,e)}function Tw(t,e){t.uniform1uiv(this.addr,e)}function Aw(t,e){t.uniform2uiv(this.addr,e)}function Cw(t,e){t.uniform3uiv(this.addr,e)}function Rw(t,e){t.uniform4uiv(this.addr,e)}function Pw(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||U_,s[o])}function bw(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||N_,s[o])}function Dw(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||F_,s[o])}function Lw(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||I_,s[o])}function Uw(t){switch(t){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return vw;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return ww;case 5125:return Tw;case 36294:return Aw;case 36295:return Cw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hw(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Uw(n.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Cm(t,e){t.seq.push(e),t.map[e.id]=e}function Ow(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cm(n,c===void 0?new Iw(a,t,e):new Nw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Fw(a),Cm(n,d)),n=d}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ow(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Bw=37297;let kw=0;function zw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Hw(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let i;switch(e===n?i="":e===oc&&n===sc?i="LinearDisplayP3ToLinearSRGB":e===sc&&n===oc&&(i="LinearSRGBToLinearDisplayP3"),t){case Dr:case Rc:return[i,"LinearTransferOETF"];case ii:case Mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zw(t.getShaderSource(e),o)}else return r}function Vw(t,e){const n=Hw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Gw(t,e){let n;switch(e){case Wy:n="Linear";break;case Xy:n="Reinhard";break;case jy:n="Cineon";break;case Yy:n="ACESFilmic";break;case $y:n="AgX";break;case Ky:n="Neutral";break;case qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cl=new z;function Ww(){ht.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),n=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zo(t){return t!==""}function bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(qw,Kw)}const $w=new Map;function Kw(t,e){let n=Ke[e];if(n===void 0){const i=$w.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(Zw,Qw)}function Qw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ey?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vy:e="ENVMAP_BLENDING_MIX";break;case Gy:e="ENVMAP_BLENDING_ADD";break}return e}function iT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Jw(n),c=eT(n),f=tT(n),d=nT(n),h=iT(n),p=Xw(n),_=jw(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(zo).join(`
`),u.length>0&&(u+=`
`)):(m=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),u=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Er?Gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Vw("linearToOutputTexel",n.outputColorSpace),Ww(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),o=vd(o),o=bm(o,n),o=Dm(o,n),a=vd(a),a=bm(a,n),a=Dm(a,n),o=Lm(o),a=Lm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+o,S=v+u+a,P=Rm(r,r.VERTEX_SHADER,g),R=Rm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(w){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(y).trim(),q=r.getShaderInfoLog(P).trim(),ee=r.getShaderInfoLog(R).trim();let ae=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,R);else{const ue=Pm(r,P,"vertex"),I=Pm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ue+`
`+I)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||ee==="")&&(K=!1);K&&(w.diagnostics={runnable:ae,programLog:$,vertexShader:{log:q,prefix:m},fragmentShader:{log:ee,prefix:u}})}r.deleteShader(P),r.deleteShader(R),b=new Ul(r,y),te=Yw(r,y)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let te;this.getAttributes=function(){return te===void 0&&T(this),te};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Bw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t,e,n,i,r,s,o){const a=new Th,l=new oT,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,w,$,q,ee){const ae=q.fog,K=ee.geometry,ue=x.isMeshStandardMaterial?q.environment:null,I=(x.isMeshStandardMaterial?n:e).get(x.envMap||ue),oe=I&&I.mapping===Cc?I.image.height:null,le=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ke=ye!==void 0?ye.length:0;let it=0;K.morphAttributes.position!==void 0&&(it=1),K.morphAttributes.normal!==void 0&&(it=2),K.morphAttributes.color!==void 0&&(it=3);let ne,de,Ae,Me;if(le){const st=xi[le];ne=st.vertexShader,de=st.fragmentShader}else ne=x.vertexShader,de=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const Ye=t.getRenderTarget(),He=ee.isInstancedMesh===!0,tt=ee.isBatchedMesh===!0,dt=!!x.map,Qe=!!x.matcap,U=!!I,jt=!!x.aoMap,$e=!!x.lightMap,Je=!!x.bumpMap,Fe=!!x.normalMap,_t=!!x.displacementMap,je=!!x.emissiveMap,C=!!x.metalnessMap,M=!!x.roughnessMap,G=x.anisotropy>0,re=x.clearcoat>0,fe=x.dispersion>0,se=x.iridescence>0,Re=x.sheen>0,Te=x.transmission>0,Ce=G&&!!x.anisotropyMap,at=re&&!!x.clearcoatMap,ve=re&&!!x.clearcoatNormalMap,Pe=re&&!!x.clearcoatRoughnessMap,Xe=se&&!!x.iridescenceMap,N=se&&!!x.iridescenceThicknessMap,L=Re&&!!x.sheenColorMap,V=Re&&!!x.sheenRoughnessMap,k=!!x.specularMap,J=!!x.specularColorMap,A=!!x.specularIntensityMap,Z=Te&&!!x.transmissionMap,F=Te&&!!x.thicknessMap,B=!!x.gradientMap,he=!!x.alphaMap,Se=x.alphaTest>0,Oe=!!x.alphaHash,rt=!!x.extensions;let St=Er;x.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(St=t.toneMapping);const qe={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:de,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:tt,batchingColor:tt&&ee._colorsTexture!==null,instancing:He,instancingColor:He&&ee.instanceColor!==null,instancingMorph:He&&ee.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ye===null?t.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:Dr,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:Qe,envMap:U,envMapMode:U&&I.mapping,envMapCubeUVHeight:oe,aoMap:jt,lightMap:$e,bumpMap:Je,normalMap:Fe,displacementMap:p&&_t,emissiveMap:je,normalMapObjectSpace:Fe&&x.normalMapType===e1,normalMapTangentSpace:Fe&&x.normalMapType===x_,metalnessMap:C,roughnessMap:M,anisotropy:G,anisotropyMap:Ce,clearcoat:re,clearcoatMap:at,clearcoatNormalMap:ve,clearcoatRoughnessMap:Pe,dispersion:fe,iridescence:se,iridescenceMap:Xe,iridescenceThicknessMap:N,sheen:Re,sheenColorMap:L,sheenRoughnessMap:V,specularMap:k,specularColorMap:J,specularIntensityMap:A,transmission:Te,transmissionMap:Z,thicknessMap:F,gradientMap:B,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Se,alphaHash:Oe,combine:x.combine,mapUv:dt&&m(x.map.channel),aoMapUv:jt&&m(x.aoMap.channel),lightMapUv:$e&&m(x.lightMap.channel),bumpMapUv:Je&&m(x.bumpMap.channel),normalMapUv:Fe&&m(x.normalMap.channel),displacementMapUv:_t&&m(x.displacementMap.channel),emissiveMapUv:je&&m(x.emissiveMap.channel),metalnessMapUv:C&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Ce&&m(x.anisotropyMap.channel),clearcoatMapUv:at&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:N&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:L&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&m(x.sheenRoughnessMap.channel),specularMapUv:k&&m(x.specularMap.channel),specularColorMapUv:J&&m(x.specularColorMap.channel),specularIntensityMapUv:A&&m(x.specularIntensityMap.channel),transmissionMapUv:Z&&m(x.transmissionMap.channel),thicknessMapUv:F&&m(x.thicknessMap.channel),alphaMapUv:he&&m(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Fe||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!K.attributes.uv&&(dt||he),fog:!!ae,useFog:x.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===wt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function v(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)w.push($),w.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(g(w,x),S(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const w=y[x.type];let $;if(w){const q=xi[w];$=X1.clone(q.uniforms)}else $=x.uniforms;return $}function R(x,w){let $;for(let q=0,ee=f.length;q<ee;q++){const ae=f[q];if(ae.cacheKey===w){$=ae,++$.usedTimes;break}}return $===void 0&&($=new rT(t,w,x,s),f.push($)),$}function T(x){if(--x.usedTimes===0){const w=f.indexOf(x);f[w]=f[f.length-1],f.pop(),x.destroy()}}function b(x){l.remove(x)}function te(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:f,dispose:te}}function cT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function a(d,h,p,_,y,m){const u=o(d,h,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,y,m){const u=o(d,h,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||uT),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function fT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Nm,t.set(i,[o])):r>=s.length?(o=new Nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new We};break;case"SpotLight":n={position:new z,direction:new z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pT=0;function mT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gT(t){const e=new dT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Rt,o=new Rt;function a(c){let f=0,d=0,h=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,v=0,g=0,S=0,P=0,R=0,T=0;c.sort(mT);for(let te=0,x=c.length;te<x;te++){const w=c[te],$=w.color,q=w.intensity,ee=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=$.r*q,d+=$.g*q,h+=$.b*q;else if(w.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(w.sh.coefficients[K],q);T++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ue=w.shadow,I=n.get(w);I.shadowIntensity=ue.intensity,I.shadowBias=ue.bias,I.shadowNormalBias=ue.normalBias,I.shadowRadius=ue.radius,I.shadowMapSize=ue.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=w.shadow.matrix,v++}i.directional[p]=K,p++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy($).multiplyScalar(q),K.distance=ee,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,i.spot[y]=K;const ue=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ue.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[y]=ue.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=ue.intensity,I.shadowBias=ue.bias,I.shadowNormalBias=ue.normalBias,I.shadowRadius=ue.radius,I.shadowMapSize=ue.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=ae,S++}y++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy($).multiplyScalar(q),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=K,m++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){const ue=w.shadow,I=n.get(w);I.shadowIntensity=ue.intensity,I.shadowBias=ue.bias,I.shadowNormalBias=ue.normalBias,I.shadowRadius=ue.radius,I.shadowMapSize=ue.mapSize,I.shadowCameraNear=ue.camera.near,I.shadowCameraFar=ue.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=w.shadow.matrix,g++}i.point[_]=K,_++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(q),K.groundColor.copy(w.groundColor).multiplyScalar(q),i.hemi[u]=K,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==v||b.numPointShadows!==g||b.numSpotShadows!==S||b.numSpotMaps!==P||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,b.directionalLength=p,b.pointLength=_,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=v,b.numPointShadows=g,b.numSpotShadows=S,b.numSpotMaps=P,b.numLightProbes=T,i.version=pT++)}function l(c,f){let d=0,h=0,p=0,_=0,y=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new gT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _T(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fm(t),e.set(r,[a])):s>=o.length?(a=new Fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class vT extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xT extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MT(t,e,n){let i=new Ah;const r=new ft,s=new ft,o=new It,a=new vT({depthPacking:Jy}),l=new xT,c={},f=n.maxTextureSize,d={[Cr]:Tn,[Tn]:Cr,[oi]:oi},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:yT,fragmentShader:ST}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let u=this.type;this.render=function(R,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const te=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Mr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=u!==bi&&this.type===bi,ee=u===bi&&this.type!==bi;for(let ae=0,K=R.length;ae<K;ae++){const ue=R[ae],I=ue.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const oe=I.getFrameExtents();if(r.multiply(oe),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/oe.x),r.x=s.x*oe.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/oe.y),r.y=s.y*oe.y,I.mapSize.y=s.y)),I.map===null||q===!0||ee===!0){const ye=this.type!==bi?{minFilter:Wn,magFilter:Wn}:{};I.map!==null&&I.map.dispose(),I.map=new os(r.x,r.y,ye),I.map.texture.name=ue.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const le=I.getViewportCount();for(let ye=0;ye<le;ye++){const ke=I.getViewport(ye);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),$.viewport(o),I.updateMatrices(ue,ye),i=I.getFrustum(),S(T,b,I.camera,ue,this.type)}I.isPointLightShadow!==!0&&this.type===bi&&v(I,b),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(te,x,w)};function v(R,T){const b=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new os(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,b,h,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,b,p,y,null)}function g(R,T,b,te){let x=null;const w=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const $=x.uuid,q=T.uuid;let ee=c[$];ee===void 0&&(ee={},c[$]=ee);let ae=ee[q];ae===void 0&&(ae=x.clone(),ee[q]=ae,T.addEventListener("dispose",P)),x=ae}if(x.visible=T.visible,x.wireframe=T.wireframe,te===bi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=t.properties.get(x);$.light=b}return x}function S(R,T,b,te,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===bi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const q=e.update(R),ee=R.material;if(Array.isArray(ee)){const ae=q.groups;for(let K=0,ue=ae.length;K<ue;K++){const I=ae[K],oe=ee[I.materialIndex];if(oe&&oe.visible){const le=g(R,oe,te,x);R.onBeforeShadow(t,R,T,b,q,le,I),t.renderBufferDirect(b,null,q,le,R,I),R.onAfterShadow(t,R,T,b,q,le,I)}}}else if(ee.visible){const ae=g(R,ee,te,x);R.onBeforeShadow(t,R,T,b,q,ae,null),t.renderBufferDirect(b,null,q,ae,R,null),R.onAfterShadow(t,R,T,b,q,ae,null)}}const $=R.children;for(let q=0,ee=$.length;q<ee;q++)S($[q],T,b,te,x)}function P(R){R.target.removeEventListener("dispose",P);for(const b in c){const te=c[b],x=R.target.uuid;x in te&&(te[x].dispose(),delete te[x])}}}const ET={[Nf]:Ff,[Of]:zf,[Bf]:Hf,[oo]:kf,[Ff]:Nf,[zf]:Of,[Hf]:Bf,[kf]:oo};function wT(t){function e(){let A=!1;const Z=new It;let F=null;const B=new It(0,0,0,0);return{setMask:function(he){F!==he&&!A&&(t.colorMask(he,he,he,he),F=he)},setLocked:function(he){A=he},setClear:function(he,Se,Oe,rt,St){St===!0&&(he*=rt,Se*=rt,Oe*=rt),Z.set(he,Se,Oe,rt),B.equals(Z)===!1&&(t.clearColor(he,Se,Oe,rt),B.copy(Z))},reset:function(){A=!1,F=null,B.set(-1,0,0,0)}}}function n(){let A=!1,Z=!1,F=null,B=null,he=null;return{setReversed:function(Se){Z=Se},setTest:function(Se){Se?Ae(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(Se){F!==Se&&!A&&(t.depthMask(Se),F=Se)},setFunc:function(Se){if(Z&&(Se=ET[Se]),B!==Se){switch(Se){case Nf:t.depthFunc(t.NEVER);break;case Ff:t.depthFunc(t.ALWAYS);break;case Of:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case Bf:t.depthFunc(t.EQUAL);break;case kf:t.depthFunc(t.GEQUAL);break;case zf:t.depthFunc(t.GREATER);break;case Hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=Se}},setLocked:function(Se){A=Se},setClear:function(Se){he!==Se&&(t.clearDepth(Se),he=Se)},reset:function(){A=!1,F=null,B=null,he=null}}}function i(){let A=!1,Z=null,F=null,B=null,he=null,Se=null,Oe=null,rt=null,St=null;return{setTest:function(qe){A||(qe?Ae(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(qe){Z!==qe&&!A&&(t.stencilMask(qe),Z=qe)},setFunc:function(qe,st,Nt){(F!==qe||B!==st||he!==Nt)&&(t.stencilFunc(qe,st,Nt),F=qe,B=st,he=Nt)},setOp:function(qe,st,Nt){(Se!==qe||Oe!==st||rt!==Nt)&&(t.stencilOp(qe,st,Nt),Se=qe,Oe=st,rt=Nt)},setLocked:function(qe){A=qe},setClear:function(qe){St!==qe&&(t.clearStencil(qe),St=qe)},reset:function(){A=!1,Z=null,F=null,B=null,he=null,Se=null,Oe=null,rt=null,St=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,_=!1,y=null,m=null,u=null,v=null,g=null,S=null,P=null,R=new We(0,0,0),T=0,b=!1,te=null,x=null,w=null,$=null,q=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,K=0;const ue=t.getParameter(t.VERSION);ue.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ae=K>=1):ue.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ae=K>=2);let I=null,oe={};const le=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),ke=new It().fromArray(le),it=new It().fromArray(ye);function ne(A,Z,F,B){const he=new Uint8Array(4),Se=t.createTexture();t.bindTexture(A,Se),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<F;Oe++)A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY?t.texImage3D(Z,0,t.RGBA,1,1,B,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(Z+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Se}const de={};de[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ae(t.DEPTH_TEST),s.setFunc(oo),$e(!1),Je(Vp),Ae(t.CULL_FACE),U(Mr);function Ae(A){c[A]!==!0&&(t.enable(A),c[A]=!0)}function Me(A){c[A]!==!1&&(t.disable(A),c[A]=!1)}function Ye(A,Z){return f[A]!==Z?(t.bindFramebuffer(A,Z),f[A]=Z,A===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Z),A===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Z),!0):!1}function He(A,Z){let F=h,B=!1;if(A){F=d.get(Z),F===void 0&&(F=[],d.set(Z,F));const he=A.textures;if(F.length!==he.length||F[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Oe=he.length;Se<Oe;Se++)F[Se]=t.COLOR_ATTACHMENT0+Se;F.length=he.length,B=!0}}else F[0]!==t.BACK&&(F[0]=t.BACK,B=!0);B&&t.drawBuffers(F)}function tt(A){return p!==A?(t.useProgram(A),p=A,!0):!1}const dt={[Wr]:t.FUNC_ADD,[Ty]:t.FUNC_SUBTRACT,[Ay]:t.FUNC_REVERSE_SUBTRACT};dt[Cy]=t.MIN,dt[Ry]=t.MAX;const Qe={[Py]:t.ZERO,[by]:t.ONE,[Dy]:t.SRC_COLOR,[Uf]:t.SRC_ALPHA,[Oy]:t.SRC_ALPHA_SATURATE,[Ny]:t.DST_COLOR,[Uy]:t.DST_ALPHA,[Ly]:t.ONE_MINUS_SRC_COLOR,[If]:t.ONE_MINUS_SRC_ALPHA,[Fy]:t.ONE_MINUS_DST_COLOR,[Iy]:t.ONE_MINUS_DST_ALPHA,[By]:t.CONSTANT_COLOR,[ky]:t.ONE_MINUS_CONSTANT_COLOR,[zy]:t.CONSTANT_ALPHA,[Hy]:t.ONE_MINUS_CONSTANT_ALPHA};function U(A,Z,F,B,he,Se,Oe,rt,St,qe){if(A===Mr){_===!0&&(Me(t.BLEND),_=!1);return}if(_===!1&&(Ae(t.BLEND),_=!0),A!==wy){if(A!==y||qe!==b){if((m!==Wr||g!==Wr)&&(t.blendEquation(t.FUNC_ADD),m=Wr,g=Wr),qe)switch(A){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.ONE,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}u=null,v=null,S=null,P=null,R.set(0,0,0),T=0,y=A,b=qe}return}he=he||Z,Se=Se||F,Oe=Oe||B,(Z!==m||he!==g)&&(t.blendEquationSeparate(dt[Z],dt[he]),m=Z,g=he),(F!==u||B!==v||Se!==S||Oe!==P)&&(t.blendFuncSeparate(Qe[F],Qe[B],Qe[Se],Qe[Oe]),u=F,v=B,S=Se,P=Oe),(rt.equals(R)===!1||St!==T)&&(t.blendColor(rt.r,rt.g,rt.b,St),R.copy(rt),T=St),y=A,b=!1}function jt(A,Z){A.side===oi?Me(t.CULL_FACE):Ae(t.CULL_FACE);let F=A.side===Tn;Z&&(F=!F),$e(F),A.blending===$s&&A.transparent===!1?U(Mr):U(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);const B=A.stencilWrite;o.setTest(B),B&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),_t(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ae(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(A){te!==A&&(A?t.frontFace(t.CW):t.frontFace(t.CCW),te=A)}function Je(A){A!==Sy?(Ae(t.CULL_FACE),A!==x&&(A===Vp?t.cullFace(t.BACK):A===My?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),x=A}function Fe(A){A!==w&&(ae&&t.lineWidth(A),w=A)}function _t(A,Z,F){A?(Ae(t.POLYGON_OFFSET_FILL),($!==Z||q!==F)&&(t.polygonOffset(Z,F),$=Z,q=F)):Me(t.POLYGON_OFFSET_FILL)}function je(A){A?Ae(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function C(A){A===void 0&&(A=t.TEXTURE0+ee-1),I!==A&&(t.activeTexture(A),I=A)}function M(A,Z,F){F===void 0&&(I===null?F=t.TEXTURE0+ee-1:F=I);let B=oe[F];B===void 0&&(B={type:void 0,texture:void 0},oe[F]=B),(B.type!==A||B.texture!==Z)&&(I!==F&&(t.activeTexture(F),I=F),t.bindTexture(A,Z||de[A]),B.type=A,B.texture=Z)}function G(){const A=oe[I];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{t.texStorage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function N(A){ke.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),ke.copy(A))}function L(A){it.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),it.copy(A))}function V(A,Z){let F=l.get(Z);F===void 0&&(F=new WeakMap,l.set(Z,F));let B=F.get(A);B===void 0&&(B=t.getUniformBlockIndex(Z,A.name),F.set(A,B))}function k(A,Z){const B=l.get(Z).get(A);a.get(Z)!==B&&(t.uniformBlockBinding(Z,B,A.__bindingPointIndex),a.set(Z,B))}function J(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,oe={},f={},d=new WeakMap,h=[],p=null,_=!1,y=null,m=null,u=null,v=null,g=null,S=null,P=null,R=new We(0,0,0),T=0,b=!1,te=null,x=null,w=null,$=null,q=null,ke.set(0,0,t.canvas.width,t.canvas.height),it.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ae,disable:Me,bindFramebuffer:Ye,drawBuffers:He,useProgram:tt,setBlending:U,setMaterial:jt,setFlipSided:$e,setCullFace:Je,setLineWidth:Fe,setPolygonOffset:_t,setScissorTest:je,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:fe,texImage2D:Pe,texImage3D:Xe,updateUBOMapping:V,uniformBlockBinding:k,texStorage2D:at,texStorage3D:ve,texSubImage2D:se,texSubImage3D:Re,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ce,scissor:N,viewport:L,reset:J}}function Om(t,e,n,i){const r=TT(i);switch(n){case d_:return t*e;case p_:return t*e;case m_:return t*e*2;case g_:return t*e/r.components*r.byteLength;case xh:return t*e/r.components*r.byteLength;case __:return t*e*2/r.components*r.byteLength;case yh:return t*e*2/r.components*r.byteLength;case h_:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case Sh:return t*e*4/r.components*r.byteLength;case Cl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:case $f:return Math.max(t,16)*Math.max(e,8)/4;case jf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Dl:case hd:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case v_:case md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TT(t){switch(t){case Gi:case c_:return{byteLength:1,components:1};case ma:case u_:case Ma:return{byteLength:2,components:1};case _h:case vh:return{byteLength:2,components:4};case ss:case gh:case Ni:return{byteLength:4,components:1};case f_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function AT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):lc("canvas")}function y(C,M,G){let re=1;const fe=je(C);if((fe.width>G||fe.height>G)&&(re=G/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(re*fe.width),Re=Math.floor(re*fe.height);d===void 0&&(d=_(se,Re));const Te=M?_(se,Re):d;return Te.width=se,Te.height=Re,Te.getContext("2d").drawImage(C,0,0,se,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+se+"x"+Re+")."),Te}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Wn&&C.minFilter!==ai}function u(C){t.generateMipmap(C)}function v(C,M,G,re,fe=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=M;if(M===t.RED&&(G===t.FLOAT&&(se=t.R32F),G===t.HALF_FLOAT&&(se=t.R16F),G===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.R8UI),G===t.UNSIGNED_SHORT&&(se=t.R16UI),G===t.UNSIGNED_INT&&(se=t.R32UI),G===t.BYTE&&(se=t.R8I),G===t.SHORT&&(se=t.R16I),G===t.INT&&(se=t.R32I)),M===t.RG&&(G===t.FLOAT&&(se=t.RG32F),G===t.HALF_FLOAT&&(se=t.RG16F),G===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.RG8UI),G===t.UNSIGNED_SHORT&&(se=t.RG16UI),G===t.UNSIGNED_INT&&(se=t.RG32UI),G===t.BYTE&&(se=t.RG8I),G===t.SHORT&&(se=t.RG16I),G===t.INT&&(se=t.RG32I)),M===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.RGB8UI),G===t.UNSIGNED_SHORT&&(se=t.RGB16UI),G===t.UNSIGNED_INT&&(se=t.RGB32UI),G===t.BYTE&&(se=t.RGB8I),G===t.SHORT&&(se=t.RGB16I),G===t.INT&&(se=t.RGB32I)),M===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),G===t.UNSIGNED_INT&&(se=t.RGBA32UI),G===t.BYTE&&(se=t.RGBA8I),G===t.SHORT&&(se=t.RGBA16I),G===t.INT&&(se=t.RGBA32I)),M===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),M===t.RGBA){const Re=fe?rc:ht.getTransfer(re);G===t.FLOAT&&(se=t.RGBA32F),G===t.HALF_FLOAT&&(se=t.RGBA16F),G===t.UNSIGNED_BYTE&&(se=Re===wt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function g(C,M){let G;return C?M===null||M===ss||M===co?G=t.DEPTH24_STENCIL8:M===Ni?G=t.DEPTH32F_STENCIL8:M===ma&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ss||M===co?G=t.DEPTH_COMPONENT24:M===Ni?G=t.DEPTH_COMPONENT32F:M===ma&&(G=t.DEPTH_COMPONENT16),G}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&f.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),te(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,re=h.get(G);if(re){const fe=re[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(C),Object.keys(re).length===0&&h.delete(G)}i.remove(C)}function b(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const G=C.source,re=h.get(G);delete re[M.__cacheKey],o.memory.textures--}function te(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let fe=0;fe<M.__webglFramebuffer[re].length;fe++)t.deleteFramebuffer(M.__webglFramebuffer[re][fe]);else t.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)t.deleteFramebuffer(M.__webglFramebuffer[re]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let re=0,fe=G.length;re<fe;re++){const se=i.get(G[re]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(G[re])}i.remove(C)}let x=0;function w(){x=0}function $(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function q(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ee(C,M){const G=i.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,C,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function ae(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){it(G,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function K(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){it(G,C,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function ue(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ne(G,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const I={[Wf]:t.REPEAT,[Kr]:t.CLAMP_TO_EDGE,[Xf]:t.MIRRORED_REPEAT},oe={[Wn]:t.NEAREST,[Zy]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Zr]:t.LINEAR_MIPMAP_LINEAR},le={[t1]:t.NEVER,[a1]:t.ALWAYS,[n1]:t.LESS,[y_]:t.LEQUAL,[i1]:t.EQUAL,[o1]:t.GEQUAL,[r1]:t.GREATER,[s1]:t.NOTEQUAL};function ye(C,M){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===ou||M.magFilter===Ga||M.magFilter===Zr||M.minFilter===ai||M.minFilter===ou||M.minFilter===Ga||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,I[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,oe[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==Ga&&M.minFilter!==Zr||M.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ke(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const re=M.source;let fe=h.get(re);fe===void 0&&(fe={},h.set(re,fe));const se=q(M);if(se!==C.__cacheKey){fe[se]===void 0&&(fe[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),fe[se].usedTimes++;const Re=fe[C.__cacheKey];Re!==void 0&&(fe[C.__cacheKey].usedTimes--,Re.usedTimes===0&&b(M)),C.__cacheKey=se,C.__webglTexture=fe[se].texture}return G}function it(C,M,G){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const fe=ke(C,M),se=M.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+G);const Re=i.get(se);if(se.version!==Re.__version||fe===!0){n.activeTexture(t.TEXTURE0+G);const Te=ht.getPrimaries(ht.workingColorSpace),Ce=M.colorSpace===ur?null:ht.getPrimaries(M.colorSpace),at=M.colorSpace===ur||Te===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ve=y(M.image,!1,r.maxTextureSize);ve=_t(M,ve);const Pe=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type);let N=v(M.internalFormat,Pe,Xe,M.colorSpace,M.isVideoTexture);ye(re,M);let L;const V=M.mipmaps,k=M.isVideoTexture!==!0,J=Re.__version===void 0||fe===!0,A=se.dataReady,Z=S(M,ve);if(M.isDepthTexture)N=g(M.format===uo,M.type),J&&(k?n.texStorage2D(t.TEXTURE_2D,1,N,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,N,ve.width,ve.height,0,Pe,Xe,null));else if(M.isDataTexture)if(V.length>0){k&&J&&n.texStorage2D(t.TEXTURE_2D,Z,N,V[0].width,V[0].height);for(let F=0,B=V.length;F<B;F++)L=V[F],k?A&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,L.width,L.height,Pe,Xe,L.data):n.texImage2D(t.TEXTURE_2D,F,N,L.width,L.height,0,Pe,Xe,L.data);M.generateMipmaps=!1}else k?(J&&n.texStorage2D(t.TEXTURE_2D,Z,N,ve.width,ve.height),A&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve.width,ve.height,Pe,Xe,ve.data)):n.texImage2D(t.TEXTURE_2D,0,N,ve.width,ve.height,0,Pe,Xe,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&J&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Z,N,V[0].width,V[0].height,ve.depth);for(let F=0,B=V.length;F<B;F++)if(L=V[F],M.format!==ci)if(Pe!==null)if(k){if(A)if(M.layerUpdates.size>0){const he=Om(L.width,L.height,M.format,M.type);for(const Se of M.layerUpdates){const Oe=L.data.subarray(Se*he/L.data.BYTES_PER_ELEMENT,(Se+1)*he/L.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,Se,L.width,L.height,1,Pe,Oe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,L.width,L.height,ve.depth,Pe,L.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,N,L.width,L.height,ve.depth,0,L.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?A&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,L.width,L.height,ve.depth,Pe,Xe,L.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,N,L.width,L.height,ve.depth,0,Pe,Xe,L.data)}else{k&&J&&n.texStorage2D(t.TEXTURE_2D,Z,N,V[0].width,V[0].height);for(let F=0,B=V.length;F<B;F++)L=V[F],M.format!==ci?Pe!==null?k?A&&n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,L.width,L.height,Pe,L.data):n.compressedTexImage2D(t.TEXTURE_2D,F,N,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?A&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,L.width,L.height,Pe,Xe,L.data):n.texImage2D(t.TEXTURE_2D,F,N,L.width,L.height,0,Pe,Xe,L.data)}else if(M.isDataArrayTexture)if(k){if(J&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Z,N,ve.width,ve.height,ve.depth),A)if(M.layerUpdates.size>0){const F=Om(ve.width,ve.height,M.format,M.type);for(const B of M.layerUpdates){const he=ve.data.subarray(B*F/ve.data.BYTES_PER_ELEMENT,(B+1)*F/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,B,ve.width,ve.height,1,Pe,Xe,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Xe,ve.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,N,ve.width,ve.height,ve.depth,0,Pe,Xe,ve.data);else if(M.isData3DTexture)k?(J&&n.texStorage3D(t.TEXTURE_3D,Z,N,ve.width,ve.height,ve.depth),A&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Xe,ve.data)):n.texImage3D(t.TEXTURE_3D,0,N,ve.width,ve.height,ve.depth,0,Pe,Xe,ve.data);else if(M.isFramebufferTexture){if(J)if(k)n.texStorage2D(t.TEXTURE_2D,Z,N,ve.width,ve.height);else{let F=ve.width,B=ve.height;for(let he=0;he<Z;he++)n.texImage2D(t.TEXTURE_2D,he,N,F,B,0,Pe,Xe,null),F>>=1,B>>=1}}else if(V.length>0){if(k&&J){const F=je(V[0]);n.texStorage2D(t.TEXTURE_2D,Z,N,F.width,F.height)}for(let F=0,B=V.length;F<B;F++)L=V[F],k?A&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,Pe,Xe,L):n.texImage2D(t.TEXTURE_2D,F,N,Pe,Xe,L);M.generateMipmaps=!1}else if(k){if(J){const F=je(ve);n.texStorage2D(t.TEXTURE_2D,Z,N,F.width,F.height)}A&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Xe,ve)}else n.texImage2D(t.TEXTURE_2D,0,N,Pe,Xe,ve);m(M)&&u(re),Re.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,G){if(M.image.length!==6)return;const re=ke(C,M),fe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const se=i.get(fe);if(fe.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const Re=ht.getPrimaries(ht.workingColorSpace),Te=M.colorSpace===ur?null:ht.getPrimaries(M.colorSpace),Ce=M.colorSpace===ur||Re===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const at=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let B=0;B<6;B++)!at&&!ve?Pe[B]=y(M.image[B],!0,r.maxCubemapSize):Pe[B]=ve?M.image[B].image:M.image[B],Pe[B]=_t(M,Pe[B]);const Xe=Pe[0],N=s.convert(M.format,M.colorSpace),L=s.convert(M.type),V=v(M.internalFormat,N,L,M.colorSpace),k=M.isVideoTexture!==!0,J=se.__version===void 0||re===!0,A=fe.dataReady;let Z=S(M,Xe);ye(t.TEXTURE_CUBE_MAP,M);let F;if(at){k&&J&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Z,V,Xe.width,Xe.height);for(let B=0;B<6;B++){F=Pe[B].mipmaps;for(let he=0;he<F.length;he++){const Se=F[he];M.format!==ci?N!==null?k?A&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he,0,0,Se.width,Se.height,N,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he,V,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he,0,0,Se.width,Se.height,N,L,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he,V,Se.width,Se.height,0,N,L,Se.data)}}}else{if(F=M.mipmaps,k&&J){F.length>0&&Z++;const B=je(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Z,V,B.width,B.height)}for(let B=0;B<6;B++)if(ve){k?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Pe[B].width,Pe[B].height,N,L,Pe[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,V,Pe[B].width,Pe[B].height,0,N,L,Pe[B].data);for(let he=0;he<F.length;he++){const Oe=F[he].image[B].image;k?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he+1,0,0,Oe.width,Oe.height,N,L,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he+1,V,Oe.width,Oe.height,0,N,L,Oe.data)}}else{k?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,N,L,Pe[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,V,N,L,Pe[B]);for(let he=0;he<F.length;he++){const Se=F[he];k?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he+1,0,0,N,L,Se.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,he+1,V,N,L,Se.image[B])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),se.__version=fe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function de(C,M,G,re,fe,se){const Re=s.convert(G.format,G.colorSpace),Te=s.convert(G.type),Ce=v(G.internalFormat,Re,Te,G.colorSpace);if(!i.get(M).__hasExternalTextures){const ve=Math.max(1,M.width>>se),Pe=Math.max(1,M.height>>se);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,se,Ce,ve,Pe,M.depth,0,Re,Te,null):n.texImage2D(fe,se,Ce,ve,Pe,0,Re,Te,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,fe,i.get(G).__webglTexture,0,$e(M)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,fe,i.get(G).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const re=M.depthTexture,fe=re&&re.isDepthTexture?re.type:null,se=g(M.stencilBuffer,fe),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=$e(M);Je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,se,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,C)}else{const re=M.textures;for(let fe=0;fe<re.length;fe++){const se=re[fe],Re=s.convert(se.format,se.colorSpace),Te=s.convert(se.type),Ce=v(se.internalFormat,Re,Te,se.colorSpace),at=$e(M);G&&Je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,at,Ce,M.width,M.height):Je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at,Ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,fe=$e(M);if(M.depthTexture.format===Ks)Je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===uo)Je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ye(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=re}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Me(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ae(M.__webglDepthbuffer[re],C,!1);else{const fe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,se)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ae(M.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,fe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,M,G){const re=i.get(C);M!==void 0&&de(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ye(C)}function tt(C){const M=C.texture,G=i.get(C),re=i.get(M);C.addEventListener("dispose",R);const fe=C.textures,se=C.isWebGLCubeRenderTarget===!0,Re=fe.length>1;if(Re||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++),se){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)G.__webglFramebuffer[Te][Ce]=t.createFramebuffer()}else G.__webglFramebuffer[Te]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)G.__webglFramebuffer[Te]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Re)for(let Te=0,Ce=fe.length;Te<Ce;Te++){const at=i.get(fe[Te]);at.__webglTexture===void 0&&(at.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Je(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<fe.length;Te++){const Ce=fe[Te];G.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const at=s.convert(Ce.format,Ce.colorSpace),ve=s.convert(Ce.type),Pe=v(Ce.internalFormat,at,ve,Ce.colorSpace,C.isXRRenderTarget===!0),Xe=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,Pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ye(t.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)de(G.__webglFramebuffer[Te][Ce],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce);else de(G.__webglFramebuffer[Te],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let Te=0,Ce=fe.length;Te<Ce;Te++){const at=fe[Te],ve=i.get(at);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),ye(t.TEXTURE_2D,at),de(G.__webglFramebuffer,C,at,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,0),m(at)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let Te=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,re.__webglTexture),ye(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)de(G.__webglFramebuffer[Ce],C,M,t.COLOR_ATTACHMENT0,Te,Ce);else de(G.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,Te,0);m(M)&&u(Te),n.unbindTexture()}C.depthBuffer&&Ye(C)}function dt(C){const M=C.textures;for(let G=0,re=M.length;G<re;G++){const fe=M[G];if(m(fe)){const se=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(fe).__webglTexture;n.bindTexture(se,Re),u(se),n.unbindTexture()}}}const Qe=[],U=[];function jt(C){if(C.samples>0){if(Je(C)===!1){const M=C.textures,G=C.width,re=C.height;let fe=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(C),Te=M.length>1;if(Te)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const at=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,at,0)}t.blitFramebuffer(0,0,G,re,0,0,G,re,fe,t.NEAREST),l===!0&&(Qe.length=0,U.length=0,Qe.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Qe.push(se),U.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const at=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,at,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(C){return Math.min(r.maxSamples,C.samples)}function Je(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function _t(C,M){const G=C.colorSpace,re=C.format,fe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Dr&&G!==ur&&(ht.getTransfer(G)===wt?(re!==ci||fe!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=w,this.setTexture2D=ee,this.setTexture2DArray=ae,this.setTexture3D=K,this.setTextureCube=ue,this.rebindTextures=He,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Je}function CT(t,e){function n(i,r=ur){let s;const o=ht.getTransfer(r);if(i===Gi)return t.UNSIGNED_BYTE;if(i===_h)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===f_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===c_)return t.BYTE;if(i===u_)return t.SHORT;if(i===ma)return t.UNSIGNED_SHORT;if(i===gh)return t.INT;if(i===ss)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===Ma)return t.HALF_FLOAT;if(i===d_)return t.ALPHA;if(i===h_)return t.RGB;if(i===ci)return t.RGBA;if(i===p_)return t.LUMINANCE;if(i===m_)return t.LUMINANCE_ALPHA;if(i===Ks)return t.DEPTH_COMPONENT;if(i===uo)return t.DEPTH_STENCIL;if(i===g_)return t.RED;if(i===xh)return t.RED_INTEGER;if(i===__)return t.RG;if(i===yh)return t.RG_INTEGER;if(i===Sh)return t.RGBA_INTEGER;if(i===Cl||i===Rl||i===Pl||i===bl)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jf||i===Yf||i===qf||i===$f)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Zf||i===Qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kf||i===Zf)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===hd||i===pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dl)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===v_||i===md||i===gd||i===_d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class RT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new An,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wi({vertexShader:bT,fragmentShader:DT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xt(new xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UT extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const y=new LT,m=n.getContextAttributes();let u=null,v=null;const g=[],S=[],P=new ft;let R=null;const T=new zn;T.layers.enable(1),T.viewport=new It;const b=new zn;b.layers.enable(2),b.viewport=new It;const te=[T,b],x=new RT;x.layers.enable(1),x.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=g[ne];return de===void 0&&(de=new Iu,g[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=g[ne];return de===void 0&&(de=new Iu,g[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=g[ne];return de===void 0&&(de=new Iu,g[ne]=de),de.getHandSpace()};function q(ne){const de=S.indexOf(ne.inputSource);if(de===-1)return;const Ae=g[de];Ae!==void 0&&(Ae.update(ne.inputSource,ne.frame,c||o),Ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<g.length;ne++){const de=S[ne];de!==null&&(S[ne]=null,g[ne].disconnect(de))}w=null,$=null,y.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,v=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new os(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,Ae=null,Me=null;m.depth&&(Me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=m.stencil?uo:Ks,Ae=m.stencil?co:ss);const Ye={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new os(h.textureWidth,h.textureHeight,{format:ci,type:Gi,depthTexture:new L_(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(ne){for(let de=0;de<ne.removed.length;de++){const Ae=ne.removed[de],Me=S.indexOf(Ae);Me>=0&&(S[Me]=null,g[Me].disconnect(Ae))}for(let de=0;de<ne.added.length;de++){const Ae=ne.added[de];let Me=S.indexOf(Ae);if(Me===-1){for(let He=0;He<g.length;He++)if(He>=S.length){S.push(Ae),Me=He;break}else if(S[He]===null){S[He]=Ae,Me=He;break}if(Me===-1)break}const Ye=g[Me];Ye&&Ye.connect(Ae)}}const K=new z,ue=new z;function I(ne,de,Ae){K.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Ae.matrixWorld);const Me=K.distanceTo(ue),Ye=de.projectionMatrix.elements,He=Ae.projectionMatrix.elements,tt=Ye[14]/(Ye[10]-1),dt=Ye[14]/(Ye[10]+1),Qe=(Ye[9]+1)/Ye[5],U=(Ye[9]-1)/Ye[5],jt=(Ye[8]-1)/Ye[0],$e=(He[8]+1)/He[0],Je=tt*jt,Fe=tt*$e,_t=Me/(-jt+$e),je=_t*-jt;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(je),ne.translateZ(_t),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ye[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const C=tt+_t,M=dt+_t,G=Je-je,re=Fe+(Me-je),fe=Qe*dt/M*C,se=U*dt/M*C;ne.projectionMatrix.makePerspective(G,re,fe,se,C,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let de=ne.near,Ae=ne.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),x.near=b.near=T.near=de,x.far=b.far=T.far=Ae,(w!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,$=x.far);const Me=ne.parent,Ye=x.cameras;oe(x,Me);for(let He=0;He<Ye.length;He++)oe(Ye[He],Me);Ye.length===2?I(x,T,b):x.projectionMatrix.copy(T.projectionMatrix),le(ne,x,Me)};function le(ne,de,Ae){Ae===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ga*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ye=null;function ke(ne,de){if(f=de.getViewerPose(c||o),_=de,f!==null){const Ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Me=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let He=0;He<Ae.length;He++){const tt=Ae[He];let dt=null;if(p!==null)dt=p.getViewport(tt);else{const U=d.getViewSubImage(h,tt);dt=U.viewport,He===0&&(e.setRenderTargetTextures(v,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(v))}let Qe=te[He];Qe===void 0&&(Qe=new zn,Qe.layers.enable(He),Qe.viewport=new It,te[He]=Qe),Qe.matrix.fromArray(tt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(tt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(dt.x,dt.y,dt.width,dt.height),He===0&&(x.matrix.copy(Qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Qe)}const Ye=r.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const He=d.getDepthInformation(Ae[0]);He&&He.isValid&&He.texture&&y.init(e,He,r.renderState)}}for(let Ae=0;Ae<g.length;Ae++){const Me=S[Ae],Ye=g[Ae];Me!==null&&Ye!==void 0&&Ye.update(Me,de,c||o)}ye&&ye(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const it=new b_;it.setAnimationLoop(ke),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const zr=new Ei,IT=new Rt;function NT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,C_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,S=v.envMapRotation;g&&(m.envMap.value=g,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(IT.makeRotationFromEuler(zr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const R=e.render.frame;s[v.id]!==R&&(h(v),s[v.id]=R)}function f(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),P=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,T=S.length;R<T;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let te=0,x=b.length;te<x;te++){const w=b[te];if(p(w,R,te,P)===!0){const $=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let ee=0;for(let ae=0;ae<q.length;ae++){const K=q[ae],ue=y(K);typeof K=="number"||typeof K=="boolean"?(w.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,$+ee,w.__data)):K.isMatrix3?(w.__data[0]=K.elements[0],w.__data[1]=K.elements[1],w.__data[2]=K.elements[2],w.__data[3]=0,w.__data[4]=K.elements[3],w.__data[5]=K.elements[4],w.__data[6]=K.elements[5],w.__data[7]=0,w.__data[8]=K.elements[6],w.__data[9]=K.elements[7],w.__data[10]=K.elements[8],w.__data[11]=0):(K.toArray(w.__data,ee),ee+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,P){const R=v.value,T=g+"_"+S;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const b=P[T];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return P[T]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function _(v){const g=v.uniforms;let S=0;const P=16;for(let T=0,b=g.length;T<b;T++){const te=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,w=te.length;x<w;x++){const $=te[x],q=Array.isArray($.value)?$.value:[$.value];for(let ee=0,ae=q.length;ee<ae;ee++){const K=q[ee],ue=y(K),I=S%P,oe=I%ue.boundary,le=I+oe;S+=oe,le!==0&&P-le<ue.storage&&(S+=P-le),$.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=ue.storage}}}const R=S%P;return R>0&&(S+=P-R),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class OT{constructor(e={}){const{canvas:n=w1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Er,this.toneMappingExposure=1;const g=this;let S=!1,P=0,R=0,T=null,b=-1,te=null;const x=new It,w=new It;let $=null;const q=new We(0);let ee=0,ae=n.width,K=n.height,ue=1,I=null,oe=null;const le=new It(0,0,ae,K),ye=new It(0,0,ae,K);let ke=!1;const it=new Ah;let ne=!1,de=!1;const Ae=new Rt,Me=new Rt,Ye=new z,He=new It,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Qe(){return T===null?ue:1}let U=i;function jt(E,D){return n.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ph}`),n.addEventListener("webglcontextlost",B,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Se,!1),U===null){const D="webgl2";if(U=jt(D,E),U===null)throw jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,Je,Fe,_t,je,C,M,G,re,fe,se,Re,Te,Ce,at,ve,Pe,Xe,N,L,V,k,J,A;function Z(){$e=new VE(U),$e.init(),k=new CT(U,$e),Je=new FE(U,$e,e,k),Fe=new wT(U),Je.reverseDepthBuffer&&Fe.buffers.depth.setReversed(!0),_t=new XE(U),je=new cT,C=new AT(U,$e,Fe,je,Je,k,_t),M=new BE(g),G=new HE(g),re=new Q1(U),J=new IE(U,re),fe=new GE(U,re,_t,J),se=new YE(U,fe,re,_t),N=new jE(U,Je,C),ve=new OE(je),Re=new lT(g,M,G,$e,Je,J,ve),Te=new NT(g,je),Ce=new fT,at=new _T($e),Xe=new UE(g,M,G,Fe,se,h,l),Pe=new MT(g,se,Je),A=new FT(U,_t,Je,Fe),L=new NE(U,$e,_t),V=new WE(U,$e,_t),_t.programs=Re.programs,g.capabilities=Je,g.extensions=$e,g.properties=je,g.renderLists=Ce,g.shadowMap=Pe,g.state=Fe,g.info=_t}Z();const F=new UT(g,U);this.xr=F,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(ae,K,!1))},this.getSize=function(E){return E.set(ae,K)},this.setSize=function(E,D,j=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,K=D,n.width=Math.floor(E*ue),n.height=Math.floor(D*ue),j===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(ae*ue,K*ue).floor()},this.setDrawingBufferSize=function(E,D,j){ae=E,K=D,ue=j,n.width=Math.floor(E*j),n.height=Math.floor(D*j),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,D,j,Y){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,D,j,Y),Fe.viewport(x.copy(le).multiplyScalar(ue).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,D,j,Y){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,D,j,Y),Fe.scissor(w.copy(ye).multiplyScalar(ue).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){Fe.setScissorTest(ke=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(E=!0,D=!0,j=!0){let Y=0;if(E){let O=!1;if(T!==null){const H=T.texture.format;O=H===Sh||H===yh||H===xh}if(O){const H=T.texture.type,W=H===Gi||H===ss||H===ma||H===co||H===_h||H===vh,Q=Xe.getClearColor(),ie=Xe.getClearAlpha(),pe=Q.r,ge=Q.g,_e=Q.b;W?(p[0]=pe,p[1]=ge,p[2]=_e,p[3]=ie,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=pe,_[1]=ge,_[2]=_e,_[3]=ie,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}D&&(Y|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",B,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ce.dispose(),at.dispose(),je.dispose(),M.dispose(),G.dispose(),se.dispose(),J.dispose(),A.dispose(),Re.dispose(),F.dispose(),F.removeEventListener("sessionstart",Ft),F.removeEventListener("sessionend",et),Yt.stop()};function B(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=_t.autoReset,D=Pe.enabled,j=Pe.autoUpdate,Y=Pe.needsUpdate,O=Pe.type;Z(),_t.autoReset=E,Pe.enabled=D,Pe.autoUpdate=j,Pe.needsUpdate=Y,Pe.type=O}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const D=E.target;D.removeEventListener("dispose",Oe),rt(D)}function rt(E){St(E),je.remove(E)}function St(E){const D=je.get(E).programs;D!==void 0&&(D.forEach(function(j){Re.releaseProgram(j)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,j,Y,O,H){D===null&&(D=tt);const W=O.isMesh&&O.matrixWorld.determinant()<0,Q=Ta(E,D,j,Y,O);Fe.setMaterial(Y,W);let ie=j.index,pe=1;if(Y.wireframe===!0){if(ie=fe.getWireframeAttribute(j),ie===void 0)return;pe=2}const ge=j.drawRange,_e=j.attributes.position;let Ue=ge.start*pe,Ie=(ge.start+ge.count)*pe;H!==null&&(Ue=Math.max(Ue,H.start*pe),Ie=Math.min(Ie,(H.start+H.count)*pe)),ie!==null?(Ue=Math.max(Ue,0),Ie=Math.min(Ie,ie.count)):_e!=null&&(Ue=Math.max(Ue,0),Ie=Math.min(Ie,_e.count));const ot=Ie-Ue;if(ot<0||ot===1/0)return;J.setup(O,Y,Q,j,ie);let pt,Ve=L;if(ie!==null&&(pt=re.get(ie),Ve=V,Ve.setIndex(pt)),O.isMesh)Y.wireframe===!0?(Fe.setLineWidth(Y.wireframeLinewidth*Qe()),Ve.setMode(U.LINES)):Ve.setMode(U.TRIANGLES);else if(O.isLine){let be=Y.linewidth;be===void 0&&(be=1),Fe.setLineWidth(be*Qe()),O.isLineSegments?Ve.setMode(U.LINES):O.isLineLoop?Ve.setMode(U.LINE_LOOP):Ve.setMode(U.LINE_STRIP)}else O.isPoints?Ve.setMode(U.POINTS):O.isSprite&&Ve.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ve.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))Ve.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,Mt=O._multiDrawCounts,lt=O._multiDrawCount,Ot=ie?re.get(ie).bytesPerElement:1,hs=je.get(Y).currentProgram.getUniforms();for(let Cn=0;Cn<lt;Cn++)hs.setValue(U,"_gl_DrawID",Cn),Ve.render(be[Cn]/Ot,Mt[Cn])}else if(O.isInstancedMesh)Ve.renderInstances(Ue,ot,O.count);else if(j.isInstancedBufferGeometry){const be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Mt=Math.min(j.instanceCount,be);Ve.renderInstances(Ue,ot,Mt)}else Ve.render(Ue,ot)};function qe(E,D,j){E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,Kn(E,D,j),E.side=Cr,E.needsUpdate=!0,Kn(E,D,j),E.side=oi):Kn(E,D,j)}this.compile=function(E,D,j=null){j===null&&(j=E),m=at.get(j),m.init(D),v.push(m),j.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==j&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const Y=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const H=O.material;if(H)if(Array.isArray(H))for(let W=0;W<H.length;W++){const Q=H[W];qe(Q,j,O),Y.add(Q)}else qe(H,j,O),Y.add(H)}),v.pop(),m=null,Y},this.compileAsync=function(E,D,j=null){const Y=this.compile(E,D,j);return new Promise(O=>{function H(){if(Y.forEach(function(W){je.get(W).currentProgram.isReady()&&Y.delete(W)}),Y.size===0){O(E);return}setTimeout(H,10)}$e.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let st=null;function Nt(E){st&&st(E)}function Ft(){Yt.stop()}function et(){Yt.start()}const Yt=new b_;Yt.setAnimationLoop(Nt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(E){st=E,F.setAnimationLoop(E),E===null?Yt.stop():Yt.start()},F.addEventListener("sessionstart",Ft),F.addEventListener("sessionend",et),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(D),D=F.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,D,T),m=at.get(E,v.length),m.init(D),v.push(m),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),it.setFromProjectionMatrix(Me),de=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,de),y=Ce.get(E,u.length),y.init(),u.push(y),F.enabled===!0&&F.isPresenting===!0){const H=g.xr.getDepthSensingMesh();H!==null&&tn(H,D,-1/0,g.sortObjects)}tn(E,D,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,oe),dt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,dt&&Xe.addToRenderList(y,E),this.info.render.frame++,ne===!0&&ve.beginShadows();const j=m.state.shadowsArray;Pe.render(j,E,D),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,O=y.transmissive;if(m.setupLights(),D.isArrayCamera){const H=D.cameras;if(O.length>0)for(let W=0,Q=H.length;W<Q;W++){const ie=H[W];ji(Y,O,E,ie)}dt&&Xe.render(E);for(let W=0,Q=H.length;W<Q;W++){const ie=H[W];mi(y,E,ie,ie.viewport)}}else O.length>0&&ji(Y,O,E,D),dt&&Xe.render(E),mi(y,E,D);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,D),J.resetDefaultState(),b=-1,te=null,v.pop(),v.length>0?(m=v[v.length-1],ne===!0&&ve.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function tn(E,D,j,Y){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){Y&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const W=se.update(E),Q=E.material;Q.visible&&y.push(E,W,Q,j,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){const W=se.update(E),Q=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),He.copy(W.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(Q)){const ie=W.groups;for(let pe=0,ge=ie.length;pe<ge;pe++){const _e=ie[pe],Ue=Q[_e.materialIndex];Ue&&Ue.visible&&y.push(E,W,Ue,j,He.z,_e)}}else Q.visible&&y.push(E,W,Q,j,He.z,null)}}const H=E.children;for(let W=0,Q=H.length;W<Q;W++)tn(H[W],D,j,Y)}function mi(E,D,j,Y){const O=E.opaque,H=E.transmissive,W=E.transparent;m.setupLightsView(j),ne===!0&&ve.setGlobalState(g.clippingPlanes,j),Y&&Fe.viewport(x.copy(Y)),O.length>0&&nn(O,D,j),H.length>0&&nn(H,D,j),W.length>0&&nn(W,D,j),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ji(E,D,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new os(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Ma:Gi,minFilter:Zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const H=m.state.transmissionRenderTarget[Y.id],W=Y.viewport||x;H.setSize(W.z,W.w);const Q=g.getRenderTarget();g.setRenderTarget(H),g.getClearColor(q),ee=g.getClearAlpha(),ee<1&&g.setClearColor(16777215,.5),g.clear(),dt&&Xe.render(j);const ie=g.toneMapping;g.toneMapping=Er;const pe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),ne===!0&&ve.setGlobalState(g.clippingPlanes,Y),nn(E,j,Y),C.updateMultisampleRenderTarget(H),C.updateRenderTargetMipmap(H),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let _e=0,Ue=D.length;_e<Ue;_e++){const Ie=D[_e],ot=Ie.object,pt=Ie.geometry,Ve=Ie.material,be=Ie.group;if(Ve.side===oi&&ot.layers.test(Y.layers)){const Mt=Ve.side;Ve.side=Tn,Ve.needsUpdate=!0,Ir(ot,j,Y,pt,Ve,be),Ve.side=Mt,Ve.needsUpdate=!0,ge=!0}}ge===!0&&(C.updateMultisampleRenderTarget(H),C.updateRenderTargetMipmap(H))}g.setRenderTarget(Q),g.setClearColor(q,ee),pe!==void 0&&(Y.viewport=pe),g.toneMapping=ie}function nn(E,D,j){const Y=D.isScene===!0?D.overrideMaterial:null;for(let O=0,H=E.length;O<H;O++){const W=E[O],Q=W.object,ie=W.geometry,pe=Y===null?W.material:Y,ge=W.group;Q.layers.test(j.layers)&&Ir(Q,D,j,ie,pe,ge)}}function Ir(E,D,j,Y,O,H){E.onBeforeRender(g,D,j,Y,O,H),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(g,D,j,Y,E,H),O.transparent===!0&&O.side===oi&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,g.renderBufferDirect(j,D,Y,O,E,H),O.side=Cr,O.needsUpdate=!0,g.renderBufferDirect(j,D,Y,O,E,H),O.side=oi):g.renderBufferDirect(j,D,Y,O,E,H),E.onAfterRender(g,D,j,Y,O,H)}function Kn(E,D,j){D.isScene!==!0&&(D=tt);const Y=je.get(E),O=m.state.lights,H=m.state.shadowsArray,W=O.state.version,Q=Re.getParameters(E,O.state,H,D,j),ie=Re.getProgramCacheKey(Q);let pe=Y.programs;Y.environment=E.isMeshStandardMaterial?D.environment:null,Y.fog=D.fog,Y.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,pe===void 0&&(E.addEventListener("dispose",Oe),pe=new Map,Y.programs=pe);let ge=pe.get(ie);if(ge!==void 0){if(Y.currentProgram===ge&&Y.lightsStateVersion===W)return gi(E,Q),ge}else Q.uniforms=Re.getUniforms(E),E.onBeforeCompile(Q,g),ge=Re.acquireProgram(Q,ie),pe.set(ie,ge),Y.uniforms=Q.uniforms;const _e=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_e.clippingPlanes=ve.uniform),gi(E,Q),Y.needsLights=qi(E),Y.lightsStateVersion=W,Y.needsLights&&(_e.ambientLightColor.value=O.state.ambient,_e.lightProbe.value=O.state.probe,_e.directionalLights.value=O.state.directional,_e.directionalLightShadows.value=O.state.directionalShadow,_e.spotLights.value=O.state.spot,_e.spotLightShadows.value=O.state.spotShadow,_e.rectAreaLights.value=O.state.rectArea,_e.ltc_1.value=O.state.rectAreaLTC1,_e.ltc_2.value=O.state.rectAreaLTC2,_e.pointLights.value=O.state.point,_e.pointLightShadows.value=O.state.pointShadow,_e.hemisphereLights.value=O.state.hemi,_e.directionalShadowMap.value=O.state.directionalShadowMap,_e.directionalShadowMatrix.value=O.state.directionalShadowMatrix,_e.spotShadowMap.value=O.state.spotShadowMap,_e.spotLightMatrix.value=O.state.spotLightMatrix,_e.spotLightMap.value=O.state.spotLightMap,_e.pointShadowMap.value=O.state.pointShadowMap,_e.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=ge,Y.uniformsList=null,ge}function ds(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ul.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function gi(E,D){const j=je.get(E);j.outputColorSpace=D.outputColorSpace,j.batching=D.batching,j.batchingColor=D.batchingColor,j.instancing=D.instancing,j.instancingColor=D.instancingColor,j.instancingMorph=D.instancingMorph,j.skinning=D.skinning,j.morphTargets=D.morphTargets,j.morphNormals=D.morphNormals,j.morphColors=D.morphColors,j.morphTargetsCount=D.morphTargetsCount,j.numClippingPlanes=D.numClippingPlanes,j.numIntersection=D.numClipIntersection,j.vertexAlphas=D.vertexAlphas,j.vertexTangents=D.vertexTangents,j.toneMapping=D.toneMapping}function Ta(E,D,j,Y,O){D.isScene!==!0&&(D=tt),C.resetTextureUnits();const H=D.fog,W=Y.isMeshStandardMaterial?D.environment:null,Q=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Dr,ie=(Y.isMeshStandardMaterial?G:M).get(Y.envMap||W),pe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ge=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),_e=!!j.morphAttributes.position,Ue=!!j.morphAttributes.normal,Ie=!!j.morphAttributes.color;let ot=Er;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ot=g.toneMapping);const pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ve=pt!==void 0?pt.length:0,be=je.get(Y),Mt=m.state.lights;if(ne===!0&&(de===!0||E!==te)){const Fn=E===te&&Y.id===b;ve.setState(Y,E,Fn)}let lt=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Mt.state.version||be.outputColorSpace!==Q||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==ie||Y.fog===!0&&be.fog!==H||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ve.numPlanes||be.numIntersection!==ve.numIntersection)||be.vertexAlphas!==pe||be.vertexTangents!==ge||be.morphTargets!==_e||be.morphNormals!==Ue||be.morphColors!==Ie||be.toneMapping!==ot||be.morphTargetsCount!==Ve)&&(lt=!0):(lt=!0,be.__version=Y.version);let Ot=be.currentProgram;lt===!0&&(Ot=Kn(Y,D,O));let hs=!1,Cn=!1,Dc=!1;const Bt=Ot.getUniforms(),$i=be.uniforms;if(Fe.useProgram(Ot.program)&&(hs=!0,Cn=!0,Dc=!0),Y.id!==b&&(b=Y.id,Cn=!0),hs||te!==E){Je.reverseDepthBuffer?(Ae.copy(E.projectionMatrix),A1(Ae),C1(Ae),Bt.setValue(U,"projectionMatrix",Ae)):Bt.setValue(U,"projectionMatrix",E.projectionMatrix),Bt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Fn=Bt.map.cameraPosition;Fn!==void 0&&Fn.setValue(U,Ye.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,Cn=!0,Dc=!0)}if(O.isSkinnedMesh){Bt.setOptional(U,O,"bindMatrix"),Bt.setOptional(U,O,"bindMatrixInverse");const Fn=O.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Bt.setValue(U,"boneTexture",Fn.boneTexture,C))}O.isBatchedMesh&&(Bt.setOptional(U,O,"batchingTexture"),Bt.setValue(U,"batchingTexture",O._matricesTexture,C),Bt.setOptional(U,O,"batchingIdTexture"),Bt.setValue(U,"batchingIdTexture",O._indirectTexture,C),Bt.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Bt.setValue(U,"batchingColorTexture",O._colorsTexture,C));const Lc=j.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0)&&N.update(O,j,Ot),(Cn||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,Bt.setValue(U,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($i.envMap.value=ie,$i.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&D.environment!==null&&($i.envMapIntensity.value=D.environmentIntensity),Cn&&(Bt.setValue(U,"toneMappingExposure",g.toneMappingExposure),be.needsLights&&Yi($i,Dc),H&&Y.fog===!0&&Te.refreshFogUniforms($i,H),Te.refreshMaterialUniforms($i,Y,ue,K,m.state.transmissionRenderTarget[E.id]),Ul.upload(U,ds(be),$i,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ul.upload(U,ds(be),$i,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Bt.setValue(U,"center",O.center),Bt.setValue(U,"modelViewMatrix",O.modelViewMatrix),Bt.setValue(U,"normalMatrix",O.normalMatrix),Bt.setValue(U,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Fn=Y.uniformsGroups;for(let Uc=0,V_=Fn.length;Uc<V_;Uc++){const bh=Fn[Uc];A.update(bh,Ot),A.bind(bh,Ot)}}return Ot}function Yi(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function qi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,D,j){je.get(E.texture).__webglTexture=D,je.get(E.depthTexture).__webglTexture=j;const Y=je.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const j=je.get(E);j.__webglFramebuffer=D,j.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,j=0){T=E,P=D,R=j;let Y=!0,O=null,H=!1,W=!1;if(E){const ie=je.get(E);if(ie.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(ie.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ie.__hasExternalTextures)C.rebindTextures(E,je.get(E.texture).__webglTexture,je.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _e=E.depthTexture;if(ie.__boundDepthTexture!==_e){if(_e!==null&&je.has(_e)&&(E.width!==_e.image.width||E.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const pe=E.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(W=!0);const ge=je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ge[D])?O=ge[D][j]:O=ge[D],H=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?O=je.get(E).__webglMultisampledFramebuffer:Array.isArray(ge)?O=ge[j]:O=ge,x.copy(E.viewport),w.copy(E.scissor),$=E.scissorTest}else x.copy(le).multiplyScalar(ue).floor(),w.copy(ye).multiplyScalar(ue).floor(),$=ke;if(Fe.bindFramebuffer(U.FRAMEBUFFER,O)&&Y&&Fe.drawBuffers(E,O),Fe.viewport(x),Fe.scissor(w),Fe.setScissorTest($),H){const ie=je.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ie.__webglTexture,j)}else if(W){const ie=je.get(E.texture),pe=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ie.__webglTexture,j||0,pe)}b=-1},this.readRenderTargetPixels=function(E,D,j,Y,O,H,W){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&W!==void 0&&(Q=Q[W]),Q){Fe.bindFramebuffer(U.FRAMEBUFFER,Q);try{const ie=E.texture,pe=ie.format,ge=ie.type;if(!Je.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-Y&&j>=0&&j<=E.height-O&&U.readPixels(D,j,Y,O,k.convert(pe),k.convert(ge),H)}finally{const ie=T!==null?je.get(T).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(E,D,j,Y,O,H,W){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&W!==void 0&&(Q=Q[W]),Q){const ie=E.texture,pe=ie.format,ge=ie.type;if(!Je.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-Y&&j>=0&&j<=E.height-O){Fe.bindFramebuffer(U.FRAMEBUFFER,Q);const _e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.bufferData(U.PIXEL_PACK_BUFFER,H.byteLength,U.STREAM_READ),U.readPixels(D,j,Y,O,k.convert(pe),k.convert(ge),0);const Ue=T!==null?je.get(T).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,Ue);const Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await T1(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,H),U.deleteBuffer(_e),U.deleteSync(Ie),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,j=0){E.isTexture!==!0&&(Ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-j),O=Math.floor(E.image.width*Y),H=Math.floor(E.image.height*Y),W=D!==null?D.x:0,Q=D!==null?D.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,W,Q,O,H),Fe.unbindTexture()},this.copyTextureToTexture=function(E,D,j=null,Y=null,O=0){E.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],D=arguments[2],O=arguments[3]||0,j=null);let H,W,Q,ie,pe,ge;j!==null?(H=j.max.x-j.min.x,W=j.max.y-j.min.y,Q=j.min.x,ie=j.min.y):(H=E.image.width,W=E.image.height,Q=0,ie=0),Y!==null?(pe=Y.x,ge=Y.y):(pe=0,ge=0);const _e=k.convert(D.format),Ue=k.convert(D.type);C.setTexture2D(D,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pt=U.getParameter(U.UNPACK_SKIP_PIXELS),Ve=U.getParameter(U.UNPACK_SKIP_ROWS),be=U.getParameter(U.UNPACK_SKIP_IMAGES),Mt=E.isCompressedTexture?E.mipmaps[O]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Q),U.pixelStorei(U.UNPACK_SKIP_ROWS,ie),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,pe,ge,H,W,_e,Ue,Mt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,pe,ge,Mt.width,Mt.height,_e,Mt.data):U.texSubImage2D(U.TEXTURE_2D,O,pe,ge,H,W,_e,Ue,Mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,be),O===0&&D.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,j=null,Y=null,O=0){E.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],D=arguments[3],O=arguments[4]||0);let H,W,Q,ie,pe,ge,_e,Ue,Ie;const ot=E.isCompressedTexture?E.mipmaps[O]:E.image;j!==null?(H=j.max.x-j.min.x,W=j.max.y-j.min.y,Q=j.max.z-j.min.z,ie=j.min.x,pe=j.min.y,ge=j.min.z):(H=ot.width,W=ot.height,Q=ot.depth,ie=0,pe=0,ge=0),Y!==null?(_e=Y.x,Ue=Y.y,Ie=Y.z):(_e=0,Ue=0,Ie=0);const pt=k.convert(D.format),Ve=k.convert(D.type);let be;if(D.isData3DTexture)C.setTexture3D(D,0),be=U.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),be=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Mt=U.getParameter(U.UNPACK_ROW_LENGTH),lt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ot=U.getParameter(U.UNPACK_SKIP_PIXELS),hs=U.getParameter(U.UNPACK_SKIP_ROWS),Cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ge),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(be,O,_e,Ue,Ie,H,W,Q,pt,Ve,ot.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(be,O,_e,Ue,Ie,H,W,Q,pt,ot.data):U.texSubImage3D(be,O,_e,Ue,Ie,H,W,Q,pt,Ve,ot),U.pixelStorei(U.UNPACK_ROW_LENGTH,Mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,hs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Cn),O===0&&D.generateMipmaps&&U.generateMipmap(be),Fe.unbindTexture()},this.initRenderTarget=function(E){je.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Fe.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,Fe.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mh?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===Rc?"display-p3":"srgb"}}class BT extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Rh extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new z,uc=new z,Bm=new Rt,Io=new wh,ul=new wa,Nu=new z,km=new z;class kT extends Zt{constructor(e=new pi,n=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)cc.fromBufferAttribute(n,r-1),uc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Bm.copy(r).invert(),Io.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const u=f.getX(y),v=f.getX(y+1),g=fl(this,e,Io,l,u,v);g&&n.push(g)}if(this.isLineLoop){const y=f.getX(_-1),m=f.getX(p),u=fl(this,e,Io,l,y,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=c){const u=fl(this,e,Io,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=fl(this,e,Io,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(cc.fromBufferAttribute(o,r),uc.fromBufferAttribute(o,s),n.distanceSqToSegment(cc,uc,Nu,km)>i)return;Nu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Nu);if(!(l<e.near||l>e.far))return{distance:l,point:km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const zm=new z,Hm=new z;class O_ extends kT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)zm.fromBufferAttribute(n,r),Hm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zm.distanceTo(Hm);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wr extends pi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let _=0;const y=[],m=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(p,2));function v(){const S=new z,P=new z;let R=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const te=[],x=b/s,w=x*(n-e)+e;for(let $=0;$<=r;$++){const q=$/r,ee=q*l+a,ae=Math.sin(ee),K=Math.cos(ee);P.x=w*ae,P.y=-x*i+m,P.z=w*K,d.push(P.x,P.y,P.z),S.set(ae,T,K).normalize(),h.push(S.x,S.y,S.z),p.push(q,1-x),te.push(_++)}y.push(te)}for(let b=0;b<r;b++)for(let te=0;te<s;te++){const x=y[te][b],w=y[te+1][b],$=y[te+1][b+1],q=y[te][b+1];e>0&&(f.push(x,w,q),R+=3),n>0&&(f.push(w,$,q),R+=3)}c.addGroup(u,R,0),u+=R}function g(S){const P=_,R=new ft,T=new z;let b=0;const te=S===!0?e:n,x=S===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),_++;const w=_;for(let $=0;$<=r;$++){const ee=$/r*l+a,ae=Math.cos(ee),K=Math.sin(ee);T.x=te*K,T.y=m*x,T.z=te*ae,d.push(T.x,T.y,T.z),h.push(0,x,0),R.x=ae*.5+.5,R.y=K*.5*x+.5,p.push(R.x,R.y),_++}for(let $=0;$<r;$++){const q=P+$,ee=w+$;S===!0?f.push(ee,ee+1,q):f.push(ee+1,ee,q),b+=3}c.addGroup(u,b,S===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const dl=new z,hl=new z,Fu=new z,pl=new Hn;class Ph extends pi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Zs*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:u}=pl;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),pl.getNormal(Fu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const g=(v+1)%3,S=d[v],P=d[g],R=pl[f[v]],T=pl[f[g]],b=`${S}_${P}`,te=`${P}_${S}`;te in h&&h[te]?(Fu.dot(h[te].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(T.x,T.y,T.z)),h[te]=null):b in h||(h[b]={index0:c[v],index1:c[g],normal:Fu.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];dl.fromBufferAttribute(a,y),hl.fromBufferAttribute(a,m),p.push(dl.x,dl.y,dl.z),p.push(hl.x,hl.y,hl.z)}this.setAttribute("position",new un(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ls extends pi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new z,h=new z,p=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const R=P/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+g*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(R+S,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],S=f[u][v],P=f[u+1][v],R=f[u+1][v+1];(u!==0||o>0)&&p.push(g,S,R),(u!==i-1||l<Math.PI)&&p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class B_ extends vo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x_,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k_ extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class zT extends k_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ou=new Rt,Vm=new z,Gm=new z;class HT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gm),n.updateMatrixWorld(),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class VT extends HT{constructor(){super(new D_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wm extends k_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new VT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xm=new Rt;class GT{constructor(e,n,i=0,r=1/0){this.ray=new wh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xm),this}intersectObject(e,n=!0,i=[]){return xd(e,this,i,n),i.sort(jm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xd(e[r],this,i,n);return i.sort(jm),i}}function jm(t,e){return t.distance-e.distance}function xd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)xd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const Lr=72,Ur=56;function cs(t,e,n){return new z(t-Lr,n,e-Ur)}const mt={scene:null,groupReg:{},pickables:[],wallsFade:[],flows:[],floorMeshes:{b1:[],f1:[],f2:[],roof:[]},slabs:[],currentFloor:null};function WT(t){mt.scene=t,mt.groupReg={},mt.pickables=[],mt.wallsFade=[],mt.flows=[],mt.floorMeshes={b1:[],f1:[],f2:[],roof:[]},mt.slabs=[],mt.currentFloor=null}function Vn(t){mt.currentFloor=t}function $n(t){mt.currentFloor&&mt.floorMeshes[mt.currentFloor]&&(t.userData.floor=mt.currentFloor,mt.floorMeshes[mt.currentFloor].push(t))}function Ym(t){$n(t)}function Ne(t,e){if(t&&mt.groupReg[t])return mt.groupReg[t];const n=new Ho;return n.userData={term:t||null,cat:e||null},mt.scene.add(n),t&&(mt.groupReg[t]=n),n}function XT(t){const e=new We(t);return e.multiplyScalar(.86),e}function yn(t,e){const n=new B_({color:new We(t)});return e!==void 0&&(n.transparent=!0,n.opacity=e),n.userData={baseOp:e===void 0?1:e},n}function z_(t,e,n,i){const r=new O_(new Ph(e),new Rh({color:XT(i),transparent:!0,opacity:.55}));return r.material.userData={baseOp:.55},r.position.copy(n.position),r.rotation.copy(n.rotation),r.userData.isEdge=!0,t.add(r),$n(r),r}function X(t,e,n,i,r,s,o,a,l){l=l||{};const c=new wi(r,o,s),f=new xt(c,yn(a,l.op));return f.position.set(e+r/2-Lr,i+o/2,n+s/2-Ur),l.ry&&(f.rotation.y=l.ry),t.add(f),mt.pickables.push(f),$n(f),l.noedge||z_(t,c,f,l.edge||a),f}function Be(t,e,n,i,r,s,o,a){const l=new Pc({color:new We(o),side:oi,transparent:a!==void 0,opacity:a===void 0?1:a});l.userData={baseOp:a===void 0?1:a};const c=new xt(new xo(r,s),l);return c.rotation.x=-Math.PI/2,c.position.set(e+r/2-Lr,i,n+s/2-Ur),c.userData.floorTop=!0,t.add(c),$n(c),c}function jT(t,e,n,i,r,s,o){const a=new Wi({uniforms:{uColor:{value:new We(o)},uAspect:{value:r/s}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uAspect;varying vec2 vUv;void main(){vec2 p=(vUv-0.5)*vec2(uAspect,1.0);float radius=0.045;vec2 q=abs(p)-(vec2(uAspect*0.5,0.5)-vec2(radius));float sd=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;float inset=max(0.0,-sd);float edgeFade=smoothstep(0.0,0.10,inset);gl_FragColor=vec4(uColor,edgeFade*0.54);}",transparent:!0,depthWrite:!1,side:oi});a.userData={baseOp:1};const l=new xt(new xo(r,s),a);return l.rotation.x=-Math.PI/2,l.position.set(e+r/2-Lr,i,n+s/2-Ur),l.renderOrder=-10,l.userData.floorTop=!0,l.userData.groundSurface=!0,t.add(l),l}function vt(t,e,n,i,r,s,o,a){a=a||{};const l=new wr(a.rTop!==void 0?a.rTop:r,r,s,a.seg||18),c=new xt(l,yn(o,a.op));return c.position.set(e-Lr,i+s/2,n-Ur),t.add(c),mt.pickables.push(c),$n(c),c}function li(t,e,n,i,r,s){s=s||{};const o=cs(e[0],e[1],e[2]),a=cs(n[0],n[1],n[2]),l=new z().subVectors(a,o),c=l.length(),f=new wr(i,i,c,s.seg||10),d=new xt(f,yn(r,s.op));return d.position.copy(o).add(a).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new z(0,1,0),l.normalize()),t.add(d),s.pick!==!1&&mt.pickables.push(d),$n(d),d}function YT(t){const e=(t||"").toUpperCase();return e==="#E2793B"||e==="#EF9D76"?"heat":e==="#0FA396"||e==="#57C7BD"?"tcs":e==="#EBB410"||e==="#D9A312"||e==="#F0C744"?"power":e==="#9CC6E4"?"condensate":e==="#3E9CD6"||e==="#42AEE8"?"chilled":null}function qT(t){return t==="condensate"?["#8FC8E8","#BCE0F2"]:t==="chilled"?["#5FB1E8","#93D2F2"]:t==="tcs"?["#57C7BD","#F0A876"]:t==="heat"?["#F5A86B","#E8875C"]:null}function qm(t){const e={h:0,s:0,l:0};return t.getHSL(e),t.setHSL(e.h,Math.min(1,e.s*1.08+.02),Math.max(.3,e.l*.96)),t}function $T(t,e,n,i,r){const s=t.geometry.attributes.position,o=s.count,a=new Float32Array(o*3);t.geometry.computeBoundingBox();const l=t.geometry.boundingBox.min.y,c=t.geometry.boundingBox.max.y,f=Math.max(.001,c-l),d=new We(e),h=new We(n),p=new We;for(let _=0;_<o;_++){const y=(s.getY(_)-l)/f,m=i+(r-i)*y;p.copy(d).lerp(h,Math.max(0,Math.min(1,m))),a[_*3]=p.r,a[_*3+1]=p.g,a[_*3+2]=p.b}t.geometry.setAttribute("color",new di(a,3)),t.material.vertexColors=!0,t.material.color.set(16777215),t.material.userData.flowGradient=!0,t.material.needsUpdate=!0}function Pt(t,e,n,i,r){i=i||.32;const s=[],o=[],a=YT(n);for(let p=0;p<e.length;p++)s.push(cs(e[p][0],e[p][1],e[p][2]));const l=qT(a),c=Math.max(1,e.length-1);for(let p=0;p<e.length-1;p++){const _=li(t,e[p],e[p+1],i,n,{seg:10});l?$T(_,l[0],l[1],p/c,(p+1)/c):a&&qm(_.material.color),_.userData.flowPart=!0,o.push(_)}for(let p=1;p<e.length-1;p++){const _=l?new We(l[0]).lerp(new We(l[1]),p/c):new We(n);a&&!l&&qm(_);const y=new xt(new ls(i*1.12,10,10),yn("#ffffff"));y.material.color.copy(_),y.position.copy(s[p]),y.userData.flowPart=!0,t.add(y),$n(y),o.push(y)}if(!a)return;const f=[0];let d=0;for(let p=1;p<s.length;p++)d+=s[p].distanceTo(s[p-1]),f.push(d);const h=[];if(r!==!1||a==="tcs"){const p=Math.max(4,Math.round(d/12)),_=[1,.62,.34,.14];for(let y=0;y<p;y++)for(let m=0;m<_.length;m++){const u=_[m],v=new B_({color:new We(n),emissive:new We(n),emissiveIntensity:.55,transparent:!0,opacity:u,depthWrite:!1,depthTest:!0});v.userData={baseOp:u,flowBaseColor:new We(n)};const g=Math.max(.2,i*(.92-m*.08)),S=new xt(new ls(g,10,10),v);S.renderOrder=30,S.userData.flowPart=!0,S.userData.flowParticle=!0,S.userData.flowU=y/p-m*.0085,t.add(S),$n(S),h.push(S)}}mt.flows.push({vs:s,lens:f,tot:d,dots:h,parts:o,key:a,off:Math.random(),enabled:!0})}function ir(t,e,n,i,r,s){vt(t,e,n,i,r+.2,.34,s||"#A39E90",{seg:20}),vt(t,e,n,i+.17,r*.92,.17,"#F3F4F6",{seg:20});const o=X(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});o.rotation.y=.5;const a=X(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});a.rotation.y=-1.05,vt(t,e,n,i+.28,.23,.31,"#66788C",{seg:10})}function hr(t,e,n,i,r,s){const o=[new xt(new wr(r+.17,r+.17,.31,20),yn("#7FA3C4")),new xt(new wr(r*.9,r*.9,.16,20),yn("#F2F6FA")),new xt(new wr(.21,.21,.37,10),yn("#5C7C9E")),new xt(new wi(r*1.65,.2,.34),yn("#5C7C9E")),new xt(new wi(r*1.65,.2,.34),yn("#5C7C9E"))];for(let a=0;a<o.length;a++){const l=o[a];l.rotation.x=Math.PI/2,l.position.copy(cs(e,n,i)),t.add(l),$n(l)}o[3].rotation.y=.6,o[4].rotation.y=-.9}function H_(t,e,n,i,r,s){s=s||"#9AA3AD",X(t,e-.34,n,i,.16,.16,r,s,{noedge:!0}),X(t,e+.18,n,i,.16,.16,r,s,{noedge:!0});for(let o=1;o<r/1.3;o++)X(t,e-.34,n,i+o*1.3,.68,.14,.14,s,{noedge:!0})}function Ge(t,e,n,i,r,s,o,a,l,c){const f=Ne(null,null),d=c||"#EDEFF2",h=new wi(i,s,r),p=new xt(h,yn(d,l?.45:.95));p.material.depthWrite=!l,p.position.set(t+i/2-Lr,n+s/2,e+r/2-Ur),f.add(p),$n(p);const _=l?"#DEE2E5":"#C5CBD0",y=new O_(new Ph(h),new Rh({color:new We(_),transparent:!0,opacity:l?.58:.78,depthTest:!0,depthWrite:!1}));return y.material.userData={baseOp:l?.58:.78},y.position.copy(p.position),y.userData.isEdge=!0,f.add(y),$n(y),l||mt.wallsFade.push({m:p,e:y,n:new z(o,0,a)}),p}function Bi(t,e,n,i,r,s,o,a,l,c){const f=c===void 0?.55:c,d=Ne(null,null),h=new wi(i,s,r),p=new xt(h,yn(a||"#D3D8DC",f));p.material.depthWrite=!1,p.position.set(t+i/2-Lr,n-s/2,e+r/2-Ur),d.add(p),$n(p);const _=z_(d,h,p,"#969EA6"),y=Be(d,t,e,n+.03,i,r,l||"#E8EAEC",Math.min(.6,f));return mt.slabs.push({m:p,e:_,top:y,zTop:n,floor:o,baseOp:f}),p}const ce={slab:"#EDEFF2",roof:"#EEF0F3",groundTop:"#F2F4F6",slabTop:"#F5F6F8",roofTop:"#F5F6F8",cream:"#F7F2E7",cream2:"#F0E8D6",rackBody:"#6B3B52",rackDoor:"#8A4E6C",tray:"#A9D98B",blue:"#A4C9F2",blueD:"#79A9E6",cdu:"#79C0F2",teal:"#8FD9CB",yel:"#FFD34D",yelD:"#F0B429",purp:"#C9BCF2",gray:"#DDE3E8",steel:"#CFD9E2",wood:"#D9B98F",rose:"#EFC0B4",zoneElec:"#FBE9B8",zoneMech:"#CFE2F5",zoneHall:"#DDE1F8",zoneCrah:"#F7DEEA",zoneOffice:"#F3EDDA",zoneMeet:"#D8F0EC",zoneCore:"#EAEDF0"},xe={x0:0,x1:105.3,y0:0,y1:38.6},we={x0:4.2,x1:63.9,y0:54,y1:104},Xn={f1:13.5,f2:27,roof:40.5},ze=8.7,At=13.5;function KT(t){return WT(t),ZT(),QT(),JT(),e2(),t2(),n2(),mt}function ZT(){Vn(null);const t="#E9E2D2",e=Ne(null,null);X(e,-14,-10,-1.2,152,126,1.2,ce.slab,{edge:"#969EA6"}),jT(e,-32,-26,-1.15,190,160,ce.groundTop),Be(e,-14,-10,.04,152,126,"#E2E5E9");function n(f,d,h,p,_,y){const m=Ge(f,d,-1,h,p,At+1,_,y,!1,t);m.userData.terrain=!0;const u=Be(e,f,d,At+.02,h,p,ce.slabTop);u.userData.terrain=!0}n(-14,-10,152,8.5,0,-1),n(-14,-1.5,12.5,41.6,-1,0),n(106.8,-1.5,31.2,41.6,1,0),n(-14,40.1,45,12.4,0,1),n(39,40.1,99,12.4,0,1),n(-14,52.5,3,53,-1,0),n(64.4,52.5,73.6,53,.7,.7),n(-14,105.5,152,10.5,0,1);const i=Ne(null,null);function r(f,d,h,p,_,y){Be(i,f-.3,d-.3,At+.05,h*p+.6,_+.6,y);for(let m=0;m<=h;m++)X(i,f+m*p-.06,d,At,.12,_,.08,"#FFFFFF",{noedge:!0});X(i,f,d+(_-.12),At,h*p,.12,.08,"#FFFFFF",{noedge:!0})}function s(f,d,h,p,_,y){Be(i,f-.3,d-.3,At+.05,_+.6,h*p+.6,y);for(let m=0;m<=h;m++)X(i,f,d+m*p-.06,At,_,.12,.08,"#FFFFFF",{noedge:!0});X(i,f+(_-.12),d,At,.12,h*p,.08,"#FFFFFF",{noedge:!0})}const o="#E4E6E9";s(-12,14,6,2.6,5,o),r(3,41.5,4,2.6,5,o),r(16.5,41.5,5,2.6,5,o),r(2,47.6,11,2.6,4.6,o),r(41,41.5,5,3.4,5,"#AFCBEA");for(let f=0;f<5;f++)X(e,42.2+f*3.4,43.6,At+.02,1,1,.09,"#3F6FB5",{noedge:!0});s(108.2,5,8,3,4.6,"#CDE8D2"),Be(i,114.5,.5,At+.04,21.5,37.6,"#E1E4E7");for(const f of[115.5,127]){for(let d=0;d<=14;d++)X(i,f,1.2+d*2.5,At,9.6,.12,.08,"#FFFFFF",{noedge:!0});X(i,f+4.75,1.2,At,.12,35,.08,"#FFFFFF",{noedge:!0})}Be(i,66,52.5,At+.05,10,63.5,"#DDE0E4"),Be(i,39.5,46.8,At+.05,99,5.2,"#DDE0E4");for(let f=0;f<6;f++)X(i,66.8+f*1.5,88,At,1,4.6,.09,"#FFFFFF",{noedge:!0});Be(i,64.4,70,At+.06,1.8,18,"#EFE9DC"),Be(i,76.5,56,At+.06,56,46,"#DCE8D8"),Be(i,80,62,At+.08,3,36,"#EFE9DC"),Be(i,80,76,At+.08,46,3,"#EFE9DC");function a(f,d,h){h=h||1,vt(i,f,d,At,.22*h,1.5*h,"#B99B72",{seg:8});const p=new xt(new ls(1.5*h,10,8),yn("#A8CFA0"));p.position.copy(cs(f,d,At+2.3*h)),i.add(p)}a(88,60),a(98,66,1.2),a(110,62),a(120,72,1.1),a(92,86,1.2),a(104,92),a(116,88,1.3),a(126,98),a(84,100,1.1),a(70,110),a(96,108,1.2),a(124,52),i.traverse(f=>{f.userData.siteDetail=!0}),Vn("b1");const l=Ne(null,null);function c(f,d,h,p,_,y){const m="#D8DCE0";X(l,f,d,0,.6,p,4.8,m,{noedge:!0}),X(l,f+h-.6,d,0,.6,p,4.8,m,{noedge:!0}),_&&X(l,f,d+p-.6,0,h,.6,4.8,m,{noedge:!0}),y&&X(l,f+h-.6,d,0,.6,p,4.8,m,{noedge:!0});const u=X(l,f,d,4.8,h,p,.5,"#E4E7EA",{op:.55});u.material.depthWrite=!1,Be(l,f,d,.1,h,p,"#D9DDE2")}c(32.5,xe.y1,5,we.y0-xe.y1,!1,!1),c(we.x1,58,12,4.5,!0,!0),Vn(null)}function QT(){Vn("b1"),function(){const e=Ne(null,null);Be(e,7,3,.08,41,24,ce.zoneElec),Be(e,48,3,.08,18,13,ce.zoneElec),Be(e,48,18,.08,12,10,ce.zoneElec),Be(e,70,3,.08,28,13,ce.zoneMech),Be(e,70,18,.08,28,15,ce.zoneMech),Be(e,0,0,.08,7,38.6,ce.zoneCore),Be(e,98.3,0,.08,7,38.6,ce.zoneCore)}(),Ge(xe.x0,xe.y0,0,xe.x1-xe.x0,1.1,ze,0,-1,!1),Ge(xe.x0,xe.y1-1.1,0,xe.x1-xe.x0,1.1,ze,0,1,!1),Ge(xe.x0,1.1,0,1.1,xe.y1-2.2,ze,-1,0,!1),Ge(xe.x1-1.1,1.1,0,1.1,xe.y1-2.2,ze,1,0,!1),Ge(7,1.1,0,.7,36.4,ze*.86,0,0,!0),Ge(98.3,1.1,0,.7,36.4,ze*.86,0,0,!0),Ge(47.2,1.1,0,.7,28,ze*.86,0,0,!0),Ge(66.5,1.1,0,.7,36.4,ze*.86,0,0,!0),Ge(48,16.2,0,18,.7,ze*.86,0,0,!0),Ge(70,16.2,0,28,.7,ze*.86,0,0,!0),function(){const e=Ne("switchgear","power");for(let n=0;n<3;n++){const i=5.5+n*7;for(let r=0;r<6;r++){const s=10+r*5.6;X(e,s,i,0,4.8,3.1,2.5,ce.yel),X(e,s+.4,i+2.95,.8,4,.28,1.4,"#FFEBAF"),X(e,s+.7,i+3.1,2,1.4,.2,.34,"#4A525C",{noedge:!0}),X(e,s+2.9,i+3.1,2,1.1,.2,.34,"#E86A44",{noedge:!0})}}}(),function(){const e=Ne("transformer","power");for(let n=0;n<3;n++){const i=49.5+n*5.6;X(e,i,5,0,4.4,5,3.2,ce.yel);for(let r=0;r<3;r++)X(e,i-.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0}),X(e,i+4.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0});for(let r=0;r<3;r++){vt(e,i+.9+r*1.3,7.5,3.2,.28,.9,"#EDE7D8");const s=new xt(new ls(.24,10,10),yn("#E0AC2E"));s.position.copy(cs(i+.9+r*1.3,7.5,4.3)),e.add(s),Ym(s)}X(e,i+.4,11.5,0,3.6,1.6,2.2,"#F2CE6A",{noedge:!0})}}(),function(){const e=Ne("battery","power");for(let n=0;n<2;n++)for(let i=0;i<2;i++){const r=49+n*5.6,s=19+i*4.6;X(e,r,s,0,4.8,3.4,2.3,ce.yel);for(let o=0;o<3;o++)X(e,r+.3,s+3.25,.35+o*.72,4.2,.24,.42,"#FFEBAF");X(e,r,s+3.25,2.35,4.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const e=Ne("chiller","cooling");function n(o,a){X(e,o,a,0,15,4.6,.8,ce.steel,{noedge:!0}),li(e,[o+.8,a+1.4,2.2],[o+14.2,a+1.4,2.2],1.15,ce.blue,{seg:16}),li(e,[o+.8,a+3.2,3.8],[o+14.2,a+3.2,3.8],1.15,ce.blueD,{seg:16}),vt(e,o+4.6,a+2.3,4.6,1.1,1.6,"#DCE6EF"),vt(e,o+9.5,a+2.3,4.6,1.1,1.6,"#DCE6EF"),Pt(e,[[o+4.6,a+2.3,5.7],[o+9.5,a+2.3,5.7]],"#AEC2D4",.3,!1),X(e,o+12.8,a+1,.8,1.6,.4,3.4,"#454E58")}n(71.5,4),n(71.5,10);const i=Ne("pumps","cooling");function r(o,a){X(i,o-1.1,a-1.1,0,2.2,2.2,.4,ce.steel,{noedge:!0}),vt(i,o,a,.4,.88,.95,"#9FBFDF"),vt(i,o,a,1.35,.68,1.75,"#DCE6EF"),vt(i,o,a,3.1,.76,.28,"#9FBFDF"),Pt(i,[[o,a,.7],[o-1.9,a,.7]],"#9FB6CC",.32,!1)}r(90,5),r(90,8.8),r(90,12.6);const s=Ne("water-treatment","cooling");X(s,94,10.5,0,3.4,3,4.2,ce.teal),X(s,94.4,13.4,2.6,1.5,.26,1.1,"#454E58"),vt(s,95,6.5,0,.65,2.3,"#BFE3DC"),vt(s,96.8,6.5,0,.65,2.3,"#BFE3DC"),Pt(s,[[94.8,10.5,3.4],[95,7.5,2.6]],"#72B6A8",.22,!1)}(),function(){const e=Ne("tes","cooling");function n(r,s){vt(e,r,s,0,3.4,6.8,"#E7EDF2",{seg:26});const o=new xt(new ls(3.4,26,12,0,Math.PI*2,0,Math.PI/2),yn("#DDE5EB"));o.position.copy(cs(r,s,6.8)),e.add(o),mt.pickables.push(o),Ym(o),vt(e,r,s,2.2,3.55,.28,"#C5D3DE",{seg:26}),vt(e,r,s,4.7,3.55,.28,"#C5D3DE",{seg:26}),H_(e,r+3.9,s,0,6.4)}n(76,25.5),n(88,25.5);const i=Ne(null,null);for(let r=0;r<8;r++)X(i,71+r*3.2,20,0,1.2,12,.5,"#C9D3DC",{noedge:!0})}(),function(){const e=Ne(null,null);Be(e,10,57,.08,30,40,ce.zoneElec),Be(e,we.x0,72,.08,5,14,ce.zoneMech),Be(e,40.5,60,.08,8,12,ce.zoneCore),Be(e,49,57,.08,14,18,"#D9DDE2"),Be(e,49,80,.08,14,16,"#D9DDE2"),Be(e,27,we.y1-1,.08,12,5,ce.zoneCore),Ge(we.x0,we.y0,0,we.x1-we.x0,1.1,ze,0,-1,!1),Ge(we.x0,we.y1-1.1,0,we.x1-we.x0,1.1,ze,0,1,!1),Ge(we.x0,we.y0+1.1,0,1.1,we.y1-we.y0-2.2,ze,-1,0,!1),Ge(we.x1-1.1,we.y0+1.1,0,1.1,we.y1-we.y0-2.2,ze,1,0,!1),Ge(40,we.y0+1.1,0,.7,44,ze*.86,0,0,!0),Ge(9.4,we.y0+1.1,0,.7,44,ze*.86,0,0,!0);const n=Ne("gis","power");for(let o=0;o<3;o++){const a=60+o*13;X(n,12,a,0,3.4,6.4,2.6,ce.gray),li(n,[16.5,a+1.6,1.9],[30,a+1.6,1.9],1.05,"#D6E0EA",{seg:14}),li(n,[16.5,a+4.8,1.9],[30,a+4.8,1.9],1.05,"#D6E0EA",{seg:14});for(let l=0;l<3;l++)vt(n,19+l*4,a+3.2,2.6,.75,1.7,"#CBD8E4",{seg:14}),vt(n,19+l*4,a+3.2,4.3,.34,1.1,"#EDE7D8");X(n,31,a+.9,0,2.4,4.6,1.7,"#C2CFDA",{noedge:!0})}const i=Ne("fuel","power");for(let o=0;o<2;o++){const a=75+o*5;X(i,5,a-1.1,0,2.2,2.2,.4,ce.steel,{noedge:!0}),vt(i,6.1,a,.4,.8,.9,"#E8C25A"),vt(i,6.1,a,1.3,.6,1.5,"#EBDEC0")}function r(o){Be(e,-9.5,o-1.5,.09,12.5,13,"#DFE3E7");for(let a=0;a<3;a++){const l=o+a*4;li(i,[-8.5,l,1.6],[1.5,l,1.6],1.35,"#EBDEC0",{seg:16}),X(i,-7.5,l-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),X(i,-.5,l-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),vt(i,-3.5,l,2.95,.28,.5,"#CFC2A4")}}r(58),r(88),Pt(i,[[-3,74,.8],[3,77,.8],[6.1,76.5,.8]],"#DCC998",.22,!1);const s=Ne(null,null);X(s,41.5,62,0,2.6,5.6,2.4,"#4A5560"),X(s,44.7,62,0,2.6,5.6,2.4,"#4A5560"),X(s,41.8,65.2,1.5,2,.22,.6,"#7FD8C8",{noedge:!0})}()}function JT(){Vn("f1"),Bi(xe.x0,xe.y0,Xn.f1,xe.x1-xe.x0,xe.y1-xe.y0,1,"f1"),Bi(43,we.y0,Xn.f1,we.x1-43,we.y1-we.y0,1,"f1"),Bi(31.5,xe.y1,Xn.f1,7,we.y0-xe.y1,1,"f1");const t=Xn.f1;(function(){const n=Ne(null,null);Be(n,7,0,t+.08,91.3,4.2,ce.zoneCrah),Be(n,12,6,t+.08,28,13,ce.zoneElec),Be(n,42,6,t+.08,16,13,ce.zoneElec),Be(n,60,6,t+.08,28,13,ce.zoneElec),Be(n,.6,5,t+.08,6.4,11,ce.zoneCore),Be(n,98.3,5,t+.08,6.4,11,ce.zoneCore),Be(n,20,23,t+.08,14,13,ce.zoneCore),Be(n,36,23,t+.08,12,10,ce.zoneCore),Be(n,62,23,t+.08,32,13,ce.zoneOffice),Be(n,47,70,t+.08,16,16,ce.zoneOffice),Be(n,47,62,t+.08,8,7,ce.zoneCore),Be(n,47,87,t+.08,13,8,ce.zoneOffice)})(),Ge(xe.x0,xe.y0,t,xe.x1-xe.x0,1.1,ze,0,-1,!1),Ge(xe.x0,xe.y1-1.1,t,xe.x1-xe.x0,1.1,ze,0,1,!1),Ge(xe.x0,1.1,t,1.1,xe.y1-2.2,ze,-1,0,!1),Ge(xe.x1-1.1,1.1,t,1.1,xe.y1-2.2,ze,1,0,!1),Ge(43,we.y0,t,we.x1-43,1.1,ze,0,-1,!1),Ge(43,we.y1-1.1,t,we.x1-43,1.1,ze,0,1,!1),Ge(43,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,ze,-1,0,!1),Ge(we.x1-1.1,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,ze,1,0,!1),Ge(32,xe.y1,t,.6,we.y0-xe.y1,ze*.7,0,0,!0),Ge(37.9,xe.y1,t,.6,we.y0-xe.y1,ze*.7,0,0,!0),Ge(7,4.4,t,91.3,.7,ze*.86,0,0,!0),Ge(10.8,4.9,t,.7,15,ze*.86,0,0,!0),Ge(41,4.9,t,.7,15,ze*.86,0,0,!0),Ge(58.8,4.9,t,.7,15,ze*.86,0,0,!0),Ge(12,20.8,t,82,.7,ze*.86,0,0,!0),function(){const n=Ne("crah","cooling");for(let i=0;i<8;i++){const r=10+i*11.4;X(n,r,.8,t,6.6,2.8,ze*.82,ce.blue),X(n,r+.3,.95,t+ze*.82,6,2.5,.55,"#8FA9C0"),hr(n,r+1.8,3.75,t+1.7,1.1),hr(n,r+4.8,3.75,t+1.7,1.1),hr(n,r+1.8,3.75,t+3.9,1.1),hr(n,r+4.8,3.75,t+3.9,1.1)}}(),function(){const n=Ne("ups","power");for(let i=0;i<4;i++){const r=14+i*6.4;X(n,r,7,t,5.4,3.1,2.6,ce.yel),X(n,r+.5,10,t+1.9,3.4,.26,.55,"#454E58"),X(n,r+.8,10.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0});for(let s=0;s<4;s++)X(n,r+.5,10.1,t+.4+s*.34,3.4,.16,.22,"#E8C25A",{noedge:!0})}for(let i=0;i<4;i++){const r=14+i*6.4;X(n,r,14.5,t,5.4,3.1,2.6,ce.yel),X(n,r+.4,17.45,t+.5,4.4,.26,1.5,"#FFEBAF")}}(),function(){const n=Ne("battery","power");for(let i=0;i<2;i++)for(let r=0;r<2;r++){const s=43.5+i*6.8,o=7.5+r*6.4;X(n,s,o,t,5.8,3.6,2.4,ce.yel);for(let a=0;a<3;a++)X(n,s+.35,o+3.45,t+.35+a*.75,5.1,.24,.44,"#FFEBAF");X(n,s,o+3.45,t+2.45,5.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const n=Ne("switchgear","power");for(let i=0;i<2;i++){const r=7.5+i*7;for(let s=0;s<5;s++){const o=61.5+s*5.3;X(n,o,r,t,4.6,3.1,2.5,ce.yel),X(n,o+.4,r+2.95,t+.8,3.8,.26,1.35,"#FFEBAF"),X(n,o+.6,r+3.1,t+1.95,1.3,.2,.33,"#4A525C",{noedge:!0})}}}(),function(){const n=Ne("mmr","it");for(let i=0;i<3;i++){X(n,1.6,6+i*3.4,t,4.2,2.6,2.5,ce.purp);for(let r=0;r<4;r++)X(n,1.75,8.45+i*3.4,t+.4+r*.5,3.9,.2,.3,"#DED8F7")}for(let i=0;i<2;i++){X(n,99.4,6.5+i*3.8,t,4.2,2.8,2.5,ce.purp);for(let r=0;r<3;r++)X(n,99.55,9.15+i*3.8,t+.45+r*.55,3.9,.2,.32,"#DED8F7")}}(),function(){const n=Ne("bms","mgmt");for(let r=0;r<3;r++){const s=X(n,66+r*7.4,24.2,t+1,6.6,.4,3.6,"#4A5560");s.rotation.y=(r-1)*.12,X(n,66.6+r*7.4,24.1,t+1.8,2.1,.22,1.4,r===0?"#7FD8C8":r===1?"#F2C94C":"#E8836A",{noedge:!0,ry:(r-1)*.12}),X(n,69.4+r*7.4,24.1,t+1.6,2.5,.22,1.9,"#8FB4D8",{noedge:!0,ry:(r-1)*.12})}const i=Ne(null,null);X(i,68,30,t+1.05,10,2.6,.4,ce.wood),X(i,69,30.6,t,.9,1.4,2.1,ce.wood,{noedge:!0}),X(i,76,30.6,t,.9,1.4,2.1,ce.wood,{noedge:!0}),X(i,70.4,30.4,t+1.5,1.7,.2,1.1,"#5E7A94"),X(i,73.2,30.4,t+1.5,1.7,.2,1.1,"#5E7A94")}(),function(){const n=Ne(null,null);X(n,22,26,t,2.8,2.2,.4,ce.wood,{noedge:!0}),X(n,22,26,t+.4,2.8,2.2,1.5,ce.cream2),X(n,26,25,t,2.5,2,2.4,ce.cream2),X(n,23,31,t,2.2,1.9,1.5,ce.cream2),X(n,50,73,t,7.4,2.4,1.1,ce.wood),X(n,50.5,79,t,4.6,1.8,.5,ce.rose),X(n,50.5,79,t+.5,4.6,.6,.65,ce.rose,{noedge:!0}),X(n,56.5,79,t,4.6,1.8,.5,ce.rose),X(n,56.5,79.6,t+.5,4.6,.6,.65,ce.rose,{noedge:!0}),X(n,50,89.5,t,7,2.6,1.05,ce.wood);for(let r=0;r<3;r++)X(n,50.6+r*2.2,88.4,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),X(n,50.6+r*2.2,92.5,t,.9,.9,1.1,"#8A93A0",{noedge:!0});const i=Ne("fuel","power");for(const r of[58,88])Be(n,-13.6,r-2,At+.06,2.9,4,"#DFE3E7"),vt(i,-12.2,r,At,1.05,2.8,"#EBDEC0",{seg:14}),vt(i,-12.2,r,At+2.8,1.1,.22,"#CFC2A4",{seg:14})}()}function e2(){Vn("f2"),Bi(xe.x0,xe.y0,Xn.f2,xe.x1-xe.x0,xe.y1-xe.y0,1,"f2"),Bi(we.x0,we.y0,Xn.f2,we.x1-we.x0,we.y1-we.y0,1,"f2"),Bi(31.5,xe.y1,Xn.f2,7,we.y0-xe.y1,1,"f2");const t=Xn.f2,e=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];(function(){const i=Ne(null,null);Be(i,7,0,t+.08,91.3,4.2,ce.zoneCrah),Be(i,10,5,t+.08,85,16.5,ce.zoneHall),Be(i,12,24,t+.08,21,10,ce.zoneElec),Be(i,34,24,t+.08,17,10,ce.zoneElec),Be(i,52,24,t+.08,7,10,ce.zoneCore),Be(i,60,24,t+.08,17,10,ce.zoneElec),Be(i,78,24,t+.08,16,10,ce.zoneElec),Be(i,.6,5,t+.08,6.4,11,ce.zoneCore),Be(i,98.3,5,t+.08,6.4,11,ce.zoneCore),Be(i,32,xe.y1+1,t+.08,6,13,ce.zoneCore),Be(i,9,57,t+.08,29,36,ce.zoneMech),Be(i,we.x0,55,t+.08,5,7,ce.zoneMech),Be(i,we.x0,90,t+.08,5,7,ce.zoneMech),Be(i,43,55,t+.08,20,12,ce.zoneOffice),Be(i,43,67,t+.08,20,21,ce.zoneOffice),Be(i,43,88,t+.08,20,14,ce.zoneMeet)})(),Ge(xe.x0,xe.y0,t,xe.x1-xe.x0,1.1,ze,0,-1,!1),Ge(xe.x0,xe.y1-1.1,t,xe.x1-xe.x0,1.1,ze,0,1,!1),Ge(xe.x0,1.1,t,1.1,xe.y1-2.2,ze,-1,0,!1),Ge(xe.x1-1.1,1.1,t,1.1,xe.y1-2.2,ze,1,0,!1),Ge(we.x0,we.y0,t,we.x1-we.x0,1.1,ze,0,-1,!1),Ge(we.x0,we.y1-1.1,t,we.x1-we.x0,1.1,ze,0,1,!1),Ge(we.x0,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,ze,-1,0,!1),Ge(we.x1-1.1,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,ze,1,0,!1),Ge(32,xe.y1,t,.6,we.y0-xe.y1,ze*.7,0,0,!0),Ge(37.9,xe.y1,t,.6,we.y0-xe.y1,ze*.7,0,0,!0),Ge(7,4.4,t,91.3,.7,ze*.86,0,0,!0),Ge(12,22.4,t,82,.7,ze*.86,0,0,!0),Ge(7,1.8,t,.7,35,ze*.86,0,0,!0),Ge(97.6,1.8,t,.7,35,ze*.86,0,0,!0),Ge(42.3,we.y0+1.1,t,.7,48,ze*.86,0,0,!0),function(){const i=Ne("crah","cooling");for(let r=0;r<10;r++){const s=8.6+r*9.1;X(i,s,.8,t,6.4,2.8,ze*.82,ce.blue),X(i,s+.3,.95,t+ze*.82,5.8,2.5,.55,"#8FA9C0"),hr(i,s+1.7,3.75,t+1.7,1.1),hr(i,s+4.7,3.75,t+1.7,1.1),hr(i,s+1.7,3.75,t+3.9,1.1),hr(i,s+4.7,3.75,t+3.9,1.1)}}(),function(){const i=Ne("gpu-rack","it");for(const o of e)for(const a of[-1,1]){const l=o+(a>0?.78:-1.93);for(let c=0;c<6;c++){const f=6+c*2.25;X(i,l,f,t,1.15,1.9,2.6,ce.rackBody),X(i,a>0?l-.06:l+1.15,f+.15,t+.2,.06,1.6,2.2,ce.rackDoor,{noedge:!0}),X(i,a>0?l-.04:l+1.17,f+1.55,t+2.42,.05,.16,.12,"#5FE3A8",{noedge:!0})}X(i,l+(a>0,.42),6,t+2.95,.3,6*2.25-.35,.1,ce.tray,{noedge:!0})}const r=Ne("storage","it");for(let o=0;o<4;o++){X(r,83+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,ce.purp);for(let a=0;a<4;a++)X(r,83.15+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.4+a*.55,2.3,.2,.3,"#DED8F7")}const s=Ne("network","it");for(let o=0;o<4;o++){X(s,90.5+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,ce.purp);for(let a=0;a<3;a++)X(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.35+a*.5,2.3,.2,.22,"#7A6CC9",{noedge:!0});X(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+2.15,2.3,.2,.36,"#DED8F7")}}(),function(){const i=Ne("containment","cooling");for(const r of e)X(i,r-.78,5.7,t+3.1,1.56,6*2.25+.4,.12,"#CFE4F0",{op:.28}),X(i,r-.78,5.6,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24}),X(i,r-.78,5.7+6*2.25+.3,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24})}(),function(){const i=Ne("cdu","cooling");for(let s=0;s<5;s++){const o=20+s*12;X(i,o,22.6,t,3,2.4,2.4,ce.cdu),X(i,o+.3,24.9,t+1.8,1.2,.2,.4,"#454E58"),li(i,[o+.8,25,t+.9],[o+.8,25.5,t+.9],.24,"#0FA396",{seg:10}),li(i,[o+1.8,25,t+.9],[o+1.8,25.5,t+.9],.24,"#E2793B",{seg:10})}const r=Ne("cold-plate","cooling");X(r,e[2]+.9,11,t+2.62,.5,.7,.5,"#0FA396")}(),function(){const i=Ne("ups","power");for(let a=0;a<3;a++){const l=14+a*6.2;X(i,l,25,t,5.2,3.1,2.6,ce.yel),X(i,l+.5,28,t+1.9,3.2,.26,.55,"#454E58"),X(i,l+.8,28.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0})}const r=Ne("battery","power");for(const a of[35.5,41.7,61.5,67.7]){X(r,a,25,t,5.2,3.4,2.3,ce.yel);for(let l=0;l<3;l++)X(r,a+.3,28.25,t+.35+l*.72,4.6,.24,.42,"#FFEBAF");X(r,a,28.25,t+2.35,5.2,.2,.2,"#E86A44",{noedge:!0})}const s=Ne("switchgear","power");for(let a=0;a<2;a++){const l=79+a*5.4;X(s,l,25,t,4.6,3.1,2.5,ce.yel),X(s,l+.4,27.95,t+.8,3.8,.26,1.35,"#FFEBAF")}const o=Ne("pdu","power");for(let a=0;a<2;a++){const l=89.5+a*4.4;X(o,l,25,t,3.6,3,2.5,ce.yel);for(let c=0;c<3;c++)X(o,l+.4,27.85,t+.5+c*.5,2.8,.18,.32,"#E8C25A",{noedge:!0});li(o,[l+1,27.9,t+2.2],[l+1,28.2,t+2.2],.5,"#FFEBAF",{seg:14})}}(),function(){const i=Ne("busway","power");for(const r of[8,16]){X(i,14,r-.55,t+5.1,66,1.1,1,ce.yel);for(const s of e)X(i,s-.7,r-.7,t+4.6,1.4,1.4,.6,ce.yelD),Pt(i,[[s,r,t+4.7],[s,r,t+3.1]],"#EBB410",.2,!1)}}(),function(){const i=Ne("fire-gas","mgmt");for(let r=0;r<6;r++){const s=33+r%3*1.5,o=42+Math.floor(r/3)*2.2;vt(i,s,o,t,.58,3.2,"#F7CE55"),vt(i,s,o,t+3.2,.24,.5,"#A39E90")}X(i,33,47.5,t,4,2.6,2.2,"#DDE3E8")}(),function(){const i=Ne("generator","power");function r(a,l){X(i,a,l,t,12,5.2,.9,"#CFC2A4",{noedge:!0}),X(i,a+.3,l+.2,t+.9,2.6,4.8,5.4,"#F5C542");for(let c=0;c<4;c++)X(i,a+.15,l+.6+c*1.05,t+1.6,.18,.7,4.2,"#D9A93C",{noedge:!0});X(i,a+3.2,l+.5,t+.9,5,4.2,4.2,ce.yel),li(i,[a+8.6,l+2.6,t+3],[a+11.4,l+2.6,t+3],1.5,"#F7CE55",{seg:16}),vt(i,a+11.4,l+2.6,t+3,.5,.24,"#E0AC2E"),li(i,[a+3.7,l+.9,t+5.8],[a+7.6,l+.9,t+5.8],.55,"#AFB6BD",{seg:12}),Pt(i,[[a+7.6,l+.9,t+5.8],[a+8.4,l+.9,t+5.8],[a+8.4,l+.9,t+7.2]],"#8E8B82",.3,!1),X(i,a+4.8,l+4.8,t+5.3,2,.24,1.2,"#454E58")}r(11,60),r(24,60),r(11,78),r(24,78);const s=Ne(null,null);for(let a=0;a<7;a++)X(s,9.3,57+a*5.4,t+1+a%2*.8,.3,4,3,"#C6CDD3",{noedge:!0});X(s,16,55.2,t,10,1.6,4.5,"#DDE3E8",{op:.85}),X(s,16,93.2,t,10,1.6,4.5,"#DDE3E8",{op:.85});const o=Ne("fuel","power");for(const a of[56,91])vt(o,6.6,a+2.5,t,1.6,4.4,"#EBDEC0",{seg:16}),vt(o,6.6,a+2.5,t+4.4,1.66,.3,"#DCC998",{seg:16}),Pt(o,[[6.6,a+2.5,t+1],[10.5,a+4,t+1]],"#DCC998",.2,!1)}(),function(){const i=Ne(null,null);X(i,46,58,t,8,2.2,1.05,ce.wood),X(i,47,58.4,t+1.1,1.6,.2,1,"#5E7A94"),X(i,50.5,58.4,t+1.1,1.6,.2,1,"#5E7A94"),X(i,47.5,61,t,1,1,1.1,"#8A93A0",{noedge:!0}),X(i,51,61,t,1,1,1.1,"#8A93A0",{noedge:!0});for(let r=0;r<3;r++)X(i,46,69+r*6.4,t,8,2.2,1.05,ce.wood),X(i,47,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),X(i,50.5,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),X(i,47.5,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0}),X(i,51,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0});Ge(43,87.6,t,20,.5,ze*.7,0,0,!0),Ge(53,88,t,.5,14,ze*.7,0,0,!0);for(const r of[45,55.5]){X(i,r,92,t,6.4,2.8,1.05,ce.wood);for(let s=0;s<3;s++)X(i,r+.5+s*2.1,90.8,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),X(i,r+.5+s*2.1,95.2,t,.9,.9,1.1,"#8A93A0",{noedge:!0})}}()}function t2(){Vn("roof"),Bi(xe.x0,xe.y0,Xn.roof,xe.x1-xe.x0,xe.y1-xe.y0,1,"roof",ce.roof,ce.roofTop,.8),Bi(we.x0,we.y0,Xn.roof,we.x1-we.x0,we.y1-we.y0,1,"roof",ce.roof,ce.roofTop,.62),Bi(31.5,xe.y1,Xn.roof,7,we.y0-xe.y1,1,"roof",ce.roof,ce.roofTop,.62);const t=Xn.roof;(function(){const n=Ne(null,null);X(n,xe.x0,xe.y0,t,xe.x1-xe.x0,.5,1.1,ce.roof,{noedge:!0}),X(n,xe.x0,xe.y1-.5,t,xe.x1-xe.x0,.5,1.1,ce.roof,{noedge:!0}),X(n,xe.x0,xe.y0,t,.5,xe.y1-xe.y0,1.1,ce.roof,{noedge:!0}),X(n,xe.x1-.5,xe.y0,t,.5,xe.y1-xe.y0,1.1,ce.roof,{noedge:!0})})(),function(){const n=Ne("cooling-tower","cooling");function i(r,s){X(n,r,s,t,10,8,1.4,"#EAE2D2"),X(n,r+.3,s+.3,t+1.4,9.4,7.4,4.2,ce.cream2);for(let o=0;o<4;o++)X(n,r+.6,s+7.5,t+1.8+o*.85,8.8,.22,.34,"#DCCFB4",{noedge:!0}),X(n,r+9.5,s+.6,t+1.8+o*.85,.22,6.8,.34,"#D4C7AC",{noedge:!0});X(n,r,s,t+5.6,10,8,.7,ce.cream),ir(n,r+2.7,s+2.4,t+6.3,1.4),ir(n,r+7.3,s+2.4,t+6.3,1.4),ir(n,r+2.7,s+5.7,t+6.3,1.4),ir(n,r+7.3,s+5.7,t+6.3,1.4),H_(n,r+10.3,s+4,t,6.2)}i(12,7),i(26,7),i(40,7)}(),function(){const n=Ne("dry-cooler","cooling");function i(r,s){X(n,r,s,t,7.4,1.5,.85,ce.steel,{noedge:!0});const o=X(n,r+.55,s+.4,t+.55,6.3,.4,3.7,"#F2D9B8");o.rotation.x=-.42;const a=X(n,r+.55,s+4.85,t+.55,6.3,.4,3.7,"#F2D9B8");a.rotation.x=.42,X(n,r+.3,s+.3,t+3.4,6.8,4.9,.42,ce.cream2),ir(n,r+2,s+2.7,t+3.85,1.2,"#B08A62"),ir(n,r+5.4,s+2.7,t+3.85,1.2,"#B08A62")}i(62,7),i(72,7),i(82,7)}(),function(){const n=Ne(null,null);X(n,62,22,t,7,5.4,2.6,ce.cream2),ir(n,65.5,24.7,t+2.6,1.4),X(n,74,22.5,t,6,4.6,2,ce.cream2);for(let i=0;i<3;i++)X(n,74.3,27,t+.4+i*.55,5.4,.2,.22,"#D4C7AC",{noedge:!0});for(const i of[62,80])X(n,16,i,t,4,4,1,ce.cream2),ir(n,18,i+2,t+1,1.3)}()}function n2(){Vn("b1"),function(){const e=Ne("gis","power");Pt(e,[[24,66,1.8],[35,58,1.8],[35,40,1.8],[35,24,2.2],[28,14,2.6]],"#EBB410",.34)}(),function(){const e=Ne("switchgear","power");Pt(e,[[26,14,2.6],[44,14,2.6],[51,10,3]],"#EBB410",.3,!1),Pt(e,[[56,10,3],[76,30,3],[101.5,30,3],[101.5,30,29.5],[93,27,29.5]],"#EBB410",.34),Pt(e,[[24,8,2.8],[3.6,8,2.8],[3.6,8,16.1],[15,8.5,16.1]],"#EBB410",.3)}(),function(){const e=Ne("fws","cooling");Pt(e,[[17,12,42.1],[17,33,42.1],[96,33,42.1],[96,33,3.6],[86,12,3.9]],"#9CC6E4",.42)}(),function(){const e=Ne("fws","cooling");Pt(e,[[80,6,2.4],[60,2.5,2.4],[9.5,2.5,2.4],[9.5,2.5,30.9],[94,2.5,30.9]],"#3E9CD6",.42),Vn("f1"),Pt(e,[[9.5,2.5,17.4],[94,2.5,17.4]],"#3E9CD6",.3);for(const n of[16,39,62,85])Pt(e,[[n,2.5,17.4],[n,2.5,15.7]],"#3E9CD6",.2,!1);Vn("f2");for(const n of[16,39,62,85])Pt(e,[[n,2.5,30.9],[n,2.5,29.2]],"#3E9CD6",.2,!1)}(),Vn("f2"),function(){const e=Ne("fws","cooling");Pt(e,[[21,25.6,29.7],[60,25.6,29.7],[96.5,25.6,29.7],[96.5,25.6,42.1],[96.5,9,42.1],[90,9,42.1]],"#E2793B",.42)}(),function(){const e=Ne("tcs","cooling"),n=Ne("manifold","cooling"),i=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];for(let r=0;r<5;r++){const s=21.5+r*12;Pt(e,[[s,22.6,29.4],[s,20.8,30.5]],"#0FA396",.26,!1)}Pt(e,[[16,20.8,30.5],[76.8,20.8,30.5]],"#0FA396",.28);for(const r of i)Pt(n,[[r,20.8,30.5],[r,6,30.5]],"#0FA396",.22,!1)}(),function(){const e=Ne("busway","power");Pt(e,[[80,24.5,29.8],[80,16,32.6],[16,16,32.6]],"#EBB410",.28),Pt(e,[[80,24.5,29.8],[80,8,32.6],[16,8,32.6]],"#EBB410",.28)}(),function(){const e=Ne("generator","power");Pt(e,[[23,60,33.6],[35,52,33.6],[35,40,33.6],[80,40,33.6],[101.5,33,33.6],[101.5,30,29.8]],"#EBB410",.3)}(),Vn(null)}const rr=[["cooling-tower",[31,11,47.7]],["dry-cooler",[75.5,9.5,45]],["crah",[50,2.2,32.6]],["gpu-rack",[24.4,12,30.4]],["containment",[46.4,12,30.4]],["cold-plate",[32.4,11.3,29.9]],["manifold",[23.6,8,30.7]],["tcs",[46,20.8,30.6]],["cdu",[45.5,23.8,29.4]],["busway",[47,8,32.7]],["pdu",[91.5,26.5,29.6]],["storage",[85.5,9,29.8]],["network",[93,9,29.8]],["mmr",[3.8,9,16.1]],["ups",[24,8.6,16.3]],["battery",[50,10.6,16.1]],["switchgear",[26,12,2.6]],["transformer",[55,7.5,3.4]],["gis",[22,73,3.2]],["fuel",[-3.5,62,3.6]],["generator",[17,82,32]],["fire-gas",[34.8,43,30.8]],["chiller",[79,6.3,2.6]],["pumps",[90,8.8,2.2]],["water-treatment",[95.7,12,4.4]],["tes",[82,25.5,7]],["fws",[9.5,2.5,21.5]],["bms",[77,25,17.3]]],i2=t=>t<12?"b1":t<25.5?"f1":t<39?"f2":"roof";function r2(t){if(t==="fws")return"all";const e=rr.find(n=>n[0]===t);return e?i2(e[1][2]):"all"}const ct=yy(t=>({filter:"all",setFilter:e=>t({filter:e}),floor:"all",setFloor:e=>t({floor:e}),flowState:{condensate:!0,chilled:!0,heat:!0,tcs:!0,power:!0},toggleFlow:e=>t(n=>({flowState:{...n.flowState,[e]:!n.flowState[e]}})),flowOn:!0,toggleFlowMaster:()=>t(e=>{const n=!e.flowOn,i={...e.flowState};return Object.keys(i).forEach(r=>i[r]=n),{flowOn:n,flowState:i}}),selected:null,setSelected:e=>t({selected:e}),focusId:null,focusTick:0,requestFocus:e=>t(n=>({selected:e,focusId:e,focusTick:n.focusTick+1,floor:r2(e)})),labelsOn:!0,toggleLabels:()=>t(e=>({labelsOn:!e.labelsOn})),resetTick:0,requestReset:()=>t(e=>({resetTick:e.resetTick+1,selected:null,floor:"all"})),query:"",setQuery:e=>t({query:e})})),s2=[["all","전체"],["cooling","냉각"],["power","전력"],["it","IT·컴퓨트"],["mgmt","감시·제어"]],o2=[["condensate","응축수 루프","#9CC6E4"],["chilled","냉수 (FWS·공랭용)","#3E9CD6"],["heat","고온수 (FWS·액랭용)","#E2793B"],["tcs","TCS (칩 냉각수)","#0FA396"],["power","전력 계통","#D9A312"]];function a2(){const t=ct(c=>c.filter),e=ct(c=>c.setFilter),n=ct(c=>c.flowState),i=ct(c=>c.toggleFlow),r=ct(c=>c.flowOn),s=ct(c=>c.toggleFlowMaster),o=ct(c=>c.labelsOn),a=ct(c=>c.toggleLabels),l=ct(c=>c.requestReset);return Le.jsxs("div",{className:"toolbar",children:[Le.jsx("div",{className:"filter-nav","aria-label":"계통 필터",children:s2.map(([c,f])=>Le.jsx("button",{className:`chip cat-${c}${t===c?" on":""}`,onClick:()=>e(c),children:f},c))}),Le.jsxs("div",{className:"flow-control","aria-label":"Flow 표시",children:[o2.map(([c,f,d])=>Le.jsx("button",{className:`flow-chip${n[c]?" on":""}`,style:{"--flow-color":d},"aria-pressed":n[c],onClick:()=>i(c),children:f},c)),Le.jsx("button",{className:`flow-master${r?" on":""}`,type:"button","aria-label":"모든 Flow 켜기 또는 끄기","aria-pressed":r,onClick:s}),Le.jsx("button",{className:`label-toggle${o?" on":""}`,type:"button","aria-label":"장비 라벨 켜기 또는 끄기","aria-pressed":o,onClick:a,children:"라벨"}),Le.jsx("button",{className:"reset-view",type:"button","aria-label":"3D 시점 초기화",onClick:l,children:Le.jsxs("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[Le.jsx("path",{d:"M30 20A10 10 0 1 1 27.1 12.9"}),Le.jsx("path",{d:"M27.1 7.9v5h-5"})]})})]})]})}const jr={cooling:{label:"냉각 계통",color:"#1111FF"},power:{label:"전력 계통",color:"#F3B81C"},it:{label:"IT · 컴퓨트",color:"#D936E7"},mgmt:{label:"감시 · 제어",color:"#30353C"}},l2={roof:"PH",f2:"2F",f1:"1F",b1:"B1"},ln={"cooling-tower":{cat:"cooling",name:"냉각탑",en:"Cooling Tower",short:"물의 증발잠열을 이용해 시설의 열을 대기로 최종 방출하는 옥외 열방출 설비.",desc:"순환수의 일부를 증발시켜 나머지 물의 온도를 낮추는 증발식 열방출 장치로, 주로 수랭식 칠러의 응축기 열을 제거한다. 외기 습구온도에 근접한 낮은 수온을 만들 수 있어 열방출 효율이 높지만, 증발·블로다운으로 물을 소비하기 때문에 WUE(물 사용 효율)와 수질 관리(레지오넬라, 스케일)가 핵심 운영 이슈다.",facts:["성능 기준: 외기 습구온도(Wet-bulb) 기준 접근온도","물 소비 발생 → WUE 관리 및 보충수(Make-up water) 필요","팬·충진재(Fill)·살수계통으로 구성, 겨울철 결빙 대책 필요"],rel:["chiller","dry-cooler","fws","water-treatment"]},"dry-cooler":{cat:"cooling",name:"드라이쿨러 · 유체냉각기",en:"Dry Cooler / Fluid Cooler",short:"물 소비 없이 공기-액체 열교환으로 고온수 루프의 열을 방출하는 설비.",desc:"밀폐 배관 내 냉각수를 핀 코일과 팬으로 직접 외기에 냉각하는 건식 열방출 장치. 액체냉각 서버는 37~40°C(99°F급)의 높은 공급수온을 허용하므로, 많은 기후대에서 냉동기 없이 드라이쿨러만으로 연중 열방출이 가능하다. 혹서기에는 코일 전면에 물을 분무하는 단열보조(Adiabatic Assist)로 성능을 확보한다.",facts:["고온수 루프(액랭용 FWS)의 주 열방출 수단","물 소비 최소화 → 저(低)WUE 설계에 유리","외기 약 32°C(90°F) 초과 시 단열분무 보조 가동"],rel:["cdu","fws","cooling-tower"]},chiller:{cat:"cooling",name:"칠러 (냉동기)",en:"Chiller",short:"냉동 사이클로 냉수를 생산해 공랭 구역과 저온 부하에 공급하는 설비.",desc:"압축기-응축기-팽창밸브-증발기로 이루어진 냉동 사이클로 냉수(예: 공급 23°C/73°F급)를 만들어 팬월·CRAH 등 공기냉각 계통에 공급한다. 외기가 충분히 낮을 때는 냉동기를 거치지 않고 외기로 직접 냉각하는 프리쿨링(Water-side Economizer) 운전으로 소비전력을 크게 줄일 수 있으며, 일반적으로 N+1 이상 이중화로 구성한다.",facts:["수랭식(냉각탑 연계) 또는 공랭식(일체형) 구분","프리쿨링(이코노마이저) 내장형이 AI DC 표준 추세","이중화: N+1 구성 + 축열조 연계 정전 대비"],rel:["cooling-tower","fws","crah","tes"]},pumps:{cat:"cooling",name:"순환 펌프",en:"FWS Circulation Pumps",short:"FWS 냉각수를 순환시키는 펌프. 듀티/스탠바이(N+1)로 이중화.",desc:"냉각수 계통의 유량과 차압을 유지하는 심장 역할의 설비로, 가변속(VFD) 제어로 부하에 따라 유량을 조절해 반송동력을 절감한다. 정전 시에도 서버 냉각수 흐름이 끊기면 수십 초 내 GPU가 과열되므로, 액체냉각 시설에서는 CDU와 함께 주요 펌프를 UPS 전원에 연결하는 것이 일반적이다.",facts:["가변속(VFD) 운전으로 에너지 절감","듀티/스탠바이 또는 N+1 이중화 구성","액랭 시설: 펌프·CDU를 UPS 전원으로 백업"],rel:["fws","cdu","ups","tes"]},tes:{cat:"cooling",name:"축열조",en:"Thermal Energy Storage Tank",short:"정전 시 칠러 재기동까지 약 5분간 냉각을 유지하는 냉수 저장 탱크.",desc:"냉각수를 대량 저장해 두었다가 정전·설비 고장 시 냉열원으로 사용하는 버퍼 탱크. 발전기가 기동되고 칠러가 재가동될 때까지의 공백(수 분)을 메우는 라이드스루(Ride-through) 기능이 핵심이며, AI 랙은 열밀도가 높아 이 몇 분의 공백도 치명적이기 때문에 액체냉각 시설의 필수 요소로 자리잡았다.",facts:["대표 설계치: 약 5분 내외 냉각 라이드스루","칠러·펌프 재기동 시간의 열적 버퍼 역할","UPS(전력 백업)의 냉각판 대응 개념"],rel:["chiller","pumps","ups","generator"]},"water-treatment":{cat:"cooling",name:"수처리 설비",en:"Water Treatment / Chemical Dosing",short:"냉각수의 pH·부식·미생물을 관리하는 약품주입 및 여과 설비.",desc:"냉각수 배관과 열교환기를 보호하기 위해 수질을 관리하는 설비. FWS는 pH 7~9 유지, 부식억제제 주입, 10μm급 여과가 기본이며, CDU로 들어가는 최종 급수에는 약 500μm 듀플렉스 스트레이너를 둔다. 서버에 직접 닿는 TCS는 훨씬 엄격한 기준(부식억제제+살균제, 낮은 전도도·경도)이 적용된다.",facts:["FWS 기준: pH 7~9, 부식억제제 필수 (ASHRAE 기준)","CDU 급수단 듀플렉스 스트레이너(~500μm)","TCS는 살균제 포함, 더 엄격한 고청정 수질 요구"],rel:["fws","tcs","cdu","cooling-tower"]},cdu:{cat:"cooling",name:"CDU",en:"Coolant Distribution Unit",short:"시설 냉각수(FWS)와 서버 냉각수(TCS)를 열교환기로 분리·중계하는 핵심 장치.",desc:"액체냉각 시스템의 관문 설비. 내부의 판형 열교환기가 시설수(FWS)와 서버측 냉각수(TCS)를 수리적으로 완전히 분리하고, 이중화 펌프·제어밸브·필터·센서로 TCS의 유량·온도·압력을 칩 요구조건에 맞게 정밀 제어한다. 랙 내장형(In-rack), 열(Row) 배치형, 대용량 실외/기계실형(Liquid-to-Liquid) 등으로 구분되며, 정전 대비를 위해 UPS 전원으로 백업한다.",facts:["구성: 판형 열교환기 + 듀티/스탠바이 펌프 + 필터 + 제어밸브","FWS와 TCS의 수질·압력을 격리 (누수 리스크 분리)","형태: In-rack / In-row / 시설형(MW급 Liquid-to-Liquid)"],rel:["tcs","fws","manifold","cold-plate","pumps"]},manifold:{cat:"cooling",name:"매니폴드",en:"Coolant Manifold",short:"TCS 냉각수를 랙 안의 각 서버로 분배·회수하는 분기 배관.",desc:"CDU에서 나온 냉각수를 랙 단위·서버 단위로 나누어 공급(Supply)하고 회수(Return)하는 분배 배관. 랙 후면 수직형 또는 상부 수평형으로 설치되며, 서버 착탈 시 냉각수가 새지 않도록 드립리스 퀵 디스커넥트(QD) 커플링으로 각 서버 콜드플레이트 회로와 연결된다.",facts:["공급/회수(Supply/Return) 한 쌍으로 구성","드립리스 퀵커넥터(QD)로 무누수 착탈","랙 후면 수직형·열 상부 수평형 배치"],rel:["cdu","cold-plate","tcs","gpu-rack"]},"cold-plate":{cat:"cooling",name:"콜드플레이트",en:"Cold Plate (Direct-to-Chip)",short:"GPU·CPU 등 고발열 칩 위에 직접 부착해 액체로 열을 흡수하는 금속 열교환 판.",desc:"미세 유로가 가공된 구리 판을 칩 패키지에 직접 밀착시켜, 내부를 흐르는 냉각수로 열을 흡수하는 Direct-to-Chip(D2C) 액체냉각의 핵심 부품. 공기 대비 물의 열용량이 압도적으로 커서 1,000W가 넘는 최신 GPU도 안정적으로 냉각할 수 있으며, 서버 팬 부하를 크게 줄여 컴퓨팅 전력의 10~15%를 절감하는 효과가 있다.",facts:["GPU·CPU 등 주요 열원에 직접 부착 (D2C 방식)","칩 발열의 대부분을 액체로 직접 회수","서버 팬 전력 절감 → 전체 효율 개선"],rel:["manifold","tcs","gpu-rack","cdu"]},tcs:{cat:"cooling",name:"TCS 루프",en:"Technology Cooling System",short:"CDU 2차측 — 서버 콜드플레이트에 직접 들어가는 고청정 냉각수 계통.",desc:"CDU에서 서버까지 이어지는 서버측 냉각수 루프. 칩에 직접 닿는 물이므로 PG25(프로필렌글리콜 25% + 처리수 75%) 같은 부식억제·동결방지 냉각액을 쓰고, 살균제 포함의 엄격한 수질 기준을 적용한다. 공급 온도는 칩 요구조건에 맞춰 CDU가 제어하며, 회수 온도는 공급보다 약 10~15°C 높아진다.",facts:["냉각액: PG25 등 (부식억제 + 동결방지)","수질: FWS보다 훨씬 엄격 (살균제, 저경도, 저부유물)","온도는 칩 사양 기준으로 CDU가 정밀 제어"],rel:["cdu","cold-plate","manifold","fws","water-treatment"]},fws:{cat:"cooling",name:"FWS 루프",en:"Facility Water System",short:"시설 측 1차 냉각수 계통 — 배관·펌프·밸브·열방출 설비 전체.",desc:"데이터센터 운영자가 관리하는 시설 냉각수 인프라로, CDU·팬월에 냉각수를 공급하고 냉각탑·드라이쿨러·칠러로 열을 배출한다. AI 시설은 보통 두 개의 온도 루프로 나뉜다: 팬월용 저온 냉수 루프(예: 23°C 공급)와 CDU용 고온수 루프(예: 37°C 공급). 고온수 운전이 가능할수록 냉동기 의존도가 줄어 효율이 크게 향상된다.",facts:["이중 루프 구조: 냉수(공랭용) + 고온수(액랭용)","고온수 운전 → 프리쿨링 극대화, PUE 개선","CDU를 경계로 TCS와 수리적으로 분리"],rel:["tcs","cdu","chiller","dry-cooler","cooling-tower","pumps"]},crah:{cat:"cooling",name:"팬월 · 항온항습실",en:"Fan Wall / CRAH Gallery",short:"냉수 코일과 팬으로 데이터홀 공기를 냉각하는 공조 설비. 도면의 항온항습실.",desc:"냉수 코일에 공기를 통과시켜 데이터홀 온도를 유지하는 공기냉각 설비. 벽면 일체형 대형 팬 어레이(팬월)가 최근 표준으로, 도면의 전산동 북측 항온항습실 갤러리에 일렬로 설치되어 전산실로 냉기를 공급한다. 액체냉각 시대에도 랙 발열의 약 10~20%(네트워크 장비, 전원부, 잔여 발열)는 여전히 공기로 배출되므로, 액랭 데이터홀에도 팬월은 반드시 병설된다.",facts:["냉수 코일 + EC팬 어레이 구성, N+1 이중화","액랭 랙에서도 잔여 공랭부하 처리 필수","냉수 대신 냉매를 쓰면 CRAC로 구분"],rel:["fws","containment","chiller"]},containment:{cat:"cooling",name:"열통로 격리",en:"Hot / Cold Aisle Containment",short:"서버의 열기와 냉기가 섞이지 않도록 통로를 물리적으로 분리하는 구조.",desc:"랙 열(Row)을 마주보게 배치하고 뜨거운 배기 통로(Hot Aisle) 또는 차가운 흡기 통로(Cold Aisle)를 패널·도어로 밀폐해 공기 혼합을 차단하는 기법. 공급 온도를 높게 유지할 수 있어 냉방 효율이 크게 개선되며, 공랭 구역 설계의 기본 전제다.",facts:["열기·냉기 혼합(Bypass/Recirculation) 차단","공조 공급온도 상향 → 프리쿨링 시간 확대","핫아일 격리형이 대세 (배기측 밀폐)"],rel:["crah","gpu-rack"]},gis:{cat:"power",name:"GIS (가스절연개폐장치)",en:"Gas-Insulated Switchgear",short:"특고압 수전 계통을 SF6 가스로 절연해 좁은 실내에 수용하는 개폐장치. 도면 공급동 GIS실.",desc:"한전 계통에서 인입된 특고압(22.9kV~154kV)을 차단기·단로기·모선과 함께 SF6 절연가스 탱크 안에 밀폐 수용한 수전 설비. 기중절연(AIS) 대비 설치 면적이 1/10 수준으로 작아 도면처럼 공급동 지하 GIS실에 배치할 수 있으며, 습기·먼지의 영향을 받지 않아 신뢰성이 높다. 여기서 받은 전력이 변압기를 거쳐 전기실 수배전반으로 공급된다.",facts:["특고압 수전의 관문 — 차단기·단로기·모선 일체형","SF6 절연으로 설치 면적 대폭 축소 (옥내화 가능)","후단: 변압기 → 수배전반 → UPS 순서로 급전"],rel:["transformer","switchgear","busway"]},transformer:{cat:"power",name:"변압기 · 수전설비",en:"Transformer / Utility Intake",short:"한전 계통의 특고압을 시설 배전 전압으로 낮추는 수전 설비.",desc:"전력회사 송배전 계통에서 받은 특고압(예: 22.9kV~154kV)을 시설에서 쓰는 저압(예: 380/415/480V)으로 강압하는 설비. AI 데이터센터는 캠퍼스 단위로 수백 MW를 수전하기도 하며, 변압기 용량과 계통 인입 여건이 부지 선정의 최우선 조건이 된다.",facts:["수전(인입) → 변압 → 수배전반으로 이어지는 관문","유입식(옥외)·몰드식(옥내) 구분","AI DC는 전력 인입 용량이 부지 선정의 핵심"],rel:["gis","switchgear","generator","busway"]},switchgear:{cat:"power",name:"수배전반 · 스위치기어",en:"Switchgear",short:"차단기와 보호계전기로 전력을 분배·차단·보호하는 배전반. 도면의 전기실.",desc:"변압기에서 받은 전력을 각 계통으로 분배하고, 고장 전류를 차단기로 신속히 차단해 설비와 인명을 보호하는 배전의 중추. 도면의 지하·지상 전기실-1/2에 열반(Line-up)으로 설치된다. 상용 전원과 비상발전기 사이의 절체(ATS)도 이 단계에서 이루어지며, 이중화 등급(N, N+1, 2N)에 따라 계통 구성이 달라진다.",facts:["차단기 + 보호계전기 + 계측으로 구성","상용/비상 전원 자동절체(ATS) 수행","이중화 토폴로지(N+1, 2N 등)의 골격"],rel:["transformer","generator","ups","busway"]},generator:{cat:"power",name:"비상 발전기",en:"Backup Generator",short:"정전 시 수십 초 내 기동해 시설 전체에 전력을 공급하는 비상 전원. 도면 공급동 비상발전기실.",desc:"상용 전원 상실 시 자동 기동해 데이터센터 전 부하를 담당하는 디젤(또는 가스) 발전기. 기동에서 정격 출력까지 수십 초가 걸리므로 그 공백은 UPS가 메운다. 도면처럼 공급동 발전기실에 병렬 설치되며, 급기(DA)·배기 덕트와 유류탱크실이 함께 배치된다. 현장 연료탱크로 통상 24~72시간 무보급 운전이 가능하도록 설계한다.",facts:["자동 기동 + 부하 인수: 수십 초 이내","연료 저장: 24~72시간 연속운전 기준","UPS(순간 공백)·축열조(냉각 공백)와 한 세트"],rel:["ups","switchgear","tes","battery","fuel"]},ups:{cat:"power",name:"UPS (무정전 전원장치)",en:"Uninterruptible Power Supply",short:"정전 순간부터 발전기 기동까지 끊김 없이 전력을 공급하는 장치.",desc:"배터리에 저장된 에너지를 인버터로 변환해, 정전 발생 순간부터 발전기가 부하를 인수할 때까지의 공백(수 초~수십 초)을 무순단으로 메우는 장치. 전압 강하·서지 같은 전력 품질 문제도 함께 걸러낸다. 액체냉각 시설에서는 IT 부하뿐 아니라 CDU·냉각 펌프까지 UPS로 백업하는 것이 표준이다.",facts:["백업 시간: 통상 수 분 (발전기 인수까지)","더블컨버전 방식이 데이터센터 표준","IT부하 + CDU·펌프까지 백업 (액랭 시설)"],rel:["battery","generator","pdu","cdu"]},battery:{cat:"power",name:"배터리 (축전지실)",en:"Battery / Energy Storage",short:"UPS의 에너지원. 리튬이온 전환으로 공간·수명이 크게 개선. 도면의 축전지실.",desc:"UPS가 사용하는 에너지 저장 장치로, 도면처럼 각 층 전기실 사이의 전용 축전지실에 설치된다. 기존 납축전지에서 리튬이온(LFP 등)으로 빠르게 전환되며 설치 면적과 수명, 충전 속도가 크게 개선되었다. 열폭주 위험 관리를 위한 소화·환기·이격 등 소방 규정이 함께 강화되고 있다.",facts:["리튬이온(LFP) 전환 추세 — 공간 50%↓ 수명 2배↑","수 분 단위 백업 용량으로 설계","열폭주 대비 소방·환기 요건 적용"],rel:["ups","generator","fire-gas"]},busway:{cat:"power",name:"버스웨이",en:"Busway / Busduct",short:"천장을 따라 설치되는 모선 배전 시스템 — 탭오프로 랙·PDU에 급전.",desc:"절연 하우징 안에 동/알루미늄 모선을 넣어 데이터홀 상부를 따라 배전하는 시스템. 원하는 위치에 탭오프 박스를 꽂아 PDU나 랙으로 전력을 내릴 수 있어, 케이블 트레이 방식보다 증설·재배치가 훨씬 유연하다. 랙당 100kW가 넘는 AI 시대에 대전류 배전 수단으로 채택이 급증했다.",facts:["상부 배전 + 플러그인 탭오프 구조","증설·랙 재배치에 유연 (케이블 대비)","대전류(수백~수천 A) 배전에 적합"],rel:["pdu","ups","switchgear","gpu-rack"]},pdu:{cat:"power",name:"PDU (분전반)",en:"Power Distribution Unit",short:"데이터홀 안에서 전력을 회로별로 나누고 차단·계측하는 분전 설비.",desc:"UPS/버스웨이에서 받은 전력을 랙 단위 회로로 분기하고, 회로별 차단기와 전력 계측 기능을 제공하는 데이터홀 내 분전 설비. 랙 안에 설치되어 서버에 직접 콘센트를 제공하는 랙 PDU(rPDU)와 구분된다. 회로별 실시간 계측은 용량 관리와 PUE 산출의 기초 데이터가 된다.",facts:["플로어형 PDU와 랙형 rPDU로 구분","회로별 차단 + 지능형 전력 계측","A/B 이중 전원 급전 구조의 말단"],rel:["busway","ups","gpu-rack","bms"]},fuel:{cat:"power",name:"유류 저장·이송 설비",en:"Fuel Storage & Transfer",short:"발전기 연료를 저장·이송하는 유류탱크실과 유류펌프실. 도면 공급동 서측.",desc:"비상발전기의 연속 운전을 담보하는 연료 인프라. 도면처럼 옥외 유류탱크(대용량 저장)와 발전기실 인접 유류탱크실(일일 서비스 탱크), 이송용 유류펌프실로 구성된다. 대용량 저장조에서 펌프로 각 발전기의 서비스 탱크로 연료를 이송하며, 누유 감지·방유제·소방 설비가 법적으로 요구된다.",facts:["옥외 저장탱크 + 서비스탱크 2단 구성","24~72시간 무보급 연속운전 용량 확보","누유 감지·방유제 등 위험물 안전 규정 적용"],rel:["generator","fire-gas"]},"gpu-rack":{cat:"it",name:"GPU 랙",en:"AI Compute Rack (e.g. NVL72)",short:"수십 개의 GPU를 하나로 묶은 AI 학습·추론용 초고밀도 랙.",desc:"AI 데이터센터의 핵심 부하. 예컨대 NVIDIA GB200/GB300 NVL72는 랙 하나에 72개 GPU와 36개 CPU를 NVLink로 묶어 단일 거대 가속기처럼 동작시키며, 랙당 전력이 120~140kW급에 달한다. 일반 랙(5~15kW)의 10배가 넘는 열밀도 때문에 Direct-to-Chip 액체냉각이 사실상 필수이고, 전력·냉각·바닥하중 설계 전체가 이 랙을 기준으로 결정된다.",facts:["랙당 전력: 120~140kW급 (일반 랙의 10배+)","랙 내 NVLink로 GPU 72개가 단일 도메인 구성","액체냉각(콜드플레이트) 필수 + 잔여 공랭 병행"],rel:["cold-plate","manifold","network","pdu","busway"]},network:{cat:"it",name:"네트워크 패브릭",en:"Network Fabric (InfiniBand / Ethernet)",short:"수천 개 GPU를 하나처럼 묶는 초고속 East-West 통신망.",desc:"AI 학습은 GPU 간 데이터 교환(East-West 트래픽)이 성능을 좌우하므로, 스파인-리프(Spine-Leaf) 구조의 무손실·저지연 패브릭을 별도로 구축한다. InfiniBand(NDR 400Gb/s급) 또는 RoCE 이더넷이 쓰이며, 컴퓨트/스토리지/관리망을 분리하고 GPU별로 스위치 경로를 최적화(rail-optimized)하는 것이 SuperPOD형 설계의 특징이다.",facts:["스파인-리프 토폴로지, 무손실·저지연 지향","InfiniBand NDR 400Gb/s급 또는 RoCE 이더넷","컴퓨트/스토리지/In-band 관리망 분리 구성"],rel:["gpu-rack","storage","mmr","bms"]},storage:{cat:"it",name:"고성능 스토리지",en:"High-Performance Storage",short:"학습 데이터와 체크포인트를 공급·저장하는 병렬 스토리지 시스템.",desc:"수천 개 GPU에 학습 데이터를 끊김 없이 공급하고, 학습 중간 상태(체크포인트)를 초고속으로 기록하는 스토리지 계층. 병렬 파일시스템(Lustre 계열 등)과 NVMe 올플래시가 표준이며, 전용 스토리지 패브릭으로 컴퓨트 트래픽과 분리한다. 체크포인트 쓰기 대역폭이 부족하면 GPU 전체가 대기하므로 성능 설계가 중요하다.",facts:["병렬 파일시스템 + NVMe 올플래시 구성","체크포인트 쓰기 성능이 핵심 지표","전용 스토리지 패브릭으로 트래픽 분리"],rel:["network","gpu-rack"]},mmr:{cat:"it",name:"MMR · MDF (통신실)",en:"Meet-Me Room / Main Distribution Frame",short:"통신사 회선이 인입·상호접속되는 통신 관문. 도면 1층 양측 MMR/MDF실.",desc:"외부 통신사업자의 광케이블이 건물로 인입되어 시설 내부망과 상호접속되는 공간. MDF(주배선반)는 외부 케이블과 내부 배선을 연결하는 분계점이고, MMR(Meet-Me Room)은 복수의 통신사·클라우드 사업자가 교차 연결(Cross-connect)되는 방이다. 도면처럼 동·서 양측에 이중화 배치해 단일 경로 장애를 방지하며, TPS 샤프트를 통해 각 층 전산실로 연결된다.",facts:["통신 인입의 이중화: 동·서 양측 분리 배치","MDF(분계점) → TPS(수직 샤프트) → 전산실 순서","복수 통신사 상호접속(Cross-connect) 지점"],rel:["network","storage"]},bms:{cat:"mgmt",name:"DCIM · BMS (상황실)",en:"DC Infrastructure Mgmt / Building Mgmt System",short:"전력·냉각·환경을 통합 감시하고 제어하는 시설 관제 시스템. 도면 1층 상황실.",desc:"변압기부터 랙까지의 전력 계통(EPMS), 냉각 설비, 온습도·누수 센서를 통합 감시·제어하는 시스템. 도면의 1층 상황실·스크린룸이 관제 거점이다. 냉각수 온도·유량 제어, 설비 기동 시퀀스, 경보 관리가 BMS의 영역이고, 용량 관리·자산 관리·PUE 분석은 DCIM이 담당한다. 액체냉각 도입으로 누수 감지와 CDU 연동 제어의 중요성이 크게 높아졌다.",facts:["EPMS(전력) + 냉각 제어 + 환경 감시 통합","누수 감지(Leak Detection)가 액랭 시대 필수 항목","PUE·용량·자산 관리는 DCIM 영역"],rel:["pdu","cdu","crah","network"]},"fire-gas":{cat:"mgmt",name:"가스계 소화설비",en:"Clean Agent Fire Suppression",short:"물 없이 불활성가스로 전산실 화재를 진압하는 소화 시스템. 도면의 소화가스실.",desc:"물을 쓸 수 없는 전산실·전기실을 보호하기 위해 불활성가스(IG-541 등)나 청정약제를 방출해 산소 농도를 낮춰 소화하는 설비. 도면의 소화가스실에 고압 실린더 뱅크가 설치되고, 각 보호구역까지 배관·노즐로 연결된다. 초기 연기를 감지하는 고감도 공기흡입형 감지기(VESDA)와 연동되며, 리튬이온 배터리실은 열폭주 특성 때문에 별도의 강화 기준이 적용된다.",facts:["불활성가스 방출로 산소 농도 저감 소화","고감도 흡입형 연기감지(VESDA) 연동","축전지실은 열폭주 대비 강화 기준 적용"],rel:["battery","bms"]}},Bu=["cooling","power","it","mgmt"];function c2(){const t=ct(u=>u.selected),e=ct(u=>u.requestFocus),n=ct(u=>u.query),i=ct(u=>u.setQuery),r=ct(u=>u.floor),s=ct(u=>u.setFloor),[o,a]=ri.useState({cooling:!0,power:!0,it:!0,mgmt:!0}),l=ri.useRef(null),[c,f]=ri.useState({top:!1,bottom:!1}),d=n.trim().toLowerCase();function h(u){return Object.keys(ln).filter(v=>{const g=ln[v];return!(g.cat!==u||d&&(g.name+g.en).toLowerCase().indexOf(d)===-1)})}function p(){const u=l.current;if(!u)return;const v=Math.max(0,u.scrollHeight-u.clientHeight);f({top:u.scrollTop>8,bottom:u.scrollTop<v-8})}ri.useEffect(()=>{p()},[n,t,o]),ri.useEffect(()=>{const u=l.current;if(u)return u.addEventListener("scroll",p,{passive:!0}),()=>u.removeEventListener("scroll",p)},[]);function _(u){if(u.key==="Enter")for(const v of Bu){const g=h(v);if(g.length){e(g[0]);return}}}const y=t?ln[t]:null,m=Bu.some(u=>h(u).length>0);return Le.jsxs("aside",{className:"learning-panel",children:[Le.jsxs("div",{className:"side-head",children:[Le.jsx("span",{className:"search-symbol","aria-hidden":"true",children:Le.jsxs("svg",{viewBox:"0 0 72 72",focusable:"false",children:[Le.jsx("circle",{cx:"30",cy:"30",r:"26"}),Le.jsx("path",{d:"M48.4 48.4L63.5 63.5"})]})}),Le.jsx("input",{className:"search",type:"text","aria-label":"장비와 용어 검색",placeholder:"검색",autoComplete:"off",spellCheck:"false",value:n,onChange:u=>i(u.target.value),onKeyDown:_}),Le.jsx("button",{className:`search-clear${n?" show":""}`,type:"button","aria-label":"검색어 지우기",onClick:()=>i(""),children:Le.jsxs("svg",{viewBox:"0 0 32 32",focusable:"false",children:[Le.jsx("path",{d:"M5 5L27 27"}),Le.jsx("path",{d:"M27 5L5 27"})]})})]}),Le.jsxs("div",{className:`side-body${t?" has-selection":""}`,ref:l,children:[y&&Le.jsxs("div",{className:"detail show",style:{"--cat":jr[y.cat].color},children:[Le.jsxs("div",{className:"d-title-block",children:[Le.jsx("div",{className:"d-name",children:y.name}),Le.jsx("div",{className:"d-en",children:y.en})]}),Le.jsx("div",{className:"d-desc",children:y.desc}),Le.jsx("div",{className:"d-facts",children:y.facts.map(u=>Le.jsx("div",{className:"f",children:u},u))}),Le.jsx("div",{className:"d-rel",children:y.rel.slice(0,3).filter(u=>ln[u]).map(u=>Le.jsx("button",{"data-cat":ln[u].cat,style:{"--tag-color":jr[ln[u].cat].color},onClick:()=>e(u),children:ln[u].name},u))})]}),Le.jsxs("div",{className:"list",children:[Bu.map(u=>{const v=h(u);if(!v.length)return null;const g=!d&&o[u];return Le.jsxs("div",{children:[Le.jsxs("div",{className:`group-lbl${g?" collapsed":""}`,onClick:()=>a(S=>({...S,[u]:!S[u]})),children:[Le.jsx("span",{className:"dot",style:{background:jr[u].color}}),jr[u].label]}),!g&&v.map(S=>Le.jsxs("div",{className:`term-item${t===S?" sel":""}`,style:{"--cat":jr[ln[S].cat].color},onClick:()=>e(S),children:[Le.jsx("span",{className:"tn",children:ln[S].name}),Le.jsx("span",{className:"te",children:ln[S].en})]},S))]},u)}),!m&&Le.jsx("div",{className:"empty",children:"일치하는 용어가 없습니다."})]})]}),Le.jsx("nav",{className:"floor-nav","aria-label":"층 선택",children:Object.entries(l2).map(([u,v],g)=>Le.jsxs(ri.Fragment,{children:[g>0&&Le.jsx("span",{className:"floor-sep","aria-hidden":"true"}),Le.jsx("button",{className:`floor-btn${r===u?" on":""}`,"aria-pressed":r===u,onClick:()=>s(r===u?"all":u),children:v})]},u))}),Le.jsx("div",{className:`scroll-edge scroll-edge-top${c.top?" visible":""}`}),Le.jsx("div",{className:`scroll-edge scroll-edge-bottom${c.bottom?" visible":""}`})]})}function u2(t,e,n){return new z(t-Lr,n,e-Ur)}const f2=t=>t<12?"b1":t<25.5?"f1":t<39?"f2":"roof";function d2(){const t=ri.useRef(null);return ri.useEffect(()=>{const e=t.current,n=e.querySelector("canvas"),i=e.querySelector(".leaders"),r=e.querySelector(".selected-leader"),s=e.querySelector(".labels"),o=e.querySelector(".tip3d"),a=new OT({canvas:n,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2.5)),a.setClearColor(16777215,1),a.outputColorSpace=ii;const l=new BT,c=new zn(33,1,1,4e3),f=new z(-22,6,-6),d={az:-.62,pol:1.02,dist:350},h={az:-.62,pol:1.02,dist:350,tx:-22,ty:10,tz:-6};function p(){const N=Math.sin(d.pol),L=Math.cos(d.pol);c.position.set(f.x+d.dist*N*Math.sin(d.az),f.y+d.dist*L,f.z+d.dist*N*Math.cos(d.az)),c.lookAt(f),te()}l.add(new zT(16777215,15330802,1.12));const _=new Wm(16777215,.42);_.position.set(120,180,80),l.add(_);const y=new Wm(16777215,.2);y.position.set(-100,80,-120),l.add(y),KT(l);const{groupReg:m,pickables:u,wallsFade:v,flows:g,slabs:S}=mt;(function(){const L=[];for(const V in m)m[V].traverse(k=>{if(!k.isMesh||!k.material||!k.material.color||k.userData.flowPart||k.userData.selectionOutline||L.indexOf(k.material)!==-1)return;L.push(k.material);const J={h:0,s:0,l:0};k.material.color.getHSL(J),J.s>.04&&(J.s=Math.min(1,J.s*1.12+.015)),k.material.color.setHSL(J.h,J.s,J.l)})})();const P=[],R={};for(let N=0;N<rr.length;N++){const L=rr[N][0],V=ln[L];R[L]=rr[N][1][2];const k=document.createElement("div");k.className="lbl",k.setAttribute("data-label-id",L),k.style.setProperty("--cat",jr[V.cat].color),k.innerHTML='<div class="lt">'+V.name+'</div><div class="le">'+V.en+"</div>",k.addEventListener("click",Z=>{Z.stopPropagation(),ee(),ct.getState().setSelected(L)}),k.addEventListener("mouseenter",Z=>$(L,Z)),k.addEventListener("mousemove",q),k.addEventListener("mouseleave",ee),s.appendChild(k);const J=document.createElementNS("http://www.w3.org/2000/svg","line");J.setAttribute("stroke","#929497"),J.setAttribute("stroke-width","1.6"),J.setAttribute("stroke-dasharray","0.1 7"),J.setAttribute("stroke-linecap","round"),J.setAttribute("stroke-opacity","0.88"),i.appendChild(J);const A=document.createElementNS("http://www.w3.org/2000/svg","circle");A.setAttribute("r","1.25"),A.setAttribute("fill","#929497"),A.setAttribute("stroke","#929497"),A.setAttribute("stroke-opacity","0.88"),i.appendChild(A),P.push({id:L,anchor:u2(rr[N][1][0],rr[N][1][1],rr[N][1][2]),div:k,line:J,dot:A,hidden:!1,sx:0,sy:0,floor:f2(rr[N][1][2])})}let T=!0,b=null;function te(){e.classList.add("labels-moving"),T=!0,b&&clearTimeout(b),b=setTimeout(()=>{e.classList.remove("labels-moving"),x(!0)},260)}function x(N){if(!ct.getState().labelsOn||e.classList.contains("labels-moving")||!N&&!T)return;T=!1;const L=e.clientWidth,V=e.clientHeight;if(!L||!V)return;const k=[],J=Math.max(104,Math.min(140,L*.105)),A=31;for(let H=0;H<P.length;H++){const W=P[H];if(W.hidden){W.div.classList.add("hid"),W.line.setAttribute("opacity","0"),W.dot.setAttribute("opacity","0");continue}const Q=W.anchor.clone().project(c);W.sx=(Q.x*.5+.5)*L,W.sy=(-Q.y*.5+.5)*V,W.div.classList.remove("hid"),W.div.style.width=J+"px",W.div.style.maxWidth=J+"px",k.push(W)}if(!k.length)return;const Z={l:Math.max(18,L*.018),r:L-Math.max(18,L*.018)-20,t:Math.max(16,V*.025)+50,b:V-56},F=Math.max(30,L*.022),B=Math.max(26,V*.038),he=Z.r-Z.l,Se=Math.max(4,Math.floor((he+F)/(J+F)));let Oe=Math.min(Se,Math.ceil(k.length*.34)),rt=Math.min(Se,Math.ceil(k.length*.34)),St=Math.max(0,k.length-Oe-rt),qe=Math.ceil(St/2),st=St-qe;const Nt=Math.max(qe,st),Ft=Z.b-Z.t-A*2-B*2;if(Nt>1&&Ft/(Nt-1)<A+B){const H=k.length-(Math.floor(Ft/(A+B))+1)*2;Oe=Math.min(Se,Math.ceil(H/2)),rt=Math.min(Se,H-Oe),St=Math.max(0,k.length-Oe-rt),qe=Math.ceil(St/2),st=St-qe}const et=[];function Yt(H,W,Q){if(!H)return;const ie=he-J;for(let pe=0;pe<H;pe++)et.push({x:Z.l+(H===1?ie/2:ie*pe/(H-1)),y:W,side:Q})}function tn(H,W,Q){if(!H)return;const ie=Z.t+A+B,pe=Z.b-A*2-B;for(let ge=0;ge<H;ge++)et.push({x:W,y:H===1?(ie+pe)/2:ie+(pe-ie)*ge/(H-1),side:Q})}Yt(Oe,Z.t,"top"),Yt(rt,Z.b-A,"bottom"),tn(qe,Z.l,"left"),tn(st,Z.r-J,"right"),function(){const W=Z.r-J,Q=Z.t,ie=Z.b-A,pe=Math.max(18,(J+F)/4),ge=Math.max(14,(A+B)/3);for(let Ie=Z.l;Ie<=W+.5;Ie+=pe)et.push({x:Math.min(Ie,W),y:Q,side:"top"}),et.push({x:Math.min(Ie,W),y:ie,side:"bottom"});et.push({x:W,y:Q,side:"top"}),et.push({x:W,y:ie,side:"bottom"});const _e=Z.t+A+B,Ue=Z.b-A*2-B;for(let Ie=_e;Ie<=Ue+.5;Ie+=ge)et.push({x:Z.l,y:Math.min(Ie,Ue),side:"left"}),et.push({x:Z.r-J,y:Math.min(Ie,Ue),side:"right"});et.push({x:Z.l,y:Ue,side:"left"}),et.push({x:Z.r-J,y:Ue,side:"right"})}();function mi(){const H=[],W=new as,Q=new z;return l.updateMatrixWorld(!0),c.updateMatrixWorld(!0),l.traverse(ie=>{if(!ie.isMesh||!ie.visible||ie.userData.groundSurface||ie.userData.selectionOutline||ie.userData.flowParticle||(W.setFromObject(ie),W.isEmpty()))return;let pe=1/0,ge=1/0,_e=-1/0,Ue=-1/0,Ie=!1;for(let ot=0;ot<2;ot++)for(let pt=0;pt<2;pt++)for(let Ve=0;Ve<2;Ve++){if(Q.set(ot?W.max.x:W.min.x,pt?W.max.y:W.min.y,Ve?W.max.z:W.min.z).project(c),!isFinite(Q.x)||!isFinite(Q.y))continue;const be=(Q.x*.5+.5)*L,Mt=(-Q.y*.5+.5)*V;Ie=!0,pe=Math.min(pe,be),_e=Math.max(_e,be),ge=Math.min(ge,Mt),Ue=Math.max(Ue,Mt)}!Ie||_e<0||pe>L||Ue<0||ge>V||H.push({l:pe-4,r:_e+4,t:ge-4,b:Ue+4})}),H}const ji=[L,V,c.position.x.toFixed(3),c.position.y.toFixed(3),c.position.z.toFixed(3),c.quaternion.x.toFixed(5),c.quaternion.y.toFixed(5),c.quaternion.z.toFixed(5),c.quaternion.w.toFixed(5)].join("|");let nn;x._key===ji&&x._rects?nn=x._rects:(nn=mi(),x._key=ji,x._rects=nn);function Ir(H){const W=H.x-3,Q=H.x+J+3,ie=H.y-3,pe=H.y+A+3;let ge=0,_e=0;for(let Ue=0;Ue<nn.length;Ue++){const Ie=nn[Ue],ot=Math.min(Q,Ie.r)-Math.max(W,Ie.l),pt=Math.min(pe,Ie.b)-Math.max(ie,Ie.t);ot>0&&pt>0&&(_e++,ge=Math.max(ge,ot*pt))}return ge?24e4+ge*45+Math.min(_e,8)*3500:0}for(let H=0;H<et.length;H++)et[H].modelPenalty=Ir(et[H]);function Kn(H,W,Q,ie){function pe(ge,_e,Ue){return(Ue.y-ge.y)*(_e.x-ge.x)>(_e.y-ge.y)*(Ue.x-ge.x)}return pe(H,Q,ie)!==pe(W,Q,ie)&&pe(H,W,Q)!==pe(H,W,ie)}function ds(H,W,Q){const ie={l:Q.x+5,r:Q.x+J,t:Q.y+1,b:Q.y+A-1};if(H.x>ie.l&&H.x<ie.r&&H.y>ie.t&&H.y<ie.b)return!0;const pe={x:ie.l,y:ie.t},ge={x:ie.r,y:ie.t},_e={x:ie.r,y:ie.b},Ue={x:ie.l,y:ie.b};return Kn(H,W,pe,ge)||Kn(H,W,ge,_e)||Kn(H,W,_e,Ue)||Kn(H,W,Ue,pe)}function gi(H,W){const Q={x:H.x,y:H.y},ie={x:H.x,y:H.y+A-2},pe={x:W.sx,y:W.sy},ge=(ds(pe,Q,H)?1e6:0)+Math.hypot(pe.x-Q.x,pe.y-Q.y),_e=(ds(pe,ie,H)?1e6:0)+Math.hypot(pe.x-ie.x,pe.y-ie.y);return ge<=_e?Q:ie}function Ta(H,W){return!(H.x+J+F<=W.x||W.x+J+F<=H.x||H.y+A+B<=W.y||W.y+A+B<=H.y)}const Yi=L/2,qi=V/2,E={},D=[];k.sort((H,W)=>Math.hypot(W.sx-Yi,W.sy-qi)-Math.hypot(H.sx-Yi,H.sy-qi));for(let H=0;H<k.length;H++){const W=k[H];let Q=-1,ie=1/0,pe=W.sx-Yi,ge=W.sy-qi;const _e=Math.max(1,Math.hypot(pe,ge));pe/=_e,ge/=_e;for(let Ue=0;Ue<2;Ue++){for(let Ie=0;Ie<et.length;Ie++){if(E[Ie])continue;let ot=!1;for(let Ot=0;Ot<D.length;Ot++)if(Ta(et[Ie],D[Ot].slot)){ot=!0;break}if(Ue===0&&ot)continue;const pt=gi(et[Ie],W);let Ve=pt.x-Yi,be=pt.y-qi;const Mt=Math.max(1,Math.hypot(Ve,be));Ve/=Mt,be/=Mt;let lt=Math.hypot(W.sx-pt.x,W.sy-pt.y)+(1-(pe*Ve+ge*be))*1100+(et[Ie].modelPenalty||0)+(ot?5e6:0);for(let Ot=0;Ot<D.length;Ot++)Kn({x:W.sx,y:W.sy},pt,{x:D[Ot].item.sx,y:D[Ot].item.sy},D[Ot].end)&&(lt+=1e5);lt<ie&&(ie=lt,Q=Ie)}if(Q>=0)break}Q<0||(E[Q]=!0,D.push({item:W,slot:et[Q],end:gi(et[Q],W)}))}function j(H){let W=0;for(let Q=0;Q<H.length;Q++){const ie=H[Q].item,pe=gi(H[Q].slot,ie),ge=ie.sx-Yi,_e=ie.sy-qi,Ue=Math.max(1,Math.hypot(ge,_e)),Ie=pe.x-Yi,ot=pe.y-qi,pt=Math.max(1,Math.hypot(Ie,ot));W+=Math.hypot(ie.sx-pe.x,ie.sy-pe.y)+(1-(ge/Ue*Ie/pt+_e/Ue*ot/pt))*700+(H[Q].slot.modelPenalty||0);for(let Ve=0;Ve<H.length;Ve++)Ve!==Q&&ds({x:ie.sx,y:ie.sy},pe,H[Ve].slot)&&(W+=45e3);for(let Ve=Q+1;Ve<H.length;Ve++){const be=H[Ve].item,Mt=gi(H[Ve].slot,be);Kn({x:ie.sx,y:ie.sy},pe,{x:be.sx,y:be.sy},Mt)&&(W+=14e4),Ta(H[Q].slot,H[Ve].slot)&&(W+=8e6)}}return W}let Y=j(D);for(let H=0;H<18;H++){let W=-1,Q=-1,ie=Y;for(let ge=0;ge<D.length-1;ge++)for(let _e=ge+1;_e<D.length;_e++){let Ue=D[ge].slot;D[ge].slot=D[_e].slot,D[_e].slot=Ue;const Ie=j(D);Ue=D[ge].slot,D[ge].slot=D[_e].slot,D[_e].slot=Ue,Ie<ie-.5&&(ie=Ie,W=ge,Q=_e)}if(W<0)break;const pe=D[W].slot;D[W].slot=D[Q].slot,D[Q].slot=pe,D[W].end=gi(D[W].slot,D[W].item),D[Q].end=gi(D[Q].slot,D[Q].item),Y=ie}const O=ct.getState().selected;for(let H=0;H<D.length;H++){const W=D[H],Q=W.item,ie=W.slot.x,pe=W.slot.y;Q.div.style.left=ie+"px",Q.div.style.top=pe+"px";const ge=gi(W.slot,Q),_e=ge.x,Ue=ge.y,Ie=Ae(Q,_e,Ue,L,V);Q.line.setAttribute("x1",Ie.x),Q.line.setAttribute("y1",Ie.y),Q.line.setAttribute("x2",_e),Q.line.setAttribute("y2",Ue),Q.dot.setAttribute("cx",Ie.x),Q.dot.setAttribute("cy",Ie.y),Q.line.setAttribute("opacity",Q.id===O?"1":O?".6":".78"),Q.dot.setAttribute("opacity",Q.id===O?"1":O?".6":".78")}}function w(){const N=e.clientWidth,L=e.clientHeight,V=ct.getState().selected;for(let k=0;k<P.length;k++){const J=P[k],A=parseFloat(J.line.getAttribute("x2")),Z=parseFloat(J.line.getAttribute("y2"));if(!isFinite(A)||!isFinite(Z))continue;const F=J.id===V?Ae(J,A,Z,N,L):{x:J.sx,y:J.sy};J.line.setAttribute("x1",F.x),J.line.setAttribute("y1",F.y),J.dot.setAttribute("cx",F.x),J.dot.setAttribute("cy",F.y)}}function $(N,L){const V=ln[N];V&&(o.style.setProperty("--tip-color",jr[V.cat].color),o.classList.toggle("power-tip",V.cat==="power"),o.innerHTML='<div class="t-name">'+V.name+'</div><div class="t-en">'+V.en+'</div><div class="t-short">'+V.short+"</div>",o.style.display="block",L&&q(L))}function q(N){const L=e.getBoundingClientRect(),V=N.clientX-L.left,k=N.clientY-L.top,J=14;let A=V+J,Z=k+J;const F=o.getBoundingClientRect();A+F.width>L.width-8&&(A=V-F.width-J),Z+F.height>L.height-8&&(Z=k-F.height-J),o.style.left=A+"px",o.style.top=Z+"px"}function ee(){o.style.display="none"}function ae(N,L){const V=m[N];V&&V.traverse(k=>{k.material&&L(k)})}let K=null;function ue(N){K!==N&&(K&&ae(K,L=>{L.material.emissive&&!L.userData.flowPart&&L.material.emissive.setHex(0)}),K=N,K&&ae(K,L=>{L.material.emissive&&!L.userData.flowPart&&L.material.emissive.setHex(2443119)}))}let I=[];function oe(){for(let N=0;N<I.length;N++){const L=I[N];L.material.color.copy(L.color),L.emissive&&L.material.emissive.copy(L.emissive),L.hadVC&&(L.material.vertexColors=!0,L.material.needsUpdate=!0)}I=[]}function le(N){oe();const L=m[N],V=new We("#d2d4d6");l.traverse(k=>{if(!k.material||!k.material.color||k.userData.selectionOutline)return;for(let A=k;A;A=A.parent)if(A===L)return;for(let A=0;A<I.length;A++)if(I[A].material===k.material)return;const J={material:k.material,color:k.material.color.clone()};k.material.emissive&&(J.emissive=k.material.emissive.clone()),k.material.vertexColors?(J.hadVC=!0,k.material.vertexColors=!1,k.material.needsUpdate=!0,k.material.color.set("#c4c7ca")):k.material.color.lerp(V,.78),k.material.emissive&&k.material.emissive.setHex(0),I.push(J)})}let ye=[];function ke(){for(let N=0;N<ye.length;N++){const L=ye[N];L.parent&&L.parent.remove(L),L.geometry&&L.geometry.dispose(),L.material&&L.material.dispose()}ye=[]}function it(N,L,V,k,J){const A=new z().subVectors(V,L),Z=A.length();if(Z<.01)return;const F=new xt(new wr(k,k,Z,6,1,!1),J.clone());F.position.copy(L).add(V).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new z(0,1,0),A.normalize()),F.userData.selectionOutline=!0,F.renderOrder=80,N.add(F),ye.push(F)}function ne(N){ke();const L=m[N];if(!L)return;const V=[];let k=0;const J=new z;L.traverse(F=>{if(!F.isMesh||!F.geometry||F.userData.flowPart||F.userData.selectionOutline||(F.geometry.computeBoundingBox(),!F.geometry.boundingBox))return;const B=F.geometry.boundingBox.getSize(J).length();k=Math.max(k,B),V.push({mesh:F,diag:B})});const A=Math.max(.06,Math.min(.13,k*.0065)),Z=new Pc({color:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let F=0;F<V.length;F++){const B=V[F].mesh,he=B.geometry.type||"";if(V[F].diag<k*.26||!/BoxGeometry|CylinderGeometry/.test(he))continue;const Se=new Ph(B.geometry,24),Oe=Se.attributes.position;for(let rt=0;rt<Oe.count;rt+=2)it(B,new z().fromBufferAttribute(Oe,rt),new z().fromBufferAttribute(Oe,rt+1),A,Z);Se.dispose()}Z.dispose()}function de(N){if(N.length<3)return N;N.sort((J,A)=>J.x===A.x?J.y-A.y:J.x-A.x);function L(J,A,Z){return(A.x-J.x)*(Z.y-J.y)-(A.y-J.y)*(Z.x-J.x)}const V=[],k=[];for(let J=0;J<N.length;J++){for(;V.length>=2&&L(V[V.length-2],V[V.length-1],N[J])<=0;)V.pop();V.push(N[J])}for(let J=N.length-1;J>=0;J--){for(;k.length>=2&&L(k[k.length-2],k[k.length-1],N[J])<=0;)k.pop();k.push(N[J])}return V.pop(),k.pop(),V.concat(k)}function Ae(N,L,V,k,J){const A=ct.getState().selected;if(N.id!==A||!m[N.id])return{x:N.sx,y:N.sy};const Z=[],F=m[N.id];F.updateMatrixWorld(!0),F.traverse(st=>{if(!st.isMesh||!st.geometry||st.userData.selectionOutline||st.userData.flowPart)return;st.geometry.computeBoundingBox();const Nt=st.geometry.boundingBox;if(!Nt)return;const Ft=Nt.min,et=Nt.max,Yt=[[Ft.x,Ft.y,Ft.z],[et.x,Ft.y,Ft.z],[Ft.x,et.y,Ft.z],[et.x,et.y,Ft.z],[Ft.x,Ft.y,et.z],[et.x,Ft.y,et.z],[Ft.x,et.y,et.z],[et.x,et.y,et.z]];for(let tn=0;tn<Yt.length;tn++){const mi=new z(Yt[tn][0],Yt[tn][1],Yt[tn][2]).applyMatrix4(st.matrixWorld).project(c);Z.push({x:(mi.x*.5+.5)*k,y:(-mi.y*.5+.5)*J})}});const B=de(Z);if(B.length<3)return{x:N.sx,y:N.sy};let he=0,Se=0;for(let st=0;st<B.length;st++)he+=B[st].x,Se+=B[st].y;he/=B.length,Se/=B.length;const Oe=L-he,rt=V-Se;let St=1/0,qe=null;for(let st=0;st<B.length;st++){const Nt=B[st],Ft=B[(st+1)%B.length],et=Ft.x-Nt.x,Yt=Ft.y-Nt.y,tn=Oe*Yt-rt*et;if(Math.abs(tn)<1e-4)continue;const mi=Nt.x-he,ji=Nt.y-Se,nn=(mi*Yt-ji*et)/tn,Ir=(mi*rt-ji*Oe)/tn;nn>0&&Ir>=0&&Ir<=1&&nn<St&&(St=nn,qe={x:he+Oe*nn,y:Se+rt*nn})}return qe||{x:N.sx,y:N.sy}}let Me=[];function Ye(){for(let N=0;N<Me.length;N++)Me[N].m.depthTest=Me[N].dt,Me[N].obj.renderOrder=Me[N].ro;Me=[]}function He(){const N=ct.getState().selected;for(let L=0;L<P.length;L++){const V=P[L];if(V.hidden){V.div.classList.remove("sel","dim"),V.line.setAttribute("opacity","0"),V.dot.setAttribute("opacity","0"),i.appendChild(V.line),i.appendChild(V.dot);continue}const k=V.id===N;V.div.classList.toggle("sel",k),V.div.classList.toggle("dim",!!N&&!k),V.line.setAttribute("stroke",k?"#000":"#929497"),V.line.setAttribute("stroke-width",k?"1.65":"1.6"),V.dot.setAttribute("fill",k?"#000":"#929497"),V.dot.setAttribute("r",k?"2.24":"1.25"),V.dot.setAttribute("stroke",k?"#000":"#929497"),V.dot.setAttribute("stroke-opacity",k?"1":".88"),V.line.setAttribute("stroke-opacity",k?"1":".88"),V.line.setAttribute("opacity",k?"1":N?".6":".78"),V.dot.setAttribute("opacity",k?"1":N?".6":".78"),(k?r:i).appendChild(V.line),(k?r:i).appendChild(V.dot)}}function tt(){const{filter:N,floor:L}=ct.getState();l.traverse(V=>{if(!V.material)return;const k=V.material.userData&&V.material.userData.baseOp!==void 0?V.material.userData.baseOp:1;let J=!1;for(let Z=V;Z;Z=Z.parent)if(Z.userData&&Z.userData.cat){J=N!=="all"&&Z.userData.cat!==N;break}const A=L!=="all"&&V.userData.floor&&V.userData.floor!==L||V.userData.siteDetail&&L!=="f1"&&L!=="all";V.userData._dimmed=J||!!A,V.userData._floorHidden=!!A,V.visible=!A,V.material.transparent=J||k<1,V.material.opacity=J?V.isLineSegments?.03:.06:k,V.userData.terrain&&V.userData.floorTop&&(V.material.transparent=!0,V.material.opacity=L==="b1"?.14:k)});for(let V=0;V<P.length;V++){const k=P[V],J=ln[k.id].cat;k.hidden=N!=="all"&&J!==N||L!=="all"&&k.floor!==L}T=!0,x(!0),He(),dt()}function dt(){const{flowState:N}=ct.getState();for(let L=0;L<g.length;L++){const V=!!N[g[L].key];g[L].enabled=V;for(let k=0;k<g[L].parts.length;k++){const J=g[L].parts[k],A=J.material;if(J.visible=!J.userData._floorHidden,A.userData||(A.userData={}),A.userData.flowBaseColor||(A.userData.flowBaseColor=A.color.clone()),A.color.copy(A.userData.flowBaseColor),V||A.color.lerp(new We("#c8cacc"),.74),J.userData._dimmed)continue;const Z=A.userData.baseOp===void 0?1:A.userData.baseOp;A.transparent=!V||Z<1,A.opacity=V?Z:Math.min(.58,Z*.58),A.needsUpdate=!0}for(let k=0;k<g[L].dots.length;k++)g[L].dots[k].visible=V&&!g[L].dots[k].userData._floorHidden}}let Qe=0;const U={x:0,y:0};let jt=!1;const $e=new GT,Je=new ft;let Fe=null;function _t(N){Fe=null,Qe=N.button===2?2:1,jt=!1,U.x=N.clientX,U.y=N.clientY}function je(N){if(!Qe){fe(N);return}const L=N.clientX-U.x,V=N.clientY-U.y;if(Math.abs(L)+Math.abs(V)>3&&(jt=!0),U.x=N.clientX,U.y=N.clientY,Qe===1)d.az-=L*.0052,d.pol=Math.max(.06,Math.min(1.54,d.pol-V*.0042));else{const k=d.dist*.0011,J=new z().subVectors(c.position,f).cross(new z(0,1,0)).normalize(),A=new z(0,1,0);f.add(J.multiplyScalar(L*k)).add(A.multiplyScalar(V*k))}p()}function C(){Qe=0}function M(N){N.preventDefault(),Fe=null;const L=Math.max(28,Math.min(560,d.dist*(N.deltaY>0?1.1:1/1.1))),V=L/d.dist,k=n.getBoundingClientRect();Je.x=(N.clientX-k.left)/k.width*2-1,Je.y=-((N.clientY-k.top)/k.height)*2+1,$e.setFromCamera(Je,c);let J=new z;const A=$e.intersectObjects(u,!1);A.length?J.copy(A[0].point):$e.ray.intersectPlane(new ar(new z(0,1,0),0),J)||(J=null),J&&f.lerp(J,1-V),d.dist=L,p()}function G(N){let L=N;for(;L;){if(L.userData&&L.userData.term)return L.userData.term;L=L.parent}return null}function re(N){const L=n.getBoundingClientRect();Je.x=(N.clientX-L.left)/L.width*2-1,Je.y=-((N.clientY-L.top)/L.height)*2+1,$e.setFromCamera(Je,c);const V=$e.intersectObjects(u,!1),{filter:k,floor:J}=ct.getState();for(let A=0;A<V.length;A++){const Z=V[A].object;if(Z.userData._dimmed)continue;const F=G(Z);if(F){if(k!=="all"&&ln[F]&&ln[F].cat!==k||J!=="all"&&Z.userData.floor&&Z.userData.floor!==J)continue;return F}}return null}function fe(N){if(N.target!==n){ue(null);return}const L=re(N);ue(L),L?($(L,N),n.style.cursor="pointer"):(ee(),n.style.cursor=Qe?"grabbing":"default")}function se(N){if(jt){jt=!1;return}const L=re(N);ct.getState().setSelected(L||null)}n.addEventListener("mousedown",_t),window.addEventListener("mousemove",je),window.addEventListener("mouseup",C),n.addEventListener("contextmenu",N=>N.preventDefault()),n.addEventListener("wheel",M,{passive:!1}),n.addEventListener("click",se);let Re={selected:null,filter:"all",floor:"all",flowState:ct.getState().flowState,resetTick:0,labelsOn:!0,focusTick:0};const Te=ct.subscribe(N=>{if(N.labelsOn!==Re.labelsOn&&(e.classList.toggle("labels-off",!N.labelsOn),N.labelsOn&&(T=!0,x(!0))),N.focusTick!==Re.focusTick&&N.focusId){const V=P.find(k=>k.id===N.focusId);if(V){let k=70;const J=m[N.focusId];if(J){const A=new as().setFromObject(J);if(!A.isEmpty()){const Z=A.getBoundingSphere(new wa);k=Kp.clamp(Z.radius*2.8,48,150)}}Fe={t:V.anchor.clone(),d:k,p:Kp.clamp(d.pol,.55,1.15)}}Re.focusTick=N.focusTick}if(N.resetTick!==Re.resetTick&&(Fe=null,d.az=h.az,d.pol=h.pol,d.dist=h.dist,f.set(h.tx,h.ty,h.tz),p()),(N.filter!==Re.filter||N.floor!==Re.floor)&&(tt(),N.selected&&N.filter!=="all"&&ln[N.selected].cat!==N.filter&&N.setSelected(null)),N.flowState!==Re.flowState&&(dt(),N.selected&&le(N.selected)),N.selected!==Re.selected)if(N.selected){He(),w();const V=N.selected;requestAnimationFrame(()=>{ct.getState().selected===V&&(le(V),Ye(),ne(V),w())})}else Ye(),ke(),oe(),He(),w();const L=ct.getState();Re={selected:L.selected,filter:L.filter,floor:L.floor,flowState:L.flowState,resetTick:L.resetTick,labelsOn:L.labelsOn,focusTick:L.focusTick}}),Ce=new z;let at=0;function ve(N){at=requestAnimationFrame(ve),Fe&&(f.lerp(Fe.t,.09),d.dist+=(Fe.d-d.dist)*.09,d.pol+=(Fe.p-d.pol)*.09,p(),f.distanceTo(Fe.t)<.4&&Math.abs(d.dist-Fe.d)<.8&&(Fe=null));const L=ct.getState().floor,V=L!=="all";Ce.subVectors(c.position,f),Ce.y=0,Ce.normalize();for(let F=0;F<v.length;F++){const B=v[F],he=B.m.userData._dimmed?.06:B.m.userData.terrain&&L==="b1"?.12:B.n.dot(Ce)>.18?.07:V?.26:.95;B.m.material.transparent=!0,B.m.material.opacity+=(he-B.m.material.opacity)*.18,B.e.material.opacity=B.m.material.opacity>.4?B.e.material.userData.baseOp:V&&!B.m.userData._dimmed?.3:0}const k=ct.getState().selected,J=k!=null&&R[k]!==void 0?R[k]:1/0,A=ct.getState().floor;for(let F=0;F<S.length;F++){const B=S[F];let he=B.baseOp;B.m.userData._dimmed?he=.06:A!=="all"&&B.floor===A?he=.97:J<B.zTop-1?he=.08:B.floor==="roof"&&d.pol<.62&&(he=.1),B.m.material.transparent=!0,B.m.material.opacity+=(he-B.m.material.opacity)*.15,B.e.material.transparent=!0,B.e.material.opacity=B.m.material.opacity>.4?1:0,B.top.material.opacity=Math.min(B.top.material.userData.baseOp,B.m.material.opacity)}const Z=(N||0)*1e-4;for(let F=0;F<g.length;F++){const B=g[F];if(B.enabled)for(let he=0;he<B.dots.length;he++){const Se=(Z+B.off+B.dots[he].userData.flowU+1)%1*B.tot;let Oe=1;for(;Oe<B.lens.length&&B.lens[Oe]<Se;)Oe++;const rt=B.vs[Oe-1],St=B.vs[Math.min(Oe,B.vs.length-1)],qe=(Se-B.lens[Oe-1])/Math.max(B.lens[Oe]-B.lens[Oe-1],.001);B.dots[he].position.lerpVectors(rt,St,Math.min(qe,1))}}x(),a.render(l,c)}function Pe(){const N=e.clientWidth,L=e.clientHeight;!N||!L||(a.setSize(N,L,!1),c.aspect=N/L,c.updateProjectionMatrix(),i.setAttribute("width",N),i.setAttribute("height",L),i.setAttribute("viewBox","0 0 "+N+" "+L),r.setAttribute("width",N),r.setAttribute("height",L),r.setAttribute("viewBox","0 0 "+N+" "+L),T=!0,te())}const Xe=new ResizeObserver(Pe);return Xe.observe(e),Pe(),p(),tt(),ve(0),window.__AIDC={ctx:mt,scene:l,useAppStore:ct,applyVisibility:tt},()=>{cancelAnimationFrame(at),Xe.disconnect(),Te(),window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",C),a.dispose(),s.innerHTML="",i.innerHTML="",r.innerHTML=""}},[]),Le.jsxs("div",{ref:t,className:"viewport3d",children:[Le.jsx("canvas",{className:"gl"}),Le.jsx("svg",{className:"leaders"}),Le.jsx("div",{className:"labels"}),Le.jsx("svg",{className:"selected-leader","aria-hidden":"true"}),Le.jsx("div",{className:"tip3d",role:"tooltip",style:{display:"none"}}),Le.jsx("div",{className:"scene-copyright",children:"© 2026 SUNJIN Engineering & Architecture. All rights reserved."})]})}function h2(){return Le.jsxs("div",{className:"app-shell",children:[Le.jsx(gy,{}),Le.jsxs("div",{className:"wrap",children:[Le.jsx(c2,{}),Le.jsxs("main",{className:"stage",children:[Le.jsx(a2,{}),Le.jsx(d2,{})]})]})]})}ku.createRoot(document.getElementById("root")).render(Le.jsx(No.StrictMode,{children:Le.jsx(h2,{})}));
