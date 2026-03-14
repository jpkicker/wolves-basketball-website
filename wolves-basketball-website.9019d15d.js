let e,t,r,n,i;function a(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function s(e){return e&&e.__esModule?e.default:e}function o(e){if(e=L.i?.[e]||e,!tU)try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(!t)return P+e;tU=t[0]}return new URL(P+e,tU).toString()}var l,u,c,h,d,f,p,m,g,y,v,b,x,w,E,S,k,C,_,T,I,N,j,A,R="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},P="./",O={},D={},L=R.parcelRequirebf34;null==L&&((L=function(e){if(e in O)return O[e].exports;if(e in D){var t=D[e];delete D[e];var r={id:e,exports:{}};return O[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){D[e]=t},R.parcelRequirebf34=L);var M=L.register;M("2nzLi",function(e,t){a(e.exports,"Fragment",function(){return r},function(e){return r=e}),a(e.exports,"jsx",function(){return n},function(e){return n=e}),a(e.exports,"jsxs",function(){return i},function(e){return i=e});var r,n,i,s=L("7fPBF"),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},a=null,s=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!h.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:c.current}}r=l,n=d,i=d}),M("7fPBF",function(e,t){e.exports=L("fSPLm")}),M("fSPLm",function(e,t){a(e.exports,"Children",function(){return r},function(e){return r=e}),a(e.exports,"Component",function(){return n},function(e){return n=e}),a(e.exports,"Fragment",function(){return i},function(e){return i=e}),a(e.exports,"Profiler",function(){return s},function(e){return s=e}),a(e.exports,"PureComponent",function(){return o},function(e){return o=e}),a(e.exports,"StrictMode",function(){return l},function(e){return l=e}),a(e.exports,"Suspense",function(){return u},function(e){return u=e}),a(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),a(e.exports,"act",function(){return h},function(e){return h=e}),a(e.exports,"cloneElement",function(){return d},function(e){return d=e}),a(e.exports,"createContext",function(){return f},function(e){return f=e}),a(e.exports,"createElement",function(){return p},function(e){return p=e}),a(e.exports,"createFactory",function(){return m},function(e){return m=e}),a(e.exports,"createRef",function(){return g},function(e){return g=e}),a(e.exports,"forwardRef",function(){return y},function(e){return y=e}),a(e.exports,"isValidElement",function(){return v},function(e){return v=e}),a(e.exports,"lazy",function(){return b},function(e){return b=e}),a(e.exports,"memo",function(){return x},function(e){return x=e}),a(e.exports,"startTransition",function(){return w},function(e){return w=e}),a(e.exports,"unstable_act",function(){return E},function(e){return E=e}),a(e.exports,"useCallback",function(){return S},function(e){return S=e}),a(e.exports,"useContext",function(){return k},function(e){return k=e}),a(e.exports,"useDebugValue",function(){return C},function(e){return C=e}),a(e.exports,"useDeferredValue",function(){return _},function(e){return _=e}),a(e.exports,"useEffect",function(){return T},function(e){return T=e}),a(e.exports,"useId",function(){return I},function(e){return I=e}),a(e.exports,"useImperativeHandle",function(){return N},function(e){return N=e}),a(e.exports,"useInsertionEffect",function(){return j},function(e){return j=e}),a(e.exports,"useLayoutEffect",function(){return A},function(e){return A=e}),a(e.exports,"useMemo",function(){return R},function(e){return R=e}),a(e.exports,"useReducer",function(){return P},function(e){return P=e}),a(e.exports,"useRef",function(){return O},function(e){return O=e}),a(e.exports,"useState",function(){return D},function(e){return D=e}),a(e.exports,"useSyncExternalStore",function(){return L},function(e){return L=e}),a(e.exports,"useTransition",function(){return M},function(e){return M=e}),a(e.exports,"version",function(){return F},function(e){return F=e});var r,n,i,s,o,l,u,c,h,d,f,p,m,g,y,v,b,x,w,E,S,k,C,_,T,I,N,j,A,R,P,O,D,L,M,F,B=Symbol.for("react.element"),z=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),W=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Z={};function ee(e,t,r){this.props=e,this.context=t,this.refs=Z,this.updater=r||X}function et(){}function er(e,t,r){this.props=e,this.context=t,this.refs=Z,this.updater=r||X}ee.prototype.isReactComponent={},ee.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},ee.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},et.prototype=ee.prototype;var en=er.prototype=new et;en.constructor=er,J(en,ee.prototype),en.isPureReactComponent=!0;var ei=Array.isArray,ea=Object.prototype.hasOwnProperty,es={current:null},eo={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,r){var n,i={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)ea.call(t,n)&&!eo.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(1===o)i.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return{$$typeof:B,type:e,key:a,ref:s,props:i,_owner:es.current}}function eu(e){return"object"==typeof e&&null!==e&&e.$$typeof===B}var ec=/\/+/g;function eh(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function ed(e,t,r){if(null==e)return e;var n=[],i=0;return!function e(t,r,n,i,a){var s,o,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case B:case z:c=!0}}if(c)return a=a(c=t),t=""===i?"."+eh(c,0):i,ei(a)?(n="",null!=t&&(n=t.replace(ec,"$&/")+"/"),e(a,r,n,"",function(e){return e})):null!=a&&(eu(a)&&(s=a,o=n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(ec,"$&/")+"/")+t,a={$$typeof:B,type:s.type,key:o,ref:s.ref,props:s.props,_owner:s._owner}),r.push(a)),1;if(c=0,i=""===i?".":i+":",ei(t))for(var h=0;h<t.length;h++){var d=i+eh(u=t[h],h);c+=e(u,r,n,d,a)}else if("function"==typeof(d=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=Y&&l[Y]||l["@@iterator"])?l:null))for(t=d.call(t),h=0;!(u=t.next()).done;)d=i+eh(u=u.value,h++),c+=e(u,r,n,d,a);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}(e,n,"","",function(e){return t.call(r,e,i++)}),n}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},em={transition:null};function eg(){throw Error("act(...) is not supported in production builds of React.")}r={map:ed,forEach:function(e,t,r){ed(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n=ee,i=$,s=U,o=er,l=V,u=G,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:em,ReactCurrentOwner:es},h=eg,d=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=J({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=es.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ea.call(t,l)&&!eo.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==o?o[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:B,type:e.type,key:i,ref:a,props:n,_owner:s}},f=function(e){return(e={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:H,_context:e},e.Consumer=e},p=el,m=function(e){var t=el.bind(null,e);return t.type=e,t},g=function(){return{current:null}},y=function(e){return{$$typeof:q,render:e}},v=eu,b=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ef}},x=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=em.transition;em.transition={};try{e()}finally{em.transition=t}},E=eg,S=function(e,t){return ep.current.useCallback(e,t)},k=function(e){return ep.current.useContext(e)},C=function(){},_=function(e){return ep.current.useDeferredValue(e)},T=function(e,t){return ep.current.useEffect(e,t)},I=function(){return ep.current.useId()},N=function(e,t,r){return ep.current.useImperativeHandle(e,t,r)},j=function(e,t){return ep.current.useInsertionEffect(e,t)},A=function(e,t){return ep.current.useLayoutEffect(e,t)},R=function(e,t){return ep.current.useMemo(e,t)},P=function(e,t,r){return ep.current.useReducer(e,t,r)},O=function(e){return ep.current.useRef(e)},D=function(e){return ep.current.useState(e)},L=function(e,t,r){return ep.current.useSyncExternalStore(e,t,r)},M=function(){return ep.current.useTransition()},F="18.3.1"}),M("6EA3T",function(e,t){a(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return U},function(e){return U=e}),a(e.exports,"createPortal",function(){return H},function(e){return H=e}),a(e.exports,"createRoot",function(){return W},function(e){return W=e}),a(e.exports,"findDOMNode",function(){return q},function(e){return q=e}),a(e.exports,"flushSync",function(){return G},function(e){return G=e}),a(e.exports,"hydrate",function(){return K},function(e){return K=e}),a(e.exports,"hydrateRoot",function(){return Q},function(e){return Q=e}),a(e.exports,"render",function(){return Y},function(e){return Y=e}),a(e.exports,"unmountComponentAtNode",function(){return X},function(e){return X=e}),a(e.exports,"unstable_batchedUpdates",function(){return J},function(e){return J=e}),a(e.exports,"unstable_renderSubtreeIntoContainer",function(){return Z},function(e){return Z=e}),a(e.exports,"version",function(){return ee},function(e){return ee=e});var r,n,i,s,o,l,u=L("7fPBF"),c=L("33s19");function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var g="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},x={};function w(e,t,r,n,i,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new w(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function k(e){return e[1].toUpperCase()}function C(e,t,r,n){var i,a=E.hasOwnProperty(t)?E[t]:null;(null!==a?0!==a.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==r)return!r.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,a,n)&&(r=null),n||null===a?(i=t,(y.call(x,i)||!y.call(b,i)&&(v.test(i)?x[i]=!0:(b[i]=!0,!1)))&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r))):a.mustUseProperty?e[a.propertyName]=null===r?3!==a.type&&"":r:(t=a.attributeName,n=a.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(a=a.type)||4===a&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(S,k);E[t]=new w(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(S,k);E[t]=new w(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(S,k);E[t]=new w(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});var _=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var $=Symbol.iterator;function V(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}var U,H,W,q,G,K,Q,Y,X,J,Z,ee,et,er=Object.assign;function en(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function ea(e,t){if(!e||ei)return"";ei=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=n.stack.split("\n"),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(1!==s||1!==o)do if(s--,0>--o||i[s]!==a[o]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o)break}}}finally{ei=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function es(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function eo(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=eo(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=eo(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("u">typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function eh(e,t){var r=t.checked;return er({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ed(e,t){var r=null==t.defaultValue?"":t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:r=es(null!=t.value?t.value:r),controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ef(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function ep(e,t){ef(e,t);var r=es(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?eg(e,t.type,r):t.hasOwnProperty("defaultValue")&&eg(e,t.type,es(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(("submit"===n||"reset"===n)&&(void 0===t.value||null===t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function eg(e,t,r){("number"!==t||ec(e.ownerDocument)!==e)&&(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ey=Array.isArray;function ev(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(i=0,r=""+es(r),t=null;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(h(91));return er({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(h(92));if(ey(r)){if(1<r.length)throw Error(h(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:es(r)}}function ew(e,t){var r=es(t.value),n=es(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function eE(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ek(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eC,e_,eT=(eC=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((e_=e_||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=e_.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"u">typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return eC(e,t,r,n)})}:eC);function eI(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var eN={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ej=["Webkit","ms","Moz","O"];function eA(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||eN.hasOwnProperty(e)&&eN[e]?(""+t).trim():t+"px"}function eR(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=eA(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(eN).forEach(function(e){ej.forEach(function(t){eN[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eN[e]})});var eP=er({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eO(e,t){if(t){if(eP[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(h(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(h(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(h(62))}}function eD(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eL=null;function eM(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eF=null,eB=null,ez=null;function e$(e){if(e=nQ(e)){if("function"!=typeof eF)throw Error(h(280));var t=e.stateNode;t&&(t=nX(t),eF(e.stateNode,e.type,t))}}function eV(e){eB?ez?ez.push(e):ez=[e]:eB=e}function eU(){if(eB){var e=eB,t=ez;if(ez=eB=null,e$(e),t)for(e=0;e<t.length;e++)e$(t[e])}}function eH(e,t){return e(t)}function eW(){}var eq=!1;function eG(e,t,r){if(eq)return e(t,r);eq=!0;try{return eH(e,t,r)}finally{eq=!1,(null!==eB||null!==ez)&&(eW(),eU())}}function eK(e,t){var r=e.stateNode;if(null===r)return null;var n=nX(r);if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n="button"!==(e=e.type)&&"input"!==e&&"select"!==e&&"textarea"!==e),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(h(231,t,typeof r));return r}var eQ=!1;if(g)try{var eY={};Object.defineProperty(eY,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eQ=!1}function eX(e,t,r,n,i,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e5(e,t,r,n,i,a,s,o,l){eJ=!1,eZ=null,eX.apply(e2,arguments)}function e3(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function e4(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e3(e)!==e)throw Error(h(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e3(e)))throw Error(h(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(n=i.return)){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return e6(i),e;if(a===n)return e6(i),t;a=a.sibling}throw Error(h(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s)throw Error(h(189))}}if(r.alternate!==n)throw Error(h(190))}if(3!==r.tag)throw Error(h(188));return r.stateNode.current===r?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var r=e(t);if(null!==r)return r;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e9=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tr=c.unstable_now,tn=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,ta=c.unstable_UserBlockingPriority,ts=c.unstable_NormalPriority,to=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,th=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(td(e)/tf|0)|0},td=Math.log,tf=Math.LN2,tp=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 0x1000000:case 0x2000000:case 0x4000000:return 0x7c00000&e;case 0x8000000:return 0x8000000;case 0x10000000:return 0x10000000;case 0x20000000:return 0x20000000;case 0x40000000:return 0x40000000;default:return e}}function ty(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=0xfffffff&r;if(0!==s){var o=s&~i;0!==o?n=tg(o):0!=(a&=s)&&(n=tg(a))}else 0!=(s=r&~i)?n=tg(s):0!==a&&(n=tg(a));if(0===n)return 0;if(0!==t&&t!==n&&0==(t&i)&&((i=n&-n)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-th(t)),n|=e[r],t&=~i;return n}function tv(e){return 0!=(e=-0x40000001&e.pendingLanes)?e:0x40000000&e?0x40000000:0}function tb(){var e=tp;return 0==(4194240&(tp<<=1))&&(tp=64),e}function tx(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function tw(e,t,r){e.pendingLanes|=t,0x20000000!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-th(t)]=r}function tE(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-th(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var tS=0;function tk(e){return 1<(e&=-e)?4<e?0!=(0xfffffff&e)?16:0x20000000:4:1}var tC,t_,tT,tI,tN,tj=!1,tA=[],tR=null,tP=null,tO=null,tD=new Map,tL=new Map,tM=[],tF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tB(e,t){switch(e){case"focusin":case"focusout":tR=null;break;case"dragenter":case"dragleave":tP=null;break;case"mouseover":case"mouseout":tO=null;break;case"pointerover":case"pointerout":tD.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tL.delete(t.pointerId)}}function tz(e,t,r,n,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},null!==t&&null!==(t=nQ(t))&&t_(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function t$(e){var t=nK(e.target);if(null!==t){var r=e3(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=e4(r))){e.blockedOn=t,tN(e.priority,function(){tT(r)});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tV(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=nQ(r))&&t_(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);eL=n,r.target.dispatchEvent(n),eL=null,t.shift()}return!0}function tU(e,t,r){tV(e)&&r.delete(t)}function tH(){tj=!1,null!==tR&&tV(tR)&&(tR=null),null!==tP&&tV(tP)&&(tP=null),null!==tO&&tV(tO)&&(tO=null),tD.forEach(tU),tL.forEach(tU)}function tW(e,t){e.blockedOn===t&&(e.blockedOn=null,tj||(tj=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tH)))}function tq(e){function t(t){return tW(t,e)}if(0<tA.length){tW(tA[0],e);for(var r=1;r<tA.length;r++){var n=tA[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==tR&&tW(tR,e),null!==tP&&tW(tP,e),null!==tO&&tW(tO,e),tD.forEach(t),tL.forEach(t),r=0;r<tM.length;r++)(n=tM[r]).blockedOn===e&&(n.blockedOn=null);for(;0<tM.length&&null===(r=tM[0]).blockedOn;)t$(r),null===r.blockedOn&&tM.shift()}var tG=_.ReactCurrentBatchConfig,tK=!0;function tQ(e,t,r,n){var i=tS,a=tG.transition;tG.transition=null;try{tS=1,tX(e,t,r,n)}finally{tS=i,tG.transition=a}}function tY(e,t,r,n){var i=tS,a=tG.transition;tG.transition=null;try{tS=4,tX(e,t,r,n)}finally{tS=i,tG.transition=a}}function tX(e,t,r,n){if(tK){var i=tZ(e,t,r,n);if(null===i)nx(e,t,n,tJ,r),tB(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return tR=tz(tR,e,t,r,n,i),!0;case"dragenter":return tP=tz(tP,e,t,r,n,i),!0;case"mouseover":return tO=tz(tO,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return tD.set(a,tz(tD.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,tL.set(a,tz(tL.get(a)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(tB(e,n),4&t&&-1<tF.indexOf(e)){for(;null!==i;){var a=nQ(i);if(null!==a&&tC(a),null===(a=tZ(e,t,r,n))&&nx(e,t,n,tJ,r),a===i)break;i=a}null!==i&&n.stopPropagation()}else nx(e,t,n,null,r)}}var tJ=null;function tZ(e,t,r,n){if(tJ=null,null!==(e=nK(e=eM(n))))if(null===(t=e3(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=e4(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case ti:return 1;case ta:return 4;case ts:case to:return 16;case tl:return 0x20000000;default:return 16}default:return 16}}var t1=null,t2=null,t5=null;function t3(){if(t5)return t5;var e,t,r=t2,n=r.length,i="value"in t1?t1.value:t1.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var s=n-e;for(t=1;t<=s&&r[n-t]===i[a-t];t++);return t5=i.slice(e,1<t?1-t:void 0)}function t4(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t7(e){function t(t,r,n,i,a){for(var s in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return er(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t9,re,rt,rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=t7(rr),ri=er({},rr,{view:0,detail:0}),ra=t7(ri),rs=er({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ry,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&"mousemove"===e.type?(t9=e.screenX-rt.screenX,re=e.screenY-rt.screenY):re=t9=0,rt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:re}}),ro=t7(rs),rl=t7(er({},rs,{dataTransfer:0})),ru=t7(er({},ri,{relatedTarget:0})),rc=t7(er({},rr,{animationName:0,elapsedTime:0,pseudoElement:0})),rh=t7(er({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rd=t7(er({},rr,{data:0})),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rm[e])&&!!t[e]}function ry(){return rg}var rv=t7(er({},ri,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t4(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ry,charCode:function(e){return"keypress"===e.type?t4(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t4(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),rb=t7(er({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rx=t7(er({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ry})),rw=t7(er({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0})),rE=t7(er({},rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rS=[9,13,27,32],rk=g&&"CompositionEvent"in window,rC=null;g&&"documentMode"in document&&(rC=document.documentMode);var r_=g&&"TextEvent"in window&&!rC,rT=g&&(!rk||rC&&8<rC&&11>=rC),rI=!1;function rN(e,t){switch(e){case"keyup":return -1!==rS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rj(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rA=!1,rR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rP(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rR[e.type]:"textarea"===t}function rO(e,t,r,n){eV(n),0<(t=nE(t,"onChange")).length&&(r=new rn("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rD=null,rL=null;function rM(e){np(e,0)}function rF(e){if(eu(nY(e)))return e}function rB(e,t){if("change"===e)return t}var rz=!1;if(g){if(g){var r$="oninput"in document;if(!r$){var rV=document.createElement("div");rV.setAttribute("oninput","return;"),r$="function"==typeof rV.oninput}r=r$}else r=!1;rz=r&&(!document.documentMode||9<document.documentMode)}function rU(){rD&&(rD.detachEvent("onpropertychange",rH),rL=rD=null)}function rH(e){if("value"===e.propertyName&&rF(rL)){var t=[];rO(t,rL,e,eM(e)),eG(rM,t)}}function rW(e,t,r){"focusin"===e?(rU(),rD=t,rL=r,rD.attachEvent("onpropertychange",rH)):"focusout"===e&&rU()}function rq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rF(rL)}function rG(e,t){if("click"===e)return rF(t)}function rK(e,t){if("input"===e||"change"===e)return rF(t)}var rQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rY(e,t){if(rQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!y.call(t,i)||!rQ(e[i],t[i]))return!1}return!0}function rX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rJ(e,t){var r,n=rX(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rX(n)}}function rZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(r)e=t.contentWindow;else break;t=ec(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var r1=g&&"documentMode"in document&&11>=document.documentMode,r2=null,r5=null,r3=null,r4=!1;function r6(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;r4||null==r2||r2!==ec(n)||(n="selectionStart"in(n=r2)&&r0(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},r3&&rY(r3,n)||(r3=n,0<(n=nE(r5,"onSelect")).length&&(t=new rn("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=r2)))}function r8(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var r7={animationend:r8("Animation","AnimationEnd"),animationiteration:r8("Animation","AnimationIteration"),animationstart:r8("Animation","AnimationStart"),transitionend:r8("Transition","TransitionEnd")},r9={},ne={};function nt(e){if(r9[e])return r9[e];if(!r7[e])return e;var t,r=r7[e];for(t in r)if(r.hasOwnProperty(t)&&t in ne)return r9[e]=r[t];return e}g&&(ne=document.createElement("div").style,"AnimationEvent"in window||(delete r7.animationend.animation,delete r7.animationiteration.animation,delete r7.animationstart.animation),"TransitionEvent"in window||delete r7.transitionend.transition);var nr=nt("animationend"),nn=nt("animationiteration"),ni=nt("animationstart"),na=nt("transitionend"),ns=new Map,no="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nl(e,t){ns.set(e,t),p(t,[e])}for(var nu=0;nu<no.length;nu++){var nc=no[nu];nl(nc.toLowerCase(),"on"+(nc[0].toUpperCase()+nc.slice(1)))}nl(nr,"onAnimationEnd"),nl(nn,"onAnimationIteration"),nl(ni,"onAnimationStart"),nl("dblclick","onDoubleClick"),nl("focusin","onFocus"),nl("focusout","onBlur"),nl(na,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nd=new Set("cancel close invalid load scroll toggle".split(" ").concat(nh));function nf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,a,s,o,l){if(e5.apply(this,arguments),eJ){if(eJ){var u=eZ;eJ=!1,eZ=null}else throw Error(h(198));e0||(e0=!0,e1=u)}}(n,t,void 0,e),e.currentTarget=null}function np(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;nf(i,o,u),a=l}else for(s=0;s<n.length;s++){if(l=(o=n[s]).instance,u=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;nf(i,o,u),a=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function nm(e,t){var r=t[nW];void 0===r&&(r=t[nW]=new Set);var n=e+"__bubble";r.has(n)||(nb(t,e,2,!1),r.add(n))}function ng(e,t,r){var n=0;t&&(n|=4),nb(r,e,n,t)}var ny="_reactListening"+Math.random().toString(36).slice(2);function nv(e){if(!e[ny]){e[ny]=!0,d.forEach(function(t){"selectionchange"!==t&&(nd.has(t)||ng(t,!1,e),ng(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ny]||(t[ny]=!0,ng("selectionchange",!1,t))}}function nb(e,t,r,n){switch(t0(t)){case 1:var i=tQ;break;case 4:i=tY;break;default:i=tX}r=i.bind(null,t,r,e),i=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function nx(e,t,r,n,i){var a=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var s=n.tag;if(3===s||4===s){var o=n.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===s)for(s=n.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==o;){if(null===(s=nK(o)))return;if(5===(l=s.tag)||6===l){n=a=s;continue e}o=o.parentNode}}n=n.return}eG(function(){var n=a,i=eM(r),s=[];e:{var o=ns.get(e);if(void 0!==o){var l=rn,u=e;switch(e){case"keypress":if(0===t4(r))break e;case"keydown":case"keyup":l=rv;break;case"focusin":u="focus",l=ru;break;case"focusout":u="blur",l=ru;break;case"beforeblur":case"afterblur":l=ru;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=rx;break;case nr:case nn:case ni:l=rc;break;case na:l=rw;break;case"scroll":l=ra;break;case"wheel":l=rE;break;case"copy":case"cut":case"paste":l=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=rb}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=n;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&null!=(m=eK(p,d))&&c.push(nw(p,m,f))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,r,i),s.push({event:o,listeners:c}))}}if(0==(7&t)){if((o="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(o&&r!==eL&&(u=r.relatedTarget||r.fromElement)&&(nK(u)||u[nH])))&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(u=r.relatedTarget||r.toElement,l=n,null!==(u=u?nK(u):null)&&(h=e3(u),u!==h||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=n),l!==u)){if(c=ro,m="onMouseLeave",d="onMouseEnter",p="mouse",("pointerout"===e||"pointerover"===e)&&(c=rb,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:nY(l),f=null==u?o:nY(u),(o=new c(m,p+"leave",l,r,i)).target=h,o.relatedTarget=f,m=null,nK(i)===n&&((c=new c(d,p+"enter",u,r,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)t:{for(c=l,d=u,p=0,f=c;f;f=nS(f))p++;for(f=0,m=d;m;m=nS(m))f++;for(;0<p-f;)c=nS(c),p--;for(;0<f-p;)d=nS(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break t;c=nS(c),d=nS(d)}c=null}else c=null;null!==l&&nk(s,o,l,c,!1),null!==u&&null!==h&&nk(s,h,u,c,!0)}e:{if("select"===(l=(o=n?nY(n):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g,y=rB;else if(rP(o))if(rz)y=rK;else{y=rq;var v=rW}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(y=rG);if(y&&(y=y(e,n))){rO(s,y,r,i);break e}v&&v(e,o,n),"focusout"===e&&(v=o._wrapperState)&&v.controlled&&"number"===o.type&&eg(o,"number",o.value)}switch(v=n?nY(n):window,e){case"focusin":(rP(v)||"true"===v.contentEditable)&&(r2=v,r5=n,r3=null);break;case"focusout":r3=r5=r2=null;break;case"mousedown":r4=!0;break;case"contextmenu":case"mouseup":case"dragend":r4=!1,r6(s,r,i);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":r6(s,r,i)}if(rk)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else rA?rN(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(rT&&"ko"!==r.locale&&(rA||"onCompositionStart"!==b?"onCompositionEnd"===b&&rA&&(g=t3()):(t2="value"in(t1=i)?t1.value:t1.textContent,rA=!0)),0<(v=nE(n,b)).length&&(b=new rd(b,e,null,r,i),s.push({event:b,listeners:v}),g?b.data=g:null!==(g=rj(r))&&(b.data=g))),(g=r_?function(e,t){switch(e){case"compositionend":return rj(t);case"keypress":if(32!==t.which)return null;return rI=!0," ";case"textInput":return" "===(e=t.data)&&rI?null:e;default:return null}}(e,r):function(e,t){if(rA)return"compositionend"===e||!rk&&rN(e,t)?(e=t3(),t5=t2=t1=null,rA=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rT&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(n=nE(n,"onBeforeInput")).length&&(i=new rd("onBeforeInput","beforeinput",null,r,i),s.push({event:i,listeners:n}),i.data=g)}np(s,t)})}function nw(e,t,r){return{instance:e,listener:t,currentTarget:r}}function nE(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=eK(e,r))&&n.unshift(nw(e,a,i)),null!=(a=eK(e,t))&&n.push(nw(e,a,i))),e=e.return}return n}function nS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function nk(e,t,r,n,i){for(var a=t._reactName,s=[];null!==r&&r!==n;){var o=r,l=o.alternate,u=o.stateNode;if(null!==l&&l===n)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=eK(r,a))&&s.unshift(nw(r,l,o)):i||null!=(l=eK(r,a))&&s.push(nw(r,l,o))),r=r.return}0!==s.length&&e.push({event:t,listeners:s})}var nC=/\r\n?/g,n_=/\u0000|\uFFFD/g;function nT(e){return("string"==typeof e?e:""+e).replace(nC,"\n").replace(n_,"")}function nI(e,t,r){if(t=nT(t),nT(e)!==t&&r)throw Error(h(425))}function nN(){}var nj=null,nA=null;function nR(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var nP="function"==typeof setTimeout?setTimeout:void 0,nO="function"==typeof clearTimeout?clearTimeout:void 0,nD="function"==typeof Promise?Promise:void 0,nL="function"==typeof queueMicrotask?queueMicrotask:void 0!==nD?function(e){return nD.resolve(null).then(e).catch(nM)}:nP;function nM(e){setTimeout(function(){throw e})}function nF(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===n){e.removeChild(i),tq(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=i}while(r)tq(t)}function nB(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function nz(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var n$=Math.random().toString(36).slice(2),nV="__reactFiber$"+n$,nU="__reactProps$"+n$,nH="__reactContainer$"+n$,nW="__reactEvents$"+n$,nq="__reactListeners$"+n$,nG="__reactHandles$"+n$;function nK(e){var t=e[nV];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nH]||r[nV]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=nz(e);null!==e;){if(r=e[nV])return r;e=nz(e)}return t}r=(e=r).parentNode}return null}function nQ(e){return(e=e[nV]||e[nH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function nY(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(h(33))}function nX(e){return e[nU]||null}var nJ=[],nZ=-1;function n0(e){return{current:e}}function n1(e){0>nZ||(e.current=nJ[nZ],nJ[nZ]=null,nZ--)}function n2(e,t){nJ[++nZ]=e.current,e.current=t}var n5={},n3=n0(n5),n4=n0(!1),n6=n5;function n8(e,t){var r=e.type.contextTypes;if(!r)return n5;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in r)a[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function n7(e){return null!=(e=e.childContextTypes)}function n9(){n1(n4),n1(n3)}function ie(e,t,r){if(n3.current!==n5)throw Error(h(168));n2(n3,t),n2(n4,r)}function it(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!=typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(h(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case N:return"Fragment";case I:return"Portal";case A:return"Profiler";case j:return"StrictMode";case D:return"Suspense";case M:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case P:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case O:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case F:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case B:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}return null}(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return er({},r,n)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||n5,n6=n3.current,n2(n3,e),n2(n4,n4.current),!0}function ii(e,t,r){var n=e.stateNode;if(!n)throw Error(h(169));r?(n.__reactInternalMemoizedMergedChildContext=e=it(e,t,n6),n1(n4),n1(n3),n2(n3,e)):n1(n4),n2(n4,r)}var ia=null,is=!1,io=!1;function il(e){null===ia?ia=[e]:ia.push(e)}function iu(){if(!io&&null!==ia){io=!0;var e=0,t=tS;try{var r=ia;for(tS=1;e<r.length;e++){var n=r[e];do n=n(!0);while(null!==n)}ia=null,is=!1}catch(t){throw null!==ia&&(ia=ia.slice(e+1)),e7(ti,iu),t}finally{tS=t,io=!1}}return null}var ic=[],ih=0,id=null,ip=0,im=[],ig=0,iy=null,iv=1,ib="";function ix(e,t){ic[ih++]=ip,ic[ih++]=id,id=e,ip=t}function iw(e,t,r){im[ig++]=iv,im[ig++]=ib,im[ig++]=iy,iy=e;var n=iv;e=ib;var i=32-th(n)-1;n&=~(1<<i),r+=1;var a=32-th(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,iv=1<<32-th(t)+i|r<<i|n,ib=a+e}else iv=1<<a|r<<i|n,ib=e}function iE(e){null!==e.return&&(ix(e,1),iw(e,1,0))}function iS(e){for(;e===id;)id=ic[--ih],ic[ih]=null,ip=ic[--ih],ic[ih]=null;for(;e===iy;)iy=im[--ig],im[ig]=null,ib=im[--ig],im[ig]=null,iv=im[--ig],im[ig]=null}var ik=null,iC=null,i_=!1,iT=null;function iI(e,t){var r=o8(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function iN(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ik=e,iC=nB(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ik=e,iC=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(e.memoizedState={dehydrated:t,treeContext:r=null!==iy?{id:iv,overflow:ib}:null,retryLane:0x40000000},(r=o8(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ik=e,iC=null,!0);default:return!1}}function ij(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iA(e){if(i_){var t=iC;if(t){var r=t;if(!iN(e,t)){if(ij(e))throw Error(h(418));t=nB(r.nextSibling);var n=ik;t&&iN(e,t)?iI(n,r):(e.flags=-4097&e.flags|2,i_=!1,ik=e)}}else{if(ij(e))throw Error(h(418));e.flags=-4097&e.flags|2,i_=!1,ik=e}}}function iR(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ik=e}function iP(e){if(e!==ik)return!1;if(!i_)return iR(e),i_=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nR(e.type,e.memoizedProps)),t&&(t=iC)){if(ij(e))throw iO(),Error(h(418));for(;t;)iI(e,t),t=nB(t.nextSibling)}if(iR(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(h(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,r=e.data;if("/$"===r){if(0===t){iC=nB(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}iC=null}}else iC=ik?nB(e.stateNode.nextSibling):null;return!0}function iO(){for(var e=iC;e;)e=nB(e.nextSibling)}function iD(){iC=ik=null,i_=!1}function iL(e){null===iT?iT=[e]:iT.push(e)}var iM=_.ReactCurrentBatchConfig;function iF(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(h(309));var n=r.stateNode}if(!n)throw Error(h(147,e));var i=n,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e})._stringRef=a,t)}if("string"!=typeof e)throw Error(h(284));if(!r._owner)throw Error(h(290,e))}return e}function iB(e,t){throw Error(h(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function iz(e){return(0,e._init)(e._payload)}function i$(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=o9(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,r,n){return null===t||6!==t.tag?(t=ln(r,e.mode,n)).return=e:(t=i(t,r)).return=e,t}function l(e,t,r,n){var a=r.type;return a===N?c(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===B&&iz(a)===t.type)?(n=i(t,r.props)).ref=iF(e,t,r):(n=le(r.type,r.key,r.props,null,e.mode,n)).ref=iF(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=li(r,e.mode,n)).return=e:(t=i(t,r.children||[])).return=e,t}function c(e,t,r,n,a){return null===t||7!==t.tag?(t=lt(r,e.mode,n,a)).return=e:(t=i(t,r)).return=e,t}function d(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=ln(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case T:return(r=le(t.type,t.key,t.props,null,e.mode,r)).ref=iF(e,null,t),r.return=e,r;case I:return(t=li(t,e.mode,r)).return=e,t;case B:return d(e,(0,t._init)(t._payload),r)}if(ey(t)||V(t))return(t=lt(t,e.mode,r,null)).return=e,t;iB(e,t)}return null}function f(e,t,r,n){var i=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r)return null!==i?null:o(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case T:return r.key===i?l(e,t,r,n):null;case I:return r.key===i?u(e,t,r,n):null;case B:return f(e,t,(i=r._init)(r._payload),n)}if(ey(r)||V(r))return null!==i?null:c(e,t,r,n,null);iB(e,r)}return null}function p(e,t,r,n,i){if("string"==typeof n&&""!==n||"number"==typeof n)return o(t,e=e.get(r)||null,""+n,i);if("object"==typeof n&&null!==n){switch(n.$$typeof){case T:return l(t,e=e.get(null===n.key?r:n.key)||null,n,i);case I:return u(t,e=e.get(null===n.key?r:n.key)||null,n,i);case B:return p(e,t,r,(0,n._init)(n._payload),i)}if(ey(n)||V(n))return c(t,e=e.get(r)||null,n,i,null);iB(t,n)}return null}return function o(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===N&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case T:e:{for(var g=c.key,y=u;null!==y;){if(y.key===g){if((g=c.type)===N){if(7===y.tag){r(l,y.sibling),(u=i(y,c.props.children)).return=l,l=u;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===B&&iz(g)===y.type){r(l,y.sibling),(u=i(y,c.props)).ref=iF(l,y,c),u.return=l,l=u;break e}r(l,y);break}t(l,y),y=y.sibling}c.type===N?((u=lt(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=le(c.type,c.key,c.props,null,l.mode,m)).ref=iF(l,u,c),m.return=l,l=m)}return s(l);case I:e:{for(y=c.key;null!==u;){if(u.key===y)if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}else{r(l,u);break}t(l,u),u=u.sibling}(u=li(c,l.mode,m)).return=l,l=u}return s(l);case B:return o(l,u,(y=c._init)(c._payload),m)}if(ey(c))return function(i,s,o,l){for(var u=null,c=null,h=s,m=s=0,g=null;null!==h&&m<o.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var y=f(i,h,o[m],l);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(i,h),s=a(y,s,m),null===c?u=y:c.sibling=y,c=y,h=g}if(m===o.length)return r(i,h),i_&&ix(i,m),u;if(null===h){for(;m<o.length;m++)null!==(h=d(i,o[m],l))&&(s=a(h,s,m),null===c?u=h:c.sibling=h,c=h);return i_&&ix(i,m),u}for(h=n(i,h);m<o.length;m++)null!==(g=p(h,i,m,o[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=a(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&h.forEach(function(e){return t(i,e)}),i_&&ix(i,m),u}(l,u,c,m);if(V(c))return function(i,s,o,l){var u=V(o);if("function"!=typeof u)throw Error(h(150));if(null==(o=u.call(o)))throw Error(h(151));for(var c=u=null,m=s,g=s=0,y=null,v=o.next();null!==m&&!v.done;g++,v=o.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(i,m,v.value,l);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,g),null===c?u=b:c.sibling=b,c=b,m=y}if(v.done)return r(i,m),i_&&ix(i,g),u;if(null===m){for(;!v.done;g++,v=o.next())null!==(v=d(i,v.value,l))&&(s=a(v,s,g),null===c?u=v:c.sibling=v,c=v);return i_&&ix(i,g),u}for(m=n(i,m);!v.done;g++,v=o.next())null!==(v=p(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===c?u=v:c.sibling=v,c=v);return e&&m.forEach(function(e){return t(i,e)}),i_&&ix(i,g),u}(l,u,c,m);iB(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(r(l,u.sibling),(u=i(u,c)).return=l):(r(l,u),(u=ln(c,l.mode,m)).return=l),s(l=u)):r(l,u)}}var iV=i$(!0),iU=i$(!1),iH=n0(null),iW=null,iq=null,iG=null;function iK(){iG=iq=iW=null}function iQ(e){var t=iH.current;n1(iH),e._currentValue=t}function iY(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function iX(e,t){iW=e,iG=iq=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(sx=!0),e.firstContext=null)}function iJ(e){var t=e._currentValue;if(iG!==e)if(e={context:e,memoizedValue:t,next:null},null===iq){if(null===iW)throw Error(h(308));iq=e,iW.dependencies={lanes:0,firstContext:e}}else iq=iq.next=e;return t}var iZ=null;function i0(e){null===iZ?iZ=[e]:iZ.push(e)}function i1(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,i0(t)):(r.next=i.next,i.next=r),t.interleaved=r,i2(e,n)}function i2(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var i5=!1;function i3(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i6(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i8(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&oo)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,i2(e,r)}return null===(i=n.interleaved)?(t.next=t,i0(n)):(t.next=i.next,i.next=t),n.interleaved=t,i2(e,r)}function i7(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tE(e,r)}}function i9(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?i=a=s:a=a.next=s,r=r.next}while(null!==r)null===a?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ae(e,t,r,n){var i=e.updateQueue;i5=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===s?a=u:s.next=u,s=l;var c=e.alternate;null!==c&&(o=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l)}if(null!==a){var h=i.baseState;for(s=0,c=u=l=null,o=a;;){var d=o.lane,f=o.eventTime;if((n&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=r,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=er({},h,d);break e;case 2:i5=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,s|=d;if(null===(o=o.next))if(null===(o=i.shared.pending))break;else o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do s|=i.lane,i=i.next;while(i!==t)}else null===a&&(i.shared.lanes=0);om|=s,e.lanes=s,e.memoizedState=h}}function at(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!=typeof i)throw Error(h(191,i));i.call(n)}}}var ar={},an=n0(ar),ai=n0(ar),aa=n0(ar);function as(e){if(e===ar)throw Error(h(174));return e}function ao(e,t){switch(n2(aa,t),n2(ai,e),n2(an,ar),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ek(null,"");break;default:t=ek(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}n1(an),n2(an,t)}function al(){n1(an),n1(ai),n1(aa)}function au(e){as(aa.current);var t=as(an.current),r=ek(t,e.type);t!==r&&(n2(ai,e),n2(an,r))}function ac(e){ai.current===e&&(n1(an),n1(ai))}var ah=n0(0);function ad(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var af=[];function ap(){for(var e=0;e<af.length;e++)af[e]._workInProgressVersionPrimary=null;af.length=0}var am=_.ReactCurrentDispatcher,ag=_.ReactCurrentBatchConfig,ay=0,av=null,ab=null,ax=null,aw=!1,aE=!1,aS=0,ak=0;function aC(){throw Error(h(321))}function a_(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rQ(e[r],t[r]))return!1;return!0}function aT(e,t,r,n,i,a){if(ay=a,av=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,am.current=null===e||null===e.memoizedState?se:st,e=r(n,i),aE){a=0;do{if(aE=!1,aS=0,25<=a)throw Error(h(301));a+=1,ax=ab=null,t.updateQueue=null,am.current=sr,e=r(n,i)}while(aE)}if(am.current=a9,t=null!==ab&&null!==ab.next,ay=0,ax=ab=av=null,aw=!1,t)throw Error(h(300));return e}function aI(){var e=0!==aS;return aS=0,e}function aN(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ax?av.memoizedState=ax=e:ax=ax.next=e,ax}function aj(){if(null===ab){var e=av.alternate;e=null!==e?e.memoizedState:null}else e=ab.next;var t=null===ax?av.memoizedState:ax.next;if(null!==t)ax=t,ab=e;else{if(null===e)throw Error(h(310));e={memoizedState:(ab=e).memoizedState,baseState:ab.baseState,baseQueue:ab.baseQueue,queue:ab.queue,next:null},null===ax?av.memoizedState=ax=e:ax=ax.next=e}return ax}function aA(e,t){return"function"==typeof t?t(e):t}function aR(e){var t=aj(),r=t.queue;if(null===r)throw Error(h(311));r.lastRenderedReducer=e;var n=ab,i=n.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(null!==i){a=i.next,n=n.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((ay&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=d,s=n):l=l.next=d,av.lanes|=c,om|=c}u=u.next}while(null!==u&&u!==a)null===l?s=n:l.next=o,rQ(n,t.memoizedState)||(sx=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do a=i.lane,av.lanes|=a,om|=a,i=i.next;while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function aP(e){var t=aj(),r=t.queue;if(null===r)throw Error(h(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i)rQ(a,t.memoizedState)||(sx=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function aO(){}function aD(e,t){var r=av,n=aj(),i=t(),a=!rQ(n.memoizedState,i);if(a&&(n.memoizedState=i,sx=!0),n=n.queue,aG(aF.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||null!==ax&&1&ax.memoizedState.tag){if(r.flags|=2048,aV(9,aM.bind(null,r,n,i,t),void 0,null),null===ol)throw Error(h(349));0!=(30&ay)||aL(r,t,i)}return i}function aL(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=av.updateQueue)?(t={lastEffect:null,stores:null},av.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function aM(e,t,r,n){t.value=r,t.getSnapshot=n,aB(t)&&az(e)}function aF(e,t,r){return r(function(){aB(t)&&az(e)})}function aB(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rQ(e,r)}catch(e){return!0}}function az(e){var t=i2(e,1);null!==t&&oD(t,e,1,-1)}function a$(e){var t=aN();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,t.queue=e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aA,lastRenderedState:e},e=e.dispatch=a4.bind(null,av,e),[t.memoizedState,e]}function aV(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=av.updateQueue)?(t={lastEffect:null,stores:null},av.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function aU(){return aj().memoizedState}function aH(e,t,r,n){var i=aN();av.flags|=e,i.memoizedState=aV(1|t,r,void 0,void 0===n?null:n)}function aW(e,t,r,n){var i=aj();n=void 0===n?null:n;var a=void 0;if(null!==ab){var s=ab.memoizedState;if(a=s.destroy,null!==n&&a_(n,s.deps)){i.memoizedState=aV(t,r,a,n);return}}av.flags|=e,i.memoizedState=aV(1|t,r,a,n)}function aq(e,t){return aH(8390656,8,e,t)}function aG(e,t){return aW(2048,8,e,t)}function aK(e,t){return aW(4,2,e,t)}function aQ(e,t){return aW(4,4,e,t)}function aY(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(t.current=e=e(),function(){t.current=null}):void 0}function aX(e,t,r){return r=null!=r?r.concat([e]):null,aW(4,4,aY.bind(null,t,e),r)}function aJ(){}function aZ(e,t){var r=aj();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&a_(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function a0(e,t){var r=aj();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&a_(t,n[1])?n[0]:(r.memoizedState=[e=e(),t],e)}function a1(e,t,r){return 0==(21&ay)?(e.baseState&&(e.baseState=!1,sx=!0),e.memoizedState=r):(rQ(r,t)||(r=tb(),av.lanes|=r,om|=r,e.baseState=!0),t)}function a2(e,t){var r=tS;tS=0!==r&&4>r?r:4,e(!0);var n=ag.transition;ag.transition={};try{e(!1),t()}finally{tS=r,ag.transition=n}}function a5(){return aj().memoizedState}function a3(e,t,r){var n=oO(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},a6(e)?a8(t,r):null!==(r=i1(e,t,r,n))&&(oD(r,e,n,oP()),a7(r,t,n))}function a4(e,t,r){var n=oO(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(a6(e))a8(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,o=a(s,r);if(i.hasEagerState=!0,i.eagerState=o,rQ(o,s)){var l=t.interleaved;null===l?(i.next=i,i0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(r=i1(e,t,i,n))&&(oD(r,e,n,i=oP()),a7(r,t,n))}}function a6(e){var t=e.alternate;return e===av||null!==t&&t===av}function a8(e,t){aE=aw=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function a7(e,t,r){if(0!=(4194240&r)){var n=t.lanes;n&=e.pendingLanes,t.lanes=r|=n,tE(e,r)}}var a9={readContext:iJ,useCallback:aC,useContext:aC,useEffect:aC,useImperativeHandle:aC,useInsertionEffect:aC,useLayoutEffect:aC,useMemo:aC,useReducer:aC,useRef:aC,useState:aC,useDebugValue:aC,useDeferredValue:aC,useTransition:aC,useMutableSource:aC,useSyncExternalStore:aC,useId:aC,unstable_isNewReconciler:!1},se={readContext:iJ,useCallback:function(e,t){return aN().memoizedState=[e,void 0===t?null:t],e},useContext:iJ,useEffect:aq,useImperativeHandle:function(e,t,r){return r=null!=r?r.concat([e]):null,aH(4194308,4,aY.bind(null,t,e),r)},useLayoutEffect:function(e,t){return aH(4194308,4,e,t)},useInsertionEffect:function(e,t){return aH(4,2,e,t)},useMemo:function(e,t){return t=void 0===t?null:t,aN().memoizedState=[e=e(),t],e},useReducer:function(e,t,r){var n=aN();return n.memoizedState=n.baseState=t=void 0!==r?r(t):t,n.queue=e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=a3.bind(null,av,e),[n.memoizedState,e]},useRef:function(e){return aN().memoizedState={current:e}},useState:a$,useDebugValue:aJ,useDeferredValue:function(e){return aN().memoizedState=e},useTransition:function(){var e=a$(!1),t=e[0];return e=a2.bind(null,e[1]),aN().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=av,i=aN();if(i_){if(void 0===r)throw Error(h(407));r=r()}else{if(r=t(),null===ol)throw Error(h(349));0!=(30&ay)||aL(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,aq(aF.bind(null,n,a,e),[e]),n.flags|=2048,aV(9,aM.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=aN(),t=ol.identifierPrefix;if(i_){var r=ib,n=iv;t=":"+t+"R"+(r=(n&~(1<<32-th(n)-1)).toString(32)+r),0<(r=aS++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=ak++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},st={readContext:iJ,useCallback:aZ,useContext:iJ,useEffect:aG,useImperativeHandle:aX,useInsertionEffect:aK,useLayoutEffect:aQ,useMemo:a0,useReducer:aR,useRef:aU,useState:function(){return aR(aA)},useDebugValue:aJ,useDeferredValue:function(e){return a1(aj(),ab.memoizedState,e)},useTransition:function(){return[aR(aA)[0],aj().memoizedState]},useMutableSource:aO,useSyncExternalStore:aD,useId:a5,unstable_isNewReconciler:!1},sr={readContext:iJ,useCallback:aZ,useContext:iJ,useEffect:aG,useImperativeHandle:aX,useInsertionEffect:aK,useLayoutEffect:aQ,useMemo:a0,useReducer:aP,useRef:aU,useState:function(){return aP(aA)},useDebugValue:aJ,useDeferredValue:function(e){var t=aj();return null===ab?t.memoizedState=e:a1(t,ab.memoizedState,e)},useTransition:function(){return[aP(aA)[0],aj().memoizedState]},useMutableSource:aO,useSyncExternalStore:aD,useId:a5,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps)for(var r in t=er({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}function si(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:er({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var sa={isMounted:function(e){return!!(e=e._reactInternals)&&e3(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=oP(),i=oO(e),a=i6(n,i);a.payload=t,null!=r&&(a.callback=r),null!==(t=i8(e,a,i))&&(oD(t,e,i,n),i7(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=oP(),i=oO(e),a=i6(n,i);a.tag=1,a.payload=t,null!=r&&(a.callback=r),null!==(t=i8(e,a,i))&&(oD(t,e,i,n),i7(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=oP(),n=oO(e),i=i6(r,n);i.tag=2,null!=t&&(i.callback=t),null!==(t=i8(e,i,n))&&(oD(t,e,n,r),i7(t,e,n))}};function ss(e,t,r,n,i,a,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,s):!t.prototype||!t.prototype.isPureReactComponent||!rY(r,n)||!rY(i,a)}function so(e,t,r){var n=!1,i=n5,a=t.contextType;return"object"==typeof a&&null!==a?a=iJ(a):(i=n7(t)?n6:n3.current,a=(n=null!=(n=t.contextTypes))?n8(e,i):n5),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function sl(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function su(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},i3(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=iJ(a):i.context=n8(e,a=n7(t)?n6:n3.current),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(si(e,t,a,r),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&sa.enqueueReplaceState(i,i.state,null),ae(e,r,i,n),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function sc(e,t){try{var r="",n=t;do r+=function(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return ea(e.type,!1);case 11:return ea(e.type.render,!1);case 1:return ea(e.type,!0);default:return""}}(n),n=n.return;while(n)var i=r}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function sh(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function sd(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var sf="function"==typeof WeakMap?WeakMap:Map;function sp(e,t,r){(r=i6(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oS||(oS=!0,ok=n),sd(e,t)},r}function sm(e,t,r){(r=i6(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){sd(e,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(r.callback=function(){sd(e,t),"function"!=typeof n&&(null===oC?oC=new Set([this]):oC.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:null!==r?r:""})}),r}function sg(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new sf;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=o2.bind(null,e,t,r),t.then(e,e))}function sy(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function sv(e,t,r,n,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=i6(-1,1)).tag=2,i8(r,t,1))),r.lanes|=1):(e.flags|=65536,e.lanes=i),e}var sb=_.ReactCurrentOwner,sx=!1;function sw(e,t,r,n){t.child=null===e?iU(t,null,r,n):iV(t,e.child,r,n)}function sE(e,t,r,n,i){r=r.render;var a=t.ref;return(iX(t,i),n=aT(e,t,r,n,a,i),r=aI(),null===e||sx)?(i_&&r&&iE(t),t.flags|=1,sw(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,s$(e,t,i))}function sS(e,t,r,n,i){if(null===e){var a=r.type;return"function"!=typeof a||o7(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=le(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,sk(e,t,a,n,i))}if(a=e.child,0==(e.lanes&i)){var s=a.memoizedProps;if((r=null!==(r=r.compare)?r:rY)(s,n)&&e.ref===t.ref)return s$(e,t,i)}return t.flags|=1,(e=o9(a,n)).ref=t.ref,e.return=t,t.child=e}function sk(e,t,r,n,i){if(null!==e){var a=e.memoizedProps;if(rY(a,n)&&e.ref===t.ref)if(sx=!1,t.pendingProps=n=a,0==(e.lanes&i))return t.lanes=e.lanes,s$(e,t,i);else 0!=(131072&e.flags)&&(sx=!0)}return sT(e,t,r,n,i)}function sC(e,t,r){var n=t.pendingProps,i=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n2(od,oh),oh|=r;else{if(0==(0x40000000&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=0x40000000,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,n2(od,oh),oh|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,n2(od,oh),oh|=n}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,n2(od,oh),oh|=n;return sw(e,t,i,r),t.child}function s_(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sT(e,t,r,n,i){var a=n7(r)?n6:n3.current;return(a=n8(t,a),iX(t,i),r=aT(e,t,r,n,a,i),n=aI(),null===e||sx)?(i_&&n&&iE(t),t.flags|=1,sw(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,s$(e,t,i))}function sI(e,t,r,n,i){if(n7(r)){var a=!0;ir(t)}else a=!1;if(iX(t,i),null===t.stateNode)sz(e,t),so(t,r,n),su(t,r,n,i),n=!0;else if(null===e){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=r.contextType;u="object"==typeof u&&null!==u?iJ(u):n8(t,u=n7(r)?n6:n3.current);var c=r.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==n||l!==u)&&sl(t,s,n,u),i5=!1;var d=t.memoizedState;s.state=d,ae(t,n,s,i),l=t.memoizedState,o!==n||d!==l||n4.current||i5?("function"==typeof c&&(si(t,r,c,n),l=t.memoizedState),(o=i5||ss(t,r,o,n,d,l,u))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=o):("function"==typeof s.componentDidMount&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,i4(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:sn(t.type,o),s.props=u,h=t.pendingProps,d=s.context,l="object"==typeof(l=r.contextType)&&null!==l?iJ(l):n8(t,l=n7(r)?n6:n3.current);var f=r.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==h||d!==l)&&sl(t,s,n,l),i5=!1,d=t.memoizedState,s.state=d,ae(t,n,s,i);var p=t.memoizedState;o!==h||d!==p||n4.current||i5?("function"==typeof f&&(si(t,r,f,n),p=t.memoizedState),(u=i5||ss(t,r,u,n,d,p,l)||!1)?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(n,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(n,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),s.props=n,s.state=p,s.context=l,n=u):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return sN(e,t,r,n,a,i)}function sN(e,t,r,n,i,a){s_(e,t);var s=0!=(128&t.flags);if(!n&&!s)return i&&ii(t,r,!1),s$(e,t,a);n=t.stateNode,sb.current=t;var o=s&&"function"!=typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&s?(t.child=iV(t,e.child,null,a),t.child=iV(t,null,o,a)):sw(e,t,o,a),t.memoizedState=n.state,i&&ii(t,r,!0),t.child}function sj(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),ao(e,t.containerInfo)}function sA(e,t,r,n,i){return iD(),iL(i),t.flags|=256,sw(e,t,r,n),t.child}var sR={dehydrated:null,treeContext:null,retryLane:0};function sP(e){return{baseLanes:e,cachePool:null,transitions:null}}function sO(e,t,r){var n,i=t.pendingProps,a=ah.current,s=!1,o=0!=(128&t.flags);if((n=o)||(n=(null===e||null!==e.memoizedState)&&0!=(2&a)),n?(s=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),n2(ah,1&a),null===e)return(iA(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=0x40000000,null):(o=i.children,e=i.fallback,s?(i=t.mode,s=t.child,o={mode:"hidden",children:o},0==(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=o):s=lr(o,i,0,null),e=lt(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=sP(r),t.memoizedState=sR,e):sD(t,o));if(null!==(a=e.memoizedState)&&null!==(n=a.dehydrated)){var l=e,u=t,c=o,d=i,f=n,p=a,m=r;if(c)return 256&u.flags?(u.flags&=-257,sL(l,u,m,d=sh(Error(h(422))))):null!==u.memoizedState?(u.child=l.child,u.flags|=128,null):(p=d.fallback,f=u.mode,d=lr({mode:"visible",children:d.children},f,0,null),p=lt(p,f,m,null),p.flags|=2,d.return=u,p.return=u,d.sibling=p,u.child=d,0!=(1&u.mode)&&iV(u,l.child,null,m),u.child.memoizedState=sP(m),u.memoizedState=sR,p);if(0==(1&u.mode))return sL(l,u,m,null);if("$!"===f.data){if(d=f.nextSibling&&f.nextSibling.dataset)var g=d.dgst;return d=g,sL(l,u,m,d=sh(p=Error(h(419)),d,void 0))}if(g=0!=(m&l.childLanes),sx||g){if(null!==(d=ol)){switch(m&-m){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 0x1000000:case 0x2000000:case 0x4000000:f=32;break;case 0x20000000:f=0x10000000;break;default:f=0}0!==(f=0!=(f&(d.suspendedLanes|m))?0:f)&&f!==p.retryLane&&(p.retryLane=f,i2(l,f),oD(d,l,f,-1))}return oK(),sL(l,u,m,d=sh(Error(h(421))))}return"$?"===f.data?(u.flags|=128,u.child=l.child,u=o3.bind(null,l),f._reactRetry=u,null):(l=p.treeContext,iC=nB(f.nextSibling),ik=u,i_=!0,iT=null,null!==l&&(im[ig++]=iv,im[ig++]=ib,im[ig++]=iy,iv=l.id,ib=l.overflow,iy=u),u=sD(u,d.children),u.flags|=4096,u)}if(s){s=i.fallback,o=t.mode,n=(a=e.child).sibling;var y={mode:"hidden",children:i.children};return 0==(1&o)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=y,t.deletions=null):(i=o9(a,y)).subtreeFlags=0xe00000&a.subtreeFlags,null!==n?s=o9(n,s):(s=lt(s,o,r,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=null===(o=e.child.memoizedState)?sP(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=sR,i}return e=(s=e.child).sibling,i=o9(s,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function sD(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function sL(e,t,r,n){return null!==n&&iL(n),iV(t,e.child,null,r),e=sD(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sM(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),iY(e.return,t,r)}function sF(e,t,r,n,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function sB(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(sw(e,t,n.children,r),0!=(2&(n=ah.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&sM(e,r,t);else if(19===e.tag)sM(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(n2(ah,n),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===ad(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),sF(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ad(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}sF(t,!0,r,null,a);break;case"together":sF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sz(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function s$(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),om|=t.lanes,0==(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(h(153));if(null!==t.child){for(r=o9(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=o9(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function sV(e,t){if(!i_)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function sU(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=0xe00000&i.subtreeFlags,n|=0xe00000&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}n=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},i=function(){},s=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,as(an.current);var a,s=null;switch(r){case"input":i=eh(e,i),n=eh(e,n),s=[];break;case"select":i=er({},i,{value:void 0}),n=er({},n,{value:void 0}),s=[];break;case"textarea":i=eb(e,i),n=eb(e,n),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof n.onClick&&(e.onclick=nN)}for(u in eO(r,n),r=null,i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(f.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var l=n[u];if(o=null!=i?i[u]:void 0,n.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(s||(s=[]),s.push(u,r)),r=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(s=s||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(s=s||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(f.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&nm("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},o=function(e,t,r,n){r!==n&&(t.flags|=4)};var sH=!1,sW=!1,sq="function"==typeof WeakSet?WeakSet:Set,sG=null;function sK(e,t){var r=e.ref;if(null!==r)if("function"==typeof r)try{r(null)}catch(r){o1(e,t,r)}else r.current=null}function sQ(e,t,r){try{r()}catch(r){o1(e,t,r)}}var sY=!1;function sX(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&sQ(t,r,a)}i=i.next}while(i!==n)}}function sJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function sZ(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"==typeof t?t(e):t.current=e}}function s0(e){return 5===e.tag||3===e.tag||4===e.tag}function s1(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var s2=null,s5=!1;function s3(e,t,r){for(r=r.child;null!==r;)s4(e,t,r),r=r.sibling}function s4(e,t,r){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,r)}catch(e){}switch(r.tag){case 5:sW||sK(r,t);case 6:var n=s2,i=s5;s2=null,s3(e,t,r),s2=n,s5=i,null!==s2&&(s5?(e=s2,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):s2.removeChild(r.stateNode));break;case 18:null!==s2&&(s5?(e=s2,r=r.stateNode,8===e.nodeType?nF(e.parentNode,r):1===e.nodeType&&nF(e,r),tq(e)):nF(s2,r.stateNode));break;case 4:n=s2,i=s5,s2=r.stateNode.containerInfo,s5=!0,s3(e,t,r),s2=n,s5=i;break;case 0:case 11:case 14:case 15:if(!sW&&null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,void 0!==s&&(0!=(2&a)?sQ(r,t,s):0!=(4&a)&&sQ(r,t,s)),i=i.next}while(i!==n)}s3(e,t,r);break;case 1:if(!sW&&(sK(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(e){o1(r,t,e)}s3(e,t,r);break;case 21:default:s3(e,t,r);break;case 22:1&r.mode?(sW=(n=sW)||null!==r.memoizedState,s3(e,t,r),sW=n):s3(e,t,r)}}function s6(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new sq),t.forEach(function(t){var n=o4.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function s8(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var a=t,s=a;e:for(;null!==s;){switch(s.tag){case 5:s2=s.stateNode,s5=!1;break e;case 3:case 4:s2=s.stateNode.containerInfo,s5=!0;break e}s=s.return}if(null===s2)throw Error(h(160));s4(e,a,i),s2=null,s5=!1;var o=i.alternate;null!==o&&(o.return=null),i.return=null}catch(e){o1(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)s7(t,e),t=t.sibling}function s7(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s8(t,e),s9(e),4&n){try{sX(3,e,e.return),sJ(3,e)}catch(t){o1(e,e.return,t)}try{sX(5,e,e.return)}catch(t){o1(e,e.return,t)}}break;case 1:s8(t,e),s9(e),512&n&&null!==r&&sK(r,r.return);break;case 5:if(s8(t,e),s9(e),512&n&&null!==r&&sK(r,r.return),32&e.flags){var i=e.stateNode;try{eI(i,"")}catch(t){o1(e,e.return,t)}}if(4&n&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==r?r.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===a.type&&null!=a.name&&ef(i,a),eD(o,s);var u=eD(o,a);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];"style"===c?eR(i,d):"dangerouslySetInnerHTML"===c?eT(i,d):"children"===c?eI(i,d):C(i,c,d,u)}switch(o){case"input":ep(i,a);break;case"textarea":ew(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?ev(i,!!a.multiple,p,!1):!!a.multiple!==f&&(null!=a.defaultValue?ev(i,!!a.multiple,a.defaultValue,!0):ev(i,!!a.multiple,a.multiple?[]:"",!1))}i[nU]=a}catch(t){o1(e,e.return,t)}}break;case 6:if(s8(t,e),s9(e),4&n){if(null===e.stateNode)throw Error(h(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){o1(e,e.return,t)}}break;case 3:if(s8(t,e),s9(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){o1(e,e.return,t)}break;case 4:default:s8(t,e),s9(e);break;case 13:s8(t,e),s9(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,a&&(null===i.alternate||null===i.alternate.memoizedState)&&(ox=tr())),4&n&&s6(e);break;case 22:if(c=null!==r&&null!==r.memoizedState,1&e.mode?(sW=(u=sW)||c,s8(t,e),sW=u):s8(t,e),s9(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(sG=e,c=e.child;null!==c;){for(d=sG=c;null!==sG;){switch(p=(f=sG).child,f.tag){case 0:case 11:case 14:case 15:sX(4,f,f.return);break;case 1:sK(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){n=f,r=f.return;try{m.props=(t=n).memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){o1(n,r,e)}}break;case 5:sK(f,f.return);break;case 22:if(null!==f.memoizedState){ot(d);continue}}null!==p?(p.return=f,sG=p):ot(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?(a=i.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"):(o=d.stateNode,s=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=eA("display",s))}catch(t){o1(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){o1(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:s8(t,e),s9(e),4&n&&s6(e);case 21:}}function s9(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(s0(r)){var n=r;break e}r=r.return}throw Error(h(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(eI(i,""),n.flags&=-33);var a=s1(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,o=s1(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=nN));else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,o,s);break;default:throw Error(h(161))}}catch(t){o1(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function oe(e){for(;null!==sG;){var t=sG;if(0!=(8772&t.flags)){var r=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:sW||sJ(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!sW)if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:sn(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&at(t,a,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}at(t,s,r)}break;case 5:var o=t.stateNode;if(null===r&&4&t.flags){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tq(d)}}}break;default:throw Error(h(163))}sW||512&t.flags&&sZ(t)}catch(e){o1(t,t.return,e)}}if(t===e){sG=null;break}if(null!==(r=t.sibling)){r.return=t.return,sG=r;break}sG=t.return}}function ot(e){for(;null!==sG;){var t=sG;if(t===e){sG=null;break}var r=t.sibling;if(null!==r){r.return=t.return,sG=r;break}sG=t.return}}function or(e){for(;null!==sG;){var t=sG;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{sJ(4,t)}catch(e){o1(t,r,e)}break;case 1:var n=t.stateNode;if("function"==typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(e){o1(t,i,e)}}var a=t.return;try{sZ(t)}catch(e){o1(t,a,e)}break;case 5:var s=t.return;try{sZ(t)}catch(e){o1(t,s,e)}}}catch(e){o1(t,t.return,e)}if(t===e){sG=null;break}var o=t.sibling;if(null!==o){o.return=t.return,sG=o;break}sG=t.return}}var on=Math.ceil,oi=_.ReactCurrentDispatcher,oa=_.ReactCurrentOwner,os=_.ReactCurrentBatchConfig,oo=0,ol=null,ou=null,oc=0,oh=0,od=n0(0),of=0,op=null,om=0,og=0,oy=0,ov=null,ob=null,ox=0,ow=1/0,oE=null,oS=!1,ok=null,oC=null,o_=!1,oT=null,oI=0,oN=0,oj=null,oA=-1,oR=0;function oP(){return 0!=(6&oo)?tr():-1!==oA?oA:oA=tr()}function oO(e){return 0==(1&e.mode)?1:0!=(2&oo)&&0!==oc?oc&-oc:null!==iM.transition?(0===oR&&(oR=tb()),oR):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function oD(e,t,r,n){if(50<oN)throw oN=0,oj=null,Error(h(185));tw(e,r,n),(0==(2&oo)||e!==ol)&&(e===ol&&(0==(2&oo)&&(og|=r),4===of&&oz(e,oc)),oL(e,n),1===r&&0===oo&&0==(1&t.mode)&&(ow=tr()+500,is&&iu()))}function oL(e,t){var r,n=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-th(a),o=1<<s,l=i[s];-1===l?(0==(o&r)||0!=(o&n))&&(i[s]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}(e,t);var i=ty(e,e===ol?oc:0);if(0===i)null!==n&&e9(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&e9(n),1===t)0===e.tag?(r=o$.bind(null,e),is=!0,il(r)):il(o$.bind(null,e)),nL(function(){0==(6&oo)&&iu()}),n=null;else{switch(tk(i)){case 1:n=ti;break;case 4:n=ta;break;case 16:default:n=ts;break;case 0x20000000:n=tl}n=e7(n,oM.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oM(e,t){if(oA=-1,oR=0,0!=(6&oo))throw Error(h(327));var r=e.callbackNode;if(oZ()&&e.callbackNode!==r)return null;var n=ty(e,e===ol?oc:0);if(0===n)return null;if(0!=(30&n)||0!=(n&e.expiredLanes)||t)t=oQ(e,n);else{t=n;var i=oo;oo|=2;var a=oG();for((ol!==e||oc!==t)&&(oE=null,ow=tr()+500,oW(e,t));;)try{for(;null!==ou&&!te();)oY(ou);break}catch(t){oq(e,t)}iK(),oi.current=a,oo=i,null!==ou?t=0:(ol=null,oc=0,t=of)}if(0!==t){if(2===t&&0!==(i=tv(e))&&(n=i,t=oF(e,i)),1===t)throw r=op,oW(e,0),oz(e,n),oL(e,tr()),r;if(6===t)oz(e,n);else{if(i=e.current.alternate,0==(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!rQ(a(),i))return!1}catch(e){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=oQ(e,n))&&0!==(a=tv(e))&&(n=a,t=oF(e,a)),1===t))throw r=op,oW(e,0),oz(e,n),oL(e,tr()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(h(345));case 2:case 5:oJ(e,ob,oE);break;case 3:if(oz(e,n),(0x7c00000&n)===n&&10<(t=ox+500-tr())){if(0!==ty(e,0))break;if(((i=e.suspendedLanes)&n)!==n){oP(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nP(oJ.bind(null,e,ob,oE),t);break}oJ(e,ob,oE);break;case 4:if(oz(e,n),(4194240&n)===n)break;for(i=-1,t=e.eventTimes;0<n;){var s=31-th(n);a=1<<s,(s=t[s])>i&&(i=s),n&=~a}if(n=i,10<(n=(120>(n=tr()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*on(n/1960))-n)){e.timeoutHandle=nP(oJ.bind(null,e,ob,oE),n);break}oJ(e,ob,oE);break;default:throw Error(h(329))}}}return oL(e,tr()),e.callbackNode===r?oM.bind(null,e):null}function oF(e,t){var r=ov;return e.current.memoizedState.isDehydrated&&(oW(e,t).flags|=256),2!==(e=oQ(e,t))&&(t=ob,ob=r,null!==t&&oB(t)),e}function oB(e){null===ob?ob=e:ob.push.apply(ob,e)}function oz(e,t){for(t&=~oy,t&=~og,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-th(t),n=1<<r;e[r]=-1,t&=~n}}function o$(e){if(0!=(6&oo))throw Error(h(327));oZ();var t=ty(e,0);if(0==(1&t))return oL(e,tr()),null;var r=oQ(e,t);if(0!==e.tag&&2===r){var n=tv(e);0!==n&&(t=n,r=oF(e,n))}if(1===r)throw r=op,oW(e,0),oz(e,t),oL(e,tr()),r;if(6===r)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,oJ(e,ob,oE),oL(e,tr()),null}function oV(e,t){var r=oo;oo|=1;try{return e(t)}finally{0===(oo=r)&&(ow=tr()+500,is&&iu())}}function oU(e){null!==oT&&0===oT.tag&&0==(6&oo)&&oZ();var t=oo;oo|=1;var r=os.transition,n=tS;try{if(os.transition=null,tS=1,e)return e()}finally{tS=n,os.transition=r,0==(6&(oo=t))&&iu()}}function oH(){oh=od.current,n1(od)}function oW(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,nO(r)),null!==ou)for(r=ou.return;null!==r;){var n=r;switch(iS(n),n.tag){case 1:null!=(n=n.type.childContextTypes)&&n9();break;case 3:al(),n1(n4),n1(n3),ap();break;case 5:ac(n);break;case 4:al();break;case 13:case 19:n1(ah);break;case 10:iQ(n.type._context);break;case 22:case 23:oH()}r=r.return}if(ol=e,ou=e=o9(e.current,null),oc=oh=t,of=0,op=null,oy=og=om=0,ob=ov=null,null!==iZ){for(t=0;t<iZ.length;t++)if(null!==(n=(r=iZ[t]).interleaved)){r.interleaved=null;var i=n.next,a=r.pending;if(null!==a){var s=a.next;a.next=i,n.next=s}r.pending=n}iZ=null}return e}function oq(e,t){for(;;){var r=ou;try{if(iK(),am.current=a9,aw){for(var n=av.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}aw=!1}if(ay=0,ax=ab=av=null,aE=!1,aS=0,oa.current=null,null===r||null===r.return){of=1,op=t,ou=null;break}e:{var a=e,s=r.return,o=r,l=t;if(t=oc,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=sy(s);if(null!==p){p.flags&=-257,sv(p,s,o,a,t),1&p.mode&&sg(a,u,t),t=p,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){sg(a,u,t),oK();break e}l=Error(h(426))}else if(i_&&1&o.mode){var y=sy(s);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),sv(y,s,o,a,t),iL(sc(l,o));break e}}a=l=sc(l,o),4!==of&&(of=2),null===ov?ov=[a]:ov.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=sp(a,l,t);i9(a,v);break e;case 1:o=l;var b=a.type,x=a.stateNode;if(0==(128&a.flags)&&("function"==typeof b.getDerivedStateFromError||null!==x&&"function"==typeof x.componentDidCatch&&(null===oC||!oC.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=sm(a,o,t);i9(a,w);break e}}a=a.return}while(null!==a)}oX(r)}catch(e){t=e,ou===r&&null!==r&&(ou=r=r.return);continue}break}}function oG(){var e=oi.current;return oi.current=a9,null===e?a9:e}function oK(){(0===of||3===of||2===of)&&(of=4),null===ol||0==(0xfffffff&om)&&0==(0xfffffff&og)||oz(ol,oc)}function oQ(e,t){var r=oo;oo|=2;var n=oG();for((ol!==e||oc!==t)&&(oE=null,oW(e,t));;)try{for(;null!==ou;)oY(ou);break}catch(t){oq(e,t)}if(iK(),oo=r,oi.current=n,null!==ou)throw Error(h(261));return ol=null,oc=0,of}function oY(e){var t=l(e.alternate,e,oh);e.memoizedProps=e.pendingProps,null===t?oX(e):ou=t,oa.current=null}function oX(e){var t=e;do{var r=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(r=function(e,t,r){var a=t.pendingProps;switch(iS(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sU(t),null;case 1:case 17:return n7(t.type)&&n9(),sU(t),null;case 3:return a=t.stateNode,al(),n1(n4),n1(n3),ap(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(null===e||null===e.child)&&(iP(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iT&&(oB(iT),iT=null))),i(e,t),sU(t),null;case 5:ac(t);var l=as(aa.current);if(r=t.type,null!==e&&null!=t.stateNode)s(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(null===t.stateNode)throw Error(h(166));return sU(t),null}if(e=as(an.current),iP(t)){a=t.stateNode,r=t.type;var u=t.memoizedProps;switch(a[nV]=t,a[nU]=u,e=0!=(1&t.mode),r){case"dialog":nm("cancel",a),nm("close",a);break;case"iframe":case"object":case"embed":nm("load",a);break;case"video":case"audio":for(l=0;l<nh.length;l++)nm(nh[l],a);break;case"source":nm("error",a);break;case"img":case"image":case"link":nm("error",a),nm("load",a);break;case"details":nm("toggle",a);break;case"input":ed(a,u),nm("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},nm("invalid",a);break;case"textarea":ex(a,u),nm("invalid",a)}for(var c in eO(r,u),l=null,u)if(u.hasOwnProperty(c)){var d=u[c];"children"===c?"string"==typeof d?a.textContent!==d&&(!0!==u.suppressHydrationWarning&&nI(a.textContent,d,e),l=["children",d]):"number"==typeof d&&a.textContent!==""+d&&(!0!==u.suppressHydrationWarning&&nI(a.textContent,d,e),l=["children",""+d]):f.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&nm("scroll",a)}switch(r){case"input":el(a),em(a,u,!0);break;case"textarea":el(a),eE(a);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(a.onclick=nN)}a=l,t.updateQueue=a,null!==a&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=c.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof a.is?e=c.createElement(r,{is:a.is}):(e=c.createElement(r),"select"===r&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,r),e[nV]=t,e[nU]=a,n(e,t,!1,!1),t.stateNode=e;e:{switch(c=eD(r,a),r){case"dialog":nm("cancel",e),nm("close",e),l=a;break;case"iframe":case"object":case"embed":nm("load",e),l=a;break;case"video":case"audio":for(l=0;l<nh.length;l++)nm(nh[l],e);l=a;break;case"source":nm("error",e),l=a;break;case"img":case"image":case"link":nm("error",e),nm("load",e),l=a;break;case"details":nm("toggle",e),l=a;break;case"input":ed(e,a),l=eh(e,a),nm("invalid",e);break;case"option":default:l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=er({},a,{value:void 0}),nm("invalid",e);break;case"textarea":ex(e,a),l=eb(e,a),nm("invalid",e)}for(u in eO(r,l),d=l)if(d.hasOwnProperty(u)){var p=d[u];"style"===u?eR(e,p):"dangerouslySetInnerHTML"===u?null!=(p=p?p.__html:void 0)&&eT(e,p):"children"===u?"string"==typeof p?("textarea"!==r||""!==p)&&eI(e,p):"number"==typeof p&&eI(e,""+p):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(f.hasOwnProperty(u)?null!=p&&"onScroll"===u&&nm("scroll",e):null!=p&&C(e,u,p,c))}switch(r){case"input":el(e),em(e,a,!1);break;case"textarea":el(e),eE(e);break;case"option":null!=a.value&&e.setAttribute("value",""+es(a.value));break;case"select":e.multiple=!!a.multiple,null!=(u=a.value)?ev(e,!!a.multiple,u,!1):null!=a.defaultValue&&ev(e,!!a.multiple,a.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=nN)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return sU(t),null;case 6:if(e&&null!=t.stateNode)o(e,t,e.memoizedProps,a);else{if("string"!=typeof a&&null===t.stateNode)throw Error(h(166));if(r=as(aa.current),as(an.current),iP(t)){if(a=t.stateNode,r=t.memoizedProps,a[nV]=t,(u=a.nodeValue!==r)&&null!==(e=ik))switch(e.tag){case 3:nI(a.nodeValue,r,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&nI(a.nodeValue,r,0!=(1&e.mode))}u&&(t.flags|=4)}else(a=(9===r.nodeType?r:r.ownerDocument).createTextNode(a))[nV]=t,t.stateNode=a}return sU(t),null;case 13:if(n1(ah),a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i_&&null!==iC&&0!=(1&t.mode)&&0==(128&t.flags))iO(),iD(),t.flags|=98560,u=!1;else if(u=iP(t),null!==a&&null!==a.dehydrated){if(null===e){if(!u)throw Error(h(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(h(317));u[nV]=t}else iD(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;sU(t),u=!1}else null!==iT&&(oB(iT),iT=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=r,t;return(a=null!==a)!=(null!==e&&null!==e.memoizedState)&&a&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ah.current)?0===of&&(of=3):oK())),null!==t.updateQueue&&(t.flags|=4),sU(t),null;case 4:return al(),i(e,t),null===e&&nv(t.stateNode.containerInfo),sU(t),null;case 10:return iQ(t.type._context),sU(t),null;case 19:if(n1(ah),null===(u=t.memoizedState))return sU(t),null;if(a=0!=(128&t.flags),null===(c=u.rendering))if(a)sV(u,!1);else{if(0!==of||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=ad(e))){for(t.flags|=128,sV(u,!1),null!==(a=c.updateQueue)&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;null!==r;)u=r,e=a,u.flags&=0xe00002,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return n2(ah,1&ah.current|2),t.child}e=e.sibling}null!==u.tail&&tr()>ow&&(t.flags|=128,a=!0,sV(u,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=ad(c))){if(t.flags|=128,a=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),sV(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!i_)return sU(t),null}else 2*tr()-u.renderingStartTime>ow&&0x40000000!==r&&(t.flags|=128,a=!0,sV(u,!1),t.lanes=4194304);u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=u.last)?r.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tr(),t.sibling=null,r=ah.current,n2(ah,a?1&r|2:1&r),t;return sU(t),null;case 22:case 23:return oH(),a=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==a&&(t.flags|=8192),a&&0!=(1&t.mode)?0!=(0x40000000&oh)&&(sU(t),6&t.subtreeFlags&&(t.flags|=8192)):sU(t),null;case 24:case 25:return null}throw Error(h(156,t.tag))}(r,t,oh))){ou=r;return}}else{if(null!==(r=function(e,t){switch(iS(t),t.tag){case 1:return n7(t.type)&&n9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return al(),n1(n4),n1(n3),ap(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ac(t),null;case 13:if(n1(ah),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(h(340));iD()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return n1(ah),null;case 4:return al(),null;case 10:return iQ(t.type._context),null;case 22:case 23:return oH(),null;default:return null}}(r,t))){r.flags&=32767,ou=r;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{of=6,ou=null;return}}if(null!==(t=t.sibling)){ou=t;return}ou=t=e}while(null!==t)0===of&&(of=5)}function oJ(e,t,r){var n=tS,i=os.transition;try{os.transition=null,tS=1,function(e,t,r,n){do oZ();while(null!==oT)if(0!=(6&oo))throw Error(h(327));r=e.finishedWork;var i=e.finishedLanes;if(null!==r){if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes,s=e,o=a,l=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var u=s.eventTimes;for(s=s.expirationTimes;0<l;){var c=31-th(l),d=1<<c;o[c]=0,u[c]=-1,s[c]=-1,l&=~d}if(e===ol&&(ou=ol=null,oc=0),0==(2064&r.subtreeFlags)&&0==(2064&r.flags)||o_||(o_=!0,function(e,t){e7(e,t)}(ts,function(){return oZ(),null})),a=0!=(15990&r.flags),0!=(15990&r.subtreeFlags)||a){a=os.transition,os.transition=null;var f,p,m,g=tS;tS=1;var y=oo;oo|=4,oa.current=null,function(e,t){if(nj=tK,r0(e=rZ())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i,a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch(e){r=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(;f!==r||0!==a&&3!==f.nodeType||(l=o+a),f!==s||0!==n&&3!==f.nodeType||(u=o+n),3===f.nodeType&&(o+=f.nodeValue.length),null!==(i=f.firstChild);)p=f,f=i;for(;;){if(f===e)break t;if(p===r&&++c===a&&(l=o),p===s&&++d===n&&(u=o),null!==(i=f.nextSibling))break;p=(f=p).parentNode}f=i}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(nA={focusedElem:e,selectionRange:r},tK=!1,sG=t;null!==sG;)if(e=(t=sG).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,sG=e;else for(;null!==sG;){t=sG;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:sn(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(h(163))}}catch(e){o1(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,sG=e;break}sG=t.return}m=sY,sY=!1}(e,r),s7(r,e),function(e){var t=rZ(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(r.ownerDocument.documentElement,r)){if(null!==n&&r0(r)){if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=void 0===n.end?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=rJ(r,a);var s=rJ(r,n);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(nA),tK=!!nj,nA=nj=null,e.current=r,f=r,p=e,m=i,sG=f,function e(t,r,n){for(var i=0!=(1&t.mode);null!==sG;){var a=sG,s=a.child;if(22===a.tag&&i){var o=null!==a.memoizedState||sH;if(!o){var l=a.alternate,u=null!==l&&null!==l.memoizedState||sW;l=sH;var c=sW;if(sH=o,(sW=u)&&!c)for(sG=a;null!==sG;)u=(o=sG).child,22===o.tag&&null!==o.memoizedState?or(a):null!==u?(u.return=o,sG=u):or(a);for(;null!==s;)sG=s,e(s,r,n),s=s.sibling;sG=a,sH=l,sW=c}oe(t,r,n)}else 0!=(8772&a.subtreeFlags)&&null!==s?(s.return=a,sG=s):oe(t,r,n)}}(f,p,m),tt(),oo=y,tS=g,os.transition=a}else e.current=r;o_&&(o_=!1,oT=e,oI=i),0===(a=e.pendingLanes)&&(oC=null);var v=r.stateNode;if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,v,void 0,128==(128&v.current.flags))}catch(e){}if(oL(e,tr()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)n((i=t[r]).value,{componentStack:i.stack,digest:i.digest});if(oS)throw oS=!1,e=ok,ok=null,e;0!=(1&oI)&&0!==e.tag&&oZ(),0!=(1&(a=e.pendingLanes))?e===oj?oN++:(oN=0,oj=e):oN=0,iu()}}(e,t,r,n)}finally{os.transition=i,tS=n}return null}function oZ(){if(null!==oT){var e=tk(oI),t=os.transition,r=tS;try{if(os.transition=null,tS=16>e?16:e,null===oT)var n=!1;else{if(e=oT,oT=null,oI=0,0!=(6&oo))throw Error(h(331));var i=oo;for(oo|=4,sG=e.current;null!==sG;){var a=sG,s=a.child;if(0!=(16&sG.flags)){var o=a.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(sG=u;null!==sG;){var c=sG;switch(c.tag){case 0:case 11:case 15:sX(8,c,a)}var d=c.child;if(null!==d)d.return=c,sG=d;else for(;null!==sG;){var f=(c=sG).sibling,p=c.return;if(!function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&(delete r[nV],delete r[nU],delete r[nW],delete r[nq],delete r[nG]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){sG=null;break}if(null!==f){f.return=p,sG=f;break}sG=p}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}sG=a}}if(0!=(2064&a.subtreeFlags)&&null!==s)s.return=a,sG=s;else for(;null!==sG;){if(a=sG,0!=(2048&a.flags))switch(a.tag){case 0:case 11:case 15:sX(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,sG=v;break}sG=a.return}}var b=e.current;for(sG=b;null!==sG;){var x=(s=sG).child;if(0!=(2064&s.subtreeFlags)&&null!==x)x.return=s,sG=x;else for(s=b;null!==sG;){if(o=sG,0!=(2048&o.flags))try{switch(o.tag){case 0:case 11:case 15:sJ(9,o)}}catch(e){o1(o,o.return,e)}if(o===s){sG=null;break}var w=o.sibling;if(null!==w){w.return=o.return,sG=w;break}sG=o.return}}if(oo=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}n=!0}return n}finally{tS=r,os.transition=t}}return!1}function o0(e,t,r){t=sp(e,t=sc(r,t),1),e=i8(e,t,1),t=oP(),null!==e&&(tw(e,1,t),oL(e,t))}function o1(e,t,r){if(3===e.tag)o0(e,e,r);else for(;null!==t;){if(3===t.tag){o0(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===oC||!oC.has(n))){e=sm(t,e=sc(r,e),1),t=i8(t,e,1),e=oP(),null!==t&&(tw(t,1,e),oL(t,e));break}}t=t.return}}function o2(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=oP(),e.pingedLanes|=e.suspendedLanes&r,ol===e&&(oc&r)===r&&(4===of||3===of&&(0x7c00000&oc)===oc&&500>tr()-ox?oW(e,0):oy|=r),oL(e,t)}function o5(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(0x7c00000&(tm<<=1))&&(tm=4194304)));var r=oP();null!==(e=i2(e,t))&&(tw(e,t,r),oL(e,r))}function o3(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),o5(e,r)}function o4(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(h(314))}null!==n&&n.delete(t),o5(e,r)}function o6(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function o8(e,t,r,n){return new o6(e,t,r,n)}function o7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function o9(e,t){var r=e.alternate;return null===r?((r=o8(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=0xe00000&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function le(e,t,r,n,i,a){var s=2;if(n=e,"function"==typeof e)o7(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case N:return lt(r.children,i,a,t);case j:s=8,i|=8;break;case A:return(e=o8(12,r,t,2|i)).elementType=A,e.lanes=a,e;case D:return(e=o8(13,r,t,i)).elementType=D,e.lanes=a,e;case M:return(e=o8(19,r,t,i)).elementType=M,e.lanes=a,e;case z:return lr(r,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case R:s=10;break e;case P:s=9;break e;case O:s=11;break e;case F:s=14;break e;case B:s=16,n=null;break e}throw Error(h(130,null==e?e:typeof e,""))}return(t=o8(s,r,t,i)).elementType=e,t.type=n,t.lanes=a,t}function lt(e,t,r,n){return(e=o8(7,e,n,t)).lanes=r,e}function lr(e,t,r,n){return(e=o8(22,e,n,t)).elementType=z,e.lanes=r,e.stateNode={isHidden:!1},e}function ln(e,t,r){return(e=o8(6,e,null,t)).lanes=r,e}function li(e,t,r){return(t=o8(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function la(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tx(0),this.expirationTimes=tx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tx(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,r,n,i,a,s,o,l){return e=new la(e,t,r,o,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=o8(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},i3(a),e}function lo(e){if(!e)return n5;e=e._reactInternals;e:{if(e3(e)!==e||1!==e.tag)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(n7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(h(171))}if(1===e.tag){var r=e.type;if(n7(r))return it(e,r,t)}return t}function ll(e,t,r,n,i,a,s,o,l){return(e=ls(r,n,!0,e,i,a,s,o,l)).context=lo(null),r=e.current,(a=i6(n=oP(),i=oO(r))).callback=null!=t?t:null,i8(r,a,i),e.current.lanes=i,tw(e,i,n),oL(e,n),e}function lu(e,t,r,n){var i=t.current,a=oP(),s=oO(i);return r=lo(r),null===t.context?t.context=r:t.pendingContext=r,(t=i6(a,s)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=i8(i,t,s))&&(oD(e,i,s,a),i7(e,i,s)),s}function lc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ld(e,t){lh(e,t),(e=e.alternate)&&lh(e,t)}l=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||n4.current)sx=!0;else{if(0==(e.lanes&r)&&0==(128&t.flags))return sx=!1,function(e,t,r){switch(t.tag){case 3:sj(t),iD();break;case 5:au(t);break;case 1:n7(t.type)&&ir(t);break;case 4:ao(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;n2(iH,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState)){if(null!==n.dehydrated)return n2(ah,1&ah.current),t.flags|=128,null;if(0!=(r&t.child.childLanes))return sO(e,t,r);return n2(ah,1&ah.current),null!==(e=s$(e,t,r))?e.sibling:null}n2(ah,1&ah.current);break;case 19:if(n=0!=(r&t.childLanes),0!=(128&e.flags)){if(n)return sB(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),n2(ah,ah.current),!n)return null;break;case 22:case 23:return t.lanes=0,sC(e,t,r)}return s$(e,t,r)}(e,t,r);sx=0!=(131072&e.flags)}else sx=!1,i_&&0!=(1048576&t.flags)&&iw(t,ip,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;sz(e,t),e=t.pendingProps;var i=n8(t,n3.current);iX(t,r),i=aT(null,t,n,e,i,r);var a=aI();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,n7(n)?(a=!0,ir(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i3(t),i.updater=sa,t.stateNode=i,i._reactInternals=t,su(t,n,e,r),t=sN(null,t,n,!0,a,r)):(t.tag=0,i_&&a&&iE(t),sw(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(sz(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"==typeof e)return+!!o7(e);if(null!=e){if((e=e.$$typeof)===O)return 11;if(e===F)return 14}return 2}(n),e=sn(n,e),i){case 0:t=sT(null,t,n,e,r);break e;case 1:t=sI(null,t,n,e,r);break e;case 11:t=sE(null,t,n,e,r);break e;case 14:t=sS(null,t,n,sn(n.type,e),r);break e}throw Error(h(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),sT(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),sI(e,t,n,i,r);case 3:e:{if(sj(t),null===e)throw Error(h(387));n=t.pendingProps,i=(a=t.memoizedState).element,i4(e,t),ae(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){i=sc(Error(h(423)),t),t=sA(e,t,n,r,i);break e}else if(n!==i){i=sc(Error(h(424)),t),t=sA(e,t,n,r,i);break e}else for(iC=nB(t.stateNode.containerInfo.firstChild),ik=t,i_=!0,iT=null,r=iU(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling;else{if(iD(),n===i){t=s$(e,t,r);break e}sw(e,t,n,r)}t=t.child}return t;case 5:return au(t),null===e&&iA(t),n=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,nR(n,i)?s=null:null!==a&&nR(n,a)&&(t.flags|=32),s_(e,t),sw(e,t,s,r),t.child;case 6:return null===e&&iA(t),null;case 13:return sO(e,t,r);case 4:return ao(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=iV(t,null,n,r):sw(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),sE(e,t,n,i,r);case 7:return sw(e,t,t.pendingProps,r),t.child;case 8:case 12:return sw(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,n2(iH,n._currentValue),n._currentValue=s,null!==a)if(rQ(a.value,s)){if(a.children===i.children&&!n4.current){t=s$(e,t,r);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var o=a.dependencies;if(null!==o){s=a.child;for(var l=o.firstContext;null!==l;){if(l.context===n){if(1===a.tag){(l=i6(-1,r&-r)).tag=2;var u=a.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,null!==(l=a.alternate)&&(l.lanes|=r),iY(a.return,r,t),o.lanes|=r;break}l=l.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(h(341));s.lanes|=r,null!==(o=s.alternate)&&(o.lanes|=r),iY(s,r,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}sw(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,iX(t,r),n=n(i=iJ(i)),t.flags|=1,sw(e,t,n,r),t.child;case 14:return i=sn(n=t.type,t.pendingProps),i=sn(n.type,i),sS(e,t,n,i,r);case 15:return sk(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),sz(e,t),t.tag=1,n7(n)?(e=!0,ir(t)):e=!1,iX(t,r),so(t,n,i),su(t,n,i,r),sN(null,t,n,!0,e,r);case 19:return sB(e,t,r);case 22:return sC(e,t,r)}throw Error(h(156,t.tag))};var lf="function"==typeof reportError?reportError:function(e){console.error(e)};function lp(e){this._internalRoot=e}function lm(e){this._internalRoot=e}function lg(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lv(){}function lb(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if("function"==typeof i){var o=i;i=function(){var e=lc(s);o.call(e)}}lu(t,s,e,i)}else s=function(e,t,r,n,i){if(i){if("function"==typeof n){var a=n;n=function(){var e=lc(s);a.call(e)}}var s=ll(t,n,e,0,null,!1,!1,"",lv);return e._reactRootContainer=s,e[nH]=s.current,nv(8===e.nodeType?e.parentNode:e),oU(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof n){var o=n;n=function(){var e=lc(l);o.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",lv);return e._reactRootContainer=l,e[nH]=l.current,nv(8===e.nodeType?e.parentNode:e),oU(function(){lu(t,l,r,n)}),l}(r,t,e,i,n);return lc(s)}lm.prototype.render=lp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(h(409));lu(e,t,null,null)},lm.prototype.unmount=lp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;oU(function(){lu(null,e,null,null)}),t[nH]=null}},lm.prototype.unstable_scheduleHydration=function(e){if(e){var t=tI();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tM.length&&0!==t&&t<tM[r].priority;r++);tM.splice(r,0,e),0===r&&t$(e)}},tC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tg(t.pendingLanes);0!==r&&(tE(t,1|r),oL(t,tr()),0==(6&oo)&&(ow=tr()+500,iu()))}break;case 13:oU(function(){var t=i2(e,1);null!==t&&oD(t,e,1,oP())}),ld(e,1)}},t_=function(e){if(13===e.tag){var t=i2(e,0x8000000);null!==t&&oD(t,e,0x8000000,oP()),ld(e,0x8000000)}},tT=function(e){if(13===e.tag){var t=oO(e),r=i2(e,t);null!==r&&oD(r,e,t,oP()),ld(e,t)}},tI=function(){return tS},tN=function(e,t){var r=tS;try{return tS=e,t()}finally{tS=r}},eF=function(e,t,r){switch(t){case"input":if(ep(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=nX(n);if(!i)throw Error(h(90));eu(n),ep(n,i)}}}break;case"textarea":ew(e,r);break;case"select":null!=(t=r.value)&&ev(e,!!r.multiple,t,!1)}},eH=oV,eW=oU;var lx={findFiberByHostInstance:nK,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lw={bundleType:lx.bundleType,version:lx.version,rendererPackageName:lx.rendererPackageName,rendererConfig:lx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lE=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lE.isDisabled&&lE.supportsFiber)try{tu=lE.inject(lw),tc=lE}catch(e){}}U={usingClientEntryPoint:!1,Events:[nQ,nY,nX,eV,eU,oV]},H=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lg(t))throw Error(h(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:I,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},W=function(e,t){if(!lg(e))throw Error(h(299));var r=!1,n="",i=lf;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,r,!1,n,i),e[nH]=t.current,nv(8===e.nodeType?e.parentNode:e),new lp(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(h(188));throw Error(h(268,e=Object.keys(e).join(",")))}return null===(e=e8(t))?null:e.stateNode},G=function(e){return oU(e)},K=function(e,t,r){if(!ly(t))throw Error(h(200));return lb(null,e,t,!0,r)},Q=function(e,t,r){if(!lg(e))throw Error(h(405));var n=null!=r&&r.hydratedSources||null,i=!1,a="",s=lf;if(null!=r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=ll(t,null,e,1,null!=r?r:null,i,!1,a,s),e[nH]=t.current,nv(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new lm(t)},Y=function(e,t,r){if(!ly(t))throw Error(h(200));return lb(null,e,t,!1,r)},X=function(e){if(!ly(e))throw Error(h(40));return!!e._reactRootContainer&&(oU(function(){lb(null,null,e,!1,function(){e._reactRootContainer=null,e[nH]=null})}),!0)},J=oV,Z=function(e,t,r,n){if(!ly(r))throw Error(h(200));if(null==e||void 0===e._reactInternals)throw Error(h(38));return lb(e,t,r,!1,n)},ee="18.3.1-next-f1338f8080-20240426"}),M("33s19",function(e,t){e.exports=L("a0C75")}),M("a0C75",function(e,t){function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<s(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,a=i>>>1;n<a;){var o=2*(n+1)-1,l=e[o],u=o+1,c=e[u];if(0>s(l,r))u<i&&0>s(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[o]=r,n=o);else if(u<i&&0>s(c,r))e[n]=c,e[u]=r,n=u;else break}}return t}function s(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(a(e.exports,"unstable_now",function(){return o},function(e){return o=e}),a(e.exports,"unstable_IdlePriority",function(){return l},function(e){return l=e}),a(e.exports,"unstable_ImmediatePriority",function(){return u},function(e){return u=e}),a(e.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),a(e.exports,"unstable_NormalPriority",function(){return h},function(e){return h=e}),a(e.exports,"unstable_Profiling",function(){return d},function(e){return d=e}),a(e.exports,"unstable_UserBlockingPriority",function(){return f},function(e){return f=e}),a(e.exports,"unstable_cancelCallback",function(){return p},function(e){return p=e}),a(e.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),a(e.exports,"unstable_forceFrameRate",function(){return g},function(e){return g=e}),a(e.exports,"unstable_getCurrentPriorityLevel",function(){return y},function(e){return y=e}),a(e.exports,"unstable_getFirstCallbackNode",function(){return v},function(e){return v=e}),a(e.exports,"unstable_next",function(){return b},function(e){return b=e}),a(e.exports,"unstable_pauseExecution",function(){return x},function(e){return x=e}),a(e.exports,"unstable_requestPaint",function(){return w},function(e){return w=e}),a(e.exports,"unstable_runWithPriority",function(){return E},function(e){return E=e}),a(e.exports,"unstable_scheduleCallback",function(){return S},function(e){return S=e}),a(e.exports,"unstable_shouldYield",function(){return k},function(e){return k=e}),a(e.exports,"unstable_wrapCallback",function(){return C},function(e){return C=e}),"object"==typeof performance&&"function"==typeof performance.now){var o,l,u,c,h,d,f,p,m,g,y,v,b,x,w,E,S,k,C,_,T=performance;o=function(){return T.now()}}else{var I=Date,N=I.now();o=function(){return I.now()-N}}var j=[],A=[],R=1,P=null,O=3,D=!1,L=!1,M=!1,F="function"==typeof setTimeout?setTimeout:null,B="function"==typeof clearTimeout?clearTimeout:null,z="u">typeof setImmediate?setImmediate:null;function $(e){for(var t=n(A);null!==t;){if(null===t.callback)i(A);else if(t.startTime<=e)i(A),t.sortIndex=t.expirationTime,r(j,t);else break;t=n(A)}}function V(e){if(M=!1,$(e),!L)if(null!==n(j))L=!0,Z(U);else{var t=n(A);null!==t&&ee(V,t.startTime-e)}}function U(e,t){L=!1,M&&(M=!1,B(q),q=-1),D=!0;var r=O;try{for($(t),P=n(j);null!==P&&(!(P.expirationTime>t)||e&&!Q());){var a=P.callback;if("function"==typeof a){P.callback=null,O=P.priorityLevel;var s=a(P.expirationTime<=t);t=o(),"function"==typeof s?P.callback=s:P===n(j)&&i(j),$(t)}else i(j);P=n(j)}if(null!==P)var l=!0;else{var u=n(A);null!==u&&ee(V,u.startTime-t),l=!1}return l}finally{P=null,O=r,D=!1}}"u">typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,W=null,q=-1,G=5,K=-1;function Q(){return!(o()-K<G)}function Y(){if(null!==W){var e=o();K=e;var t=!0;try{t=W(!0,e)}finally{t?_():(H=!1,W=null)}}else H=!1}if("function"==typeof z)_=function(){z(Y)};else if("u">typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Y,_=function(){J.postMessage(null)}}else _=function(){F(Y,0)};function Z(e){W=e,H||(H=!0,_())}function ee(e,t){q=F(function(){e(o())},t)}l=5,u=1,c=4,h=3,d=null,f=2,p=function(e){e.callback=null},m=function(){L||D||(L=!0,Z(U))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<e?Math.floor(1e3/e):5},y=function(){return O},v=function(){return n(j)},b=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var r=O;O=t;try{return e()}finally{O=r}},x=function(){},w=function(){},E=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=O;O=e;try{return t()}finally{O=r}},S=function(e,t,i){var a=o();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:R++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>a?(e.sortIndex=i,r(A,e),null===n(j)&&e===n(A)&&(M?(B(q),q=-1):M=!0,ee(V,i-a))):(e.sortIndex=s,r(j,e),L||D||(L=!0,Z(U))),e},k=Q,C=function(e){var t=O;return function(){var r=O;O=t;try{return e.apply(this,arguments)}finally{O=r}}}}),Object.assign(L.i??={},{"3YiOM":"Wellington_Aug_2020_Design_Navy (1).25119e9d.jpg",djc90:"07320183bb4a406ca62f47f55ffe22e8.8f760555.jpeg",iLEAr:"nxtpro-logo.8fc3225a.jpg","82nA9":"hoopseen-logo.4fe7387c.png","8waDd":"otr-logo.572a256c.png","1L2Tm":"canaan-2026.bf30ee76.png","3IfOM":"ethan-2026.d80bafea.png",gAHcM:"nick-2026.46c9db08.png",aIeAs:"rj-2026.b0b2ff56.png",bb8rt:"cam-2026.087da254.png",aSgN9:"max-2026.608d829c.png","03TW4":"chase-2026.4c642ca7.png",lIwF1:"genesis-2026.839f6149.png",fl7ap:"jorge-2026.9b2196d7.png",jlXTp:"cristian-2026.a69b40bd.png"});var F={};F=L("2nzLi");var B=L("7fPBF"),z={};!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),tH=(z=L("6EA3T")).createRoot,z.hydrateRoot;var B=L("7fPBF");function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}(tL=tW||(tW={})).Pop="POP",tL.Push="PUSH",tL.Replace="REPLACE";let V="popstate";function U(e,t){if(!1===e||null==e)throw Error(t)}function H(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function W(e,t){return{usr:e.state,key:e.key,idx:t}}function q(e,t,r,n){return void 0===r&&(r=null),$({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?K(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function G(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function K(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}(tM=tq||(tq={})).data="data",tM.deferred="deferred",tM.redirect="redirect",tM.error="error";let Q=/^:[\w-]+$/,Y=e=>"*"===e;function X(e,t){var r,n,i;let a,s;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[o,l]=(r=e.path,n=e.caseSensitive,i=e.end,void 0===n&&(n=!1),void 0===i&&(i=!0),H("*"===r||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were "'+r.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+r.replace(/\*$/,"/*")+'".'),a=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>(a.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")),r.endsWith("*")?(a.push({paramName:"*"}),s+="*"===r||"/*"===r?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":""!==r&&"/"!==r&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),a]),u=t.match(o);if(!u)return null;let c=u[0],h=c.replace(/(.)\/+$/,"$1"),d=u.slice(1);return{params:l.reduce((e,t,r)=>{let{paramName:n,isOptional:i}=t;if("*"===n){let e=d[r]||"";h=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let a=d[r];return i&&!a?e[n]=void 0:e[n]=(a||"").replace(/%2F/g,"/"),e},{}),pathname:c,pathnameBase:h,pattern:e}}function J(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}let Z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ee(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}function et(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field [")+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function er(e,t){let r=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?r.map((e,t)=>t===r.length-1?e.pathname:e.pathnameBase):r.map(e=>e.pathnameBase)}function en(e,t,r,n){let i,a;void 0===n&&(n=!1),"string"==typeof e?i=K(e):(U(!(i=$({},e)).pathname||!i.pathname.includes("?"),et("?","pathname","search",i)),U(!i.pathname||!i.pathname.includes("#"),et("#","pathname","hash",i)),U(!i.search||!i.search.includes("#"),et("#","search","hash",i)));let s=""===e||""===i.pathname,o=s?"/":i.pathname;if(null==o)a=r;else{let e=t.length-1;if(!n&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){let r;void 0===t&&(t="/");let{pathname:n,search:i="",hash:a=""}="string"==typeof e?K(e):e;if(n){let e;(e=n,Z.test(e))?r=n:(n.includes("//")&&H(!1,"Pathnames cannot have embedded double slashes - normalizing "+n+" -> "+(n=n.replace(/\/\/+/g,"/"))),r=n.startsWith("/")?ee(n.substring(1),"/"):ee(n,t))}else r=t;return{pathname:r,search:es(i),hash:eo(a)}}(i,a),u=o&&"/"!==o&&o.endsWith("/"),c=(s||"."===o)&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}let ei=e=>e.join("/").replace(/\/\/+/g,"/"),ea=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),es=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",eo=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Symbol("deferred");var B=L("7fPBF");function el(){return(el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let eu=B.createContext(null),ec=B.createContext(null),eh=B.createContext(null),ed=B.createContext(null),ef=B.createContext({outlet:null,matches:[],isDataRoute:!1}),ep=B.createContext(null);function em(){return null!=B.useContext(ed)}function eg(){return em()||U(!1),B.useContext(ed).location}function ey(e){B.useContext(eh).static||B.useLayoutEffect(e)}function ev(){let{isDataRoute:e}=B.useContext(ef);return e?function(){let e,{router:t}=(eS.UseNavigateStable,(e=B.useContext(eu))||U(!1),e),r=eC(ek.UseNavigateStable),n=B.useRef(!1);return ey(()=>{n.current=!0}),B.useCallback(function(e,i){void 0===i&&(i={}),n.current&&("number"==typeof e?t.navigate(e):t.navigate(e,el({fromRouteId:r},i)))},[t,r])}():function(){em()||U(!1);let e=B.useContext(eu),{basename:t,future:r,navigator:n}=B.useContext(eh),{matches:i}=B.useContext(ef),{pathname:a}=eg(),s=JSON.stringify(er(i,r.v7_relativeSplatPath)),o=B.useRef(!1);return ey(()=>{o.current=!0}),B.useCallback(function(r,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof r)return void n.go(r);let l=en(r,JSON.parse(s),a,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:ei([t,l.pathname])),(i.replace?n.replace:n.push)(l,i.state,i)},[t,n,s,a,e])}()}function eb(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=B.useContext(eh),{matches:i}=B.useContext(ef),{pathname:a}=eg(),s=JSON.stringify(er(i,n.v7_relativeSplatPath));return B.useMemo(()=>en(e,JSON.parse(s),a,"path"===r),[e,s,a,r])}let ex=B.createElement(function(){var e;let t,r,n,i,a=(r=B.useContext(ep),n=(ek.UseRouteError,(t=B.useContext(ec))||U(!1),t),i=eC(ek.UseRouteError),void 0!==r?r:null==(e=n.errors)?void 0:e[i]),s=null!=a&&"number"==typeof a.status&&"string"==typeof a.statusText&&"boolean"==typeof a.internal&&"data"in a?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null;return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},s),o?B.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},o):null,null)},null);class ew extends B.Component{static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?B.createElement(ef.Provider,{value:this.props.routeContext},B.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}}function eE(e){let{routeContext:t,match:r,children:n}=e,i=B.useContext(eu);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),B.createElement(ef.Provider,{value:t},n)}var eS=((tF=eS||{}).UseBlocker="useBlocker",tF.UseRevalidator="useRevalidator",tF.UseNavigateStable="useNavigate",tF),ek=((tB=ek||{}).UseBlocker="useBlocker",tB.UseLoaderData="useLoaderData",tB.UseActionData="useActionData",tB.UseRouteError="useRouteError",tB.UseNavigation="useNavigation",tB.UseRouteLoaderData="useRouteLoaderData",tB.UseMatches="useMatches",tB.UseRevalidator="useRevalidator",tB.UseNavigateStable="useNavigate",tB.UseRouteId="useRouteId",tB);function eC(e){let t,r=((t=B.useContext(ef))||U(!1),t),n=r.matches[r.matches.length-1];return n.route.id||U(!1),n.route.id}let e_={};function eT(e){U(!1)}function eI(e){let{basename:t="/",children:r=null,location:n,navigationType:i=tW.Pop,navigator:a,static:s=!1,future:o}=e;em()&&U(!1);let l=t.replace(/^\/*/,"/"),u=B.useMemo(()=>({basename:l,navigator:a,static:s,future:el({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);"string"==typeof n&&(n=K(n));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=n,m=B.useMemo(()=>{let e=J(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}},[l,c,h,d,f,p,i]);return null==m?null:B.createElement(eh.Provider,{value:u},B.createElement(ed.Provider,{children:r,value:m}))}function eN(e){let{children:t,location:r}=e;return function(e,t){var r,n;let i;em()||U(!1);let{navigator:a}=B.useContext(eh),{matches:s}=B.useContext(ef),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=eg();if(t){let e="string"==typeof t?K(t):t;"/"===u||(null==(r=e.pathname)?void 0:r.startsWith(u))||U(!1),i=e}else i=c;let h=i.pathname||"/",d=h;if("/"!==u){let e=u.replace(/^\//,"").split("/");d="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let f=(void 0===n&&(n="/"),function(e,t,r,n){let i=J(("string"==typeof t?K(t):t).pathname||"/",r);if(null==i)return null;let a=function e(t,r,n,i){void 0===r&&(r=[]),void 0===n&&(n=[]),void 0===i&&(i="");let a=(t,a,s)=>{var o,l;let u,c,h={relativePath:void 0===s?t.path||"":s,caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};h.relativePath.startsWith("/")&&(U(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),h.relativePath=h.relativePath.slice(i.length));let d=ei([i,h.relativePath]),f=n.concat(h);t.children&&t.children.length>0&&(U(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+d+'".'),e(t.children,r,f,d)),(null!=t.path||t.index)&&r.push({path:d,score:(o=d,l=t.index,c=(u=o.split("/")).length,u.some(Y)&&(c+=-2),l&&(c+=2),u.filter(e=>!Y(e)).reduce((e,t)=>e+(Q.test(t)?3:""===t?1:10),c)),routesMeta:f})};return t.forEach((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of function e(t){let r=t.split("/");if(0===r.length)return[];let[n,...i]=r,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===i.length)return a?[s,""]:[s];let o=e(i.join("/")),l=[];return l.push(...o.map(e=>""===e?s:[s,e].join("/"))),a&&l.push(...o),l.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))a(e,t,r);else a(e,t)}),r}(e);a.sort((e,t)=>{var r,n;return e.score!==t.score?t.score-e.score:(r=e.routesMeta.map(e=>e.childrenIndex),n=t.routesMeta.map(e=>e.childrenIndex),r.length===n.length&&r.slice(0,-1).every((e,t)=>e===n[t])?r[r.length-1]-n[n.length-1]:0)});let s=null;for(let e=0;null==s&&e<a.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return H(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(i);s=function(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,i={},a="/",s=[];for(let e=0;e<n.length;++e){let o=n[e],l=e===n.length-1,u="/"===a?t:t.slice(a.length)||"/",c=X({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},u),h=o.route;if(!c&&l&&r&&!n[n.length-1].route.index&&(c=X({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:ei([a,c.pathname]),pathnameBase:ea(ei([a,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(a=ei([a,c.pathnameBase]))}return s}(a[e],t,n)}return s}(e,{pathname:d},n,!1)),p=function(e,t,r,n){var i,a;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(null==(a=n)||!a.v7_partialHydration||0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let s=e,o=null==(i=r)?void 0:i.errors;if(null!=o){let e=s.findIndex(e=>e.route.id&&(null==o?void 0:o[e.route.id])!==void 0);e>=0||U(!1),s=s.slice(0,Math.min(s.length,e+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){l=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight((e,n,i)=>{var a;let c,h=!1,d=null,f=null;r&&(c=o&&n.route.id?o[n.route.id]:void 0,d=n.route.errorElement||ex,l&&(u<0&&0===i?(a="route-fallback",e_[a]||(e_[a]=!0),h=!0,f=null):u===i&&(h=!0,f=n.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,i+1)),m=()=>{let t;return t=c?d:h?f:n.route.Component?B.createElement(n.route.Component,null):n.route.element?n.route.element:e,B.createElement(eE,{match:n,routeContext:{outlet:e,matches:p,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===i)?B.createElement(ew,{location:r.location,revalidation:r.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:ei([u,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:ei([u,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,void 0,void 0);return t&&p?B.createElement(ed.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:tW.Pop}},p):p}(function e(t,r){void 0===r&&(r=[]);let n=[];return B.Children.forEach(t,(t,i)=>{if(!B.isValidElement(t))return;let a=[...r,i];if(t.type===B.Fragment)return void n.push.apply(n,e(t.props.children,a));t.type!==eT&&U(!1),t.props.index&&t.props.children&&U(!1);let s={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=e(t.props.children,a)),n.push(s)}),n}(t),r)}B.startTransition;var ej=((tz=ej||{})[tz.pending=0]="pending",tz[tz.success=1]="success",tz[tz.error=2]="error",tz);function eA(){return(eA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}new Promise(()=>{}),B.Component;let eR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let eP=B.startTransition;z.flushSync,B.useId;let eO="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,eD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eL=B.forwardRef(function(e,t){let r,{onClick:n,relative:i,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,d=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,eR),{basename:f}=B.useContext(eh),p=!1;if("string"==typeof u&&eD.test(u)&&(r=u,eO))try{let e=new URL(window.location.href),t=new URL(u.startsWith("//")?e.protocol+u:u),r=J(t.pathname,f);t.origin===e.origin&&null!=r?u=r+t.search+t.hash:p=!0}catch(e){}let m=function(e,t){let{relative:r}=void 0===t?{}:t;em()||U(!1);let{basename:n,navigator:i}=B.useContext(eh),{hash:a,pathname:s,search:o}=eb(e,{relative:r}),l=s;return"/"!==n&&(l="/"===s?n:ei([n,s])),i.createHref({pathname:l,search:o,hash:a})}(u,{relative:i}),g=function(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:o}=void 0===t?{}:t,l=ev(),u=eg(),c=eb(e,{relative:s});return B.useCallback(t=>{0!==t.button||r&&"_self"!==r||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),l(e,{replace:void 0!==n?n:G(u)===G(c),state:i,preventScrollReset:a,relative:s,viewTransition:o}))},[u,l,c,n,i,r,e,a,s,o])}(u,{replace:s,state:o,target:l,preventScrollReset:c,relative:i,viewTransition:h});return B.createElement("a",eA({},d,{href:r||m,onClick:p||a?n:function(e){n&&n(e),e.defaultPrevented||g(e)},ref:t,target:l}))});(t$=tG||(tG={})).UseScrollRestoration="useScrollRestoration",t$.UseSubmit="useSubmit",t$.UseSubmitFetcher="useSubmitFetcher",t$.UseFetcher="useFetcher",t$.useViewTransitionState="useViewTransitionState",(tV=tK||(tK={})).UseFetcher="useFetcher",tV.UseFetchers="useFetchers",tV.UseScrollRestoration="useScrollRestoration";L("7fPBF");var eM=function(){return(eM=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function eF(e,t,r){if(r||2==arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var B=L("7fPBF"),eB="-ms-",ez="-moz-",e$="-webkit-",eV="comm",eU="rule",eH="decl",eW="@keyframes",eq=Math.abs,eG=String.fromCharCode,eK=Object.assign;function eQ(e,t){return(e=t.exec(e))?e[0]:e}function eY(e,t,r){return e.replace(t,r)}function eX(e,t,r){return e.indexOf(t,r)}function eJ(e,t){return 0|e.charCodeAt(t)}function eZ(e,t,r){return e.slice(t,r)}function e0(e){return e.length}function e1(e,t){return t.push(e),e}function e2(e,t){return e.filter(function(e){return!eQ(e,t)})}var e5=1,e3=1,e4=0,e6=0,e8=0,e7="";function e9(e,t,r,n,i,a,s,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:e5,column:e3,length:s,return:"",siblings:o}}function te(e,t){return eK(e9("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tt(e){for(;e.root;)e=te(e.root,{children:[e]});e1(e,e.siblings)}function tr(){return e8=e6<e4?eJ(e7,e6++):0,e3++,10===e8&&(e3=1,e5++),e8}function tn(){return eJ(e7,e6)}function ti(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ta(e){var t,r;return(t=e6-1,r=function e(t){for(;tr();)switch(e8){case t:return e6;case 34:case 39:34!==t&&39!==t&&e(e8);break;case 40:41===t&&e(t);break;case 92:tr()}return e6}(91===e?e+2:40===e?e+1:e),eZ(e7,t,r)).trim()}function ts(e,t,r,n,i,a,s,o,l,u,c,h){for(var d=i-1,f=0===i?a:[""],p=f.length,m=0,g=0,y=0;m<n;++m)for(var v=0,b=eZ(e,d+1,d=eq(g=s[m])),x=e;v<p;++v)(x=(g>0?f[v]+" "+b:eY(b,/&\f/g,f[v])).trim())&&(l[y++]=x);return e9(e,t,r,0===i?eU:o,l,u,c,h)}function to(e,t,r,n,i){return e9(e,t,r,eH,eZ(e,0,n),eZ(e,n+1,-1),n,i)}function tl(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function tu(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case eH:return e.return=e.return||e.value;case eV:return"";case eW:return e.return=e.value+"{"+tl(e.children,n)+"}";case eU:if(!e0(e.value=e.props.join(",")))return""}return e0(r=tl(e.children,n))?e.return=e.value+"{"+r+"}":""}function tc(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case eH:e.return=function e(t,r,n){var i;switch(i=r,45^eJ(t,0)?(((i<<2^eJ(t,0))<<2^eJ(t,1))<<2^eJ(t,2))<<2^eJ(t,3):0){case 5103:return e$+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return e$+t+t;case 4855:return e$+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return ez+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return e$+t+ez+t+eB+t+t;case 5936:switch(eJ(t,r+11)){case 114:return e$+t+eB+eY(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return e$+t+eB+eY(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return e$+t+eB+eY(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return e$+t+eB+t+t;case 6165:return e$+t+eB+"flex-"+t+t;case 5187:return e$+t+eY(t,/(\w+).+(:[^]+)/,e$+"box-$1$2"+eB+"flex-$1$2")+t;case 5443:return e$+t+eB+"flex-item-"+eY(t,/flex-|-self/g,"")+(eQ(t,/flex-|baseline/)?"":eB+"grid-row-"+eY(t,/flex-|-self/g,""))+t;case 4675:return e$+t+eB+"flex-line-pack"+eY(t,/align-content|flex-|-self/g,"")+t;case 5548:return e$+t+eB+eY(t,"shrink","negative")+t;case 5292:return e$+t+eB+eY(t,"basis","preferred-size")+t;case 6060:return e$+"box-"+eY(t,"-grow","")+e$+t+eB+eY(t,"grow","positive")+t;case 4554:return e$+eY(t,/([^-])(transform)/g,"$1"+e$+"$2")+t;case 6187:return eY(eY(eY(t,/(zoom-|grab)/,e$+"$1"),/(image-set)/,e$+"$1"),t,"")+t;case 5495:case 3959:return eY(t,/(image-set\([^]*)/,e$+"$1$`$1");case 4968:return eY(eY(t,/(.+:)(flex-)?(.*)/,e$+"box-pack:$3"+eB+"flex-pack:$3"),/space-between/,"justify")+e$+t+t;case 4200:if(!eQ(t,/flex-|baseline/))return eB+"grid-column-align"+eZ(t,r)+t;break;case 2592:case 3360:return eB+eY(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,eQ(e.props,/grid-\w+-end/)}))return~eX(t+(n=n[r].value),"span",0)?t:eB+eY(t,"-start","")+t+eB+"grid-row-span:"+(~eX(n,"span",0)?eQ(n,/\d+/):eQ(n,/\d+/)-eQ(t,/\d+/))+";";return eB+eY(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return eQ(e.props,/grid-\w+-start/)})?t:eB+eY(eY(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return eY(t,/(.+)-inline(.+)/,e$+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(e0(t)-1-r>6)switch(eJ(t,r+1)){case 109:if(45!==eJ(t,r+4))break;case 102:return eY(t,/(.+:)(.+)-([^]+)/,"$1"+e$+"$2-$3$1"+ez+(108==eJ(t,r+3)?"$3":"$2-$3"))+t;case 115:return~eX(t,"stretch",0)?e(eY(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return eY(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,i,a,s,o){return eB+r+":"+n+o+(i?eB+r+"-span:"+(a?s:s-n)+o:"")+t});case 4949:if(121===eJ(t,r+6))return eY(t,":",":"+e$)+t;break;case 6444:switch(eJ(t,45===eJ(t,14)?18:11)){case 120:return eY(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+e$+(45===eJ(t,14)?"inline-":"")+"box$3$1"+e$+"$2$3$1"+eB+"$2box$3")+t;case 100:return eY(t,":",":"+eB)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return eY(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case eW:return tl([te(e,{value:eY(e.value,"@","@"+e$)})],n);case eU:if(e.length){var i,a;return i=r=e.props,a=function(t){switch(eQ(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tt(te(e,{props:[eY(t,/:(read-\w+)/,":"+ez+"$1")]})),tt(te(e,{props:[t]})),eK(e,{props:e2(r,n)});break;case"::placeholder":tt(te(e,{props:[eY(t,/:(plac\w+)/,":"+e$+"input-$1")]})),tt(te(e,{props:[eY(t,/:(plac\w+)/,":"+ez+"$1")]})),tt(te(e,{props:[eY(t,/:(plac\w+)/,eB+"input-$1")]})),tt(te(e,{props:[t]})),eK(e,{props:e2(r,n)})}return""},i.map(a).join("")}}}var th={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},td="data-styled",tf="active",tp="data-styled-version",tm="6.3.11",tg="/*!sc*/\n",ty="u">typeof window&&"u">typeof document,tv=!!("boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY),tb={};function tx(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tw=new Map,tE=new Map,tS=1,tk=function(e){if(tw.has(e))return tw.get(e);for(;tE.has(tS);)tS++;var t=tS++;return tw.set(e,t),tE.set(t,e),t},tC=function(e,t){tS=t+1,tw.set(e,t),tE.set(t,e)},t_=Object.freeze([]),tT=Object.freeze({});function tI(e,t,r){return void 0===r&&(r=tT),e.theme!==r.theme&&e.theme||t||r.theme}var tN=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),tj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tA=/(^-|-$)/g;function tR(e){return e.replace(tj,"-").replace(tA,"")}var tP=/(a)(d)/gi,tO=function(e){return String.fromCharCode(e+(e>25?39:97))};function tD(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=tO(t%52)+r;return(tO(t%52)+r).replace(tP,"$1-$2")}var tL,tM,tF,tB,tz,t$,tV,tU,tH,tW,tq,tG,tK,tQ,tY=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},tX=function(e){return tY(5381,e)};function tJ(e){return tD(tX(e)>>>0)}function tZ(e){return"string"==typeof e}var t0="function"==typeof Symbol&&Symbol.for,t1=t0?Symbol.for("react.memo"):60115,t2=t0?Symbol.for("react.forward_ref"):60112,t5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t6=((tQ={})[t2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tQ[t1]=t4,tQ);function t8(e){return("type"in e&&e.type.$$typeof)===t1?t4:"$$typeof"in e?t6[e.$$typeof]:t5}var t7=Object.defineProperty,t9=Object.getOwnPropertyNames,re=Object.getOwnPropertySymbols,rt=Object.getOwnPropertyDescriptor,rr=Object.getPrototypeOf,rn=Object.prototype;function ri(e){return"function"==typeof e}function ra(e){return"object"==typeof e&&"styledComponentId"in e}function rs(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ro(e,t){return e.join(t||"")}function rl(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ru(e,t){Object.defineProperty(e,"toString",{value:t})}var rc=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw tx(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),o=0,l=(a=0,t.length);a<l;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++,o++);o>0&&this._cGroup>e&&(this._cIndex+=o)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+tg;return t},e}(),rh="style[".concat(td,"][").concat(tp,'="').concat(tm,'"]'),rd=new RegExp("^".concat(td,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rf=function(e){return"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},rp=function(e){if(!e)return document;if(rf(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(rf(t))return t}return document},rm=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},rg=function(e,t){for(var r,n=(null!=(r=t.textContent)?r:"").split(tg),i=[],a=0,s=n.length;a<s;a++){var o=n[a].trim();if(o){var l=o.match(rd);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(tC(c,u),rm(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(o)}}},ry=function(e){for(var t=rp(e.options.target).querySelectorAll(rh),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(td)!==tf&&(rg(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function rv(){return"u">typeof __webpack_nonce__?__webpack_nonce__:null}var rb=function(e){var t,r=document.head,n=e||r,i=document.createElement("style"),a=(t=Array.from(n.querySelectorAll("style[".concat(td,"]"))))[t.length-1],s=void 0!==a?a.nextSibling:null;i.setAttribute(td,tf),i.setAttribute(tp,tm);var o=rv();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},rx=function(){function e(e){this.element=rb(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var r=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets,n=0,i=r.length;n<i;n++){var a=r[n];if(a.ownerNode===e)return a}throw tx(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),rw=function(){function e(e){this.element=rb(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),rE=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),rS=ty,rk={isServer:!ty,useCSSOMInjection:!tv},rC=function(){function e(e,t,r){void 0===e&&(e=tT),void 0===t&&(t={});var n=this;this.options=eM(eM({},rk),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ty&&rS&&(rS=!1,ry(this)),ru(this,function(){for(var e=n.getTag(),t=e.length,r="",i=0;i<t;i++)!function(t){var i=tE.get(t);if(void 0===i)return;var a=n.names.get(i);if(void 0===a||!a.size)return;var s=e.getGroup(t);if(0!==s.length){var o=td+".g"+t+'[id="'+i+'"]',l="";a.forEach(function(e){e.length>0&&(l+=e+",")}),r+=s+o+'{content:"'+l+'"}'+tg}}(i);return r})}return e.registerId=function(e){return tk(e)},e.prototype.rehydrate=function(){!this.server&&ty&&ry(this)},e.prototype.reconstructWithOptions=function(t,r){void 0===r&&(r=!0);var n=new e(eM(eM({},this.options),t),this.gs,r&&this.names||void 0);return!this.server&&ty&&t.target!==this.options.target&&rp(this.options.target)!==rp(t.target)&&ry(n),n},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new rc(e.isServer?new rE(r):t?new rx(r):new rw(r))))},e.prototype.hasNameForId=function(e,t){var r,n;return null!=(n=null==(r=this.names.get(e))?void 0:r.has(t))&&n},e.prototype.registerName=function(e,t){tk(e);var r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(tk(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(tk(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),r_=/&/g;function rT(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,r=0,n=0,i=!1,a=0;a<t;a++){var s=e.charCodeAt(a);if(0!==n||i||47!==s||42!==e.charCodeAt(a+1))if(i)42===s&&47===e.charCodeAt(a+1)&&(i=!1,a++);else if(34!==s&&39!==s||0!==a&&92===e.charCodeAt(a-1)){if(0===n){if(123===s)r++;else if(125===s&&--r<0)return!0}}else 0===n?n=s:n===s&&(n=0);else i=!0,a++}return 0!==r||0!==n}function rI(e){var t,r,n,i,a,s,o=void 0===e?tT:e,l=o.options,u=void 0===l?tT:l,c=o.plugins,h=void 0===c?t_:c,d=function(e,t,r){return r.startsWith(a)&&r.endsWith(a)&&r.replaceAll(a,"").length>0?".".concat(i):e},f=h.slice();f.push(function(e){e.type===eU&&e.value.includes("&")&&(s||(s=RegExp("\\".concat(a,"\\b"),"g")),e.props[0]=e.props[0].replace(r_,a).replace(s,d))}),u.prefix&&f.push(tc),f.push(tu);var p=[],m=(r=(t=f.concat((n=function(e){return p.push(e)},function(e){!e.root&&(e=e.return)&&n(e)}))).length,function(e,n,i,a){for(var s="",o=0;o<r;o++)s+=t[o](e,n,i,a)||"";return s}),g=function(e,t,r,n){void 0===t&&(t=""),void 0===r&&(r=""),void 0===n&&(n="&"),i=n,a=t,s=void 0;var o,l,c,h=function(e){if(!rT(e))return e;for(var t=e.length,r="",n=0,i=0,a=0,s=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(0!==a||s||47!==l||42!==e.charCodeAt(o+1))if(s)42===l&&47===e.charCodeAt(o+1)&&(s=!1,o++);else if(34!==l&&39!==l||0!==o&&92===e.charCodeAt(o-1)){if(0===a)if(123===l)i++;else if(125===l){if(--i<0){for(var u=o+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,i=0,o=u-1,n=u;continue}0===i&&(r+=e.substring(n,o+1),n=o+1)}else 59===l&&0===i&&(r+=e.substring(n,o+1),n=o+1)}else 0===a?a=l:a===l&&(a=0);else s=!0,o++}if(n<t){var h=e.substring(n);rT(h)||(r+=h)}return r}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,r=[],n=0,i=0,a=0,s=0;i<t;){var o=e.charCodeAt(i);if(34!==o&&39!==o||0!==i&&92===e.charCodeAt(i-1))if(0===a)if(47===o&&i+1<t&&42===e.charCodeAt(i+1)){for(i+=2;i+1<t&&(42!==e.charCodeAt(i)||47!==e.charCodeAt(i+1));)i++;i+=2}else if(40===o&&i>=3&&108==(32|e.charCodeAt(i-1))&&114==(32|e.charCodeAt(i-2))&&117==(32|e.charCodeAt(i-3)))s=1,i++;else if(s>0)41===o?s--:40===o&&s++,i++;else if(42===o&&i+1<t&&47===e.charCodeAt(i+1))i>n&&r.push(e.substring(n,i)),n=i+=2;else if(47===o&&i+1<t&&47===e.charCodeAt(i+1)){for(i>n&&r.push(e.substring(n,i));i<t&&10!==e.charCodeAt(i);)i++;n=i}else i++;else i++;else 0===a?a=o:a===o&&(a=0),i++}return 0===n?e:(n<t&&r.push(e.substring(n)),r.join(""))}(e)),d=(c=function e(t,r,n,i,a,s,o,l,u){for(var c,h,d,f,p=0,m=0,g=o,y=0,v=0,b=0,x=1,w=1,E=1,S=0,k="",C=a,_=s,T=i,I=k;w;)switch(b=S,S=tr()){case 40:if(108!=b&&58==eJ(I,g-1)){-1!=eX(I+=eY(ta(S),"&","&\f"),"&\f",eq(p?l[p-1]:0))&&(E=-1);break}case 34:case 39:case 91:I+=ta(S);break;case 9:case 10:case 13:case 32:I+=function(e){for(;e8=tn();)if(e8<33)tr();else break;return ti(e)>2||ti(e8)>3?"":" "}(b);break;case 92:I+=function(e,t){for(var r;--t&&tr()&&!(e8<48)&&!(e8>102)&&(!(e8>57)||!(e8<65))&&(!(e8>70)||!(e8<97)););return r=e6+(t<6&&32==tn()&&32==tr()),eZ(e7,e,r)}(e6-1,7);continue;case 47:switch(tn()){case 42:case 47:e1((c=function(e,t){for(;tr();)if(e+e8===57)break;else if(e+e8===84&&47===tn())break;return"/*"+eZ(e7,t,e6-1)+"*"+eG(47===e?e:tr())}(tr(),e6),h=r,d=n,f=u,e9(c,h,d,eV,eG(e8),eZ(c,2,-2),0,f)),u),(5==ti(b||1)||5==ti(tn()||1))&&e0(I)&&" "!==eZ(I,-1,void 0)&&(I+=" ");break;default:I+="/"}break;case 123*x:l[p++]=e0(I)*E;case 125*x:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+m:-1==E&&(I=eY(I,/\f/g,"")),v>0&&(e0(I)-g||0===x&&47===b)&&e1(v>32?to(I+";",i,n,g-1,u):to(eY(I," ","")+";",i,n,g-2,u),u);break;case 59:I+=";";default:if(e1(T=ts(I,r,n,p,m,a,l,k,C=[],_=[],g,s),s),123===S)if(0===m)e(I,r,T,T,C,s,g,l,_);else{switch(y){case 99:if(110===eJ(I,3))break;case 108:if(97===eJ(I,2))break;default:m=0;case 100:case 109:case 115:}m?e(t,T,T,i&&e1(ts(t,T,T,0,0,a,l,k,a,C=[],g,_),_),a,_,g,l,i?C:_):e(I,T,T,T,[""],_,0,l,_)}}p=m=v=0,x=E=1,k=I="",g=o;break;case 58:g=1+e0(I),v=b;default:if(x<1){if(123==S)--x;else if(125==S&&0==x++&&125==(e8=e6>0?eJ(e7,--e6):0,e3--,10===e8&&(e3=1,e5--),e8))continue}switch(I+=eG(S),S*x){case 38:E=m>0?1:(I+="\f",-1);break;case 44:l[p++]=(e0(I)-1)*E,E=1;break;case 64:45===tn()&&(I+=ta(tr())),y=tn(),m=g=e0(k=I+=function(e){for(;!ti(tn());)tr();return eZ(e7,e,e6)}(e6)),S++;break;case 45:45===b&&2==e0(I)&&(x=0)}}return s}("",null,null,null,[""],(l=o=r||t?"".concat(r," ").concat(t," { ").concat(h," }"):h,e5=e3=1,e4=e0(e7=l),e6=0,o=[]),0,[0],o),e7="",c);return u.namespace&&(d=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(d,u.namespace)),p=[],tl(d,m),p};return g.hash=h.length?h.reduce(function(e,t){return t.name||tx(15),tY(e,t.name)},5381).toString():"",g}var rN=new rC,rj=rI(),rA=s(B).createContext({shouldForwardProp:void 0,styleSheet:rN,stylis:rj}),rR=(rA.Consumer,s(B).createContext(void 0));function rP(){return s(B).useContext(rA)}function rO(e){if(!s(B).useMemo)return e.children;var t=rP().styleSheet,r=s(B).useMemo(function(){var r=t;return e.sheet?r=e.sheet:e.target&&(r=r.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(r=r.reconstructWithOptions({useCSSOMInjection:!1})),r},[e.disableCSSOMInjection,e.sheet,e.target,t]),n=s(B).useMemo(function(){return rI({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=s(B).useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:r,stylis:n}},[e.shouldForwardProp,r,n]);return s(B).createElement(rA.Provider,{value:i},s(B).createElement(rR.Provider,{value:n},e.children))}var rD=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=rj);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ru(this,function(){throw tx(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=rj),this.name+e.hash},e}();function rL(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var rM=function(e){return null==e||!1===e||""===e},rF=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!rM(n)&&(Array.isArray(n)&&n.isCss||ri(n)?t.push("".concat(rL(r),":"),n,";"):rl(n)?t.push.apply(t,eF(eF(["".concat(r," {")],rF(n),!1),["}"],!1)):t.push("".concat(rL(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in th||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function rB(e,t,r,n,i){if(void 0===i&&(i=[]),"string"==typeof e)return e&&i.push(e),i;if(rM(e))return i;if(ra(e))return i.push(".".concat(e.styledComponentId)),i;if(ri(e))return!ri(e)||e.prototype&&e.prototype.isReactComponent||!t?(i.push(e),i):rB(e(t),t,r,n,i);if(e instanceof rD)return r?(e.inject(r,n),i.push(e.getName(n))):i.push(e),i;if(rl(e)){for(var a=rF(e),s=0;s<a.length;s++)i.push(a[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)rB(e[s],t,r,n,i);return i}function rz(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ri(r)&&!ra(r))return!1}return!0}var r$=tX(tm),rV=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&rz(e),this.componentId=t,this.baseHash=tY(r$,t),this.baseStyle=r,rC.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=rs(n,this.staticRulesId);else{var i=ro(rB(this.rules,e,t,r)),a=tD(tY(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}n=rs(n,a),this.staticRulesId=a}else{for(var o=tY(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var h=ro(rB(c,e,t,r));o=tY(tY(o,String(u)),h),l+=h}}if(l){var d=tD(o>>>0);if(!t.hasNameForId(this.componentId,d)){var f=r(l,".".concat(d),void 0,this.componentId);t.insertRules(this.componentId,d,f)}n=rs(n,d)}}return{className:n,css:"u"<typeof window?t.getTag().getGroup(tk(this.componentId)):""}},e}(),rU=s(B).createContext(void 0);rU.Consumer;var rH={};function rW(e,t,r){var n,i,a,o,l=ra(e),u=!tZ(e),c=t.attrs,h=void 0===c?t_:c,d=t.componentId,f=void 0===d?(n=t.displayName,i=t.parentComponentId,rH[a="string"!=typeof n?"sc":tR(n)]=(rH[a]||0)+1,o="".concat(a,"-").concat(tJ(tm+a+rH[a])),i?"".concat(i,"-").concat(o):o):d,p=t.displayName,m=void 0===p?tZ(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):p,g=t.displayName&&t.componentId?"".concat(tR(t.displayName),"-").concat(t.componentId):t.componentId||f,y=l&&e.attrs?e.attrs.concat(h).filter(Boolean):h,v=t.shouldForwardProp;if(l&&e.shouldForwardProp){var b=e.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;v=function(e,t){return b(e,t)&&x(e,t)}}else v=b}var w=new rV(r,g,l?e.componentStyle:void 0);function E(e,t){return function(e,t,r){var n,i=e.attrs,a=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,c=e.target,h=s(B).useContext(rU),d=rP(),f=e.shouldForwardProp||d.shouldForwardProp,p=tI(t,h,o)||tT,m=function(e,t,r){for(var n,i=eM(eM({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var s=ri(n=e[a])?n(i):n;for(var o in s)"className"===o?i.className=rs(i.className,s[o]):"style"===o?i.style=eM(eM({},i.style),s[o]):i[o]=s[o]}return"className"in t&&"string"==typeof t.className&&(i.className=rs(i.className,t.className)),i}(i,t,p),g=m.as||c,y={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?y.as=m.forwardedAs:f&&!f(v,g)||(y[v]=m[v]));var b=(n=rP(),a.generateAndInjectStyles(m,n.styleSheet,n.stylis)).className,x=rs(l,u);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),y[tZ(g)&&!tN.has(g)?"class":"className"]=x,r&&(y.ref=r),(0,B.createElement)(g,y)}(S,e,t)}E.displayName=m;var S=s(B).forwardRef(E);return S.attrs=y,S.componentStyle=w,S.displayName=m,S.shouldForwardProp=v,S.foldedComponentIds=l?rs(e.foldedComponentIds,e.styledComponentId):"",S.styledComponentId=g,S.target=l?e.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=l?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)!function e(t,r,n){if(void 0===n&&(n=!1),!n&&!rl(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)t[i]=e(t[i],r[i]);else if(rl(r))for(var i in r)t[i]=e(t[i],r[i]);return t}(e,t[n],!0);return e}({},e.defaultProps,t):t}}),ru(S,function(){return".".concat(S.styledComponentId)}),u&&function e(t,r,n){if("string"!=typeof r){if(rn){var i=rr(r);i&&i!==rn&&e(t,i,n)}var a=t9(r);re&&(a=a.concat(re(r)));for(var s=t8(t),o=t8(r),l=0;l<a.length;++l){var u=a[l];if(!(u in t3||n&&n[u]||o&&u in o||s&&u in s)){var c=rt(r,u);try{t7(t,u,c)}catch(e){}}}}return t}(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function rq(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var rG=function(e){return Object.assign(e,{isCss:!0})};function rK(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return ri(e)||rl(e)?rG(rB(rq(t_,eF([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?rB(e):rG(rB(rq(e,t)))}var rQ=function(e){return function e(t,r,n){if(void 0===n&&(n=tT),!r)throw tx(1,r);var i=function(e){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return t(r,n,rK.apply(void 0,eF([e],i,!1)))};return i.attrs=function(i){return e(t,r,eM(eM({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,r,eM(eM({},n),i))},i}(rW,e)};tN.forEach(function(e){rQ[e]=rQ(e)});var rY=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=rz(e),rC.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var i=n(ro(rB(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&rC.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?r.hasNameForId(i,i)||this.createStyles(e,t,r,n):(this.removeStyles(e,r),this.createStyles(e,t,r,n))},e}();function rX(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ro(rK.apply(void 0,eF([e],t,!1)));return new rD(tJ(n),n)}function rJ(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=rv(),n=ro([r&&'nonce="'.concat(r,'"'),"".concat(td,'="true"'),"".concat(tp,'="').concat(tm,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw tx(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw tx(2);var t,r=e.instance.toString();if(!r)return[];var n=((t={})[td]="",t[tp]=tm,t.dangerouslySetInnerHTML={__html:r},t),i=rv();return i&&(n.nonce=i),[s(B).createElement("style",eM({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new rC({isServer:!0}),this.sealed=!1}rJ.prototype.collectStyles=function(e){if(this.sealed)throw tx(2);return s(B).createElement(rO,{sheet:this.instance},e)},rJ.prototype.interleaveWithNodeStream=function(e){throw tx(3)};var B=L("7fPBF"),rZ={};rZ=o("3YiOM");let r0=e=>e,r1,r2,r5,r3,r4,r6,r8,r7,r9,ne,nt,nr,nn,ni,na=rX(r1||(r1=r0`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`)),ns=rQ.nav(r2||(r2=r0`
  background-color: var(--navy);
  color: white;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  animation: ${0} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 50%, var(--gold) 100%);
  }
`),na),no=rQ.div(r5||(r5=r0`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
`)),nl=rQ(eL)(r3||(r3=r0`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`)),nu=rQ.img(r4||(r4=r0`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 4px;
`)),nc=rQ.div(r6||(r6=r0`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`)),nh=rQ.span(r8||(r8=r0`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  color: var(--gold);
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`)),nd=rQ.span(r7||(r7=r0`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 3px;
  text-transform: uppercase;
`)),nf=rQ.button(r9||(r9=r0`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 44px;
    height: 44px;
    padding: 10px;
  }
`)),np=rQ.span(ne||(ne=r0`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${0};
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${0};
  }

  &:nth-child(2) {
    opacity: ${0};
    transform: ${0};
  }

  &:nth-child(3) {
    transform: ${0};
  }
`),e=>e.$isOpen?"var(--gold)":"white",e=>e.$isOpen?"rotate(45deg) translate(5px, 5px)":"rotate(0)",e=>+!e.$isOpen,e=>e.$isOpen?"translateX(-10px)":"translateX(0)",e=>e.$isOpen?"rotate(-45deg) translate(5px, -5px)":"rotate(0)"),nm=rQ.div(nt||(nt=r0`
  display: flex;
  gap: 0;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background: linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%);
    padding: 6rem 0 2rem;
    gap: 0;
    transform: ${0};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${0};
    z-index: 1000;
  }
`),e=>e.$isOpen?"translateX(0)":"translateX(100%)",e=>e.$isOpen?"-10px 0 40px rgba(0,0,0,0.5)":"none"),ng=rQ(eL)(nr||(nr=r0`
  color: ${0};
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1.5rem 1.25rem;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${0};
    height: 3px;
    background: var(--gold);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--gold);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem 2rem;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &::before {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${0};
      transition: background 0.3s ease;
    }

    &:hover::after {
      background: var(--gold);
    }
  }
`),e=>e.$isActive?"var(--gold)":"white",e=>e.$isActive?"100%":"0",e=>e.$isActive?"var(--gold)":"transparent"),ny=rQ.div(nn||(nn=r0`
  display: none;

  @media (max-width: 768px) {
    display: ${0};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
`),e=>e.$isOpen?"block":"none"),nv=rQ.div(ni||(ni=r0`
  height: 70px;
`));var nb=()=>{let[e,t]=(0,B.useState)(!1),r=eg();(0,B.useEffect)(()=>{t(!1)},[r]);let n=()=>{t(!1)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ns,{children:(0,F.jsxs)(no,{children:[(0,F.jsxs)(nl,{to:"/",onClick:n,children:[(0,F.jsx)(nu,{src:s(rZ),alt:"Wellington Wolves Logo"}),(0,F.jsxs)(nc,{children:[(0,F.jsx)(nh,{children:"WOLVES ELITE"}),(0,F.jsx)(nd,{children:"17U • Puma NXTpro"})]})]}),(0,F.jsxs)(nf,{onClick:()=>{t(!e)},"aria-label":"Toggle menu",children:[(0,F.jsx)(np,{$isOpen:e}),(0,F.jsx)(np,{$isOpen:e}),(0,F.jsx)(np,{$isOpen:e})]}),(0,F.jsx)(ny,{$isOpen:e,onClick:n}),(0,F.jsxs)(nm,{$isOpen:e,children:[(0,F.jsx)(ng,{to:"/",onClick:n,$isActive:"/"===r.pathname,children:"Home"}),(0,F.jsx)(ng,{to:"/about",onClick:n,$isActive:"/about"===r.pathname,children:"About"}),(0,F.jsx)(ng,{to:"/players",onClick:n,$isActive:"/players"===r.pathname,children:"Roster"}),(0,F.jsx)(ng,{to:"/travel",onClick:n,$isActive:"/travel"===r.pathname,children:"Schedule"}),(0,F.jsx)(ng,{to:"/announcements",onClick:n,$isActive:"/announcements"===r.pathname,children:"News"}),(0,F.jsx)(ng,{to:"/wolfs-den",onClick:n,$isActive:"/wolfs-den"===r.pathname,children:"Wolf's Den"})]})]})}),(0,F.jsx)(nv,{})]})};L("7fPBF");var B=(L("7fPBF"),L("7fPBF")),nx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nw=s(B).createContext&&s(B).createContext(nx),nE=["attr","size","title"];function nS(){return(nS=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function nk(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function nC(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nk(Object(r),!0).forEach(function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nk(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function n_(e){return t=>s(B).createElement(nT,nS({attr:nC({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s(B).createElement(t.tag,nC({key:r},t.attr),e(t.child)))}(e.child))}function nT(e){var t=t=>{var r,{attr:n,size:i,title:a}=e,o=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,nE),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s(B).createElement("svg",nS({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:r,style:nC(nC({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s(B).createElement("title",null,a),e.children)};return void 0!==nw?s(B).createElement(nw.Consumer,null,e=>t(e)):t(nx)}function nI(e){return n_({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function nN(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function nj(e){return n_({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function nA(e){return n_({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(e)}function nR(e){return n_({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function nP(e){return n_({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function nO(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function nD(e){return n_({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function nL(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(e)}function nM(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function nF(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function nB(e){return n_({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function nz(e){return n_({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function n$(e){return n_({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function nV(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function nU(e){return n_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}let nH=e=>e,nW,nq,nG,nK,nQ,nY,nX,nJ,nZ,n0,n1,n2,n5,n3,n4,n6,n8,n7,n9,ie=rQ.footer(nW||(nW=nH`
  background: var(--navy-dark);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),it=rQ.div(nq||(nq=nH`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`)),ir=rQ.div(nG||(nG=nH`
  @media (max-width: 600px) {
    order: -1;
  }
`)),ii=rQ.h3(nK||(nK=nH`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`)),ia=rQ.p(nQ||(nQ=nH`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`)),is=rQ.p(nY||(nY=nH`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`)),io=rQ.div(nX||(nX=nH``)),il=rQ.h4(nJ||(nJ=nH`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
`)),iu=rQ.div(nZ||(nZ=nH`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`)),ic=rQ(eL)(n0||(n0=nH`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: var(--gold);
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`)),ih=rQ.a(n1||(n1=nH`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: var(--gold);
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`)),id=rQ.div(n2||(n2=nH`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`)),ip=rQ.p(n5||(n5=nH`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
`)),im=rQ.div(n3||(n3=nH`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`)),ig=rQ.a(n4||(n4=nH`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-3px);
  }
`)),iy=rQ.div(n6||(n6=nH`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
`)),iv=rQ.div(n8||(n8=nH`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`)),ib=rQ.p(n7||(n7=nH`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
`)),ix=rQ.span(n9||(n9=nH`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
`));var iw=()=>{let e=new Date().getFullYear();return(0,F.jsxs)(ie,{children:[(0,F.jsxs)(it,{children:[(0,F.jsxs)(ir,{children:[(0,F.jsx)(ii,{children:"WELLINGTON WOLVES"}),(0,F.jsx)(ia,{children:"17U Elite Basketball"}),(0,F.jsx)(is,{children:"Building champions on and off the court through elite training, competitive play, and character development."}),(0,F.jsxs)(im,{children:[(0,F.jsx)(ig,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,F.jsx)(nj,{})}),(0,F.jsx)(ig,{href:"https://instagram.com/wellingtonwolves2027balcarcel",target:"_blank",rel:"noopener noreferrer",children:(0,F.jsx)(nN,{})}),(0,F.jsx)(ig,{href:"https://x.com/wolves2027_Bal",target:"_blank",rel:"noopener noreferrer",children:(0,F.jsx)(nI,{})})]})]}),(0,F.jsxs)(io,{children:[(0,F.jsx)(il,{children:"Quick Links"}),(0,F.jsxs)(iu,{children:[(0,F.jsx)(ic,{to:"/",children:"Home"}),(0,F.jsx)(ic,{to:"/about",children:"About"}),(0,F.jsx)(ic,{to:"/players",children:"Roster"}),(0,F.jsx)(ic,{to:"/travel",children:"Schedule"}),(0,F.jsx)(ic,{to:"/announcements",children:"News"})]})]}),(0,F.jsxs)(io,{children:[(0,F.jsx)(il,{children:"Circuits"}),(0,F.jsxs)(iu,{children:[(0,F.jsx)(ih,{href:"https://nxtprohoops.com",target:"_blank",rel:"noopener noreferrer",children:"Puma NXTpro"}),(0,F.jsx)(ih,{href:"https://hoopseen.com",target:"_blank",rel:"noopener noreferrer",children:"HOOPSEEN"}),(0,F.jsx)(ih,{href:"https://ontheradarhoops.com",target:"_blank",rel:"noopener noreferrer",children:"On The Radar"})]})]}),(0,F.jsxs)(io,{children:[(0,F.jsx)(il,{children:"Contact"}),(0,F.jsxs)(id,{children:[(0,F.jsxs)(ip,{children:[(0,F.jsx)("strong",{children:"Email"}),(0,F.jsx)("br",{}),"jpkicker@gmail.com"]}),(0,F.jsxs)(ip,{children:[(0,F.jsx)("strong",{children:"Phone"}),(0,F.jsx)("br",{}),"(561) 451-5880"]}),(0,F.jsxs)(ip,{children:[(0,F.jsx)("strong",{children:"Location"}),(0,F.jsx)("br",{}),"Wellington, FL"]})]})]})]}),(0,F.jsx)(iy,{children:(0,F.jsxs)(iv,{children:[(0,F.jsxs)(ib,{children:["© ",e," Wellington Wolves 17U Elite. All rights reserved."]}),(0,F.jsx)(ix,{children:"Puma NXTpro Circuit Team"})]})})]})};L("7fPBF");var iE={};iE=o("djc90"),L("7fPBF");let iS=[{id:1,date:"2026-01-15",title:"Welcome to the 2026 Season!",content:"We're excited to announce our transition to Wellington Wolves 17u Elite as a Puma NXTpro team! This season brings new opportunities for high-level competition and exposure across the country.",category:"Team News"},{id:2,date:"2026-01-20",title:"2026 Tournament Schedule Released",content:"Our 2026 tournament schedule is now available on the Travel page. This season includes multiple NXTpro circuit events, HOOPSEEN showcases, and the prestigious Best of the South tournament.",category:"Schedule"},{id:3,date:"2026-01-28",title:"Hotel Booking for Providence Event",content:"Hotel booking is now open for our April 11-13 NXTpro event in Providence, RI. Please book through Event Connect using the link on the Travel page. Early booking is recommended!",category:"Travel"}],ik=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),iC={"Team News":{bg:"#001f3f",text:"#ffd700"},Schedule:{bg:"#2e7d32",text:"#ffffff"},Travel:{bg:"#1565c0",text:"#ffffff"},Roster:{bg:"#7b1fa2",text:"#ffffff"},General:{bg:"#616161",text:"#ffffff"}},i_=e=>e,iT,iI,iN,ij,iA,iR,iP,iO,iD,iL,iM,iF,iB,iz,i$,iV,iU,iH,iW=rX(iT||(iT=i_`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),iq=rQ.section(iI||(iI=i_`
  padding: 6rem 2rem;
  background: var(--gray-100);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gray-300), transparent);
  }
`)),iG=rQ.div(iN||(iN=i_`
  max-width: 1400px;
  margin: 0 auto;
`)),iK=rQ.div(ij||(ij=i_`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`)),iQ=rQ.div(iA||(iA=i_``)),iY=rQ.span(iR||(iR=i_`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 0.75rem;
`)),iX=rQ.h2(iP||(iP=i_`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--navy);
  line-height: 1;
`)),iJ=rQ(eL)(iO||(iO=i_`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--navy);
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--navy);
  transition: all 0.3s ease;

  &:hover {
    background: var(--navy);
    color: var(--gold);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`)),iZ=rQ.div(iD||(iD=i_`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`)),i0=rQ.article(iL||(iL=i_`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0}s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 31, 63, 0.12);
  }
`),iW,e=>.1*e.$index),i1=rQ.div(iM||(iM=i_`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)),i2=rQ.span(iF||(iF=i_`
  font-family: 'Barlow Condensed', sans-serif;
  color: var(--gray-500);
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`)),i5=rQ.span(iB||(iB=i_`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${0};
  color: ${0};
`),e=>{var t;return(null==(t=iC[e.$category])?void 0:t.bg)||"var(--gray-500)"},e=>{var t;return(null==(t=iC[e.$category])?void 0:t.text)||"#ffffff"}),i3=rQ.div(iz||(iz=i_`
  padding: 1rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`)),i4=rQ.h3(i$||(i$=i_`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 0.75rem;
  line-height: 1.1;
  letter-spacing: 0.5px;
`)),i6=rQ.p(iV||(iV=i_`
  color: var(--gray-700);
  font-size: 0.95rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`));rQ.div(iU||(iU=i_`
  padding: 0 1.5rem 1.5rem;
  margin-top: auto;
`)),rQ(eL)(iH||(iH=i_`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gold-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--navy);

    svg {
      transform: translateX(4px);
    }
  }
`));var i8=()=>{let e=[...iS].sort((e,t)=>new Date(t.date)-new Date(e.date)).slice(0,3);return(0,F.jsx)(iq,{children:(0,F.jsxs)(iG,{children:[(0,F.jsxs)(iK,{children:[(0,F.jsxs)(iQ,{children:[(0,F.jsx)(iY,{children:"Latest Updates"}),(0,F.jsx)(iX,{children:"TEAM NEWS"})]}),(0,F.jsxs)(iJ,{to:"/announcements",children:["View All",(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,F.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,F.jsx)(iZ,{children:e.map((e,t)=>(0,F.jsxs)(i0,{$index:t,children:[(0,F.jsxs)(i1,{children:[(0,F.jsx)(i2,{children:ik(e.date)}),(0,F.jsx)(i5,{$category:e.category,children:e.category})]}),(0,F.jsxs)(i3,{children:[(0,F.jsx)(i4,{children:e.title}),(0,F.jsx)(i6,{children:e.content})]})]},e.id))})]})})};let i7=e=>e,i9,ae,at,ar,an,ai,aa,as,ao,al,au,ac,ah,ad,af,ap,am,ag,ay,av,ab,ax,aw,aE,aS,ak,aC,a_,aT,aI,aN,aj,aA,aR=rX(i9||(i9=i7`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`));rX(ae||(ae=i7`
  from { opacity: 0; }
  to { opacity: 1; }
`));let aP=rX(at||(at=i7`
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`));rX(ar||(ar=i7`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`));let aO=rQ.div(an||(an=i7`
  width: 100%;
  overflow-x: hidden;
`)),aD=rQ.section(ai||(ai=i7`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 21, 41, 0.75) 0%,
      rgba(0, 31, 63, 0.6) 40%,
      rgba(0, 31, 63, 0.45) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, var(--white) 0%, transparent 100%);
    z-index: 2;
  }
`)),aL=rQ.div(aa||(aa=i7`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${0});
  background-size: cover;
  background-position: center center;
  animation: ${0} 1.2s ease-out;
`),s(iE),aP),aM=rQ.div(as||(as=i7`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-bottom: 100px;
`)),aF=rQ.span(ao||(ao=i7`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${0} 0.8s ease-out 0.2s forwards;

  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`),aR),aB=rQ.h1(al||(al=i7`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: 0.9;
  color: var(--white);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${0} 0.8s ease-out 0.4s forwards;

  span {
    display: block;
    color: var(--gold);
  }
`),aR),az=rQ.p(au||(au=i7`
  font-family: 'Barlow', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${0} 0.8s ease-out 0.6s forwards;
`),aR),a$=rQ.div(ac||(ac=i7`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${0} 0.8s ease-out 0.8s forwards;
`),aR),aV=rQ(eL)(ah||(ah=i7`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--gold);
  color: var(--navy);
  padding: 1rem 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`)),aU=rQ(eL)(ad||(ad=i7`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: var(--white);
  padding: 1rem 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: translateY(-3px);
  }
`)),aH=rQ.div(af||(af=i7`
  position: relative;
  z-index: 5;
  background: var(--navy);
  margin-top: -80px;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -60px;
  }
`)),aW=rQ.div(ap||(ap=i7`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`)),aq=rQ.div(am||(am=i7`
  padding: 2rem;
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      display: none;
    }
  }
`)),aG=rQ.div(ag||(ag=i7`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`)),aK=rQ.div(ay||(ay=i7`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`)),aQ=rQ.section(av||(av=i7`
  padding: 6rem 2rem;
  background: ${0};
  position: relative;
  overflow: hidden;
`),e=>e.$dark?"var(--navy)":"var(--white)"),aY=rQ.div(ab||(ab=i7`
  max-width: 1400px;
  margin: 0 auto;
`)),aX=rQ.div(ax||(ax=i7`
  margin-bottom: 4rem;
  ${0}
`),e=>e.$center&&"text-align: center;"),aJ=rQ.span(aw||(aw=i7`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
`)),aZ=rQ.h2(aE||(aE=i7`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${0};
  line-height: 1;
`),e=>e.$light?"var(--white)":"var(--navy)"),a0=rQ.div(aS||(aS=i7`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`)),a1=rQ.div(ak||(ak=i7`
  background: var(--gray-100);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: var(--gold);
    transition: height 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      height: 100%;
    }
  }
`)),a2=rQ.div(aC||(aC=i7`
  width: 60px;
  height: 60px;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--gold);
  font-size: 1.5rem;
`)),a5=rQ.h3(a_||(a_=i7`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--navy);
  margin-bottom: 1rem;
  letter-spacing: 1px;
`)),a3=rQ.p(aT||(aT=i7`
  font-size: 1rem;
  color: var(--gray-700);
  line-height: 1.7;
`)),a4=rQ.section(aI||(aI=i7`
  background: var(--navy);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`)),a6=rQ.div(aN||(aN=i7`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`)),a8=rQ.h2(aj||(aj=i7`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--white);
  margin-bottom: 1.5rem;
  line-height: 1;

  span {
    color: var(--gold);
  }
`)),a7=rQ.p(aA||(aA=i7`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`));var a9=()=>(0,F.jsxs)(aO,{children:[(0,F.jsxs)(aD,{children:[(0,F.jsx)(aL,{}),(0,F.jsxs)(aM,{children:[(0,F.jsx)(aF,{children:"Puma NXTpro Team"}),(0,F.jsxs)(aB,{children:["WELLINGTON",(0,F.jsx)("span",{children:"WOLVES"})]}),(0,F.jsx)(az,{children:"Building champions on and off the court. Elite 17U basketball competing at the highest level across the nation."}),(0,F.jsxs)(a$,{children:[(0,F.jsxs)(aV,{to:"/players",children:["Meet the Team",(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,F.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),(0,F.jsx)(aU,{to:"/travel",children:"View Schedule"})]})]})]}),(0,F.jsx)(aH,{children:(0,F.jsxs)(aW,{children:[(0,F.jsxs)(aq,{children:[(0,F.jsx)(aG,{children:"4-1"}),(0,F.jsx)(aK,{children:"Season Record"})]}),(0,F.jsxs)(aq,{children:[(0,F.jsx)(aG,{children:"0"}),(0,F.jsx)(aK,{children:"Puma Ranking"})]}),(0,F.jsxs)(aq,{children:[(0,F.jsx)(aG,{children:"17U"}),(0,F.jsx)(aK,{children:"Age Division"})]}),(0,F.jsxs)(aq,{children:[(0,F.jsx)(aG,{children:"10"}),(0,F.jsx)(aK,{children:"Players"})]})]})}),(0,F.jsx)(aQ,{children:(0,F.jsxs)(aY,{children:[(0,F.jsxs)(aX,{$center:!0,children:[(0,F.jsx)(aJ,{children:"What We Offer"}),(0,F.jsx)(aZ,{children:"THE WOLVES WAY"})]}),(0,F.jsxs)(a0,{children:[(0,F.jsxs)(a1,{children:[(0,F.jsx)(a2,{children:(0,F.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,F.jsx)("path",{d:"M12 6v6l4 2"})]})}),(0,F.jsx)(a5,{children:"ELITE TRAINING"}),(0,F.jsx)(a3,{children:"Professional-level training programs designed to develop skilled and disciplined basketball players ready for the next level."})]}),(0,F.jsxs)(a1,{children:[(0,F.jsx)(a2,{children:(0,F.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}),(0,F.jsx)("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}),(0,F.jsx)("path",{d:"M4 22h16"}),(0,F.jsx)("path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}),(0,F.jsx)("path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}),(0,F.jsx)("path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"})]})}),(0,F.jsx)(a5,{children:"COMPETITIVE PLAY"}),(0,F.jsx)(a3,{children:"We compete in top tournaments throughout Florida and the nation, testing our skills against the best competition available."})]}),(0,F.jsxs)(a1,{children:[(0,F.jsx)(a2,{children:(0,F.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),(0,F.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,F.jsx)("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),(0,F.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),(0,F.jsx)(a5,{children:"CHARACTER BUILDING"}),(0,F.jsx)(a3,{children:"Beyond basketball, we focus on building character, leadership, and life skills that benefit our players throughout their lives."})]})]})]})}),(0,F.jsx)(i8,{}),(0,F.jsx)(a4,{children:(0,F.jsxs)(a6,{children:[(0,F.jsxs)(a8,{children:["READY TO RUN ",(0,F.jsx)("span",{children:"WITH THE PACK?"})]}),(0,F.jsx)(a7,{children:"Follow our journey as we compete across the country in the 2026 Puma NXTpro circuit."}),(0,F.jsxs)(aV,{to:"/about",children:["Learn More About Us",(0,F.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,F.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})})]});L("7fPBF");let se=e=>e,st,sr,sn,si,sa,ss,so,sl,su,sc,sh,sd,sf,sp,sm,sg,sy,sv,sb,sx,sw,sE,sS,sk,sC,s_,sT,sI,sN,sj,sA,sR,sP,sO=rX(st||(st=se`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),sD=rQ.div(sr||(sr=se`
  min-height: 100vh;
  background: var(--white);
`)),sL=rQ.section(sn||(sn=se`
  background: var(--navy);
  padding: 4rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),sM=rQ.div(si||(si=se`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`)),sF=rQ.span(sa||(sa=se`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`),sO),sB=rQ.h1(ss||(ss=se`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--white);
  line-height: 0.95;
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out 0.1s backwards;

  span {
    color: var(--gold);
  }
`),sO),sz=rQ.p(so||(so=se`
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: ${0} 0.6s ease-out 0.2s backwards;
`),sO),s$=rQ.section(sl||(sl=se`
  padding: 5rem 2rem;
`)),sV=rQ.div(su||(su=se`
  max-width: 1400px;
  margin: 0 auto;
`)),sU=rQ.div(sc||(sc=se`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`)),sH=rQ.div(sh||(sh=se`
  animation: ${0} 0.6s ease-out 0.3s backwards;
`),sO),sW=rQ.span(sd||(sd=se`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 1rem;
`)),sq=rQ.h2(sf||(sf=se`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--navy);
  line-height: 1;
  margin-bottom: 1.5rem;
`)),sG=rQ.p(sp||(sp=se`
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1rem;
`)),sK=rQ.div(sm||(sm=se`
  animation: ${0} 0.6s ease-out 0.4s backwards;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 31, 63, 0.15);
  }
`),sO),sQ=rQ.div(sg||(sg=se`
  margin-bottom: 6rem;
`)),sY=rQ.div(sy||(sy=se`
  text-align: center;
  margin-bottom: 3rem;
`)),sX=rQ.div(sv||(sv=se`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`)),sJ=rQ.div(sb||(sb=se`
  background: var(--gray-100);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 31, 63, 0.12);
  }
`),sO,e=>e.$delay||"0s"),sZ=rQ.div(sx||(sx=se`
  background: var(--navy);
  padding: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),s0=rQ.h3(sw||(sw=se`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`)),s1=rQ.p(sE||(sE=se`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`)),s2=rQ.div(sS||(sS=se`
  padding: 2rem;
`)),s5=rQ.p(sk||(sk=se`
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.7;
`)),s3=rQ.div(sC||(sC=se`
  background: var(--navy);
  padding: 5rem 2rem;
  margin: 0 -2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`)),s4=rQ.div(s_||(s_=se`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`)),s6=rQ.div(sT||(sT=se`
  text-align: center;
  margin-bottom: 4rem;
`)),s8=rQ.h2(sI||(sI=se`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--white);
  line-height: 1;

  span {
    color: var(--gold);
  }
`)),s7=rQ.div(sN||(sN=se`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`)),s9=rQ.div(sj||(sj=se`
  text-align: center;
  padding: 2rem;
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0};
`),sO,e=>e.$delay||"0s"),oe=rQ.div(sA||(sA=se`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--gold);
  }
`)),ot=rQ.h3(sR||(sR=se`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
`)),or=rQ.p(sP||(sP=se`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
`));var on=()=>(0,F.jsxs)(sD,{children:[(0,F.jsx)(sL,{children:(0,F.jsxs)(sM,{children:[(0,F.jsx)(sF,{children:"Who We Are"}),(0,F.jsxs)(sB,{children:["ABOUT THE ",(0,F.jsx)("span",{children:"WOLVES"})]}),(0,F.jsx)(sz,{children:"Building champions on and off the court since 2020."})]})}),(0,F.jsx)(s$,{children:(0,F.jsxs)(sV,{children:[(0,F.jsxs)(sU,{children:[(0,F.jsxs)(sH,{children:[(0,F.jsx)(sW,{children:"Our Mission"}),(0,F.jsx)(sq,{children:"DEVELOPING ELITE ATHLETES & OUTSTANDING YOUNG MEN"}),(0,F.jsx)(sG,{children:"The Wellington Wolves 17u Elite is a Puma NXTpro team dedicated to developing skilled basketball players and outstanding young men. We believe in a holistic approach to player development that emphasizes fundamental skills, basketball IQ, physical conditioning, and character development."}),(0,F.jsx)(sG,{children:"Our program is designed to prepare players for high-level high school competition and college basketball while instilling values of teamwork, discipline, resilience, and sportsmanship."})]}),(0,F.jsx)(sK,{children:(0,F.jsx)("img",{src:s(rZ),alt:"Wellington Wolves Logo"})})]}),(0,F.jsxs)(sQ,{children:[(0,F.jsxs)(sY,{children:[(0,F.jsx)(sW,{children:"Leadership"}),(0,F.jsx)(sq,{children:"COACHING STAFF"})]}),(0,F.jsxs)(sX,{children:[(0,F.jsxs)(sJ,{$delay:"0.1s",children:[(0,F.jsxs)(sZ,{children:[(0,F.jsx)(s0,{children:"ELIJAH BALCARCEL"}),(0,F.jsx)(s1,{children:"Head Coach"})]}),(0,F.jsx)(s2,{children:(0,F.jsx)(s5,{children:"Coach Balcarcel brings many years of coaching experience. His focus on player development and team-oriented basketball has led to multiple championships."})})]}),(0,F.jsxs)(sJ,{$delay:"0.2s",children:[(0,F.jsxs)(sZ,{children:[(0,F.jsx)(s0,{children:"JULIO BALCARCEL"}),(0,F.jsx)(s1,{children:"Assistant Coach"})]}),(0,F.jsx)(s2,{children:(0,F.jsx)(s5,{children:"Coach Julio specializes in offensive skill development and has trained numerous players who have gone on to play at Division I universities."})})]}),(0,F.jsxs)(sJ,{$delay:"0.3s",children:[(0,F.jsxs)(sZ,{children:[(0,F.jsx)(s0,{children:"JASON RANNEY"}),(0,F.jsx)(s1,{children:"Team Manager"})]}),(0,F.jsx)(s2,{children:(0,F.jsx)(s5,{children:"Jason coordinates all the travel logistics, tournament registration, and team operations to keep the Wolves running smoothly."})})]})]})]})]})}),(0,F.jsx)(s3,{children:(0,F.jsxs)(s4,{children:[(0,F.jsxs)(s6,{children:[(0,F.jsx)(sW,{style:{color:"var(--gold)"},children:"What We Stand For"}),(0,F.jsxs)(s8,{children:["OUR ",(0,F.jsx)("span",{children:"VALUES"})]})]}),(0,F.jsxs)(s7,{children:[(0,F.jsxs)(s9,{$delay:"0.1s",children:[(0,F.jsx)(oe,{children:(0,F.jsx)("span",{children:"E"})}),(0,F.jsx)(ot,{children:"EXCELLENCE"}),(0,F.jsx)(or,{children:"We pursue excellence in everything we do, from practice to competition to how we represent our team off the court."})]}),(0,F.jsxs)(s9,{$delay:"0.2s",children:[(0,F.jsx)(oe,{children:(0,F.jsx)("span",{children:"T"})}),(0,F.jsx)(ot,{children:"TEAMWORK"}),(0,F.jsx)(or,{children:"We put the team before individual accomplishments, knowing that collective success leads to individual growth."})]}),(0,F.jsxs)(s9,{$delay:"0.3s",children:[(0,F.jsx)(oe,{children:(0,F.jsx)("span",{children:"R"})}),(0,F.jsx)(ot,{children:"RESILIENCE"}),(0,F.jsx)(or,{children:"We develop mental toughness and the ability to overcome adversity, using challenges as opportunities for growth."})]}),(0,F.jsxs)(s9,{$delay:"0.4s",children:[(0,F.jsx)(oe,{children:(0,F.jsx)("span",{children:"L"})}),(0,F.jsx)(ot,{children:"LEADERSHIP"}),(0,F.jsx)(or,{children:"We encourage our players to be leaders on and off the court, taking responsibility and positively influencing others."})]})]})]})})]}),B=(L("7fPBF"),L("7fPBF"));let oi=[{id:1,date:"03/06 - 03/08",name:"March Madness",city:"Wellington",state:"FL",circuit:"USAB",venue:{name:"Village Park",address:"11700 Pierson Rd, Wellington, FL 33414"},hotelLink:null,details:"US Amateur Basketball tournament. Local event - no travel required."},{id:2,date:"03/13 - 03/15",name:"Conrad P. Foss Memorial",city:"Wesley Chapel",state:"FL",circuit:"HOOPSEEN",venue:{name:"Wiregrass Ranch Sports Campus",address:"3021 Sports Complex Blvd, Wesley Chapel, FL 33543"},hotelLink:null,details:"Hotel: Residence Inn by Marriott Tampa Wesley Chapel (next to Wiregrass facility). $229/night. Matching 15U team hotel.",games:[{day:"Sat, Mar 14",time:"12:00 PM EDT",court:"Court 2",opponent:"SCE UA Grind",homeAway:"Home",division:"Boys Varsity Showcase, Pool A"},{day:"Sat, Mar 14",time:"4:40 PM EDT",court:"Court 1",opponent:"SCE UA Rise",homeAway:"Home",division:"Boys Varsity Showcase, Pool A"},{day:"Sun, Mar 15",time:"9:40 AM EDT",court:"Court 1",opponent:"TNT Hoopsquad 2026",homeAway:"Home",division:"Boys Varsity Showcase, Pool A"},{day:"Sun, Mar 15",time:"12:00 PM EDT",court:"Court 1",opponent:"SWFL Hoops",homeAway:"Home",division:"Boys Varsity Showcase, Pool A"}]},{id:3,date:"03/20 - 03/22",name:"Jamboree",city:"Tavares",state:"FL",circuit:"AAU",venue:{name:"Big House",address:"400 E Alfred St, Tavares, FL 32778"},hotelLink:null,details:"Hotel: Holiday Inn Express, Tavares, FL. $189/night."},{id:4,date:"03/27 - 03/29",name:"Puma NXT PRO (Boston)",city:"Westford",state:"MA",circuit:"NXTpro",venue:{name:"The Mill Works",address:"22 Towns Farm Rd, Westford, MA 01886"},hotelLink:null,details:"🏨 Hotel: Residence Inn by Marriott Boston Concord. Check-in 3/27, Check-out 3/29 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer. ✈ Recommended Flights: JetBlue #722 PBI→BOS Fri 3/27 6:35 AM–9:39 AM (3h 04m) | JetBlue #721 BOS→PBI Sun 3/29 7:25 PM–10:49 PM (3h 24m) — $216.80/person roundtrip."},{id:5,date:"04/17 - 04/19",name:"Puma NXT PRO (Las Vegas)",city:"Henderson",state:"NV",circuit:"NXTpro",venue:{name:"Supreme Courtz",address:"2100 Olympic Avenue, Henderson, NV 89014"},hotelLink:null,details:"🏨 Hotel: Holiday Inn Express & Suites Las Vegas - E Tropicana. Check-in 4/16, Check-out 4/19 (3 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer. ✈ Recommended Flights: Frontier #4551 MIA→LAS Apr 16 arrives 8:42 AM | Frontier #4552 LAS→MIA Apr 19 arrives 11:49 PM — $196.96/person roundtrip (non-refundable)."},{id:6,date:"05/01 - 05/03",name:"Puma NXT PRO (Tampa)",city:"Wesley Chapel",state:"FL",circuit:"NXTpro",venue:{name:"Wiregrass Ranch Sports Complex",address:"3021 Sports Complex Blvd, Wesley Chapel, FL 33543"},hotelLink:null,details:"🏨 Hotel: Fairfield Inn & Suites by Marriott Tampa Wesley Chapel. Check-in 5/1, Check-out 5/3 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."},{id:7,date:"05/08 - 05/10",name:"Puma NXT PRO (Tavares)",city:"Tavares",state:"FL",circuit:"NXTpro",venue:{name:"Big House",address:"400 E Alfred St, Tavares, FL 32778"},hotelLink:null,details:"🏨 Hotel: Hampton Inn Leesburg/Tavares. Check-in 5/8, Check-out 5/10 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."},{id:8,date:"05/15 - 05/17",name:"Sweet 16 in ATL (OTR LIVE)",city:"Johns Creek",state:"GA",circuit:"OTR",venue:{name:"TBD",address:"Atlanta, GA Area"},hotelLink:null,details:"Hotel: Hampton Inn & Suites Johns Creek, 6440 East Johns Crossing, Johns Creek, GA 30097. $124/night."},{id:9,date:"05/22 - 05/25",name:"OTR Memorial Day Classic",city:"Orlando",state:"FL",circuit:"OTR",venue:{name:"Game Point Events Center",address:"6700 Kingspointe Pkwy, Orlando, FL 32819"},hotelLink:null,details:"🏨 Hotel: Universal's Stella Nova Resort, Orlando, FL (staying with other Wolves teams). Arrive Friday 5/22, depart Monday 5/25 (3 nights). Possible game on Monday. Rate TBD."},{id:10,date:"07/03 - 07/05",name:"Puma NXT PRO (Gainesville)",city:"Gainesville",state:"FL",circuit:"NXTpro",venue:{name:"Alachua County Sports & Event Center",address:"4870 Celebration Pointe Ave, Gainesville, FL 32608"},hotelLink:null,details:"🏨 Hotel: Hilton Garden Inn Gainesville. Check-in 7/3, Check-out 7/5 (2 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."},{id:11,date:"07/09 - 07/12",name:"Puma NXT PRO LIVE (Richmond)",city:"Glen Allen",state:"VA",circuit:"NXTpro",venue:{name:"Henrico Sports & Events Center",address:"1 All Star Boulevard, Glen Allen, VA 23059"},hotelLink:null,details:"🏨 Hotel: Embassy Suites by Hilton Richmond. Check-in 7/8, Check-out 7/12 (4 nights). Feel free to book through Expedia, Hotels.com, or any service you prefer."},{id:12,date:"07/16 - 07/19",name:"Power 24 (OTR LIVE)",city:"Cartersville",state:"GA",circuit:"OTR",venue:{name:"TBD",address:"Cartersville, GA"},hotelLink:null,details:"Hotel: TBD."},{id:13,date:"07/24 - 07/27",name:"Puma NXT PRO FINALS",city:"Orlando",state:"FL",circuit:"NXTpro",venue:{name:"Orange County Convention Center",address:"9800 International Dr., Orlando, FL 32819"},hotelLink:null,details:"🏨 Hotel: Residence Inn by Marriott Orlando Convention Center. Check-in 7/23, Check-out 7/27 (4 nights). Championship event. Feel free to book through Expedia, Hotels.com, or any service you prefer."}],oa=[{id:102,date:"04/11 - 04/12",name:"Publix Fundraiser",city:"Royal Palm Beach",state:"FL",circuit:"FUNDRAISER",venue:{name:"Publix at The Groves",address:"125 S State Road 7, Royal Palm Beach, FL 33414"},hotelLink:null,details:"Team fundraising event at Publix. Volunteers needed - check Wolf's Den for sign-up details."},{id:103,date:"04/04 - 04/05",name:"Publix Fundraiser",city:"Wellington",state:"FL",circuit:"FUNDRAISER",venue:{name:"Publix at Wellington Woodswalk Plaza",address:"9855 Lake Worth Rd, Wellington, FL 33411"},hotelLink:null,details:"Team fundraising event at Publix. Volunteers needed - check Wolf's Den for sign-up details."}],os={NXTpro:{bg:"#000000",text:"#FFFFFF",accent:"#E31837"},HOOPSEEN:{bg:"#1E3A5F",text:"#FFFFFF",accent:"#FFD700"},OTR:{bg:"#FF6B00",text:"#FFFFFF",accent:"#000000"},AAU:{bg:"#003087",text:"#FFFFFF",accent:"#C8102E"},USAB:{bg:"#002a5c",text:"#FFFFFF",accent:"#e51b24"},LOCAL:{bg:"#001f3f",text:"#FFFFFF",accent:"#FFD700"},FUNDRAISER:{bg:"#228B22",text:"#FFFFFF",accent:"#FFD700"}};var oo={};oo=o("iLEAr");var ol={};ol=o("82nA9");var ou={};ou=o("8waDd");let oc=e=>e,oh,od,of,op,om,og,oy,ov,ob,ox,ow,oE,oS,ok,oC,o_,oT,oI,oN,oj,oA,oR,oP,oO,oD,oL,oM,oF,oB=[...oi,...oa].sort((e,t)=>{let r=e=>100*parseInt(e.split("/")[0])+parseInt(e.split("/")[1].split(" ")[0]);return r(e.date)-r(t.date)}),oz=rX(oh||(oh=oc`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),o$=rQ.div(od||(od=oc`
  max-width: 100%;
  margin: 0 auto;
`)),oV=rQ.div(of||(of=oc`
  margin-bottom: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: var(--white);
  animation: ${0} 0.4s ease-out backwards;
  animation-delay: ${0}s;
`),oz,e=>.03*e.$index),oU=rQ.button(op||(op=oc`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr auto 40px;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${0};
  color: ${0};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  min-height: 70px;
  gap: 1rem;

  &:hover {
    background-color: ${0};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1.25rem;
    min-height: auto;
  }
`),e=>e.$isOpen?"var(--navy)":"var(--white)",e=>e.$isOpen?"white":"var(--navy)",e=>e.$isOpen?"var(--navy)":"var(--gray-100)"),oH=rQ.span(om||(om=oc`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${0};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`),e=>e.$isOpen?"var(--gold)":"var(--gray-500)"),oW=rQ.span(og||(og=oc`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  color: ${0};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`),e=>e.$isOpen?"var(--white)":"var(--navy)"),oq=rQ.div(oy||(oy=oc`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-self: end;

  @media (max-width: 768px) {
    justify-self: start;
  }
`)),oG=rQ.img(ov||(ov=oc`
  height: 22px;
  width: auto;
  background-color: ${0};
  padding: ${0};
  border-radius: 4px;
  opacity: 0.9;
`),e=>e.$light?"transparent":"#000",e=>e.$light?"0":"4px 8px"),oK=rQ.span(ob||(ob=oc`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${0};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`),e=>e.$isOpen?"rgba(255, 255, 255, 0.7)":"var(--gray-500)"),oQ=rQ.span(ox||(ox=oc`
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  transform: ${0};
  justify-self: end;
  color: ${0};

  @media (max-width: 768px) {
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
  }
`),e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)",e=>e.$isOpen?"var(--gold)":"var(--gray-500)"),oY=rQ.div(ow||(ow=oc`
  max-height: ${0};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--gray-100);
`),e=>e.$isOpen?"1200px":"0"),oX=rQ.div(oE||(oE=oc`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`)),oJ=rQ.div(oS||(oS=oc``)),oZ=rQ.span(ok||(ok=oc`
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 0.5rem;
`)),o0=rQ.h4(oC||(oC=oc`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  margin-bottom: 0.25rem;
  letter-spacing: 0.5px;
`)),o1=rQ.p(o_||(o_=oc`
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.5;
`)),o2=rQ.div(oT||(oT=oc`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`)),o5=rQ.span(oI||(oI=oc`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${0};
  color: ${0};
  width: fit-content;
`),e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.bg)||"var(--gray-500)"},e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.text)||"#fff"}),o3=rQ.a(oN||(oN=oc`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--gold);
  color: var(--navy);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: var(--navy);
    color: var(--gold);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`)),o4=rQ.p(oj||(oj=oc`
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.6;
  font-style: italic;
`)),o6=rQ.div(oA||(oA=oc`
  grid-column: 1 / -1;
  margin-top: 0.5rem;
`)),o8=rQ.h4(oR||(oR=oc`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--navy);
  margin: 1.25rem 0 0.5rem 0;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid var(--gold);
  display: inline-block;

  &:first-child {
    margin-top: 0;
  }
`)),o7=rQ.div(oP||(oP=oc`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  border-radius: 8px;
  padding: 0.85rem 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`)),o9=rQ.span(oO||(oO=oc`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--navy);
  min-width: 110px;
  white-space: nowrap;
`)),le=rQ.span(oD||(oD=oc`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gray-700);
  flex: 1;

  strong {
    color: var(--navy);
  }
`)),lt=rQ.span(oL||(oL=oc`
  font-family: 'Barlow', sans-serif;
  font-size: 0.8rem;
  color: var(--gray-500);
  white-space: nowrap;
`)),lr=rQ.span(oM||(oM=oc`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--gold-dark);
  background: rgba(201, 169, 80, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  white-space: nowrap;
`)),ln=rQ.div(oF||(oF=oc`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`));var li=()=>{let[e,t]=(0,B.useState)(null);return(0,F.jsx)(o$,{children:oB.map((r,n)=>{let i,a;return(0,F.jsxs)(oV,{$index:n,children:[(0,F.jsx)(ln,{children:(0,F.jsxs)(oU,{onClick:()=>{var n;t(e===(n=r.id)?null:n)},$isOpen:e===r.id,children:[(0,F.jsx)(oH,{$isOpen:e===r.id,children:r.date}),(0,F.jsx)(oW,{$isOpen:e===r.id,children:r.name}),(0,F.jsxs)(oq,{children:["NXTpro"===r.circuit&&(0,F.jsx)(oG,{src:s(oo),alt:"NXTpro"}),"HOOPSEEN"===r.circuit&&(0,F.jsx)(oG,{src:s(ol),alt:"HOOPSEEN",$light:!0}),"OTR"===r.circuit&&(0,F.jsx)(oG,{src:s(ou),alt:"On The Radar",$light:!0}),"USAB"===r.circuit&&(0,F.jsx)(oG,{src:"https://usamateurbasketball.com/themes/custom/usabb/logo.svg",alt:"US Amateur Basketball",$light:!0}),(0,F.jsxs)(oK,{$isOpen:e===r.id,children:[r.city,", ",r.state]})]}),(0,F.jsx)(oQ,{$isOpen:e===r.id,children:"▼"})]})}),(0,F.jsx)(oY,{$isOpen:e===r.id,children:(0,F.jsxs)(oX,{children:[(0,F.jsxs)(oJ,{children:[(0,F.jsx)(oZ,{children:"Venue"}),(0,F.jsx)(o0,{children:r.venue.name}),(0,F.jsx)(o1,{children:r.venue.address})]}),(0,F.jsxs)(o2,{children:[(0,F.jsx)(o5,{$circuit:r.circuit,children:r.circuit}),r.hotelLink&&(0,F.jsxs)(o3,{href:r.hotelLink,target:"_blank",rel:"noopener noreferrer",children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,F.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,F.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Book Hotel"]}),r.details&&(0,F.jsx)(o4,{children:r.details})]}),r.games&&r.games.length>0&&(0,F.jsxs)(o6,{children:[(0,F.jsx)(oZ,{children:"Game Schedule"}),(i=[],a=null,r.games.forEach((e,t)=>{e.day!==a&&(a=e.day,i.push({day:e.day,games:[]})),i[i.length-1].games.push(e)}),i.map((e,t)=>(0,F.jsxs)("div",{children:[(0,F.jsx)(o8,{children:e.day}),e.games.map((e,t)=>(0,F.jsxs)(o7,{children:[(0,F.jsx)(o9,{children:e.time}),(0,F.jsxs)(le,{children:[(0,F.jsx)("strong",{children:"Wolves"})," vs ",e.opponent]}),(0,F.jsx)(lr,{children:e.court}),(0,F.jsx)(lt,{children:e.division})]},t))]},t)))]})]})})]},r.id)})})},B=L("7fPBF");let la=e=>e,ls,lo,ll,lu,lc,lh,ld,lf,lp,lm,lg,ly,lv,lb,lx,lw,lE,lS,lk,lC,l_,lT,lI,lN,lj,lA,lR,lP,lO,lD=[...oi,...oa],lL=rX(ls||(ls=la`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),lM=rX(lo||(lo=la`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`)),lF=rQ.div(ll||(ll=la`
  animation: ${0} 0.4s ease-out;
`),lL),lB=rQ.div(lu||(lu=la`
  margin-bottom: 2rem;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`)),lz=rQ.div(lc||(lc=la`
  background: var(--navy);
  padding: 1rem 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gold);
  }
`)),l$=rQ.h3(lh||(lh=la`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--white);
  letter-spacing: 2px;
  margin: 0;
`)),lV=rQ.div(ld||(ld=la`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`)),lU=rQ.div(lf||(lf=la`
  background: var(--gray-100);
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-200);

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem;
    font-size: 0.65rem;
  }
`)),lH=rQ.div(lp||(lp=la`
  min-height: 80px;
  padding: 0.5rem;
  border-right: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
  background: ${0};
  position: relative;

  &:nth-child(7n) {
    border-right: none;
  }

  @media (max-width: 768px) {
    min-height: 60px;
    padding: 0.25rem;
  }
`),e=>e.$isCurrentMonth?"var(--white)":"var(--gray-50)"),lW=rQ.span(lm||(lm=la`
  font-family: 'Barlow', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${0};

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`),e=>e.$isCurrentMonth?"var(--gray-700)":"var(--gray-400)"),lq=rQ.div(lg||(lg=la`
  margin-top: 0.25rem;
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${0};
  color: ${0};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  line-height: 1.2;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 0.55rem;
    padding: 0.2rem 0.3rem;
  }
`),e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.bg)||"var(--navy)"},e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.text)||"#fff"}),lG=rQ.div(ly||(ly=la`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--gray-50);
  border-top: 1px solid var(--gray-200);
`)),lK=rQ.div(lv||(lv=la`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`)),lQ=rQ.span(lb||(lb=la`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${0};
`),e=>e.$color),lY=rQ.span(lx||(lx=la`
  font-family: 'Barlow', sans-serif;
  font-size: 0.8rem;
  color: var(--gray-600);
`)),lX=rQ.div(lw||(lw=la`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 31, 63, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`)),lJ=rQ.div(lE||(lE=la`
  background: var(--white);
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${0} 0.3s ease-out;
`),lM),lZ=rQ.div(lS||(lS=la`
  background: var(--navy);
  padding: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gold);
  }
`)),l0=rQ.h3(lk||(lk=la`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--white);
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`)),l1=rQ.span(lC||(lC=la`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 1px;
`)),l2=rQ.button(l_||(l_=la`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`)),l5=rQ.div(lT||(lT=la`
  padding: 1.5rem;
`)),l3=rQ.div(lI||(lI=la`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`)),l4=rQ.span(lN||(lN=la`
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 0.5rem;
`)),l6=rQ.p(lj||(lj=la`
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  color: var(--gray-700);
  margin: 0;
  line-height: 1.5;
`)),l8=rQ.h4(lA||(lA=la`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  margin: 0 0 0.25rem 0;
  letter-spacing: 0.5px;
`)),l7=rQ.span(lR||(lR=la`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${0};
  color: ${0};
`),e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.bg)||"var(--gray-500)"},e=>{var t;return(null==(t=os[e.$circuit])?void 0:t.text)||"#fff"}),l9=rQ.a(lP||(lP=la`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--gold);
  color: var(--navy);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: var(--navy);
    color: var(--gold);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`)),ue=rQ.p(lO||(lO=la`
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.6;
  font-style: italic;
  margin: 0;
`)),ut=(e,t,r)=>r.filter(r=>{let n,i,a,{startMonth:s,startDay:o,endMonth:l,endDay:u}=(i=(n=r.date.split(" - "))[0].split("/"),a=n[1].split("/"),{startMonth:parseInt(i[0])-1,startDay:parseInt(i[1]),endMonth:parseInt(a[0])-1,endDay:parseInt(a[1])});return s===l?e===s&&t>=o&&t<=u:e===s?t>=o:e===l&&t<=u});var ur=()=>{let[e,t]=(0,B.useState)(null),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=e=>{t(e)},i=()=>{t(null)};return(0,F.jsxs)(lF,{children:[[{name:"MARCH",num:2},{name:"APRIL",num:3},{name:"MAY",num:4},{name:"JUNE",num:5},{name:"JULY",num:6}].map(e=>((e,t)=>{let i=new Date(2026,t+1,0).getDate(),a=new Date(2026,t,1).getDay(),s=[];for(let e=0;e<a;e++)s.push((0,F.jsx)(lH,{$isCurrentMonth:!1,children:(0,F.jsx)(lW,{$isCurrentMonth:!1})},`empty-${e}`));for(let e=1;e<=i;e++){let r=ut(t,e,lD);s.push((0,F.jsxs)(lH,{$isCurrentMonth:!0,children:[(0,F.jsx)(lW,{$isCurrentMonth:!0,children:e}),r.map((e,t)=>(0,F.jsx)(lq,{$circuit:e.circuit,onClick:()=>n(e),children:e.name.split(" ")[0]},`${e.id}-${t}`))]},e))}let o=7-s.length%7;if(o<7)for(let e=0;e<o;e++)s.push((0,F.jsx)(lH,{$isCurrentMonth:!1,children:(0,F.jsx)(lW,{$isCurrentMonth:!1})},`end-empty-${e}`));return(0,F.jsxs)(lB,{children:[(0,F.jsx)(lz,{children:(0,F.jsxs)(l$,{children:[e," 2026"]})}),(0,F.jsxs)(lV,{children:[r.map(e=>(0,F.jsx)(lU,{children:e},e)),s]})]},e)})(e.name,e.num)),(0,F.jsx)(lB,{children:(0,F.jsxs)(lG,{children:[(0,F.jsxs)(lK,{children:[(0,F.jsx)(lQ,{$color:os.NXTpro.bg}),(0,F.jsx)(lY,{children:"Puma NXTpro"})]}),(0,F.jsxs)(lK,{children:[(0,F.jsx)(lQ,{$color:os.HOOPSEEN.bg}),(0,F.jsx)(lY,{children:"HOOPSEEN"})]}),(0,F.jsxs)(lK,{children:[(0,F.jsx)(lQ,{$color:os.OTR.bg}),(0,F.jsx)(lY,{children:"On The Radar"})]}),(0,F.jsxs)(lK,{children:[(0,F.jsx)(lQ,{$color:os.USAB.bg}),(0,F.jsx)(lY,{children:"US Amateur"})]}),(0,F.jsxs)(lK,{children:[(0,F.jsx)(lQ,{$color:os.AAU.bg}),(0,F.jsx)(lY,{children:"AAU"})]})]})}),e&&(0,F.jsx)(lX,{onClick:i,children:(0,F.jsxs)(lJ,{onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(lZ,{children:[(0,F.jsx)(l2,{onClick:i,children:"×"}),(0,F.jsx)(l0,{children:e.name}),(0,F.jsx)(l1,{children:e.date})]}),(0,F.jsxs)(l5,{children:[(0,F.jsxs)(l3,{children:[(0,F.jsx)(l4,{children:"Location"}),(0,F.jsxs)(l6,{children:[e.city,", ",e.state]})]}),(0,F.jsxs)(l3,{children:[(0,F.jsx)(l4,{children:"Venue"}),(0,F.jsx)(l8,{children:e.venue.name}),(0,F.jsx)(l6,{children:e.venue.address})]}),(0,F.jsxs)(l3,{children:[(0,F.jsx)(l4,{children:"Circuit"}),(0,F.jsx)(l7,{$circuit:e.circuit,children:e.circuit})]}),e.details&&(0,F.jsxs)(l3,{children:[(0,F.jsx)(l4,{children:"Details"}),(0,F.jsx)(ue,{children:e.details})]}),e.hotelLink&&(0,F.jsxs)(l9,{href:e.hotelLink,target:"_blank",rel:"noopener noreferrer",children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,F.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,F.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Book Hotel"]})]})]})})]})};let un=e=>e,ui,ua,us,uo,ul,uu,uc,uh,ud,uf,up,um,ug,uy,uv,ub,ux,uw,uE,uS,uk,uC,u_=rX(ui||(ui=un`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),uT=rQ.div(ua||(ua=un`
  min-height: 100vh;
  background: var(--gray-100);
`)),uI=rQ.section(us||(us=un`
  background: var(--navy);
  padding: 4rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),uN=rQ.div(uo||(uo=un`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`)),uj=rQ.span(ul||(ul=un`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`),u_),uA=rQ.h1(uu||(uu=un`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--white);
  line-height: 0.95;
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out 0.1s backwards;

  span {
    color: var(--gold);
  }
`),u_),uR=rQ.p(uc||(uc=un`
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: ${0} 0.6s ease-out 0.2s backwards;
`),u_),uP=rQ.section(uh||(uh=un`
  padding: 4rem 2rem;
  margin-top: -2rem;
`)),uO=rQ.div(ud||(ud=un`
  max-width: 1400px;
  margin: 0 auto;
`)),uD=rQ.div(uf||(uf=un`
  margin-bottom: 4rem;
`)),uL=rQ.div(up||(up=un`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`)),uM=rQ.button(um||(um=un`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${0};
  color: ${0};
  border: 2px solid var(--navy);
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--navy);
    color: var(--gold);
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`),e=>e.$active?"var(--navy)":"var(--white)",e=>e.$active?"var(--gold)":"var(--navy)"),uF=rQ.div(ug||(ug=un`
  display: flex;
  gap: 0.5rem;
`)),uB=rQ.p(uy||(uy=un`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-500);
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 3px solid var(--gold);
`)),uz=rQ.div(uv||(uv=un`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`)),u$=rQ.div(ub||(ub=un`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 31, 63, 0.1);
  }
`),u_,e=>e.$delay||"0s"),uV=rQ.div(ux||(ux=un`
  background: var(--navy);
  padding: 1.25rem 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gold);
  }
`)),uU=rQ.h3(uw||(uw=un`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--gold);
  letter-spacing: 1px;
`)),uH=rQ.div(uE||(uE=un`
  padding: 1.5rem;
`)),uW=rQ.ul(uS||(uS=un`
  list-style: none;
  padding: 0;
  margin: 0;
`)),uq=rQ.li(uk||(uk=un`
  font-size: 0.95rem;
  color: var(--gray-700);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85rem;
    width: 6px;
    height: 6px;
    background: var(--gold);
    border-radius: 50%;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }
`)),uG=rQ.p(uC||(uC=un`
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.7;

  strong {
    color: var(--navy);
    display: block;
    margin-bottom: 0.25rem;
  }

  a {
    color: var(--gold-dark);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--navy);
    }
  }
`));var uK=()=>{let[e,t]=(0,B.useState)("list");return(0,F.jsxs)(uT,{children:[(0,F.jsx)(uI,{children:(0,F.jsxs)(uN,{children:[(0,F.jsx)(uj,{children:"2026 Season"}),(0,F.jsxs)(uA,{children:["EVENTS ",(0,F.jsx)("span",{children:"CALENDAR"})]}),(0,F.jsx)(uR,{children:"Tournaments, fundraisers, and team events — follow the Wolves all season long."})]})}),(0,F.jsx)(uP,{children:(0,F.jsxs)(uO,{children:[(0,F.jsxs)(uD,{children:[(0,F.jsxs)(uL,{children:[(0,F.jsx)(uB,{style:{marginBottom:0},children:"list"===e?"Click on any tournament to view venue details and hotel booking information.":"Hover over events to see tournament details."}),(0,F.jsxs)(uF,{children:[(0,F.jsxs)(uM,{$active:"list"===e,onClick:()=>t("list"),title:"List View",children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),(0,F.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),(0,F.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),(0,F.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),(0,F.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),(0,F.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),"List"]}),(0,F.jsxs)(uM,{$active:"calendar"===e,onClick:()=>t("calendar"),title:"Calendar View",children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,F.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,F.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,F.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Calendar"]})]})]}),"list"===e?(0,F.jsx)(li,{}):(0,F.jsx)(ur,{})]}),(0,F.jsxs)(uz,{children:[(0,F.jsxs)(u$,{$delay:"0.1s",children:[(0,F.jsx)(uV,{children:(0,F.jsx)(uU,{children:"TRAVEL GUIDELINES"})}),(0,F.jsx)(uH,{children:(0,F.jsxs)(uW,{children:[(0,F.jsx)(uq,{children:"Book hotels as soon as information is provided"}),(0,F.jsx)(uq,{children:"Stay at team hotels when possible"}),(0,F.jsx)(uq,{children:"Arrive the day before tournament start"}),(0,F.jsx)(uq,{children:"Plan for full day schedules"})]})})]}),(0,F.jsxs)(u$,{$delay:"0.2s",children:[(0,F.jsx)(uV,{children:(0,F.jsx)(uU,{children:"TRANSPORTATION"})}),(0,F.jsx)(uH,{children:(0,F.jsxs)(uW,{children:[(0,F.jsx)(uq,{children:"Coordinate with team families for carpooling"}),(0,F.jsx)(uq,{children:"Plan airport transfers for out-of-state tournaments"}),(0,F.jsx)(uq,{children:"Allow extra time for traffic and venue location"}),(0,F.jsx)(uq,{children:"Event Connect booking available for NXTpro events"})]})})]}),(0,F.jsxs)(u$,{$delay:"0.3s",children:[(0,F.jsx)(uV,{children:(0,F.jsx)(uU,{children:"CONTACT INFO"})}),(0,F.jsxs)(uH,{children:[(0,F.jsxs)(uG,{children:[(0,F.jsx)("strong",{children:"Team Manager"}),"Jason Ranney",(0,F.jsx)("br",{}),(0,F.jsx)("a",{href:"tel:5614515880",children:"(561) 451-5880"})]}),(0,F.jsxs)(uG,{style:{marginTop:"1rem"},children:[(0,F.jsx)("strong",{children:"Travel Questions"}),(0,F.jsx)("a",{href:"mailto:jpkicker@gmail.com",children:"jpkicker@gmail.com"})]})]})]})]})]})})]})};L("7fPBF");var uQ={};uQ=o("1L2Tm");var uY={};uY=o("3IfOM");var uX={};uX=o("gAHcM");var uJ={};uJ=o("aIeAs");var uZ={};uZ=o("bb8rt");var u0={};u0=o("aSgN9");var u1={};u1=o("03TW4");var u2={};u2=o("lIwF1");var u5={};u5=o("fl7ap");var u3={};u3=o("jlXTp");let u4=[{id:"canaan-gedeon",number:2,firstName:"CANAAN",lastName:"GEDEON",position:"Guard",initial:"CG",image:s(uQ),instagram:"c_gedeon.21",height:"6'1\"",weight:"165",gradYear:2027,school:"Wellington High School",gpa:"",bio:"Dynamic point guard with exceptional court vision and leadership abilities. Known for creating opportunities for teammates while being a scoring threat from anywhere on the court.",stats:{season:"2024-25",gp:31,ppg:12.3,rpg:3,apg:2.5,spg:.8,bpg:.1,fgPct:49,threePct:34,ftPct:56},highlights:[],recruiting:{hudl:"",email:"CASGEDEON@AOL.COM",interests:["D1","D2","D3"],status:"Open"}},{id:"ethan-ranney",number:3,firstName:"ETHAN",lastName:"RANNEY",position:"Guard",initial:"ER",image:s(uY),instagram:"ethanranney3",height:"6'0\"",weight:"150",gradYear:2027,school:"Wellington High School",gpa:"",bio:"Versatile shooting guard with a smooth stroke and high basketball IQ. Excels at reading defenses and making the right play. Strong defender who takes pride in shutting down the opponent's best player.",stats:{season:"2024-25",gp:31,ppg:3.1,rpg:1.5,apg:.7,spg:.3,bpg:0,fgPct:34,threePct:35,ftPct:50},highlights:[],recruiting:{hudl:"",email:"JPKICKER@GMAIL.COM",interests:["D1","D2"],status:"Open"}},{id:"nicholas-cruz",number:99,firstName:"NICHOLAS",lastName:"CRUZ",position:"Guard",initial:"NC",image:s(uX),instagram:"Iamnickcruz4",twitter:"NicCruz1574985",height:"5'8\"",weight:"140",gradYear:2027,school:"Park Vista High School",gpa:"3",bio:"Quick and crafty guard who excels at getting to the rim. Fearless competitor with a knack for making big plays in clutch moments.",stats:{season:"2024-25",gp:31,ppg:4.5,rpg:2.2,apg:1.9,spg:1,bpg:0,fgPct:37,threePct:31,ftPct:68},highlights:[],recruiting:{hudl:"",email:"CRUZ_RA1@YAHOO.COM",interests:["D2","D3"],status:"Open"}},{id:"rj-jean-baptiste",number:0,firstName:"RJ",lastName:"JEAN-BAPTISTE",position:"Guard",initial:"RJ",image:s(uJ),instagram:"rjjdolo",twitter:"RJJeanbaptiste",height:"5'11\"",weight:"155",gradYear:2027,school:"Wellington Community High School",gpa:"",bio:"Athletic combo guard with explosive scoring ability. Can score at all three levels and is developing into a lockdown defender.",stats:{season:"2024-25",gp:31,ppg:7.8,rpg:2.5,apg:3.3,spg:1,bpg:.1,fgPct:37,threePct:28,ftPct:67},highlights:[],recruiting:{hudl:"",email:"NAMIEJ@HOTMAIL.COM",interests:["D1","D2"],status:"Open"}},{id:"max-modric",number:10,firstName:"MAX",lastName:"MODRIC",position:"Guard",initial:"MM",image:s(u0),instagram:"max.modric10",twitter:"MaximusModric",height:"6'0\"",weight:"194",gradYear:2027,school:"American Heritage",gpa:"3.77",bio:"Skilled guard with a versatile game. Can stretch the floor with his shooting or attack the basket.",stats:{season:"2024-25",gp:24,ppg:0,rpg:0,apg:0,spg:0,bpg:0,fgPct:0,threePct:0,ftPct:0},highlights:[],recruiting:{hudl:"",email:"GAMODRIC@MBIPROJECTMANAGEMENT.COM",interests:["D2","D3"],status:"Open"}},{id:"camden-wesley-kam",number:11,firstName:"CAMDEN",lastName:"WESLEY-KAM",position:"Forward",initial:"CW",image:s(uZ),instagram:"camden.wk",twitter:"CamdenWK",height:"6'3\"",weight:"180",gradYear:2027,school:"Wellington Community High School",gpa:"3.5",bio:"Long and athletic forward with excellent potential. Uses his length to disrupt passing lanes and alter shots. Developing offensive game.",stats:{season:"2024-25",gp:31,ppg:12.9,rpg:7.2,apg:.7,spg:.9,bpg:.7,fgPct:58,threePct:27,ftPct:51},highlights:[],recruiting:{hudl:"",email:"FALLONKAM@GMAIL.COM",interests:["D2","D3"],status:"Open"}},{id:"chase-ursini-gardner",number:4,firstName:"CHASE",lastName:"URSINI-GARDNER",position:"Guard",initial:"CU",image:s(u1),instagram:"Chase_ug",twitter:"ChaseUG_",height:"6'1\"",weight:"170",gradYear:2027,school:"Palm Beach Central",gpa:"",bio:"",stats:{season:"2025-26",gp:0,ppg:0,rpg:0,apg:0,spg:0,bpg:0,fgPct:0,threePct:0,ftPct:0},highlights:[],recruiting:{hudl:"",email:"",interests:[],status:"Open"}},{id:"cristian-brown",number:8,firstName:"CRISTIAN",lastName:"BROWN",position:"Forward",initial:"CB",image:s(u3),instagram:"Cristianbrown18",height:"6'0\"",weight:"185",gradYear:2028,school:"Joaquin Garcia",gpa:"3.1",bio:"",stats:{season:"2025-26",gp:0,ppg:0,rpg:0,apg:0,spg:0,bpg:0,fgPct:0,threePct:0,ftPct:0},highlights:[],recruiting:{hudl:"",email:"",interests:[],status:"Open"}},{id:"jorge-lopez",number:6,firstName:"JORGE",lastName:"LOPEZ",position:"Center",initial:"JL",image:s(u5),instagram:"jjorge.llopez",height:"6'6\"",weight:"207",gradYear:2027,school:"West Boca Raton Community High School",gpa:"2.5",bio:"",stats:{season:"2025-26",gp:0,ppg:0,rpg:0,apg:0,spg:0,bpg:0,fgPct:0,threePct:0,ftPct:0},highlights:[],recruiting:{hudl:"",email:"Jorge.lopez2061@icloud.com",interests:[],status:"Open"}},{id:"genesis-perozo",number:23,firstName:"GENESIS",lastName:"PEROZO",position:"Center",initial:"GP",image:s(u2),instagram:null,height:"6'4\"",weight:"175",gradYear:2028,school:"Park Vista",gpa:"",bio:"",stats:{season:"2025-26",gp:0,ppg:0,rpg:0,apg:0,spg:0,bpg:0,fgPct:0,threePct:0,ftPct:0},highlights:[],recruiting:{hudl:"",email:"",interests:[],status:"Open"}}],u6=e=>e,u8,u7,u9,ce,ct,cr,cn,ci,ca,cs,co,cl,cu,cc,ch,cd,cf,cp,cm,cg,cy,cv,cb,cx,cw=rX(u8||(u8=u6`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),cE=rQ.div(u7||(u7=u6`
  min-height: 100vh;
  background: var(--gray-100);
`)),cS=rQ.section(u9||(u9=u6`
  background: var(--navy);
  padding: 4rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),ck=rQ.div(ce||(ce=u6`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`)),cC=rQ.span(ct||(ct=u6`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`),cw),c_=rQ.h1(cr||(cr=u6`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--white);
  line-height: 0.95;
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out 0.1s backwards;

  span {
    color: var(--gold);
  }
`),cw),cT=rQ.p(cn||(cn=u6`
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: ${0} 0.6s ease-out 0.2s backwards;
`),cw),cI=rQ.section(ci||(ci=u6`
  padding: 4rem 2rem;
  margin-top: -2rem;
`)),cN=rQ.div(ca||(ca=u6`
  max-width: 1400px;
  margin: 0 auto;
`)),cj=rQ.div(cs||(cs=u6`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`)),cA=rQ(eL)(co||(co=u6`
  text-decoration: none;
  display: block;
`)),cR=rQ.div(cl||(cl=u6`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0}s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 31, 63, 0.15);
  }
`),cw,e=>.05*e.$index),cP=rQ.div(cu||(cu=u6`
  position: relative;
  width: 100%;
  padding-top: 110%;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  overflow: hidden;
`)),cO=rQ.div(cc||(cc=u6`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${0}:hover & img {
    transform: scale(1.05);
  }
`),cR),cD=rQ.span(ch||(ch=u6`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem;
  color: var(--gold);
  opacity: 0.8;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`)),cL=rQ.div(cd||(cd=u6`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
`)),cM=rQ.div(cf||(cf=u6`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--gold);
  color: var(--navy);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${0}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`),cR),cF=rQ.div(cp||(cp=u6`
  padding: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 3px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  ${0}:hover &::before {
    transform: scaleX(1);
  }
`),cR),cB=rQ.div(cm||(cm=u6`
  margin-bottom: 0.5rem;
`)),cz=rQ.span(cg||(cg=u6`
  display: block;
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 1px;
`)),c$=rQ.span(cy||(cy=u6`
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--navy);
  line-height: 1;
  letter-spacing: 1px;
`)),cV=rQ.p(cv||(cv=u6`
  font-family: 'Barlow Condensed', sans-serif;
  color: var(--gray-500);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`)),cU=rQ.div(cb||(cb=u6`
  display: flex;
  gap: 1rem;
  font-family: 'Barlow', sans-serif;
  font-size: 0.8rem;
  color: var(--gray-500);
`)),cH=rQ.span(cx||(cx=u6`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 215, 0, 0.15);
  color: var(--gold-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
`));var cW=()=>(0,F.jsxs)(cE,{children:[(0,F.jsx)(cS,{children:(0,F.jsxs)(ck,{children:[(0,F.jsx)(cC,{children:"2026 Season"}),(0,F.jsxs)(c_,{children:["THE ",(0,F.jsx)("span",{children:"ROSTER"})]}),(0,F.jsx)(cT,{children:"Meet the athletes who make up the Wellington Wolves 17U Elite squad. Click any player for their full recruiting profile."})]})}),(0,F.jsx)(cI,{children:(0,F.jsx)(cN,{children:(0,F.jsx)(cj,{children:u4.map((e,t)=>"TBD"===e.firstName?(0,F.jsxs)(cR,{$index:t,children:[(0,F.jsxs)(cP,{children:[(0,F.jsxs)(cL,{children:["#",e.number]}),(0,F.jsx)(cO,{children:(0,F.jsx)(cD,{children:e.initial})})]}),(0,F.jsxs)(cF,{children:[(0,F.jsx)(cB,{children:(0,F.jsx)(c$,{children:"TO BE ANNOUNCED"})}),(0,F.jsx)(cH,{children:"Roster Spot Available"})]})]},e.id||e.number):(0,F.jsx)(cA,{to:`/players/${e.id}`,children:(0,F.jsxs)(cR,{$index:t,children:[(0,F.jsxs)(cP,{children:[(0,F.jsxs)(cL,{children:["#",e.number]}),(0,F.jsx)(cO,{children:e.image?(0,F.jsx)("img",{src:e.image,alt:`${e.firstName} ${e.lastName}`,loading:"lazy",onError:e=>{e.target.style.display="none"}}):(0,F.jsx)(cD,{children:e.initial})}),(0,F.jsxs)(cM,{children:["View Profile ",(0,F.jsx)(nV,{})]})]}),(0,F.jsxs)(cF,{children:[(0,F.jsxs)(cB,{children:[(0,F.jsx)(cz,{children:e.firstName}),(0,F.jsx)(c$,{children:e.lastName})]}),(0,F.jsx)(cV,{children:e.position}),(0,F.jsxs)(cU,{children:[e.height&&(0,F.jsx)("span",{children:e.height}),e.gradYear&&(0,F.jsxs)("span",{children:["Class of ",e.gradYear]})]})]})]})},e.id))})})})]});function cq(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}var B=(L("7fPBF"),L("7fPBF")),cG=Object.defineProperty,cK=Object.getOwnPropertySymbols,cQ=Object.prototype.hasOwnProperty,cY=Object.prototype.propertyIsEnumerable,cX=(e,t,r)=>t in e?cG(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,cJ=(e,t)=>{for(var r in t||(t={}))cQ.call(t,r)&&cX(e,r,t[r]);if(cK)for(var r of cK(t))cY.call(t,r)&&cX(e,r,t[r]);return e},cZ=(e,t)=>{var r={};for(var n in e)cQ.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&cK)for(var n of cK(e))0>t.indexOf(n)&&cY.call(e,n)&&(r[n]=e[n]);return r};(e=>{let t=class t{static encodeText(r,n){let i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){let i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,n,a=1,o=40,l=-1,u=!0){let c,h;if(!(t.MIN_VERSION<=a&&a<=o&&o<=t.MAX_VERSION)||l<-1||l>7)throw RangeError("Invalid value");for(c=a;;c++){let r=8*t.getNumDataCodewords(c,n),i=s.getTotalBits(e,c);if(i<=r){h=i;break}if(c>=o)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&h<=8*t.getNumDataCodewords(c,e)&&(n=e);let d=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,d),r(t.numChars,t.mode.numCharCountBits(c),d),t.getData()))d.push(e);i(d.length==h);let f=8*t.getNumDataCodewords(c,n);i(d.length<=f),r(0,Math.min(4,f-d.length),d),r(0,(8-d.length%8)%8,d),i(d.length%8==0);for(let e=236;d.length<f;e^=253)r(e,8,d);let p=[];for(;8*p.length<d.length;)p.push(0);return d.forEach((e,t)=>p[t>>>3]|=e<<7-(7&t)),new t(c,n,p,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)(0!=r||0!=n)&&(0!=r||n!=t-1)&&(r!=t-1||0!=n)&&this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let a=(t<<10|r)^21522;i(a>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,n(a,e));this.setFunctionModule(8,7,n(a,6)),this.setFunctionModule(8,8,n(a,7)),this.setFunctionModule(7,8,n(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,n(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,n(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,n(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(t>>>18==0);for(let e=0;e<18;e++){let r=n(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,r),this.setFunctionModule(a,i,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let i=Math.max(Math.abs(n),Math.abs(r)),a=e+n,s=t+r;0<=a&&a<this.size&&0<=s&&s<this.size&&this.setFunctionModule(a,s,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let a=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],s=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],o=Math.floor(t.getNumRawDataModules(r)/8),l=a-o%a,u=Math.floor(o/a),c=[],h=t.reedSolomonComputeDivisor(s);for(let r=0,n=0;r<a;r++){let i=e.slice(n,n+u-s+(r<l?0:1));n+=i.length;let a=t.reedSolomonComputeRemainder(i,h);r<l&&i.push(0),c.push(i.concat(a))}let d=[];for(let e=0;e<c[0].length;e++)c.forEach((t,r)=>{(e!=u-s||r>=l)&&d.push(t[e])});return i(d.length==o),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let s=t-a,o=(t+1&2)==0?this.size-1-i:i;!this.isFunction[o][s]&&r<8*e.length&&(this.modules[o][s]=n(e[r>>>3],7-(7&r)),r++)}}i(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[r][s],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,a=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,a),n||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),n=this.modules[s][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,a)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+ +!!t,r);let n=this.size*this.size,a=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=a&&a<=9),i(0<=(e+=a*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(let i of e){let e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(t>>>n&1)*e;return i(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];i(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}constructor(e,r,n,a){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(a<-1||a>7)throw RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let e=0;e<this.size;e++)s.push(!1);for(let e=0;e<this.size;e++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();let o=this.addEccAndInterleave(n);if(this.drawCodewords(o),-1==a){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(a=t,e=r),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return(e>>>t&1)!=0}function i(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let a=class e{static makeBytes(t){let n=[];for(let e of t)r(e,8,n);return new e(e.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let n=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+i),10),3*i+1,n),e+=i}return new e(e.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){let n;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let i=[];for(n=0;n+2<=t.length;n+=2){let a=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));r(a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),11,i)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,i),new e(e.Mode.ALPHANUMERIC,t.length,i)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let n=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else if(t<1e6)r(6,3,n),r(t,21,n);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,n)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let n of e){let e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=a;e.QrSegment=a})(f||(f={})),u=(l=f||(f={})).QrCode||(l.QrCode={}),(r=class{constructor(e,t){this.ordinal=e,this.formatBits=t}}).LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),u.Ecc=r,h=(c=f||(f={})).QrSegment||(c.QrSegment={}),(n=class{numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}}).NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),h.Mode=n;var c0=f,c1={L:c0.QrCode.Ecc.LOW,M:c0.QrCode.Ecc.MEDIUM,Q:c0.QrCode.Ecc.QUARTILE,H:c0.QrCode.Ecc.HIGH},c2="#FFFFFF",c5="#000000";function c3(e,t=0){let r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(a,s){if(!a&&null!==i){r.push(`M${i+t} ${n+t}h${s-i}v1H${i+t}z`),i=null;return}if(s===e.length-1){if(!a)return;null===i?r.push(`M${s+t},${n+t} h1v1H${s+t}z`):r.push(`M${i+t},${n+t} h${s+1-i}v1H${i+t}z`);return}a&&null===i&&(i=s)})}),r.join("")}function c4(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function c6({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:a,size:o,boostLevel:l}){let u=s(B).useMemo(()=>{let n=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...c0.QrSegment.makeSegments(t)),e),[]);return c0.QrCode.encodeSegments(n,c1[t],r,void 0,void 0,l)},[e,t,r,l]),{cells:c,margin:h,numCells:d,calculatedImageSettings:f}=s(B).useMemo(()=>{let e=u.getModules(),t=null!=i?Math.max(Math.floor(i),0):4*!!n,r=e.length+2*t,s=function(e,t,r,n){if(null==n)return null;let i=e.length+2*r,a=Math.floor(.1*t),s=i/t,o=(n.width||a)*s,l=(n.height||a)*s,u=null==n.x?e.length/2-o/2:n.x*s,c=null==n.y?e.length/2-l/2:n.y*s,h=null==n.opacity?1:n.opacity,d=null;if(n.excavate){let e=Math.floor(u),t=Math.floor(c),r=Math.ceil(o+u-e),n=Math.ceil(l+c-t);d={x:e,y:t,w:r,h:n}}return{x:u,y:c,h:l,w:o,excavation:d,opacity:h,crossOrigin:n.crossOrigin}}(e,o,t,a);return{cells:e,margin:t,numCells:r,calculatedImageSettings:s}},[u,o,a,n,i]);return{qrcode:u,margin:h,cells:c,numCells:d,calculatedImageSettings:f}}var c8=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();s(B).forwardRef(function(e,t){let{value:r,size:n=128,level:i="L",bgColor:a=c2,fgColor:o=c5,includeMargin:l=!1,minVersion:u=1,boostLevel:c,marginSize:h,imageSettings:d}=e,f=cZ(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:p}=f,m=cZ(f,["style"]),g=null==d?void 0:d.src,y=s(B).useRef(null),v=s(B).useRef(null),b=s(B).useCallback(e=>{y.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[x,w]=s(B).useState(!1),{margin:E,cells:S,numCells:k,calculatedImageSettings:C}=c6({value:r,level:i,minVersion:u,boostLevel:c,includeMargin:l,marginSize:h,imageSettings:d,size:n});s(B).useEffect(()=>{if(null!=y.current){let e=y.current,t=e.getContext("2d");if(!t)return;let r=S,i=v.current,s=null!=C&&null!==i&&i.complete&&0!==i.naturalHeight&&0!==i.naturalWidth;s&&null!=C.excavation&&(r=c4(S,C.excavation));let l=window.devicePixelRatio||1;e.height=e.width=n*l;let u=n/k*l;t.scale(u,u),t.fillStyle=a,t.fillRect(0,0,k,k),t.fillStyle=o,c8?t.fill(new Path2D(c3(r,E))):S.forEach(function(e,r){e.forEach(function(e,n){e&&t.fillRect(n+E,r+E,1,1)})}),C&&(t.globalAlpha=C.opacity),s&&t.drawImage(i,C.x+E,C.y+E,C.w,C.h)}}),s(B).useEffect(()=>{w(!1)},[g]);let _=cJ({height:n,width:n},p),T=null;return null!=g&&(T=s(B).createElement("img",{src:g,key:g,style:{display:"none"},onLoad:()=>{w(!0)},ref:v,crossOrigin:null==C?void 0:C.crossOrigin})),s(B).createElement(s(B).Fragment,null,s(B).createElement("canvas",cJ({style:_,height:n,width:n,ref:b,role:"img"},m)),T)}).displayName="QRCodeCanvas";var c7=s(B).forwardRef(function(e,t){let{value:r,size:n=128,level:i="L",bgColor:a=c2,fgColor:o=c5,includeMargin:l=!1,minVersion:u=1,boostLevel:c,title:h,marginSize:d,imageSettings:f}=e,p=cZ(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:m,cells:g,numCells:y,calculatedImageSettings:v}=c6({value:r,level:i,minVersion:u,boostLevel:c,includeMargin:l,marginSize:d,imageSettings:f,size:n}),b=g,x=null;null!=f&&null!=v&&(null!=v.excavation&&(b=c4(g,v.excavation)),x=s(B).createElement("image",{href:f.src,height:v.h,width:v.w,x:v.x+m,y:v.y+m,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));let w=c3(b,m);return s(B).createElement("svg",cJ({height:n,width:n,viewBox:`0 0 ${y} ${y}`,ref:t,role:"img"},p),!!h&&s(B).createElement("title",null,h),s(B).createElement("path",{fill:a,d:`M0,0 h${y}v${y}H0z`,shapeRendering:"crispEdges"}),s(B).createElement("path",{fill:o,d:w,shapeRendering:"crispEdges"}),x)});c7.displayName="QRCodeSVG";let c9=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},he=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")},ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;!o&&(d=64,a||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c9(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):he(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,s=++t<e.length?r[e.charAt(t)]:64,o=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==o)throw new hr;let l=i<<2|a>>4;if(n.push(l),64!==s){let e=a<<4&240|s>>2;if(n.push(e),64!==o){let e=s<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let hn=function(e){let t=c9(e);return ht.encodeByteArray(t,!0)},hi=function(e){return hn(e).replace(/\./g,"")},ha=function(e){try{return ht.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},hs=()=>{try{return function(){if("u">typeof self)return self;if("u">typeof window)return window;if(void 0!==R)return R;throw Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{let e;if("u"<typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&ha(e[1]);return t&&JSON.parse(t)})()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ho=()=>{var e;return null==(e=hs())?void 0:e.config};class hl{wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}function hu(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function hc(e){return(await fetch(e,{credentials:"include"})).ok}let hh={},hd=!1;class hf extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,hf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hp.prototype.create)}}class hp{create(e,...t){var r,n;let i=t[0]||{},a=`${this.service}/${e}`,s=this.errors[e],o=s?(r=s,n=i,r.replace(hm,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${a}).`;return new hf(a,l,i)}constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}}let hm=/\{\$([^}]+)}/g;function hg(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],a=t[i];if(hy(r)&&hy(a)){if(!hg(r,a))return!1}else if(r!==a)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function hy(e){return null!==e&&"object"==typeof e}function hv(e){return e&&e._delegate?e._delegate:e}class hb{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}let hx="[DEFAULT]";class hw{get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new hl;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!=(t=null==e?void 0:e.optional)&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}if(n)return null;throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:hx})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=hx){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=hx){return this.instances.has(e)}getOptions(e=hx){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!=(r=this.onInitCallbacks.get(n))?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var r;let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e)===hx?void 0:r,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=hx){return this.component?this.component.multipleInstances?e:hx:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class hE{addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new hw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}let hS=[];(d=p||(p={}))[d.DEBUG=0]="DEBUG",d[d.VERBOSE=1]="VERBOSE",d[d.INFO=2]="INFO",d[d.WARN=3]="WARN",d[d.ERROR=4]="ERROR",d[d.SILENT=5]="SILENT";let hk={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},hC=p.INFO,h_={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},hT=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=h_[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hI{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?hk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}constructor(e){this.name=e,this._logLevel=hC,this._logHandler=hT,this._userLogHandler=null,hS.push(this)}}function hN(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}let hj=new WeakMap,hA=new WeakMap,hR=new WeakMap,hP=new WeakMap,hO=new WeakMap,hD={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return hA.get(e);if("objectStoreNames"===t)return e.objectStoreNames||hR.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return hL(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function hL(r){if(r instanceof IDBRequest){let e;return(e=new Promise((e,t)=>{let n=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(hL(r.result)),n()},a=()=>{t(r.error),n()};r.addEventListener("success",i),r.addEventListener("error",a)})).then(e=>{e instanceof IDBCursor&&hj.set(e,r)}).catch(()=>{}),hO.set(e,r),e}if(hP.has(r))return hP.get(r);let n=function(r){if("function"==typeof r)return r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(hM(this),e),hL(hj.get(this))}:function(...e){return hL(r.apply(hM(this),e))}:function(e,...t){let n=r.call(hM(this),e,...t);return hR.set(n,e.sort?e.sort():[e]),hL(n)};return r instanceof IDBTransaction&&function(e){if(hA.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});hA.set(e,t)}(r),(e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>r instanceof e)?new Proxy(r,hD):r}(r);return n!==r&&(hP.set(r,n),hO.set(n,r)),n}let hM=e=>hO.get(e),hF=["get","getKey","getAll","getAllKeys","count"],hB=["put","add","delete","clear"],hz=new Map;function h$(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(hz.get(t))return hz.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=hB.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||hF.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),s=a.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&a.done]))[0]};return hz.set(t,a),a}hD=hN(cq({},i=hD),{get:(e,t,r)=>h$(e,t)||i.get(e,t,r),has:(e,t)=>!!h$(e,t)||i.has(e,t)});class hV{getPlatformInfoString(){return this.container.getProviders().map(e=>{let t;if((null==(t=e.getComponent())?void 0:t.type)!=="VERSION")return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}constructor(e){this.container=e}}let hU="@firebase/app",hH="0.14.9",hW=new hI("@firebase/app"),hq="[DEFAULT]",hG={[hU]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},hK=new Map,hQ=new Map,hY=new Map;function hX(e,t){try{e.container.addComponent(t)}catch(r){hW.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function hJ(e){let t=e.name;if(hY.has(t))return hW.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(hY.set(t,e),hK.values()))hX(r,e);for(let t of hQ.values())hX(t,e);return!0}let hZ=new hp("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class h0{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hZ.create("app-deleted",{appName:this._name})}constructor(e,t,r){this._isDeleted=!1,this._options=cq({},e),this._config=cq({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hb("app",()=>this,"PUBLIC"))}}function h1(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=cq({name:hq,automaticDataCollectionEnabled:!0},t),i=n.name;if("string"!=typeof i||!i)throw hZ.create("bad-app-name",{appName:String(i)});if(r||(r=ho()),!r)throw hZ.create("no-options");let a=hK.get(i);if(a)if(hg(r,a.options)&&hg(n,a.config))return a;else throw hZ.create("duplicate-app",{appName:i});let s=new hE(i);for(let e of hY.values())s.addComponent(e);let o=new h0(r,n,s);return hK.set(i,o),o}function h2(e,t,r){var n;let i=null!=(n=hG[e])?n:e;r&&(i+=`-${r}`);let a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hW.warn(e.join(" "));return}hJ(new hb(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let h5="firebase-heartbeat-store",h3=null;function h4(){return h3||(h3=(function(e,{blocked:t,upgrade:r,blocking:n,terminated:i}={}){let a=indexedDB.open(e,1),s=hL(a);return r&&a.addEventListener("upgradeneeded",e=>{r(hL(a.result),e.oldVersion,e.newVersion,hL(a.transaction),e)}),t&&a.addEventListener("blocked",e=>t(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(h5)}catch(e){console.warn(e)}}}).catch(e=>{throw hZ.create("idb-open",{originalErrorMessage:e.message})})),h3}async function h6(e){try{let t=(await h4()).transaction(h5),r=await t.objectStore(h5).get(h7(e));return await t.done,r}catch(e){if(e instanceof hf)hW.warn(e.message);else{let t=hZ.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});hW.warn(t.message)}}}async function h8(e,t){try{let r=(await h4()).transaction(h5,"readwrite"),n=r.objectStore(h5);await n.put(t,h7(e)),await r.done}catch(e){if(e instanceof hf)hW.warn(e.message);else{let t=hZ.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});hW.warn(t.message)}}}function h7(e){return`${e.name}!${e.options.appId}`}class h9{async triggerHeartbeat(){try{var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=de();if((null==(e=this._heartbeatsCache)?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hW.warn(e)}}async getHeartbeatsHeader(){try{var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=de(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),dr(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),dr(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return hW.warn(e),""}}constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new dt(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}}function de(){return new Date().toISOString().substring(0,10)}class dt{async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null==(e=i.error)?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await h6(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){if(await this._canUseIndexedDBPromise){var t;let r=await this.read();return h8(this.app,{lastSentHeartbeatDate:null!=(t=e.lastSentHeartbeatDate)?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){var t;let r=await this.read();return h8(this.app,{lastSentHeartbeatDate:null!=(t=e.lastSentHeartbeatDate)?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function dr(e){return hi(JSON.stringify({version:2,heartbeats:e})).length}hJ(new hb("platform-logger",e=>new hV(e),"PRIVATE")),hJ(new hb("heartbeat",e=>new h9(e),"PRIVATE")),h2(hU,hH,""),h2(hU,hH,"esm2020"),h2("fire-js","");var dn="u">typeof globalThis?globalThis:"u">typeof window?window:void 0!==R?R:"u">typeof self?self:{},di={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.C=Array(this.blockSize),this.o=this.h=0,this.u()}var t=function(){this.blockSize=-1};function r(){}function n(e,t,r){r||(r=0);let n=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;i<16;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];let a=e.g[3],s;s=t+(a^r&(i^a))+n[0]+0xd76aa478|0,s=a+(i^(t=r+(s<<7|s>>>25))&(r^i))+n[1]+0xe8c7b756|0,s=i+(r^(a=t+(s<<12|s>>>20))&(t^r))+n[2]+0x242070db|0,s=r+(t^(i=a+(s<<17|s>>>15))&(a^t))+n[3]+0xc1bdceee|0,s=t+(a^(r=i+(s<<22|s>>>10))&(i^a))+n[4]+0xf57c0faf|0,s=a+(i^(t=r+(s<<7|s>>>25))&(r^i))+n[5]+0x4787c62a|0,s=i+(r^(a=t+(s<<12|s>>>20))&(t^r))+n[6]+0xa8304613|0,s=r+(t^(i=a+(s<<17|s>>>15))&(a^t))+n[7]+0xfd469501|0,s=t+(a^(r=i+(s<<22|s>>>10))&(i^a))+n[8]+0x698098d8|0,s=a+(i^(t=r+(s<<7|s>>>25))&(r^i))+n[9]+0x8b44f7af|0,s=i+(r^(a=t+(s<<12|s>>>20))&(t^r))+n[10]+0xffff5bb1|0,s=r+(t^(i=a+(s<<17|s>>>15))&(a^t))+n[11]+0x895cd7be|0,s=t+(a^(r=i+(s<<22|s>>>10))&(i^a))+n[12]+0x6b901122|0,s=a+(i^(t=r+(s<<7|s>>>25))&(r^i))+n[13]+0xfd987193|0,s=i+(r^(a=t+(s<<12|s>>>20))&(t^r))+n[14]+0xa679438e|0,s=r+(t^(i=a+(s<<17|s>>>15))&(a^t))+n[15]+0x49b40821|0,r=i+(s<<22|s>>>10),s=t+(i^a&(r^i))+n[1]+0xf61e2562|0,t=r+(s<<5|s>>>27),s=a+(r^i&(t^r))+n[6]+0xc040b340|0,a=t+(s<<9|s>>>23),s=i+(t^r&(a^t))+n[11]+0x265e5a51|0,i=a+(s<<14|s>>>18),s=r+(a^t&(i^a))+n[0]+0xe9b6c7aa|0,r=i+(s<<20|s>>>12),s=t+(i^a&(r^i))+n[5]+0xd62f105d|0,t=r+(s<<5|s>>>27),s=a+(r^i&(t^r))+n[10]+0x2441453|0,a=t+(s<<9|s>>>23),s=i+(t^r&(a^t))+n[15]+0xd8a1e681|0,i=a+(s<<14|s>>>18),s=r+(a^t&(i^a))+n[4]+0xe7d3fbc8|0,r=i+(s<<20|s>>>12),s=t+(i^a&(r^i))+n[9]+0x21e1cde6|0,t=r+(s<<5|s>>>27),s=a+(r^i&(t^r))+n[14]+0xc33707d6|0,a=t+(s<<9|s>>>23),s=i+(t^r&(a^t))+n[3]+0xf4d50d87|0,i=a+(s<<14|s>>>18),s=r+(a^t&(i^a))+n[8]+0x455a14ed|0,r=i+(s<<20|s>>>12),s=t+(i^a&(r^i))+n[13]+0xa9e3e905|0,t=r+(s<<5|s>>>27),s=a+(r^i&(t^r))+n[2]+0xfcefa3f8|0,a=t+(s<<9|s>>>23),s=i+(t^r&(a^t))+n[7]+0x676f02d9|0,i=a+(s<<14|s>>>18),s=r+(a^t&(i^a))+n[12]+0x8d2a4c8a|0,s=t+((r=i+(s<<20|s>>>12))^i^a)+n[5]+0xfffa3942|0,s=a+((t=r+(s<<4|s>>>28))^r^i)+n[8]+0x8771f681|0,s=i+((a=t+(s<<11|s>>>21))^t^r)+n[11]+0x6d9d6122|0,s=r+((i=a+(s<<16|s>>>16))^a^t)+n[14]+0xfde5380c|0,s=t+((r=i+(s<<23|s>>>9))^i^a)+n[1]+0xa4beea44|0,s=a+((t=r+(s<<4|s>>>28))^r^i)+n[4]+0x4bdecfa9|0,s=i+((a=t+(s<<11|s>>>21))^t^r)+n[7]+0xf6bb4b60|0,s=r+((i=a+(s<<16|s>>>16))^a^t)+n[10]+0xbebfbc70|0,s=t+((r=i+(s<<23|s>>>9))^i^a)+n[13]+0x289b7ec6|0,s=a+((t=r+(s<<4|s>>>28))^r^i)+n[0]+0xeaa127fa|0,s=i+((a=t+(s<<11|s>>>21))^t^r)+n[3]+0xd4ef3085|0,s=r+((i=a+(s<<16|s>>>16))^a^t)+n[6]+0x4881d05|0,s=t+((r=i+(s<<23|s>>>9))^i^a)+n[9]+0xd9d4d039|0,s=a+((t=r+(s<<4|s>>>28))^r^i)+n[12]+0xe6db99e5|0,s=i+((a=t+(s<<11|s>>>21))^t^r)+n[15]+0x1fa27cf8|0,s=r+((i=a+(s<<16|s>>>16))^a^t)+n[2]+0xc4ac5665|0,r=i+(s<<23|s>>>9),s=t+(i^(r|~a))+n[0]+0xf4292244|0,t=r+(s<<6|s>>>26),s=a+(r^(t|~i))+n[7]+0x432aff97|0,a=t+(s<<10|s>>>22),s=i+(t^(a|~r))+n[14]+0xab9423a7|0,i=a+(s<<15|s>>>17),s=r+(a^(i|~t))+n[5]+0xfc93a039|0,r=i+(s<<21|s>>>11),s=t+(i^(r|~a))+n[12]+0x655b59c3|0,t=r+(s<<6|s>>>26),s=a+(r^(t|~i))+n[3]+0x8f0ccc92|0,a=t+(s<<10|s>>>22),s=i+(t^(a|~r))+n[10]+0xffeff47d|0,i=a+(s<<15|s>>>17),s=r+(a^(i|~t))+n[1]+0x85845dd1|0,r=i+(s<<21|s>>>11),s=t+(i^(r|~a))+n[8]+0x6fa87e4f|0,t=r+(s<<6|s>>>26),s=a+(r^(t|~i))+n[15]+0xfe2ce6e0|0,a=t+(s<<10|s>>>22),s=i+(t^(a|~r))+n[6]+0xa3014314|0,i=a+(s<<15|s>>>17),s=r+(a^(i|~t))+n[13]+0x4e0811a1|0,r=i+(s<<21|s>>>11),s=t+(i^(r|~a))+n[4]+0xf7537e82|0,t=r+(s<<6|s>>>26),s=a+(r^(t|~i))+n[11]+0xbd3af235|0,a=t+(s<<10|s>>>22),s=i+(t^(a|~r))+n[2]+0x2ad7d2bb|0,i=a+(s<<15|s>>>17),s=r+(a^(i|~t))+n[9]+0xeb86d391|0,e.g[0]=e.g[0]+t|0,e.g[1]=e.g[1]+(i+(s<<21|s>>>11))|0,e.g[2]=e.g[2]+i|0,e.g[3]=e.g[3]+a|0}function i(e,t){this.h=t;let r=[],n=!0;for(let i=e.length-1;i>=0;i--){let a=0|e[i];n&&a==t||(r[i]=a,n=!1)}this.g=r}r.prototype=t.prototype,e.F=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.D=function(e,r,n){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[r].apply(e,i)},e.prototype.u=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.v=function(e,t){void 0===t&&(t=e.length);let r=t-this.blockSize,i=this.C,a=this.h,s=0;for(;s<t;){if(0==a)for(;s<=r;)n(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[a++]=e.charCodeAt(s++),a==this.blockSize){n(this,i),a=0;break}}else for(;s<t;)if(i[a++]=e[s++],a==this.blockSize){n(this,i),a=0;break}}this.h=a,this.o+=t},e.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var r=e.length-8;r<e.length;++r)e[r]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,r=0;r<4;++r)for(let n=0;n<32;n+=8)e[t++]=this.g[r]>>>n&255;return e};var a,s={};function o(e){var t;return -128<=e&&e<128?(t=function(e){return new i([0|e],e<0?-1:0)},Object.prototype.hasOwnProperty.call(s,e)?s[e]:s[e]=t(e)):new i([0|e],e<0?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return u;if(e<0)return p(l(-e));let t=[],r=1;for(let n=0;e>=r;n++)t[n]=e/r|0,r*=0x100000000;return new i(t,0)}var u=o(0),c=o(1),h=o(0x1000000);function d(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function f(e){return -1==e.h}function p(e){let t=e.g.length,r=[];for(let n=0;n<t;n++)r[n]=~e.g[n];return new i(r,~e.h).add(c)}function y(e,t){return e.add(p(t))}function v(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function b(e,t){this.g=e,this.h=t}function x(e,t){if(d(t))throw Error("division by zero");if(d(e))return new b(u,u);if(f(e))return t=x(p(e),t),new b(p(t.g),p(t.h));if(f(t))return t=x(e,p(t)),new b(p(t.g),t.h);if(e.g.length>30){if(f(e)||f(t))throw Error("slowDivide_ only works with positive integers.");for(var r=c,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=E(r,1),a=E(n,1);for(n=E(n,2),r=E(r,2);!d(n);){var s=a.add(n);0>=s.l(e)&&(i=i.add(r),a=s),n=E(n,1),r=E(r,1)}return t=y(e,i.j(t)),new b(i,t)}for(i=u;e.l(t)>=0;){for(n=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))<=48?1:Math.pow(2,n-48),s=(a=l(r)).j(t);f(s)||s.l(e)>0;)r-=n,s=(a=l(r)).j(t);d(a)&&(a=c),i=i.add(a),e=y(e,s)}return new b(i,e)}function w(e){let t=e.g.length+1,r=[];for(let n=0;n<t;n++)r[n]=e.i(n)<<1|e.i(n-1)>>>31;return new i(r,e.h)}function E(e,t){let r=t>>5;t%=32;let n=e.g.length-r,a=[];for(let i=0;i<n;i++)a[i]=t>0?e.i(i+r)>>>t|e.i(i+r+1)<<32-t:e.i(i+r);return new i(a,e.h)}(a=i.prototype).m=function(){if(f(this))return-p(this).m();let e=0,t=1;for(let r=0;r<this.g.length;r++){let n=this.i(r);e+=(n>=0?n:0x100000000+n)*t,t*=0x100000000}return e},a.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(f(this))return"-"+p(this).toString(e);let t=l(Math.pow(e,6));var r=this;let n="";for(;;){let i=x(r,t).g,a=(((r=y(r,i.j(t))).g.length>0?r.g[0]:r.h)>>>0).toString(e);if(d(r=i))return a+n;for(;a.length<6;)a="0"+a;n=a+n}},a.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},a.l=function(e){return f(e=y(this,e))?-1:+!d(e)},a.abs=function(){return f(this)?p(this):this},a.add=function(e){let t=Math.max(this.g.length,e.g.length),r=[],n=0;for(let i=0;i<=t;i++){let t=n+(65535&this.i(i))+(65535&e.i(i)),a=(t>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);n=a>>>16,t&=65535,a&=65535,r[i]=a<<16|t}return new i(r,-0x80000000&r[r.length-1]?-1:0)},a.j=function(e){if(d(this)||d(e))return u;if(f(this))return f(e)?p(this).j(p(e)):p(p(this).j(e));if(f(e))return p(this.j(p(e)));if(0>this.l(h)&&0>e.l(h))return l(this.m()*e.m());let t=this.g.length+e.g.length,r=[];for(var n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(let t=0;t<e.g.length;t++){let i=this.i(n)>>>16,a=65535&this.i(n),s=e.i(t)>>>16,o=65535&e.i(t);r[2*n+2*t]+=a*o,v(r,2*n+2*t),r[2*n+2*t+1]+=i*o,v(r,2*n+2*t+1),r[2*n+2*t+1]+=a*s,v(r,2*n+2*t+1),r[2*n+2*t+2]+=i*s,v(r,2*n+2*t+2)}for(e=0;e<t;e++)r[e]=r[2*e+1]<<16|r[2*e];for(e=t;e<2*t;e++)r[e]=0;return new i(r,0)},a.B=function(e){return x(this,e).h},a.and=function(e){let t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)&e.i(n);return new i(r,this.h&e.h)},a.or=function(e){let t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)|e.i(n);return new i(r,this.h|e.h)},a.xor=function(e){let t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)^e.i(n);return new i(r,this.h^e.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,g=di.Md5=e,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=l,i.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if((r=r||10)<2||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');let n=l(Math.pow(r,8)),i=u;for(let e=0;e<t.length;e+=8){var a=Math.min(8,t.length-e);let s=parseInt(t.substring(e,e+a),r);a<8?(a=l(Math.pow(r,a)),i=i.j(a).add(l(s))):i=(i=i.j(n)).add(l(s))}return i},m=di.Integer=i}).apply(void 0!==dn?dn:"u">typeof self?self:"u">typeof window?window:{});var da="u">typeof globalThis?globalThis:"u">typeof window?window:void 0!==R?R:"u">typeof self?self:{},ds={};(function(){var e,t,r=Object.defineProperty,n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof da&&da];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function i(e,t){if(t)e:{var i=n;e=e.split(".");for(var a=0;a<e.length-1;a++){var s=e[a];if(!(s in i))break e;i=i[s]}(t=t(a=i[e=e[e.length-1]]))!=a&&null!=t&&r(i,e,{configurable:!0,writable:!0,value:t})}}i("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(e){return e||function(e){var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push([t,e[t]]);return r}});var a=a||{},s=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,r){return e.call.apply(e.bind,arguments)}function u(e,t,r){return(u=l).apply(null,arguments)}function c(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function r(){}r.prototype=t.prototype,e.Z=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Ob=function(e,r,n){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[r].apply(e,i)}}var d="u">typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function f(e){let t=e.length;if(t>0){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function p(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];var r=typeof n;if("array"==(r="object"!=r?r:n?Array.isArray(n)?"array":r:"null")||"object"==r&&"number"==typeof n.length){r=e.length||0;let t=n.length||0;e.length=r+t;for(let i=0;i<t;i++)e[r+i]=n[i]}else e.push(n)}}var m=new class{get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}(()=>new g,e=>e.reset());class g{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}let C,_=!1,T=new class{add(e,t){let r=m.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}constructor(){this.h=this.g=null}},I=()=>{let e=Promise.resolve(void 0);C=()=>{e.then(N)}};function N(){let e;for(var t;e=null,T.g&&(e=T.g,T.g=T.g.next,T.g||(T.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){s.setTimeout(()=>{throw e},0)}(e)}m.j(t),m.h<100&&(m.h++,t.next=m.g,m.g=t)}_=!1}function j(){this.u=this.u,this.C=this.C}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}j.prototype.u=!1,j.prototype.dispose=function(){this.u||(this.u=!0,this.N())},j.prototype[Symbol.dispose]=function(){this.dispose()},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}function O(e,t){A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}h(O,A),O.prototype.init=function(e,t){let r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement)),this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&O.Z.h.call(this)},O.prototype.h=function(){O.Z.h.call(this);let e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),L=0;function M(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++L,this.da=this.fa=!1}function F(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function B(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function z(e){let t={};for(let r in e)t[r]=e[r];return t}let $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<$.length;t++)r=$[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function U(e){this.src=e,this.g={},this.h=0}function H(e,t){let r=t.type;if(r in e.g){var n,i=e.g[r],a=Array.prototype.indexOf.call(i,t,void 0);(n=a>=0)&&Array.prototype.splice.call(i,a,1),n&&(F(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function W(e,t,r,n){for(let i=0;i<e.length;++i){let a=e[i];if(!a.da&&a.listener==t&&!!r==a.capture&&a.ha==n)return i}return -1}U.prototype.add=function(e,t,r,n,i){let a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);let s=W(e,t,n,i);return s>-1?(t=e[s],r||(t.fa=!1)):((t=new M(t,this.src,a,!!n,i)).fa=r,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),G={};function K(e,t,r,n,i,a){if(!t)throw Error("Invalid event type");let s=o(i)?!!i.capture:!!i,l=J(e);if(l||(e[q]=l=new U(e)),(r=l.add(t,r,n,s,a)).proxy)return r;if(n=function e(t){return X.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)R||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(Y(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[D])H(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(Y(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=J(t))?(H(r,e),0==r.h&&(r.src=null,t[q]=null)):F(e)}}}function Y(e){return e in G?G[e]:G[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new O(t,this);let r=e.listener,n=e.ha||e.src;e.fa&&Q(e),e=r.call(n,t)}return e}function J(e){return(e=e[q])instanceof U?e:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(e){return"function"==typeof e?e:(e[Z]||(e[Z]=function(t){return e.handleEvent(t)}),e[Z])}function et(){j.call(this),this.i=new U(this),this.M=this,this.G=null}function er(e,t){let r,n;var i,a=e.G;if(a)for(i=[];a;a=a.G)i.push(a);if(e=e.M,a=t.type||t,"string"==typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var s=t;V(t=new A(a,e),s)}if(s=!0,i)for(n=i.length-1;n>=0;n--)s=en(r=t.g=i[n],a,!0,t)&&s;if(s=en(r=t.g=e,a,!0,t)&&s,s=en(r,a,!1,t)&&s,i)for(n=0;n<i.length;n++)s=en(r=t.g=i[n],a,!1,t)&&s}function en(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){let s=t[a];if(s&&!s.da&&s.capture==r){let t=s.listener,r=s.ha||s.src;s.fa&&H(e.i,s),i=!1!==t.call(r,n)&&i}}return i&&!n.defaultPrevented}h(et,j),et.prototype[D]=!0,et.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,a){if(Array.isArray(r))for(var s=0;s<r.length;s++)e(t,r[s],n,i,a);else(i=o(i)?!!i.capture:!!i,n=ee(n),t&&t[D])?(t=t.i,(s=String(r).toString())in t.g&&(n=W(r=t.g[s],n,i,a))>-1&&(F(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[s],t.h--))):t&&(t=J(t))&&(r=t.g[r.toString()],t=-1,r&&(t=W(r,n,i,a)),(n=t>-1?r[t]:null)&&Q(n))}(this,e,t,r,n)},et.prototype.N=function(){if(et.Z.N.call(this),this.i){var e=this.i;for(let t in e.g){let r=e.g[t];for(let e=0;e<r.length;e++)F(r[e]);delete e.g[t],e.h--}}this.G=null},et.prototype.J=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},et.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ei extends j{j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=function(e,t){if("function"!=typeof e)if(e&&"function"==typeof e.handleEvent)e=u(e.handleEvent,e);else throw Error("Invalid listener argument");return Number(t)>0x7fffffff?-1:s.setTimeout(e,t||0)}(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}}function ea(e){j.call(this),this.h=e,this.g={}}h(ea,j);var es=[];function eo(e){B(e.g,function(e,t){this.g.hasOwnProperty(t)&&Q(e)},e),e.g={}}ea.prototype.N=function(){ea.Z.N.call(this),eo(this)},ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=s.JSON.stringify,eu=s.JSON.parse,ec=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function eh(){}function ed(){}var ef={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ep(){A.call(this,"d")}function em(){A.call(this,"c")}h(ep,A),h(em,A);var eg={},ey=null;function ev(){return ey=ey||new et}function eb(e){A.call(this,eg.Ia,e)}function ex(e){let t=ev();er(t,new eb(t))}function ew(e,t){A.call(this,eg.STAT_EVENT,e),this.stat=t}function eE(e){let t=ev();er(t,new ew(t,e))}function eS(e,t){A.call(this,eg.Ja,e),this.size=t}function ek(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function eC(){this.g=!0}function e_(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{let a=JSON.parse(t);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var r=a[e];if(!(r.length<2)){var n=r[1];if(Array.isArray(n)&&!(n.length<1)){var i=n[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<n.length;e++)n[e]=""}}}}return el(a)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eg.Ia="serverreachability",h(eb,A),eg.STAT_EVENT="statevent",h(ew,A),eg.Ja="timingevent",h(eS,A),eC.prototype.ua=function(){this.g=!1},eC.prototype.info=function(){};var eT={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eI={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function eN(){}function ej(e){return encodeURIComponent(String(e))}function eA(e,t,r,n){this.j=e,this.i=t,this.l=r,this.S=n||1,this.V=new ea(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eR}function eR(){this.i=null,this.g="",this.h=!1}h(eN,eh),eN.prototype.g=function(){return new XMLHttpRequest},e=new eN;var eP={},eO={};function eD(e,t,r){e.M=1,e.A=e4(e0(t)),e.u=r,e.R=!0,eL(e,null)}function eL(e,t){e.F=Date.now(),eF(e),e.B=e0(e.A);var r,n,i,a,s,l,c=e.B,h=e.S;Array.isArray(h)||(h=[String(h)]),tu(c.i,"t",h),e.C=0,c=e.j.L,e.h=new eR,e.g=tQ(e.j,c?t:null,!e.u),e.P>0&&(e.O=new ei(u(e.Y,e,e.g),e.P)),t=e.V,c=e.g,h=e.ba;var d="readystatechange";Array.isArray(d)||(d&&(es[0]=d.toString()),d=es);for(let e=0;e<d.length;e++){let r=function e(t,r,n,i,a){if(i&&i.once)return function e(t,r,n,i,a){if(Array.isArray(r)){for(let s=0;s<r.length;s++)e(t,r[s],n,i,a);return null}return n=ee(n),t&&t[D]?t.K(r,n,o(i)?!!i.capture:!!i,a):K(t,r,n,!0,i,a)}(t,r,n,i,a);if(Array.isArray(r)){for(let s=0;s<r.length;s++)e(t,r[s],n,i,a);return null}return n=ee(n),t&&t[D]?t.J(r,n,o(i)?!!i.capture:!!i,a):K(t,r,n,!1,i,a)}(c,d[e],h||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}t=e.J?z(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ex(),r=e.i,n=e.v,i=e.B,a=e.l,s=e.S,l=e.u,r.info(function(){if(r.g)if(l){var e="",t=l.split("&");for(let r=0;r<t.length;r++){var o=t[r].split("=");if(o.length>1){let t=o[0];o=o[1];let r=t.split("_");e=r.length>=2&&"type"==r[1]?e+(t+"=")+o+"&":e+(t+"=redacted&")}}}else e=null;else e=l;return"XMLHTTP REQ ("+a+") [attempt "+s+"]: "+n+"\n"+i+"\n"+e})}function eM(e){return!!e.g&&"GET"==e.v&&2!=e.M&&e.j.Aa}function eF(e){e.T=Date.now()+e.H,eB(e,e.H)}function eB(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=ek(u(e.aa,e),t)}function ez(e){e.D&&(s.clearTimeout(e.D),e.D=null)}function e$(e){0==e.j.I||e.K||tH(e.j,e)}function eV(e){ez(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,eo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function eU(e,t){try{var r=e.j;if(0!=r.I&&(r.g==e||eK(r.h,e))){if(!e.L&&eK(r.h,e)&&3==r.I){try{var n=r.Ba.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.v){if(r.g)if(r.g.F+3e3<e.F)tU(r),tP(r);else break e;tz(r),eE(18)}}else r.xa=i[1],0<r.xa-r.K&&i[2]<37500&&r.F&&0==r.A&&!r.C&&(r.C=ek(u(r.Va,r),6e3));1>=eG(r.h)&&r.ta&&(r.ta=void 0)}else tq(r,11)}else if((e.L||r.g==e)&&tU(r),!P(t))for(i=r.Ba.g.parse(t),t=0;t<i.length;t++){let o=i[t],l=o[0];if(!(l<=r.K))if(r.K=l,o=o[1],2==r.I)if("c"==o[0]){r.M=o[1],r.ba=o[2];let t=o[3];null!=t&&(r.ka=t,r.j.info("VER="+r.ka));let i=o[4];null!=i&&(r.za=i,r.j.info("SVER="+r.za));let l=o[5];null!=l&&"number"==typeof l&&l>0&&(r.O=n=1.5*l,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=n.h;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(eQ(a,a.h),a.h=null))}if(n.G){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.wa=e,e3(n.J,n.G,e))}}if(r.I=3,r.l&&r.l.ra(),r.aa&&(r.T=Date.now()-e.F,r.j.info("Handshake RTT: "+r.T+"ms")),(n=r).na=tK(n,n.L?n.ba:null,n.W),e.L){eY(n.h,e);var s=n.O;s&&(e.H=s),e.D&&(ez(e),eF(e)),n.g=e}else tB(n);r.i.length>0&&tD(r)}else"stop"!=o[0]&&"close"!=o[0]||tq(r,7);else 3==r.I&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?tq(r,7):tR(r):"noop"!=o[0]&&r.l&&r.l.qa(o),r.A=0)}}ex(4)}catch(e){}}eA.prototype.ba=function(e){e=e.target;let t=this.O;t&&3==tI(e)?t.j():this.Y(e)},eA.prototype.Y=function(e){try{if(e==this.g)e:{let f=tI(this.g),p=this.g.ya(),m=this.g.ca();if(!(f<3)&&(3!=f||this.g&&(this.h.h||this.g.la()||tN(this.g)))){this.K||4!=f||7==p||(8==p||m<=0?ex(3):ex(2)),ez(this);var t=this.g.ca();this.X=t;var r=function(e){if(!eM(e))return e.g.la();let t=tN(e.g);if(""===t)return"";let r="",n=t.length,i=4==tI(e.g);if(!e.h.i){if("u"<typeof TextDecoder)return eV(e),e$(e),"";e.h.i=new s.TextDecoder}for(let a=0;a<n;a++)e.h.h=!0,r+=e.h.i.decode(t[a],{stream:!(i&&a==n-1)});return t.length=0,e.h.g+=r,e.C=0,e.h.g}(this);if(this.o=200==t,n=this.i,i=this.v,a=this.B,o=this.l,l=this.S,n.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+l+"]: "+i+"\n"+a+"\n"+f+" "+t}),this.o){if(this.U&&!this.L){t:{if(this.g){var n,i,a,o,l,u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var h=u;break t}}h=null}if(e=h)e_(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,eU(this,e);else{this.o=!1,this.m=3,eE(12),eV(this),e$(this);break e}}if(this.R){let t;for(e=!0;!this.K&&this.C<r.length;)if((t=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eO:isNaN(r=Number(t.substring(r,n)))?eP:(n+=1)+r>t.length?eO:(t=t.slice(n,n+r),e.C=n+r,t)}(this,r))==eO){4==f&&(this.m=4,eE(14),e=!1),e_(this.i,this.l,null,"[Incomplete Response]");break}else if(t==eP){this.m=4,eE(15),e_(this.i,this.l,r,"[Invalid Chunk]"),e=!1;break}else e_(this.i,this.l,t,null),eU(this,t);if(eM(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=r.length||this.h.h||(this.m=1,eE(16),e=!1),this.o=this.o&&e,e){if(r.length>0&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.aa&&!d.P&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),t$(d),d.P=!0,eE(11))}}else e_(this.i,this.l,r,"[Invalid Chunked Response]"),eV(this),e$(this)}else e_(this.i,this.l,r,null),eU(this,r);4==f&&eV(this),this.o&&!this.K&&(4==f?tH(this.j,this):(this.o=!1,eF(this)))}else(function(e){let t={};e=(e.g&&tI(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(P(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;t>0&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let a=t[i]||[];t[i]=a,a.push(r)}var n=function(e){return e.join(", ")};for(let e in t)n.call(void 0,t[e],e,t)})(this.g),400==t&&r.indexOf("Unknown SID")>0?(this.m=3,eE(12)):(this.m=0,eE(13)),eV(this),e$(this)}}}catch(e){}finally{}},eA.prototype.cancel=function(){this.K=!0,eV(this)},eA.prototype.aa=function(){var e,t;this.D=null;let r=Date.now();r-this.T>=0?(e=this.i,t=this.B,e.info(function(){return"TIMEOUT: "+t}),2!=this.M&&(ex(),eE(17)),eV(this),this.m=2,e$(this)):eB(this,this.T-r)};var eH=class{constructor(e,t){this.g=e,this.map=t}};function eW(e){this.l=e||10,e=s.PerformanceNavigationTiming?(e=s.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function eq(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eG(e){return e.h?1:e.g?e.g.size:0}function eK(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function eQ(e,t){e.g?e.g.add(t):e.h=t}function eY(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function eX(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.G);return t}return f(e.i)}eW.prototype.cancel=function(){if(this.i=eX(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var eJ=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eZ(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof eZ?(this.l=e.l,e1(this,e.j),this.o=e.o,this.g=e.g,e2(this,e.u),this.h=e.h,e5(this,tc(e.i)),this.m=e.m):e&&(t=String(e).match(eJ))?(this.l=!1,e1(this,t[1]||"",!0),this.o=e6(t[2]||""),this.g=e6(t[3]||"",!0),e2(this,t[4]),this.h=e6(t[5]||"",!0),e5(this,t[6]||"",!0),this.m=e6(t[7]||"")):(this.l=!1,this.i=new ti(null,this.l))}function e0(e){return new eZ(e)}function e1(e,t,r){e.j=r?e6(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e2(e,t){if(t){if(isNaN(t=Number(t))||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function e5(e,t,r){var n,i;t instanceof ti?(e.i=t,n=e.i,(i=e.l)&&!n.j&&(ta(n),n.i=null,n.g.forEach(function(e,t){let r=t.toLowerCase();t!=r&&(ts(this,t),tu(this,r,e))},n)),n.j=i):(r||(t=e8(t,tr)),e.i=new ti(t,e.l))}function e3(e,t,r){e.i.set(t,r)}function e4(e){return e3(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function e6(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function e8(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,e7),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function e7(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}eZ.prototype.toString=function(){let e=[];var t=this.j;t&&e.push(e8(t,e9,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(e8(t,e9,!0),"@"),e.push(ej(r).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.u)&&e.push(":",String(r))),(r=this.h)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(e8(r,"/"==r.charAt(0)?tt:te,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",e8(r,tn)),e.join("")},eZ.prototype.resolve=function(e){let t=e0(this),r=!!e.j;r?e1(t,e.j):r=!!e.o,r?t.o=e.o:r=!!e.g,r?t.g=e.g:r=null!=e.u;var n=e.h;if(r)e2(t,e.u);else if(r=!!e.h){if("/"!=n.charAt(0))if(this.g&&!this.h)n="/"+n;else{var i=t.h.lastIndexOf("/");-1!=i&&(n=t.h.slice(0,i+1)+n)}if(".."==(i=n)||"."==i)n="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){n=0==i.lastIndexOf("/",0),i=i.split("/");let e=[];for(let t=0;t<i.length;){let r=i[t++];"."==r?n&&t==i.length&&e.push(""):".."==r?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),n&&t==i.length&&e.push("")):(e.push(r),n=!0)}n=e.join("/")}else n=i}return r?t.h=n:r=""!==e.i.toString(),r?e5(t,tc(e.i)):r=!!e.m,r&&(t.m=e.m),t};var e9=/[#\/\?@]/g,te=/[#\?:]/g,tt=/[#\?]/g,tr=/[#\?@]/g,tn=/#/g;function ti(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ta(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let r=0;r<e.length;r++){let n=e[r].indexOf("="),i,a=null;n>=0?(i=e[r].substring(0,n),a=e[r].substring(n+1)):i=e[r],t(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function ts(e,t){ta(e),t=th(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function to(e,t){return ta(e),t=th(e,t),e.g.has(t)}function tl(e,t){ta(e);let r=[];if("string"==typeof t)to(e,t)&&(r=r.concat(e.g.get(th(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)r=r.concat(e[t]);return r}function tu(e,t,r){ts(e,t),r.length>0&&(e.i=null,e.g.set(th(e,t),f(r)),e.h+=r.length)}function tc(e){let t=new ti;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function th(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function td(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tf(){this.g=new ec}function tp(e){this.i=e.Sb||null,this.h=e.ab||!1}function tm(e,t){et.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function tg(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function ty(e){e.readyState=4,e.l=null,e.j=null,e.B=null,tv(e)}function tv(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tb(e){let t="";return B(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tx(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tb(r),"string"==typeof e?null!=r&&ej(r):e3(e,t,r))}function tw(e){et.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=ti.prototype).add=function(e,t){ta(this),this.i=null,e=th(this,e);let r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},t.forEach=function(e,t){ta(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},t.set=function(e,t){return ta(this),this.i=null,to(this,e=th(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},t.get=function(e,t){return e&&(e=tl(this,e)).length>0?String(e[0]):t},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(let n=0;n<t.length;n++){var r=t[n];let i=ej(r);r=tl(this,r);for(let t=0;t<r.length;t++){let n=i;""!==r[t]&&(n+="="+ej(r[t])),e.push(n)}}return this.i=e.join("&")},h(tp,eh),tp.prototype.g=function(){return new tm(this.i,this.h)},h(tm,et),(t=tm.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,tv(this)},t.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;let t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||s).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,ty(this)),this.readyState=0},t.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tv(this)),this.g&&(this.readyState=3,tv(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tg(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ty(this):tv(this),3==this.readyState&&tg(this)}},t.Oa=function(e){this.g&&(this.response=this.responseText=e,ty(this))},t.Na=function(e){this.g&&(this.response=e,ty(this))},t.ga=function(){this.g&&ty(this)},t.setRequestHeader=function(e,t){this.A.append(e,t)},t.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tm.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(tw,et);var tE=/^https?$/i,tS=["POST","PUT"];function tk(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,tC(e),tT(e)}function tC(e){e.A||(e.A=!0,er(e,"complete"),er(e,"error"))}function t_(e){if(e.h&&void 0!==a){if(e.v&&4==tI(e))setTimeout(e.Ca.bind(e),0);else if(er(e,"readystatechange"),4==tI(e)){e.h=!1;try{let a=e.ca();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===a){let t=String(e.D).match(eJ)[1]||null;!t&&s.self&&s.self.location&&(t=s.self.location.protocol.slice(0,-1)),r=!tE.test(t?t.toLowerCase():"")}t=r}if(t)er(e,"complete"),er(e,"success");else{e.o=6;try{var i=tI(e)>2?e.g.statusText:""}catch(e){i=""}e.l=i+" ["+e.ca()+"]",tC(e)}}finally{tT(e)}}}}function tT(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);let r=e.g;e.g=null,t||er(e,"ready");try{r.onreadystatechange=null}catch(e){}}}function tI(e){return e.g?e.g.readyState:0}function tN(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tj(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tA(e){this.za=0,this.i=[],this.j=new eC,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=tj("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=tj("baseRetryDelayMs",5e3,e),this.Za=tj("retryDelaySeedMs",1e4,e),this.Ta=tj("forwardChannelMaxRetries",2,e),this.va=tj("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new eW(e&&e.concurrentRequestLimit),this.Ba=new tf,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function tR(e){if(tO(e),3==e.I){var t=e.V++,r=e0(e.J);if(e3(r,"SID",e.M),e3(r,"RID",t),e3(r,"TYPE","terminate"),tM(e,r),(t=new eA(e,e.j,t)).M=2,t.A=e4(e0(r)),r=!1,s.navigator&&s.navigator.sendBeacon)try{r=s.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!r&&s.Image&&((new Image).src=t.A,r=!0),r||(t.g=tQ(t.j,null),t.g.ea(t.A)),t.F=Date.now(),eF(t)}tG(e)}function tP(e){e.g&&(t$(e),e.g.cancel(),e.g=null)}function tO(e){tP(e),e.v&&(s.clearTimeout(e.v),e.v=null),tU(e),e.h.cancel(),e.m&&("number"==typeof e.m&&s.clearTimeout(e.m),e.m=null)}function tD(e){if(!eq(e.h)&&!e.m){e.m=!0;var t=e.Ea;C||I(),_||(C(),_=!0),T.add(t,e),e.D=0}}function tL(e,t){var r;r=t?t.l:e.V++;let n=e0(e.J);e3(n,"SID",e.M),e3(n,"RID",r),e3(n,"AID",e.K),tM(e,n),e.u&&e.o&&tx(n,e.u,e.o),r=new eA(e,e.j,r,e.D+1),null===e.u&&(r.J=e.o),t&&(e.i=t.G.concat(e.i)),t=tF(e,r,1e3),r.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),eQ(e.h,r),eD(r,n,t)}function tM(e,t){e.H&&B(e.H,function(e,r){e3(t,r,e)}),e.l&&B({},function(e,r){e3(t,r,e)})}function tF(e,t,r){r=Math.min(e.i.length,r);let n=e.l?u(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?r>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let u=0;u<r;u++){var a=i[u].g;let r=i[u].map;if((a-=t)<0)t=Math.max(0,i[u].g-100),l=!1;else try{a="req"+a+"_";try{var s=r instanceof Map?r:Object.entries(r);for(let[t,r]of s){let n=r;o(r)&&(n=el(r)),e.push(a+t+"="+encodeURIComponent(n))}}catch(t){throw e.push(a+"type="+encodeURIComponent("_badmap")),t}}catch(e){n&&n(r)}}if(l){s=e.join("&");break e}}s=void 0}return t.G=e=e.i.splice(0,r),s}function tB(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;C||I(),_||(C(),_=!0),T.add(t,e),e.A=0}}function tz(e){return!e.g&&!e.v&&!(e.A>=3)&&(e.Y++,e.v=ek(u(e.Da,e),tW(e,e.A)),e.A++,!0)}function t$(e){null!=e.B&&(s.clearTimeout(e.B),e.B=null)}function tV(e){e.g=new eA(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=e0(e.na);e3(t,"RID","rpc"),e3(t,"SID",e.M),e3(t,"AID",e.K),e3(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&e3(t,"TO",e.ia),e3(t,"TYPE","xmlhttp"),tM(e,t),e.u&&e.o&&tx(t,e.u,e.o),e.O&&(e.g.H=e.O);var r=e.g;e=e.ba,r.M=1,r.A=e4(e0(t)),r.u=null,r.R=!0,eL(r,e)}function tU(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function tH(e,t){var r,n=null;if(e.g==t){tU(e),t$(e),e.g=null;var i=2}else{if(!eK(e.h,t))return;n=t.G,eY(e.h,t),i=1}if(0!=e.I){if(t.o)if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.F;var a=e.D;er(i=ev(),new eS(i,n)),tD(e)}else tB(e);else if(3==(a=t.m)||0==a&&t.X>0||!(1==i&&(r=t,!(eG(e.h)>=e.h.j-!!e.m)&&(e.m?(e.i=r.G.concat(e.i),!0):1!=e.I&&2!=e.I&&!(e.D>=(e.Sa?0:e.Ta))&&(e.m=ek(u(e.Ea,e,r),tW(e,e.D)),e.D++,!0)))||2==i&&tz(e)))switch(n&&n.length>0&&((t=e.h).i=t.i.concat(n)),a){case 1:tq(e,5);break;case 4:tq(e,10);break;case 3:tq(e,6);break;default:tq(e,2)}}}function tW(e,t){let r=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(r*=2),r*t}function tq(e,t){if(e.j.info("Error code "+t),2==t){let t,a,o;var r,n=u(e.bb,e),i=e.Ua;let l=!i;i=new eZ(i||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||e1(i,"https"),e4(i),l?function(e,t){let r=new eC;if(s.Image){let n=new Image;n.onload=c(td,r,"TestLoadImage: loaded",!0,t,n),n.onerror=c(td,r,"TestLoadImage: error",!1,t,n),n.onabort=c(td,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=c(td,r,"TestLoadImage: timeout",!1,t,n),s.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n):(r=i.toString(),t=new eC,a=new AbortController,o=setTimeout(()=>{a.abort(),td(t,"TestPingServer: timeout",!1,n)},1e4),fetch(r,{signal:a.signal}).then(e=>{clearTimeout(o),e.ok?td(t,"TestPingServer: ok",!0,n):td(t,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(o),td(t,"TestPingServer: error",!1,n)}))}else eE(2);e.I=0,e.l&&e.l.pa(t),tG(e),tO(e)}function tG(e){if(e.I=0,e.ja=[],e.l){let t=eX(e.h);(0!=t.length||0!=e.i.length)&&(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,f(e.i),e.i.length=0),e.l.oa()}}function tK(e,t,r){var n=r instanceof eZ?e0(r):new eZ(r);if(""!=n.g)t&&(n.g=t+"."+n.g),e2(n,n.u);else{var i=s.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;let e=new eZ(null);n&&e1(e,n),t&&(e.g=t),i&&e2(e,i),r&&(e.h=r),n=e}return r=e.G,t=e.wa,r&&t&&e3(n,r,t),e3(n,"VER",e.ka),tM(e,n),n}function tQ(e,t,r){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tw(e.Aa&&!e.ma?new tp({ab:r}):e.ma)).Fa(e.L),t}function tY(){}function tX(){}function tJ(e,t){et.call(this),this.g=new tA(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!P(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t1(this)}function tZ(e){ep.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t0(){em.call(this),this.status=1}function t1(e){this.g=e}(t=tw.prototype).Fa=function(e){this.H=e},t.ea=function(t,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():e.g(),this.g.onreadystatechange=d(u(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(e){tk(this,e);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var a in i)n.set(a,i[a]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i));for(let[e,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),a=s.FormData&&t instanceof s.FormData,!(Array.prototype.indexOf.call(tS,r,void 0)>=0)||i||a||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(e,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(e){tk(this,e)}},t.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,er(this,"complete"),er(this,"abort"),tT(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tT(this,!0)),tw.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?t_(this):this.Xa())},t.Xa=function(){t_(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return tI(this)>2?this.g.status:-1}catch(e){return -1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},t.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eu(t)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=tA.prototype).ka=8,t.I=1,t.connect=function(e,t,r,n){eE(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.J=tK(this,null,this.W),tD(this)},t.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;let i=new eA(this,this.j,e),a=this.o;if(this.U&&(a?V(a=z(a),this.U):a=this.U),null!==this.u||this.R||(i.J=a,a=null),this.S)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if((t+=n)>4096){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tF(this,i,t),e3(r=e0(this.J),"RID",e),e3(r,"CVER",22),this.G&&e3(r,"X-HTTP-Session-Id",this.G),tM(this,r),a&&(this.R?t="headers="+ej(tb(a))+"&"+t:this.u&&tx(r,this.u,a)),eQ(this.h,i),this.Ra&&e3(r,"TYPE","init"),this.S?(e3(r,"$req",t),e3(r,"SID","null"),i.U=!0,eD(i,r,null)):eD(i,r,t),this.I=2}}else 3==this.I&&(e?tL(this,e):0==this.i.length||eq(this.h)||tL(this))},t.Da=function(){if(this.v=null,tV(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=ek(u(this.Wa,this),e)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,eE(10),tP(this),tV(this))},t.Va=function(){null!=this.C&&(this.C=null,tP(this),tz(this),eE(19))},t.bb=function(e){e?(this.j.info("Successfully pinged google.com"),eE(2)):(this.j.info("Failed to ping google.com"),eE(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=tY.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},tX.prototype.g=function(e,t){return new tJ(e,t)},h(tJ,et),tJ.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tJ.prototype.close=function(){tR(this.g)},tJ.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=el(e),e=r);t.i.push(new eH(t.Ya++,e)),3==t.I&&tD(t)},tJ.prototype.N=function(){this.g.l=null,delete this.j,tR(this.g),delete this.g,tJ.Z.N.call(this)},h(tZ,ep),h(t0,em),h(t1,tY),t1.prototype.ra=function(){er(this.g,"a")},t1.prototype.qa=function(e){er(this.g,new tZ(e))},t1.prototype.pa=function(e){er(this.g,new t0)},t1.prototype.oa=function(){er(this.g,"b")},tX.prototype.createWebChannel=tX.prototype.g,tJ.prototype.send=tJ.prototype.o,tJ.prototype.open=tJ.prototype.m,tJ.prototype.close=tJ.prototype.close,k=ds.createWebChannelTransport=function(){return new tX},S=ds.getStatEventTarget=function(){return ev()},E=ds.Event=eg,w=ds.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},eT.NO_ERROR=0,eT.TIMEOUT=8,eT.HTTP_ERROR=6,x=ds.ErrorCode=eT,eI.COMPLETE="complete",b=ds.EventType=eI,ed.EventType=ef,ef.OPEN="a",ef.CLOSE="b",ef.ERROR="c",ef.MESSAGE="d",et.prototype.listen=et.prototype.J,v=ds.WebChannel=ed,ds.FetchXmlHttpFactory=tp,tw.prototype.listenOnce=tw.prototype.K,tw.prototype.getLastError=tw.prototype.Ha,tw.prototype.getLastErrorCode=tw.prototype.ya,tw.prototype.getStatus=tw.prototype.ca,tw.prototype.getResponseJson=tw.prototype.La,tw.prototype.getResponseText=tw.prototype.la,tw.prototype.send=tw.prototype.ea,tw.prototype.setWithCredentials=tw.prototype.Fa,y=ds.XhrIo=tw}).apply(void 0!==da?da:"u">typeof self?self:"u">typeof window?window:{}),C=function(e){for(var t,r=e.length,n=r%3,i=[],a=0,s=r-n;a<s;a+=16383)i.push(function(e,t,r){for(var n,i=[],a=t;a<r;a+=3)n=(e[a]<<16&0xff0000)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(dl[n>>18&63]+dl[n>>12&63]+dl[n>>6&63]+dl[63&n]);return i.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?i.push(dl[(t=e[r-1])>>2]+dl[t<<4&63]+"=="):2===n&&i.push(dl[(t=(e[r-2]<<8)+e[r-1])>>10]+dl[t>>4&63]+dl[t<<2&63]+"="),i.join("")};for(var dl=[],du=[],dc="u">typeof Uint8Array?Uint8Array:Array,dh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dd=0,df=dh.length;dd<df;++dd)dl[dd]=dh[dd],du[dh.charCodeAt(dd)]=dd;du[45]=62,du[95]=63,_=function(e,t,r,n,i){var a,s,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,a=f&(1<<-c)-1,f>>=-c,c+=o;c>0;a=256*a+e[t+h],h+=d,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=n;c>0;s=256*s+e[t+h],h+=d,c-=8);if(0===a)a=1-u;else{if(a===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),a-=u}return(f?-1:1)*s*Math.pow(2,a-n)},T=function(e,t,r,n,i,a){var s,o,l,u=8*a-i-1,c=(1<<u)-1,h=c>>1,d=5960464477539062e-23*(23===i),f=n?0:a-1,p=n?1:-1,m=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(o=+!!isNaN(t),s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(s++,l/=2),s+h>=c?(o=0,s=c):s+h>=1?(o=(t*l-1)*Math.pow(2,i),s+=h):(o=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+f]=255&o,f+=p,o/=256,i-=8);for(s=s<<i|o,u+=i;u>0;e[r+f]=255&s,f+=p,s/=256,u-=8);e[r+f-p]|=128*m};let dp="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function dm(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,dg.prototype),t}function dg(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return db(e)}return dy(e,t,r)}function dy(e,t,r){if("string"==typeof e){var n=e,i=t;if(("string"!=typeof i||""===i)&&(i="utf8"),!dg.isEncoding(i))throw TypeError("Unknown encoding: "+i);let r=0|dS(n,i),a=dm(r),s=a.write(n,i);return s!==r&&(a=a.slice(0,s)),a}if(ArrayBuffer.isView(e)){var a=e;if(dq(a,Uint8Array)){let e=new Uint8Array(a);return dw(e.buffer,e.byteOffset,e.byteLength)}return dx(a)}if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(dq(e,ArrayBuffer)||e&&dq(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(dq(e,SharedArrayBuffer)||e&&dq(e.buffer,SharedArrayBuffer)))return dw(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let s=e.valueOf&&e.valueOf();if(null!=s&&s!==e)return dg.from(s,t,r);let o=function(e){if(dg.isBuffer(e)){let t=0|dE(e.length),r=dm(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?dm(0):dx(e):"Buffer"===e.type&&Array.isArray(e.data)?dx(e.data):void 0}(e);if(o)return o;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return dg.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function dv(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function db(e){return dv(e),dm(e<0?0:0|dE(e))}function dx(e){let t=e.length<0?0:0|dE(e.length),r=dm(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function dw(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),dg.prototype),n}function dE(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function dS(e,t){if(dg.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||dq(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return dU(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return dH(e).length;default:if(i)return n?-1:dU(e).length;t=(""+t).toLowerCase(),i=!0}}function dk(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=dG[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return dI(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,a,s;return i=this,a=t,s=r,0===a&&s===i.length?C(i):C(i.slice(a,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function dC(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function d_(e,t,r,n,i){var a;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(a=r*=1)!=a&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(i)return -1;else r=e.length-1;else if(r<0)if(!i)return -1;else r=0;if("string"==typeof t&&(t=dg.from(t,n)),dg.isBuffer(t))return 0===t.length?-1:dT(e,t,r,n,i);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(i)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return dT(e,[t],r,n,i)}throw TypeError("val must be string, number or Buffer")}function dT(e,t,r,n,i){let a,s=1,o=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,o/=2,l/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(a=r;a<o;a++)if(u(e,a)===u(t,-1===n?0:a-n)){if(-1===n&&(n=a),a-n+1===l)return n*s}else -1!==n&&(a-=a-n),n=-1}else for(r+l>o&&(r=o-l),a=r;a>=0;a--){let r=!0;for(let n=0;n<l;n++)if(u(e,a+n)!==u(t,n)){r=!1;break}if(r)return a}return -1}function dI(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],a=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,o,l;switch(s){case 1:t<128&&(a=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(a=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:r=e[i+1],n=e[i+2],o=e[i+3],(192&r)==128&&(192&n)==128&&(192&o)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&o)>65535&&l<1114112&&(a=l)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}var a=n;let s=a.length;if(s<=4096)return String.fromCharCode.apply(String,a);let o="",l=0;for(;l<s;)o+=String.fromCharCode.apply(String,a.slice(l,l+=4096));return o}function dN(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function dj(e,t,r,n,i,a){if(!dg.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function dA(e,t,r,n,i){dB(t,n,i,e,r,7);let a=Number(t&BigInt(0xffffffff));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let s=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function dR(e,t,r,n,i){dB(t,n,i,e,r,7);let a=Number(t&BigInt(0xffffffff));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let s=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function dP(e,t,r,n,i,a){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function dO(e,t,r,n,i){return t*=1,r>>>=0,i||dP(e,t,r,4,34028234663852886e22,-34028234663852886e22),T(e,t,r,n,23,4),r+4}function dD(e,t,r,n,i){return t*=1,r>>>=0,i||dP(e,t,r,8,17976931348623157e292,-17976931348623157e292),T(e,t,r,n,52,8),r+8}dg.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!dg.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(dg.prototype,"parent",{enumerable:!0,get:function(){if(dg.isBuffer(this))return this.buffer}}),Object.defineProperty(dg.prototype,"offset",{enumerable:!0,get:function(){if(dg.isBuffer(this))return this.byteOffset}}),dg.poolSize=8192,dg.from=function(e,t,r){return dy(e,t,r)},Object.setPrototypeOf(dg.prototype,Uint8Array.prototype),Object.setPrototypeOf(dg,Uint8Array),dg.alloc=function(e,t,r){return(dv(e),e<=0)?dm(e):void 0!==t?"string"==typeof r?dm(e).fill(t,r):dm(e).fill(t):dm(e)},dg.allocUnsafe=function(e){return db(e)},dg.allocUnsafeSlow=function(e){return db(e)},dg.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==dg.prototype},dg.compare=function(e,t){if(dq(e,Uint8Array)&&(e=dg.from(e,e.offset,e.byteLength)),dq(t,Uint8Array)&&(t=dg.from(t,t.offset,t.byteLength)),!dg.isBuffer(e)||!dg.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},dg.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},dg.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return dg.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=dg.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(dq(t,Uint8Array))i+t.length>n.length?(dg.isBuffer(t)||(t=dg.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(dg.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},dg.byteLength=dS,dg.prototype._isBuffer=!0,dg.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)dC(this,t,t+1);return this},dg.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)dC(this,t,t+3),dC(this,t+1,t+2);return this},dg.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)dC(this,t,t+7),dC(this,t+1,t+6),dC(this,t+2,t+5),dC(this,t+3,t+4);return this},dg.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?dI(this,0,e):dk.apply(this,arguments)},dg.prototype.toLocaleString=dg.prototype.toString,dg.prototype.equals=function(e){if(!dg.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===dg.compare(this,e)},dg.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},dp&&(dg.prototype[dp]=dg.prototype.inspect),dg.prototype.compare=function(e,t,r,n,i){if(dq(e,Uint8Array)&&(e=dg.from(e,e.offset,e.byteLength)),!dg.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let a=i-n,s=r-t,o=Math.min(a,s),l=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<o;++e)if(l[e]!==u[e]){a=l[e],s=u[e];break}return a<s?-1:+(s<a)},dg.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},dg.prototype.indexOf=function(e,t,r){return d_(this,e,t,r,!0)},dg.prototype.lastIndexOf=function(e,t,r){return d_(this,e,t,r,!1)},dg.prototype.write=function(e,t,r,n){var i,a,s,o,l,u,c,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;let s=t.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){var o;let n=parseInt(t.substr(2*i,2),16);if((o=n)!=o)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,a=r,dW(dU(e,this.length-i),this,i,a);case"ascii":case"latin1":case"binary":return s=t,o=r,dW(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,o);case"base64":return l=t,u=r,dW(dH(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,dW(function(e,t){let r,n,i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},dg.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},dg.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,dg.prototype),n},dg.prototype.readUintLE=dg.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||dN(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n},dg.prototype.readUintBE=dg.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||dN(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},dg.prototype.readUint8=dg.prototype.readUInt8=function(e,t){return e>>>=0,t||dN(e,1,this.length),this[e]},dg.prototype.readUint16LE=dg.prototype.readUInt16LE=function(e,t){return e>>>=0,t||dN(e,2,this.length),this[e]|this[e+1]<<8},dg.prototype.readUint16BE=dg.prototype.readUInt16BE=function(e,t){return e>>>=0,t||dN(e,2,this.length),this[e]<<8|this[e+1]},dg.prototype.readUint32LE=dg.prototype.readUInt32LE=function(e,t){return e>>>=0,t||dN(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},dg.prototype.readUint32BE=dg.prototype.readUInt32BE=function(e,t){return e>>>=0,t||dN(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},dg.prototype.readBigUInt64LE=dK(function(e){dz(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&d$(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),dg.prototype.readBigUInt64BE=dK(function(e){dz(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&d$(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),dg.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||dN(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},dg.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||dN(e,t,this.length);let n=t,i=1,a=this[e+--n];for(;n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},dg.prototype.readInt8=function(e,t){return(e>>>=0,t||dN(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},dg.prototype.readInt16LE=function(e,t){e>>>=0,t||dN(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},dg.prototype.readInt16BE=function(e,t){e>>>=0,t||dN(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},dg.prototype.readInt32LE=function(e,t){return e>>>=0,t||dN(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},dg.prototype.readInt32BE=function(e,t){return e>>>=0,t||dN(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},dg.prototype.readBigInt64LE=dK(function(e){dz(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&d$(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),dg.prototype.readBigInt64BE=dK(function(e){dz(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&d$(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),dg.prototype.readFloatLE=function(e,t){return e>>>=0,t||dN(e,4,this.length),_(this,e,!0,23,4)},dg.prototype.readFloatBE=function(e,t){return e>>>=0,t||dN(e,4,this.length),_(this,e,!1,23,4)},dg.prototype.readDoubleLE=function(e,t){return e>>>=0,t||dN(e,8,this.length),_(this,e,!0,52,8)},dg.prototype.readDoubleBE=function(e,t){return e>>>=0,t||dN(e,8,this.length),_(this,e,!1,52,8)},dg.prototype.writeUintLE=dg.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;dj(this,e,t,r,n,0)}let i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},dg.prototype.writeUintBE=dg.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;dj(this,e,t,r,n,0)}let i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},dg.prototype.writeUint8=dg.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,1,255,0),this[t]=255&e,t+1},dg.prototype.writeUint16LE=dg.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},dg.prototype.writeUint16BE=dg.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},dg.prototype.writeUint32LE=dg.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},dg.prototype.writeUint32BE=dg.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},dg.prototype.writeBigUInt64LE=dK(function(e,t=0){return dA(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),dg.prototype.writeBigUInt64BE=dK(function(e,t=0){return dR(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),dg.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);dj(this,e,t,r,n-1,-n)}let i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a|0)-s&255;return t+r},dg.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);dj(this,e,t,r,n-1,-n)}let i=r-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a|0)-s&255;return t+r},dg.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},dg.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},dg.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},dg.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},dg.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||dj(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},dg.prototype.writeBigInt64LE=dK(function(e,t=0){return dA(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),dg.prototype.writeBigInt64BE=dK(function(e,t=0){return dR(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),dg.prototype.writeFloatLE=function(e,t,r){return dO(this,e,t,!0,r)},dg.prototype.writeFloatBE=function(e,t,r){return dO(this,e,t,!1,r)},dg.prototype.writeDoubleLE=function(e,t,r){return dD(this,e,t,!0,r)},dg.prototype.writeDoubleBE=function(e,t,r){return dD(this,e,t,!1,r)},dg.prototype.copy=function(e,t,r,n){if(!dg.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},dg.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!dg.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let a=dg.isBuffer(e)?e:dg.from(e,n),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this};let dL={};function dM(e,t,r){dL[e]=class extends r{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function dF(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function dB(e,t,r,n,i,a){if(e>r||e<t){let n,i="bigint"==typeof t?"n":"";throw n=a>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(a+1)*8}${i}`:`>= -(2${i} ** ${(a+1)*8-1}${i}) and < 2 ** ${(a+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new dL.ERR_OUT_OF_RANGE("value",n,e)}dz(i,"offset"),(void 0===n[i]||void 0===n[i+a])&&d$(i,n.length-(a+1))}function dz(e,t){if("number"!=typeof e)throw new dL.ERR_INVALID_ARG_TYPE(t,"number",e)}function d$(e,t,r){if(Math.floor(e)!==e)throw dz(e,r),new dL.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new dL.ERR_BUFFER_OUT_OF_BOUNDS;throw new dL.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}dM("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),dM("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),dM("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=dF(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=dF(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let dV=/[^+/0-9A-Za-z-_]/g;function dU(e,t){let r;t=t||1/0;let n=e.length,i=null,a=[];for(let s=0;s<n;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319||s+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return a}function dH(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],a=n[1],s=new dc((i+a)*3/4-a),o=0,l=a>0?i-4:i;for(r=0;r<l;r+=4)t=du[e.charCodeAt(r)]<<18|du[e.charCodeAt(r+1)]<<12|du[e.charCodeAt(r+2)]<<6|du[e.charCodeAt(r+3)],s[o++]=t>>16&255,s[o++]=t>>8&255,s[o++]=255&t;return 2===a&&(t=du[e.charCodeAt(r)]<<2|du[e.charCodeAt(r+1)]>>4,s[o++]=255&t),1===a&&(t=du[e.charCodeAt(r)]<<10|du[e.charCodeAt(r+1)]<<4|du[e.charCodeAt(r+2)]>>2,s[o++]=t>>8&255,s[o++]=255&t),s}(function(e){if((e=(e=e.split("=")[0]).trim().replace(dV,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function dW(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function dq(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let dG=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function dK(e){return"u"<typeof BigInt?dQ:e}function dQ(){throw Error("BigInt not supported")}class dY{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}dY.UNAUTHENTICATED=new dY(null),dY.GOOGLE_CREDENTIALS=new dY("google-credentials-uid"),dY.FIRST_PARTY=new dY("first-party-uid"),dY.MOCK_USER=new dY("mock-user");let dX="12.10.0",dJ=new hI("@firebase/firestore");function dZ(){return dJ.logLevel}function d0(e,...t){if(dJ.logLevel<=p.DEBUG){let r=t.map(d5);dJ.debug(`Firestore (${dX}): ${e}`,...r)}}function d1(e,...t){if(dJ.logLevel<=p.ERROR){let r=t.map(d5);dJ.error(`Firestore (${dX}): ${e}`,...r)}}function d2(e,...t){if(dJ.logLevel<=p.WARN){let r=t.map(d5);dJ.warn(`Firestore (${dX}): ${e}`,...r)}}function d5(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}function d3(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,d4(e,n,r)}function d4(e,t,r){let n=`FIRESTORE (${dX}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw d1(n),Error(n)}function d6(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||d4(t,i,n)}let d8={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class d7 extends hf{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class d9{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class fe{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ft{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dY.UNAUTHENTICATED))}shutdown(){}}class fr{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class fn{start(e,t){d6(void 0===this.o,42304);let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new d9;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new d9,e.enqueueRetryable(()=>n(this.currentUser))};let a=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},s=e=>{d0("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?s(e):(d0("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new d9)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(d0("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(d6("string"==typeof t.accessToken,31837,{l:t}),new fe(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return d6(null===e||"string"==typeof e,2055,{h:e}),new dY(e)}constructor(e){this.t=e,this.currentUser=dY.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class fi{A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);let e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dY.FIRST_PARTY,this.R=new Map}}class fa{getToken(){return Promise.resolve(new fi(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(dY.FIRST_PARTY))}shutdown(){}invalidateToken(){}constructor(e,t,r){this.P=e,this.T=t,this.I=r}}class fs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fo{start(e,t){d6(void 0===this.o,3512);let r=e=>{null!=e.error&&d0("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.m;return this.m=e.token,d0("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{d0("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?n(e):d0("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fs(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(d6("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new fs(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=e&&void 0!==e.settings&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}}class fl{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=function(){let e="u">typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(40);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(t);else for(let e=0;e<40;e++)t[e]=Math.floor(256*Math.random());return t}();for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function fu(e,t){return e<t?-1:+(e>t)}function fc(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.charAt(n),i=t.charAt(n);if(r!==i)return fh(r)===fh(i)?fu(r,i):fh(r)?1:-1}return fu(e.length,t.length)}function fh(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function fd(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}let ff="__name__";class fp{get length(){return this.len}isEqual(e){return 0===fp.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof fp?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=fp.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return fu(e.length,t.length)}static compareSegments(e,t){let r=fp.isNumericId(e),n=fp.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?fp.extractNumericId(e).compare(fp.extractNumericId(t)):fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return m.fromString(e.substring(4,e.length-2))}constructor(e,t,r){void 0===t?t=0:t>e.length&&d3(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&d3(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}}class fm extends fp{construct(e,t,r){return new fm(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new d7(d8.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new fm(t)}static emptyPath(){return new fm([])}}let fg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fy extends fp{construct(e,t,r){return new fy(e,t,r)}static isValidIdentifier(e){return fg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fy.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ff}static keyField(){return new fy([ff])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new d7(d8.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new d7(d8.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new d7(d8.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?a=!a:"."!==t||a?r+=t:i(),n++}if(i(),a)throw new d7(d8.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fy(t)}static emptyPath(){return new fy([])}}class fv{static fromPath(e){return new fv(fm.fromString(e))}static fromName(e){return new fv(fm.fromString(e).popFirst(5))}static empty(){return new fv(fm.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===fm.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fm.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fv(new fm(e.slice()))}constructor(e){this.path=e}}function fb(e,t,r){if(!r)throw new d7(d8.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fx(e){if(!fv.isDocumentKey(e))throw new d7(d8.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fw(e){if(fv.isDocumentKey(e))throw new d7(d8.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function fE(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function fS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":d3(12329,{type:typeof e})}function fk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new d7(d8.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=fS(e);throw new d7(d8.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function fC(e,t){let r={typeString:e};return t&&(r.value=t),r}function f_(e,t){let r;if(!fE(e))throw new d7(d8.INVALID_ARGUMENT,"JSON must be an object");for(let n in t)if(t[n]){let i=t[n].typeString,a="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}let s=e[n];if(i&&typeof s!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(void 0!==a&&s!==a.value){r=`Expected '${n}' field to equal '${a.value}'`;break}}if(r)throw new d7(d8.INVALID_ARGUMENT,r);return!0}class fT{static now(){return fT.fromMillis(Date.now())}static fromDate(e){return fT.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new fT(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fu(this.nanoseconds,e.nanoseconds):fu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fT._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(f_(e,fT._jsonSchema))return new fT(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new d7(d8.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new d7(d8.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}fT._jsonSchemaVersion="firestore/timestamp/1.0",fT._jsonSchema={type:fC("string",fT._jsonSchemaVersion),seconds:fC("number"),nanoseconds:fC("number")};class fI{static fromTimestamp(e){return new fI(e)}static min(){return new fI(new fT(0,0))}static max(){return new fI(new fT(0x3afff4417f,0x3b9ac9ff))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}class fN{static min(){return new fN(fI.min(),fv.empty(),-1)}static max(){return new fN(fI.max(),fv.empty(),-1)}constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}}class fj{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}constructor(){this.onCommittedListeners=[]}}async function fA(e){if(e.code!==d8.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;d0("LocalStore","Unexpectedly lost primary lease")}class fR{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&d3(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new fR((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof fR?t:fR.resolve(t)}catch(e){return fR.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):fR.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):fR.reject(t)}static resolve(e){return new fR((t,r)=>{t(e)})}static reject(e){return new fR((t,r)=>{r(e)})}static waitFor(e){return new fR((t,r)=>{let n=0,i=0,a=!1;e.forEach(e=>{++n,e.next(()=>{++i,a&&i===n&&t()},e=>r(e))}),a=!0,i===n&&t()})}static or(e){let t=fR.resolve(!1);for(let r of e)t=t.next(e=>e?fR.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new fR((r,n)=>{let i=e.length,a=Array(i),s=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{a[l]=e,++s===i&&r(a)},e=>n(e))}})}static doWhile(e,t){return new fR((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}}function fP(e){return"IndexedDbTransactionError"===e.name}class fO{ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}}fO.ce=-1;function fD(e){return 0===e&&1/e==-1/0}function fL(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function fM(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function fF(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}class fB{insert(e,t){return new fB(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,f$.BLACK,null,null))}remove(e){return new fB(this.comparator,this.root.remove(e,this.comparator).copy(null,null,f$.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fz(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fz(this.root,e,this.comparator,!1)}getReverseIterator(){return new fz(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fz(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||f$.EMPTY}}class fz{getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class f${copy(e,t,r,n,i){return new f$(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return f$.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return f$.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,f$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,f$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw d3(43730,{key:this.key,value:this.value});if(this.right.isRed())throw d3(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw d3(27949);return e+ +!this.isRed()}constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:f$.RED,this.left=null!=n?n:f$.EMPTY,this.right=null!=i?i:f$.EMPTY,this.size=this.left.size+1+this.right.size}}f$.EMPTY=null,f$.RED=!0,f$.BLACK=!1,f$.EMPTY=new class{get key(){throw d3(57766)}get value(){throw d3(16141)}get color(){throw d3(16727)}get left(){throw d3(29726)}get right(){throw d3(36894)}copy(e,t,r,n,i){return this}insert(e,t,r){return new f$(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};class fV{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fU(this.data.getIterator())}getIteratorFrom(e){return new fU(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof fV)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new fV(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new fB(this.comparator)}}class fU{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}class fH{static empty(){return new fH([])}unionWith(e){let t=new fV(fy.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new fH(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fd(this.fields,e.fields,(e,t)=>e.isEqual(t))}constructor(e){this.fields=e,e.sort(fy.comparator)}}class fW extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class fq{static fromBase64String(e){return new fq(function(e){try{return atob(e)}catch(e){throw"u">typeof DOMException&&e instanceof DOMException?new fW("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new fq(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){var e=this.binaryString;let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}fq.EMPTY_BYTE_STRING=new fq("");let fG=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fK(e){if(d6(!!e,39018),"string"==typeof e){let t=0,r=fG.exec(e);if(d6(!!r,46558,{timestamp:e}),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:fQ(e.seconds),nanos:fQ(e.nanos)}}function fQ(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function fY(e){return"string"==typeof e?fq.fromBase64String(e):fq.fromUint8Array(e)}let fX="server_timestamp",fJ="__type__",fZ="__previous_value__",f0="__local_write_time__";function f1(e){var t,r;return(null==(t=((null==e||null==(r=e.mapValue)?void 0:r.fields)||{})[fJ])?void 0:t.stringValue)===fX}function f2(e){let t=e.mapValue.fields[fZ];return f1(t)?f2(t):t}function f5(e){let t=fK(e.mapValue.fields[f0].timestampValue);return new fT(t.seconds,t.nanos)}class f3{constructor(e,t,r,n,i,a,s,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u,this.apiKey=c}}let f4="(default)";class f6{static empty(){return new f6("","")}get isDefaultDatabase(){return this.database===f4}isEqual(e){return e instanceof f6&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||f4}}let f8="__type__",f7="__max__",f9={},pe="__vector__",pt="value";function pr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?f1(e)?4:py(e)?0x1fffffffffffff:pm(e)?10:11:d3(28295,{value:e})}function pn(e,t){if(e===t)return!0;let r=pr(e);if(r!==pr(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return f5(e).isEqual(f5(t));case 3:if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=fK(e.timestampValue),i=fK(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos;case 5:return e.stringValue===t.stringValue;case 6:return fY(e.bytesValue).isEqual(fY(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return fQ(e.geoPointValue.latitude)===fQ(t.geoPointValue.latitude)&&fQ(e.geoPointValue.longitude)===fQ(t.geoPointValue.longitude);case 2:if("integerValue"in e&&"integerValue"in t)return fQ(e.integerValue)===fQ(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=fQ(e.doubleValue),n=fQ(t.doubleValue);return r===n?fD(r)===fD(n):isNaN(r)&&isNaN(n)}return!1;case 9:return fd(e.arrayValue.values||[],t.arrayValue.values||[],pn);case 10:case 11:let a=e.mapValue.fields||{},s=t.mapValue.fields||{};if(fL(a)!==fL(s))return!1;for(let e in a)if(a.hasOwnProperty(e)&&(void 0===s[e]||!pn(a[e],s[e])))return!1;return!0;default:return d3(52216,{left:e})}}function pi(e,t){return void 0!==(e.values||[]).find(e=>pn(e,t))}function pa(e,t){var r,n,i,a,s,o,l,u,c,h;if(e===t)return 0;let d=pr(e),f=pr(t);if(d!==f)return fu(d,f);switch(d){case 0:case 0x1fffffffffffff:return 0;case 1:return fu(e.booleanValue,t.booleanValue);case 2:let p,m;return p=fQ(e.integerValue||e.doubleValue),p<(m=fQ(t.integerValue||t.doubleValue))?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1;case 3:return ps(e.timestampValue,t.timestampValue);case 4:return ps(f5(e),f5(t));case 5:return fc(e.stringValue,t.stringValue);case 6:let g,y;return r=e.bytesValue,n=t.bytesValue,g=fY(r),y=fY(n),g.compareTo(y);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=fu(r[e],n[e]);if(0!==t)return t}return fu(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:let v;return i=e.geoPointValue,a=t.geoPointValue,0!==(v=fu(fQ(i.latitude),fQ(a.latitude)))?v:fu(fQ(i.longitude),fQ(a.longitude));case 9:return po(e.arrayValue,t.arrayValue);case 10:let b,x,w,E,S;return s=e.mapValue,o=t.mapValue,b=s.fields||{},x=o.fields||{},w=null==(l=b[pt])?void 0:l.arrayValue,E=null==(u=x[pt])?void 0:u.arrayValue,0!==(S=fu((null==w||null==(c=w.values)?void 0:c.length)||0,(null==E||null==(h=E.values)?void 0:h.length)||0))?S:po(w,E);case 11:return function(e,t){if(e===f9&&t===f9)return 0;if(e===f9)return 1;if(t===f9)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},a=Object.keys(i);n.sort(),a.sort();for(let e=0;e<n.length&&e<a.length;++e){let t=fc(n[e],a[e]);if(0!==t)return t;let s=pa(r[n[e]],i[a[e]]);if(0!==s)return s}return fu(n.length,a.length)}(e.mapValue,t.mapValue);default:throw d3(23264,{he:d})}}function ps(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return fu(e,t);let r=fK(e),n=fK(t),i=fu(r.seconds,n.seconds);return 0!==i?i:fu(r.nanos,n.nanos)}function po(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=pa(r[e],n[e]);if(t)return t}return fu(r.length,n.length)}function pl(e){var t,r;let n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(n=fK(e.timestampValue),`time(${n.seconds},${n.nanos})`):"stringValue"in e?e.stringValue:"bytesValue"in e?fY(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,fv.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=pl(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${pl(e.fields[i])}`;return r+"}"}(e.mapValue):d3(61005,{value:e})}function pu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function pc(e){return!!e&&"integerValue"in e}function ph(e){return!!e&&"arrayValue"in e}function pd(e){return!!e&&"nullValue"in e}function pf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pp(e){return!!e&&"mapValue"in e}function pm(e){var t,r;return(null==(t=((null==e||null==(r=e.mapValue)?void 0:r.fields)||{})[f8])?void 0:t.stringValue)===pe}function pg(e){if(e.geoPointValue)return{geoPointValue:cq({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:cq({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return fM(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=pg(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=pg(e.arrayValue.values[r]);return t}return cq({},e)}function py(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===f7}class pv{static empty(){return new pv({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!pp(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pg(t)}setAll(e){let t=fy.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=pg(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());pp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];pp(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(fM(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new pv(pg(this.value))}constructor(e){this.value=e}}class pb{static newInvalidDocument(e){return new pb(e,0,fI.min(),fI.min(),fI.min(),pv.empty(),0)}static newFoundDocument(e,t,r,n){return new pb(e,1,t,fI.min(),r,n,0)}static newNoDocument(e,t){return new pb(e,2,t,fI.min(),fI.min(),pv.empty(),0)}static newUnknownDocument(e,t){return new pb(e,3,t,fI.min(),fI.min(),pv.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(fI.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pv.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pv.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fI.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof pb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,r,n,i,a,s){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=a,this.documentState=s}}class px{constructor(e,t){this.position=e,this.inclusive=t}}function pw(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let a=t[i],s=e.position[i];if(n=a.field.isKeyField()?fv.comparator(fv.fromName(s.referenceValue),r.key):pa(s,r.data.field(a.field)),"desc"===a.dir&&(n*=-1),0!==n)break}return n}function pE(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!pn(e.position[r],t.position[r]))return!1;return!0}class pS{constructor(e,t="asc"){this.field=e,this.dir=t}}class pk{}class pC extends pk{static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new pN(e,t,r):"array-contains"===t?new pP(e,r):"in"===t?new pO(e,r):"not-in"===t?new pD(e,r):"array-contains-any"===t?new pL(e,r):new pC(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new pj(e,r):new pA(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(pa(t,this.value)):null!==t&&pr(this.value)===pr(t)&&this.matchesComparison(pa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return d3(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}}class p_ extends pk{static create(e,t){return new p_(e,t)}matches(e){return pT(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}}function pT(e){return"and"===e.op}function pI(e){for(let t of e.filters)if(t instanceof p_)return!1;return!0}class pN extends pC{matches(e){let t=fv.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,r){super(e,t,r),this.key=fv.fromName(r.referenceValue)}}class pj extends pC{matches(e){return this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"in",t),this.keys=pR("in",t)}}class pA extends pC{matches(e){return!this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"not-in",t),this.keys=pR("not-in",t)}}function pR(e,t){var r;return((null==(r=t.arrayValue)?void 0:r.values)||[]).map(e=>fv.fromName(e.referenceValue))}class pP extends pC{matches(e){let t=e.data.field(this.field);return ph(t)&&pi(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class pO extends pC{matches(e){let t=e.data.field(this.field);return null!==t&&pi(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class pD extends pC{matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!pi(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class pL extends pC{matches(e){let t=e.data.field(this.field);return!(!ph(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>pi(this.value.arrayValue,e))}constructor(e,t){super(e,"array-contains-any",t)}}class pM{constructor(e,t=null,r=[],n=[],i=null,a=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=a,this.endAt=s,this.Te=null}}function pF(e,t=null,r=[],n=[],i=null,a=null,s=null){return new pM(e,t,r,n,i,a,s)}function pB(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof pC)return t.field.canonicalString()+t.op.toString()+pl(t.value);if(pI(t)&&pT(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>pl(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>pl(e)).join(",")),e.Te=t}return e.Te}function pz(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof pC?r instanceof pC&&t.op===r.op&&t.field.isEqual(r.field)&&pn(t.value,r.value):t instanceof p_?r instanceof p_&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void d3(19439)}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pE(e.startAt,t.startAt)&&pE(e.endAt,t.endAt)}function p$(e){return fv.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class pV{constructor(e,t=null,r=[],n=[],i=null,a="F",s=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=a,this.startAt=s,this.endAt=o,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pU(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function pH(e){return null!==e.collectionGroup}function pW(e){if(null===e.Ie){let t;e.Ie=[];let r=new Set;for(let t of e.explicitOrderBy)e.Ie.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new fV(fy.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.Ie.push(new pS(t,n))}),r.has(fy.keyField().canonicalString())||e.Ie.push(new pS(fy.keyField(),n))}return e.Ie}function pq(e){return e.Ee||(e.Ee=function(e,t){if("F"===e.limitType)return pF(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new pS(e.field,t)});let r=e.endAt?new px(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new px(e.startAt.position,e.startAt.inclusive):null;return pF(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,pW(e))),e.Ee}function pG(e,t){let r=e.filters.concat([t]);return new pV(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function pK(e,t,r){return new pV(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function pQ(e,t){return pz(pq(e),pq(t))&&e.limitType===t.limitType}function pY(e){return`${pB(pq(e))}|lt:${e.limitType}`}function pX(e){var t;let r;return`Query(target=${r=(t=pq(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof pC?`${t.field.canonicalString()} ${t.op} ${pl(t.value)}`:t instanceof p_?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>pl(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>pl(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function pJ(e,t){var r,n,i,a;let s,o,l;return t.isFoundDocument()&&(s=t.key.path,null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):fv.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s))&&function(e,t){for(let r of pW(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(r=e,n=t,(!r.startAt||(i=r.startAt,o=pw(i,pW(r),n),i.inclusive?!!(o<=0):!!(o<0)))&&(!r.endAt||(a=r.endAt,l=pw(a,pW(r),n),a.inclusive?!!(l>=0):!!(l>0))))}function pZ(e){return(t,r)=>{let n=!1;for(let i of pW(e)){let e=function(e,t,r){var n;let i,a,s=e.field.isKeyField()?fv.comparator(t.key,r.key):(n=e.field,i=t.data.field(n),a=r.data.field(n),null!==i&&null!==a?pa(i,a):d3(42886));switch(e.dir){case"asc":return s;case"desc":return -1*s;default:return d3(19790,{direction:e.dir})}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}class p0{get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){fM(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return fF(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}let p1=new fB(fv.comparator),p2=new fB(fv.comparator);function p5(...e){let t=p2;for(let r of e)t=t.insert(r.key,r);return t}function p3(e){let t=p2;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function p4(){return new p0(e=>e.toString(),(e,t)=>e.isEqual(t))}let p6=new fB(fv.comparator),p8=new fV(fv.comparator);function p7(...e){let t=p8;for(let r of e)t=t.add(r);return t}let p9=new fV(fu);function me(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fD(t)?"-0":t}}function mt(e){return{integerValue:""+e}}class mr{constructor(){this._=void 0}}function mn(e,t){return e instanceof mu?pc(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class mi extends mr{}class ma extends mr{constructor(e){super(),this.elements=e}}function ms(e,t){let r=mh(t);for(let t of e.elements)r.some(e=>pn(e,t))||r.push(t);return{arrayValue:{values:r}}}class mo extends mr{constructor(e){super(),this.elements=e}}function ml(e,t){let r=mh(t);for(let t of e.elements)r=r.filter(e=>!pn(e,t));return{arrayValue:{values:r}}}class mu extends mr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function mc(e){return fQ(e.integerValue||e.doubleValue)}function mh(e){return ph(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class md{constructor(e,t){this.field=e,this.transform=t}}class mf{constructor(e,t){this.version=e,this.transformResults=t}}class mp{static none(){return new mp}static exists(e){return new mp(void 0,e)}static updateTime(e){return new mp(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function mm(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mg{}function my(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mC(e.key,mp.none()):new mx(e.key,e.data,mp.none());{let r=e.data,n=pv.empty(),i=new fV(fy.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new mw(e.key,n,new fH(i.toArray()),mp.none())}}function mv(e,t,r,n){return e instanceof mx?function(e,t,r,n){if(!mm(e.precondition,t))return r;let i=e.value.clone(),a=mk(e.fieldTransforms,n,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof mw?function(e,t,r,n){if(!mm(e.precondition,t))return r;let i=mk(e.fieldTransforms,n,t),a=t.data;return(a.setAll(mE(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):mm(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function mb(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&fd(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof ma&&n instanceof ma||r instanceof mo&&n instanceof mo?fd(r.elements,n.elements,pn):r instanceof mu&&n instanceof mu?pn(r.Ae,n.Ae):r instanceof mi&&n instanceof mi)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class mx extends mg{getFieldMask(){return null}constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}}class mw extends mg{getFieldMask(){return this.fieldMask}constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}}function mE(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function mS(e,t,r){let n=new Map;d6(e.length===r.length,32656,{Ve:r.length,de:e.length});for(let a=0;a<r.length;a++){var i;let s=e[a],o=s.transform,l=t.data.field(s.field);n.set(s.field,(i=r[a],o instanceof ma?ms(o,l):o instanceof mo?ml(o,l):i))}return n}function mk(e,t,r){let n=new Map;for(let i of e){let e=i.transform,a=r.data.field(i.field);n.set(i.field,function(e,t,r){var n;let i,a,s;return e instanceof mi?(n=t,i={fields:{[fJ]:{stringValue:fX},[f0]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}},n&&f1(n)&&(n=f2(n)),n&&(i.fields[fZ]=n),{mapValue:i}):e instanceof ma?ms(e,t):e instanceof mo?ml(e,t):(s=mc(a=mn(e,t))+mc(e.Ae),pc(a)&&pc(e.Ae)?mt(s):me(e.serializer,s))}(e,a,t))}return n}class mC extends mg{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class m_ extends mg{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}class mT{applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let n=this.mutations[t];n.key.isEqual(e.key)&&function(e,t,r){let n,i;e instanceof mx?(n=e.value.clone(),i=mS(e.fieldTransforms,t,r.transformResults),n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()):e instanceof mw?function(e,t,r){if(!mm(e.precondition,t))return t.convertToUnknownDocument(r.version);let n=mS(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(mE(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,t,r):t.convertToNoDocument(r.version).setHasCommittedMutations()}(n,e,r[t])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=mv(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=mv(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=p4();return this.mutations.forEach(n=>{let i=e.get(n.key),a=i.overlayedDocument,s=this.applyToLocalView(a,i.mutatedFields),o=my(a,s=t.has(n.key)?null:s);null!==o&&r.set(n.key,o),a.isValidDocument()||a.convertToNoDocument(fI.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),p7())}isEqual(e){return this.batchId===e.batchId&&fd(this.mutations,e.mutations,(e,t)=>mb(e,t))&&fd(this.baseMutations,e.baseMutations,(e,t)=>mb(e,t))}constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}}class mI{static from(e,t,r){d6(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let n=p6,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new mI(e,t,r,n)}constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}}class mN{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}class mj{constructor(e,t){this.count=e,this.unchangedNames=t}}function mA(e){if(void 0===e)return d1("GRPC error has no .code"),d8.UNKNOWN;switch(e){case I.OK:return d8.OK;case I.CANCELLED:return d8.CANCELLED;case I.UNKNOWN:return d8.UNKNOWN;case I.DEADLINE_EXCEEDED:return d8.DEADLINE_EXCEEDED;case I.RESOURCE_EXHAUSTED:return d8.RESOURCE_EXHAUSTED;case I.INTERNAL:return d8.INTERNAL;case I.UNAVAILABLE:return d8.UNAVAILABLE;case I.UNAUTHENTICATED:return d8.UNAUTHENTICATED;case I.INVALID_ARGUMENT:return d8.INVALID_ARGUMENT;case I.NOT_FOUND:return d8.NOT_FOUND;case I.ALREADY_EXISTS:return d8.ALREADY_EXISTS;case I.PERMISSION_DENIED:return d8.PERMISSION_DENIED;case I.FAILED_PRECONDITION:return d8.FAILED_PRECONDITION;case I.ABORTED:return d8.ABORTED;case I.OUT_OF_RANGE:return d8.OUT_OF_RANGE;case I.UNIMPLEMENTED:return d8.UNIMPLEMENTED;case I.DATA_LOSS:return d8.DATA_LOSS;default:return d3(39323,{code:e})}}(N=I||(I={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";let mR=new m([0xffffffff,0xffffffff],0);function mP(e){let t=(new TextEncoder).encode(e),r=new g;return r.update(t),new Uint8Array(r.digest())}function mO(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new m([r,n],0),new m([i,a],0)]}class mD{ye(e,t,r){let n=e.add(t.multiply(m.fromNumber(r)));return 1===n.compare(mR)&&(n=new m([n.getBits(0),n.getBits(1)],0)),n.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;let[t,r]=mO(mP(e));for(let e=0;e<this.hashCount;e++){let n=this.ye(t,r,e);if(!this.we(n))return!1}return!0}static create(e,t,r){let n=new mD(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.ge)return;let[t,r]=mO(mP(e));for(let e=0;e<this.hashCount;e++){let n=this.ye(t,r,e);this.be(n)}}be(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mL(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new mL(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new mL(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=m.fromNumber(this.ge)}}class mL extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class mM{static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,mF.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new mM(fI.min(),n,new fB(fu),p1,p7())}constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}}class mF{static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mF(r,t,p7(),p7(),p7())}constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}}class mB{constructor(e,t,r,n){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=n}}class mz{constructor(e,t){this.targetId=e,this.Ce=t}}class m${constructor(e,t,r=fq.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class mV{get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=p7(),t=p7(),r=p7();return this.Fe.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:d3(38017,{changeType:i})}}),new mF(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=mW()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,d6(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}constructor(){this.ve=0,this.Fe=mW(),this.Me=fq.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}}class mU{Xe(e){for(let t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(let t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{let r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:d3(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,r)=>{this.rt(r)&&t(r)})}st(e){let t=e.targetId,r=e.Ce.count,n=this.ot(t);if(n){let i=n.target;if(p$(i))if(0===r){let e=new fv(i.path);this.et(t,e,pb.newNoDocument(e,fI.min()))}else d6(1===r,20013,{expectedCount:r});else{let n=this._t(t);if(n!==r){let r=this.ut(e),i=r?this.ct(r,e,n):1;0!==i&&(this.it(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ut(e){let t,r,n=e.Ce.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:a=0},hashCount:s=0}=n;try{t=fY(i).toUint8Array()}catch(e){if(e instanceof fW)return d2("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new mD(t,a,s)}catch(e){return d2(e instanceof mL?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.ge?null:r}ct(e,t,r){return 2*(t.Ce.count!==r-this.Pt(e,t.targetId))}Pt(e,t){let r=this.Ge.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Ge.ht(),a=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.et(t,r,null),n++)}),n}Tt(e){let t=new Map;this.ze.forEach((r,n)=>{let i=this.ot(n);if(i){if(r.current&&p$(i.target)){let t=new fv(i.target.path);this.It(t).has(n)||this.Et(n,t)||this.et(n,t,pb.newNoDocument(t,e))}r.Be&&(t.set(n,r.ke()),r.Ke())}});let r=p7();this.Je.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.je.forEach((t,r)=>r.setReadTime(e));let n=new mM(e,t,this.Ze,this.je,r);return this.je=p1,this.He=mH(),this.Je=mH(),this.Ze=new fB(fu),n}Ye(e,t){if(!this.rt(e))return;let r=2*!!this.Et(e,t.key);this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;let n=this.nt(e);this.Et(e,t)?n.qe(t,1):n.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){let t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new mV,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new fV(fu),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new fV(fu),this.He=this.He.insert(e,t)),t}rt(e){let t=null!==this.ot(e);return t||d0("WatchChangeAggregator","Detected inactive target",e),t}ot(e){let t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mV),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Ge=e,this.ze=new Map,this.je=p1,this.He=mH(),this.Je=mH(),this.Ze=new fB(fu)}}function mH(){return new fB(fv.comparator)}function mW(){return new fB(fv.comparator)}let mq={asc:"ASCENDING",desc:"DESCENDING"},mG={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mK={and:"AND",or:"OR"};class mQ{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mY(e,t){return e.useProto3Json||null==t?t:{value:t}}function mX(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mJ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function mZ(e){let t;return d6(!!e,49232),fI.fromTimestamp(new fT((t=fK(e)).seconds,t.nanos))}function m0(e,t){return m1(e,t).canonicalString()}function m1(e,t){let r=new fm(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function m2(e){let t=fm.fromString(e);return d6(gt(t),10190,{key:t.toString()}),t}function m5(e,t){return m0(e.databaseId,t.path)}function m3(e,t){let r=m2(t);if(r.get(1)!==e.databaseId.projectId)throw new d7(d8.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new d7(d8.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new fv(m8(r))}function m4(e,t){return m0(e.databaseId,t)}function m6(e){return new fm(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function m8(e){return d6(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function m7(e,t,r){return{name:m5(e,t),fields:r.value.mapValue.fields}}function m9(e){return{fieldPath:e.canonicalString()}}function ge(e){return fy.fromServerFormat(e.fieldPath)}function gt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function gr(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}class gn{withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,r,n,i=fI.min(),a=fI.min(),s=fq.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=s,this.expectedCount=o}}class gi{constructor(e){this.yt=e}}class ga{Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(+!!e.booleanValue);else if("integerValue"in e)this.Ft(t,15),t.Mt(fQ(e.integerValue));else if("doubleValue"in e){let r=fQ(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),fD(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),"string"==typeof r&&(r=fK(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(fY(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?py(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):pm(e)?this.kt(e.mapValue,t):(this.Kt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Nt(t)):d3(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}Kt(e,t){let r=e.fields||{};for(let e of(this.Ft(t,55),Object.keys(r)))this.Ot(e,t),this.Ct(r[e],t)}kt(e,t){var r,n;let i=e.fields||{};this.Ft(t,53);let a=(null==(n=i[pt].arrayValue)||null==(r=n.values)?void 0:r.length)||0;this.Ft(t,15),t.Mt(fQ(a)),this.Ot(pt,t),this.Ct(i[pt],t)}qt(e,t){let r=e.values||[];for(let e of(this.Ft(t,50),r))this.Ct(e,t)}Lt(e,t){this.Ft(t,37),fv.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}ga.Wt=new ga;class gs{addToCollectionParentIndex(e,t){return this.Sn.add(t),fR.resolve()}getCollectionParents(e,t){return fR.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return fR.resolve()}deleteFieldIndex(e,t){return fR.resolve()}deleteAllFieldIndexes(e){return fR.resolve()}createTargetIndexes(e,t){return fR.resolve()}getDocumentsMatchingTarget(e,t){return fR.resolve(null)}getIndexType(e,t){return fR.resolve(0)}getFieldIndexes(e,t){return fR.resolve([])}getNextCollectionGroupToUpdate(e){return fR.resolve(null)}getMinOffset(e,t){return fR.resolve(fN.min())}getMinOffsetFromCollectionGroup(e,t){return fR.resolve(fN.min())}updateCollectionGroup(e,t,r){return fR.resolve()}updateIndexEntries(e,t){return fR.resolve()}constructor(){this.Sn=new go}}class go{add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new fV(fm.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new fV(fm.comparator)).toArray()}constructor(){this.index={}}}new Uint8Array(0);let gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gu{static withCacheSize(e){return new gu(e,gu.DEFAULT_COLLECTION_PERCENTILE,gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}gu.DEFAULT_COLLECTION_PERCENTILE=10,gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gu.DEFAULT=new gu(0x2800000,gu.DEFAULT_COLLECTION_PERCENTILE,gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gu.DISABLED=new gu(-1,0,0);class gc{next(){return this.sr+=2,this.sr}static _r(){return new gc(0)}static ar(){return new gc(-1)}constructor(e){this.sr=e}}let gh="LruGarbageCollector";function gd([e,t],[r,n]){let i=fu(e,r);return 0===i?fu(t,n):i}class gf{Ir(){return++this.Tr}Er(e){let t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>gd(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}constructor(e){this.Pr=e,this.buffer=new fV(gd),this.Tr=0}}class gp{start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){d0(gh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){fP(e)?d0(gh,"Ignoring IndexedDB error during garbage collection: ",e):await fA(e)}await this.Ar(3e5)})}constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}}class gm{calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return fR.resolve(fO.ce);let r=new gf(t);return this.Vr.forEachTarget(e,e=>r.Er(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>r.Er(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(d0("LruGarbageCollector","Garbage collection skipped; disabled"),fR.resolve(gl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(d0("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,n,i,a,s,o,l,u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(d0("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,a=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,s=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),dZ()<=p.DEBUG&&d0("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-u}ms
	Determined least recently used ${n} in `+(s-a)+"ms\n"+`	Removed ${i} targets in `+(o-s)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),fR.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}constructor(e,t){this.Vr=e,this.params=t}}class gg{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?fR.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new p0(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}}class gy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class gv{getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&mv(r.mutation,e,fH.empty(),fT.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,p7()).next(()=>t))}getLocalViewOfDocuments(e,t,r=p7()){let n=p4();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=p5();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=p4();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,p7()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=p1,a=p4(),s=p4();return t.forEach((e,t)=>{let s=r.get(t.key);n.has(t.key)&&(void 0===s||s.mutation instanceof mw)?i=i.insert(t.key,t):void 0!==s?(a.set(t.key,s.mutation.getFieldMask()),mv(s.mutation,t,s.mutation.getFieldMask(),fT.now())):a.set(t.key,fH.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>a.set(e,t)),t.forEach((e,t)=>{var r;return s.set(e,new gy(t,null!=(r=a.get(e))?r:null))}),s))}recalculateAndSaveOverlays(e,t){let r=p4(),n=new fB((e,t)=>e-t),i=p7();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let a=t.get(e);if(null===a)return;let s=r.get(e)||fH.empty();s=i.applyToLocalView(a,s),r.set(e,s);let o=(n.get(i.batchId)||p7()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let a=[],s=n.getReverseIterator();for(;s.hasNext();){let n=s.getNext(),o=n.key,l=n.value,u=p4();l.forEach(e=>{if(!i.has(e)){let n=my(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),a.push(this.documentOverlayCache.saveOverlays(e,o,u))}return fR.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return fv.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):pH(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let a=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):fR.resolve(p4()),s=-1,o=i;return a.next(t=>fR.forEach(t,(t,r)=>(s<r.largestBatchId&&(s=r.largestBatchId),i.get(t)?fR.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,p7())).next(e=>({batchId:s,changes:p3(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fv(t)).next(e=>{let t=p5();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,a=p5();return this.indexManager.getCollectionParents(e,i).next(s=>fR.forEach(s,s=>{let o=new pV(s.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{a=a.insert(e,t)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,pb.newInvalidDocument(n)))});let r=p5();return e.forEach((e,n)=>{let a=i.get(e);void 0!==a&&mv(a.mutation,n,fH.empty(),fT.now()),pJ(t,n)&&(r=r.insert(e,n))}),r})}constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}}class gb{getBundleMetadata(e,t){return fR.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,{id:t.id,version:t.version,createTime:mZ(t.createTime)}),fR.resolve()}getNamedQuery(e,t){return fR.resolve(this.Br.get(t))}saveNamedQuery(e,t){var r;let n;return this.Br.set(t.name,{name:t.name,query:(n=function(e){var t,r,n,i;let a,s,o,l,u,c=4===(a=m2(e.parent)).length?fm.emptyPath():m8(a),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){d6(1===d,65062);let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=(s=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ge(e.unaryFilter.field);return pC.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=ge(e.unaryFilter.field);return pC.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=ge(e.unaryFilter.field);return pC.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ge(e.unaryFilter.field);return pC.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return d3(61313);default:return d3(60726)}}(t):void 0!==t.fieldFilter?pC.create(ge(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return d3(58110);default:return d3(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?p_.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return d3(1026)}}(t.compositeFilter.op)):d3(30097,{filter:t})}(h.where))instanceof p_&&pI(t=s)&&pT(t)?s.getFilters():[s]);let m=[];h.orderBy&&(m=h.orderBy.map(e=>new pS(ge(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(o="object"==typeof(r=h.limit)?r.value:r)?null:o);let y=null;h.startAt&&(l=!!(n=h.startAt).before,y=new px(n.values||[],l));let v=null;return h.endAt&&(u=!(i=h.endAt).before,v=new px(i.values||[],u)),new pV(c,f,m,p,g,"F",y,v)}({parent:(r=t.bundledQuery).parent,structuredQuery:r.structuredQuery}),"LAST"===r.limitType?pK(n,n.limit,"L"):n),readTime:mZ(t.readTime)}),fR.resolve()}constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}}class gx{getOverlay(e,t){return fR.resolve(this.overlays.get(t))}getOverlays(e,t){let r=p4();return fR.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.bt(e,t,n)}),fR.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Lr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(r)),fR.resolve()}getOverlaysForCollection(e,t,r){let n=p4(),i=t.length+1,a=new fv(t.child("")),s=this.overlays.getIteratorFrom(a);for(;s.hasNext();){let e=s.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return fR.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new fB((e,t)=>e-t),a=this.overlays.getIterator();for(;a.hasNext();){let e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=p4(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let s=p4(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>s.set(e,t)),!(s.size()>=n)););return fR.resolve(s)}bt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Lr.get(n.largestBatchId).delete(r.key);this.Lr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new mN(t,r));let i=this.Lr.get(t);void 0===i&&(i=p7(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}constructor(){this.overlays=new fB(fv.comparator),this.Lr=new Map}}class gw{getSessionToken(e){return fR.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,fR.resolve()}constructor(){this.sessionToken=fq.EMPTY_BYTE_STRING}}class gE{isEmpty(){return this.kr.isEmpty()}addReference(e,t){let r=new gS(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new gS(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){let t=new fv(new fm([])),r=new gS(t,e),n=new gS(t,e+1),i=[];return this.qr.forEachInRange([r,n],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){let t=new fv(new fm([])),r=new gS(t,e),n=new gS(t,e+1),i=p7();return this.qr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new gS(e,0),r=this.kr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}constructor(){this.kr=new fV(gS.Kr),this.qr=new fV(gS.Ur)}}class gS{static Kr(e,t){return fv.comparator(e.key,t.key)||fu(e.Hr,t.Hr)}static Ur(e,t){return fu(e.Hr,t.Hr)||fv.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.Hr=t}}class gk{checkEmpty(e){return fR.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new mT(i,t,r,n);for(let t of(this.mutationQueue.push(a),n))this.Jr=this.Jr.add(new gS(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return fR.resolve(a)}lookupMutationBatch(e,t){return fR.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Xr(t+1),n=r<0?0:r;return fR.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return fR.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(e){return fR.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new gS(t,0),n=new gS(t,1/0),i=[];return this.Jr.forEachInRange([r,n],e=>{let t=this.Zr(e.Hr);i.push(t)}),fR.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fV(fu);return t.forEach(e=>{let t=new gS(e,0),n=new gS(e,1/0);this.Jr.forEachInRange([t,n],e=>{r=r.add(e.Hr)})}),fR.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;fv.isDocumentKey(i)||(i=i.child(""));let a=new gS(new fv(i),0),s=new fV(fu);return this.Jr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(s=s.add(e.Hr)),!0)},a),fR.resolve(this.Yr(s))}Yr(e){let t=[];return e.forEach(e=>{let r=this.Zr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){d6(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Jr;return fR.forEach(t.mutations,n=>{let i=new gS(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){let r=new gS(t,0),n=this.Jr.firstAfterOrEqual(r);return fR.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,fR.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new fV(gS.Kr)}}class gC{setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return fR.resolve(r?r.document.mutableCopy():pb.newInvalidDocument(t))}getEntries(e,t){let r=p1;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():pb.newInvalidDocument(e))}),fR.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=p1,a=t.path,s=new fv(a.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){let{key:e,value:{document:s}}=o.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r||0!==(r=fv.comparator(e.documentKey,t.documentKey))?r:fu(e.largestBatchId,t.largestBatchId)}(new fN(s.readTime,s.key,-1),r)||(n.has(s.key)||pJ(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return fR.resolve(i)}getAllFromCollectionGroup(e,t,r,n){d3(9500)}ni(e,t){return fR.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new g_(this)}getSize(e){return fR.resolve(this.size)}constructor(e){this.ti=e,this.docs=new fB(fv.comparator),this.size=0}}class g_ extends gg{applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Mr.addEntry(e,n)):this.Mr.removeEntry(r)}),fR.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}constructor(e){super(),this.Mr=e}}class gT{forEachTarget(e,t){return this.ri.forEach((e,r)=>t(r)),fR.resolve()}getLastRemoteSnapshotVersion(e){return fR.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return fR.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),fR.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),fR.resolve()}lr(e){this.ri.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.oi=new gc(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,fR.resolve()}updateTargetData(e,t){return this.lr(t),fR.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,fR.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.ri.forEach((a,s)=>{s.sequenceNumber<=t&&null===r.get(s.targetId)&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),n++)}),fR.waitFor(i).next(()=>n)}getTargetCount(e){return fR.resolve(this.targetCount)}getTargetData(e,t){let r=this.ri.get(t)||null;return fR.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),fR.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),fR.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),fR.resolve()}getMatchingKeysForTargetId(e,t){let r=this.si.jr(t);return fR.resolve(r)}containsKey(e,t){return fR.resolve(this.si.containsKey(t))}constructor(e){this.persistence=e,this.ri=new p0(e=>pB(e),pz),this.lastRemoteSnapshotVersion=fI.min(),this.highestTargetId=0,this.ii=0,this.si=new gE,this.targetCount=0,this.oi=gc._r()}}class gI{start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new gk(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){d0("MemoryPersistence","Starting transaction:",e);let n=new gN(this.ai.next());return this.referenceDelegate.Ti(),r(n).next(e=>this.referenceDelegate.Ii(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ei(e,t){return fR.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}constructor(e,t){this._i={},this.overlays={},this.ai=new fO(0),this.ui=!1,this.ui=!0,this.ci=new gw,this.referenceDelegate=e(this),this.li=new gT(this),this.indexManager=new gs,this.remoteDocumentCache=new gC(e=>this.referenceDelegate.hi(e)),this.serializer=new gi(t),this.Pi=new gb(this.serializer)}}class gN extends fj{constructor(e){super(),this.currentSequenceNumber=e}}class gj{static Vi(e){return new gj(e)}get di(){if(this.Ai)return this.Ai;throw d3(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),fR.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),fR.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),fR.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fR.forEach(this.di,r=>{let n=fv.fromPath(r);return this.mi(e,n).next(e=>{e||t.removeEntry(n,fI.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return fR.or([()=>fR.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}constructor(e){this.persistence=e,this.Ri=new gE,this.Ai=null}}class gA{static Vi(e,t){return new gA(e,t)}Ti(){}Ii(e){return fR.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){let t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return fR.forEach(this.fi,(r,n)=>this.wr(e,r,n).next(e=>e?fR.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.ni(e,n=>this.wr(e,n,t).next(e=>{e||(r++,i.removeEntry(n,fI.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),fR.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),fR.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),fR.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),fR.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=f2(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return fY(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,fM(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw d3(13486,{value:t})}}(e.data.value)),t}wr(e,t,r){return fR.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.fi.get(t);return fR.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}constructor(e,t){this.persistence=e,this.fi=new p0(e=>(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new gm(this,t)}}class gR{static Es(e,t){let r=p7(),n=p7();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new gR(e,t.fromCache,r,n)}constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=n}}class gP{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}constructor(){this._documentReadCount=0}}class gO{initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new gP;return this.ys(e,t,r).next(n=>{if(i.result=n,this.As)return this.ws(e,t,r,n.size)})}).next(()=>i.result)}ws(e,t,r,n){return r.documentReadCount<this.Vs?(dZ()<=p.DEBUG&&d0("QueryEngine","SDK will not create cache indexes for query:",pX(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),fR.resolve()):(dZ()<=p.DEBUG&&d0("QueryEngine","Query:",pX(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ds*n?(dZ()<=p.DEBUG&&d0("QueryEngine","The SDK decides to create cache indexes for query:",pX(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pq(t))):fR.resolve())}gs(e,t){if(pU(t))return fR.resolve(null);let r=pq(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=pq(t=pK(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=p7(...n);return this.fs.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let a=this.bs(t,n);return this.Ss(t,a,i,r.readTime)?this.gs(e,pK(t,null,"F")):this.Ds(e,a,t,r)}))})))}ps(e,t,r,n){return pU(t)||n.isEqual(fI.min())?fR.resolve(null):this.fs.getDocuments(e,r).next(i=>{let a,s,o=this.bs(t,i);return this.Ss(t,o,r,n)?fR.resolve(null):(dZ()<=p.DEBUG&&d0("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),pX(t)),this.Ds(e,o,t,(a=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,new fN(fI.fromTimestamp(1e9===s?new fT(a+1,0):new fT(a,s)),fv.empty(),-1))).next(e=>e))})}bs(e,t){let r=new fV(pZ(e));return t.forEach((t,n)=>{pJ(e,n)&&(r=r.add(n))}),r}Ss(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}ys(e,t,r){return dZ()<=p.DEBUG&&d0("QueryEngine","Using full collection scan to execute query:",pX(t)),this.fs.getDocumentsMatchingQuery(e,t,fN.min(),r)}Ds(e,t,r,n){return this.fs.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}constructor(){let e;this.Rs=!1,this.As=!1,this.Vs=100,this.ds=!function(){var e;let t=null==(e=hs())?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(R.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:Number((e=("u">typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"").match(/Android ([\d.]+)/i))?e[1].split(".").slice(0,2).join("."):"-1")>0?6:4}}let gD="LocalStore";class gL{Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}constructor(e,t,r,n){this.persistence=e,this.Cs=t,this.serializer=n,this.vs=new fB(fu),this.Fs=new p0(e=>pB(e),pz),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}}async function gM(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],a=[],s=p7();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))s=s.add(t.key);for(let e of t)for(let t of(a.push(e.batchId),e.mutations))s=s.add(t.key);return e.localDocuments.getDocuments(r,s).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:a}))})})}function gF(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}async function gB(e,t,r){let n=e.vs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!fP(e))throw e;d0(gD,`Failed to update sequence numbers for target ${t}: ${e}`)}e.vs=e.vs.remove(t),e.Fs.delete(n.target)}function gz(e,t,r){let n=fI.min(),i=p7();return e.persistence.runTransaction("Execute query","readwrite",a=>{var s;let o;return(s=pq(t),void 0!==(o=e.Fs.get(s))?fR.resolve(e.vs.get(o)):e.li.getTargetData(a,s)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.li.getMatchingKeysForTargetId(a,t.targetId).next(e=>{i=e})}).next(()=>e.Cs.getDocumentsMatchingQuery(a,t,r?n:fI.min(),r?i:p7())).next(r=>{var n,a,s;let o;return n=e,a=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=r,o=n.Ms.get(a)||fI.min(),s.forEach((e,t)=>{t.readTime.compareTo(o)>0&&(o=t.readTime)}),n.Ms.set(a,o),{documents:r,ks:i}})})}class g${Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}constructor(){this.activeTargetIds=p9}}class gV{addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new g$,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.vo=new g$,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}class gU{Mo(e){}shutdown(){}}let gH="ConnectivityMonitor";class gW{Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){for(let e of(d0(gH,"Network connectivity changed: AVAILABLE"),this.Lo))e(0)}Bo(){for(let e of(d0(gH,"Network connectivity changed: UNAVAILABLE"),this.Lo))e(1)}static v(){return"u">typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}}let gq=null;function gG(){return null===gq?gq=0x10000000+Math.round(0x80000000*Math.random()):gq++,"0x"+gq.toString(16)}let gK="RestConnection",gQ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gY{get Ko(){return!1}Wo(e,t,r,n,i){let a=gG(),s=this.Qo(e,t.toUriEncodedString());d0(gK,`Sending RPC '${e}' ${a}:`,s,r);let o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(o,n,i);let{host:l}=new URL(s),u=hu(l);return this.zo(e,s,o,r,u).then(t=>(d0(gK,`Received RPC '${e}' ${a}: `,t),t),t=>{throw d2(gK,`RPC '${e}' ${a} failed with error: `,t,"url: ",s,"request:",r),t})}jo(e,t,r,n,i,a){return this.Wo(e,t,r,n,i)}Go(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+dX,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Qo(e,t){let r=gQ[e],n=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(n=`${n}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),n}terminate(){}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${n}`,this.$o=this.databaseId.database===f4?`project_id=${r}`:`project_id=${r}&database_id=${n}`}}class gX{Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}}let gJ="WebChannelConnection",gZ=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};class g0 extends gY{static u_(){g0.c_||(gZ(S(),E.STAT_EVENT,e=>{e.stat===w.PROXY?d0(gJ,"STAT_EVENT: detected buffering proxy"):e.stat===w.NOPROXY&&d0(gJ,"STAT_EVENT: detected no buffering proxy")}),g0.c_=!0)}zo(e,t,r,n,i){let a=gG();return new Promise((i,s)=>{let o=new y;o.setWithCredentials(!0),o.listenOnce(b.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case x.NO_ERROR:let t=o.getResponseJson();d0(gJ,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case x.TIMEOUT:d0(gJ,`RPC '${e}' ${a} timed out`),s(new d7(d8.DEADLINE_EXCEEDED,"Request time out"));break;case x.HTTP_ERROR:let r=o.getStatus();if(d0(gJ,`RPC '${e}' ${a} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e,r=(e=t.status.toLowerCase().replace(/_/g,"-"),Object.values(d8).indexOf(e)>=0?e:d8.UNKNOWN);s(new d7(r,t.message))}else s(new d7(d8.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new d7(d8.UNAVAILABLE,"Connection failed."));break;default:d3(9055,{l_:e,streamId:a,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{d0(gJ,`RPC '${e}' ${a} completed.`)}});let l=JSON.stringify(n);d0(gJ,`RPC '${e}' ${a} sending request:`,n),o.send(t,"POST",l,r,15)})}T_(e,t,r){let n=gG(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(s.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Go(s.initMessageHeaders,t,r),s.encodeInitMessageHeaders=!0;let l=i.join("");d0(gJ,`Creating RPC '${e}' stream ${n}: ${l}`,s);let u=a.createWebChannel(l,s);this.I_(u);let c=!1,h=!1,d=new gX({Ho:t=>{h?d0(gJ,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(d0(gJ,`Opening RPC '${e}' stream ${n} transport.`),u.open(),c=!0),d0(gJ,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Jo:()=>u.close()});return gZ(u,v.EventType.OPEN,()=>{h||(d0(gJ,`RPC '${e}' stream ${n} transport opened.`),d.i_())}),gZ(u,v.EventType.CLOSE,()=>{h||(h=!0,d0(gJ,`RPC '${e}' stream ${n} transport closed`),d.o_(),this.E_(u))}),gZ(u,v.EventType.ERROR,t=>{h||(h=!0,d2(gJ,`RPC '${e}' stream ${n} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new d7(d8.UNAVAILABLE,"The operation could not be completed")))}),gZ(u,v.EventType.MESSAGE,t=>{if(!h){var r;let i=t.data[0];d6(!!i,16349);let a=(null==i?void 0:i.error)||(null==(r=i[0])?void 0:r.error);if(a){d0(gJ,`RPC '${e}' stream ${n} received error:`,a);let t=a.status,r=function(e){let t=I[e];if(void 0!==t)return mA(t)}(t),i=a.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&d2(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===r&&(r=d8.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),h=!0,d.o_(new d7(r,i)),u.close()}else d0(gJ,`RPC '${e}' stream ${n} received:`,i),d.__(i)}}),g0.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return k()}constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}function g1(){return"u">typeof document?document:null}function g2(e){return new mQ(e,!0)}g0.c_=!1;class g5{reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();let t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),n=Math.max(0,t-r);n>0&&d0("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,n,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=n,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}}let g3="PersistentStream";class g4{x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===d8.RESOURCE_EXHAUSTED?(d1(t.toString()),d1("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===d8.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;let e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.D_===t&&this.G_(e,r)},t=>{e(()=>{let e=new d7(d8.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){let r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{r(()=>this.z_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.F_?this.H_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return d0(g3,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(d0(g3,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}constructor(e,t,r,n,i,a,s,o){this.Ci=e,this.b_=r,this.S_=n,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=s,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new g5(e,t)}}class g6 extends g4{j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let a="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:d3(39313,{state:n}),s=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(d6(void 0===i||"string"==typeof i,58123),fq.fromBase64String(i||"")):(d6(void 0===i||i instanceof dg||i instanceof Uint8Array,16193),fq.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new m$(a,s,o,l&&new d7(void 0===l.code?d8.UNKNOWN:mA(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=m3(e,n.document.name),a=mZ(n.document.updateTime),s=n.document.createTime?mZ(n.document.createTime):fI.min(),o=new pv({mapValue:{fields:n.document.fields}}),l=pb.newFoundDocument(i,a,s,o);r=new mB(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=m3(e,n.document),a=n.readTime?mZ(n.readTime):fI.min(),s=pb.newNoDocument(i,a);r=new mB([],n.removedTargetIds||[],s.key,s)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=m3(e,n.document);r=new mB([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return d3(11601,{Vt:t});{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,a=new mj(n,i);r=new mz(e.targetId,a)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return fI.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?fI.min():t.readTime?mZ(t.readTime):fI.min()}(e);return this.listener.J_(t,r)}Z_(e){let t,r={};r.database=m6(this.serializer),r.addTarget=function(e,t){var r,n;let i,a,s,o,l,u,c,h=t.target;if((i=p$(h)?{documents:{documents:[m4(e,h.path)]}}:{query:(s={structuredQuery:{}},o=h.path,null!==h.collectionGroup?(a=o,s.structuredQuery.from=[{collectionId:h.collectionGroup,allDescendants:!0}]):(a=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=m4(e,a),(l=function(e){if(0!==e.length)return function e(t){var r;let n;return t instanceof pC?function(e){if("=="===e.op){if(pf(e.value))return{unaryFilter:{field:m9(e.field),op:"IS_NAN"}};if(pd(e.value))return{unaryFilter:{field:m9(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(pf(e.value))return{unaryFilter:{field:m9(e.field),op:"IS_NOT_NAN"}};if(pd(e.value))return{unaryFilter:{field:m9(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:m9(e.field),op:mG[e.op],value:e.value}}}(t):t instanceof p_?1===(n=(r=t).getFilters().map(t=>e(t))).length?n[0]:{compositeFilter:{op:mK[r.op],filters:n}}:d3(54877,{filter:t})}(p_.create(e,"and"))}(h.filters))&&(s.structuredQuery.where=l),(u=function(e){if(0!==e.length)return e.map(e=>({field:m9(e.field),direction:mq[e.dir]}))}(h.orderBy))&&(s.structuredQuery.orderBy=u),null!==(c=mY(e,h.limit))&&(s.structuredQuery.limit=c),h.startAt&&(s.structuredQuery.startAt={before:(r=h.startAt).inclusive,values:r.position}),h.endAt&&(s.structuredQuery.endAt={before:!(n=h.endAt).inclusive,values:n.position}),{ft:s,parent:a}).ft}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){i.resumeToken=mJ(e,t.resumeToken);let r=mY(e,t.expectedCount);null!==r&&(i.expectedCount=r)}else if(t.snapshotVersion.compareTo(fI.min())>0){i.readTime=mX(e,t.snapshotVersion.toTimestamp());let r=mY(e,t.expectedCount);null!==r&&(i.expectedCount=r)}return i}(this.serializer,e);let n=(this.serializer,null==(t=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return d3(28987,{purpose:e})}}(e.purpose))?null:{"goog-listen-tags":t});n&&(r.labels=n),this.K_(r)}X_(e){let t={};t.database=m6(this.serializer),t.removeTarget=e,this.K_(t)}constructor(e,t,r,n,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,a),this.serializer=i}}class g8 extends g4{get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return d6(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,d6(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){var t,r;d6(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(d6(void 0!==r,14353),t.map(e=>{let t;return(t=e.updateTime?mZ(e.updateTime):mZ(r)).isEqual(fI.min())&&(t=mZ(r)),new mf(t,e.transformResults||[])})):[]),i=mZ(e.commitTime);return this.listener.na(i,n)}ra(){let e={};e.database=m6(this.serializer),this.K_(e)}ea(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r,n;let i;if(t instanceof mx)i={update:m7(e,t.key,t.value)};else if(t instanceof mC)i={delete:m5(e,t.key)};else if(t instanceof mw){let r;i={update:m7(e,t.key,t.data),updateMask:(n=t.fieldMask,r=[],n.fields.forEach(e=>r.push(e.canonicalString())),{fieldPaths:r})}}else{if(!(t instanceof m_))return d3(16599,{dt:t.type});i={verify:m5(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e){let t=e.transform;if(t instanceof mi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(t instanceof ma)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:t.elements}};if(t instanceof mo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:t.elements}};if(t instanceof mu)return{fieldPath:e.field.canonicalString(),increment:t.Ae};throw d3(20930,{transform:e.transform})})(e))),t.precondition.isNone||(i.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:mX(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:d3(27497)),i})(this.serializer,e))};this.K_(t)}constructor(e,t,r,n,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,a),this.serializer=i}}class g7{}class g9 extends g7{sa(){if(this.ia)throw new d7(d8.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,n){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,m1(t,r),n,i,a)).catch(e=>{throw"FirebaseError"===e.name?(e.code===d8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new d7(d8.UNKNOWN,e.toString())})}jo(e,t,r,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,s])=>this.connection.jo(e,m1(t,r),n,a,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===d8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new d7(d8.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.ia=!1}}class ye{ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(d1(t),this.aa=!1):d0("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}}let yt="RemoteStore";class yr{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{r.enqueueAndForget(async()=>{yh(this)&&(d0(yt,"Restarting streams for network reachability change."),await async function(e){e.Ea.add(4),await yi(e),e.Va.set("Unknown"),e.Ea.delete(4),await yn(e)}(this))})}),this.Va=new ye(r,n)}}async function yn(e){if(yh(e))for(let t of e.Ra)await t(!0)}async function yi(e){for(let t of e.Ra)await t(!1)}function ya(e,t){e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),yc(e)?yu(e):yT(e).O_()&&yo(e,t))}function ys(e,t){let r=yT(e);e.Ia.delete(t),r.O_()&&yl(e,t),0===e.Ia.size&&(r.O_()?r.L_():yh(e)&&e.Va.set("Unknown"))}function yo(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(fI.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}yT(e).Z_(t)}function yl(e,t){e.da.$e(t),yT(e).X_(t)}function yu(e){e.da=new mU({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),yT(e).start(),e.Va.ua()}function yc(e){return yh(e)&&!yT(e).x_()&&e.Ia.size>0}function yh(e){return 0===e.Ea.size}async function yd(e){e.Va.set("Online")}async function yf(e){e.Ia.forEach((t,r)=>{yo(e,t)})}async function yp(e,t){e.da=void 0,yc(e)?(e.Va.ha(t),yu(e)):e.Va.set("Unknown")}async function ym(e,t,r){if(e.Va.set("Online"),t instanceof m$&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Ia.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Ia.delete(n),e.da.removeTarget(n))}(e,t)}catch(r){d0(yt,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yg(e,r)}else if(t instanceof mB?e.da.Xe(t):t instanceof mz?e.da.st(t):e.da.tt(t),!r.isEqual(fI.min()))try{let t,n=await gF(e.localStore);r.compareTo(n)>=0&&await ((t=e.da.Tt(r)).targetChanges.forEach((t,n)=>{if(t.resumeToken.approximateByteSize()>0){let i=e.Ia.get(n);i&&e.Ia.set(n,i.withResumeToken(t.resumeToken,r))}}),t.targetMismatches.forEach((t,r)=>{let n=e.Ia.get(t);if(!n)return;e.Ia.set(t,n.withResumeToken(fq.EMPTY_BYTE_STRING,n.snapshotVersion)),yl(e,t);let i=new gn(n.target,t,r,n.sequenceNumber);yo(e,i)}),e.remoteSyncer.applyRemoteEvent(t))}catch(t){d0(yt,"Failed to raise snapshot:",t),await yg(e,t)}}async function yg(e,t,r){if(!fP(t))throw t;e.Ea.add(1),await yi(e),e.Va.set("Offline"),r||(r=()=>gF(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{d0(yt,"Retrying IndexedDB access"),await r(),e.Ea.delete(1),await yn(e)})}function yy(e,t){return t().catch(r=>yg(e,r,t))}async function yv(e){var t;let r=yI(e),n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;yh(t=e)&&t.Ta.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,n);if(null===t){0===e.Ta.length&&r.L_();break}n=t.batchId,function(e,t){e.Ta.push(t);let r=yI(e);r.O_()&&r.Y_&&r.ea(t.mutations)}(e,t)}catch(t){await yg(e,t)}yb(e)&&yx(e)}function yb(e){return yh(e)&&!yI(e).x_()&&e.Ta.length>0}function yx(e){yI(e).start()}async function yw(e){yI(e).ra()}async function yE(e){let t=yI(e);for(let r of e.Ta)t.ea(r.mutations)}async function yS(e,t,r){let n=e.Ta.shift(),i=mI.from(n,t,r);await yy(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await yv(e)}async function yk(e,t){t&&yI(e).Y_&&await async function(e,t){var r;if(function(e){switch(e){case d8.OK:return d3(64938);case d8.CANCELLED:case d8.UNKNOWN:case d8.DEADLINE_EXCEEDED:case d8.RESOURCE_EXHAUSTED:case d8.INTERNAL:case d8.UNAVAILABLE:case d8.UNAUTHENTICATED:return!1;case d8.INVALID_ARGUMENT:case d8.NOT_FOUND:case d8.ALREADY_EXISTS:case d8.PERMISSION_DENIED:case d8.FAILED_PRECONDITION:case d8.ABORTED:case d8.OUT_OF_RANGE:case d8.UNIMPLEMENTED:case d8.DATA_LOSS:return!0;default:return d3(15467,{code:e})}}(r=t.code)&&r!==d8.ABORTED){let r=e.Ta.shift();yI(e).B_(),await yy(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await yv(e)}}(e,t),yb(e)&&yx(e)}async function yC(e,t){e.asyncQueue.verifyOperationInProgress(),d0(yt,"RemoteStore received new credentials");let r=yh(e);e.Ea.add(3),await yi(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await yn(e)}async function y_(e,t){t?(e.Ea.delete(2),await yn(e)):t||(e.Ea.add(2),await yi(e),e.Va.set("Unknown"))}function yT(e){var t,r,n;return e.ma||(t=e.datastore,r=e.asyncQueue,n={Zo:yd.bind(null,e),Yo:yf.bind(null,e),t_:yp.bind(null,e),J_:ym.bind(null,e)},t.sa(),e.ma=new g6(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n),e.Ra.push(async t=>{t?(e.ma.B_(),yc(e)?yu(e):e.Va.set("Unknown")):(await e.ma.stop(),e.da=void 0)})),e.ma}function yI(e){var t,r,n;return e.fa||(t=e.datastore,r=e.asyncQueue,n={Zo:()=>Promise.resolve(),Yo:yw.bind(null,e),t_:yk.bind(null,e),ta:yE.bind(null,e),na:yS.bind(null,e)},t.sa(),e.fa=new g8(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n),e.Ra.push(async t=>{t?(e.fa.B_(),await yv(e)):(await e.fa.stop(),e.Ta.length>0&&(d0(yt,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}class yN{get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let a=new yN(e,t,Date.now()+r,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new d7(d8.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new d9,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}}function yj(e,t){if(d1("AsyncQueue",`${t}: ${e}`),fP(e))return new d7(d8.UNAVAILABLE,`${t}: ${e}`);throw e}class yA{static emptySet(e){return new yA(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yA)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new yA;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}constructor(e){this.comparator=e?(t,r)=>e(t,r)||fv.comparator(t.key,r.key):(e,t)=>fv.comparator(e.key,t.key),this.keyedMap=p5(),this.sortedSet=new fB(this.comparator)}}class yR{track(e){let t=e.doc.key,r=this.ga.get(t);r?0!==e.type&&3===r.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==r.type?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.ga=this.ga.remove(t):1===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):d3(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){let e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}constructor(){this.ga=new fB(fv.comparator)}}class yP{static fromInitialDocuments(e,t,r,n,i){let a=[];return t.forEach(e=>{a.push({type:0,doc:e})}),new yP(e,t,yA.emptySet(t),a,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pQ(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}constructor(e,t,r,n,i,a,s,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=s,this.excludesMetadataChanges=o,this.hasCachedResults=l}}class yO{Sa(){return this.ba.some(e=>e.Da())}constructor(){this.wa=void 0,this.ba=[]}}class yD{terminate(){var e;let t;e=new d7(d8.ABORTED,"Firestore shutting down"),t=this.queries,this.queries=yL(),t.forEach((t,r)=>{for(let t of r.ba)t.onError(e)})}constructor(){this.queries=yL(),this.onlineState="Unknown",this.Ca=new Set}}function yL(){return new p0(e=>pY(e),pQ)}async function yM(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Sa()&&t.Da()&&(r=2):(i=new yO,r=+!t.Da());try{switch(r){case 0:i.wa=await e.onListen(n,!0);break;case 1:i.wa=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=yj(r,`Initialization of query '${pX(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ba.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&y$(e)}async function yF(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ba.indexOf(t);e>=0&&(i.ba.splice(e,1),0===i.ba.length?n=+!t.Da():!i.Sa()&&t.Da()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function yB(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ba)e.Fa(n)&&(r=!0);i.wa=n}}r&&y$(e)}function yz(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ba)e.onError(r);e.queries.delete(t)}function y$(e){e.Ca.forEach(e=>{e.next()})}(A=j||(j={})).Ma="default",A.Cache="cache";class yV{Fa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new yP(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){return!(e.fromCache&&this.Da())||(!this.options.Ka||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;let t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=yP.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==j.Cache}constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}}class yU{constructor(e){this.key=e}}class yH{constructor(e){this.key=e}}class yW{get nu(){return this.Za}ru(e,t){let r=t?t.iu:new yR,n=t?t.tu:this.tu,i=t?t.mutatedKeys:this.mutatedKeys,a=n,s=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=pJ(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.su(u,c)||(r.track({type:2,doc:c}),f=!0,(o&&this.eu(c,o)>0||l&&0>this.eu(c,l))&&(s=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(s=!0)),f&&(c?(a=a.add(c),i=d?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;a.size>this.query.limit;){let e="F"===this.query.limitType?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{tu:a,iu:r,Ss:s,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;let a=e.iu.ya();a.sort((e,t)=>{var r,n;let i;return r=e.type,n=t.type,(i=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return d3(20277,{Vt:e})}})(r)-i(n)||this.eu(e.doc,t.doc)}),this.ou(r),n=null!=n&&n;let s=t&&!n?this._u():[],o=0===this.Ya.size&&this.current&&!n?1:0,l=o!==this.Xa;return(this.Xa=o,0!==a.length||l)?{snapshot:new yP(this.query,e.tu,i,a,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:s}:{au:s}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yR,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];let e=this.Ya;this.Ya=p7(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});let t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new yH(e))}),this.Ya.forEach(r=>{e.has(r)||t.push(new yU(r))}),t}cu(e){this.Za=e.ks,this.Ya=p7();let t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yP.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=p7(),this.mutatedKeys=p7(),this.eu=pZ(e),this.tu=new yA(this.eu)}}let yq="SyncEngine";class yG{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yK{constructor(e){this.key=e,this.hu=!1}}class yQ{get isPrimaryClient(){return!0===this.gu}constructor(e,t,r,n,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new p0(e=>pY(e),pQ),this.Iu=new Map,this.Eu=new Set,this.Ru=new fB(fv.comparator),this.Au=new Map,this.Vu=new gE,this.du={},this.mu=new Map,this.fu=gc.ar(),this.onlineState="Unknown",this.gu=void 0}}async function yY(e,t,r=!0){let n,i=vo(e),a=i.Tu.get(t);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),n=a.view.lu()):n=await yJ(i,t,r,!0),n}async function yX(e,t){let r=vo(e);await yJ(r,t,!0,!1)}async function yJ(e,t,r,n){var i,a;let s,o=await (i=e.localStore,a=pq(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.li.getTargetData(e,a).next(r=>r?(t=r,fR.resolve(t)):i.li.allocateTargetId(e).next(r=>(t=new gn(a,r,"TargetPurposeListen",e.currentSequenceNumber),i.li.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.vs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.vs=i.vs.insert(e.targetId,e),i.Fs.set(a,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(s=await yZ(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&r&&ya(e.remoteStore,o),s}async function yZ(e,t,r,n,i){e.pu=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ru(r);i.Ss&&(i=await gz(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));let a=n&&n.targetChanges.get(t.targetId),s=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,a,s);return vr(e,t.targetId,o.au),o.snapshot})(e,t,r,n);let a=await gz(e.localStore,t,!0),s=new yW(t,a.ks),o=s.ru(a.documents),l=mF.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=s.applyChanges(o,e.isPrimaryClient,l);vr(e,r,u.au);let c=new yG(t,r,s);return e.Tu.set(t,c),e.Iu.has(r)?e.Iu.get(r).push(t):e.Iu.set(r,[t]),u.snapshot}async function y0(e,t,r){let n=e.Tu.get(t),i=e.Iu.get(n.targetId);i.length>1?(e.Iu.set(n.targetId,i.filter(e=>!pQ(e,t))),e.Tu.delete(t)):e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await gB(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&ys(e.remoteStore,n.targetId),ve(e,n.targetId)}).catch(fA)):(ve(e,n.targetId),await gB(e.localStore,n.targetId,!0))}async function y1(e,t){let r=e.Tu.get(t),n=e.Iu.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ys(e.remoteStore,r.targetId))}async function y2(e,t,r){var n,i,a;let s=((n=e).remoteStore.remoteSyncer.applySuccessfulWrite=y6.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=y8.bind(null,n),n);try{let e,n,o,l,u,c=await (i=s.localStore,o=fT.now(),l=t.reduce((e,t)=>e.add(t.key),p7()),i.persistence.runTransaction("Locally write mutations","readwrite",r=>{let a=p1,s=p7();return i.xs.getEntries(r,l).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(s=s.add(e))})}).next(()=>i.localDocuments.getOverlayedDocuments(r,a)).next(n=>{e=n;let a=[];for(let r of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=mn(n.transform,e||null);null!=i&&(null===r&&(r=pv.empty()),r.set(n.field,i))}return r||null}(r,e.get(r.key).overlayedDocument);null!=t&&a.push(new mw(r.key,t,function e(t){let r=[];return fM(t.fields,(t,n)=>{let i=new fy([t]);if(pp(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new fH(r)}(t.value.mapValue),mp.exists(!0)))}return i.mutationQueue.addMutationBatch(r,o,a,t)}).next(t=>{n=t;let a=t.applyToLocalDocumentSet(e,s);return i.documentOverlayCache.saveOverlays(r,t.batchId,a)})}).then(()=>({batchId:n.batchId,changes:p3(e)})));s.sharedClientState.addPendingMutation(c.batchId),a=c.batchId,(u=s.du[s.currentUser.toKey()])||(u=new fB(fu)),u=u.insert(a,r),s.du[s.currentUser.toKey()]=u,await vi(s,c.changes),await yv(s.remoteStore)}catch(t){let e=yj(t,"Failed to persist write");r.reject(e)}}async function y5(e,t){try{var r,n;let i,a,s=await (r=e.localStore,i=(n=t).snapshotVersion,a=r.vs,r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var t,s,o;let l,u,c=r.xs.newChangeBuffer({trackRemovals:!0});a=r.vs;let h=[];n.targetChanges.forEach((t,s)=>{var o;let l=a.get(s);if(!l)return;h.push(r.li.removeMatchingKeys(e,t.removedDocuments,s).next(()=>r.li.addMatchingKeys(e,t.addedDocuments,s)));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==n.targetMismatches.get(s)?u=u.withResumeToken(fq.EMPTY_BYTE_STRING,fI.min()).withLastLimboFreeSnapshotVersion(fI.min()):t.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(t.resumeToken,i)),a=a.insert(s,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size>0)&&h.push(r.li.updateTargetData(e,u))});let d=p1,f=p7();if(n.documentUpdates.forEach(t=>{n.resolvedLimboDocuments.has(t)&&h.push(r.persistence.referenceDelegate.updateLimboDocument(e,t))}),h.push((t=e,s=c,o=n.documentUpdates,l=p7(),u=p7(),o.forEach(e=>l=l.add(e)),s.getEntries(t,l).next(e=>{let t=p1;return o.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(u=u.add(r)),n.isNoDocument()&&n.version.isEqual(fI.min())?(s.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(s.addEntry(n),t=t.insert(r,n)):d0(gD,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Bs:t,Ls:u}})).next(e=>{d=e.Bs,f=e.Ls})),!i.isEqual(fI.min())){let t=r.li.getLastRemoteSnapshotVersion(e).next(t=>r.li.setTargetsMetadata(e,e.currentSequenceNumber,i));h.push(t)}return fR.waitFor(h).next(()=>c.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,d,f)).next(()=>d)}).then(e=>(r.vs=a,e)));t.targetChanges.forEach((t,r)=>{let n=e.Au.get(r);n&&(d6(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?n.hu=!0:t.modifiedDocuments.size>0?d6(n.hu,14607):t.removedDocuments.size>0&&(d6(n.hu,42227),n.hu=!1))}),await vi(e,s,t)}catch(e){await fA(e)}}function y3(e,t,r){if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){var n;let r,i=[];e.Tu.forEach((e,r)=>{let n=r.view.va(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ba)e.va(t)&&(r=!0)}),r&&y$(n),i.length&&e.Pu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function y4(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Au.get(t),i=n&&n.key;if(i){let r=new fB(fv.comparator);r=r.insert(i,pb.newNoDocument(i,fI.min()));let n=p7().add(i),a=new mM(fI.min(),new Map,new fB(fu),r,n);await y5(e,a),e.Ru=e.Ru.remove(i),e.Au.delete(t),vn(e)}else await gB(e.localStore,t,!1).then(()=>ve(e,t,r)).catch(fA)}async function y6(e,t){let r=t.batch.batchId;try{var n,i;let a=await (n=e.localStore,i=t,n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let t,r,a,s=i.batch.keys(),o=n.xs.newChangeBuffer({trackRemovals:!0});return(r=(t=i.batch).keys(),a=fR.resolve(),r.forEach(r=>{a=a.next(()=>o.getEntry(e,r)).next(e=>{let n=i.docVersions.get(r);d6(null!==n,48541),0>e.version.compareTo(n)&&(t.applyToRemoteDocument(e,i),e.isValidDocument()&&(e.setReadTime(i.commitVersion),o.addEntry(e)))})}),a.next(()=>n.mutationQueue.removeMutationBatch(e,t))).next(()=>o.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,i.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=p7();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(i))).next(()=>n.localDocuments.getDocuments(e,s))}));y9(e,r,null),y7(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await vi(e,a)}catch(e){await fA(e)}}async function y8(e,t,r){try{var n;let i=await (n=e.localStore,n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(d6(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))}));y9(e,t,r),y7(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await vi(e,i)}catch(e){await fA(e)}}function y7(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function y9(e,t,r){let n=e.du[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.du[e.currentUser.toKey()]=n}}function ve(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Iu.get(t)))e.Tu.delete(n),r&&e.Pu.yu(n,r);e.Iu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||vt(e,t)})}function vt(e,t){e.Eu.delete(t.path.canonicalString());let r=e.Ru.get(t);null!==r&&(ys(e.remoteStore,r),e.Ru=e.Ru.remove(t),e.Au.delete(r),vn(e))}function vr(e,t,r){for(let n of r)n instanceof yU?(e.Vu.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Ru.get(r)||e.Eu.has(n)||(d0(yq,"New document in limbo: "+r),e.Eu.add(n),vn(e))}(e,n)):n instanceof yH?(d0(yq,"Document no longer in limbo: "+n.key),e.Vu.removeReference(n.key,t),e.Vu.containsKey(n.key)||vt(e,n.key)):d3(19791,{wu:n})}function vn(e){for(;e.Eu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){let t=e.Eu.values().next().value;e.Eu.delete(t);let r=new fv(fm.fromString(t)),n=e.fu.next();e.Au.set(n,new yK(r)),e.Ru=e.Ru.insert(r,n),ya(e.remoteStore,new gn(pq(new pV(r.path)),n,"TargetPurposeLimboResolution",fO.ce))}}async function vi(e,t,r){let n=[],i=[],a=[];e.Tu.isEmpty()||(e.Tu.forEach((s,o)=>{a.push(e.pu(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient){var a;let n=t?!t.fromCache:null==r||null==(a=r.targetChanges.get(o.targetId))?void 0:a.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=gR.Es(o.targetId,t);i.push(e)}}))}),await Promise.all(a),e.Pu.J_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>fR.forEach(t,t=>fR.forEach(t.Ts,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>fR.forEach(t.Is,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!fP(e))throw e;d0(gD,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.vs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.vs=e.vs.insert(t,i)}}}(e.localStore,i))}async function va(e,t){if(!e.currentUser.isEqual(t)){d0(yq,"User change. New user:",t.toKey());let r=await gM(e.localStore,t);e.currentUser=t,e.mu.forEach(e=>{e.forEach(e=>{e.reject(new d7(d8.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.mu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await vi(e,r.Ns)}}function vs(e,t){let r=e.Au.get(t);if(r&&r.hu)return p7().add(r.key);{let r=p7(),n=e.Iu.get(t);if(!n)return r;for(let t of n){let n=e.Tu.get(t);r=r.unionWith(n.view.nu)}return r}}function vo(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=y5.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y4.bind(null,e),e.Pu.J_=yB.bind(null,e.eventManager),e.Pu.yu=yz.bind(null,e.eventManager),e}class vl{async initialize(e){this.serializer=g2(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){var t,r;return t=this.persistence,r=new gO,new gL(t,r,e.initialUser,this.serializer)}Cu(e){return new gI(gj.Vi,this.serializer)}Du(e){return new gV}async terminate(){var e,t;null==(e=this.gcScheduler)||e.stop(),null==(t=this.indexBackfillerScheduler)||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.kind="memory",this.synchronizeTabs=!1}}vl.provider={build:()=>new vl};class vu extends vl{Fu(e,t){return d6(this.persistence.referenceDelegate instanceof gA,46915),new gp(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Cu(e){let t=void 0!==this.cacheSizeBytes?gu.withCacheSize(this.cacheSizeBytes):gu.DEFAULT;return new gI(e=>gA.Vi(e,t),this.serializer)}constructor(e){super(),this.cacheSizeBytes=e}}class vc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>y3(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=va.bind(null,this.syncEngine),await y_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yD}createDatastore(e){var t;let r=g2(e.databaseInfo.databaseId),n=new g0(e.databaseInfo);return t=e.authCredentials,new g9(t,e.appCheckCredentials,n,r)}createRemoteStore(e){var t,r;return t=this.localStore,r=this.datastore,new yr(t,r,e.asyncQueue,e=>y3(this.syncEngine,e,0),gW.v()?new gW:new gU)}createSyncEngine(e,t){var r,n,i,a,s,o;let l;return r=this.localStore,n=this.remoteStore,i=this.eventManager,a=this.sharedClientState,s=e.initialUser,o=e.maxConcurrentLimboResolutions,l=new yQ(r,n,i,a,s,o),t&&(l.gu=!0),l}async terminate(){var e,t;await async function(e){d0(yt,"RemoteStore shutting down."),e.Ea.add(5),await yi(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null==(e=this.datastore)||e.terminate(),null==(t=this.eventManager)||t.terminate()}}vc.provider={build:()=>new vc};class vh{next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):d1("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}constructor(e){this.observer=e,this.muted=!1}}let vd="FirestoreClient";class vf{get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new d9;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=yj(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=n,this.user=dY.UNAUTHENTICATED,this.clientId=fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{d0(vd,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(d0(vd,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}}async function vp(e,t){e.asyncQueue.verifyOperationInProgress(),d0(vd,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await gM(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function vm(e,t){e.asyncQueue.verifyOperationInProgress();let r=await vg(e);d0(vd,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>yC(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>yC(t.remoteStore,r)),e._onlineComponents=t}async function vg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){d0(vd,"Using user provided OfflineComponentProvider");try{await vp(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===d8.FAILED_PRECONDITION||t.code===d8.UNIMPLEMENTED:!("u">typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;d2("Error using user provided cache. Falling back to memory cache: "+t),await vp(e,new vl)}}else d0(vd,"Using default OfflineComponentProvider"),await vp(e,new vu(void 0));return e._offlineComponents}async function vy(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(d0(vd,"Using user provided OnlineComponentProvider"),await vm(e,e._uninitializedComponentsProvider._online)):(d0(vd,"Using default OnlineComponentProvider"),await vm(e,new vc))),e._onlineComponents}async function vv(e){let t=await vy(e),r=t.eventManager;return r.onListen=yY.bind(null,t.syncEngine),r.onUnlisten=y0.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=yX.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=y1.bind(null,t.syncEngine),r}function vb(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}let vx=new Map,vw="firestore.googleapis.com";class vE{isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new d7(d8.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vw,this.ssl=!0}else this.host=e.host,this.ssl=null==(t=e.ssl)||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new d7(d8.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new d7(d8.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vb(null!=(r=e.experimentalLongPollingOptions)?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new d7(d8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new d7(d8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new d7(d8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class vS{get app(){if(!this._app)throw new d7(d8.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new d7(d8.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vE(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ft;switch(e.type){case"firstParty":return new fa(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new d7(d8.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){let e;return(e=vx.get(this))&&(d0("ComponentProvider","Removing Datastore"),vx.delete(this),e.terminate()),Promise.resolve()}constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}}class vk{withConverter(e){return new vk(this.firestore,e,this._query)}constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}}class vC{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new v_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vC(this.firestore,e,this._key)}toJSON(){return{type:vC._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(f_(t,vC._jsonSchema))return new vC(e,r||null,new fv(fm.fromString(t.referencePath)))}constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}}vC._jsonSchemaVersion="firestore/documentReference/1.0",vC._jsonSchema={type:fC("string",vC._jsonSchemaVersion),referencePath:fC("string")};class v_ extends vk{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new vC(this.firestore,null,new fv(e))}withConverter(e){return new v_(this.firestore,e,this._path)}constructor(e,t,r){super(e,t,new pV(r)),this._path=r,this.type="collection"}}function vT(e,t,...r){if(e=hv(e),fb("collection","path",t),e instanceof vS){let n=fm.fromString(t,...r);return fw(n),new v_(e,null,n)}{if(!(e instanceof vC||e instanceof v_))throw new d7(d8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(fm.fromString(t,...r));return fw(n),new v_(e.firestore,null,n)}}let vI="AsyncQueue";class vN{get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;let t=g1();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});let t=new d9;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!fP(e))throw e;d0(vI,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){let t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,d1("INTERNAL UNHANDLED ERROR: ",vj(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);let n=yN.createAndSchedule(this,e,t,r,e=>this.hc(e));return this.tc.push(n),n}uc(){this.nc&&d3(47125,{Pc:vj(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(let t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{for(let t of(this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){let t=this.tc.indexOf(e);this.tc.splice(t,1)}constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new g5(this,"async_queue_retry"),this._c=()=>{let e=g1();e&&d0(vI,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;let t=g1();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}}function vj(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class vA extends vS{async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new vN(e),this._firestoreClient=void 0,await e}}constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new vN,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}}function vR(e){if(e._terminated)throw new d7(d8.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i,a,s,o,l,u;let c,h=e._freezeSettings(),d=(a=e._databaseId,s=(null==(t=e._app)?void 0:t.options.appId)||"",o=e._persistenceKey,l=null==(r=e._app)?void 0:r.options.apiKey,new f3(a,s,o,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,vb(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator,l));e._componentsProvider||(null==(n=h.localCache)?void 0:n._offlineComponentProvider)&&(null==(i=h.localCache)?void 0:i._onlineComponentProvider)&&(e._componentsProvider={_offline:h.localCache._offlineComponentProvider,_online:h.localCache._onlineComponentProvider}),e._firestoreClient=new vf(e._authCredentials,e._appCheckCredentials,e._queue,d,e._componentsProvider&&(c=null==(u=e._componentsProvider)?void 0:u._online.build(),{_offline:null==u?void 0:u._offline.build(c),_online:c}))}(e),e._firestoreClient}class vP{static fromBase64String(e){try{return new vP(fq.fromBase64String(e))}catch(e){throw new d7(d8.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new vP(fq.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vP._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(f_(e,vP._jsonSchema))return vP.fromBase64String(e.bytes)}constructor(e){this._byteString=e}}vP._jsonSchemaVersion="firestore/bytes/1.0",vP._jsonSchema={type:fC("string",vP._jsonSchemaVersion),bytes:fC("string")};class vO{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new d7(d8.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fy(e)}}class vD{constructor(e){this._methodName=e}}class vL{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fu(this._lat,e._lat)||fu(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vL._jsonSchemaVersion}}static fromJSON(e){if(f_(e,vL._jsonSchema))return new vL(e.latitude,e.longitude)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new d7(d8.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new d7(d8.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}vL._jsonSchemaVersion="firestore/geoPoint/1.0",vL._jsonSchema={type:fC("string",vL._jsonSchemaVersion),latitude:fC("number"),longitude:fC("number")};class vM{toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vM._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(f_(e,vM._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new vM(e.vectorValues);throw new d7(d8.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}constructor(e){this._values=(e||[]).map(e=>e)}}vM._jsonSchemaVersion="firestore/vectorValue/1.0",vM._jsonSchema={type:fC("string",vM._jsonSchemaVersion),vectorValues:fC("object")};let vF=/^__.*__$/;class vB{toMutation(e,t){return null!==this.fieldMask?new mw(e,this.data,this.fieldMask,t,this.fieldTransforms):new mx(e,this.data,t,this.fieldTransforms)}constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}}function vz(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw d3(40011,{dataSource:e})}}class v${get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new v$(cq({},this.settings,e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var t;let r=null==(t=this.path)?void 0:t.child(e),n=this.contextWith({path:r,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var t;let r=null==(t=this.path)?void 0:t.child(e),n=this.contextWith({path:r,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return vX(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(0===e.length)throw this.createError("Document fields must not be empty");if(vz(this.dataSource)&&vF.test(e))throw this.createError('Document fields cannot begin and end with "__"')}constructor(e,t,r,n,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}}class vV{createContext(e,t,r,n=!1){return new v$({dataSource:e,methodName:t,targetDoc:r,path:fy.emptyPath(),arrayElement:!1,hasConverter:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||g2(e)}}function vU(e){let t=e._freezeSettings(),r=g2(e._databaseId);return new vV(e._databaseId,!!t.ignoreUndefinedProperties,r)}class vH extends vD{_toFieldTransform(e){return new md(e.path,new mi)}isEqual(e){return e instanceof vH}}function vW(e,t){if(vG(e=hv(e)))return vK("Unsupported field value:",t,e),vq(e,t);if(e instanceof vD)return function(e,t){if(!vz(t.dataSource))throw t.createError(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.createError(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.createError("Nested arrays are not supported");let r=[],n=0;for(let i of e){let e=vW(i,t.childContextForArray(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}return function(e,t){var r,n,i,a;if(null===(e=hv(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!fD(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?mt(n):me(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=fT.fromDate(e);return{timestampValue:mX(t.serializer,r)}}if(e instanceof fT){let r=new fT(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mX(t.serializer,r)}}if(e instanceof vL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof vP)return{bytesValue:mJ(t.serializer,e._byteString)};if(e instanceof vC){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.createError(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:m0(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof vM)return{mapValue:{fields:{[f8]:{stringValue:pe},[pt]:{arrayValue:{values:((a=e)instanceof vM?a.toArray():a).map(e=>{if("number"!=typeof e)throw t.createError("VectorValues must only contain numeric values.");return me(t.serializer,e)})}}}}};if(gr(e))return e._toProto(t.serializer);throw t.createError(`Unsupported field value: ${fS(e)}`)}(e,t)}function vq(e,t){let r={};return fF(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fM(e,(e,n)=>{let i=vW(n,t.childContextForField(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function vG(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof fT||e instanceof vL||e instanceof vP||e instanceof vC||e instanceof vD||e instanceof vM||gr(e))}function vK(e,t,r){if(!vG(r)||!fE(r)){let n=fS(r);throw"an object"===n?t.createError(e+" a custom object"):t.createError(e+" "+n)}}function vQ(e,t,r){if((t=hv(t))instanceof vO)return t._internalPath;if("string"==typeof t){var n=e,i=t;if(i.search(vY)>=0)throw vX(`Invalid field path (${i}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,void 0);try{return new vO(...i.split("."))._internalPath}catch(e){throw vX(`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,void 0)}}throw vX("Field path arguments must be of type string or ",e,!1,void 0,r)}let vY=RegExp("[~\\*/\\[\\]]");function vX(e,t,r,n,i){let a=n&&!n.isEmpty(),s=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(a||s)&&(l+=" (found",a&&(l+=` in field ${n}`),s&&(l+=` in document ${i}`),l+=")"),new d7(d8.INVALID_ARGUMENT,o+e+l)}class vJ{convertValue(e,t="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fQ(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fY(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw d3(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return fM(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new vM(null==(n=e.fields)||null==(r=n[pt].arrayValue)||null==(t=r.values)?void 0:t.map(e=>fQ(e.doubleValue)))}convertGeoPoint(e){return new vL(fQ(e.latitude),fQ(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=f2(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(f5(e));default:return null}}convertTimestamp(e){let t=fK(e);return new fT(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=fm.fromString(e);d6(gt(r),9688,{name:e});let n=new f6(r.get(1),r.get(3)),i=new fv(r.popFirst(5));return n.isEqual(t)||d1(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class vZ extends vJ{convertBytes(e){return new vP(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new vC(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}let v0="@firebase/firestore",v1="4.12.0";class v2{get id(){return this._key.path.lastSegment()}get ref(){return new vC(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new v5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return null!=(t=null==(e=this._document)?void 0:e.data.clone().value.mapValue.fields)?t:void 0}get(e){if(this._document){let t=this._document.data.field(vQ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}}class v5 extends v2{data(){return super.data()}}class v3{}class v4 extends v3{}class v6 extends v4{static _create(e,t,r){return new v6(e,t,r)}_apply(e){let t=this._parse(e);return bt(e._query,t),new vk(e.firestore,e.converter,pG(e._query,t))}_parse(e){let t=vU(e.firestore);return function(e,t,r,n,i,a,s){let o;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new d7(d8.INVALID_ARGUMENT,`Invalid Query. You can't perform '${a}' queries on documentId().`);if("in"===a||"not-in"===a){be(s,a);let t=[];for(let r of s)t.push(v9(n,e,r));o={arrayValue:{values:t}}}else o=v9(n,e,s)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||be(s,a),o=function(e,t,r,n=!1){return vW(r,e.createContext(n?4:3,t))}(r,t,s,"in"===a||"not-in"===a);return pC.create(i,a,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}}function v8(e,t,r){let n=vQ("where",e);return v6._create(n,t,r)}class v7 extends v3{static _create(e,t){return new v7(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:p_.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())bt(r,e),r=pG(r,e)}(e._query,t),new vk(e.firestore,e.converter,pG(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}function v9(e,t,r){if("string"==typeof(r=hv(r))){if(""===r)throw new d7(d8.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pH(t)&&-1!==r.indexOf("/"))throw new d7(d8.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(fm.fromString(r));if(!fv.isDocumentKey(n))throw new d7(d8.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return pu(e,new fv(n))}if(r instanceof vC)return pu(e,r._key);throw new d7(d8.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fS(r)}.`)}function be(e,t){if(!Array.isArray(e)||0===e.length)throw new d7(d8.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bt(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new d7(d8.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new d7(d8.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class br{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class bn extends v2{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(vQ("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new d7(d8.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()&&(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),this._firestore,this.ref.path,t.bundle="NOT SUPPORTED"),t}constructor(e,t,r,n,i,a){super(e,t,r,n,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:fC("string",bn._jsonSchemaVersion),bundleSource:fC("string","DocumentSnapshot"),bundleName:fC("string"),bundle:fC("string")};class bi extends bn{data(e={}){return super.data(e)}}class ba{get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new bi(this._firestore,this._userDataWriter,r.key,r,new br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new d7(d8.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new bi(e._firestore,e._userDataWriter,r.doc.key,r.doc,new br(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new bi(e._firestore,e._userDataWriter,t.doc.key,t.doc,new br(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(a=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return d3(61501,{type:e})}}(t.type),doc:n,oldIndex:i,newIndex:a}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new d7(d8.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=ba._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],n=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),n.push(e.ref.path))}),this._firestore,this.query._query,e.bundleName,e.bundle="NOT SUPPORTED",e}constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new br(n.hasPendingWrites,n.fromCache),this.query=r}}ba._jsonSchemaVersion="firestore/querySnapshot/1.0",ba._jsonSchema={type:fC("string",ba._jsonSchemaVersion),bundleSource:fC("string","QuerySnapshot"),bundleName:fC("string"),bundle:fC("string")},new WeakMap,function(e=!0){dX="12.10.0",hJ(new hb("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),a=new vA(new fn(t.getProvider("auth-internal")),new fo(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new d7(d8.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new f6(e.options.projectId,t)}(i,r),i);return n=cq({useFetchStreams:e},n),a._setSettings(n),a},"PUBLIC").setMultipleInstances(!0)),h2(v0,v1,void 0),h2(v0,v1,"esm2020")}(),h2("firebase","12.10.0","app");let bs=null;try{let e=h1({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0});bs=function(e){var t;let r,n=((r=(t="object"==typeof e?e:function(e=hq){let t=hK.get(e);if(!t&&e===hq&&ho())return h1();if(!t)throw hZ.create("no-app",{appName:e});return t}()).container.getProvider("heartbeat").getImmediate({optional:!0}))&&r.triggerHeartbeat(),t.container.getProvider("firestore")).getImmediate({identifier:"string"==typeof e?e:f4});if(!n._initialized){let e=(e=>{var t,r;let n=null==(r=hs())||null==(t=r.emulatorHosts)?void 0:t[e];if(!n)return;let i=n.lastIndexOf(":");if(i<=0||i+1===n.length)throw Error(`Invalid host ${n} with no separate hostname and port!`);let a=parseInt(n.substring(i+1),10);return"["===n[0]?[n.substring(1,i-1),a]:[n.substring(0,i),a]})("firestore");e&&function(e,t,r,n={}){e=fk(e,vS);let i=hu(t),a=e._getSettings(),s=hN(cq({},a),{emulatorOptions:e._getEmulatorOptions()}),o=`${t}:${r}`;i&&(hc(`https://${o}`),function(e,t){if("u"<typeof window||"u"<typeof document||!hu(window.location.host)||hh[e]===t||hh[e]||hd)return;function r(e){return`__firebase__banner__${e}`}hh[e]=t;let n="__firebase__banner",i=function(){let e={prod:[],emulator:[]};for(let t of Object.keys(hh))hh[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function a(){let e,t,a=(e=document.getElementById(n),t=!1,e||((e=document.createElement("div")).setAttribute("id",n),t=!0),{created:t,element:e}),s=r("text"),o=document.getElementById(s)||document.createElement("span"),l=r("learnmore"),u=document.getElementById(l)||document.createElement("a"),c=r("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.created){let e,t=a.element;t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center",u.setAttribute("id",l),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline";let r=((e=document.createElement("span")).style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{let e;hd=!0,(e=document.getElementById(n))&&e.remove()},e);h.setAttribute("width","24"),h.setAttribute("id",c),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px",t.append(h,o,u,r),document.body.appendChild(t)}i?(o.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,o.innerText="Preview backend running in this workspace."),o.setAttribute("id",s)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}("Firestore",!0)),a.host!==vw&&a.host!==o&&d2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let l=hN(cq({},a),{host:o,ssl:i,emulatorOptions:n});if(!hg(l,s)&&(e._setSettings(l),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=dY.MOCK_USER;else{var u;t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=cq({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[hi(JSON.stringify({alg:"none",type:"JWT"})),hi(JSON.stringify(a)),""].join(".")}(n.mockUserToken,null==(u=e._app)?void 0:u.options.projectId);let i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new d7(d8.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new dY(i)}e._authCredentials=new fr(new fe(t,r))}}(n,...e)}return n}(e)}catch(e){console.error("Firebase initialization error:",e)}function bo(e){if(!e)return null;for(let t of[/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/]){let r=e.match(t);if(r)return r[1]}return null}var B=L("7fPBF");let bl=e=>e,bu,bc,bh,bd,bf,bp,bm,bg=rX(bu||(bu=bl`
  from { opacity: 0; }
  to { opacity: 1; }
`)),by=rX(bc||(bc=bl`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`)),bv=rQ.div(bh||(bh=bl`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${0} 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`),bg),bb=rQ.div(bd||(bd=bl`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: var(--navy);
  border-radius: 12px;
  overflow: hidden;
  animation: ${0} 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`),by),bx=rQ.button(bf||(bf=bl`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--gold);
  }

  @media (max-width: 768px) {
    top: -40px;
    right: -10px;
    font-size: 1.25rem;
  }
`)),bw=rQ.iframe(bp||(bp=bl`
  width: 100%;
  height: 100%;
  border: none;
`)),bE=rQ.div(bm||(bm=bl`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1rem;
  color: var(--white);
  
  h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--gold);
  }
  
  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0.75rem;
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`));var bS=({video:e,onClose:t})=>{if((0,B.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t()};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto"}},[t]),!e)return null;let r=`https://www.youtube.com/embed/${e.youtubeVideoId}?autoplay=1&rel=0`;return(0,F.jsx)(bv,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,F.jsxs)(bb,{children:[(0,F.jsx)(bx,{onClick:t,children:(0,F.jsx)(nP,{})}),(0,F.jsx)(bw,{src:r,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(e.title||e.description)&&(0,F.jsxs)(bE,{children:[e.title&&(0,F.jsx)("h3",{children:e.title}),e.description&&(0,F.jsx)("p",{children:e.description})]})]})})};let bk=e=>e,bC,b_,bT,bI,bN,bj,bA,bR,bP,bO,bD,bL,bM,bF,bB,bz,b$,bV,bU,bH,bW,bq,bG,bK,bQ,bY,bX,bJ,bZ,b0,b1,b2,b5,b3,b4,b6,b8,b7,b9,xe,xt,xr,xn,xi=rX(bC||(bC=bk`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),xa=rQ.div(b_||(b_=bk`
  min-height: 100vh;
  background: var(--gray-100);
`)),xs=rQ.section(bT||(bT=bk`
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 2rem 2rem 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),xo=rQ.div(bI||(bI=bk`
  max-width: 1200px;
  margin: 0 auto;
`)),xl=rQ(eL)(bN||(bN=bk`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gold);
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  animation: ${0} 0.5s ease;

  &:hover {
    color: var(--white);
    transform: translateX(-5px);
  }
`),xi),xu=rQ.div(bj||(bj=bk`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`)),xc=rQ.div(bA||(bA=bk`
  position: relative;
  width: 100%;
  padding-top: 130%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${0} 0.6s ease 0.1s backwards;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    max-width: 280px;
    margin: 0 auto;
    padding-top: 360px;
  }
`),xi),xh=rQ.div(bR||(bR=bk`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  color: var(--gold);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  z-index: 2;
`)),xd=rQ.div(bP||(bP=bk`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8rem;
  color: var(--gold);
  opacity: 0.8;
`)),xf=rQ.div(bO||(bO=bk`
  color: var(--white);
  animation: ${0} 0.6s ease 0.2s backwards;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`),xi),xp=rQ.h1(bD||(bD=bk`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1;
  margin-bottom: 0.5rem;

  span {
    color: var(--gold);
  }
`)),xm=rQ.p(bL||(bL=bk`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--gold);
  margin-bottom: 2rem;
`)),xg=rQ.div(bM||(bM=bk`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`)),xy=rQ.div(bF||(bF=bk`
  text-align: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-width: 80px;

  .value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--white);
  }

  .label {
    font-family: 'Barlow', sans-serif;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`)),xv=rQ.div(bB||(bB=bk`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`)),xb=rQ.a(bz||(bz=bk`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${0};
  color: ${0};
  border: 2px solid ${0};
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${0};
    transform: translateY(-2px);
  }
`),e=>e.$primary?"var(--gold)":"transparent",e=>e.$primary?"var(--navy)":"var(--white)",e=>e.$primary?"var(--gold)":"rgba(255,255,255,0.3)",e=>e.$primary?"var(--white)":"rgba(255,255,255,0.1)"),xx=rQ.section(b$||(b$=bk`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`)),xw=rQ.div(bV||(bV=bk``)),xE=rQ.div(bU||(bU=bk``)),xS=rQ.div(bH||(bH=bk`
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${0} 0.6s ease backwards;
  animation-delay: ${0};
`),xi,e=>e.$delay||"0s"),xk=rQ.h3(bW||(bW=bk`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--gold);
  }

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin-left: 0.5rem;
  }
`)),xC=rQ.p(bq||(bq=bk`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-700);
  line-height: 1.9;
  font-size: 1.05rem;
`)),x_=rQ.div(bG||(bG=bk`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`)),xT=rQ.div(bK||(bK=bk`
  background: var(--gray-100);
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid var(--gold);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: var(--navy);
    line-height: 1;
  }

  .label {
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.25rem;
  }
`));rQ.div(bQ||(bQ=bk`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`)),rQ.a(bY||(bY=bk`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--gray-100);
  border-radius: 10px;
  text-decoration: none;
  color: var(--navy);
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    transform: translateX(5px);
  }

  svg {
    color: var(--gold);
    font-size: 1.25rem;
  }

  &:hover svg {
    color: var(--navy);
  }
`));let xI=rQ.div(bX||(bX=bk`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`)),xN=rQ.div(bJ||(bJ=bk`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--gray-200);

  svg {
    color: var(--gold);
    font-size: 1.1rem;
    width: 20px;
  }

  a {
    color: var(--navy);
    text-decoration: none;

    &:hover {
      color: var(--gold);
    }
  }

  &:last-child {
    border-bottom: none;
  }
`)),xj=rQ.a(bZ||(bZ=bk`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--navy);
  color: var(--gold);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 31, 63, 0.3);
  }
`)),xA=rQ.div(b0||(b0=bk`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: var(--navy);
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray-500);
    margin-bottom: 2rem;
  }
`)),xR=rQ.div(b1||(b1=bk`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`)),xP=rQ.div(b2||(b2=bk`
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--gold);
  }
`)),xO=rQ.div(b5||(b5=bk`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background: var(--gray-200);
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`)),xD=rQ.div(b3||(b3=bk`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    color: var(--white);
    font-size: 1.5rem;
    margin-left: 3px; /* Optical alignment */
  }

  ${0}:hover & {
    background: var(--gold);
    
    svg {
      color: var(--navy);
    }
  }
`),xP),xL=rQ.div(b4||(b4=bk`
  padding: 1.25rem;
  
  h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.1rem;
    color: var(--navy);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.9rem;
    color: var(--gray-600);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`)),xM=rQ.div(b6||(b6=bk`
  text-align: center;
  padding: 3rem 2rem;
  color: var(--gray-500);
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: 'Barlow', sans-serif;
  }
`)),xF=rQ.div(b8||(b8=bk`
  display: flex;
  justify-content: center;
  padding: 2rem;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid var(--gray-300);
    border-top: 3px solid var(--gold);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`)),xB=rQ.div(b7||(b7=bk`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`)),xz=rQ.div(b9||(b9=bk`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`)),x$=rQ.h3(xe||(xe=bk`
  color: #001F3F;
  margin: 0 0 0.25rem 0;
  font-size: 1.3rem;
`)),xV=rQ.p(xt||(xt=bk`
  color: #666;
  font-size: 0.85rem;
  margin: 0 0 1.25rem 0;
`)),xU=rQ.p(xr||(xr=bk`
  color: #999;
  font-size: 0.7rem;
  word-break: break-all;
  margin: 1rem 0 0.5rem 0;
`)),xH=rQ.button(xn||(xn=bk`
  background: #001F3F;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 2rem;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.5rem;
  &:hover {
    background: #003366;
  }
`));var xW=()=>{var e,t,r;let{playerId:n}=function(){let{matches:e}=B.useContext(ef),t=e[e.length-1];return t?t.params:{}}();ev();let[i,a]=(0,B.useState)([]),[s,o]=(0,B.useState)(!0),[l,u]=(0,B.useState)(null),c=u4.find(e=>e.id===n);(0,B.useEffect)(()=>{(async()=>{if(!c||!bs)return o(!1);try{var e;let t,r,i,s=function(e,t,...r){let n=[];for(let i of(t instanceof v3&&n.push(t),function(e){let t=e.filter(e=>e instanceof v7).length,r=e.filter(e=>e instanceof v6).length;if(t>1||t>0&&r>0)throw new d7(d8.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}(vT(bs,"highlights"),v8("playerId","==",n),v8("approved","==",!0)),o=(await (e=s,e=fk(e,vk),t=fk(e.firestore,vA),r=vR(t),i=new vZ(t),function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new d7(d8.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new d9;return e.asyncQueue.enqueueAndForget(async()=>{var i,a;let s,o;return i=await vv(e),a=e.asyncQueue,s=new vh({next:e=>{s.Nu(),a.enqueueAndForget(()=>yF(i,o)),e.fromCache&&"server"===r.source?n.reject(new d7(d8.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):n.resolve(e)},error:e=>n.reject(e)}),o=new yV(t,s,{includeMetadataChanges:!0,Ka:!0}),yM(i,o)}),n.promise})(r,e._query).then(r=>new ba(t,i,e,r)))).docs.map(e=>cq({id:e.id},e.data()));o.sort((e,t)=>{var r,n;let i=(null==(r=e.submittedAt)?void 0:r.seconds)||0;return((null==(n=t.submittedAt)?void 0:n.seconds)||0)-i}),a(o)}catch(e){console.error("Error fetching highlights:",e),a([])}finally{o(!1)}})()},[n,c]);let[h,d]=(0,B.useState)(!1);return c?(0,F.jsxs)(xa,{children:[(0,F.jsx)(xs,{children:(0,F.jsxs)(xo,{children:[(0,F.jsxs)(xl,{to:"/players",children:[(0,F.jsx)(nU,{})," Back to Roster"]}),(0,F.jsxs)(xu,{children:[(0,F.jsxs)(xc,{children:[(0,F.jsxs)(xh,{children:["#",c.number]}),c.image?(0,F.jsx)("img",{src:c.image,alt:`${c.firstName} ${c.lastName}`}):(0,F.jsx)(xd,{children:c.initial})]}),(0,F.jsxs)(xf,{children:[(0,F.jsxs)(xp,{children:[c.firstName," ",(0,F.jsx)("span",{children:c.lastName})]}),(0,F.jsx)(xm,{children:c.position}),(0,F.jsxs)(xg,{children:[c.height&&(0,F.jsxs)(xy,{children:[(0,F.jsx)("div",{className:"value",children:c.height}),(0,F.jsx)("div",{className:"label",children:"Height"})]}),c.weight&&(0,F.jsxs)(xy,{children:[(0,F.jsx)("div",{className:"value",children:c.weight}),(0,F.jsx)("div",{className:"label",children:"Weight"})]}),c.gradYear&&(0,F.jsxs)(xy,{children:[(0,F.jsx)("div",{className:"value",children:c.gradYear}),(0,F.jsx)("div",{className:"label",children:"Class"})]}),c.gpa&&(0,F.jsxs)(xy,{children:[(0,F.jsx)("div",{className:"value",children:c.gpa}),(0,F.jsx)("div",{className:"label",children:"GPA"})]})]}),(0,F.jsxs)(xv,{children:[(null==(e=c.recruiting)?void 0:e.email)&&(0,F.jsxs)(xb,{href:`mailto:${c.recruiting.email}?subject=Recruiting Inquiry - ${c.firstName} ${c.lastName}`,$primary:!0,children:[(0,F.jsx)(nz,{})," Contact for Recruiting"]}),(0,F.jsxs)(xb,{as:"button",onClick:()=>{navigator.share?navigator.share({title:`${c.firstName} ${c.lastName} - Wellington Wolves`,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),alert("Link copied to clipboard!"))},children:[(0,F.jsx)(nO,{})," Share Profile"]}),(0,F.jsxs)(xb,{as:"button",onClick:()=>d(!0),children:[(0,F.jsx)(nL,{})," Share QR Code"]})]})]})]})]})}),(0,F.jsxs)(xx,{children:[(0,F.jsxs)(xw,{children:[c.bio&&(0,F.jsxs)(xS,{$delay:"0.3s",children:[(0,F.jsx)(xk,{children:"About"}),(0,F.jsx)(xC,{children:c.bio})]}),c.stats&&(0,F.jsxs)(xS,{$delay:"0.4s",children:[(0,F.jsxs)(xk,{children:["Season Statistics (",c.stats.season,")"]}),(0,F.jsxs)(x_,{children:[c.stats.gp&&(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.gp}),(0,F.jsx)("div",{className:"label",children:"Games"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.ppg}),(0,F.jsx)("div",{className:"label",children:"PPG"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.rpg}),(0,F.jsx)("div",{className:"label",children:"RPG"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.apg}),(0,F.jsx)("div",{className:"label",children:"APG"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.spg}),(0,F.jsx)("div",{className:"label",children:"SPG"})]}),void 0!==c.stats.bpg&&(0,F.jsxs)(xT,{children:[(0,F.jsx)("div",{className:"value",children:c.stats.bpg}),(0,F.jsx)("div",{className:"label",children:"BPG"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsxs)("div",{className:"value",children:[c.stats.fgPct,"%"]}),(0,F.jsx)("div",{className:"label",children:"FG%"})]}),(0,F.jsxs)(xT,{children:[(0,F.jsxs)("div",{className:"value",children:[c.stats.threePct,"%"]}),(0,F.jsx)("div",{className:"label",children:"3PT%"})]}),c.stats.ftPct&&(0,F.jsxs)(xT,{children:[(0,F.jsxs)("div",{className:"value",children:[c.stats.ftPct,"%"]}),(0,F.jsx)("div",{className:"label",children:"FT%"})]})]})]}),(0,F.jsxs)(xS,{$delay:"0.5s",children:[(0,F.jsxs)(xk,{children:[(0,F.jsx)(nA,{})," Highlights"]}),s?(0,F.jsx)(xF,{}):i.length>0?(0,F.jsx)(xR,{children:i.map(e=>{var t;return(0,F.jsxs)(xP,{onClick:()=>{u(e)},children:[(0,F.jsxs)(xO,{children:[(0,F.jsx)("img",{src:(t=e.youtubeVideoId)?`https://img.youtube.com/vi/${t}/mqdefault.jpg`:null,alt:e.title}),(0,F.jsx)(xD,{children:(0,F.jsx)(nM,{})})]}),(0,F.jsxs)(xL,{children:[(0,F.jsx)("h4",{children:e.title}),e.description&&(0,F.jsx)("p",{children:e.description})]})]},e.id)})}):(0,F.jsxs)(xM,{children:[(0,F.jsx)(nA,{}),(0,F.jsx)("h4",{children:"No highlights yet"}),(0,F.jsx)("p",{children:"Check back later for video highlights!"})]})]})]}),(0,F.jsx)(xE,{children:(0,F.jsxs)(xS,{$delay:"0.4s",children:[(0,F.jsxs)(xk,{children:[(0,F.jsx)(nB,{})," Recruiting Info"]}),(0,F.jsxs)(xI,{children:[c.school&&(0,F.jsxs)(xN,{children:[(0,F.jsx)(nD,{}),(0,F.jsx)("span",{children:c.school})]}),c.gradYear&&(0,F.jsxs)(xN,{children:[(0,F.jsx)(nB,{}),(0,F.jsxs)("span",{children:["Class of ",c.gradYear]})]}),c.instagram&&(0,F.jsxs)(xN,{children:[(0,F.jsx)(nN,{}),(0,F.jsxs)("a",{href:`https://instagram.com/${c.instagram}`,target:"_blank",rel:"noopener noreferrer",children:["@",c.instagram]})]}),(null==(t=c.recruiting)?void 0:t.hudl)&&(0,F.jsxs)(xN,{children:[(0,F.jsx)(nA,{}),(0,F.jsx)("a",{href:c.recruiting.hudl,target:"_blank",rel:"noopener noreferrer",children:"View Hudl Profile"})]})]}),(null==(r=c.recruiting)?void 0:r.email)&&(0,F.jsxs)(xj,{href:`mailto:${c.recruiting.email}?subject=Recruiting Inquiry - ${c.firstName} ${c.lastName}`,children:[(0,F.jsx)(nz,{})," Contact Coach"]})]})})]}),l&&(0,F.jsx)(bS,{video:l,onClose:()=>{u(null)}}),h&&(0,F.jsx)(xB,{onClick:()=>d(!1),children:(0,F.jsxs)(xz,{onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(x$,{children:[c.firstName," ",c.lastName]}),(0,F.jsx)(xV,{children:"Scan to view player profile"}),(0,F.jsx)(c7,{value:window.location.href,size:220,bgColor:"#ffffff",fgColor:"#001F3F",level:"M",includeMargin:!0}),(0,F.jsx)(xU,{children:window.location.href}),(0,F.jsx)(xH,{onClick:()=>d(!1),children:"Close"})]})})]}):(0,F.jsx)(xa,{children:(0,F.jsxs)(xA,{children:[(0,F.jsx)("h2",{children:"Player Not Found"}),(0,F.jsx)("p",{children:"Sorry, we couldn't find that player."}),(0,F.jsxs)(xb,{as:eL,to:"/players",$primary:!0,children:[(0,F.jsx)(nU,{})," Back to Roster"]})]})})};L("7fPBF");let xq=e=>e,xG,xK,xQ,xY,xX,xJ,xZ,x0,x1,x2,x5,x3=rQ.div(xG||(xG=xq`
  padding: 2rem;
  background-color: #ffffff;
  min-height: 60vh;
`)),x4=rQ.div(xK||(xK=xq`
  max-width: 900px;
  margin: 0 auto;
`)),x6=rQ.h1(xQ||(xQ=xq`
  text-align: center;
  font-size: 2.5rem;
  color: #001f3f;
  margin-bottom: 3rem;
`)),x8=rQ.div(xY||(xY=xq`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`)),x7=rQ.article(xX||(xX=xq`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #ffd700;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`)),x9=rQ.div(xJ||(xJ=xq`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`)),we=rQ.time(xZ||(xZ=xq`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`)),wt=rQ.span(x0||(x0=xq`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${0};
  color: ${0};
`),e=>{var t;return(null==(t=iC[e.$category])?void 0:t.bg)||"#616161"},e=>{var t;return(null==(t=iC[e.$category])?void 0:t.text)||"#ffffff"}),wr=rQ.h2(x1||(x1=xq`
  font-size: 1.4rem;
  color: #001f3f;
  margin: 0 0 1rem 0;
  line-height: 1.3;
`)),wn=rQ.p(x2||(x2=xq`
  color: #444;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
`)),wi=rQ.div(x5||(x5=xq`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`));var wa=()=>{let e=[...iS].sort((e,t)=>new Date(t.date)-new Date(e.date));return(0,F.jsx)(x3,{children:(0,F.jsxs)(x4,{children:[(0,F.jsx)(x6,{children:"Team Announcements"}),e.length>0?(0,F.jsx)(x8,{children:e.map(e=>(0,F.jsxs)(x7,{children:[(0,F.jsxs)(x9,{children:[(0,F.jsx)(we,{dateTime:e.date,children:ik(e.date)}),(0,F.jsx)(wt,{$category:e.category,children:e.category})]}),(0,F.jsx)(wr,{children:e.title}),(0,F.jsx)(wn,{children:e.content})]},e.id))}):(0,F.jsx)(wi,{children:(0,F.jsx)("p",{children:"No announcements at this time. Check back soon!"})})]})})},B=L("7fPBF");let ws=e=>e,wo,wl,wu,wc,wh,wd,wf,wp,wm,wg,wy,wv,wb,wx,ww,wE,wS,wk,wC,w_,wT,wI,wN,wj,wA,wR,wP,wO,wD,wL=rX(wo||(wo=ws`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),wM=rQ.div(wl||(wl=ws`
  min-height: 100vh;
  background: var(--gray-100);
`)),wF=rQ.section(wu||(wu=ws`
  background: var(--navy);
  padding: 4rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`)),wB=rQ.div(wc||(wc=ws`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`)),wz=rQ.span(wh||(wh=ws`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`),wL),w$=rQ.h1(wd||(wd=ws`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--white);
  line-height: 0.95;
  margin-bottom: 1rem;
  animation: ${0} 0.6s ease-out 0.1s backwards;

  span {
    color: var(--gold);
  }
`),wL),wV=rQ.p(wf||(wf=ws`
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: ${0} 0.6s ease-out 0.2s backwards;
`),wL),wU=rQ.section(wp||(wp=ws`
  padding: 4rem 2rem;
  margin-top: -2rem;
`)),wH=rQ.div(wm||(wm=ws`
  max-width: 1200px;
  margin: 0 auto;
`)),wW=rQ.h2(wg||(wg=ws`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1.5rem;
  }
`)),wq=rQ.div(wy||(wy=ws`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`)),wG=rQ.a(wv||(wv=ws`
  background: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  animation: ${0} 0.6s ease-out backwards;
  animation-delay: ${0};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 31, 63, 0.12);
    border-color: var(--gold);
  }
`),wL,e=>e.$delay||"0s"),wK=rQ.div(wb||(wb=ws`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${0};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    color: ${0};
  }
`),e=>e.$bg||"var(--navy)",e=>e.$color||"var(--gold)"),wQ=rQ.div(wx||(wx=ws`
  flex: 1;
`)),wY=rQ.h3(ww||(ww=ws`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
`)),wX=rQ.p(wE||(wE=ws`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.5;
  margin: 0;
`)),wJ=rQ.span(wS||(wS=ws`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--white);
  background: ${0};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`),e=>e.$color||"var(--gold-dark)"),wZ=rQ.hr(wk||(wk=ws`
  border: none;
  height: 1px;
  background: var(--gray-200);
  margin: 2rem 0 3rem;
`)),w0=rQ.div(wC||(wC=ws`
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`)),w1=rQ.div(w_||(w_=ws`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`)),w2=rQ.div(wT||(wT=ws`
  h4 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    color: var(--gold-dark);
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    color: var(--gray-700);
    margin: 0.25rem 0;

    a {
      color: var(--navy);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--gold-dark);
      }
    }
  }
`)),w5=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,F.jsx)("circle",{cx:"8.5",cy:"7",r:"4"}),(0,F.jsx)("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),(0,F.jsx)("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),w3=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,F.jsx)("polyline",{points:"14,2 14,8 20,8"}),(0,F.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,F.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,F.jsx)("polyline",{points:"10,9 9,9 8,9"})]}),w4=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,F.jsx)("polyline",{points:"7,10 12,15 17,10"}),(0,F.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),w6=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,F.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),w8=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("circle",{cx:"12",cy:"18",r:"3"}),(0,F.jsx)("path",{d:"M12 2v13"}),(0,F.jsx)("path",{d:"M12 2l8 4-8 4"})]}),w7=()=>(0,F.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,F.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,F.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,F.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),w9=rQ.div(wI||(wI=ws`
  min-height: 100vh;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`)),Ee=rQ.div(wN||(wN=ws`
  background: var(--white);
  border-radius: 16px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${0} 0.6s ease-out;
`),wL),Et=rQ.div(wj||(wj=ws`
  font-size: 4rem;
  margin-bottom: 1rem;
`)),Er=rQ.h1(wA||(wA=ws`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`)),En=rQ.p(wR||(wR=ws`
  font-family: 'Barlow', sans-serif;
  font-size: 0.95rem;
  color: var(--gray-500);
  margin-bottom: 2rem;
`)),Ei=rQ.input(wP||(wP=ws`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &::placeholder {
    color: var(--gray-400);
  }
`)),Ea=rQ.button(wO||(wO=ws`
  width: 100%;
  padding: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 2px;
  background: var(--navy);
  color: var(--gold);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-2px);
  }
`)),Es=rQ.p(wD||(wD=ws`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: #e51b24;
  margin-top: 1rem;
`));var Eo=()=>{let[e,t]=(0,B.useState)(!1),[r,n]=(0,B.useState)(""),[i,a]=(0,B.useState)("");return((0,B.useEffect)(()=>{"true"===localStorage.getItem("wolfsDenAuth")&&t(!0)},[]),e)?(0,F.jsxs)(wM,{children:[(0,F.jsx)(wF,{children:(0,F.jsxs)(wB,{children:[(0,F.jsx)(wz,{children:"Team Resources"}),(0,F.jsxs)(w$,{children:["WOLF'S ",(0,F.jsx)("span",{children:"DEN"})]}),(0,F.jsx)(wV,{children:"Everything you need in one place — registration, forms, documents, and important links."})]})}),(0,F.jsx)(wU,{children:(0,F.jsxs)(wH,{children:[(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"📝"})," REGISTRATION"]}),(0,F.jsx)(wq,{children:(0,F.jsxs)(wG,{href:"https://app.eventconnect.io/s/25IYAfMe",target:"_blank",rel:"noopener noreferrer",$delay:"0.1s",children:[(0,F.jsx)(wK,{$bg:"var(--navy)",children:(0,F.jsx)(w5,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"2026 SEASON REGISTRATION"}),(0,F.jsx)(wX,{children:"Register your player for the 2026 Wellington Wolves season via EventConnect."}),(0,F.jsx)(wJ,{$color:"#e51b24",children:"Required"})]})]})}),(0,F.jsx)(wZ,{}),(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"📄"})," FORMS & DOCUMENTS"]}),(0,F.jsxs)(wq,{children:[(0,F.jsxs)(wG,{href:"#",$delay:"0.1s",onClick:e=>e.preventDefault(),style:{opacity:.6,cursor:"not-allowed"},children:[(0,F.jsx)(wK,{$bg:"var(--gray-400)",children:(0,F.jsx)(w3,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"PLAYER WAIVER"}),(0,F.jsx)(wX,{children:"Required liability waiver for all players."}),(0,F.jsx)(wJ,{$color:"var(--gray-500)",children:"Coming Soon"})]})]}),(0,F.jsxs)(wG,{href:"#",$delay:"0.2s",onClick:e=>e.preventDefault(),style:{opacity:.6,cursor:"not-allowed"},children:[(0,F.jsx)(wK,{$bg:"var(--gray-400)",children:(0,F.jsx)(w4,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"MEDICAL RELEASE FORM"}),(0,F.jsx)(wX,{children:"Emergency contact and medical information form."}),(0,F.jsx)(wJ,{$color:"var(--gray-500)",children:"Coming Soon"})]})]})]}),(0,F.jsx)(wZ,{}),(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"💰"})," FUNDRAISING"]}),(0,F.jsx)(wq,{children:(0,F.jsxs)(wG,{href:"#",$delay:"0.1s",onClick:e=>e.preventDefault(),style:{opacity:.6,cursor:"not-allowed"},children:[(0,F.jsx)(wK,{$bg:"var(--gray-400)",children:(0,F.jsx)(w6,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"BANNER SPONSORSHIP APPLICATION"}),(0,F.jsx)(wX,{children:"Support the team! Sponsor a banner displayed at our home games."}),(0,F.jsx)(wJ,{$color:"var(--gray-500)",children:"Coming Soon"})]})]})}),(0,F.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"⛳"})," CHARITY GOLF TOURNAMENT"]}),(0,F.jsxs)("div",{style:{background:"var(--white)",borderRadius:"12px",padding:"2rem",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.06)",border:"2px solid var(--gold)"},children:[(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"},children:[(0,F.jsx)(wK,{$bg:"#228B22",children:(0,F.jsx)(w8,{})}),(0,F.jsxs)("div",{children:[(0,F.jsx)(wY,{style:{fontSize:"1.5rem"},children:"WELLINGTON WOLVES CHARITY GOLF TOURNAMENT"}),(0,F.jsx)(wX,{style:{marginTop:"0.25rem"},children:"One of our largest fundraising opportunities of the season!"})]})]}),(0,F.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginBottom:"0.75rem"},children:"📅 Event Details"}),(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:[(0,F.jsx)("strong",{children:"Date:"})," Saturday, April 4, 2026"]}),(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:[(0,F.jsx)("strong",{children:"Location:"})," Village Golf Course"]}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"122 Country Club Drive"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"Royal Palm Beach, FL 33411"}),(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginTop:"1.5rem",marginBottom:"0.75rem"},children:"🕐 Agenda"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• 11:00 AM – 12:00 PM: Golfer Registration"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• 1:00 PM: Shotgun Start"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• 5:00 PM: Food & Awards"})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginBottom:"0.75rem"},children:"💵 Golfer Pricing"}),(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:["• ",(0,F.jsx)("strong",{children:"$150"})," per golfer"]}),(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:["• ",(0,F.jsx)("strong",{children:"$600"})," per foursome"]}),(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.9rem",color:"var(--gray-500)",margin:"0.5rem 0",fontStyle:"italic"},children:["$70/golfer goes to course (greens fee + drinks).",(0,F.jsx)("br",{}),"Remaining balance is profit for the team!"]}),(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginTop:"1.5rem",marginBottom:"0.75rem"},children:"🎁 Raffle Items Needed"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"Each team is asked to donate:"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Three (3) raffle items"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Value range: $50–$150 per item"})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginBottom:"0.75rem"},children:"🏆 How Teams Earn Money"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Registered golfers & foursomes"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Team-secured sponsorships"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Silent auction items (100% goes to team!)"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:"• Raffle and contest proceeds"}),(0,F.jsx)("h4",{style:{fontFamily:"Bebas Neue",fontSize:"1.1rem",color:"var(--gold-dark)",letterSpacing:"1px",marginTop:"1.5rem",marginBottom:"0.75rem"},children:"📞 Questions?"}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:(0,F.jsx)("strong",{children:"Rochelle Glenn"})}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.95rem",color:"var(--gray-700)",margin:"0.25rem 0"},children:(0,F.jsx)("a",{href:"tel:5613735137",style:{color:"var(--navy)",textDecoration:"none"},children:"561-373-5137"})}),(0,F.jsx)("p",{style:{fontFamily:"Barlow",fontSize:"0.9rem",color:"var(--gray-500)",margin:"0.5rem 0",fontStyle:"italic"},children:"Join the Golf Tournament GroupMe for updates!"})]})]}),(0,F.jsx)("div",{style:{marginTop:"1.5rem",padding:"1rem",background:"var(--gray-100)",borderRadius:"8px"},children:(0,F.jsxs)("p",{style:{fontFamily:"Barlow",fontSize:"0.9rem",color:"var(--gray-600)",margin:0},children:[(0,F.jsx)("strong",{children:"🙋 Volunteers Required:"})," If our team participates, we must provide volunteers for swag bag assembly (2 weeks before), registration table, contest holes, raffles & silent auction, and general event support on tournament day."]})})]})]}),(0,F.jsx)(wZ,{}),(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"🔗"})," IMPORTANT LINKS"]}),(0,F.jsxs)(wq,{children:[(0,F.jsxs)(wG,{href:"https://eventconnect.io",target:"_blank",rel:"noopener noreferrer",$delay:"0.1s",children:[(0,F.jsx)(wK,{$bg:"#1a73e8",children:(0,F.jsx)(w7,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"EVENTCONNECT"}),(0,F.jsx)(wX,{children:"Tournament registration and hotel booking for NXTpro events."})]})]}),(0,F.jsxs)(wG,{href:"https://www.nxtprohoops.com",target:"_blank",rel:"noopener noreferrer",$delay:"0.2s",children:[(0,F.jsx)(wK,{$bg:"#000000",children:(0,F.jsx)(w7,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"PUMA NXTPRO"}),(0,F.jsx)(wX,{children:"Official Puma NXTpro circuit website for schedules and standings."})]})]}),(0,F.jsxs)(wG,{href:"https://hoopseen.com",target:"_blank",rel:"noopener noreferrer",$delay:"0.3s",children:[(0,F.jsx)(wK,{$bg:"#1E3A5F",children:(0,F.jsx)(w7,{})}),(0,F.jsxs)(wQ,{children:[(0,F.jsx)(wY,{children:"HOOPSEEN"}),(0,F.jsx)(wX,{children:"HOOPSEEN tournament information and team rankings."})]})]})]}),(0,F.jsx)(wZ,{}),(0,F.jsxs)(wW,{children:[(0,F.jsx)("span",{children:"📞"})," TEAM CONTACTS"]}),(0,F.jsx)(w0,{children:(0,F.jsxs)(w1,{children:[(0,F.jsxs)(w2,{children:[(0,F.jsx)("h4",{children:"Team Manager"}),(0,F.jsx)("p",{children:(0,F.jsx)("strong",{children:"Jason Ranney"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"tel:5614515880",children:"(561) 451-5880"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"mailto:jpkicker@gmail.com",children:"jpkicker@gmail.com"})})]}),(0,F.jsxs)(w2,{children:[(0,F.jsx)("h4",{children:"Head Coach"}),(0,F.jsx)("p",{children:(0,F.jsx)("strong",{children:"Elijah Balcarcel"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"tel:5613096242",children:"(561) 309-6242"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"mailto:elijahbalcarcel2@gmail.com",children:"elijahbalcarcel2@gmail.com"})})]}),(0,F.jsxs)(w2,{children:[(0,F.jsx)("h4",{children:"Assistant Coach"}),(0,F.jsx)("p",{children:(0,F.jsx)("strong",{children:"Julio Balcarcel"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"tel:5613243724",children:"(561) 324-3724"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"mailto:jula16@bellsouth.net",children:"jula16@bellsouth.net"})})]}),(0,F.jsxs)(w2,{children:[(0,F.jsx)("h4",{children:"Team Parent"}),(0,F.jsx)("p",{children:(0,F.jsx)("strong",{children:"Emma Snelgrove"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"tel:5616855674",children:"(561) 685-5674"})}),(0,F.jsx)("p",{children:(0,F.jsx)("a",{href:"mailto:troy1028@bellsouth.net",children:"troy1028@bellsouth.net"})})]})]})})]})})]}):(0,F.jsx)(w9,{children:(0,F.jsxs)(Ee,{children:[(0,F.jsx)(Et,{children:"🐺"}),(0,F.jsx)(Er,{children:"WOLF'S DEN"}),(0,F.jsxs)(En,{children:["This area is for team members only.",(0,F.jsx)("br",{}),"Enter the password to continue."]}),(0,F.jsxs)("form",{onSubmit:e=>{e.preventDefault(),"wolves2026"===r.toLowerCase()?(localStorage.setItem("wolfsDenAuth","true"),t(!0),a("")):a("Incorrect password. Please try again.")},children:[(0,F.jsx)(Ei,{type:"password",placeholder:"Enter password",value:r,onChange:e=>n(e.target.value),autoFocus:!0}),(0,F.jsx)(Ea,{type:"submit",children:"ENTER THE DEN"})]}),i&&(0,F.jsx)(Es,{children:i})]})})},B=L("7fPBF");let El=e=>e,Eu,Ec,Eh,Ed,Ef,Ep,Em,Eg,Ey,Ev,Eb,Ex,Ew,EE,ES,Ek,EC,E_,ET,EI=rX(Eu||(Eu=El`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`)),EN=rQ.div(Ec||(Ec=El`
  min-height: 100vh;
  background: var(--gray-100);
  padding: 2rem;
`)),Ej=rQ.div(Eh||(Eh=El`
  max-width: 800px;
  margin: 0 auto;
`)),EA=rQ.div(Ed||(Ed=El`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${0} 0.6s ease;
`),EI),ER=rQ.h1(Ef||(Ef=El`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: var(--navy);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: var(--gold);
  }
`)),EP=rQ.p(Ep||(Ep=El`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-600);
  font-size: 1.1rem;
`)),EO=rQ.div(Em||(Em=El`
  background: var(--white);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${0} 0.6s ease 0.2s backwards;
`),EI),ED=rQ.div(Eg||(Eg=El`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--gray-200);
`)),EL=rQ.input(Ey||(Ey=El`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`)),EM=rQ.button(Ev||(Ev=El`
  background: var(--navy);
  color: var(--white);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background: var(--navy-light);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`)),EF=rQ.form(Eb||(Eb=El`
  display: grid;
  gap: 1.5rem;
`)),EB=rQ.div(Ex||(Ex=El`
  display: flex;
  flex-direction: column;
`)),Ez=rQ.label(Ew||(Ew=El`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
`)),E$=rQ.input(EE||(EE=El`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`)),EV=rQ.select(ES||(ES=El`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`)),EU=rQ.textarea(Ek||(Ek=El`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }
`)),EH=rQ.button(EC||(EC=El`
  background: var(--gold);
  color: var(--navy);
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: var(--gold-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`)),EW=rQ.div(E_||(E_=El`
  color: #e74c3c;
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`)),Eq=rQ.div(ET||(ET=El`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #28a745;
    font-size: 1.25rem;
  }
`));var EG=()=>{let[e,t]=(0,B.useState)(!1),[r,n]=(0,B.useState)(""),[i,a]=(0,B.useState)(""),[s,o]=(0,B.useState)(!1),[l,u]=(0,B.useState)({playerId:"",title:"",youtubeUrl:"",description:""}),[c,h]=(0,B.useState)({}),[d,f]=(0,B.useState)(""),p=async e=>{let t;e.preventDefault(),o(!0),h({}),f("");let r=(t={},l.playerId||(t.playerId="Please select a player"),l.title.trim()||(t.title="Video title is required"),l.youtubeUrl.trim()?bo(l.youtubeUrl)||(t.youtubeUrl="Please enter a valid YouTube URL"):t.youtubeUrl="YouTube URL is required",t);if(Object.keys(r).length>0){h(r),o(!1);return}try{var n,i,a;let e,t,r,s=u4.find(e=>e.id===l.playerId),o=bo(l.youtubeUrl);await (n=vT(bs,"highlights"),i={playerId:l.playerId,playerName:`${s.firstName} ${s.lastName}`,title:l.title.trim(),youtubeUrl:l.youtubeUrl.trim(),youtubeVideoId:o,description:l.description.trim(),submittedAt:new vH("serverTimestamp"),approved:!0},e=fk(n.firestore,vA),t=function(e,t,...r){if(e=hv(e),1==arguments.length&&(t=fl.newId()),fb("doc","path",t),e instanceof vS){let n=fm.fromString(t,...r);return fx(n),new vC(e,null,new fv(n))}{if(!(e instanceof vC||e instanceof v_))throw new d7(d8.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(fm.fromString(t,...r));return fx(n),new vC(e.firestore,e instanceof v_?e.converter:null,new fv(n))}}(n),a=n.converter,r=a?a.toFirestore(i):i,(function(e,t){var r;let n;return r=vR(e),n=new d9,r.asyncQueue.enqueueAndForget(async()=>y2(await vy(r).then(e=>e.syncEngine),t,n)),n.promise})(e,[(function(e,t,r,n,i,a={}){let s,o,l=e.createContext(a.merge||a.mergeFields?2:0,t,r,i);vK("Data must be an object, but it was:",l,n);let u=vq(n,l);if(a.merge)s=new fH(l.fieldMask),o=l.fieldTransforms;else if(a.mergeFields){let e=[];for(let n of a.mergeFields){let i=vQ(t,n,r);if(!l.contains(i))throw new d7(d8.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}s=new fH(e),o=l.fieldTransforms.filter(e=>s.covers(e.field))}else s=null,o=l.fieldTransforms;return new vB(new pv(u),s,o)})(vU(n.firestore),"addDoc",t._key,r,null!==n.converter,{}).toMutation(t._key,mp.exists(!1))]).then(()=>t)),f(`Highlight video for ${s.firstName} ${s.lastName} has been uploaded successfully!`),u({playerId:"",title:"",youtubeUrl:"",description:""})}catch(e){console.error("Error uploading highlight:",e),h({submit:"Error uploading video. Please try again."})}finally{o(!1)}},m=e=>{let{name:t,value:r}=e.target;u(e=>hN(cq({},e),{[t]:r})),c[t]&&h(e=>hN(cq({},e),{[t]:""}))};return e?(0,F.jsx)(EN,{children:(0,F.jsxs)(Ej,{children:[(0,F.jsxs)(EA,{children:[(0,F.jsxs)(ER,{children:[(0,F.jsx)(nA,{})," Upload Video Highlights"]}),(0,F.jsx)(EP,{children:"Add video highlights for Wellington Wolves players"})]}),(0,F.jsx)(EO,{children:(0,F.jsxs)(EF,{onSubmit:p,children:[(0,F.jsxs)(EB,{children:[(0,F.jsx)(Ez,{children:"Select Player *"}),(0,F.jsxs)(EV,{name:"playerId",value:l.playerId,onChange:m,className:c.playerId?"error":"",children:[(0,F.jsx)("option",{value:"",children:"Choose a player..."}),u4.map(e=>(0,F.jsxs)("option",{value:e.id,children:["#",e.number," ",e.firstName," ",e.lastName," (",e.position,")"]},e.id))]}),c.playerId&&(0,F.jsx)(EW,{children:c.playerId})]}),(0,F.jsxs)(EB,{children:[(0,F.jsx)(Ez,{children:"Video Title *"}),(0,F.jsx)(E$,{type:"text",name:"title",value:l.title,onChange:m,placeholder:"e.g., Game Winner vs Miami Elite",className:c.title?"error":""}),c.title&&(0,F.jsx)(EW,{children:c.title})]}),(0,F.jsxs)(EB,{children:[(0,F.jsx)(Ez,{children:"YouTube URL *"}),(0,F.jsx)(E$,{type:"url",name:"youtubeUrl",value:l.youtubeUrl,onChange:m,placeholder:"https://www.youtube.com/watch?v=... or https://youtu.be/...",className:c.youtubeUrl?"error":""}),c.youtubeUrl&&(0,F.jsx)(EW,{children:c.youtubeUrl})]}),(0,F.jsxs)(EB,{children:[(0,F.jsx)(Ez,{children:"Description (Optional)"}),(0,F.jsx)(EU,{name:"description",value:l.description,onChange:m,placeholder:"Additional details about this highlight..."})]}),c.submit&&(0,F.jsx)(EW,{children:c.submit}),(0,F.jsxs)(EH,{type:"submit",disabled:s,children:[(0,F.jsx)(nR,{}),s?"Uploading...":"Upload Highlight"]}),d&&(0,F.jsxs)(Eq,{children:[(0,F.jsx)(n$,{}),d]})]})})]})}):(0,F.jsx)(EN,{children:(0,F.jsxs)(Ej,{children:[(0,F.jsxs)(EA,{children:[(0,F.jsxs)(ER,{children:[(0,F.jsx)(nF,{})," Team Access Required"]}),(0,F.jsx)(EP,{children:"Enter the team password to upload video highlights"})]}),(0,F.jsx)(EO,{children:(0,F.jsx)(ED,{children:(0,F.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(!0),a(""),setTimeout(()=>{"Wolves2026"===r?t(!0):a("Incorrect password. Please try again."),o(!1)},500)},children:[(0,F.jsxs)(EB,{children:[(0,F.jsx)(Ez,{children:"Team Password"}),(0,F.jsx)(EL,{type:"password",value:r,onChange:e=>n(e.target.value),placeholder:"Enter team password",className:i?"error":""}),i&&(0,F.jsx)(EW,{children:i})]}),(0,F.jsx)(EM,{type:"submit",disabled:s,children:s?"Verifying...":"Access Upload Portal"})]})})})]})})};let EK=e=>e,EQ,EY,EX,EJ=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=rK.apply(void 0,eF([e],t,!1)),i="sc-global-".concat(tJ(JSON.stringify(n))),a=new rY(n,i),o=new WeakMap,l=function(e){var t=rP(),r=s(B).useContext(rU),n=o.get(t.styleSheet);return void 0===n&&(n=t.styleSheet.allocateGSInstance(i),o.set(t.styleSheet,n)),"u">typeof window&&t.styleSheet.server||u(n,e,t.styleSheet,r,t.stylis),s(B).useLayoutEffect(function(){return t.styleSheet.server||u(n,e,t.styleSheet,r,t.stylis),function(){var e;a.removeStyles(n,t.styleSheet),e=t.styleSheet.options.target,"u">typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(e){return e.remove()})}},[n,e,t.styleSheet,r,t.stylis]),null};function u(e,t,r,n,i){if(a.isStatic)a.renderStyles(e,tb,r,i);else{var s=eM(eM({},t),{theme:tI(t,n,l.defaultProps)});a.renderStyles(e,s,r,i)}}return s(B).memo(l)}(EQ||(EQ=EK`
  :root {
    --navy: #001f3f;
    --navy-dark: #001529;
    --navy-light: #003366;
    --gold: #ffd700;
    --gold-dark: #d4af00;
    --gold-light: #ffe44d;
    --white: #ffffff;
    --off-white: #f8f9fa;
    --gray-100: #f1f3f5;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-500: #6c757d;
    --gray-700: #495057;
    --gray-900: #212529;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    background-color: var(--white);
    color: var(--gray-900);
    overflow-x: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--navy-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gold-light);
  }

  /* Selection color */
  ::selection {
    background: var(--gold);
    color: var(--navy);
  }
`)),EZ=rQ.div(EY||(EY=EK`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`)),E0=rQ.main(EX||(EX=EK`
  flex: 1;
`));tH(document.getElementById("root")).render((0,F.jsx)(s(B).StrictMode,{children:(0,F.jsx)(function(e){let{basename:t,children:r,future:n,window:i}=e,a=B.useRef();null==a.current&&(a.current=function(e,t,r){void 0===r&&(r={});let{window:n=document.defaultView,v5Compat:i=!1}=r,a=n.history,s=tW.Pop,o=null,l=u();function u(){return(a.state||{idx:null}).idx}function c(){s=tW.Pop;let e=u(),t=null==e?null:e-l;l=e,o&&o({action:s,location:d.location,delta:t})}function h(e){let t="null"!==n.location.origin?n.location.origin:n.location.href,r="string"==typeof e?e:G(e);return U(t,"No window.location.(origin|href) available to create URL for href: "+(r=r.replace(/ $/,"%20"))),new URL(r,t)}null==l&&(l=0,a.replaceState($({},a.state,{idx:l}),""));let d={get action(){return s},get location(){return e(n,a)},listen(e){if(o)throw Error("A history only accepts one active listener");return n.addEventListener(V,c),o=e,()=>{n.removeEventListener(V,c),o=null}},createHref:e=>t(n,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=tW.Push;let r=q(d.location,e,t);let c=W(r,l=u()+1),h=d.createHref(r);try{a.pushState(c,"",h)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;n.location.assign(h)}i&&o&&o({action:s,location:d.location,delta:1})},replace:function(e,t){s=tW.Replace;let r=q(d.location,e,t);let n=W(r,l=u()),c=d.createHref(r);a.replaceState(n,"",c),i&&o&&o({action:s,location:d.location,delta:0})},go:e=>a.go(e)};return d}(function(e,t){let{pathname:r,search:n,hash:i}=e.location;return q("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:G(t)},{window:i,v5Compat:!0}));let s=a.current,[o,l]=B.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},c=B.useCallback(e=>{u&&eP?eP(()=>l(e)):l(e)},[l,u]);return B.useLayoutEffect(()=>s.listen(c),[s,c]),B.useEffect(()=>(function(e){null==e||e.v7_startTransition,null==e||e.v7_relativeSplatPath})(n),[n]),B.createElement(eI,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:n})},{children:(0,F.jsx)(function(){return(0,F.jsxs)(EZ,{children:[(0,F.jsx)(EJ,{}),(0,F.jsx)(nb,{}),(0,F.jsx)(E0,{children:(0,F.jsxs)(eN,{children:[(0,F.jsx)(eT,{path:"/",element:(0,F.jsx)(a9,{})}),(0,F.jsx)(eT,{path:"/about",element:(0,F.jsx)(on,{})}),(0,F.jsx)(eT,{path:"/travel",element:(0,F.jsx)(uK,{})}),(0,F.jsx)(eT,{path:"/players",element:(0,F.jsx)(cW,{})}),(0,F.jsx)(eT,{path:"/players/:playerId",element:(0,F.jsx)(xW,{})}),(0,F.jsx)(eT,{path:"/announcements",element:(0,F.jsx)(wa,{})}),(0,F.jsx)(eT,{path:"/wolfs-den",element:(0,F.jsx)(Eo,{})}),(0,F.jsx)(eT,{path:"/upload",element:(0,F.jsx)(EG,{})})]})}),(0,F.jsx)(iw,{})]})},{})})}));
//# sourceMappingURL=wolves-basketball-website.9019d15d.js.map
