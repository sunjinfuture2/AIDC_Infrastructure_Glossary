(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function V_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},uc={},$m={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),G_=Symbol.for("react.portal"),W_=Symbol.for("react.fragment"),X_=Symbol.for("react.strict_mode"),j_=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),$_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),Z_=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),bh=Symbol.iterator;function J_(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Qm={};function uo(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=uo.prototype;function xd(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}var yd=xd.prototype=new Jm;yd.constructor=xd;Zm(yd,uo.prototype);yd.isPureReactComponent=!0;var Dh=Array.isArray,eg=Object.prototype.hasOwnProperty,Sd={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eg.call(e,i)&&!tg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:s,ref:o,props:r,_owner:Sd.current}}function ev(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function Uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tv(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case G_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uc(o,0):i,Dh(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(Md(r)&&(r=ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uc(s,a);o+=pl(s,e,n,l,r)}else if(l=J_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uc(s,a++),o+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function nv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},ml={transition:null},iv={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Sd};function ig(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=uo;ot.Fragment=W_;ot.Profiler=j_;ot.PureComponent=xd;ot.StrictMode=X_;ot.Suspense=K_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;ot.act=ig;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)eg.call(e,l)&&!tg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:q_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y_,_context:t},t.Consumer=t};ot.createElement=ng;ot.createFactory=function(t){var e=ng.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:$_,render:t}};ot.isValidElement=Md;ot.lazy=function(t){return{$$typeof:Q_,_payload:{_status:-1,_result:t},_init:nv}};ot.memo=function(t,e){return{$$typeof:Z_,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};ot.unstable_act=ig;ot.useCallback=function(t,e){return _n.current.useCallback(t,e)};ot.useContext=function(t){return _n.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};ot.useEffect=function(t,e){return _n.current.useEffect(t,e)};ot.useId=function(){return _n.current.useId()};ot.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return _n.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};ot.useRef=function(t){return _n.current.useRef(t)};ot.useState=function(t){return _n.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return _n.current.useTransition()};ot.version="18.3.1";$m.exports=ot;var _i=$m.exports;const Io=V_(_i);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=_i,sv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),av=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cv={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)av.call(e,i)&&!cv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sv,type:t,key:s,ref:o,props:r,_owner:lv.current}}uc.Fragment=ov;uc.jsx=rg;uc.jsxs=rg;qm.exports=uc;var be=qm.exports,Bu={},sg={exports:{}},Nn={},og={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,se){var re=U.length;U.push(se);e:for(;0<re;){var _e=re-1>>>1,Oe=U[_e];if(0<r(Oe,se))U[_e]=se,U[re]=Oe,re=_e;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var se=U[0],re=U.pop();if(re!==se){U[0]=re;e:for(var _e=0,Oe=U.length,et=Oe>>>1;_e<et;){var ee=2*(_e+1)-1,he=U[ee],Ae=ee+1,we=U[Ae];if(0>r(he,re))Ae<Oe&&0>r(we,he)?(U[_e]=we,U[Ae]=re,_e=Ae):(U[_e]=he,U[ee]=re,_e=ee);else if(Ae<Oe&&0>r(we,re))U[_e]=we,U[Ae]=re,_e=Ae;else break e}}return se}function r(U,se){var re=U.sortIndex-se.sortIndex;return re!==0?re:U.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var se=n(c);se!==null;){if(se.callback===null)i(c);else if(se.startTime<=U)i(c),se.sortIndex=se.expirationTime,e(l,se);else break;se=n(c)}}function M(U){if(v=!1,x(U),!_)if(n(l)!==null)_=!0,K(P);else{var se=n(c);se!==null&&ce(M,se.startTime-U)}}function P(U,se){_=!1,v&&(v=!1,u(b),b=-1),p=!0;var re=h;try{for(x(se),d=n(l);d!==null&&(!(d.expirationTime>se)||U&&!w());){var _e=d.callback;if(typeof _e=="function"){d.callback=null,h=d.priorityLevel;var Oe=_e(d.expirationTime<=se);se=t.unstable_now(),typeof Oe=="function"?d.callback=Oe:d===n(l)&&i(l),x(se)}else i(l);d=n(l)}if(d!==null)var et=!0;else{var ee=n(c);ee!==null&&ce(M,ee.startTime-se),et=!1}return et}finally{d=null,h=re,p=!1}}var R=!1,A=null,b=-1,Z=5,y=-1;function w(){return!(t.unstable_now()-y<Z)}function W(){if(A!==null){var U=t.unstable_now();y=U;var se=!0;try{se=A(!0,U)}finally{se?j():(R=!1,A=null)}}else R=!1}var j;if(typeof g=="function")j=function(){g(W)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ae=J.port2;J.port1.onmessage=W,j=function(){ae.postMessage(null)}}else j=function(){m(W,0)};function K(U){A=U,R||(R=!0,j())}function ce(U,se){b=m(function(){U(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(P))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var se=3;break;default:se=h}var re=h;h=se;try{return U()}finally{h=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,se){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=h;h=U;try{return se()}finally{h=re}},t.unstable_scheduleCallback=function(U,se,re){var _e=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?_e+re:_e):re=_e,U){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=re+Oe,U={id:f++,callback:se,priorityLevel:U,startTime:re,expirationTime:Oe,sortIndex:-1},re>_e?(U.sortIndex=re,e(c,U),n(l)===null&&U===n(c)&&(v?(u(b),b=-1):v=!0,ce(M,re-_e))):(U.sortIndex=Oe,e(l,U),_||p||(_=!0,K(P))),U},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(U){var se=h;return function(){var re=h;h=se;try{return U.apply(this,arguments)}finally{h=re}}}})(ag);og.exports=ag;var uv=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=_i,In=uv;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,Zo={};function as(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Ih={};function hv(t){return ku.call(Ih,t)?!0:ku.call(Uh,t)?!1:dv.test(t)?Ih[t]=!0:(Uh[t]=!0,!1)}function pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mv(t,e,n,i){if(e===null||typeof e>"u"||pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,wd);en[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,wd);en[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,wd);en[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mv(e,n,r,i)&&(n=null),i||r===null?hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),Nh=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Object.assign,Ic;function No(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Nc=!1;function Fc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function gv(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case zu:return"Profiler";case Ad:return"StrictMode";case Hu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function _v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vv(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=vv(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function Xu(t,e){pg(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Fo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function mg(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yv=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,ks=null,zs=null;function zh(t){if(t=xa(t)){if(typeof Qu!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=mc(e),Qu(t.stateNode,t.type,e))}}function yg(t){ks?zs?zs.push(t):zs=[t]:ks=t}function Sg(){if(ks){var t=ks,e=zs;if(zs=ks=null,zh(t),e)for(t=0;t<e.length;t++)zh(e[t])}}function Mg(t,e){return t(e)}function Eg(){}var Oc=!1;function wg(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Mg(t,e,n)}finally{Oc=!1,(ks!==null||zs!==null)&&(Eg(),Sg())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Ju=!1;if(zi)try{var So={};Object.defineProperty(So,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Ju=!1}function Sv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,Il=null,Nl=!1,ef=null,Mv={onError:function(t){Vo=!0,Il=t}};function Ev(t,e,n,i,r,s,o,a,l){Vo=!1,Il=null,Sv.apply(Mv,arguments)}function wv(t,e,n,i,r,s,o,a,l){if(Ev.apply(this,arguments),Vo){if(Vo){var c=Il;Vo=!1,Il=null}else throw Error(pe(198));Nl||(Nl=!0,ef=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(ls(t)!==t)throw Error(pe(188))}function Tv(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hh(r),t;if(s===i)return Hh(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Ag(t){return t=Tv(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Rg=In.unstable_scheduleCallback,Vh=In.unstable_cancelCallback,Av=In.unstable_shouldYield,Cv=In.unstable_requestPaint,Bt=In.unstable_now,Rv=In.unstable_getCurrentPriorityLevel,bd=In.unstable_ImmediatePriority,Pg=In.unstable_UserBlockingPriority,Fl=In.unstable_NormalPriority,Pv=In.unstable_LowPriority,bg=In.unstable_IdlePriority,fc=null,yi=null;function bv(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:Uv,Dv=Math.log,Lv=Math.LN2;function Uv(t){return t>>>=0,t===0?32:31-(Dv(t)/Lv|0)|0}var Pa=64,ba=4194304;function Oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Oo(a):(s&=o,s!==0&&(i=Oo(s)))}else o=n&~r,o!==0?i=Oo(o):s!==0&&(i=Oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function Iv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Iv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dg(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function Fv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var vt=0;function Lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ug,Ld,Ig,Ng,Fg,nf=!1,Da=[],dr=null,hr=null,pr=null,ea=new Map,ta=new Map,or=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bv(t,e,n,i,r){switch(e){case"focusin":return dr=Mo(dr,t,e,n,i,r),!0;case"dragenter":return hr=Mo(hr,t,e,n,i,r),!0;case"mouseover":return pr=Mo(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,Mo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,Mo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=jr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Tg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=xa(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Wh(t,e,n){gl(t)&&n.delete(e)}function kv(){nf=!1,dr!==null&&gl(dr)&&(dr=null),hr!==null&&gl(hr)&&(hr=null),pr!==null&&gl(pr)&&(pr=null),ea.forEach(Wh),ta.forEach(Wh)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,kv)))}function na(t){function e(r){return Eo(r,t)}if(0<Da.length){Eo(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&Eo(dr,t),hr!==null&&Eo(hr,t),pr!==null&&Eo(pr,t),ea.forEach(e),ta.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&or.shift()}var Hs=ji.ReactCurrentBatchConfig,Bl=!0;function zv(t,e,n,i){var r=vt,s=Hs.transition;Hs.transition=null;try{vt=1,Ud(t,e,n,i)}finally{vt=r,Hs.transition=s}}function Hv(t,e,n,i){var r=vt,s=Hs.transition;Hs.transition=null;try{vt=4,Ud(t,e,n,i)}finally{vt=r,Hs.transition=s}}function Ud(t,e,n,i){if(Bl){var r=rf(t,e,n,i);if(r===null)qc(t,e,i,kl,n),Gh(t,i);else if(Bv(r,t,e,n,i))i.stopPropagation();else if(Gh(t,i),e&4&&-1<Ov.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&Ug(s),s=rf(t,e,n,i),s===null&&qc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var kl=null;function rf(t,e,n,i){if(kl=null,t=Pd(i),t=jr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function Bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rv()){case bd:return 1;case Pg:return 4;case Fl:case Pv:return 16;case bg:return 536870912;default:return 16}default:return 16}}var cr=null,Id=null,_l=null;function kg(){if(_l)return _l;var t,e=Id,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Xh(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Xh,this.isPropagationStopped=Xh,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Fn(fo),va=Ut({},fo,{view:0,detail:0}),Vv=Fn(va),kc,zc,wo,dc=Ut({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(kc=t.screenX-wo.screenX,zc=t.screenY-wo.screenY):zc=kc=0,wo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),jh=Fn(dc),Gv=Ut({},dc,{dataTransfer:0}),Wv=Fn(Gv),Xv=Ut({},va,{relatedTarget:0}),Hc=Fn(Xv),jv=Ut({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Fn(jv),qv=Ut({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=Fn(qv),Kv=Ut({},fo,{data:0}),Yh=Fn(Kv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jv[t])?!!e[t]:!1}function Fd(){return ex}var tx=Ut({},va,{key:function(t){if(t.key){var e=Zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=Fn(tx),ix=Ut({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Fn(ix),rx=Ut({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),sx=Fn(rx),ox=Ut({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Fn(ox),lx=Ut({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Fn(lx),ux=[9,13,27,32],Od=zi&&"CompositionEvent"in window,Go=null;zi&&"documentMode"in document&&(Go=document.documentMode);var fx=zi&&"TextEvent"in window&&!Go,zg=zi&&(!Od||Go&&8<Go&&11>=Go),$h=" ",Kh=!1;function Hg(t,e){switch(t){case"keyup":return ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function dx(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(Kh=!0,$h);case"textInput":return t=e.data,t===$h&&Kh?null:t;default:return null}}function hx(t,e){if(Cs)return t==="compositionend"||!Od&&Hg(t,e)?(t=kg(),_l=Id=cr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!px[t.type]:e==="textarea"}function Gg(t,e,n,i){yg(i),e=zl(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,ia=null;function mx(t){e0(t,0)}function hc(t){var e=bs(t);if(hg(e))return t}function gx(t,e){if(t==="change")return e}var Wg=!1;if(zi){var Vc;if(zi){var Gc="oninput"in document;if(!Gc){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Gc=typeof Qh.oninput=="function"}Vc=Gc}else Vc=!1;Wg=Vc&&(!document.documentMode||9<document.documentMode)}function Jh(){Wo&&(Wo.detachEvent("onpropertychange",Xg),ia=Wo=null)}function Xg(t){if(t.propertyName==="value"&&hc(ia)){var e=[];Gg(e,ia,t,Pd(t)),wg(mx,e)}}function _x(t,e,n){t==="focusin"?(Jh(),Wo=e,ia=n,Wo.attachEvent("onpropertychange",Xg)):t==="focusout"&&Jh()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(ia)}function xx(t,e){if(t==="click")return hc(e)}function yx(t,e){if(t==="input"||t==="change")return hc(e)}function Sx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:Sx;function ra(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mx(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(i!==null&&Bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tp(n,s);var o=tp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=zi&&"documentMode"in document&&11>=document.documentMode,Rs=null,sf=null,Xo=null,of=!1;function np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Rs==null||Rs!==Ul(i)||(i=Rs,"selectionStart"in i&&Bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xo&&ra(Xo,i)||(Xo=i,i=zl(sf,"onSelect"),0<i.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Wc={},qg={};zi&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function pc(t){if(Wc[t])return Wc[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qg)return Wc[t]=e[n];return t}var $g=pc("animationend"),Kg=pc("animationiteration"),Zg=pc("animationstart"),Qg=pc("transitionend"),Jg=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Jg.set(t,e),as(e,[t])}for(var Xc=0;Xc<ip.length;Xc++){var jc=ip[Xc],wx=jc.toLowerCase(),Tx=jc[0].toUpperCase()+jc.slice(1);Ar(wx,"on"+Tx)}Ar($g,"onAnimationEnd");Ar(Kg,"onAnimationIteration");Ar(Zg,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Qg,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wv(i,e,void 0,t),t.currentTarget=null}function e0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rp(r,a,c),s=l}}}if(Nl)throw t=ef,Nl=!1,ef=null,t}function Et(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(t0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),t0(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Ia]){t[Ia]=!0,lg.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Yc("selectionchange",!1,e))}}function t0(t,e,n,i){switch(Bg(e)){case 1:var r=zv;break;case 4:r=Hv;break;default:r=Ud}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wg(function(){var c=s,f=Pd(n),d=[];e:{var h=Jg.get(t);if(h!==void 0){var p=Nd,_=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":p=nx;break;case"focusin":_="focus",p=Hc;break;case"focusout":_="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sx;break;case $g:case Kg:case Zg:p=Yv;break;case Qg:p=ax;break;case"scroll":p=Vv;break;case"wheel":p=cx;break;case"copy":case"cut":case"paste":p=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qh}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,x;g!==null;){x=g;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,u!==null&&(M=Jo(g,u),M!=null&&v.push(oa(g,M,x)))),m)break;g=g.return}0<v.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Zu&&(_=n.relatedTarget||n.fromElement)&&(jr(_)||_[Hi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?jr(_):null,_!==null&&(m=ls(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=jh,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=qh,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:bs(p),x=_==null?h:bs(_),h=new v(M,g+"leave",p,n,f),h.target=m,h.relatedTarget=x,M=null,jr(f)===c&&(v=new v(u,g+"enter",_,n,f),v.target=x,v.relatedTarget=m,M=v),m=M,p&&_)t:{for(v=p,u=_,g=0,x=v;x;x=cs(x))g++;for(x=0,M=u;M;M=cs(M))x++;for(;0<g-x;)v=cs(v),g--;for(;0<x-g;)u=cs(u),x--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=cs(v),u=cs(u)}v=null}else v=null;p!==null&&sp(d,h,p,v,!1),_!==null&&m!==null&&sp(d,m,_,v,!0)}}e:{if(h=c?bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=gx;else if(Zh(h))if(Wg)P=yx;else{P=vx;var R=_x}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=xx);if(P&&(P=P(t,c))){Gg(d,P,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(R=c?bs(c):window,t){case"focusin":(Zh(R)||R.contentEditable==="true")&&(Rs=R,sf=c,Xo=null);break;case"focusout":Xo=sf=Rs=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,np(d,n,f);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":np(d,n,f)}var A;if(Od)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Cs?Hg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(zg&&n.locale!=="ko"&&(Cs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Cs&&(A=kg()):(cr=f,Id="value"in cr?cr.value:cr.textContent,Cs=!0)),R=zl(c,b),0<R.length&&(b=new Yh(b,t,null,n,f),d.push({event:b,listeners:R}),A?b.data=A:(A=Vg(n),A!==null&&(b.data=A)))),(A=fx?dx(t,n):hx(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(f=new Yh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}e0(d,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function op(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(Rx,"")}function Na(t,e,n){if(e=op(e),op(t)!==e&&n)throw Error(pe(425))}function Hl(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(Dx)}:uf;function Dx(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),vi="__reactFiber$"+ho,aa="__reactProps$"+ho,Hi="__reactContainer$"+ho,ff="__reactEvents$"+ho,Lx="__reactListeners$"+ho,Ux="__reactHandles$"+ho;function jr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[vi])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[vi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function mc(t){return t[aa]||null}var df=[],Ds=-1;function Cr(t){return{current:t}}function Tt(t){0>Ds||(t.current=df[Ds],df[Ds]=null,Ds--)}function yt(t,e){Ds++,df[Ds]=t.current,t.current=e}var wr={},un=Cr(wr),Mn=Cr(!1),Jr=wr;function $s(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Vl(){Tt(Mn),Tt(un)}function cp(t,e,n){if(un.current!==wr)throw Error(pe(168));yt(un,e),yt(Mn,n)}function n0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,_v(t)||"Unknown",r));return Ut({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Jr=un.current,yt(un,t),yt(Mn,Mn.current),!0}function up(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=n0(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,Tt(Mn),Tt(un),yt(un,t)):Tt(Mn),yt(Mn,n)}var Ui=null,gc=!1,Kc=!1;function i0(t){Ui===null?Ui=[t]:Ui.push(t)}function Ix(t){gc=!0,i0(t)}function Rr(){if(!Kc&&Ui!==null){Kc=!0;var t=0,e=vt;try{var n=Ui;for(vt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,gc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),Rg(bd,Rr),r}finally{vt=e,Kc=!1}}return null}var Ls=[],Us=0,Wl=null,Xl=0,zn=[],Hn=0,es=null,Ii=1,Ni="";function zr(t,e){Ls[Us++]=Xl,Ls[Us++]=Wl,Wl=t,Xl=e}function r0(t,e,n){zn[Hn++]=Ii,zn[Hn++]=Ni,zn[Hn++]=es,es=t;var i=Ii;t=Ni;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-li(e)+r|n<<r|i,Ni=s+t}else Ii=1<<s|n<<r|i,Ni=t}function kd(t){t.return!==null&&(zr(t,1),r0(t,1,0))}function zd(t){for(;t===Wl;)Wl=Ls[--Us],Ls[Us]=null,Xl=Ls[--Us],Ls[Us]=null;for(;t===es;)es=zn[--Hn],zn[Hn]=null,Ni=zn[--Hn],zn[Hn]=null,Ii=zn[--Hn],zn[Hn]=null}var Un=null,Ln=null,Rt=!1,ri=null;function s0(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Ln=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Ii,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Ln=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(Rt){var e=Ln;if(e){var n=e;if(!fp(t,e)){if(hf(t))throw Error(pe(418));e=mr(n.nextSibling);var i=Un;e&&fp(t,e)?s0(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Un=t)}}else{if(hf(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Rt=!1,Un=t}}}function dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Fa(t){if(t!==Un)return!1;if(!Rt)return dp(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=Ln)){if(hf(t))throw o0(),Error(pe(418));for(;e;)s0(t,e),e=mr(e.nextSibling)}if(dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Un?mr(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=Ln;t;)t=mr(t.nextSibling)}function Ks(){Ln=Un=null,Rt=!1}function Hd(t){ri===null?ri=[t]:ri.push(t)}var Nx=ji.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hp(t){var e=t._init;return e(t._payload)}function a0(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=xr(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,M){return g===null||g.tag!==6?(g=iu(x,u.mode,M),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,M){var P=x.type;return P===As?f(u,g,x.props.children,M,x.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ir&&hp(P)===g.type)?(M=r(g,x.props),M.ref=To(u,g,x),M.return=u,M):(M=Tl(x.type,x.key,x.props,null,u.mode,M),M.ref=To(u,g,x),M.return=u,M)}function c(u,g,x,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=ru(x,u.mode,M),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function f(u,g,x,M,P){return g===null||g.tag!==7?(g=Qr(x,u.mode,M,P),g.return=u,g):(g=r(g,x),g.return=u,g)}function d(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=iu(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return x=Tl(g.type,g.key,g.props,null,u.mode,x),x.ref=To(u,null,g),x.return=u,x;case Ts:return g=ru(g,u.mode,x),g.return=u,g;case ir:var M=g._init;return d(u,M(g._payload),x)}if(Fo(g)||yo(g))return g=Qr(g,u.mode,x,null),g.return=u,g;Oa(u,g)}return null}function h(u,g,x,M){var P=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(u,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return x.key===P?l(u,g,x,M):null;case Ts:return x.key===P?c(u,g,x,M):null;case ir:return P=x._init,h(u,g,P(x._payload),M)}if(Fo(x)||yo(x))return P!==null?null:f(u,g,x,M,null);Oa(u,x)}return null}function p(u,g,x,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(x)||null,a(g,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Aa:return u=u.get(M.key===null?x:M.key)||null,l(g,u,M,P);case Ts:return u=u.get(M.key===null?x:M.key)||null,c(g,u,M,P);case ir:var R=M._init;return p(u,g,x,R(M._payload),P)}if(Fo(M)||yo(M))return u=u.get(x)||null,f(g,u,M,P,null);Oa(g,M)}return null}function _(u,g,x,M){for(var P=null,R=null,A=g,b=g=0,Z=null;A!==null&&b<x.length;b++){A.index>b?(Z=A,A=null):Z=A.sibling;var y=h(u,A,x[b],M);if(y===null){A===null&&(A=Z);break}t&&A&&y.alternate===null&&e(u,A),g=s(y,g,b),R===null?P=y:R.sibling=y,R=y,A=Z}if(b===x.length)return n(u,A),Rt&&zr(u,b),P;if(A===null){for(;b<x.length;b++)A=d(u,x[b],M),A!==null&&(g=s(A,g,b),R===null?P=A:R.sibling=A,R=A);return Rt&&zr(u,b),P}for(A=i(u,A);b<x.length;b++)Z=p(A,u,b,x[b],M),Z!==null&&(t&&Z.alternate!==null&&A.delete(Z.key===null?b:Z.key),g=s(Z,g,b),R===null?P=Z:R.sibling=Z,R=Z);return t&&A.forEach(function(w){return e(u,w)}),Rt&&zr(u,b),P}function v(u,g,x,M){var P=yo(x);if(typeof P!="function")throw Error(pe(150));if(x=P.call(x),x==null)throw Error(pe(151));for(var R=P=null,A=g,b=g=0,Z=null,y=x.next();A!==null&&!y.done;b++,y=x.next()){A.index>b?(Z=A,A=null):Z=A.sibling;var w=h(u,A,y.value,M);if(w===null){A===null&&(A=Z);break}t&&A&&w.alternate===null&&e(u,A),g=s(w,g,b),R===null?P=w:R.sibling=w,R=w,A=Z}if(y.done)return n(u,A),Rt&&zr(u,b),P;if(A===null){for(;!y.done;b++,y=x.next())y=d(u,y.value,M),y!==null&&(g=s(y,g,b),R===null?P=y:R.sibling=y,R=y);return Rt&&zr(u,b),P}for(A=i(u,A);!y.done;b++,y=x.next())y=p(A,u,b,y.value,M),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?b:y.key),g=s(y,g,b),R===null?P=y:R.sibling=y,R=y);return t&&A.forEach(function(W){return e(u,W)}),Rt&&zr(u,b),P}function m(u,g,x,M){if(typeof x=="object"&&x!==null&&x.type===As&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:e:{for(var P=x.key,R=g;R!==null;){if(R.key===P){if(P=x.type,P===As){if(R.tag===7){n(u,R.sibling),g=r(R,x.props.children),g.return=u,u=g;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ir&&hp(P)===R.type){n(u,R.sibling),g=r(R,x.props),g.ref=To(u,R,x),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}x.type===As?(g=Qr(x.props.children,u.mode,M,x.key),g.return=u,u=g):(M=Tl(x.type,x.key,x.props,null,u.mode,M),M.ref=To(u,g,x),M.return=u,u=M)}return o(u);case Ts:e:{for(R=x.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=ru(x,u.mode,M),g.return=u,u=g}return o(u);case ir:return R=x._init,m(u,g,R(x._payload),M)}if(Fo(x))return _(u,g,x,M);if(yo(x))return v(u,g,x,M);Oa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=iu(x,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return m}var Zs=a0(!0),l0=a0(!1),jl=Cr(null),Yl=null,Is=null,Vd=null;function Gd(){Vd=Is=Yl=null}function Wd(t){var e=jl.current;Tt(jl),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){Yl=t,Vd=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Yl===null)throw Error(pe(308));Is=t,Yl.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Yr=null;function Xd(t){Yr===null?Yr=[t]:Yr.push(t)}function c0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Ut({},d,h);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=d}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var ya={},Si=Cr(ya),la=Cr(ya),ca=Cr(ya);function qr(t){if(t===ya)throw Error(pe(174));return t}function Yd(t,e){switch(yt(ca,e),yt(la,t),yt(Si,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}Tt(Si),yt(Si,e)}function Qs(){Tt(Si),Tt(la),Tt(ca)}function f0(t){qr(ca.current);var e=qr(Si.current),n=qu(e,t.type);e!==n&&(yt(la,t),yt(Si,n))}function qd(t){la.current===t&&(Tt(Si),Tt(la))}var Dt=Cr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function $d(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var yl=ji.ReactCurrentDispatcher,Qc=ji.ReactCurrentBatchConfig,ts=0,Lt=null,Gt=null,$t=null,Kl=!1,jo=!1,ua=0,Fx=0;function nn(){throw Error(pe(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Zd(t,e,n,i,r,s){if(ts=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?zx:Hx,t=n(i,r),jo){s=0;do{if(jo=!1,ua=0,25<=s)throw Error(pe(301));s+=1,$t=Gt=null,e.updateQueue=null,yl.current=Vx,t=n(i,r)}while(jo)}if(yl.current=Zl,e=Gt!==null&&Gt.next!==null,ts=0,$t=Gt=Lt=null,Kl=!1,e)throw Error(pe(300));return t}function Qd(){var t=ua!==0;return ua=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Lt.memoizedState=$t=t:$t=$t.next=t,$t}function $n(){if(Gt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=$t===null?Lt.memoizedState:$t.next;if(e!==null)$t=e,Gt=t;else{if(t===null)throw Error(pe(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},$t===null?Lt.memoizedState=$t=t:$t=$t.next=t}return $t}function fa(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=$n(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ts&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Lt.lanes|=f,ns|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=$n(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d0(){}function h0(t,e){var n=Lt,i=$n(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Jd(g0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,da(9,m0.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(pe(349));ts&30||p0(n,e,r)}return r}function p0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m0(t,e,n,i){e.value=n,e.getSnapshot=i,_0(e)&&v0(t)}function g0(t,e,n){return n(function(){_0(e)&&v0(t)})}function _0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function v0(t){var e=Vi(t,1);e!==null&&ci(e,t,1,-1)}function gp(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=kx.bind(null,Lt,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x0(){return $n().memoizedState}function Sl(t,e,n,i){var r=mi();Lt.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function _c(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var o=Gt.memoizedState;if(s=o.destroy,i!==null&&Kd(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=da(1|e,n,s,i)}function _p(t,e){return Sl(8390656,8,t,e)}function Jd(t,e){return _c(2048,8,t,e)}function y0(t,e){return _c(4,2,t,e)}function S0(t,e){return _c(4,4,t,e)}function M0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E0(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,M0.bind(null,e,t),n)}function eh(){}function w0(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T0(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return ts&21?(fi(n,e)||(n=Dg(),Lt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function Ox(t,e){var n=vt;vt=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{vt=n,Qc.transition=i}}function C0(){return $n().memoizedState}function Bx(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},R0(t))P0(e,n);else if(n=c0(t,e,n,i),n!==null){var r=gn();ci(n,t,i,r),b0(n,e,i)}}function kx(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(R0(t))P0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c0(t,e,r,i),n!==null&&(r=gn(),ci(n,t,i,r),b0(n,e,i))}}function R0(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function P0(t,e){jo=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var Zl={readContext:qn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},zx={readContext:qn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:_p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,M0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Bx.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:eh,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=Ox.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=mi();if(Rt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Kt===null)throw Error(pe(349));ts&30||p0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_p(g0.bind(null,i,s,t),[t]),i.flags|=2048,da(9,m0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Kt.identifierPrefix;if(Rt){var n=Ni,i=Ii;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hx={readContext:qn,useCallback:w0,useContext:qn,useEffect:Jd,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:Jc,useRef:x0,useState:function(){return Jc(fa)},useDebugValue:eh,useDeferredValue:function(t){var e=$n();return A0(e,Gt.memoizedState,t)},useTransition:function(){var t=Jc(fa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1},Vx={readContext:qn,useCallback:w0,useContext:qn,useEffect:Jd,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:eu,useRef:x0,useState:function(){return eu(fa)},useDebugValue:eh,useDeferredValue:function(t){var e=$n();return Gt===null?e.memoizedState=t:A0(e,Gt.memoizedState,t)},useTransition:function(){var t=eu(fa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=vr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ci(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=vr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ci(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=vr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(ci(e,t,i,n),xl(e,t,i))}};function vp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function D0(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=En(e)?Jr:un.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=En(e)?Jr:un.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,Rf=i),vf(t,e)},n}function U0(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Wx=ji.ReactCurrentOwner,Sn=!1;function pn(t,e,n,i){e.child=t===null?l0(e,null,n,i):Zs(e,t.child,n,i)}function Ep(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Zd(t,e,n,i,s,r),n=Qd(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Rt&&n&&kd(e),e.flags|=1,pn(t,e,i,r),e.child)}function wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I0(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function I0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return xf(t,e,n,i,r)}function N0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Fs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Fs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Fs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Fs,bn),bn|=i;return pn(t,e,r,n),e.child}function F0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var s=En(n)?Jr:un.current;return s=$s(e,s),Vs(e,r),n=Zd(t,e,n,i,s,r),i=Qd(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Rt&&i&&kd(e),e.flags|=1,pn(t,e,n,r),e.child)}function Tp(t,e,n,i,r){if(En(n)){var s=!0;Gl(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Ml(t,e),D0(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=En(n)?Jr:un.current,c=$s(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xp(e,o,i,c),rr=!1;var h=e.memoizedState;o.state=h,ql(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Mn.current||rr?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(a=rr||vp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=En(n)?Jr:un.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xp(e,o,i,l),rr=!1,h=e.memoizedState,o.state=h,ql(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Mn.current||rr?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(c=rr||vp(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,s,r)}function yf(t,e,n,i,r,s){F0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&up(e,n,!1),Gi(t,e,s);i=e.stateNode,Wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&up(e,n,!0),e.child}function O0(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),Yd(t,e.containerInfo)}function Ap(t,e,n,i,r){return Ks(),Hd(r),e.flags|=256,pn(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function B0(t,e,n){var i=e.pendingProps,r=Dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Dt,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):th(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function th(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&Hd(i),Zs(e,t.child,null,n),t=th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(pe(422))),Ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Sf,s);if(!(e.mode&1))return Ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=tu(s,i,void 0),Ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),ci(i,t,r,-1))}return ah(),i=tu(Error(pe(421))),Ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=mr(r.nextSibling),Un=e,Rt=!0,ri=null,t!==null&&(zn[Hn++]=Ii,zn[Hn++]=Ni,zn[Hn++]=es,Ii=t.id,Ni=t.overflow,es=e),e=th(e,i.children),e.flags|=4096,e)}function Cp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function k0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,n,e);else if(t.tag===19)Cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jx(t,e,n){switch(e.tag){case 3:O0(e),Ks();break;case 5:f0(e);break;case 1:En(e.type)&&Gl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?B0(t,e,n):(yt(Dt,Dt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);yt(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return k0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,n)}return Gi(t,e,n)}var z0,Ef,H0,V0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};H0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Si.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=Yu(t,r),i=Yu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}$u(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yx(t,e,n){var i=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return En(e.type)&&Vl(),rn(e),null;case 3:return i=e.stateNode,Qs(),Tt(Mn),Tt(un),$d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Df(ri),ri=null))),Ef(t,e),rn(e),null;case 5:qd(e);var r=qr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)H0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return rn(e),null}if(t=qr(Si.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)Et(Bo[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Fh(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":Bh(i,s),Et("invalid",i)}$u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Ca(i),Oh(i,s,!0);break;case"textarea":Ca(i),kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[aa]=i,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ku(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)Et(Bo[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":Fh(t,i),r=Wu(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),Et("invalid",t);break;case"textarea":Bh(t,i),r=Yu(t,i),Et("invalid",t);break;default:r=i}$u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Td(t,s,l,o))}switch(n){case"input":Ca(t),Oh(t,i,!1);break;case"textarea":Ca(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)V0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=qr(ca.current),qr(Si.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return rn(e),null;case 13:if(Tt(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&Ln!==null&&e.mode&1&&!(e.flags&128))o0(),Ks(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[vi]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ri!==null&&(Df(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?Wt===0&&(Wt=3):ah())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Qs(),Ef(t,e),t===null&&sa(e.stateNode.containerInfo),rn(e),null;case 10:return Wd(e.type._context),rn(e),null;case 17:return En(e.type)&&Vl(),rn(e),null;case 19:if(Tt(Dt),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Dt,Dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Bt()>eo&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return rn(e),null}else 2*Bt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Bt(),e.sibling=null,n=Dt.current,yt(Dt,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function qx(t,e){switch(zd(e),e.tag){case 1:return En(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),Tt(Mn),Tt(un),$d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(Tt(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Dt),null;case 4:return Qs(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var ka=!1,ln=!1,$x=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Rp=!1;function Kx(t,e){if(af=Bl,t=Yg(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Bl=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:ti(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(M){Nt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return _=Rp,Rp=!1,_}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wf(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[aa],delete e[ff],delete e[Lx],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Qt=null,ni=!1;function $i(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:ln||Ns(n,e);case 6:var i=Qt,r=ni;Qt=null,$i(t,e,n),Qt=i,ni=r,Qt!==null&&(ni?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(ni?(t=Qt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),na(t)):$c(Qt,n.stateNode));break;case 4:i=Qt,r=ni,Qt=n.stateNode.containerInfo,ni=!0,$i(t,e,n),Qt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wf(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!ln&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,$i(t,e,n),ln=i):$i(t,e,n);break;default:$i(t,e,n)}}function bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $x),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,ni=!1;break e;case 3:Qt=a.stateNode.containerInfo,ni=!0;break e;case 4:Qt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Qt===null)throw Error(pe(160));X0(s,o,r),Qt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j0(e,t),e=e.sibling}function j0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),pi(t),i&4){try{Yo(3,t,t.return),xc(3,t)}catch(v){Nt(t,t.return,v)}try{Yo(5,t,t.return)}catch(v){Nt(t,t.return,v)}}break;case 1:Zn(e,t),pi(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Zn(e,t),pi(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(v){Nt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Ku(a,o);var c=Ku(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?xg(r,d):f==="dangerouslySetInnerHTML"?_g(r,d):f==="children"?Qo(r,d):Td(r,f,d,c)}switch(a){case"input":Xu(r,s);break;case"textarea":mg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(v){Nt(t,t.return,v)}}break;case 6:if(Zn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Nt(t,t.return,v)}}break;case 3:if(Zn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(v){Nt(t,t.return,v)}break;case 4:Zn(e,t),pi(t);break;case 13:Zn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=Bt())),i&4&&bp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||f,Zn(e,t),ln=c):Zn(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Pe=t,f=t.child;f!==null;){for(d=Pe=f;Pe!==null;){switch(h=Pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Yo(4,h,h.return);break;case 1:Ns(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Nt(i,n,v)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){Lp(d);continue}}p!==null?(p.return=h,Pe=p):Lp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vg("display",o))}catch(v){Nt(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Nt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,t),pi(t),i&4&&bp(t);break;case 21:break;default:Zn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Pp(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Pp(t);Af(t,a,o);break;default:throw Error(pe(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zx(t,e,n){Pe=t,Y0(t)}function Y0(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=ka;var c=ln;if(ka=o,(ln=l)&&!c)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?Up(r):l!==null?(l.return=o,Pe=l):Up(r);for(;s!==null;)Pe=s,Y0(s),s=s.sibling;Pe=r,ka=a,ln=c}Dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Dp(t)}}function Dp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}ln||e.flags&512&&Tf(e)}catch(h){Nt(e,e.return,h)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Lp(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Up(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Tf(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Tf(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var Qx=Math.ceil,Ql=ji.ReactCurrentDispatcher,nh=ji.ReactCurrentOwner,Yn=ji.ReactCurrentBatchConfig,ut=0,Kt=null,zt=null,Jt=0,bn=0,Fs=Cr(0),Wt=0,ha=null,ns=0,yc=0,ih=0,qo=null,yn=null,rh=0,eo=1/0,Li=null,Jl=!1,Rf=null,_r=null,za=!1,ur=null,ec=0,$o=0,Pf=null,El=-1,wl=0;function gn(){return ut&6?Bt():El!==-1?El:El=Bt()}function vr(t){return t.mode&1?ut&2&&Jt!==0?Jt&-Jt:Nx.transition!==null?(wl===0&&(wl=Dg()),wl):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Bg(t.type)),t):1}function ci(t,e,n,i){if(50<$o)throw $o=0,Pf=null,Error(pe(185));_a(t,n,i),(!(ut&2)||t!==Kt)&&(t===Kt&&(!(ut&2)&&(yc|=n),Wt===4&&ar(t,Jt)),wn(t,i),n===1&&ut===0&&!(e.mode&1)&&(eo=Bt()+500,gc&&Rr()))}function wn(t,e){var n=t.callbackNode;Nv(t,e);var i=Ol(t,t===Kt?Jt:0);if(i===0)n!==null&&Vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vh(n),e===1)t.tag===0?Ix(Ip.bind(null,t)):i0(Ip.bind(null,t)),bx(function(){!(ut&6)&&Rr()}),n=null;else{switch(Lg(i)){case 1:n=bd;break;case 4:n=Pg;break;case 16:n=Fl;break;case 536870912:n=bg;break;default:n=Fl}n=t_(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(El=-1,wl=0,ut&6)throw Error(pe(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=Ol(t,t===Kt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tc(t,i);else{e=i;var r=ut;ut|=2;var s=K0();(Kt!==t||Jt!==e)&&(Li=null,eo=Bt()+500,Zr(t,e));do try{ty();break}catch(a){$0(t,a)}while(!0);Gd(),Ql.current=s,ut=r,zt!==null?e=0:(Kt=null,Jt=0,e=Wt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=bf(t,r))),e===1)throw n=ha,Zr(t,0),ar(t,i),wn(t,Bt()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jx(r)&&(e=tc(t,i),e===2&&(s=tf(t),s!==0&&(i=s,e=bf(t,s))),e===1))throw n=ha,Zr(t,0),ar(t,i),wn(t,Bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Hr(t,yn,Li);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=rh+500-Bt(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Hr.bind(null,t,yn,Li),e);break}Hr(t,yn,Li);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qx(i/1960))-i,10<i){t.timeoutHandle=uf(Hr.bind(null,t,yn,Li),i);break}Hr(t,yn,Li);break;case 5:Hr(t,yn,Li);break;default:throw Error(pe(329))}}}return wn(t,Bt()),t.callbackNode===n?q0.bind(null,t):null}function bf(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=tc(t,e),t!==2&&(e=yn,yn=n,e!==null&&Df(e)),t}function Df(t){yn===null?yn=t:yn.push.apply(yn,t)}function Jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~ih,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function Ip(t){if(ut&6)throw Error(pe(327));Gs();var e=Ol(t,0);if(!(e&1))return wn(t,Bt()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=bf(t,i))}if(n===1)throw n=ha,Zr(t,0),ar(t,e),wn(t,Bt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,yn,Li),wn(t,Bt()),null}function sh(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(eo=Bt()+500,gc&&Rr())}}function is(t){ur!==null&&ur.tag===0&&!(ut&6)&&Gs();var e=ut;ut|=1;var n=Yn.transition,i=vt;try{if(Yn.transition=null,vt=1,t)return t()}finally{vt=i,Yn.transition=n,ut=e,!(ut&6)&&Rr()}}function oh(){bn=Fs.current,Tt(Fs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Px(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Qs(),Tt(Mn),Tt(un),$d();break;case 5:qd(i);break;case 4:Qs();break;case 13:Tt(Dt);break;case 19:Tt(Dt);break;case 10:Wd(i.type._context);break;case 22:case 23:oh()}n=n.return}if(Kt=t,zt=t=xr(t.current,null),Jt=bn=e,Wt=0,ha=null,ih=yc=ns=0,yn=qo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function $0(t,e){do{var n=zt;try{if(Gd(),yl.current=Zl,Kl){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(ts=0,$t=Gt=Lt=null,jo=!1,ua=0,nh.current=null,n===null||n.return===null){Wt=1,ha=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Sp(o);if(p!==null){p.flags&=-257,Mp(p,o,a,s,e),p.mode&1&&yp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){yp(s,c,e),ah();break e}l=Error(pe(426))}}else if(Rt&&a.mode&1){var m=Sp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Mp(m,o,a,s,e),Hd(Js(l,a));break e}}s=l=Js(l,a),Wt!==4&&(Wt=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=L0(s,l,e);pp(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=U0(s,a,e);pp(s,M);break e}}s=s.return}while(s!==null)}Q0(n)}catch(P){e=P,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function K0(){var t=Ql.current;return Ql.current=Zl,t===null?Zl:t}function ah(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Kt===null||!(ns&268435455)&&!(yc&268435455)||ar(Kt,Jt)}function tc(t,e){var n=ut;ut|=2;var i=K0();(Kt!==t||Jt!==e)&&(Li=null,Zr(t,e));do try{ey();break}catch(r){$0(t,r)}while(!0);if(Gd(),ut=n,Ql.current=i,zt!==null)throw Error(pe(261));return Kt=null,Jt=0,Wt}function ey(){for(;zt!==null;)Z0(zt)}function ty(){for(;zt!==null&&!Av();)Z0(zt)}function Z0(t){var e=e_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Q0(t):zt=e,nh.current=null}function Q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qx(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,zt=null;return}}else if(n=Yx(n,e,bn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Hr(t,e,n){var i=vt,r=Yn.transition;try{Yn.transition=null,vt=1,ny(t,e,n,i)}finally{Yn.transition=r,vt=i}return null}function ny(t,e,n,i){do Gs();while(ur!==null);if(ut&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fv(t,s),t===Kt&&(zt=Kt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,t_(Fl,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=vt;vt=1;var a=ut;ut|=4,nh.current=null,Kx(t,n),j0(n,t),Mx(lf),Bl=!!af,lf=af=null,t.current=n,Zx(n),Cv(),ut=a,vt=o,Yn.transition=s}else t.current=n;if(za&&(za=!1,ur=t,ec=r),s=t.pendingLanes,s===0&&(_r=null),bv(n.stateNode),wn(t,Bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=Rf,Rf=null,t;return ec&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===Pf?$o++:($o=0,Pf=t):$o=0,Rr(),null}function Gs(){if(ur!==null){var t=Lg(ec),e=Yn.transition,n=vt;try{if(Yn.transition=null,vt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,ec=0,ut&6)throw Error(pe(331));var r=ut;for(ut|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Pe=c;Pe!==null;){var f=Pe;switch(f.tag){case 0:case 11:case 15:Yo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Pe=d;else for(;Pe!==null;){f=Pe;var h=f.sibling,p=f.return;if(G0(f),f===c){Pe=null;break}if(h!==null){h.return=p,Pe=h;break}Pe=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Pe=u;break e}Pe=s.return}}var g=t.current;for(Pe=g;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=g;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(P){Nt(a,a.return,P)}if(a===o){Pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Pe=M;break e}Pe=a.return}}if(ut=r,Rr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(fc,t)}catch{}i=!0}return i}finally{vt=n,Yn.transition=e}}return!1}function Np(t,e,n){e=Js(n,e),e=L0(t,e,1),t=gr(t,e,1),e=gn(),t!==null&&(_a(t,1,e),wn(t,e))}function Nt(t,e,n){if(t.tag===3)Np(t,t,n);else for(;e!==null;){if(e.tag===3){Np(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=Js(n,t),t=U0(e,t,1),e=gr(e,t,1),t=gn(),e!==null&&(_a(e,1,t),wn(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(Jt&n)===n&&(Wt===4||Wt===3&&(Jt&130023424)===Jt&&500>Bt()-rh?Zr(t,0):ih|=n),wn(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=gn();t=Vi(t,e),t!==null&&(_a(t,e,n),wn(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),J0(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,jx(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Rt&&e.flags&1048576&&r0(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=$s(e,un.current);Vs(e,n),r=Zd(null,e,i,t,r,n);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jd(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=yf(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&kd(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ay(i),t=ti(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=Tp(null,e,i,t,n);break e;case 11:e=Ep(null,e,i,t,n);break e;case 14:e=wp(null,e,i,ti(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Tp(t,e,i,r,n);case 3:e:{if(O0(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u0(t,e),ql(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(pe(423)),e),e=Ap(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(pe(424)),e),e=Ap(t,e,i,n,r);break e}else for(Ln=mr(e.stateNode.containerInfo.firstChild),Un=e,Rt=!0,ri=null,n=l0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Gi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return f0(e),t===null&&pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),F0(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return B0(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ep(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(jl,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!Mn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=qn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),wp(t,e,i,r,n);case 15:return I0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ml(t,e),e.tag=1,En(i)?(t=!0,Gl(e)):t=!1,Vs(e,n),D0(e,i,r),_f(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return k0(t,e,n);case 22:return N0(t,e,n)}throw Error(pe(156,e.tag))};function t_(t,e){return Rg(t,e)}function oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new oy(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ay(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===Rd)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return Qr(n.children,r,s,e);case Ad:o=8,r|=8;break;case zu:return t=Xn(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Hu:return t=Xn(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Vu:return t=Xn(19,n,e,r),t.elementType=Vu,t.lanes=s,t;case fg:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:o=10;break e;case ug:o=9;break e;case Cd:o=11;break e;case Rd:o=14;break e;case ir:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=fg,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,s,o,a,l){return t=new ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),t}function cy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return wr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(En(n))return n0(t,n,e)}return e}function i_(t,e,n,i,r,s,o,a,l){return t=ch(n,i,!0,t,r,s,o,a,l),t.context=n_(null),n=t.current,i=gn(),r=vr(n),s=Bi(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,_a(t,r,i),wn(t,i),t}function Mc(t,e,n,i){var r=e.current,s=gn(),o=vr(r);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,o),t!==null&&(ci(t,r,o,s),xl(t,r,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uh(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function uy(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}Ec.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Mc(t,e,null,null)};Ec.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Mc(null,t,null,null)}),e[Hi]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Og(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nc(o);s.call(c)}}var o=i_(e,i,t,0,null,!1,!1,"",Op);return t._reactRootContainer=o,t[Hi]=o.current,sa(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nc(l);a.call(c)}}var l=ch(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=l,t[Hi]=l.current,sa(t.nodeType===8?t.parentNode:t),is(function(){Mc(e,l,n,i)}),l}function Tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nc(o);a.call(l)}}Mc(e,o,t,r)}else o=fy(n,e,t,r,i);return nc(o)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oo(e.pendingLanes);n!==0&&(Dd(e,n|1),wn(e,Bt()),!(ut&6)&&(eo=Bt()+500,Rr()))}break;case 13:is(function(){var i=Vi(t,1);if(i!==null){var r=gn();ci(i,t,1,r)}}),uh(t,1)}};Ld=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=gn();ci(e,t,134217728,n)}uh(t,134217728)}};Ig=function(t){if(t.tag===13){var e=vr(t),n=Vi(t,e);if(n!==null){var i=gn();ci(n,t,e,i)}uh(t,e)}};Ng=function(){return vt};Fg=function(t,e){var n=vt;try{return vt=t,e()}finally{vt=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mc(i);if(!r)throw Error(pe(90));hg(i),Xu(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Mg=sh;Eg=is;var dy={usingClientEntryPoint:!1,Events:[xa,bs,mc,yg,Sg,sh]},Co={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{fc=Ha.inject(hy),yi=Ha}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(pe(200));return cy(t,e,null,n)};Nn.createRoot=function(t,e){if(!dh(t))throw Error(pe(299));var n=!1,i="",r=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,sa(t.nodeType===8?t.parentNode:t),new fh(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return is(t)};Nn.hydrate=function(t,e,n){if(!wc(e))throw Error(pe(200));return Tc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=i_(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ec(e)};Nn.render=function(t,e,n){if(!wc(e))throw Error(pe(200));return Tc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!wc(t))throw Error(pe(40));return t._reactRootContainer?(is(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Nn.unstable_batchedUpdates=sh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Tc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),sg.exports=Nn;var py=sg.exports,Bp=py;Bu.createRoot=Bp.createRoot,Bu.hydrateRoot=Bp.hydrateRoot;function my(){return be.jsx("header",{className:"top-header",children:be.jsx("div",{className:"h-title",children:be.jsx("h1",{children:"인터랙티브 인프라 용어사전"})})})}const kp=t=>{let e;const n=new Set,i=(c,f)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const h=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(p=>p(e,h))}},r=()=>e,a={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,a);return a},gy=t=>t?kp(t):kp,_y=t=>t;function vy(t,e=_y){const n=Io.useSyncExternalStore(t.subscribe,Io.useCallback(()=>e(t.getState()),[t,e]),Io.useCallback(()=>e(t.getInitialState()),[t,e]));return Io.useDebugValue(n),n}const zp=t=>{const e=gy(t),n=i=>vy(e,i);return Object.assign(n,e),n},xy=t=>t?zp(t):zp,ht=xy(t=>({filter:"all",setFilter:e=>t({filter:e}),floor:"all",setFloor:e=>t({floor:e}),flowState:{condensate:!0,chilled:!0,heat:!0,tcs:!0,power:!0},toggleFlow:e=>t(n=>({flowState:{...n.flowState,[e]:!n.flowState[e]}})),flowOn:!0,toggleFlowMaster:()=>t(e=>{const n=!e.flowOn,i={...e.flowState};return Object.keys(i).forEach(r=>i[r]=n),{flowOn:n,flowState:i}}),selected:null,setSelected:e=>t({selected:e}),focusId:null,focusTick:0,requestFocus:e=>t(n=>({selected:e,focusId:e,focusTick:n.focusTick+1})),labelsOn:!0,toggleLabels:()=>t(e=>({labelsOn:!e.labelsOn})),resetTick:0,requestReset:()=>t(e=>({resetTick:e.resetTick+1})),query:"",setQuery:e=>t({query:e})})),yy=[["all","전체"],["cooling","냉각"],["power","전력"],["it","IT·컴퓨트"],["mgmt","감시·제어"]],Sy=[["condensate","응축수 루프","#9CC6E4"],["chilled","냉수 (FWS·공랭용)","#3E9CD6"],["heat","고온수 (FWS·액랭용)","#E2793B"],["tcs","TCS (칩 냉각수)","#0FA396"],["power","전력 계통","#D9A312"]];function My(){const t=ht(c=>c.filter),e=ht(c=>c.setFilter),n=ht(c=>c.flowState),i=ht(c=>c.toggleFlow),r=ht(c=>c.flowOn),s=ht(c=>c.toggleFlowMaster),o=ht(c=>c.labelsOn),a=ht(c=>c.toggleLabels),l=ht(c=>c.requestReset);return be.jsxs("div",{className:"toolbar",children:[be.jsx("div",{className:"filter-nav","aria-label":"계통 필터",children:yy.map(([c,f])=>be.jsx("button",{className:`chip cat-${c}${t===c?" on":""}`,onClick:()=>e(c),children:f},c))}),be.jsxs("div",{className:"flow-control","aria-label":"Flow 표시",children:[Sy.map(([c,f,d])=>be.jsx("button",{className:`flow-chip${n[c]?" on":""}`,style:{"--flow-color":d},"aria-pressed":n[c],onClick:()=>i(c),children:f},c)),be.jsx("button",{className:`flow-master${r?" on":""}`,type:"button","aria-label":"모든 Flow 켜기 또는 끄기","aria-pressed":r,onClick:s}),be.jsx("button",{className:`label-toggle${o?" on":""}`,type:"button","aria-label":"장비 라벨 켜기 또는 끄기","aria-pressed":o,onClick:a,children:"라벨"}),be.jsx("button",{className:"reset-view",type:"button","aria-label":"3D 시점 초기화",onClick:l,children:be.jsxs("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[be.jsx("path",{d:"M30 20A10 10 0 1 1 27.1 12.9"}),be.jsx("path",{d:"M27.1 7.9v5h-5"})]})})]})]})}const Gr={cooling:{label:"냉각 계통",color:"#1111FF"},power:{label:"전력 계통",color:"#F3B81C"},it:{label:"IT · 컴퓨트",color:"#D936E7"},mgmt:{label:"감시 · 제어",color:"#30353C"}},Ey={all:"전체",roof:"옥상",f2:"2층 · 전산실",f1:"1층",b1:"지하 1층"},an={"cooling-tower":{cat:"cooling",name:"냉각탑",en:"Cooling Tower",short:"물의 증발잠열을 이용해 시설의 열을 대기로 최종 방출하는 옥외 열방출 설비.",desc:"순환수의 일부를 증발시켜 나머지 물의 온도를 낮추는 증발식 열방출 장치로, 주로 수랭식 칠러의 응축기 열을 제거한다. 외기 습구온도에 근접한 낮은 수온을 만들 수 있어 열방출 효율이 높지만, 증발·블로다운으로 물을 소비하기 때문에 WUE(물 사용 효율)와 수질 관리(레지오넬라, 스케일)가 핵심 운영 이슈다.",facts:["성능 기준: 외기 습구온도(Wet-bulb) 기준 접근온도","물 소비 발생 → WUE 관리 및 보충수(Make-up water) 필요","팬·충진재(Fill)·살수계통으로 구성, 겨울철 결빙 대책 필요"],rel:["chiller","dry-cooler","fws","water-treatment"]},"dry-cooler":{cat:"cooling",name:"드라이쿨러 · 유체냉각기",en:"Dry Cooler / Fluid Cooler",short:"물 소비 없이 공기-액체 열교환으로 고온수 루프의 열을 방출하는 설비.",desc:"밀폐 배관 내 냉각수를 핀 코일과 팬으로 직접 외기에 냉각하는 건식 열방출 장치. 액체냉각 서버는 37~40°C(99°F급)의 높은 공급수온을 허용하므로, 많은 기후대에서 냉동기 없이 드라이쿨러만으로 연중 열방출이 가능하다. 혹서기에는 코일 전면에 물을 분무하는 단열보조(Adiabatic Assist)로 성능을 확보한다.",facts:["고온수 루프(액랭용 FWS)의 주 열방출 수단","물 소비 최소화 → 저(低)WUE 설계에 유리","외기 약 32°C(90°F) 초과 시 단열분무 보조 가동"],rel:["cdu","fws","cooling-tower"]},chiller:{cat:"cooling",name:"칠러 (냉동기)",en:"Chiller",short:"냉동 사이클로 냉수를 생산해 공랭 구역과 저온 부하에 공급하는 설비.",desc:"압축기-응축기-팽창밸브-증발기로 이루어진 냉동 사이클로 냉수(예: 공급 23°C/73°F급)를 만들어 팬월·CRAH 등 공기냉각 계통에 공급한다. 외기가 충분히 낮을 때는 냉동기를 거치지 않고 외기로 직접 냉각하는 프리쿨링(Water-side Economizer) 운전으로 소비전력을 크게 줄일 수 있으며, 일반적으로 N+1 이상 이중화로 구성한다.",facts:["수랭식(냉각탑 연계) 또는 공랭식(일체형) 구분","프리쿨링(이코노마이저) 내장형이 AI DC 표준 추세","이중화: N+1 구성 + 축열조 연계 정전 대비"],rel:["cooling-tower","fws","crah","tes"]},pumps:{cat:"cooling",name:"순환 펌프",en:"FWS Circulation Pumps",short:"FWS 냉각수를 순환시키는 펌프. 듀티/스탠바이(N+1)로 이중화.",desc:"냉각수 계통의 유량과 차압을 유지하는 심장 역할의 설비로, 가변속(VFD) 제어로 부하에 따라 유량을 조절해 반송동력을 절감한다. 정전 시에도 서버 냉각수 흐름이 끊기면 수십 초 내 GPU가 과열되므로, 액체냉각 시설에서는 CDU와 함께 주요 펌프를 UPS 전원에 연결하는 것이 일반적이다.",facts:["가변속(VFD) 운전으로 에너지 절감","듀티/스탠바이 또는 N+1 이중화 구성","액랭 시설: 펌프·CDU를 UPS 전원으로 백업"],rel:["fws","cdu","ups","tes"]},tes:{cat:"cooling",name:"축열조",en:"Thermal Energy Storage Tank",short:"정전 시 칠러 재기동까지 약 5분간 냉각을 유지하는 냉수 저장 탱크.",desc:"냉각수를 대량 저장해 두었다가 정전·설비 고장 시 냉열원으로 사용하는 버퍼 탱크. 발전기가 기동되고 칠러가 재가동될 때까지의 공백(수 분)을 메우는 라이드스루(Ride-through) 기능이 핵심이며, AI 랙은 열밀도가 높아 이 몇 분의 공백도 치명적이기 때문에 액체냉각 시설의 필수 요소로 자리잡았다.",facts:["대표 설계치: 약 5분 내외 냉각 라이드스루","칠러·펌프 재기동 시간의 열적 버퍼 역할","UPS(전력 백업)의 냉각판 대응 개념"],rel:["chiller","pumps","ups","generator"]},"water-treatment":{cat:"cooling",name:"수처리 설비",en:"Water Treatment / Chemical Dosing",short:"냉각수의 pH·부식·미생물을 관리하는 약품주입 및 여과 설비.",desc:"냉각수 배관과 열교환기를 보호하기 위해 수질을 관리하는 설비. FWS는 pH 7~9 유지, 부식억제제 주입, 10μm급 여과가 기본이며, CDU로 들어가는 최종 급수에는 약 500μm 듀플렉스 스트레이너를 둔다. 서버에 직접 닿는 TCS는 훨씬 엄격한 기준(부식억제제+살균제, 낮은 전도도·경도)이 적용된다.",facts:["FWS 기준: pH 7~9, 부식억제제 필수 (ASHRAE 기준)","CDU 급수단 듀플렉스 스트레이너(~500μm)","TCS는 살균제 포함, 더 엄격한 고청정 수질 요구"],rel:["fws","tcs","cdu","cooling-tower"]},cdu:{cat:"cooling",name:"CDU",en:"Coolant Distribution Unit",short:"시설 냉각수(FWS)와 서버 냉각수(TCS)를 열교환기로 분리·중계하는 핵심 장치.",desc:"액체냉각 시스템의 관문 설비. 내부의 판형 열교환기가 시설수(FWS)와 서버측 냉각수(TCS)를 수리적으로 완전히 분리하고, 이중화 펌프·제어밸브·필터·센서로 TCS의 유량·온도·압력을 칩 요구조건에 맞게 정밀 제어한다. 랙 내장형(In-rack), 열(Row) 배치형, 대용량 실외/기계실형(Liquid-to-Liquid) 등으로 구분되며, 정전 대비를 위해 UPS 전원으로 백업한다.",facts:["구성: 판형 열교환기 + 듀티/스탠바이 펌프 + 필터 + 제어밸브","FWS와 TCS의 수질·압력을 격리 (누수 리스크 분리)","형태: In-rack / In-row / 시설형(MW급 Liquid-to-Liquid)"],rel:["tcs","fws","manifold","cold-plate","pumps"]},manifold:{cat:"cooling",name:"매니폴드",en:"Coolant Manifold",short:"TCS 냉각수를 랙 안의 각 서버로 분배·회수하는 분기 배관.",desc:"CDU에서 나온 냉각수를 랙 단위·서버 단위로 나누어 공급(Supply)하고 회수(Return)하는 분배 배관. 랙 후면 수직형 또는 상부 수평형으로 설치되며, 서버 착탈 시 냉각수가 새지 않도록 드립리스 퀵 디스커넥트(QD) 커플링으로 각 서버 콜드플레이트 회로와 연결된다.",facts:["공급/회수(Supply/Return) 한 쌍으로 구성","드립리스 퀵커넥터(QD)로 무누수 착탈","랙 후면 수직형·열 상부 수평형 배치"],rel:["cdu","cold-plate","tcs","gpu-rack"]},"cold-plate":{cat:"cooling",name:"콜드플레이트",en:"Cold Plate (Direct-to-Chip)",short:"GPU·CPU 등 고발열 칩 위에 직접 부착해 액체로 열을 흡수하는 금속 열교환 판.",desc:"미세 유로가 가공된 구리 판을 칩 패키지에 직접 밀착시켜, 내부를 흐르는 냉각수로 열을 흡수하는 Direct-to-Chip(D2C) 액체냉각의 핵심 부품. 공기 대비 물의 열용량이 압도적으로 커서 1,000W가 넘는 최신 GPU도 안정적으로 냉각할 수 있으며, 서버 팬 부하를 크게 줄여 컴퓨팅 전력의 10~15%를 절감하는 효과가 있다.",facts:["GPU·CPU 등 주요 열원에 직접 부착 (D2C 방식)","칩 발열의 대부분을 액체로 직접 회수","서버 팬 전력 절감 → 전체 효율 개선"],rel:["manifold","tcs","gpu-rack","cdu"]},tcs:{cat:"cooling",name:"TCS 루프",en:"Technology Cooling System",short:"CDU 2차측 — 서버 콜드플레이트에 직접 들어가는 고청정 냉각수 계통.",desc:"CDU에서 서버까지 이어지는 서버측 냉각수 루프. 칩에 직접 닿는 물이므로 PG25(프로필렌글리콜 25% + 처리수 75%) 같은 부식억제·동결방지 냉각액을 쓰고, 살균제 포함의 엄격한 수질 기준을 적용한다. 공급 온도는 칩 요구조건에 맞춰 CDU가 제어하며, 회수 온도는 공급보다 약 10~15°C 높아진다.",facts:["냉각액: PG25 등 (부식억제 + 동결방지)","수질: FWS보다 훨씬 엄격 (살균제, 저경도, 저부유물)","온도는 칩 사양 기준으로 CDU가 정밀 제어"],rel:["cdu","cold-plate","manifold","fws","water-treatment"]},fws:{cat:"cooling",name:"FWS 루프",en:"Facility Water System",short:"시설 측 1차 냉각수 계통 — 배관·펌프·밸브·열방출 설비 전체.",desc:"데이터센터 운영자가 관리하는 시설 냉각수 인프라로, CDU·팬월에 냉각수를 공급하고 냉각탑·드라이쿨러·칠러로 열을 배출한다. AI 시설은 보통 두 개의 온도 루프로 나뉜다: 팬월용 저온 냉수 루프(예: 23°C 공급)와 CDU용 고온수 루프(예: 37°C 공급). 고온수 운전이 가능할수록 냉동기 의존도가 줄어 효율이 크게 향상된다.",facts:["이중 루프 구조: 냉수(공랭용) + 고온수(액랭용)","고온수 운전 → 프리쿨링 극대화, PUE 개선","CDU를 경계로 TCS와 수리적으로 분리"],rel:["tcs","cdu","chiller","dry-cooler","cooling-tower","pumps"]},crah:{cat:"cooling",name:"팬월 · 항온항습실",en:"Fan Wall / CRAH Gallery",short:"냉수 코일과 팬으로 데이터홀 공기를 냉각하는 공조 설비. 도면의 항온항습실.",desc:"냉수 코일에 공기를 통과시켜 데이터홀 온도를 유지하는 공기냉각 설비. 벽면 일체형 대형 팬 어레이(팬월)가 최근 표준으로, 도면의 전산동 북측 항온항습실 갤러리에 일렬로 설치되어 전산실로 냉기를 공급한다. 액체냉각 시대에도 랙 발열의 약 10~20%(네트워크 장비, 전원부, 잔여 발열)는 여전히 공기로 배출되므로, 액랭 데이터홀에도 팬월은 반드시 병설된다.",facts:["냉수 코일 + EC팬 어레이 구성, N+1 이중화","액랭 랙에서도 잔여 공랭부하 처리 필수","냉수 대신 냉매를 쓰면 CRAC로 구분"],rel:["fws","containment","chiller"]},containment:{cat:"cooling",name:"열통로 격리",en:"Hot / Cold Aisle Containment",short:"서버의 열기와 냉기가 섞이지 않도록 통로를 물리적으로 분리하는 구조.",desc:"랙 열(Row)을 마주보게 배치하고 뜨거운 배기 통로(Hot Aisle) 또는 차가운 흡기 통로(Cold Aisle)를 패널·도어로 밀폐해 공기 혼합을 차단하는 기법. 공급 온도를 높게 유지할 수 있어 냉방 효율이 크게 개선되며, 공랭 구역 설계의 기본 전제다.",facts:["열기·냉기 혼합(Bypass/Recirculation) 차단","공조 공급온도 상향 → 프리쿨링 시간 확대","핫아일 격리형이 대세 (배기측 밀폐)"],rel:["crah","gpu-rack"]},gis:{cat:"power",name:"GIS (가스절연개폐장치)",en:"Gas-Insulated Switchgear",short:"특고압 수전 계통을 SF6 가스로 절연해 좁은 실내에 수용하는 개폐장치. 도면 공급동 GIS실.",desc:"한전 계통에서 인입된 특고압(22.9kV~154kV)을 차단기·단로기·모선과 함께 SF6 절연가스 탱크 안에 밀폐 수용한 수전 설비. 기중절연(AIS) 대비 설치 면적이 1/10 수준으로 작아 도면처럼 공급동 지하 GIS실에 배치할 수 있으며, 습기·먼지의 영향을 받지 않아 신뢰성이 높다. 여기서 받은 전력이 변압기를 거쳐 전기실 수배전반으로 공급된다.",facts:["특고압 수전의 관문 — 차단기·단로기·모선 일체형","SF6 절연으로 설치 면적 대폭 축소 (옥내화 가능)","후단: 변압기 → 수배전반 → UPS 순서로 급전"],rel:["transformer","switchgear","busway"]},transformer:{cat:"power",name:"변압기 · 수전설비",en:"Transformer / Utility Intake",short:"한전 계통의 특고압을 시설 배전 전압으로 낮추는 수전 설비.",desc:"전력회사 송배전 계통에서 받은 특고압(예: 22.9kV~154kV)을 시설에서 쓰는 저압(예: 380/415/480V)으로 강압하는 설비. AI 데이터센터는 캠퍼스 단위로 수백 MW를 수전하기도 하며, 변압기 용량과 계통 인입 여건이 부지 선정의 최우선 조건이 된다.",facts:["수전(인입) → 변압 → 수배전반으로 이어지는 관문","유입식(옥외)·몰드식(옥내) 구분","AI DC는 전력 인입 용량이 부지 선정의 핵심"],rel:["gis","switchgear","generator","busway"]},switchgear:{cat:"power",name:"수배전반 · 스위치기어",en:"Switchgear",short:"차단기와 보호계전기로 전력을 분배·차단·보호하는 배전반. 도면의 전기실.",desc:"변압기에서 받은 전력을 각 계통으로 분배하고, 고장 전류를 차단기로 신속히 차단해 설비와 인명을 보호하는 배전의 중추. 도면의 지하·지상 전기실-1/2에 열반(Line-up)으로 설치된다. 상용 전원과 비상발전기 사이의 절체(ATS)도 이 단계에서 이루어지며, 이중화 등급(N, N+1, 2N)에 따라 계통 구성이 달라진다.",facts:["차단기 + 보호계전기 + 계측으로 구성","상용/비상 전원 자동절체(ATS) 수행","이중화 토폴로지(N+1, 2N 등)의 골격"],rel:["transformer","generator","ups","busway"]},generator:{cat:"power",name:"비상 발전기",en:"Backup Generator",short:"정전 시 수십 초 내 기동해 시설 전체에 전력을 공급하는 비상 전원. 도면 공급동 비상발전기실.",desc:"상용 전원 상실 시 자동 기동해 데이터센터 전 부하를 담당하는 디젤(또는 가스) 발전기. 기동에서 정격 출력까지 수십 초가 걸리므로 그 공백은 UPS가 메운다. 도면처럼 공급동 발전기실에 병렬 설치되며, 급기(DA)·배기 덕트와 유류탱크실이 함께 배치된다. 현장 연료탱크로 통상 24~72시간 무보급 운전이 가능하도록 설계한다.",facts:["자동 기동 + 부하 인수: 수십 초 이내","연료 저장: 24~72시간 연속운전 기준","UPS(순간 공백)·축열조(냉각 공백)와 한 세트"],rel:["ups","switchgear","tes","battery","fuel"]},ups:{cat:"power",name:"UPS (무정전 전원장치)",en:"Uninterruptible Power Supply",short:"정전 순간부터 발전기 기동까지 끊김 없이 전력을 공급하는 장치.",desc:"배터리에 저장된 에너지를 인버터로 변환해, 정전 발생 순간부터 발전기가 부하를 인수할 때까지의 공백(수 초~수십 초)을 무순단으로 메우는 장치. 전압 강하·서지 같은 전력 품질 문제도 함께 걸러낸다. 액체냉각 시설에서는 IT 부하뿐 아니라 CDU·냉각 펌프까지 UPS로 백업하는 것이 표준이다.",facts:["백업 시간: 통상 수 분 (발전기 인수까지)","더블컨버전 방식이 데이터센터 표준","IT부하 + CDU·펌프까지 백업 (액랭 시설)"],rel:["battery","generator","pdu","cdu"]},battery:{cat:"power",name:"배터리 (축전지실)",en:"Battery / Energy Storage",short:"UPS의 에너지원. 리튬이온 전환으로 공간·수명이 크게 개선. 도면의 축전지실.",desc:"UPS가 사용하는 에너지 저장 장치로, 도면처럼 각 층 전기실 사이의 전용 축전지실에 설치된다. 기존 납축전지에서 리튬이온(LFP 등)으로 빠르게 전환되며 설치 면적과 수명, 충전 속도가 크게 개선되었다. 열폭주 위험 관리를 위한 소화·환기·이격 등 소방 규정이 함께 강화되고 있다.",facts:["리튬이온(LFP) 전환 추세 — 공간 50%↓ 수명 2배↑","수 분 단위 백업 용량으로 설계","열폭주 대비 소방·환기 요건 적용"],rel:["ups","generator","fire-gas"]},busway:{cat:"power",name:"버스웨이",en:"Busway / Busduct",short:"천장을 따라 설치되는 모선 배전 시스템 — 탭오프로 랙·PDU에 급전.",desc:"절연 하우징 안에 동/알루미늄 모선을 넣어 데이터홀 상부를 따라 배전하는 시스템. 원하는 위치에 탭오프 박스를 꽂아 PDU나 랙으로 전력을 내릴 수 있어, 케이블 트레이 방식보다 증설·재배치가 훨씬 유연하다. 랙당 100kW가 넘는 AI 시대에 대전류 배전 수단으로 채택이 급증했다.",facts:["상부 배전 + 플러그인 탭오프 구조","증설·랙 재배치에 유연 (케이블 대비)","대전류(수백~수천 A) 배전에 적합"],rel:["pdu","ups","switchgear","gpu-rack"]},pdu:{cat:"power",name:"PDU (분전반)",en:"Power Distribution Unit",short:"데이터홀 안에서 전력을 회로별로 나누고 차단·계측하는 분전 설비.",desc:"UPS/버스웨이에서 받은 전력을 랙 단위 회로로 분기하고, 회로별 차단기와 전력 계측 기능을 제공하는 데이터홀 내 분전 설비. 랙 안에 설치되어 서버에 직접 콘센트를 제공하는 랙 PDU(rPDU)와 구분된다. 회로별 실시간 계측은 용량 관리와 PUE 산출의 기초 데이터가 된다.",facts:["플로어형 PDU와 랙형 rPDU로 구분","회로별 차단 + 지능형 전력 계측","A/B 이중 전원 급전 구조의 말단"],rel:["busway","ups","gpu-rack","bms"]},fuel:{cat:"power",name:"유류 저장·이송 설비",en:"Fuel Storage & Transfer",short:"발전기 연료를 저장·이송하는 유류탱크실과 유류펌프실. 도면 공급동 서측.",desc:"비상발전기의 연속 운전을 담보하는 연료 인프라. 도면처럼 옥외 유류탱크(대용량 저장)와 발전기실 인접 유류탱크실(일일 서비스 탱크), 이송용 유류펌프실로 구성된다. 대용량 저장조에서 펌프로 각 발전기의 서비스 탱크로 연료를 이송하며, 누유 감지·방유제·소방 설비가 법적으로 요구된다.",facts:["옥외 저장탱크 + 서비스탱크 2단 구성","24~72시간 무보급 연속운전 용량 확보","누유 감지·방유제 등 위험물 안전 규정 적용"],rel:["generator","fire-gas"]},"gpu-rack":{cat:"it",name:"GPU 랙",en:"AI Compute Rack (e.g. NVL72)",short:"수십 개의 GPU를 하나로 묶은 AI 학습·추론용 초고밀도 랙.",desc:"AI 데이터센터의 핵심 부하. 예컨대 NVIDIA GB200/GB300 NVL72는 랙 하나에 72개 GPU와 36개 CPU를 NVLink로 묶어 단일 거대 가속기처럼 동작시키며, 랙당 전력이 120~140kW급에 달한다. 일반 랙(5~15kW)의 10배가 넘는 열밀도 때문에 Direct-to-Chip 액체냉각이 사실상 필수이고, 전력·냉각·바닥하중 설계 전체가 이 랙을 기준으로 결정된다.",facts:["랙당 전력: 120~140kW급 (일반 랙의 10배+)","랙 내 NVLink로 GPU 72개가 단일 도메인 구성","액체냉각(콜드플레이트) 필수 + 잔여 공랭 병행"],rel:["cold-plate","manifold","network","pdu","busway"]},network:{cat:"it",name:"네트워크 패브릭",en:"Network Fabric (InfiniBand / Ethernet)",short:"수천 개 GPU를 하나처럼 묶는 초고속 East-West 통신망.",desc:"AI 학습은 GPU 간 데이터 교환(East-West 트래픽)이 성능을 좌우하므로, 스파인-리프(Spine-Leaf) 구조의 무손실·저지연 패브릭을 별도로 구축한다. InfiniBand(NDR 400Gb/s급) 또는 RoCE 이더넷이 쓰이며, 컴퓨트/스토리지/관리망을 분리하고 GPU별로 스위치 경로를 최적화(rail-optimized)하는 것이 SuperPOD형 설계의 특징이다.",facts:["스파인-리프 토폴로지, 무손실·저지연 지향","InfiniBand NDR 400Gb/s급 또는 RoCE 이더넷","컴퓨트/스토리지/In-band 관리망 분리 구성"],rel:["gpu-rack","storage","mmr","bms"]},storage:{cat:"it",name:"고성능 스토리지",en:"High-Performance Storage",short:"학습 데이터와 체크포인트를 공급·저장하는 병렬 스토리지 시스템.",desc:"수천 개 GPU에 학습 데이터를 끊김 없이 공급하고, 학습 중간 상태(체크포인트)를 초고속으로 기록하는 스토리지 계층. 병렬 파일시스템(Lustre 계열 등)과 NVMe 올플래시가 표준이며, 전용 스토리지 패브릭으로 컴퓨트 트래픽과 분리한다. 체크포인트 쓰기 대역폭이 부족하면 GPU 전체가 대기하므로 성능 설계가 중요하다.",facts:["병렬 파일시스템 + NVMe 올플래시 구성","체크포인트 쓰기 성능이 핵심 지표","전용 스토리지 패브릭으로 트래픽 분리"],rel:["network","gpu-rack"]},mmr:{cat:"it",name:"MMR · MDF (통신실)",en:"Meet-Me Room / Main Distribution Frame",short:"통신사 회선이 인입·상호접속되는 통신 관문. 도면 1층 양측 MMR/MDF실.",desc:"외부 통신사업자의 광케이블이 건물로 인입되어 시설 내부망과 상호접속되는 공간. MDF(주배선반)는 외부 케이블과 내부 배선을 연결하는 분계점이고, MMR(Meet-Me Room)은 복수의 통신사·클라우드 사업자가 교차 연결(Cross-connect)되는 방이다. 도면처럼 동·서 양측에 이중화 배치해 단일 경로 장애를 방지하며, TPS 샤프트를 통해 각 층 전산실로 연결된다.",facts:["통신 인입의 이중화: 동·서 양측 분리 배치","MDF(분계점) → TPS(수직 샤프트) → 전산실 순서","복수 통신사 상호접속(Cross-connect) 지점"],rel:["network","storage"]},bms:{cat:"mgmt",name:"DCIM · BMS (상황실)",en:"DC Infrastructure Mgmt / Building Mgmt System",short:"전력·냉각·환경을 통합 감시하고 제어하는 시설 관제 시스템. 도면 1층 상황실.",desc:"변압기부터 랙까지의 전력 계통(EPMS), 냉각 설비, 온습도·누수 센서를 통합 감시·제어하는 시스템. 도면의 1층 상황실·스크린룸이 관제 거점이다. 냉각수 온도·유량 제어, 설비 기동 시퀀스, 경보 관리가 BMS의 영역이고, 용량 관리·자산 관리·PUE 분석은 DCIM이 담당한다. 액체냉각 도입으로 누수 감지와 CDU 연동 제어의 중요성이 크게 높아졌다.",facts:["EPMS(전력) + 냉각 제어 + 환경 감시 통합","누수 감지(Leak Detection)가 액랭 시대 필수 항목","PUE·용량·자산 관리는 DCIM 영역"],rel:["pdu","cdu","crah","network"]},"fire-gas":{cat:"mgmt",name:"가스계 소화설비",en:"Clean Agent Fire Suppression",short:"물 없이 불활성가스로 전산실 화재를 진압하는 소화 시스템. 도면의 소화가스실.",desc:"물을 쓸 수 없는 전산실·전기실을 보호하기 위해 불활성가스(IG-541 등)나 청정약제를 방출해 산소 농도를 낮춰 소화하는 설비. 도면의 소화가스실에 고압 실린더 뱅크가 설치되고, 각 보호구역까지 배관·노즐로 연결된다. 초기 연기를 감지하는 고감도 공기흡입형 감지기(VESDA)와 연동되며, 리튬이온 배터리실은 열폭주 특성 때문에 별도의 강화 기준이 적용된다.",facts:["불활성가스 방출로 산소 농도 저감 소화","고감도 흡입형 연기감지(VESDA) 연동","축전지실은 열폭주 대비 강화 기준 적용"],rel:["battery","bms"]}},su=["cooling","power","it","mgmt"];function wy(){const t=ht(v=>v.selected),e=ht(v=>v.requestFocus),n=ht(v=>v.query),i=ht(v=>v.setQuery),[r,s]=_i.useState({cooling:!0,power:!0,it:!0,mgmt:!0}),o=_i.useRef(null),[a,l]=_i.useState({top:!1,bottom:!1}),c=n.trim().toLowerCase();function f(v){return Object.keys(an).filter(m=>{const u=an[m];return!(u.cat!==v||c&&(u.name+u.en).toLowerCase().indexOf(c)===-1)})}function d(){const v=o.current;if(!v)return;const m=Math.max(0,v.scrollHeight-v.clientHeight);l({top:v.scrollTop>8,bottom:v.scrollTop<m-8})}_i.useEffect(()=>{d()},[n,t,r]),_i.useEffect(()=>{const v=o.current;if(v)return v.addEventListener("scroll",d,{passive:!0}),()=>v.removeEventListener("scroll",d)},[]);function h(v){if(v.key==="Enter")for(const m of su){const u=f(m);if(u.length){e(u[0]);return}}}const p=t?an[t]:null,_=su.some(v=>f(v).length>0);return be.jsxs("aside",{className:"learning-panel",children:[be.jsxs("div",{className:"side-head",children:[be.jsx("span",{className:"search-symbol","aria-hidden":"true",children:be.jsxs("svg",{viewBox:"0 0 72 72",focusable:"false",children:[be.jsx("circle",{cx:"30",cy:"30",r:"26"}),be.jsx("path",{d:"M48.4 48.4L63.5 63.5"})]})}),be.jsx("input",{className:"search",type:"text","aria-label":"장비와 용어 검색",placeholder:"검색",autoComplete:"off",spellCheck:"false",value:n,onChange:v=>i(v.target.value),onKeyDown:h}),be.jsx("button",{className:`search-clear${n?" show":""}`,type:"button","aria-label":"검색어 지우기",onClick:()=>i(""),children:be.jsxs("svg",{viewBox:"0 0 32 32",focusable:"false",children:[be.jsx("path",{d:"M5 5L27 27"}),be.jsx("path",{d:"M27 5L5 27"})]})})]}),be.jsxs("div",{className:`side-body${t?" has-selection":""}`,ref:o,children:[p&&be.jsxs("div",{className:"detail show",style:{"--cat":Gr[p.cat].color},children:[be.jsxs("div",{className:"d-title-block",children:[be.jsx("div",{className:"d-name",children:p.name}),be.jsx("div",{className:"d-en",children:p.en})]}),be.jsx("div",{className:"d-desc",children:p.desc}),be.jsx("div",{className:"d-facts",children:p.facts.map(v=>be.jsx("div",{className:"f",children:v},v))}),be.jsx("div",{className:"d-rel",children:p.rel.slice(0,3).filter(v=>an[v]).map(v=>be.jsx("button",{"data-cat":an[v].cat,style:{"--tag-color":Gr[an[v].cat].color},onClick:()=>e(v),children:an[v].name},v))})]}),be.jsxs("div",{className:"list",children:[su.map(v=>{const m=f(v);if(!m.length)return null;const u=!c&&r[v];return be.jsxs("div",{children:[be.jsxs("div",{className:`group-lbl${u?" collapsed":""}`,onClick:()=>s(g=>({...g,[v]:!g[v]})),children:[be.jsx("span",{className:"dot",style:{background:Gr[v].color}}),Gr[v].label]}),!u&&m.map(g=>be.jsxs("div",{className:`term-item${t===g?" sel":""}`,style:{"--cat":Gr[an[g].cat].color},onClick:()=>e(g),children:[be.jsx("span",{className:"tn",children:an[g].name}),be.jsx("span",{className:"te",children:an[g].en})]},g))]},v)}),!_&&be.jsx("div",{className:"empty",children:"일치하는 용어가 없습니다."})]})]}),be.jsx("div",{className:`scroll-edge scroll-edge-top${a.top?" visible":""}`}),be.jsx("div",{className:`scroll-edge scroll-edge-bottom${a.bottom?" visible":""}`})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="169",Ty=0,Hp=1,Ay=2,o_=1,Cy=2,Di=3,Tr=0,Tn=1,si=2,yr=0,Ws=1,Vp=2,Gp=3,Wp=4,Ry=5,Wr=100,Py=101,by=102,Dy=103,Ly=104,Uy=200,Iy=201,Ny=202,Fy=203,Lf=204,Uf=205,Oy=206,By=207,ky=208,zy=209,Hy=210,Vy=211,Gy=212,Wy=213,Xy=214,If=0,Nf=1,Ff=2,to=3,Of=4,Bf=5,kf=6,zf=7,ph=0,jy=1,Yy=2,Sr=0,qy=1,$y=2,Ky=3,Zy=4,Qy=5,Jy=6,eS=7,a_=300,no=301,io=302,Hf=303,Vf=304,Ac=306,Gf=1e3,$r=1001,Wf=1002,jn=1003,tS=1004,Va=1005,oi=1006,ou=1007,Kr=1008,Wi=1009,l_=1010,c_=1011,pa=1012,mh=1013,rs=1014,Fi=1015,Sa=1016,gh=1017,_h=1018,ro=1020,u_=35902,f_=1021,d_=1022,ai=1023,h_=1024,p_=1025,Xs=1026,so=1027,m_=1028,vh=1029,g_=1030,xh=1031,yh=1033,Al=33776,Cl=33777,Rl=33778,Pl=33779,Xf=35840,jf=35841,Yf=35842,qf=35843,$f=36196,Kf=37492,Zf=37496,Qf=37808,Jf=37809,ed=37810,td=37811,nd=37812,id=37813,rd=37814,sd=37815,od=37816,ad=37817,ld=37818,cd=37819,ud=37820,fd=37821,bl=36492,dd=36494,hd=36495,__=36283,pd=36284,md=36285,gd=36286,nS=3200,iS=3201,v_=0,rS=1,lr="",ii="srgb",Pr="srgb-linear",Sh="display-p3",Cc="display-p3-linear",ic="linear",wt="srgb",rc="rec709",sc="p3",us=7680,Xp=519,sS=512,oS=513,aS=514,x_=515,lS=516,cS=517,uS=518,fS=519,jp=35044,Yp="300 es",Oi=2e3,oc=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qp=1234567;const js=Math.PI/180,ma=180/Math.PI;function mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function Mh(t,e){return(t%e+e)%e}function dS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ko(t,e,n){return(1-n)*t+n*e}function pS(t,e,n,i){return Ko(t,e,1-Math.exp(-n*i))}function mS(t,e=1){return e-Math.abs(Mh(t,e*2)-e)}function gS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _S(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function xS(t,e){return t+Math.random()*(e-t)}function yS(t){return t*(.5-Math.random())}function SS(t){t!==void 0&&(qp=t);let e=qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MS(t){return t*js}function ES(t){return t*ma}function wS(t){return(t&t-1)===0&&t!==0}function TS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function AS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function CS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const $p={DEG2RAD:js,RAD2DEG:ma,generateUUID:mo,clamp:mn,euclideanModulo:Mh,mapLinear:dS,inverseLerp:hS,lerp:Ko,damp:pS,pingpong:mS,smoothstep:gS,smootherstep:_S,randInt:vS,randFloat:xS,randFloatSpread:yS,seededRandom:SS,degToRad:MS,radToDeg:ES,isPowerOfTwo:wS,ceilPowerOfTwo:TS,floorPowerOfTwo:AS,setQuaternionFromProperEuler:CS,normalize:dn,denormalize:ws};class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],u=r[6],g=r[1],x=r[4],M=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*v+a*g+l*P,s[3]=o*m+a*x+l*R,s[6]=o*u+a*M+l*A,s[1]=c*v+f*g+d*P,s[4]=c*m+f*x+d*R,s[7]=c*u+f*M+d*A,s[2]=h*v+p*g+_*P,s[5]=h*m+p*x+_*R,s[8]=h*u+p*M+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new Je;function y_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function RS(){const t=ac("canvas");return t.style.display="block",t}const Kp={};function Dl(t){t in Kp||(Kp[t]=!0,console.warn(t))}function PS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function bS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qp=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[Pr]:{transfer:ic,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:wt,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Cc]:{transfer:ic,primaries:sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Zp)},[Sh]:{transfer:wt,primaries:sc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Zp).convertLinearToSRGB()}},LS=new Set([Pr,Cc]),gt={enabled:!0,_workingColorSpace:Pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ro[e].toReference,r=Ro[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ro[t].primaries},getTransfer:function(t){return t===lr?ic:Ro[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ro[e].luminanceCoefficients)}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class US{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=ac("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IS=0;class S_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class An extends po{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=$r,r=$r,s=oi,o=Kr,a=ai,l=Wi,c=An.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=mo(),this.name="",this.source=new S_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=a_;An.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,P=(u+1)/2,R=(f+h)/4,A=(d+v)/4,b=(_+m)/4;return x>M&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new S_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends FS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M_ extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OS extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==h||c!==p||f!==_){let m=1-a;const u=l*h+c*p+f*_+d*v,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,u*g);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const M=a*g;if(l=l*m+h*M,c=c*m+p*M,f=f*m+_*M,d=d*m+v*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-a*p,e[n+2]=c*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new z,Jp=new Ma;class os{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Wa.subVectors(this.max,Po),ds.subVectors(e.a,Po),hs.subVectors(e.b,Po),ps.subVectors(e.c,Po),Ki.subVectors(hs,ds),Zi.subVectors(ps,hs),Ur.subVectors(ds,ps);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Ur.z,Ur.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Ur.z,0,-Ur.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Ur.y,Ur.x,0];return!fu(n,ds,hs,ps,Wa)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,ds,hs,ps,Wa))?!1:(Xa.crossVectors(Ki,Zi),n=[Xa.x,Xa.y,Xa.z],fu(n,ds,hs,ps,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,Ga=new os,ds=new z,hs=new z,ps=new z,Ki=new z,Zi=new z,Ur=new z,Po=new z,Wa=new z,Xa=new z,Ir=new z;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),f=i.dot(Ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const BS=new os,bo=new z,du=new z;class Ea{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(du)),this.expandByPoint(bo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new z,hu=new z,ja=new z,Qi=new z,pu=new z,Ya=new z,mu=new z;class Eh{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),ja.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ja),a=Qi.dot(this.direction),l=-Qi.dot(ja),c=Qi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const v=1/f;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hu).addScaledVector(ja,h),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),Ya.subVectors(i,e),mu.crossVectors(pu,Ya);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Qi,Ya));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Qi));if(c<0||l+c>o)return null;const f=-a*Qi.dot(mu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,_,v,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,v=c*d;n[0]=h+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,v=a*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*f,n[4]=v-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+v,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kS,e,zS)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ji.crossVectors(i,Rn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ji.crossVectors(i,Rn)),Ji.normalize(),qa.crossVectors(Rn,Ji),r[0]=Ji.x,r[4]=qa.x,r[8]=Rn.x,r[1]=Ji.y,r[5]=qa.y,r[9]=Rn.y,r[2]=Ji.z,r[6]=qa.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],g=i[3],x=i[7],M=i[11],P=i[15],R=r[0],A=r[4],b=r[8],Z=r[12],y=r[1],w=r[5],W=r[9],j=r[13],J=r[2],ae=r[6],K=r[10],ce=r[14],U=r[3],se=r[7],re=r[11],_e=r[15];return s[0]=o*R+a*y+l*J+c*U,s[4]=o*A+a*w+l*ae+c*se,s[8]=o*b+a*W+l*K+c*re,s[12]=o*Z+a*j+l*ce+c*_e,s[1]=f*R+d*y+h*J+p*U,s[5]=f*A+d*w+h*ae+p*se,s[9]=f*b+d*W+h*K+p*re,s[13]=f*Z+d*j+h*ce+p*_e,s[2]=_*R+v*y+m*J+u*U,s[6]=_*A+v*w+m*ae+u*se,s[10]=_*b+v*W+m*K+u*re,s[14]=_*Z+v*j+m*ce+u*_e,s[3]=g*R+x*y+M*J+P*U,s[7]=g*A+x*w+M*ae+P*se,s[11]=g*b+x*W+M*K+P*re,s[15]=g*Z+x*j+M*ce+P*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],g=d*m*c-v*h*c+v*l*p-a*m*p-d*l*u+a*h*u,x=_*h*c-f*m*c-_*l*p+o*m*p+f*l*u-o*h*u,M=f*v*c-_*d*c+_*a*p-o*v*p-f*a*u+o*d*u,P=_*d*l-f*v*l-_*a*h+o*v*h+f*a*m-o*d*m,R=n*g+i*x+r*M+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*u-i*h*u)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(f*m*s-_*h*s+_*r*p-n*m*p-f*r*u+n*h*u)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(_*d*s-f*v*s-_*i*p+n*v*p+f*i*u-n*d*u)*A,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(f*v*r-_*d*r+_*i*h-n*v*h-f*i*m+n*d*m)*A,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,_=s*d,v=o*f,m=o*d,u=a*d,g=l*c,x=l*f,M=l*d,P=i.x,R=i.y,A=i.z;return r[0]=(1-(v+u))*P,r[1]=(p+M)*P,r[2]=(_-x)*P,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+u))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(_+x)*A,r[9]=(m-g)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ms.set(r[0],r[1],r[2]).length();const o=ms.set(r[4],r[5],r[6]).length(),a=ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,f=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Oi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let _,v;if(a===Oi)_=(o+s)*d,v=-2*d;else if(a===oc)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ms=new z,Jn=new Pt,kS=new z(0,0,0),zS=new z(1,1,1),Ji=new z,qa=new z,Rn=new z,em=new Pt,tm=new Ma;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const nm=new z,gs=new Ma,Ri=new Pt,$a=new z,Do=new z,VS=new z,GS=new Ma,im=new z(1,0,0),rm=new z(0,1,0),sm=new z(0,0,1),om={type:"added"},WS={type:"removed"},_s={type:"childadded",child:null},gu={type:"childremoved",child:null};class Zt extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new z,n=new Mi,i=new Ma,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Do,$a,this.up):Ri.lookAt($a,Do,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Ri),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WS),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new z,Pi=new z,_u=new z,bi=new z,vs=new z,xs=new z,am=new z,vu=new z,xu=new z,yu=new z,Su=new Ft,Mu=new Ft,Eu=new Ft;class Gn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Pi.subVectors(i,n),_u.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Pi),l=ei.dot(_u),c=Pi.dot(Pi),f=Pi.dot(_u),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Pi.subVectors(e,n),ei.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;vs.subVectors(r,i),xs.subVectors(s,i),vu.subVectors(e,i);const l=vs.dot(vu),c=xs.dot(vu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const f=vs.dot(xu),d=xs.dot(xu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(vs,o);yu.subVectors(e,s);const p=vs.dot(yu),_=xs.dot(yu);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(xs,a);const m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return am.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(am,a);const u=1/(m+v+h);return o=v*u,a=h*u,n.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=Mh(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return gt.fromWorkingColorSpace(on.copy(this),e),Math.round(mn(on.r*255,0,255))*65536+Math.round(mn(on.g*255,0,255))*256+Math.round(mn(on.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ii){gt.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Ka);const i=Ko(er.h,Ka.h,n),r=Ko(er.s,Ka.s,n),s=Ko(er.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new He;He.NAMES=E_;let XS=0;class go extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Ws,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Uf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lf&&(i.blendSrc=this.blendSrc),this.blendDst!==Uf&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rc extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new z,Za=new pt;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class w_ extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jS=0;const kn=new Pt,Tu=new Zt,ys=new z,Pn=new os,Lo=new os,qt=new z;class di extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?T_:w_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Pn.min,Lo.min),Pn.expandByPoint(qt),qt.addVectors(Pn.max,Lo.max),Pn.expandByPoint(qt)):(Pn.expandByPoint(Lo.min),Pn.expandByPoint(Lo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)qt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),qt.add(ys)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const c=new z,f=new z,d=new z,h=new pt,p=new pt,_=new pt,v=new z,m=new z;function u(b,Z,y){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,Z),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,y),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(w),a[b].add(v),a[Z].add(v),a[y].add(v),l[b].add(m),l[Z].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,Z=g.length;b<Z;++b){const y=g[b],w=y.start,W=y.count;for(let j=w,J=w+W;j<J;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new z,M=new z,P=new z,R=new z;function A(b){P.fromBufferAttribute(r,b),R.copy(P);const Z=a[b];x.copy(Z),x.sub(P.multiplyScalar(P.dot(Z))).normalize(),M.crossVectors(R,Z);const w=M.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,w)}for(let b=0,Z=g.length;b<Z;++b){const y=g[b],w=y.start,W=y.count;for(let j=w,J=w+W;j<J;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,f=new z,d=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new ui(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new Pt,Nr=new Eh,Qa=new Ea,cm=new z,Ja=new z,el=new z,tl=new z,Au=new z,nl=new z,um=new z,il=new z;class St extends Zt{constructor(e=new di,n=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Au.fromBufferAttribute(d,e),o?nl.addScaledVector(Au,f):nl.addScaledVector(Au.sub(n),f))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Qa.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Qa,cm)===null||Nr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,P=x;M<P;M+=3){const R=a.getX(M),A=a.getX(M+1),b=a.getX(M+2);r=rl(this,u,e,i,c,f,d,R,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=rl(this,o,e,i,c,f,d,g,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,P=x;M<P;M+=3){const R=M,A=M+1,b=M+2;r=rl(this,u,e,i,c,f,d,R,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=m,x=m+1,M=m+2;r=rl(this,o,e,i,c,f,d,g,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function YS(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(il);return c<n.near||c>n.far?null:{distance:c,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ja),t.getVertexPosition(l,el),t.getVertexPosition(c,tl);const f=YS(t,e,n,i,Ja,el,tl,um);if(f){const d=new z;Gn.getBarycoord(um,Ja,el,tl,d),r&&(f.uv=Gn.getInterpolatedAttribute(r,a,l,c,d,new pt)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,a,l,c,d,new pt)),o&&(f.normal=Gn.getInterpolatedAttribute(o,a,l,c,d,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Gn.getNormal(Ja,el,tl,h.normal),f.face=h,f.barycoord=d}return f}class Ei extends di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(d,2));function _(v,m,u,g,x,M,P,R,A,b,Z){const y=M/A,w=P/b,W=M/2,j=P/2,J=R/2,ae=A+1,K=b+1;let ce=0,U=0;const se=new z;for(let re=0;re<K;re++){const _e=re*w-j;for(let Oe=0;Oe<ae;Oe++){const et=Oe*y-W;se[v]=et*g,se[m]=_e*x,se[u]=J,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[u]=R>0?1:-1,f.push(se.x,se.y,se.z),d.push(Oe/A),d.push(1-re/b),ce+=1}}for(let re=0;re<b;re++)for(let _e=0;_e<A;_e++){const Oe=h+_e+ae*re,et=h+_e+ae*(re+1),ee=h+(_e+1)+ae*(re+1),he=h+(_e+1)+ae*re;l.push(Oe,et,he),l.push(et,ee,he),U+=6}a.addGroup(p,U,Z),p+=U,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function qS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function A_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const $S={clone:oo,merge:hn};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=qS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C_ extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new z,fm=new pt,dm=new pt;class Vn extends C_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,n){return this.getViewBounds(e,fm,dm),n.subVectors(dm,fm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ss=-90,Ms=1;class QS extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Ss,Ms,e,n);r.layers=this.layers,this.add(r);const s=new Vn(Ss,Ms,e,n);s.layers=this.layers,this.add(s);const o=new Vn(Ss,Ms,e,n);o.layers=this.layers,this.add(o);const a=new Vn(Ss,Ms,e,n);a.layers=this.layers,this.add(a);const l=new Vn(Ss,Ms,e,n);l.layers=this.layers,this.add(l);const c=new Vn(Ss,Ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class R_ extends An{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JS extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:yr});s.uniforms.tEquirect.value=n;const o=new St(r,s),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=oi),new QS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cu=new z,eM=new z,tM=new Je;class sr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(eM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tM.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ea,sl=new z;class Th{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],u=r[12],g=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-u).normalize(),i[1].setComponents(l+s,h+c,m+p,M+u).normalize(),i[2].setComponents(l+o,h+f,m+_,M+g).normalize(),i[3].setComponents(l-o,h-f,m-_,M-g).normalize(),i[4].setComponents(l-a,h-d,m-v,M-x).normalize(),n===Oi)i[5].setComponents(l+a,h+d,m+v,M+x).normalize();else if(n===oc)i[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class _o extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<f;u++){const g=u*h-o;for(let x=0;x<c;x++){const M=x*d-s;_.push(M,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,M=g+c*(u+1),P=g+1+c*(u+1),R=g+1+c*u;p.push(x,M,R),p.push(M,P,R)}this.setIndex(p),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AM=`#define PI 3.141592653589793
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
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`
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
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,t1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,fE=`#define DISTANCE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#define LAMBERT
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
}`,xE=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,ME=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,wE=`#define PHONG
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
}`,TE=`#define PHONG
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
}`,AE=`#define STANDARD
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
}`,CE=`#define STANDARD
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
}`,RE=`#define TOON
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
}`,PE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,DE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,UE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,NE=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:iM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:oM,alphatest_fragment:aM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:dM,begin_vertex:hM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:wM,color_vertex:TM,common:AM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:RM,displacementmap_pars_vertex:PM,displacementmap_vertex:bM,emissivemap_fragment:DM,emissivemap_pars_fragment:LM,colorspace_fragment:UM,colorspace_pars_fragment:IM,envmap_fragment:NM,envmap_common_pars_fragment:FM,envmap_pars_fragment:OM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:zM,fog_pars_vertex:HM,fog_fragment:VM,fog_pars_fragment:GM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:YM,lights_pars_begin:qM,lights_toon_fragment:KM,lights_toon_pars_fragment:ZM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:e1,lights_physical_pars_fragment:t1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:r1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:S1,normal_pars_fragment:M1,normal_pars_vertex:E1,normal_vertex:w1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:P1,opaque_fragment:b1,packing:D1,premultiplied_alpha_fragment:L1,project_vertex:U1,dithering_fragment:I1,dithering_pars_fragment:N1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:k1,shadowmap_vertex:z1,shadowmask_pars_fragment:H1,skinbase_vertex:V1,skinning_pars_vertex:G1,skinning_vertex:W1,skinnormal_vertex:X1,specularmap_fragment:j1,specularmap_pars_fragment:Y1,tonemapping_fragment:q1,tonemapping_pars_fragment:$1,transmission_fragment:K1,transmission_pars_fragment:Z1,uv_pars_fragment:Q1,uv_pars_vertex:J1,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:oE,cube_frag:aE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:fE,equirect_vert:dE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:xE,meshmatcap_vert:yE,meshmatcap_frag:SE,meshnormal_vert:ME,meshnormal_frag:EE,meshphong_vert:wE,meshphong_frag:TE,meshphysical_vert:AE,meshphysical_frag:CE,meshtoon_vert:RE,meshtoon_frag:PE,points_vert:bE,points_frag:DE,shadow_vert:LE,shadow_frag:UE,sprite_vert:IE,sprite_frag:NE},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},gi={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ol={r:0,b:0,g:0},Or=new Mi,FE=new Pt;function OE(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function v(g){let x=!1;const M=_(g);M===null?u(a,l):M&&M.isColor&&(u(M,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Ac)?(f===void 0&&(f=new St(new Ei(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:oo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Or.copy(x.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(Or)),f.material.toneMapped=gt.getTransfer(M.colorSpace)!==wt,(d!==M||h!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new St(new _o(2,2),new Xi({name:"BackgroundMaterial",uniforms:oo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=gt.getTransfer(M.colorSpace)!==wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,x){g.getRGB(ol,A_(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:v,addToRenderList:m}}function BE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,w,W,j,J){let ae=!1;const K=d(j,W,w);s!==K&&(s=K,c(s.object)),ae=p(y,j,W,J),ae&&_(y,j,W,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(y,w,W,j),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function d(y,w,W){const j=W.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let ae=J[w.id];ae===void 0&&(ae={},J[w.id]=ae);let K=ae[j];return K===void 0&&(K=h(l()),ae[j]=K),K}function h(y){const w=[],W=[],j=[];for(let J=0;J<n;J++)w[J]=0,W[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:j,object:y,attributes:{},index:null}}function p(y,w,W,j){const J=s.attributes,ae=w.attributes;let K=0;const ce=W.getAttributes();for(const U in ce)if(ce[U].location>=0){const re=J[U];let _e=ae[U];if(_e===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;K++}return s.attributesNum!==K||s.index!==j}function _(y,w,W,j){const J={},ae=w.attributes;let K=0;const ce=W.getAttributes();for(const U in ce)if(ce[U].location>=0){let re=ae[U];re===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),J[U]=_e,K++}s.attributes=J,s.attributesNum=K,s.index=j}function v(){const y=s.newAttributes;for(let w=0,W=y.length;w<W;w++)y[w]=0}function m(y){u(y,0)}function u(y,w){const W=s.newAttributes,j=s.enabledAttributes,J=s.attributeDivisors;W[y]=1,j[y]===0&&(t.enableVertexAttribArray(y),j[y]=1),J[y]!==w&&(t.vertexAttribDivisor(y,w),J[y]=w)}function g(){const y=s.newAttributes,w=s.enabledAttributes;for(let W=0,j=w.length;W<j;W++)w[W]!==y[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function x(y,w,W,j,J,ae,K){K===!0?t.vertexAttribIPointer(y,w,W,J,ae):t.vertexAttribPointer(y,w,W,j,J,ae)}function M(y,w,W,j){v();const J=j.attributes,ae=W.getAttributes(),K=w.defaultAttributeValues;for(const ce in ae){const U=ae[ce];if(U.location>=0){let se=J[ce];if(se===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const re=se.normalized,_e=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const et=Oe.buffer,ee=Oe.type,he=Oe.bytesPerElement,Ae=ee===t.INT||ee===t.UNSIGNED_INT||se.gpuType===mh;if(se.isInterleavedBufferAttribute){const we=se.data,je=we.stride,Be=se.offset;if(we.isInstancedInterleavedBuffer){for(let at=0;at<U.locationSize;at++)u(U.location+at,we.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let at=0;at<U.locationSize;at++)m(U.location+at);t.bindBuffer(t.ARRAY_BUFFER,et);for(let at=0;at<U.locationSize;at++)x(U.location+at,_e/U.locationSize,ee,re,je*he,(Be+_e/U.locationSize*at)*he,Ae)}else{if(se.isInstancedBufferAttribute){for(let we=0;we<U.locationSize;we++)u(U.location+we,se.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<U.locationSize;we++)m(U.location+we);t.bindBuffer(t.ARRAY_BUFFER,et);for(let we=0;we<U.locationSize;we++)x(U.location+we,_e/U.locationSize,ee,re,_e*he,_e/U.locationSize*we*he,Ae)}}else if(K!==void 0){const re=K[ce];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(U.location,re);break;case 3:t.vertexAttrib3fv(U.location,re);break;case 4:t.vertexAttrib4fv(U.location,re);break;default:t.vertexAttrib1fv(U.location,re)}}}}g()}function P(){b();for(const y in i){const w=i[y];for(const W in w){const j=w[W];for(const J in j)f(j[J].object),delete j[J];delete w[W]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const W in w){const j=w[W];for(const J in j)f(j[J].object),delete j[J];delete w[W]}delete i[y.id]}function A(y){for(const w in i){const W=i[w];if(W[y.id]===void 0)continue;const j=W[y.id];for(const J in j)f(j[J].object),delete j[J];delete W[y.id]}}function b(){Z(),o=!0,s!==r&&(s=r,c(s.object))}function Z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:Z,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function kE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=f[v];for(let v=0;v<h.length;v++)n.update(_,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function HE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new sr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,x=g*4;let M=u.clippingState||null;l.value=M,M=f(_,h,x,p);for(let P=0;P!==x;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function VE(t){let e=new WeakMap;function n(o,a){return a===Hf?o.mapping=no:a===Vf&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hf||a===Vf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class b_ extends C_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,hm=[.125,.215,.35,.446,.526,.582],Xr=20,Ru=new b_,pm=new He;let Pu=null,bu=0,Du=0,Lu=!1;const Vr=(1+Math.sqrt(5))/2,Es=1/Vr,mm=[new z(-Vr,Es,0),new z(Vr,Es,0),new z(-Es,0,Vr),new z(Es,0,Vr),new z(0,Vr,-Es),new z(0,Vr,Es),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,bu,Du),this._renderer.xr.enabled=Lu,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Sa,format:ai,colorSpace:Pr,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(s)),this._blurMaterial=WE(s,e,n)}return r}_compileMaterial(e){const n=new St(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new Vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(pm),f.toneMapping=Sr,f.autoClear=!1;const p=new Rc({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new St(new Ei,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(pm),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;al(r,g*x,u>2?x:0,x,x),f.setRenderTarget(r),v&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new St(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),v=s/_,m=isFinite(s)?1+Math.floor(f*v):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const u=[];let g=0;for(let A=0;A<Xr;++A){const b=A/v,Z=Math.exp(-b*b/2);u.push(Z),A===0?g+=Z:A<m&&(g+=2*Z)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const M=this._sizeLods[r],P=3*M*(r>x-Os?r-x+Os:0),R=4*(this._cubeSize-M);al(n,P,R,3*M,2*M),l.setRenderTarget(n),l.render(d,Ru)}}function GE(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Os?l=hm[o-t+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,v=3,m=2,u=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,b=R>2?0:-1,Z=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(Z,v*_*R),x.set(h,m*_*R);const y=[R,R,R,R,R,R];M.set(y,u*_*R)}const P=new di;P.setAttribute("position",new ui(g,v)),P.setAttribute("uv",new ui(x,m)),P.setAttribute("faceIndex",new ui(M,u)),e.push(P),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WE(t,e,n){const i=new Float32Array(Xr),r=new z(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function vm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function xm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function XE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hf||l===Vf,f=l===no||l===io;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function jE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,M=g.length;x<M;x+=3){const P=g[x+0],R=g[x+1],A=g[x+2];h.push(P,R,R,A,A,P)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,M=g.length/3-1;x<M;x+=3){const P=x+0,R=x+1,A=x+2;h.push(P,R,R,A,A,P)}}else return;const m=new(y_(h)?T_:w_)(h,1);m.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function qE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g];for(let g=0;g<v.length;g++)n.update(u,i,v[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function $E(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KE(t,e,n){const i=new WeakMap,r=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*d),b=new M_(A,P,R,d);b.type=Fi,b.needsUpdate=!0;const Z=M*4;for(let w=0;w<d;w++){const W=u[w],j=g[w],J=x[w],ae=P*R*4*w;for(let K=0;K<W.count;K++){const ce=K*Z;_===!0&&(r.fromBufferAttribute(W,K),A[ae+ce+0]=r.x,A[ae+ce+1]=r.y,A[ae+ce+2]=r.z,A[ae+ce+3]=0),v===!0&&(r.fromBufferAttribute(j,K),A[ae+ce+4]=r.x,A[ae+ce+5]=r.y,A[ae+ce+6]=r.z,A[ae+ce+7]=0),m===!0&&(r.fromBufferAttribute(J,K),A[ae+ce+8]=r.x,A[ae+ce+9]=r.y,A[ae+ce+10]=r.z,A[ae+ce+11]=J.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new pt(P,R)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ZE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class D_ extends An{constructor(e,n,i,r,s,o,a,l,c,f=Xs){if(f!==Xs&&f!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Xs&&(i=rs),i===void 0&&f===so&&(i=ro),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L_=new An,ym=new D_(1,1),U_=new M_,I_=new OS,N_=new R_,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),jt(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),jt(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),jt(n,i)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ym.compareFunction=x_,s=ym):s=L_,n.setTexture2D(e||s,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||I_,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||N_,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||U_,r)}function _w(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function vw(t,e){t.uniform1fv(this.addr,e)}function xw(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function yw(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function Sw(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function Mw(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ew(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ww(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Tw(t,e){t.uniform1iv(this.addr,e)}function Aw(t,e){t.uniform2iv(this.addr,e)}function Cw(t,e){t.uniform3iv(this.addr,e)}function Rw(t,e){t.uniform4iv(this.addr,e)}function Pw(t,e){t.uniform1uiv(this.addr,e)}function bw(t,e){t.uniform2uiv(this.addr,e)}function Dw(t,e){t.uniform3uiv(this.addr,e)}function Lw(t,e){t.uniform4uiv(this.addr,e)}function Uw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||L_,s[o])}function Iw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||I_,s[o])}function Nw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||N_,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||U_,s[o])}function Ow(t){switch(t){case 5126:return vw;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Pw;case 36294:return bw;case 36295:return Dw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Fw}}class Bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_w(n.type)}}class kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ow(n.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function Hw(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(n,c===void 0?new Bw(a,t,e):new kw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new zw(a),Am(n,d)),n=d}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Hw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Vw=37297;let Gw=0;function Ww(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Xw(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===sc&&n===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&n===sc&&(i="LinearSRGBToLinearDisplayP3"),t){case Pr:case Cc:return[i,"LinearTransferOETF"];case ii:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ww(t.getShaderSource(e),o)}else return r}function jw(t,e){const n=Xw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Yw(t,e){let n;switch(e){case qy:n="Linear";break;case $y:n="Reinhard";break;case Ky:n="Cineon";break;case Zy:n="ACESFilmic";break;case Jy:n="AgX";break;case eS:n="Neutral";break;case Qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new z;function qw(){gt.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function Kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Zw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ko(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(t){return t.replace(Qw,eT)}const Jw=new Map;function eT(t,e){let n=Qe[e];if(n===void 0){const i=Jw.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(n)}const tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(tT,nT)}function nT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function iT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function rT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function oT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case jy:e="ENVMAP_BLENDING_MIX";break;case Yy:e="ENVMAP_BLENDING_ADD";break}return e}function aT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iT(n),c=rT(n),f=sT(n),d=oT(n),h=aT(n),p=$w(n),_=Kw(s),v=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ko).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ko).join(`
`),u.length>0&&(u+=`
`)):(m=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),u=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Sr?Yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,jw("linearToOutputTexel",n.outputColorSpace),qw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),o=_d(o),o=Pm(o,n),o=bm(o,n),a=_d(a),a=Pm(a,n),a=bm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+o,M=g+u+a,P=Cm(r,r.VERTEX_SHADER,x),R=Cm(r,r.FRAGMENT_SHADER,M);r.attachShader(v,P),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(P).trim(),J=r.getShaderInfoLog(R).trim();let ae=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,R);else{const ce=Rm(r,P,"vertex"),U=Rm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+ce+`
`+U)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||J==="")&&(K=!1);K&&(w.diagnostics={runnable:ae,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:u}})}r.deleteShader(P),r.deleteShader(R),b=new Ll(r,v),Z=Zw(r,v)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let Z;this.getAttributes=function(){return Z===void 0&&A(this),Z};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Vw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let cT=0;class uT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}}function dT(t,e,n,i,r,s,o){const a=new wh,l=new uT,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,w,W,j,J){const ae=j.fog,K=J.geometry,ce=y.isMeshStandardMaterial?j.environment:null,U=(y.isMeshStandardMaterial?n:e).get(y.envMap||ce),se=U&&U.mapping===Ac?U.image.height:null,re=v[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Oe=_e!==void 0?_e.length:0;let et=0;K.morphAttributes.position!==void 0&&(et=1),K.morphAttributes.normal!==void 0&&(et=2),K.morphAttributes.color!==void 0&&(et=3);let ee,he,Ae,we;if(re){const Mt=gi[re];ee=Mt.vertexShader,he=Mt.fragmentShader}else ee=y.vertexShader,he=y.fragmentShader,l.update(y),Ae=l.getVertexShaderID(y),we=l.getFragmentShaderID(y);const je=t.getRenderTarget(),Be=J.isInstancedMesh===!0,at=J.isBatchedMesh===!0,ft=!!y.map,rt=!!y.matcap,L=!!U,Ht=!!y.aoMap,Ke=!!y.lightMap,st=!!y.bumpMap,ke=!!y.normalMap,dt=!!y.displacementMap,Ne=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,G=y.anisotropy>0,ie=y.clearcoat>0,fe=y.dispersion>0,ne=y.iridescence>0,Le=y.sheen>0,xe=y.transmission>0,ye=G&&!!y.anisotropyMap,ct=ie&&!!y.clearcoatMap,me=ie&&!!y.clearcoatNormalMap,Ce=ie&&!!y.clearcoatRoughnessMap,Ve=ne&&!!y.iridescenceMap,Ge=ne&&!!y.iridescenceThicknessMap,Re=Le&&!!y.sheenColorMap,I=Le&&!!y.sheenRoughnessMap,F=!!y.specularMap,Y=!!y.specularColorMap,T=!!y.specularIntensityMap,H=xe&&!!y.transmissionMap,D=xe&&!!y.thicknessMap,O=!!y.gradientMap,V=!!y.alphaMap,oe=y.alphaTest>0,We=!!y.alphaHash,qe=!!y.extensions;let mt=Sr;y.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Xe={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:he,defines:y.defines,customVertexShaderID:Ae,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:at,batchingColor:at&&J._colorsTexture!==null,instancing:Be,instancingColor:Be&&J.instanceColor!==null,instancingMorph:Be&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:je===null?t.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Pr,alphaToCoverage:!!y.alphaToCoverage,map:ft,matcap:rt,envMap:L,envMapMode:L&&U.mapping,envMapCubeUVHeight:se,aoMap:Ht,lightMap:Ke,bumpMap:st,normalMap:ke,displacementMap:p&&dt,emissiveMap:Ne,normalMapObjectSpace:ke&&y.normalMapType===rS,normalMapTangentSpace:ke&&y.normalMapType===v_,metalnessMap:C,roughnessMap:S,anisotropy:G,anisotropyMap:ye,clearcoat:ie,clearcoatMap:ct,clearcoatNormalMap:me,clearcoatRoughnessMap:Ce,dispersion:fe,iridescence:ne,iridescenceMap:Ve,iridescenceThicknessMap:Ge,sheen:Le,sheenColorMap:Re,sheenRoughnessMap:I,specularMap:F,specularColorMap:Y,specularIntensityMap:T,transmission:xe,transmissionMap:H,thicknessMap:D,gradientMap:O,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:V,alphaTest:oe,alphaHash:We,combine:y.combine,mapUv:ft&&m(y.map.channel),aoMapUv:Ht&&m(y.aoMap.channel),lightMapUv:Ke&&m(y.lightMap.channel),bumpMapUv:st&&m(y.bumpMap.channel),normalMapUv:ke&&m(y.normalMap.channel),displacementMapUv:dt&&m(y.displacementMap.channel),emissiveMapUv:Ne&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:ye&&m(y.anisotropyMap.channel),clearcoatMapUv:ct&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(y.sheenRoughnessMap.channel),specularMapUv:F&&m(y.specularMap.channel),specularColorMapUv:Y&&m(y.specularColorMap.channel),specularIntensityMapUv:T&&m(y.specularIntensityMap.channel),transmissionMapUv:H&&m(y.transmissionMap.channel),thicknessMapUv:D&&m(y.thicknessMap.channel),alphaMapUv:V&&m(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ke||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(ft||V),fog:!!ae,useFog:y.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:ft&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&y.extensions.multiDraw===!0||at)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function g(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)w.push(W),w.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(x(w,y),M(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const w=v[y.type];let W;if(w){const j=gi[w];W=$S.clone(j.uniforms)}else W=y.uniforms;return W}function R(y,w){let W;for(let j=0,J=f.length;j<J;j++){const ae=f[j];if(ae.cacheKey===w){W=ae,++W.usedTimes;break}}return W===void 0&&(W=new lT(t,w,y,s),f.push(W)),W}function A(y){if(--y.usedTimes===0){const w=f.indexOf(y);f[w]=f[f.length-1],f.pop(),y.destroy()}}function b(y){l.remove(y)}function Z(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:f,dispose:Z}}function hT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,v,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function a(d,h,p,_,v,m){const u=o(d,h,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,v,m){const u=o(d,h,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||pT),i.length>1&&i.sort(h||Um),r.length>1&&r.sort(h||Um)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function mT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Im,t.set(i,[o])):r>=s.length?(o=new Im,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new He};break;case"SpotLight":n={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function _T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vT=0;function xT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yT(t){const e=new gT,n=_T(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Pt,o=new Pt;function a(c){let f=0,d=0,h=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,g=0,x=0,M=0,P=0,R=0,A=0;c.sort(xT);for(let Z=0,y=c.length;Z<y;Z++){const w=c[Z],W=w.color,j=w.intensity,J=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=W.r*j,d+=W.g*j,h+=W.b*j;else if(w.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(w.sh.coefficients[K],j);A++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ce=w.shadow,U=n.get(w);U.shadowIntensity=ce.intensity,U.shadowBias=ce.bias,U.shadowNormalBias=ce.normalBias,U.shadowRadius=ce.radius,U.shadowMapSize=ce.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=K,p++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(W).multiplyScalar(j),K.distance=J,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,i.spot[v]=K;const ce=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ce.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[v]=ce.matrix,w.castShadow){const U=n.get(w);U.shadowIntensity=ce.intensity,U.shadowBias=ce.bias,U.shadowNormalBias=ce.normalBias,U.shadowRadius=ce.radius,U.shadowMapSize=ce.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=ae,M++}v++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy(W).multiplyScalar(j),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=K,m++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){const ce=w.shadow,U=n.get(w);U.shadowIntensity=ce.intensity,U.shadowBias=ce.bias,U.shadowNormalBias=ce.normalBias,U.shadowRadius=ce.radius,U.shadowMapSize=ce.mapSize,U.shadowCameraNear=ce.camera.near,U.shadowCameraFar=ce.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=w.shadow.matrix,x++}i.point[_]=K,_++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(j),K.groundColor.copy(w.groundColor).multiplyScalar(j),i.hemi[u]=K,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,b.directionalLength=p,b.pointLength=_,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=A,i.version=vT++)}function l(c,f){let d=0,h=0,p=0,_=0,v=0;const m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Nm(t){const e=new yT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ST(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Nm(t),e.set(r,[a])):s>=o.length?(a=new Nm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class MT extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TT=`uniform sampler2D shadow_pass;
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
}`;function AT(t,e,n){let i=new Th;const r=new pt,s=new pt,o=new Ft,a=new MT({depthPacking:iS}),l=new ET,c={},f=n.maxTextureSize,d={[Tr]:Tn,[Tn]:Tr,[si]:si},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:wT,fragmentShader:TT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o_;let u=this.type;this.render=function(R,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const Z=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(yr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=u!==Di&&this.type===Di,J=u===Di&&this.type!==Di;for(let ae=0,K=R.length;ae<K;ae++){const ce=R[ae],U=ce.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const se=U.getFrameExtents();if(r.multiply(se),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/se.x),r.x=s.x*se.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/se.y),r.y=s.y*se.y,U.mapSize.y=s.y)),U.map===null||j===!0||J===!0){const _e=this.type!==Di?{minFilter:jn,magFilter:jn}:{};U.map!==null&&U.map.dispose(),U.map=new ss(r.x,r.y,_e),U.map.texture.name=ce.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const re=U.getViewportCount();for(let _e=0;_e<re;_e++){const Oe=U.getViewport(_e);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),W.viewport(o),U.updateMatrices(ce,_e),i=U.getFrustum(),M(A,b,U.camera,ce,this.type)}U.isPointLightShadow!==!0&&this.type===Di&&g(U,b),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(Z,y,w)};function g(R,A){const b=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,b,p,v,null)}function x(R,A,b,Z){let y=null;const w=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=y.uuid,j=A.uuid;let J=c[W];J===void 0&&(J={},c[W]=J);let ae=J[j];ae===void 0&&(ae=y.clone(),J[j]=ae,A.addEventListener("dispose",P)),y=ae}if(y.visible=A.visible,y.wireframe=A.wireframe,Z===Di?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=t.properties.get(y);W.light=b}return y}function M(R,A,b,Z,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const j=e.update(R),J=R.material;if(Array.isArray(J)){const ae=j.groups;for(let K=0,ce=ae.length;K<ce;K++){const U=ae[K],se=J[U.materialIndex];if(se&&se.visible){const re=x(R,se,Z,y);R.onBeforeShadow(t,R,A,b,j,re,U),t.renderBufferDirect(b,null,j,re,R,U),R.onAfterShadow(t,R,A,b,j,re,U)}}}else if(J.visible){const ae=x(R,J,Z,y);R.onBeforeShadow(t,R,A,b,j,ae,null),t.renderBufferDirect(b,null,j,ae,R,null),R.onAfterShadow(t,R,A,b,j,ae,null)}}const W=R.children;for(let j=0,J=W.length;j<J;j++)M(W[j],A,b,Z,y)}function P(R){R.target.removeEventListener("dispose",P);for(const b in c){const Z=c[b],y=R.target.uuid;y in Z&&(Z[y].dispose(),delete Z[y])}}}const CT={[If]:Nf,[Ff]:kf,[Of]:zf,[to]:Bf,[Nf]:If,[kf]:Ff,[zf]:Of,[Bf]:to};function RT(t){function e(){let T=!1;const H=new Ft;let D=null;const O=new Ft(0,0,0,0);return{setMask:function(V){D!==V&&!T&&(t.colorMask(V,V,V,V),D=V)},setLocked:function(V){T=V},setClear:function(V,oe,We,qe,mt){mt===!0&&(V*=qe,oe*=qe,We*=qe),H.set(V,oe,We,qe),O.equals(H)===!1&&(t.clearColor(V,oe,We,qe),O.copy(H))},reset:function(){T=!1,D=null,O.set(-1,0,0,0)}}}function n(){let T=!1,H=!1,D=null,O=null,V=null;return{setReversed:function(oe){H=oe},setTest:function(oe){oe?Ae(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(oe){D!==oe&&!T&&(t.depthMask(oe),D=oe)},setFunc:function(oe){if(H&&(oe=CT[oe]),O!==oe){switch(oe){case If:t.depthFunc(t.NEVER);break;case Nf:t.depthFunc(t.ALWAYS);break;case Ff:t.depthFunc(t.LESS);break;case to:t.depthFunc(t.LEQUAL);break;case Of:t.depthFunc(t.EQUAL);break;case Bf:t.depthFunc(t.GEQUAL);break;case kf:t.depthFunc(t.GREATER);break;case zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=oe}},setLocked:function(oe){T=oe},setClear:function(oe){V!==oe&&(t.clearDepth(oe),V=oe)},reset:function(){T=!1,D=null,O=null,V=null}}}function i(){let T=!1,H=null,D=null,O=null,V=null,oe=null,We=null,qe=null,mt=null;return{setTest:function(Xe){T||(Xe?Ae(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(Xe){H!==Xe&&!T&&(t.stencilMask(Xe),H=Xe)},setFunc:function(Xe,Mt,Yt){(D!==Xe||O!==Mt||V!==Yt)&&(t.stencilFunc(Xe,Mt,Yt),D=Xe,O=Mt,V=Yt)},setOp:function(Xe,Mt,Yt){(oe!==Xe||We!==Mt||qe!==Yt)&&(t.stencilOp(Xe,Mt,Yt),oe=Xe,We=Mt,qe=Yt)},setLocked:function(Xe){T=Xe},setClear:function(Xe){mt!==Xe&&(t.clearStencil(Xe),mt=Xe)},reset:function(){T=!1,H=null,D=null,O=null,V=null,oe=null,We=null,qe=null,mt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,_=!1,v=null,m=null,u=null,g=null,x=null,M=null,P=null,R=new He(0,0,0),A=0,b=!1,Z=null,y=null,w=null,W=null,j=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,K=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ae=K>=1):ce.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ae=K>=2);let U=null,se={};const re=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),Oe=new Ft().fromArray(re),et=new Ft().fromArray(_e);function ee(T,H,D,O){const V=new Uint8Array(4),oe=t.createTexture();t.bindTexture(T,oe),t.texParameteri(T,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(T,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<D;We++)T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?t.texImage3D(H,0,t.RGBA,1,1,O,0,t.RGBA,t.UNSIGNED_BYTE,V):t.texImage2D(H+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,V);return oe}const he={};he[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ae(t.DEPTH_TEST),s.setFunc(to),Ke(!1),st(Hp),Ae(t.CULL_FACE),L(yr);function Ae(T){c[T]!==!0&&(t.enable(T),c[T]=!0)}function we(T){c[T]!==!1&&(t.disable(T),c[T]=!1)}function je(T,H){return f[T]!==H?(t.bindFramebuffer(T,H),f[T]=H,T===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=H),T===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=H),!0):!1}function Be(T,H){let D=h,O=!1;if(T){D=d.get(H),D===void 0&&(D=[],d.set(H,D));const V=T.textures;if(D.length!==V.length||D[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,We=V.length;oe<We;oe++)D[oe]=t.COLOR_ATTACHMENT0+oe;D.length=V.length,O=!0}}else D[0]!==t.BACK&&(D[0]=t.BACK,O=!0);O&&t.drawBuffers(D)}function at(T){return p!==T?(t.useProgram(T),p=T,!0):!1}const ft={[Wr]:t.FUNC_ADD,[Py]:t.FUNC_SUBTRACT,[by]:t.FUNC_REVERSE_SUBTRACT};ft[Dy]=t.MIN,ft[Ly]=t.MAX;const rt={[Uy]:t.ZERO,[Iy]:t.ONE,[Ny]:t.SRC_COLOR,[Lf]:t.SRC_ALPHA,[Hy]:t.SRC_ALPHA_SATURATE,[ky]:t.DST_COLOR,[Oy]:t.DST_ALPHA,[Fy]:t.ONE_MINUS_SRC_COLOR,[Uf]:t.ONE_MINUS_SRC_ALPHA,[zy]:t.ONE_MINUS_DST_COLOR,[By]:t.ONE_MINUS_DST_ALPHA,[Vy]:t.CONSTANT_COLOR,[Gy]:t.ONE_MINUS_CONSTANT_COLOR,[Wy]:t.CONSTANT_ALPHA,[Xy]:t.ONE_MINUS_CONSTANT_ALPHA};function L(T,H,D,O,V,oe,We,qe,mt,Xe){if(T===yr){_===!0&&(we(t.BLEND),_=!1);return}if(_===!1&&(Ae(t.BLEND),_=!0),T!==Ry){if(T!==v||Xe!==b){if((m!==Wr||x!==Wr)&&(t.blendEquation(t.FUNC_ADD),m=Wr,x=Wr),Xe)switch(T){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}u=null,g=null,M=null,P=null,R.set(0,0,0),A=0,v=T,b=Xe}return}V=V||H,oe=oe||D,We=We||O,(H!==m||V!==x)&&(t.blendEquationSeparate(ft[H],ft[V]),m=H,x=V),(D!==u||O!==g||oe!==M||We!==P)&&(t.blendFuncSeparate(rt[D],rt[O],rt[oe],rt[We]),u=D,g=O,M=oe,P=We),(qe.equals(R)===!1||mt!==A)&&(t.blendColor(qe.r,qe.g,qe.b,mt),R.copy(qe),A=mt),v=T,b=!1}function Ht(T,H){T.side===si?we(t.CULL_FACE):Ae(t.CULL_FACE);let D=T.side===Tn;H&&(D=!D),Ke(D),T.blending===Ws&&T.transparent===!1?L(yr):L(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const O=T.stencilWrite;o.setTest(O),O&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),dt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ae(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(T){Z!==T&&(T?t.frontFace(t.CW):t.frontFace(t.CCW),Z=T)}function st(T){T!==Ty?(Ae(t.CULL_FACE),T!==y&&(T===Hp?t.cullFace(t.BACK):T===Ay?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),y=T}function ke(T){T!==w&&(ae&&t.lineWidth(T),w=T)}function dt(T,H,D){T?(Ae(t.POLYGON_OFFSET_FILL),(W!==H||j!==D)&&(t.polygonOffset(H,D),W=H,j=D)):we(t.POLYGON_OFFSET_FILL)}function Ne(T){T?Ae(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function C(T){T===void 0&&(T=t.TEXTURE0+J-1),U!==T&&(t.activeTexture(T),U=T)}function S(T,H,D){D===void 0&&(U===null?D=t.TEXTURE0+J-1:D=U);let O=se[D];O===void 0&&(O={type:void 0,texture:void 0},se[D]=O),(O.type!==T||O.texture!==H)&&(U!==D&&(t.activeTexture(D),U=D),t.bindTexture(T,H||he[T]),O.type=T,O.texture=H)}function G(){const T=se[U];T!==void 0&&T.type!==void 0&&(t.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{t.texStorage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ge(T){Oe.equals(T)===!1&&(t.scissor(T.x,T.y,T.z,T.w),Oe.copy(T))}function Re(T){et.equals(T)===!1&&(t.viewport(T.x,T.y,T.z,T.w),et.copy(T))}function I(T,H){let D=l.get(H);D===void 0&&(D=new WeakMap,l.set(H,D));let O=D.get(T);O===void 0&&(O=t.getUniformBlockIndex(H,T.name),D.set(T,O))}function F(T,H){const O=l.get(H).get(T);a.get(H)!==O&&(t.uniformBlockBinding(H,O,T.__bindingPointIndex),a.set(H,O))}function Y(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,se={},f={},d=new WeakMap,h=[],p=null,_=!1,v=null,m=null,u=null,g=null,x=null,M=null,P=null,R=new He(0,0,0),A=0,b=!1,Z=null,y=null,w=null,W=null,j=null,Oe.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ae,disable:we,bindFramebuffer:je,drawBuffers:Be,useProgram:at,setBlending:L,setMaterial:Ht,setFlipSided:Ke,setCullFace:st,setLineWidth:ke,setPolygonOffset:dt,setScissorTest:Ne,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:ie,compressedTexImage3D:fe,texImage2D:Ce,texImage3D:Ve,updateUBOMapping:I,uniformBlockBinding:F,texStorage2D:ct,texStorage3D:me,texSubImage2D:ne,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:Ge,viewport:Re,reset:Y}}function Fm(t,e,n,i){const r=PT(i);switch(n){case f_:return t*e;case h_:return t*e;case p_:return t*e*2;case m_:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case g_:return t*e*2/r.components*r.byteLength;case xh:return t*e*2/r.components*r.byteLength;case d_:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case yh:return t*e*4/r.components*r.byteLength;case Al:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:case qf:return Math.max(t,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case id:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case dd:case hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case __:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case md:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PT(t){switch(t){case Wi:case l_:return{byteLength:1,components:1};case pa:case c_:case Sa:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case rs:case mh:case Fi:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):ac("canvas")}function v(C,S,G){let ie=1;const fe=Ne(C);if((fe.width>G||fe.height>G)&&(ie=G/Math.max(fe.width,fe.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(ie*fe.width),Le=Math.floor(ie*fe.height);d===void 0&&(d=_(ne,Le));const xe=S?_(ne,Le):d;return xe.width=ne,xe.height=Le,xe.getContext("2d").drawImage(C,0,0,ne,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ne+"x"+Le+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==jn&&C.minFilter!==oi}function u(C){t.generateMipmap(C)}function g(C,S,G,ie,fe=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),S===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RG8UI),G===t.UNSIGNED_SHORT&&(ne=t.RG16UI),G===t.UNSIGNED_INT&&(ne=t.RG32UI),G===t.BYTE&&(ne=t.RG8I),G===t.SHORT&&(ne=t.RG16I),G===t.INT&&(ne=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),G===t.UNSIGNED_INT&&(ne=t.RGB32UI),G===t.BYTE&&(ne=t.RGB8I),G===t.SHORT&&(ne=t.RGB16I),G===t.INT&&(ne=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),G===t.UNSIGNED_INT&&(ne=t.RGBA32UI),G===t.BYTE&&(ne=t.RGBA8I),G===t.SHORT&&(ne=t.RGBA16I),G===t.INT&&(ne=t.RGBA32I)),S===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),S===t.RGBA){const Le=fe?ic:gt.getTransfer(ie);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=Le===wt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(C,S){let G;return C?S===null||S===rs||S===ro?G=t.DEPTH24_STENCIL8:S===Fi?G=t.DEPTH32F_STENCIL8:S===pa&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===rs||S===ro?G=t.DEPTH_COMPONENT24:S===Fi?G=t.DEPTH_COMPONENT32F:S===pa&&(G=t.DEPTH_COMPONENT16),G}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==jn&&C.minFilter!==oi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),A(S),S.isVideoTexture&&f.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),Z(S)}function A(C){const S=i.get(C);if(S.__webglInit===void 0)return;const G=C.source,ie=h.get(G);if(ie){const fe=ie[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(C),Object.keys(ie).length===0&&h.delete(G)}i.remove(C)}function b(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const G=C.source,ie=h.get(G);delete ie[S.__cacheKey],o.memory.textures--}function Z(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let fe=0;fe<S.__webglFramebuffer[ie].length;fe++)t.deleteFramebuffer(S.__webglFramebuffer[ie][fe]);else t.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)t.deleteFramebuffer(S.__webglFramebuffer[ie]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let ie=0,fe=G.length;ie<fe;ie++){const ne=i.get(G[ie]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(G[ie])}i.remove(C)}let y=0;function w(){y=0}function W(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function j(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function J(C,S){const G=i.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,C,S);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function ae(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){et(G,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function K(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){et(G,C,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function ce(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ee(G,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const U={[Gf]:t.REPEAT,[$r]:t.CLAMP_TO_EDGE,[Wf]:t.MIRRORED_REPEAT},se={[jn]:t.NEAREST,[tS]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},re={[sS]:t.NEVER,[fS]:t.ALWAYS,[oS]:t.LESS,[x_]:t.LEQUAL,[aS]:t.EQUAL,[uS]:t.GEQUAL,[lS]:t.GREATER,[cS]:t.NOTEQUAL};function _e(C,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===oi||S.magFilter===ou||S.magFilter===Va||S.magFilter===Kr||S.minFilter===oi||S.minFilter===ou||S.minFilter===Va||S.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,U[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,U[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,U[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,se[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==Va&&S.minFilter!==Kr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const ie=S.source;let fe=h.get(ie);fe===void 0&&(fe={},h.set(ie,fe));const ne=j(S);if(ne!==C.__cacheKey){fe[ne]===void 0&&(fe[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),fe[ne].usedTimes++;const Le=fe[C.__cacheKey];Le!==void 0&&(fe[C.__cacheKey].usedTimes--,Le.usedTimes===0&&b(S)),C.__cacheKey=ne,C.__webglTexture=fe[ne].texture}return G}function et(C,S,G){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const fe=Oe(C,S),ne=S.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+G);const Le=i.get(ne);if(ne.version!==Le.__version||fe===!0){n.activeTexture(t.TEXTURE0+G);const xe=gt.getPrimaries(gt.workingColorSpace),ye=S.colorSpace===lr?null:gt.getPrimaries(S.colorSpace),ct=S.colorSpace===lr||xe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let me=v(S.image,!1,r.maxTextureSize);me=dt(S,me);const Ce=s.convert(S.format,S.colorSpace),Ve=s.convert(S.type);let Ge=g(S.internalFormat,Ce,Ve,S.colorSpace,S.isVideoTexture);_e(ie,S);let Re;const I=S.mipmaps,F=S.isVideoTexture!==!0,Y=Le.__version===void 0||fe===!0,T=ne.dataReady,H=M(S,me);if(S.isDepthTexture)Ge=x(S.format===so,S.type),Y&&(F?n.texStorage2D(t.TEXTURE_2D,1,Ge,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Ge,me.width,me.height,0,Ce,Ve,null));else if(S.isDataTexture)if(I.length>0){F&&Y&&n.texStorage2D(t.TEXTURE_2D,H,Ge,I[0].width,I[0].height);for(let D=0,O=I.length;D<O;D++)Re=I[D],F?T&&n.texSubImage2D(t.TEXTURE_2D,D,0,0,Re.width,Re.height,Ce,Ve,Re.data):n.texImage2D(t.TEXTURE_2D,D,Ge,Re.width,Re.height,0,Ce,Ve,Re.data);S.generateMipmaps=!1}else F?(Y&&n.texStorage2D(t.TEXTURE_2D,H,Ge,me.width,me.height),T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Ce,Ve,me.data)):n.texImage2D(t.TEXTURE_2D,0,Ge,me.width,me.height,0,Ce,Ve,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,H,Ge,I[0].width,I[0].height,me.depth);for(let D=0,O=I.length;D<O;D++)if(Re=I[D],S.format!==ai)if(Ce!==null)if(F){if(T)if(S.layerUpdates.size>0){const V=Fm(Re.width,Re.height,S.format,S.type);for(const oe of S.layerUpdates){const We=Re.data.subarray(oe*V/Re.data.BYTES_PER_ELEMENT,(oe+1)*V/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,D,0,0,oe,Re.width,Re.height,1,Ce,We,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,D,0,0,0,Re.width,Re.height,me.depth,Ce,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,D,Ge,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?T&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,D,0,0,0,Re.width,Re.height,me.depth,Ce,Ve,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,D,Ge,Re.width,Re.height,me.depth,0,Ce,Ve,Re.data)}else{F&&Y&&n.texStorage2D(t.TEXTURE_2D,H,Ge,I[0].width,I[0].height);for(let D=0,O=I.length;D<O;D++)Re=I[D],S.format!==ai?Ce!==null?F?T&&n.compressedTexSubImage2D(t.TEXTURE_2D,D,0,0,Re.width,Re.height,Ce,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,D,Ge,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?T&&n.texSubImage2D(t.TEXTURE_2D,D,0,0,Re.width,Re.height,Ce,Ve,Re.data):n.texImage2D(t.TEXTURE_2D,D,Ge,Re.width,Re.height,0,Ce,Ve,Re.data)}else if(S.isDataArrayTexture)if(F){if(Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,H,Ge,me.width,me.height,me.depth),T)if(S.layerUpdates.size>0){const D=Fm(me.width,me.height,S.format,S.type);for(const O of S.layerUpdates){const V=me.data.subarray(O*D/me.data.BYTES_PER_ELEMENT,(O+1)*D/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,O,me.width,me.height,1,Ce,Ve,V)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Ve,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ge,me.width,me.height,me.depth,0,Ce,Ve,me.data);else if(S.isData3DTexture)F?(Y&&n.texStorage3D(t.TEXTURE_3D,H,Ge,me.width,me.height,me.depth),T&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Ve,me.data)):n.texImage3D(t.TEXTURE_3D,0,Ge,me.width,me.height,me.depth,0,Ce,Ve,me.data);else if(S.isFramebufferTexture){if(Y)if(F)n.texStorage2D(t.TEXTURE_2D,H,Ge,me.width,me.height);else{let D=me.width,O=me.height;for(let V=0;V<H;V++)n.texImage2D(t.TEXTURE_2D,V,Ge,D,O,0,Ce,Ve,null),D>>=1,O>>=1}}else if(I.length>0){if(F&&Y){const D=Ne(I[0]);n.texStorage2D(t.TEXTURE_2D,H,Ge,D.width,D.height)}for(let D=0,O=I.length;D<O;D++)Re=I[D],F?T&&n.texSubImage2D(t.TEXTURE_2D,D,0,0,Ce,Ve,Re):n.texImage2D(t.TEXTURE_2D,D,Ge,Ce,Ve,Re);S.generateMipmaps=!1}else if(F){if(Y){const D=Ne(me);n.texStorage2D(t.TEXTURE_2D,H,Ge,D.width,D.height)}T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ve,me)}else n.texImage2D(t.TEXTURE_2D,0,Ge,Ce,Ve,me);m(S)&&u(ie),Le.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ee(C,S,G){if(S.image.length!==6)return;const ie=Oe(C,S),fe=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const ne=i.get(fe);if(fe.version!==ne.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const Le=gt.getPrimaries(gt.workingColorSpace),xe=S.colorSpace===lr?null:gt.getPrimaries(S.colorSpace),ye=S.colorSpace===lr||Le===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ct=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let O=0;O<6;O++)!ct&&!me?Ce[O]=v(S.image[O],!0,r.maxCubemapSize):Ce[O]=me?S.image[O].image:S.image[O],Ce[O]=dt(S,Ce[O]);const Ve=Ce[0],Ge=s.convert(S.format,S.colorSpace),Re=s.convert(S.type),I=g(S.internalFormat,Ge,Re,S.colorSpace),F=S.isVideoTexture!==!0,Y=ne.__version===void 0||ie===!0,T=fe.dataReady;let H=M(S,Ve);_e(t.TEXTURE_CUBE_MAP,S);let D;if(ct){F&&Y&&n.texStorage2D(t.TEXTURE_CUBE_MAP,H,I,Ve.width,Ve.height);for(let O=0;O<6;O++){D=Ce[O].mipmaps;for(let V=0;V<D.length;V++){const oe=D[V];S.format!==ai?Ge!==null?F?T&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,0,0,oe.width,oe.height,Ge,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,I,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,0,0,oe.width,oe.height,Ge,Re,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,I,oe.width,oe.height,0,Ge,Re,oe.data)}}}else{if(D=S.mipmaps,F&&Y){D.length>0&&H++;const O=Ne(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,H,I,O.width,O.height)}for(let O=0;O<6;O++)if(me){F?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Ce[O].width,Ce[O].height,Ge,Re,Ce[O].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,I,Ce[O].width,Ce[O].height,0,Ge,Re,Ce[O].data);for(let V=0;V<D.length;V++){const We=D[V].image[O].image;F?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,0,0,We.width,We.height,Ge,Re,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,I,We.width,We.height,0,Ge,Re,We.data)}}else{F?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Ge,Re,Ce[O]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,I,Ge,Re,Ce[O]);for(let V=0;V<D.length;V++){const oe=D[V];F?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,0,0,Ge,Re,oe.image[O]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,I,Ge,Re,oe.image[O])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),ne.__version=fe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,G,ie,fe,ne){const Le=s.convert(G.format,G.colorSpace),xe=s.convert(G.type),ye=g(G.internalFormat,Le,xe,G.colorSpace);if(!i.get(S).__hasExternalTextures){const me=Math.max(1,S.width>>ne),Ce=Math.max(1,S.height>>ne);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,ne,ye,me,Ce,S.depth,0,Le,xe,null):n.texImage2D(fe,ne,ye,me,Ce,0,Le,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),st(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,fe,i.get(G).__webglTexture,0,Ke(S)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,fe,i.get(G).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const ie=S.depthTexture,fe=ie&&ie.isDepthTexture?ie.type:null,ne=x(S.stencilBuffer,fe),Le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=Ke(S);st(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ne,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,C)}else{const ie=S.textures;for(let fe=0;fe<ie.length;fe++){const ne=ie[fe],Le=s.convert(ne.format,ne.colorSpace),xe=s.convert(ne.type),ye=g(ne.internalFormat,Le,xe,ne.colorSpace),ct=Ke(S);G&&st(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct,ye,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,fe=Ke(S);if(S.depthTexture.format===Xs)st(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===so)st(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function je(C){const S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",fe)};ie.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=ie}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ae(S.__webglDepthbuffer[ie],C,!1);else{const fe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,ne)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ae(S.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,fe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,S,G){const ie=i.get(C);S!==void 0&&he(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&je(C)}function at(C){const S=C.texture,G=i.get(C),ie=i.get(S);C.addEventListener("dispose",R);const fe=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++),ne){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[xe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)G.__webglFramebuffer[xe][ye]=t.createFramebuffer()}else G.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)G.__webglFramebuffer[xe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Le)for(let xe=0,ye=fe.length;xe<ye;xe++){const ct=i.get(fe[xe]);ct.__webglTexture===void 0&&(ct.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&st(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const ye=fe[xe];G.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[xe]);const ct=s.convert(ye.format,ye.colorSpace),me=s.convert(ye.type),Ce=g(ye.internalFormat,ct,me,ye.colorSpace,C.isXRRenderTarget===!0),Ve=Ke(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,G.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),_e(t.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)he(G.__webglFramebuffer[xe][ye],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else he(G.__webglFramebuffer[xe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let xe=0,ye=fe.length;xe<ye;xe++){const ct=fe[xe],me=i.get(ct);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),_e(t.TEXTURE_2D,ct),he(G.__webglFramebuffer,C,ct,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),m(ct)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ie.__webglTexture),_e(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)he(G.__webglFramebuffer[ye],C,S,t.COLOR_ATTACHMENT0,xe,ye);else he(G.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,xe,0);m(S)&&u(xe),n.unbindTexture()}C.depthBuffer&&je(C)}function ft(C){const S=C.textures;for(let G=0,ie=S.length;G<ie;G++){const fe=S[G];if(m(fe)){const ne=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(fe).__webglTexture;n.bindTexture(ne,Le),u(ne),n.unbindTexture()}}}const rt=[],L=[];function Ht(C){if(C.samples>0){if(st(C)===!1){const S=C.textures,G=C.width,ie=C.height;let fe=t.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(C),xe=S.length>1;if(xe)for(let ye=0;ye<S.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[ye]);const ct=i.get(S[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ct,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,fe,t.NEAREST),l===!0&&(rt.length=0,L.length=0,rt.push(t.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(ne),L.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let ye=0;ye<S.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Le.__webglColorRenderbuffer[ye]);const ct=i.get(S[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,ct,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ke(C){return Math.min(r.maxSamples,C.samples)}function st(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(C){const S=o.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function dt(C,S){const G=C.colorSpace,ie=C.format,fe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Pr&&G!==lr&&(gt.getTransfer(G)===wt?(ie!==ai||fe!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=J,this.setTexture2DArray=ae,this.setTexture3D=K,this.setTextureCube=ce,this.rebindTextures=Be,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=he,this.useMultisampledRTT=st}function DT(t,e){function n(i,r=lr){let s;const o=gt.getTransfer(r);if(i===Wi)return t.UNSIGNED_BYTE;if(i===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===u_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===l_)return t.BYTE;if(i===c_)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===mh)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===Sa)return t.HALF_FLOAT;if(i===f_)return t.ALPHA;if(i===d_)return t.RGB;if(i===ai)return t.RGBA;if(i===h_)return t.LUMINANCE;if(i===p_)return t.LUMINANCE_ALPHA;if(i===Xs)return t.DEPTH_COMPONENT;if(i===so)return t.DEPTH_STENCIL;if(i===m_)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===g_)return t.RG;if(i===xh)return t.RG_INTEGER;if(i===yh)return t.RGBA_INTEGER;if(i===Al||i===Cl||i===Rl||i===Pl)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===jf||i===Yf||i===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$f||i===Kf)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ed)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===td)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===id)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===od)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ad)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ld)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ud)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===dd||i===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===__||i===pd||i===md||i===gd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===md)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class LT extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
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

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new An,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Xi({vertexShader:IT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new St(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OT extends po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const v=new FT,m=n.getContextAttributes();let u=null,g=null;const x=[],M=[],P=new pt;let R=null;const A=new Vn;A.layers.enable(1),A.viewport=new Ft;const b=new Vn;b.layers.enable(2),b.viewport=new Ft;const Z=[A,b],y=new LT;y.layers.enable(1),y.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=x[ee];return he===void 0&&(he=new Iu,x[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=x[ee];return he===void 0&&(he=new Iu,x[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=x[ee];return he===void 0&&(he=new Iu,x[ee]=he),he.getHandSpace()};function j(ee){const he=M.indexOf(ee.inputSource);if(he===-1)return;const Ae=x[he];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ae);for(let ee=0;ee<x.length;ee++){const he=M[ee];he!==null&&(M[ee]=null,x[ee].disconnect(he))}w=null,W=null,v.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,g=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ss(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Ae=null,we=null;m.depth&&(we=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?so:Xs,Ae=m.stencil?ro:rs);const je={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ss(h.textureWidth,h.textureHeight,{format:ai,type:Wi,depthTexture:new D_(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(ee){for(let he=0;he<ee.removed.length;he++){const Ae=ee.removed[he],we=M.indexOf(Ae);we>=0&&(M[we]=null,x[we].disconnect(Ae))}for(let he=0;he<ee.added.length;he++){const Ae=ee.added[he];let we=M.indexOf(Ae);if(we===-1){for(let Be=0;Be<x.length;Be++)if(Be>=M.length){M.push(Ae),we=Be;break}else if(M[Be]===null){M[Be]=Ae,we=Be;break}if(we===-1)break}const je=x[we];je&&je.connect(Ae)}}const K=new z,ce=new z;function U(ee,he,Ae){K.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);const we=K.distanceTo(ce),je=he.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,at=je[14]/(je[10]-1),ft=je[14]/(je[10]+1),rt=(je[9]+1)/je[5],L=(je[9]-1)/je[5],Ht=(je[8]-1)/je[0],Ke=(Be[8]+1)/Be[0],st=at*Ht,ke=at*Ke,dt=we/(-Ht+Ke),Ne=dt*-Ht;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ne),ee.translateZ(dt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),je[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const C=at+dt,S=ft+dt,G=st-Ne,ie=ke+(we-Ne),fe=rt*ft/S*C,ne=L*ft/S*C;ee.projectionMatrix.makePerspective(G,ie,fe,ne,C,S),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function se(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let he=ee.near,Ae=ee.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),y.near=b.near=A.near=he,y.far=b.far=A.far=Ae,(w!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,W=y.far);const we=ee.parent,je=y.cameras;se(y,we);for(let Be=0;Be<je.length;Be++)se(je[Be],we);je.length===2?U(y,A,b):y.projectionMatrix.copy(A.projectionMatrix),re(ee,y,we)};function re(ee,he,Ae){Ae===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ma*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let _e=null;function Oe(ee,he){if(f=he.getViewerPose(c||o),_=he,f!==null){const Ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let we=!1;Ae.length!==y.cameras.length&&(y.cameras.length=0,we=!0);for(let Be=0;Be<Ae.length;Be++){const at=Ae[Be];let ft=null;if(p!==null)ft=p.getViewport(at);else{const L=d.getViewSubImage(h,at);ft=L.viewport,Be===0&&(e.setRenderTargetTextures(g,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let rt=Z[Be];rt===void 0&&(rt=new Vn,rt.layers.enable(Be),rt.viewport=new Ft,Z[Be]=rt),rt.matrix.fromArray(at.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(at.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ft.x,ft.y,ft.width,ft.height),Be===0&&(y.matrix.copy(rt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),we===!0&&y.cameras.push(rt)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")){const Be=d.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let Ae=0;Ae<x.length;Ae++){const we=M[Ae],je=x[Ae];we!==null&&je!==void 0&&je.update(we,he,c||o)}_e&&_e(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const et=new P_;et.setAnimationLoop(Oe),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const Br=new Mi,BT=new Pt;function kT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,A_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,M=g.envMapRotation;x&&(m.envMap.value=x,Br.copy(M),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(Br)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const M=x.program;i.uniformBlockBinding(g,M)}function c(g,x){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(g,P);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function f(g){const x=d();g.__bindingPointIndex=x;const M=t.createBuffer(),P=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],M=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let R=0,A=M.length;R<A;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let Z=0,y=b.length;Z<y;Z++){const w=b[Z];if(p(w,R,Z,P)===!0){const W=w.__offset,j=Array.isArray(w.value)?w.value:[w.value];let J=0;for(let ae=0;ae<j.length;ae++){const K=j[ae],ce=v(K);typeof K=="number"||typeof K=="boolean"?(w.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,W+J,w.__data)):K.isMatrix3?(w.__data[0]=K.elements[0],w.__data[1]=K.elements[1],w.__data[2]=K.elements[2],w.__data[3]=0,w.__data[4]=K.elements[3],w.__data[5]=K.elements[4],w.__data[6]=K.elements[5],w.__data[7]=0,w.__data[8]=K.elements[6],w.__data[9]=K.elements[7],w.__data[10]=K.elements[8],w.__data[11]=0):(K.toArray(w.__data,J),J+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,M,P){const R=g.value,A=x+"_"+M;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const b=P[A];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return P[A]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function _(g){const x=g.uniforms;let M=0;const P=16;for(let A=0,b=x.length;A<b;A++){const Z=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,w=Z.length;y<w;y++){const W=Z[y],j=Array.isArray(W.value)?W.value:[W.value];for(let J=0,ae=j.length;J<ae;J++){const K=j[J],ce=v(K),U=M%P,se=U%ce.boundary,re=U+se;M+=se,re!==0&&P-re<ce.storage&&(M+=P-re),W.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=ce.storage}}}const R=M%P;return R>0&&(M+=P-R),g.__size=M,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class HT{constructor(e={}){const{canvas:n=RS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Sr,this.toneMappingExposure=1;const x=this;let M=!1,P=0,R=0,A=null,b=-1,Z=null;const y=new Ft,w=new Ft;let W=null;const j=new He(0);let J=0,ae=n.width,K=n.height,ce=1,U=null,se=null;const re=new Ft(0,0,ae,K),_e=new Ft(0,0,ae,K);let Oe=!1;const et=new Th;let ee=!1,he=!1;const Ae=new Pt,we=new Pt,je=new z,Be=new Ft,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function rt(){return A===null?ce:1}let L=i;function Ht(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",O,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",oe,!1),L===null){const N="webgl2";if(L=Ht(N,E),L===null)throw Ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,st,ke,dt,Ne,C,S,G,ie,fe,ne,Le,xe,ye,ct,me,Ce,Ve,Ge,Re,I,F,Y,T;function H(){Ke=new jE(L),Ke.init(),F=new DT(L,Ke),st=new zE(L,Ke,e,F),ke=new RT(L),st.reverseDepthBuffer&&ke.buffers.depth.setReversed(!0),dt=new $E(L),Ne=new hT,C=new bT(L,Ke,ke,Ne,st,F,dt),S=new VE(x),G=new XE(x),ie=new nM(L),Y=new BE(L,ie),fe=new YE(L,ie,dt,Y),ne=new ZE(L,fe,ie,dt),Ge=new KE(L,st,C),me=new HE(Ne),Le=new dT(x,S,G,Ke,st,Y,me),xe=new kT(x,Ne),ye=new mT,ct=new ST(Ke),Ve=new OE(x,S,G,ke,ne,h,l),Ce=new AT(x,ne,st),T=new zT(L,dt,st,ke),Re=new kE(L,Ke,dt),I=new qE(L,Ke,dt),dt.programs=Le.programs,x.capabilities=st,x.extensions=Ke,x.properties=Ne,x.renderLists=ye,x.shadowMap=Ce,x.state=ke,x.info=dt}H();const D=new OT(x,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(E){E!==void 0&&(ce=E,this.setSize(ae,K,!1))},this.getSize=function(E){return E.set(ae,K)},this.setSize=function(E,N,X=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,K=N,n.width=Math.floor(E*ce),n.height=Math.floor(N*ce),X===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(ae*ce,K*ce).floor()},this.setDrawingBufferSize=function(E,N,X){ae=E,K=N,ce=X,n.width=Math.floor(E*X),n.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,N,X,B){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,N,X,B),ke.viewport(y.copy(re).multiplyScalar(ce).round())},this.getScissor=function(E){return E.copy(_e)},this.setScissor=function(E,N,X,B){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,N,X,B),ke.scissor(w.copy(_e).multiplyScalar(ce).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){ke.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(E=!0,N=!0,X=!0){let B=0;if(E){let k=!1;if(A!==null){const ge=A.texture.format;k=ge===yh||ge===xh||ge===vh}if(k){const ge=A.texture.type,Se=ge===Wi||ge===rs||ge===pa||ge===ro||ge===gh||ge===_h,q=Ve.getClearColor(),$=Ve.getClearAlpha(),te=q.r,le=q.g,ue=q.b;Se?(p[0]=te,p[1]=le,p[2]=ue,p[3]=$,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=te,_[1]=le,_[2]=ue,_[3]=$,L.clearBufferiv(L.COLOR,0,_))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",O,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),ye.dispose(),ct.dispose(),Ne.dispose(),S.dispose(),G.dispose(),ne.dispose(),Y.dispose(),T.dispose(),Le.dispose(),D.dispose(),D.removeEventListener("sessionstart",At),D.removeEventListener("sessionend",xn),xt.stop()};function O(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=dt.autoReset,N=Ce.enabled,X=Ce.autoUpdate,B=Ce.needsUpdate,k=Ce.type;H(),dt.autoReset=E,Ce.enabled=N,Ce.autoUpdate=X,Ce.needsUpdate=B,Ce.type=k}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const N=E.target;N.removeEventListener("dispose",We),qe(N)}function qe(E){mt(E),Ne.remove(E)}function mt(E){const N=Ne.get(E).programs;N!==void 0&&(N.forEach(function(X){Le.releaseProgram(X)}),E.isShaderMaterial&&Le.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,B,k,ge){N===null&&(N=at);const Se=k.isMesh&&k.matrixWorld.determinant()<0,q=xo(E,N,X,B,k);ke.setMaterial(B,Se);let $=X.index,te=1;if(B.wireframe===!0){if($=fe.getWireframeAttribute(X),$===void 0)return;te=2}const le=X.drawRange,ue=X.attributes.position;let Me=le.start*te,De=(le.start+le.count)*te;ge!==null&&(Me=Math.max(Me,ge.start*te),De=Math.min(De,(ge.start+ge.count)*te)),$!==null?(Me=Math.max(Me,0),De=Math.min(De,$.count)):ue!=null&&(Me=Math.max(Me,0),De=Math.min(De,ue.count));const Ue=De-Me;if(Ue<0||Ue===1/0)return;Y.setup(k,B,q,X,$);let ze,Ye=Re;if($!==null&&(ze=ie.get($),Ye=I,Ye.setIndex(ze)),k.isMesh)B.wireframe===!0?(ke.setLineWidth(B.wireframeLinewidth*rt()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(k.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),ke.setLineWidth(Te*rt()),k.isLineSegments?Ye.setMode(L.LINES):k.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else k.isPoints?Ye.setMode(L.POINTS):k.isSprite&&Ye.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Te=k._multiDrawStarts,lt=k._multiDrawCounts,Ze=k._multiDrawCount,Vt=$?ie.get($).bytesPerElement:1,hi=Ne.get(B).currentProgram.getUniforms();for(let bt=0;bt<Ze;bt++)hi.setValue(L,"_gl_DrawID",bt),Ye.render(Te[bt]/Vt,lt[bt])}else if(k.isInstancedMesh)Ye.renderInstances(Me,Ue,k.count);else if(X.isInstancedBufferGeometry){const Te=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lt=Math.min(X.instanceCount,Te);Ye.renderInstances(Me,Ue,lt)}else Ye.render(Me,Ue)};function Xe(E,N,X){E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,tn(E,N,X),E.side=Tr,E.needsUpdate=!0,tn(E,N,X),E.side=si):tn(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),m=ct.get(X),m.init(N),g.push(m),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const B=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ge=k.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const q=ge[Se];Xe(q,X,k),B.add(q)}else Xe(ge,X,k),B.add(ge)}),g.pop(),m=null,B},this.compileAsync=function(E,N,X=null){const B=this.compile(E,N,X);return new Promise(k=>{function ge(){if(B.forEach(function(Se){Ne.get(Se).currentProgram.isReady()&&B.delete(Se)}),B.size===0){k(E);return}setTimeout(ge,10)}Ke.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Mt=null;function Yt(E){Mt&&Mt(E)}function At(){xt.stop()}function xn(){xt.start()}const xt=new P_;xt.setAnimationLoop(Yt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(E){Mt=E,D.setAnimationLoop(E),E===null?xt.stop():xt.start()},D.addEventListener("sessionstart",At),D.addEventListener("sessionend",xn),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(N),N=D.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,A),m=ct.get(E,g.length),m.init(N),g.push(m),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(we),he=this.localClippingEnabled,ee=me.init(this.clippingPlanes,he),v=ye.get(E,u.length),v.init(),u.push(v),D.enabled===!0&&D.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&tt(ge,N,-1/0,x.sortObjects)}tt(E,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(U,se),ft=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,ft&&Ve.addToRenderList(v,E),this.info.render.frame++,ee===!0&&me.beginShadows();const X=m.state.shadowsArray;Ce.render(X,E,N),ee===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,k=v.transmissive;if(m.setupLights(),N.isArrayCamera){const ge=N.cameras;if(k.length>0)for(let Se=0,q=ge.length;Se<q;Se++){const $=ge[Se];fn(B,k,E,$)}ft&&Ve.render(E);for(let Se=0,q=ge.length;Se<q;Se++){const $=ge[Se];Cn(v,E,$,$.viewport)}}else k.length>0&&fn(B,k,E,N),ft&&Ve.render(E),Cn(v,E,N);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,N),Y.resetDefaultState(),b=-1,Z=null,g.pop(),g.length>0?(m=g[g.length-1],ee===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function tt(E,N,X,B){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){B&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const Se=ne.update(E),q=E.material;q.visible&&v.push(E,Se,q,X,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Se=ne.update(E),q=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(q)){const $=Se.groups;for(let te=0,le=$.length;te<le;te++){const ue=$[te],Me=q[ue.materialIndex];Me&&Me.visible&&v.push(E,Se,Me,X,Be.z,ue)}}else q.visible&&v.push(E,Se,q,X,Be.z,null)}}const ge=E.children;for(let Se=0,q=ge.length;Se<q;Se++)tt(ge[Se],N,X,B)}function Cn(E,N,X,B){const k=E.opaque,ge=E.transmissive,Se=E.transparent;m.setupLightsView(X),ee===!0&&me.setGlobalState(x.clippingPlanes,X),B&&ke.viewport(y.copy(B)),k.length>0&&On(k,N,X),ge.length>0&&On(ge,N,X),Se.length>0&&On(Se,N,X),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function fn(E,N,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new ss(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Sa:Wi,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ge=m.state.transmissionRenderTarget[B.id],Se=B.viewport||y;ge.setSize(Se.z,Se.w);const q=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(j),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),ft&&Ve.render(X);const $=x.toneMapping;x.toneMapping=Sr;const te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),ee===!0&&me.setGlobalState(x.clippingPlanes,B),On(E,X,B),C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let ue=0,Me=N.length;ue<Me;ue++){const De=N[ue],Ue=De.object,ze=De.geometry,Ye=De.material,Te=De.group;if(Ye.side===si&&Ue.layers.test(B.layers)){const lt=Ye.side;Ye.side=Tn,Ye.needsUpdate=!0,Yi(Ue,X,B,ze,Ye,Te),Ye.side=lt,Ye.needsUpdate=!0,le=!0}}le===!0&&(C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge))}x.setRenderTarget(q),x.setClearColor(j,J),te!==void 0&&(B.viewport=te),x.toneMapping=$}function On(E,N,X){const B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ge=E.length;k<ge;k++){const Se=E[k],q=Se.object,$=Se.geometry,te=B===null?Se.material:B,le=Se.group;q.layers.test(X.layers)&&Yi(q,N,X,$,te,le)}}function Yi(E,N,X,B,k,ge){E.onBeforeRender(x,N,X,B,k,ge),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,N,X,B,E,ge),k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=Tn,k.needsUpdate=!0,x.renderBufferDirect(X,N,B,k,E,ge),k.side=Tr,k.needsUpdate=!0,x.renderBufferDirect(X,N,B,k,E,ge),k.side=si):x.renderBufferDirect(X,N,B,k,E,ge),E.onAfterRender(x,N,X,B,k,ge)}function tn(E,N,X){N.isScene!==!0&&(N=at);const B=Ne.get(E),k=m.state.lights,ge=m.state.shadowsArray,Se=k.state.version,q=Le.getParameters(E,k.state,ge,N,X),$=Le.getProgramCacheKey(q);let te=B.programs;B.environment=E.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,te===void 0&&(E.addEventListener("dispose",We),te=new Map,B.programs=te);let le=te.get($);if(le!==void 0){if(B.currentProgram===le&&B.lightsStateVersion===Se)return wi(E,q),le}else q.uniforms=Le.getUniforms(E),E.onBeforeCompile(q,x),le=Le.acquireProgram(q,$),te.set($,le),B.uniforms=q.uniforms;const ue=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ue.clippingPlanes=me.uniform),wi(E,q),B.needsLights=wa(E),B.lightsStateVersion=Se,B.needsLights&&(ue.ambientLightColor.value=k.state.ambient,ue.lightProbe.value=k.state.probe,ue.directionalLights.value=k.state.directional,ue.directionalLightShadows.value=k.state.directionalShadow,ue.spotLights.value=k.state.spot,ue.spotLightShadows.value=k.state.spotShadow,ue.rectAreaLights.value=k.state.rectArea,ue.ltc_1.value=k.state.rectAreaLTC1,ue.ltc_2.value=k.state.rectAreaLTC2,ue.pointLights.value=k.state.point,ue.pointLightShadows.value=k.state.pointShadow,ue.hemisphereLights.value=k.state.hemi,ue.directionalShadowMap.value=k.state.directionalShadowMap,ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ue.spotShadowMap.value=k.state.spotShadowMap,ue.spotLightMatrix.value=k.state.spotLightMatrix,ue.spotLightMap.value=k.state.spotLightMap,ue.pointShadowMap.value=k.state.pointShadowMap,ue.pointShadowMatrix.value=k.state.pointShadowMatrix),B.currentProgram=le,B.uniformsList=null,le}function Lr(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ll.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function wi(E,N){const X=Ne.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function xo(E,N,X,B,k){N.isScene!==!0&&(N=at),C.resetTextureUnits();const ge=N.fog,Se=B.isMeshStandardMaterial?N.environment:null,q=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pr,$=(B.isMeshStandardMaterial?G:S).get(B.envMap||Se),te=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,le=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ue=!!X.morphAttributes.position,Me=!!X.morphAttributes.normal,De=!!X.morphAttributes.color;let Ue=Sr;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const ze=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=ze!==void 0?ze.length:0,Te=Ne.get(B),lt=m.state.lights;if(ee===!0&&(he===!0||E!==Z)){const Bn=E===Z&&B.id===b;me.setState(B,E,Bn)}let Ze=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==lt.state.version||Te.outputColorSpace!==q||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==$||B.fog===!0&&Te.fog!==ge||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==me.numPlanes||Te.numIntersection!==me.numIntersection)||Te.vertexAlphas!==te||Te.vertexTangents!==le||Te.morphTargets!==ue||Te.morphNormals!==Me||Te.morphColors!==De||Te.toneMapping!==Ue||Te.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,Te.__version=B.version);let Vt=Te.currentProgram;Ze===!0&&(Vt=tn(B,N,k));let hi=!1,bt=!1,bc=!1;const Ot=Vt.getUniforms(),qi=Te.uniforms;if(ke.useProgram(Vt.program)&&(hi=!0,bt=!0,bc=!0),B.id!==b&&(b=B.id,bt=!0),hi||Z!==E){st.reverseDepthBuffer?(Ae.copy(E.projectionMatrix),bS(Ae),DS(Ae),Ot.setValue(L,"projectionMatrix",Ae)):Ot.setValue(L,"projectionMatrix",E.projectionMatrix),Ot.setValue(L,"viewMatrix",E.matrixWorldInverse);const Bn=Ot.map.cameraPosition;Bn!==void 0&&Bn.setValue(L,je.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,bt=!0,bc=!0)}if(k.isSkinnedMesh){Ot.setOptional(L,k,"bindMatrix"),Ot.setOptional(L,k,"bindMatrixInverse");const Bn=k.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ot.setValue(L,"boneTexture",Bn.boneTexture,C))}k.isBatchedMesh&&(Ot.setOptional(L,k,"batchingTexture"),Ot.setValue(L,"batchingTexture",k._matricesTexture,C),Ot.setOptional(L,k,"batchingIdTexture"),Ot.setValue(L,"batchingIdTexture",k._indirectTexture,C),Ot.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ot.setValue(L,"batchingColorTexture",k._colorsTexture,C));const Dc=X.morphAttributes;if((Dc.position!==void 0||Dc.normal!==void 0||Dc.color!==void 0)&&Ge.update(k,X,Vt),(bt||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,Ot.setValue(L,"receiveShadow",k.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qi.envMap.value=$,qi.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(qi.envMapIntensity.value=N.environmentIntensity),bt&&(Ot.setValue(L,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&Ti(qi,bc),ge&&B.fog===!0&&xe.refreshFogUniforms(qi,ge),xe.refreshMaterialUniforms(qi,B,ce,K,m.state.transmissionRenderTarget[E.id]),Ll.upload(L,Lr(Te),qi,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ll.upload(L,Lr(Te),qi,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ot.setValue(L,"center",k.center),Ot.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ot.setValue(L,"normalMatrix",k.normalMatrix),Ot.setValue(L,"modelMatrix",k.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bn=B.uniformsGroups;for(let Lc=0,H_=Bn.length;Lc<H_;Lc++){const Ph=Bn[Lc];T.update(Ph,Vt),T.bind(Ph,Vt)}}return Vt}function Ti(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function wa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,X){Ne.get(E.texture).__webglTexture=N,Ne.get(E.depthTexture).__webglTexture=X;const B=Ne.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=X===void 0,B.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=Ne.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){A=E,P=N,R=X;let B=!0,k=null,ge=!1,Se=!1;if(E){const $=Ne.get(E);if($.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if($.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if($.__hasExternalTextures)C.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ue=E.depthTexture;if($.__boundDepthTexture!==ue){if(ue!==null&&Ne.has(ue)&&(E.width!==ue.image.width||E.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const te=E.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Se=!0);const le=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(le[N])?k=le[N][X]:k=le[N],ge=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?k=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(le)?k=le[X]:k=le,y.copy(E.viewport),w.copy(E.scissor),W=E.scissorTest}else y.copy(re).multiplyScalar(ce).floor(),w.copy(_e).multiplyScalar(ce).floor(),W=Oe;if(ke.bindFramebuffer(L.FRAMEBUFFER,k)&&B&&ke.drawBuffers(E,k),ke.viewport(y),ke.scissor(w),ke.setScissorTest(W),ge){const $=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,$.__webglTexture,X)}else if(Se){const $=Ne.get(E.texture),te=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.__webglTexture,X||0,te)}b=-1},this.readRenderTargetPixels=function(E,N,X,B,k,ge,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(q=q[Se]),q){ke.bindFramebuffer(L.FRAMEBUFFER,q);try{const $=E.texture,te=$.format,le=$.type;if(!st.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-B&&X>=0&&X<=E.height-k&&L.readPixels(N,X,B,k,F.convert(te),F.convert(le),ge)}finally{const $=A!==null?Ne.get(A).__webglFramebuffer:null;ke.bindFramebuffer(L.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,B,k,ge,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(q=q[Se]),q){const $=E.texture,te=$.format,le=$.type;if(!st.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-B&&X>=0&&X<=E.height-k){ke.bindFramebuffer(L.FRAMEBUFFER,q);const ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(N,X,B,k,F.convert(te),F.convert(le),0);const Me=A!==null?Ne.get(A).__webglFramebuffer:null;ke.bindFramebuffer(L.FRAMEBUFFER,Me);const De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await PS(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.deleteBuffer(ue),L.deleteSync(De),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,X=0){E.isTexture!==!0&&(Dl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-X),k=Math.floor(E.image.width*B),ge=Math.floor(E.image.height*B),Se=N!==null?N.x:0,q=N!==null?N.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Se,q,k,ge),ke.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,B=null,k=0){E.isTexture!==!0&&(Dl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],N=arguments[2],k=arguments[3]||0,X=null);let ge,Se,q,$,te,le;X!==null?(ge=X.max.x-X.min.x,Se=X.max.y-X.min.y,q=X.min.x,$=X.min.y):(ge=E.image.width,Se=E.image.height,q=0,$=0),B!==null?(te=B.x,le=B.y):(te=0,le=0);const ue=F.convert(N.format),Me=F.convert(N.type);C.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const De=L.getParameter(L.UNPACK_ROW_LENGTH),Ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ze=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),lt=E.isCompressedTexture?E.mipmaps[k]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,q),L.pixelStorei(L.UNPACK_SKIP_ROWS,$),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,te,le,ge,Se,ue,Me,lt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,te,le,lt.width,lt.height,ue,lt.data):L.texSubImage2D(L.TEXTURE_2D,k,te,le,ge,Se,ue,Me,lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,De),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),k===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X=null,B=null,k=0){E.isTexture!==!0&&(Dl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,B=arguments[1]||null,E=arguments[2],N=arguments[3],k=arguments[4]||0);let ge,Se,q,$,te,le,ue,Me,De;const Ue=E.isCompressedTexture?E.mipmaps[k]:E.image;X!==null?(ge=X.max.x-X.min.x,Se=X.max.y-X.min.y,q=X.max.z-X.min.z,$=X.min.x,te=X.min.y,le=X.min.z):(ge=Ue.width,Se=Ue.height,q=Ue.depth,$=0,te=0,le=0),B!==null?(ue=B.x,Me=B.y,De=B.z):(ue=0,Me=0,De=0);const ze=F.convert(N.format),Ye=F.convert(N.type);let Te;if(N.isData3DTexture)C.setTexture3D(N,0),Te=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),hi=L.getParameter(L.UNPACK_SKIP_ROWS),bt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$),L.pixelStorei(L.UNPACK_SKIP_ROWS,te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,le),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Te,k,ue,Me,De,ge,Se,q,ze,Ye,Ue.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,k,ue,Me,De,ge,Se,q,ze,Ue.data):L.texSubImage3D(Te,k,ue,Me,De,ge,Se,q,ze,Ye,Ue),L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt),k===0&&N.generateMipmaps&&L.generateMipmap(Te),ke.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,ke.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Cc?"display-p3":"srgb"}}class VT extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ch extends go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lc=new z,cc=new z,Om=new Pt,Uo=new Eh,cl=new Ea,Nu=new z,Bm=new z;class GT extends Zt{constructor(e=new di,n=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)lc.fromBufferAttribute(n,r-1),cc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;Om.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(Om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=f.getX(v),g=f.getX(v+1),x=ul(this,e,Uo,l,u,g);x&&n.push(x)}if(this.isLineLoop){const v=f.getX(_-1),m=f.getX(p),u=ul(this,e,Uo,l,v,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const u=ul(this,e,Uo,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=ul(this,e,Uo,l,_-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ul(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(lc.fromBufferAttribute(o,r),cc.fromBufferAttribute(o,s),n.distanceSqToSegment(lc,cc,Nu,Bm)>i)return;Nu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Nu);if(!(l<e.near||l>e.far))return{distance:l,point:Bm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const km=new z,zm=new z;class F_ extends GT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)km.fromBufferAttribute(n,r),zm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+km.distanceTo(zm);e.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mr extends di{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let _=0;const v=[],m=i/2;let u=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(p,2));function g(){const M=new z,P=new z;let R=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const Z=[],y=b/s,w=y*(n-e)+e;for(let W=0;W<=r;W++){const j=W/r,J=j*l+a,ae=Math.sin(J),K=Math.cos(J);P.x=w*ae,P.y=-y*i+m,P.z=w*K,d.push(P.x,P.y,P.z),M.set(ae,A,K).normalize(),h.push(M.x,M.y,M.z),p.push(j,1-y),Z.push(_++)}v.push(Z)}for(let b=0;b<r;b++)for(let Z=0;Z<s;Z++){const y=v[Z][b],w=v[Z+1][b],W=v[Z+1][b+1],j=v[Z][b+1];e>0&&(f.push(y,w,j),R+=3),n>0&&(f.push(w,W,j),R+=3)}c.addGroup(u,R,0),u+=R}function x(M){const P=_,R=new pt,A=new z;let b=0;const Z=M===!0?e:n,y=M===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),_++;const w=_;for(let W=0;W<=r;W++){const J=W/r*l+a,ae=Math.cos(J),K=Math.sin(J);A.x=Z*K,A.y=m*y,A.z=Z*ae,d.push(A.x,A.y,A.z),h.push(0,y,0),R.x=ae*.5+.5,R.y=K*.5*y+.5,p.push(R.x,R.y),_++}for(let W=0;W<r;W++){const j=P+W,J=w+W;M===!0?f.push(J,J+1,j):f.push(J+1,J,j),b+=3}c.addGroup(u,b,M===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const fl=new z,dl=new z,Fu=new z,hl=new Gn;class Rh extends di{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(js*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:u}=hl;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),hl.getNormal(Fu),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const x=(g+1)%3,M=d[g],P=d[x],R=hl[f[g]],A=hl[f[x]],b=`${M}_${P}`,Z=`${P}_${M}`;Z in h&&h[Z]?(Fu.dot(h[Z].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),h[Z]=null):b in h||(h[b]={index0:c[g],index1:c[x],normal:Fu.clone()})}}for(const _ in h)if(h[_]){const{index0:v,index1:m}=h[_];fl.fromBufferAttribute(a,v),dl.fromBufferAttribute(a,m),p.push(fl.x,fl.y,fl.z),p.push(dl.x,dl.y,dl.z)}this.setAttribute("position",new cn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ao extends di{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new z,h=new z,p=[],_=[],v=[],m=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const R=P/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+M,1-x),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=f[u][g+1],M=f[u][g],P=f[u+1][g],R=f[u+1][g+1];(u!==0||o>0)&&p.push(x,M,R),(u!==i-1||l<Math.PI)&&p.push(M,P,R)}this.setIndex(p),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class O_ extends go{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v_,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B_ extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class WT extends B_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ou=new Pt,Hm=new z,Vm=new z;class XT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jT extends XT{constructor(){super(new b_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends B_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new jT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wm=new Pt;class YT{constructor(e,n,i=0,r=1/0){this.ray=new Eh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,n=!0,i=[]){return vd(e,this,i,n),i.sort(Xm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vd(e[r],this,i,n);return i.sort(Xm),i}}function Xm(t,e){return t.distance-e.distance}function vd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const br=72,Dr=56;function lo(t,e,n){return new z(t-br,n,e-Dr)}const _t={scene:null,groupReg:{},pickables:[],wallsFade:[],flows:[],floorMeshes:{b1:[],f1:[],f2:[],roof:[]},slabs:[],currentFloor:null};function qT(t){_t.scene=t,_t.groupReg={},_t.pickables=[],_t.wallsFade=[],_t.flows=[],_t.floorMeshes={b1:[],f1:[],f2:[],roof:[]},_t.slabs=[],_t.currentFloor=null}function xi(t){_t.currentFloor=t}function Kn(t){_t.currentFloor&&_t.floorMeshes[_t.currentFloor]&&(t.userData.floor=_t.currentFloor,_t.floorMeshes[_t.currentFloor].push(t))}function jm(t){Kn(t)}function Fe(t,e){if(t&&_t.groupReg[t])return _t.groupReg[t];const n=new zo;return n.userData={term:t||null,cat:e||null},_t.scene.add(n),t&&(_t.groupReg[t]=n),n}function $T(t){const e=new He(t);return e.multiplyScalar(.86),e}function Dn(t,e){const n=new O_({color:new He(t)});return e!==void 0&&(n.transparent=!0,n.opacity=e),n.userData={baseOp:e===void 0?1:e},n}function k_(t,e,n,i){const r=new F_(new Rh(e),new Ch({color:$T(i),transparent:!0,opacity:.55}));return r.material.userData={baseOp:.55},r.position.copy(n.position),r.rotation.copy(n.rotation),r.userData.isEdge=!0,t.add(r),Kn(r),r}function Q(t,e,n,i,r,s,o,a,l){l=l||{};const c=new Ei(r,o,s),f=new St(c,Dn(a,l.op));return f.position.set(e+r/2-br,i+o/2,n+s/2-Dr),l.ry&&(f.rotation.y=l.ry),t.add(f),_t.pickables.push(f),Kn(f),l.noedge||k_(t,c,f,l.edge||a),f}function it(t,e,n,i,r,s,o,a){const l=new Rc({color:new He(o),side:si,transparent:a!==void 0,opacity:a===void 0?1:a});l.userData={baseOp:a===void 0?1:a};const c=new St(new _o(r,s),l);return c.rotation.x=-Math.PI/2,c.position.set(e+r/2-br,i,n+s/2-Dr),c.userData.floorTop=!0,t.add(c),Kn(c),c}function KT(t,e,n,i,r,s,o){const a=new Xi({uniforms:{uColor:{value:new He(o)},uAspect:{value:r/s}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uAspect;varying vec2 vUv;void main(){vec2 p=(vUv-0.5)*vec2(uAspect,1.0);float radius=0.045;vec2 q=abs(p)-(vec2(uAspect*0.5,0.5)-vec2(radius));float sd=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;float inset=max(0.0,-sd);float edgeFade=smoothstep(0.0,0.10,inset);gl_FragColor=vec4(uColor,edgeFade*0.54);}",transparent:!0,depthWrite:!1,side:si});a.userData={baseOp:1};const l=new St(new _o(r,s),a);return l.rotation.x=-Math.PI/2,l.position.set(e+r/2-br,i,n+s/2-Dr),l.renderOrder=-10,l.userData.floorTop=!0,l.userData.groundSurface=!0,t.add(l),l}function Ct(t,e,n,i,r,s,o,a){a=a||{};const l=new Mr(a.rTop!==void 0?a.rTop:r,r,s,a.seg||18),c=new St(l,Dn(o,a.op));return c.position.set(e-br,i+s/2,n-Dr),t.add(c),_t.pickables.push(c),Kn(c),c}function Wn(t,e,n,i,r,s){s=s||{};const o=lo(e[0],e[1],e[2]),a=lo(n[0],n[1],n[2]),l=new z().subVectors(a,o),c=l.length(),f=new Mr(i,i,c,s.seg||10),d=new St(f,Dn(r,s.op));return d.position.copy(o).add(a).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new z(0,1,0),l.normalize()),t.add(d),s.pick!==!1&&_t.pickables.push(d),Kn(d),d}function ZT(t){const e=(t||"").toUpperCase();return e==="#E2793B"||e==="#EF9D76"?"heat":e==="#0FA396"||e==="#57C7BD"?"tcs":e==="#EBB410"||e==="#D9A312"||e==="#F0C744"?"power":e==="#9CC6E4"?"condensate":e==="#3E9CD6"||e==="#42AEE8"?"chilled":null}function QT(t){return t==="condensate"?["#8FC8E8","#BCE0F2"]:t==="chilled"?["#5FB1E8","#93D2F2"]:t==="tcs"?["#57C7BD","#F0A876"]:t==="heat"?["#F5A86B","#E8875C"]:null}function Ym(t){const e={h:0,s:0,l:0};return t.getHSL(e),t.setHSL(e.h,Math.min(1,e.s*1.08+.02),Math.max(.3,e.l*.96)),t}function JT(t,e,n,i,r){const s=t.geometry.attributes.position,o=s.count,a=new Float32Array(o*3);t.geometry.computeBoundingBox();const l=t.geometry.boundingBox.min.y,c=t.geometry.boundingBox.max.y,f=Math.max(.001,c-l),d=new He(e),h=new He(n),p=new He;for(let _=0;_<o;_++){const v=(s.getY(_)-l)/f,m=i+(r-i)*v;p.copy(d).lerp(h,Math.max(0,Math.min(1,m))),a[_*3]=p.r,a[_*3+1]=p.g,a[_*3+2]=p.b}t.geometry.setAttribute("color",new ui(a,3)),t.material.vertexColors=!0,t.material.color.set(16777215),t.material.userData.flowGradient=!0,t.material.needsUpdate=!0}function It(t,e,n,i,r){i=i||.32;const s=[],o=[],a=ZT(n);for(let p=0;p<e.length;p++)s.push(lo(e[p][0],e[p][1],e[p][2]));const l=QT(a),c=Math.max(1,e.length-1);for(let p=0;p<e.length-1;p++){const _=Wn(t,e[p],e[p+1],i,n,{seg:10});l?JT(_,l[0],l[1],p/c,(p+1)/c):a&&Ym(_.material.color),_.userData.flowPart=!0,o.push(_)}for(let p=1;p<e.length-1;p++){const _=l?new He(l[0]).lerp(new He(l[1]),p/c):new He(n);a&&!l&&Ym(_);const v=new St(new ao(i*1.12,10,10),Dn("#ffffff"));v.material.color.copy(_),v.position.copy(s[p]),v.userData.flowPart=!0,t.add(v),Kn(v),o.push(v)}if(!a)return;const f=[0];let d=0;for(let p=1;p<s.length;p++)d+=s[p].distanceTo(s[p-1]),f.push(d);const h=[];if(r!==!1||a==="tcs"){const p=Math.max(4,Math.round(d/12)),_=[1,.62,.34,.14];for(let v=0;v<p;v++)for(let m=0;m<_.length;m++){const u=_[m],g=new O_({color:new He(n),emissive:new He(n),emissiveIntensity:.55,transparent:!0,opacity:u,depthWrite:!1,depthTest:!0});g.userData={baseOp:u,flowBaseColor:new He(n)};const x=Math.max(.2,i*(.92-m*.08)),M=new St(new ao(x,10,10),g);M.renderOrder=30,M.userData.flowPart=!0,M.userData.flowParticle=!0,M.userData.flowU=v/p-m*.0085,t.add(M),Kn(M),h.push(M)}}_t.flows.push({vs:s,lens:f,tot:d,dots:h,parts:o,key:a,off:Math.random(),enabled:!0})}function nr(t,e,n,i,r,s){Ct(t,e,n,i,r+.2,.34,s||"#A39E90",{seg:20}),Ct(t,e,n,i+.17,r*.92,.17,"#F3F4F6",{seg:20});const o=Q(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});o.rotation.y=.5;const a=Q(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});a.rotation.y=-1.05,Ct(t,e,n,i+.28,.23,.31,"#66788C",{seg:10})}function fr(t,e,n,i,r,s){const o=[new St(new Mr(r+.17,r+.17,.31,20),Dn("#7FA3C4")),new St(new Mr(r*.9,r*.9,.16,20),Dn("#F2F6FA")),new St(new Mr(.21,.21,.37,10),Dn("#5C7C9E")),new St(new Ei(r*1.65,.2,.34),Dn("#5C7C9E")),new St(new Ei(r*1.65,.2,.34),Dn("#5C7C9E"))];for(let a=0;a<o.length;a++){const l=o[a];l.rotation.x=Math.PI/2,l.position.copy(lo(e,n,i)),t.add(l),Kn(l)}o[3].rotation.y=.6,o[4].rotation.y=-.9}function z_(t,e,n,i,r,s){s=s||"#9AA3AD",Q(t,e-.34,n,i,.16,.16,r,s,{noedge:!0}),Q(t,e+.18,n,i,.16,.16,r,s,{noedge:!0});for(let o=1;o<r/1.3;o++)Q(t,e-.34,n,i+o*1.3,.68,.14,.14,s,{noedge:!0})}function nt(t,e,n,i,r,s,o,a,l,c){const f=Fe(null,null),d=c||"#EDEFF2",h=new Ei(i,s,r),p=new St(h,Dn(d,l?.45:.95));p.material.depthWrite=!l,p.position.set(t+i/2-br,n+s/2,e+r/2-Dr),f.add(p),Kn(p);const _=l?"#DEE2E5":"#C5CBD0",v=new F_(new Rh(h),new Ch({color:new He(_),transparent:!0,opacity:l?.58:.78,depthTest:!0,depthWrite:!1}));return v.material.userData={baseOp:l?.58:.78},v.position.copy(p.position),v.userData.isEdge=!0,f.add(v),Kn(v),l||_t.wallsFade.push({m:p,e:v,n:new z(o,0,a)}),p}function co(t,e,n,i,r,s,o,a,l,c){const f=c===void 0?.55:c,d=Fe(null,null),h=new Ei(i,s,r),p=new St(h,Dn(a||"#D3D8DC",f));p.material.depthWrite=!1,p.position.set(t+i/2-br,n-s/2,e+r/2-Dr),d.add(p),Kn(p);const _=k_(d,h,p,"#969EA6"),v=it(d,t,e,n+.03,i,r,l||"#E8EAEC",Math.min(.6,f));return _t.slabs.push({m:p,e:_,top:v,zTop:n,floor:o,baseOp:f}),p}const de={slab:"#EDEFF2",roof:"#EEF0F3",groundTop:"#F2F4F6",slabTop:"#F5F6F8",roofTop:"#F5F6F8",cream:"#F7F2E7",cream2:"#F0E8D6",rackBody:"#6B3B52",rackDoor:"#8A4E6C",tray:"#A9D98B",blue:"#A4C9F2",blueD:"#79A9E6",cdu:"#79C0F2",teal:"#8FD9CB",yel:"#FFD34D",yelD:"#F0B429",purp:"#C9BCF2",gray:"#DDE3E8",steel:"#CFD9E2",wood:"#D9B98F",rose:"#EFC0B4",zoneElec:"#FBE9B8",zoneMech:"#CFE2F5",zoneHall:"#DDE1F8",zoneCrah:"#F7DEEA",zoneOffice:"#F3EDDA",zoneMeet:"#D8F0EC",zoneCore:"#EAEDF0"},Ee={x0:0,x1:105.3,y0:0,y1:38.6},Ie={x0:2,x1:56,y0:47,y1:104},ki={f1:9,f2:18,roof:27},$e=5.8;function e2(t){return qT(t),xi(null),function(){const i="#E9E2D2",r=Fe(null,null);Q(r,-14,-10,-1.2,152,126,1.2,de.slab,{edge:"#969EA6"}),KT(r,-32,-26,-1.15,190,160,de.groundTop),it(r,-14,-10,.04,152,126,"#E2E5E9");function s(o,a,l,c,f,d){nt(o,a,-1,l,c,10,f,d,!1,i),it(r,o,a,9+.02,l,c,de.slabTop)}s(-14,-10,152,8.5,0,-1),s(-14,-1.5,12.5,41.6,-1,0),s(106.8,-1.5,31.2,41.6,1,0),s(-14,40.1,1,65.4,-1,0),s(57.5,40.1,80.5,65.4,.7,.7),s(-14,105.5,152,10.5,0,1),it(r,108,0,9+.06,26,38.6,"#E3E5E7"),it(r,58,44,9+.06,50,62,"#E6E8E9"),it(r,60,70,9+.07,44,32,"#DCE8D8")}(),t2(),n2(),i2(),r2(),s2(),_t}function t2(){xi("b1"),function(){const e=Fe(null,null);it(e,7,3,.08,41,24,de.zoneElec),it(e,48,3,.08,18,13,de.zoneElec),it(e,48,18,.08,12,10,de.zoneElec),it(e,70,3,.08,28,13,de.zoneMech),it(e,70,18,.08,28,15,de.zoneMech),it(e,0,0,.08,7,38.6,de.zoneCore),it(e,98.3,0,.08,7,38.6,de.zoneCore)}(),nt(Ee.x0,Ee.y0,0,Ee.x1-Ee.x0,1.1,$e,0,-1,!1),nt(Ee.x0,Ee.y1-1.1,0,Ee.x1-Ee.x0,1.1,$e,0,1,!1),nt(Ee.x0,1.1,0,1.1,Ee.y1-2.2,$e,-1,0,!1),nt(Ee.x1-1.1,1.1,0,1.1,Ee.y1-2.2,$e,1,0,!1),nt(7,1.1,0,.7,36.4,$e*.86,0,0,!0),nt(98.3,1.1,0,.7,36.4,$e*.86,0,0,!0),nt(47.2,1.1,0,.7,28,$e*.86,0,0,!0),nt(66.5,1.1,0,.7,36.4,$e*.86,0,0,!0),nt(48,16.2,0,18,.7,$e*.86,0,0,!0),nt(70,16.2,0,28,.7,$e*.86,0,0,!0),function(){const e=Fe("switchgear","power");for(let n=0;n<3;n++){const i=5.5+n*7;for(let r=0;r<6;r++){const s=10+r*5.6;Q(e,s,i,0,4.8,3.1,2.5,de.yel),Q(e,s+.4,i+2.95,.8,4,.28,1.4,"#FFEBAF"),Q(e,s+.7,i+3.1,2,1.4,.2,.34,"#4A525C",{noedge:!0}),Q(e,s+2.9,i+3.1,2,1.1,.2,.34,"#E86A44",{noedge:!0})}}}(),function(){const e=Fe("transformer","power");for(let n=0;n<3;n++){const i=49.5+n*5.6;Q(e,i,5,0,4.4,5,3.2,de.yel);for(let r=0;r<3;r++)Q(e,i-.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0}),Q(e,i+4.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0});for(let r=0;r<3;r++){Ct(e,i+.9+r*1.3,7.5,3.2,.28,.9,"#EDE7D8");const s=new St(new ao(.24,10,10),Dn("#E0AC2E"));s.position.copy(lo(i+.9+r*1.3,7.5,4.3)),e.add(s),jm(s)}Q(e,i+.4,11.5,0,3.6,1.6,2.2,"#F2CE6A",{noedge:!0})}}(),function(){const e=Fe("battery","power");for(let n=0;n<2;n++)for(let i=0;i<2;i++){const r=49+n*5.6,s=19+i*4.6;Q(e,r,s,0,4.8,3.4,2.3,de.yel);for(let o=0;o<3;o++)Q(e,r+.3,s+3.25,.35+o*.72,4.2,.24,.42,"#FFEBAF");Q(e,r,s+3.25,2.35,4.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const e=Fe("chiller","cooling");function n(o,a){Q(e,o,a,0,15,4.6,.8,de.steel,{noedge:!0}),Wn(e,[o+.8,a+1.4,2.2],[o+14.2,a+1.4,2.2],1.15,de.blue,{seg:16}),Wn(e,[o+.8,a+3.2,3.8],[o+14.2,a+3.2,3.8],1.15,de.blueD,{seg:16}),Ct(e,o+4.6,a+2.3,4.6,1.1,1.6,"#DCE6EF"),Ct(e,o+9.5,a+2.3,4.6,1.1,1.6,"#DCE6EF"),It(e,[[o+4.6,a+2.3,5.7],[o+9.5,a+2.3,5.7]],"#AEC2D4",.3,!1),Q(e,o+12.8,a+1,.8,1.6,.4,3.4,"#454E58")}n(71.5,4),n(71.5,10);const i=Fe("pumps","cooling");function r(o,a){Q(i,o-1.1,a-1.1,0,2.2,2.2,.4,de.steel,{noedge:!0}),Ct(i,o,a,.4,.88,.95,"#9FBFDF"),Ct(i,o,a,1.35,.68,1.75,"#DCE6EF"),Ct(i,o,a,3.1,.76,.28,"#9FBFDF"),It(i,[[o,a,.7],[o-1.9,a,.7]],"#9FB6CC",.32,!1)}r(90,5),r(90,8.8),r(90,12.6);const s=Fe("water-treatment","cooling");Q(s,94,10.5,0,3.4,3,4.2,de.teal),Q(s,94.4,13.4,2.6,1.5,.26,1.1,"#454E58"),Ct(s,95,6.5,0,.65,2.3,"#BFE3DC"),Ct(s,96.8,6.5,0,.65,2.3,"#BFE3DC"),It(s,[[94.8,10.5,3.4],[95,7.5,2.6]],"#72B6A8",.22,!1)}(),function(){const e=Fe("tes","cooling");function n(i,r){Ct(e,i,r,0,3.4,6.8,"#E7EDF2",{seg:26});const s=new St(new ao(3.4,26,12,0,Math.PI*2,0,Math.PI/2),Dn("#DDE5EB"));s.position.copy(lo(i,r,6.8)),e.add(s),_t.pickables.push(s),jm(s),Ct(e,i,r,2.2,3.55,.28,"#C5D3DE",{seg:26}),Ct(e,i,r,4.7,3.55,.28,"#C5D3DE",{seg:26}),z_(e,i+3.9,r,0,6.4)}n(76,25.5),n(88,25.5)}(),function(){const e=Fe(null,null);it(e,Ie.x0+6,52,.08,26,36,de.zoneElec),it(e,Ie.x0,58,.08,6,18,de.zoneMech),it(e,36,56,.08,8,12,de.zoneCore),it(e,26,Ee.y1,.08,4.4,Ie.y0-Ee.y1,de.zoneCore),nt(Ie.x0,Ie.y0,0,Ie.x1-Ie.x0,1.1,$e,0,-1,!1),nt(Ie.x0,Ie.y1-1.1,0,Ie.x1-Ie.x0,1.1,$e,0,1,!1),nt(Ie.x0,Ie.y0+1.1,0,1.1,Ie.y1-Ie.y0-2.2,$e,-1,0,!1),nt(Ie.x1-1.1,Ie.y0+1.1,0,1.1,Ie.y1-Ie.y0-2.2,$e,1,0,!1),nt(34.5,Ie.y0+1.1,0,.7,40,$e*.86,0,0,!0);const n=Fe("gis","power");for(let o=0;o<3;o++){const a=56+o*10;Q(n,11,a,0,3.4,6.4,2.6,de.gray),Wn(n,[15.5,a+1.6,1.9],[27,a+1.6,1.9],1.05,"#D6E0EA",{seg:14}),Wn(n,[15.5,a+4.8,1.9],[27,a+4.8,1.9],1.05,"#D6E0EA",{seg:14});for(let l=0;l<3;l++)Ct(n,17.5+l*4,a+3.2,2.6,.75,1.7,"#CBD8E4",{seg:14}),Ct(n,17.5+l*4,a+3.2,4.3,.34,1.1,"#EDE7D8");Q(n,27.5,a+.9,0,2.4,4.6,1.7,"#C2CFDA",{noedge:!0})}const i=Fe("fuel","power");for(let o=0;o<2;o++){const a=62+o*6;Q(i,3.4,a-1.1,0,2.2,2.2,.4,de.steel,{noedge:!0}),Ct(i,4.5,a,.4,.8,.9,"#E8C25A"),Ct(i,4.5,a,1.3,.6,1.5,"#EBDEC0")}function r(o){Wn(i,[-9,o,2.2],[-9,o+10,2.2],1.9,"#EBDEC0",{seg:16}),Q(i,-10.2,o+1.2,0,2.4,.9,1.5,"#CFC2A4",{noedge:!0}),Q(i,-10.2,o+7.9,0,2.4,.9,1.5,"#CFC2A4",{noedge:!0}),Ct(i,-9,o+3.4,4.1,.34,.6,"#CFC2A4")}r(52),r(78),It(i,[[-9,63,1],[0,63,1],[4.5,63.5,1]],"#DCC998",.22,!1);const s=Fe(null,null);Q(s,37,58,0,2.6,5.6,2.4,"#4A5560"),Q(s,40.2,58,0,2.6,5.6,2.4,"#4A5560"),Q(s,37.3,61.2,1.5,2,.22,.6,"#7FD8C8",{noedge:!0})}()}function n2(){xi("f1"),co(Ee.x0,Ee.y0,ki.f1,Ee.x1-Ee.x0,Ee.y1-Ee.y0,1,"f1"),co(34,Ie.y0,ki.f1,Ie.x1-34,Ie.y1-Ie.y0,1,"f1");const t=ki.f1;(function(){const n=Fe(null,null);it(n,7,0,t+.08,91.3,4.2,de.zoneCrah),it(n,12,6,t+.08,28,13,de.zoneElec),it(n,42,6,t+.08,16,13,de.zoneElec),it(n,60,6,t+.08,28,13,de.zoneElec),it(n,.6,5,t+.08,6.4,11,de.zoneCore),it(n,98.3,5,t+.08,6.4,11,de.zoneCore),it(n,20,23,t+.08,14,13,de.zoneCore),it(n,36,23,t+.08,12,10,de.zoneCore),it(n,62,23,t+.08,32,13,de.zoneOffice),it(n,36,58,t+.08,18,32,de.zoneOffice)})(),nt(Ee.x0,Ee.y0,t,Ee.x1-Ee.x0,1.1,$e,0,-1,!1),nt(Ee.x0,Ee.y1-1.1,t,Ee.x1-Ee.x0,1.1,$e,0,1,!1),nt(Ee.x0,1.1,t,1.1,Ee.y1-2.2,$e,-1,0,!1),nt(Ee.x1-1.1,1.1,t,1.1,Ee.y1-2.2,$e,1,0,!1),nt(7,4.4,t,91.3,.7,$e*.86,0,0,!0),nt(10.8,4.9,t,.7,15,$e*.86,0,0,!0),nt(41,4.9,t,.7,15,$e*.86,0,0,!0),nt(58.8,4.9,t,.7,15,$e*.86,0,0,!0),nt(12,20.8,t,82,.7,$e*.86,0,0,!0),nt(34.5,Ie.y0,t,.7,46,$e*.86,0,0,!0),function(){const n=Fe("crah","cooling");for(let i=0;i<8;i++){const r=10+i*11.4;Q(n,r,.8,t,6.6,2.8,$e*.82,de.blue),Q(n,r+.3,.95,t+$e*.82,6,2.5,.55,"#9FBFDF"),fr(n,r+1.8,3.75,t+1.7,1.1),fr(n,r+4.8,3.75,t+1.7,1.1),fr(n,r+1.8,3.75,t+3.9,1.1),fr(n,r+4.8,3.75,t+3.9,1.1)}}(),function(){const n=Fe("ups","power");for(let i=0;i<4;i++){const r=14+i*6.4;Q(n,r,7,t,5.4,3.1,2.6,de.yel),Q(n,r+.5,10,t+1.9,3.4,.26,.55,"#454E58"),Q(n,r+.8,10.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0});for(let s=0;s<4;s++)Q(n,r+.5,10.1,t+.4+s*.34,3.4,.16,.22,"#E8C25A",{noedge:!0})}for(let i=0;i<4;i++){const r=14+i*6.4;Q(n,r,14.5,t,5.4,3.1,2.6,de.yel),Q(n,r+.4,17.45,t+.5,4.4,.26,1.5,"#FFEBAF")}}(),function(){const n=Fe("battery","power");for(let i=0;i<2;i++)for(let r=0;r<2;r++){const s=43.5+i*6.8,o=7.5+r*6.4;Q(n,s,o,t,5.8,3.6,2.4,de.yel);for(let a=0;a<3;a++)Q(n,s+.35,o+3.45,t+.35+a*.75,5.1,.24,.44,"#FFEBAF");Q(n,s,o+3.45,t+2.45,5.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const n=Fe("switchgear","power");for(let i=0;i<2;i++){const r=7.5+i*7;for(let s=0;s<5;s++){const o=61.5+s*5.3;Q(n,o,r,t,4.6,3.1,2.5,de.yel),Q(n,o+.4,r+2.95,t+.8,3.8,.26,1.35,"#FFEBAF"),Q(n,o+.6,r+3.1,t+1.95,1.3,.2,.33,"#4A525C",{noedge:!0})}}}(),function(){const n=Fe("mmr","it");for(let i=0;i<3;i++){Q(n,1.6,6+i*3.4,t,4.2,2.6,2.5,de.purp);for(let r=0;r<4;r++)Q(n,1.75,8.45+i*3.4,t+.4+r*.5,3.9,.2,.3,"#DED8F7")}for(let i=0;i<2;i++){Q(n,99.4,6.5+i*3.8,t,4.2,2.8,2.5,de.purp);for(let r=0;r<3;r++)Q(n,99.55,9.15+i*3.8,t+.45+r*.55,3.9,.2,.32,"#DED8F7")}}(),function(){const n=Fe("bms","mgmt");for(let r=0;r<3;r++){const s=Q(n,66+r*7.4,24.2,t+1,6.6,.4,3.6,"#4A5560");s.rotation.y=(r-1)*.12,Q(n,66.6+r*7.4,24.1,t+1.8,2.1,.22,1.4,r===0?"#7FD8C8":r===1?"#F2C94C":"#E8836A",{noedge:!0,ry:(r-1)*.12}),Q(n,69.4+r*7.4,24.1,t+1.6,2.5,.22,1.9,"#8FB4D8",{noedge:!0,ry:(r-1)*.12})}const i=Fe(null,null);Q(i,68,30,t+1.05,10,2.6,.4,de.wood),Q(i,69,30.6,t,.9,1.4,2.1,de.wood,{noedge:!0}),Q(i,76,30.6,t,.9,1.4,2.1,de.wood,{noedge:!0}),Q(i,70.4,30.4,t+1.5,1.7,.2,1.1,"#5E7A94"),Q(i,73.2,30.4,t+1.5,1.7,.2,1.1,"#5E7A94")}(),function(){const n=Fe(null,null);Q(n,22,26,t,2.8,2.2,.4,de.wood,{noedge:!0}),Q(n,22,26,t+.4,2.8,2.2,1.5,de.cream2),Q(n,26,25,t,2.5,2,2.4,de.cream2),Q(n,23,31,t,2.2,1.9,1.5,de.cream2),Q(n,40,66,t,7.4,2.4,1.1,de.wood),Q(n,41.5,72,t,4.6,1.8,.5,de.rose),Q(n,41.5,72,t+.5,4.6,.6,.65,de.rose,{noedge:!0}),Q(n,41.5,76,t,4.6,1.8,.5,de.rose),Q(n,41.5,76.6,t+.5,4.6,.6,.65,de.rose,{noedge:!0})}()}function i2(){xi("f2"),co(Ee.x0,Ee.y0,ki.f2,Ee.x1-Ee.x0,Ee.y1-Ee.y0,1,"f2"),co(Ie.x0,Ie.y0,ki.f2,Ie.x1-Ie.x0,Ie.y1-Ie.y0,1,"f2");const t=ki.f2;(function(){const o=Fe(null,null);it(o,7,0,t+.08,91.3,4.2,de.zoneCrah),it(o,10,5,t+.08,85,16.5,de.zoneHall),it(o,12,24,t+.08,82,10,de.zoneElec),it(o,.6,5,t+.08,6.4,11,de.zoneCore),it(o,98.3,5,t+.08,6.4,11,de.zoneCore),it(o,8,52,t+.08,28,40,de.zoneMech),it(o,Ie.x0,48,t+.08,6,10,de.zoneMech),it(o,Ie.x0,86,t+.08,6,10,de.zoneMech),it(o,30,45,t+.08,10,7,de.zoneCore),it(o,42,52,t+.08,14,34,de.zoneOffice),it(o,42,92,t+.08,14,10,de.zoneMeet)})(),nt(Ee.x0,Ee.y0,t,Ee.x1-Ee.x0,1.1,$e,0,-1,!1),nt(Ee.x0,Ee.y1-1.1,t,Ee.x1-Ee.x0,1.1,$e,0,1,!1),nt(Ee.x0,1.1,t,1.1,Ee.y1-2.2,$e,-1,0,!1),nt(Ee.x1-1.1,1.1,t,1.1,Ee.y1-2.2,$e,1,0,!1),nt(Ie.x0,Ie.y0,t,Ie.x1-Ie.x0,1.1,$e,0,-1,!1),nt(Ie.x0,Ie.y1-1.1,t,Ie.x1-Ie.x0,1.1,$e,0,1,!1),nt(Ie.x0,Ie.y0+1.1,t,1.1,Ie.y1-Ie.y0-2.2,$e,-1,0,!1),nt(Ie.x1-1.1,Ie.y0+1.1,t,1.1,Ie.y1-Ie.y0-2.2,$e,1,0,!1),nt(7,1.1,t,91.3,.7,$e*.86,0,0,!0),nt(12,22.4,t,82,.7,$e*.86,0,0,!0),nt(7,1.8,t,.7,35,$e*.86,0,0,!0),nt(97.6,1.8,t,.7,35,$e*.86,0,0,!0),nt(40.5,Ie.y0+1.1,t,.7,54,$e*.86,0,0,!0),function(){const o=Fe("crah","cooling");for(let a=0;a<10;a++){const l=8.6+a*9.1;Q(o,l,.8,t,6.4,2.8,$e*.82,de.blue),Q(o,l+.3,.95,t+$e*.82,5.8,2.5,.55,"#9FBFDF"),fr(o,l+1.7,3.75,t+1.7,1.1),fr(o,l+4.7,3.75,t+1.7,1.1),fr(o,l+1.7,3.75,t+3.9,1.1),fr(o,l+4.7,3.75,t+3.9,1.1)}}();const e=[6.6,9.6,12.6,15.6,18.6],n=13,i=11,r=2.35;(function(){const o=Fe("gpu-rack","it");for(let c=0;c<e.length;c++){const f=e[c];for(const d of[-1,1]){const h=f+d*.75-(d>0?0:1.15);for(let p=0;p<i;p++){const _=n+p*r;Q(o,_,h,t,1.9,1.15,2.6,de.rackBody),Q(o,_+.15,d>0?h-.06:h+1.15,t+.2,1.6,.06,2.2,de.rackDoor,{noedge:!0}),Q(o,_+1.55,d>0?h-.04:h+1.17,t+2.42,.16,.05,.12,"#5FE3A8",{noedge:!0})}Q(o,n,f+d*1.55-.15,t+2.95,i*r-.4,.3,.1,de.tray,{noedge:!0})}}const a=Fe("storage","it");for(let c=0;c<4;c++){Q(a,72+c%2*3.2,7+Math.floor(c/2)*4.4,t,2.6,2.9,2.6,de.purp);for(let f=0;f<4;f++)Q(a,72.15+c%2*3.2,9.75+Math.floor(c/2)*4.4,t+.4+f*.55,2.3,.2,.3,"#DED8F7")}const l=Fe("network","it");for(let c=0;c<4;c++){Q(l,82+c%2*3.2,7+Math.floor(c/2)*4.4,t,2.6,2.9,2.6,de.purp);for(let f=0;f<3;f++)Q(l,82.15+c%2*3.2,9.75+Math.floor(c/2)*4.4,t+.35+f*.5,2.3,.2,.22,"#7A6CC9",{noedge:!0});Q(l,82.15+c%2*3.2,9.75+Math.floor(c/2)*4.4,t+2.15,2.3,.2,.36,"#DED8F7")}})(),function(){const o=Fe("containment","cooling");for(const a of e)Q(o,n-.3,a-.78,t+3.1,i*r,1.56,.12,"#CFE4F0",{op:.28}),Q(o,n-.3,a-.78,t+2.6,.1,1.56,.5,"#CFE4F0",{op:.24}),Q(o,n-.3+i*r-.1,a-.78,t+2.6,.1,1.56,.5,"#CFE4F0",{op:.24})}(),function(){const o=Fe("cdu","cooling");for(let l=0;l<e.length;l++){const c=42+l*4.6;Q(o,c,23,t,3,2.4,2.4,de.cdu),Q(o,c+.3,25.3,t+1.8,1.2,.2,.4,"#454E58"),Wn(o,[c+.8,25.4,t+.9],[c+.8,25.9,t+.9],.24,"#0FA396",{seg:10}),Wn(o,[c+1.8,25.4,t+.9],[c+1.8,25.9,t+.9],.24,"#E2793B",{seg:10})}const a=Fe("cold-plate","cooling");Q(a,n+4*r,e[2]-.7,t+2.62,.5,.7,.5,"#0FA396")}(),function(){const o=Fe("ups","power");for(let c=0;c<4;c++){const f=14+c*6.2;Q(o,f,25,t,5.2,3.1,2.6,de.yel),Q(o,f+.5,28,t+1.9,3.2,.26,.55,"#454E58"),Q(o,f+.8,28.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0})}const a=Fe("battery","power");for(let c=0;c<4;c++){const f=46+c*6.2;Q(a,f,25,t,5.2,3.4,2.3,de.yel);for(let d=0;d<3;d++)Q(a,f+.3,28.25,t+.35+d*.72,4.6,.24,.42,"#FFEBAF");Q(a,f,28.25,t+2.35,5.2,.2,.2,"#E86A44",{noedge:!0})}const l=Fe("pdu","power");for(let c=0;c<2;c++){const f=88+c*4.4;Q(l,f,25,t,3.6,3,2.5,de.yel);for(let d=0;d<3;d++)Q(l,f+.4,27.85,t+.5+d*.5,2.8,.18,.32,"#E8C25A",{noedge:!0});Wn(l,[f+1,27.9,t+2.2],[f+1,28.2,t+2.2],.5,"#FFEBAF",{seg:14})}}(),function(){const o=Fe("busway","power");for(const a of[24,52]){Q(o,a-.55,5,t+5.1,1.1,16.5,1,de.yel);for(const l of e)Q(o,a-.7,l-.7,t+4.6,1.4,1.4,.6,de.yelD),It(o,[[a,l,t+4.7],[a,l,t+3.1]],"#EBB410",.2,!1)}}(),function(){const o=Fe("generator","power");function a(f,d){Q(o,f,d,t,12,5.2,.9,"#CFC2A4",{noedge:!0}),Q(o,f+.3,d+.2,t+.9,2.6,4.8,5.4,"#F5C542");for(let h=0;h<4;h++)Q(o,f+.15,d+.6+h*1.05,t+1.6,.18,.7,4.2,"#D9A93C",{noedge:!0});Q(o,f+3.2,d+.5,t+.9,5,4.2,4.2,de.yel),Wn(o,[f+8.6,d+2.6,t+3],[f+11.4,d+2.6,t+3],1.5,"#F7CE55",{seg:16}),Ct(o,f+11.4,d+2.6,t+3,.5,.24,"#E0AC2E"),Wn(o,[f+3.7,d+.9,t+5.8],[f+7.6,d+.9,t+5.8],.55,"#AFB6BD",{seg:12}),It(o,[[f+7.6,d+.9,t+5.8],[f+8.4,d+.9,t+5.8],[f+8.4,d+.9,t+7.2]],"#8E8B82",.3,!1),Q(o,f+4.8,d+4.8,t+5.3,2,.24,1.2,"#454E58")}a(10,56),a(23,56),a(10,74),a(23,74);const l=Fe(null,null);for(let f=0;f<6;f++)Q(l,8.3,55+f*6,t+1+f%2,.3,4,3,"#C6CDD3",{noedge:!0});const c=Fe("fuel","power");for(const f of[50,88])Ct(c,4.6,f+3,t,1.7,4.6,"#EBDEC0",{seg:16}),Ct(c,4.6,f+3,t+4.6,1.75,.3,"#DCC998",{seg:16}),It(c,[[4.6,f+3,t+1],[9,f+5,t+1]],"#DCC998",.2,!1)}(),function(){const o=Fe("fire-gas","mgmt");for(let a=0;a<6;a++){const l=31.5+a%3*1.8,c=47+Math.floor(a/3)*2.2;Ct(o,l,c,t,.62,3.2,"#F7CE55"),Ct(o,l,c,t+3.2,.26,.5,"#8A8577")}Q(o,36.8,46.4,t,2,4.6,2.2,"#CBD1D7")}(),function(){const o=Fe(null,null);for(let a=0;a<3;a++)Q(o,44,56+a*9,t,8,2.2,1.05,de.wood),Q(o,45,56.4+a*9,t+1.1,1.6,.2,1,"#5E7A94"),Q(o,48.5,56.4+a*9,t+1.1,1.6,.2,1,"#5E7A94"),Q(o,45.5,59+a*9,t,1,1,1.1,"#6B7280",{noedge:!0}),Q(o,49,59+a*9,t,1,1,1.1,"#6B7280",{noedge:!0});Q(o,45,94.5,t,8,3.4,1.05,de.wood);for(let a=0;a<4;a++)Q(o,45.6+a*1.9,93.2,t,.9,.9,1.1,"#6B7280",{noedge:!0}),Q(o,45.6+a*1.9,98.3,t,.9,.9,1.1,"#6B7280",{noedge:!0})}()}function r2(){xi("roof"),co(Ee.x0,Ee.y0,ki.roof,Ee.x1-Ee.x0,Ee.y1-Ee.y0,1,"roof",de.roof,de.roofTop,.8),co(Ie.x0,Ie.y0,ki.roof,Ie.x1-Ie.x0,Ie.y1-Ie.y0,1,"roof",de.roof,de.roofTop,.62);const t=ki.roof;(function(){const n=Fe(null,null);Q(n,Ee.x0,Ee.y0,t,Ee.x1-Ee.x0,.5,1.1,de.roof,{noedge:!0}),Q(n,Ee.x0,Ee.y1-.5,t,Ee.x1-Ee.x0,.5,1.1,de.roof,{noedge:!0}),Q(n,Ee.x0,Ee.y0,t,.5,Ee.y1-Ee.y0,1.1,de.roof,{noedge:!0}),Q(n,Ee.x1-.5,Ee.y0,t,.5,Ee.y1-Ee.y0,1.1,de.roof,{noedge:!0})})(),function(){const n=Fe("cooling-tower","cooling");function i(r,s){Q(n,r,s,t,10,8,1.4,"#EAE2D2"),Q(n,r+.3,s+.3,t+1.4,9.4,7.4,4.2,de.cream2);for(let o=0;o<4;o++)Q(n,r+.6,s+7.5,t+1.8+o*.85,8.8,.22,.34,"#DCCFB4",{noedge:!0}),Q(n,r+9.5,s+.6,t+1.8+o*.85,.22,6.8,.34,"#D4C7AC",{noedge:!0});Q(n,r,s,t+5.6,10,8,.7,de.cream),nr(n,r+2.7,s+2.4,t+6.3,1.4),nr(n,r+7.3,s+2.4,t+6.3,1.4),nr(n,r+2.7,s+5.7,t+6.3,1.4),nr(n,r+7.3,s+5.7,t+6.3,1.4),z_(n,r+10.3,s+4,t,6.2)}i(12,7),i(26,7),i(40,7)}(),function(){const n=Fe("dry-cooler","cooling");function i(r,s){Q(n,r,s,t,7.4,1.5,.85,de.steel,{noedge:!0});const o=Q(n,r+.55,s+.4,t+.55,6.3,.4,3.7,"#F2D9B8");o.rotation.x=-.42;const a=Q(n,r+.55,s+4.85,t+.55,6.3,.4,3.7,"#F2D9B8");a.rotation.x=.42,Q(n,r+.3,s+.3,t+3.4,6.8,4.9,.42,de.cream2),nr(n,r+2,s+2.7,t+3.85,1.2,"#B08A62"),nr(n,r+5.4,s+2.7,t+3.85,1.2,"#B08A62")}i(62,7),i(72,7),i(82,7)}(),function(){const n=Fe(null,null);Q(n,62,22,t,7,5.4,2.6,de.cream2),nr(n,65.5,24.7,t+2.6,1.4),Q(n,74,22.5,t,6,4.6,2,de.cream2);for(let i=0;i<3;i++)Q(n,74.3,27,t+.4+i*.55,5.4,.2,.22,"#D4C7AC",{noedge:!0});for(const i of[60,78])Q(n,14,i,t,4,4,1,de.cream2),nr(n,16,i+2,t+1,1.3)}()}function s2(){xi("b1"),function(){const e=Fe("gis","power");It(e,[[22,54,2.2],[22,43,2.2],[28,40,2.2],[28,24,2.2],[26,14,2.6]],"#EBB410",.34);const n=Fe(null,null),i=[[-6,96],[-2,96],[-6,100],[-2,100]];for(let r=0;r<4;r++)Wn(n,[i[r][0],i[r][1],0],[-4,98,13],.2,"#8A9AA8",{seg:8,pick:!1});Q(n,-6.5,97.4,7.6,5,.5,.42,"#8A9AA8",{noedge:!0})}(),function(){const e=Fe("switchgear","power");It(e,[[26,14,2.6],[44,14,2.6],[51,10,3]],"#EBB410",.3,!1),It(e,[[56,10,3],[76,30,3],[101.5,30,3],[101.5,30,20.5],[93,27,20.5]],"#EBB410",.34),It(e,[[24,8,2.8],[3.6,8,2.8],[3.6,8,11.6],[15,8.5,11.6]],"#EBB410",.3)}(),function(){const e=Fe("fws","cooling");It(e,[[17,12,28.6],[17,33,28.6],[96,33,28.6],[96,33,3.6],[86,12,3.9]],"#9CC6E4",.42)}(),function(){const e=Fe("fws","cooling");It(e,[[80,6,2.4],[60,2.5,2.4],[9.5,2.5,2.4],[9.5,2.5,21.9],[94,2.5,21.9]],"#3E9CD6",.42),xi("f1"),It(e,[[9.5,2.5,12.9],[94,2.5,12.9]],"#3E9CD6",.3);for(const n of[16,39,62,85])It(e,[[n,2.5,12.9],[n,2.5,11.2]],"#3E9CD6",.2,!1);xi("f2");for(const n of[16,39,62,85])It(e,[[n,2.5,21.9],[n,2.5,20.2]],"#3E9CD6",.2,!1)}(),xi("f2"),function(){const e=Fe("fws","cooling");It(e,[[43,26.2,20.7],[60,26.2,20.7],[96.5,26.2,20.7],[96.5,26.2,28.6],[96.5,9,28.6],[90,9,28.6]],"#E2793B",.42)}(),function(){const e=Fe("tcs","cooling"),n=Fe("manifold","cooling"),i=[6.6,9.6,12.6,15.6,18.6];for(let r=0;r<i.length;r++){const s=43.5+r*4.6;It(e,[[s,23,20.4],[s,21.6,21.5],[s,i[r],21.5]],"#0FA396",.26),It(n,[[s,i[r],21.5],[13.5,i[r],21.5]],"#0FA396",.26,!1)}}(),function(){const e=Fe("busway","power");It(e,[[24,24.5,20.8],[24,21.5,23.6],[24,5.5,23.6]],"#EBB410",.28),It(e,[[52,24.5,20.8],[52,21.5,23.6],[52,5.5,23.6]],"#EBB410",.28)}(),function(){const e=Fe("generator","power");It(e,[[16,56,24.6],[16,44,24.6],[80,44,24.6],[101.5,33,24.6],[101.5,30,20.8]],"#EBB410",.3)}(),xi(null)}const kr=[["cooling-tower",[31,11,34.2]],["dry-cooler",[75.5,9.5,31.5]],["crah",[50,2.2,23.6]],["gpu-rack",[26,12.6,21.4]],["containment",[38,15.6,21.3]],["cold-plate",[22.7,12,20.9]],["manifold",[20,9.6,21.6]],["tcs",[47,20,21.6]],["cdu",[52,24.2,20.4]],["busway",[52,8,23.7]],["pdu",[90,26.5,20.6]],["storage",[74.5,9,20.8]],["network",[84.5,9,20.8]],["mmr",[3.8,9,11.6]],["ups",[24,8.6,11.8]],["battery",[50,10.6,11.6]],["switchgear",[26,12,2.6]],["transformer",[55,7.5,3.4]],["gis",[21,66,3.2]],["fuel",[-9,57,4.2]],["generator",[17,78.6,23]],["fire-gas",[34,48,21.6]],["chiller",[79,6.3,2.6]],["pumps",[90,8.8,2.2]],["water-treatment",[95.7,12,4.4]],["tes",[82,25.5,7]],["fws",[9.5,2.5,17]],["bms",[77,25,12.8]]];function o2(t,e,n){return new z(t-br,n,e-Dr)}const a2=t=>t<8?"b1":t<17?"f1":t<26?"f2":"roof";function l2(){const t=_i.useRef(null),e=ht(i=>i.floor),n=ht(i=>i.setFloor);return _i.useEffect(()=>{const i=t.current,r=i.querySelector("canvas"),s=i.querySelector(".leaders"),o=i.querySelector(".selected-leader"),a=i.querySelector(".labels"),l=i.querySelector(".tip3d"),c=new HT({canvas:r,antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio||1,2.5)),c.setClearColor(16777215,1),c.outputColorSpace=ii;const f=new VT,d=new Vn(33,1,1,4e3),h=new z(-22,6,-6),p={az:-.62,pol:1.06,dist:315},_={az:-.62,pol:1.06,dist:315,tx:-22,ty:6,tz:-6};function v(){const I=Math.sin(p.pol),F=Math.cos(p.pol);d.position.set(h.x+p.dist*I*Math.sin(p.az),h.y+p.dist*F,h.z+p.dist*I*Math.cos(p.az)),d.lookAt(h),w()}f.add(new WT(16777215,15330802,1.12));const m=new Gm(16777215,.42);m.position.set(120,180,80),f.add(m);const u=new Gm(16777215,.2);u.position.set(-100,80,-120),f.add(u),e2(f);const{groupReg:g,pickables:x,wallsFade:M,flows:P,slabs:R}=_t;(function(){const F=[];for(const Y in g)g[Y].traverse(T=>{if(!T.isMesh||!T.material||!T.material.color||T.userData.flowPart||T.userData.selectionOutline||F.indexOf(T.material)!==-1)return;F.push(T.material);const H={h:0,s:0,l:0};T.material.color.getHSL(H),H.s>.04&&(H.s=Math.min(1,H.s*1.12+.015)),T.material.color.setHSL(H.h,H.s,H.l)})})();const A=[],b={};for(let I=0;I<kr.length;I++){const F=kr[I][0],Y=an[F];b[F]=kr[I][1][2];const T=document.createElement("div");T.className="lbl",T.setAttribute("data-label-id",F),T.style.setProperty("--cat",Gr[Y.cat].color),T.innerHTML='<div class="lt">'+Y.name+'</div><div class="le">'+Y.en+"</div>",T.addEventListener("click",O=>{O.stopPropagation(),K(),ht.getState().setSelected(F)}),T.addEventListener("mouseenter",O=>J(F,O)),T.addEventListener("mousemove",ae),T.addEventListener("mouseleave",K),a.appendChild(T);const H=document.createElementNS("http://www.w3.org/2000/svg","line");H.setAttribute("stroke","#929497"),H.setAttribute("stroke-width","1.6"),H.setAttribute("stroke-dasharray","0.1 7"),H.setAttribute("stroke-linecap","round"),H.setAttribute("stroke-opacity","0.88"),s.appendChild(H);const D=document.createElementNS("http://www.w3.org/2000/svg","circle");D.setAttribute("r","1.25"),D.setAttribute("fill","#929497"),D.setAttribute("stroke","#929497"),D.setAttribute("stroke-opacity","0.88"),s.appendChild(D),A.push({id:F,anchor:o2(kr[I][1][0],kr[I][1][1],kr[I][1][2]),div:T,line:H,dot:D,hidden:!1,sx:0,sy:0,floor:a2(kr[I][1][2])})}let Z=!0,y=null;function w(){i.classList.add("labels-moving"),Z=!0,y&&clearTimeout(y),y=setTimeout(()=>{i.classList.remove("labels-moving"),W(!0)},260)}function W(I){if(!ht.getState().labelsOn||i.classList.contains("labels-moving")||!I&&!Z)return;Z=!1;const F=i.clientWidth,Y=i.clientHeight;if(!F||!Y)return;const T=[],H=Math.max(104,Math.min(140,F*.105)),D=31;for(let q=0;q<A.length;q++){const $=A[q];if($.hidden){$.div.classList.add("hid"),$.line.setAttribute("opacity","0"),$.dot.setAttribute("opacity","0");continue}const te=$.anchor.clone().project(d);$.sx=(te.x*.5+.5)*F,$.sy=(-te.y*.5+.5)*Y,$.div.classList.remove("hid"),$.div.style.width=H+"px",$.div.style.maxWidth=H+"px",T.push($)}if(!T.length)return;const O={l:Math.max(18,F*.018)+96,r:F-Math.max(18,F*.018)-20,t:Math.max(16,Y*.025)+50,b:Y-Math.max(16,Y*.025)-40},V=Math.max(30,F*.022),oe=Math.max(26,Y*.038),We=O.r-O.l,qe=Math.max(4,Math.floor((We+V)/(H+V)));let mt=Math.min(qe,Math.ceil(T.length*.34)),Xe=Math.min(qe,Math.ceil(T.length*.34)),Mt=Math.max(0,T.length-mt-Xe),Yt=Math.ceil(Mt/2),At=Mt-Yt;const xn=Math.max(Yt,At),xt=O.b-O.t-D*2-oe*2;if(xn>1&&xt/(xn-1)<D+oe){const q=T.length-(Math.floor(xt/(D+oe))+1)*2;mt=Math.min(qe,Math.ceil(q/2)),Xe=Math.min(qe,q-mt),Mt=Math.max(0,T.length-mt-Xe),Yt=Math.ceil(Mt/2),At=Mt-Yt}const tt=[];function Cn(q,$,te){if(!q)return;const le=We-H;for(let ue=0;ue<q;ue++)tt.push({x:O.l+(q===1?le/2:le*ue/(q-1)),y:$,side:te})}function fn(q,$,te){if(!q)return;const le=O.t+D+oe,ue=O.b-D*2-oe;for(let Me=0;Me<q;Me++)tt.push({x:$,y:q===1?(le+ue)/2:le+(ue-le)*Me/(q-1),side:te})}Cn(mt,O.t,"top"),Cn(Xe,O.b-D,"bottom"),fn(Yt,O.l,"left"),fn(At,O.r-H,"right"),function(){const $=O.r-H,te=O.t,le=O.b-D,ue=Math.max(18,(H+V)/4),Me=Math.max(14,(D+oe)/3);for(let ze=O.l;ze<=$+.5;ze+=ue)tt.push({x:Math.min(ze,$),y:te,side:"top"}),tt.push({x:Math.min(ze,$),y:le,side:"bottom"});tt.push({x:$,y:te,side:"top"}),tt.push({x:$,y:le,side:"bottom"});const De=O.t+D+oe,Ue=O.b-D*2-oe;for(let ze=De;ze<=Ue+.5;ze+=Me)tt.push({x:O.l,y:Math.min(ze,Ue),side:"left"}),tt.push({x:O.r-H,y:Math.min(ze,Ue),side:"right"});tt.push({x:O.l,y:Ue,side:"left"}),tt.push({x:O.r-H,y:Ue,side:"right"})}();function On(){const q=[],$=new os,te=new z;return f.updateMatrixWorld(!0),d.updateMatrixWorld(!0),f.traverse(le=>{if(!le.isMesh||!le.visible||le.userData.groundSurface||le.userData.selectionOutline||le.userData.flowParticle||($.setFromObject(le),$.isEmpty()))return;let ue=1/0,Me=1/0,De=-1/0,Ue=-1/0,ze=!1;for(let Ye=0;Ye<2;Ye++)for(let Te=0;Te<2;Te++)for(let lt=0;lt<2;lt++){if(te.set(Ye?$.max.x:$.min.x,Te?$.max.y:$.min.y,lt?$.max.z:$.min.z).project(d),!isFinite(te.x)||!isFinite(te.y))continue;const Ze=(te.x*.5+.5)*F,Vt=(-te.y*.5+.5)*Y;ze=!0,ue=Math.min(ue,Ze),De=Math.max(De,Ze),Me=Math.min(Me,Vt),Ue=Math.max(Ue,Vt)}!ze||De<0||ue>F||Ue<0||Me>Y||q.push({l:ue-4,r:De+4,t:Me-4,b:Ue+4})}),q}const Yi=[F,Y,d.position.x.toFixed(3),d.position.y.toFixed(3),d.position.z.toFixed(3),d.quaternion.x.toFixed(5),d.quaternion.y.toFixed(5),d.quaternion.z.toFixed(5),d.quaternion.w.toFixed(5)].join("|");let tn;W._key===Yi&&W._rects?tn=W._rects:(tn=On(),W._key=Yi,W._rects=tn);function Lr(q){const $=q.x-3,te=q.x+H+3,le=q.y-3,ue=q.y+D+3;let Me=0,De=0;for(let Ue=0;Ue<tn.length;Ue++){const ze=tn[Ue],Ye=Math.min(te,ze.r)-Math.max($,ze.l),Te=Math.min(ue,ze.b)-Math.max(le,ze.t);Ye>0&&Te>0&&(De++,Me=Math.max(Me,Ye*Te))}return Me?24e4+Me*45+Math.min(De,8)*3500:0}for(let q=0;q<tt.length;q++)tt[q].modelPenalty=Lr(tt[q]);function wi(q,$,te,le){function ue(Me,De,Ue){return(Ue.y-Me.y)*(De.x-Me.x)>(De.y-Me.y)*(Ue.x-Me.x)}return ue(q,te,le)!==ue($,te,le)&&ue(q,$,te)!==ue(q,$,le)}function xo(q,$,te){const le={l:te.x+5,r:te.x+H,t:te.y+1,b:te.y+D-1};if(q.x>le.l&&q.x<le.r&&q.y>le.t&&q.y<le.b)return!0;const ue={x:le.l,y:le.t},Me={x:le.r,y:le.t},De={x:le.r,y:le.b},Ue={x:le.l,y:le.b};return wi(q,$,ue,Me)||wi(q,$,Me,De)||wi(q,$,De,Ue)||wi(q,$,Ue,ue)}function Ti(q,$){const te={x:q.x,y:q.y},le={x:q.x,y:q.y+D-2},ue={x:$.sx,y:$.sy},Me=(xo(ue,te,q)?1e6:0)+Math.hypot(ue.x-te.x,ue.y-te.y),De=(xo(ue,le,q)?1e6:0)+Math.hypot(ue.x-le.x,ue.y-le.y);return Me<=De?te:le}function wa(q,$){return!(q.x+H+V<=$.x||$.x+H+V<=q.x||q.y+D+oe<=$.y||$.y+D+oe<=q.y)}const E=F/2,N=Y/2,X={},B=[];T.sort((q,$)=>Math.hypot($.sx-E,$.sy-N)-Math.hypot(q.sx-E,q.sy-N));for(let q=0;q<T.length;q++){const $=T[q];let te=-1,le=1/0,ue=$.sx-E,Me=$.sy-N;const De=Math.max(1,Math.hypot(ue,Me));ue/=De,Me/=De;for(let Ue=0;Ue<2;Ue++){for(let ze=0;ze<tt.length;ze++){if(X[ze])continue;let Ye=!1;for(let bt=0;bt<B.length;bt++)if(wa(tt[ze],B[bt].slot)){Ye=!0;break}if(Ue===0&&Ye)continue;const Te=Ti(tt[ze],$);let lt=Te.x-E,Ze=Te.y-N;const Vt=Math.max(1,Math.hypot(lt,Ze));lt/=Vt,Ze/=Vt;let hi=Math.hypot($.sx-Te.x,$.sy-Te.y)+(1-(ue*lt+Me*Ze))*1100+(tt[ze].modelPenalty||0)+(Ye?5e6:0);for(let bt=0;bt<B.length;bt++)wi({x:$.sx,y:$.sy},Te,{x:B[bt].item.sx,y:B[bt].item.sy},B[bt].end)&&(hi+=1e5);hi<le&&(le=hi,te=ze)}if(te>=0)break}te<0||(X[te]=!0,B.push({item:$,slot:tt[te],end:Ti(tt[te],$)}))}function k(q){let $=0;for(let te=0;te<q.length;te++){const le=q[te].item,ue=Ti(q[te].slot,le),Me=le.sx-E,De=le.sy-N,Ue=Math.max(1,Math.hypot(Me,De)),ze=ue.x-E,Ye=ue.y-N,Te=Math.max(1,Math.hypot(ze,Ye));$+=Math.hypot(le.sx-ue.x,le.sy-ue.y)+(1-(Me/Ue*ze/Te+De/Ue*Ye/Te))*700+(q[te].slot.modelPenalty||0);for(let lt=0;lt<q.length;lt++)lt!==te&&xo({x:le.sx,y:le.sy},ue,q[lt].slot)&&($+=45e3);for(let lt=te+1;lt<q.length;lt++){const Ze=q[lt].item,Vt=Ti(q[lt].slot,Ze);wi({x:le.sx,y:le.sy},ue,{x:Ze.sx,y:Ze.sy},Vt)&&($+=14e4),wa(q[te].slot,q[lt].slot)&&($+=8e6)}}return $}let ge=k(B);for(let q=0;q<18;q++){let $=-1,te=-1,le=ge;for(let Me=0;Me<B.length-1;Me++)for(let De=Me+1;De<B.length;De++){let Ue=B[Me].slot;B[Me].slot=B[De].slot,B[De].slot=Ue;const ze=k(B);Ue=B[Me].slot,B[Me].slot=B[De].slot,B[De].slot=Ue,ze<le-.5&&(le=ze,$=Me,te=De)}if($<0)break;const ue=B[$].slot;B[$].slot=B[te].slot,B[te].slot=ue,B[$].end=Ti(B[$].slot,B[$].item),B[te].end=Ti(B[te].slot,B[te].item),ge=le}const Se=ht.getState().selected;for(let q=0;q<B.length;q++){const $=B[q],te=$.item,le=$.slot.x,ue=$.slot.y;te.div.style.left=le+"px",te.div.style.top=ue+"px";const Me=Ti($.slot,te),De=Me.x,Ue=Me.y,ze=je(te,De,Ue,F,Y);te.line.setAttribute("x1",ze.x),te.line.setAttribute("y1",ze.y),te.line.setAttribute("x2",De),te.line.setAttribute("y2",Ue),te.dot.setAttribute("cx",ze.x),te.dot.setAttribute("cy",ze.y),te.line.setAttribute("opacity",te.id===Se?"1":Se?".6":".78"),te.dot.setAttribute("opacity",te.id===Se?"1":Se?".6":".78")}}function j(){const I=i.clientWidth,F=i.clientHeight,Y=ht.getState().selected;for(let T=0;T<A.length;T++){const H=A[T],D=parseFloat(H.line.getAttribute("x2")),O=parseFloat(H.line.getAttribute("y2"));if(!isFinite(D)||!isFinite(O))continue;const V=H.id===Y?je(H,D,O,I,F):{x:H.sx,y:H.sy};H.line.setAttribute("x1",V.x),H.line.setAttribute("y1",V.y),H.dot.setAttribute("cx",V.x),H.dot.setAttribute("cy",V.y)}}function J(I,F){const Y=an[I];Y&&(l.style.setProperty("--tip-color",Gr[Y.cat].color),l.classList.toggle("power-tip",Y.cat==="power"),l.innerHTML='<div class="t-name">'+Y.name+'</div><div class="t-en">'+Y.en+'</div><div class="t-short">'+Y.short+"</div>",l.style.display="block",F&&ae(F))}function ae(I){const F=i.getBoundingClientRect(),Y=I.clientX-F.left,T=I.clientY-F.top,H=14;let D=Y+H,O=T+H;const V=l.getBoundingClientRect();D+V.width>F.width-8&&(D=Y-V.width-H),O+V.height>F.height-8&&(O=T-V.height-H),l.style.left=D+"px",l.style.top=O+"px"}function K(){l.style.display="none"}function ce(I,F){const Y=g[I];Y&&Y.traverse(T=>{T.material&&F(T)})}let U=null;function se(I){U!==I&&(U&&ce(U,F=>{F.material.emissive&&!F.userData.flowPart&&F.material.emissive.setHex(0)}),U=I,U&&ce(U,F=>{F.material.emissive&&!F.userData.flowPart&&F.material.emissive.setHex(2443119)}))}let re=[];function _e(){for(let I=0;I<re.length;I++){const F=re[I];F.material.color.copy(F.color),F.emissive&&F.material.emissive.copy(F.emissive),F.hadVC&&(F.material.vertexColors=!0,F.material.needsUpdate=!0)}re=[]}function Oe(I){_e();const F=g[I],Y=new He("#d2d4d6");f.traverse(T=>{if(!T.material||!T.material.color||T.userData.selectionOutline)return;for(let D=T;D;D=D.parent)if(D===F)return;for(let D=0;D<re.length;D++)if(re[D].material===T.material)return;const H={material:T.material,color:T.material.color.clone()};T.material.emissive&&(H.emissive=T.material.emissive.clone()),T.material.vertexColors?(H.hadVC=!0,T.material.vertexColors=!1,T.material.needsUpdate=!0,T.material.color.set("#c4c7ca")):T.material.color.lerp(Y,.78),T.material.emissive&&T.material.emissive.setHex(0),re.push(H)})}let et=[];function ee(){for(let I=0;I<et.length;I++){const F=et[I];F.parent&&F.parent.remove(F),F.geometry&&F.geometry.dispose(),F.material&&F.material.dispose()}et=[]}function he(I,F,Y,T,H){const D=new z().subVectors(Y,F),O=D.length();if(O<.01)return;const V=new St(new Mr(T,T,O,6,1,!1),H.clone());V.position.copy(F).add(Y).multiplyScalar(.5),V.quaternion.setFromUnitVectors(new z(0,1,0),D.normalize()),V.userData.selectionOutline=!0,V.renderOrder=80,I.add(V),et.push(V)}function Ae(I){ee();const F=g[I];if(!F)return;const Y=[];let T=0;const H=new z;F.traverse(V=>{if(!V.isMesh||!V.geometry||V.userData.flowPart||V.userData.selectionOutline||(V.geometry.computeBoundingBox(),!V.geometry.boundingBox))return;const oe=V.geometry.boundingBox.getSize(H).length();T=Math.max(T,oe),Y.push({mesh:V,diag:oe})});const D=Math.max(.06,Math.min(.13,T*.0065)),O=new Rc({color:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let V=0;V<Y.length;V++){const oe=Y[V].mesh,We=oe.geometry.type||"";if(Y[V].diag<T*.26||!/BoxGeometry|CylinderGeometry/.test(We))continue;const qe=new Rh(oe.geometry,24),mt=qe.attributes.position;for(let Xe=0;Xe<mt.count;Xe+=2)he(oe,new z().fromBufferAttribute(mt,Xe),new z().fromBufferAttribute(mt,Xe+1),D,O);qe.dispose()}O.dispose()}function we(I){if(I.length<3)return I;I.sort((H,D)=>H.x===D.x?H.y-D.y:H.x-D.x);function F(H,D,O){return(D.x-H.x)*(O.y-H.y)-(D.y-H.y)*(O.x-H.x)}const Y=[],T=[];for(let H=0;H<I.length;H++){for(;Y.length>=2&&F(Y[Y.length-2],Y[Y.length-1],I[H])<=0;)Y.pop();Y.push(I[H])}for(let H=I.length-1;H>=0;H--){for(;T.length>=2&&F(T[T.length-2],T[T.length-1],I[H])<=0;)T.pop();T.push(I[H])}return Y.pop(),T.pop(),Y.concat(T)}function je(I,F,Y,T,H){const D=ht.getState().selected;if(I.id!==D||!g[I.id])return{x:I.sx,y:I.sy};const O=[],V=g[I.id];V.updateMatrixWorld(!0),V.traverse(At=>{if(!At.isMesh||!At.geometry||At.userData.selectionOutline||At.userData.flowPart)return;At.geometry.computeBoundingBox();const xn=At.geometry.boundingBox;if(!xn)return;const xt=xn.min,tt=xn.max,Cn=[[xt.x,xt.y,xt.z],[tt.x,xt.y,xt.z],[xt.x,tt.y,xt.z],[tt.x,tt.y,xt.z],[xt.x,xt.y,tt.z],[tt.x,xt.y,tt.z],[xt.x,tt.y,tt.z],[tt.x,tt.y,tt.z]];for(let fn=0;fn<Cn.length;fn++){const On=new z(Cn[fn][0],Cn[fn][1],Cn[fn][2]).applyMatrix4(At.matrixWorld).project(d);O.push({x:(On.x*.5+.5)*T,y:(-On.y*.5+.5)*H})}});const oe=we(O);if(oe.length<3)return{x:I.sx,y:I.sy};let We=0,qe=0;for(let At=0;At<oe.length;At++)We+=oe[At].x,qe+=oe[At].y;We/=oe.length,qe/=oe.length;const mt=F-We,Xe=Y-qe;let Mt=1/0,Yt=null;for(let At=0;At<oe.length;At++){const xn=oe[At],xt=oe[(At+1)%oe.length],tt=xt.x-xn.x,Cn=xt.y-xn.y,fn=mt*Cn-Xe*tt;if(Math.abs(fn)<1e-4)continue;const On=xn.x-We,Yi=xn.y-qe,tn=(On*Cn-Yi*tt)/fn,Lr=(On*Xe-Yi*mt)/fn;tn>0&&Lr>=0&&Lr<=1&&tn<Mt&&(Mt=tn,Yt={x:We+mt*tn,y:qe+Xe*tn})}return Yt||{x:I.sx,y:I.sy}}let Be=[];function at(){for(let I=0;I<Be.length;I++)Be[I].m.depthTest=Be[I].dt,Be[I].obj.renderOrder=Be[I].ro;Be=[]}function ft(){const I=ht.getState().selected;for(let F=0;F<A.length;F++){const Y=A[F];if(Y.hidden){Y.div.classList.remove("sel","dim"),Y.line.setAttribute("opacity","0"),Y.dot.setAttribute("opacity","0"),s.appendChild(Y.line),s.appendChild(Y.dot);continue}const T=Y.id===I;Y.div.classList.toggle("sel",T),Y.div.classList.toggle("dim",!!I&&!T),Y.line.setAttribute("stroke",T?"#000":"#929497"),Y.line.setAttribute("stroke-width",T?"1.65":"1.6"),Y.dot.setAttribute("fill",T?"#000":"#929497"),Y.dot.setAttribute("r",T?"2.24":"1.25"),Y.dot.setAttribute("stroke",T?"#000":"#929497"),Y.dot.setAttribute("stroke-opacity",T?"1":".88"),Y.line.setAttribute("stroke-opacity",T?"1":".88"),Y.line.setAttribute("opacity",T?"1":I?".6":".78"),Y.dot.setAttribute("opacity",T?"1":I?".6":".78"),(T?o:s).appendChild(Y.line),(T?o:s).appendChild(Y.dot)}}function rt(){const{filter:I,floor:F}=ht.getState();f.traverse(Y=>{if(!Y.material)return;const T=Y.material.userData&&Y.material.userData.baseOp!==void 0?Y.material.userData.baseOp:1;let H=!1;for(let O=Y;O;O=O.parent)if(O.userData&&O.userData.cat){H=I!=="all"&&O.userData.cat!==I;break}const D=F!=="all"&&Y.userData.floor&&Y.userData.floor!==F;Y.userData._dimmed=H||!!D,Y.userData._floorHidden=!!D,Y.visible=!D,Y.material.transparent=H||T<1,Y.material.opacity=H?Y.isLineSegments?.03:.06:T});for(let Y=0;Y<A.length;Y++){const T=A[Y],H=an[T.id].cat;T.hidden=I!=="all"&&H!==I||F!=="all"&&T.floor!==F}Z=!0,W(!0),ft(),L()}function L(){const{flowState:I}=ht.getState();for(let F=0;F<P.length;F++){const Y=!!I[P[F].key];P[F].enabled=Y;for(let T=0;T<P[F].parts.length;T++){const H=P[F].parts[T],D=H.material;if(H.visible=!H.userData._floorHidden,D.userData||(D.userData={}),D.userData.flowBaseColor||(D.userData.flowBaseColor=D.color.clone()),D.color.copy(D.userData.flowBaseColor),Y||D.color.lerp(new He("#c8cacc"),.74),H.userData._dimmed)continue;const O=D.userData.baseOp===void 0?1:D.userData.baseOp;D.transparent=!Y||O<1,D.opacity=Y?O:Math.min(.58,O*.58),D.needsUpdate=!0}for(let T=0;T<P[F].dots.length;T++)P[F].dots[T].visible=Y&&!P[F].dots[T].userData._floorHidden}}let Ht=0;const Ke={x:0,y:0};let st=!1;const ke=new YT,dt=new pt;let Ne=null;function C(I){Ne=null,Ht=I.button===2?2:1,st=!1,Ke.x=I.clientX,Ke.y=I.clientY}function S(I){if(!Ht){Le(I);return}const F=I.clientX-Ke.x,Y=I.clientY-Ke.y;if(Math.abs(F)+Math.abs(Y)>3&&(st=!0),Ke.x=I.clientX,Ke.y=I.clientY,Ht===1)p.az-=F*.0052,p.pol=Math.max(.06,Math.min(1.54,p.pol-Y*.0042));else{const T=p.dist*.0011,H=new z().subVectors(d.position,h).cross(new z(0,1,0)).normalize(),D=new z(0,1,0);h.add(H.multiplyScalar(F*T)).add(D.multiplyScalar(Y*T))}v()}function G(){Ht=0}function ie(I){I.preventDefault(),Ne=null;const F=Math.max(28,Math.min(560,p.dist*(I.deltaY>0?1.1:1/1.1))),Y=F/p.dist,T=r.getBoundingClientRect();dt.x=(I.clientX-T.left)/T.width*2-1,dt.y=-((I.clientY-T.top)/T.height)*2+1,ke.setFromCamera(dt,d);let H=new z;const D=ke.intersectObjects(x,!1);D.length?H.copy(D[0].point):ke.ray.intersectPlane(new sr(new z(0,1,0),0),H)||(H=null),H&&h.lerp(H,1-Y),p.dist=F,v()}function fe(I){let F=I;for(;F;){if(F.userData&&F.userData.term)return F.userData.term;F=F.parent}return null}function ne(I){const F=r.getBoundingClientRect();dt.x=(I.clientX-F.left)/F.width*2-1,dt.y=-((I.clientY-F.top)/F.height)*2+1,ke.setFromCamera(dt,d);const Y=ke.intersectObjects(x,!1),{filter:T,floor:H}=ht.getState();for(let D=0;D<Y.length;D++){const O=Y[D].object;if(O.userData._dimmed)continue;const V=fe(O);if(V){if(T!=="all"&&an[V]&&an[V].cat!==T||H!=="all"&&O.userData.floor&&O.userData.floor!==H)continue;return V}}return null}function Le(I){if(I.target!==r){se(null);return}const F=ne(I);se(F),F?(J(F,I),r.style.cursor="pointer"):(K(),r.style.cursor=Ht?"grabbing":"default")}function xe(I){if(st){st=!1;return}const F=ne(I);ht.getState().setSelected(F||null)}r.addEventListener("mousedown",C),window.addEventListener("mousemove",S),window.addEventListener("mouseup",G),r.addEventListener("contextmenu",I=>I.preventDefault()),r.addEventListener("wheel",ie,{passive:!1}),r.addEventListener("click",xe);let ye={selected:null,filter:"all",floor:"all",flowState:ht.getState().flowState,resetTick:0,labelsOn:!0,focusTick:0};const ct=ht.subscribe(I=>{if(I.labelsOn!==ye.labelsOn&&(i.classList.toggle("labels-off",!I.labelsOn),I.labelsOn&&(Z=!0,W(!0))),I.focusTick!==ye.focusTick&&I.focusId){const F=A.find(Y=>Y.id===I.focusId);if(F){const Y=I.focusId==="fws"?"all":F.floor;I.floor!==Y&&I.setFloor(Y);let T=70;const H=g[I.focusId];if(H){const D=new os().setFromObject(H);if(!D.isEmpty()){const O=D.getBoundingSphere(new Ea);T=$p.clamp(O.radius*2.8,48,150)}}Ne={t:F.anchor.clone(),d:T,p:$p.clamp(p.pol,.55,1.15)}}ye.focusTick=I.focusTick}if(I.resetTick!==ye.resetTick&&(p.az=_.az,p.pol=_.pol,p.dist=_.dist,h.set(_.tx,_.ty,_.tz),v()),(I.filter!==ye.filter||I.floor!==ye.floor)&&(rt(),I.selected&&I.filter!=="all"&&an[I.selected].cat!==I.filter&&I.setSelected(null)),I.flowState!==ye.flowState&&(L(),I.selected&&Oe(I.selected)),I.selected!==ye.selected)if(I.selected){ft(),j();const F=I.selected;requestAnimationFrame(()=>{ht.getState().selected===F&&(Oe(F),at(),Ae(F),j())})}else at(),ee(),_e(),ft(),j();ye={selected:I.selected,filter:I.filter,floor:I.floor,flowState:I.flowState,resetTick:I.resetTick,labelsOn:I.labelsOn,focusTick:I.focusTick}}),me=new z;let Ce=0;function Ve(I){Ce=requestAnimationFrame(Ve),Ne&&(h.lerp(Ne.t,.09),p.dist+=(Ne.d-p.dist)*.09,p.pol+=(Ne.p-p.pol)*.09,v(),h.distanceTo(Ne.t)<.4&&Math.abs(p.dist-Ne.d)<.8&&(Ne=null));const F=ht.getState().floor!=="all";me.subVectors(d.position,h),me.y=0,me.normalize();for(let O=0;O<M.length;O++){const V=M[O],oe=V.m.userData._dimmed?.06:V.n.dot(me)>.18?.07:F?.26:.95;V.m.material.transparent=!0,V.m.material.opacity+=(oe-V.m.material.opacity)*.18,V.e.material.opacity=V.m.material.opacity>.4?V.e.material.userData.baseOp:F&&!V.m.userData._dimmed?.3:0}const Y=ht.getState().selected,T=Y!=null&&b[Y]!==void 0?b[Y]:1/0,H=ht.getState().floor;for(let O=0;O<R.length;O++){const V=R[O];let oe=V.baseOp;V.m.userData._dimmed?oe=.06:H!=="all"&&V.floor===H?oe=.97:T<V.zTop-1?oe=.08:V.floor==="roof"&&p.pol<.62&&(oe=.1),V.m.material.transparent=!0,V.m.material.opacity+=(oe-V.m.material.opacity)*.15,V.e.material.transparent=!0,V.e.material.opacity=V.m.material.opacity>.4?1:0,V.top.material.opacity=Math.min(V.top.material.userData.baseOp,V.m.material.opacity)}const D=(I||0)*1e-4;for(let O=0;O<P.length;O++){const V=P[O];if(V.enabled)for(let oe=0;oe<V.dots.length;oe++){const We=(D+V.off+V.dots[oe].userData.flowU+1)%1*V.tot;let qe=1;for(;qe<V.lens.length&&V.lens[qe]<We;)qe++;const mt=V.vs[qe-1],Xe=V.vs[Math.min(qe,V.vs.length-1)],Mt=(We-V.lens[qe-1])/Math.max(V.lens[qe]-V.lens[qe-1],.001);V.dots[oe].position.lerpVectors(mt,Xe,Math.min(Mt,1))}}W(),c.render(f,d)}function Ge(){const I=i.clientWidth,F=i.clientHeight;!I||!F||(c.setSize(I,F,!1),d.aspect=I/F,d.updateProjectionMatrix(),s.setAttribute("width",I),s.setAttribute("height",F),s.setAttribute("viewBox","0 0 "+I+" "+F),o.setAttribute("width",I),o.setAttribute("height",F),o.setAttribute("viewBox","0 0 "+I+" "+F),Z=!0,w())}const Re=new ResizeObserver(Ge);return Re.observe(i),Ge(),v(),rt(),Ve(0),window.__AIDC={ctx:_t,scene:f,useAppStore:ht,applyVisibility:rt},()=>{cancelAnimationFrame(Ce),Re.disconnect(),ct(),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",G),c.dispose(),a.innerHTML="",s.innerHTML="",o.innerHTML=""}},[]),be.jsxs("div",{ref:t,className:"viewport3d",children:[be.jsx("canvas",{className:"gl"}),be.jsx("svg",{className:"leaders"}),be.jsx("div",{className:"labels"}),be.jsx("svg",{className:"selected-leader","aria-hidden":"true"}),be.jsx("div",{className:"tip3d",role:"tooltip",style:{display:"none"}}),be.jsx("nav",{className:"floor-nav","aria-label":"층 선택",children:Object.entries(Ey).map(([i,r])=>be.jsx("button",{className:`floor-chip${e===i?" on":""}`,onClick:()=>n(i),children:r},i))}),be.jsx("div",{className:"scene-copyright",children:"© 2026 SUNJIN Engineering & Architecture. All rights reserved."})]})}function c2(){return be.jsxs("div",{className:"app-shell",children:[be.jsx(my,{}),be.jsxs("div",{className:"wrap",children:[be.jsx(wy,{}),be.jsxs("main",{className:"stage",children:[be.jsx(My,{}),be.jsx(l2,{})]})]})]})}Bu.createRoot(document.getElementById("root")).render(be.jsx(Io.StrictMode,{children:be.jsx(c2,{})}));
