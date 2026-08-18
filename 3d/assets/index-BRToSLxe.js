(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function u_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d0={exports:{}},vc={},h0={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),f_=Symbol.for("react.portal"),d_=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),p_=Symbol.for("react.profiler"),m_=Symbol.for("react.provider"),g_=Symbol.for("react.context"),v_=Symbol.for("react.forward_ref"),__=Symbol.for("react.suspense"),x_=Symbol.for("react.memo"),y_=Symbol.for("react.lazy"),Vh=Symbol.iterator;function S_(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,g0={};function go(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v0(){}v0.prototype=go.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}var Rd=Cd.prototype=new v0;Rd.constructor=Cd;m0(Rd,go.prototype);Rd.isPureReactComponent=!0;var Gh=Array.isArray,_0=Object.prototype.hasOwnProperty,bd={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,i)&&!x0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:s,ref:o,props:r,_owner:bd.current}}function M_(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case f_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bc(o,0):i,Gh(r)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),yl(r,e,n,"",function(c){return c})):r!=null&&(Pd(r)&&(r=M_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bc(s,a);o+=yl(s,e,n,l,r)}else if(l=S_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bc(s,a++),o+=yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function w_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dn={current:null},Sl={transition:null},T_={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:bd};function S0(){throw Error("act(...) is not supported in production builds of React.")}dt.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};dt.Component=go;dt.Fragment=d_;dt.Profiler=p_;dt.PureComponent=Cd;dt.StrictMode=h_;dt.Suspense=__;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;dt.act=S0;dt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_0.call(e,l)&&!x0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:s,props:i,_owner:o}};dt.createContext=function(t){return t={$$typeof:g_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m_,_context:t},t.Consumer=t};dt.createElement=y0;dt.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};dt.createRef=function(){return{current:null}};dt.forwardRef=function(t){return{$$typeof:v_,render:t}};dt.isValidElement=Pd;dt.lazy=function(t){return{$$typeof:y_,_payload:{_status:-1,_result:t},_init:w_}};dt.memo=function(t,e){return{$$typeof:x_,type:t,compare:e===void 0?null:e}};dt.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};dt.unstable_act=S0;dt.useCallback=function(t,e){return Dn.current.useCallback(t,e)};dt.useContext=function(t){return Dn.current.useContext(t)};dt.useDebugValue=function(){};dt.useDeferredValue=function(t){return Dn.current.useDeferredValue(t)};dt.useEffect=function(t,e){return Dn.current.useEffect(t,e)};dt.useId=function(){return Dn.current.useId()};dt.useImperativeHandle=function(t,e,n){return Dn.current.useImperativeHandle(t,e,n)};dt.useInsertionEffect=function(t,e){return Dn.current.useInsertionEffect(t,e)};dt.useLayoutEffect=function(t,e){return Dn.current.useLayoutEffect(t,e)};dt.useMemo=function(t,e){return Dn.current.useMemo(t,e)};dt.useReducer=function(t,e,n){return Dn.current.useReducer(t,e,n)};dt.useRef=function(t){return Dn.current.useRef(t)};dt.useState=function(t){return Dn.current.useState(t)};dt.useSyncExternalStore=function(t,e,n){return Dn.current.useSyncExternalStore(t,e,n)};dt.useTransition=function(){return Dn.current.useTransition()};dt.version="18.3.1";h0.exports=dt;var un=h0.exports;const Bo=u_(un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=un,C_=Symbol.for("react.element"),R_=Symbol.for("react.fragment"),b_=Object.prototype.hasOwnProperty,P_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D_={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)b_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:C_,type:t,key:s,ref:o,props:r,_owner:P_.current}}vc.Fragment=R_;vc.jsx=M0;vc.jsxs=M0;d0.exports=vc;var be=d0.exports,ju={},E0={exports:{}},Zn={},w0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,ee){var ne=O.length;O.push(ee);e:for(;0<ne;){var xe=ne-1>>>1,He=O[xe];if(0<r(He,ee))O[xe]=ee,O[ne]=He,ne=xe;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var ee=O[0],ne=O.pop();if(ne!==ee){O[0]=ne;e:for(var xe=0,He=O.length,ut=He>>>1;xe<ut;){var $=2*(xe+1)-1,ce=O[$],Re=$+1,Te=O[Re];if(0>r(ce,ne))Re<He&&0>r(Te,ce)?(O[xe]=Te,O[Re]=ne,xe=Re):(O[xe]=ce,O[$]=ne,xe=$);else if(Re<He&&0>r(Te,ne))O[xe]=Te,O[Re]=ne,xe=Re;else break e}}return ee}function r(O,ee){var ne=O.sortIndex-ee.sortIndex;return ne!==0?ne:O.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=O)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function y(O){if(x=!1,v(O),!g)if(n(l)!==null)g=!0,j(D);else{var ee=n(c);ee!==null&&oe(y,ee.startTime-O)}}function D(O,ee){g=!1,x&&(x=!1,f(L),L=-1),p=!0;var ne=h;try{for(v(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||O&&!w());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,h=d.priorityLevel;var He=xe(d.expirationTime<=ee);ee=t.unstable_now(),typeof He=="function"?d.callback=He:d===n(l)&&i(l),v(ee)}else i(l);d=n(l)}if(d!==null)var ut=!0;else{var $=n(c);$!==null&&oe(y,$.startTime-ee),ut=!1}return ut}finally{d=null,h=ne,p=!1}}var A=!1,T=null,L=-1,Y=5,S=-1;function w(){return!(t.unstable_now()-S<Y)}function X(){if(T!==null){var O=t.unstable_now();S=O;var ee=!0;try{ee=T(!0,O)}finally{ee?W():(A=!1,T=null)}}else A=!1}var W;if(typeof _=="function")W=function(){_(X)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,te=K.port2;K.port1.onmessage=X,W=function(){te.postMessage(null)}}else W=function(){m(X,0)};function j(O){T=O,A||(A=!0,W())}function oe(O,ee){L=m(function(){O(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(D))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var ee=3;break;default:ee=h}var ne=h;h=ee;try{return O()}finally{h=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,ee){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=h;h=O;try{return ee()}finally{h=ne}},t.unstable_scheduleCallback=function(O,ee,ne){var xe=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?xe+ne:xe):ne=xe,O){case 1:var He=-1;break;case 2:He=250;break;case 5:He=1073741823;break;case 4:He=1e4;break;default:He=5e3}return He=ne+He,O={id:u++,callback:ee,priorityLevel:O,startTime:ne,expirationTime:He,sortIndex:-1},ne>xe?(O.sortIndex=ne,e(c,O),n(l)===null&&O===n(c)&&(x?(f(L),L=-1):x=!0,oe(y,ne-xe))):(O.sortIndex=He,e(l,O),g||p||(g=!0,j(D))),O},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(O){var ee=h;return function(){var ne=h;h=ee;try{return O.apply(this,arguments)}finally{h=ne}}}})(T0);w0.exports=T0;var L_=w0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_=un,Kn=L_;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,ia={};function ms(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(ia[t]=e,t=0;t<e.length;t++)A0.add(e[t])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,I_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},jh={};function N_(t){return Yu.call(jh,t)?!0:Yu.call(Xh,t)?!1:I_.test(t)?jh[t]=!0:(Xh[t]=!0,!1)}function F_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O_(t,e,n,i){if(e===null||typeof e>"u"||F_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){hn[t]=new Ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];hn[e]=new Ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){hn[t]=new Ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){hn[t]=new Ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){hn[t]=new Ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){hn[t]=new Ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){hn[t]=new Ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){hn[t]=new Ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){hn[t]=new Ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);hn[e]=new Ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);hn[e]=new Ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Ld);hn[e]=new Ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){hn[t]=new Ln(t,1,!1,t.toLowerCase(),null,!1,!1)});hn.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){hn[t]=new Ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,i){var r=hn.hasOwnProperty(e)?hn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O_(e,n,r,i)&&(n=null),i||r===null?N_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var sr=U_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),b0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,zc;function zo(t){if(zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+t}var kc=!1;function Hc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function B_(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Us:return"Portal";case qu:return"Profiler";case Id:return"StrictMode";case $u:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case C0:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function z_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k_(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=k_(t))}function D0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=P0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L0(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function Qu(t,e){L0(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ko(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function U0(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,N0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H_=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){H_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function F0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function O0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=F0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var V_=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(V_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function Od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,Ys=null,qs=null;function Jh(t){if(t=Ta(t)){if(typeof af!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Mc(e),af(t.stateNode,t.type,e))}}function B0(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function z0(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function k0(t,e){return t(e)}function H0(){}var Vc=!1;function V0(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return k0(t,e,n)}finally{Vc=!1,(Ys!==null||qs!==null)&&(H0(),z0())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var lf=!1;if(Ji)try{var To={};Object.defineProperty(To,"passive",{get:function(){lf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{lf=!1}function G_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var jo=!1,kl=null,Hl=!1,cf=null,W_={onError:function(t){jo=!0,kl=t}};function X_(t,e,n,i,r,s,o,a,l){jo=!1,kl=null,G_.apply(W_,arguments)}function j_(t,e,n,i,r,s,o,a,l){if(X_.apply(this,arguments),jo){if(jo){var c=kl;jo=!1,kl=null}else throw Error(ue(198));Hl||(Hl=!0,cf=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qh(t){if(gs(t)!==t)throw Error(ue(188))}function Y_(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qh(r),t;if(s===i)return Qh(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function W0(t){return t=Y_(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var j0=Kn.unstable_scheduleCallback,ep=Kn.unstable_cancelCallback,q_=Kn.unstable_shouldYield,$_=Kn.unstable_requestPaint,Yt=Kn.unstable_now,K_=Kn.unstable_getCurrentPriorityLevel,Bd=Kn.unstable_ImmediatePriority,Y0=Kn.unstable_UserBlockingPriority,Vl=Kn.unstable_NormalPriority,Z_=Kn.unstable_LowPriority,q0=Kn.unstable_IdlePriority,_c=null,Ii=null;function J_(t){if(Ii&&typeof Ii.onCommitFiberRoot=="function")try{Ii.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:t1,Q_=Math.log,e1=Math.LN2;function t1(t){return t>>>=0,t===0?32:31-(Q_(t)/e1|0)|0}var Ia=64,Na=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ti(e),r=1<<n,i|=t[n],e&=~r;return i}function n1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=n1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $0(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ti(e),t[e]=n}function r1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ct=0;function K0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,kd,J0,Q0,eg,ff=!1,Fa=[],Mr=null,Er=null,wr=null,oa=new Map,aa=new Map,vr=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ta(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o1(t,e,n,i,r){switch(e){case"focusin":return Mr=Ao(Mr,t,e,n,i,r),!0;case"dragenter":return Er=Ao(Er,t,e,n,i,r),!0;case"mouseover":return wr=Ao(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oa.set(s,Ao(oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,aa.set(s,Ao(aa.get(s)||null,t,e,n,i,r)),!0}return!1}function tg(t){var e=es(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=G0(n),e!==null){t.blockedOn=e,eg(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);of=i,n.target.dispatchEvent(i),of=null}else return e=Ta(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){Ml(t)&&n.delete(e)}function a1(){ff=!1,Mr!==null&&Ml(Mr)&&(Mr=null),Er!==null&&Ml(Er)&&(Er=null),wr!==null&&Ml(wr)&&(wr=null),oa.forEach(np),aa.forEach(np)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,a1)))}function la(t){function e(r){return Co(r,t)}if(0<Fa.length){Co(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&Co(Mr,t),Er!==null&&Co(Er,t),wr!==null&&Co(wr,t),oa.forEach(e),aa.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&vr.shift()}var $s=sr.ReactCurrentBatchConfig,Wl=!0;function l1(t,e,n,i){var r=Ct,s=$s.transition;$s.transition=null;try{Ct=1,Hd(t,e,n,i)}finally{Ct=r,$s.transition=s}}function c1(t,e,n,i){var r=Ct,s=$s.transition;$s.transition=null;try{Ct=4,Hd(t,e,n,i)}finally{Ct=r,$s.transition=s}}function Hd(t,e,n,i){if(Wl){var r=df(t,e,n,i);if(r===null)Qc(t,e,i,Xl,n),tp(t,i);else if(o1(r,t,e,n,i))i.stopPropagation();else if(tp(t,i),e&4&&-1<s1.indexOf(t)){for(;r!==null;){var s=Ta(r);if(s!==null&&Z0(s),s=df(t,e,n,i),s===null&&Qc(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(t,e,i,null,n)}}var Xl=null;function df(t,e,n,i){if(Xl=null,t=Od(i),t=es(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case Bd:return 1;case Y0:return 4;case Vl:case Z_:return 16;case q0:return 536870912;default:return 16}default:return 16}}var yr=null,Vd=null,El=null;function ig(){if(El)return El;var t,e=Vd,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function ip(){return!1}function Jn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:ip,this.isPropagationStopped=ip,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=Jn(vo),wa=Ht({},vo,{view:0,detail:0}),u1=Jn(wa),Wc,Xc,Ro,xc=Ht({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Wc=t.screenX-Ro.screenX,Xc=t.screenY-Ro.screenY):Xc=Wc=0,Ro=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),rp=Jn(xc),f1=Ht({},xc,{dataTransfer:0}),d1=Jn(f1),h1=Ht({},wa,{relatedTarget:0}),jc=Jn(h1),p1=Ht({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),m1=Jn(p1),g1=Ht({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v1=Jn(g1),_1=Ht({},vo,{data:0}),sp=Jn(_1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S1[t])?!!e[t]:!1}function Wd(){return M1}var E1=Ht({},wa,{key:function(t){if(t.key){var e=x1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w1=Jn(E1),T1=Ht({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Jn(T1),A1=Ht({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),C1=Jn(A1),R1=Ht({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),b1=Jn(R1),P1=Ht({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D1=Jn(P1),L1=[9,13,27,32],Xd=Ji&&"CompositionEvent"in window,Yo=null;Ji&&"documentMode"in document&&(Yo=document.documentMode);var U1=Ji&&"TextEvent"in window&&!Yo,rg=Ji&&(!Xd||Yo&&8<Yo&&11>=Yo),ap=" ",lp=!1;function sg(t,e){switch(t){case"keyup":return L1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function I1(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function N1(t,e){if(Ns)return t==="compositionend"||!Xd&&sg(t,e)?(t=ig(),El=Vd=yr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F1[t.type]:e==="textarea"}function ag(t,e,n,i){B0(i),e=jl(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,ca=null;function O1(t){_g(t,0)}function yc(t){var e=Bs(t);if(D0(e))return t}function B1(t,e){if(t==="change")return e}var lg=!1;if(Ji){var Yc;if(Ji){var qc="oninput"in document;if(!qc){var up=document.createElement("div");up.setAttribute("oninput","return;"),qc=typeof up.oninput=="function"}Yc=qc}else Yc=!1;lg=Yc&&(!document.documentMode||9<document.documentMode)}function fp(){qo&&(qo.detachEvent("onpropertychange",cg),ca=qo=null)}function cg(t){if(t.propertyName==="value"&&yc(ca)){var e=[];ag(e,ca,t,Od(t)),V0(O1,e)}}function z1(t,e,n){t==="focusin"?(fp(),qo=e,ca=n,qo.attachEvent("onpropertychange",cg)):t==="focusout"&&fp()}function k1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(ca)}function H1(t,e){if(t==="click")return yc(e)}function V1(t,e){if(t==="input"||t==="change")return yc(e)}function G1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ri=typeof Object.is=="function"?Object.is:G1;function ua(t,e){if(Ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yu.call(e,r)||!Ri(t[r],e[r]))return!1}return!0}function dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=dp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dp(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W1(t){var e=fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(i!==null&&jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hp(n,s);var o=hp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X1=Ji&&"documentMode"in document&&11>=document.documentMode,Fs=null,hf=null,$o=null,pf=!1;function pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||Fs==null||Fs!==zl(i)||(i=Fs,"selectionStart"in i&&jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ua($o,i)||($o=i,i=jl(hf,"onSelect"),0<i.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},$c={},dg={};Ji&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Sc(t){if($c[t])return $c[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return $c[t]=e[n];return t}var hg=Sc("animationend"),pg=Sc("animationiteration"),mg=Sc("animationstart"),gg=Sc("transitionend"),vg=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){vg.set(t,e),ms(e,[t])}for(var Kc=0;Kc<mp.length;Kc++){var Zc=mp[Kc],j1=Zc.toLowerCase(),Y1=Zc[0].toUpperCase()+Zc.slice(1);Fr(j1,"on"+Y1)}Fr(hg,"onAnimationEnd");Fr(pg,"onAnimationIteration");Fr(mg,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(gg,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,j_(i,e,void 0,t),t.currentTarget=null}function _g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}}}if(Hl)throw t=cf,Hl=!1,cf=null,t}function Pt(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var i=t+"__bubble";n.has(i)||(xg(e,t,2,!1),n.add(i))}function Jc(t,e,n){var i=0;e&&(i|=4),xg(n,t,i,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[za]){t[za]=!0,A0.forEach(function(n){n!=="selectionchange"&&(q1.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,Jc("selectionchange",!1,e))}}function xg(t,e,n,i){switch(ng(e)){case 1:var r=l1;break;case 4:r=c1;break;default:r=Hd}n=r.bind(null,e,n,t),r=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}V0(function(){var c=s,u=Od(n),d=[];e:{var h=vg.get(t);if(h!==void 0){var p=Gd,g=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":p=w1;break;case"focusin":g="focus",p=jc;break;case"focusout":g="blur",p=jc;break;case"beforeblur":case"afterblur":p=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=C1;break;case hg:case pg:case mg:p=m1;break;case gg:p=b1;break;case"scroll":p=u1;break;case"wheel":p=D1;break;case"copy":case"cut":case"paste":p=v1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=op}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=sa(_,f),y!=null&&x.push(da(_,y,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==of&&(g=n.relatedTarget||n.fromElement)&&(es(g)||g[Qi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?es(g):null,g!==null&&(m=gs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=rp,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=op,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Bs(p),v=g==null?h:Bs(g),h=new x(y,_+"leave",p,n,u),h.target=m,h.relatedTarget=v,y=null,es(u)===c&&(x=new x(f,_+"enter",g,n,u),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,f=g,_=0,v=x;v;v=vs(v))_++;for(v=0,y=f;y;y=vs(y))v++;for(;0<_-v;)x=vs(x),_--;for(;0<v-_;)f=vs(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=vs(x),f=vs(f)}x=null}else x=null;p!==null&&vp(d,h,p,x,!1),g!==null&&m!==null&&vp(d,m,g,x,!0)}}e:{if(h=c?Bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var D=B1;else if(cp(h))if(lg)D=V1;else{D=k1;var A=z1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(D=H1);if(D&&(D=D(t,c))){ag(d,D,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ef(h,"number",h.value)}switch(A=c?Bs(c):window,t){case"focusin":(cp(A)||A.contentEditable==="true")&&(Fs=A,hf=c,$o=null);break;case"focusout":$o=hf=Fs=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,pp(d,n,u);break;case"selectionchange":if(X1)break;case"keydown":case"keyup":pp(d,n,u)}var T;if(Xd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ns?sg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(rg&&n.locale!=="ko"&&(Ns||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ns&&(T=ig()):(yr=u,Vd="value"in yr?yr.value:yr.textContent,Ns=!0)),A=jl(c,L),0<A.length&&(L=new sp(L,t,null,n,u),d.push({event:L,listeners:A}),T?L.data=T:(T=og(n),T!==null&&(L.data=T)))),(T=U1?I1(t,n):N1(t,n))&&(c=jl(c,"onBeforeInput"),0<c.length&&(u=new sp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}_g(d,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=sa(t,n),s!=null&&i.unshift(da(t,s,r)),s=sa(t,e),s!=null&&i.push(da(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=sa(n,s),l!=null&&o.unshift(da(n,l,a))):r||(l=sa(n,s),l!=null&&o.push(da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(K1,"")}function ka(t,e,n){if(e=_p(e),_p(t)!==e&&n)throw Error(ue(425))}function Yl(){}var mf=null,gf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(Q1)}:_f;function Q1(t){setTimeout(function(){throw t})}function eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),la(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);la(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Ui="__reactFiber$"+_o,ha="__reactProps$"+_o,Qi="__reactContainer$"+_o,xf="__reactEvents$"+_o,ex="__reactListeners$"+_o,tx="__reactHandles$"+_o;function es(t){var e=t[Ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[Ui])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[Ui]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Mc(t){return t[ha]||null}var yf=[],zs=-1;function Or(t){return{current:t}}function Lt(t){0>zs||(t.current=yf[zs],yf[zs]=null,zs--)}function Rt(t,e){zs++,yf[zs]=t.current,t.current=e}var Ir={},En=Or(Ir),Fn=Or(!1),as=Ir;function io(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function ql(){Lt(Fn),Lt(En)}function Sp(t,e,n){if(En.current!==Ir)throw Error(ue(168));Rt(En,e),Rt(Fn,n)}function yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,z_(t)||"Unknown",r));return Ht({},n,i)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,as=En.current,Rt(En,t),Rt(Fn,Fn.current),!0}function Mp(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=yg(t,e,as),i.__reactInternalMemoizedMergedChildContext=t,Lt(Fn),Lt(En),Rt(En,t)):Lt(Fn),Rt(Fn,n)}var Xi=null,Ec=!1,tu=!1;function Sg(t){Xi===null?Xi=[t]:Xi.push(t)}function nx(t){Ec=!0,Sg(t)}function Br(){if(!tu&&Xi!==null){tu=!0;var t=0,e=Ct;try{var n=Xi;for(Ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xi=null,Ec=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(t+1)),j0(Bd,Br),r}finally{Ct=e,tu=!1}}return null}var ks=[],Hs=0,Kl=null,Zl=0,ei=[],ti=0,ls=null,ji=1,Yi="";function qr(t,e){ks[Hs++]=Zl,ks[Hs++]=Kl,Kl=t,Zl=e}function Mg(t,e,n){ei[ti++]=ji,ei[ti++]=Yi,ei[ti++]=ls,ls=t;var i=ji;t=Yi;var r=32-Ti(i)-1;i&=~(1<<r),n+=1;var s=32-Ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-Ti(e)+r|n<<r|i,Yi=s+t}else ji=1<<s|n<<r|i,Yi=t}function Yd(t){t.return!==null&&(qr(t,1),Mg(t,1,0))}function qd(t){for(;t===Kl;)Kl=ks[--Hs],ks[Hs]=null,Zl=ks[--Hs],ks[Hs]=null;for(;t===ls;)ls=ei[--ti],ei[ti]=null,Yi=ei[--ti],ei[ti]=null,ji=ei[--ti],ei[ti]=null}var $n=null,qn=null,Ot=!1,Si=null;function Eg(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,qn=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:ji,overflow:Yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,qn=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(Ot){var e=qn;if(e){var n=e;if(!Ep(t,e)){if(Sf(t))throw Error(ue(418));e=Tr(n.nextSibling);var i=$n;e&&Ep(t,e)?Eg(i,n):(t.flags=t.flags&-4097|2,Ot=!1,$n=t)}}else{if(Sf(t))throw Error(ue(418));t.flags=t.flags&-4097|2,Ot=!1,$n=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Ha(t){if(t!==$n)return!1;if(!Ot)return wp(t),Ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=qn)){if(Sf(t))throw wg(),Error(ue(418));for(;e;)Eg(t,e),e=Tr(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=$n?Tr(t.stateNode.nextSibling):null;return!0}function wg(){for(var t=qn;t;)t=Tr(t.nextSibling)}function ro(){qn=$n=null,Ot=!1}function $d(t){Si===null?Si=[t]:Si.push(t)}var ix=sr.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function Tg(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=br(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,y){return _===null||_.tag!==6?(_=lu(v,f.mode,y),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,y){var D=v.type;return D===Is?u(f,_,v.props.children,y,v.key):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===pr&&Tp(D)===_.type)?(y=r(_,v.props),y.ref=bo(f,_,v),y.return=f,y):(y=Dl(v.type,v.key,v.props,null,f.mode,y),y.ref=bo(f,_,v),y.return=f,y)}function c(f,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=cu(v,f.mode,y),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,y,D){return _===null||_.tag!==7?(_=os(v,f.mode,y,D),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=lu(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return v=Dl(_.type,_.key,_.props,null,f.mode,v),v.ref=bo(f,null,_),v.return=f,v;case Us:return _=cu(_,f.mode,v),_.return=f,_;case pr:var y=_._init;return d(f,y(_._payload),v)}if(ko(_)||wo(_))return _=os(_,f.mode,v,null),_.return=f,_;Va(f,_)}return null}function h(f,_,v,y){var D=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:a(f,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return v.key===D?l(f,_,v,y):null;case Us:return v.key===D?c(f,_,v,y):null;case pr:return D=v._init,h(f,_,D(v._payload),y)}if(ko(v)||wo(v))return D!==null?null:u(f,_,v,y,null);Va(f,v)}return null}function p(f,_,v,y,D){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(_,f,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return f=f.get(y.key===null?v:y.key)||null,l(_,f,y,D);case Us:return f=f.get(y.key===null?v:y.key)||null,c(_,f,y,D);case pr:var A=y._init;return p(f,_,v,A(y._payload),D)}if(ko(y)||wo(y))return f=f.get(v)||null,u(_,f,y,D,null);Va(_,y)}return null}function g(f,_,v,y){for(var D=null,A=null,T=_,L=_=0,Y=null;T!==null&&L<v.length;L++){T.index>L?(Y=T,T=null):Y=T.sibling;var S=h(f,T,v[L],y);if(S===null){T===null&&(T=Y);break}t&&T&&S.alternate===null&&e(f,T),_=s(S,_,L),A===null?D=S:A.sibling=S,A=S,T=Y}if(L===v.length)return n(f,T),Ot&&qr(f,L),D;if(T===null){for(;L<v.length;L++)T=d(f,v[L],y),T!==null&&(_=s(T,_,L),A===null?D=T:A.sibling=T,A=T);return Ot&&qr(f,L),D}for(T=i(f,T);L<v.length;L++)Y=p(T,f,L,v[L],y),Y!==null&&(t&&Y.alternate!==null&&T.delete(Y.key===null?L:Y.key),_=s(Y,_,L),A===null?D=Y:A.sibling=Y,A=Y);return t&&T.forEach(function(w){return e(f,w)}),Ot&&qr(f,L),D}function x(f,_,v,y){var D=wo(v);if(typeof D!="function")throw Error(ue(150));if(v=D.call(v),v==null)throw Error(ue(151));for(var A=D=null,T=_,L=_=0,Y=null,S=v.next();T!==null&&!S.done;L++,S=v.next()){T.index>L?(Y=T,T=null):Y=T.sibling;var w=h(f,T,S.value,y);if(w===null){T===null&&(T=Y);break}t&&T&&w.alternate===null&&e(f,T),_=s(w,_,L),A===null?D=w:A.sibling=w,A=w,T=Y}if(S.done)return n(f,T),Ot&&qr(f,L),D;if(T===null){for(;!S.done;L++,S=v.next())S=d(f,S.value,y),S!==null&&(_=s(S,_,L),A===null?D=S:A.sibling=S,A=S);return Ot&&qr(f,L),D}for(T=i(f,T);!S.done;L++,S=v.next())S=p(T,f,L,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),_=s(S,_,L),A===null?D=S:A.sibling=S,A=S);return t&&T.forEach(function(X){return e(f,X)}),Ot&&qr(f,L),D}function m(f,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Is&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:e:{for(var D=v.key,A=_;A!==null;){if(A.key===D){if(D=v.type,D===Is){if(A.tag===7){n(f,A.sibling),_=r(A,v.props.children),_.return=f,f=_;break e}}else if(A.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===pr&&Tp(D)===A.type){n(f,A.sibling),_=r(A,v.props),_.ref=bo(f,A,v),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}v.type===Is?(_=os(v.props.children,f.mode,y,v.key),_.return=f,f=_):(y=Dl(v.type,v.key,v.props,null,f.mode,y),y.ref=bo(f,_,v),y.return=f,f=y)}return o(f);case Us:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=cu(v,f.mode,y),_.return=f,f=_}return o(f);case pr:return A=v._init,m(f,_,A(v._payload),y)}if(ko(v))return g(f,_,v,y);if(wo(v))return x(f,_,v,y);Va(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=lu(v,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return m}var so=Tg(!0),Ag=Tg(!1),Jl=Or(null),Ql=null,Vs=null,Kd=null;function Zd(){Kd=Vs=Ql=null}function Jd(t){var e=Jl.current;Lt(Jl),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Ql=t,Kd=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nn=!0),t.firstContext=null)}function ui(t){var e=t._currentValue;if(Kd!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Ql===null)throw Error(ue(308));Vs=t,Ql.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var ts=null;function Qd(t){ts===null?ts=[t]:ts.push(t)}function Cg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qd(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,Qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,i){var r=t.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=Ht({},d,h);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=d}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Aa={},Ni=Or(Aa),pa=Or(Aa),ma=Or(Aa);function ns(t){if(t===Aa)throw Error(ue(174));return t}function th(t,e){switch(Rt(ma,e),Rt(pa,t),Rt(Ni,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}Lt(Ni),Rt(Ni,e)}function oo(){Lt(Ni),Lt(pa),Lt(ma)}function bg(t){ns(ma.current);var e=ns(Ni.current),n=nf(e,t.type);e!==n&&(Rt(pa,t),Rt(Ni,n))}function nh(t){pa.current===t&&(Lt(Ni),Lt(pa))}var zt=Or(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nu=[];function ih(){for(var t=0;t<nu.length;t++)nu[t]._workInProgressVersionPrimary=null;nu.length=0}var Al=sr.ReactCurrentDispatcher,iu=sr.ReactCurrentBatchConfig,cs=0,kt=null,Jt=null,sn=null,nc=!1,Ko=!1,ga=0,rx=0;function vn(){throw Error(ue(321))}function rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ri(t[n],e[n]))return!1;return!0}function sh(t,e,n,i,r,s){if(cs=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?lx:cx,t=n(i,r),Ko){s=0;do{if(Ko=!1,ga=0,25<=s)throw Error(ue(301));s+=1,sn=Jt=null,e.updateQueue=null,Al.current=ux,t=n(i,r)}while(Ko)}if(Al.current=ic,e=Jt!==null&&Jt.next!==null,cs=0,sn=Jt=kt=null,nc=!1,e)throw Error(ue(300));return t}function oh(){var t=ga!==0;return ga=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?kt.memoizedState=sn=t:sn=sn.next=t,sn}function fi(){if(Jt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var e=sn===null?kt.memoizedState:sn.next;if(e!==null)sn=e,Jt=t;else{if(t===null)throw Error(ue(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?kt.memoizedState=sn=t:sn=sn.next=t}return sn}function va(t,e){return typeof e=="function"?e(t):e}function ru(t){var e=fi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((cs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=u,us|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ri(i,e.memoizedState)||(Nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,kt.lanes|=s,us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function su(t){var e=fi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ri(s,e.memoizedState)||(Nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Pg(){}function Dg(t,e){var n=kt,i=fi(),r=e(),s=!Ri(i.memoizedState,r);if(s&&(i.memoizedState=r,Nn=!0),i=i.queue,ah(Ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||sn!==null&&sn.memoizedState.tag&1){if(n.flags|=2048,_a(9,Ug.bind(null,n,i,r,e),void 0,null),an===null)throw Error(ue(349));cs&30||Lg(n,e,r)}return r}function Lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,Ng(e)&&Fg(t)}function Ig(t,e,n){return n(function(){Ng(e)&&Fg(t)})}function Ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ri(t,n)}catch{return!0}}function Fg(t){var e=er(t,1);e!==null&&Ai(e,t,1,-1)}function Rp(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=ax.bind(null,kt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Og(){return fi().memoizedState}function Cl(t,e,n,i){var r=Di();kt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function wc(t,e,n,i){var r=fi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&rh(i,o.deps)){r.memoizedState=_a(e,n,s,i);return}}kt.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function bp(t,e){return Cl(8390656,8,t,e)}function ah(t,e){return wc(2048,8,t,e)}function Bg(t,e){return wc(4,2,t,e)}function zg(t,e){return wc(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hg(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,kg.bind(null,e,t),n)}function lh(){}function Vg(t,e){var n=fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gg(t,e){var n=fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wg(t,e,n){return cs&21?(Ri(n,e)||(n=$0(),kt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=n)}function sx(t,e){var n=Ct;Ct=n!==0&&4>n?n:4,t(!0);var i=iu.transition;iu.transition={};try{t(!1),e()}finally{Ct=n,iu.transition=i}}function Xg(){return fi().memoizedState}function ox(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jg(t))Yg(e,n);else if(n=Cg(t,e,n,i),n!==null){var r=Pn();Ai(n,t,i,r),qg(n,e,i)}}function ax(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(t))Yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ri(a,o)){var l=e.interleaved;l===null?(r.next=r,Qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cg(t,e,r,i),n!==null&&(r=Pn(),Ai(n,t,i,r),qg(n,e,i))}}function jg(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function Yg(t,e){Ko=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}var ic={readContext:ui,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},lx={readContext:ui,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:ui,useEffect:bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ox.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:lh,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=sx.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Di();if(Ot){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),an===null)throw Error(ue(349));cs&30||Lg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bp(Ig.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Di(),e=an.identifierPrefix;if(Ot){var n=Yi,i=ji;n=(i&~(1<<32-Ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cx={readContext:ui,useCallback:Vg,useContext:ui,useEffect:ah,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:zg,useMemo:Gg,useReducer:ru,useRef:Og,useState:function(){return ru(va)},useDebugValue:lh,useDeferredValue:function(t){var e=fi();return Wg(e,Jt.memoizedState,t)},useTransition:function(){var t=ru(va)[0],e=fi().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1},ux={readContext:ui,useCallback:Vg,useContext:ui,useEffect:ah,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:zg,useMemo:Gg,useReducer:su,useRef:Og,useState:function(){return su(va)},useDebugValue:lh,useDeferredValue:function(t){var e=fi();return Jt===null?e.memoizedState=t:Wg(e,Jt.memoizedState,t)},useTransition:function(){var t=su(va)[0],e=fi().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1};function _i(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Rr(t),s=Ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(Ai(e,t,r,i),Tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Rr(t),s=Ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(Ai(e,t,r,i),Tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=Rr(t),r=Ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(t,r,i),e!==null&&(Ai(e,t,i,n),Tl(e,t,i))}};function Pp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function $g(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=ui(s):(r=On(e)?as:En.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ui(s):(s=On(e)?as:En.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tc.enqueueReplaceState(r,r.state,null),ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=B_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function Kg(t,e,n){n=Ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sc||(sc=!0,Ff=i),Af(t,e)},n}function Zg(t,e,n){n=Ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Tx.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ki(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var dx=sr.ReactCurrentOwner,Nn=!1;function Rn(t,e,n,i){e.child=t===null?Ag(e,null,n,i):so(e,t.child,n,i)}function Np(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=sh(t,e,n,i,s,r),n=oh(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Ot&&n&&Yd(e),e.flags|=1,Rn(t,e,i,r),e.child)}function Fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(Nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Nn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return Cf(t,e,n,i,r)}function Qg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ws,jn),jn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Rt(Ws,jn),jn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Rt(Ws,jn),jn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Rt(Ws,jn),jn|=i;return Rn(t,e,r,n),e.child}function ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,i,r){var s=On(n)?as:En.current;return s=io(e,s),Ks(e,r),n=sh(t,e,n,i,s,r),i=oh(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Ot&&i&&Yd(e),e.flags|=1,Rn(t,e,n,r),e.child)}function Op(t,e,n,i,r){if(On(n)){var s=!0;$l(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Rl(t,e),$g(e,n,i),Tf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ui(c):(c=On(n)?as:En.current,c=io(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dp(e,o,i,c),mr=!1;var h=e.memoizedState;o.state=h,ec(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Fn.current||mr?(typeof u=="function"&&(wf(e,n,u,i),l=e.memoizedState),(a=mr||Pp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_i(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ui(l):(l=On(n)?as:En.current,l=io(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dp(e,o,i,l),mr=!1,h=e.memoizedState,o.state=h,ec(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||Fn.current||mr?(typeof p=="function"&&(wf(e,n,p,i),g=e.memoizedState),(c=mr||Pp(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Rf(t,e,n,i,s,r)}function Rf(t,e,n,i,r,s){ev(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mp(e,n,!1),tr(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Rn(t,e,a,s),e.memoizedState=i.state,r&&Mp(e,n,!0),e.child}function tv(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),th(t,e.containerInfo)}function Bp(t,e,n,i,r){return ro(),$d(r),e.flags|=256,Rn(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function nv(t,e,n){var i=e.pendingProps,r=zt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Rt(zt,r&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=bf,t):ch(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ch(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&$d(i),so(e,t.child,null,n),t=ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ou(Error(ue(422))),Ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rc({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Pf(o),e.memoizedState=bf,s);if(!(e.mode&1))return Ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=ou(s,i,void 0),Ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,Nn||a){if(i=an,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),Ai(i,t,r,-1))}return mh(),i=ou(Error(ue(421))),Ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ax.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qn=Tr(r.nextSibling),$n=e,Ot=!0,Si=null,t!==null&&(ei[ti++]=ji,ei[ti++]=Yi,ei[ti++]=ls,ji=t.id,Yi=t.overflow,ls=e),e=ch(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Rn(t,e,i.children,n),i=zt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Rt(zt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}au(e,!0,n,null,s);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function px(t,e,n){switch(e.tag){case 3:tv(e),ro();break;case 5:bg(e);break;case 1:On(e.type)&&$l(e);break;case 4:th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(zt,zt.current&1),e.flags|=128,null):n&e.child.childLanes?nv(t,e,n):(Rt(zt,zt.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Rt(zt,zt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(zt,zt.current),i)break;return null;case 22:case 23:return e.lanes=0,Qg(t,e,n)}return tr(t,e,n)}var rv,Df,sv,ov;rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};sv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(Ni.current);var s=null;switch(n){case"input":r=Ju(t,r),i=Ju(t,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=tf(t,r),i=tf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}rf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function _n(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mx(t,e,n){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(e),null;case 1:return On(e.type)&&ql(),_n(e),null;case 3:return i=e.stateNode,oo(),Lt(Fn),Lt(En),ih(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Si!==null&&(zf(Si),Si=null))),Df(t,e),_n(e),null;case 5:nh(e);var r=ns(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)sv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return _n(e),null}if(t=ns(Ni.current),Ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ui]=e,i[ha]=s,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)Pt(Vo[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":qh(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":Kh(i,s),Pt("invalid",i)}rf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(n){case"input":La(i),$h(i,s,!0);break;case"textarea":La(i),Zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ui]=e,t[ha]=i,rv(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),r=i;break;case"iframe":case"object":case"embed":Pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)Pt(Vo[r],t);r=i;break;case"source":Pt("error",t),r=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),r=i;break;case"details":Pt("toggle",t),r=i;break;case"input":qh(t,i),r=Ju(t,i),Pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":Kh(t,i),r=tf(t,i),Pt("invalid",t);break;default:r=i}rf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?O0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&N0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ra(t,l):typeof l=="number"&&ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",t):l!=null&&Ud(t,s,l,o))}switch(n){case"input":La(t),$h(t,i,!1);break;case"textarea":La(t),Zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _n(e),null;case 6:if(t&&e.stateNode!=null)ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=ns(ma.current),ns(Ni.current),Ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ui]=e,(s=i.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ui]=e,e.stateNode=i}return _n(e),null;case 13:if(Lt(zt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&qn!==null&&e.mode&1&&!(e.flags&128))wg(),ro(),e.flags|=98560,s=!1;else if(s=Ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Ui]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_n(e),s=!1}else Si!==null&&(zf(Si),Si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||zt.current&1?Qt===0&&(Qt=3):mh())),e.updateQueue!==null&&(e.flags|=4),_n(e),null);case 4:return oo(),Df(t,e),t===null&&fa(e.stateNode.containerInfo),_n(e),null;case 10:return Jd(e.type._context),_n(e),null;case 17:return On(e.type)&&ql(),_n(e),null;case 19:if(Lt(zt),s=e.memoizedState,s===null)return _n(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Rt(zt,zt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Yt()>lo&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=tc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ot)return _n(e),null}else 2*Yt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,n=zt.current,Rt(zt,i?n&1|2:n&1),e):(_n(e),null);case 22:case 23:return ph(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?jn&1073741824&&(_n(e),e.subtreeFlags&6&&(e.flags|=8192)):_n(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function gx(t,e){switch(qd(e),e.tag){case 1:return On(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),Lt(Fn),Lt(En),ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nh(e),null;case 13:if(Lt(zt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lt(zt),null;case 4:return oo(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var Wa=!1,Mn=!1,vx=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Wt(t,e,i)}else n.current=null}function Lf(t,e,n){try{n()}catch(i){Wt(t,e,i)}}var kp=!1;function _x(t,e){if(mf=Wl,t=fg(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},Wl=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:_i(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){Wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return g=kp,kp=!1,g}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lf(e,n,s)}r=r.next}while(r!==i)}}function Ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function av(t){var e=t.alternate;e!==null&&(t.alternate=null,av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ui],delete e[ha],delete e[xf],delete e[ex],delete e[tx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lv(t){return t.tag===5||t.tag===3||t.tag===4}function Hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}var cn=null,xi=!1;function ar(t,e,n){for(n=n.child;n!==null;)cv(t,e,n),n=n.sibling}function cv(t,e,n){if(Ii&&typeof Ii.onCommitFiberUnmount=="function")try{Ii.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:Mn||Gs(n,e);case 6:var i=cn,r=xi;cn=null,ar(t,e,n),cn=i,xi=r,cn!==null&&(xi?(t=cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):cn.removeChild(n.stateNode));break;case 18:cn!==null&&(xi?(t=cn,n=n.stateNode,t.nodeType===8?eu(t.parentNode,n):t.nodeType===1&&eu(t,n),la(t)):eu(cn,n.stateNode));break;case 4:i=cn,r=xi,cn=n.stateNode.containerInfo,xi=!0,ar(t,e,n),cn=i,xi=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lf(n,e,o),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!Mn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Wt(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,ar(t,e,n),Mn=i):ar(t,e,n);break;default:ar(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vx),e.forEach(function(i){var r=Cx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:cn=a.stateNode,xi=!1;break e;case 3:cn=a.stateNode.containerInfo,xi=!0;break e;case 4:cn=a.stateNode.containerInfo,xi=!0;break e}a=a.return}if(cn===null)throw Error(ue(160));cv(s,o,r),cn=null,xi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uv(e,t),e=e.sibling}function uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),Pi(t),i&4){try{Zo(3,t,t.return),Ac(3,t)}catch(x){Wt(t,t.return,x)}try{Zo(5,t,t.return)}catch(x){Wt(t,t.return,x)}}break;case 1:pi(e,t),Pi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(pi(e,t),Pi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ra(r,"")}catch(x){Wt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L0(r,s),sf(a,o);var c=sf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?O0(r,d):u==="dangerouslySetInnerHTML"?N0(r,d):u==="children"?ra(r,d):Ud(r,u,d,c)}switch(a){case"input":Qu(r,s);break;case"textarea":U0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[ha]=s}catch(x){Wt(t,t.return,x)}}break;case 6:if(pi(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Wt(t,t.return,x)}}break;case 3:if(pi(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(x){Wt(t,t.return,x)}break;case 4:pi(e,t),Pi(t);break;case 13:pi(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dh=Yt())),i&4&&Vp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(c=Mn)||u,pi(e,t),Mn=c):pi(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ue=t,u=t.child;u!==null;){for(d=Ue=u;Ue!==null;){switch(h=Ue,p=h.child,h.tag){case 0:case 11:case 14:case 15:Zo(4,h,h.return);break;case 1:Gs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Wt(i,n,x)}}break;case 5:Gs(h,h.return);break;case 22:if(h.memoizedState!==null){Wp(d);continue}}p!==null?(p.return=h,Ue=p):Wp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=F0("display",o))}catch(x){Wt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Wt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pi(e,t),Pi(t),i&4&&Vp(t);break;case 21:break;default:pi(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lv(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ra(r,""),i.flags&=-33);var s=Hp(t);Nf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hp(t);If(t,a,o);break;default:throw Error(ue(161))}}catch(l){Wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){Ue=t,fv(t)}function fv(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Mn;a=Wa;var c=Mn;if(Wa=o,(Mn=l)&&!c)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?Xp(r):l!==null?(l.return=o,Ue=l):Xp(r);for(;s!==null;)Ue=s,fv(s),s=s.sibling;Ue=r,Wa=a,Mn=c}Gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Gp(t)}}function Gp(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_i(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&la(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Mn||e.flags&512&&Uf(e)}catch(h){Wt(e,e.return,h)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Wp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Xp(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ac(4,e)}catch(l){Wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Wt(e,r,l)}}var s=e.return;try{Uf(e)}catch(l){Wt(e,s,l)}break;case 5:var o=e.return;try{Uf(e)}catch(l){Wt(e,o,l)}}}catch(l){Wt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var yx=Math.ceil,rc=sr.ReactCurrentDispatcher,uh=sr.ReactCurrentOwner,ci=sr.ReactCurrentBatchConfig,xt=0,an=null,Kt=null,dn=0,jn=0,Ws=Or(0),Qt=0,xa=null,us=0,Cc=0,fh=0,Jo=null,In=null,dh=0,lo=1/0,Wi=null,sc=!1,Ff=null,Cr=null,Xa=!1,Sr=null,oc=0,Qo=0,Of=null,bl=-1,Pl=0;function Pn(){return xt&6?Yt():bl!==-1?bl:bl=Yt()}function Rr(t){return t.mode&1?xt&2&&dn!==0?dn&-dn:ix.transition!==null?(Pl===0&&(Pl=$0()),Pl):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function Ai(t,e,n,i){if(50<Qo)throw Qo=0,Of=null,Error(ue(185));Ea(t,n,i),(!(xt&2)||t!==an)&&(t===an&&(!(xt&2)&&(Cc|=n),Qt===4&&_r(t,dn)),Bn(t,i),n===1&&xt===0&&!(e.mode&1)&&(lo=Yt()+500,Ec&&Br()))}function Bn(t,e){var n=t.callbackNode;i1(t,e);var i=Gl(t,t===an?dn:0);if(i===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?nx(jp.bind(null,t)):Sg(jp.bind(null,t)),J1(function(){!(xt&6)&&Br()}),n=null;else{switch(K0(i)){case 1:n=Bd;break;case 4:n=Y0;break;case 16:n=Vl;break;case 536870912:n=q0;break;default:n=Vl}n=xv(n,dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dv(t,e){if(bl=-1,Pl=0,xt&6)throw Error(ue(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=Gl(t,t===an?dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ac(t,i);else{e=i;var r=xt;xt|=2;var s=pv();(an!==t||dn!==e)&&(Wi=null,lo=Yt()+500,ss(t,e));do try{Ex();break}catch(a){hv(t,a)}while(!0);Zd(),rc.current=s,xt=r,Kt!==null?e=0:(an=null,dn=0,e=Qt)}if(e!==0){if(e===2&&(r=uf(t),r!==0&&(i=r,e=Bf(t,r))),e===1)throw n=xa,ss(t,0),_r(t,i),Bn(t,Yt()),n;if(e===6)_r(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sx(r)&&(e=ac(t,i),e===2&&(s=uf(t),s!==0&&(i=s,e=Bf(t,s))),e===1))throw n=xa,ss(t,0),_r(t,i),Bn(t,Yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:$r(t,In,Wi);break;case 3:if(_r(t,i),(i&130023424)===i&&(e=dh+500-Yt(),10<e)){if(Gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_f($r.bind(null,t,In,Wi),e);break}$r(t,In,Wi);break;case 4:if(_r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=_f($r.bind(null,t,In,Wi),i);break}$r(t,In,Wi);break;case 5:$r(t,In,Wi);break;default:throw Error(ue(329))}}}return Bn(t,Yt()),t.callbackNode===n?dv.bind(null,t):null}function Bf(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=ac(t,e),t!==2&&(e=In,In=n,e!==null&&zf(e)),t}function zf(t){In===null?In=t:In.push.apply(In,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~fh,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ti(e),i=1<<n;t[n]=-1,e&=~i}}function jp(t){if(xt&6)throw Error(ue(327));Zs();var e=Gl(t,0);if(!(e&1))return Bn(t,Yt()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var i=uf(t);i!==0&&(e=i,n=Bf(t,i))}if(n===1)throw n=xa,ss(t,0),_r(t,e),Bn(t,Yt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,In,Wi),Bn(t,Yt()),null}function hh(t,e){var n=xt;xt|=1;try{return t(e)}finally{xt=n,xt===0&&(lo=Yt()+500,Ec&&Br())}}function fs(t){Sr!==null&&Sr.tag===0&&!(xt&6)&&Zs();var e=xt;xt|=1;var n=ci.transition,i=Ct;try{if(ci.transition=null,Ct=1,t)return t()}finally{Ct=i,ci.transition=n,xt=e,!(xt&6)&&Br()}}function ph(){jn=Ws.current,Lt(Ws)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z1(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:oo(),Lt(Fn),Lt(En),ih();break;case 5:nh(i);break;case 4:oo();break;case 13:Lt(zt);break;case 19:Lt(zt);break;case 10:Jd(i.type._context);break;case 22:case 23:ph()}n=n.return}if(an=t,Kt=t=br(t.current,null),dn=jn=e,Qt=0,xa=null,fh=Cc=us=0,In=Jo=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function hv(t,e){do{var n=Kt;try{if(Zd(),Al.current=ic,nc){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(cs=0,sn=Jt=kt=null,Ko=!1,ga=0,uh.current=null,n===null||n.return===null){Qt=1,xa=e,Kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Up(o);if(p!==null){p.flags&=-257,Ip(p,o,a,s,e),p.mode&1&&Lp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Lp(s,c,e),mh();break e}l=Error(ue(426))}}else if(Ot&&a.mode&1){var m=Up(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ip(m,o,a,s,e),$d(ao(l,a));break e}}s=l=ao(l,a),Qt!==4&&(Qt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Kg(s,l,e);Ap(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Zg(s,a,e);Ap(s,y);break e}}s=s.return}while(s!==null)}gv(n)}catch(D){e=D,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(!0)}function pv(){var t=rc.current;return rc.current=ic,t===null?ic:t}function mh(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),an===null||!(us&268435455)&&!(Cc&268435455)||_r(an,dn)}function ac(t,e){var n=xt;xt|=2;var i=pv();(an!==t||dn!==e)&&(Wi=null,ss(t,e));do try{Mx();break}catch(r){hv(t,r)}while(!0);if(Zd(),xt=n,rc.current=i,Kt!==null)throw Error(ue(261));return an=null,dn=0,Qt}function Mx(){for(;Kt!==null;)mv(Kt)}function Ex(){for(;Kt!==null&&!q_();)mv(Kt)}function mv(t){var e=_v(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?gv(t):Kt=e,uh.current=null}function gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gx(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Kt=null;return}}else if(n=mx(n,e,jn),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Qt===0&&(Qt=5)}function $r(t,e,n){var i=Ct,r=ci.transition;try{ci.transition=null,Ct=1,wx(t,e,n,i)}finally{ci.transition=r,Ct=i}return null}function wx(t,e,n,i){do Zs();while(Sr!==null);if(xt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r1(t,s),t===an&&(Kt=an=null,dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,xv(Vl,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ci.transition,ci.transition=null;var o=Ct;Ct=1;var a=xt;xt|=4,uh.current=null,_x(t,n),uv(n,t),W1(gf),Wl=!!mf,gf=mf=null,t.current=n,xx(n),$_(),xt=a,Ct=o,ci.transition=s}else t.current=n;if(Xa&&(Xa=!1,Sr=t,oc=r),s=t.pendingLanes,s===0&&(Cr=null),J_(n.stateNode),Bn(t,Yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,t=Ff,Ff=null,t;return oc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Of?Qo++:(Qo=0,Of=t):Qo=0,Br(),null}function Zs(){if(Sr!==null){var t=K0(oc),e=ci.transition,n=Ct;try{if(ci.transition=null,Ct=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,oc=0,xt&6)throw Error(ue(331));var r=xt;for(xt|=4,Ue=t.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var u=Ue;switch(u.tag){case 0:case 11:case 15:Zo(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ue=d;else for(;Ue!==null;){u=Ue;var h=u.sibling,p=u.return;if(av(u),u===c){Ue=null;break}if(h!==null){h.return=p,Ue=h;break}Ue=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ue=f;break e}Ue=s.return}}var _=t.current;for(Ue=_;Ue!==null;){o=Ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ue=v;else e:for(o=_;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ac(9,a)}}catch(D){Wt(a,a.return,D)}if(a===o){Ue=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ue=y;break e}Ue=a.return}}if(xt=r,Br(),Ii&&typeof Ii.onPostCommitFiberRoot=="function")try{Ii.onPostCommitFiberRoot(_c,t)}catch{}i=!0}return i}finally{Ct=n,ci.transition=e}}return!1}function Yp(t,e,n){e=ao(n,e),e=Kg(t,e,1),t=Ar(t,e,1),e=Pn(),t!==null&&(Ea(t,1,e),Bn(t,e))}function Wt(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=ao(n,t),t=Zg(e,t,1),e=Ar(e,t,1),t=Pn(),e!==null&&(Ea(e,1,t),Bn(e,t));break}}e=e.return}}function Tx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pn(),t.pingedLanes|=t.suspendedLanes&n,an===t&&(dn&n)===n&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>Yt()-dh?ss(t,0):fh|=n),Bn(t,e)}function vv(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=Pn();t=er(t,e),t!==null&&(Ea(t,e,n),Bn(t,n))}function Ax(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vv(t,n)}function Cx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),vv(t,n)}var _v;_v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)Nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nn=!1,px(t,e,n);Nn=!!(t.flags&131072)}else Nn=!1,Ot&&e.flags&1048576&&Mg(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=io(e,En.current);Ks(e,n),r=sh(null,e,i,t,r,n);var s=oh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,eh(e),r.updater=Tc,e.stateNode=r,r._reactInternals=e,Tf(e,i,t,n),e=Rf(null,e,i,!0,s,n)):(e.tag=0,Ot&&s&&Yd(e),Rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bx(i),t=_i(i,t),r){case 0:e=Cf(null,e,i,t,n);break e;case 1:e=Op(null,e,i,t,n);break e;case 11:e=Np(null,e,i,t,n);break e;case 14:e=Fp(null,e,i,_i(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Op(t,e,i,r,n);case 3:e:{if(tv(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rg(t,e),ec(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ue(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ue(424)),e),e=Bp(t,e,i,n,r);break e}else for(qn=Tr(e.stateNode.containerInfo.firstChild),$n=e,Ot=!0,Si=null,n=Ag(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=tr(t,e,n);break e}Rn(t,e,i,n)}e=e.child}return e;case 5:return bg(e),t===null&&Mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vf(i,r)?o=null:s!==null&&vf(i,s)&&(e.flags|=32),ev(t,e),Rn(t,e,o,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return nv(t,e,n);case 4:return th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):Rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Np(t,e,i,r,n);case 7:return Rn(t,e,e.pendingProps,n),e.child;case 8:return Rn(t,e,e.pendingProps.children,n),e.child;case 12:return Rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(Jl,i._currentValue),i._currentValue=o,s!==null)if(Ri(s.value,o)){if(s.children===r.children&&!Fn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=ui(r),i=i(r),e.flags|=1,Rn(t,e,i,n),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),Fp(t,e,i,r,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Rl(t,e),e.tag=1,On(i)?(t=!0,$l(e)):t=!1,Ks(e,n),$g(e,i,r),Tf(e,i,r,n),Rf(null,e,i,!0,t,n);case 19:return iv(t,e,n);case 22:return Qg(t,e,n)}throw Error(ue(156,e.tag))};function xv(t,e){return j0(t,e)}function Rx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new Rx(t,e,n,i)}function gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bx(t){if(typeof t=="function")return gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Fd)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return os(n.children,r,s,e);case Id:o=8,r|=8;break;case qu:return t=si(12,n,e,r|2),t.elementType=qu,t.lanes=s,t;case $u:return t=si(13,n,e,r),t.elementType=$u,t.lanes=s,t;case Ku:return t=si(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case b0:return Rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C0:o=10;break e;case R0:o=9;break e;case Nd:o=11;break e;case Fd:o=14;break e;case pr:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function Rc(t,e,n,i){return t=si(22,t,i,e),t.elementType=b0,t.lanes=n,t.stateNode={isHidden:!1},t}function lu(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function cu(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Px(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vh(t,e,n,i,r,s,o,a,l){return t=new Px(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(s),t}function Dx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return Ir;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(On(n))return yg(t,n,e)}return e}function Sv(t,e,n,i,r,s,o,a,l){return t=vh(n,i,!0,t,r,s,o,a,l),t.context=yv(null),n=t.current,i=Pn(),r=Rr(n),s=Ki(i,r),s.callback=e??null,Ar(n,s,r),t.current.lanes=r,Ea(t,r,i),Bn(t,i),t}function bc(t,e,n,i){var r=e.current,s=Pn(),o=Rr(r);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ar(r,e,o),t!==null&&(Ai(t,r,o,s),Tl(t,r,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function Lx(){return null}var Mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xh(t){this._internalRoot=t}Pc.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));bc(t,e,null,null)};Pc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){bc(null,t,null,null)}),e[Qi]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&tg(t)}};function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Ux(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=Sv(e,i,t,0,null,!1,!1,"",$p);return t._reactRootContainer=o,t[Qi]=o.current,fa(t.nodeType===8?t.parentNode:t),fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=vh(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=l,t[Qi]=l.current,fa(t.nodeType===8?t.parentNode:t),fs(function(){bc(e,l,n,i)}),l}function Lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}bc(e,o,t,r)}else o=Ux(n,e,t,r,i);return lc(o)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(zd(e,n|1),Bn(e,Yt()),!(xt&6)&&(lo=Yt()+500,Br()))}break;case 13:fs(function(){var i=er(t,1);if(i!==null){var r=Pn();Ai(i,t,1,r)}}),_h(t,1)}};kd=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Pn();Ai(e,t,134217728,n)}_h(t,134217728)}};J0=function(t){if(t.tag===13){var e=Rr(t),n=er(t,e);if(n!==null){var i=Pn();Ai(n,t,e,i)}_h(t,e)}};Q0=function(){return Ct};eg=function(t,e){var n=Ct;try{return Ct=t,e()}finally{Ct=n}};af=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Mc(i);if(!r)throw Error(ue(90));D0(i),Qu(i,r)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};k0=hh;H0=fs;var Ix={usingClientEntryPoint:!1,Events:[Ta,Bs,Mc,B0,z0,hh]},Do={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nx={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W0(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{_c=ja.inject(Nx),Ii=ja}catch{}}Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;Zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(ue(200));return Dx(t,e,null,n)};Zn.createRoot=function(t,e){if(!yh(t))throw Error(ue(299));var n=!1,i="",r=Mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vh(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,fa(t.nodeType===8?t.parentNode:t),new xh(e)};Zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=W0(e),t=t===null?null:t.stateNode,t};Zn.flushSync=function(t){return fs(t)};Zn.hydrate=function(t,e,n){if(!Dc(e))throw Error(ue(200));return Lc(null,t,e,!0,n)};Zn.hydrateRoot=function(t,e,n){if(!yh(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Mv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sv(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pc(e)};Zn.render=function(t,e,n){if(!Dc(e))throw Error(ue(200));return Lc(null,t,e,!1,n)};Zn.unmountComponentAtNode=function(t){if(!Dc(t))throw Error(ue(40));return t._reactRootContainer?(fs(function(){Lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Zn.unstable_batchedUpdates=hh;Zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Dc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Lc(t,e,n,!1,i)};Zn.version="18.3.1-next-f1338f8080-20240426";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(t){console.error(t)}}Ev(),E0.exports=Zn;var Fx=E0.exports,Kp=Fx;ju.createRoot=Kp.createRoot,ju.hydrateRoot=Kp.hydrateRoot;const Zp=t=>{let e;const n=new Set,i=(c,u)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const h=e;e=u??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(p=>p(e,h))}},r=()=>e,a={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,a);return a},Ox=t=>t?Zp(t):Zp,Bx=t=>t;function zx(t,e=Bx){const n=Bo.useSyncExternalStore(t.subscribe,Bo.useCallback(()=>e(t.getState()),[t,e]),Bo.useCallback(()=>e(t.getInitialState()),[t,e]));return Bo.useDebugValue(n),n}const Jp=t=>{const e=Ox(t),n=i=>zx(e,i);return Object.assign(n,e),n},kx=t=>t?Jp(t):Jp;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="169",Hx=0,Qp=1,Vx=2,wv=1,Gx=2,Gi=3,Nr=0,zn=1,Mi=2,Pr=0,Js=1,em=2,tm=3,nm=4,Wx=5,Zr=100,Xx=101,jx=102,Yx=103,qx=104,$x=200,Kx=201,Zx=202,Jx=203,kf=204,Hf=205,Qx=206,ey=207,ty=208,ny=209,iy=210,ry=211,sy=212,oy=213,ay=214,Vf=0,Gf=1,Wf=2,co=3,Xf=4,jf=5,Yf=6,qf=7,Mh=0,ly=1,cy=2,Dr=0,uy=1,fy=2,dy=3,hy=4,py=5,my=6,gy=7,Tv=300,uo=301,fo=302,$f=303,Kf=304,Uc=306,Zf=1e3,is=1001,Jf=1002,oi=1003,vy=1004,Ya=1005,Ei=1006,uu=1007,rs=1008,nr=1009,Av=1010,Cv=1011,ya=1012,Eh=1013,ds=1014,qi=1015,Ca=1016,wh=1017,Th=1018,ho=1020,Rv=35902,bv=1021,Pv=1022,wi=1023,Dv=1024,Lv=1025,Qs=1026,po=1027,Uv=1028,Ah=1029,Iv=1030,Ch=1031,Rh=1033,Ll=33776,Ul=33777,Il=33778,Nl=33779,Qf=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,od=37808,ad=37809,ld=37810,cd=37811,ud=37812,fd=37813,dd=37814,hd=37815,pd=37816,md=37817,gd=37818,vd=37819,_d=37820,xd=37821,Fl=36492,yd=36494,Sd=36495,Nv=36283,Md=36284,Ed=36285,wd=36286,_y=3200,xy=3201,Fv=0,yy=1,xr="",yi="srgb",zr="srgb-linear",bh="display-p3",Ic="display-p3-linear",cc="linear",Dt="srgb",uc="rec709",fc="p3",_s=7680,im=519,Sy=512,My=513,Ey=514,Ov=515,wy=516,Ty=517,Ay=518,Cy=519,rm=35044,sm="300 es",$i=2e3,dc=2001;class xo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let om=1234567;const eo=Math.PI/180,Sa=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function fn(t,e,n){return Math.max(e,Math.min(n,t))}function Ph(t,e){return(t%e+e)%e}function Ry(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function by(t,e,n){return t!==e?(n-t)/(e-t):0}function ea(t,e,n){return(1-n)*t+n*e}function Py(t,e,n,i){return ea(t,e,1-Math.exp(-n*i))}function Dy(t,e=1){return e-Math.abs(Ph(t,e*2)-e)}function Ly(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Uy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Iy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ny(t,e){return t+Math.random()*(e-t)}function Fy(t){return t*(.5-Math.random())}function Oy(t){t!==void 0&&(om=t);let e=om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function By(t){return t*eo}function zy(t){return t*Sa}function ky(t){return(t&t-1)===0&&t!==0}function Hy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gy(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function An(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const am={DEG2RAD:eo,RAD2DEG:Sa,generateUUID:yo,clamp:fn,euclideanModulo:Ph,mapLinear:Ry,inverseLerp:by,lerp:ea,damp:Py,pingpong:Dy,smoothstep:Ly,smootherstep:Uy,randInt:Iy,randFloat:Ny,randFloatSpread:Fy,seededRandom:Oy,degToRad:By,radToDeg:zy,isPowerOfTwo:ky,ceilPowerOfTwo:Hy,floorPowerOfTwo:Vy,setQuaternionFromProperEuler:Gy,normalize:An,denormalize:Ls};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,i,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],v=r[4],y=r[7],D=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*D,s[3]=o*m+a*v+l*A,s[6]=o*f+a*y+l*T,s[1]=c*x+u*_+d*D,s[4]=c*m+u*v+d*A,s[7]=c*f+u*y+d*T,s[2]=h*x+p*_+g*D,s[5]=h*m+p*v+g*A,s[8]=h*f+p*y+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fu.makeScale(e,n)),this}rotate(e){return this.premultiply(fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fu=new at;function Bv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wy(){const t=hc("canvas");return t.style.display="block",t}const lm={};function Ol(t){t in lm||(lm[t]=!0,console.warn(t))}function Xy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function jy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cm=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),um=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[zr]:{transfer:cc,primaries:uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[yi]:{transfer:Dt,primaries:uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ic]:{transfer:cc,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(um),fromReference:t=>t.applyMatrix3(cm)},[bh]:{transfer:Dt,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(um),fromReference:t=>t.applyMatrix3(cm).convertLinearToSRGB()}},qy=new Set([zr,Ic]),wt={enabled:!0,_workingColorSpace:zr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Lo[e].toReference,r=Lo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Lo[t].primaries},getTransfer:function(t){return t===xr?cc:Lo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Lo[e].luminanceCoefficients)}};function to(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class $y{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=hc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(to(n[i]/255)*255):n[i]=to(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ky=0;class zv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hu(r[o].image)):s.push(hu(r[o]))}else s=hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$y.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zy=0;class kn extends xo{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,i=is,r=is,s=Ei,o=rs,a=wi,l=nr,c=kn.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=yo(),this.name="",this.source=new zv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Tv;kn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,D=(f+1)/2,A=(u+h)/4,T=(d+x)/4,L=(g+m)/4;return v>y&&v>D?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=L/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=T/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jy extends xo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends Jy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kv extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qy extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),A=Math.atan2(D,f*_);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*h,e[n+1]=l*g+u*h+c*d-a*p,e[n+2]=c*g+u*p+a*h-l*d,e[n+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new I,fm=new Ra;class ps{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),$a.subVectors(this.max,Uo),ys.subVectors(e.a,Uo),Ss.subVectors(e.b,Uo),Ms.subVectors(e.c,Uo),lr.subVectors(Ss,ys),cr.subVectors(Ms,Ss),Vr.subVectors(ys,Ms);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Vr.z,Vr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Vr.z,0,-Vr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Vr.y,Vr.x,0];return!mu(n,ys,Ss,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,ys,Ss,Ms,$a))?!1:(Ka.crossVectors(lr,cr),n=[Ka.x,Ka.y,Ka.z],mu(n,ys,Ss,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,qa=new ps,ys=new I,Ss=new I,Ms=new I,lr=new I,cr=new I,Vr=new I,Uo=new I,$a=new I,Ka=new I,Gr=new I;function mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Gr.fromArray(t,s);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),u=i.dot(Gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eS=new ps,Io=new I,gu=new I;class ba{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(gu)),this.expandByPoint(Io.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new I,vu=new I,Za=new I,ur=new I,_u=new I,Ja=new I,xu=new I;class Dh{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Za),a=ur.dot(this.direction),l=-ur.dot(Za),c=ur.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vu).addScaledVector(Za,h),p}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),Ja.subVectors(i,e),xu.crossVectors(_u,Ja);let o=this.direction.dot(xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(ur,Ja));if(l<0)return null;const c=a*this.direction.dot(_u.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(xu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),fr.crossVectors(i,Wn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),fr.crossVectors(i,Wn)),fr.normalize(),Qa.crossVectors(Wn,fr),r[0]=fr.x,r[4]=Qa.x,r[8]=Wn.x,r[1]=fr.y,r[5]=Qa.y,r[9]=Wn.y,r[2]=fr.z,r[6]=Qa.z,r[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],D=i[15],A=r[0],T=r[4],L=r[8],Y=r[12],S=r[1],w=r[5],X=r[9],W=r[13],K=r[2],te=r[6],j=r[10],oe=r[14],O=r[3],ee=r[7],ne=r[11],xe=r[15];return s[0]=o*A+a*S+l*K+c*O,s[4]=o*T+a*w+l*te+c*ee,s[8]=o*L+a*X+l*j+c*ne,s[12]=o*Y+a*W+l*oe+c*xe,s[1]=u*A+d*S+h*K+p*O,s[5]=u*T+d*w+h*te+p*ee,s[9]=u*L+d*X+h*j+p*ne,s[13]=u*Y+d*W+h*oe+p*xe,s[2]=g*A+x*S+m*K+f*O,s[6]=g*T+x*w+m*te+f*ee,s[10]=g*L+x*X+m*j+f*ne,s[14]=g*Y+x*W+m*oe+f*xe,s[3]=_*A+v*S+y*K+D*O,s[7]=_*T+v*w+y*te+D*ee,s[11]=_*L+v*X+y*j+D*ne,s[15]=_*Y+v*W+y*oe+D*xe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,y=u*x*c-g*d*c+g*a*p-o*x*p-u*a*f+o*d*f,D=g*d*l-u*x*l-g*a*h+o*x*h+u*a*m-o*d*m,A=n*_+i*v+r*y+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*f+n*h*f)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*f-n*d*f)*T,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=D*T,e[13]=(u*x*r-g*d*r+g*i*h-n*x*h-u*i*m+n*d*m)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,x=o*u,m=o*d,f=a*d,_=l*c,v=l*u,y=l*d,D=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*D,r[1]=(p+y)*D,r[2]=(g-v)*D,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+v)*T,r[9]=(m-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),a=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const c=1/s,u=1/o,d=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,n.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=$i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===$i)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===dc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=$i){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,x;if(a===$i)g=(o+s)*d,x=-2*d;else if(a===dc)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new I,gi=new Ut,tS=new I(0,0,0),nS=new I(1,1,1),fr=new I,Qa=new I,Wn=new I,dm=new Ut,hm=new Ra;class Fi{constructor(e=0,n=0,i=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const pm=new I,ws=new Ra,ki=new Ut,el=new I,No=new I,rS=new I,sS=new Ra,mm=new I(1,0,0),gm=new I(0,1,0),vm=new I(0,0,1),_m={type:"added"},oS={type:"removed"},Ts={type:"childadded",child:null},yu={type:"childremoved",child:null};class ln extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new I,n=new Fi,i=new Ra,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new at}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(No,el,this.up):ki.lookAt(el,No,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(ki),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oS),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new I(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new I,Hi=new I,Su=new I,Vi=new I,As=new I,Cs=new I,xm=new I,Mu=new I,Eu=new I,wu=new I,Tu=new Xt,Au=new Xt,Cu=new Xt;class ii{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vi.subVectors(e,n),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vi.subVectors(r,n),Hi.subVectors(i,n),Su.subVectors(e,n);const o=vi.dot(vi),a=vi.dot(Hi),l=vi.dot(Su),c=Hi.dot(Hi),u=Hi.dot(Su),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tu.setScalar(0),Au.setScalar(0),Cu.setScalar(0),Tu.fromBufferAttribute(e,n),Au.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tu,s.x),o.addScaledVector(Au,s.y),o.addScaledVector(Cu,s.z),o}static isFrontFacing(e,n,i,r){return vi.subVectors(i,n),Hi.subVectors(e,n),vi.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),vi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Cs.subVectors(s,i),Mu.subVectors(e,i);const l=As.dot(Mu),c=Cs.dot(Mu);if(l<=0&&c<=0)return n.copy(i);Eu.subVectors(e,r);const u=As.dot(Eu),d=Cs.dot(Eu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);wu.subVectors(e,s);const p=As.dot(wu),g=Cs.dot(wu);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Cs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return xm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(xm,a);const f=1/(m+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=wt.workingColorSpace){return this.r=e,this.g=n,this.b=i,wt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=wt.workingColorSpace){if(e=Ph(e,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,n=yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yi){const i=Hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=du(e.r),this.g=du(e.g),this.b=du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return wt.fromWorkingColorSpace(yn.copy(this),e),Math.round(fn(yn.r*255,0,255))*65536+Math.round(fn(yn.g*255,0,255))*256+Math.round(fn(yn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(yn.copy(this),n);const i=yn.r,r=yn.g,s=yn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=yi){wt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,i=yn.g,r=yn.b;return e!==yi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(tl);const i=ea(dr.h,tl.h,n),r=ea(dr.s,tl.s,n),s=ea(dr.l,tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ze;Ze.NAMES=Hv;let aS=0;class So extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=Js,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Hf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nc extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new I,nl=new $e;class Ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rm,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}}class Vv extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gv extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lS=0;const Qn=new Ut,bu=new ln,Rs=new I,Xn=new ps,Fo=new ps,rn=new I;class hi extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?Gv:Vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,i){return Qn.makeTranslation(e,n,i),this.applyMatrix4(Qn),this}scale(e,n,i){return Qn.makeScale(e,n,i),this.applyMatrix4(Qn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Xn.min,Fo.min),Xn.expandByPoint(rn),rn.addVectors(Xn.max,Fo.max),Xn.expandByPoint(rn)):(Xn.expandByPoint(Fo.min),Xn.expandByPoint(Fo.max))}Xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),rn.add(Rs)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;const c=new I,u=new I,d=new I,h=new $e,p=new $e,g=new $e,x=new I,m=new I;function f(L,Y,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,Y),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[L].add(x),a[Y].add(x),a[S].add(x),l[L].add(m),l[Y].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,Y=_.length;L<Y;++L){const S=_[L],w=S.start,X=S.count;for(let W=w,K=w+X;W<K;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new I,y=new I,D=new I,A=new I;function T(L){D.fromBufferAttribute(r,L),A.copy(D);const Y=a[L];v.copy(Y),v.sub(D.multiplyScalar(D.dot(Y))).normalize(),y.crossVectors(A,Y);const w=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,Y=_.length;L<Y;++L){const S=_[L],w=S.start,X=S.count;for(let W=w,K=w+X;W<K;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Ci(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ym=new Ut,Wr=new Dh,il=new ba,Sm=new I,rl=new I,sl=new I,ol=new I,Pu=new I,al=new I,Mm=new I,ll=new I;class Mt extends ln{constructor(e=new hi,n=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Pu.fromBufferAttribute(d,e),o?al.addScaledVector(Pu,u):al.addScaledVector(Pu.sub(n),u))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(il.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(il,Sm)===null||Wr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(ym),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,D=v;y<D;y+=3){const A=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);r=cl(this,f,e,i,c,u,d,A,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=cl(this,o,e,i,c,u,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,D=v;y<D;y+=3){const A=y,T=y+1,L=y+2;r=cl(this,f,e,i,c,u,d,A,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=m,v=m+1,y=m+2;r=cl(this,o,e,i,c,u,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function cS(t,e,n,i,r,s,o,a){let l;if(e.side===zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Nr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ll);return c<n.near||c>n.far?null:{distance:c,point:ll.clone(),object:t}}function cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rl),t.getVertexPosition(l,sl),t.getVertexPosition(c,ol);const u=cS(t,e,n,i,rl,sl,ol,Mm);if(u){const d=new I;ii.getBarycoord(Mm,rl,sl,ol,d),r&&(u.uv=ii.getInterpolatedAttribute(r,a,l,c,d,new $e)),s&&(u.uv1=ii.getInterpolatedAttribute(s,a,l,c,d,new $e)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};ii.getNormal(rl,sl,ol,h.normal),u.face=h,u.barycoord=d}return u}class bi extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function g(x,m,f,_,v,y,D,A,T,L,Y){const S=y/T,w=D/L,X=y/2,W=D/2,K=A/2,te=T+1,j=L+1;let oe=0,O=0;const ee=new I;for(let ne=0;ne<j;ne++){const xe=ne*w-W;for(let He=0;He<te;He++){const ut=He*S-X;ee[x]=ut*_,ee[m]=xe*v,ee[f]=K,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(He/T),d.push(1-ne/L),oe+=1}}for(let ne=0;ne<L;ne++)for(let xe=0;xe<T;xe++){const He=h+xe+te*ne,ut=h+xe+te*(ne+1),$=h+(xe+1)+te*(ne+1),ce=h+(xe+1)+te*ne;l.push(He,ut,ce),l.push(ut,$,ce),O+=6}a.addGroup(p,O,Y),p+=O,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Cn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function uS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const fS={clone:mo,merge:Cn};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=hS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=uS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xv extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=$i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new I,Em=new $e,wm=new $e;class ni extends Xv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Em,wm),n.subVectors(wm,Em)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(eo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ps=1;class pS extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(bs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new ni(bs,Ps,e,n);s.layers=this.layers,this.add(s);const o=new ni(bs,Ps,e,n);o.layers=this.layers,this.add(o);const a=new ni(bs,Ps,e,n);a.layers=this.layers,this.add(a);const l=new ni(bs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new ni(bs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jv extends kn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:uo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mS extends hs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:Pr});s.uniforms.tEquirect.value=n;const o=new Mt(r,s),a=n.minFilter;return n.minFilter===rs&&(n.minFilter=Ei),new pS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Du=new I,gS=new I,vS=new at;class gr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(gS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vS.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ba,ul=new I;class Uh{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+o,h+u,m+g,y+_).normalize(),i[3].setComponents(l-o,h-u,m-g,y-_).normalize(),i[4].setComponents(l-a,h-d,m-x,y-v).normalize(),n===$i)i[5].setComponents(l+a,h+d,m+x,y+v).normalize();else if(n===dc)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _S(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Mo extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*h-o;for(let v=0;v<c;v++){const y=v*d-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,y=_+c*(f+1),D=_+1+c*(f+1),A=_+1+c*f;p.push(v,y,A),p.push(y,D,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yS=`#ifdef USE_ALPHAHASH
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
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
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
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
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
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LS=`#ifdef USE_IRIDESCENCE
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
#endif`,US=`#ifdef USE_BUMPMAP
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VS=`#define PI 3.141592653589793
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
} // validated`,GS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WS=`vec3 transformedNormal = objectNormal;
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
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$S="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`
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
}`,ZS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uM=`uniform bool receiveShadow;
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
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
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
#endif`,vM=`struct PhysicalMaterial {
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
}`,_M=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iE=`float getShadowMask() {
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
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
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
}`,TE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,UE=`uniform vec3 diffuse;
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
}`,IE=`#define LAMBERT
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
}`,NE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,OE=`#define MATCAP
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
}`,BE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,kE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,VE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,XE=`#define TOON
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
}`,jE=`uniform float size;
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
}`,YE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,$E=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:xS,alphahash_pars_fragment:yS,alphamap_fragment:SS,alphamap_pars_fragment:MS,alphatest_fragment:ES,alphatest_pars_fragment:wS,aomap_fragment:TS,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:RS,begin_vertex:bS,beginnormal_vertex:PS,bsdfs:DS,iridescence_fragment:LS,bumpmap_pars_fragment:US,clipping_planes_fragment:IS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:FS,clipping_planes_vertex:OS,color_fragment:BS,color_pars_fragment:zS,color_pars_vertex:kS,color_vertex:HS,common:VS,cube_uv_reflection_fragment:GS,defaultnormal_vertex:WS,displacementmap_pars_vertex:XS,displacementmap_vertex:jS,emissivemap_fragment:YS,emissivemap_pars_fragment:qS,colorspace_fragment:$S,colorspace_pars_fragment:KS,envmap_fragment:ZS,envmap_common_pars_fragment:JS,envmap_pars_fragment:QS,envmap_pars_vertex:eM,envmap_physical_pars_fragment:fM,envmap_vertex:tM,fog_vertex:nM,fog_pars_vertex:iM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:cM,lights_pars_begin:uM,lights_toon_fragment:dM,lights_toon_pars_fragment:hM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:vM,lights_fragment_begin:_M,lights_fragment_maps:xM,lights_fragment_end:yM,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:wM,map_fragment:TM,map_pars_fragment:AM,map_particle_fragment:CM,map_particle_pars_fragment:RM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:PM,morphinstance_vertex:DM,morphcolor_vertex:LM,morphnormal_vertex:UM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:FM,normal_fragment_maps:OM,normal_pars_fragment:BM,normal_pars_vertex:zM,normal_vertex:kM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:jM,packing:YM,premultiplied_alpha_fragment:qM,project_vertex:$M,dithering_fragment:KM,dithering_pars_fragment:ZM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:tE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:aE,specularmap_fragment:lE,specularmap_pars_fragment:cE,tonemapping_fragment:uE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:hE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:gE,worldpos_vertex:vE,background_vert:_E,background_frag:xE,backgroundCube_vert:yE,backgroundCube_frag:SE,cube_vert:ME,cube_frag:EE,depth_vert:wE,depth_frag:TE,distanceRGBA_vert:AE,distanceRGBA_frag:CE,equirect_vert:RE,equirect_frag:bE,linedashed_vert:PE,linedashed_frag:DE,meshbasic_vert:LE,meshbasic_frag:UE,meshlambert_vert:IE,meshlambert_frag:NE,meshmatcap_vert:FE,meshmatcap_frag:OE,meshnormal_vert:BE,meshnormal_frag:zE,meshphong_vert:kE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:jE,points_frag:YE,shadow_vert:qE,shadow_frag:$E,sprite_vert:KE,sprite_frag:ZE},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Li={basic:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Cn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Cn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Cn([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Cn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Cn([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Cn([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Cn([Ee.common,Ee.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Cn([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Li.physical={uniforms:Cn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const fl={r:0,b:0,g:0},jr=new Fi,JE=new Ut;function QE(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?f(a,l):y&&y.isColor&&(f(y,1),v=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Uc)?(u===void 0&&(u=new Mt(new bi(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:mo(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),jr.copy(v.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(jr)),u.material.toneMapped=wt.getTransfer(y.colorSpace)!==Dt,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mt(new Mo(2,2),new ir({name:"BackgroundMaterial",uniforms:mo(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=wt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(fl,Wv(t)),i.buffers.color.setClear(fl.r,fl.g,fl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function e2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,w,X,W,K){let te=!1;const j=d(W,X,w);s!==j&&(s=j,c(s.object)),te=p(S,W,X,K),te&&g(S,W,X,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(S,w,X,W),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,w,X){const W=X.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let te=K[w.id];te===void 0&&(te={},K[w.id]=te);let j=te[W];return j===void 0&&(j=h(l()),te[W]=j),j}function h(S){const w=[],X=[],W=[];for(let K=0;K<n;K++)w[K]=0,X[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,w,X,W){const K=s.attributes,te=w.attributes;let j=0;const oe=X.getAttributes();for(const O in oe)if(oe[O].location>=0){const ne=K[O];let xe=te[O];if(xe===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),ne===void 0||ne.attribute!==xe||xe&&ne.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==W}function g(S,w,X,W){const K={},te=w.attributes;let j=0;const oe=X.getAttributes();for(const O in oe)if(oe[O].location>=0){let ne=te[O];ne===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const xe={};xe.attribute=ne,ne&&ne.data&&(xe.data=ne.data),K[O]=xe,j++}s.attributes=K,s.attributesNum=j,s.index=W}function x(){const S=s.newAttributes;for(let w=0,X=S.length;w<X;w++)S[w]=0}function m(S){f(S,0)}function f(S,w){const X=s.newAttributes,W=s.enabledAttributes,K=s.attributeDivisors;X[S]=1,W[S]===0&&(t.enableVertexAttribArray(S),W[S]=1),K[S]!==w&&(t.vertexAttribDivisor(S,w),K[S]=w)}function _(){const S=s.newAttributes,w=s.enabledAttributes;for(let X=0,W=w.length;X<W;X++)w[X]!==S[X]&&(t.disableVertexAttribArray(X),w[X]=0)}function v(S,w,X,W,K,te,j){j===!0?t.vertexAttribIPointer(S,w,X,K,te):t.vertexAttribPointer(S,w,X,W,K,te)}function y(S,w,X,W){x();const K=W.attributes,te=X.getAttributes(),j=w.defaultAttributeValues;for(const oe in te){const O=te[oe];if(O.location>=0){let ee=K[oe];if(ee===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const ne=ee.normalized,xe=ee.itemSize,He=e.get(ee);if(He===void 0)continue;const ut=He.buffer,$=He.type,ce=He.bytesPerElement,Re=$===t.INT||$===t.UNSIGNED_INT||ee.gpuType===Eh;if(ee.isInterleavedBufferAttribute){const Te=ee.data,nt=Te.stride,Je=ee.offset;if(Te.isInstancedInterleavedBuffer){for(let gt=0;gt<O.locationSize;gt++)f(O.location+gt,Te.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let gt=0;gt<O.locationSize;gt++)m(O.location+gt);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let gt=0;gt<O.locationSize;gt++)v(O.location+gt,xe/O.locationSize,$,ne,nt*ce,(Je+xe/O.locationSize*gt)*ce,Re)}else{if(ee.isInstancedBufferAttribute){for(let Te=0;Te<O.locationSize;Te++)f(O.location+Te,ee.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<O.locationSize;Te++)m(O.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let Te=0;Te<O.locationSize;Te++)v(O.location+Te,xe/O.locationSize,$,ne,xe*ce,xe/O.locationSize*Te*ce,Re)}}else if(j!==void 0){const ne=j[oe];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(O.location,ne);break;case 3:t.vertexAttrib3fv(O.location,ne);break;case 4:t.vertexAttrib4fv(O.location,ne);break;default:t.vertexAttrib1fv(O.location,ne)}}}}_()}function D(){L();for(const S in i){const w=i[S];for(const X in w){const W=w[X];for(const K in W)u(W[K].object),delete W[K];delete w[X]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const X in w){const W=w[X];for(const K in W)u(W[K].object),delete W[K];delete w[X]}delete i[S.id]}function T(S){for(const w in i){const X=i[w];if(X[S.id]===void 0)continue;const W=X[S.id];for(const K in W)u(W[K].object),delete W[K];delete X[S.id]}}function L(){Y(),o=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function t2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function n2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==wi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qi&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:D,maxSamples:A}}function i2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let y=f.clippingState||null;l.value=y,y=u(g,h,v,p);for(let D=0;D!==v;++D)y[D]=n[D];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function r2(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=uo:a===Kf&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qv extends Xv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,Tm=[.125,.215,.35,.446,.526,.582],Jr=20,Lu=new qv,Am=new Ze;let Uu=null,Iu=0,Nu=0,Fu=!1;const Kr=(1+Math.sqrt(5))/2,Ds=1/Kr,Cm=[new I(-Kr,Ds,0),new I(Kr,Ds,0),new I(-Ds,0,Kr),new I(Ds,0,Kr),new I(0,Kr,-Ds),new I(0,Kr,Ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Iu,Nu),this._renderer.xr.enabled=Fu,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Ca,format:wi,colorSpace:zr,depthBuffer:!1},r=bm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s2(s)),this._blurMaterial=o2(s,e,n)}return r}_compileMaterial(e){const n=new Mt(this._lodPlanes[0],e);this._renderer.compile(n,Lu)}_sceneToCubeUV(e,n,i,r){const a=new ni(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Am),u.toneMapping=Dr,u.autoClear=!1;const p=new Nc({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Mt(new bi,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Am),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;dl(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cm[(r-s-1)%Cm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Jr;m>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const f=[];let _=0;for(let T=0;T<Jr;++T){const L=T/x,Y=Math.exp(-L*L/2);f.push(Y),T===0?_+=Y:T<m&&(_+=2*Y)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],D=3*y*(r>v-Xs?r-v+Xs:0),A=4*(this._cubeSize-y);dl(n,D,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Lu)}}function s2(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+Tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=Tm[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,Y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(Y,x*g*A),v.set(h,m*g*A);const S=[A,A,A,A,A,A];y.set(S,f*g*A)}const D=new hi;D.setAttribute("position",new Ci(_,x)),D.setAttribute("uv",new Ci(v,m)),D.setAttribute("faceIndex",new Ci(y,f)),e.push(D),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bm(t,e,n){const i=new hs(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function o2(t,e,n){const i=new Float32Array(Jr),r=new I(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Pm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Dm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function a2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Kf,u=l===uo||l===fo;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Rm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Rm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function l2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ol("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function c2(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const D=_[v+0],A=_[v+1],T=_[v+2];h.push(D,A,A,T,T,D)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const D=v+0,A=v+1,T=v+2;h.push(D,A,A,T,T,D)}}else return;const m=new(Bv(h)?Gv:Vv)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function u2(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function f2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function d2(t,e,n){const i=new WeakMap,r=new Xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let D=a.attributes.position.count*y,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const T=new Float32Array(D*A*4*d),L=new kv(T,D,A,d);L.type=qi,L.needsUpdate=!0;const Y=y*4;for(let w=0;w<d;w++){const X=f[w],W=_[w],K=v[w],te=D*A*4*w;for(let j=0;j<X.count;j++){const oe=j*Y;g===!0&&(r.fromBufferAttribute(X,j),T[te+oe+0]=r.x,T[te+oe+1]=r.y,T[te+oe+2]=r.z,T[te+oe+3]=0),x===!0&&(r.fromBufferAttribute(W,j),T[te+oe+4]=r.x,T[te+oe+5]=r.y,T[te+oe+6]=r.z,T[te+oe+7]=0),m===!0&&(r.fromBufferAttribute(K,j),T[te+oe+8]=r.x,T[te+oe+9]=r.y,T[te+oe+10]=r.z,T[te+oe+11]=K.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new $e(D,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function h2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $v extends kn{constructor(e,n,i,r,s,o,a,l,c,u=Qs){if(u!==Qs&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=ds),i===void 0&&u===po&&(i=ho),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kv=new kn,Lm=new $v(1,1),Zv=new kv,Jv=new Qy,Qv=new jv,Um=[],Im=[],Nm=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function Eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function tn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function nn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2fv(this.addr,e),nn(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;t.uniform3fv(this.addr,e),nn(n,e)}}function v2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4fv(this.addr,e),nn(n,e)}}function _2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Om.set(i),t.uniformMatrix2fv(this.addr,!1,Om),nn(n,i)}}function x2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Fm.set(i),t.uniformMatrix3fv(this.addr,!1,Fm),nn(n,i)}}function y2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Nm.set(i),t.uniformMatrix4fv(this.addr,!1,Nm),nn(n,i)}}function S2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2iv(this.addr,e),nn(n,e)}}function E2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3iv(this.addr,e),nn(n,e)}}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4iv(this.addr,e),nn(n,e)}}function T2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2uiv(this.addr,e),nn(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3uiv(this.addr,e),nn(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4uiv(this.addr,e),nn(n,e)}}function b2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Lm.compareFunction=Ov,s=Lm):s=Kv,n.setTexture2D(e||s,r)}function P2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jv,r)}function D2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qv,r)}function L2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zv,r)}function U2(t){switch(t){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return v2;case 35674:return _2;case 35675:return x2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return w2;case 5125:return T2;case 36294:return A2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return L2}}function I2(t,e){t.uniform1fv(this.addr,e)}function N2(t,e){const n=Eo(e,this.size,2);t.uniform2fv(this.addr,n)}function F2(t,e){const n=Eo(e,this.size,3);t.uniform3fv(this.addr,n)}function O2(t,e){const n=Eo(e,this.size,4);t.uniform4fv(this.addr,n)}function B2(t,e){const n=Eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function z2(t,e){const n=Eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k2(t,e){const n=Eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function H2(t,e){t.uniform1iv(this.addr,e)}function V2(t,e){t.uniform2iv(this.addr,e)}function G2(t,e){t.uniform3iv(this.addr,e)}function W2(t,e){t.uniform4iv(this.addr,e)}function X2(t,e){t.uniform1uiv(this.addr,e)}function j2(t,e){t.uniform2uiv(this.addr,e)}function Y2(t,e){t.uniform3uiv(this.addr,e)}function q2(t,e){t.uniform4uiv(this.addr,e)}function $2(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Kv,s[o])}function K2(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Jv,s[o])}function Z2(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Qv,s[o])}function J2(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zv,s[o])}function Q2(t){switch(t){case 5126:return I2;case 35664:return N2;case 35665:return F2;case 35666:return O2;case 35674:return B2;case 35675:return z2;case 35676:return k2;case 5124:case 35670:return H2;case 35667:case 35671:return V2;case 35668:case 35672:return G2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return j2;case 36295:return Y2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return J2}}class ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U2(n.type)}}class tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Q2(n.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function Bm(t,e){t.seq.push(e),t.map[e.id]=e}function iw(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),o=Ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Bm(n,c===void 0?new ew(a,t,e):new tw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new nw(a),Bm(n,d)),n=d}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rw=37297;let sw=0;function ow(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aw(t){const e=wt.getPrimaries(wt.workingColorSpace),n=wt.getPrimaries(t);let i;switch(e===n?i="":e===fc&&n===uc?i="LinearDisplayP3ToLinearSRGB":e===uc&&n===fc&&(i="LinearSRGBToLinearDisplayP3"),t){case zr:case Ic:return[i,"LinearTransferOETF"];case yi:case bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ow(t.getShaderSource(e),o)}else return r}function lw(t,e){const n=aw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cw(t,e){let n;switch(e){case uy:n="Linear";break;case fy:n="Reinhard";break;case dy:n="Cineon";break;case hy:n="ACESFilmic";break;case my:n="AgX";break;case gy:n="Neutral";break;case py:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new I;function uw(){wt.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Go(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(pw,gw)}const mw=new Map;function gw(t,e){let n=ot[e];if(n===void 0){const i=mw.get(e);if(i!==void 0)n=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(t){return t.replace(vw,_w)}function _w(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function xw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case uo:case fo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function Mw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case cy:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ww(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xw(n),c=yw(n),u=Sw(n),d=Mw(n),h=Ew(n),p=fw(n),g=dw(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),f.length>0&&(f+=`
`)):(m=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),f=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?ot.tonemapping_pars_fragment:"",n.toneMapping!==Dr?cw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,lw("linearToOutputTexel",n.outputColorSpace),uw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=Td(o),o=Hm(o,n),o=Vm(o,n),a=Td(a),a=Hm(a,n),a=Vm(a,n),o=Gm(o),a=Gm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+o,y=_+f+a,D=zm(r,r.VERTEX_SHADER,v),A=zm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,D),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(w){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(D).trim(),K=r.getShaderInfoLog(A).trim();let te=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,D,A);else{const oe=km(r,D,"vertex"),O=km(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+oe+`
`+O)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||K==="")&&(j=!1);j&&(w.diagnostics={runnable:te,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(D),r.deleteShader(A),L=new Bl(r,x),Y=hw(r,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let Y;this.getAttributes=function(){return Y===void 0&&T(this),Y};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,rw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}let Tw=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Cw(e),n.set(e,i)),i}}class Cw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(t,e,n,i,r,s,o){const a=new Lh,l=new Aw,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,w,X,W,K){const te=W.fog,j=K.geometry,oe=S.isMeshStandardMaterial?W.environment:null,O=(S.isMeshStandardMaterial?n:e).get(S.envMap||oe),ee=O&&O.mapping===Uc?O.image.height:null,ne=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,He=xe!==void 0?xe.length:0;let ut=0;j.morphAttributes.position!==void 0&&(ut=1),j.morphAttributes.normal!==void 0&&(ut=2),j.morphAttributes.color!==void 0&&(ut=3);let $,ce,Re,Te;if(ne){const ve=Li[ne];$=ve.vertexShader,ce=ve.fragmentShader}else $=S.vertexShader,ce=S.fragmentShader,l.update(S),Re=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const nt=t.getRenderTarget(),Je=K.isInstancedMesh===!0,gt=K.isBatchedMesh===!0,Et=!!S.map,ht=!!S.matcap,U=!!O,pn=!!S.aoMap,lt=!!S.lightMap,pt=!!S.bumpMap,Qe=!!S.normalMap,St=!!S.displacementMap,Ye=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,Z=S.clearcoat>0,le=S.dispersion>0,J=S.iridescence>0,Be=S.sheen>0,Ae=S.transmission>0,Le=H&&!!S.anisotropyMap,vt=Z&&!!S.clearcoatMap,me=Z&&!!S.clearcoatNormalMap,Ie=Z&&!!S.clearcoatRoughnessMap,Ve=J&&!!S.iridescenceMap,tt=J&&!!S.iridescenceThicknessMap,De=Be&&!!S.sheenColorMap,ft=Be&&!!S.sheenRoughnessMap,it=!!S.specularMap,Tt=!!S.specularColorMap,B=!!S.specularIntensityMap,Pe=Ae&&!!S.transmissionMap,C=Ae&&!!S.thicknessMap,P=!!S.gradientMap,F=!!S.alphaMap,N=S.alphaTest>0,q=!!S.alphaHash,ie=!!S.extensions;let ye=Dr;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ye=t.toneMapping);const ge={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:ce,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:gt,batchingColor:gt&&K._colorsTexture!==null,instancing:Je,instancingColor:Je&&K.instanceColor!==null,instancingMorph:Je&&K.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:nt===null?t.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:zr,alphaToCoverage:!!S.alphaToCoverage,map:Et,matcap:ht,envMap:U,envMapMode:U&&O.mapping,envMapCubeUVHeight:ee,aoMap:pn,lightMap:lt,bumpMap:pt,normalMap:Qe,displacementMap:p&&St,emissiveMap:Ye,normalMapObjectSpace:Qe&&S.normalMapType===yy,normalMapTangentSpace:Qe&&S.normalMapType===Fv,metalnessMap:R,roughnessMap:M,anisotropy:H,anisotropyMap:Le,clearcoat:Z,clearcoatMap:vt,clearcoatNormalMap:me,clearcoatRoughnessMap:Ie,dispersion:le,iridescence:J,iridescenceMap:Ve,iridescenceThicknessMap:tt,sheen:Be,sheenColorMap:De,sheenRoughnessMap:ft,specularMap:it,specularColorMap:Tt,specularIntensityMap:B,transmission:Ae,transmissionMap:Pe,thicknessMap:C,gradientMap:P,opaque:S.transparent===!1&&S.blending===Js&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:N,alphaHash:q,combine:S.combine,mapUv:Et&&m(S.map.channel),aoMapUv:pn&&m(S.aoMap.channel),lightMapUv:lt&&m(S.lightMap.channel),bumpMapUv:pt&&m(S.bumpMap.channel),normalMapUv:Qe&&m(S.normalMap.channel),displacementMapUv:St&&m(S.displacementMap.channel),emissiveMapUv:Ye&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:M&&m(S.roughnessMap.channel),anisotropyMapUv:Le&&m(S.anisotropyMap.channel),clearcoatMapUv:vt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:ft&&m(S.sheenRoughnessMap.channel),specularMapUv:it&&m(S.specularMap.channel),specularColorMapUv:Tt&&m(S.specularColorMap.channel),specularIntensityMapUv:B&&m(S.specularIntensityMap.channel),transmissionMapUv:Pe&&m(S.transmissionMap.channel),thicknessMapUv:C&&m(S.thicknessMap.channel),alphaMapUv:F&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Qe||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(Et||F),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:ye,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&S.extensions.multiDraw===!0||gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function _(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)w.push(X),w.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(v(w,S),y(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),S.push(a.mask)}function D(S){const w=x[S.type];let X;if(w){const W=Li[w];X=fS.clone(W.uniforms)}else X=S.uniforms;return X}function A(S,w){let X;for(let W=0,K=u.length;W<K;W++){const te=u[W];if(te.cacheKey===w){X=te,++X.usedTimes;break}}return X===void 0&&(X=new ww(t,w,S,s),u.push(X)),X}function T(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:D,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:Y}}function bw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Pw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||Pw),i.length>1&&i.sort(h||Xm),r.length>1&&r.sort(h||Xm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Dw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new jm,t.set(i,[o])):r>=s.length?(o=new jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ze};break;case"SpotLight":n={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function Uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Iw=0;function Nw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Fw(t){const e=new Lw,n=Uw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Ut,o=new Ut;function a(c){let u=0,d=0,h=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,v=0,y=0,D=0,A=0,T=0;c.sort(Nw);for(let Y=0,S=c.length;Y<S;Y++){const w=c[Y],X=w.color,W=w.intensity,K=w.distance,te=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=X.r*W,d+=X.g*W,h+=X.b*W;else if(w.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(w.sh.coefficients[j],W);T++}else if(w.isDirectionalLight){const j=e.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const oe=w.shadow,O=n.get(w);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=j,p++}else if(w.isSpotLight){const j=e.get(w);j.position.setFromMatrixPosition(w.matrixWorld),j.color.copy(X).multiplyScalar(W),j.distance=K,j.coneCos=Math.cos(w.angle),j.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),j.decay=w.decay,i.spot[x]=j;const oe=w.shadow;if(w.map&&(i.spotLightMap[D]=w.map,D++,oe.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[x]=oe.matrix,w.castShadow){const O=n.get(w);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=te,y++}x++}else if(w.isRectAreaLight){const j=e.get(w);j.color.copy(X).multiplyScalar(W),j.halfWidth.set(w.width*.5,0,0),j.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=j,m++}else if(w.isPointLight){const j=e.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),j.distance=w.distance,j.decay=w.decay,w.castShadow){const oe=w.shadow,O=n.get(w);O.shadowIntensity=oe.intensity,O.shadowBias=oe.bias,O.shadowNormalBias=oe.normalBias,O.shadowRadius=oe.radius,O.shadowMapSize=oe.mapSize,O.shadowCameraNear=oe.camera.near,O.shadowCameraFar=oe.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=j,g++}else if(w.isHemisphereLight){const j=e.get(w);j.skyColor.copy(w.color).multiplyScalar(W),j.groundColor.copy(w.groundColor).multiplyScalar(W),i.hemi[f]=j,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=T,i.version=Iw++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ym(t){const e=new Fw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ow(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ym(t),e.set(r,[a])):s>=o.length?(a=new Ym(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Bw extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zw extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hw=`uniform sampler2D shadow_pass;
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
}`;function Vw(t,e,n){let i=new Uh;const r=new $e,s=new $e,o=new Xt,a=new Bw({depthPacking:xy}),l=new zw,c={},u=n.maxTextureSize,d={[Nr]:zn,[zn]:Nr,[Mi]:Mi},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:kw,fragmentShader:Hw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let f=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const Y=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Pr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=f!==Gi&&this.type===Gi,K=f===Gi&&this.type!==Gi;for(let te=0,j=A.length;te<j;te++){const oe=A[te],O=oe.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();if(r.multiply(ee),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y)),O.map===null||W===!0||K===!0){const xe=this.type!==Gi?{minFilter:oi,magFilter:oi}:{};O.map!==null&&O.map.dispose(),O.map=new hs(r.x,r.y,xe),O.map.texture.name=oe.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const ne=O.getViewportCount();for(let xe=0;xe<ne;xe++){const He=O.getViewport(xe);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),X.viewport(o),O.updateMatrices(oe,xe),i=O.getFrustum(),y(T,L,O.camera,oe,this.type)}O.isPointLightShadow!==!0&&this.type===Gi&&_(O,L),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(Y,S,w)};function _(A,T){const L=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hs(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,L,p,x,null)}function v(A,T,L,Y){let S=null;const w=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)S=w;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=S.uuid,W=T.uuid;let K=c[X];K===void 0&&(K={},c[X]=K);let te=K[W];te===void 0&&(te=S.clone(),K[W]=te,T.addEventListener("dispose",D)),S=te}if(S.visible=T.visible,S.wireframe=T.wireframe,Y===Gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=L}return S}function y(A,T,L,Y,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const W=e.update(A),K=A.material;if(Array.isArray(K)){const te=W.groups;for(let j=0,oe=te.length;j<oe;j++){const O=te[j],ee=K[O.materialIndex];if(ee&&ee.visible){const ne=v(A,ee,Y,S);A.onBeforeShadow(t,A,T,L,W,ne,O),t.renderBufferDirect(L,null,W,ne,A,O),A.onAfterShadow(t,A,T,L,W,ne,O)}}}else if(K.visible){const te=v(A,K,Y,S);A.onBeforeShadow(t,A,T,L,W,te,null),t.renderBufferDirect(L,null,W,te,A,null),A.onAfterShadow(t,A,T,L,W,te,null)}}const X=A.children;for(let W=0,K=X.length;W<K;W++)y(X[W],T,L,Y,S)}function D(A){A.target.removeEventListener("dispose",D);for(const L in c){const Y=c[L],S=A.target.uuid;S in Y&&(Y[S].dispose(),delete Y[S])}}}const Gw={[Vf]:Gf,[Wf]:Yf,[Xf]:qf,[co]:jf,[Gf]:Vf,[Yf]:Wf,[qf]:Xf,[jf]:co};function Ww(t){function e(){let B=!1;const Pe=new Xt;let C=null;const P=new Xt(0,0,0,0);return{setMask:function(F){C!==F&&!B&&(t.colorMask(F,F,F,F),C=F)},setLocked:function(F){B=F},setClear:function(F,N,q,ie,ye){ye===!0&&(F*=ie,N*=ie,q*=ie),Pe.set(F,N,q,ie),P.equals(Pe)===!1&&(t.clearColor(F,N,q,ie),P.copy(Pe))},reset:function(){B=!1,C=null,P.set(-1,0,0,0)}}}function n(){let B=!1,Pe=!1,C=null,P=null,F=null;return{setReversed:function(N){Pe=N},setTest:function(N){N?Re(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(N){C!==N&&!B&&(t.depthMask(N),C=N)},setFunc:function(N){if(Pe&&(N=Gw[N]),P!==N){switch(N){case Vf:t.depthFunc(t.NEVER);break;case Gf:t.depthFunc(t.ALWAYS);break;case Wf:t.depthFunc(t.LESS);break;case co:t.depthFunc(t.LEQUAL);break;case Xf:t.depthFunc(t.EQUAL);break;case jf:t.depthFunc(t.GEQUAL);break;case Yf:t.depthFunc(t.GREATER);break;case qf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}P=N}},setLocked:function(N){B=N},setClear:function(N){F!==N&&(t.clearDepth(N),F=N)},reset:function(){B=!1,C=null,P=null,F=null}}}function i(){let B=!1,Pe=null,C=null,P=null,F=null,N=null,q=null,ie=null,ye=null;return{setTest:function(ge){B||(ge?Re(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(ge){Pe!==ge&&!B&&(t.stencilMask(ge),Pe=ge)},setFunc:function(ge,ve,mt){(C!==ge||P!==ve||F!==mt)&&(t.stencilFunc(ge,ve,mt),C=ge,P=ve,F=mt)},setOp:function(ge,ve,mt){(N!==ge||q!==ve||ie!==mt)&&(t.stencilOp(ge,ve,mt),N=ge,q=ve,ie=mt)},setLocked:function(ge){B=ge},setClear:function(ge){ye!==ge&&(t.clearStencil(ge),ye=ge)},reset:function(){B=!1,Pe=null,C=null,P=null,F=null,N=null,q=null,ie=null,ye=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,f=null,_=null,v=null,y=null,D=null,A=new Ze(0,0,0),T=0,L=!1,Y=null,S=null,w=null,X=null,W=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,j=0;const oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(oe)[1]),te=j>=1):oe.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),te=j>=2);let O=null,ee={};const ne=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),He=new Xt().fromArray(ne),ut=new Xt().fromArray(xe);function $(B,Pe,C,P){const F=new Uint8Array(4),N=t.createTexture();t.bindTexture(B,N),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let q=0;q<C;q++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,P,0,t.RGBA,t.UNSIGNED_BYTE,F):t.texImage2D(Pe+q,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,F);return N}const ce={};ce[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Re(t.DEPTH_TEST),s.setFunc(co),lt(!1),pt(Qp),Re(t.CULL_FACE),U(Pr);function Re(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function Te(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function nt(B,Pe){return u[B]!==Pe?(t.bindFramebuffer(B,Pe),u[B]=Pe,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Pe),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Je(B,Pe){let C=h,P=!1;if(B){C=d.get(Pe),C===void 0&&(C=[],d.set(Pe,C));const F=B.textures;if(C.length!==F.length||C[0]!==t.COLOR_ATTACHMENT0){for(let N=0,q=F.length;N<q;N++)C[N]=t.COLOR_ATTACHMENT0+N;C.length=F.length,P=!0}}else C[0]!==t.BACK&&(C[0]=t.BACK,P=!0);P&&t.drawBuffers(C)}function gt(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const Et={[Zr]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[jx]:t.FUNC_REVERSE_SUBTRACT};Et[Yx]=t.MIN,Et[qx]=t.MAX;const ht={[$x]:t.ZERO,[Kx]:t.ONE,[Zx]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[iy]:t.SRC_ALPHA_SATURATE,[ty]:t.DST_COLOR,[Qx]:t.DST_ALPHA,[Jx]:t.ONE_MINUS_SRC_COLOR,[Hf]:t.ONE_MINUS_SRC_ALPHA,[ny]:t.ONE_MINUS_DST_COLOR,[ey]:t.ONE_MINUS_DST_ALPHA,[ry]:t.CONSTANT_COLOR,[sy]:t.ONE_MINUS_CONSTANT_COLOR,[oy]:t.CONSTANT_ALPHA,[ay]:t.ONE_MINUS_CONSTANT_ALPHA};function U(B,Pe,C,P,F,N,q,ie,ye,ge){if(B===Pr){g===!0&&(Te(t.BLEND),g=!1);return}if(g===!1&&(Re(t.BLEND),g=!0),B!==Wx){if(B!==x||ge!==L){if((m!==Zr||v!==Zr)&&(t.blendEquation(t.FUNC_ADD),m=Zr,v=Zr),ge)switch(B){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.ONE,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}f=null,_=null,y=null,D=null,A.set(0,0,0),T=0,x=B,L=ge}return}F=F||Pe,N=N||C,q=q||P,(Pe!==m||F!==v)&&(t.blendEquationSeparate(Et[Pe],Et[F]),m=Pe,v=F),(C!==f||P!==_||N!==y||q!==D)&&(t.blendFuncSeparate(ht[C],ht[P],ht[N],ht[q]),f=C,_=P,y=N,D=q),(ie.equals(A)===!1||ye!==T)&&(t.blendColor(ie.r,ie.g,ie.b,ye),A.copy(ie),T=ye),x=B,L=!1}function pn(B,Pe){B.side===Mi?Te(t.CULL_FACE):Re(t.CULL_FACE);let C=B.side===zn;Pe&&(C=!C),lt(C),B.blending===Js&&B.transparent===!1?U(Pr):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const P=B.stencilWrite;o.setTest(P),P&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){Y!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),Y=B)}function pt(B){B!==Hx?(Re(t.CULL_FACE),B!==S&&(B===Qp?t.cullFace(t.BACK):B===Vx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),S=B}function Qe(B){B!==w&&(te&&t.lineWidth(B),w=B)}function St(B,Pe,C){B?(Re(t.POLYGON_OFFSET_FILL),(X!==Pe||W!==C)&&(t.polygonOffset(Pe,C),X=Pe,W=C)):Te(t.POLYGON_OFFSET_FILL)}function Ye(B){B?Re(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function R(B){B===void 0&&(B=t.TEXTURE0+K-1),O!==B&&(t.activeTexture(B),O=B)}function M(B,Pe,C){C===void 0&&(O===null?C=t.TEXTURE0+K-1:C=O);let P=ee[C];P===void 0&&(P={type:void 0,texture:void 0},ee[C]=P),(P.type!==B||P.texture!==Pe)&&(O!==C&&(t.activeTexture(C),O=C),t.bindTexture(B,Pe||ce[B]),P.type=B,P.texture=Pe)}function H(){const B=ee[O];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(B){He.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),He.copy(B))}function De(B){ut.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ut.copy(B))}function ft(B,Pe){let C=l.get(Pe);C===void 0&&(C=new WeakMap,l.set(Pe,C));let P=C.get(B);P===void 0&&(P=t.getUniformBlockIndex(Pe,B.name),C.set(B,P))}function it(B,Pe){const P=l.get(Pe).get(B);a.get(Pe)!==P&&(t.uniformBlockBinding(Pe,P,B.__bindingPointIndex),a.set(Pe,P))}function Tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},O=null,ee={},u={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,f=null,_=null,v=null,y=null,D=null,A=new Ze(0,0,0),T=0,L=!1,Y=null,S=null,w=null,X=null,W=null,He.set(0,0,t.canvas.width,t.canvas.height),ut.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Re,disable:Te,bindFramebuffer:nt,drawBuffers:Je,useProgram:gt,setBlending:U,setMaterial:pn,setFlipSided:lt,setCullFace:pt,setLineWidth:Qe,setPolygonOffset:St,setScissorTest:Ye,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:le,texImage2D:Ie,texImage3D:Ve,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:vt,texStorage3D:me,texSubImage2D:J,texSubImage3D:Be,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Le,scissor:tt,viewport:De,reset:Tt}}function qm(t,e,n,i){const r=Xw(i);switch(n){case bv:return t*e;case Dv:return t*e;case Lv:return t*e*2;case Uv:return t*e/r.components*r.byteLength;case Ah:return t*e/r.components*r.byteLength;case Iv:return t*e*2/r.components*r.byteLength;case Ch:return t*e*2/r.components*r.byteLength;case Pv:return t*e*3/r.components*r.byteLength;case wi:return t*e*4/r.components*r.byteLength;case Rh:return t*e*4/r.components*r.byteLength;case Ll:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Il:case Nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(t,16)*Math.max(e,8)/4;case Qf:case td:return Math.max(t,8)*Math.max(e,8)/2;case id:case rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fl:case yd:case Sd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Nv:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ed:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xw(t){switch(t){case nr:case Av:return{byteLength:1,components:1};case ya:case Cv:case Ca:return{byteLength:2,components:1};case wh:case Th:return{byteLength:2,components:4};case ds:case Eh:case qi:return{byteLength:4,components:1};case Rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function jw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):hc("canvas")}function x(R,M,H){let Z=1;const le=Ye(R);if((le.width>H||le.height>H)&&(Z=H/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Z*le.width),Be=Math.floor(Z*le.height);d===void 0&&(d=g(J,Be));const Ae=M?g(J,Be):d;return Ae.width=J,Ae.height=Be,Ae.getContext("2d").drawImage(R,0,0,J,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+J+"x"+Be+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==oi&&R.minFilter!==Ei}function f(R){t.generateMipmap(R)}function _(R,M,H,Z,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),M===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGB8UI),H===t.UNSIGNED_SHORT&&(J=t.RGB16UI),H===t.UNSIGNED_INT&&(J=t.RGB32UI),H===t.BYTE&&(J=t.RGB8I),H===t.SHORT&&(J=t.RGB16I),H===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),H===t.UNSIGNED_INT&&(J=t.RGBA32UI),H===t.BYTE&&(J=t.RGBA8I),H===t.SHORT&&(J=t.RGBA16I),H===t.INT&&(J=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Be=le?cc:wt.getTransfer(Z);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=Be===Dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,M){let H;return R?M===null||M===ds||M===ho?H=t.DEPTH24_STENCIL8:M===qi?H=t.DEPTH32F_STENCIL8:M===ya&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ds||M===ho?H=t.DEPTH_COMPONENT24:M===qi?H=t.DEPTH_COMPONENT32F:M===ya&&(H=t.DEPTH_COMPONENT16),H}function y(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==Ei?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){const M=R.target;M.removeEventListener("dispose",D),T(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),Y(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,Z=h.get(H);if(Z){const le=Z[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(R),Object.keys(Z).length===0&&h.delete(H)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,Z=h.get(H);delete Z[M.__cacheKey],o.memory.textures--}function Y(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let le=0;le<M.__webglFramebuffer[Z].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[Z][le]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,le=H.length;Z<le;Z++){const J=i.get(H[Z]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(R)}let S=0;function w(){S=0}function X(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function K(R,M){const H=i.get(R);if(R.isVideoTexture&&Qe(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function te(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ut(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function j(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ut(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function oe(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const O={[Zf]:t.REPEAT,[is]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},ee={[oi]:t.NEAREST,[vy]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[Ei]:t.LINEAR,[uu]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},ne={[Sy]:t.NEVER,[Cy]:t.ALWAYS,[My]:t.LESS,[Ov]:t.LEQUAL,[Ey]:t.EQUAL,[Ay]:t.GEQUAL,[wy]:t.GREATER,[Ty]:t.NOTEQUAL};function xe(R,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ei||M.magFilter===uu||M.magFilter===Ya||M.magFilter===rs||M.minFilter===Ei||M.minFilter===uu||M.minFilter===Ya||M.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,O[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,O[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,O[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ee[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===oi||M.minFilter!==Ya&&M.minFilter!==rs||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function He(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D));const Z=M.source;let le=h.get(Z);le===void 0&&(le={},h.set(Z,le));const J=W(M);if(J!==R.__cacheKey){le[J]===void 0&&(le[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[J].usedTimes++;const Be=le[R.__cacheKey];Be!==void 0&&(le[R.__cacheKey].usedTimes--,Be.usedTimes===0&&L(M)),R.__cacheKey=J,R.__webglTexture=le[J].texture}return H}function ut(R,M,H){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const le=He(R,M),J=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+H);const Be=i.get(J);if(J.version!==Be.__version||le===!0){n.activeTexture(t.TEXTURE0+H);const Ae=wt.getPrimaries(wt.workingColorSpace),Le=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),vt=M.colorSpace===xr||Ae===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let me=x(M.image,!1,r.maxTextureSize);me=St(M,me);const Ie=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let tt=_(M.internalFormat,Ie,Ve,M.colorSpace,M.isVideoTexture);xe(Z,M);let De;const ft=M.mipmaps,it=M.isVideoTexture!==!0,Tt=Be.__version===void 0||le===!0,B=J.dataReady,Pe=y(M,me);if(M.isDepthTexture)tt=v(M.format===po,M.type),Tt&&(it?n.texStorage2D(t.TEXTURE_2D,1,tt,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,tt,me.width,me.height,0,Ie,Ve,null));else if(M.isDataTexture)if(ft.length>0){it&&Tt&&n.texStorage2D(t.TEXTURE_2D,Pe,tt,ft[0].width,ft[0].height);for(let C=0,P=ft.length;C<P;C++)De=ft[C],it?B&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,De.width,De.height,Ie,Ve,De.data):n.texImage2D(t.TEXTURE_2D,C,tt,De.width,De.height,0,Ie,Ve,De.data);M.generateMipmaps=!1}else it?(Tt&&n.texStorage2D(t.TEXTURE_2D,Pe,tt,me.width,me.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Ie,Ve,me.data)):n.texImage2D(t.TEXTURE_2D,0,tt,me.width,me.height,0,Ie,Ve,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,tt,ft[0].width,ft[0].height,me.depth);for(let C=0,P=ft.length;C<P;C++)if(De=ft[C],M.format!==wi)if(Ie!==null)if(it){if(B)if(M.layerUpdates.size>0){const F=qm(De.width,De.height,M.format,M.type);for(const N of M.layerUpdates){const q=De.data.subarray(N*F/De.data.BYTES_PER_ELEMENT,(N+1)*F/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,N,De.width,De.height,1,Ie,q,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,De.width,De.height,me.depth,Ie,De.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,C,tt,De.width,De.height,me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,De.width,De.height,me.depth,Ie,Ve,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,C,tt,De.width,De.height,me.depth,0,Ie,Ve,De.data)}else{it&&Tt&&n.texStorage2D(t.TEXTURE_2D,Pe,tt,ft[0].width,ft[0].height);for(let C=0,P=ft.length;C<P;C++)De=ft[C],M.format!==wi?Ie!==null?it?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,C,0,0,De.width,De.height,Ie,De.data):n.compressedTexImage2D(t.TEXTURE_2D,C,tt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?B&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,De.width,De.height,Ie,Ve,De.data):n.texImage2D(t.TEXTURE_2D,C,tt,De.width,De.height,0,Ie,Ve,De.data)}else if(M.isDataArrayTexture)if(it){if(Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,tt,me.width,me.height,me.depth),B)if(M.layerUpdates.size>0){const C=qm(me.width,me.height,M.format,M.type);for(const P of M.layerUpdates){const F=me.data.subarray(P*C/me.data.BYTES_PER_ELEMENT,(P+1)*C/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,P,me.width,me.height,1,Ie,Ve,F)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ie,Ve,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,tt,me.width,me.height,me.depth,0,Ie,Ve,me.data);else if(M.isData3DTexture)it?(Tt&&n.texStorage3D(t.TEXTURE_3D,Pe,tt,me.width,me.height,me.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ie,Ve,me.data)):n.texImage3D(t.TEXTURE_3D,0,tt,me.width,me.height,me.depth,0,Ie,Ve,me.data);else if(M.isFramebufferTexture){if(Tt)if(it)n.texStorage2D(t.TEXTURE_2D,Pe,tt,me.width,me.height);else{let C=me.width,P=me.height;for(let F=0;F<Pe;F++)n.texImage2D(t.TEXTURE_2D,F,tt,C,P,0,Ie,Ve,null),C>>=1,P>>=1}}else if(ft.length>0){if(it&&Tt){const C=Ye(ft[0]);n.texStorage2D(t.TEXTURE_2D,Pe,tt,C.width,C.height)}for(let C=0,P=ft.length;C<P;C++)De=ft[C],it?B&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,Ie,Ve,De):n.texImage2D(t.TEXTURE_2D,C,tt,Ie,Ve,De);M.generateMipmaps=!1}else if(it){if(Tt){const C=Ye(me);n.texStorage2D(t.TEXTURE_2D,Pe,tt,C.width,C.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Ve,me)}else n.texImage2D(t.TEXTURE_2D,0,tt,Ie,Ve,me);m(M)&&f(Z),Be.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,H){if(M.image.length!==6)return;const Z=He(R,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const J=i.get(le);if(le.version!==J.__version||Z===!0){n.activeTexture(t.TEXTURE0+H);const Be=wt.getPrimaries(wt.workingColorSpace),Ae=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),Le=M.colorSpace===xr||Be===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const vt=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let P=0;P<6;P++)!vt&&!me?Ie[P]=x(M.image[P],!0,r.maxCubemapSize):Ie[P]=me?M.image[P].image:M.image[P],Ie[P]=St(M,Ie[P]);const Ve=Ie[0],tt=s.convert(M.format,M.colorSpace),De=s.convert(M.type),ft=_(M.internalFormat,tt,De,M.colorSpace),it=M.isVideoTexture!==!0,Tt=J.__version===void 0||Z===!0,B=le.dataReady;let Pe=y(M,Ve);xe(t.TEXTURE_CUBE_MAP,M);let C;if(vt){it&&Tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,ft,Ve.width,Ve.height);for(let P=0;P<6;P++){C=Ie[P].mipmaps;for(let F=0;F<C.length;F++){const N=C[F];M.format!==wi?tt!==null?it?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F,0,0,N.width,N.height,tt,N.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F,ft,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F,0,0,N.width,N.height,tt,De,N.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F,ft,N.width,N.height,0,tt,De,N.data)}}}else{if(C=M.mipmaps,it&&Tt){C.length>0&&Pe++;const P=Ye(Ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,ft,P.width,P.height)}for(let P=0;P<6;P++)if(me){it?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Ie[P].width,Ie[P].height,tt,De,Ie[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,Ie[P].width,Ie[P].height,0,tt,De,Ie[P].data);for(let F=0;F<C.length;F++){const q=C[F].image[P].image;it?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F+1,0,0,q.width,q.height,tt,De,q.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F+1,ft,q.width,q.height,0,tt,De,q.data)}}else{it?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,tt,De,Ie[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,tt,De,Ie[P]);for(let F=0;F<C.length;F++){const N=C[F];it?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F+1,0,0,tt,De,N.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,F+1,ft,tt,De,N.image[P])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),J.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ce(R,M,H,Z,le,J){const Be=s.convert(H.format,H.colorSpace),Ae=s.convert(H.type),Le=_(H.internalFormat,Be,Ae,H.colorSpace);if(!i.get(M).__hasExternalTextures){const me=Math.max(1,M.width>>J),Ie=Math.max(1,M.height>>J);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,J,Le,me,Ie,M.depth,0,Be,Ae,null):n.texImage2D(le,J,Le,me,Ie,0,Be,Ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,le,i.get(H).__webglTexture,0,lt(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,le,i.get(H).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,J=v(M.stencilBuffer,le),Be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=lt(M);pt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,J,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Be,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let le=0;le<Z.length;le++){const J=Z[le],Be=s.convert(J.format,J.colorSpace),Ae=s.convert(J.type),Le=_(J.internalFormat,Be,Ae,J.colorSpace),vt=lt(M);H&&pt(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt,Le,M.width,M.height):pt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt,Le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,le=lt(M);if(M.depthTexture.format===Qs)pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===po)pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function nt(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),Re(M.__webglDepthbuffer[Z],R,!1);else{const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Re(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,le)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(R,M,H){const Z=i.get(R);M!==void 0&&ce(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&nt(R)}function gt(R){const M=R.texture,H=i.get(R),Z=i.get(M);R.addEventListener("dispose",A);const le=R.textures,J=R.isWebGLCubeRenderTarget===!0,Be=le.length>1;if(Be||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Ae]=[];for(let Le=0;Le<M.mipmaps.length;Le++)H.__webglFramebuffer[Ae][Le]=t.createFramebuffer()}else H.__webglFramebuffer[Ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)H.__webglFramebuffer[Ae]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Be)for(let Ae=0,Le=le.length;Ae<Le;Ae++){const vt=i.get(le[Ae]);vt.__webglTexture===void 0&&(vt.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&pt(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ae=0;Ae<le.length;Ae++){const Le=le[Ae];H.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Ae]);const vt=s.convert(Le.format,Le.colorSpace),me=s.convert(Le.type),Ie=_(Le.internalFormat,vt,me,Le.colorSpace,R.isXRRenderTarget===!0),Ve=lt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ie,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,H.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(t.TEXTURE_CUBE_MAP,M);for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ce(H.__webglFramebuffer[Ae][Le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le);else ce(H.__webglFramebuffer[Ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Ae=0,Le=le.length;Ae<Le;Ae++){const vt=le[Ae],me=i.get(vt);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),xe(t.TEXTURE_2D,vt),ce(H.__webglFramebuffer,R,vt,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),m(vt)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let Ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Z.__webglTexture),xe(Ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ce(H.__webglFramebuffer[Le],R,M,t.COLOR_ATTACHMENT0,Ae,Le);else ce(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Ae,0);m(M)&&f(Ae),n.unbindTexture()}R.depthBuffer&&nt(R)}function Et(R){const M=R.textures;for(let H=0,Z=M.length;H<Z;H++){const le=M[H];if(m(le)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Be=i.get(le).__webglTexture;n.bindTexture(J,Be),f(J),n.unbindTexture()}}}const ht=[],U=[];function pn(R){if(R.samples>0){if(pt(R)===!1){const M=R.textures,H=R.width,Z=R.height;let le=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Be=i.get(R),Ae=M.length>1;if(Ae)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),Ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Be.__webglColorRenderbuffer[Le]);const vt=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,vt,0)}t.blitFramebuffer(0,0,H,Z,0,0,H,Z,le,t.NEAREST),l===!0&&(ht.length=0,U.length=0,ht.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(J),U.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Be.__webglColorRenderbuffer[Le]);const vt=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,vt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function lt(R){return Math.min(r.maxSamples,R.samples)}function pt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function St(R,M){const H=R.colorSpace,Z=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==zr&&H!==xr&&(wt.getTransfer(H)===Dt?(Z!==wi||le!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=w,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=j,this.setTextureCube=oe,this.rebindTextures=Je,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=pt}function Yw(t,e){function n(i,r=xr){let s;const o=wt.getTransfer(r);if(i===nr)return t.UNSIGNED_BYTE;if(i===wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Av)return t.BYTE;if(i===Cv)return t.SHORT;if(i===ya)return t.UNSIGNED_SHORT;if(i===Eh)return t.INT;if(i===ds)return t.UNSIGNED_INT;if(i===qi)return t.FLOAT;if(i===Ca)return t.HALF_FLOAT;if(i===bv)return t.ALPHA;if(i===Pv)return t.RGB;if(i===wi)return t.RGBA;if(i===Dv)return t.LUMINANCE;if(i===Lv)return t.LUMINANCE_ALPHA;if(i===Qs)return t.DEPTH_COMPONENT;if(i===po)return t.DEPTH_STENCIL;if(i===Uv)return t.RED;if(i===Ah)return t.RED_INTEGER;if(i===Iv)return t.RG;if(i===Ch)return t.RG_INTEGER;if(i===Rh)return t.RGBA_INTEGER;if(i===Ll||i===Ul||i===Il||i===Nl)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qf||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===id||i===rd)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===od)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ad)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ld)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ud)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===md)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===yd||i===Sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fl)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nv||i===Md||i===Ed||i===wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class qw extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wo extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $w={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($w)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new kn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:Kw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new Mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qw extends xo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const x=new Jw,m=n.getContextAttributes();let f=null,_=null;const v=[],y=[],D=new $e;let A=null;const T=new ni;T.layers.enable(1),T.viewport=new Xt;const L=new ni;L.layers.enable(2),L.viewport=new Xt;const Y=[T,L],S=new qw;S.layers.enable(1),S.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=v[$];return ce===void 0&&(ce=new Bu,v[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=v[$];return ce===void 0&&(ce=new Bu,v[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=v[$];return ce===void 0&&(ce=new Bu,v[$]=ce),ce.getHandSpace()};function W($){const ce=y.indexOf($.inputSource);if(ce===-1)return;const Re=v[ce];Re!==void 0&&(Re.update($.inputSource,$.frame,c||o),Re.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",te);for(let $=0;$<v.length;$++){const ce=y[$];ce!==null&&(y[$]=null,v[$].disconnect(ce))}w=null,X=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new hs(p.framebufferWidth,p.framebufferHeight,{format:wi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Re=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?po:Qs,Re=m.stencil?ho:ds);const nt={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(nt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new hs(h.textureWidth,h.textureHeight,{format:wi,type:nr,depthTexture:new $v(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te($){for(let ce=0;ce<$.removed.length;ce++){const Re=$.removed[ce],Te=y.indexOf(Re);Te>=0&&(y[Te]=null,v[Te].disconnect(Re))}for(let ce=0;ce<$.added.length;ce++){const Re=$.added[ce];let Te=y.indexOf(Re);if(Te===-1){for(let Je=0;Je<v.length;Je++)if(Je>=y.length){y.push(Re),Te=Je;break}else if(y[Je]===null){y[Je]=Re,Te=Je;break}if(Te===-1)break}const nt=v[Te];nt&&nt.connect(Re)}}const j=new I,oe=new I;function O($,ce,Re){j.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(Re.matrixWorld);const Te=j.distanceTo(oe),nt=ce.projectionMatrix.elements,Je=Re.projectionMatrix.elements,gt=nt[14]/(nt[10]-1),Et=nt[14]/(nt[10]+1),ht=(nt[9]+1)/nt[5],U=(nt[9]-1)/nt[5],pn=(nt[8]-1)/nt[0],lt=(Je[8]+1)/Je[0],pt=gt*pn,Qe=gt*lt,St=Te/(-pn+lt),Ye=St*-pn;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(St),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),nt[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const R=gt+St,M=Et+St,H=pt-Ye,Z=Qe+(Te-Ye),le=ht*Et/M*R,J=U*Et/M*R;$.projectionMatrix.makePerspective(H,Z,le,J,R,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ce=$.near,Re=$.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),S.near=L.near=T.near=ce,S.far=L.far=T.far=Re,(w!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,X=S.far);const Te=$.parent,nt=S.cameras;ee(S,Te);for(let Je=0;Je<nt.length;Je++)ee(nt[Je],Te);nt.length===2?O(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),ne($,S,Te)};function ne($,ce,Re){Re===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(Re.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let xe=null;function He($,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Te=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,Te=!0);for(let Je=0;Je<Re.length;Je++){const gt=Re[Je];let Et=null;if(p!==null)Et=p.getViewport(gt);else{const U=d.getViewSubImage(h,gt);Et=U.viewport,Je===0&&(e.setRenderTargetTextures(_,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(_))}let ht=Y[Je];ht===void 0&&(ht=new ni,ht.layers.enable(Je),ht.viewport=new Xt,Y[Je]=ht),ht.matrix.fromArray(gt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(gt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Et.x,Et.y,Et.width,Et.height),Je===0&&(S.matrix.copy(ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Te===!0&&S.cameras.push(ht)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const Je=d.getDepthInformation(Re[0]);Je&&Je.isValid&&Je.texture&&x.init(e,Je,r.renderState)}}for(let Re=0;Re<v.length;Re++){const Te=y[Re],nt=v[Re];Te!==null&&nt!==void 0&&nt.update(Te,ce,c||o)}xe&&xe($,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const ut=new Yv;ut.setAnimationLoop(He),this.setAnimationLoop=function($){xe=$},this.dispose=function(){}}}const Yr=new Fi,eT=new Ut;function tT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Wv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Yr.copy(y),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(Yr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const D=v.program;i.updateUBOMapping(_,D);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const v=d();_.__bindingPointIndex=v;const y=t.createBuffer(),D=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,D=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let Y=0,S=L.length;Y<S;Y++){const w=L[Y];if(p(w,A,Y,D)===!0){const X=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let te=0;te<W.length;te++){const j=W[te],oe=x(j);typeof j=="number"||typeof j=="boolean"?(w.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,X+K,w.__data)):j.isMatrix3?(w.__data[0]=j.elements[0],w.__data[1]=j.elements[1],w.__data[2]=j.elements[2],w.__data[3]=0,w.__data[4]=j.elements[3],w.__data[5]=j.elements[4],w.__data[6]=j.elements[5],w.__data[7]=0,w.__data[8]=j.elements[6],w.__data[9]=j.elements[7],w.__data[10]=j.elements[8],w.__data[11]=0):(j.toArray(w.__data,K),K+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,D){const A=_.value,T=v+"_"+y;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{const L=D[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(_){const v=_.uniforms;let y=0;const D=16;for(let T=0,L=v.length;T<L;T++){const Y=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,w=Y.length;S<w;S++){const X=Y[S],W=Array.isArray(X.value)?X.value:[X.value];for(let K=0,te=W.length;K<te;K++){const j=W[K],oe=x(j),O=y%D,ee=O%oe.boundary,ne=O+ee;y+=ee,ne!==0&&D-ne<oe.storage&&(y+=D-ne),X.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=oe.storage}}}const A=y%D;return A>0&&(y+=D-A),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class iT{constructor(e={}){const{canvas:n=Wy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=Dr,this.toneMappingExposure=1;const v=this;let y=!1,D=0,A=0,T=null,L=-1,Y=null;const S=new Xt,w=new Xt;let X=null;const W=new Ze(0);let K=0,te=n.width,j=n.height,oe=1,O=null,ee=null;const ne=new Xt(0,0,te,j),xe=new Xt(0,0,te,j);let He=!1;const ut=new Uh;let $=!1,ce=!1;const Re=new Ut,Te=new Ut,nt=new I,Je=new Xt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function ht(){return T===null?oe:1}let U=i;function pn(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sh}`),n.addEventListener("webglcontextlost",P,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",N,!1),U===null){const z="webgl2";if(U=pn(z,E),U===null)throw pn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let lt,pt,Qe,St,Ye,R,M,H,Z,le,J,Be,Ae,Le,vt,me,Ie,Ve,tt,De,ft,it,Tt,B;function Pe(){lt=new l2(U),lt.init(),it=new Yw(U,lt),pt=new n2(U,lt,e,it),Qe=new Ww(U),pt.reverseDepthBuffer&&Qe.buffers.depth.setReversed(!0),St=new f2(U),Ye=new bw,R=new jw(U,lt,Qe,Ye,pt,it,St),M=new r2(v),H=new a2(v),Z=new _S(U),Tt=new e2(U,Z),le=new c2(U,Z,St,Tt),J=new h2(U,le,Z,St),tt=new d2(U,pt,R),me=new i2(Ye),Be=new Rw(v,M,H,lt,pt,Tt,me),Ae=new tT(v,Ye),Le=new Dw,vt=new Ow(lt),Ve=new QE(v,M,H,Qe,J,h,l),Ie=new Vw(v,J,pt),B=new nT(U,St,pt,Qe),De=new t2(U,lt,St),ft=new u2(U,lt,St),St.programs=Be.programs,v.capabilities=pt,v.extensions=lt,v.properties=Ye,v.renderLists=Le,v.shadowMap=Ie,v.state=Qe,v.info=St}Pe();const C=new Qw(v,U);this.xr=C,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(te,j,!1))},this.getSize=function(E){return E.set(te,j)},this.setSize=function(E,z,G=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,j=z,n.width=Math.floor(E*oe),n.height=Math.floor(z*oe),G===!0&&(n.style.width=E+"px",n.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(te*oe,j*oe).floor()},this.setDrawingBufferSize=function(E,z,G){te=E,j=z,oe=G,n.width=Math.floor(E*G),n.height=Math.floor(z*G),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,z,G,V){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,z,G,V),Qe.viewport(S.copy(ne).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,z,G,V){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,z,G,V),Qe.scissor(w.copy(xe).multiplyScalar(oe).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(E){Qe.setScissorTest(He=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(E=!0,z=!0,G=!0){let V=0;if(E){let k=!1;if(T!==null){const he=T.texture.format;k=he===Rh||he===Ch||he===Ah}if(k){const he=T.texture.type,Se=he===nr||he===ds||he===ya||he===ho||he===wh||he===Th,Fe=Ve.getClearColor(),pe=Ve.getClearAlpha(),qe=Fe.r,Ke=Fe.g,Oe=Fe.b;Se?(p[0]=qe,p[1]=Ke,p[2]=Oe,p[3]=pe,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=qe,g[1]=Ke,g[2]=Oe,g[3]=pe,U.clearBufferiv(U.COLOR,0,g))}else V|=U.COLOR_BUFFER_BIT}z&&(V|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",P,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",N,!1),Le.dispose(),vt.dispose(),Ye.dispose(),M.dispose(),H.dispose(),J.dispose(),Tt.dispose(),B.dispose(),Be.dispose(),C.dispose(),C.removeEventListener("sessionstart",Zt),C.removeEventListener("sessionend",bt),Bt.stop()};function P(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=St.autoReset,z=Ie.enabled,G=Ie.autoUpdate,V=Ie.needsUpdate,k=Ie.type;Pe(),St.autoReset=E,Ie.enabled=z,Ie.autoUpdate=G,Ie.needsUpdate=V,Ie.type=k}function N(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function q(E){const z=E.target;z.removeEventListener("dispose",q),ie(z)}function ie(E){ye(E),Ye.remove(E)}function ye(E){const z=Ye.get(E).programs;z!==void 0&&(z.forEach(function(G){Be.releaseProgram(G)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,G,V,k,he){z===null&&(z=gt);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Fe=Oi(E,z,G,V,k);Qe.setMaterial(V,Se);let pe=G.index,qe=1;if(V.wireframe===!0){if(pe=le.getWireframeAttribute(G),pe===void 0)return;qe=2}const Ke=G.drawRange,Oe=G.attributes.position;let Q=Ke.start*qe,re=(Ke.start+Ke.count)*qe;he!==null&&(Q=Math.max(Q,he.start*qe),re=Math.min(re,(he.start+he.count)*qe)),pe!==null?(Q=Math.max(Q,0),re=Math.min(re,pe.count)):Oe!=null&&(Q=Math.max(Q,0),re=Math.min(re,Oe.count));const fe=re-Q;if(fe<0||fe===1/0)return;Tt.setup(k,V,Fe,G,pe);let Ce,Me=De;if(pe!==null&&(Ce=Z.get(pe),Me=ft,Me.setIndex(Ce)),k.isMesh)V.wireframe===!0?(Qe.setLineWidth(V.wireframeLinewidth*ht()),Me.setMode(U.LINES)):Me.setMode(U.TRIANGLES);else if(k.isLine){let ae=V.linewidth;ae===void 0&&(ae=1),Qe.setLineWidth(ae*ht()),k.isLineSegments?Me.setMode(U.LINES):k.isLineLoop?Me.setMode(U.LINE_LOOP):Me.setMode(U.LINE_STRIP)}else k.isPoints?Me.setMode(U.POINTS):k.isSprite&&Me.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ae=k._multiDrawStarts,We=k._multiDrawCounts,Ne=k._multiDrawCount,et=pe?Z.get(pe).bytesPerElement:1,qt=Ye.get(V).currentProgram.getUniforms();for(let At=0;At<Ne;At++)qt.setValue(U,"_gl_DrawID",At),Me.render(ae[At]/et,We[At])}else if(k.isInstancedMesh)Me.renderInstances(Q,fe,k.count);else if(G.isInstancedBufferGeometry){const ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,We=Math.min(G.instanceCount,ae);Me.renderInstances(Q,fe,We)}else Me.render(Q,fe)};function ge(E,z,G){E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,st(E,z,G),E.side=Nr,E.needsUpdate=!0,st(E,z,G),E.side=Mi):st(E,z,G)}this.compile=function(E,z,G=null){G===null&&(G=E),m=vt.get(G),m.init(z),_.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const V=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Fe=he[Se];ge(Fe,G,k),V.add(Fe)}else ge(he,G,k),V.add(he)}),_.pop(),m=null,V},this.compileAsync=function(E,z,G=null){const V=this.compile(E,z,G);return new Promise(k=>{function he(){if(V.forEach(function(Se){Ye.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){k(E);return}setTimeout(he,10)}lt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ve=null;function mt(E){ve&&ve(E)}function Zt(){Bt.stop()}function bt(){Bt.start()}const Bt=new Yv;Bt.setAnimationLoop(mt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(E){ve=E,C.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},C.addEventListener("sessionstart",Zt),C.addEventListener("sessionend",bt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(z),z=C.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,z,T),m=vt.get(E,_.length),m.init(z),_.push(m),Te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ut.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,$=me.init(this.clippingPlanes,ce),x=Le.get(E,f.length),x.init(),f.push(x),C.enabled===!0&&C.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&Un(he,z,-1/0,v.sortObjects)}Un(E,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(O,ee),Et=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Et&&Ve.addToRenderList(x,E),this.info.render.frame++,$===!0&&me.beginShadows();const G=m.state.shadowsArray;Ie.render(G,E,z),$===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,k=x.transmissive;if(m.setupLights(),z.isArrayCamera){const he=z.cameras;if(k.length>0)for(let Se=0,Fe=he.length;Se<Fe;Se++){const pe=he[Se];It(V,k,E,pe)}Et&&Ve.render(E);for(let Se=0,Fe=he.length;Se<Fe;Se++){const pe=he[Se];Hn(x,E,pe,pe.viewport)}}else k.length>0&&It(V,k,E,z),Et&&Ve.render(E),Hn(x,E,z);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,z),Tt.resetDefaultState(),L=-1,Y=null,_.pop(),_.length>0?(m=_[_.length-1],$===!0&&me.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Un(E,z,G,V){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ut.intersectsSprite(E)){V&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const Se=J.update(E),Fe=E.material;Fe.visible&&x.push(E,Se,Fe,G,Je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ut.intersectsObject(E))){const Se=J.update(E),Fe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Je.copy(Se.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(Fe)){const pe=Se.groups;for(let qe=0,Ke=pe.length;qe<Ke;qe++){const Oe=pe[qe],Q=Fe[Oe.materialIndex];Q&&Q.visible&&x.push(E,Se,Q,G,Je.z,Oe)}}else Fe.visible&&x.push(E,Se,Fe,G,Je.z,null)}}const he=E.children;for(let Se=0,Fe=he.length;Se<Fe;Se++)Un(he[Se],z,G,V)}function Hn(E,z,G,V){const k=E.opaque,he=E.transmissive,Se=E.transparent;m.setupLightsView(G),$===!0&&me.setGlobalState(v.clippingPlanes,G),V&&Qe.viewport(S.copy(V)),k.length>0&&mn(k,z,G),he.length>0&&mn(he,z,G),Se.length>0&&mn(Se,z,G),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function It(E,z,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new hs(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ca:nr,minFilter:rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const he=m.state.transmissionRenderTarget[V.id],Se=V.viewport||S;he.setSize(Se.z,Se.w);const Fe=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(W),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Et&&Ve.render(G);const pe=v.toneMapping;v.toneMapping=Dr;const qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),$===!0&&me.setGlobalState(v.clippingPlanes,V),mn(E,G,V),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Oe=0,Q=z.length;Oe<Q;Oe++){const re=z[Oe],fe=re.object,Ce=re.geometry,Me=re.material,ae=re.group;if(Me.side===Mi&&fe.layers.test(V.layers)){const We=Me.side;Me.side=zn,Me.needsUpdate=!0,jt(fe,G,V,Ce,Me,ae),Me.side=We,Me.needsUpdate=!0,Ke=!0}}Ke===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}v.setRenderTarget(Fe),v.setClearColor(W,K),qe!==void 0&&(V.viewport=qe),v.toneMapping=pe}function mn(E,z,G){const V=z.isScene===!0?z.overrideMaterial:null;for(let k=0,he=E.length;k<he;k++){const Se=E[k],Fe=Se.object,pe=Se.geometry,qe=V===null?Se.material:V,Ke=Se.group;Fe.layers.test(G.layers)&&jt(Fe,z,G,pe,qe,Ke)}}function jt(E,z,G,V,k,he){E.onBeforeRender(v,z,G,V,k,he),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,z,G,V,E,he),k.transparent===!0&&k.side===Mi&&k.forceSinglePass===!1?(k.side=zn,k.needsUpdate=!0,v.renderBufferDirect(G,z,V,k,E,he),k.side=Nr,k.needsUpdate=!0,v.renderBufferDirect(G,z,V,k,E,he),k.side=Mi):v.renderBufferDirect(G,z,V,k,E,he),E.onAfterRender(v,z,G,V,k,he)}function st(E,z,G){z.isScene!==!0&&(z=gt);const V=Ye.get(E),k=m.state.lights,he=m.state.shadowsArray,Se=k.state.version,Fe=Be.getParameters(E,k.state,he,z,G),pe=Be.getProgramCacheKey(Fe);let qe=V.programs;V.environment=E.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(E.isMeshStandardMaterial?H:M).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",q),qe=new Map,V.programs=qe);let Ke=qe.get(pe);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===Se)return Tn(E,Fe),Ke}else Fe.uniforms=Be.getUniforms(E),E.onBeforeCompile(Fe,v),Ke=Be.acquireProgram(Fe,pe),qe.set(pe,Ke),V.uniforms=Fe.uniforms;const Oe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=me.uniform),Tn(E,Fe),V.needsLights=Gn(E),V.lightsStateVersion=Se,V.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ke,V.uniformsList=null,Ke}function Vn(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Bl.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Tn(E,z){const G=Ye.get(E);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Oi(E,z,G,V,k){z.isScene!==!0&&(z=gt),R.resetTextureUnits();const he=z.fog,Se=V.isMeshStandardMaterial?z.environment:null,Fe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zr,pe=(V.isMeshStandardMaterial?H:M).get(V.envMap||Se),qe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ke=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!G.morphAttributes.position,Q=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let fe=Dr;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=Ce!==void 0?Ce.length:0,ae=Ye.get(V),We=m.state.lights;if($===!0&&(ce===!0||E!==Y)){const Gt=E===Y&&V.id===L;me.setState(V,E,Gt)}let Ne=!1;V.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==We.state.version||ae.outputColorSpace!==Fe||k.isBatchedMesh&&ae.batching===!1||!k.isBatchedMesh&&ae.batching===!0||k.isBatchedMesh&&ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ae.instancing===!1||!k.isInstancedMesh&&ae.instancing===!0||k.isSkinnedMesh&&ae.skinning===!1||!k.isSkinnedMesh&&ae.skinning===!0||k.isInstancedMesh&&ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ae.instancingMorph===!1&&k.morphTexture!==null||ae.envMap!==pe||V.fog===!0&&ae.fog!==he||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==me.numPlanes||ae.numIntersection!==me.numIntersection)||ae.vertexAlphas!==qe||ae.vertexTangents!==Ke||ae.morphTargets!==Oe||ae.morphNormals!==Q||ae.morphColors!==re||ae.toneMapping!==fe||ae.morphTargetsCount!==Me)&&(Ne=!0):(Ne=!0,ae.__version=V.version);let et=ae.currentProgram;Ne===!0&&(et=st(V,z,k));let qt=!1,At=!1,Vt=!1;const yt=et.getUniforms(),gn=ae.uniforms;if(Qe.useProgram(et.program)&&(qt=!0,At=!0,Vt=!0),V.id!==L&&(L=V.id,At=!0),qt||Y!==E){pt.reverseDepthBuffer?(Re.copy(E.projectionMatrix),jy(Re),Yy(Re),yt.setValue(U,"projectionMatrix",Re)):yt.setValue(U,"projectionMatrix",E.projectionMatrix),yt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Gt=yt.map.cameraPosition;Gt!==void 0&&Gt.setValue(U,nt.setFromMatrixPosition(E.matrixWorld)),pt.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,At=!0,Vt=!0)}if(k.isSkinnedMesh){yt.setOptional(U,k,"bindMatrix"),yt.setOptional(U,k,"bindMatrixInverse");const Gt=k.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),yt.setValue(U,"boneTexture",Gt.boneTexture,R))}k.isBatchedMesh&&(yt.setOptional(U,k,"batchingTexture"),yt.setValue(U,"batchingTexture",k._matricesTexture,R),yt.setOptional(U,k,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",k._indirectTexture,R),yt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",k._colorsTexture,R));const Hr=G.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&tt.update(k,G,et),(At||ae.receiveShadow!==k.receiveShadow)&&(ae.receiveShadow=k.receiveShadow,yt.setValue(U,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=pe,gn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(gn.envMapIntensity.value=z.environmentIntensity),At&&(yt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ae.needsLights&&kr(gn,Vt),he&&V.fog===!0&&Ae.refreshFogUniforms(gn,he),Ae.refreshMaterialUniforms(gn,V,oe,j,m.state.transmissionRenderTarget[E.id]),Bl.upload(U,Vn(ae),gn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bl.upload(U,Vn(ae),gn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(U,"center",k.center),yt.setValue(U,"modelViewMatrix",k.modelViewMatrix),yt.setValue(U,"normalMatrix",k.normalMatrix),yt.setValue(U,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Gt=V.uniformsGroups;for(let Oc=0,c_=Gt.length;Oc<c_;Oc++){const Hh=Gt[Oc];B.update(Hh,et),B.bind(Hh,et)}}return et}function kr(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Gn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,z,G){Ye.get(E.texture).__webglTexture=z,Ye.get(E.depthTexture).__webglTexture=G;const V=Ye.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const G=Ye.get(E);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,G=0){T=E,D=z,A=G;let V=!0,k=null,he=!1,Se=!1;if(E){const pe=Ye.get(E);if(pe.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(pe.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(pe.__hasExternalTextures)R.rebindTextures(E,Ye.get(E.texture).__webglTexture,Ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&Ye.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Se=!0);const Ke=Ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[z])?k=Ke[z][G]:k=Ke[z],he=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?k=Ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[G]:k=Ke,S.copy(E.viewport),w.copy(E.scissor),X=E.scissorTest}else S.copy(ne).multiplyScalar(oe).floor(),w.copy(xe).multiplyScalar(oe).floor(),X=He;if(Qe.bindFramebuffer(U.FRAMEBUFFER,k)&&V&&Qe.drawBuffers(E,k),Qe.viewport(S),Qe.scissor(w),Qe.setScissorTest(X),he){const pe=Ye.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe.__webglTexture,G)}else if(Se){const pe=Ye.get(E.texture),qe=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.__webglTexture,G||0,qe)}L=-1},this.readRenderTargetPixels=function(E,z,G,V,k,he,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){Qe.bindFramebuffer(U.FRAMEBUFFER,Fe);try{const pe=E.texture,qe=pe.format,Ke=pe.type;if(!pt.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-V&&G>=0&&G<=E.height-k&&U.readPixels(z,G,V,k,it.convert(qe),it.convert(Ke),he)}finally{const pe=T!==null?Ye.get(T).__webglFramebuffer:null;Qe.bindFramebuffer(U.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,z,G,V,k,he,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){const pe=E.texture,qe=pe.format,Ke=pe.type;if(!pt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-V&&G>=0&&G<=E.height-k){Qe.bindFramebuffer(U.FRAMEBUFFER,Fe);const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(z,G,V,k,it.convert(qe),it.convert(Ke),0);const Q=T!==null?Ye.get(T).__webglFramebuffer:null;Qe.bindFramebuffer(U.FRAMEBUFFER,Q);const re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xy(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(Oe),U.deleteSync(re),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,G=0){E.isTexture!==!0&&(Ol("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),k=Math.floor(E.image.width*V),he=Math.floor(E.image.height*V),Se=z!==null?z.x:0,Fe=z!==null?z.y:0;R.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Se,Fe,k,he),Qe.unbindTexture()},this.copyTextureToTexture=function(E,z,G=null,V=null,k=0){E.isTexture!==!0&&(Ol("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],z=arguments[2],k=arguments[3]||0,G=null);let he,Se,Fe,pe,qe,Ke;G!==null?(he=G.max.x-G.min.x,Se=G.max.y-G.min.y,Fe=G.min.x,pe=G.min.y):(he=E.image.width,Se=E.image.height,Fe=0,pe=0),V!==null?(qe=V.x,Ke=V.y):(qe=0,Ke=0);const Oe=it.convert(z.format),Q=it.convert(z.type);R.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const re=U.getParameter(U.UNPACK_ROW_LENGTH),fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ce=U.getParameter(U.UNPACK_SKIP_PIXELS),Me=U.getParameter(U.UNPACK_SKIP_ROWS),ae=U.getParameter(U.UNPACK_SKIP_IMAGES),We=E.isCompressedTexture?E.mipmaps[k]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,We.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,pe),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,qe,Ke,he,Se,Oe,Q,We.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,qe,Ke,We.width,We.height,Oe,We.data):U.texSubImage2D(U.TEXTURE_2D,k,qe,Ke,he,Se,Oe,Q,We),U.pixelStorei(U.UNPACK_ROW_LENGTH,re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Me),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ae),k===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,G=null,V=null,k=0){E.isTexture!==!0&&(Ol("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],z=arguments[3],k=arguments[4]||0);let he,Se,Fe,pe,qe,Ke,Oe,Q,re;const fe=E.isCompressedTexture?E.mipmaps[k]:E.image;G!==null?(he=G.max.x-G.min.x,Se=G.max.y-G.min.y,Fe=G.max.z-G.min.z,pe=G.min.x,qe=G.min.y,Ke=G.min.z):(he=fe.width,Se=fe.height,Fe=fe.depth,pe=0,qe=0,Ke=0),V!==null?(Oe=V.x,Q=V.y,re=V.z):(Oe=0,Q=0,re=0);const Ce=it.convert(z.format),Me=it.convert(z.type);let ae;if(z.isData3DTexture)R.setTexture3D(z,0),ae=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),ae=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const We=U.getParameter(U.UNPACK_ROW_LENGTH),Ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),et=U.getParameter(U.UNPACK_SKIP_PIXELS),qt=U.getParameter(U.UNPACK_SKIP_ROWS),At=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ae,k,Oe,Q,re,he,Se,Fe,Ce,Me,fe.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ae,k,Oe,Q,re,he,Se,Fe,Ce,fe.data):U.texSubImage3D(ae,k,Oe,Q,re,he,Se,Fe,Ce,Me,fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,We),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,et),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,At),k===0&&z.generateMipmaps&&U.generateMipmap(ae),Qe.unbindTexture()},this.initRenderTarget=function(E){Ye.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Qe.unbindTexture()},this.resetState=function(){D=0,A=0,T=null,Qe.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===bh?"display-p3":"srgb",n.unpackColorSpace=wt.workingColorSpace===Ic?"display-p3":"srgb"}}class rT extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Nh extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new I,mc=new I,$m=new Ut,Oo=new Dh,pl=new ba,zu=new I,Km=new I;class sT extends ln{constructor(e=new hi,n=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)pc.fromBufferAttribute(n,r-1),mc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;$m.copy(r).invert(),Oo.copy(e.ray).applyMatrix4($m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),_=u.getX(x+1),v=ml(this,e,Oo,l,f,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=ml(this,e,Oo,l,x,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=ml(this,e,Oo,l,x,x+1);f&&n.push(f)}if(this.isLineLoop){const x=ml(this,e,Oo,l,g-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ml(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(pc.fromBufferAttribute(o,r),mc.fromBufferAttribute(o,s),n.distanceSqToSegment(pc,mc,zu,Km)>i)return;zu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(zu);if(!(l<e.near||l>e.far))return{distance:l,point:Km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Zm=new I,Jm=new I;class e_ extends sT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zm.fromBufferAttribute(n,r),Jm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Jm);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class or{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new $e:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new Ut;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(fn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(fn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class t_ extends or{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new $e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oT extends t_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const gl=new I,ku=new Fh,Hu=new Fh,Vu=new Fh;class aT extends or{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(gl.subVectors(r[0],r[1]).add(r[0]),c=gl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=gl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ku.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),Hu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),Vu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Hu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Vu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ku.calc(l),Hu.calc(l),Vu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function lT(t,e){const n=1-t;return n*n*e}function cT(t,e){return 2*(1-t)*t*e}function uT(t,e){return t*t*e}function ta(t,e,n,i){return lT(t,e)+cT(t,n)+uT(t,i)}function fT(t,e){const n=1-t;return n*n*n*e}function dT(t,e){const n=1-t;return 3*n*n*t*e}function hT(t,e){return 3*(1-t)*t*t*e}function pT(t,e){return t*t*t*e}function na(t,e,n,i,r){return fT(t,e)+dT(t,n)+hT(t,i)+pT(t,r)}class mT extends or{constructor(e=new $e,n=new $e,i=new $e,r=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new $e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gT extends or{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y),na(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vT extends or{constructor(e=new $e,n=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new $e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new $e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _T extends or{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xT extends or{constructor(e=new $e,n=new $e,i=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends or{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y),ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yT extends or{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new $e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Qm(a,l.x,c.x,u.x,d.x),Qm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new $e().fromArray(r))}return this}}var ST=Object.freeze({__proto__:null,ArcCurve:oT,CatmullRomCurve3:aT,CubicBezierCurve:mT,CubicBezierCurve3:gT,EllipseCurve:t_,LineCurve:vT,LineCurve3:_T,QuadraticBezierCurve:xT,QuadraticBezierCurve3:Oh,SplineCurve:yT});class Lr extends hi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const x=[],m=i/2;let f=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(p,2));function _(){const y=new I,D=new I;let A=0;const T=(n-e)/i;for(let L=0;L<=s;L++){const Y=[],S=L/s,w=S*(n-e)+e;for(let X=0;X<=r;X++){const W=X/r,K=W*l+a,te=Math.sin(K),j=Math.cos(K);D.x=w*te,D.y=-S*i+m,D.z=w*j,d.push(D.x,D.y,D.z),y.set(te,T,j).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-S),Y.push(g++)}x.push(Y)}for(let L=0;L<r;L++)for(let Y=0;Y<s;Y++){const S=x[Y][L],w=x[Y+1][L],X=x[Y+1][L+1],W=x[Y][L+1];e>0&&(u.push(S,w,W),A+=3),n>0&&(u.push(w,X,W),A+=3)}c.addGroup(f,A,0),f+=A}function v(y){const D=g,A=new $e,T=new I;let L=0;const Y=y===!0?e:n,S=y===!0?1:-1;for(let X=1;X<=r;X++)d.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),g++;const w=g;for(let X=0;X<=r;X++){const K=X/r*l+a,te=Math.cos(K),j=Math.sin(K);T.x=Y*j,T.y=m*S,T.z=Y*te,d.push(T.x,T.y,T.z),h.push(0,S,0),A.x=te*.5+.5,A.y=j*.5*S+.5,p.push(A.x,A.y),g++}for(let X=0;X<r;X++){const W=D+X,K=w+X;y===!0?u.push(K,K+1,W):u.push(K+1,K,W),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const vl=new I,_l=new I,Gu=new I,xl=new ii;class Bh extends hi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(eo*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=xl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),xl.getNormal(Gu),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,y=d[_],D=d[v],A=xl[u[_]],T=xl[u[v]],L=`${y}_${D}`,Y=`${D}_${y}`;Y in h&&h[Y]?(Gu.dot(h[Y].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),h[Y]=null):L in h||(h[L]={index0:c[_],index1:c[v],normal:Gu.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:m}=h[g];vl.fromBufferAttribute(a,x),_l.fromBufferAttribute(a,m),p.push(vl.x,vl.y,vl.z),p.push(_l.x,_l.y,_l.z)}this.setAttribute("position",new en(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class rr extends hi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,h=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let D=0;D<=n;D++){const A=D/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+y,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=u[f][_+1],y=u[f][_],D=u[f+1][_],A=u[f+1][_+1];(f!==0||o>0)&&p.push(v,y,A),(f!==i-1||l<Math.PI)&&p.push(y,D,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zh extends hi{constructor(e=new Oh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new $e;let u=new I;const d=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(p,2));function x(){for(let v=0;v<n;v++)m(v);m(s===!1?n:0),_(),f()}function m(v){u=e.getPointAt(v/n,u);const y=o.normals[v],D=o.binormals[v];for(let A=0;A<=r;A++){const T=A/r*Math.PI*2,L=Math.sin(T),Y=-Math.cos(T);l.x=Y*y.x+L*D.x,l.y=Y*y.y+L*D.y,l.z=Y*y.z+L*D.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const D=(r+1)*(v-1)+(y-1),A=(r+1)*v+(y-1),T=(r+1)*v+y,L=(r+1)*(v-1)+y;g.push(D,A,L),g.push(A,T,L)}}function _(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zh(new ST[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class n_ extends So{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class MT extends i_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Wu=new Ut,e0=new I,t0=new I;class ET{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;e0.setFromMatrixPosition(e.matrixWorld),n.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(t0),n.updateMatrixWorld(),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wT extends ET{constructor(){super(new qv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends i_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new wT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const i0=new Ut;class TT{constructor(e,n,i=0,r=1/0){this.ray=new Dh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return i0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(i0),this}intersectObject(e,n=!0,i=[]){return Ad(e,this,i,n),i.sort(r0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ad(e[r],this,i,n);return i.sort(r0),i}}function r0(t,e){return t.distance-e.distance}function Ad(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Ad(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);const wn={x:72,z:56};function r_(t,e){wn.x=t,wn.z=e}function Yn(t,e,n){return new I(t-wn.x,n,e-wn.z)}const _t={scene:null,groupReg:{},pickables:[],wallsFade:[],flows:[],floorMeshes:{b1:[],f1:[],f2:[],roof:[]},slabs:[],currentFloor:null};function s_(t){_t.scene=t,_t.groupReg={},_t.pickables=[],_t.wallsFade=[],_t.flows=[],_t.floorMeshes={b1:[],f1:[],f2:[],roof:[]},_t.slabs=[],_t.currentFloor=null}function ri(t){_t.currentFloor=t}function di(t){_t.currentFloor&&_t.floorMeshes[_t.currentFloor]&&(t.userData.floor=_t.currentFloor,_t.floorMeshes[_t.currentFloor].push(t))}function s0(t){di(t)}function de(t,e){if(t&&_t.groupReg[t])return _t.groupReg[t];const n=new Wo;return n.userData={term:t||null,cat:e||null},_t.scene.add(n),t&&(_t.groupReg[t]=n),n}function AT(t){const e=new Ze(t);return e.multiplyScalar(.86),e}function on(t,e){const n=new n_({color:new Ze(t)});return e!==void 0&&(n.transparent=!0,n.opacity=e),n.userData={baseOp:e===void 0?1:e},n}function kh(t,e,n,i){const r=new e_(new Bh(e),new Nh({color:AT(i),transparent:!0,opacity:.55}));return r.material.userData={baseOp:.55},r.position.copy(n.position),r.rotation.copy(n.rotation),r.userData.isEdge=!0,t.add(r),di(r),r}function b(t,e,n,i,r,s,o,a,l){l=l||{};const c=new bi(r,o,s),u=new Mt(c,on(a,l.op));return u.position.set(e+r/2-wn.x,i+o/2,n+s/2-wn.z),l.ry&&(u.rotation.y=l.ry),t.add(u),_t.pickables.push(u),di(u),l.noedge||kh(t,c,u,l.edge||a),u}function ke(t,e,n,i,r,s,o,a){const l=new Nc({color:new Ze(o),side:Mi,transparent:a!==void 0,opacity:a===void 0?1:a});l.userData={baseOp:a===void 0?1:a};const c=new Mt(new Mo(r,s),l);return c.rotation.x=-Math.PI/2,c.position.set(e+r/2-wn.x,i,n+s/2-wn.z),c.userData.floorTop=!0,t.add(c),di(c),c}function o_(t,e,n,i,r,s,o){const a=new ir({uniforms:{uColor:{value:new Ze(o)},uAspect:{value:r/s}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uAspect;varying vec2 vUv;void main(){vec2 p=(vUv-0.5)*vec2(uAspect,1.0);float radius=0.045;vec2 q=abs(p)-(vec2(uAspect*0.5,0.5)-vec2(radius));float sd=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;float inset=max(0.0,-sd);float edgeFade=smoothstep(0.0,0.10,inset);gl_FragColor=vec4(uColor,edgeFade*0.54);}",transparent:!0,depthWrite:!1,side:Mi});a.userData={baseOp:1};const l=new Mt(new Mo(r,s),a);return l.rotation.x=-Math.PI/2,l.position.set(e+r/2-wn.x,i,n+s/2-wn.z),l.renderOrder=-10,l.userData.floorTop=!0,l.userData.groundSurface=!0,t.add(l),l}function Xe(t,e,n,i,r,s,o,a){a=a||{};const l=new Lr(a.rTop!==void 0?a.rTop:r,r,s,a.seg||18),c=new Mt(l,on(o,a.op));return c.position.set(e-wn.x,i+s/2,n-wn.z),t.add(c),_t.pickables.push(c),di(c),c}function Ft(t,e,n,i,r,s){s=s||{};const o=Yn(e[0],e[1],e[2]),a=Yn(n[0],n[1],n[2]),l=new I().subVectors(a,o),c=l.length(),u=new Lr(i,i,c,s.seg||10),d=new Mt(u,on(r,s.op));return d.position.copy(o).add(a).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new I(0,1,0),l.normalize()),t.add(d),s.pick!==!1&&_t.pickables.push(d),di(d),d}function CT(t){const e=(t||"").toUpperCase();return e==="#E2793B"||e==="#EF9D76"?"heat":e==="#0FA396"||e==="#57C7BD"?"tcs":e==="#EBB410"||e==="#D9A312"||e==="#F0C744"?"power":e==="#9CC6E4"?"condensate":e==="#3E9CD6"||e==="#42AEE8"?"chilled":null}function RT(t){return t==="condensate"?["#8FC8E8","#BCE0F2"]:t==="chilled"?["#5FB1E8","#93D2F2"]:t==="tcs"?["#57C7BD","#F0A876"]:t==="heat"?["#F5A86B","#E8875C"]:null}function o0(t){const e={h:0,s:0,l:0};return t.getHSL(e),t.setHSL(e.h,Math.min(1,e.s*1.08+.02),Math.max(.3,e.l*.96)),t}function bT(t,e,n,i,r){const s=t.geometry.attributes.position,o=s.count,a=new Float32Array(o*3);t.geometry.computeBoundingBox();const l=t.geometry.boundingBox.min.y,c=t.geometry.boundingBox.max.y,u=Math.max(.001,c-l),d=new Ze(e),h=new Ze(n),p=new Ze;for(let g=0;g<o;g++){const x=(s.getY(g)-l)/u,m=i+(r-i)*x;p.copy(d).lerp(h,Math.max(0,Math.min(1,m))),a[g*3]=p.r,a[g*3+1]=p.g,a[g*3+2]=p.b}t.geometry.setAttribute("color",new Ci(a,3)),t.material.vertexColors=!0,t.material.color.set(16777215),t.material.userData.flowGradient=!0,t.material.needsUpdate=!0}function rt(t,e,n,i,r){i=i||.32;const s=[],o=[],a=CT(n);for(let p=0;p<e.length;p++)s.push(Yn(e[p][0],e[p][1],e[p][2]));const l=RT(a),c=Math.max(1,e.length-1);for(let p=0;p<e.length-1;p++){const g=Ft(t,e[p],e[p+1],i,n,{seg:10});l?bT(g,l[0],l[1],p/c,(p+1)/c):a&&o0(g.material.color),g.userData.flowPart=!0,o.push(g)}for(let p=1;p<e.length-1;p++){const g=l?new Ze(l[0]).lerp(new Ze(l[1]),p/c):new Ze(n);a&&!l&&o0(g);const x=new Mt(new rr(i*1.12,10,10),on("#ffffff"));x.material.color.copy(g),x.position.copy(s[p]),x.userData.flowPart=!0,t.add(x),di(x),o.push(x)}if(!a)return;const u=[0];let d=0;for(let p=1;p<s.length;p++)d+=s[p].distanceTo(s[p-1]),u.push(d);const h=[];if(r!==!1||a==="tcs"){const p=Math.max(4,Math.round(d/12)),g=[1,.62,.34,.14];for(let x=0;x<p;x++)for(let m=0;m<g.length;m++){const f=g[m],_=new n_({color:new Ze(n),emissive:new Ze(n),emissiveIntensity:.55,transparent:!0,opacity:f,depthWrite:!1,depthTest:!0});_.userData={baseOp:f,flowBaseColor:new Ze(n)};const v=Math.max(.2,i*(.92-m*.08)),y=new Mt(new rr(v,10,10),_);y.renderOrder=30,y.userData.flowPart=!0,y.userData.flowParticle=!0,y.userData.flowU=x/p-m*.0085,t.add(y),di(y),h.push(y)}}_t.flows.push({vs:s,lens:u,tot:d,dots:h,parts:o,key:a,off:Math.random(),enabled:!0})}function bn(t,e,n,i,r,s){Xe(t,e,n,i,r+.2,.34,s||"#A39E90",{seg:20}),Xe(t,e,n,i+.17,r*.92,.17,"#F3F4F6",{seg:20});const o=b(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});o.rotation.y=.5;const a=b(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});a.rotation.y=-1.05,Xe(t,e,n,i+.28,.23,.31,"#66788C",{seg:10})}function ai(t,e,n,i,r,s){const o=[new Mt(new Lr(r+.17,r+.17,.31,20),on("#7FA3C4")),new Mt(new Lr(r*.9,r*.9,.16,20),on("#F2F6FA")),new Mt(new Lr(.21,.21,.37,10),on("#5C7C9E")),new Mt(new bi(r*1.65,.2,.34),on("#5C7C9E")),new Mt(new bi(r*1.65,.2,.34),on("#5C7C9E"))];for(let a=0;a<o.length;a++){const l=o[a];l.rotation.x=Math.PI/2,l.position.copy(Yn(e,n,i)),t.add(l),di(l)}o[3].rotation.y=.6,o[4].rotation.y=-.9}function gc(t,e,n,i,r,s){s=s||"#9AA3AD",b(t,e-.34,n,i,.16,.16,r,s,{noedge:!0}),b(t,e+.18,n,i,.16,.16,r,s,{noedge:!0});for(let o=1;o<r/1.3;o++)b(t,e-.34,n,i+o*1.3,.68,.14,.14,s,{noedge:!0})}function ze(t,e,n,i,r,s,o,a,l,c){const u=de(null,null),d=c||"#EDEFF2",h=new bi(i,s,r),p=new Mt(h,on(d,l?.45:.95));p.material.depthWrite=!l,p.position.set(t+i/2-wn.x,n+s/2,e+r/2-wn.z),u.add(p),di(p);const g=l?"#DEE2E5":"#C5CBD0",x=new e_(new Bh(h),new Nh({color:new Ze(g),transparent:!0,opacity:l?.58:.78,depthTest:!0,depthWrite:!1}));return x.material.userData={baseOp:l?.58:.78},x.position.copy(p.position),x.userData.isEdge=!0,u.add(x),di(x),l||_t.wallsFade.push({m:p,e:x,n:new I(o,0,a)}),p}function Zi(t,e,n,i,r,s,o,a,l,c){const u=c===void 0?.55:c,d=de(null,null),h=new bi(i,s,r),p=new Mt(h,on(a||"#D3D8DC",u));p.material.depthWrite=!1,p.position.set(t+i/2-wn.x,n-s/2,e+r/2-wn.z),d.add(p),di(p);const g=kh(d,h,p,"#969EA6"),x=ke(d,t,e,n+.03,i,r,l||"#E8EAEC",Math.min(.6,u));return _t.slabs.push({m:p,e:g,top:x,zTop:n,floor:o,baseOp:u}),p}const se={slab:"#EDEFF2",roof:"#EEF0F3",groundTop:"#F2F4F6",slabTop:"#F5F6F8",roofTop:"#F5F6F8",cream:"#F7F2E7",cream2:"#F0E8D6",rackBody:"#6B3B52",rackDoor:"#8A4E6C",tray:"#A9D98B",blue:"#A4C9F2",blueD:"#79A9E6",cdu:"#79C0F2",teal:"#8FD9CB",yel:"#FFD34D",yelD:"#F0B429",purp:"#C9BCF2",gray:"#DDE3E8",steel:"#CFD9E2",wood:"#D9B98F",rose:"#EFC0B4",zoneElec:"#FBE9B8",zoneMech:"#CFE2F5",zoneHall:"#DDE1F8",zoneCrah:"#F7DEEA",zoneOffice:"#F3EDDA",zoneMeet:"#D8F0EC",zoneCore:"#EAEDF0"},_e={x0:0,x1:105.3,y0:0,y1:38.6},we={x0:4.2,x1:63.9,y0:54,y1:104},li={f1:13.5,f2:27,roof:40.5},je=8.7,Nt=13.5;function PT(t){return s_(t),r_(72,56),DT(),LT(),UT(),IT(),NT(),FT(),_t}function DT(){ri(null);const t="#E9E2D2",e=de(null,null);b(e,-14,-10,-1.2,152,126,1.2,se.slab,{edge:"#969EA6"}),o_(e,-32,-26,-1.15,190,160,se.groundTop),ke(e,-14,-10,.04,152,126,"#E2E5E9");function n(u,d,h,p,g,x){const m=ze(u,d,-1,h,p,Nt+1,g,x,!1,t);m.userData.terrain=!0;const f=ke(e,u,d,Nt+.02,h,p,se.slabTop);f.userData.terrain=!0}n(-14,-10,152,8.5,0,-1),n(-14,-1.5,12.5,41.6,-1,0),n(106.8,-1.5,31.2,41.6,1,0),n(-14,40.1,45,12.4,0,1),n(39,40.1,99,12.4,0,1),n(-14,52.5,3,53,-1,0),n(64.4,52.5,73.6,53,.7,.7),n(-14,105.5,152,10.5,0,1);const i=de(null,null);function r(u,d,h,p,g,x){ke(i,u-.3,d-.3,Nt+.05,h*p+.6,g+.6,x);for(let m=0;m<=h;m++)b(i,u+m*p-.06,d,Nt,.12,g,.08,"#FFFFFF",{noedge:!0});b(i,u,d+(g-.12),Nt,h*p,.12,.08,"#FFFFFF",{noedge:!0})}function s(u,d,h,p,g,x){ke(i,u-.3,d-.3,Nt+.05,g+.6,h*p+.6,x);for(let m=0;m<=h;m++)b(i,u,d+m*p-.06,Nt,g,.12,.08,"#FFFFFF",{noedge:!0});b(i,u+(g-.12),d,Nt,.12,h*p,.08,"#FFFFFF",{noedge:!0})}const o="#E4E6E9";s(-12,14,6,2.6,5,o),r(3,41.5,4,2.6,5,o),r(16.5,41.5,5,2.6,5,o),r(2,47.6,11,2.6,4.6,o),r(41,41.5,5,3.4,5,"#AFCBEA");for(let u=0;u<5;u++)b(e,42.2+u*3.4,43.6,Nt+.02,1,1,.09,"#3F6FB5",{noedge:!0});s(108.2,5,8,3,4.6,"#CDE8D2"),ke(i,114.5,.5,Nt+.04,21.5,37.6,"#E1E4E7");for(const u of[115.5,127]){for(let d=0;d<=14;d++)b(i,u,1.2+d*2.5,Nt,9.6,.12,.08,"#FFFFFF",{noedge:!0});b(i,u+4.75,1.2,Nt,.12,35,.08,"#FFFFFF",{noedge:!0})}ke(i,66,52.5,Nt+.05,10,63.5,"#DDE0E4"),ke(i,39.5,46.8,Nt+.05,99,5.2,"#DDE0E4");for(let u=0;u<6;u++)b(i,66.8+u*1.5,88,Nt,1,4.6,.09,"#FFFFFF",{noedge:!0});ke(i,64.4,70,Nt+.06,1.8,18,"#EFE9DC"),ke(i,76.5,56,Nt+.06,56,46,"#DCE8D8"),ke(i,80,62,Nt+.08,3,36,"#EFE9DC"),ke(i,80,76,Nt+.08,46,3,"#EFE9DC");function a(u,d,h){h=h||1,Xe(i,u,d,Nt,.22*h,1.5*h,"#B99B72",{seg:8});const p=new Mt(new rr(1.5*h,10,8),on("#A8CFA0"));p.position.copy(Yn(u,d,Nt+2.3*h)),i.add(p)}a(88,60),a(98,66,1.2),a(110,62),a(120,72,1.1),a(92,86,1.2),a(104,92),a(116,88,1.3),a(126,98),a(84,100,1.1),a(70,110),a(96,108,1.2),a(124,52),i.traverse(u=>{u.userData.siteDetail=!0}),ri("b1");const l=de(null,null);function c(u,d,h,p,g,x){const m="#D8DCE0";b(l,u,d,0,.6,p,4.8,m,{noedge:!0}),b(l,u+h-.6,d,0,.6,p,4.8,m,{noedge:!0}),g&&b(l,u,d+p-.6,0,h,.6,4.8,m,{noedge:!0}),x&&b(l,u+h-.6,d,0,.6,p,4.8,m,{noedge:!0});const f=b(l,u,d,4.8,h,p,.5,"#E4E7EA",{op:.55});f.material.depthWrite=!1,ke(l,u,d,.1,h,p,"#D9DDE2")}c(32.5,_e.y1,5,we.y0-_e.y1,!1,!1),c(we.x1,58,12,4.5,!0,!0),ri(null)}function LT(){ri("b1"),function(){const e=de(null,null);ke(e,7,3,.08,41,24,se.zoneElec),ke(e,48,3,.08,18,13,se.zoneElec),ke(e,48,18,.08,12,10,se.zoneElec),ke(e,70,3,.08,28,13,se.zoneMech),ke(e,70,18,.08,28,15,se.zoneMech),ke(e,0,0,.08,7,38.6,se.zoneCore),ke(e,98.3,0,.08,7,38.6,se.zoneCore)}(),ze(_e.x0,_e.y0,0,_e.x1-_e.x0,1.1,je,0,-1,!1),ze(_e.x0,_e.y1-1.1,0,_e.x1-_e.x0,1.1,je,0,1,!1),ze(_e.x0,1.1,0,1.1,_e.y1-2.2,je,-1,0,!1),ze(_e.x1-1.1,1.1,0,1.1,_e.y1-2.2,je,1,0,!1),ze(7,1.1,0,.7,36.4,je*.86,0,0,!0),ze(98.3,1.1,0,.7,36.4,je*.86,0,0,!0),ze(47.2,1.1,0,.7,28,je*.86,0,0,!0),ze(66.5,1.1,0,.7,36.4,je*.86,0,0,!0),ze(48,16.2,0,18,.7,je*.86,0,0,!0),ze(70,16.2,0,28,.7,je*.86,0,0,!0),function(){const e=de("switchgear","power");for(let n=0;n<3;n++){const i=5.5+n*7;for(let r=0;r<6;r++){const s=10+r*5.6;b(e,s,i,0,4.8,3.1,2.5,se.yel),b(e,s+.4,i+2.95,.8,4,.28,1.4,"#FFEBAF"),b(e,s+.7,i+3.1,2,1.4,.2,.34,"#4A525C",{noedge:!0}),b(e,s+2.9,i+3.1,2,1.1,.2,.34,"#E86A44",{noedge:!0})}}}(),function(){const e=de("transformer","power");for(let n=0;n<3;n++){const i=49.5+n*5.6;b(e,i,5,0,4.4,5,3.2,se.yel);for(let r=0;r<3;r++)b(e,i-.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0}),b(e,i+4.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0});for(let r=0;r<3;r++){Xe(e,i+.9+r*1.3,7.5,3.2,.28,.9,"#EDE7D8");const s=new Mt(new rr(.24,10,10),on("#E0AC2E"));s.position.copy(Yn(i+.9+r*1.3,7.5,4.3)),e.add(s),s0(s)}b(e,i+.4,11.5,0,3.6,1.6,2.2,"#F2CE6A",{noedge:!0})}}(),function(){const e=de("battery","power");for(let n=0;n<2;n++)for(let i=0;i<2;i++){const r=49+n*5.6,s=19+i*4.6;b(e,r,s,0,4.8,3.4,2.3,se.yel);for(let o=0;o<3;o++)b(e,r+.3,s+3.25,.35+o*.72,4.2,.24,.42,"#FFEBAF");b(e,r,s+3.25,2.35,4.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const e=de("chiller","cooling");function n(o,a){b(e,o,a,0,15,4.6,.8,se.steel,{noedge:!0}),Ft(e,[o+.8,a+1.4,2.2],[o+14.2,a+1.4,2.2],1.15,se.blue,{seg:16}),Ft(e,[o+.8,a+3.2,3.8],[o+14.2,a+3.2,3.8],1.15,se.blueD,{seg:16}),Xe(e,o+4.6,a+2.3,4.6,1.1,1.6,"#DCE6EF"),Xe(e,o+9.5,a+2.3,4.6,1.1,1.6,"#DCE6EF"),rt(e,[[o+4.6,a+2.3,5.7],[o+9.5,a+2.3,5.7]],"#AEC2D4",.3,!1),b(e,o+12.8,a+1,.8,1.6,.4,3.4,"#454E58")}n(71.5,4),n(71.5,10);const i=de("pumps","cooling");function r(o,a){b(i,o-1.1,a-1.1,0,2.2,2.2,.4,se.steel,{noedge:!0}),Xe(i,o,a,.4,.88,.95,"#9FBFDF"),Xe(i,o,a,1.35,.68,1.75,"#DCE6EF"),Xe(i,o,a,3.1,.76,.28,"#9FBFDF"),rt(i,[[o,a,.7],[o-1.9,a,.7]],"#9FB6CC",.32,!1)}r(90,5),r(90,8.8),r(90,12.6);const s=de("water-treatment","cooling");b(s,94,10.5,0,3.4,3,4.2,se.teal),b(s,94.4,13.4,2.6,1.5,.26,1.1,"#454E58"),Xe(s,95,6.5,0,.65,2.3,"#BFE3DC"),Xe(s,96.8,6.5,0,.65,2.3,"#BFE3DC"),rt(s,[[94.8,10.5,3.4],[95,7.5,2.6]],"#72B6A8",.22,!1)}(),function(){const e=de("tes","cooling");function n(r,s){Xe(e,r,s,0,3.4,6.8,"#E7EDF2",{seg:26});const o=new Mt(new rr(3.4,26,12,0,Math.PI*2,0,Math.PI/2),on("#DDE5EB"));o.position.copy(Yn(r,s,6.8)),e.add(o),_t.pickables.push(o),s0(o),Xe(e,r,s,2.2,3.55,.28,"#C5D3DE",{seg:26}),Xe(e,r,s,4.7,3.55,.28,"#C5D3DE",{seg:26}),gc(e,r+3.9,s,0,6.4)}n(76,25.5),n(88,25.5);const i=de(null,null);for(let r=0;r<8;r++)b(i,71+r*3.2,20,0,1.2,12,.5,"#C9D3DC",{noedge:!0})}(),function(){const e=de(null,null);ke(e,10,57,.08,30,40,se.zoneElec),ke(e,we.x0,72,.08,5,14,se.zoneMech),ke(e,40.5,60,.08,8,12,se.zoneCore),ke(e,49,57,.08,14,18,"#D9DDE2"),ke(e,49,80,.08,14,16,"#D9DDE2"),ke(e,27,we.y1-1,.08,12,5,se.zoneCore),ze(we.x0,we.y0,0,we.x1-we.x0,1.1,je,0,-1,!1),ze(we.x0,we.y1-1.1,0,we.x1-we.x0,1.1,je,0,1,!1),ze(we.x0,we.y0+1.1,0,1.1,we.y1-we.y0-2.2,je,-1,0,!1),ze(we.x1-1.1,we.y0+1.1,0,1.1,we.y1-we.y0-2.2,je,1,0,!1),ze(40,we.y0+1.1,0,.7,44,je*.86,0,0,!0),ze(9.4,we.y0+1.1,0,.7,44,je*.86,0,0,!0);const n=de("gis","power");for(let o=0;o<3;o++){const a=60+o*13;b(n,12,a,0,3.4,6.4,2.6,se.gray),Ft(n,[16.5,a+1.6,1.9],[30,a+1.6,1.9],1.05,"#D6E0EA",{seg:14}),Ft(n,[16.5,a+4.8,1.9],[30,a+4.8,1.9],1.05,"#D6E0EA",{seg:14});for(let l=0;l<3;l++)Xe(n,19+l*4,a+3.2,2.6,.75,1.7,"#CBD8E4",{seg:14}),Xe(n,19+l*4,a+3.2,4.3,.34,1.1,"#EDE7D8");b(n,31,a+.9,0,2.4,4.6,1.7,"#C2CFDA",{noedge:!0})}const i=de("fuel","power");for(let o=0;o<2;o++){const a=75+o*5;b(i,5,a-1.1,0,2.2,2.2,.4,se.steel,{noedge:!0}),Xe(i,6.1,a,.4,.8,.9,"#E8C25A"),Xe(i,6.1,a,1.3,.6,1.5,"#EBDEC0")}function r(o){ke(e,-9.5,o-1.5,.09,12.5,13,"#DFE3E7");for(let a=0;a<3;a++){const l=o+a*4;Ft(i,[-8.5,l,1.6],[1.5,l,1.6],1.35,"#EBDEC0",{seg:16}),b(i,-7.5,l-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),b(i,-.5,l-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),Xe(i,-3.5,l,2.95,.28,.5,"#CFC2A4")}}r(58),r(88),rt(i,[[-3,74,.8],[3,77,.8],[6.1,76.5,.8]],"#DCC998",.22,!1);const s=de(null,null);b(s,41.5,62,0,2.6,5.6,2.4,"#4A5560"),b(s,44.7,62,0,2.6,5.6,2.4,"#4A5560"),b(s,41.8,65.2,1.5,2,.22,.6,"#7FD8C8",{noedge:!0})}()}function UT(){ri("f1"),Zi(_e.x0,_e.y0,li.f1,_e.x1-_e.x0,_e.y1-_e.y0,1,"f1"),Zi(43,we.y0,li.f1,we.x1-43,we.y1-we.y0,1,"f1"),Zi(31.5,_e.y1,li.f1,7,we.y0-_e.y1,1,"f1");const t=li.f1;(function(){const n=de(null,null);ke(n,7,0,t+.08,91.3,4.2,se.zoneCrah),ke(n,12,6,t+.08,28,13,se.zoneElec),ke(n,42,6,t+.08,16,13,se.zoneElec),ke(n,60,6,t+.08,28,13,se.zoneElec),ke(n,.6,5,t+.08,6.4,11,se.zoneCore),ke(n,98.3,5,t+.08,6.4,11,se.zoneCore),ke(n,20,23,t+.08,14,13,se.zoneCore),ke(n,36,23,t+.08,12,10,se.zoneCore),ke(n,62,23,t+.08,32,13,se.zoneOffice),ke(n,47,70,t+.08,16,16,se.zoneOffice),ke(n,47,62,t+.08,8,7,se.zoneCore),ke(n,47,87,t+.08,13,8,se.zoneOffice)})(),ze(_e.x0,_e.y0,t,_e.x1-_e.x0,1.1,je,0,-1,!1),ze(_e.x0,_e.y1-1.1,t,_e.x1-_e.x0,1.1,je,0,1,!1),ze(_e.x0,1.1,t,1.1,_e.y1-2.2,je,-1,0,!1),ze(_e.x1-1.1,1.1,t,1.1,_e.y1-2.2,je,1,0,!1),ze(43,we.y0,t,we.x1-43,1.1,je,0,-1,!1),ze(43,we.y1-1.1,t,we.x1-43,1.1,je,0,1,!1),ze(43,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,je,-1,0,!1),ze(we.x1-1.1,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,je,1,0,!1),ze(32,_e.y1,t,.6,we.y0-_e.y1,je*.7,0,0,!0),ze(37.9,_e.y1,t,.6,we.y0-_e.y1,je*.7,0,0,!0),ze(7,4.4,t,91.3,.7,je*.86,0,0,!0),ze(10.8,4.9,t,.7,15,je*.86,0,0,!0),ze(41,4.9,t,.7,15,je*.86,0,0,!0),ze(58.8,4.9,t,.7,15,je*.86,0,0,!0),ze(12,20.8,t,82,.7,je*.86,0,0,!0),function(){const n=de("crah","cooling");for(let i=0;i<8;i++){const r=10+i*11.4;b(n,r,.8,t,6.6,2.8,je*.82,se.blue),b(n,r+.3,.95,t+je*.82,6,2.5,.55,"#8FA9C0"),ai(n,r+1.8,3.75,t+1.7,1.1),ai(n,r+4.8,3.75,t+1.7,1.1),ai(n,r+1.8,3.75,t+3.9,1.1),ai(n,r+4.8,3.75,t+3.9,1.1)}}(),function(){const n=de("ups","power");for(let i=0;i<4;i++){const r=14+i*6.4;b(n,r,7,t,5.4,3.1,2.6,se.yel),b(n,r+.5,10,t+1.9,3.4,.26,.55,"#454E58"),b(n,r+.8,10.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0});for(let s=0;s<4;s++)b(n,r+.5,10.1,t+.4+s*.34,3.4,.16,.22,"#E8C25A",{noedge:!0})}for(let i=0;i<4;i++){const r=14+i*6.4;b(n,r,14.5,t,5.4,3.1,2.6,se.yel),b(n,r+.4,17.45,t+.5,4.4,.26,1.5,"#FFEBAF")}}(),function(){const n=de("battery","power");for(let i=0;i<2;i++)for(let r=0;r<2;r++){const s=43.5+i*6.8,o=7.5+r*6.4;b(n,s,o,t,5.8,3.6,2.4,se.yel);for(let a=0;a<3;a++)b(n,s+.35,o+3.45,t+.35+a*.75,5.1,.24,.44,"#FFEBAF");b(n,s,o+3.45,t+2.45,5.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const n=de("switchgear","power");for(let i=0;i<2;i++){const r=7.5+i*7;for(let s=0;s<5;s++){const o=61.5+s*5.3;b(n,o,r,t,4.6,3.1,2.5,se.yel),b(n,o+.4,r+2.95,t+.8,3.8,.26,1.35,"#FFEBAF"),b(n,o+.6,r+3.1,t+1.95,1.3,.2,.33,"#4A525C",{noedge:!0})}}}(),function(){const n=de("mmr","it");for(let i=0;i<3;i++){b(n,1.6,6+i*3.4,t,4.2,2.6,2.5,se.purp);for(let r=0;r<4;r++)b(n,1.75,8.45+i*3.4,t+.4+r*.5,3.9,.2,.3,"#DED8F7")}for(let i=0;i<2;i++){b(n,99.4,6.5+i*3.8,t,4.2,2.8,2.5,se.purp);for(let r=0;r<3;r++)b(n,99.55,9.15+i*3.8,t+.45+r*.55,3.9,.2,.32,"#DED8F7")}}(),function(){const n=de("bms","mgmt");for(let r=0;r<3;r++){const s=b(n,66+r*7.4,24.2,t+1,6.6,.4,3.6,"#4A5560");s.rotation.y=(r-1)*.12,b(n,66.6+r*7.4,24.1,t+1.8,2.1,.22,1.4,r===0?"#7FD8C8":r===1?"#F2C94C":"#E8836A",{noedge:!0,ry:(r-1)*.12}),b(n,69.4+r*7.4,24.1,t+1.6,2.5,.22,1.9,"#8FB4D8",{noedge:!0,ry:(r-1)*.12})}const i=de(null,null);b(i,68,30,t+1.05,10,2.6,.4,se.wood),b(i,69,30.6,t,.9,1.4,2.1,se.wood,{noedge:!0}),b(i,76,30.6,t,.9,1.4,2.1,se.wood,{noedge:!0}),b(i,70.4,30.4,t+1.5,1.7,.2,1.1,"#5E7A94"),b(i,73.2,30.4,t+1.5,1.7,.2,1.1,"#5E7A94")}(),function(){const n=de(null,null);b(n,22,26,t,2.8,2.2,.4,se.wood,{noedge:!0}),b(n,22,26,t+.4,2.8,2.2,1.5,se.cream2),b(n,26,25,t,2.5,2,2.4,se.cream2),b(n,23,31,t,2.2,1.9,1.5,se.cream2),b(n,50,73,t,7.4,2.4,1.1,se.wood),b(n,50.5,79,t,4.6,1.8,.5,se.rose),b(n,50.5,79,t+.5,4.6,.6,.65,se.rose,{noedge:!0}),b(n,56.5,79,t,4.6,1.8,.5,se.rose),b(n,56.5,79.6,t+.5,4.6,.6,.65,se.rose,{noedge:!0}),b(n,50,89.5,t,7,2.6,1.05,se.wood);for(let r=0;r<3;r++)b(n,50.6+r*2.2,88.4,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),b(n,50.6+r*2.2,92.5,t,.9,.9,1.1,"#8A93A0",{noedge:!0});const i=de("fuel","power");for(const r of[58,88])ke(n,-13.6,r-2,Nt+.06,2.9,4,"#DFE3E7"),Xe(i,-12.2,r,Nt,1.05,2.8,"#EBDEC0",{seg:14}),Xe(i,-12.2,r,Nt+2.8,1.1,.22,"#CFC2A4",{seg:14})}()}function IT(){ri("f2"),Zi(_e.x0,_e.y0,li.f2,_e.x1-_e.x0,_e.y1-_e.y0,1,"f2"),Zi(we.x0,we.y0,li.f2,we.x1-we.x0,we.y1-we.y0,1,"f2"),Zi(31.5,_e.y1,li.f2,7,we.y0-_e.y1,1,"f2");const t=li.f2,e=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];(function(){const i=de(null,null);ke(i,7,0,t+.08,91.3,4.2,se.zoneCrah),ke(i,10,5,t+.08,85,16.5,se.zoneHall),ke(i,12,24,t+.08,21,10,se.zoneElec),ke(i,34,24,t+.08,17,10,se.zoneElec),ke(i,52,24,t+.08,7,10,se.zoneCore),ke(i,60,24,t+.08,17,10,se.zoneElec),ke(i,78,24,t+.08,16,10,se.zoneElec),ke(i,.6,5,t+.08,6.4,11,se.zoneCore),ke(i,98.3,5,t+.08,6.4,11,se.zoneCore),ke(i,32,_e.y1+1,t+.08,6,13,se.zoneCore),ke(i,9,57,t+.08,29,36,se.zoneMech),ke(i,we.x0,55,t+.08,5,7,se.zoneMech),ke(i,we.x0,90,t+.08,5,7,se.zoneMech),ke(i,43,55,t+.08,20,12,se.zoneOffice),ke(i,43,67,t+.08,20,21,se.zoneOffice),ke(i,43,88,t+.08,20,14,se.zoneMeet)})(),ze(_e.x0,_e.y0,t,_e.x1-_e.x0,1.1,je,0,-1,!1),ze(_e.x0,_e.y1-1.1,t,_e.x1-_e.x0,1.1,je,0,1,!1),ze(_e.x0,1.1,t,1.1,_e.y1-2.2,je,-1,0,!1),ze(_e.x1-1.1,1.1,t,1.1,_e.y1-2.2,je,1,0,!1),ze(we.x0,we.y0,t,we.x1-we.x0,1.1,je,0,-1,!1),ze(we.x0,we.y1-1.1,t,we.x1-we.x0,1.1,je,0,1,!1),ze(we.x0,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,je,-1,0,!1),ze(we.x1-1.1,we.y0+1.1,t,1.1,we.y1-we.y0-2.2,je,1,0,!1),ze(32,_e.y1,t,.6,we.y0-_e.y1,je*.7,0,0,!0),ze(37.9,_e.y1,t,.6,we.y0-_e.y1,je*.7,0,0,!0),ze(7,4.4,t,91.3,.7,je*.86,0,0,!0),ze(12,22.4,t,82,.7,je*.86,0,0,!0),ze(7,1.8,t,.7,35,je*.86,0,0,!0),ze(97.6,1.8,t,.7,35,je*.86,0,0,!0),ze(42.3,we.y0+1.1,t,.7,48,je*.86,0,0,!0),function(){const i=de("crah","cooling");for(let r=0;r<10;r++){const s=8.6+r*9.1;b(i,s,.8,t,6.4,2.8,je*.82,se.blue),b(i,s+.3,.95,t+je*.82,5.8,2.5,.55,"#8FA9C0"),ai(i,s+1.7,3.75,t+1.7,1.1),ai(i,s+4.7,3.75,t+1.7,1.1),ai(i,s+1.7,3.75,t+3.9,1.1),ai(i,s+4.7,3.75,t+3.9,1.1)}}(),function(){const i=de("gpu-rack","it");for(const o of e)for(const a of[-1,1]){const l=o+(a>0?.78:-1.93);for(let c=0;c<6;c++){const u=6+c*2.25;b(i,l,u,t,1.15,1.9,2.6,se.rackBody),b(i,a>0?l-.06:l+1.15,u+.15,t+.2,.06,1.6,2.2,se.rackDoor,{noedge:!0}),b(i,a>0?l-.04:l+1.17,u+1.55,t+2.42,.05,.16,.12,"#5FE3A8",{noedge:!0})}b(i,l+(a>0,.42),6,t+2.95,.3,6*2.25-.35,.1,se.tray,{noedge:!0})}const r=de("storage","it");for(let o=0;o<4;o++){b(r,83+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,se.purp);for(let a=0;a<4;a++)b(r,83.15+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.4+a*.55,2.3,.2,.3,"#DED8F7")}const s=de("network","it");for(let o=0;o<4;o++){b(s,90.5+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,se.purp);for(let a=0;a<3;a++)b(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.35+a*.5,2.3,.2,.22,"#7A6CC9",{noedge:!0});b(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+2.15,2.3,.2,.36,"#DED8F7")}}(),function(){const i=de("containment","cooling");for(const r of e)b(i,r-.78,5.7,t+3.1,1.56,6*2.25+.4,.12,"#CFE4F0",{op:.28}),b(i,r-.78,5.6,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24}),b(i,r-.78,5.7+6*2.25+.3,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24})}(),function(){const i=de("cdu","cooling");for(let s=0;s<5;s++){const o=20+s*12;b(i,o,22.6,t,3,2.4,2.4,se.cdu),b(i,o+.3,24.9,t+1.8,1.2,.2,.4,"#454E58"),Ft(i,[o+.8,25,t+.9],[o+.8,25.5,t+.9],.24,"#0FA396",{seg:10}),Ft(i,[o+1.8,25,t+.9],[o+1.8,25.5,t+.9],.24,"#E2793B",{seg:10})}const r=de("cold-plate","cooling");b(r,e[2]+.9,11,t+2.62,.5,.7,.5,"#0FA396")}(),function(){const i=de("ups","power");for(let a=0;a<3;a++){const l=14+a*6.2;b(i,l,25,t,5.2,3.1,2.6,se.yel),b(i,l+.5,28,t+1.9,3.2,.26,.55,"#454E58"),b(i,l+.8,28.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0})}const r=de("battery","power");for(const a of[35.5,41.7,61.5,67.7]){b(r,a,25,t,5.2,3.4,2.3,se.yel);for(let l=0;l<3;l++)b(r,a+.3,28.25,t+.35+l*.72,4.6,.24,.42,"#FFEBAF");b(r,a,28.25,t+2.35,5.2,.2,.2,"#E86A44",{noedge:!0})}const s=de("switchgear","power");for(let a=0;a<2;a++){const l=79+a*5.4;b(s,l,25,t,4.6,3.1,2.5,se.yel),b(s,l+.4,27.95,t+.8,3.8,.26,1.35,"#FFEBAF")}const o=de("pdu","power");for(let a=0;a<2;a++){const l=89.5+a*4.4;b(o,l,25,t,3.6,3,2.5,se.yel);for(let c=0;c<3;c++)b(o,l+.4,27.85,t+.5+c*.5,2.8,.18,.32,"#E8C25A",{noedge:!0});Ft(o,[l+1,27.9,t+2.2],[l+1,28.2,t+2.2],.5,"#FFEBAF",{seg:14})}}(),function(){const i=de("busway","power");for(const r of[8,16]){b(i,14,r-.55,t+5.1,66,1.1,1,se.yel);for(const s of e)b(i,s-.7,r-.7,t+4.6,1.4,1.4,.6,se.yelD),rt(i,[[s,r,t+4.7],[s,r,t+3.1]],"#EBB410",.2,!1)}}(),function(){const i=de("fire-gas","mgmt");for(let r=0;r<6;r++){const s=33+r%3*1.5,o=42+Math.floor(r/3)*2.2;Xe(i,s,o,t,.58,3.2,"#F7CE55"),Xe(i,s,o,t+3.2,.24,.5,"#A39E90")}b(i,33,47.5,t,4,2.6,2.2,"#DDE3E8")}(),function(){const i=de("generator","power");function r(a,l){b(i,a,l,t,12,5.2,.9,"#CFC2A4",{noedge:!0}),b(i,a+.3,l+.2,t+.9,2.6,4.8,5.4,"#F5C542");for(let c=0;c<4;c++)b(i,a+.15,l+.6+c*1.05,t+1.6,.18,.7,4.2,"#D9A93C",{noedge:!0});b(i,a+3.2,l+.5,t+.9,5,4.2,4.2,se.yel),Ft(i,[a+8.6,l+2.6,t+3],[a+11.4,l+2.6,t+3],1.5,"#F7CE55",{seg:16}),Xe(i,a+11.4,l+2.6,t+3,.5,.24,"#E0AC2E"),Ft(i,[a+3.7,l+.9,t+5.8],[a+7.6,l+.9,t+5.8],.55,"#AFB6BD",{seg:12}),rt(i,[[a+7.6,l+.9,t+5.8],[a+8.4,l+.9,t+5.8],[a+8.4,l+.9,t+7.2]],"#8E8B82",.3,!1),b(i,a+4.8,l+4.8,t+5.3,2,.24,1.2,"#454E58")}r(11,60),r(24,60),r(11,78),r(24,78);const s=de(null,null);for(let a=0;a<7;a++)b(s,9.3,57+a*5.4,t+1+a%2*.8,.3,4,3,"#C6CDD3",{noedge:!0});b(s,16,55.2,t,10,1.6,4.5,"#DDE3E8",{op:.85}),b(s,16,93.2,t,10,1.6,4.5,"#DDE3E8",{op:.85});const o=de("fuel","power");for(const a of[56,91])Xe(o,6.6,a+2.5,t,1.6,4.4,"#EBDEC0",{seg:16}),Xe(o,6.6,a+2.5,t+4.4,1.66,.3,"#DCC998",{seg:16}),rt(o,[[6.6,a+2.5,t+1],[10.5,a+4,t+1]],"#DCC998",.2,!1)}(),function(){const i=de(null,null);b(i,46,58,t,8,2.2,1.05,se.wood),b(i,47,58.4,t+1.1,1.6,.2,1,"#5E7A94"),b(i,50.5,58.4,t+1.1,1.6,.2,1,"#5E7A94"),b(i,47.5,61,t,1,1,1.1,"#8A93A0",{noedge:!0}),b(i,51,61,t,1,1,1.1,"#8A93A0",{noedge:!0});for(let r=0;r<3;r++)b(i,46,69+r*6.4,t,8,2.2,1.05,se.wood),b(i,47,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),b(i,50.5,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),b(i,47.5,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0}),b(i,51,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0});ze(43,87.6,t,20,.5,je*.7,0,0,!0),ze(53,88,t,.5,14,je*.7,0,0,!0);for(const r of[45,55.5]){b(i,r,92,t,6.4,2.8,1.05,se.wood);for(let s=0;s<3;s++)b(i,r+.5+s*2.1,90.8,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),b(i,r+.5+s*2.1,95.2,t,.9,.9,1.1,"#8A93A0",{noedge:!0})}}()}function NT(){ri("roof"),Zi(_e.x0,_e.y0,li.roof,_e.x1-_e.x0,_e.y1-_e.y0,1,"roof",se.roof,se.roofTop,.8),Zi(we.x0,we.y0,li.roof,we.x1-we.x0,we.y1-we.y0,1,"roof",se.roof,se.roofTop,.62),Zi(31.5,_e.y1,li.roof,7,we.y0-_e.y1,1,"roof",se.roof,se.roofTop,.62);const t=li.roof;(function(){const n=de(null,null);b(n,_e.x0,_e.y0,t,_e.x1-_e.x0,.5,1.1,se.roof,{noedge:!0}),b(n,_e.x0,_e.y1-.5,t,_e.x1-_e.x0,.5,1.1,se.roof,{noedge:!0}),b(n,_e.x0,_e.y0,t,.5,_e.y1-_e.y0,1.1,se.roof,{noedge:!0}),b(n,_e.x1-.5,_e.y0,t,.5,_e.y1-_e.y0,1.1,se.roof,{noedge:!0})})(),function(){const n=de("cooling-tower","cooling");function i(r,s){b(n,r,s,t,10,8,1.4,"#EAE2D2"),b(n,r+.3,s+.3,t+1.4,9.4,7.4,4.2,se.cream2);for(let o=0;o<4;o++)b(n,r+.6,s+7.5,t+1.8+o*.85,8.8,.22,.34,"#DCCFB4",{noedge:!0}),b(n,r+9.5,s+.6,t+1.8+o*.85,.22,6.8,.34,"#D4C7AC",{noedge:!0});b(n,r,s,t+5.6,10,8,.7,se.cream),bn(n,r+2.7,s+2.4,t+6.3,1.4),bn(n,r+7.3,s+2.4,t+6.3,1.4),bn(n,r+2.7,s+5.7,t+6.3,1.4),bn(n,r+7.3,s+5.7,t+6.3,1.4),gc(n,r+10.3,s+4,t,6.2)}i(12,7),i(26,7),i(40,7)}(),function(){const n=de("dry-cooler","cooling");function i(r,s){b(n,r,s,t,7.4,1.5,.85,se.steel,{noedge:!0});const o=b(n,r+.55,s+.4,t+.55,6.3,.4,3.7,"#F2D9B8");o.rotation.x=-.42;const a=b(n,r+.55,s+4.85,t+.55,6.3,.4,3.7,"#F2D9B8");a.rotation.x=.42,b(n,r+.3,s+.3,t+3.4,6.8,4.9,.42,se.cream2),bn(n,r+2,s+2.7,t+3.85,1.2,"#B08A62"),bn(n,r+5.4,s+2.7,t+3.85,1.2,"#B08A62")}i(62,7),i(72,7),i(82,7)}(),function(){const n=de(null,null);b(n,62,22,t,7,5.4,2.6,se.cream2),bn(n,65.5,24.7,t+2.6,1.4),b(n,74,22.5,t,6,4.6,2,se.cream2);for(let i=0;i<3;i++)b(n,74.3,27,t+.4+i*.55,5.4,.2,.22,"#D4C7AC",{noedge:!0});for(const i of[62,80])b(n,16,i,t,4,4,1,se.cream2),bn(n,18,i+2,t+1,1.3)}()}function FT(){ri("b1"),function(){const e=de("gis","power");rt(e,[[24,66,1.8],[35,58,1.8],[35,40,1.8],[35,24,2.2],[28,14,2.6]],"#EBB410",.34)}(),function(){const e=de("switchgear","power");rt(e,[[26,14,2.6],[44,14,2.6],[51,10,3]],"#EBB410",.3,!1),rt(e,[[56,10,3],[76,30,3],[101.5,30,3],[101.5,30,29.5],[93,27,29.5]],"#EBB410",.34),rt(e,[[24,8,2.8],[3.6,8,2.8],[3.6,8,16.1],[15,8.5,16.1]],"#EBB410",.3)}(),function(){const e=de("fws","cooling");rt(e,[[17,12,42.1],[17,33,42.1],[96,33,42.1],[96,33,3.6],[86,12,3.9]],"#9CC6E4",.42)}(),function(){const e=de("fws","cooling");rt(e,[[80,6,2.4],[60,2.5,2.4],[9.5,2.5,2.4],[9.5,2.5,30.9],[94,2.5,30.9]],"#3E9CD6",.42),ri("f1"),rt(e,[[9.5,2.5,17.4],[94,2.5,17.4]],"#3E9CD6",.3);for(const n of[16,39,62,85])rt(e,[[n,2.5,17.4],[n,2.5,15.7]],"#3E9CD6",.2,!1);ri("f2");for(const n of[16,39,62,85])rt(e,[[n,2.5,30.9],[n,2.5,29.2]],"#3E9CD6",.2,!1)}(),ri("f2"),function(){const e=de("fws","cooling");rt(e,[[21,25.6,29.7],[60,25.6,29.7],[96.5,25.6,29.7],[96.5,25.6,42.1],[96.5,9,42.1],[90,9,42.1]],"#E2793B",.42)}(),function(){const e=de("tcs","cooling"),n=de("manifold","cooling"),i=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];for(let r=0;r<5;r++){const s=21.5+r*12;rt(e,[[s,22.6,29.4],[s,20.8,30.5]],"#0FA396",.26,!1)}rt(e,[[16,20.8,30.5],[76.8,20.8,30.5]],"#0FA396",.28);for(const r of i)rt(n,[[r,20.8,30.5],[r,6,30.5]],"#0FA396",.22,!1)}(),function(){const e=de("busway","power");rt(e,[[80,24.5,29.8],[80,16,32.6],[16,16,32.6]],"#EBB410",.28),rt(e,[[80,24.5,29.8],[80,8,32.6],[16,8,32.6]],"#EBB410",.28)}(),function(){const e=de("generator","power");rt(e,[[23,60,33.6],[35,52,33.6],[35,40,33.6],[80,40,33.6],[101.5,33,33.6],[101.5,30,29.8]],"#EBB410",.3)}(),ri(null)}const a_=[["cooling-tower",[31,11,47.7]],["dry-cooler",[75.5,9.5,45]],["crah",[50,2.2,32.6]],["gpu-rack",[24.4,12,30.4]],["containment",[46.4,12,30.4]],["cold-plate",[32.4,11.3,29.9]],["manifold",[23.6,8,30.7]],["tcs",[46,20.8,30.6]],["cdu",[45.5,23.8,29.4]],["busway",[47,8,32.7]],["pdu",[91.5,26.5,29.6]],["storage",[85.5,9,29.8]],["network",[93,9,29.8]],["mmr",[3.8,9,16.1]],["ups",[24,8.6,16.3]],["battery",[50,10.6,16.1]],["switchgear",[26,12,2.6]],["transformer",[55,7.5,3.4]],["gis",[22,73,3.2]],["fuel",[-3.5,62,3.6]],["generator",[17,82,32]],["fire-gas",[34.8,43,30.8]],["chiller",[79,6.3,2.6]],["pumps",[90,8.8,2.2]],["water-treatment",[95.7,12,4.4]],["tes",[82,25.5,7]],["fws",[9.5,2.5,21.5]],["bms",[77,25,17.3]]],OT=t=>t<12?"b1":t<25.5?"f1":t<39?"f2":"roof";function BT(t){if(t==="fws")return"all";const e=a_.find(n=>n[0]===t);return e?OT(e[1][2]):"all"}const ct=kx(t=>({mode:"multi",setMode:e=>t(n=>n.mode===e?{}:{mode:e,selected:null,floor:"all"}),filter:"all",setFilter:e=>t({filter:e}),floor:"all",setFloor:e=>t({floor:e}),flowState:{condensate:!0,chilled:!0,heat:!0,tcs:!0,power:!0},toggleFlow:e=>t(n=>({flowState:{...n.flowState,[e]:!n.flowState[e]}})),flowOn:!0,toggleFlowMaster:()=>t(e=>{const n=!e.flowOn,i={...e.flowState};return Object.keys(i).forEach(r=>i[r]=n),{flowOn:n,flowState:i}}),selected:null,setSelected:e=>t({selected:e}),focusId:null,focusTick:0,requestFocus:e=>t(n=>({selected:e,focusId:e,focusTick:n.focusTick+1,floor:n.mode==="single"?"all":BT(e)})),labelsOn:!0,toggleLabels:()=>t(e=>({labelsOn:!e.labelsOn})),resetTick:0,requestReset:()=>t(e=>({resetTick:e.resetTick+1,selected:null,floor:"all"})),query:"",setQuery:e=>t({query:e})})),a0={multi:"복층",single:"단층"};function zT(){const t=ct(s=>s.mode),e=ct(s=>s.setMode),[n,i]=un.useState(!1),r=un.useRef(null);return un.useEffect(()=>{if(!n)return;const s=o=>{r.current&&!r.current.contains(o.target)&&i(!1)};return window.addEventListener("mousedown",s),()=>window.removeEventListener("mousedown",s)},[n]),be.jsxs("header",{className:"top-header",children:[be.jsx("div",{className:"h-title",children:be.jsxs("h1",{children:["AI Data Center 인터랙티브 인프라 용어사전:"," ",be.jsxs("span",{className:"mode-dd",ref:r,children:[be.jsxs("button",{className:"mode-current","aria-haspopup":"listbox","aria-expanded":n,onClick:()=>i(s=>!s),children:[a0[t]," ",be.jsx("span",{className:"mode-caret",children:"▾"})]}),n&&be.jsx("span",{className:"mode-menu",role:"listbox",children:Object.entries(a0).map(([s,o])=>be.jsx("button",{role:"option","aria-selected":t===s,className:`mode-item${t===s?" on":""}`,onClick:()=>{e(s),i(!1)},children:o},s))})]})]})}),be.jsx("div",{className:"h-meta",children:"AIDC · INFRASTRUCTURE"})]})}const kT=[["all","전체"],["cooling","냉각"],["power","전력"],["it","IT·컴퓨트"],["mgmt","감시·제어"]],HT=[["condensate","응축수 루프","#9CC6E4"],["chilled","냉수 (FWS·공랭용)","#3E9CD6"],["heat","고온수 (FWS·액랭용)","#E2793B"],["tcs","TCS (칩 냉각수)","#0FA396"],["power","전력 계통","#D9A312"]];function VT(){const t=ct(c=>c.filter),e=ct(c=>c.setFilter),n=ct(c=>c.flowState),i=ct(c=>c.toggleFlow),r=ct(c=>c.flowOn),s=ct(c=>c.toggleFlowMaster),o=ct(c=>c.labelsOn),a=ct(c=>c.toggleLabels),l=ct(c=>c.requestReset);return be.jsxs("div",{className:"toolbar",children:[be.jsx("div",{className:"filter-nav","aria-label":"계통 필터",children:kT.map(([c,u])=>be.jsx("button",{className:`chip cat-${c}${t===c?" on":""}`,onClick:()=>e(c),children:u},c))}),be.jsxs("div",{className:"flow-control","aria-label":"Flow 표시",children:[HT.map(([c,u,d])=>be.jsx("button",{className:`flow-chip${n[c]?" on":""}`,style:{"--flow-color":d},"aria-pressed":n[c],onClick:()=>i(c),children:u},c)),be.jsx("button",{className:`flow-master${r?" on":""}`,type:"button","aria-label":"모든 Flow 켜기 또는 끄기","aria-pressed":r,onClick:s}),be.jsx("button",{className:`label-toggle${o?" on":""}`,type:"button","aria-label":"장비 라벨 켜기 또는 끄기","aria-pressed":o,onClick:a,children:"라벨"}),be.jsx("button",{className:"reset-view",type:"button","aria-label":"3D 시점 초기화",onClick:l,children:be.jsxs("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[be.jsx("path",{d:"M30 20A10 10 0 1 1 27.1 12.9"}),be.jsx("path",{d:"M27.1 7.9v5h-5"})]})})]})]})}const Qr={cooling:{label:"냉각 계통",color:"#1111FF"},power:{label:"전력 계통",color:"#F3B81C"},it:{label:"IT · 컴퓨트",color:"#D936E7"},mgmt:{label:"감시 · 제어",color:"#30353C"}},GT={roof:"PH",f2:"2F",f1:"1F",b1:"B1"},Sn={"cooling-tower":{cat:"cooling",name:"냉각탑",en:"Cooling Tower",short:"물의 증발잠열을 이용해 시설의 열을 대기로 최종 방출하는 옥외 열방출 설비.",desc:"순환수의 일부를 증발시켜 나머지 물의 온도를 낮추는 증발식 열방출 장치로, 주로 수랭식 칠러의 응축기 열을 제거한다. 외기 습구온도에 근접한 낮은 수온을 만들 수 있어 열방출 효율이 높지만, 증발·블로다운으로 물을 소비하기 때문에 WUE(물 사용 효율)와 수질 관리(레지오넬라, 스케일)가 핵심 운영 이슈다.",facts:["성능 기준: 외기 습구온도(Wet-bulb) 기준 접근온도","물 소비 발생 → WUE 관리 및 보충수(Make-up water) 필요","팬·충진재(Fill)·살수계통으로 구성, 겨울철 결빙 대책 필요"],rel:["chiller","dry-cooler","fws","water-treatment"]},"dry-cooler":{cat:"cooling",name:"드라이쿨러 · 유체냉각기",en:"Dry Cooler / Fluid Cooler",short:"물 소비 없이 공기-액체 열교환으로 고온수 루프의 열을 방출하는 설비.",desc:"밀폐 배관 내 냉각수를 핀 코일과 팬으로 직접 외기에 냉각하는 건식 열방출 장치. 액체냉각 서버는 37~40°C(99°F급)의 높은 공급수온을 허용하므로, 많은 기후대에서 냉동기 없이 드라이쿨러만으로 연중 열방출이 가능하다. 혹서기에는 코일 전면에 물을 분무하는 단열보조(Adiabatic Assist)로 성능을 확보한다.",facts:["고온수 루프(액랭용 FWS)의 주 열방출 수단","물 소비 최소화 → 저(低)WUE 설계에 유리","외기 약 32°C(90°F) 초과 시 단열분무 보조 가동"],rel:["cdu","fws","cooling-tower"]},chiller:{cat:"cooling",name:"칠러 (냉동기)",en:"Chiller",short:"냉동 사이클로 냉수를 생산해 공랭 구역과 저온 부하에 공급하는 설비.",desc:"압축기-응축기-팽창밸브-증발기로 이루어진 냉동 사이클로 냉수(예: 공급 23°C/73°F급)를 만들어 팬월·CRAH 등 공기냉각 계통에 공급한다. 외기가 충분히 낮을 때는 냉동기를 거치지 않고 외기로 직접 냉각하는 프리쿨링(Water-side Economizer) 운전으로 소비전력을 크게 줄일 수 있으며, 일반적으로 N+1 이상 이중화로 구성한다.",facts:["수랭식(냉각탑 연계) 또는 공랭식(일체형) 구분","프리쿨링(이코노마이저) 내장형이 AI DC 표준 추세","이중화: N+1 구성 + 축열조 연계 정전 대비"],rel:["cooling-tower","fws","crah","tes"]},pumps:{cat:"cooling",name:"순환 펌프",en:"FWS Circulation Pumps",short:"FWS 냉각수를 순환시키는 펌프. 듀티/스탠바이(N+1)로 이중화.",desc:"냉각수 계통의 유량과 차압을 유지하는 심장 역할의 설비로, 가변속(VFD) 제어로 부하에 따라 유량을 조절해 반송동력을 절감한다. 정전 시에도 서버 냉각수 흐름이 끊기면 수십 초 내 GPU가 과열되므로, 액체냉각 시설에서는 CDU와 함께 주요 펌프를 UPS 전원에 연결하는 것이 일반적이다.",facts:["가변속(VFD) 운전으로 에너지 절감","듀티/스탠바이 또는 N+1 이중화 구성","액랭 시설: 펌프·CDU를 UPS 전원으로 백업"],rel:["fws","cdu","ups","tes"]},tes:{cat:"cooling",name:"축열조",en:"Thermal Energy Storage Tank",short:"정전 시 칠러 재기동까지 약 5분간 냉각을 유지하는 냉수 저장 탱크.",desc:"냉각수를 대량 저장해 두었다가 정전·설비 고장 시 냉열원으로 사용하는 버퍼 탱크. 발전기가 기동되고 칠러가 재가동될 때까지의 공백(수 분)을 메우는 라이드스루(Ride-through) 기능이 핵심이며, AI 랙은 열밀도가 높아 이 몇 분의 공백도 치명적이기 때문에 액체냉각 시설의 필수 요소로 자리잡았다.",facts:["대표 설계치: 약 5분 내외 냉각 라이드스루","칠러·펌프 재기동 시간의 열적 버퍼 역할","UPS(전력 백업)의 냉각판 대응 개념"],rel:["chiller","pumps","ups","generator"]},"water-treatment":{cat:"cooling",name:"수처리 설비",en:"Water Treatment / Chemical Dosing",short:"냉각수의 pH·부식·미생물을 관리하는 약품주입 및 여과 설비.",desc:"냉각수 배관과 열교환기를 보호하기 위해 수질을 관리하는 설비. FWS는 pH 7~9 유지, 부식억제제 주입, 10μm급 여과가 기본이며, CDU로 들어가는 최종 급수에는 약 500μm 듀플렉스 스트레이너를 둔다. 서버에 직접 닿는 TCS는 훨씬 엄격한 기준(부식억제제+살균제, 낮은 전도도·경도)이 적용된다.",facts:["FWS 기준: pH 7~9, 부식억제제 필수 (ASHRAE 기준)","CDU 급수단 듀플렉스 스트레이너(~500μm)","TCS는 살균제 포함, 더 엄격한 고청정 수질 요구"],rel:["fws","tcs","cdu","cooling-tower"]},cdu:{cat:"cooling",name:"CDU",en:"Coolant Distribution Unit",short:"시설 냉각수(FWS)와 서버 냉각수(TCS)를 열교환기로 분리·중계하는 핵심 장치.",desc:"액체냉각 시스템의 관문 설비. 내부의 판형 열교환기가 시설수(FWS)와 서버측 냉각수(TCS)를 수리적으로 완전히 분리하고, 이중화 펌프·제어밸브·필터·센서로 TCS의 유량·온도·압력을 칩 요구조건에 맞게 정밀 제어한다. 랙 내장형(In-rack), 열(Row) 배치형, 대용량 실외/기계실형(Liquid-to-Liquid) 등으로 구분되며, 정전 대비를 위해 UPS 전원으로 백업한다.",facts:["구성: 판형 열교환기 + 듀티/스탠바이 펌프 + 필터 + 제어밸브","FWS와 TCS의 수질·압력을 격리 (누수 리스크 분리)","형태: In-rack / In-row / 시설형(MW급 Liquid-to-Liquid)"],rel:["tcs","fws","manifold","cold-plate","pumps"]},manifold:{cat:"cooling",name:"매니폴드",en:"Coolant Manifold",short:"TCS 냉각수를 랙 안의 각 서버로 분배·회수하는 분기 배관.",desc:"CDU에서 나온 냉각수를 랙 단위·서버 단위로 나누어 공급(Supply)하고 회수(Return)하는 분배 배관. 랙 후면 수직형 또는 상부 수평형으로 설치되며, 서버 착탈 시 냉각수가 새지 않도록 드립리스 퀵 디스커넥트(QD) 커플링으로 각 서버 콜드플레이트 회로와 연결된다.",facts:["공급/회수(Supply/Return) 한 쌍으로 구성","드립리스 퀵커넥터(QD)로 무누수 착탈","랙 후면 수직형·열 상부 수평형 배치"],rel:["cdu","cold-plate","tcs","gpu-rack"]},"cold-plate":{cat:"cooling",name:"콜드플레이트",en:"Cold Plate (Direct-to-Chip)",short:"GPU·CPU 등 고발열 칩 위에 직접 부착해 액체로 열을 흡수하는 금속 열교환 판.",desc:"미세 유로가 가공된 구리 판을 칩 패키지에 직접 밀착시켜, 내부를 흐르는 냉각수로 열을 흡수하는 Direct-to-Chip(D2C) 액체냉각의 핵심 부품. 공기 대비 물의 열용량이 압도적으로 커서 1,000W가 넘는 최신 GPU도 안정적으로 냉각할 수 있으며, 서버 팬 부하를 크게 줄여 컴퓨팅 전력의 10~15%를 절감하는 효과가 있다.",facts:["GPU·CPU 등 주요 열원에 직접 부착 (D2C 방식)","칩 발열의 대부분을 액체로 직접 회수","서버 팬 전력 절감 → 전체 효율 개선"],rel:["manifold","tcs","gpu-rack","cdu"]},tcs:{cat:"cooling",name:"TCS 루프",en:"Technology Cooling System",short:"CDU 2차측 — 서버 콜드플레이트에 직접 들어가는 고청정 냉각수 계통.",desc:"CDU에서 서버까지 이어지는 서버측 냉각수 루프. 칩에 직접 닿는 물이므로 PG25(프로필렌글리콜 25% + 처리수 75%) 같은 부식억제·동결방지 냉각액을 쓰고, 살균제 포함의 엄격한 수질 기준을 적용한다. 공급 온도는 칩 요구조건에 맞춰 CDU가 제어하며, 회수 온도는 공급보다 약 10~15°C 높아진다.",facts:["냉각액: PG25 등 (부식억제 + 동결방지)","수질: FWS보다 훨씬 엄격 (살균제, 저경도, 저부유물)","온도는 칩 사양 기준으로 CDU가 정밀 제어"],rel:["cdu","cold-plate","manifold","fws","water-treatment"]},fws:{cat:"cooling",name:"FWS 루프",en:"Facility Water System",short:"시설 측 1차 냉각수 계통 — 배관·펌프·밸브·열방출 설비 전체.",desc:"데이터센터 운영자가 관리하는 시설 냉각수 인프라로, CDU·팬월에 냉각수를 공급하고 냉각탑·드라이쿨러·칠러로 열을 배출한다. AI 시설은 보통 두 개의 온도 루프로 나뉜다: 팬월용 저온 냉수 루프(예: 23°C 공급)와 CDU용 고온수 루프(예: 37°C 공급). 고온수 운전이 가능할수록 냉동기 의존도가 줄어 효율이 크게 향상된다.",facts:["이중 루프 구조: 냉수(공랭용) + 고온수(액랭용)","고온수 운전 → 프리쿨링 극대화, PUE 개선","CDU를 경계로 TCS와 수리적으로 분리"],rel:["tcs","cdu","chiller","dry-cooler","cooling-tower","pumps"]},crah:{cat:"cooling",name:"팬월 · 항온항습실",en:"Fan Wall / CRAH Gallery",short:"냉수 코일과 팬으로 데이터홀 공기를 냉각하는 공조 설비. 도면의 항온항습실.",desc:"냉수 코일에 공기를 통과시켜 데이터홀 온도를 유지하는 공기냉각 설비. 벽면 일체형 대형 팬 어레이(팬월)가 최근 표준으로, 도면의 전산동 북측 항온항습실 갤러리에 일렬로 설치되어 전산실로 냉기를 공급한다. 액체냉각 시대에도 랙 발열의 약 10~20%(네트워크 장비, 전원부, 잔여 발열)는 여전히 공기로 배출되므로, 액랭 데이터홀에도 팬월은 반드시 병설된다.",facts:["냉수 코일 + EC팬 어레이 구성, N+1 이중화","액랭 랙에서도 잔여 공랭부하 처리 필수","냉수 대신 냉매를 쓰면 CRAC로 구분"],rel:["fws","containment","chiller"]},containment:{cat:"cooling",name:"열통로 격리",en:"Hot / Cold Aisle Containment",short:"서버의 열기와 냉기가 섞이지 않도록 통로를 물리적으로 분리하는 구조.",desc:"랙 열(Row)을 마주보게 배치하고 뜨거운 배기 통로(Hot Aisle) 또는 차가운 흡기 통로(Cold Aisle)를 패널·도어로 밀폐해 공기 혼합을 차단하는 기법. 공급 온도를 높게 유지할 수 있어 냉방 효율이 크게 개선되며, 공랭 구역 설계의 기본 전제다.",facts:["열기·냉기 혼합(Bypass/Recirculation) 차단","공조 공급온도 상향 → 프리쿨링 시간 확대","핫아일 격리형이 대세 (배기측 밀폐)"],rel:["crah","gpu-rack"]},gis:{cat:"power",name:"GIS (가스절연개폐장치)",en:"Gas-Insulated Switchgear",short:"특고압 수전 계통을 SF6 가스로 절연해 좁은 실내에 수용하는 개폐장치. 도면 공급동 GIS실.",desc:"한전 계통에서 인입된 특고압(22.9kV~154kV)을 차단기·단로기·모선과 함께 SF6 절연가스 탱크 안에 밀폐 수용한 수전 설비. 기중절연(AIS) 대비 설치 면적이 1/10 수준으로 작아 도면처럼 공급동 지하 GIS실에 배치할 수 있으며, 습기·먼지의 영향을 받지 않아 신뢰성이 높다. 여기서 받은 전력이 변압기를 거쳐 전기실 수배전반으로 공급된다.",facts:["특고압 수전의 관문 — 차단기·단로기·모선 일체형","SF6 절연으로 설치 면적 대폭 축소 (옥내화 가능)","후단: 변압기 → 수배전반 → UPS 순서로 급전"],rel:["transformer","switchgear","busway"]},transformer:{cat:"power",name:"변압기 · 수전설비",en:"Transformer / Utility Intake",short:"한전 계통의 특고압을 시설 배전 전압으로 낮추는 수전 설비.",desc:"전력회사 송배전 계통에서 받은 특고압(예: 22.9kV~154kV)을 시설에서 쓰는 저압(예: 380/415/480V)으로 강압하는 설비. AI 데이터센터는 캠퍼스 단위로 수백 MW를 수전하기도 하며, 변압기 용량과 계통 인입 여건이 부지 선정의 최우선 조건이 된다.",facts:["수전(인입) → 변압 → 수배전반으로 이어지는 관문","유입식(옥외)·몰드식(옥내) 구분","AI DC는 전력 인입 용량이 부지 선정의 핵심"],rel:["gis","switchgear","generator","busway"]},switchgear:{cat:"power",name:"수배전반 · 스위치기어",en:"Switchgear",short:"차단기와 보호계전기로 전력을 분배·차단·보호하는 배전반. 도면의 전기실.",desc:"변압기에서 받은 전력을 각 계통으로 분배하고, 고장 전류를 차단기로 신속히 차단해 설비와 인명을 보호하는 배전의 중추. 도면의 지하·지상 전기실-1/2에 열반(Line-up)으로 설치된다. 상용 전원과 비상발전기 사이의 절체(ATS)도 이 단계에서 이루어지며, 이중화 등급(N, N+1, 2N)에 따라 계통 구성이 달라진다.",facts:["차단기 + 보호계전기 + 계측으로 구성","상용/비상 전원 자동절체(ATS) 수행","이중화 토폴로지(N+1, 2N 등)의 골격"],rel:["transformer","generator","ups","busway"]},generator:{cat:"power",name:"비상 발전기",en:"Backup Generator",short:"정전 시 수십 초 내 기동해 시설 전체에 전력을 공급하는 비상 전원. 도면 공급동 비상발전기실.",desc:"상용 전원 상실 시 자동 기동해 데이터센터 전 부하를 담당하는 디젤(또는 가스) 발전기. 기동에서 정격 출력까지 수십 초가 걸리므로 그 공백은 UPS가 메운다. 도면처럼 공급동 발전기실에 병렬 설치되며, 급기(DA)·배기 덕트와 유류탱크실이 함께 배치된다. 현장 연료탱크로 통상 24~72시간 무보급 운전이 가능하도록 설계한다.",facts:["자동 기동 + 부하 인수: 수십 초 이내","연료 저장: 24~72시간 연속운전 기준","UPS(순간 공백)·축열조(냉각 공백)와 한 세트"],rel:["ups","switchgear","tes","battery","fuel"]},ups:{cat:"power",name:"UPS (무정전 전원장치)",en:"Uninterruptible Power Supply",short:"정전 순간부터 발전기 기동까지 끊김 없이 전력을 공급하는 장치.",desc:"배터리에 저장된 에너지를 인버터로 변환해, 정전 발생 순간부터 발전기가 부하를 인수할 때까지의 공백(수 초~수십 초)을 무순단으로 메우는 장치. 전압 강하·서지 같은 전력 품질 문제도 함께 걸러낸다. 액체냉각 시설에서는 IT 부하뿐 아니라 CDU·냉각 펌프까지 UPS로 백업하는 것이 표준이다.",facts:["백업 시간: 통상 수 분 (발전기 인수까지)","더블컨버전 방식이 데이터센터 표준","IT부하 + CDU·펌프까지 백업 (액랭 시설)"],rel:["battery","generator","pdu","cdu"]},battery:{cat:"power",name:"배터리 (축전지실)",en:"Battery / Energy Storage",short:"UPS의 에너지원. 리튬이온 전환으로 공간·수명이 크게 개선. 도면의 축전지실.",desc:"UPS가 사용하는 에너지 저장 장치로, 도면처럼 각 층 전기실 사이의 전용 축전지실에 설치된다. 기존 납축전지에서 리튬이온(LFP 등)으로 빠르게 전환되며 설치 면적과 수명, 충전 속도가 크게 개선되었다. 열폭주 위험 관리를 위한 소화·환기·이격 등 소방 규정이 함께 강화되고 있다.",facts:["리튬이온(LFP) 전환 추세 — 공간 50%↓ 수명 2배↑","수 분 단위 백업 용량으로 설계","열폭주 대비 소방·환기 요건 적용"],rel:["ups","generator","fire-gas"]},busway:{cat:"power",name:"버스웨이",en:"Busway / Busduct",short:"천장을 따라 설치되는 모선 배전 시스템 — 탭오프로 랙·PDU에 급전.",desc:"절연 하우징 안에 동/알루미늄 모선을 넣어 데이터홀 상부를 따라 배전하는 시스템. 원하는 위치에 탭오프 박스를 꽂아 PDU나 랙으로 전력을 내릴 수 있어, 케이블 트레이 방식보다 증설·재배치가 훨씬 유연하다. 랙당 100kW가 넘는 AI 시대에 대전류 배전 수단으로 채택이 급증했다.",facts:["상부 배전 + 플러그인 탭오프 구조","증설·랙 재배치에 유연 (케이블 대비)","대전류(수백~수천 A) 배전에 적합"],rel:["pdu","ups","switchgear","gpu-rack"]},pdu:{cat:"power",name:"PDU (분전반)",en:"Power Distribution Unit",short:"데이터홀 안에서 전력을 회로별로 나누고 차단·계측하는 분전 설비.",desc:"UPS/버스웨이에서 받은 전력을 랙 단위 회로로 분기하고, 회로별 차단기와 전력 계측 기능을 제공하는 데이터홀 내 분전 설비. 랙 안에 설치되어 서버에 직접 콘센트를 제공하는 랙 PDU(rPDU)와 구분된다. 회로별 실시간 계측은 용량 관리와 PUE 산출의 기초 데이터가 된다.",facts:["플로어형 PDU와 랙형 rPDU로 구분","회로별 차단 + 지능형 전력 계측","A/B 이중 전원 급전 구조의 말단"],rel:["busway","ups","gpu-rack","bms"]},fuel:{cat:"power",name:"유류 저장·이송 설비",en:"Fuel Storage & Transfer",short:"발전기 연료를 저장·이송하는 유류탱크실과 유류펌프실. 도면 공급동 서측.",desc:"비상발전기의 연속 운전을 담보하는 연료 인프라. 도면처럼 옥외 유류탱크(대용량 저장)와 발전기실 인접 유류탱크실(일일 서비스 탱크), 이송용 유류펌프실로 구성된다. 대용량 저장조에서 펌프로 각 발전기의 서비스 탱크로 연료를 이송하며, 누유 감지·방유제·소방 설비가 법적으로 요구된다.",facts:["옥외 저장탱크 + 서비스탱크 2단 구성","24~72시간 무보급 연속운전 용량 확보","누유 감지·방유제 등 위험물 안전 규정 적용"],rel:["generator","fire-gas"]},"gpu-rack":{cat:"it",name:"GPU 랙",en:"AI Compute Rack (e.g. NVL72)",short:"수십 개의 GPU를 하나로 묶은 AI 학습·추론용 초고밀도 랙.",desc:"AI 데이터센터의 핵심 부하. 예컨대 NVIDIA GB200/GB300 NVL72는 랙 하나에 72개 GPU와 36개 CPU를 NVLink로 묶어 단일 거대 가속기처럼 동작시키며, 랙당 전력이 120~140kW급에 달한다. 일반 랙(5~15kW)의 10배가 넘는 열밀도 때문에 Direct-to-Chip 액체냉각이 사실상 필수이고, 전력·냉각·바닥하중 설계 전체가 이 랙을 기준으로 결정된다.",facts:["랙당 전력: 120~140kW급 (일반 랙의 10배+)","랙 내 NVLink로 GPU 72개가 단일 도메인 구성","액체냉각(콜드플레이트) 필수 + 잔여 공랭 병행"],rel:["cold-plate","manifold","network","pdu","busway"]},network:{cat:"it",name:"네트워크 패브릭",en:"Network Fabric (InfiniBand / Ethernet)",short:"수천 개 GPU를 하나처럼 묶는 초고속 East-West 통신망.",desc:"AI 학습은 GPU 간 데이터 교환(East-West 트래픽)이 성능을 좌우하므로, 스파인-리프(Spine-Leaf) 구조의 무손실·저지연 패브릭을 별도로 구축한다. InfiniBand(NDR 400Gb/s급) 또는 RoCE 이더넷이 쓰이며, 컴퓨트/스토리지/관리망을 분리하고 GPU별로 스위치 경로를 최적화(rail-optimized)하는 것이 SuperPOD형 설계의 특징이다.",facts:["스파인-리프 토폴로지, 무손실·저지연 지향","InfiniBand NDR 400Gb/s급 또는 RoCE 이더넷","컴퓨트/스토리지/In-band 관리망 분리 구성"],rel:["gpu-rack","storage","mmr","bms"]},storage:{cat:"it",name:"고성능 스토리지",en:"High-Performance Storage",short:"학습 데이터와 체크포인트를 공급·저장하는 병렬 스토리지 시스템.",desc:"수천 개 GPU에 학습 데이터를 끊김 없이 공급하고, 학습 중간 상태(체크포인트)를 초고속으로 기록하는 스토리지 계층. 병렬 파일시스템(Lustre 계열 등)과 NVMe 올플래시가 표준이며, 전용 스토리지 패브릭으로 컴퓨트 트래픽과 분리한다. 체크포인트 쓰기 대역폭이 부족하면 GPU 전체가 대기하므로 성능 설계가 중요하다.",facts:["병렬 파일시스템 + NVMe 올플래시 구성","체크포인트 쓰기 성능이 핵심 지표","전용 스토리지 패브릭으로 트래픽 분리"],rel:["network","gpu-rack"]},mmr:{cat:"it",name:"MMR · MDF (통신실)",en:"Meet-Me Room / Main Distribution Frame",short:"통신사 회선이 인입·상호접속되는 통신 관문. 도면 1층 양측 MMR/MDF실.",desc:"외부 통신사업자의 광케이블이 건물로 인입되어 시설 내부망과 상호접속되는 공간. MDF(주배선반)는 외부 케이블과 내부 배선을 연결하는 분계점이고, MMR(Meet-Me Room)은 복수의 통신사·클라우드 사업자가 교차 연결(Cross-connect)되는 방이다. 도면처럼 동·서 양측에 이중화 배치해 단일 경로 장애를 방지하며, TPS 샤프트를 통해 각 층 전산실로 연결된다.",facts:["통신 인입의 이중화: 동·서 양측 분리 배치","MDF(분계점) → TPS(수직 샤프트) → 전산실 순서","복수 통신사 상호접속(Cross-connect) 지점"],rel:["network","storage"]},bms:{cat:"mgmt",name:"DCIM · BMS (상황실)",en:"DC Infrastructure Mgmt / Building Mgmt System",short:"전력·냉각·환경을 통합 감시하고 제어하는 시설 관제 시스템. 도면 1층 상황실.",desc:"변압기부터 랙까지의 전력 계통(EPMS), 냉각 설비, 온습도·누수 센서를 통합 감시·제어하는 시스템. 도면의 1층 상황실·스크린룸이 관제 거점이다. 냉각수 온도·유량 제어, 설비 기동 시퀀스, 경보 관리가 BMS의 영역이고, 용량 관리·자산 관리·PUE 분석은 DCIM이 담당한다. 액체냉각 도입으로 누수 감지와 CDU 연동 제어의 중요성이 크게 높아졌다.",facts:["EPMS(전력) + 냉각 제어 + 환경 감시 통합","누수 감지(Leak Detection)가 액랭 시대 필수 항목","PUE·용량·자산 관리는 DCIM 영역"],rel:["pdu","cdu","crah","network"]},"fire-gas":{cat:"mgmt",name:"가스계 소화설비",en:"Clean Agent Fire Suppression",short:"물 없이 불활성가스로 전산실 화재를 진압하는 소화 시스템. 도면의 소화가스실.",desc:"물을 쓸 수 없는 전산실·전기실을 보호하기 위해 불활성가스(IG-541 등)나 청정약제를 방출해 산소 농도를 낮춰 소화하는 설비. 도면의 소화가스실에 고압 실린더 뱅크가 설치되고, 각 보호구역까지 배관·노즐로 연결된다. 초기 연기를 감지하는 고감도 공기흡입형 감지기(VESDA)와 연동되며, 리튬이온 배터리실은 열폭주 특성 때문에 별도의 강화 기준이 적용된다.",facts:["불활성가스 방출로 산소 농도 저감 소화","고감도 흡입형 연기감지(VESDA) 연동","축전지실은 열폭주 대비 강화 기준 적용"],rel:["battery","bms"]}},Xu=["cooling","power","it","mgmt"],Ge={slab:"#D3D8DC",roof:"#D9DEE2",groundTop:"#EAECED",slabTop:"#E8EAEC",roofTop:"#E9EBED",hall:"#DEE4E9",plant:"#ECECE8",office:"#EFEDEA",cream:"#F0EBE1",cream2:"#E7E0D2",rackBody:"#3F2A34",rackDoor:"#5C3B49",tray:"#93AF7B",blue:"#A9BFD3",blueD:"#7E9DB8",cdu:"#7FA7D8",teal:"#8FD0C2",yel:"#EDBE4B",yelD:"#D9A32E",purp:"#ACA2DA",steel:"#B9C2CA",wood:"#C8A87E",rose:"#D8ACA2"},l_=[["cooling-tower",[130,20,226]],["dry-cooler",[106,148,210]],["crah",[354,18,79]],["gpu-rack",[485,206,91]],["busway",[620,178,126]],["network",[937,36,73]],["storage",[893,36,73]],["bms",[820,11,86]],["switchgear",[43,26,75]],["ups",[212,26,75]],["battery",[52,132,57]],["fws",[60,150,188]],["chiller",[80,252,39]],["tes",[258,300,97]],["pumps",[168,290,18]],["water-treatment",[221,352,36]],["manifold",[485,300,96]],["containment",[710,384,88]],["cold-plate",[665,346,52]],["tcs",[755,452,84]],["cdu",[485,464,52]],["pdu",[843,464,72]],["transformer",[1068,246,58]],["generator",[1118,348,54]]];function WT(t){s_(t),r_(500,250),function(){const o=de(null,null);b(o,0,0,0,1e3,500,9,Ge.slab,{edge:"#969EA6"}),o_(o,-140,-118,.03,1440,738,Ge.groundTop),ke(o,0,0,9.03,1e3,500,Ge.slabTop),b(o,308,12,9,690,480,.8,Ge.hall,{noedge:!0}),b(o,12,238,9,286,144,.8,Ge.plant,{noedge:!0}),b(o,12,390,9,286,102,.8,Ge.office,{noedge:!0})}(),ze(0,0,9,1e3,11,150,0,-1,!1),ze(0,489,9,1e3,11,150,0,1,!1),ze(0,11,9,11,478,150,-1,0,!1),ze(989,11,9,11,478,150,1,0,!1),ze(12,230,9,288,7,100,0,0,!0),ze(12,384,9,288,7,100,0,0,!0),ze(300,12,9,7,480,100,0,0,!0),ze(720,12,9,7,140,100,0,0,!0),ze(720,146,9,275,7,100,0,0,!0),function(){const o=de(null,null),a=new bi(306,12,236),l=new Mt(a,on(Ge.roof,.96));l.position.set(-347,176,-132),o.add(l);const c=kh(o,a,l,"#969EA6"),u=ke(o,0,0,182.03,306,236,Ge.roofTop,.96);_t.slabs.push({m:l,e:c,top:u,zTop:182,floor:"roof",baseOp:.96})}(),function(){const o=de("switchgear","power");for(let a=0;a<4;a++){const l=26+a*40;b(o,l,22,9,34,22,66,Ge.yel),b(o,l+3,42.5,15,28,2,50,"#F6E4AE"),b(o,l+6,44,54,10,1.4,7,"#3A3F45",{noedge:!0}),b(o,l+20,44,54,8,1.4,7,"#C3542F",{noedge:!0});for(let c=0;c<3;c++)b(o,l+6,44,20+c*8,22,1.2,2.2,"#C9A94F",{noedge:!0})}}(),function(){const o=de("ups","power");for(let a=0;a<2;a++){const l=196+a*40;b(o,l,22,9,32,22,66,Ge.yel),b(o,l+4,42.5,52,24,2,12,"#2E3238"),b(o,l+6,44,56,9,1.2,4,"#57D0A8",{noedge:!0});for(let c=0;c<4;c++)b(o,l+4,44,14+c*7,24,1.2,2.4,"#C9A94F",{noedge:!0})}}(),function(){const o=de("battery","power");for(let l=0;l<2;l++){const c=30+l*52;b(o,c,120,9,44,24,48,Ge.yel);for(let u=0;u<3;u++)b(o,c+3,142.5,15+u*13,38,2,8,"#F6E4AE");b(o,c,142.5,50,44,1.6,4,"#C3542F",{noedge:!0})}const a=de(null,null);Xe(a,252,150,9,6.5,34,"#EDBE4B"),Xe(a,252,150,43,2.6,5,"#8A8577"),Xe(a,270,158,9,6.5,34,"#EDBE4B"),Xe(a,270,158,43,2.6,5,"#8A8577"),Xe(a,260,174,9,6.5,34,"#EDBE4B"),Xe(a,260,174,43,2.6,5,"#8A8577")}(),function(){const o=de("cooling-tower","cooling");function a(l,c){b(o,l,c,182,70,56,10,"#DCD3C2"),b(o,l+2,c+2,192,66,52,30,Ge.cream2);for(let u=0;u<4;u++)b(o,l+4,c+52.5,195+u*6,62,1.6,2.4,"#C6B89E",{noedge:!0}),b(o,l+66.5,c+4,195+u*6,1.6,48,2.4,"#BCAE93",{noedge:!0});b(o,l,c,222,70,56,5,Ge.cream),bn(o,l+19,c+17,227,10),bn(o,l+51,c+17,227,10),bn(o,l+19,c+41,227,10),bn(o,l+51,c+41,227,10),gc(o,l+72,c+28,182,44)}a(16,16),a(96,16),a(176,16)}(),function(){const o=de("dry-cooler","cooling");function a(c,u){b(o,c,u,182,52,10,6,Ge.steel,{noedge:!0});const d=b(o,c+4,u+3,186,44,3,26,"#E4C7A6");d.rotation.x=-.42;const h=b(o,c+4,u+34,186,44,3,26,"#E4C7A6");h.rotation.x=.42,b(o,c+2,u+2,206,48,34,3,Ge.cream2),bn(o,c+14,u+19,209,8.4,"#B08A62"),bn(o,c+38,u+19,209,8.4,"#B08A62")}a(16,110),a(80,110),a(144,110);const l=de(null,null);b(l,232,30,182,48,38,18,Ge.cream2),bn(l,256,49,200,10),b(l,234,120,182,42,32,14,Ge.cream2);for(let c=0;c<3;c++)b(l,236,151.5,185+c*4,38,1.4,1.6,"#BCAE93",{noedge:!0})}(),function(){const o=de("chiller","cooling");function a(l,c){b(o,l,c,9,110,34,6,Ge.steel,{noedge:!0}),Ft(o,[l+6,c+11,24],[l+104,c+11,24],8.5,Ge.blue,{seg:16}),Ft(o,[l+6,c+24,36],[l+104,c+24,36],8.5,Ge.blueD,{seg:16}),Xe(o,l+34,c+17,44,8,12,"#DCE6EF"),Xe(o,l+70,c+17,44,8,12,"#DCE6EF"),rt(o,[[l+34,c+17,52],[l+70,c+17,52]],"#AEC2D4",2.2,!1),b(o,l+94,c+8,14,12,3,26,"#2E3238"),b(o,l+95.5,c+7,30,9,1.2,5,"#57D0A8",{noedge:!0})}a(24,248),a(24,300)}(),function(){const o=de("pumps","cooling");function a(l,c){b(o,l-8,c-8,9,16,16,3,Ge.steel,{noedge:!0}),Xe(o,l,c,12,6.5,7,"#8FA9C0"),Xe(o,l,c,19,5,13,"#DCE6EF"),Xe(o,l,c,32,5.6,2,"#8FA9C0"),rt(o,[[l,c,15],[l-14,c,15]],"#9FB6CC",2.4,!1)}a(168,262),a(168,290),a(168,318)}(),function(){const o=de("water-treatment","cooling");b(o,206,344,9,30,24,36,Ge.teal),b(o,209,367,30,12,2,9,"#2E3238"),Xe(o,244,352,9,5,18,"#BFE3DC"),Xe(o,244,366,9,5,18,"#BFE3DC"),rt(o,[[236,356,30],[244,352,20]],"#72B6A8",1.6,!1)}(),function(){const o=de("tes","cooling");Xe(o,258,300,9,24,88,"#E7EDF2",{seg:26});const a=new Mt(new rr(24,26,12,0,Math.PI*2,0,Math.PI/2),on("#DDE5EB"));a.position.copy(Yn(258,300,97)),o.add(a),_t.pickables.push(a),Xe(o,258,300,36,24.8,2,"#C5D3DE",{seg:26}),Xe(o,258,300,66,24.8,2,"#C5D3DE",{seg:26}),gc(o,285,300,9,92),b(o,281,296,20,2,8,60,"#9FB6CC",{noedge:!0})}(),function(){const o=de("crah","cooling");for(let a=0;a<6;a++){const l=330+a*64;b(o,l,16,9,48,20,70,Ge.blue),b(o,l+2,17,74,44,18,4,"#8FA9C0"),ai(o,l+13,37.2,29,8),ai(o,l+35,37.2,29,8),ai(o,l+13,37.2,55,8),ai(o,l+35,37.2,55,8)}}(),function(){const o=de("storage","it");for(let l=0;l<2;l++){const c=24+l*36;b(o,880,c,9,26,22,64,Ge.purp);for(let u=0;u<4;u++)b(o,881.5,c+21,17+u*13,23,1.6,7,"#CFC8EE")}const a=de("network","it");for(let l=0;l<2;l++){const c=24+l*36;b(a,924,c,9,26,22,64,Ge.purp);for(let u=0;u<3;u++)b(a,925.5,c+21,15+u*10,23,1.6,4.5,"#5F51A8",{noedge:!0});b(a,925.5,c+21,52,23,1.6,8,"#CFC8EE")}}(),function(){const o=de("bms","mgmt");for(let l=0;l<3;l++){const c=b(o,760+l*40,12.5,72,36,2.5,26,"#33383F");c.rotation.y=(l-1)*.14,b(o,763+l*40,12,78,12,1.2,10,l===0?"#7FD8C8":l===1?"#F2C94C":"#E8836A",{noedge:!0,ry:(l-1)*.14}),b(o,779+l*40,12,76,14,1.2,14,"#8FB4D8",{noedge:!0,ry:(l-1)*.14})}const a=de(null,null);b(a,790,86,24,58,18,3,Ge.wood),b(a,796,90,9,6,10,15,Ge.wood,{noedge:!0}),b(a,836,90,9,6,10,15,Ge.wood,{noedge:!0}),b(a,804,92,29,12,1.4,8,"#5E7A94"),b(a,822,92,29,12,1.4,8,"#5E7A94"),Xe(a,818,116,9,4,7,"#6B7280"),b(a,814,112,16,8,8,2,"#6B7280",{noedge:!0})}(),function(){const o=de("fws","cooling");rt(o,[[60,252,30],[60,252,145],[60,240,145],[60,240,188],[60,64,188]],"#9CC6E4",2.6),rt(o,[[92,304,30],[92,304,140],[92,55,140],[615,55,140]],"#3E9CD6",2.6),rt(o,[[354,55,140],[354,36,140],[354,36,79]],"#3E9CD6",1.9,!1),rt(o,[[482,55,140],[482,36,140],[482,36,79]],"#3E9CD6",1.9,!1),rt(o,[[610,55,140],[610,36,140],[610,36,79]],"#3E9CD6",1.9,!1);const a=de("fws","cooling");rt(a,[[108,152,188],[108,240,188],[108,240,112],[770,240,112],[770,470,112],[390,470,112]],"#E2793B",2.6);const l=[395,485,575,665,755];for(let c=0;c<l.length;c++)rt(a,[[l[c],470,112],[l[c],470,65]],"#E2793B",1.9,!1)}(),function(){const o=de("busway","power");b(o,308,174,122,684,8,8,Ge.yel);const a=[395,485,575,665,755];for(let l=0;l<a.length;l++)b(o,a[l]-5,173,116,10,10,7,Ge.yelD),rt(o,[[a[l],182,120],[a[l],192,120],[a[l],192,91]],"#EBB410",1.7,!1);b(o,838,174,116,10,10,7,Ge.yelD),rt(o,[[843,182,120],[843,452,120],[843,452,72]],"#EBB410",2,!1)}();const e=[380,470,560,650,740],n=160,i=26,r=7,s=7;return function(){const o=de("gpu-rack","it");for(let a=0;a<e.length;a++){const l=e[a];for(let d=0;d<s;d++){const h=n+d*(i+r);b(o,l,h,9,30,i,78,Ge.rackBody),b(o,l+2.5,h+i-1,14,25,2,66,Ge.rackDoor);for(let p=0;p<3;p++)b(o,l+4.5,h+i-.5,22+p*18,21,1.2,4,"#C99046",{noedge:!0});b(o,l+25,h+i-.4,74,2.4,1,2.4,"#5FE3A8",{noedge:!0})}const c=n,u=s*(i+r)-r;b(o,l+3,c,88,2.2,u,3,Ge.tray,{noedge:!0}),b(o,l+24.8,c,88,2.2,u,3,Ge.tray,{noedge:!0});for(let d=0;d<=s;d++)b(o,l+3,c+Math.min(d*(i+r),u-2),89,24,2,1.4,Ge.tray,{noedge:!0})}}(),function(){const o=de("containment","cooling");b(o,684,160,92,52,224,2.5,"#BFD2DE",{op:.28}),b(o,684,382,56,52,2.5,38,"#BFD2DE",{op:.24}),b(o,684,160,56,52,2.5,38,"#BFD2DE",{op:.24})}(),function(){const o=de("cold-plate","cooling");b(o,663,344,50,4,6,5,"#0FA396");const a=de("tcs","cooling"),l=de("manifold","cooling");for(let c=0;c<e.length;c++){const u=e[c]+15;rt(a,[[u,455,60],[u,455,96],[u,440,96]],"#0FA396",1.9),rt(l,[[u,440,96],[u,160,96]],"#0FA396",1.9,!1)}}(),function(){const o=de("cdu","cooling");for(let a=0;a<e.length;a++){const l=e[a];b(o,l,452,9,30,24,56,Ge.cdu),b(o,l+3,475,50,12,1.8,9,"#2E3238"),Ft(o,[l+8,478,22],[l+8,483,22],2.4,"#0FA396",{seg:10}),Ft(o,[l+18,478,22],[l+18,483,22],2.4,"#E2793B",{seg:10}),b(o,l+4,475,32,9,1.4,4,"#5FA0D8",{noedge:!0})}}(),function(){const o=de("pdu","power");for(let a=0;a<2;a++){const l=830+a*40;b(o,l,452,9,28,24,60,Ge.yel),Ft(o,[l+8,476.5,55],[l+8,478.6,55],4,"#F6E4AE",{seg:14});for(let c=0;c<3;c++)b(o,l+4,475,20+c*9,20,1.2,2.6,"#C9A94F",{noedge:!0})}}(),function(){const o=de(null,null);b(o,1010,210,0,200,290,8,"#DDD8CC")}(),function(){const o=de("transformer","power");function a(d,h){b(o,d,h,8,48,40,42,Ge.yel),b(o,d+10,h+14,50,28,12,10,"#E4C25C"),Ft(o,[d+12,h+20,64],[d+40,h+20,64],5,"#E4C25C",{seg:14});for(let g=0;g<4;g++)b(o,d-4,h+4+g*9,12,4,6,30,"#D9A32E",{noedge:!0}),b(o,d+48,h+4+g*9,12,4,6,30,"#D9A32E",{noedge:!0});const p=[d+9,d+24,d+39];for(let g=0;g<3;g++){Xe(o,p[g],h+34,50,2.6,7,"#EDE7D8"),Xe(o,p[g],h+34,57,2,6,"#EDE7D8");const x=new Mt(new rr(2.2,10,10),on("#C9971B"));x.position.copy(Yn(p[g],h+34,64)),o.add(x)}b(o,d+2,h-2,0,10,44,8,"#B7A88C",{noedge:!0}),b(o,d+36,h-2,0,10,44,8,"#B7A88C",{noedge:!0})}a(1030,232),a(1092,232);const l=[[1140,232],[1164,232],[1140,254],[1164,254]];for(let d=0;d<4;d++)Ft(o,[l[d][0],l[d][1],0],[1152,243,100],1.4,"#8A9AA8",{seg:8,pick:!1});b(o,1140,241,58,24,4,3,"#8A9AA8",{noedge:!0}),b(o,1136,241,80,32,4,3,"#8A9AA8",{noedge:!0}),Xe(o,1140,243,74,1,6,"#6B7280"),Xe(o,1164,243,74,1,6,"#6B7280");const c=new Oh(Yn(1140,243,74),Yn(1105,246,50),Yn(1069,252,64)),u=new Mt(new zh(c,16,.9,6,!1),on("#C9A94F"));o.add(u)}(),function(){const o=de("generator","power");function a(l,c){b(o,l,c,0,100,44,8,"#B7A88C",{noedge:!0}),b(o,l+2,c+1,8,22,42,48,"#E4B640");for(let u=0;u<4;u++)b(o,l+1,c+5+u*9,14,1.4,6,36,"#B58A1C",{noedge:!0});b(o,l+26,c+4,8,42,36,36,Ge.yel),Ft(o,[l+70,c+22,26],[l+94,c+22,26],13,"#EDBE4B",{seg:16}),Xe(o,l+94,c+22,26,4,2,"#C9971B"),Ft(o,[l+30,c+8,50],[l+62,c+8,50],4.5,"#AFB6BD",{seg:12}),rt(o,[[l+62,c+8,50],[l+68,c+8,50],[l+68,c+8,62]],"#8E8B82",2.2,!1),b(o,l+40,c+40,44,16,2,10,"#2E3238")}a(1026,326),a(1026,392),a(1026,458),Ft(o,[1168,414,16],[1168,462,16],13,"#E3D6BB",{seg:16}),b(o,1160,420,0,16,6,10,"#B7A88C",{noedge:!0}),b(o,1160,452,0,16,6,10,"#B7A88C",{noedge:!0}),Xe(o,1168,430,29,2.4,4,"#B7A88C")}(),function(){const o=de("switchgear","power");rt(o,[[1030,258,32],[1e3,258,32],[992,258,32],[992,258,122],[992,178,122]],"#EBB410",2.2),rt(o,[[1026,348,26],[1002,348,26],[996,348,26],[992,258,32]],"#EBB410",1.7,!1),rt(o,[[1026,412,26],[1002,412,26],[996,412,26],[996,348,26]],"#EBB410",1.7,!1),rt(o,[[1026,478,26],[1002,478,26],[996,478,26],[996,412,26]],"#EBB410",1.7,!1)}(),function(){const o=de(null,null);b(o,28,428,9,52,18,7,Ge.rose),b(o,28,422,9,52,7,20,Ge.rose),b(o,30,426,16,6,20,6,Ge.rose,{noedge:!0}),b(o,72,426,16,6,20,6,Ge.rose,{noedge:!0}),b(o,110,412,22,42,18,3,Ge.wood),b(o,128,418,9,6,6,13,Ge.wood,{noedge:!0}),b(o,124,414,25,12,1.4,8,"#5E7A94"),b(o,180,412,22,42,18,3,Ge.wood),b(o,198,418,9,6,6,13,Ge.wood,{noedge:!0}),b(o,194,414,25,12,1.4,8,"#5E7A94"),b(o,252,398,9,22,16,38,"#8CACC9"),b(o,254,413,14,18,1.6,26,"#6E93B4");for(let a=0;a<3;a++)b(o,256,413.8,18+a*8,14,1,3,"#EDF1F5",{noedge:!0});Xe(o,240,470,9,4.5,16,"#E7EDF2"),Xe(o,240,470,25,3.4,6,"#8CACC9"),b(o,896,286,9,20,16,3,Ge.wood,{noedge:!0}),b(o,896,286,12,20,16,11,Ge.cream2),b(o,922,282,9,18,14,18,Ge.cream2),b(o,902,318,9,16,14,11,Ge.cream2),b(o,168,514,0,24,18,13,Ge.cream2),b(o,196,518,0,15,13,9,Ge.cream2),b(o,60,516,6,58,23,26,"#EDEDEA"),b(o,122,516,6,17,23,17,Ge.rose),b(o,124,518,15,13,2,7,"#5E7A94"),Ft(o,[74,516,6],[74,539,6],5,"#4A5058",{seg:12}),Ft(o,[100,516,6],[100,539,6],5,"#4A5058",{seg:12}),Ft(o,[130,516,6],[130,539,6],5,"#4A5058",{seg:12})}(),function(){const a=[];for(const l in _t.groupReg)_t.groupReg[l].traverse(c=>{if(!c.isMesh||!c.material||!c.material.color||c.userData.flowPart||c.userData.selectionOutline||a.indexOf(c.material)!==-1)return;a.push(c.material);const u={h:0,s:0,l:0};c.material.color.getHSL(u),u.s>.04&&(u.s=Math.min(1,u.s*1.2)),u.l=Math.max(.08,u.l-(u.l>.78?.095:.065)),c.material.color.setHSL(u.h,u.s,u.l)})}(),function(){const a=["cooling-tower","dry-cooler","chiller","pumps","water-treatment","tes","crah","fws","containment","tcs","manifold","cold-plate","cdu","switchgear","ups","battery","busway","pdu","transformer","generator","gpu-rack"],l=[];for(let c=0;c<a.length;c++){const u=_t.groupReg[a[c]];u&&u.traverse(d=>{if(!d.isMesh||!d.material||!d.material.color||d.userData.flowPart||d.userData.selectionOutline||d.userData.floorTop||l.indexOf(d.material)!==-1)return;l.push(d.material);const h={h:0,s:0,l:0};d.material.color.getHSL(h),h.s>.025&&(h.s=Math.min(1,h.s*1.18+.018)),h.l=Math.max(.08,h.l-(h.l>.72?.085:h.l>.42?.055:.025)),d.material.color.setHSL(h.h,h.s,h.l),d.material.userData=d.material.userData||{},d.material.userData.flowEquipment=!0})}}(),_t}const l0=new Set(l_.map(t=>t[0]));function XT(){const t=ct(y=>y.selected),e=ct(y=>y.requestFocus),n=ct(y=>y.query),i=ct(y=>y.setQuery),r=ct(y=>y.floor),s=ct(y=>y.setFloor),o=ct(y=>y.mode),[a,l]=un.useState({cooling:!0,power:!0,it:!0,mgmt:!0}),c=un.useRef(null),[u,d]=un.useState({top:!1,bottom:!1}),[h,p]=un.useState(!1),g=n.trim().toLowerCase();function x(y){return Object.keys(Sn).filter(D=>{const A=Sn[D];return!(A.cat!==y||o==="single"&&!l0.has(D)||g&&(A.name+A.en).toLowerCase().indexOf(g)===-1)})}function m(){const y=c.current;if(!y)return;const D=Math.max(0,y.scrollHeight-y.clientHeight);d({top:y.scrollTop>8,bottom:y.scrollTop<D-8}),p(y.scrollHeight>y.clientHeight+2)}un.useEffect(()=>{m()},[n,t,a]),un.useEffect(()=>{const y=c.current;if(y)return y.addEventListener("scroll",m,{passive:!0}),()=>y.removeEventListener("scroll",m)},[]);function f(y){if(y.key==="Enter")for(const D of Xu){const A=x(D);if(A.length){e(A[0]);return}}}const _=t?Sn[t]:null,v=Xu.some(y=>x(y).length>0);return be.jsxs("aside",{className:"learning-panel",children:[be.jsxs("div",{className:"side-head",children:[be.jsx("span",{className:"search-symbol","aria-hidden":"true",children:be.jsxs("svg",{viewBox:"0 0 72 72",focusable:"false",children:[be.jsx("circle",{cx:"30",cy:"30",r:"26"}),be.jsx("path",{d:"M48.4 48.4L63.5 63.5"})]})}),be.jsx("input",{className:"search",type:"text","aria-label":"장비와 용어 검색",placeholder:"검색",autoComplete:"off",spellCheck:"false",value:n,onChange:y=>i(y.target.value),onKeyDown:f}),be.jsx("button",{className:`search-clear${n?" show":""}`,type:"button","aria-label":"검색어 지우기",onClick:()=>i(""),children:be.jsxs("svg",{viewBox:"0 0 32 32",focusable:"false",children:[be.jsx("path",{d:"M5 5L27 27"}),be.jsx("path",{d:"M27 5L5 27"})]})})]}),be.jsxs("div",{className:`side-body${t?" has-selection":""}`,ref:c,children:[_&&be.jsxs("div",{className:"detail show",style:{"--cat":Qr[_.cat].color},children:[be.jsxs("div",{className:"d-title-block",children:[be.jsx("div",{className:"d-name",children:_.name}),be.jsx("div",{className:"d-en",children:_.en})]}),be.jsx("div",{className:"d-desc",children:_.desc}),be.jsx("div",{className:"d-facts",children:_.facts.map(y=>be.jsx("div",{className:"f",children:y},y))}),be.jsx("div",{className:"d-rel",children:_.rel.filter(y=>Sn[y]&&(o!=="single"||l0.has(y))).slice(0,3).map(y=>be.jsx("button",{"data-cat":Sn[y].cat,style:{"--tag-color":Qr[Sn[y].cat].color},onClick:()=>e(y),children:Sn[y].name},y))})]}),be.jsxs("div",{className:"list",children:[Xu.map(y=>{const D=x(y);if(!D.length)return null;const A=!g&&a[y];return be.jsxs("div",{children:[be.jsxs("div",{className:`group-lbl${A?" collapsed":""}`,onClick:()=>l(T=>({...T,[y]:!T[y]})),children:[be.jsx("span",{className:"dot",style:{background:Qr[y].color}}),Qr[y].label]}),!A&&D.map(T=>be.jsxs("div",{className:`term-item${t===T?" sel":""}`,style:{"--cat":Qr[Sn[T].cat].color},onClick:()=>e(T),children:[be.jsx("span",{className:"tn",children:Sn[T].name}),be.jsx("span",{className:"te",children:Sn[T].en})]},T))]},y)}),!v&&be.jsx("div",{className:"empty",children:"일치하는 용어가 없습니다."})]})]}),o!=="single"&&be.jsx("nav",{className:`floor-nav${h?" divided":""}`,"aria-label":"층 선택",children:Object.entries(GT).map(([y,D],A)=>be.jsxs(un.Fragment,{children:[A>0&&be.jsx("span",{className:"floor-sep","aria-hidden":"true"}),be.jsx("button",{className:`floor-btn${r===y?" on":""}`,"aria-pressed":r===y,onClick:()=>s(r===y?"all":y),children:D})]},y))}),be.jsx("div",{className:`scroll-edge scroll-edge-top${u.top?" visible":""}`}),be.jsx("div",{className:`scroll-edge scroll-edge-bottom${u.bottom?" visible":""}`})]})}const jT=t=>t<12?"b1":t<25.5?"f1":t<39?"f2":"roof",c0={multi:{home:{az:-.62,pol:1.02,dist:350,tx:-22,ty:10,tz:-6},far:4e3,zoomMin:28,zoomMax:560,flyMin:48,flyMax:150,flyFallback:70},single:{home:{az:-.62,pol:.98,dist:1650,tx:0,ty:55,tz:0},far:9e3,zoomMin:380,zoomMax:3600,flyMin:420,flyMax:1500,flyFallback:700}};function YT(){const t=un.useRef(null);return un.useEffect(()=>{const e=t.current,n=e.querySelector("canvas"),i=e.querySelector(".leaders"),r=e.querySelector(".selected-leader"),s=e.querySelector(".labels"),o=e.querySelector(".tip3d"),l=ct.getState().mode==="single",c=l?l_:a_,u=l?c0.single:c0.multi,d=()=>window.__designScale||1,h=new iT({canvas:n,antialias:!0}),p=()=>h.setPixelRatio(Math.min(Math.max((window.devicePixelRatio||1)*d(),.75),2.5));p(),h.setClearColor(16777215,1),h.outputColorSpace=yi;const g=new rT,x=new ni(33,1,1,u.far),m=new I(u.home.tx,u.home.ty-4,u.home.tz),f={az:u.home.az,pol:u.home.pol,dist:u.home.dist},_=u.home;function v(){const C=Math.sin(f.pol),P=Math.cos(f.pol);x.position.set(m.x+f.dist*C*Math.sin(f.az),m.y+f.dist*P,m.z+f.dist*C*Math.cos(f.az)),x.lookAt(m),te()}g.add(new MT(16777215,15330802,1.12));const y=new n0(16777215,.42);y.position.set(120,180,80),g.add(y);const D=new n0(16777215,.2);D.position.set(-100,80,-120),g.add(D),l?WT(g):PT(g);const{groupReg:A,pickables:T,wallsFade:L,flows:Y,slabs:S}=_t;(function(){if(l)return;const P=[];for(const F in A)A[F].traverse(N=>{if(!N.isMesh||!N.material||!N.material.color||N.userData.flowPart||N.userData.selectionOutline||P.indexOf(N.material)!==-1)return;P.push(N.material);const q={h:0,s:0,l:0};N.material.color.getHSL(q),q.s>.04&&(q.s=Math.min(1,q.s*1.12+.015)),N.material.color.setHSL(q.h,q.s,q.l)})})();const w=[],X={};for(let C=0;C<c.length;C++){const P=c[C][0],F=Sn[P];X[P]=c[C][1][2];const N=document.createElement("div");N.className="lbl",N.setAttribute("data-label-id",P),N.style.setProperty("--cat",Qr[F.cat].color),N.innerHTML='<div class="lt">'+F.name+'</div><div class="le">'+F.en+"</div>",N.addEventListener("click",ye=>{ye.stopPropagation(),ne(),ct.getState().setSelected(P)}),N.addEventListener("mouseenter",ye=>O(P,ye)),N.addEventListener("mousemove",ee),N.addEventListener("mouseleave",ne),s.appendChild(N);const q=document.createElementNS("http://www.w3.org/2000/svg","line");q.setAttribute("stroke","#929497"),q.setAttribute("stroke-width","1.6"),q.setAttribute("stroke-dasharray","0.1 7"),q.setAttribute("stroke-linecap","round"),q.setAttribute("stroke-opacity","0.88"),i.appendChild(q);const ie=document.createElementNS("http://www.w3.org/2000/svg","circle");ie.setAttribute("r","1.25"),ie.setAttribute("fill","#929497"),ie.setAttribute("stroke","#929497"),ie.setAttribute("stroke-opacity","0.88"),i.appendChild(ie),w.push({id:P,anchor:Yn(c[C][1][0],c[C][1][1],c[C][1][2]),div:N,line:q,dot:ie,hidden:!1,sx:0,sy:0,floor:l?"all":jT(c[C][1][2])})}let W=!0,K=null;function te(){e.classList.add("labels-moving"),W=!0,K&&clearTimeout(K),K=setTimeout(()=>{e.classList.remove("labels-moving"),j(!0)},260)}function j(C){if(!ct.getState().labelsOn||e.classList.contains("labels-moving")||!C&&!W)return;W=!1;const P=e.clientWidth,F=e.clientHeight;if(!P||!F)return;const N=[],q=Math.max(104,Math.min(140,P*.105)),ie=31;for(let Q=0;Q<w.length;Q++){const re=w[Q];if(re.hidden){re.div.classList.add("hid"),re.line.setAttribute("opacity","0"),re.dot.setAttribute("opacity","0");continue}const fe=re.anchor.clone().project(x);re.sx=(fe.x*.5+.5)*P,re.sy=(-fe.y*.5+.5)*F,re.div.classList.remove("hid"),re.div.style.width=q+"px",re.div.style.maxWidth=q+"px",N.push(re)}if(!N.length)return;const ye={l:Math.max(18,P*.018)+20,r:P-Math.max(18,P*.018)-20,t:Math.max(16,F*.025)+50,b:F-Math.max(16,F*.025)-40},ge=Math.max(30,P*.022),ve=Math.max(26,F*.038),mt=ye.r-ye.l,Zt=Math.max(4,Math.floor((mt+ge)/(q+ge)));let bt=Math.min(Zt,Math.ceil(N.length*.34)),Bt=Math.min(Zt,Math.ceil(N.length*.34)),Un=Math.max(0,N.length-bt-Bt),Hn=Math.ceil(Un/2),It=Un-Hn;const mn=Math.max(Hn,It),jt=ye.b-ye.t-ie*2-ve*2;if(mn>1&&jt/(mn-1)<ie+ve){const Q=N.length-(Math.floor(jt/(ie+ve))+1)*2;bt=Math.min(Zt,Math.ceil(Q/2)),Bt=Math.min(Zt,Q-bt),Un=Math.max(0,N.length-bt-Bt),Hn=Math.ceil(Un/2),It=Un-Hn}const st=[];function Vn(Q,re,fe){if(!Q)return;const Ce=mt-q;for(let Me=0;Me<Q;Me++)st.push({x:ye.l+(Q===1?Ce/2:Ce*Me/(Q-1)),y:re,side:fe})}function Tn(Q,re,fe){if(!Q)return;const Ce=ye.t+ie+ve,Me=ye.b-ie*2-ve;for(let ae=0;ae<Q;ae++)st.push({x:re,y:Q===1?(Ce+Me)/2:Ce+(Me-Ce)*ae/(Q-1),side:fe})}Vn(bt,ye.t,"top"),Vn(Bt,ye.b-ie,"bottom"),Tn(Hn,ye.l,"left"),Tn(It,ye.r-q,"right"),function(){const re=ye.r-q,fe=ye.t,Ce=ye.b-ie,Me=Math.max(18,(q+ge)/4),ae=Math.max(14,(ie+ve)/3);for(let et=ye.l;et<=re+.5;et+=Me)st.push({x:Math.min(et,re),y:fe,side:"top"}),st.push({x:Math.min(et,re),y:Ce,side:"bottom"});st.push({x:re,y:fe,side:"top"}),st.push({x:re,y:Ce,side:"bottom"});const We=ye.t+ie+ve,Ne=ye.b-ie*2-ve;for(let et=We;et<=Ne+.5;et+=ae)st.push({x:ye.l,y:Math.min(et,Ne),side:"left"}),st.push({x:ye.r-q,y:Math.min(et,Ne),side:"right"});st.push({x:ye.l,y:Ne,side:"left"}),st.push({x:ye.r-q,y:Ne,side:"right"})}();function Oi(){const Q=[],re=new ps,fe=new I;return g.updateMatrixWorld(!0),x.updateMatrixWorld(!0),g.traverse(Ce=>{if(!Ce.isMesh||!Ce.visible||Ce.userData.groundSurface||Ce.userData.selectionOutline||Ce.userData.flowParticle||(re.setFromObject(Ce),re.isEmpty()))return;let Me=1/0,ae=1/0,We=-1/0,Ne=-1/0,et=!1;for(let qt=0;qt<2;qt++)for(let At=0;At<2;At++)for(let Vt=0;Vt<2;Vt++){if(fe.set(qt?re.max.x:re.min.x,At?re.max.y:re.min.y,Vt?re.max.z:re.min.z).project(x),!isFinite(fe.x)||!isFinite(fe.y))continue;const yt=(fe.x*.5+.5)*P,gn=(-fe.y*.5+.5)*F;et=!0,Me=Math.min(Me,yt),We=Math.max(We,yt),ae=Math.min(ae,gn),Ne=Math.max(Ne,gn)}!et||We<0||Me>P||Ne<0||ae>F||Q.push({l:Me-4,r:We+4,t:ae-4,b:Ne+4})}),Q}const kr=[P,F,x.position.x.toFixed(3),x.position.y.toFixed(3),x.position.z.toFixed(3),x.quaternion.x.toFixed(5),x.quaternion.y.toFixed(5),x.quaternion.z.toFixed(5),x.quaternion.w.toFixed(5)].join("|");let Gn;j._key===kr&&j._rects?Gn=j._rects:(Gn=Oi(),j._key=kr,j._rects=Gn);function E(Q){const re=Q.x-3,fe=Q.x+q+3,Ce=Q.y-3,Me=Q.y+ie+3;let ae=0,We=0;for(let Ne=0;Ne<Gn.length;Ne++){const et=Gn[Ne],qt=Math.min(fe,et.r)-Math.max(re,et.l),At=Math.min(Me,et.b)-Math.max(Ce,et.t);qt>0&&At>0&&(We++,ae=Math.max(ae,qt*At))}return ae?24e4+ae*45+Math.min(We,8)*3500:0}for(let Q=0;Q<st.length;Q++)st[Q].modelPenalty=E(st[Q]);function z(Q,re,fe,Ce){function Me(ae,We,Ne){return(Ne.y-ae.y)*(We.x-ae.x)>(We.y-ae.y)*(Ne.x-ae.x)}return Me(Q,fe,Ce)!==Me(re,fe,Ce)&&Me(Q,re,fe)!==Me(Q,re,Ce)}function G(Q,re,fe){const Ce={l:fe.x+5,r:fe.x+q,t:fe.y+1,b:fe.y+ie-1};if(Q.x>Ce.l&&Q.x<Ce.r&&Q.y>Ce.t&&Q.y<Ce.b)return!0;const Me={x:Ce.l,y:Ce.t},ae={x:Ce.r,y:Ce.t},We={x:Ce.r,y:Ce.b},Ne={x:Ce.l,y:Ce.b};return z(Q,re,Me,ae)||z(Q,re,ae,We)||z(Q,re,We,Ne)||z(Q,re,Ne,Me)}function V(Q,re){const fe={x:Q.x,y:Q.y},Ce={x:Q.x,y:Q.y+ie-2},Me={x:re.sx,y:re.sy},ae=(G(Me,fe,Q)?1e6:0)+Math.hypot(Me.x-fe.x,Me.y-fe.y),We=(G(Me,Ce,Q)?1e6:0)+Math.hypot(Me.x-Ce.x,Me.y-Ce.y);return ae<=We?fe:Ce}function k(Q,re){return!(Q.x+q+ge<=re.x||re.x+q+ge<=Q.x||Q.y+ie+ve<=re.y||re.y+ie+ve<=Q.y)}const he=P/2,Se=F/2,Fe={},pe=[];N.sort((Q,re)=>Math.hypot(re.sx-he,re.sy-Se)-Math.hypot(Q.sx-he,Q.sy-Se));for(let Q=0;Q<N.length;Q++){const re=N[Q];let fe=-1,Ce=1/0,Me=re.sx-he,ae=re.sy-Se;const We=Math.max(1,Math.hypot(Me,ae));Me/=We,ae/=We;for(let Ne=0;Ne<2;Ne++){for(let et=0;et<st.length;et++){if(Fe[et])continue;let qt=!1;for(let Gt=0;Gt<pe.length;Gt++)if(k(st[et],pe[Gt].slot)){qt=!0;break}if(Ne===0&&qt)continue;const At=V(st[et],re);let Vt=At.x-he,yt=At.y-Se;const gn=Math.max(1,Math.hypot(Vt,yt));Vt/=gn,yt/=gn;let Hr=Math.hypot(re.sx-At.x,re.sy-At.y)+(1-(Me*Vt+ae*yt))*1100+(st[et].modelPenalty||0)+(qt?5e6:0);for(let Gt=0;Gt<pe.length;Gt++)z({x:re.sx,y:re.sy},At,{x:pe[Gt].item.sx,y:pe[Gt].item.sy},pe[Gt].end)&&(Hr+=1e5);Hr<Ce&&(Ce=Hr,fe=et)}if(fe>=0)break}fe<0||(Fe[fe]=!0,pe.push({item:re,slot:st[fe],end:V(st[fe],re)}))}function qe(Q){let re=0;for(let fe=0;fe<Q.length;fe++){const Ce=Q[fe].item,Me=V(Q[fe].slot,Ce),ae=Ce.sx-he,We=Ce.sy-Se,Ne=Math.max(1,Math.hypot(ae,We)),et=Me.x-he,qt=Me.y-Se,At=Math.max(1,Math.hypot(et,qt));re+=Math.hypot(Ce.sx-Me.x,Ce.sy-Me.y)+(1-(ae/Ne*et/At+We/Ne*qt/At))*700+(Q[fe].slot.modelPenalty||0);for(let Vt=0;Vt<Q.length;Vt++)Vt!==fe&&G({x:Ce.sx,y:Ce.sy},Me,Q[Vt].slot)&&(re+=45e3);for(let Vt=fe+1;Vt<Q.length;Vt++){const yt=Q[Vt].item,gn=V(Q[Vt].slot,yt);z({x:Ce.sx,y:Ce.sy},Me,{x:yt.sx,y:yt.sy},gn)&&(re+=14e4),k(Q[fe].slot,Q[Vt].slot)&&(re+=8e6)}}return re}let Ke=qe(pe);for(let Q=0;Q<18;Q++){let re=-1,fe=-1,Ce=Ke;for(let ae=0;ae<pe.length-1;ae++)for(let We=ae+1;We<pe.length;We++){let Ne=pe[ae].slot;pe[ae].slot=pe[We].slot,pe[We].slot=Ne;const et=qe(pe);Ne=pe[ae].slot,pe[ae].slot=pe[We].slot,pe[We].slot=Ne,et<Ce-.5&&(Ce=et,re=ae,fe=We)}if(re<0)break;const Me=pe[re].slot;pe[re].slot=pe[fe].slot,pe[fe].slot=Me,pe[re].end=V(pe[re].slot,pe[re].item),pe[fe].end=V(pe[fe].slot,pe[fe].item),Ke=Ce}const Oe=ct.getState().selected;for(let Q=0;Q<pe.length;Q++){const re=pe[Q],fe=re.item,Ce=re.slot.x,Me=re.slot.y;fe.div.style.left=Ce+"px",fe.div.style.top=Me+"px";const ae=V(re.slot,fe),We=ae.x,Ne=ae.y,et=ht(fe,We,Ne,P,F);fe.line.setAttribute("x1",et.x),fe.line.setAttribute("y1",et.y),fe.line.setAttribute("x2",We),fe.line.setAttribute("y2",Ne),fe.dot.setAttribute("cx",et.x),fe.dot.setAttribute("cy",et.y),fe.line.setAttribute("opacity",fe.id===Oe?"1":Oe?".6":".78"),fe.dot.setAttribute("opacity",fe.id===Oe?"1":Oe?".6":".78")}}function oe(){const C=e.clientWidth,P=e.clientHeight,F=ct.getState().selected;for(let N=0;N<w.length;N++){const q=w[N],ie=parseFloat(q.line.getAttribute("x2")),ye=parseFloat(q.line.getAttribute("y2"));if(!isFinite(ie)||!isFinite(ye))continue;const ge=q.id===F?ht(q,ie,ye,C,P):{x:q.sx,y:q.sy};q.line.setAttribute("x1",ge.x),q.line.setAttribute("y1",ge.y),q.dot.setAttribute("cx",ge.x),q.dot.setAttribute("cy",ge.y)}}function O(C,P){const F=Sn[C];F&&(o.style.setProperty("--tip-color",Qr[F.cat].color),o.classList.toggle("power-tip",F.cat==="power"),o.innerHTML='<div class="t-name">'+F.name+'</div><div class="t-en">'+F.en+'</div><div class="t-short">'+F.short+"</div>",o.style.display="block",P&&ee(P))}function ee(C){const P=d(),F=e.getBoundingClientRect(),N=(C.clientX-F.left)/P,q=(C.clientY-F.top)/P,ie=14;let ye=N+ie,ge=q+ie;const ve=o.offsetWidth,mt=o.offsetHeight;ye+ve>e.clientWidth-8&&(ye=N-ve-ie),ge+mt>e.clientHeight-8&&(ge=q-mt-ie),o.style.left=ye+"px",o.style.top=ge+"px"}function ne(){o.style.display="none"}function xe(C,P){const F=A[C];F&&F.traverse(N=>{N.material&&P(N)})}let He=null;function ut(C){He!==C&&(He&&xe(He,P=>{P.material.emissive&&!P.userData.flowPart&&P.material.emissive.setHex(0)}),He=C,He&&xe(He,P=>{P.material.emissive&&!P.userData.flowPart&&P.material.emissive.setHex(2443119)}))}let $=[];function ce(){for(let C=0;C<$.length;C++){const P=$[C];P.material.color.copy(P.color),P.emissive&&P.material.emissive.copy(P.emissive),P.hadVC&&(P.material.vertexColors=!0,P.material.needsUpdate=!0)}$=[]}function Re(C){ce();const P=A[C],F=new Ze("#d2d4d6");g.traverse(N=>{if(!N.material||!N.material.color||N.userData.selectionOutline)return;for(let ie=N;ie;ie=ie.parent)if(ie===P)return;for(let ie=0;ie<$.length;ie++)if($[ie].material===N.material)return;const q={material:N.material,color:N.material.color.clone()};N.material.emissive&&(q.emissive=N.material.emissive.clone()),N.material.vertexColors?(q.hadVC=!0,N.material.vertexColors=!1,N.material.needsUpdate=!0,N.material.color.set("#c4c7ca")):N.material.color.lerp(F,.78),N.material.emissive&&N.material.emissive.setHex(0),$.push(q)})}let Te=[];function nt(){for(let C=0;C<Te.length;C++){const P=Te[C];P.parent&&P.parent.remove(P),P.geometry&&P.geometry.dispose(),P.material&&P.material.dispose()}Te=[]}function Je(C,P,F,N,q){const ie=new I().subVectors(F,P),ye=ie.length();if(ye<.01)return;const ge=new Mt(new Lr(N,N,ye,6,1,!1),q.clone());ge.position.copy(P).add(F).multiplyScalar(.5),ge.quaternion.setFromUnitVectors(new I(0,1,0),ie.normalize()),ge.userData.selectionOutline=!0,ge.renderOrder=80,C.add(ge),Te.push(ge)}function gt(C){nt();const P=A[C];if(!P)return;const F=[];let N=0;const q=new I;P.traverse(ge=>{if(!ge.isMesh||!ge.geometry||ge.userData.flowPart||ge.userData.selectionOutline||(ge.geometry.computeBoundingBox(),!ge.geometry.boundingBox))return;const ve=ge.geometry.boundingBox.getSize(q).length();N=Math.max(N,ve),F.push({mesh:ge,diag:ve})});const ie=Math.max(.06,Math.min(.13,N*.0065)),ye=new Nc({color:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let ge=0;ge<F.length;ge++){const ve=F[ge].mesh,mt=ve.geometry.type||"";if(F[ge].diag<N*.26||!/BoxGeometry|CylinderGeometry/.test(mt))continue;const Zt=new Bh(ve.geometry,24),bt=Zt.attributes.position;for(let Bt=0;Bt<bt.count;Bt+=2)Je(ve,new I().fromBufferAttribute(bt,Bt),new I().fromBufferAttribute(bt,Bt+1),ie,ye);Zt.dispose()}ye.dispose()}function Et(C){if(C.length<3)return C;C.sort((q,ie)=>q.x===ie.x?q.y-ie.y:q.x-ie.x);function P(q,ie,ye){return(ie.x-q.x)*(ye.y-q.y)-(ie.y-q.y)*(ye.x-q.x)}const F=[],N=[];for(let q=0;q<C.length;q++){for(;F.length>=2&&P(F[F.length-2],F[F.length-1],C[q])<=0;)F.pop();F.push(C[q])}for(let q=C.length-1;q>=0;q--){for(;N.length>=2&&P(N[N.length-2],N[N.length-1],C[q])<=0;)N.pop();N.push(C[q])}return F.pop(),N.pop(),F.concat(N)}function ht(C,P,F,N,q){const ie=ct.getState().selected;if(C.id!==ie||!A[C.id])return{x:C.sx,y:C.sy};const ye=[],ge=A[C.id];ge.updateMatrixWorld(!0),ge.traverse(It=>{if(!It.isMesh||!It.geometry||It.userData.selectionOutline||It.userData.flowPart)return;It.geometry.computeBoundingBox();const mn=It.geometry.boundingBox;if(!mn)return;const jt=mn.min,st=mn.max,Vn=[[jt.x,jt.y,jt.z],[st.x,jt.y,jt.z],[jt.x,st.y,jt.z],[st.x,st.y,jt.z],[jt.x,jt.y,st.z],[st.x,jt.y,st.z],[jt.x,st.y,st.z],[st.x,st.y,st.z]];for(let Tn=0;Tn<Vn.length;Tn++){const Oi=new I(Vn[Tn][0],Vn[Tn][1],Vn[Tn][2]).applyMatrix4(It.matrixWorld).project(x);ye.push({x:(Oi.x*.5+.5)*N,y:(-Oi.y*.5+.5)*q})}});const ve=Et(ye);if(ve.length<3)return{x:C.sx,y:C.sy};let mt=0,Zt=0;for(let It=0;It<ve.length;It++)mt+=ve[It].x,Zt+=ve[It].y;mt/=ve.length,Zt/=ve.length;const bt=P-mt,Bt=F-Zt;let Un=1/0,Hn=null;for(let It=0;It<ve.length;It++){const mn=ve[It],jt=ve[(It+1)%ve.length],st=jt.x-mn.x,Vn=jt.y-mn.y,Tn=bt*Vn-Bt*st;if(Math.abs(Tn)<1e-4)continue;const Oi=mn.x-mt,kr=mn.y-Zt,Gn=(Oi*Vn-kr*st)/Tn,E=(Oi*Bt-kr*bt)/Tn;Gn>0&&E>=0&&E<=1&&Gn<Un&&(Un=Gn,Hn={x:mt+bt*Gn,y:Zt+Bt*Gn})}return Hn||{x:C.sx,y:C.sy}}let U=[];function pn(){for(let C=0;C<U.length;C++)U[C].m.depthTest=U[C].dt,U[C].obj.renderOrder=U[C].ro;U=[]}function lt(){const C=ct.getState().selected;for(let P=0;P<w.length;P++){const F=w[P];if(F.hidden){F.div.classList.remove("sel","dim"),F.line.setAttribute("opacity","0"),F.dot.setAttribute("opacity","0"),i.appendChild(F.line),i.appendChild(F.dot);continue}const N=F.id===C;F.div.classList.toggle("sel",N),F.div.classList.toggle("dim",!!C&&!N),F.line.setAttribute("stroke",N?"#000":"#929497"),F.line.setAttribute("stroke-width",N?"1.65":"1.6"),F.dot.setAttribute("fill",N?"#000":"#929497"),F.dot.setAttribute("r",N?"2.24":"1.25"),F.dot.setAttribute("stroke",N?"#000":"#929497"),F.dot.setAttribute("stroke-opacity",N?"1":".88"),F.line.setAttribute("stroke-opacity",N?"1":".88"),F.line.setAttribute("opacity",N?"1":C?".6":".78"),F.dot.setAttribute("opacity",N?"1":C?".6":".78"),(N?r:i).appendChild(F.line),(N?r:i).appendChild(F.dot)}}function pt(){const{filter:C,floor:P}=ct.getState();g.traverse(F=>{if(!F.material)return;const N=F.material.userData&&F.material.userData.baseOp!==void 0?F.material.userData.baseOp:1;let q=!1;for(let ye=F;ye;ye=ye.parent)if(ye.userData&&ye.userData.cat){q=C!=="all"&&ye.userData.cat!==C;break}const ie=P!=="all"&&F.userData.floor&&F.userData.floor!==P||F.userData.siteDetail&&P!=="f1"&&P!=="all";F.userData._dimmed=q||!!ie,F.userData._floorHidden=!!ie,F.visible=!ie,F.material.transparent=q||N<1,F.material.opacity=q?F.isLineSegments?.03:.06:N,F.userData.terrain&&F.userData.floorTop&&(F.material.transparent=!0,F.material.opacity=P==="b1"?.14:N)});for(let F=0;F<w.length;F++){const N=w[F],q=Sn[N.id].cat;N.hidden=C!=="all"&&q!==C||P!=="all"&&N.floor!==P}W=!0,j(!0),lt(),Qe()}function Qe(){const{flowState:C}=ct.getState();for(let P=0;P<Y.length;P++){const F=!!C[Y[P].key];Y[P].enabled=F;for(let N=0;N<Y[P].parts.length;N++){const q=Y[P].parts[N],ie=q.material;if(q.visible=!q.userData._floorHidden,ie.userData||(ie.userData={}),ie.userData.flowBaseColor||(ie.userData.flowBaseColor=ie.color.clone()),ie.color.copy(ie.userData.flowBaseColor),F||ie.color.lerp(new Ze("#c8cacc"),.74),q.userData._dimmed)continue;const ye=ie.userData.baseOp===void 0?1:ie.userData.baseOp;ie.transparent=!F||ye<1,ie.opacity=F?ye:Math.min(.58,ye*.58),ie.needsUpdate=!0}for(let N=0;N<Y[P].dots.length;N++)Y[P].dots[N].visible=F&&!Y[P].dots[N].userData._floorHidden}}let St=0;const Ye={x:0,y:0};let R=!1;const M=new TT,H=new $e;let Z=null;function le(C){Z=null,St=C.button===2?2:1,R=!1,Ye.x=C.clientX,Ye.y=C.clientY}function J(C){if(!St){me(C);return}const P=d(),F=(C.clientX-Ye.x)/P,N=(C.clientY-Ye.y)/P;if(Math.abs(F)+Math.abs(N)>3&&(R=!0),Ye.x=C.clientX,Ye.y=C.clientY,St===1)f.az-=F*.0052,f.pol=Math.max(.06,Math.min(1.54,f.pol-N*.0042));else{const q=f.dist*.0011,ie=new I().subVectors(x.position,m).cross(new I(0,1,0)).normalize(),ye=new I(0,1,0);m.add(ie.multiplyScalar(F*q)).add(ye.multiplyScalar(N*q))}v()}function Be(){St=0}function Ae(C){C.preventDefault(),Z=null;const P=Math.max(u.zoomMin,Math.min(u.zoomMax,f.dist*(C.deltaY>0?1.1:1/1.1))),F=P/f.dist,N=n.getBoundingClientRect();H.x=(C.clientX-N.left)/N.width*2-1,H.y=-((C.clientY-N.top)/N.height)*2+1,M.setFromCamera(H,x);let q=new I;const ie=M.intersectObjects(T,!1);ie.length?q.copy(ie[0].point):M.ray.intersectPlane(new gr(new I(0,1,0),0),q)||(q=null),q&&m.lerp(q,1-F),f.dist=P,v()}function Le(C){let P=C;for(;P;){if(P.userData&&P.userData.term)return P.userData.term;P=P.parent}return null}function vt(C){const P=n.getBoundingClientRect();H.x=(C.clientX-P.left)/P.width*2-1,H.y=-((C.clientY-P.top)/P.height)*2+1,M.setFromCamera(H,x);const F=M.intersectObjects(T,!1),{filter:N,floor:q}=ct.getState();for(let ie=0;ie<F.length;ie++){const ye=F[ie].object;if(ye.userData._dimmed)continue;const ge=Le(ye);if(ge){if(N!=="all"&&Sn[ge]&&Sn[ge].cat!==N||q!=="all"&&ye.userData.floor&&ye.userData.floor!==q)continue;return ge}}return null}function me(C){if(C.target!==n){ut(null);return}const P=vt(C);ut(P),P?(O(P,C),n.style.cursor="pointer"):(ne(),n.style.cursor=St?"grabbing":"default")}function Ie(C){if(R){R=!1;return}const P=vt(C);ct.getState().setSelected(P||null)}n.addEventListener("mousedown",le),window.addEventListener("mousemove",J),window.addEventListener("mouseup",Be),n.addEventListener("contextmenu",C=>C.preventDefault()),n.addEventListener("wheel",Ae,{passive:!1}),n.addEventListener("click",Ie);let Ve={selected:null,filter:"all",floor:"all",flowState:ct.getState().flowState,resetTick:0,labelsOn:!0,focusTick:0};const tt=ct.subscribe(C=>{if(C.labelsOn!==Ve.labelsOn&&(e.classList.toggle("labels-off",!C.labelsOn),C.labelsOn&&(W=!0,j(!0))),C.focusTick!==Ve.focusTick&&C.focusId){const F=w.find(N=>N.id===C.focusId);if(F){let N=u.flyFallback;const q=A[C.focusId];if(q){const ie=new ps().setFromObject(q);if(!ie.isEmpty()){const ye=ie.getBoundingSphere(new ba);N=am.clamp(ye.radius*2.8,u.flyMin,u.flyMax)}}Z={t:F.anchor.clone(),d:N,p:am.clamp(f.pol,.55,1.15)}}Ve.focusTick=C.focusTick}if(C.resetTick!==Ve.resetTick&&(Z=null,f.az=_.az,f.pol=_.pol,f.dist=_.dist,m.set(_.tx,_.ty,_.tz),v()),(C.filter!==Ve.filter||C.floor!==Ve.floor)&&(pt(),C.selected&&C.filter!=="all"&&Sn[C.selected].cat!==C.filter&&C.setSelected(null)),C.flowState!==Ve.flowState&&(Qe(),C.selected&&Re(C.selected)),C.selected!==Ve.selected)if(C.selected){lt(),oe();const F=C.selected;requestAnimationFrame(()=>{ct.getState().selected===F&&(Re(F),pn(),gt(F),oe())})}else pn(),nt(),ce(),lt(),oe();const P=ct.getState();Ve={selected:P.selected,filter:P.filter,floor:P.floor,flowState:P.flowState,resetTick:P.resetTick,labelsOn:P.labelsOn,focusTick:P.focusTick}}),De=new I;let ft=0;function it(C){ft=requestAnimationFrame(it),Z&&(m.lerp(Z.t,.09),f.dist+=(Z.d-f.dist)*.09,f.pol+=(Z.p-f.pol)*.09,v(),m.distanceTo(Z.t)<.4&&Math.abs(f.dist-Z.d)<.8&&(Z=null));const P=ct.getState().floor,F=P!=="all";De.subVectors(x.position,m),De.y=0,De.normalize();for(let ge=0;ge<L.length;ge++){const ve=L[ge],mt=ve.m.userData._dimmed?.06:ve.m.userData.terrain&&P==="b1"?.12:ve.n.dot(De)>.18?.07:F?.26:.95;ve.m.material.transparent=!0,ve.m.material.opacity+=(mt-ve.m.material.opacity)*.18,ve.e.material.opacity=ve.m.material.opacity>.4?ve.e.material.userData.baseOp:F&&!ve.m.userData._dimmed?.3:0}const N=ct.getState().selected,q=N!=null&&X[N]!==void 0?X[N]:1/0,ie=ct.getState().floor;for(let ge=0;ge<S.length;ge++){const ve=S[ge];let mt=ve.baseOp;ve.m.userData._dimmed?mt=.06:ie!=="all"&&ve.floor===ie?mt=.97:q<ve.zTop-1?mt=.08:ve.floor==="roof"&&f.pol<.62&&(mt=.1),ve.m.material.transparent=!0,ve.m.material.opacity+=(mt-ve.m.material.opacity)*.15,ve.e.material.transparent=!0,ve.e.material.opacity=ve.m.material.opacity>.4?1:0,ve.top.material.opacity=Math.min(ve.top.material.userData.baseOp,ve.m.material.opacity)}const ye=(C||0)*1e-4;for(let ge=0;ge<Y.length;ge++){const ve=Y[ge];if(ve.enabled)for(let mt=0;mt<ve.dots.length;mt++){const Zt=(ye+ve.off+ve.dots[mt].userData.flowU+1)%1*ve.tot;let bt=1;for(;bt<ve.lens.length&&ve.lens[bt]<Zt;)bt++;const Bt=ve.vs[bt-1],Un=ve.vs[Math.min(bt,ve.vs.length-1)],Hn=(Zt-ve.lens[bt-1])/Math.max(ve.lens[bt]-ve.lens[bt-1],.001);ve.dots[mt].position.lerpVectors(Bt,Un,Math.min(Hn,1))}}j(),h.render(g,x)}function Tt(){const C=e.clientWidth,P=e.clientHeight;!C||!P||(h.setSize(C,P,!1),x.aspect=C/P,x.updateProjectionMatrix(),i.setAttribute("width",C),i.setAttribute("height",P),i.setAttribute("viewBox","0 0 "+C+" "+P),r.setAttribute("width",C),r.setAttribute("height",P),r.setAttribute("viewBox","0 0 "+C+" "+P),W=!0,te())}const B=new ResizeObserver(Tt);B.observe(e);const Pe=()=>p();return window.addEventListener("resize",Pe),Tt(),v(),pt(),it(0),window.__AIDC={ctx:_t,scene:g,useAppStore:ct,applyVisibility:pt},()=>{cancelAnimationFrame(ft),B.disconnect(),tt(),window.removeEventListener("resize",Pe),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",Be),h.dispose(),s.innerHTML="",i.innerHTML="",r.innerHTML=""}},[]),be.jsxs("div",{ref:t,className:"viewport3d",children:[be.jsx("canvas",{className:"gl"}),be.jsx("svg",{className:"leaders"}),be.jsx("div",{className:"labels"}),be.jsx("svg",{className:"selected-leader","aria-hidden":"true"}),be.jsx("div",{className:"tip3d",role:"tooltip",style:{display:"none"}}),be.jsx("div",{className:"scene-copyright",children:"© 2026 SUNJIN Engineering & Architecture. All rights reserved."})]})}const u0=1908,f0=928;function qT(){const t=ct(n=>n.mode),e=un.useRef(null);return un.useEffect(()=>{const n=e.current;if(!n)return;const i=()=>{const r=Math.max(.1,Math.min(window.innerWidth/u0,window.innerHeight/f0));window.__designScale=r,n.style.transform=`scale(${r})`,n.style.left=(window.innerWidth-u0*r)/2+"px",n.style.top=(window.innerHeight-f0*r)/2+"px"};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),be.jsxs("div",{className:"app-shell",ref:e,children:[be.jsx(zT,{}),be.jsxs("div",{className:"wrap",children:[be.jsx(XT,{}),be.jsxs("main",{className:"stage",children:[be.jsx(VT,{}),be.jsx(YT,{},t)]})]})]})}ju.createRoot(document.getElementById("root")).render(be.jsx(Bo.StrictMode,{children:be.jsx(qT,{})}));
