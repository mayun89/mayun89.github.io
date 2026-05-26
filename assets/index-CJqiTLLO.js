(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function l(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(f){if(f.ep)return;f.ep=!0;const c=l(f);fetch(f.href,c)}})();function zy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zo={exports:{}},yi={};var Dh;function Ay(){if(Dh)return yi;Dh=1;var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(r,f,c){var g=null;if(c!==void 0&&(g=""+c),f.key!==void 0&&(g=""+f.key),"key"in f){c={};for(var _ in f)_!=="key"&&(c[_]=f[_])}else c=f;return f=c.ref,{$$typeof:i,type:r,key:g,ref:f!==void 0?f:null,props:c}}return yi.Fragment=a,yi.jsx=l,yi.jsxs=l,yi}var wh;function Cy(){return wh||(wh=1,Zo.exports=Ay()),Zo.exports}var D=Cy(),Jo={exports:{}},se={};var Nh;function Ey(){if(Nh)return se;Nh=1;var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),g=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.iterator;function R(S){return S===null||typeof S!="object"?null:(S=A&&S[A]||S["@@iterator"],typeof S=="function"?S:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,B={};function I(S,H,k){this.props=S,this.context=H,this.refs=B,this.updater=k||U}I.prototype.isReactComponent={},I.prototype.setState=function(S,H){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,H,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function x(){}x.prototype=I.prototype;function Z(S,H,k){this.props=S,this.context=H,this.refs=B,this.updater=k||U}var V=Z.prototype=new x;V.constructor=Z,T(V,I.prototype),V.isPureReactComponent=!0;var P=Array.isArray;function $(){}var K={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function pe(S,H,k){var W=k.ref;return{$$typeof:i,type:S,key:H,ref:W!==void 0?W:null,props:k}}function nn(S,H){return pe(S.type,H,S.props)}function Ke(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function ge(S){var H={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(k){return H[k]})}var Jn=/\/+/g;function ns(S,H){return typeof S=="object"&&S!==null&&S.key!=null?ge(""+S.key):H.toString(36)}function qn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then($,$):(S.status="pending",S.then(function(H){S.status==="pending"&&(S.status="fulfilled",S.value=H)},function(H){S.status==="pending"&&(S.status="rejected",S.reason=H)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function N(S,H,k,W,ae){var re=typeof S;(re==="undefined"||re==="boolean")&&(S=null);var ye=!1;if(S===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(S.$$typeof){case i:case a:ye=!0;break;case O:return ye=S._init,N(ye(S._payload),H,k,W,ae)}}if(ye)return ae=ae(S),ye=W===""?"."+ns(S,0):W,P(ae)?(k="",ye!=null&&(k=ye.replace(Jn,"$&/")+"/"),N(ae,H,k,"",function(Ea){return Ea})):ae!=null&&(Ke(ae)&&(ae=nn(ae,k+(ae.key==null||S&&S.key===ae.key?"":(""+ae.key).replace(Jn,"$&/")+"/")+ye)),H.push(ae)),1;ye=0;var sn=W===""?".":W+":";if(P(S))for(var Be=0;Be<S.length;Be++)W=S[Be],re=sn+ns(W,Be),ye+=N(W,H,k,re,ae);else if(Be=R(S),typeof Be=="function")for(S=Be.call(S),Be=0;!(W=S.next()).done;)W=W.value,re=sn+ns(W,Be++),ye+=N(W,H,k,re,ae);else if(re==="object"){if(typeof S.then=="function")return N(qn(S),H,k,W,ae);throw H=String(S),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(S,H,k){if(S==null)return S;var W=[],ae=0;return N(S,W,"","",function(re){return H.call(k,re,ae++)}),W}function ne(S){if(S._status===-1){var H=S._result;H=H(),H.then(function(k){(S._status===0||S._status===-1)&&(S._status=1,S._result=k)},function(k){(S._status===0||S._status===-1)&&(S._status=2,S._result=k)}),S._status===-1&&(S._status=0,S._result=H)}if(S._status===1)return S._result.default;throw S._result}var be=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Ee={map:G,forEach:function(S,H,k){G(S,function(){H.apply(this,arguments)},k)},count:function(S){var H=0;return G(S,function(){H++}),H},toArray:function(S){return G(S,function(H){return H})||[]},only:function(S){if(!Ke(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return se.Activity=b,se.Children=Ee,se.Component=I,se.Fragment=l,se.Profiler=f,se.PureComponent=Z,se.StrictMode=r,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,se.__COMPILER_RUNTIME={__proto__:null,c:function(S){return K.H.useMemoCache(S)}},se.cache=function(S){return function(){return S.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(S,H,k){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var W=T({},S.props),ae=S.key;if(H!=null)for(re in H.key!==void 0&&(ae=""+H.key),H)!q.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(W[re]=H[re]);var re=arguments.length-2;if(re===1)W.children=k;else if(1<re){for(var ye=Array(re),sn=0;sn<re;sn++)ye[sn]=arguments[sn+2];W.children=ye}return pe(S.type,ae,W)},se.createContext=function(S){return S={$$typeof:g,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},se.createElement=function(S,H,k){var W,ae={},re=null;if(H!=null)for(W in H.key!==void 0&&(re=""+H.key),H)q.call(H,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ae[W]=H[W]);var ye=arguments.length-2;if(ye===1)ae.children=k;else if(1<ye){for(var sn=Array(ye),Be=0;Be<ye;Be++)sn[Be]=arguments[Be+2];ae.children=sn}if(S&&S.defaultProps)for(W in ye=S.defaultProps,ye)ae[W]===void 0&&(ae[W]=ye[W]);return pe(S,re,ae)},se.createRef=function(){return{current:null}},se.forwardRef=function(S){return{$$typeof:_,render:S}},se.isValidElement=Ke,se.lazy=function(S){return{$$typeof:O,_payload:{_status:-1,_result:S},_init:ne}},se.memo=function(S,H){return{$$typeof:m,type:S,compare:H===void 0?null:H}},se.startTransition=function(S){var H=K.T,k={};K.T=k;try{var W=S(),ae=K.S;ae!==null&&ae(k,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then($,be)}catch(re){be(re)}finally{H!==null&&k.types!==null&&(H.types=k.types),K.T=H}},se.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},se.use=function(S){return K.H.use(S)},se.useActionState=function(S,H,k){return K.H.useActionState(S,H,k)},se.useCallback=function(S,H){return K.H.useCallback(S,H)},se.useContext=function(S){return K.H.useContext(S)},se.useDebugValue=function(){},se.useDeferredValue=function(S,H){return K.H.useDeferredValue(S,H)},se.useEffect=function(S,H){return K.H.useEffect(S,H)},se.useEffectEvent=function(S){return K.H.useEffectEvent(S)},se.useId=function(){return K.H.useId()},se.useImperativeHandle=function(S,H,k){return K.H.useImperativeHandle(S,H,k)},se.useInsertionEffect=function(S,H){return K.H.useInsertionEffect(S,H)},se.useLayoutEffect=function(S,H){return K.H.useLayoutEffect(S,H)},se.useMemo=function(S,H){return K.H.useMemo(S,H)},se.useOptimistic=function(S,H){return K.H.useOptimistic(S,H)},se.useReducer=function(S,H,k){return K.H.useReducer(S,H,k)},se.useRef=function(S){return K.H.useRef(S)},se.useState=function(S){return K.H.useState(S)},se.useSyncExternalStore=function(S,H,k){return K.H.useSyncExternalStore(S,H,k)},se.useTransition=function(){return K.H.useTransition()},se.version="19.2.6",se}var Yh;function gf(){return Yh||(Yh=1,Jo.exports=Ey()),Jo.exports}var Fn=gf();const My=zy(Fn);var Ko={exports:{}},vi={},Wo={exports:{}},Qo={};var jh;function Ty(){return jh||(jh=1,(function(i){function a(N,G){var ne=N.length;N.push(G);e:for(;0<ne;){var be=ne-1>>>1,Ee=N[be];if(0<f(Ee,G))N[be]=G,N[ne]=Ee,ne=be;else break e}}function l(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var G=N[0],ne=N.pop();if(ne!==G){N[0]=ne;e:for(var be=0,Ee=N.length,S=Ee>>>1;be<S;){var H=2*(be+1)-1,k=N[H],W=H+1,ae=N[W];if(0>f(k,ne))W<Ee&&0>f(ae,k)?(N[be]=ae,N[W]=ne,be=W):(N[be]=k,N[H]=ne,be=H);else if(W<Ee&&0>f(ae,ne))N[be]=ae,N[W]=ne,be=W;else break e}}return G}function f(N,G){var ne=N.sortIndex-G.sortIndex;return ne!==0?ne:N.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var g=Date,_=g.now();i.unstable_now=function(){return g.now()-_}}var p=[],m=[],O=1,b=null,A=3,R=!1,U=!1,T=!1,B=!1,I=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function V(N){for(var G=l(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=N)r(m),G.sortIndex=G.expirationTime,a(p,G);else break;G=l(m)}}function P(N){if(T=!1,V(N),!U)if(l(p)!==null)U=!0,$||($=!0,ge());else{var G=l(m);G!==null&&qn(P,G.startTime-N)}}var $=!1,K=-1,q=5,pe=-1;function nn(){return B?!0:!(i.unstable_now()-pe<q)}function Ke(){if(B=!1,$){var N=i.unstable_now();pe=N;var G=!0;try{e:{U=!1,T&&(T=!1,x(K),K=-1),R=!0;var ne=A;try{n:{for(V(N),b=l(p);b!==null&&!(b.expirationTime>N&&nn());){var be=b.callback;if(typeof be=="function"){b.callback=null,A=b.priorityLevel;var Ee=be(b.expirationTime<=N);if(N=i.unstable_now(),typeof Ee=="function"){b.callback=Ee,V(N),G=!0;break n}b===l(p)&&r(p),V(N)}else r(p);b=l(p)}if(b!==null)G=!0;else{var S=l(m);S!==null&&qn(P,S.startTime-N),G=!1}}break e}finally{b=null,A=ne,R=!1}G=void 0}}finally{G?ge():$=!1}}}var ge;if(typeof Z=="function")ge=function(){Z(Ke)};else if(typeof MessageChannel<"u"){var Jn=new MessageChannel,ns=Jn.port2;Jn.port1.onmessage=Ke,ge=function(){ns.postMessage(null)}}else ge=function(){I(Ke,0)};function qn(N,G){K=I(function(){N(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(N){switch(A){case 1:case 2:case 3:var G=3;break;default:G=A}var ne=A;A=G;try{return N()}finally{A=ne}},i.unstable_requestPaint=function(){B=!0},i.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=A;A=N;try{return G()}finally{A=ne}},i.unstable_scheduleCallback=function(N,G,ne){var be=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,N){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ne+Ee,N={id:O++,callback:G,priorityLevel:N,startTime:ne,expirationTime:Ee,sortIndex:-1},ne>be?(N.sortIndex=ne,a(m,N),l(p)===null&&N===l(m)&&(T?(x(K),K=-1):T=!0,qn(P,ne-be))):(N.sortIndex=Ee,a(p,N),U||R||(U=!0,$||($=!0,ge()))),N},i.unstable_shouldYield=nn,i.unstable_wrapCallback=function(N){var G=A;return function(){var ne=A;A=G;try{return N.apply(this,arguments)}finally{A=ne}}}})(Qo)),Qo}var Hh;function Oy(){return Hh||(Hh=1,Wo.exports=Ty()),Wo.exports}var Vo={exports:{}},Pe={};var Bh;function Ly(){if(Bh)return Pe;Bh=1;var i=gf();function a(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)m+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(p,m,O){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:b==null?null:""+b,children:p,containerInfo:m,implementation:O}}var g=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pe.createPortal=function(p,m){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(a(299));return c(p,m,null,O)},Pe.flushSync=function(p){var m=g.T,O=r.p;try{if(g.T=null,r.p=2,p)return p()}finally{g.T=m,r.p=O,r.d.f()}},Pe.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Pe.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Pe.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var O=m.as,b=_(O,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;O==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:R}):O==="script"&&r.d.X(p,{crossOrigin:b,integrity:A,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pe.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var O=_(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Pe.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var O=m.as,b=_(O,m.crossOrigin);r.d.L(p,O,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pe.preloadModule=function(p,m){if(typeof p=="string")if(m){var O=_(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Pe.requestFormReset=function(p){r.d.r(p)},Pe.unstable_batchedUpdates=function(p,m){return p(m)},Pe.useFormState=function(p,m,O){return g.H.useFormState(p,m,O)},Pe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Pe.version="19.2.6",Pe}var Rh;function Dy(){if(Rh)return Vo.exports;Rh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),Vo.exports=Ly(),Vo.exports}var Uh;function wy(){if(Uh)return vi;Uh=1;var i=Oy(),a=gf(),l=Dy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var s=e,t=n;;){var u=s.return;if(u===null)break;var o=u.alternate;if(o===null){if(t=u.return,t!==null){s=t;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===s)return p(u),e;if(o===t)return p(u),n;o=o.sibling}throw Error(r(188))}if(s.return!==t.return)s=u,t=o;else{for(var d=!1,h=u.child;h;){if(h===s){d=!0,s=u,t=o;break}if(h===t){d=!0,t=u,s=o;break}h=h.sibling}if(!d){for(h=o.child;h;){if(h===s){d=!0,s=o,t=u;break}if(h===t){d=!0,t=o,s=u;break}h=h.sibling}if(!d)throw Error(r(189))}}if(s.alternate!==t)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:n}function O(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=O(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,A=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),nn=Symbol.for("react.memo_cache_sentinel"),Ke=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=Ke&&e[Ke]||e["@@iterator"],typeof e=="function"?e:null)}var Jn=Symbol.for("react.client.reference");function ns(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Jn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case I:return"Profiler";case B:return"StrictMode";case P:return"Suspense";case $:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case Z:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:ns(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ns(e(n))}catch{}}return null}var qn=Array.isArray,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],Ee=-1;function S(e){return{current:e}}function H(e){0>Ee||(e.current=be[Ee],be[Ee]=null,Ee--)}function k(e,n){Ee++,be[Ee]=e.current,e.current=n}var W=S(null),ae=S(null),re=S(null),ye=S(null);function sn(e,n){switch(k(re,n),k(ae,e),k(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Pg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Pg(n),e=eh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(W),k(W,e)}function Be(){H(W),H(ae),H(re)}function Ea(e){e.memoizedState!==null&&k(ye,e);var n=W.current,s=eh(n,e.type);n!==s&&(k(ae,e),k(W,s))}function wi(e){ae.current===e&&(H(W),H(ae)),ye.current===e&&(H(ye),hi._currentValue=ne)}var Mr,Lf;function Fs(e){if(Mr===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Mr=n&&n[1]||"",Lf=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mr+e+Lf}var Tr=!1;function Or(e,n){if(!e||Tr)return"";Tr=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(n){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(L){var M=L}Reflect.construct(e,[],j)}else{try{j.call()}catch(L){M=L}e.call(j.prototype)}}else{try{throw Error()}catch(L){M=L}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(L){if(L&&M&&typeof L.stack=="string")return[L.stack,M.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=t.DetermineComponentFrameRoot(),d=o[0],h=o[1];if(d&&h){var y=d.split(`
`),E=h.split(`
`);for(u=t=0;t<y.length&&!y[t].includes("DetermineComponentFrameRoot");)t++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(t===y.length||u===E.length)for(t=y.length-1,u=E.length-1;1<=t&&0<=u&&y[t]!==E[u];)u--;for(;1<=t&&0<=u;t--,u--)if(y[t]!==E[u]){if(t!==1||u!==1)do if(t--,u--,0>u||y[t]!==E[u]){var w=`
`+y[t].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=t&&0<=u);break}}}finally{Tr=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Fs(s):""}function P_(e,n){switch(e.tag){case 26:case 27:case 5:return Fs(e.type);case 16:return Fs("Lazy");case 13:return e.child!==n&&n!==null?Fs("Suspense Fallback"):Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 15:return Or(e.type,!1);case 11:return Or(e.type.render,!1);case 1:return Or(e.type,!0);case 31:return Fs("Activity");default:return""}}function Df(e){try{var n="",s=null;do n+=P_(e,s),s=e,e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Lr=Object.prototype.hasOwnProperty,Dr=i.unstable_scheduleCallback,wr=i.unstable_cancelCallback,em=i.unstable_shouldYield,nm=i.unstable_requestPaint,_n=i.unstable_now,sm=i.unstable_getCurrentPriorityLevel,wf=i.unstable_ImmediatePriority,Nf=i.unstable_UserBlockingPriority,Ni=i.unstable_NormalPriority,tm=i.unstable_LowPriority,Yf=i.unstable_IdlePriority,am=i.log,im=i.unstable_setDisableYieldValue,Ma=null,mn=null;function zs(e){if(typeof am=="function"&&im(e),mn&&typeof mn.setStrictMode=="function")try{mn.setStrictMode(Ma,e)}catch{}}var pn=Math.clz32?Math.clz32:um,lm=Math.log,rm=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(lm(e)/rm|0)|0}var Yi=256,ji=262144,Hi=4194304;function Ps(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,n,s){var t=e.pendingLanes;if(t===0)return 0;var u=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=t&134217727;return h!==0?(t=h&~o,t!==0?u=Ps(t):(d&=h,d!==0?u=Ps(d):s||(s=h&~e,s!==0&&(u=Ps(s))))):(h=t&~o,h!==0?u=Ps(h):d!==0?u=Ps(d):s||(s=t&~e,s!==0&&(u=Ps(s)))),u===0?0:n!==0&&n!==u&&(n&o)===0&&(o=u&-u,s=n&-n,o>=s||o===32&&(s&4194048)!==0)?n:u}function Ta(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function om(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var e=Hi;return Hi<<=1,(Hi&62914560)===0&&(Hi=4194304),e}function Nr(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function Oa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fm(e,n,s,t,u,o){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,E=e.hiddenUpdates;for(s=d&~s;0<s;){var w=31-pn(s),j=1<<w;h[w]=0,y[w]=-1;var M=E[w];if(M!==null)for(E[w]=null,w=0;w<M.length;w++){var L=M[w];L!==null&&(L.lane&=-536870913)}s&=~j}t!==0&&Hf(e,t,0),o!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~n))}function Hf(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var t=31-pn(n);e.entangledLanes|=n,e.entanglements[t]=e.entanglements[t]|1073741824|s&261930}function Bf(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var t=31-pn(s),u=1<<t;u&n|e[t]&n&&(e[t]|=n),s&=~u}}function Rf(e,n){var s=n&-n;return s=(s&42)!==0?1:Yr(s),(s&(e.suspendedLanes|n))!==0?0:s}function Yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uf(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Ah(e.type))}function Xf(e,n){var s=G.p;try{return G.p=e,n()}finally{G.p=s}}var As=Math.random().toString(36).slice(2),We="__reactFiber$"+As,ln="__reactProps$"+As,Et="__reactContainer$"+As,Hr="__reactEvents$"+As,cm="__reactListeners$"+As,dm="__reactHandles$"+As,qf="__reactResources$"+As,La="__reactMarker$"+As;function Br(e){delete e[We],delete e[ln],delete e[Hr],delete e[cm],delete e[dm]}function Mt(e){var n=e[We];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Et]||s[We]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=rh(e);e!==null;){if(s=e[We])return s;e=rh(e)}return n}e=s,s=e.parentNode}return null}function Tt(e){if(e=e[We]||e[Et]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ot(e){var n=e[qf];return n||(n=e[qf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(e){e[La]=!0}var Gf=new Set,kf={};function et(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(kf[e]=n,e=0;e<n.length;e++)Gf.add(n[e])}var gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),If={},xf={};function hm(e){return Lr.call(xf,e)?!0:Lr.call(If,e)?!1:gm.test(e)?xf[e]=!0:(If[e]=!0,!1)}function Ri(e,n,s){if(hm(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var t=n.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Ui(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function ss(e,n,s,t){if(t===null)e.removeAttribute(s);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+t)}}function Mn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _m(e,n,s){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var u=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){s=""+d,o.call(this,d)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Rr(e){if(!e._valueTracker){var n=Zf(e)?"checked":"value";e._valueTracker=_m(e,n,""+e[n])}}function Jf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),t="";return e&&(t=Zf(e)?e.checked?"true":"false":e.value),e=t,e!==s?(n.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mm=/[\n"\\]/g;function Tn(e){return e.replace(mm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ur(e,n,s,t,u,o,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mn(n)):e.value!==""+Mn(n)&&(e.value=""+Mn(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Xr(e,d,Mn(n)):s!=null?Xr(e,d,Mn(s)):t!=null&&e.removeAttribute("value"),u==null&&o!=null&&(e.defaultChecked=!!o),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Mn(h):e.removeAttribute("name")}function Kf(e,n,s,t,u,o,d,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||s!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){Rr(e);return}s=s!=null?""+Mn(s):"",n=n!=null?""+Mn(n):s,h||n===e.value||(e.value=n),e.defaultValue=n}t=t??u,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=h?e.checked:!!t,e.defaultChecked=!!t,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Rr(e)}function Xr(e,n,s){n==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Dt(e,n,s,t){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&t&&(e[s].defaultSelected=!0)}else{for(s=""+Mn(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,t&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Wf(e,n,s){if(n!=null&&(n=""+Mn(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Mn(s):""}function Qf(e,n,s,t){if(n==null){if(t!=null){if(s!=null)throw Error(r(92));if(qn(t)){if(1<t.length)throw Error(r(93));t=t[0]}s=t}s==null&&(s=""),n=s}s=Mn(n),e.defaultValue=s,t=e.textContent,t===s&&t!==""&&t!==null&&(e.value=t),Rr(e)}function wt(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vf(e,n,s){var t=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?t?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":t?e.setProperty(n,s):typeof s!="number"||s===0||pm.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function $f(e,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,s!=null){for(var t in s)!s.hasOwnProperty(t)||n!=null&&n.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var u in n)t=n[u],n.hasOwnProperty(u)&&s[u]!==t&&Vf(e,u,t)}else for(var o in n)n.hasOwnProperty(o)&&Vf(e,o,n[o])}function qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return vm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ts(){}var Gr=null;function kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nt=null,Yt=null;function Ff(e){var n=Tt(e);if(n&&(e=n.stateNode)){var s=e[ln]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ur(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var t=s[n];if(t!==e&&t.form===e.form){var u=t[ln]||null;if(!u)throw Error(r(90));Ur(t,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)t=s[n],t.form===e.form&&Jf(t)}break e;case"textarea":Wf(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Dt(e,!!s.multiple,n,!1)}}}var Ir=!1;function Pf(e,n,s){if(Ir)return e(n,s);Ir=!0;try{var t=e(n);return t}finally{if(Ir=!1,(Nt!==null||Yt!==null)&&(Tl(),Nt&&(n=Nt,e=Yt,Yt=Nt=null,Ff(n),e)))for(n=0;n<e.length;n++)Ff(e[n])}}function wa(e,n){var s=e.stateNode;if(s===null)return null;var t=s[ln]||null;if(t===null)return null;s=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var as=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xr=!1;if(as)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){xr=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{xr=!1}var Cs=null,Zr=null,Gi=null;function ec(){if(Gi)return Gi;var e,n=Zr,s=n.length,t,u="value"in Cs?Cs.value:Cs.textContent,o=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(t=1;t<=d&&n[s-t]===u[o-t];t++);return Gi=u.slice(e,1<t?1-t:void 0)}function ki(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function nc(){return!1}function rn(e){function n(s,t,u,o,d){this._reactName=s,this._targetInst=u,this.type=t,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(s=e[h],this[h]=s?s(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:nc,this.isPropagationStopped=nc,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),n}var nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=rn(nt),Ya=b({},nt,{view:0,detail:0}),Sm=rn(Ya),Jr,Kr,ja,Zi=b({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ja&&(ja&&e.type==="mousemove"?(Jr=e.screenX-ja.screenX,Kr=e.screenY-ja.screenY):Kr=Jr=0,ja=e),Jr)},movementY:function(e){return"movementY"in e?e.movementY:Kr}}),sc=rn(Zi),bm=b({},Zi,{dataTransfer:0}),zm=rn(bm),Am=b({},Ya,{relatedTarget:0}),Wr=rn(Am),Cm=b({},nt,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=rn(Cm),Mm=b({},nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tm=rn(Mm),Om=b({},nt,{data:0}),tc=rn(Om),Lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wm[e])?!!n[e]:!1}function Qr(){return Nm}var Ym=b({},Ya,{key:function(e){if(e.key){var n=Lm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jm=rn(Ym),Hm=b({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=rn(Hm),Bm=b({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),Rm=rn(Bm),Um=b({},nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=rn(Um),qm=b({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gm=rn(qm),km=b({},nt,{newState:0,oldState:0}),Im=rn(km),xm=[9,13,27,32],Vr=as&&"CompositionEvent"in window,Ha=null;as&&"documentMode"in document&&(Ha=document.documentMode);var Zm=as&&"TextEvent"in window&&!Ha,ic=as&&(!Vr||Ha&&8<Ha&&11>=Ha),lc=" ",rc=!1;function uc(e,n){switch(e){case"keyup":return xm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jt=!1;function Jm(e,n){switch(e){case"compositionend":return oc(n);case"keypress":return n.which!==32?null:(rc=!0,lc);case"textInput":return e=n.data,e===lc&&rc?null:e;default:return null}}function Km(e,n){if(jt)return e==="compositionend"||!Vr&&uc(e,n)?(e=ec(),Gi=Zr=Cs=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ic&&n.locale!=="ko"?null:n.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wm[e.type]:n==="textarea"}function cc(e,n,s,t){Nt?Yt?Yt.push(t):Yt=[t]:Nt=t,n=jl(n,"onChange"),0<n.length&&(s=new xi("onChange","change",null,s,t),e.push({event:s,listeners:n}))}var Ba=null,Ra=null;function Qm(e){Kg(e,0)}function Ji(e){var n=Da(e);if(Jf(n))return e}function dc(e,n){if(e==="change")return n}var gc=!1;if(as){var $r;if(as){var Fr="oninput"in document;if(!Fr){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Fr=typeof hc.oninput=="function"}$r=Fr}else $r=!1;gc=$r&&(!document.documentMode||9<document.documentMode)}function _c(){Ba&&(Ba.detachEvent("onpropertychange",mc),Ra=Ba=null)}function mc(e){if(e.propertyName==="value"&&Ji(Ra)){var n=[];cc(n,Ra,e,kr(e)),Pf(Qm,n)}}function Vm(e,n,s){e==="focusin"?(_c(),Ba=n,Ra=s,Ba.attachEvent("onpropertychange",mc)):e==="focusout"&&_c()}function $m(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(Ra)}function Fm(e,n){if(e==="click")return Ji(n)}function Pm(e,n){if(e==="input"||e==="change")return Ji(n)}function ep(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:ep;function Ua(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),t=Object.keys(n);if(s.length!==t.length)return!1;for(t=0;t<s.length;t++){var u=s[t];if(!Lr.call(n,u)||!yn(e[u],n[u]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,n){var s=pc(e);e=0;for(var t;s;){if(s.nodeType===3){if(t=e+s.textContent.length,e<=n&&t>=n)return{node:s,offset:n-e};e=t}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pc(s)}}function vc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xi(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Xi(e.document)}return n}function Pr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var np=as&&"documentMode"in document&&11>=document.documentMode,Ht=null,eu=null,Xa=null,nu=!1;function bc(e,n,s){var t=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;nu||Ht==null||Ht!==Xi(t)||(t=Ht,"selectionStart"in t&&Pr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Xa&&Ua(Xa,t)||(Xa=t,t=jl(eu,"onSelect"),0<t.length&&(n=new xi("onSelect","select",null,n,s),e.push({event:n,listeners:t}),n.target=Ht)))}function st(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Bt={animationend:st("Animation","AnimationEnd"),animationiteration:st("Animation","AnimationIteration"),animationstart:st("Animation","AnimationStart"),transitionrun:st("Transition","TransitionRun"),transitionstart:st("Transition","TransitionStart"),transitioncancel:st("Transition","TransitionCancel"),transitionend:st("Transition","TransitionEnd")},su={},zc={};as&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function tt(e){if(su[e])return su[e];if(!Bt[e])return e;var n=Bt[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in zc)return su[e]=n[s];return e}var Ac=tt("animationend"),Cc=tt("animationiteration"),Ec=tt("animationstart"),sp=tt("transitionrun"),tp=tt("transitionstart"),ap=tt("transitioncancel"),Mc=tt("transitionend"),Tc=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function Gn(e,n){Tc.set(e,n),et(n,[e])}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],Rt=0,au=0;function Wi(){for(var e=Rt,n=au=Rt=0;n<e;){var s=On[n];On[n++]=null;var t=On[n];On[n++]=null;var u=On[n];On[n++]=null;var o=On[n];if(On[n++]=null,t!==null&&u!==null){var d=t.pending;d===null?u.next=u:(u.next=d.next,d.next=u),t.pending=u}o!==0&&Oc(s,u,o)}}function Qi(e,n,s,t){On[Rt++]=e,On[Rt++]=n,On[Rt++]=s,On[Rt++]=t,au|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function iu(e,n,s,t){return Qi(e,n,s,t),Vi(e)}function at(e,n){return Qi(e,null,null,n),Vi(e)}function Oc(e,n,s){e.lanes|=s;var t=e.alternate;t!==null&&(t.lanes|=s);for(var u=!1,o=e.return;o!==null;)o.childLanes|=s,t=o.alternate,t!==null&&(t.childLanes|=s),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(u=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,u&&n!==null&&(u=31-pn(s),e=o.hiddenUpdates,t=e[u],t===null?e[u]=[n]:t.push(n),n.lane=s|536870912),o):null}function Vi(e){if(50<ri)throw ri=0,_o=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ut={};function ip(e,n,s,t){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,s,t){return new ip(e,n,s,t)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function is(e,n){var s=e.alternate;return s===null?(s=vn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Lc(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $i(e,n,s,t,u,o){var d=0;if(t=e,typeof e=="function")lu(e)&&(d=1);else if(typeof e=="string")d=fy(e,s,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=vn(31,s,n,u),e.elementType=pe,e.lanes=o,e;case T:return it(s.children,u,o,n);case B:d=8,u|=24;break;case I:return e=vn(12,s,n,u|2),e.elementType=I,e.lanes=o,e;case P:return e=vn(13,s,n,u),e.elementType=P,e.lanes=o,e;case $:return e=vn(19,s,n,u),e.elementType=$,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:d=10;break e;case x:d=9;break e;case V:d=11;break e;case K:d=14;break e;case q:d=16,t=null;break e}d=29,s=Error(r(130,e===null?"null":typeof e,"")),t=null}return n=vn(d,s,n,u),n.elementType=e,n.type=t,n.lanes=o,n}function it(e,n,s,t){return e=vn(7,e,t,n),e.lanes=s,e}function ru(e,n,s){return e=vn(6,e,null,n),e.lanes=s,e}function Dc(e){var n=vn(18,null,null,0);return n.stateNode=e,n}function uu(e,n,s){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wc=new WeakMap;function Ln(e,n){if(typeof e=="object"&&e!==null){var s=wc.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Df(n)},wc.set(e,n),n)}return{value:e,source:n,stack:Df(n)}}var Xt=[],qt=0,Fi=null,qa=0,Dn=[],wn=0,Es=null,Kn=1,Wn="";function ls(e,n){Xt[qt++]=qa,Xt[qt++]=Fi,Fi=e,qa=n}function Nc(e,n,s){Dn[wn++]=Kn,Dn[wn++]=Wn,Dn[wn++]=Es,Es=e;var t=Kn;e=Wn;var u=32-pn(t)-1;t&=~(1<<u),s+=1;var o=32-pn(n)+u;if(30<o){var d=u-u%5;o=(t&(1<<d)-1).toString(32),t>>=d,u-=d,Kn=1<<32-pn(n)+u|s<<u|t,Wn=o+e}else Kn=1<<o|s<<u|t,Wn=e}function ou(e){e.return!==null&&(ls(e,1),Nc(e,1,0))}function fu(e){for(;e===Fi;)Fi=Xt[--qt],Xt[qt]=null,qa=Xt[--qt],Xt[qt]=null;for(;e===Es;)Es=Dn[--wn],Dn[wn]=null,Wn=Dn[--wn],Dn[wn]=null,Kn=Dn[--wn],Dn[wn]=null}function Yc(e,n){Dn[wn++]=Kn,Dn[wn++]=Wn,Dn[wn++]=Es,Kn=n.id,Wn=n.overflow,Es=e}var Qe=null,Oe=null,de=!1,Ms=null,Nn=!1,cu=Error(r(519));function Ts(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(Ln(n,e)),cu}function jc(e){var n=e.stateNode,s=e.type,t=e.memoizedProps;switch(n[We]=e,n[ln]=t,s){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(s=0;s<oi.length;s++)oe(oi[s],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":oe("invalid",n),Kf(n,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":oe("invalid",n);break;case"textarea":oe("invalid",n),Qf(n,t.value,t.defaultValue,t.children)}s=t.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||t.suppressHydrationWarning===!0||$g(n.textContent,s)?(t.popover!=null&&(oe("beforetoggle",n),oe("toggle",n)),t.onScroll!=null&&oe("scroll",n),t.onScrollEnd!=null&&oe("scrollend",n),t.onClick!=null&&(n.onclick=ts),n=!0):n=!1,n||Ts(e,!0)}function Hc(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Qe=Qe.return}}function Gt(e){if(e!==Qe)return!1;if(!de)return Hc(e),de=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Do(e.type,e.memoizedProps)),s=!s),s&&Oe&&Ts(e),Hc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Oe=lh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Oe=lh(e)}else n===27?(n=Oe,Gs(e.type)?(e=Ho,Ho=null,Oe=e):Oe=n):Oe=Qe?jn(e.stateNode.nextSibling):null;return!0}function lt(){Oe=Qe=null,de=!1}function du(){var e=Ms;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),Ms=null),e}function Ga(e){Ms===null?Ms=[e]:Ms.push(e)}var gu=S(null),rt=null,rs=null;function Os(e,n,s){k(gu,n._currentValue),n._currentValue=s}function us(e){e._currentValue=gu.current,H(gu)}function hu(e,n,s){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===s)break;e=e.return}}function _u(e,n,s,t){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var o=u.dependencies;if(o!==null){var d=u.child;o=o.firstContext;e:for(;o!==null;){var h=o;o=u;for(var y=0;y<n.length;y++)if(h.context===n[y]){o.lanes|=s,h=o.alternate,h!==null&&(h.lanes|=s),hu(o.return,s,e),t||(d=null);break e}o=h.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(r(341));d.lanes|=s,o=d.alternate,o!==null&&(o.lanes|=s),hu(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function kt(e,n,s,t){e=null;for(var u=n,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var h=u.type;yn(u.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(u===ye.current){if(d=u.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}u=u.return}e!==null&&_u(n,e,s,t),n.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ut(e){rt=e,rs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Bc(rt,e)}function el(e,n){return rt===null&&ut(e),Bc(e,n)}function Bc(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},rs===null){if(e===null)throw Error(r(308));rs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else rs=rs.next=n;return s}var lp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,t){e.push(t)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},rp=i.unstable_scheduleCallback,up=i.unstable_NormalPriority,Xe={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new lp,data:new Map,refCount:0}}function ka(e){e.refCount--,e.refCount===0&&rp(up,function(){e.controller.abort()})}var Ia=null,pu=0,It=0,xt=null;function op(e,n){if(Ia===null){var s=Ia=[];pu=0,It=bo(),xt={status:"pending",value:void 0,then:function(t){s.push(t)}}}return pu++,n.then(Rc,Rc),n}function Rc(){if(--pu===0&&Ia!==null){xt!==null&&(xt.status="fulfilled");var e=Ia;Ia=null,It=0,xt=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fp(e,n){var s=[],t={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){t.status="fulfilled",t.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(t.status="rejected",t.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),t}var Uc=N.S;N.S=function(e,n){bg=_n(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&op(e,n),Uc!==null&&Uc(e,n)};var ot=S(null);function yu(){var e=ot.current;return e!==null?e:Me.pooledCache}function nl(e,n){n===null?k(ot,ot.current):k(ot,n.pool)}function Xc(){var e=yu();return e===null?null:{parent:Xe._currentValue,pool:e}}var Zt=Error(r(460)),vu=Error(r(474)),sl=Error(r(542)),tl={then:function(){}};function qc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gc(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(ts,ts),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ic(e),e;default:if(typeof n.status=="string")n.then(ts,ts);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(t){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=t}},function(t){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=t}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ic(e),e}throw ct=n,Zt}}function ft(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ct=s,Zt):s}}var ct=null;function kc(){if(ct===null)throw Error(r(459));var e=ct;return ct=null,e}function Ic(e){if(e===Zt||e===sl)throw Error(r(483))}var Jt=null,xa=0;function al(e){var n=xa;return xa+=1,Jt===null&&(Jt=[]),Gc(Jt,e,n)}function Za(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function il(e,n){throw n.$$typeof===A?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xc(e){function n(z,v){if(e){var C=z.deletions;C===null?(z.deletions=[v],z.flags|=16):C.push(v)}}function s(z,v){if(!e)return null;for(;v!==null;)n(z,v),v=v.sibling;return null}function t(z){for(var v=new Map;z!==null;)z.key!==null?v.set(z.key,z):v.set(z.index,z),z=z.sibling;return v}function u(z,v){return z=is(z,v),z.index=0,z.sibling=null,z}function o(z,v,C){return z.index=C,e?(C=z.alternate,C!==null?(C=C.index,C<v?(z.flags|=67108866,v):C):(z.flags|=67108866,v)):(z.flags|=1048576,v)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function h(z,v,C,Y){return v===null||v.tag!==6?(v=ru(C,z.mode,Y),v.return=z,v):(v=u(v,C),v.return=z,v)}function y(z,v,C,Y){var F=C.type;return F===T?w(z,v,C.props.children,Y,C.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===q&&ft(F)===v.type)?(v=u(v,C.props),Za(v,C),v.return=z,v):(v=$i(C.type,C.key,C.props,null,z.mode,Y),Za(v,C),v.return=z,v)}function E(z,v,C,Y){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=uu(C,z.mode,Y),v.return=z,v):(v=u(v,C.children||[]),v.return=z,v)}function w(z,v,C,Y,F){return v===null||v.tag!==7?(v=it(C,z.mode,Y,F),v.return=z,v):(v=u(v,C),v.return=z,v)}function j(z,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=ru(""+v,z.mode,C),v.return=z,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case R:return C=$i(v.type,v.key,v.props,null,z.mode,C),Za(C,v),C.return=z,C;case U:return v=uu(v,z.mode,C),v.return=z,v;case q:return v=ft(v),j(z,v,C)}if(qn(v)||ge(v))return v=it(v,z.mode,C,null),v.return=z,v;if(typeof v.then=="function")return j(z,al(v),C);if(v.$$typeof===Z)return j(z,el(z,v),C);il(z,v)}return null}function M(z,v,C,Y){var F=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return F!==null?null:h(z,v,""+C,Y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return C.key===F?y(z,v,C,Y):null;case U:return C.key===F?E(z,v,C,Y):null;case q:return C=ft(C),M(z,v,C,Y)}if(qn(C)||ge(C))return F!==null?null:w(z,v,C,Y,null);if(typeof C.then=="function")return M(z,v,al(C),Y);if(C.$$typeof===Z)return M(z,v,el(z,C),Y);il(z,C)}return null}function L(z,v,C,Y,F){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return z=z.get(C)||null,h(v,z,""+Y,F);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case R:return z=z.get(Y.key===null?C:Y.key)||null,y(v,z,Y,F);case U:return z=z.get(Y.key===null?C:Y.key)||null,E(v,z,Y,F);case q:return Y=ft(Y),L(z,v,C,Y,F)}if(qn(Y)||ge(Y))return z=z.get(C)||null,w(v,z,Y,F,null);if(typeof Y.then=="function")return L(z,v,C,al(Y),F);if(Y.$$typeof===Z)return L(z,v,C,el(v,Y),F);il(v,Y)}return null}function J(z,v,C,Y){for(var F=null,he=null,Q=v,le=v=0,ce=null;Q!==null&&le<C.length;le++){Q.index>le?(ce=Q,Q=null):ce=Q.sibling;var _e=M(z,Q,C[le],Y);if(_e===null){Q===null&&(Q=ce);break}e&&Q&&_e.alternate===null&&n(z,Q),v=o(_e,v,le),he===null?F=_e:he.sibling=_e,he=_e,Q=ce}if(le===C.length)return s(z,Q),de&&ls(z,le),F;if(Q===null){for(;le<C.length;le++)Q=j(z,C[le],Y),Q!==null&&(v=o(Q,v,le),he===null?F=Q:he.sibling=Q,he=Q);return de&&ls(z,le),F}for(Q=t(Q);le<C.length;le++)ce=L(Q,z,le,C[le],Y),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?le:ce.key),v=o(ce,v,le),he===null?F=ce:he.sibling=ce,he=ce);return e&&Q.forEach(function(Js){return n(z,Js)}),de&&ls(z,le),F}function ee(z,v,C,Y){if(C==null)throw Error(r(151));for(var F=null,he=null,Q=v,le=v=0,ce=null,_e=C.next();Q!==null&&!_e.done;le++,_e=C.next()){Q.index>le?(ce=Q,Q=null):ce=Q.sibling;var Js=M(z,Q,_e.value,Y);if(Js===null){Q===null&&(Q=ce);break}e&&Q&&Js.alternate===null&&n(z,Q),v=o(Js,v,le),he===null?F=Js:he.sibling=Js,he=Js,Q=ce}if(_e.done)return s(z,Q),de&&ls(z,le),F;if(Q===null){for(;!_e.done;le++,_e=C.next())_e=j(z,_e.value,Y),_e!==null&&(v=o(_e,v,le),he===null?F=_e:he.sibling=_e,he=_e);return de&&ls(z,le),F}for(Q=t(Q);!_e.done;le++,_e=C.next())_e=L(Q,z,le,_e.value,Y),_e!==null&&(e&&_e.alternate!==null&&Q.delete(_e.key===null?le:_e.key),v=o(_e,v,le),he===null?F=_e:he.sibling=_e,he=_e);return e&&Q.forEach(function(by){return n(z,by)}),de&&ls(z,le),F}function Ce(z,v,C,Y){if(typeof C=="object"&&C!==null&&C.type===T&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case R:e:{for(var F=C.key;v!==null;){if(v.key===F){if(F=C.type,F===T){if(v.tag===7){s(z,v.sibling),Y=u(v,C.props.children),Y.return=z,z=Y;break e}}else if(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===q&&ft(F)===v.type){s(z,v.sibling),Y=u(v,C.props),Za(Y,C),Y.return=z,z=Y;break e}s(z,v);break}else n(z,v);v=v.sibling}C.type===T?(Y=it(C.props.children,z.mode,Y,C.key),Y.return=z,z=Y):(Y=$i(C.type,C.key,C.props,null,z.mode,Y),Za(Y,C),Y.return=z,z=Y)}return d(z);case U:e:{for(F=C.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){s(z,v.sibling),Y=u(v,C.children||[]),Y.return=z,z=Y;break e}else{s(z,v);break}else n(z,v);v=v.sibling}Y=uu(C,z.mode,Y),Y.return=z,z=Y}return d(z);case q:return C=ft(C),Ce(z,v,C,Y)}if(qn(C))return J(z,v,C,Y);if(ge(C)){if(F=ge(C),typeof F!="function")throw Error(r(150));return C=F.call(C),ee(z,v,C,Y)}if(typeof C.then=="function")return Ce(z,v,al(C),Y);if(C.$$typeof===Z)return Ce(z,v,el(z,C),Y);il(z,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,v!==null&&v.tag===6?(s(z,v.sibling),Y=u(v,C),Y.return=z,z=Y):(s(z,v),Y=ru(C,z.mode,Y),Y.return=z,z=Y),d(z)):s(z,v)}return function(z,v,C,Y){try{xa=0;var F=Ce(z,v,C,Y);return Jt=null,F}catch(Q){if(Q===Zt||Q===sl)throw Q;var he=vn(29,Q,null,z.mode);return he.lanes=Y,he.return=z,he}}}var dt=xc(!0),Zc=xc(!1),Ls=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ds(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ws(e,n,s){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(me&2)!==0){var u=t.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n,n=Vi(e),Oc(e,null,s),n}return Qi(e,t,n,s),Vi(e)}function Ja(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,Bf(e,s)}}function zu(e,n){var s=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,s===t)){var u=null,o=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};o===null?u=o=d:o=o.next=d,s=s.next}while(s!==null);o===null?u=o=n:o=o.next=n}else u=o=n;s={baseState:t.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:t.shared,callbacks:t.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Au=!1;function Ka(){if(Au){var e=xt;if(e!==null)throw e}}function Wa(e,n,s,t){Au=!1;var u=e.updateQueue;Ls=!1;var o=u.firstBaseUpdate,d=u.lastBaseUpdate,h=u.shared.pending;if(h!==null){u.shared.pending=null;var y=h,E=y.next;y.next=null,d===null?o=E:d.next=E,d=y;var w=e.alternate;w!==null&&(w=w.updateQueue,h=w.lastBaseUpdate,h!==d&&(h===null?w.firstBaseUpdate=E:h.next=E,w.lastBaseUpdate=y))}if(o!==null){var j=u.baseState;d=0,w=E=y=null,h=o;do{var M=h.lane&-536870913,L=M!==h.lane;if(L?(fe&M)===M:(t&M)===M){M!==0&&M===It&&(Au=!0),w!==null&&(w=w.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var J=e,ee=h;M=n;var Ce=s;switch(ee.tag){case 1:if(J=ee.payload,typeof J=="function"){j=J.call(Ce,j,M);break e}j=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ee.payload,M=typeof J=="function"?J.call(Ce,j,M):J,M==null)break e;j=b({},j,M);break e;case 2:Ls=!0}}M=h.callback,M!==null&&(e.flags|=64,L&&(e.flags|=8192),L=u.callbacks,L===null?u.callbacks=[M]:L.push(M))}else L={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},w===null?(E=w=L,y=j):w=w.next=L,d|=M;if(h=h.next,h===null){if(h=u.shared.pending,h===null)break;L=h,h=L.next,L.next=null,u.lastBaseUpdate=L,u.shared.pending=null}}while(!0);w===null&&(y=j),u.baseState=y,u.firstBaseUpdate=E,u.lastBaseUpdate=w,o===null&&(u.shared.lanes=0),Bs|=d,e.lanes=d,e.memoizedState=j}}function Jc(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kc(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Jc(s[e],n)}var Kt=S(null),ll=S(0);function Wc(e,n){e=ps,k(ll,e),k(Kt,n),ps=e|n.baseLanes}function Cu(){k(ll,ps),k(Kt,Kt.current)}function Eu(){ps=ll.current,H(Kt),H(ll)}var Sn=S(null),Yn=null;function Ns(e){var n=e.alternate;k(Re,Re.current&1),k(Sn,e),Yn===null&&(n===null||Kt.current!==null||n.memoizedState!==null)&&(Yn=e)}function Mu(e){k(Re,Re.current),k(Sn,e),Yn===null&&(Yn=e)}function Qc(e){e.tag===22?(k(Re,Re.current),k(Sn,e),Yn===null&&(Yn=e)):Ys()}function Ys(){k(Re,Re.current),k(Sn,Sn.current)}function bn(e){H(Sn),Yn===e&&(Yn=null),H(Re)}var Re=S(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Yo(s)||jo(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var os=0,ie=null,ze=null,qe=null,ul=!1,Wt=!1,gt=!1,ol=0,Qa=0,Qt=null,cp=0;function je(){throw Error(r(321))}function Tu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!yn(e[s],n[s]))return!1;return!0}function Ou(e,n,s,t,u,o){return os=o,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Nd:Iu,gt=!1,o=s(t,u),gt=!1,Wt&&(o=$c(n,s,t,u)),Vc(e),o}function Vc(e){N.H=Fa;var n=ze!==null&&ze.next!==null;if(os=0,qe=ze=ie=null,ul=!1,Qa=0,Qt=null,n)throw Error(r(300));e===null||Ge||(e=e.dependencies,e!==null&&Pi(e)&&(Ge=!0))}function $c(e,n,s,t){ie=e;var u=0;do{if(Wt&&(Qt=null),Qa=0,Wt=!1,25<=u)throw Error(r(301));if(u+=1,qe=ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Yd,o=n(s,t)}while(Wt);return o}function dp(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Va(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ie.flags|=1024),n}function Lu(){var e=ol!==0;return ol=0,e}function Du(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function wu(e){if(ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ul=!1}os=0,qe=ze=ie=null,Wt=!1,Qa=ol=0,Qt=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ie.memoizedState=qe=e:qe=qe.next=e,qe}function Ue(){if(ze===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=qe===null?ie.memoizedState:qe.next;if(n!==null)qe=n,ze=e;else{if(e===null)throw ie.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?ie.memoizedState=qe=e:qe=qe.next=e}return qe}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Va(e){var n=Qa;return Qa+=1,Qt===null&&(Qt=[]),e=Gc(Qt,e,n),n=ie,(qe===null?n.memoizedState:qe.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Nd:Iu),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Va(e);if(e.$$typeof===Z)return Ve(e)}throw Error(r(438,String(e)))}function Nu(e){var n=null,s=ie.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var t=ie.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(n={data:t.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=fl(),ie.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),t=0;t<e;t++)s[t]=nn;return n.index++,s}function fs(e,n){return typeof n=="function"?n(e):n}function dl(e){var n=Ue();return Yu(n,ze,e)}function Yu(e,n,s){var t=e.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=s;var u=e.baseQueue,o=t.pending;if(o!==null){if(u!==null){var d=u.next;u.next=o.next,o.next=d}n.baseQueue=u=o,t.pending=null}if(o=e.baseState,u===null)e.memoizedState=o;else{n=u.next;var h=d=null,y=null,E=n,w=!1;do{var j=E.lane&-536870913;if(j!==E.lane?(fe&j)===j:(os&j)===j){var M=E.revertLane;if(M===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),j===It&&(w=!0);else if((os&M)===M){E=E.next,M===It&&(w=!0);continue}else j={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=j,d=o):y=y.next=j,ie.lanes|=M,Bs|=M;j=E.action,gt&&s(o,j),o=E.hasEagerState?E.eagerState:s(o,j)}else M={lane:j,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=M,d=o):y=y.next=M,ie.lanes|=j,Bs|=j;E=E.next}while(E!==null&&E!==n);if(y===null?d=o:y.next=h,!yn(o,e.memoizedState)&&(Ge=!0,w&&(s=xt,s!==null)))throw s;e.memoizedState=o,e.baseState=d,e.baseQueue=y,t.lastRenderedState=o}return u===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function ju(e){var n=Ue(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var t=s.dispatch,u=s.pending,o=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do o=e(o,d.action),d=d.next;while(d!==u);yn(o,n.memoizedState)||(Ge=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),s.lastRenderedState=o}return[o,t]}function Fc(e,n,s){var t=ie,u=Ue(),o=de;if(o){if(s===void 0)throw Error(r(407));s=s()}else s=n();var d=!yn((ze||u).memoizedState,s);if(d&&(u.memoizedState=s,Ge=!0),u=u.queue,Ru(nd.bind(null,t,u,e),[e]),u.getSnapshot!==n||d||qe!==null&&qe.memoizedState.tag&1){if(t.flags|=2048,Vt(9,{destroy:void 0},ed.bind(null,t,u,s,n),null),Me===null)throw Error(r(349));o||(os&127)!==0||Pc(t,n,s)}return s}function Pc(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=ie.updateQueue,n===null?(n=fl(),ie.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function ed(e,n,s,t){n.value=s,n.getSnapshot=t,sd(n)&&td(e)}function nd(e,n,s){return s(function(){sd(n)&&td(e)})}function sd(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!yn(e,s)}catch{return!0}}function td(e){var n=at(e,2);n!==null&&dn(n,e,2)}function Hu(e){var n=tn();if(typeof e=="function"){var s=e;if(e=s(),gt){zs(!0);try{s()}finally{zs(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},n}function ad(e,n,s,t){return e.baseState=s,Yu(e,ze,typeof t=="function"?t:fs)}function gp(e,n,s,t,u){if(_l(e))throw Error(r(485));if(e=n.action,e!==null){var o={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};N.T!==null?s(!0):o.isTransition=!1,t(o),s=n.pending,s===null?(o.next=n.pending=o,id(n,o)):(o.next=s.next,n.pending=s.next=o)}}function id(e,n){var s=n.action,t=n.payload,u=e.state;if(n.isTransition){var o=N.T,d={};N.T=d;try{var h=s(u,t),y=N.S;y!==null&&y(d,h),ld(e,n,h)}catch(E){Bu(e,n,E)}finally{o!==null&&d.types!==null&&(o.types=d.types),N.T=o}}else try{o=s(u,t),ld(e,n,o)}catch(E){Bu(e,n,E)}}function ld(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(t){rd(e,n,t)},function(t){return Bu(e,n,t)}):rd(e,n,s)}function rd(e,n,s){n.status="fulfilled",n.value=s,ud(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,id(e,s)))}function Bu(e,n,s){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do n.status="rejected",n.reason=s,ud(n),n=n.next;while(n!==t)}e.action=null}function ud(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function od(e,n){return n}function fd(e,n){if(de){var s=Me.formState;if(s!==null){e:{var t=ie;if(de){if(Oe){n:{for(var u=Oe,o=Nn;u.nodeType!==8;){if(!o){u=null;break n}if(u=jn(u.nextSibling),u===null){u=null;break n}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){Oe=jn(u.nextSibling),t=u.data==="F!";break e}}Ts(t)}t=!1}t&&(n=s[0])}}return s=tn(),s.memoizedState=s.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:n},s.queue=t,s=Ld.bind(null,ie,t),t.dispatch=s,t=Hu(!1),o=ku.bind(null,ie,!1,t.queue),t=tn(),u={state:n,dispatch:null,action:e,pending:null},t.queue=u,s=gp.bind(null,ie,u,o,s),u.dispatch=s,t.memoizedState=e,[n,s,!1]}function cd(e){var n=Ue();return dd(n,ze,e)}function dd(e,n,s){if(n=Yu(e,n,od)[0],e=dl(fs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var t=Va(n)}catch(d){throw d===Zt?sl:d}else t=n;n=Ue();var u=n.queue,o=u.dispatch;return s!==n.memoizedState&&(ie.flags|=2048,Vt(9,{destroy:void 0},hp.bind(null,u,s),null)),[t,o,e]}function hp(e,n){e.action=n}function gd(e){var n=Ue(),s=ze;if(s!==null)return dd(n,s,e);Ue(),n=n.memoizedState,s=Ue();var t=s.queue.dispatch;return s.memoizedState=e,[n,t,!1]}function Vt(e,n,s,t){return e={tag:e,create:s,deps:t,inst:n,next:null},n=ie.updateQueue,n===null&&(n=fl(),ie.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(t=s.next,s.next=e,e.next=t,n.lastEffect=e),e}function hd(){return Ue().memoizedState}function gl(e,n,s,t){var u=tn();ie.flags|=e,u.memoizedState=Vt(1|n,{destroy:void 0},s,t===void 0?null:t)}function hl(e,n,s,t){var u=Ue();t=t===void 0?null:t;var o=u.memoizedState.inst;ze!==null&&t!==null&&Tu(t,ze.memoizedState.deps)?u.memoizedState=Vt(n,o,s,t):(ie.flags|=e,u.memoizedState=Vt(1|n,o,s,t))}function _d(e,n){gl(8390656,8,e,n)}function Ru(e,n){hl(2048,8,e,n)}function _p(e){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=fl(),ie.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function md(e){var n=Ue().memoizedState;return _p({ref:n,nextImpl:e}),function(){if((me&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function pd(e,n){return hl(4,2,e,n)}function yd(e,n){return hl(4,4,e,n)}function vd(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sd(e,n,s){s=s!=null?s.concat([e]):null,hl(4,4,vd.bind(null,n,e),s)}function Uu(){}function bd(e,n){var s=Ue();n=n===void 0?null:n;var t=s.memoizedState;return n!==null&&Tu(n,t[1])?t[0]:(s.memoizedState=[e,n],e)}function zd(e,n){var s=Ue();n=n===void 0?null:n;var t=s.memoizedState;if(n!==null&&Tu(n,t[1]))return t[0];if(t=e(),gt){zs(!0);try{e()}finally{zs(!1)}}return s.memoizedState=[t,n],t}function Xu(e,n,s){return s===void 0||(os&1073741824)!==0&&(fe&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Ag(),ie.lanes|=e,Bs|=e,s)}function Ad(e,n,s,t){return yn(s,n)?s:Kt.current!==null?(e=Xu(e,s,t),yn(e,n)||(Ge=!0),e):(os&42)===0||(os&1073741824)!==0&&(fe&261930)===0?(Ge=!0,e.memoizedState=s):(e=Ag(),ie.lanes|=e,Bs|=e,n)}function Cd(e,n,s,t,u){var o=G.p;G.p=o!==0&&8>o?o:8;var d=N.T,h={};N.T=h,ku(e,!1,n,s);try{var y=u(),E=N.S;if(E!==null&&E(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var w=fp(y,t);$a(e,n,w,Cn(e))}else $a(e,n,t,Cn(e))}catch(j){$a(e,n,{then:function(){},status:"rejected",reason:j},Cn())}finally{G.p=o,d!==null&&h.types!==null&&(d.types=h.types),N.T=d}}function mp(){}function qu(e,n,s,t){if(e.tag!==5)throw Error(r(476));var u=Ed(e).queue;Cd(e,u,n,ne,s===null?mp:function(){return Md(e),s(t)})}function Ed(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:ne},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Md(e){var n=Ed(e);n.next===null&&(n=e.alternate.memoizedState),$a(e,n.next.queue,{},Cn())}function Gu(){return Ve(hi)}function Td(){return Ue().memoizedState}function Od(){return Ue().memoizedState}function pp(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Cn();e=Ds(s);var t=ws(n,e,s);t!==null&&(dn(t,n,s),Ja(t,n,s)),n={cache:mu()},e.payload=n;return}n=n.return}}function yp(e,n,s){var t=Cn();s={lane:t,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(e)?Dd(n,s):(s=iu(e,n,s,t),s!==null&&(dn(s,e,t),wd(s,n,t)))}function Ld(e,n,s){var t=Cn();$a(e,n,s,t)}function $a(e,n,s,t){var u={lane:t,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_l(e))Dd(n,u);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,h=o(d,s);if(u.hasEagerState=!0,u.eagerState=h,yn(h,d))return Qi(e,n,u,0),Me===null&&Wi(),!1}catch{}if(s=iu(e,n,u,t),s!==null)return dn(s,e,t),wd(s,n,t),!0}return!1}function ku(e,n,s,t){if(t={lane:2,revertLane:bo(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(n)throw Error(r(479))}else n=iu(e,s,t,2),n!==null&&dn(n,e,2)}function _l(e){var n=e.alternate;return e===ie||n!==null&&n===ie}function Dd(e,n){Wt=ul=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function wd(e,n,s){if((s&4194048)!==0){var t=n.lanes;t&=e.pendingLanes,s|=t,n.lanes=s,Bf(e,s)}}var Fa={readContext:Ve,use:cl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};Fa.useEffectEvent=je;var Nd={readContext:Ve,use:cl,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:_d,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,gl(4194308,4,vd.bind(null,n,e),s)},useLayoutEffect:function(e,n){return gl(4194308,4,e,n)},useInsertionEffect:function(e,n){gl(4,2,e,n)},useMemo:function(e,n){var s=tn();n=n===void 0?null:n;var t=e();if(gt){zs(!0);try{e()}finally{zs(!1)}}return s.memoizedState=[t,n],t},useReducer:function(e,n,s){var t=tn();if(s!==void 0){var u=s(n);if(gt){zs(!0);try{s(n)}finally{zs(!1)}}}else u=n;return t.memoizedState=t.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},t.queue=e,e=e.dispatch=yp.bind(null,ie,e),[t.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,s=Ld.bind(null,ie,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Uu,useDeferredValue:function(e,n){var s=tn();return Xu(s,e,n)},useTransition:function(){var e=Hu(!1);return e=Cd.bind(null,ie,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var t=ie,u=tn();if(de){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Me===null)throw Error(r(349));(fe&127)!==0||Pc(t,n,s)}u.memoizedState=s;var o={value:s,getSnapshot:n};return u.queue=o,_d(nd.bind(null,t,o,e),[e]),t.flags|=2048,Vt(9,{destroy:void 0},ed.bind(null,t,o,s,n),null),s},useId:function(){var e=tn(),n=Me.identifierPrefix;if(de){var s=Wn,t=Kn;s=(t&~(1<<32-pn(t)-1)).toString(32)+s,n="_"+n+"R_"+s,s=ol++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=cp++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gu,useFormState:fd,useActionState:fd,useOptimistic:function(e){var n=tn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ku.bind(null,ie,!0,s),s.dispatch=n,[e,n]},useMemoCache:Nu,useCacheRefresh:function(){return tn().memoizedState=pp.bind(null,ie)},useEffectEvent:function(e){var n=tn(),s={impl:e};return n.memoizedState=s,function(){if((me&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Iu={readContext:Ve,use:cl,useCallback:bd,useContext:Ve,useEffect:Ru,useImperativeHandle:Sd,useInsertionEffect:pd,useLayoutEffect:yd,useMemo:zd,useReducer:dl,useRef:hd,useState:function(){return dl(fs)},useDebugValue:Uu,useDeferredValue:function(e,n){var s=Ue();return Ad(s,ze.memoizedState,e,n)},useTransition:function(){var e=dl(fs)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:Va(e),n]},useSyncExternalStore:Fc,useId:Td,useHostTransitionStatus:Gu,useFormState:cd,useActionState:cd,useOptimistic:function(e,n){var s=Ue();return ad(s,ze,e,n)},useMemoCache:Nu,useCacheRefresh:Od};Iu.useEffectEvent=md;var Yd={readContext:Ve,use:cl,useCallback:bd,useContext:Ve,useEffect:Ru,useImperativeHandle:Sd,useInsertionEffect:pd,useLayoutEffect:yd,useMemo:zd,useReducer:ju,useRef:hd,useState:function(){return ju(fs)},useDebugValue:Uu,useDeferredValue:function(e,n){var s=Ue();return ze===null?Xu(s,e,n):Ad(s,ze.memoizedState,e,n)},useTransition:function(){var e=ju(fs)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:Va(e),n]},useSyncExternalStore:Fc,useId:Td,useHostTransitionStatus:Gu,useFormState:gd,useActionState:gd,useOptimistic:function(e,n){var s=Ue();return ze!==null?ad(s,ze,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:Od};Yd.useEffectEvent=md;function xu(e,n,s,t){n=e.memoizedState,s=s(t,n),s=s==null?n:b({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Zu={enqueueSetState:function(e,n,s){e=e._reactInternals;var t=Cn(),u=Ds(t);u.payload=n,s!=null&&(u.callback=s),n=ws(e,u,t),n!==null&&(dn(n,e,t),Ja(n,e,t))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var t=Cn(),u=Ds(t);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=ws(e,u,t),n!==null&&(dn(n,e,t),Ja(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Cn(),t=Ds(s);t.tag=2,n!=null&&(t.callback=n),n=ws(e,t,s),n!==null&&(dn(n,e,s),Ja(n,e,s))}};function jd(e,n,s,t,u,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,d):n.prototype&&n.prototype.isPureReactComponent?!Ua(s,t)||!Ua(u,o):!0}function Hd(e,n,s,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,t),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function ht(e,n){var s=n;if("ref"in n){s={};for(var t in n)t!=="ref"&&(s[t]=n[t])}if(e=e.defaultProps){s===n&&(s=b({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function Bd(e){Ki(e)}function Rd(e){console.error(e)}function Ud(e){Ki(e)}function ml(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(t){setTimeout(function(){throw t})}}function Xd(e,n,s){try{var t=e.onCaughtError;t(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,s){return s=Ds(s),s.tag=3,s.payload={element:null},s.callback=function(){ml(e,n)},s}function qd(e){return e=Ds(e),e.tag=3,e}function Gd(e,n,s,t){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var o=t.value;e.payload=function(){return u(o)},e.callback=function(){Xd(n,s,t)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Xd(n,s,t),typeof u!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})})}function vp(e,n,s,t,u){if(s.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(n=s.alternate,n!==null&&kt(n,s,u,!0),s=Sn.current,s!==null){switch(s.tag){case 31:case 13:return Yn===null?Ol():s.alternate===null&&He===0&&(He=3),s.flags&=-257,s.flags|=65536,s.lanes=u,t===tl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([t]):n.add(t),yo(e,t,u)),!1;case 22:return s.flags|=65536,t===tl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([t])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([t]):s.add(t)),yo(e,t,u)),!1}throw Error(r(435,s.tag))}return yo(e,t,u),Ol(),!1}if(de)return n=Sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,t!==cu&&(e=Error(r(422),{cause:t}),Ga(Ln(e,s)))):(t!==cu&&(n=Error(r(423),{cause:t}),Ga(Ln(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,t=Ln(t,s),u=Ju(e.stateNode,t,u),zu(e,u),He!==4&&(He=2)),!1;var o=Error(r(520),{cause:t});if(o=Ln(o,s),li===null?li=[o]:li.push(o),He!==4&&(He=2),n===null)return!0;t=Ln(t,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Ju(s.stateNode,t,e),zu(s,e),!1;case 1:if(n=s.type,o=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Rs===null||!Rs.has(o))))return s.flags|=65536,u&=-u,s.lanes|=u,u=qd(u),Gd(u,e,s,t),zu(s,u),!1}s=s.return}while(s!==null);return!1}var Ku=Error(r(461)),Ge=!1;function $e(e,n,s,t){n.child=e===null?Zc(n,null,s,t):dt(n,e.child,s,t)}function kd(e,n,s,t,u){s=s.render;var o=n.ref;if("ref"in t){var d={};for(var h in t)h!=="ref"&&(d[h]=t[h])}else d=t;return ut(n),t=Ou(e,n,s,d,o,u),h=Lu(),e!==null&&!Ge?(Du(e,n,u),cs(e,n,u)):(de&&h&&ou(n),n.flags|=1,$e(e,n,t,u),n.child)}function Id(e,n,s,t,u){if(e===null){var o=s.type;return typeof o=="function"&&!lu(o)&&o.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=o,xd(e,n,o,t,u)):(e=$i(s.type,null,t,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!no(e,u)){var d=o.memoizedProps;if(s=s.compare,s=s!==null?s:Ua,s(d,t)&&e.ref===n.ref)return cs(e,n,u)}return n.flags|=1,e=is(o,t),e.ref=n.ref,e.return=n,n.child=e}function xd(e,n,s,t,u){if(e!==null){var o=e.memoizedProps;if(Ua(o,t)&&e.ref===n.ref)if(Ge=!1,n.pendingProps=t=o,no(e,u))(e.flags&131072)!==0&&(Ge=!0);else return n.lanes=e.lanes,cs(e,n,u)}return Wu(e,n,s,t,u)}function Zd(e,n,s,t){var u=t.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|s:s,e!==null){for(t=n.child=e.child,u=0;t!==null;)u=u|t.lanes|t.childLanes,t=t.sibling;t=u&~o}else t=0,n.child=null;return Jd(e,n,o,s,t)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(n,o!==null?o.cachePool:null),o!==null?Wc(n,o):Cu(),Qc(n);else return t=n.lanes=536870912,Jd(e,n,o!==null?o.baseLanes|s:s,s,t)}else o!==null?(nl(n,o.cachePool),Wc(n,o),Ys(),n.memoizedState=null):(e!==null&&nl(n,null),Cu(),Ys());return $e(e,n,u,s),n.child}function Pa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jd(e,n,s,t,u){var o=yu();return o=o===null?null:{parent:Xe._currentValue,pool:o},n.memoizedState={baseLanes:s,cachePool:o},e!==null&&nl(n,null),Cu(),Qc(n),e!==null&&kt(e,n,t,!0),n.childLanes=u,null}function pl(e,n){return n=vl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Kd(e,n,s){return dt(n,e.child,null,s),e=pl(n,n.pendingProps),e.flags|=2,bn(n),n.memoizedState=null,e}function Sp(e,n,s){var t=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(de){if(t.mode==="hidden")return e=pl(n,t),n.lanes=536870912,Pa(null,e);if(Mu(n),(e=Oe)?(e=ih(e,Nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Kn,overflow:Wn}:null,retryLane:536870912,hydrationErrors:null},s=Dc(e),s.return=n,n.child=s,Qe=n,Oe=null)):e=null,e===null)throw Ts(n);return n.lanes=536870912,null}return pl(n,t)}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(Mu(n),u)if(n.flags&256)n.flags&=-257,n=Kd(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ge||kt(e,n,s,!1),u=(s&e.childLanes)!==0,Ge||u){if(t=Me,t!==null&&(d=Rf(t,s),d!==0&&d!==o.retryLane))throw o.retryLane=d,at(e,d),dn(t,e,d),Ku;Ol(),n=Kd(e,n,s)}else e=o.treeContext,Oe=jn(d.nextSibling),Qe=n,de=!0,Ms=null,Nn=!1,e!==null&&Yc(n,e),n=pl(n,t),n.flags|=4096;return n}return e=is(e.child,{mode:t.mode,children:t.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function Wu(e,n,s,t,u){return ut(n),s=Ou(e,n,s,t,void 0,u),t=Lu(),e!==null&&!Ge?(Du(e,n,u),cs(e,n,u)):(de&&t&&ou(n),n.flags|=1,$e(e,n,s,u),n.child)}function Wd(e,n,s,t,u,o){return ut(n),n.updateQueue=null,s=$c(n,t,s,u),Vc(e),t=Lu(),e!==null&&!Ge?(Du(e,n,o),cs(e,n,o)):(de&&t&&ou(n),n.flags|=1,$e(e,n,s,o),n.child)}function Qd(e,n,s,t,u){if(ut(n),n.stateNode===null){var o=Ut,d=s.contextType;typeof d=="object"&&d!==null&&(o=Ve(d)),o=new s(t,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Zu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=t,o.state=n.memoizedState,o.refs={},Su(n),d=s.contextType,o.context=typeof d=="object"&&d!==null?Ve(d):Ut,o.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(xu(n,s,d,t),o.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&Zu.enqueueReplaceState(o,o.state,null),Wa(n,t,o,u),Ka(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),t=!0}else if(e===null){o=n.stateNode;var h=n.memoizedProps,y=ht(s,h);o.props=y;var E=o.context,w=s.contextType;d=Ut,typeof w=="object"&&w!==null&&(d=Ve(w));var j=s.getDerivedStateFromProps;w=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=n.pendingProps!==h,w||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||E!==d)&&Hd(n,o,t,d),Ls=!1;var M=n.memoizedState;o.state=M,Wa(n,t,o,u),Ka(),E=n.memoizedState,h||M!==E||Ls?(typeof j=="function"&&(xu(n,s,j,t),E=n.memoizedState),(y=Ls||jd(n,s,y,t,M,E,d))?(w||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=E),o.props=t,o.state=E,o.context=d,t=y):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{o=n.stateNode,bu(e,n),d=n.memoizedProps,w=ht(s,d),o.props=w,j=n.pendingProps,M=o.context,E=s.contextType,y=Ut,typeof E=="object"&&E!==null&&(y=Ve(E)),h=s.getDerivedStateFromProps,(E=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==j||M!==y)&&Hd(n,o,t,y),Ls=!1,M=n.memoizedState,o.state=M,Wa(n,t,o,u),Ka();var L=n.memoizedState;d!==j||M!==L||Ls||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof h=="function"&&(xu(n,s,h,t),L=n.memoizedState),(w=Ls||jd(n,s,w,t,M,L,y)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(E||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(t,L,y),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(t,L,y)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=L),o.props=t,o.state=L,o.context=y,t=w):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(n.flags|=1024),t=!1)}return o=t,yl(e,n),t=(n.flags&128)!==0,o||t?(o=n.stateNode,s=t&&typeof s.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&t?(n.child=dt(n,e.child,null,u),n.child=dt(n,null,s,u)):$e(e,n,s,u),n.memoizedState=o.state,e=n.child):e=cs(e,n,u),e}function Vd(e,n,s,t){return lt(),n.flags|=256,$e(e,n,s,t),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(e){return{baseLanes:e,cachePool:Xc()}}function $u(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=An),e}function $d(e,n,s){var t=n.pendingProps,u=!1,o=(n.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(de){if(u?Ns(n):Ys(),(e=Oe)?(e=ih(e,Nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Es!==null?{id:Kn,overflow:Wn}:null,retryLane:536870912,hydrationErrors:null},s=Dc(e),s.return=n,n.child=s,Qe=n,Oe=null)):e=null,e===null)throw Ts(n);return jo(e)?n.lanes=32:n.lanes=536870912,null}var h=t.children;return t=t.fallback,u?(Ys(),u=n.mode,h=vl({mode:"hidden",children:h},u),t=it(t,u,s,null),h.return=n,t.return=n,h.sibling=t,n.child=h,t=n.child,t.memoizedState=Vu(s),t.childLanes=$u(e,d,s),n.memoizedState=Qu,Pa(null,t)):(Ns(n),Fu(n,h))}var y=e.memoizedState;if(y!==null&&(h=y.dehydrated,h!==null)){if(o)n.flags&256?(Ns(n),n.flags&=-257,n=Pu(e,n,s)):n.memoizedState!==null?(Ys(),n.child=e.child,n.flags|=128,n=null):(Ys(),h=t.fallback,u=n.mode,t=vl({mode:"visible",children:t.children},u),h=it(h,u,s,null),h.flags|=2,t.return=n,h.return=n,t.sibling=h,n.child=t,dt(n,e.child,null,s),t=n.child,t.memoizedState=Vu(s),t.childLanes=$u(e,d,s),n.memoizedState=Qu,n=Pa(null,t));else if(Ns(n),jo(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var E=d.dgst;d=E,t=Error(r(419)),t.stack="",t.digest=d,Ga({value:t,source:null,stack:null}),n=Pu(e,n,s)}else if(Ge||kt(e,n,s,!1),d=(s&e.childLanes)!==0,Ge||d){if(d=Me,d!==null&&(t=Rf(d,s),t!==0&&t!==y.retryLane))throw y.retryLane=t,at(e,t),dn(d,e,t),Ku;Yo(h)||Ol(),n=Pu(e,n,s)}else Yo(h)?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Oe=jn(h.nextSibling),Qe=n,de=!0,Ms=null,Nn=!1,e!==null&&Yc(n,e),n=Fu(n,t.children),n.flags|=4096);return n}return u?(Ys(),h=t.fallback,u=n.mode,y=e.child,E=y.sibling,t=is(y,{mode:"hidden",children:t.children}),t.subtreeFlags=y.subtreeFlags&65011712,E!==null?h=is(E,h):(h=it(h,u,s,null),h.flags|=2),h.return=n,t.return=n,t.sibling=h,n.child=t,Pa(null,t),t=n.child,h=e.child.memoizedState,h===null?h=Vu(s):(u=h.cachePool,u!==null?(y=Xe._currentValue,u=u.parent!==y?{parent:y,pool:y}:u):u=Xc(),h={baseLanes:h.baseLanes|s,cachePool:u}),t.memoizedState=h,t.childLanes=$u(e,d,s),n.memoizedState=Qu,Pa(e.child,t)):(Ns(n),s=e.child,e=s.sibling,s=is(s,{mode:"visible",children:t.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function Fu(e,n){return n=vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function vl(e,n){return e=vn(22,e,null,n),e.lanes=0,e}function Pu(e,n,s){return dt(n,e.child,null,s),e=Fu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fd(e,n,s){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),hu(e.return,n,s)}function eo(e,n,s,t,u,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:s,tailMode:u,treeForkCount:o}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=t,d.tail=s,d.tailMode=u,d.treeForkCount=o)}function Pd(e,n,s){var t=n.pendingProps,u=t.revealOrder,o=t.tail;t=t.children;var d=Re.current,h=(d&2)!==0;if(h?(d=d&1|2,n.flags|=128):d&=1,k(Re,d),$e(e,n,t,s),t=de?qa:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,s,n);else if(e.tag===19)Fd(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&rl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),eo(n,!1,u,s,o,t);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}eo(n,!0,s,null,o,t);break;case"together":eo(n,!1,null,null,void 0,t);break;default:n.memoizedState=null}return n.child}function cs(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Bs|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(kt(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,s=is(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=is(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function no(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function bp(e,n,s){switch(n.tag){case 3:sn(n,n.stateNode.containerInfo),Os(n,Xe,e.memoizedState.cache),lt();break;case 27:case 5:Ea(n);break;case 4:sn(n,n.stateNode.containerInfo);break;case 10:Os(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var t=n.memoizedState;if(t!==null)return t.dehydrated!==null?(Ns(n),n.flags|=128,null):(s&n.child.childLanes)!==0?$d(e,n,s):(Ns(n),e=cs(e,n,s),e!==null?e.sibling:null);Ns(n);break;case 19:var u=(e.flags&128)!==0;if(t=(s&n.childLanes)!==0,t||(kt(e,n,s,!1),t=(s&n.childLanes)!==0),u){if(t)return Pd(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),k(Re,Re.current),t)break;return null;case 22:return n.lanes=0,Zd(e,n,s,n.pendingProps);case 24:Os(n,Xe,e.memoizedState.cache)}return cs(e,n,s)}function eg(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ge=!0;else{if(!no(e,s)&&(n.flags&128)===0)return Ge=!1,bp(e,n,s);Ge=(e.flags&131072)!==0}else Ge=!1,de&&(n.flags&1048576)!==0&&Nc(n,qa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var t=n.pendingProps;if(e=ft(n.elementType),n.type=e,typeof e=="function")lu(e)?(t=ht(e,t),n.tag=1,n=Qd(null,n,e,t,s)):(n.tag=0,n=Wu(null,n,e,t,s));else{if(e!=null){var u=e.$$typeof;if(u===V){n.tag=11,n=kd(null,n,e,t,s);break e}else if(u===K){n.tag=14,n=Id(null,n,e,t,s);break e}}throw n=ns(e)||e,Error(r(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,s);case 1:return t=n.type,u=ht(t,n.pendingProps),Qd(e,n,t,u,s);case 3:e:{if(sn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));t=n.pendingProps;var o=n.memoizedState;u=o.element,bu(e,n),Wa(n,t,null,s);var d=n.memoizedState;if(t=d.cache,Os(n,Xe,t),t!==o.cache&&_u(n,[Xe],s,!0),Ka(),t=d.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Vd(e,n,t,s);break e}else if(t!==u){u=Ln(Error(r(424)),n),Ga(u),n=Vd(e,n,t,s);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=jn(e.firstChild),Qe=n,de=!0,Ms=null,Nn=!0,s=Zc(n,null,t,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(lt(),t===u){n=cs(e,n,s);break e}$e(e,n,t,s)}n=n.child}return n;case 26:return yl(e,n),e===null?(s=ch(n.type,null,n.pendingProps,null))?n.memoizedState=s:de||(s=n.type,e=n.pendingProps,t=Hl(re.current).createElement(s),t[We]=n,t[ln]=e,Fe(t,s,e),xe(t),n.stateNode=t):n.memoizedState=ch(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ea(n),e===null&&de&&(t=n.stateNode=uh(n.type,n.pendingProps,re.current),Qe=n,Nn=!0,u=Oe,Gs(n.type)?(Ho=u,Oe=jn(t.firstChild)):Oe=u),$e(e,n,n.pendingProps.children,s),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&de&&((u=t=Oe)&&(t=$p(t,n.type,n.pendingProps,Nn),t!==null?(n.stateNode=t,Qe=n,Oe=jn(t.firstChild),Nn=!1,u=!0):u=!1),u||Ts(n)),Ea(n),u=n.type,o=n.pendingProps,d=e!==null?e.memoizedProps:null,t=o.children,Do(u,o)?t=null:d!==null&&Do(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,dp,null,null,s),hi._currentValue=u),yl(e,n),$e(e,n,t,s),n.child;case 6:return e===null&&de&&((e=s=Oe)&&(s=Fp(s,n.pendingProps,Nn),s!==null?(n.stateNode=s,Qe=n,Oe=null,e=!0):e=!1),e||Ts(n)),null;case 13:return $d(e,n,s);case 4:return sn(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=dt(n,null,t,s):$e(e,n,t,s),n.child;case 11:return kd(e,n,n.type,n.pendingProps,s);case 7:return $e(e,n,n.pendingProps,s),n.child;case 8:return $e(e,n,n.pendingProps.children,s),n.child;case 12:return $e(e,n,n.pendingProps.children,s),n.child;case 10:return t=n.pendingProps,Os(n,n.type,t.value),$e(e,n,t.children,s),n.child;case 9:return u=n.type._context,t=n.pendingProps.children,ut(n),u=Ve(u),t=t(u),n.flags|=1,$e(e,n,t,s),n.child;case 14:return Id(e,n,n.type,n.pendingProps,s);case 15:return xd(e,n,n.type,n.pendingProps,s);case 19:return Pd(e,n,s);case 31:return Sp(e,n,s);case 22:return Zd(e,n,s,n.pendingProps);case 24:return ut(n),t=Ve(Xe),e===null?(u=yu(),u===null&&(u=Me,o=mu(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=s),u=o),n.memoizedState={parent:t,cache:u},Su(n),Os(n,Xe,u)):((e.lanes&s)!==0&&(bu(e,n),Wa(n,null,null,s),Ka()),u=e.memoizedState,o=n.memoizedState,u.parent!==t?(u={parent:t,cache:t},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Os(n,Xe,t)):(t=o.cache,Os(n,Xe,t),t!==u.cache&&_u(n,[Xe],s,!0))),$e(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ds(e){e.flags|=4}function so(e,n,s,t,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Tg())e.flags|=8192;else throw ct=tl,vu}else e.flags&=-16777217}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mh(n))if(Tg())e.flags|=8192;else throw ct=tl,vu}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?jf():536870912,e.lanes|=n,ea|=n)}function ei(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,t=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,t|=u.subtreeFlags&65011712,t|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,t|=u.subtreeFlags,t|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=t,e.childLanes=s,n}function zp(e,n,s){var t=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return s=n.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),us(Xe),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Gt(n)?ds(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),Le(n),null;case 26:var u=n.type,o=n.memoizedState;return e===null?(ds(n),o!==null?(Le(n),ng(n,o)):(Le(n),so(n,u,null,t,s))):o?o!==e.memoizedState?(ds(n),Le(n),ng(n,o)):(Le(n),n.flags&=-16777217):(e=e.memoizedProps,e!==t&&ds(n),Le(n),so(n,u,e,t,s)),null;case 27:if(wi(n),s=re.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==t&&ds(n);else{if(!t){if(n.stateNode===null)throw Error(r(166));return Le(n),null}e=W.current,Gt(n)?jc(n):(e=uh(u,t,s),n.stateNode=e,ds(n))}return Le(n),null;case 5:if(wi(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==t&&ds(n);else{if(!t){if(n.stateNode===null)throw Error(r(166));return Le(n),null}if(o=W.current,Gt(n))jc(n);else{var d=Hl(re.current);switch(o){case 1:o=d.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:o=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":o=d.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":o=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":o=d.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof t.is=="string"?d.createElement("select",{is:t.is}):d.createElement("select"),t.multiple?o.multiple=!0:t.size&&(o.size=t.size);break;default:o=typeof t.is=="string"?d.createElement(u,{is:t.is}):d.createElement(u)}}o[We]=n,o[ln]=t;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)o.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=o;e:switch(Fe(o,u,t),u){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ds(n)}}return Le(n),so(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==t&&ds(n);else{if(typeof t!="string"&&n.stateNode===null)throw Error(r(166));if(e=re.current,Gt(n)){if(e=n.stateNode,s=n.memoizedProps,t=null,u=Qe,u!==null)switch(u.tag){case 27:case 5:t=u.memoizedProps}e[We]=n,e=!!(e.nodeValue===s||t!==null&&t.suppressHydrationWarning===!0||$g(e.nodeValue,s)),e||Ts(n,!0)}else e=Hl(e).createTextNode(t),e[We]=n,n.stateNode=e}return Le(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(t=Gt(n),s!==null){if(e===null){if(!t)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[We]=n}else lt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),e=!1}else s=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(bn(n),n):(bn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Le(n),null;case 13:if(t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gt(n),t!==null&&t.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[We]=n}else lt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),u=!1}else u=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(bn(n),n):(bn(n),null)}return bn(n),(n.flags&128)!==0?(n.lanes=s,n):(s=t!==null,e=e!==null&&e.memoizedState!==null,s&&(t=n.child,u=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(u=t.alternate.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==u&&(t.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),Sl(n,n.updateQueue),Le(n),null);case 4:return Be(),e===null&&Eo(n.stateNode.containerInfo),Le(n),null;case 10:return us(n.type),Le(n),null;case 19:if(H(Re),t=n.memoizedState,t===null)return Le(n),null;if(u=(n.flags&128)!==0,o=t.rendering,o===null)if(u)ei(t,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=rl(e),o!==null){for(n.flags|=128,ei(t,!1),e=o.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Lc(s,e),s=s.sibling;return k(Re,Re.current&1|2),de&&ls(n,t.treeForkCount),n.child}e=e.sibling}t.tail!==null&&_n()>El&&(n.flags|=128,u=!0,ei(t,!1),n.lanes=4194304)}else{if(!u)if(e=rl(o),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),ei(t,!0),t.tail===null&&t.tailMode==="hidden"&&!o.alternate&&!de)return Le(n),null}else 2*_n()-t.renderingStartTime>El&&s!==536870912&&(n.flags|=128,u=!0,ei(t,!1),n.lanes=4194304);t.isBackwards?(o.sibling=n.child,n.child=o):(e=t.last,e!==null?e.sibling=o:n.child=o,t.last=o)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=_n(),e.sibling=null,s=Re.current,k(Re,u?s&1|2:s&1),de&&ls(n,t.treeForkCount),e):(Le(n),null);case 22:case 23:return bn(n),Eu(),t=n.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(n.flags|=8192):t&&(n.flags|=8192),t?(s&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),s=n.updateQueue,s!==null&&Sl(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(n.flags|=2048),e!==null&&H(ot),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),us(Xe),Le(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ap(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return us(Xe),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return wi(n),null;case 31:if(n.memoizedState!==null){if(bn(n),n.alternate===null)throw Error(r(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(bn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Re),null;case 4:return Be(),null;case 10:return us(n.type),null;case 22:case 23:return bn(n),Eu(),e!==null&&H(ot),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return us(Xe),null;case 25:return null;default:return null}}function sg(e,n){switch(fu(n),n.tag){case 3:us(Xe),Be();break;case 26:case 27:case 5:wi(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&bn(n);break;case 13:bn(n);break;case 19:H(Re);break;case 10:us(n.type);break;case 22:case 23:bn(n),Eu(),e!==null&&H(ot);break;case 24:us(Xe)}}function ni(e,n){try{var s=n.updateQueue,t=s!==null?s.lastEffect:null;if(t!==null){var u=t.next;s=u;do{if((s.tag&e)===e){t=void 0;var o=s.create,d=s.inst;t=o(),d.destroy=t}s=s.next}while(s!==u)}}catch(h){Se(n,n.return,h)}}function js(e,n,s){try{var t=n.updateQueue,u=t!==null?t.lastEffect:null;if(u!==null){var o=u.next;t=o;do{if((t.tag&e)===e){var d=t.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,u=n;var y=s,E=h;try{E()}catch(w){Se(u,y,w)}}}t=t.next}while(t!==o)}}catch(w){Se(n,n.return,w)}}function tg(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Kc(n,s)}catch(t){Se(e,e.return,t)}}}function ag(e,n,s){s.props=ht(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(t){Se(e,n,t)}}function si(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof s=="function"?e.refCleanup=s(t):s.current=t}}catch(u){Se(e,n,u)}}function Qn(e,n){var s=e.ref,t=e.refCleanup;if(s!==null)if(typeof t=="function")try{t()}catch(u){Se(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Se(e,n,u)}else s.current=null}function ig(e){var n=e.type,s=e.memoizedProps,t=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break e;case"img":s.src?t.src=s.src:s.srcSet&&(t.srcset=s.srcSet)}}catch(u){Se(e,e.return,u)}}function to(e,n,s){try{var t=e.stateNode;Zp(t,e.type,s,n),t[ln]=n}catch(u){Se(e,e.return,u)}}function lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gs(e.type)||e.tag===4}function ao(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ts));else if(t!==4&&(t===27&&Gs(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(io(e,n,s),e=e.sibling;e!==null;)io(e,n,s),e=e.sibling}function bl(e,n,s){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(t!==4&&(t===27&&Gs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(bl(e,n,s),e=e.sibling;e!==null;)bl(e,n,s),e=e.sibling}function rg(e){var n=e.stateNode,s=e.memoizedProps;try{for(var t=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Fe(n,t,s),n[We]=e,n[ln]=s}catch(o){Se(e,e.return,o)}}var gs=!1,ke=!1,lo=!1,ug=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Cp(e,n){if(e=e.containerInfo,Oo=kl,e=Sc(e),Pr(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var t=s.getSelection&&s.getSelection();if(t&&t.rangeCount!==0){s=t.anchorNode;var u=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{s.nodeType,o.nodeType}catch{s=null;break e}var d=0,h=-1,y=-1,E=0,w=0,j=e,M=null;n:for(;;){for(var L;j!==s||u!==0&&j.nodeType!==3||(h=d+u),j!==o||t!==0&&j.nodeType!==3||(y=d+t),j.nodeType===3&&(d+=j.nodeValue.length),(L=j.firstChild)!==null;)M=j,j=L;for(;;){if(j===e)break n;if(M===s&&++E===u&&(h=d),M===o&&++w===t&&(y=d),(L=j.nextSibling)!==null)break;j=M,M=j.parentNode}j=L}s=h===-1||y===-1?null:{start:h,end:y}}else s=null}s=s||{start:0,end:0}}else s=null;for(Lo={focusedElem:e,selectionRange:s},kl=!1,Ze=n;Ze!==null;)if(n=Ze,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ze=e;else for(;Ze!==null;){switch(n=Ze,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,s=n,u=o.memoizedProps,o=o.memoizedState,t=s.stateNode;try{var J=ht(s.type,u);e=t.getSnapshotBeforeUpdate(J,o),t.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Se(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)No(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":No(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Ze=e;break}Ze=n.return}}function og(e,n,s){var t=s.flags;switch(s.tag){case 0:case 11:case 15:_s(e,s),t&4&&ni(5,s);break;case 1:if(_s(e,s),t&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){Se(s,s.return,d)}else{var u=ht(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Se(s,s.return,d)}}t&64&&tg(s),t&512&&si(s,s.return);break;case 3:if(_s(e,s),t&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Kc(e,n)}catch(d){Se(s,s.return,d)}}break;case 27:n===null&&t&4&&rg(s);case 26:case 5:_s(e,s),n===null&&t&4&&ig(s),t&512&&si(s,s.return);break;case 12:_s(e,s);break;case 31:_s(e,s),t&4&&dg(e,s);break;case 13:_s(e,s),t&4&&gg(e,s),t&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Yp.bind(null,s),Pp(e,s))));break;case 22:if(t=s.memoizedState!==null||gs,!t){n=n!==null&&n.memoizedState!==null||ke,u=gs;var o=ke;gs=t,(ke=n)&&!o?ms(e,s,(s.subtreeFlags&8772)!==0):_s(e,s),gs=u,ke=o}break;case 30:break;default:_s(e,s)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Br(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,un=!1;function hs(e,n,s){for(s=s.child;s!==null;)cg(e,n,s),s=s.sibling}function cg(e,n,s){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Ma,s)}catch{}switch(s.tag){case 26:ke||Qn(s,n),hs(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ke||Qn(s,n);var t=De,u=un;Gs(s.type)&&(De=s.stateNode,un=!1),hs(e,n,s),ci(s.stateNode),De=t,un=u;break;case 5:ke||Qn(s,n);case 6:if(t=De,u=un,De=null,hs(e,n,s),De=t,un=u,De!==null)if(un)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(s.stateNode)}catch(o){Se(s,n,o)}else try{De.removeChild(s.stateNode)}catch(o){Se(s,n,o)}break;case 18:De!==null&&(un?(e=De,th(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ua(e)):th(De,s.stateNode));break;case 4:t=De,u=un,De=s.stateNode.containerInfo,un=!0,hs(e,n,s),De=t,un=u;break;case 0:case 11:case 14:case 15:js(2,s,n),ke||js(4,s,n),hs(e,n,s);break;case 1:ke||(Qn(s,n),t=s.stateNode,typeof t.componentWillUnmount=="function"&&ag(s,n,t)),hs(e,n,s);break;case 21:hs(e,n,s);break;case 22:ke=(t=ke)||s.memoizedState!==null,hs(e,n,s),ke=t;break;default:hs(e,n,s)}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ua(e)}catch(s){Se(n,n.return,s)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ua(e)}catch(s){Se(n,n.return,s)}}function Ep(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ug),n;default:throw Error(r(435,e.tag))}}function zl(e,n){var s=Ep(e);n.forEach(function(t){if(!s.has(t)){s.add(t);var u=jp.bind(null,e,t);t.then(u,u)}})}function on(e,n){var s=n.deletions;if(s!==null)for(var t=0;t<s.length;t++){var u=s[t],o=e,d=n,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Gs(h.type)){De=h.stateNode,un=!1;break e}break;case 5:De=h.stateNode,un=!1;break e;case 3:case 4:De=h.stateNode.containerInfo,un=!0;break e}h=h.return}if(De===null)throw Error(r(160));cg(o,d,u),De=null,un=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)hg(n,e),n=n.sibling}var kn=null;function hg(e,n){var s=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:on(n,e),fn(e),t&4&&(js(3,e,e.return),ni(3,e),js(5,e,e.return));break;case 1:on(n,e),fn(e),t&512&&(ke||s===null||Qn(s,s.return)),t&64&&gs&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?t:s.concat(t))));break;case 26:var u=kn;if(on(n,e),fn(e),t&512&&(ke||s===null||Qn(s,s.return)),t&4){var o=s!==null?s.memoizedState:null;if(t=e.memoizedState,s===null)if(t===null)if(e.stateNode===null){e:{t=e.type,s=e.memoizedProps,u=u.ownerDocument||u;n:switch(t){case"title":o=u.getElementsByTagName("title")[0],(!o||o[La]||o[We]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(t),u.head.insertBefore(o,u.querySelector("head > title"))),Fe(o,t,s),o[We]=e,xe(o),t=o;break e;case"link":var d=hh("link","href",u).get(t+(s.href||""));if(d){for(var h=0;h<d.length;h++)if(o=d[h],o.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&o.getAttribute("rel")===(s.rel==null?null:s.rel)&&o.getAttribute("title")===(s.title==null?null:s.title)&&o.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(h,1);break n}}o=u.createElement(t),Fe(o,t,s),u.head.appendChild(o);break;case"meta":if(d=hh("meta","content",u).get(t+(s.content||""))){for(h=0;h<d.length;h++)if(o=d[h],o.getAttribute("content")===(s.content==null?null:""+s.content)&&o.getAttribute("name")===(s.name==null?null:s.name)&&o.getAttribute("property")===(s.property==null?null:s.property)&&o.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&o.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(h,1);break n}}o=u.createElement(t),Fe(o,t,s),u.head.appendChild(o);break;default:throw Error(r(468,t))}o[We]=e,xe(o),t=o}e.stateNode=t}else _h(u,e.type,e.stateNode);else e.stateNode=gh(u,t,e.memoizedProps);else o!==t?(o===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):o.count--,t===null?_h(u,e.type,e.stateNode):gh(u,t,e.memoizedProps)):t===null&&e.stateNode!==null&&to(e,e.memoizedProps,s.memoizedProps)}break;case 27:on(n,e),fn(e),t&512&&(ke||s===null||Qn(s,s.return)),s!==null&&t&4&&to(e,e.memoizedProps,s.memoizedProps);break;case 5:if(on(n,e),fn(e),t&512&&(ke||s===null||Qn(s,s.return)),e.flags&32){u=e.stateNode;try{wt(u,"")}catch(J){Se(e,e.return,J)}}t&4&&e.stateNode!=null&&(u=e.memoizedProps,to(e,u,s!==null?s.memoizedProps:u)),t&1024&&(lo=!0);break;case 6:if(on(n,e),fn(e),t&4){if(e.stateNode===null)throw Error(r(162));t=e.memoizedProps,s=e.stateNode;try{s.nodeValue=t}catch(J){Se(e,e.return,J)}}break;case 3:if(Ul=null,u=kn,kn=Bl(n.containerInfo),on(n,e),kn=u,fn(e),t&4&&s!==null&&s.memoizedState.isDehydrated)try{ua(n.containerInfo)}catch(J){Se(e,e.return,J)}lo&&(lo=!1,_g(e));break;case 4:t=kn,kn=Bl(e.stateNode.containerInfo),on(n,e),fn(e),kn=t;break;case 12:on(n,e),fn(e);break;case 31:on(n,e),fn(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zl(e,t)));break;case 13:on(n,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cl=_n()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zl(e,t)));break;case 22:u=e.memoizedState!==null;var y=s!==null&&s.memoizedState!==null,E=gs,w=ke;if(gs=E||u,ke=w||y,on(n,e),ke=w,gs=E,fn(e),t&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||y||gs||ke||_t(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){y=s=n;try{if(o=y.stateNode,u)d=o.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=y.stateNode;var j=y.memoizedProps.style,M=j!=null&&j.hasOwnProperty("display")?j.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(J){Se(y,y.return,J)}}}else if(n.tag===6){if(s===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(J){Se(y,y.return,J)}}}else if(n.tag===18){if(s===null){y=n;try{var L=y.stateNode;u?ah(L,!0):ah(y.stateNode,!1)}catch(J){Se(y,y.return,J)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}t&4&&(t=e.updateQueue,t!==null&&(s=t.retryQueue,s!==null&&(t.retryQueue=null,zl(e,s))));break;case 19:on(n,e),fn(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zl(e,t)));break;case 30:break;case 21:break;default:on(n,e),fn(e)}}function fn(e){var n=e.flags;if(n&2){try{for(var s,t=e.return;t!==null;){if(lg(t)){s=t;break}t=t.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,o=ao(e);bl(e,o,u);break;case 5:var d=s.stateNode;s.flags&32&&(wt(d,""),s.flags&=-33);var h=ao(e);bl(e,h,d);break;case 3:case 4:var y=s.stateNode.containerInfo,E=ao(e);io(e,E,y);break;default:throw Error(r(161))}}catch(w){Se(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _s(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(e,n.alternate,n),n=n.sibling}function _t(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:js(4,n,n.return),_t(n);break;case 1:Qn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ag(n,n.return,s),_t(n);break;case 27:ci(n.stateNode);case 26:case 5:Qn(n,n.return),_t(n);break;case 22:n.memoizedState===null&&_t(n);break;case 30:_t(n);break;default:_t(n)}e=e.sibling}}function ms(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var t=n.alternate,u=e,o=n,d=o.flags;switch(o.tag){case 0:case 11:case 15:ms(u,o,s),ni(4,o);break;case 1:if(ms(u,o,s),t=o,u=t.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){Se(t,t.return,E)}if(t=o,u=t.updateQueue,u!==null){var h=t.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)Jc(y[u],h)}catch(E){Se(t,t.return,E)}}s&&d&64&&tg(o),si(o,o.return);break;case 27:rg(o);case 26:case 5:ms(u,o,s),s&&t===null&&d&4&&ig(o),si(o,o.return);break;case 12:ms(u,o,s);break;case 31:ms(u,o,s),s&&d&4&&dg(u,o);break;case 13:ms(u,o,s),s&&d&4&&gg(u,o);break;case 22:o.memoizedState===null&&ms(u,o,s),si(o,o.return);break;case 30:break;default:ms(u,o,s)}n=n.sibling}}function ro(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ka(s))}function uo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ka(e))}function In(e,n,s,t){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)mg(e,n,s,t),n=n.sibling}function mg(e,n,s,t){var u=n.flags;switch(n.tag){case 0:case 11:case 15:In(e,n,s,t),u&2048&&ni(9,n);break;case 1:In(e,n,s,t);break;case 3:In(e,n,s,t),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ka(e)));break;case 12:if(u&2048){In(e,n,s,t),e=n.stateNode;try{var o=n.memoizedProps,d=o.id,h=o.onPostCommit;typeof h=="function"&&h(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Se(n,n.return,y)}}else In(e,n,s,t);break;case 31:In(e,n,s,t);break;case 13:In(e,n,s,t);break;case 23:break;case 22:o=n.stateNode,d=n.alternate,n.memoizedState!==null?o._visibility&2?In(e,n,s,t):ti(e,n):o._visibility&2?In(e,n,s,t):(o._visibility|=2,$t(e,n,s,t,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ro(d,n);break;case 24:In(e,n,s,t),u&2048&&uo(n.alternate,n);break;default:In(e,n,s,t)}}function $t(e,n,s,t,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,d=n,h=s,y=t,E=d.flags;switch(d.tag){case 0:case 11:case 15:$t(o,d,h,y,u),ni(8,d);break;case 23:break;case 22:var w=d.stateNode;d.memoizedState!==null?w._visibility&2?$t(o,d,h,y,u):ti(o,d):(w._visibility|=2,$t(o,d,h,y,u)),u&&E&2048&&ro(d.alternate,d);break;case 24:$t(o,d,h,y,u),u&&E&2048&&uo(d.alternate,d);break;default:$t(o,d,h,y,u)}n=n.sibling}}function ti(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,t=n,u=t.flags;switch(t.tag){case 22:ti(s,t),u&2048&&ro(t.alternate,t);break;case 24:ti(s,t),u&2048&&uo(t.alternate,t);break;default:ti(s,t)}n=n.sibling}}var ai=8192;function Ft(e,n,s){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)pg(e,n,s),e=e.sibling}function pg(e,n,s){switch(e.tag){case 26:Ft(e,n,s),e.flags&ai&&e.memoizedState!==null&&cy(s,kn,e.memoizedState,e.memoizedProps);break;case 5:Ft(e,n,s);break;case 3:case 4:var t=kn;kn=Bl(e.stateNode.containerInfo),Ft(e,n,s),kn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ai,ai=16777216,Ft(e,n,s),ai=t):Ft(e,n,s));break;default:Ft(e,n,s)}}function yg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ii(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var t=n[s];Ze=t,Sg(t,e)}yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vg(e),e=e.sibling}function vg(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&js(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):ii(e);break;default:ii(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var t=n[s];Ze=t,Sg(t,e)}yg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:js(8,n,n.return),Al(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function Sg(e,n){for(;Ze!==null;){var s=Ze;switch(s.tag){case 0:case 11:case 15:js(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var t=s.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ka(s.memoizedState.cache)}if(t=s.child,t!==null)t.return=s,Ze=t;else e:for(s=e;Ze!==null;){t=Ze;var u=t.sibling,o=t.return;if(fg(t),t===s){Ze=null;break e}if(u!==null){u.return=o,Ze=u;break e}Ze=o}}}var Mp={getCacheForType:function(e){var n=Ve(Xe),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return Ve(Xe).controller.signal}},Tp=typeof WeakMap=="function"?WeakMap:Map,me=0,Me=null,ue=null,fe=0,ve=0,zn=null,Hs=!1,Pt=!1,oo=!1,ps=0,He=0,Bs=0,mt=0,fo=0,An=0,ea=0,li=null,cn=null,co=!1,Cl=0,bg=0,El=1/0,Ml=null,Rs=null,Ie=0,Us=null,na=null,ys=0,go=0,ho=null,zg=null,ri=0,_o=null;function Cn(){return(me&2)!==0&&fe!==0?fe&-fe:N.T!==null?bo():Uf()}function Ag(){if(An===0)if((fe&536870912)===0||de){var e=ji;ji<<=1,(ji&3932160)===0&&(ji=262144),An=e}else An=536870912;return e=Sn.current,e!==null&&(e.flags|=32),An}function dn(e,n,s){(e===Me&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(sa(e,0),Xs(e,fe,An,!1)),Oa(e,s),((me&2)===0||e!==Me)&&(e===Me&&((me&2)===0&&(mt|=s),He===4&&Xs(e,fe,An,!1)),Vn(e))}function Cg(e,n,s){if((me&6)!==0)throw Error(r(327));var t=!s&&(n&127)===0&&(n&e.expiredLanes)===0||Ta(e,n),u=t?Dp(e,n):po(e,n,!0),o=t;do{if(u===0){Pt&&!t&&Xs(e,n,0,!1);break}else{if(s=e.current.alternate,o&&!Op(s)){u=po(e,n,!1),o=!1;continue}if(u===2){if(o=n,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var h=e;u=li;var y=h.current.memoizedState.isDehydrated;if(y&&(sa(h,d).flags|=256),d=po(h,d,!1),d!==2){if(oo&&!y){h.errorRecoveryDisabledLanes|=o,mt|=o,u=4;break e}o=cn,cn=u,o!==null&&(cn===null?cn=o:cn.push.apply(cn,o))}u=d}if(o=!1,u!==2)continue}}if(u===1){sa(e,0),Xs(e,n,0,!0);break}e:{switch(t=e,o=u,o){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xs(t,n,An,!Hs);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Cl+300-_n(),10<u)){if(Xs(t,n,An,!Hs),Bi(t,0,!0)!==0)break e;ys=n,t.timeoutHandle=nh(Eg.bind(null,t,s,cn,Ml,co,n,An,mt,ea,Hs,o,"Throttled",-0,0),u);break e}Eg(t,s,cn,Ml,co,n,An,mt,ea,Hs,o,null,-0,0)}}break}while(!0);Vn(e)}function Eg(e,n,s,t,u,o,d,h,y,E,w,j,M,L){if(e.timeoutHandle=-1,j=n.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ts},pg(n,o,j);var J=(o&62914560)===o?Cl-_n():(o&4194048)===o?bg-_n():0;if(J=dy(j,J),J!==null){ys=o,e.cancelPendingCommit=J(Yg.bind(null,e,n,o,s,t,u,d,h,y,w,j,null,M,L)),Xs(e,o,d,!E);return}}Yg(e,n,o,s,t,u,d,h,y)}function Op(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var t=0;t<s.length;t++){var u=s[t],o=u.getSnapshot;u=u.value;try{if(!yn(o(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xs(e,n,s,t){n&=~fo,n&=~mt,e.suspendedLanes|=n,e.pingedLanes&=~n,t&&(e.warmLanes|=n),t=e.expirationTimes;for(var u=n;0<u;){var o=31-pn(u),d=1<<o;t[o]=-1,u&=~d}s!==0&&Hf(e,s,n)}function Tl(){return(me&6)===0?(ui(0),!1):!0}function mo(){if(ue!==null){if(ve===0)var e=ue.return;else e=ue,rs=rt=null,wu(e),Jt=null,xa=0,e=ue;for(;e!==null;)sg(e.alternate,e),e=e.return;ue=null}}function sa(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Wp(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ys=0,mo(),Me=e,ue=s=is(e.current,null),fe=n,ve=0,zn=null,Hs=!1,Pt=Ta(e,n),oo=!1,ea=An=fo=mt=Bs=He=0,cn=li=null,co=!1,(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var u=31-pn(t),o=1<<u;n|=e[u],t&=~o}return ps=n,Wi(),s}function Mg(e,n){ie=null,N.H=Fa,n===Zt||n===sl?(n=kc(),ve=3):n===vu?(n=kc(),ve=4):ve=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zn=n,ue===null&&(He=1,ml(e,Ln(n,e.current)))}function Tg(){var e=Sn.current;return e===null?!0:(fe&4194048)===fe?Yn===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Yn:!1}function Og(){var e=N.H;return N.H=Fa,e===null?Fa:e}function Lg(){var e=N.A;return N.A=Mp,e}function Ol(){He=4,Hs||(fe&4194048)!==fe&&Sn.current!==null||(Pt=!0),(Bs&134217727)===0&&(mt&134217727)===0||Me===null||Xs(Me,fe,An,!1)}function po(e,n,s){var t=me;me|=2;var u=Og(),o=Lg();(Me!==e||fe!==n)&&(Ml=null,sa(e,n)),n=!1;var d=He;e:do try{if(ve!==0&&ue!==null){var h=ue,y=zn;switch(ve){case 8:mo(),d=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(n=!0);var E=ve;if(ve=0,zn=null,ta(e,h,y,E),s&&Pt){d=0;break e}break;default:E=ve,ve=0,zn=null,ta(e,h,y,E)}}Lp(),d=He;break}catch(w){Mg(e,w)}while(!0);return n&&e.shellSuspendCounter++,rs=rt=null,me=t,N.H=u,N.A=o,ue===null&&(Me=null,fe=0,Wi()),d}function Lp(){for(;ue!==null;)Dg(ue)}function Dp(e,n){var s=me;me|=2;var t=Og(),u=Lg();Me!==e||fe!==n?(Ml=null,El=_n()+500,sa(e,n)):Pt=Ta(e,n);e:do try{if(ve!==0&&ue!==null){n=ue;var o=zn;n:switch(ve){case 1:ve=0,zn=null,ta(e,n,o,1);break;case 2:case 9:if(qc(o)){ve=0,zn=null,wg(n);break}n=function(){ve!==2&&ve!==9||Me!==e||(ve=7),Vn(e)},o.then(n,n);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:qc(o)?(ve=0,zn=null,wg(n)):(ve=0,zn=null,ta(e,n,o,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var h=ue;if(d?mh(d):h.stateNode.complete){ve=0,zn=null;var y=h.sibling;if(y!==null)ue=y;else{var E=h.return;E!==null?(ue=E,Ll(E)):ue=null}break n}}ve=0,zn=null,ta(e,n,o,5);break;case 6:ve=0,zn=null,ta(e,n,o,6);break;case 8:mo(),He=6;break e;default:throw Error(r(462))}}wp();break}catch(w){Mg(e,w)}while(!0);return rs=rt=null,N.H=t,N.A=u,me=s,ue!==null?0:(Me=null,fe=0,Wi(),He)}function wp(){for(;ue!==null&&!em();)Dg(ue)}function Dg(e){var n=eg(e.alternate,e,ps);e.memoizedProps=e.pendingProps,n===null?Ll(e):ue=n}function wg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Wd(s,n,n.pendingProps,n.type,void 0,fe);break;case 11:n=Wd(s,n,n.pendingProps,n.type.render,n.ref,fe);break;case 5:wu(n);default:sg(s,n),n=ue=Lc(n,ps),n=eg(s,n,ps)}e.memoizedProps=e.pendingProps,n===null?Ll(e):ue=n}function ta(e,n,s,t){rs=rt=null,wu(n),Jt=null,xa=0;var u=n.return;try{if(vp(e,u,n,s,fe)){He=1,ml(e,Ln(s,e.current)),ue=null;return}}catch(o){if(u!==null)throw ue=u,o;He=1,ml(e,Ln(s,e.current)),ue=null;return}n.flags&32768?(de||t===1?e=!0:Pt||(fe&536870912)!==0?e=!1:(Hs=e=!0,(t===2||t===9||t===3||t===6)&&(t=Sn.current,t!==null&&t.tag===13&&(t.flags|=16384))),Ng(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){Ng(n,Hs);return}e=n.return;var s=zp(n.alternate,n,ps);if(s!==null){ue=s;return}if(n=n.sibling,n!==null){ue=n;return}ue=n=e}while(n!==null);He===0&&(He=5)}function Ng(e,n){do{var s=Ap(e.alternate,e);if(s!==null){s.flags&=32767,ue=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ue=e;return}ue=e=s}while(e!==null);He=6,ue=null}function Yg(e,n,s,t,u,o,d,h,y){e.cancelPendingCommit=null;do Dl();while(Ie!==0);if((me&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(o=n.lanes|n.childLanes,o|=au,fm(e,s,o,d,h,y),e===Me&&(ue=Me=null,fe=0),na=n,Us=e,ys=s,go=o,ho=u,zg=t,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hp(Ni,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||t){t=N.T,N.T=null,u=G.p,G.p=2,d=me,me|=4;try{Cp(e,n,s)}finally{me=d,G.p=u,N.T=t}}Ie=1,jg(),Hg(),Bg()}}function jg(){if(Ie===1){Ie=0;var e=Us,n=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var t=G.p;G.p=2;var u=me;me|=4;try{hg(n,e);var o=Lo,d=Sc(e.containerInfo),h=o.focusedElem,y=o.selectionRange;if(d!==h&&h&&h.ownerDocument&&vc(h.ownerDocument.documentElement,h)){if(y!==null&&Pr(h)){var E=y.start,w=y.end;if(w===void 0&&(w=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(w,h.value.length);else{var j=h.ownerDocument||document,M=j&&j.defaultView||window;if(M.getSelection){var L=M.getSelection(),J=h.textContent.length,ee=Math.min(y.start,J),Ce=y.end===void 0?ee:Math.min(y.end,J);!L.extend&&ee>Ce&&(d=Ce,Ce=ee,ee=d);var z=yc(h,ee),v=yc(h,Ce);if(z&&v&&(L.rangeCount!==1||L.anchorNode!==z.node||L.anchorOffset!==z.offset||L.focusNode!==v.node||L.focusOffset!==v.offset)){var C=j.createRange();C.setStart(z.node,z.offset),L.removeAllRanges(),ee>Ce?(L.addRange(C),L.extend(v.node,v.offset)):(C.setEnd(v.node,v.offset),L.addRange(C))}}}}for(j=[],L=h;L=L.parentNode;)L.nodeType===1&&j.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<j.length;h++){var Y=j[h];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}kl=!!Oo,Lo=Oo=null}finally{me=u,G.p=t,N.T=s}}e.current=n,Ie=2}}function Hg(){if(Ie===2){Ie=0;var e=Us,n=na,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var t=G.p;G.p=2;var u=me;me|=4;try{og(e,n.alternate,n)}finally{me=u,G.p=t,N.T=s}}Ie=3}}function Bg(){if(Ie===4||Ie===3){Ie=0,nm();var e=Us,n=na,s=ys,t=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ie=5:(Ie=0,na=Us=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Rs=null),jr(s),n=n.stateNode,mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Ma,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var o=e.onRecoverableError,d=0;d<t.length;d++){var h=t[d];o(h.value,{componentStack:h.stack})}}finally{N.T=n,G.p=u}}(ys&3)!==0&&Dl(),Vn(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===_o?ri++:(ri=0,_o=e):ri=0,ui(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ka(n)))}function Dl(){return jg(),Hg(),Bg(),Ug()}function Ug(){if(Ie!==5)return!1;var e=Us,n=go;go=0;var s=jr(ys),t=N.T,u=G.p;try{G.p=32>s?32:s,N.T=null,s=ho,ho=null;var o=Us,d=ys;if(Ie=0,na=Us=null,ys=0,(me&6)!==0)throw Error(r(331));var h=me;if(me|=4,vg(o.current),mg(o,o.current,d,s),me=h,ui(0,!1),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Ma,o)}catch{}return!0}finally{G.p=u,N.T=t,Rg(e,n)}}function Xg(e,n,s){n=Ln(s,n),n=Ju(e.stateNode,n,2),e=ws(e,n,2),e!==null&&(Oa(e,2),Vn(e))}function Se(e,n,s){if(e.tag===3)Xg(e,e,s);else for(;n!==null;){if(n.tag===3){Xg(n,e,s);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Rs===null||!Rs.has(t))){e=Ln(s,e),s=qd(2),t=ws(n,s,2),t!==null&&(Gd(s,t,n,e),Oa(t,2),Vn(t));break}}n=n.return}}function yo(e,n,s){var t=e.pingCache;if(t===null){t=e.pingCache=new Tp;var u=new Set;t.set(n,u)}else u=t.get(n),u===void 0&&(u=new Set,t.set(n,u));u.has(s)||(oo=!0,u.add(s),e=Np.bind(null,e,n,s),n.then(e,e))}function Np(e,n,s){var t=e.pingCache;t!==null&&t.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Me===e&&(fe&s)===s&&(He===4||He===3&&(fe&62914560)===fe&&300>_n()-Cl?(me&2)===0&&sa(e,0):fo|=s,ea===fe&&(ea=0)),Vn(e)}function qg(e,n){n===0&&(n=jf()),e=at(e,n),e!==null&&(Oa(e,n),Vn(e))}function Yp(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),qg(e,s)}function jp(e,n){var s=0;switch(e.tag){case 31:case 13:var t=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(r(314))}t!==null&&t.delete(n),qg(e,s)}function Hp(e,n){return Dr(e,n)}var wl=null,aa=null,vo=!1,Nl=!1,So=!1,qs=0;function Vn(e){e!==aa&&e.next===null&&(aa===null?wl=aa=e:aa=aa.next=e),Nl=!0,vo||(vo=!0,Rp())}function ui(e,n){if(!So&&Nl){So=!0;do for(var s=!1,t=wl;t!==null;){if(e!==0){var u=t.pendingLanes;if(u===0)var o=0;else{var d=t.suspendedLanes,h=t.pingedLanes;o=(1<<31-pn(42|e)+1)-1,o&=u&~(d&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(s=!0,xg(t,o))}else o=fe,o=Bi(t,t===Me?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(o&3)===0||Ta(t,o)||(s=!0,xg(t,o));t=t.next}while(s);So=!1}}function Bp(){Gg()}function Gg(){Nl=vo=!1;var e=0;qs!==0&&Kp()&&(e=qs);for(var n=_n(),s=null,t=wl;t!==null;){var u=t.next,o=kg(t,n);o===0?(t.next=null,s===null?wl=u:s.next=u,u===null&&(aa=s)):(s=t,(e!==0||(o&3)!==0)&&(Nl=!0)),t=u}Ie!==0&&Ie!==5||ui(e),qs!==0&&(qs=0)}function kg(e,n){for(var s=e.suspendedLanes,t=e.pingedLanes,u=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-pn(o),h=1<<d,y=u[d];y===-1?((h&s)===0||(h&t)!==0)&&(u[d]=om(h,n)):y<=n&&(e.expiredLanes|=h),o&=~h}if(n=Me,s=fe,s=Bi(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,s===0||e===n&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&wr(t),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ta(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(t!==null&&wr(t),jr(s)){case 2:case 8:s=Nf;break;case 32:s=Ni;break;case 268435456:s=Yf;break;default:s=Ni}return t=Ig.bind(null,e),s=Dr(s,t),e.callbackPriority=n,e.callbackNode=s,n}return t!==null&&t!==null&&wr(t),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,n){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Dl()&&e.callbackNode!==s)return null;var t=fe;return t=Bi(e,e===Me?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Cg(e,t,n),kg(e,_n()),e.callbackNode!=null&&e.callbackNode===s?Ig.bind(null,e):null)}function xg(e,n){if(Dl())return null;Cg(e,n,!0)}function Rp(){Qp(function(){(me&6)!==0?Dr(wf,Bp):Gg()})}function bo(){if(qs===0){var e=It;e===0&&(e=Yi,Yi<<=1,(Yi&261888)===0&&(Yi=256)),qs=e}return qs}function Zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Jg(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function Up(e,n,s,t,u){if(n==="submit"&&s&&s.stateNode===u){var o=Zg((u[ln]||null).action),d=t.submitter;d&&(n=(n=d[ln]||null)?Zg(n.formAction):d.getAttribute("formAction"),n!==null&&(o=n,d=null));var h=new xi("action","action",null,t,u);e.push({event:h,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(qs!==0){var y=d?Jg(u,d):new FormData(u);qu(s,{pending:!0,data:y,method:u.method,action:o},null,y)}}else typeof o=="function"&&(h.preventDefault(),y=d?Jg(u,d):new FormData(u),qu(s,{pending:!0,data:y,method:u.method,action:o},o,y))},currentTarget:u}]})}}for(var zo=0;zo<tu.length;zo++){var Ao=tu[zo],Xp=Ao.toLowerCase(),qp=Ao[0].toUpperCase()+Ao.slice(1);Gn(Xp,"on"+qp)}Gn(Ac,"onAnimationEnd"),Gn(Cc,"onAnimationIteration"),Gn(Ec,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(sp,"onTransitionRun"),Gn(tp,"onTransitionStart"),Gn(ap,"onTransitionCancel"),Gn(Mc,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function Kg(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var t=e[s],u=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var d=t.length-1;0<=d;d--){var h=t[d],y=h.instance,E=h.currentTarget;if(h=h.listener,y!==o&&u.isPropagationStopped())break e;o=h,u.currentTarget=E;try{o(u)}catch(w){Ki(w)}u.currentTarget=null,o=y}else for(d=0;d<t.length;d++){if(h=t[d],y=h.instance,E=h.currentTarget,h=h.listener,y!==o&&u.isPropagationStopped())break e;o=h,u.currentTarget=E;try{o(u)}catch(w){Ki(w)}u.currentTarget=null,o=y}}}}function oe(e,n){var s=n[Hr];s===void 0&&(s=n[Hr]=new Set);var t=e+"__bubble";s.has(t)||(Wg(n,e,2,!1),s.add(t))}function Co(e,n,s){var t=0;n&&(t|=4),Wg(s,e,t,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[Yl]){e[Yl]=!0,Gf.forEach(function(s){s!=="selectionchange"&&(Gp.has(s)||Co(s,!1,e),Co(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Co("selectionchange",!1,n))}}function Wg(e,n,s,t){switch(Ah(n)){case 2:var u=_y;break;case 8:u=my;break;default:u=qo}s=u.bind(null,n,s,e),u=void 0,!xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),t?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function Mo(e,n,s,t,u){var o=t;if((n&1)===0&&(n&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var h=t.stateNode.containerInfo;if(h===u)break;if(d===4)for(d=t.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;h!==null;){if(d=Mt(h),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){t=o=d;continue e}h=h.parentNode}}t=t.return}Pf(function(){var E=o,w=kr(s),j=[];e:{var M=Tc.get(e);if(M!==void 0){var L=xi,J=e;switch(e){case"keypress":if(ki(s)===0)break e;case"keydown":case"keyup":L=jm;break;case"focusin":J="focus",L=Wr;break;case"focusout":J="blur",L=Wr;break;case"beforeblur":case"afterblur":L=Wr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Rm;break;case Ac:case Cc:case Ec:L=Em;break;case Mc:L=Xm;break;case"scroll":case"scrollend":L=Sm;break;case"wheel":L=Gm;break;case"copy":case"cut":case"paste":L=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=ac;break;case"toggle":case"beforetoggle":L=Im}var ee=(n&4)!==0,Ce=!ee&&(e==="scroll"||e==="scrollend"),z=ee?M!==null?M+"Capture":null:M;ee=[];for(var v=E,C;v!==null;){var Y=v;if(C=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||C===null||z===null||(Y=wa(v,z),Y!=null&&ee.push(fi(v,Y,C))),Ce)break;v=v.return}0<ee.length&&(M=new L(M,J,null,s,w),j.push({event:M,listeners:ee}))}}if((n&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",M&&s!==Gr&&(J=s.relatedTarget||s.fromElement)&&(Mt(J)||J[Et]))break e;if((L||M)&&(M=w.window===w?w:(M=w.ownerDocument)?M.defaultView||M.parentWindow:window,L?(J=s.relatedTarget||s.toElement,L=E,J=J?Mt(J):null,J!==null&&(Ce=c(J),ee=J.tag,J!==Ce||ee!==5&&ee!==27&&ee!==6)&&(J=null)):(L=null,J=E),L!==J)){if(ee=sc,Y="onMouseLeave",z="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ee=ac,Y="onPointerLeave",z="onPointerEnter",v="pointer"),Ce=L==null?M:Da(L),C=J==null?M:Da(J),M=new ee(Y,v+"leave",L,s,w),M.target=Ce,M.relatedTarget=C,Y=null,Mt(w)===E&&(ee=new ee(z,v+"enter",J,s,w),ee.target=C,ee.relatedTarget=Ce,Y=ee),Ce=Y,L&&J)n:{for(ee=kp,z=L,v=J,C=0,Y=z;Y;Y=ee(Y))C++;Y=0;for(var F=v;F;F=ee(F))Y++;for(;0<C-Y;)z=ee(z),C--;for(;0<Y-C;)v=ee(v),Y--;for(;C--;){if(z===v||v!==null&&z===v.alternate){ee=z;break n}z=ee(z),v=ee(v)}ee=null}else ee=null;L!==null&&Qg(j,M,L,ee,!1),J!==null&&Ce!==null&&Qg(j,Ce,J,ee,!0)}}e:{if(M=E?Da(E):window,L=M.nodeName&&M.nodeName.toLowerCase(),L==="select"||L==="input"&&M.type==="file")var he=dc;else if(fc(M))if(gc)he=Pm;else{he=$m;var Q=Vm}else L=M.nodeName,!L||L.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?E&&qr(E.elementType)&&(he=dc):he=Fm;if(he&&(he=he(e,E))){cc(j,he,s,w);break e}Q&&Q(e,M,E),e==="focusout"&&E&&M.type==="number"&&E.memoizedProps.value!=null&&Xr(M,"number",M.value)}switch(Q=E?Da(E):window,e){case"focusin":(fc(Q)||Q.contentEditable==="true")&&(Ht=Q,eu=E,Xa=null);break;case"focusout":Xa=eu=Ht=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,bc(j,s,w);break;case"selectionchange":if(np)break;case"keydown":case"keyup":bc(j,s,w)}var le;if(Vr)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else jt?uc(e,s)&&(ce="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ce="onCompositionStart");ce&&(ic&&s.locale!=="ko"&&(jt||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&jt&&(le=ec()):(Cs=w,Zr="value"in Cs?Cs.value:Cs.textContent,jt=!0)),Q=jl(E,ce),0<Q.length&&(ce=new tc(ce,e,null,s,w),j.push({event:ce,listeners:Q}),le?ce.data=le:(le=oc(s),le!==null&&(ce.data=le)))),(le=Zm?Jm(e,s):Km(e,s))&&(ce=jl(E,"onBeforeInput"),0<ce.length&&(Q=new tc("onBeforeInput","beforeinput",null,s,w),j.push({event:Q,listeners:ce}),Q.data=le)),Up(j,e,E,s,w)}Kg(j,n)})}function fi(e,n,s){return{instance:e,listener:n,currentTarget:s}}function jl(e,n){for(var s=n+"Capture",t=[];e!==null;){var u=e,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=wa(e,s),u!=null&&t.unshift(fi(e,u,o)),u=wa(e,n),u!=null&&t.push(fi(e,u,o))),e.tag===3)return t;e=e.return}return[]}function kp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qg(e,n,s,t,u){for(var o=n._reactName,d=[];s!==null&&s!==t;){var h=s,y=h.alternate,E=h.stateNode;if(h=h.tag,y!==null&&y===t)break;h!==5&&h!==26&&h!==27||E===null||(y=E,u?(E=wa(s,o),E!=null&&d.unshift(fi(s,E,y))):u||(E=wa(s,o),E!=null&&d.push(fi(s,E,y)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var Ip=/\r\n?/g,xp=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(Ip,`
`).replace(xp,"")}function $g(e,n){return n=Vg(n),Vg(e)===n}function Ae(e,n,s,t,u,o){switch(s){case"children":typeof t=="string"?n==="body"||n==="textarea"&&t===""||wt(e,t):(typeof t=="number"||typeof t=="bigint")&&n!=="body"&&wt(e,""+t);break;case"className":Ui(e,"class",t);break;case"tabIndex":Ui(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,s,t);break;case"style":$f(e,t,o);break;case"data":if(n!=="object"){Ui(e,"data",t);break}case"src":case"href":if(t===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(s);break}t=qi(""+t),e.setAttribute(s,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(s==="formAction"?(n!=="input"&&Ae(e,n,"name",u.name,u,null),Ae(e,n,"formEncType",u.formEncType,u,null),Ae(e,n,"formMethod",u.formMethod,u,null),Ae(e,n,"formTarget",u.formTarget,u,null)):(Ae(e,n,"encType",u.encType,u,null),Ae(e,n,"method",u.method,u,null),Ae(e,n,"target",u.target,u,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(s);break}t=qi(""+t),e.setAttribute(s,t);break;case"onClick":t!=null&&(e.onclick=ts);break;case"onScroll":t!=null&&oe("scroll",e);break;case"onScrollEnd":t!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(s=t.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}s=qi(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(s,""+t):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":t===!0?e.setAttribute(s,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(s,t):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(s,t):e.removeAttribute(s);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(s):e.setAttribute(s,t);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Ri(e,"popover",t);break;case"xlinkActuate":ss(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":ss(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":ss(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":ss(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":ss(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":ss(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":ss(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":ss(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":ss(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ri(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ym.get(s)||s,Ri(e,s,t))}}function To(e,n,s,t,u,o){switch(s){case"style":$f(e,t,o);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(s=t.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof t=="string"?wt(e,t):(typeof t=="number"||typeof t=="bigint")&&wt(e,""+t);break;case"onScroll":t!=null&&oe("scroll",e);break;case"onScrollEnd":t!=null&&oe("scrollend",e);break;case"onClick":t!=null&&(e.onclick=ts);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kf.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),o=e[ln]||null,o=o!=null?o[s]:null,typeof o=="function"&&e.removeEventListener(n,o,u),typeof t=="function")){typeof o!="function"&&o!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,t,u);break e}s in e?e[s]=t:t===!0?e.setAttribute(s,""):Ri(e,s,t)}}}function Fe(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var t=!1,u=!1,o;for(o in s)if(s.hasOwnProperty(o)){var d=s[o];if(d!=null)switch(o){case"src":t=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ae(e,n,o,d,s,null)}}u&&Ae(e,n,"srcSet",s.srcSet,s,null),t&&Ae(e,n,"src",s.src,s,null);return;case"input":oe("invalid",e);var h=o=d=u=null,y=null,E=null;for(t in s)if(s.hasOwnProperty(t)){var w=s[t];if(w!=null)switch(t){case"name":u=w;break;case"type":d=w;break;case"checked":y=w;break;case"defaultChecked":E=w;break;case"value":o=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,n));break;default:Ae(e,n,t,w,s,null)}}Kf(e,o,h,y,E,d,u,!1);return;case"select":oe("invalid",e),t=d=o=null;for(u in s)if(s.hasOwnProperty(u)&&(h=s[u],h!=null))switch(u){case"value":o=h;break;case"defaultValue":d=h;break;case"multiple":t=h;default:Ae(e,n,u,h,s,null)}n=o,s=d,e.multiple=!!t,n!=null?Dt(e,!!t,n,!1):s!=null&&Dt(e,!!t,s,!0);return;case"textarea":oe("invalid",e),o=u=t=null;for(d in s)if(s.hasOwnProperty(d)&&(h=s[d],h!=null))switch(d){case"value":t=h;break;case"defaultValue":u=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:Ae(e,n,d,h,s,null)}Qf(e,t,u,o);return;case"option":for(y in s)s.hasOwnProperty(y)&&(t=s[y],t!=null)&&(y==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":Ae(e,n,y,t,s,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(t=0;t<oi.length;t++)oe(oi[t],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in s)if(s.hasOwnProperty(E)&&(t=s[E],t!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ae(e,n,E,t,s,null)}return;default:if(qr(n)){for(w in s)s.hasOwnProperty(w)&&(t=s[w],t!==void 0&&To(e,n,w,t,s,void 0));return}}for(h in s)s.hasOwnProperty(h)&&(t=s[h],t!=null&&Ae(e,n,h,t,s,null))}function Zp(e,n,s,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,d=null,h=null,y=null,E=null,w=null;for(L in s){var j=s[L];if(s.hasOwnProperty(L)&&j!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":y=j;default:t.hasOwnProperty(L)||Ae(e,n,L,null,t,j)}}for(var M in t){var L=t[M];if(j=s[M],t.hasOwnProperty(M)&&(L!=null||j!=null))switch(M){case"type":o=L;break;case"name":u=L;break;case"checked":E=L;break;case"defaultChecked":w=L;break;case"value":d=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,n));break;default:L!==j&&Ae(e,n,M,L,t,j)}}Ur(e,d,h,y,E,w,o,u);return;case"select":L=d=h=M=null;for(o in s)if(y=s[o],s.hasOwnProperty(o)&&y!=null)switch(o){case"value":break;case"multiple":L=y;default:t.hasOwnProperty(o)||Ae(e,n,o,null,t,y)}for(u in t)if(o=t[u],y=s[u],t.hasOwnProperty(u)&&(o!=null||y!=null))switch(u){case"value":M=o;break;case"defaultValue":h=o;break;case"multiple":d=o;default:o!==y&&Ae(e,n,u,o,t,y)}n=h,s=d,t=L,M!=null?Dt(e,!!s,M,!1):!!t!=!!s&&(n!=null?Dt(e,!!s,n,!0):Dt(e,!!s,s?[]:"",!1));return;case"textarea":L=M=null;for(h in s)if(u=s[h],s.hasOwnProperty(h)&&u!=null&&!t.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ae(e,n,h,null,t,u)}for(d in t)if(u=t[d],o=s[d],t.hasOwnProperty(d)&&(u!=null||o!=null))switch(d){case"value":M=u;break;case"defaultValue":L=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==o&&Ae(e,n,d,u,t,o)}Wf(e,M,L);return;case"option":for(var J in s)M=s[J],s.hasOwnProperty(J)&&M!=null&&!t.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ae(e,n,J,null,t,M));for(y in t)M=t[y],L=s[y],t.hasOwnProperty(y)&&M!==L&&(M!=null||L!=null)&&(y==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Ae(e,n,y,M,t,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)M=s[ee],s.hasOwnProperty(ee)&&M!=null&&!t.hasOwnProperty(ee)&&Ae(e,n,ee,null,t,M);for(E in t)if(M=t[E],L=s[E],t.hasOwnProperty(E)&&M!==L&&(M!=null||L!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:Ae(e,n,E,M,t,L)}return;default:if(qr(n)){for(var Ce in s)M=s[Ce],s.hasOwnProperty(Ce)&&M!==void 0&&!t.hasOwnProperty(Ce)&&To(e,n,Ce,void 0,t,M);for(w in t)M=t[w],L=s[w],!t.hasOwnProperty(w)||M===L||M===void 0&&L===void 0||To(e,n,w,M,t,L);return}}for(var z in s)M=s[z],s.hasOwnProperty(z)&&M!=null&&!t.hasOwnProperty(z)&&Ae(e,n,z,null,t,M);for(j in t)M=t[j],L=s[j],!t.hasOwnProperty(j)||M===L||M==null&&L==null||Ae(e,n,j,M,t,L)}function Fg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),t=0;t<s.length;t++){var u=s[t],o=u.transferSize,d=u.initiatorType,h=u.duration;if(o&&h&&Fg(d)){for(d=0,h=u.responseEnd,t+=1;t<s.length;t++){var y=s[t],E=y.startTime;if(E>h)break;var w=y.transferSize,j=y.initiatorType;w&&Fg(j)&&(y=y.responseEnd,d+=w*(y<h?1:(h-E)/(y-E)))}if(--t,n+=8*(o+d)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oo=null,Lo=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Do(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wo=null;function Kp(){var e=window.event;return e&&e.type==="popstate"?e===wo?!1:(wo=e,!0):(wo=null,!1)}var nh=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(e){return sh.resolve(null).then(e).catch(Vp)}:nh;function Vp(e){setTimeout(function(){throw e})}function Gs(e){return e==="head"}function th(e,n){var s=n,t=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(t===0){e.removeChild(u),ua(n);return}t--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")t++;else if(s==="html")ci(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ci(s);for(var o=s.firstChild;o;){var d=o.nextSibling,h=o.nodeName;o[La]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&o.rel.toLowerCase()==="stylesheet"||s.removeChild(o),o=d}}else s==="body"&&ci(e.ownerDocument.body);s=u}while(s);ua(n)}function ah(e,n){var s=e;e=0;do{var t=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),t&&t.nodeType===8)if(s=t.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=t}while(s)}function No(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":No(s),Br(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $p(e,n,s,t){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[La])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function Fp(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=jn(e.nextSibling),e===null))return null;return e}function ih(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=jn(e.nextSibling),e===null))return null;return e}function Yo(e){return e.data==="$?"||e.data==="$~"}function jo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Pp(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var t=function(){n(),s.removeEventListener("DOMContentLoaded",t)};s.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ho=null;function lh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return jn(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function rh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function uh(e,n,s){switch(n=Hl(s),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ci(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Br(e)}var Hn=new Map,oh=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vs=G.d;G.d={f:ey,r:ny,D:sy,C:ty,L:ay,m:iy,X:ry,S:ly,M:uy};function ey(){var e=vs.f(),n=Tl();return e||n}function ny(e){var n=Tt(e);n!==null&&n.tag===5&&n.type==="form"?Md(n):vs.r(e)}var ia=typeof document>"u"?null:document;function fh(e,n,s){var t=ia;if(t&&typeof n=="string"&&n){var u=Tn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),oh.has(u)||(oh.add(u),e={rel:e,crossOrigin:s,href:n},t.querySelector(u)===null&&(n=t.createElement("link"),Fe(n,"link",e),xe(n),t.head.appendChild(n)))}}function sy(e){vs.D(e),fh("dns-prefetch",e,null)}function ty(e,n){vs.C(e,n),fh("preconnect",e,n)}function ay(e,n,s){vs.L(e,n,s);var t=ia;if(t&&e&&n){var u='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Tn(s.imageSizes)+'"]')):u+='[href="'+Tn(e)+'"]';var o=u;switch(n){case"style":o=la(e);break;case"script":o=ra(e)}Hn.has(o)||(e=b({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Hn.set(o,e),t.querySelector(u)!==null||n==="style"&&t.querySelector(di(o))||n==="script"&&t.querySelector(gi(o))||(n=t.createElement("link"),Fe(n,"link",e),xe(n),t.head.appendChild(n)))}}function iy(e,n){vs.m(e,n);var s=ia;if(s&&e){var t=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Tn(t)+'"][href="'+Tn(e)+'"]',o=u;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ra(e)}if(!Hn.has(o)&&(e=b({rel:"modulepreload",href:e},n),Hn.set(o,e),s.querySelector(u)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(gi(o)))return}t=s.createElement("link"),Fe(t,"link",e),xe(t),s.head.appendChild(t)}}}function ly(e,n,s){vs.S(e,n,s);var t=ia;if(t&&e){var u=Ot(t).hoistableStyles,o=la(e);n=n||"default";var d=u.get(o);if(!d){var h={loading:0,preload:null};if(d=t.querySelector(di(o)))h.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Hn.get(o))&&Bo(e,s);var y=d=t.createElement("link");xe(y),Fe(y,"link",e),y._p=new Promise(function(E,w){y.onload=E,y.onerror=w}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Rl(d,n,t)}d={type:"stylesheet",instance:d,count:1,state:h},u.set(o,d)}}}function ry(e,n){vs.X(e,n);var s=ia;if(s&&e){var t=Ot(s).hoistableScripts,u=ra(e),o=t.get(u);o||(o=s.querySelector(gi(u)),o||(e=b({src:e,async:!0},n),(n=Hn.get(u))&&Ro(e,n),o=s.createElement("script"),xe(o),Fe(o,"link",e),s.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},t.set(u,o))}}function uy(e,n){vs.M(e,n);var s=ia;if(s&&e){var t=Ot(s).hoistableScripts,u=ra(e),o=t.get(u);o||(o=s.querySelector(gi(u)),o||(e=b({src:e,async:!0,type:"module"},n),(n=Hn.get(u))&&Ro(e,n),o=s.createElement("script"),xe(o),Fe(o,"link",e),s.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},t.set(u,o))}}function ch(e,n,s,t){var u=(u=re.current)?Bl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=la(s.href),s=Ot(u).hoistableStyles,t=s.get(n),t||(t={type:"style",instance:null,count:0,state:null},s.set(n,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=la(s.href);var o=Ot(u).hoistableStyles,d=o.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=u.querySelector(di(e)))&&!o._p&&(d.instance=o,d.state.loading=5),Hn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Hn.set(e,s),o||oy(u,e,s,d.state))),n&&t===null)throw Error(r(528,""));return d}if(n&&t!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ra(s),s=Ot(u).hoistableScripts,t=s.get(n),t||(t={type:"script",instance:null,count:0,state:null},s.set(n,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function la(e){return'href="'+Tn(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function dh(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function oy(e,n,s,t){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?t.loading=1:(n=e.createElement("link"),t.preload=n,n.addEventListener("load",function(){return t.loading|=1}),n.addEventListener("error",function(){return t.loading|=2}),Fe(n,"link",s),xe(n),e.head.appendChild(n))}function ra(e){return'[src="'+Tn(e)+'"]'}function gi(e){return"script[async]"+e}function gh(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var t=e.querySelector('style[data-href~="'+Tn(s.href)+'"]');if(t)return n.instance=t,xe(t),t;var u=b({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),xe(t),Fe(t,"style",u),Rl(t,s.precedence,e),n.instance=t;case"stylesheet":u=la(s.href);var o=e.querySelector(di(u));if(o)return n.state.loading|=4,n.instance=o,xe(o),o;t=dh(s),(u=Hn.get(u))&&Bo(t,u),o=(e.ownerDocument||e).createElement("link"),xe(o);var d=o;return d._p=new Promise(function(h,y){d.onload=h,d.onerror=y}),Fe(o,"link",t),n.state.loading|=4,Rl(o,s.precedence,e),n.instance=o;case"script":return o=ra(s.src),(u=e.querySelector(gi(o)))?(n.instance=u,xe(u),u):(t=s,(u=Hn.get(o))&&(t=b({},s),Ro(t,u)),e=e.ownerDocument||e,u=e.createElement("script"),xe(u),Fe(u,"link",t),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(t=n.instance,n.state.loading|=4,Rl(t,s.precedence,e));return n.instance}function Rl(e,n,s){for(var t=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=t.length?t[t.length-1]:null,o=u,d=0;d<t.length;d++){var h=t[d];if(h.dataset.precedence===n)o=h;else if(o!==u)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Bo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ro(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ul=null;function hh(e,n,s){if(Ul===null){var t=new Map,u=Ul=new Map;u.set(s,t)}else u=Ul,t=u.get(s),t||(t=new Map,u.set(s,t));if(t.has(e))return t;for(t.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var o=s[u];if(!(o[La]||o[We]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(n)||"";d=e+d;var h=t.get(d);h?h.push(o):t.set(d,[o])}}return t}function _h(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function fy(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cy(e,n,s,t){if(s.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=la(t.href),o=n.querySelector(di(u));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=o,xe(o);return}o=n.ownerDocument||n,t=dh(t),(u=Hn.get(u))&&Bo(t,u),o=o.createElement("link"),xe(o);var d=o;d._p=new Promise(function(h,y){d.onload=h,d.onerror=y}),Fe(o,"link",t),s.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Xl.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var Uo=0;function dy(e,n){return e.stylesheets&&e.count===0&&Gl(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var t=setTimeout(function(){if(e.stylesheets&&Gl(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&Uo===0&&(Uo=62500*Jp());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gl(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Uo?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(u)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Gl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,n.forEach(gy,e),ql=null,Xl.call(e))}function gy(e,n){if(!(n.state.loading&4)){var s=ql.get(e);if(s)var t=s.get(null);else{s=new Map,ql.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var d=u[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),t=d)}t&&s.set(null,t)}u=n.instance,d=u.getAttribute("data-precedence"),o=s.get(d)||t,o===t&&s.set(null,u),s.set(d,u),this.count++,t=Xl.bind(this),u.addEventListener("load",t),u.addEventListener("error",t),o?o.parentNode.insertBefore(u,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var hi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function hy(e,n,s,t,u,o,d,h,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.hiddenUpdates=Nr(null),this.identifierPrefix=t,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function ph(e,n,s,t,u,o,d,h,y,E,w,j){return e=new hy(e,n,s,d,y,E,w,j,h),n=1,o===!0&&(n|=24),o=vn(3,null,null,n),e.current=o,o.stateNode=e,n=mu(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:t,isDehydrated:s,cache:n},Su(o),e}function yh(e){return e?(e=Ut,e):Ut}function vh(e,n,s,t,u,o){u=yh(u),t.context===null?t.context=u:t.pendingContext=u,t=Ds(n),t.payload={element:s},o=o===void 0?null:o,o!==null&&(t.callback=o),s=ws(e,t,n),s!==null&&(dn(s,e,n),Ja(s,e,n))}function Sh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Xo(e,n){Sh(e,n),(e=e.alternate)&&Sh(e,n)}function bh(e){if(e.tag===13||e.tag===31){var n=at(e,67108864);n!==null&&dn(n,e,67108864),Xo(e,67108864)}}function zh(e){if(e.tag===13||e.tag===31){var n=Cn();n=Yr(n);var s=at(e,n);s!==null&&dn(s,e,n),Xo(e,n)}}var kl=!0;function _y(e,n,s,t){var u=N.T;N.T=null;var o=G.p;try{G.p=2,qo(e,n,s,t)}finally{G.p=o,N.T=u}}function my(e,n,s,t){var u=N.T;N.T=null;var o=G.p;try{G.p=8,qo(e,n,s,t)}finally{G.p=o,N.T=u}}function qo(e,n,s,t){if(kl){var u=Go(t);if(u===null)Mo(e,n,t,Il,s),Ch(e,t);else if(yy(u,e,n,s,t))t.stopPropagation();else if(Ch(e,t),n&4&&-1<py.indexOf(e)){for(;u!==null;){var o=Tt(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Ps(o.pendingLanes);if(d!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var y=1<<31-pn(d);h.entanglements[1]|=y,d&=~y}Vn(o),(me&6)===0&&(El=_n()+500,ui(0))}}break;case 31:case 13:h=at(o,2),h!==null&&dn(h,o,2),Tl(),Xo(o,2)}if(o=Go(t),o===null&&Mo(e,n,t,Il,s),o===u)break;u=o}u!==null&&t.stopPropagation()}else Mo(e,n,t,null,s)}}function Go(e){return e=kr(e),ko(e)}var Il=null;function ko(e){if(Il=null,e=Mt(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=g(n),e!==null)return e;e=null}else if(s===31){if(e=_(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Il=e,null}function Ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sm()){case wf:return 2;case Nf:return 8;case Ni:case tm:return 32;case Yf:return 268435456;default:return 32}default:return 32}}var Io=!1,ks=null,Is=null,xs=null,_i=new Map,mi=new Map,Zs=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,n){switch(e){case"focusin":case"focusout":ks=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":_i.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(n.pointerId)}}function pi(e,n,s,t,u,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:s,eventSystemFlags:t,nativeEvent:o,targetContainers:[u]},n!==null&&(n=Tt(n),n!==null&&bh(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function yy(e,n,s,t,u){switch(n){case"focusin":return ks=pi(ks,e,n,s,t,u),!0;case"dragenter":return Is=pi(Is,e,n,s,t,u),!0;case"mouseover":return xs=pi(xs,e,n,s,t,u),!0;case"pointerover":var o=u.pointerId;return _i.set(o,pi(_i.get(o)||null,e,n,s,t,u)),!0;case"gotpointercapture":return o=u.pointerId,mi.set(o,pi(mi.get(o)||null,e,n,s,t,u)),!0}return!1}function Eh(e){var n=Mt(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=g(s),n!==null){e.blockedOn=n,Xf(e.priority,function(){zh(s)});return}}else if(n===31){if(n=_(s),n!==null){e.blockedOn=n,Xf(e.priority,function(){zh(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Go(e.nativeEvent);if(s===null){s=e.nativeEvent;var t=new s.constructor(s.type,s);Gr=t,s.target.dispatchEvent(t),Gr=null}else return n=Tt(s),n!==null&&bh(n),e.blockedOn=s,!1;n.shift()}return!0}function Mh(e,n,s){xl(e)&&s.delete(n)}function vy(){Io=!1,ks!==null&&xl(ks)&&(ks=null),Is!==null&&xl(Is)&&(Is=null),xs!==null&&xl(xs)&&(xs=null),_i.forEach(Mh),mi.forEach(Mh)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Io||(Io=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,vy)))}var Jl=null;function Th(e){Jl!==e&&(Jl=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var n=0;n<e.length;n+=3){var s=e[n],t=e[n+1],u=e[n+2];if(typeof t!="function"){if(ko(t||s)===null)continue;break}var o=Tt(s);o!==null&&(e.splice(n,3),n-=3,qu(o,{pending:!0,data:u,method:s.method,action:t},t,u))}}))}function ua(e){function n(y){return Zl(y,e)}ks!==null&&Zl(ks,e),Is!==null&&Zl(Is,e),xs!==null&&Zl(xs,e),_i.forEach(n),mi.forEach(n);for(var s=0;s<Zs.length;s++){var t=Zs[s];t.blockedOn===e&&(t.blockedOn=null)}for(;0<Zs.length&&(s=Zs[0],s.blockedOn===null);)Eh(s),s.blockedOn===null&&Zs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(t=0;t<s.length;t+=3){var u=s[t],o=s[t+1],d=u[ln]||null;if(typeof o=="function")d||Th(s);else if(d){var h=null;if(o&&o.hasAttribute("formAction")){if(u=o,d=o[ln]||null)h=d.formAction;else if(ko(u)!==null)continue}else h=d.action;typeof h=="function"?s[t+1]=h:(s.splice(t,3),t-=3),Th(s)}}}function Oh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(d){return u=d})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),t||setTimeout(s,20)}function s(){if(!t&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xo(e){this._internalRoot=e}Kl.prototype.render=xo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,t=Cn();vh(s,t,e,n,null,null)},Kl.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vh(e.current,2,null,e,null,null),Tl(),n[Et]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Uf();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Zs.length&&n!==0&&n<Zs[s].priority;s++);Zs.splice(s,0,e),s===0&&Eh(e)}};var Lh=a.version;if(Lh!=="19.2.6")throw Error(r(527,Lh,"19.2.6"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var Sy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Ma=Wl.inject(Sy),mn=Wl}catch{}}return vi.createRoot=function(e,n){if(!f(e))throw Error(r(299));var s=!1,t="",u=Bd,o=Rd,d=Ud;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=ph(e,1,!1,null,null,s,t,null,u,o,d,Oh),e[Et]=n.current,Eo(e),new xo(n)},vi.hydrateRoot=function(e,n,s){if(!f(e))throw Error(r(299));var t=!1,u="",o=Bd,d=Rd,h=Ud,y=null;return s!=null&&(s.unstable_strictMode===!0&&(t=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(o=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(h=s.onRecoverableError),s.formState!==void 0&&(y=s.formState)),n=ph(e,1,!0,n,s??null,t,u,y,o,d,h,Oh),n.context=yh(null),s=n.current,t=Cn(),t=Yr(t),u=Ds(t),u.callback=null,ws(s,u,t),s=t,n.current.lanes=s,Oa(n,s),Vn(n),e[Et]=n.current,Eo(e),new Kl(n)},vi.version="19.2.6",vi}var Xh;function Ny(){if(Xh)return Ko.exports;Xh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),Ko.exports=wy(),Ko.exports}var Yy=Ny();const jy=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n_=(...i)=>i.filter((a,l,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===l).join(" ").trim();var Hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const By=Fn.forwardRef(({color:i="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:f="",children:c,iconNode:g,..._},p)=>Fn.createElement("svg",{ref:p,...Hy,width:a,height:a,stroke:i,strokeWidth:r?Number(l)*24/Number(a):l,className:n_("lucide",f),..._},[...g.map(([m,O])=>Fn.createElement(m,O)),...Array.isArray(c)?c:[c]]));const Ti=(i,a)=>{const l=Fn.forwardRef(({className:r,...f},c)=>Fn.createElement(By,{ref:c,iconNode:a,className:n_(`lucide-${jy(i)}`,r),...f}));return l.displayName=`${i}`,l};const s_=Ti("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const Ry=Ti("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const Uy=Ti("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const Xy=Ti("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);const qy=Ti("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]),Gy=`# Honors and awards — listed in reverse chronological order.
#
# Fields:
#   lang         [required] : "en" or "zh"
#   award        [required] : Award or honor name
#   organization [optional] : Awarding organization
#   year         [required] : Award year (number or string)
#   year_end     [optional] : End year for multi-year awards
#
# Output format:  Award Name, Organization ..... Year
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → each text field must be a {en: "...", zh: "..."} dict

- lang: zh
  award:
    en: "First Prize, Technical Invention Award"
    zh: "技术发明一等奖"
  organization:
    en: "Chinese Institute of Electronics"
    zh: "中国电子学会"
  year: 2025

- lang: en
  award: "Best Paper Award"
  organization: "18th International Conference on Service Science (ICSS 2025)"
  year: 2025

- lang: zh
  award:
    en: "Second Prize, Teaching Achievement Award"
    zh: "教学成果二等奖"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2025

- lang: zh
  award:
    en: "Teaching Excellence Award"
    zh: "教学优秀奖"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2025

- lang: zh
  award:
    en: "GMA Awards: AI Special Recognition"
    zh: "优秀课程奖（AI特别奖）"
  organization:
    en: "Global MOOC and Online Education Alliance"
    zh: "世界慕课与在线教育联盟"
  year: 2025

- lang: zh
  award:
    en: "First Prize, Technical Invention Award"
    zh: "技术发明一等奖"
  organization:
    en: "Chinese Institute of Electronics"
    zh: "中国电子学会"
  year: 2024

- lang: en
  award: "Distinguished Paper Award"
  organization: "21st International Conference on Service Oriented Computing (ICSOC 2023)"
  year: 2023

- lang: zh
  award:
    en: "Outstanding Project, AI-Assisted Curriculum Development"
    zh: "人工智能助推课程建设优秀课题"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2023

- lang: zh
  award:
    en: "Outstanding Class Advisor (Model)"
    zh: "优秀班主任标兵"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2023

- lang: zh
  award:
    en: "Outstanding Individual in Student Recruitment"
    zh: "招生先进个人"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2023

- lang: en
  award: "Technical Innovation Award"
  organization: "IEEE Technical Committee on Cloud Computing (TCCLD)"
  year: 2022

- lang: zh
  award:
    en: "Young Top Talent Program"
    zh: "青年拔尖人才计划"
  year: 2022

- lang: zh
  award:
    en: "Outstanding Class Advisor"
    zh: "优秀班主任"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2022

- lang: zh
  award:
    en: "Outstanding Teaching Team Award"
    zh: "优秀教学团队奖"
  organization:
    en: "Peking University"
    zh: "北京大学"
  year: 2022
`,ky=`# Education — listed in reverse chronological order.
#
# Fields:
#   lang         [required] : "en" or "zh"
#   degree       [required] : Degree name
#   honors       [optional] : Distinction or honors
#   major        [required] : Major or field of study
#   institution  [required] : University name
#   location     [required] : City, Country
#   start        [required] : Start year or YYYY-MM date
#   end          [required] : End year or YYYY-MM date
#   thesis       [optional] : Dissertation or thesis title
#   advisor      [optional] : Advisor name
#   committee    [optional] : Thesis committee members (comma-separated)
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → each text field must be a {en: "...", zh: "..."} dict

- lang: zh
  degree:
    en: "Doctor of Philosophy"
    zh: "博士"
  major:
    en: "Computer Software and Theory"
    zh: "计算机软件与理论"
  institution:
    en: "Peking University"
    zh: "北京大学"
  location:
    en: "Beijing, China"
    zh: "中国北京"
  start: "2011-09"
  end: "2017-07"
  advisor:
    en: "Prof. Hong Mei (Academician of CAS)"
    zh: "梅宏 院士"

- lang: zh
  degree:
    en: "Bachelor of Art (Dual Degree)"
    zh: "经济学学士（双学位）"
  major:
    en: "Economics"
    zh: "经济学"
  institution:
    en: "Peking University"
    zh: "北京大学"
  location:
    en: "Beijing, China"
    zh: "中国北京"
  start: "2008-09"
  end: "2011-07"

- lang: zh
  degree:
    en: "Bachelor of Science"
    zh: "理学学士"
  major:
    en: "Computer Science and Technology"
    zh: "计算机科学与技术"
  institution:
    en: "Peking University"
    zh: "北京大学"
  location:
    en: "Beijing, China"
    zh: "中国北京"
  start: "2007-09"
  end: "2011-07"
`,Iy=`# Professional experience — listed in reverse chronological order.
#
# Fields:
#   lang         [required] : "en" or "zh"
#   role         [required] : Job title or position name
#   department   [optional] : Department or school name
#   institution  [required] : University or organization name
#   location     [required] : City, Country
#   start        [required] : Start date, e.g. "2020-08" or "August 2020"
#   end          [required] : End date or null (null means "present")
#   description  [optional] : Short description for administrative roles
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → each text field must be a {en: "...", zh: "..."} dict

- lang: zh
  role:
    en: "Assistant Professor"
    zh: "助理教授"
  department:
    en: "Institute for Artificial Intelligence"
    zh: "人工智能研究院"
  institution:
    en: "Peking University"
    zh: "北京大学"
  location:
    en: "Beijing, China"
    zh: "中国北京"
  start: "2020-10"
  end: null

- lang: zh
  role:
    en: "Postdoc"
    zh: "博士后"
  department:
    en: "School of Software"
    zh: "软件学院"
  institution:
    en: "Tsinghua University"
    zh: "清华大学"
  location:
    en: "Beijing, China"
    zh: "中国北京"
  start: "2017-07"
  end: "2020-10"
  description:
    en: "Advisor: Prof. Yunhao Liu (Academician of CAS)"
    zh: "合作导师：刘云浩 院士"
`,xy=`# Research grants and funding — listed in reverse chronological order.
#
# Fields:
#   lang           [required] : "en" or "zh"
#   funder         [required] : Funding agency name
#   title          [required] : Project title
#   amount         [required] : Total funding amount
#   start          [required] : Start year or YYYY-MM
#   end            [required] : End year or YYYY-MM
#   role           [required] : Your role
#   collaborators  [optional] : Co-investigators
#   budget         [optional] : Your institution's share
#   award_number   [optional] : Grant number
#
# Bilingual note:
#   lang: zh → each text field must be a {en: "...", zh: "..."} dict

- lang: zh
  funder:
    en: "National Key Science and Technology Program of China"
    zh: "国家科技重大专项"
  title:
    en: "Simulation Environment Serving System for Multimodal and Agentic LLM Post-training"
    zh: "面向多模态与智能体的大模型后训练仿真环境服务系统"
  amount:
    en: "¥80,200,000"
    zh: "8020万元"
  start: "2025-12"
  end: "2028-11"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "National Natural Science Foundation of China (NSFC) — Major Research Program"
    zh: "国家自然科学基金重大项目"
  title:
    en: "Distributed Application and Combination Optimization of Data Elements for Emergency Scenarios"
    zh: "面向应急场景的数据要素分布式应用与组合优化"
  amount:
    en: "¥3,000,000"
    zh: "300万元"
  start: "2026-01"
  end: "2030-12"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "National Key R&D Program of China"
    zh: "国家重点研发计划"
  title:
    en: "Digital Object-based Clinical Data Identification and Exchange Technology"
    zh: "基于数字对象的医学临床数据标识和交换技术"
  amount:
    en: "¥7,100,000"
    zh: "710万元"
  start: "2021-12"
  end: "2024-11"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "Basic Strengthening Program"
    zh: "基础加强计划"
  title:
    en: "Intelligent Data Discovery across Data Spaces Based on Multi Agents"
    zh: "基于多智能体的跨数据空间数据智能发现技术"
  amount:
    en: "¥5,410,000"
    zh: "541万元"
  start: "2026-01"
  end: "2028-12"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "Beijing Natural Science Foundation — Xiaomi Joint Fund (Key Project)"
    zh: "北京市自然科学基金小米联合基金重点课题"
  title:
    en: "AI Inference Acceleration Technology for Edge Heterogeneous Hardware"
    zh: "端侧异构硬件感知的AI推理加速技术"
  amount:
    en: "¥1,000,000"
    zh: "100万元"
  start: "2025-07"
  end: "2029-06"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "Young Top Talent Program"
    zh: "青年拔尖人才计划"
  title:
    en: "Data-Centric Intelligent Software"
    zh: "数据为中心的智能化软件"
  amount:
    en: "¥1,900,000"
    zh: "190万元"
  start: "2023-01"
  end: "2025-12"
  role:
    en: "Principal Investigator"
    zh: "项目负责人"

- lang: zh
  funder:
    en: "National Natural Science Foundation of China (NSFC) — Young Scientists Fund"
    zh: "国家自然科学基金青年科学基金"
  title:
    en: "Data Intelligence Driven QoS Optimization for Ubiquitous Web Applications"
    zh: "数据智能驱动的泛在Web应用服务质量优化方法研究"
  amount:
    en: "¥300,000"
    zh: "30万元"
  start: "2022-01"
  end: "2024-12"
  role:
    en: "Principal Investigator"
    zh: "项目负责人"

- lang: zh
  funder:
    en: "National Key Laboratory of Data Space Technology and Systems — Open Fund"
    zh: "数据空间技术与系统全国重点实验室开放课题"
  title:
    en: "Adaptive Methods for Domain-Specific LLM Agents"
    zh: "垂类大模型智能体的自适应方法研究"
  amount:
    en: "¥500,000"
    zh: "50万元"
  start: "2025-11"
  end: "2027-11"
  role:
    en: "Principal Investigator"
    zh: "课题负责人"

- lang: zh
  funder:
    en: "Industry Collaboration — Huawei"
    zh: "企业合作—华为"
  title:
    en: "AI-based Web Cache Prefetching Strategy Optimization"
    zh: "基于AI算法的Web缓存预取策略优化技术"
  amount:
    en: "¥950,000"
    zh: "95万元"
  start: "2025-09"
  end: "2026-09"
  role:
    en: "Principal Investigator"
    zh: "主持人"

- lang: zh
  funder:
    en: "Industry Collaboration — National Medical Products Administration, Center for Drug Evaluation"
    zh: "企业合作—国家药品监督管理局药品审评中心"
  title:
    en: "Research on AI Application Scenarios in Drug Review"
    zh: "人工智能技术在药品审评中的应用场景研究"
  amount:
    en: "¥102,000"
    zh: "10.2万元"
  start: "2025-09"
  end: "2027-08"
  role:
    en: "Principal Investigator"
    zh: "主持人"

- lang: zh
  funder:
    en: "Industry Collaboration — Beijing Advanced Institute of Big Data"
    zh: "企业合作—北京大数据先进技术研究院"
  title:
    en: "Trusted Collaborative Technology for Medical Health Data via Decentralized Federated Learning"
    zh: "基于去中心化联邦学习的医疗健康数据可信协同技术"
  amount:
    en: "¥400,000"
    zh: "40万元"
  start: "2023-12"
  end: "2025-07"
  role:
    en: "Principal Investigator"
    zh: "主持人"

- lang: zh
  funder:
    en: "Industry Collaboration — Huawei"
    zh: "企业合作—华为"
  title:
    en: "Performance Analysis and Visual Optimization on Web Page Loading"
    zh: "Web页面加载性能分析与视觉优化技术"
  amount:
    en: "¥767,400"
    zh: "76.74万元"
  start: "2023-09"
  end: "2024-09"
  role:
    en: "Principal Investigator"
    zh: "主持人"

- lang: zh
  funder:
    en: "Industry Collaboration — Cancer Hospital, Chinese Academy of Medical Sciences"
    zh: "企业合作—中国医学科学院肿瘤医院"
  title:
    en: "Intelligent Decision Support System for Catheter-related Thrombosis Prevention in Cancer Patients"
    zh: "肿瘤患者导管相关血栓防治的智能决策支持系统研发"
  amount:
    en: "¥120,000"
    zh: "12万元"
  start: "2022-10"
  end: "2024-09"
  role:
    en: "Principal Investigator"
    zh: "主持人"

- lang: zh
  funder:
    en: "Alibaba Innovative Research Program"
    zh: "阿里巴巴创新研究计划"
  title:
    en: "Runtime Fault Detection for Mobile Applications via User Page Access Log Mining"
    zh: "基于用户页面访问轨迹挖掘的移动应用运行时故障检测"
  amount:
    en: "¥476,100"
    zh: "47.61万元"
  start: "2021-02"
  end: "2023-02"
  role:
    en: "Principal Investigator"
    zh: "主持人"
`,Zy=`# News items for the website home page.
#
# Fields:
#   date   [required] : Display date or year, e.g. "2026", "2026-05", "May 2026"
#   title  [required] : News headline
#   detail [optional] : Short supporting text
#   link   [optional] : Hash route or URL, e.g. "#/publications", "#/grants"

- date: "2026/05"
  title: "Invited keynote at the 2nd Forum on Higher Education Reform and Development for Building a Leading Country in Education"
  detail: ""
  link: ""

- date: "2026/05"
  title: "Two papers accepted to ICML 2026"
  detail: ""
  link: "#/publications"

- date: "2026/04"
  title: "Our paper accepted to SIGIR 2026"
  detail: ""
  link: "#/publications"

- date: "2026/03"
  title: "Our project received the 2025 First Prize of Technical Invention from the Chinese Institute of Electronics"
  detail: ""
  link: "#/awards"

- date: "2026/01"
  title: "Two papers accepted to ICLR 2026"
  detail: ""
  link: "#/publications"

- date: "2026/01"
  title: "Our paper accepted to WWW 2026"
  detail: ""
  link: "#/publications"
`,Jy=`# Patents — reverse chronological order.
# IDs auto-assigned as [PAT1], [PAT2], ... unless  id  is set.
# See publications/journals.yaml for the full author (inventor) field schema.
#
# Fields:
#   inventors  : list of author dicts (same format as publication authors)
#   title      : Patent title
#   country    : Country / patent office
#   type       : Patent type (e.g., "Utility Patent", "发明专利")
#   patent_number : Patent number
#   year       : Grant year
#   status     : "granted", "pending", "已授权", etc. (optional)
- disabled: true

# - lang: en
#   id: "PAT2"
#   inventors:
#     - name: "Your Name"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name: "Zhang, W."
#       is_self: false
#       is_corresponding: false
#       is_student: true
#     - name: "Li, X."
#       is_self: false
#       is_corresponding: false
#       is_student: false
#   title: "System and Method for Automated Program Repair"
#   country: "United States"
#   type: "Utility Patent"
#   patent_number: "US11,234,567"
#   year: 2023
#   status: "granted"

# - lang: zh
#   id: "PAT1"
#   inventors:
#     - name:
#         en: "Your Name"
#         zh: "您的姓名"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name:
#         en: "Li Wei"
#         zh: "李伟"
#       is_self: false
#       is_corresponding: false
#       is_student: true
#     - name:
#         en: "Zhang San"
#         zh: "张三"
#       is_self: false
#       is_corresponding: false
#       is_student: false
#   title:
#     en: "Automated Software Defect Detection Method and System"
#     zh: "一种自动化软件缺陷检测方法及系统"
#   country:
#     en: "China"
#     zh: "中国"
#   type:
#     en: "Invention Patent"
#     zh: "发明专利"
#   patent_number: "ZL202XXXXXXXXX.X"
#   year: 2022
#   status:
#     en: "granted"
#     zh: "已授权"
`,Ky=`# Personal information — rendered as the CV header.
#
# All fields support bilingual values:
#   field: "plain string"        ← lang: en style
#   field:
#     en: "English value"
#     zh: "中文值"               ← bilingual style

name:
  en: "Yun Ma"
  zh: "马郓"

title:
  en: "Assistant Professor"
  zh: "助理教授"

department:
  en: "Institute for Artificial Intelligence"
  zh: "人工智能研究院"

institution:
  en: "Peking University"
  zh: "北京大学"

address:
  en: "No. 5 Yiheyuan Road, Beijing, China"
  zh: "北京市海淀区颐和园路5号"

phone: "+86-13810295842"
fax: ""
email: "mayun@pku.edu.cn"
website: ""
orcid: ""
`,Wy=`# Book chapters — reverse chronological order.
# IDs auto-assigned as [B1], [B2], ... unless  id  is set.
# See journals.yaml for the full author field schema.
#
# Fields:
#   lang       [required] : "en" or "zh"
#   id         [optional] : Override auto-assigned ID (e.g., "B2")
#   authors    [required] : Author list (see journals.yaml)
#   title      [required] : Chapter title
#   book       [required] : Book title
#   editors    [optional] : Editor(s) name(s)
#   publisher  [required] : Publisher name
#   isbn       [optional] : ISBN
#   year       [required] : Publication year (number)
#   pages      [optional] : Page range
#   notes      [optional] : Extra info
#
# Bilingual note:
#   lang: zh → title, book, editors, publisher, notes can be {en: "...", zh: "..."} dicts

- disabled: true

# ── lang: en example ──────────────────────────────────────────────────────────
# - lang: en
#   id: "B2"
#   authors:
#     - name: "Your Name"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name: "Li, X."
#       is_self: false
#       is_corresponding: false
#       is_student: true
#   title: "Neural Approaches to Automated Bug Fixing"
#   book: "Advances in Software Engineering: AI and Automation"
#   editors: "Smith, J. and Brown, K."
#   publisher: "Springer"
#   isbn: "978-3-030-XXXXX-X"
#   year: 2023
#   pages: "45-80"

# # ── lang: zh example (bilingual fields) ───────────────────────────────────────
# - lang: zh
#   id: "B1"
#   authors:
#     - name:
#         en: "Your Name"
#         zh: "您的姓名"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name:
#         en: "Li Wei"
#         zh: "李伟"
#       is_self: false
#       is_corresponding: false
#       is_student: true
#   title:
#     en: "Automated Software Testing Methods"
#     zh: "自动化软件测试方法"
#   book:
#     en: "Frontiers of Software Engineering Research"
#     zh: "软件工程研究前沿"
#   editors:
#     en: "Wang Da (Ed.)"
#     zh: "王达（主编）"
#   publisher:
#     en: "Science Press"
#     zh: "科学出版社"
#   isbn: "978-7-03-XXXXXX-X"
#   year: 2021
#   pages: "123-165"
`,Qy=`# Conference papers — reverse chronological order.\r
# IDs auto-assigned as [C1], [C2], ... unless  id  is set.\r
# See journals.yaml for the full author field schema.\r
#\r
# Fields: lang, id(opt), authors, title, conference, conference_short(opt),\r
#         location, month(opt), year, pages(opt), acceptance_rate(opt),\r
#         award(opt), notes(opt)\r
\r
# ════════════════════════════════════════════════════════════════ 2026 ══════\r
- lang: en\r
  authors:\r
    - {name: "Wenchun Jing", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haoran Wang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qi Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Ningyuan Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ning Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "MCP-Focus: Leveraging Function-Oriented Document Enhancement for MCP Server Retrieval"\r
  conference: "49th International ACM SIGIR Conference on Research and Development in Information Retrieval"\r
  conference_short: "SIGIR 2026"\r
  year: 2026\r
  notes: "Accepted to appear"\r
\r
- lang: en\r
  authors:\r
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Chongyang Pan", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "LaTune: Lightweight and Adaptive Configuration Tuning for LLM Inference on Edge Devices"
  conference: "ACM Web Conference"
  conference_short: "WWW 2026"
  year: 2026
  pages: "5404-5414"
\r
- lang: en\r
  authors:\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Ruibo An", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Characterizing GPU-accelerated Web Applications in Browsers"
  conference: "48th IEEE/ACM International Conference on Software Engineering"
  conference_short: "ICSE 2026"
  year: 2026
\r
- lang: en\r
  authors:\r
    - {name: "Zhengwei Tao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Baixuan Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Wenbiao Yin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jialong Wu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kuan Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhongwang Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Huifeng Yin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Rui Ye", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Zhiqiang Gao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Wentao Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yong Jiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Pengjun Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Fei Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jingren Zhou", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Empowering Efficiency and Efficacy in WebAgent via Enabling Info-Rich Seeking"
  conference: "14th International Conference on Learning Representations"
  conference_short: "ICLR 2026"
  year: 2026
\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xiaojun Ma", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Yuhang Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qin Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "ROGA: Scaling Generalist Agents for Office Productivity Tasks via Tool Generation"
  conference: "14th International Conference on Learning Representations"
  conference_short: "ICLR 2026"
  year: 2026
\r
- lang: en\r
  authors:\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Hang Yan", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhongshi Xing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yuxiang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jiuzheng Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "DRAGON: Domain-specific Robust Automatic Data Generation for RAG Optimization"
  conference: "Findings of the Association for Computational Linguistics: EACL 2026"
  conference_short: "Findings of EACL 2026"
  year: 2026
  pages: "1065-1078"
\r
# ════════════════════════════════════════════════════════════════ 2025 ══════\r
- lang: en\r
  authors:\r
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yiyang Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mark Harman", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yihong Dong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ge Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "LLM-Powered Test Case Generation for Detecting Bugs in Plausible Programs"\r
  conference: "63rd Annual Meeting of the Association for Computational Linguistics"\r
  conference_short: "ACL 2025"\r
  location: "Vienna, Austria"\r
  year: 2025\r
  pages: "430-440"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yaoqi Guo", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yang Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Personality-Guided Code Generation Using Large Language Models"\r
  conference: "63rd Annual Meeting of the Association for Computational Linguistics"\r
  conference_short: "ACL 2025"\r
  location: "Vienna, Austria"\r
  year: 2025\r
  pages: "1068-1080"\r
\r
- lang: en\r
  authors:\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Desong Meng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Dongqi Cai", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Sheng Qi", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Li Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "ShortcutsBench: A Large-Scale Real-world Benchmark for API-based Agents"\r
  conference: "13th International Conference on Learning Representations"\r
  conference_short: "ICLR 2025"\r
  location: "Singapore"\r
  year: 2025\r
\r
- lang: en\r
  authors:\r
    - {name: "Yuheng Zheng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jienan Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Bin Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
  title: "Scheduling Strategy for Deep Learning Training Jobs Based on Multi-Resource Interleaving"\r
  conference: "IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2025"\r
  year: 2025\r
  pages: "899-901"\r
\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "WebANNS: Fast and Efficient Approximate Nearest Neighbor Search in Web Browsers"\r
  conference: "48th International ACM SIGIR Conference on Research and Development in Information Retrieval"\r
  conference_short: "SIGIR 2025"\r
  location: "Padua, Italy"\r
  year: 2025\r
  pages: "2483-2492"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Ruibo An", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "GL2GPU: Accelerating WebGL Applications via Dynamic API Translation to WebGPU"\r
  conference: "ACM Web Conference"\r
  conference_short: "WWW 2025"\r
  location: "Sydney, Australia"\r
  year: 2025\r
  pages: "751-762"\r
\r
- lang: en\r
  authors:\r
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
  title: "WeInfer: Unleashing the Power of WebGPU on LLM Inference in Web Browsers"\r
  conference: "ACM Web Conference"\r
  conference_short: "WWW 2025"\r
  location: "Sydney, Australia"\r
  year: 2025\r
  pages: "4264-4273"\r
\r
- lang: en\r
  authors:\r
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Bangjun Xiao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Young Soo Ko", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Haiou Jiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kun Liu", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "HierCust: Hierarchical Model Customization for Federated Learning as a Service on Heterogeneous Edge Devices"\r
  conference: "18th International Conference on Service Science"\r
  conference_short: "ICSS 2025"\r
  year: 2025\r
  pages: "475-492"\r
  award: "Best Paper Award"\r
\r
- lang: en\r
  authors:\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhongshi Xing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "EasIPA: Enhancing LLM's Ability to Select APIs for IPA"\r
  conference: "18th International Conference on Service Science"\r
  conference_short: "ICSS 2025"\r
  year: 2025\r
  pages: "34-48"\r
\r
# ════════════════════════════════════════════════════════════════ 2024 ══════\r
- lang: en\r
  authors:\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Characterizing the Developer Groups for Metaverse Services in Roblox"\r
  conference: "IEEE International Conference on Software Services Engineering"\r
  conference_short: "SSE 2024"\r
  year: 2024\r
  pages: "214-220"\r
\r
- lang: en\r
  authors:\r
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Demystifying Swarm Learning: An Emerging Decentralized Federated Learning System"\r
  conference: "24th IEEE International Symposium on Cluster, Cloud and Internet Computing"\r
  conference_short: "CCGrid 2024"\r
  location: "Philadelphia, USA"\r
  year: 2024\r
  pages: "367-373"\r
\r
- lang: en\r
  authors:\r
    - {name: "Hanlin Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yan Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A Blockchain-Based Trust Framework for Service-Oriented Architecture"\r
  conference: "2024 IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2024"\r
  year: 2024\r
  pages: "437-446"\r
\r
- lang: en\r
  authors:\r
    - {name: "Wenchun Jing", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Jingru Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}\r
  title: "MeDiC: Metasearch Service on Distributed Confidential Data"\r
  conference: "2024 IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2024"\r
  year: 2024\r
  pages: "1279-1285"\r
\r
- lang: en\r
  authors:\r
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yiyang Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Federica Sarro", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "TrickyBugs: A Dataset of Corner-case Bugs in Plausible Programs"\r
  conference: "21st IEEE/ACM International Conference on Mining Software Repositories"\r
  conference_short: "MSR 2024"\r
  year: 2024\r
  pages: "113-117"\r
\r
- lang: en\r
  authors:\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yifan Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Jiaqi Du", is_self: false, is_corresponding: false, is_student: true}\r
  title: "FusionRender: Harnessing WebGPU's Power for Enhanced Graphics Performance on Web Browsers"\r
  conference: "ACM Web Conference"\r
  conference_short: "WWW 2024"\r
  location: "Singapore"\r
  year: 2024\r
  pages: "2890-2901"\r
\r
- lang: en\r
  authors:\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zijian Shao", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Jiaqi Du", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yuan Wei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Lijuan Guo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tianchen Wu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shuang Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Web-Based AI Assistant for Medical Imaging: A Case Study on Predicting Spontaneous Preterm Birth via Ultrasound Images"\r
  conference: "International Conference on Web Information Systems Engineering"\r
  conference_short: "WISE 2024"\r
  year: 2024\r
  pages: "301-312"\r
\r
# ════════════════════════════════════════════════════════════════ 2023 ══════\r
- lang: en\r
  authors:\r
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Jie Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Federica Sarro", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mark Harman", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Who Judges the Judge: An Empirical Study on Online Judge Tests"\r
  conference: "32nd ACM SIGSOFT International Symposium on Software Testing and Analysis"\r
  conference_short: "ISSTA 2023"\r
  location: "Seattle, USA"\r
  year: 2023\r
  pages: "334-346"\r
\r
- lang: en\r
  authors:\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mingtao Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Demystifying Mobile Extended Reality in Web Browsers: How Far Can We Go?"\r
  conference: "ACM Web Conference"\r
  conference_short: "WWW 2023"\r
  location: "Austin, USA"\r
  year: 2023\r
  pages: "2960-2969"\r
\r
- lang: en\r
  authors:\r
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qing Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Niagara: Scheduling DNN Inference Services on Heterogeneous Edge Processors"\r
  conference: "21st International Conference on Service Oriented Computing"\r
  conference_short: "ICSOC 2023"\r
  year: 2023\r
  pages: "67-85"\r
  award: "Distinguished Paper Award"\r
\r
- lang: en\r
  authors:\r
    - {name: "Junyi Shu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ruidong Zhu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Disaggregated RAID Storage in Modern Datacenters"\r
  conference: "28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems"\r
  conference_short: "ASPLOS 2023"\r
  location: "Vancouver, Canada"\r
  year: 2023\r
  pages: "147-163"\r
\r
- lang: en\r
  authors:\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xiaoling Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Tong Jia", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tengfei He", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shenghua Luo", is_self: false, is_corresponding: false, is_student: false}\r
  title: "ADPal: Automatic Detection of Troubled Users in Online Service Systems via Page Access Logs"\r
  conference: "2023 IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2023"\r
  year: 2023\r
  pages: "638-646"\r
\r
# ════════════════════════════════════════════════════════════════ 2022 ══════\r
- lang: en\r
  authors:\r
    - {name: "Changlin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hanlin Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tianming Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}\r
  title: "PROMAL: Precise Window Transition Graphs for Android via Synergy of Program Analysis and Machine Learning"\r
  conference: "44th IEEE/ACM International Conference on Software Engineering"\r
  conference_short: "ICSE 2022"\r
  location: "Pittsburgh, USA"\r
  year: 2022\r
  pages: "1755-1767"\r
\r
- lang: en\r
  authors:\r
    - {name: "Qiyang Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiang Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiangying Che", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiao Ma", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ao Zhou", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A Comprehensive Benchmark of Deep Learning Libraries on Mobile Devices"\r
  conference: "ACM Web Conference"\r
  conference_short: "WWW 2022"\r
  location: "Virtual"\r
  year: 2022\r
  pages: "3298-3307"\r
\r
- lang: en\r
  authors:\r
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Mandheling: Mixed-precision On-device DNN Training with DSP Offloading"\r
  conference: "28th Annual International Conference on Mobile Computing and Networking"\r
  conference_short: "MobiCom 2022"\r
  location: "Sydney, Australia"\r
  year: 2022\r
  pages: "214-227"\r
\r
- lang: en\r
  authors:\r
    - {name: "Haiou Jiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Keming Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xinjian Ma", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yanchun Sun", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Suspicious Customer Detection on the Blockchain Network for Cryptocurrency Exchanges"\r
  conference: "2nd Workshop on Blockchain and Smart Contract Security"\r
  conference_short: "BlockSys 2022"\r
  year: 2022\r
  pages: "265-277"\r
\r
- lang: en\r
  authors:\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xinran Dong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
  title: "Understanding the Impact of Visual Factors on the Experience of Loading Web Apps"\r
  conference: "14th Asia-Pacific Symposium on Internetware"\r
  conference_short: "Internetware 2022"\r
  year: 2022\r
  pages: "10-15"\r
\r
# ════════════════════════════════════════════════════════════════ 2021 ══════\r
- lang: en\r
  authors:\r
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "DeepRec: On-device Deep Learning for Privacy-Preserving Sequential Recommendation in Mobile Commerce"\r
  conference: "2021 World Wide Web Conference"\r
  conference_short: "WWW 2021"\r
  location: "Ljubljana, Slovenia (Virtual)"\r
  year: 2021\r
  pages: "900-911"\r
\r
- lang: en\r
  authors:\r
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yiling Lou", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: true, is_student: false}\r
  title: "An Empirical Study on Challenges of Application Development in Serverless Computing"\r
  conference: "29th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering"\r
  conference_short: "ESEC/FSE 2021"\r
  year: 2021\r
  pages: "416-428"\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kaidong Wu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Su Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Huaqian Cai", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "BDLedger: A Scalable Distributed Ledger for Large-Scale Data Recording"\r
  conference: "1st Workshop on Blockchain and Smart Contract Security"\r
  conference_short: "BlockSys 2021"\r
  year: 2021\r
  pages: "87-100"\r
\r
# ════════════════════════════════════════════════════════════════ 2020 ═══\r
- lang: en\r
  authors:\r
    - {name: "Shuyu Zheng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Fuqi Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yulian Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hongfei Deng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jun Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing Service Access Patterns under Heterogeneous Clients"\r
  conference: "2020 IEEE International Conference on Services Computing"\r
  conference_short: "SCC 2020"\r
  year: 2020\r
  pages: "57-59"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2019 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Dongwei Xiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shuyu Zheng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Moving Deep Learning into Web Browser: How Far Can We Go?"\r
  conference: "2019 World Wide Web Conference"\r
  conference_short: "WWW 2019"\r
  year: 2019\r
  pages: "1234-1244"\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kaidong Wu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Software-Defined Infrastructure for Decentralized Data Lifecycle Governance: Principled Design and Open Challenges"\r
  conference: "39th IEEE International Conference on Distributed Computing Systems"\r
  conference_short: "ICDCS 2019"\r
  year: 2019\r
  pages: "1674-1683"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Enze Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A First Look at Instant Service Consumption with Quick Apps on Mobile Devices"\r
  conference: "2019 IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2019"\r
  year: 2019\r
  pages: "328-335"\r
\r
- lang: en\r
  authors:\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Understanding Quality of Experiences on Different Mobile Browsers"\r
  conference: "11th Asia-Pacific Symposium on Internetware"\r
  conference_short: "Internetware 2019"\r
  year: 2019\r
  pages: "1:1-1:10"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xia Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Liang He", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yangyang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Wenyao Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Cong Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "PIFA: An Intelligent Phase Identification and Frequency Adjustment Framework for Time-Sensitive Mobile Computing"\r
  conference: "25th IEEE Real-Time and Embedded Technology and Applications Symposium"\r
  conference_short: "RTAS 2019"\r
  year: 2019\r
  pages: "54-64"\r
\r
- lang: en\r
  authors:\r
    - {name: "Shuyu Zheng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "FaceOff: Assisting the Manifestation Design of Web Graphical User Interface"\r
  conference: "12th ACM International Conference on Web Search and Data Mining"\r
  conference_short: "WSDM 2019"\r
  year: 2019\r
  pages: "774-777"\r
\r
- lang: en\r
  authors:\r
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangchen Du", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "LinkRadar: Assisting the Analysis of Inter-app Page Links via Transfer Learning"\r
  conference: "28th ACM International Conference on Information and Knowledge Management"\r
  conference_short: "CIKM 2019"\r
  year: 2019\r
  pages: "2077-2080"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2018 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Aladdin: Automating Release of Deep-Link APIs on Android"\r
  conference: "2018 World Wide Web Conference"\r
  conference_short: "WWW 2018"\r
  year: 2018\r
  pages: "1469-1478"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Felix Xiaozhu Lin", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Rethinking Resource Management in Mobile Web: Measurement, Deployment, and Runtime"\r
  conference: "38th IEEE International Conference on Distributed Computing Systems"\r
  conference_short: "ICDCS 2018"\r
  year: 2018\r
  pages: "1347-1356"\r
\r
- lang: en\r
  authors:\r
    - {name: "Minchen Zhu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xinshu Ye", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Runtime Knowledge Graph Based Approach to Smart Home Application Development"\r
  conference: "2018 IEEE International Congress on Internet of Things"\r
  conference_short: "ICIOT 2018"\r
  year: 2018\r
  pages: "110-117"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2017 ═══\r
- lang: en\r
  authors:\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Felix Xiaozhu Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "AppHolmes: Detecting and Characterizing App Collusion among Third-Party Android Markets"\r
  conference: "26th International World Wide Web Conference"\r
  conference_short: "WWW 2017"\r
  year: 2017\r
  pages: "143-152"\r
\r
- lang: en\r
  authors:\r
    - {name: "Meihua Yu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiangqun Chen", is_self: false, is_corresponding: false, is_student: false}\r
  title: "AgileRabbit: A Feedback-Driven Offloading Middleware for Smartwatch Apps"\r
  conference: "9th Asia-Pacific Symposium on Internetware"\r
  conference_short: "Internetware 2017"\r
  year: 2017\r
  pages: "6:1-6:10"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2016 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Can HTTP/2 Really Help Web Performance on Smartphones?"\r
  conference: "International Conference on Services Computing"\r
  conference_short: "SCC 2016"\r
  year: 2016\r
  pages: "219-226"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2015 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shuhui Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ruirui Xiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Measurement and Analysis of Mobile Web Cache Performance"\r
  conference: "24th International World Wide Web Conference"\r
  conference_short: "WWW 2015"\r
  year: 2015\r
  pages: "691-701"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhen Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Carpet: Automating Collaborative Web-based Process across Multiple Devices by Capture-and-Replay"\r
  conference: "39th Annual International Computers, Software & Applications Conference"\r
  conference_short: "COMPSAC 2015"\r
  year: 2015\r
  pages: "676-685"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Meihua Yu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Feng Feng", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Mash Droid: An Approach to Mobile-Oriented Dynamic Services Discovery and Composition by In-App Search"\r
  conference: "22nd IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2015"\r
  year: 2015\r
  pages: "725-730"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zibin Zheng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "M. Brian Blake", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing RESTFul Web Services Usage on Smartphones: A Tale of Native Apps and Web Apps"\r
  conference: "22nd IEEE International Conference on Web Services"\r
  conference_short: "ICWS 2015"\r
  year: 2015\r
  pages: "337-344"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2014 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shuhui Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing Cache Usage for Mobile Web Applications"\r
  conference: "6th Asia-Pacific Symposium on Internetware"\r
  conference_short: "Internetware 2014"\r
  year: 2014\r
  pages: "68-71"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2013 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yihan Wu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Paul Grace", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Model-Based Management of Service Composition"\r
  conference: "7th International Symposium on Service-Oriented System Engineering"\r
  conference_short: "SOSE 2013"\r
  year: 2013\r
  pages: "103-112"\r
`,Vy=`# Journal articles — reverse chronological order (most recent first).\r
# IDs auto-assigned as [J1], [J2], ... unless the  id  field is set.\r
#\r
# Author list format:\r
#   authors:\r
#     - name: "First Last"      # plain string for lang:en; {en:..., zh:...} for lang:zh\r
#       is_self: false           # true → bold\r
#       is_corresponding: false  # true → superscript ∗\r
#       is_student: false        # true → underline\r
#\r
# Fields: lang, id(opt), authors, title, journal, journal_short(opt),\r
#         volume(opt), number(opt), month(opt), year, pages(opt),\r
#         award(opt), notes(opt)\r
\r
# ════════════════════════════════════════════════════════════════ 2026 ══════\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "A First Look at Bugs in LLM Inference Engines"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  year: 2026\r
  notes: "online published"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Ningyu He", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jianting Gao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangtong Cao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "DrWASI: LLM-assisted Differential Testing for WebAssembly System Interface Implementations"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "35"\r
  number: "2"\r
  year: 2026\r
  pages: "44:1-44:25"\r
\r
# ════════════════════════════════════════════════════════════════ 2025 ══════\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "WebAssembly for Container Runtime: Are We There Yet?"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "34"\r
  number: "6"\r
  year: 2025\r
  pages: "174:1-174:22"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Research on WebAssembly Runtimes: A Survey"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "34"\r
  number: "8"\r
  year: 2025\r
  pages: "239:1-239:47"\r
\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Fuqi Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Qingxiang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gareth Tyson", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing the App Recommendation Relationships in the iOS App Store: A Complex Network's Perspective"\r
  journal: "SCIENCE CHINA Information Sciences"\r
  volume: "68"\r
  number: "4"\r
  year: 2025\r
  pages: "142101"\r
\r
- lang: en\r
  authors:\r
    - {name: "Ding Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jifan Xiao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Peng Jiang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jiaping Gui", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Dongjin Song", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "ProvAudit: Enhance High-Level Privacy Inference Through System Provenance Data"\r
  journal: "IEEE Transactions on Dependable and Secure Computing"\r
  journal_short: "TDSC"\r
  volume: "22"\r
  number: "3"\r
  year: 2025\r
  pages: "3046-3062"\r
\r
- lang: en\r
  authors:\r
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shiqi Jiang", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Xu Cao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yuanchun Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Aoyu Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Ting Cao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Anatomizing Deep Learning Inference in Web Browsers"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "34"\r
  number: "2"\r
  year: 2025\r
  pages: "47:1-47:43"\r
\r
\r
- lang: en\r
  authors:\r
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "DegaFL: Decentralized Gradient Aggregation for Cross-Silo Federated Learning"\r
  journal: "IEEE Transactions on Parallel and Distributed Systems"\r
  journal_short: "TPDS"\r
  volume: "36"\r
  number: "2"\r
  year: 2025\r
  pages: "212-225"\r
\r
- lang: en\r
  authors:\r
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jie Weng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A Game-Based Computation Offloading with Imperfect Information in Multi-Edge Environments"\r
  journal: "IEEE Transactions on Services Computing"\r
  journal_short: "TSC"\r
  volume: "18"\r
  number: "1"\r
  year: 2025\r
  pages: "1-14"\r
\r
- lang: en\r
  authors:\r
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qing Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qun Wei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Niagara+: Scheduling Live ML Analytics Across Heterogeneous Device Processors and Edge Servers"\r
  journal: "IEEE Transactions on Services Computing"\r
  journal_short: "TSC"\r
  volume: "18"\r
  number: "6"\r
  year: 2025\r
  pages: "4055-4068"\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Xiaolong Huang", zh: "黄小龙"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Jingru Yang", zh: "杨婧如"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yi Liu", zh: "柳熠"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xiang Jing", zh: "景翔"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Gang Huang", zh: "黄罡"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "ReproLink: A Scientific Research Data Management System for Reproducibility"\r
    zh: "ReproLink:面向可复现性的科研数据管理系统"\r
  journal:\r
    en: "Journal of Software"\r
    zh: "软件学报"\r
  journal_short:\r
    en: "JOS"\r
    zh: "软件学报"\r
  volume: "36"\r
  number: "12"\r
  year: 2025\r
  pages: "5801-5820"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
# ════════════════════════════════════════════════════════════════ 2024 ══════\r
- lang: en\r
  authors:\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhen Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunshan Jia", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "SDCC: Software-defined Collective Communication for Distributed Training"\r
  journal: "SCIENCE CHINA Information Sciences"\r
  volume: "67"\r
  number: "9"\r
  year: 2024\r
  pages: "192104:1-192104:21"\r
\r
- lang: en\r
  authors:\r
    - {name: "Chengxu Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Kaigui Bian", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "FLASH: Heterogeneity-Aware Federated Learning at Scale"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "23"\r
  number: "1"\r
  year: 2024\r
  pages: "483-500"\r
  notes: "ESI Highly Cited Paper"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ming Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hao Zhong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiaona Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "FUNOff: Offloading Applications at Function Granularity for Mobile Edge Computing"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "23"\r
  number: "2"\r
  year: 2024\r
  pages: "1717-1734"\r
\r
- lang: en\r
  authors:\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Haochen Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "WPIA: Accelerating DNN Warm-up in Web Browsers by Precompiling WebGL Programs"\r
  journal: "Frontiers of Computer Science"\r
  journal_short: "FCS"\r
  volume: "18"\r
  number: "6"\r
  year: 2024\r
  pages: "186211"\r
\r
- lang: en\r
  authors:\r
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuzhan Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Neal N. Xiong", is_self: false, is_corresponding: false, is_student: false}\r
  title: "SGCS: An Intelligent Stackelberg-Game-Based Computation Offloading and Resource Pricing Scheme in Blockchain-Enabled MEC for IIoT"\r
  journal: "IEEE Internet of Things Journal"\r
  journal_short: "IoT-J"\r
  volume: "11"\r
  number: "16"\r
  year: 2024\r
  pages: "26727-26740"\r
\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Xiaolong Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Wei He", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yibing Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "Research Artifacts in Software Engineering Publications: Status and Trends"\r
  journal: "Journal of Systems and Software"\r
  journal_short: "JSS"\r
  volume: "213"\r
  year: 2024\r
  pages: "112032"\r
\r
- lang: en\r
  authors:\r
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Shangtong Cao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiapu Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Dongliang Mu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing and Detecting WebAssembly Runtime Bugs"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "33"\r
  number: "2"\r
  year: 2024\r
  pages: "37:1-37:29"\r
\r
- lang: en\r
  authors:\r
    - {name: "Fuqi Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lui", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Wei Ai", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Huoran Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yulian Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hongfei Deng", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qingxiang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Adoption of Recurrent Innovations: A Large-Scale Case Study on Mobile App Updates"\r
  journal: "ACM Transactions on the Web"\r
  journal_short: "TWEB"\r
  volume: "18"\r
  number: "1"\r
  year: 2024\r
  pages: "13:1-13:26"\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Zihao Zhao", zh: "赵子豪"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: true\r
    - name: {en: "Yaoqi Guo", zh: "郭曜齐"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: true\r
    - name: {en: "Huachuan Zhang", zh: "张华川"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xiang Jing", zh: "景翔"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "Exploration of Medical Clinical Trial Data Infrastructure Based on Datanet"\r
    zh: "基于数联网的医药临床试验数据基础设施探索"\r
  journal:\r
    en: "China Pharmaceutical Guide"\r
    zh: "中国医药导刊"\r
  volume: "26"\r
  number: "11"\r
  year: 2024\r
  pages: "1087-1092"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Ying Zhang", zh: "张颖"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Hong Mei", zh: "梅宏"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "Digital Economy Infrastructure: Exploration and Practice"\r
    zh: "数字经济基础设施：探索与实践"\r
  journal:\r
    en: "Digital Economy Development and Governance"\r
    zh: "数字经济发展与治理"\r
  number: "1"\r
  year: 2024\r
  pages: "27-39"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
# ════════════════════════════════════════════════════════════════ 2023 ══════\r
- lang: en\r
  authors:\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "LegoDroid: Flexible Android Apps Decomposition and Instant Installation"\r
  journal: "SCIENCE CHINA Information Sciences"\r
  volume: "66"\r
  number: "4"\r
  year: 2023\r
  pages: "142103:1-142103:19"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zili Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Rise of Distributed Deep Learning Training in the Big Model Era: From a Software Engineering Perspective"\r
  journal: "ACM Transactions on Software Engineering and Methodology"\r
  journal_short: "TOSEM"\r
  volume: "32"\r
  number: "6"\r
  year: 2023\r
  pages: "156:1-156:26"\r
\r
- lang: en\r
  authors:\r
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Junkai Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
  title: "Characterizing Commodity Serverless Computing Platforms"\r
  journal: "Journal of Software: Evolution and Process"\r
  journal_short: "JSEP"\r
  volume: "35"\r
  number: "10"\r
  year: 2023\r
  pages: "e2394:1-e2394:23"\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Kaidong Wu", zh: "吴恺东"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: true\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: true\r
      is_student: false\r
    - name: {en: "Huaqian Cai", zh: "蔡华谦"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xiang Jing", zh: "景翔"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Gang Huang", zh: "黄罡"}\r
      is_self: false\r
      is_corresponding: true\r
      is_student: false\r
  title:\r
    en: "BETASCO: A Consortium Blockchain System for Smart Contract Sharding"\r
    zh: "BETASCO:面向智能合约分片的联盟区块链系统"\r
  journal:\r
    en: "Journal of Software"\r
    zh: "软件学报"\r
  journal_short:\r
    en: "JOS"\r
    zh: "软件学报"\r
  volume: "34"\r
  number: "11"\r
  year: 2023\r
  pages: "5042-5057"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Chaoran Luo", zh: "罗超然"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xiang Jing", zh: "景翔"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Gang Huang", zh: "黄罡"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "Technical Challenges of Data Space Infrastructure and the Datanet Solution"\r
    zh: "数据空间基础设施的技术挑战及数联网解决方案"\r
  journal:\r
    en: "Big Data"\r
    zh: "大数据"\r
  volume: "9"\r
  number: "2"\r
  year: 2023\r
  pages: "110-121"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
# ════════════════════════════════════════════════════════════════ 2022 ══════\r
- lang: en\r
  authors:\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Aruna Balasubramanian", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Characterizing Embedded Web Browsing in Mobile Apps"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "21"\r
  number: "11"\r
  year: 2022\r
  pages: "3912-3925"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ming Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hao Zhong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "DNNOff: Offloading DNN-Based Intelligent IoT Applications in Mobile Edge Computing"\r
  journal: "IEEE Transactions on Industrial Informatics"\r
  journal_short: "TII"\r
  volume: "18"\r
  number: "4"\r
  year: 2022\r
  pages: "2820-2829"\r
  notes: "ESI Highly Cited Paper"\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Diandian Gu", zh: "谷典典"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yining Shi", zh: "石屹宁"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xuanzhe Liu", zh: "刘譞哲"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Ge Wu", zh: "吴格"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Haiou Jiang", zh: "姜海鸥"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yaoshuai Zhao", zh: "赵耀帅"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: true\r
      is_student: false\r
  title:\r
    en: "Deep Learning Framework Bug Detection Based on Meta-Operators"\r
    zh: "基于元算子的深度学习框架缺陷检测方法"\r
  journal:\r
    en: "Chinese Journal of Computers"\r
    zh: "计算机学报"\r
  volume: "45"\r
  number: "2"\r
  year: 2022\r
  pages: "240-255"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Yi Wang", zh: "王毅"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yingren Chen", zh: "陈迎仁"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xing Chen", zh: "陈星"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Bing Lin", zh: "林兵"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "Automatic Generation of Android Application Programming Interfaces via Computational Reflection"\r
    zh: "基于计算反射的Android应用程序接口自动生成方法"\r
  journal:\r
    en: "Computer Science"\r
    zh: "计算机科学"\r
  volume: "49"\r
  number: "12"\r
  year: 2022\r
  pages: "136-145"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Qi Yang", zh: "杨起"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: true\r
    - name: {en: "Mugeng Liu", zh: "刘牧耕"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: true\r
      is_student: false\r
  title:\r
    en: "A Dataset Generation Method for UI Sketch Recognition"\r
    zh: "一种面向UI手稿识别的数据集制作方法"\r
  journal:\r
    en: "Journal of Zhengzhou University (Engineering Science)"\r
    zh: "郑州大学学报(工学版)"\r
  volume: "43"\r
  number: "6"\r
  year: 2022\r
  pages: "1-7"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
# ════════════════════════════════════════════════════════════════ 2021 ══════\r
- lang: en\r
  authors:\r
    - {name: "Kaidong Wu", is_self: false, is_corresponding: false, is_student: true}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A First Look at Blockchain-based Decentralized Applications"\r
  journal: "Software — Practice and Experience"\r
  journal_short: "SPE"\r
  volume: "51"\r
  number: "10"\r
  year: 2021\r
  pages: "2033-2050"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Operating Systems for Resource-adaptive Intelligent Software: Challenges and Opportunities"\r
  journal: "ACM Transactions on Internet Technology"\r
  journal_short: "TOIT"\r
  volume: "21"\r
  number: "2"\r
  year: 2021\r
  pages: "27:1-27:19"\r
\r
# ════════════════════════════════════════════════════════════════ 2020 ══════\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Li Zhou", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Roaming Through the Castle Tunnels: An Empirical Analysis of Inter-app Navigation of Android Apps"\r
  journal: "ACM Transactions on the Web"\r
  journal_short: "TWEB"\r
  volume: "14"\r
  number: "3"\r
  year: 2020\r
  pages: "14:1-14:24"\r
\r
- lang: zh\r
  authors:\r
    - name: {en: "Yun Ma", zh: "马郓"}\r
      is_self: true\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Xuanzhe Liu", zh: "刘譞哲"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
    - name: {en: "Hong Mei", zh: "梅宏"}\r
      is_self: false\r
      is_corresponding: false\r
      is_student: false\r
  title:\r
    en: "Performance Measurement and Optimization of Browser Cache for Mobile Web Applications"\r
    zh: "面向移动Web应用的浏览器缓存性能度量与优化"\r
  journal:\r
    en: "Journal of Software"\r
    zh: "软件学报"\r
  journal_short:\r
    en: "JOS"\r
    zh: "软件学报"\r
  volume: "31"\r
  number: "7"\r
  year: 2020\r
  pages: "1980-1996"\r
  notes:\r
    en: "In Chinese"\r
    zh: null\r
\r
# ════════════════════════════════════════════════════════════════ 2020 ═══\r
- lang: en\r
  authors:\r
    - {name: "Su Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Huaqian Cai", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Tian-Yue Fan", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "SmartPipe: Towards Interoperability of Industrial Applications via Computational Reflection"\r
  journal: "Journal of Computer Science and Technology"\r
  journal_short: "JCST"\r
  volume: "35"\r
  number: "1"\r
  year: 2020\r
  pages: "161-178"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2019 ═══\r
- lang: en\r
  authors:\r
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shihong Chen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Bichun Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "An Adaptive Offloading Framework for Android Applications in Mobile Edge Computing"\r
  journal: "SCIENCE CHINA Information Sciences"\r
  volume: "62"\r
  number: "8"\r
  year: 2019\r
  pages: "82102:1-82102:17"\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yingfei Xiong", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Programming Situational Mobile Web Applications with Cloud-Mobile Convergence: An Internetware-Oriented Approach"\r
  journal: "IEEE Transactions on Services Computing"\r
  journal_short: "TSC"\r
  volume: "12"\r
  number: "1"\r
  year: 2019\r
  pages: "6-19"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2018 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A Tale of Two Fashions: An Empirical Study on the Performance of Native Apps and Web Apps on Android"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "17"\r
  number: "5"\r
  year: 2018\r
  pages: "990-1003"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Meihua Yu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "i-Jacob: An Internetware-Oriented Approach to Optimizing Computation-Intensive Mobile Web Browsing"\r
  journal: "ACM Transactions on Internet Technology"\r
  journal_short: "TOIT"\r
  volume: "18"\r
  number: "2"\r
  year: 2018\r
  pages: "14:1-14:23"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2017 ═══\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xinyang Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "SWAROVsky: Optimizing Resource Loading for Mobile Web Browsing"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "16"\r
  number: "10"\r
  year: 2017\r
  pages: "2941-2954"\r
\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Shuailiang Dong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "ReWAP: Reducing Redundant Transfers for Mobile Web Browsing via App-Specific Resource Packaging"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "16"\r
  number: "10"\r
  year: 2017\r
  pages: "2625-2638"\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Felix Xiaozhu Lin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Saumay Pushp", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "ShuffleDog: Characterizing and Adapting User-Perceived Latency of Android App"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "16"\r
  number: "10"\r
  year: 2017\r
  pages: "2913-2926"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2016 ═══\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Demystifying the Imperfect Client-Side Cache Performance of Mobile Web Browsing"\r
  journal: "IEEE Transactions on Mobile Computing"\r
  journal_short: "TMC"\r
  volume: "15"\r
  number: "9"\r
  year: 2016\r
  pages: "2206-2220"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2015 ═══\r
- lang: en\r
  authors:\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Junfeng Zhao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Data-Driven Composition of Service-Oriented Situational Web Applications"\r
  journal: "IEEE Transactions on Services Computing"\r
  journal_short: "TSC"\r
  volume: "8"\r
  year: 2015\r
  pages: "2-16"\r
\r
- lang: en\r
  authors:\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yuchong Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "M. Brian Blake", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Model-Based Automated Navigation and Composition of Complex Service Mashups"\r
  journal: "IEEE Transactions on Services Computing"\r
  journal_short: "TSC"\r
  volume: "8"\r
  year: 2015\r
  pages: "494-506"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2013 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xudong Wang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "M. Brian Blake", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Data-Driven Synthesis of Multiple Recommendation Patterns to Create Situational Web Mashups"\r
  journal: "SCIENCE CHINA Information Sciences"\r
  volume: "56"\r
  number: "8"\r
  year: 2013\r
  pages: "1-16"\r
`,$y=`# Workshop papers, tutorials, technical briefings, posters, and demos.\r
# IDs auto-assigned as [W1], ... unless  id  is set.\r
# Recommended ID prefixes: W=workshop, K=keynote, T=tutorial, P=poster, D=demo.\r
# See journals.yaml for the full author field schema.\r
# Omit authors entirely for solo keynotes.\r
#\r
# Fields: lang, id(opt), authors(opt), title, event, location(opt),\r
#         month(opt), year, pages(opt), notes(opt)\r
\r
# ════════════════════════════════════════════════════════════════ 2026 ══════\r
- lang: en\r
  authors:\r
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Shuoqi Li", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}\r
  title: "WAB: Overcoming Memory, Network, and Security Walls in Native Agentic Browsers with WebAssembly"\r
  event: "1st International Workshop on Foundations and Architectures for the Agentic Web"\r
  year: 2026\r
  notes: "Accepted to appear"\r
\r
# ════════════════════════════════════════════════════════════════ 2022 ══════\r
- lang: en\r
  authors:\r
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
  title: "Parallelizing DNN Inference in Mobile Web Browsers on Heterogeneous Hardware"\r
  event: "20th Annual International Conference on Mobile Systems, Applications and Services (MobiSys 2022), Poster"\r
  year: 2022\r
  pages: "519-520"\r
\r
- lang: en\r
  authors:\r
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xinran Dong", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiuqi Cao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
  title: "Adaptive Compression of 3D Models for Mobile Web Apps"\r
  event: "20th Annual International Conference on Mobile Systems, Applications and Services (MobiSys 2022), Poster"\r
  year: 2022\r
  pages: "563-564"\r
\r
# ════════════════════════════════════════════════════════════════ 2024 (companion) ══\r
- lang: en\r
  authors:\r
    - {name: "Yaoqi Guo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Zijian Shao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yanfeng Wang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "AI-based Prediction of Catheter-related Thrombosis Risk for Cancer Patients"\r
  event: "Companion Proceedings of the ACM Web Conference 2024 (WWW 2024 Companion)"\r
  location: "Singapore"\r
  year: 2024\r
  pages: "1146-1149"\r
\r
# ════════════════════════════════════════════════════════════════ 2021 ══════\r
- lang: en\r
  authors:\r
    - {name: "Junyi Shu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Cost-effective Data Analytics Across Multiple Cloud Regions"\r
  event: "ACM SIGCOMM 2021 Posters and Demos"\r
  year: 2021\r
  pages: "1-3"\r
\r
# ════════════════════════════════════════════════════════════════ 2019 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yangyang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Paladin: Automated Generation of Reproducible Test Cases for Android Apps"\r
  event: "20th International Workshop on Mobile Computing Systems and Applications (HotMobile 2019)"\r
  year: 2019\r
  pages: "99-104"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2017 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Dian Yang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}\r
  title: "Aladdin: Automating Release of Android Deep Links to In-App Content"\r
  event: "39th International Conference on Software Engineering (ICSE 2017) Companion Volume"\r
  year: 2017\r
  pages: "139-140"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2014 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Yuchong Luo", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
  title: "A Graph-Based Approach to Assisting Creation of Mobile Web Applications"\r
  event: "WIP Track of International Conference on Web Services (ICWS 2014)"\r
  year: 2014\r
  pages: "728-729"\r
\r
\r
# ════════════════════════════════════════════════════════════════ 2013 ═══\r
- lang: en\r
  authors:\r
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}\r
    - {name: "Yimeng Fang", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xiaomin Zhu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}\r
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}\r
  title: "MobiTran: Tool Support for Refactoring PC Websites to Smart Phones"\r
  event: "Demo & Poster Track of ACM/IFIP/USENIX International Middleware Conference (Middleware 2013)"\r
  year: 2013\r
  pages: "6"\r
`,Fy=`# Book chapters — reverse chronological order.
# IDs auto-assigned as [B1], [B2], ... unless  id  is set.
# See journals.yaml for the full author field schema.
#
# Fields:
#   lang       [required] : "en" or "zh"
#   id         [optional] : Override auto-assigned ID (e.g., "B2")
#   authors    [required] : Author list (see journals.yaml)
#   title      [required] : Chapter title
#   book       [required] : Book title
#   editors    [optional] : Editor(s) name(s)
#   publisher  [required] : Publisher name
#   isbn       [optional] : ISBN
#   year       [required] : Publication year (number)
#   pages      [optional] : Page range
#   notes      [optional] : Extra info
#
# Bilingual note:
#   lang: zh → title, book, editors, publisher, notes can be {en: "...", zh: "..."} dicts

- disabled: true

# ── lang: en example ──────────────────────────────────────────────────────────
# - lang: en
#   id: "B2"
#   authors:
#     - name: "Your Name"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name: "Li, X."
#       is_self: false
#       is_corresponding: false
#       is_student: true
#   title: "Neural Approaches to Automated Bug Fixing"
#   book: "Advances in Software Engineering: AI and Automation"
#   editors: "Smith, J. and Brown, K."
#   publisher: "Springer"
#   isbn: "978-3-030-XXXXX-X"
#   year: 2023
#   pages: "45-80"

# # ── lang: zh example (bilingual fields) ───────────────────────────────────────
# - lang: zh
#   id: "B1"
#   authors:
#     - name:
#         en: "Your Name"
#         zh: "您的姓名"
#       is_self: true
#       is_corresponding: false
#       is_student: false
#     - name:
#         en: "Li Wei"
#         zh: "李伟"
#       is_self: false
#       is_corresponding: false
#       is_student: true
#   title:
#     en: "Automated Software Testing Methods"
#     zh: "自动化软件测试方法"
#   book:
#     en: "Frontiers of Software Engineering Research"
#     zh: "软件工程研究前沿"
#   editors:
#     en: "Wang Da (Ed.)"
#     zh: "王达（主编）"
#   publisher:
#     en: "Science Press"
#     zh: "科学出版社"
#   isbn: "978-7-03-XXXXXX-X"
#   year: 2021
#   pages: "123-165"
`,Py=`# Conference papers — reverse chronological order.
# IDs auto-assigned as [C1], [C2], ... unless  id  is set.
# See journals.yaml for the full author field schema.
#
# Fields: lang, id(opt), authors, title, conference, conference_short(opt),
#         location, month(opt), year, pages(opt), acceptance_rate(opt),
#         award(opt), notes(opt)

# ════════════════════════════════════════════════════════════════ 2026 ══════
- lang: en
  authors:
    - {name: "Wenchun Jing", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haoran Wang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qi Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Ningyuan Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ning Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "MCP-Focus: Leveraging Function-Oriented Document Enhancement for MCP Server Retrieval"
  conference: "49th International ACM SIGIR Conference on Research and Development in Information Retrieval"
  conference_short: "SIGIR 2026"
  year: 2026
  notes: "Accepted to appear"

- lang: en
  authors:
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Chongyang Pan", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "LaTune: Lightweight and Adaptive Configuration Tuning for LLM Inference on Edge Devices"
  conference: "ACM Web Conference"
  conference_short: "WWW 2026"
  year: 2026
  notes: "Accepted to appear"

- lang: en
  authors:
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Ruibo An", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Characterizing GPU-accelerated Web Applications in Browsers"
  conference: "48th IEEE/ACM International Conference on Software Engineering"
  conference_short: "ICSE 2026"
  year: 2026
  notes: "Accepted to appear"

- lang: en
  authors:
    - {name: "Zhengwei Tao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Baixuan Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Wenbiao Yin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jialong Wu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kuan Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhongwang Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Huifeng Yin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Rui Ye", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Zhiqiang Gao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Wentao Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yong Jiang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Pengjun Xie", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Fei Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jingren Zhou", is_self: false, is_corresponding: false, is_student: false}
  title: "Empowering Efficiency and Efficacy in WebAgent via Enabling Info-Rich Seeking"
  conference: "14th International Conference on Learning Representations"
  conference_short: "ICLR 2026"
  year: 2026
  notes: "Accepted to appear"

- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xiaojun Ma", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Yuhang Xie", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qin Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "ROGA: Scaling Generalist Agents for Office Productivity Tasks via Tool Generation"
  conference: "14th International Conference on Learning Representations"
  conference_short: "ICLR 2026"
  year: 2026
  notes: "Accepted to appear"

- lang: en
  authors:
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Hang Yan", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhongshi Xing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yuxiang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jiuzheng Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "DRAGON: Domain-specific Robust Automatic Data Generation for RAG Optimization"
  conference: "21st Conference of the European Chapter of the Association for Computational Linguistics"
  conference_short: "EACL 2026"
  year: 2026
  notes: "Accepted to appear"

# ════════════════════════════════════════════════════════════════ 2025 ══════
- lang: en
  authors:
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yiyang Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mark Harman", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Yihong Dong", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ge Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
  title: "LLM-Powered Test Case Generation for Detecting Bugs in Plausible Programs"
  conference: "63rd Annual Meeting of the Association for Computational Linguistics"
  conference_short: "ACL 2025"
  location: "Vienna, Austria"
  year: 2025
  pages: "430-440"

- lang: en
  authors:
    - {name: "Yaoqi Guo", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yang Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Personality-Guided Code Generation Using Large Language Models"
  conference: "63rd Annual Meeting of the Association for Computational Linguistics"
  conference_short: "ACL 2025"
  location: "Vienna, Austria"
  year: 2025
  pages: "1068-1080"

- lang: en
  authors:
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Desong Meng", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Dongqi Cai", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Sheng Qi", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Li Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "ShortcutsBench: A Large-Scale Real-world Benchmark for API-based Agents"
  conference: "13th International Conference on Learning Representations"
  conference_short: "ICLR 2025"
  location: "Singapore"
  year: 2025

- lang: en
  authors:
    - {name: "Yuheng Zheng", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jienan Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Bin Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
  title: "Scheduling Strategy for Deep Learning Training Jobs Based on Multi-Resource Interleaving"
  conference: "IEEE International Conference on Web Services"
  conference_short: "ICWS 2025"
  year: 2025
  pages: "899-901"

- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "WebANNS: Fast and Efficient Approximate Nearest Neighbor Search in Web Browsers"
  conference: "48th International ACM SIGIR Conference on Research and Development in Information Retrieval"
  conference_short: "SIGIR 2025"
  location: "Padua, Italy"
  year: 2025
  pages: "2483-2492"

- lang: en
  authors:
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Ruibo An", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "GL2GPU: Accelerating WebGL Applications via Dynamic API Translation to WebGPU"
  conference: "ACM Web Conference"
  conference_short: "WWW 2025"
  location: "Sydney, Australia"
  year: 2025
  pages: "751-762"

- lang: en
  authors:
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
  title: "WeInfer: Unleashing the Power of WebGPU on LLM Inference in Web Browsers"
  conference: "ACM Web Conference"
  conference_short: "WWW 2025"
  location: "Sydney, Australia"
  year: 2025
  pages: "4264-4273"

- lang: en
  authors:
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Bangjun Xiao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Young Soo Ko", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuan Lu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Haiou Jiang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kun Liu", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "HierCust: Hierarchical Model Customization for Federated Learning as a Service on Heterogeneous Edge Devices"
  conference: "18th International Conference on Service Science"
  conference_short: "ICSS 2025"
  year: 2025
  pages: "475-492"
  award: "Best Paper Award"

- lang: en
  authors:
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhongshi Xing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "EasIPA: Enhancing LLM's Ability to Select APIs for IPA"
  conference: "18th International Conference on Service Science"
  conference_short: "ICSS 2025"
  year: 2025
  pages: "34-48"

# ════════════════════════════════════════════════════════════════ 2024 ══════
- lang: en
  authors:
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Characterizing the Developer Groups for Metaverse Services in Roblox"
  conference: "IEEE International Conference on Software Services Engineering"
  conference_short: "SSE 2024"
  year: 2024
  pages: "214-220"

- lang: en
  authors:
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Demystifying Swarm Learning: An Emerging Decentralized Federated Learning System"
  conference: "24th IEEE International Symposium on Cluster, Cloud and Internet Computing"
  conference_short: "CCGrid 2024"
  location: "Philadelphia, USA"
  year: 2024
  pages: "367-373"

- lang: en
  authors:
    - {name: "Hanlin Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yan Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
  title: "A Blockchain-Based Trust Framework for Service-Oriented Architecture"
  conference: "2024 IEEE International Conference on Web Services"
  conference_short: "ICWS 2024"
  year: 2024
  pages: "437-446"

- lang: en
  authors:
    - {name: "Wenchun Jing", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Jingru Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}
  title: "MeDiC: Metasearch Service on Distributed Confidential Data"
  conference: "2024 IEEE International Conference on Web Services"
  conference_short: "ICWS 2024"
  year: 2024
  pages: "1279-1285"

- lang: en
  authors:
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yiyang Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Federica Sarro", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "TrickyBugs: A Dataset of Corner-case Bugs in Plausible Programs"
  conference: "21st IEEE/ACM International Conference on Mining Software Repositories"
  conference_short: "MSR 2024"
  year: 2024
  pages: "113-117"

- lang: en
  authors:
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yifan Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Jiaqi Du", is_self: false, is_corresponding: false, is_student: true}
  title: "FusionRender: Harnessing WebGPU's Power for Enhanced Graphics Performance on Web Browsers"
  conference: "ACM Web Conference"
  conference_short: "WWW 2024"
  location: "Singapore"
  year: 2024
  pages: "2890-2901"

- lang: en
  authors:
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zijian Shao", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Jiaqi Du", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yuan Wei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Lijuan Guo", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Tianchen Wu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shuang Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Web-Based AI Assistant for Medical Imaging: A Case Study on Predicting Spontaneous Preterm Birth via Ultrasound Images"
  conference: "International Conference on Web Information Systems Engineering"
  conference_short: "WISE 2024"
  year: 2024
  pages: "301-312"

# ════════════════════════════════════════════════════════════════ 2023 ══════
- lang: en
  authors:
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Jie Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Federica Sarro", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mark Harman", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Who Judges the Judge: An Empirical Study on Online Judge Tests"
  conference: "32nd ACM SIGSOFT International Symposium on Software Testing and Analysis"
  conference_short: "ISSTA 2023"
  location: "Seattle, USA"
  year: 2023
  pages: "334-346"

- lang: en
  authors:
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mingtao Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}
  title: "Demystifying Mobile Extended Reality in Web Browsers: How Far Can We Go?"
  conference: "ACM Web Conference"
  conference_short: "WWW 2023"
  location: "Austin, USA"
  year: 2023
  pages: "2960-2969"

- lang: en
  authors:
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qing Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Niagara: Scheduling DNN Inference Services on Heterogeneous Edge Processors"
  conference: "21st International Conference on Service Oriented Computing"
  conference_short: "ICSOC 2023"
  year: 2023
  pages: "67-85"
  award: "Distinguished Paper Award"

- lang: en
  authors:
    - {name: "Junyi Shu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ruidong Zhu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
  title: "Disaggregated RAID Storage in Modern Datacenters"
  conference: "28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems"
  conference_short: "ASPLOS 2023"
  location: "Vancouver, Canada"
  year: 2023
  pages: "147-163"

- lang: en
  authors:
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Yue Li", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xiaoling Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Tong Jia", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Tengfei He", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shenghua Luo", is_self: false, is_corresponding: false, is_student: false}
  title: "ADPal: Automatic Detection of Troubled Users in Online Service Systems via Page Access Logs"
  conference: "2023 IEEE International Conference on Web Services"
  conference_short: "ICWS 2023"
  year: 2023
  pages: "638-646"

# ════════════════════════════════════════════════════════════════ 2022 ══════
- lang: en
  authors:
    - {name: "Changlin Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hanlin Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Tianming Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}
  title: "PROMAL: Precise Window Transition Graphs for Android via Synergy of Program Analysis and Machine Learning"
  conference: "44th IEEE/ACM International Conference on Software Engineering"
  conference_short: "ICSE 2022"
  location: "Pittsburgh, USA"
  year: 2022
  pages: "1755-1767"

- lang: en
  authors:
    - {name: "Qiyang Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiang Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiangying Che", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiao Ma", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ao Zhou", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "A Comprehensive Benchmark of Deep Learning Libraries on Mobile Devices"
  conference: "ACM Web Conference"
  conference_short: "WWW 2022"
  location: "Virtual"
  year: 2022
  pages: "3298-3307"

- lang: en
  authors:
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Mandheling: Mixed-precision On-device DNN Training with DSP Offloading"
  conference: "28th Annual International Conference on Mobile Computing and Networking"
  conference_short: "MobiCom 2022"
  location: "Sydney, Australia"
  year: 2022
  pages: "214-227"

- lang: en
  authors:
    - {name: "Haiou Jiang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Keming Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xinjian Ma", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yanchun Sun", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Suspicious Customer Detection on the Blockchain Network for Cryptocurrency Exchanges"
  conference: "2nd Workshop on Blockchain and Smart Contract Security"
  conference_short: "BlockSys 2022"
  year: 2022
  pages: "265-277"

- lang: en
  authors:
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xinran Dong", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
  title: "Understanding the Impact of Visual Factors on the Experience of Loading Web Apps"
  conference: "14th Asia-Pacific Symposium on Internetware"
  conference_short: "Internetware 2022"
  year: 2022
  pages: "10-15"

# ════════════════════════════════════════════════════════════════ 2021 ══════
- lang: en
  authors:
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "DeepRec: On-device Deep Learning for Privacy-Preserving Sequential Recommendation in Mobile Commerce"
  conference: "2021 World Wide Web Conference"
  conference_short: "WWW 2021"
  location: "Ljubljana, Slovenia (Virtual)"
  year: 2021
  pages: "900-911"

- lang: en
  authors:
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yiling Lou", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: true, is_student: false}
  title: "An Empirical Study on Challenges of Application Development in Serverless Computing"
  conference: "29th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering"
  conference_short: "ESEC/FSE 2021"
  year: 2021
  pages: "416-428"

- lang: en
  authors:
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kaidong Wu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Chaoran Luo", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Su Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Huaqian Cai", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "BDLedger: A Scalable Distributed Ledger for Large-Scale Data Recording"
  conference: "1st Workshop on Blockchain and Smart Contract Security"
  conference_short: "BlockSys 2021"
  year: 2021
  pages: "87-100"
`,e0=`# Journal articles — reverse chronological order (most recent first).
# IDs auto-assigned as [J1], [J2], ... unless the  id  field is set.
#
# Author list format:
#   authors:
#     - name: "First Last"      # plain string for lang:en; {en:..., zh:...} for lang:zh
#       is_self: false           # true → bold
#       is_corresponding: false  # true → superscript ∗
#       is_student: false        # true → underline
#
# Fields: lang, id(opt), authors, title, journal, journal_short(opt),
#         volume(opt), number(opt), month(opt), year, pages(opt),
#         award(opt), notes(opt)

# ════════════════════════════════════════════════════════════════ 2026 ══════
- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Siqi Zhong", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhiyang Chen", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "A First Look at Bugs in LLM Inference Engines"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  year: 2026
  notes: "online published"

- lang: en
  authors:
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Ningyu He", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jianting Gao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangtong Cao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kaibo Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "DrWASI: LLM-assisted Differential Testing for WebAssembly System Interface Implementations"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "35"
  number: "2"
  year: 2026
  pages: "44:1-44:25"

# ════════════════════════════════════════════════════════════════ 2025 ══════
- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hong Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "WebAssembly for Container Runtime: Are We There Yet?"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "34"
  number: "6"
  year: 2025
  pages: "174:1-174:22"

- lang: en
  authors:
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Research on WebAssembly Runtimes: A Survey"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "34"
  number: "8"
  year: 2025
  pages: "239:1-239:47"


- lang: en
  authors:
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Fuqi Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Qingxiang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gareth Tyson", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Characterizing the App Recommendation Relationships in the iOS App Store: A Complex Network's Perspective"
  journal: "SCIENCE CHINA Information Sciences"
  volume: "68"
  number: "4"
  year: 2025
  pages: "142101"

- lang: en
  authors:
    - {name: "Ding Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jifan Xiao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Peng Jiang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jiaping Gui", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Dongjin Song", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "ProvAudit: Enhance High-Level Privacy Inference Through System Provenance Data"
  journal: "IEEE Transactions on Dependable and Secure Computing"
  journal_short: "TDSC"
  volume: "22"
  number: "3"
  year: 2025
  pages: "3046-3062"

- lang: en
  authors:
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shiqi Jiang", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Xu Cao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yuanchun Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Aoyu Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Ting Cao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Anatomizing Deep Learning Inference in Web Browsers"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "34"
  number: "2"
  year: 2025
  pages: "47:1-47:43"


- lang: en
  authors:
    - {name: "Jialiang Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "DegaFL: Decentralized Gradient Aggregation for Cross-Silo Federated Learning"
  journal: "IEEE Transactions on Parallel and Distributed Systems"
  journal_short: "TPDS"
  volume: "36"
  number: "2"
  year: 2025
  pages: "212-225"

- lang: en
  authors:
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jie Weng", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}
  title: "A Game-Based Computation Offloading with Imperfect Information in Multi-Edge Environments"
  journal: "IEEE Transactions on Services Computing"
  journal_short: "TSC"
  volume: "18"
  number: "1"
  year: 2025
  pages: "1-14"

- lang: en
  authors:
    - {name: "Daliang Xu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qing Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qun Wei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Niagara+: Scheduling Live ML Analytics Across Heterogeneous Device Processors and Edge Servers"
  journal: "IEEE Transactions on Services Computing"
  journal_short: "TSC"
  volume: "18"
  number: "6"
  year: 2025
  pages: "4055-4068"

- lang: zh
  authors:
    - name: {en: "Xiaolong Huang", zh: "黄小龙"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Jingru Yang", zh: "杨婧如"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yi Liu", zh: "柳熠"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
    - name: {en: "Xiang Jing", zh: "景翔"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Gang Huang", zh: "黄罡"}
      is_self: false
      is_corresponding: false
      is_student: false
  title:
    en: "ReproLink: A Scientific Research Data Management System for Reproducibility"
    zh: "ReproLink:面向可复现性的科研数据管理系统"
  journal:
    en: "Journal of Software"
    zh: "软件学报"
  journal_short:
    en: "JOS"
    zh: "软件学报"
  volume: "36"
  number: "12"
  year: 2025
  pages: "5801-5820"
  notes:
    en: "In Chinese"
    zh: null

# ════════════════════════════════════════════════════════════════ 2024 ══════
- lang: en
  authors:
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhen Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yunshan Jia", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "SDCC: Software-defined Collective Communication for Distributed Training"
  journal: "SCIENCE CHINA Information Sciences"
  volume: "67"
  number: "9"
  year: 2024
  pages: "192104:1-192104:21"

- lang: en
  authors:
    - {name: "Chengxu Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Mengwei Xu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qipeng Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Kang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Kaigui Bian", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "FLASH: Heterogeneity-Aware Federated Learning at Scale"
  journal: "IEEE Transactions on Mobile Computing"
  journal_short: "TMC"
  volume: "23"
  number: "1"
  year: 2024
  pages: "483-500"
  notes: "ESI Highly Cited Paper"

- lang: en
  authors:
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ming Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hao Zhong", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiaona Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}
  title: "FUNOff: Offloading Applications at Function Granularity for Mobile Edge Computing"
  journal: "IEEE Transactions on Mobile Computing"
  journal_short: "TMC"
  volume: "23"
  number: "2"
  year: 2024
  pages: "1717-1734"

- lang: en
  authors:
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Yudong Han", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Haochen Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
  title: "WPIA: Accelerating DNN Warm-up in Web Browsers by Precompiling WebGL Programs"
  journal: "Frontiers of Computer Science"
  journal_short: "FCS"
  volume: "18"
  number: "6"
  year: 2024
  pages: "186211"

- lang: en
  authors:
    - {name: "Bing Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuzhan Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Neal N. Xiong", is_self: false, is_corresponding: false, is_student: false}
  title: "SGCS: An Intelligent Stackelberg-Game-Based Computation Offloading and Resource Pricing Scheme in Blockchain-Enabled MEC for IIoT"
  journal: "IEEE Internet of Things Journal"
  journal_short: "IoT-J"
  volume: "11"
  number: "16"
  year: 2024
  pages: "26727-26740"

- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Xiaolong Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Wei He", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yibing Xie", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jie M. Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiang Jing", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "Research Artifacts in Software Engineering Publications: Status and Trends"
  journal: "Journal of Systems and Software"
  journal_short: "JSS"
  volume: "213"
  year: 2024
  pages: "112032"

- lang: en
  authors:
    - {name: "Yixuan Zhang", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Shangtong Cao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: true, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiapu Luo", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Dongliang Mu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Characterizing and Detecting WebAssembly Runtime Bugs"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "33"
  number: "2"
  year: 2024
  pages: "37:1-37:29"

- lang: en
  authors:
    - {name: "Fuqi Lin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuan Lui", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Wei Ai", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Huoran Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Yulian Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hongfei Deng", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qingxiang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Adoption of Recurrent Innovations: A Large-Scale Case Study on Mobile App Updates"
  journal: "ACM Transactions on the Web"
  journal_short: "TWEB"
  volume: "18"
  number: "1"
  year: 2024
  pages: "13:1-13:26"

- lang: zh
  authors:
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
    - name: {en: "Zihao Zhao", zh: "赵子豪"}
      is_self: false
      is_corresponding: false
      is_student: true
    - name: {en: "Yaoqi Guo", zh: "郭曜齐"}
      is_self: false
      is_corresponding: false
      is_student: true
    - name: {en: "Huachuan Zhang", zh: "张华川"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Xiang Jing", zh: "景翔"}
      is_self: false
      is_corresponding: false
      is_student: false
  title:
    en: "Exploration of Medical Clinical Trial Data Infrastructure Based on Datanet"
    zh: "基于数联网的医药临床试验数据基础设施探索"
  journal:
    en: "China Pharmaceutical Guide"
    zh: "中国医药导刊"
  volume: "26"
  number: "11"
  year: 2024
  pages: "1087-1092"
  notes:
    en: "In Chinese"
    zh: null

- lang: zh
  authors:
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
    - name: {en: "Ying Zhang", zh: "张颖"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Hong Mei", zh: "梅宏"}
      is_self: false
      is_corresponding: false
      is_student: false
  title:
    en: "Digital Economy Infrastructure: Exploration and Practice"
    zh: "数字经济基础设施：探索与实践"
  journal:
    en: "Digital Economy Development and Governance"
    zh: "数字经济发展与治理"
  number: "1"
  year: 2024
  pages: "27-39"
  notes:
    en: "In Chinese"
    zh: null

# ════════════════════════════════════════════════════════════════ 2023 ══════
- lang: en
  authors:
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Xusheng Xiao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Tao Xie", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "LegoDroid: Flexible Android Apps Decomposition and Instant Installation"
  journal: "SCIENCE CHINA Information Sciences"
  volume: "66"
  number: "4"
  year: 2023
  pages: "142103:1-142103:19"

- lang: en
  authors:
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zili Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Haoyu Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
  title: "Rise of Distributed Deep Learning Training in the Big Model Era: From a Software Engineering Perspective"
  journal: "ACM Transactions on Software Engineering and Methodology"
  journal_short: "TOSEM"
  volume: "32"
  number: "6"
  year: 2023
  pages: "156:1-156:26"

- lang: en
  authors:
    - {name: "Jinfeng Wen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yi Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Zhenpeng Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Junkai Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
  title: "Characterizing Commodity Serverless Computing Platforms"
  journal: "Journal of Software: Evolution and Process"
  journal_short: "JSEP"
  volume: "35"
  number: "10"
  year: 2023
  pages: "e2394:1-e2394:23"

- lang: zh
  authors:
    - name: {en: "Kaidong Wu", zh: "吴恺东"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: true
      is_student: false
    - name: {en: "Huaqian Cai", zh: "蔡华谦"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Xiang Jing", zh: "景翔"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Gang Huang", zh: "黄罡"}
      is_self: false
      is_corresponding: true
      is_student: false
  title:
    en: "BETASCO: A Consortium Blockchain System for Smart Contract Sharding"
    zh: "BETASCO:面向智能合约分片的联盟区块链系统"
  journal:
    en: "Journal of Software"
    zh: "软件学报"
  journal_short:
    en: "JOS"
    zh: "软件学报"
  volume: "34"
  number: "11"
  year: 2023
  pages: "5042-5057"
  notes:
    en: "In Chinese"
    zh: null

- lang: zh
  authors:
    - name: {en: "Chaoran Luo", zh: "罗超然"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
    - name: {en: "Xiang Jing", zh: "景翔"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Gang Huang", zh: "黄罡"}
      is_self: false
      is_corresponding: false
      is_student: false
  title:
    en: "Technical Challenges of Data Space Infrastructure and the Datanet Solution"
    zh: "数据空间基础设施的技术挑战及数联网解决方案"
  journal:
    en: "Big Data"
    zh: "大数据"
  volume: "9"
  number: "2"
  year: 2023
  pages: "110-121"
  notes:
    en: "In Chinese"
    zh: null

# ════════════════════════════════════════════════════════════════ 2022 ══════
- lang: en
  authors:
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Aruna Balasubramanian", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Characterizing Embedded Web Browsing in Mobile Apps"
  journal: "IEEE Transactions on Mobile Computing"
  journal_short: "TMC"
  volume: "21"
  number: "11"
  year: 2022
  pages: "3912-3925"

- lang: en
  authors:
    - {name: "Xing Chen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Ming Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Hao Zhong", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Ching-Hsien Hsu", is_self: false, is_corresponding: false, is_student: false}
  title: "DNNOff: Offloading DNN-Based Intelligent IoT Applications in Mobile Edge Computing"
  journal: "IEEE Transactions on Industrial Informatics"
  journal_short: "TII"
  volume: "18"
  number: "4"
  year: 2022
  pages: "2820-2829"
  notes: "ESI Highly Cited Paper"

- lang: zh
  authors:
    - name: {en: "Diandian Gu", zh: "谷典典"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yining Shi", zh: "石屹宁"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Xuanzhe Liu", zh: "刘譞哲"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Ge Wu", zh: "吴格"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Haiou Jiang", zh: "姜海鸥"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yaoshuai Zhao", zh: "赵耀帅"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: true
      is_student: false
  title:
    en: "Deep Learning Framework Bug Detection Based on Meta-Operators"
    zh: "基于元算子的深度学习框架缺陷检测方法"
  journal:
    en: "Chinese Journal of Computers"
    zh: "计算机学报"
  volume: "45"
  number: "2"
  year: 2022
  pages: "240-255"
  notes:
    en: "In Chinese"
    zh: null

- lang: zh
  authors:
    - name: {en: "Yi Wang", zh: "王毅"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yingren Chen", zh: "陈迎仁"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Xing Chen", zh: "陈星"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Bing Lin", zh: "林兵"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
  title:
    en: "Automatic Generation of Android Application Programming Interfaces via Computational Reflection"
    zh: "基于计算反射的Android应用程序接口自动生成方法"
  journal:
    en: "Computer Science"
    zh: "计算机科学"
  volume: "49"
  number: "12"
  year: 2022
  pages: "136-145"
  notes:
    en: "In Chinese"
    zh: null

- lang: zh
  authors:
    - name: {en: "Qi Yang", zh: "杨起"}
      is_self: false
      is_corresponding: false
      is_student: true
    - name: {en: "Mugeng Liu", zh: "刘牧耕"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: true
      is_student: false
  title:
    en: "A Dataset Generation Method for UI Sketch Recognition"
    zh: "一种面向UI手稿识别的数据集制作方法"
  journal:
    en: "Journal of Zhengzhou University (Engineering Science)"
    zh: "郑州大学学报(工学版)"
  volume: "43"
  number: "6"
  year: 2022
  pages: "1-7"
  notes:
    en: "In Chinese"
    zh: null

# ════════════════════════════════════════════════════════════════ 2021 ══════
- lang: en
  authors:
    - {name: "Kaidong Wu", is_self: false, is_corresponding: false, is_student: true}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "A First Look at Blockchain-based Decentralized Applications"
  journal: "Software — Practice and Experience"
  journal_short: "SPE"
  volume: "51"
  number: "10"
  year: 2021
  pages: "2033-2050"

- lang: en
  authors:
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shangguang Wang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Ying Zhang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yunxin Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
  title: "Operating Systems for Resource-adaptive Intelligent Software: Challenges and Opportunities"
  journal: "ACM Transactions on Internet Technology"
  journal_short: "TOIT"
  volume: "21"
  number: "2"
  year: 2021
  pages: "27:1-27:19"

# ════════════════════════════════════════════════════════════════ 2020 ══════
- lang: en
  authors:
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Ziniu Hu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Diandian Gu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Li Zhou", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qiaozhu Mei", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
  title: "Roaming Through the Castle Tunnels: An Empirical Analysis of Inter-app Navigation of Android Apps"
  journal: "ACM Transactions on the Web"
  journal_short: "TWEB"
  volume: "14"
  number: "3"
  year: 2020
  pages: "14:1-14:24"

- lang: zh
  authors:
    - name: {en: "Yun Ma", zh: "马郓"}
      is_self: true
      is_corresponding: false
      is_student: false
    - name: {en: "Xuanzhe Liu", zh: "刘譞哲"}
      is_self: false
      is_corresponding: false
      is_student: false
    - name: {en: "Hong Mei", zh: "梅宏"}
      is_self: false
      is_corresponding: false
      is_student: false
  title:
    en: "Performance Measurement and Optimization of Browser Cache for Mobile Web Applications"
    zh: "面向移动Web应用的浏览器缓存性能度量与优化"
  journal:
    en: "Journal of Software"
    zh: "软件学报"
  journal_short:
    en: "JOS"
    zh: "软件学报"
  volume: "31"
  number: "7"
  year: 2020
  pages: "1980-1996"
  notes:
    en: "In Chinese"
    zh: null
`,n0=`# Workshop papers, tutorials, technical briefings, posters, and demos.
# IDs auto-assigned as [W1], ... unless  id  is set.
# Recommended ID prefixes: W=workshop, K=keynote, T=tutorial, P=poster, D=demo.
# See journals.yaml for the full author field schema.
# Omit authors entirely for solo keynotes.
#
# Fields: lang, id(opt), authors(opt), title, event, location(opt),
#         month(opt), year, pages(opt), notes(opt)

# ════════════════════════════════════════════════════════════════ 2026 ══════
- lang: en
  authors:
    - {name: "Mugeng Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Shuoqi Li", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: true, is_student: false}
  title: "WAB: Overcoming Memory, Network, and Security Walls in Native Agentic Browsers with WebAssembly"
  event: "1st International Workshop on Foundations and Architectures for the Agentic Web"
  year: 2026
  notes: "Accepted to appear"

# ════════════════════════════════════════════════════════════════ 2022 ══════
- lang: en
  authors:
    - {name: "Deyu Tian", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Haiyang Shen", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
  title: "Parallelizing DNN Inference in Mobile Web Browsers on Heterogeneous Hardware"
  event: "20th Annual International Conference on Mobile Systems, Applications and Services (MobiSys 2022), Poster"
  year: 2022
  pages: "519-520"

- lang: en
  authors:
    - {name: "Qi Yang", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xinran Dong", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xiuqi Cao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
  title: "Adaptive Compression of 3D Models for Mobile Web Apps"
  event: "20th Annual International Conference on Mobile Systems, Applications and Services (MobiSys 2022), Poster"
  year: 2022
  pages: "563-564"

# ════════════════════════════════════════════════════════════════ 2024 (companion) ══
- lang: en
  authors:
    - {name: "Yaoqi Guo", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Zijian Shao", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Weichen Bi", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yanfeng Wang", is_self: false, is_corresponding: false, is_student: false}
  title: "AI-based Prediction of Catheter-related Thrombosis Risk for Cancer Patients"
  event: "Companion Proceedings of the ACM Web Conference 2024 (WWW 2024 Companion)"
  location: "Singapore"
  year: 2024
  pages: "1146-1149"

# ════════════════════════════════════════════════════════════════ 2021 ══════
- lang: en
  authors:
    - {name: "Junyi Shu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Xin Jin", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Yun Ma", is_self: true, is_corresponding: false, is_student: false}
    - {name: "Xuanzhe Liu", is_self: false, is_corresponding: false, is_student: false}
    - {name: "Gang Huang", is_self: false, is_corresponding: false, is_student: false}
  title: "Cost-effective Data Analytics Across Multiple Cloud Regions"
  event: "ACM SIGCOMM 2021 Posters and Demos"
  year: 2021
  pages: "1-3"
`,s0=`# Research interests — rendered as a semicolon-separated paragraph.
#
# Fields:
#   lang     [required] : "en" or "zh"
#   interest [required] : Research interest description
#
# Bilingual note:
#   lang: en → interest is a plain string
#   lang: zh → interest must be a {en: "...", zh: "..."} dict

# ── lang: en example ──────────────────────────────────────────────────────────


# ── lang: zh example (bilingual fields) ───────────────────────────────────────
- lang: zh
  interest:
    en: "Intelligent software system and engineering"
    zh: "智能化软件开发"
- lang: zh
  interest:
    en: "Service computing"
    zh: "服务计算"
- lang: zh
  interest:
    en: "Web infrastructure"
    zh: "Web基础设施"
`,t0=`# Professional service — grouped by service_type in the order listed.\r
#\r
# Fields:\r
#   lang          [required] : "en" or "zh"\r
#   service_type  [required] : Group label\r
#   role          [required] : Your specific role\r
#   venue         [required] : Journal or conference name\r
#   year          [required] : Year (or start year of a range)\r
#   year_end      [optional] : End year for multi-year roles\r
#\r
# Section disable: add a standalone entry  - service_type: "Foo"\\n  disabled: true\r
#\r
# Bilingual note:\r
#   lang: zh → service_type, role, venue must be {en: "...", zh: "..."} dicts\r
\r
# ── Program Committee Membership ───────────────────────────────────────────────\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "ACM Web Conference (WWW)"\r
  year: 2022\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "IEEE International Conference on Cloud Computing (CLOUD)"\r
  year: 2020\r
  year_end: 2021\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "IEEE International Conference on Software Services Engineering (SSE)"\r
  year: 2024\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "IEEE International Conference on Web Services (ICWS)"\r
  year: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "ACM International Conference on Information and Knowledge Management (CIKM)"\r
  year: 2024\r
  year_end: 2025\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)"\r
  year: 2023\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "ACM International Conference on Web Search and Data Mining (WSDM)"\r
  year: 2023\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "Annual Meeting of the Association for Computational Linguistics (ACL)"\r
  year: 2024\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "International Joint Conference on Artificial Intelligence (IJCAI)"\r
  year: 2024\r
  year_end: 2025\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "International Conference on Learning Representations (ICLR)"\r
  year: 2025\r
  year_end: 2026\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "Annual Conference on Neural Information Processing Systems (NeurIPS)"\r
  year: 2024\r
  year_end: 2025\r
\r
- lang: en\r
  service_type: "Program Committee Membership"\r
  role: "Program Committee Member"\r
  venue: "IEEE/ACM Automated Software Engineering — NIER Track (ASE-NIER)"\r
  year: 2023\r
  year_end: 2025\r
\r
# ── Conference Organization ────────────────────────────────────────────────────\r
- lang: zh\r
  service_type:\r
    en: "Conference Organization"\r
    zh: "会议组织"\r
  role:\r
    en: "Executive Chair"\r
    zh: "执行主席"\r
  venue:\r
    en: "Datanet Summit & 2nd Data Space Frontier Forum"\r
    zh: "数联网高峰论坛暨第二届数据空间前沿论坛"\r
  year: 2024\r
\r
- lang: zh\r
  service_type:\r
    en: "Conference Organization"\r
    zh: "会议组织"\r
  role:\r
    en: "Forum Chair"\r
    zh: "主席"\r
  venue:\r
    en: "China Software Conference — Forum on Large Models and AI Infrastructure and Open-Source Ecosystem"\r
    zh: '中国软件大会"大模型和AI基础设施及其开源生态"论坛'\r
  year: 2024\r
\r
- lang: zh\r
  service_type:\r
    en: "Conference Organization"\r
    zh: "会议组织"\r
  role:\r
    en: "Forum Chair"\r
    zh: "主席"\r
  venue:\r
    en: "China Software Conference — Data Space Frontier Forum"\r
    zh: '中国软件大会"数据空间前沿论坛"'\r
  year: 2023\r
\r
- lang: zh\r
  service_type:\r
    en: "Conference Organization"\r
    zh: "会议组织"\r
  role:\r
    en: "Forum Chair"\r
    zh: "主席"\r
  venue:\r
    en: "China Digital Services Conference — Mobile Service Computing Forum"\r
    zh: '中国数字服务大会"移动服务计算"论坛'\r
  year: 2021\r
  year_end: 2022\r
\r
# ── Academic and Organizational Roles ─────────────────────────────────────────\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Deputy Director, Secretariat"\r
    zh: "副主任"\r
  venue:\r
    en: "Digital Object Architecture Application Technology and Standards Promotion Organization (ATSD)"\r
    zh: "数字对象架构应用技术与标准促进组织（ATSD）秘书处"\r
  year: 2022\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Assistant Director"\r
    zh: "主任助理"\r
  venue:\r
    en: "National Key Laboratory of Data Space Technology and Systems"\r
    zh: "数据空间技术与系统全国重点实验室"\r
  year: 2023\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Executive Committee Member"\r
    zh: "执行委员"\r
  venue:\r
    en: "CCF Technical Committee on Service Computing"\r
    zh: "中国计算机学会服务计算专委会"\r
  year: 2021\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Committee Member"\r
    zh: "委员"\r
  venue:\r
    en: "CCF Technical Committee on Software Engineering"\r
    zh: "中国计算机学会软件工程专委会"\r
  year: 2021\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Committee Member"\r
    zh: "委员"\r
  venue:\r
    en: "CCF Communications Committee"\r
    zh: "中国计算机学会传播工作委员会"\r
  year: 2021\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Member"\r
    zh: "成员"\r
  venue:\r
    en: "Task Group on DOIP Standard and Applications"\r
    zh: "数字对象接口协议（DOIP）标准与应用任务组"\r
  year: 2022\r
\r
- lang: zh\r
  service_type:\r
    en: "Academic and Organizational Roles"\r
    zh: "学术组织兼职"\r
  role:\r
    en: "Member, Curriculum Development Team"\r
    zh: "课程建设团队成员"\r
  venue:\r
    en: "Ministry of Education CS 101 Program — Software Engineering Curriculum"\r
    zh: '教育部计算机领域101计划"软件工程"课程建设团队'\r
  year: 2022\r
\r
# ── Journal Reviewing ──────────────────────────────────────────────────────────\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "IEEE Transactions on Software Engineering (TSE)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "IEEE Transactions on Services Computing (TSC)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "IEEE Transactions on Computers (TC)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "ACM Transactions on Internet Technology (TOIT)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "ACM Transactions on Intelligent Systems and Technology (TIST)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "ACM Transactions on the Web (TWEB)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "Journal of Software: Evolution and Process (JSEP)"\r
  year: 2020\r
\r
- lang: en\r
  service_type: "Journal Reviewing"\r
  role: "Reviewer"\r
  venue: "SCIENCE CHINA Information Sciences"\r
  year: 2020\r
\r
- lang: zh\r
  service_type:\r
    en: "Journal Reviewing"\r
    zh: "期刊审稿"\r
  role:\r
    en: "Reviewer"\r
    zh: "审稿人"\r
  venue:\r
    en: "Journal of Software"\r
    zh: "软件学报"\r
  year: 2020\r
`,a0=`# Student supervision — current students first, then graduated.
#
# Fields (current students):
#   lang             [required] : "en" or "zh"
#   name             [required] : Student name
#   institution      [required] : University
#   level            [required] : "phd", "ms" / "master", or "undergraduate"
#   status           [required] : "current"
#   start            [required] : Start date (e.g., "Fall 2022" or "2021-09")
#   end              [optional] : Expected graduation; null = ongoing
#   thesis           [optional] : Thesis title or "TBD"
#   cosupervisor     [optional] : Co-supervisor name
#   awards           [optional] : Notable fellowships or awards
#
# Fields (graduated students):
#   lang             [required] : "en" or "zh"
#   name             [required] : Student name
#   level            [required] : "phd", "ms" / "master", or "undergraduate"
#   status           [required] : "graduated"
#   start            [recommended] : Start date (e.g., "2022-09")
#   end              [recommended] : Graduation date (e.g., "2025-07")
#   graduation_year  [required] : Graduation year (number)
#   thesis           [optional] : Thesis title
#   cosupervisor     [optional] : Co-supervisor name
#   awards           [optional] : Notable awards
#   placement        [optional] : Post-graduation placement
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → name, institution, thesis, cosupervisor, awards, placement
#              must be {en: "...", zh: "..."} dicts

# ── Current Graduate Students ─────────────────────────────────────────────────
- lang: zh
  name:
    en: "Weichen Mi"
    zh: "秘玮晨"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2021-09"
  end: null

- lang: zh
  name:
    en: "Kaibo Liu"
    zh: "刘恺博"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2021-09"
  end: null
  cosupervisor:
    en: "Prof. Gang Huang"
    zh: "黄罡教授"

- lang: zh
  name:
    en: "Yudong Han"
    zh: "韩宇栋"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2022-09"
  end: null

- lang: zh
  name:
    en: "Haiyang Shen"
    zh: "申海洋"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2022-09"
  end: null

- lang: zh
  name:
    en: "Mugeng Liu"
    zh: "刘牧耕"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2022-09"
  end: null
  cosupervisor:
    en: "Prof. Hong Mei"
    zh: "梅宏教授"

- lang: zh
  name:
    en: "Wenchun Jing"
    zh: "井文淳"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2023-09"
  end: null

- lang: zh
  name:
    en: "Boyuan Yang"
    zh: "杨博元"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2023-09"
  end: null

- lang: zh
  name:
    en: "Zihao Zhao"
    zh: "赵子豪"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: ms
  status: current
  start: "2023-09"
  end: null

- lang: zh
  name:
    en: "Yue Li"
    zh: "李玥"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: ms
  status: current
  start: "2023-09"
  end: null

- lang: zh
  name:
    en: "Zhiyang Chen"
    zh: "陈智扬"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2024-09"
  end: null

- lang: zh
  name:
    en: "Qi Yang"
    zh: "杨起"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2024-09"
  end: null

- lang: zh
  name:
    en: "Zijian Shao"
    zh: "邵子建"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: ms
  status: current
  start: "2024-09"
  end: null

- lang: zh
  name:
    en: "Siqi Zhong"
    zh: "钟思祺"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2025-09"
  end: null

- lang: zh
  name:
    en: "Haoran Wang"
    zh: "王浩然"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: phd
  status: current
  start: "2025-09"
  end: null

- lang: zh
  name:
    en: "Shuoqi Li"
    zh: "李硕祺"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: ms
  status: current
  start: "2025-09"
  end: null

- lang: zh
  name:
    en: "Yanli Li"
    zh: "李艳丽"
  institution:
    en: "Peking University"
    zh: "北京大学"
  level: ms
  status: current
  start: "2025-09"
  end: null

# ── Graduated Students ────────────────────────────────────────────────────────
- lang: zh
  name:
    en: "Haoran Wang"
    zh: "王浩然"
  level: ms
  status: graduated
  graduation_year: 2025
  thesis:
    en: "Adaptive Framework Design and Implementation for Domain-Specific Large Model Agents"
    zh: "面向垂类大模型智能体的自适应框架设计与实现"
  placement:
    en: "Ph.D. Student, Peking University"
    zh: "北京大学，博士生"

- lang: zh
  name:
    en: "Yaoqi Guo"
    zh: "郭曜齐"
  level: ms
  status: graduated
  graduation_year: 2025
  thesis:
    en: "Design and Implementation of an LLM-Based Web Workflow Automation Tool"
    zh: "基于大语言模型的Web流程自动化工具设计与实现"
  placement:
    en: "Ph.D. Student, Nanyang Technological University, Singapore"
    zh: "新加坡南洋理工大学，博士生"

- lang: zh
  name:
    en: "Xiaoqi Wang"
    zh: "王晓奇"
  level: ms
  status: graduated
  graduation_year: 2025
  thesis:
    en: "Design and Implementation of a Data Provenance Framework for Heterogeneous Process Engines"
    zh: "一种面向异构流程引擎的数据溯源框架设计与实现"
  placement:
    en: "Huawei"
    zh: "华为公司"

- lang: zh
  name:
    en: "Jialiang Han"
    zh: "韩佳良"
  level: phd
  status: graduated
  graduation_year: 2025
  thesis:
    en: "Key Technologies of Federated Learning for Unmanned Systems"
    zh: "面向无人系统的联邦学习关键技术研究"
  cosupervisor:
    en: "Prof. Gang Huang"
    zh: "黄罡教授"
  placement:
    en: "Xiaomi Group"
    zh: "小米集团"

- lang: zh
  name:
    en: "Daliang Xu"
    zh: "徐大亮"
  level: phd
  status: graduated
  graduation_year: 2025
  thesis:
    en: "Heterogeneous Computation Resource Management Optimization for On-device Deep Learning Systems"
    zh: "端侧深度学习系统异构计算资源管理优化研究"
  cosupervisor:
    en: "Prof. Gang Huang"
    zh: "黄罡教授"
  placement:
    en: "Associate Researcher, Beijing University of Posts and Telecommunications"
    zh: "北京邮电大学，副研究员"

- lang: zh
  name:
    en: "Deyu Tian"
    zh: "田得雨"
  level: phd
  status: graduated
  graduation_year: 2024
  thesis:
    en: "Deep Learning Model Serving Technology Based on Web Browsers"
    zh: "基于Web浏览器的深度学习模型伺服技术研究"
  cosupervisor:
    en: "Prof. Gang Huang"
    zh: "黄罡教授"
  placement:
    en: "China Mobile Research Institute"
    zh: "中国移动研究院"

- lang: zh
  name:
    en: "Jinfeng Wen"
    zh: "温金凤"
  level: phd
  status: graduated
  graduation_year: 2024
  thesis:
    en: "Key Technologies for Performance Testing, Analysis, and Optimization of Serverless Computing Applications"
    zh: "服务器无感知计算应用的性能测试、分析和优化关键技术研究"
  cosupervisor:
    en: "Prof. Xuanzhe Liu"
    zh: "刘譞哲教授"
  placement:
    en: "Postdoctoral Researcher, Beijing University of Posts and Telecommunications"
    zh: "北京邮电大学，博士后"
`,i0=`# Invited talks, conference presentations, and research visits.
# Listed in reverse chronological order.
#
# Fields:
#   lang      [required] : "en" or "zh"
#   type      [required] : Talk type string.
#                          English examples: "Keynote talk", "Invited talk",
#                                            "Invited talk (virtual)"
#                          For lang: zh, use {en: "Keynote talk", zh: "主旨演讲"}
#   title     [optional] : Talk title (omit for visits with no specific title)
#   event     [required] : Event name, institution, or venue
#   location  [required] : City, Country (append "(virtual)" if online)
#   date      [required] : Date string, e.g. "June 13, 2024" or "2024-06-13"
#   notes     [optional] : Extra info, e.g. YouTube link
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → type, title, event, location must be {en: "...", zh: "..."} dicts

- disabled: true

# ── lang: en example ──────────────────────────────────────────────────────────
# - lang: en
#   type: "Keynote talk"
#   title: "Towards Interpretable AI for Software Engineering"
#   event: "Workshop on AI for Software Engineering (AI4SE'24)"
#   location: "Lisbon, Portugal"
#   date: "April 14, 2024"
#   # notes: "Recording: https://youtube.com/..."

# # ── lang: zh example (bilingual fields) ───────────────────────────────────────
# - lang: zh
#   type:
#     en: "Keynote talk"
#     zh: "主旨演讲"
#   title:
#     en: "Intelligent Software Engineering: Opportunities and Challenges"
#     zh: "智能化软件工程：机遇与挑战"
#   event:
#     en: "National Symposium on Software Engineering"
#     zh: "全国软件工程学术会议"
#   location:
#     en: "Nanjing, China"
#     zh: "中国南京"
#   date: "2023-10-20"
`,l0=`# Teaching experience — listed in reverse chronological order.
#
# Fields:
#   lang          [required] : "en" or "zh"
#   role          [required] : Role (e.g., "Instructor", "Teaching Assistant", "主讲教师")
#   institution   [required] : University name
#   term          [required] : Semester/term (e.g., "Fall 2024", "2024年秋季")
#   course_name   [required] : Course name
#   course_number [optional] : Course code
#   level         [required] : Student level (e.g., "Undergraduate", "Graduate",
#                              "本科生", "研究生")
#   taught_by     [optional] : Supervising instructor — for Teaching Assistant entries only
#   co_instructor [optional] : Co-instructor for jointly taught courses
#
# Bilingual note:
#   lang: en → all text fields are plain strings
#   lang: zh → role, institution, term, course_name, level (and co_instructor if present)
#              must be {en: "...", zh: "..."} dicts

# ════════════════════════════════════════════════════════════════ 2026 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2026"
    zh: "2026年春季"
  course_name:
    en: "Software Design Practice"
    zh: "软件设计实践"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Prof. Tao Xie"
    zh: "谢涛教授"

# ════════════════════════════════════════════════════════════════ 2025 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2025"
    zh: "2025年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2025"
    zh: "2025年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2025"
    zh: "2025年秋季"
  course_name:
    en: "Intelligent Software Systems and Engineering"
    zh: "智能化软件系统与工程"
  level:
    en: "Graduate"
    zh: "研究生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2025"
    zh: "2025年春季"
  course_name:
    en: "Software Design Practice"
    zh: "软件设计实践"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Prof. Tao Xie"
    zh: "谢涛教授"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2025"
    zh: "2025年春季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Dr. Mo Chen"
    zh: "陈沫博士"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2025"
    zh: "2025年春季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Dr. Mo Chen"
    zh: "陈沫博士"

# ════════════════════════════════════════════════════════════════ 2024 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2024"
    zh: "2024年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2024"
    zh: "2024年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2024"
    zh: "2024年春季"
  course_name:
    en: "Software Design Practice"
    zh: "软件设计实践"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Prof. Tao Xie"
    zh: "谢涛教授"

# ════════════════════════════════════════════════════════════════ 2023 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2023"
    zh: "2023年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2023"
    zh: "2023年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Spring 2023"
    zh: "2023年春季"
  course_name:
    en: "Software Design Practice"
    zh: "软件设计实践"
  level:
    en: "Undergraduate"
    zh: "本科生"
  co_instructor:
    en: "Prof. Tao Xie"
    zh: "谢涛教授"

# ════════════════════════════════════════════════════════════════ 2022 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2022"
    zh: "2022年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2022"
    zh: "2022年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"

# ════════════════════════════════════════════════════════════════ 2021 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2021"
    zh: "2021年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2021"
    zh: "2021年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"

# ════════════════════════════════════════════════════════════════ 2020 ══════
- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2020"
    zh: "2020年秋季"
  course_name:
    en: "Introduction to Computing (C)"
    zh: "计算概论(C)"
  level:
    en: "Undergraduate"
    zh: "本科生"

- lang: zh
  role:
    en: "Instructor"
    zh: "主讲教师"
  institution:
    en: "Peking University"
    zh: "北京大学"
  term:
    en: "Fall 2020"
    zh: "2020年秋季"
  course_name:
    en: "Computer Lab Practicum"
    zh: "计算机实习"
  level:
    en: "Undergraduate"
    zh: "本科生"
`,hf=Symbol.for("yaml.alias"),lf=Symbol.for("yaml.document"),Ws=Symbol.for("yaml.map"),t_=Symbol.for("yaml.pair"),es=Symbol.for("yaml.scalar"),va=Symbol.for("yaml.seq"),Xn=Symbol.for("yaml.node.type"),zt=i=>!!i&&typeof i=="object"&&i[Xn]===hf,At=i=>!!i&&typeof i=="object"&&i[Xn]===lf,Sa=i=>!!i&&typeof i=="object"&&i[Xn]===Ws,we=i=>!!i&&typeof i=="object"&&i[Xn]===t_,Te=i=>!!i&&typeof i=="object"&&i[Xn]===es,ba=i=>!!i&&typeof i=="object"&&i[Xn]===va;function Ne(i){if(i&&typeof i=="object")switch(i[Xn]){case Ws:case va:return!0}return!1}function Ye(i){if(i&&typeof i=="object")switch(i[Xn]){case hf:case Ws:case es:case va:return!0}return!1}const a_=i=>(Te(i)||Ne(i))&&!!i.anchor,hn=Symbol("break visit"),i_=Symbol("skip children"),Pn=Symbol("remove node");function Ct(i,a){const l=l_(a);At(i)?ca(null,i.contents,l,Object.freeze([i]))===Pn&&(i.contents=null):ca(null,i,l,Object.freeze([]))}Ct.BREAK=hn;Ct.SKIP=i_;Ct.REMOVE=Pn;function ca(i,a,l,r){const f=r_(i,a,l,r);if(Ye(f)||we(f))return u_(i,r,f),ca(i,f,l,r);if(typeof f!="symbol"){if(Ne(a)){r=Object.freeze(r.concat(a));for(let c=0;c<a.items.length;++c){const g=ca(c,a.items[c],l,r);if(typeof g=="number")c=g-1;else{if(g===hn)return hn;g===Pn&&(a.items.splice(c,1),c-=1)}}}else if(we(a)){r=Object.freeze(r.concat(a));const c=ca("key",a.key,l,r);if(c===hn)return hn;c===Pn&&(a.key=null);const g=ca("value",a.value,l,r);if(g===hn)return hn;g===Pn&&(a.value=null)}}return f}async function dr(i,a){const l=l_(a);At(i)?await da(null,i.contents,l,Object.freeze([i]))===Pn&&(i.contents=null):await da(null,i,l,Object.freeze([]))}dr.BREAK=hn;dr.SKIP=i_;dr.REMOVE=Pn;async function da(i,a,l,r){const f=await r_(i,a,l,r);if(Ye(f)||we(f))return u_(i,r,f),da(i,f,l,r);if(typeof f!="symbol"){if(Ne(a)){r=Object.freeze(r.concat(a));for(let c=0;c<a.items.length;++c){const g=await da(c,a.items[c],l,r);if(typeof g=="number")c=g-1;else{if(g===hn)return hn;g===Pn&&(a.items.splice(c,1),c-=1)}}}else if(we(a)){r=Object.freeze(r.concat(a));const c=await da("key",a.key,l,r);if(c===hn)return hn;c===Pn&&(a.key=null);const g=await da("value",a.value,l,r);if(g===hn)return hn;g===Pn&&(a.value=null)}}return f}function l_(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function r_(i,a,l,r){if(typeof l=="function")return l(i,a,r);if(Sa(a))return l.Map?.(i,a,r);if(ba(a))return l.Seq?.(i,a,r);if(we(a))return l.Pair?.(i,a,r);if(Te(a))return l.Scalar?.(i,a,r);if(zt(a))return l.Alias?.(i,a,r)}function u_(i,a,l){const r=a[a.length-1];if(Ne(r))r.items[i]=l;else if(we(r))i==="key"?r.key=l:r.value=l;else if(At(r))r.contents=l;else{const f=zt(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${f} parent`)}}const r0={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},u0=i=>i.replace(/[!,[\]{}]/g,a=>r0[a]);class an{constructor(a,l){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},an.defaultYaml,a),this.tags=Object.assign({},an.defaultTags,l)}clone(){const a=new an(this.yaml,this.tags);return a.docStart=this.docStart,a}atDocument(){const a=new an(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:an.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},an.defaultTags);break}return a}add(a,l){this.atNextDocument&&(this.yaml={explicit:an.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},an.defaultTags),this.atNextDocument=!1);const r=a.trim().split(/[ \t]+/),f=r.shift();switch(f){case"%TAG":{if(r.length!==2&&(l(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;const[c,g]=r;return this.tags[c]=g,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return l(0,"%YAML directive should contain exactly one part"),!1;const[c]=r;if(c==="1.1"||c==="1.2")return this.yaml.version=c,!0;{const g=/^\d+\.\d+$/.test(c);return l(6,`Unsupported YAML version ${c}`,g),!1}}default:return l(0,`Unknown directive ${f}`,!0),!1}}tagName(a,l){if(a==="!")return"!";if(a[0]!=="!")return l(`Not a valid tag: ${a}`),null;if(a[1]==="<"){const g=a.slice(2,-1);return g==="!"||g==="!!"?(l(`Verbatim tags aren't resolved, so ${a} is invalid.`),null):(a[a.length-1]!==">"&&l("Verbatim tags must end with a >"),g)}const[,r,f]=a.match(/^(.*!)([^!]*)$/s);f||l(`The ${a} tag has no suffix`);const c=this.tags[r];if(c)try{return c+decodeURIComponent(f)}catch(g){return l(String(g)),null}return r==="!"?a:(l(`Could not resolve tag: ${a}`),null)}tagString(a){for(const[l,r]of Object.entries(this.tags))if(a.startsWith(r))return l+u0(a.substring(r.length));return a[0]==="!"?a:`!<${a}>`}toString(a){const l=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags);let f;if(a&&r.length>0&&Ye(a.contents)){const c={};Ct(a.contents,(g,_)=>{Ye(_)&&_.tag&&(c[_.tag]=!0)}),f=Object.keys(c)}else f=[];for(const[c,g]of r)c==="!!"&&g==="tag:yaml.org,2002:"||(!a||f.some(_=>_.startsWith(g)))&&l.push(`%TAG ${c} ${g}`);return l.join(`
`)}}an.defaultYaml={explicit:!1,version:"1.2"};an.defaultTags={"!!":"tag:yaml.org,2002:"};function o_(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const l=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(l)}return!0}function f_(i){const a=new Set;return Ct(i,{Value(l,r){r.anchor&&a.add(r.anchor)}}),a}function c_(i,a){for(let l=1;;++l){const r=`${i}${l}`;if(!a.has(r))return r}}function o0(i,a){const l=[],r=new Map;let f=null;return{onAnchor:c=>{l.push(c),f??(f=f_(i));const g=c_(a,f);return f.add(g),g},setAnchors:()=>{for(const c of l){const g=r.get(c);if(typeof g=="object"&&g.anchor&&(Te(g.node)||Ne(g.node)))g.node.anchor=g.anchor;else{const _=new Error("Failed to resolve repeated object (this should not happen)");throw _.source=c,_}}},sourceObjects:r}}function ga(i,a,l,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let f=0,c=r.length;f<c;++f){const g=r[f],_=ga(i,r,String(f),g);_===void 0?delete r[f]:_!==g&&(r[f]=_)}else if(r instanceof Map)for(const f of Array.from(r.keys())){const c=r.get(f),g=ga(i,r,f,c);g===void 0?r.delete(f):g!==c&&r.set(f,g)}else if(r instanceof Set)for(const f of Array.from(r)){const c=ga(i,r,f,f);c===void 0?r.delete(f):c!==f&&(r.delete(f),r.add(c))}else for(const[f,c]of Object.entries(r)){const g=ga(i,r,f,c);g===void 0?delete r[f]:g!==c&&(r[f]=g)}return i.call(a,l,r)}function Un(i,a,l){if(Array.isArray(i))return i.map((r,f)=>Un(r,String(f),l));if(i&&typeof i.toJSON=="function"){if(!l||!a_(i))return i.toJSON(a,l);const r={aliasCount:0,count:1,res:void 0};l.anchors.set(i,r),l.onCreate=c=>{r.res=c,delete l.onCreate};const f=i.toJSON(a,l);return l.onCreate&&l.onCreate(f),f}return typeof i=="bigint"&&!l?.keep?Number(i):i}class _f{constructor(a){Object.defineProperty(this,Xn,{value:a})}clone(){const a=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(a.range=this.range.slice()),a}toJS(a,{mapAsMap:l,maxAliasCount:r,onAnchor:f,reviver:c}={}){if(!At(a))throw new TypeError("A document argument is required");const g={anchors:new Map,doc:a,keep:!0,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},_=Un(this,"",g);if(typeof f=="function")for(const{count:p,res:m}of g.anchors.values())f(m,p);return typeof c=="function"?ga(c,{"":_},"",_):_}}class gr extends _f{constructor(a){super(hf),this.source=a,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(a,l){if(l?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let r;l?.aliasResolveCache?r=l.aliasResolveCache:(r=[],Ct(a,{Node:(c,g)=>{(zt(g)||a_(g))&&r.push(g)}}),l&&(l.aliasResolveCache=r));let f;for(const c of r){if(c===this)break;c.anchor===this.source&&(f=c)}return f}toJSON(a,l){if(!l)return{source:this.source};const{anchors:r,doc:f,maxAliasCount:c}=l,g=this.resolve(f,l);if(!g){const p=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(p)}let _=r.get(g);if(_||(Un(g,null,l),_=r.get(g)),_?.res===void 0){const p="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(p)}if(c>=0&&(_.count+=1,_.aliasCount===0&&(_.aliasCount=tr(f,g,r)),_.count*_.aliasCount>c)){const p="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(p)}return _.res}toString(a,l,r){const f=`*${this.source}`;if(a){if(o_(this.source),a.options.verifyAliasOrder&&!a.anchors.has(this.source)){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(c)}if(a.implicitKey)return`${f} `}return f}}function tr(i,a,l){if(zt(a)){const r=a.resolve(i),f=l&&r&&l.get(r);return f?f.count*f.aliasCount:0}else if(Ne(a)){let r=0;for(const f of a.items){const c=tr(i,f,l);c>r&&(r=c)}return r}else if(we(a)){const r=tr(i,a.key,l),f=tr(i,a.value,l);return Math.max(r,f)}return 1}const d_=i=>!i||typeof i!="function"&&typeof i!="object";class te extends _f{constructor(a){super(es),this.value=a}toJSON(a,l){return l?.keep?this.value:Un(this.value,a,l)}toString(){return String(this.value)}}te.BLOCK_FOLDED="BLOCK_FOLDED";te.BLOCK_LITERAL="BLOCK_LITERAL";te.PLAIN="PLAIN";te.QUOTE_DOUBLE="QUOTE_DOUBLE";te.QUOTE_SINGLE="QUOTE_SINGLE";const f0="tag:yaml.org,2002:";function c0(i,a,l){if(a){const r=l.filter(c=>c.tag===a),f=r.find(c=>!c.format)??r[0];if(!f)throw new Error(`Tag ${a} not found`);return f}return l.find(r=>r.identify?.(i)&&!r.format)}function Ci(i,a,l){if(At(i)&&(i=i.contents),Ye(i))return i;if(we(i)){const b=l.schema[Ws].createNode?.(l.schema,null,l);return b.items.push(i),b}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:r,onAnchor:f,onTagObj:c,schema:g,sourceObjects:_}=l;let p;if(r&&i&&typeof i=="object"){if(p=_.get(i),p)return p.anchor??(p.anchor=f(i)),new gr(p.anchor);p={anchor:null,node:null},_.set(i,p)}a?.startsWith("!!")&&(a=f0+a.slice(2));let m=c0(i,a,g.tags);if(!m){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const b=new te(i);return p&&(p.node=b),b}m=i instanceof Map?g[Ws]:Symbol.iterator in Object(i)?g[va]:g[Ws]}c&&(c(m),delete l.onTagObj);const O=m?.createNode?m.createNode(l.schema,i,l):typeof m?.nodeClass?.from=="function"?m.nodeClass.from(l.schema,i,l):new te(i);return a?O.tag=a:m.default||(O.tag=m.tag),p&&(p.node=O),O}function rr(i,a,l){let r=l;for(let f=a.length-1;f>=0;--f){const c=a[f];if(typeof c=="number"&&Number.isInteger(c)&&c>=0){const g=[];g[c]=r,r=g}else r=new Map([[c,r]])}return Ci(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const bi=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class g_ extends _f{constructor(a,l){super(a),Object.defineProperty(this,"schema",{value:l,configurable:!0,enumerable:!1,writable:!0})}clone(a){const l=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return a&&(l.schema=a),l.items=l.items.map(r=>Ye(r)||we(r)?r.clone(a):r),this.range&&(l.range=this.range.slice()),l}addIn(a,l){if(bi(a))this.add(l);else{const[r,...f]=a,c=this.get(r,!0);if(Ne(c))c.addIn(f,l);else if(c===void 0&&this.schema)this.set(r,rr(this.schema,f,l));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${f}`)}}deleteIn(a){const[l,...r]=a;if(r.length===0)return this.delete(l);const f=this.get(l,!0);if(Ne(f))return f.deleteIn(r);throw new Error(`Expected YAML collection at ${l}. Remaining path: ${r}`)}getIn(a,l){const[r,...f]=a,c=this.get(r,!0);return f.length===0?!l&&Te(c)?c.value:c:Ne(c)?c.getIn(f,l):void 0}hasAllNullValues(a){return this.items.every(l=>{if(!we(l))return!1;const r=l.value;return r==null||a&&Te(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(a){const[l,...r]=a;if(r.length===0)return this.has(l);const f=this.get(l,!0);return Ne(f)?f.hasIn(r):!1}setIn(a,l){const[r,...f]=a;if(f.length===0)this.set(r,l);else{const c=this.get(r,!0);if(Ne(c))c.setIn(f,l);else if(c===void 0&&this.schema)this.set(r,rr(this.schema,f,l));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${f}`)}}}const d0=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function Ss(i,a){return/^\n+$/.test(i)?i.substring(1):a?i.replace(/^(?! *$)/gm,a):i}const pt=(i,a,l)=>i.endsWith(`
`)?Ss(l,a):l.includes(`
`)?`
`+Ss(l,a):(i.endsWith(" ")?"":" ")+l,h_="flow",rf="block",ar="quoted";function hr(i,a,l="flow",{indentAtStart:r,lineWidth:f=80,minContentWidth:c=20,onFold:g,onOverflow:_}={}){if(!f||f<0)return i;f<c&&(c=0);const p=Math.max(1+c,1+f-a.length);if(i.length<=p)return i;const m=[],O={};let b=f-a.length;typeof r=="number"&&(r>f-Math.max(2,c)?m.push(0):b=f-r);let A,R,U=!1,T=-1,B=-1,I=-1;l===rf&&(T=qh(i,T,a.length),T!==-1&&(b=T+p));for(let Z;Z=i[T+=1];){if(l===ar&&Z==="\\"){switch(B=T,i[T+1]){case"x":T+=3;break;case"u":T+=5;break;case"U":T+=9;break;default:T+=1}I=T}if(Z===`
`)l===rf&&(T=qh(i,T,a.length)),b=T+a.length+p,A=void 0;else{if(Z===" "&&R&&R!==" "&&R!==`
`&&R!=="	"){const V=i[T+1];V&&V!==" "&&V!==`
`&&V!=="	"&&(A=T)}if(T>=b)if(A)m.push(A),b=A+p,A=void 0;else if(l===ar){for(;R===" "||R==="	";)R=Z,Z=i[T+=1],U=!0;const V=T>I+1?T-2:B-1;if(O[V])return i;m.push(V),O[V]=!0,b=V+p,A=void 0}else U=!0}R=Z}if(U&&_&&_(),m.length===0)return i;g&&g();let x=i.slice(0,m[0]);for(let Z=0;Z<m.length;++Z){const V=m[Z],P=m[Z+1]||i.length;V===0?x=`
${a}${i.slice(0,P)}`:(l===ar&&O[V]&&(x+=`${i[V]}\\`),x+=`
${a}${i.slice(V+1,P)}`)}return x}function qh(i,a,l){let r=a,f=a+1,c=i[f];for(;c===" "||c==="	";)if(a<f+l)c=i[++a];else{do c=i[++a];while(c&&c!==`
`);r=a,f=a+1,c=i[f]}return r}const _r=(i,a)=>({indentAtStart:a?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),mr=i=>/^(%|---|\.\.\.)/m.test(i);function g0(i,a,l){if(!a||a<0)return!1;const r=a-l,f=i.length;if(f<=r)return!1;for(let c=0,g=0;c<f;++c)if(i[c]===`
`){if(c-g>r)return!0;if(g=c+1,f-g<=r)return!1}return!0}function zi(i,a){const l=JSON.stringify(i);if(a.options.doubleQuotedAsJSON)return l;const{implicitKey:r}=a,f=a.options.doubleQuotedMinMultiLineLength,c=a.indent||(mr(i)?"  ":"");let g="",_=0;for(let p=0,m=l[p];m;m=l[++p])if(m===" "&&l[p+1]==="\\"&&l[p+2]==="n"&&(g+=l.slice(_,p)+"\\ ",p+=1,_=p,m="\\"),m==="\\")switch(l[p+1]){case"u":{g+=l.slice(_,p);const O=l.substr(p+2,4);switch(O){case"0000":g+="\\0";break;case"0007":g+="\\a";break;case"000b":g+="\\v";break;case"001b":g+="\\e";break;case"0085":g+="\\N";break;case"00a0":g+="\\_";break;case"2028":g+="\\L";break;case"2029":g+="\\P";break;default:O.substr(0,2)==="00"?g+="\\x"+O.substr(2):g+=l.substr(p,6)}p+=5,_=p+1}break;case"n":if(r||l[p+2]==='"'||l.length<f)p+=1;else{for(g+=l.slice(_,p)+`

`;l[p+2]==="\\"&&l[p+3]==="n"&&l[p+4]!=='"';)g+=`
`,p+=2;g+=c,l[p+2]===" "&&(g+="\\"),p+=1,_=p+1}break;default:p+=1}return g=_?g+l.slice(_):l,r?g:hr(g,c,ar,_r(a,!1))}function uf(i,a){if(a.options.singleQuote===!1||a.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return zi(i,a);const l=a.indent||(mr(i)?"  ":""),r="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${l}`)+"'";return a.implicitKey?r:hr(r,l,h_,_r(a,!1))}function ha(i,a){const{singleQuote:l}=a.options;let r;if(l===!1)r=zi;else{const f=i.includes('"'),c=i.includes("'");f&&!c?r=uf:c&&!f?r=zi:r=l?uf:zi}return r(i,a)}let of;try{of=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{of=/\n+(?!\n|$)/g}function ir({comment:i,type:a,value:l},r,f,c){const{blockQuote:g,commentString:_,lineWidth:p}=r.options;if(!g||/\n[\t ]+$/.test(l))return ha(l,r);const m=r.indent||(r.forceBlockIndent||mr(l)?"  ":""),O=g==="literal"?!0:g==="folded"||a===te.BLOCK_FOLDED?!1:a===te.BLOCK_LITERAL?!0:!g0(l,p,m.length);if(!l)return O?`|
`:`>
`;let b,A;for(A=l.length;A>0;--A){const P=l[A-1];if(P!==`
`&&P!=="	"&&P!==" ")break}let R=l.substring(A);const U=R.indexOf(`
`);U===-1?b="-":l===R||U!==R.length-1?(b="+",c&&c()):b="",R&&(l=l.slice(0,-R.length),R[R.length-1]===`
`&&(R=R.slice(0,-1)),R=R.replace(of,`$&${m}`));let T=!1,B,I=-1;for(B=0;B<l.length;++B){const P=l[B];if(P===" ")T=!0;else if(P===`
`)I=B;else break}let x=l.substring(0,I<B?I+1:B);x&&(l=l.substring(x.length),x=x.replace(/\n+/g,`$&${m}`));let V=(T?m?"2":"1":"")+b;if(i&&(V+=" "+_(i.replace(/ ?[\r\n]+/g," ")),f&&f()),!O){const P=l.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${m}`);let $=!1;const K=_r(r,!0);g!=="folded"&&a!==te.BLOCK_FOLDED&&(K.onOverflow=()=>{$=!0});const q=hr(`${x}${P}${R}`,m,rf,K);if(!$)return`>${V}
${m}${q}`}return l=l.replace(/\n+/g,`$&${m}`),`|${V}
${m}${x}${l}${R}`}function h0(i,a,l,r){const{type:f,value:c}=i,{actualString:g,implicitKey:_,indent:p,indentStep:m,inFlow:O}=a;if(_&&c.includes(`
`)||O&&/[[\]{},]/.test(c))return ha(c,a);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(c))return _||O||!c.includes(`
`)?ha(c,a):ir(i,a,l,r);if(!_&&!O&&f!==te.PLAIN&&c.includes(`
`))return ir(i,a,l,r);if(mr(c)){if(p==="")return a.forceBlockIndent=!0,ir(i,a,l,r);if(_&&p===m)return ha(c,a)}const b=c.replace(/\n+/g,`$&
${p}`);if(g){const A=T=>T.default&&T.tag!=="tag:yaml.org,2002:str"&&T.test?.test(b),{compat:R,tags:U}=a.doc.schema;if(U.some(A)||R?.some(A))return ha(c,a)}return _?b:hr(b,p,h_,_r(a,!1))}function Oi(i,a,l,r){const{implicitKey:f,inFlow:c}=a,g=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:_}=i;_!==te.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(g.value)&&(_=te.QUOTE_DOUBLE);const p=O=>{switch(O){case te.BLOCK_FOLDED:case te.BLOCK_LITERAL:return f||c?ha(g.value,a):ir(g,a,l,r);case te.QUOTE_DOUBLE:return zi(g.value,a);case te.QUOTE_SINGLE:return uf(g.value,a);case te.PLAIN:return h0(g,a,l,r);default:return null}};let m=p(_);if(m===null){const{defaultKeyType:O,defaultStringType:b}=a.options,A=f&&O||b;if(m=p(A),m===null)throw new Error(`Unsupported default string type ${A}`)}return m}function __(i,a){const l=Object.assign({blockQuote:!0,commentString:d0,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,a);let r;switch(l.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:i,flowCollectionPadding:l.flowCollectionPadding?" ":"",indent:"",indentStep:typeof l.indent=="number"?" ".repeat(l.indent):"  ",inFlow:r,options:l}}function _0(i,a){if(a.tag){const f=i.filter(c=>c.tag===a.tag);if(f.length>0)return f.find(c=>c.format===a.format)??f[0]}let l,r;if(Te(a)){r=a.value;let f=i.filter(c=>c.identify?.(r));if(f.length>1){const c=f.filter(g=>g.test);c.length>0&&(f=c)}l=f.find(c=>c.format===a.format)??f.find(c=>!c.format)}else r=a,l=i.find(f=>f.nodeClass&&r instanceof f.nodeClass);if(!l){const f=r?.constructor?.name??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${f} value`)}return l}function m0(i,a,{anchors:l,doc:r}){if(!r.directives)return"";const f=[],c=(Te(i)||Ne(i))&&i.anchor;c&&o_(c)&&(l.add(c),f.push(`&${c}`));const g=i.tag??(a.default?null:a.tag);return g&&f.push(r.directives.tagString(g)),f.join(" ")}function pa(i,a,l,r){if(we(i))return i.toString(a,l,r);if(zt(i)){if(a.doc.directives)return i.toString(a);if(a.resolvedAliases?.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");a.resolvedAliases?a.resolvedAliases.add(i):a.resolvedAliases=new Set([i]),i=i.resolve(a.doc)}let f;const c=Ye(i)?i:a.doc.createNode(i,{onTagObj:p=>f=p});f??(f=_0(a.doc.schema.tags,c));const g=m0(c,f,a);g.length>0&&(a.indentAtStart=(a.indentAtStart??0)+g.length+1);const _=typeof f.stringify=="function"?f.stringify(c,a,l,r):Te(c)?Oi(c,a,l,r):c.toString(a,l,r);return g?Te(c)||_[0]==="{"||_[0]==="["?`${g} ${_}`:`${g}
${a.indent}${_}`:_}function p0({key:i,value:a},l,r,f){const{allNullValues:c,doc:g,indent:_,indentStep:p,options:{commentString:m,indentSeq:O,simpleKeys:b}}=l;let A=Ye(i)&&i.comment||null;if(b){if(A)throw new Error("With simple keys, key nodes cannot have comments");if(Ne(i)||!Ye(i)&&typeof i=="object"){const K="With simple keys, collection cannot be used as a key value";throw new Error(K)}}let R=!b&&(!i||A&&a==null&&!l.inFlow||Ne(i)||(Te(i)?i.type===te.BLOCK_FOLDED||i.type===te.BLOCK_LITERAL:typeof i=="object"));l=Object.assign({},l,{allNullValues:!1,implicitKey:!R&&(b||!c),indent:_+p});let U=!1,T=!1,B=pa(i,l,()=>U=!0,()=>T=!0);if(!R&&!l.inFlow&&B.length>1024){if(b)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");R=!0}if(l.inFlow){if(c||a==null)return U&&r&&r(),B===""?"?":R?`? ${B}`:B}else if(c&&!b||a==null&&R)return B=`? ${B}`,A&&!U?B+=pt(B,l.indent,m(A)):T&&f&&f(),B;U&&(A=null),R?(A&&(B+=pt(B,l.indent,m(A))),B=`? ${B}
${_}:`):(B=`${B}:`,A&&(B+=pt(B,l.indent,m(A))));let I,x,Z;Ye(a)?(I=!!a.spaceBefore,x=a.commentBefore,Z=a.comment):(I=!1,x=null,Z=null,a&&typeof a=="object"&&(a=g.createNode(a))),l.implicitKey=!1,!R&&!A&&Te(a)&&(l.indentAtStart=B.length+1),T=!1,!O&&p.length>=2&&!l.inFlow&&!R&&ba(a)&&!a.flow&&!a.tag&&!a.anchor&&(l.indent=l.indent.substring(2));let V=!1;const P=pa(a,l,()=>V=!0,()=>T=!0);let $=" ";if(A||I||x){if($=I?`
`:"",x){const K=m(x);$+=`
${Ss(K,l.indent)}`}P===""&&!l.inFlow?$===`
`&&Z&&($=`

`):$+=`
${l.indent}`}else if(!R&&Ne(a)){const K=P[0],q=P.indexOf(`
`),pe=q!==-1,nn=l.inFlow??a.flow??a.items.length===0;if(pe||!nn){let Ke=!1;if(pe&&(K==="&"||K==="!")){let ge=P.indexOf(" ");K==="&"&&ge!==-1&&ge<q&&P[ge+1]==="!"&&(ge=P.indexOf(" ",ge+1)),(ge===-1||q<ge)&&(Ke=!0)}Ke||($=`
${l.indent}`)}}else(P===""||P[0]===`
`)&&($="");return B+=$+P,l.inFlow?V&&r&&r():Z&&!V?B+=pt(B,l.indent,m(Z)):T&&f&&f(),B}function m_(i,a){(i==="debug"||i==="warn")&&console.warn(a)}const Ql="<<",bs={identify:i=>i===Ql||typeof i=="symbol"&&i.description===Ql,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new te(Symbol(Ql)),{addToJSMap:p_}),stringify:()=>Ql},y0=(i,a)=>(bs.identify(a)||Te(a)&&(!a.type||a.type===te.PLAIN)&&bs.identify(a.value))&&i?.doc.schema.tags.some(l=>l.tag===bs.tag&&l.default);function p_(i,a,l){const r=y_(i,l);if(ba(r))for(const f of r.items)$o(i,a,f);else if(Array.isArray(r))for(const f of r)$o(i,a,f);else $o(i,a,r)}function $o(i,a,l){const r=y_(i,l);if(!Sa(r))throw new Error("Merge sources must be maps or map aliases");const f=r.toJSON(null,i,Map);for(const[c,g]of f)a instanceof Map?a.has(c)||a.set(c,g):a instanceof Set?a.add(c):Object.prototype.hasOwnProperty.call(a,c)||Object.defineProperty(a,c,{value:g,writable:!0,enumerable:!0,configurable:!0});return a}function y_(i,a){return i&&zt(a)?a.resolve(i.doc,i):a}function v_(i,a,{key:l,value:r}){if(Ye(l)&&l.addToJSMap)l.addToJSMap(i,a,r);else if(y0(i,l))p_(i,a,r);else{const f=Un(l,"",i);if(a instanceof Map)a.set(f,Un(r,f,i));else if(a instanceof Set)a.add(f);else{const c=v0(l,f,i),g=Un(r,c,i);c in a?Object.defineProperty(a,c,{value:g,writable:!0,enumerable:!0,configurable:!0}):a[c]=g}}return a}function v0(i,a,l){if(a===null)return"";if(typeof a!="object")return String(a);if(Ye(i)&&l?.doc){const r=__(l.doc,{});r.anchors=new Set;for(const c of l.anchors.keys())r.anchors.add(c.anchor);r.inFlow=!0,r.inStringifyKey=!0;const f=i.toString(r);if(!l.mapKeyWarned){let c=JSON.stringify(f);c.length>40&&(c=c.substring(0,36)+'..."'),m_(l.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${c}. Set mapAsMap: true to use object keys.`),l.mapKeyWarned=!0}return f}return JSON.stringify(a)}function mf(i,a,l){const r=Ci(i,void 0,l),f=Ci(a,void 0,l);return new en(r,f)}class en{constructor(a,l=null){Object.defineProperty(this,Xn,{value:t_}),this.key=a,this.value=l}clone(a){let{key:l,value:r}=this;return Ye(l)&&(l=l.clone(a)),Ye(r)&&(r=r.clone(a)),new en(l,r)}toJSON(a,l){const r=l?.mapAsMap?new Map:{};return v_(l,r,this)}toString(a,l,r){return a?.doc?p0(this,a,l,r):JSON.stringify(this)}}function S_(i,a,l){return(a.inFlow??i.flow?b0:S0)(i,a,l)}function S0({comment:i,items:a},l,{blockItemPrefix:r,flowChars:f,itemIndent:c,onChompKeep:g,onComment:_}){const{indent:p,options:{commentString:m}}=l,O=Object.assign({},l,{indent:c,type:null});let b=!1;const A=[];for(let U=0;U<a.length;++U){const T=a[U];let B=null;if(Ye(T))!b&&T.spaceBefore&&A.push(""),ur(l,A,T.commentBefore,b),T.comment&&(B=T.comment);else if(we(T)){const x=Ye(T.key)?T.key:null;x&&(!b&&x.spaceBefore&&A.push(""),ur(l,A,x.commentBefore,b))}b=!1;let I=pa(T,O,()=>B=null,()=>b=!0);B&&(I+=pt(I,c,m(B))),b&&B&&(b=!1),A.push(r+I)}let R;if(A.length===0)R=f.start+f.end;else{R=A[0];for(let U=1;U<A.length;++U){const T=A[U];R+=T?`
${p}${T}`:`
`}}return i?(R+=`
`+Ss(m(i),p),_&&_()):b&&g&&g(),R}function b0({items:i},a,{flowChars:l,itemIndent:r}){const{indent:f,indentStep:c,flowCollectionPadding:g,options:{commentString:_}}=a;r+=c;const p=Object.assign({},a,{indent:r,inFlow:!0,type:null});let m=!1,O=0;const b=[];for(let U=0;U<i.length;++U){const T=i[U];let B=null;if(Ye(T))T.spaceBefore&&b.push(""),ur(a,b,T.commentBefore,!1),T.comment&&(B=T.comment);else if(we(T)){const x=Ye(T.key)?T.key:null;x&&(x.spaceBefore&&b.push(""),ur(a,b,x.commentBefore,!1),x.comment&&(m=!0));const Z=Ye(T.value)?T.value:null;Z?(Z.comment&&(B=Z.comment),Z.commentBefore&&(m=!0)):T.value==null&&x?.comment&&(B=x.comment)}B&&(m=!0);let I=pa(T,p,()=>B=null);m||(m=b.length>O||I.includes(`
`)),U<i.length-1?I+=",":a.options.trailingComma&&(a.options.lineWidth>0&&(m||(m=b.reduce((x,Z)=>x+Z.length+2,2)+(I.length+2)>a.options.lineWidth)),m&&(I+=",")),B&&(I+=pt(I,r,_(B))),b.push(I),O=b.length}const{start:A,end:R}=l;if(b.length===0)return A+R;if(!m){const U=b.reduce((T,B)=>T+B.length+2,2);m=a.options.lineWidth>0&&U>a.options.lineWidth}if(m){let U=A;for(const T of b)U+=T?`
${c}${f}${T}`:`
`;return`${U}
${f}${R}`}else return`${A}${g}${b.join(" ")}${g}${R}`}function ur({indent:i,options:{commentString:a}},l,r,f){if(r&&f&&(r=r.replace(/^\n+/,"")),r){const c=Ss(a(r),i);l.push(c.trimStart())}}function yt(i,a){const l=Te(a)?a.value:a;for(const r of i)if(we(r)&&(r.key===a||r.key===l||Te(r.key)&&r.key.value===l))return r}class En extends g_{static get tagName(){return"tag:yaml.org,2002:map"}constructor(a){super(Ws,a),this.items=[]}static from(a,l,r){const{keepUndefined:f,replacer:c}=r,g=new this(a),_=(p,m)=>{if(typeof c=="function")m=c.call(l,p,m);else if(Array.isArray(c)&&!c.includes(p))return;(m!==void 0||f)&&g.items.push(mf(p,m,r))};if(l instanceof Map)for(const[p,m]of l)_(p,m);else if(l&&typeof l=="object")for(const p of Object.keys(l))_(p,l[p]);return typeof a.sortMapEntries=="function"&&g.items.sort(a.sortMapEntries),g}add(a,l){let r;we(a)?r=a:!a||typeof a!="object"||!("key"in a)?r=new en(a,a?.value):r=new en(a.key,a.value);const f=yt(this.items,r.key),c=this.schema?.sortMapEntries;if(f){if(!l)throw new Error(`Key ${r.key} already set`);Te(f.value)&&d_(r.value)?f.value.value=r.value:f.value=r.value}else if(c){const g=this.items.findIndex(_=>c(r,_)<0);g===-1?this.items.push(r):this.items.splice(g,0,r)}else this.items.push(r)}delete(a){const l=yt(this.items,a);return l?this.items.splice(this.items.indexOf(l),1).length>0:!1}get(a,l){const f=yt(this.items,a)?.value;return(!l&&Te(f)?f.value:f)??void 0}has(a){return!!yt(this.items,a)}set(a,l){this.add(new en(a,l),!0)}toJSON(a,l,r){const f=r?new r:l?.mapAsMap?new Map:{};l?.onCreate&&l.onCreate(f);for(const c of this.items)v_(l,f,c);return f}toString(a,l,r){if(!a)return JSON.stringify(this);for(const f of this.items)if(!we(f))throw new Error(`Map items must all be pairs; found ${JSON.stringify(f)} instead`);return!a.allNullValues&&this.hasAllNullValues(!1)&&(a=Object.assign({},a,{allNullValues:!0})),S_(this,a,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:a.indent||"",onChompKeep:r,onComment:l})}}const za={collection:"map",default:!0,nodeClass:En,tag:"tag:yaml.org,2002:map",resolve(i,a){return Sa(i)||a("Expected a mapping for this tag"),i},createNode:(i,a,l)=>En.from(i,a,l)};class $s extends g_{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(a){super(va,a),this.items=[]}add(a){this.items.push(a)}delete(a){const l=Vl(a);return typeof l!="number"?!1:this.items.splice(l,1).length>0}get(a,l){const r=Vl(a);if(typeof r!="number")return;const f=this.items[r];return!l&&Te(f)?f.value:f}has(a){const l=Vl(a);return typeof l=="number"&&l<this.items.length}set(a,l){const r=Vl(a);if(typeof r!="number")throw new Error(`Expected a valid index, not ${a}.`);const f=this.items[r];Te(f)&&d_(l)?f.value=l:this.items[r]=l}toJSON(a,l){const r=[];l?.onCreate&&l.onCreate(r);let f=0;for(const c of this.items)r.push(Un(c,String(f++),l));return r}toString(a,l,r){return a?S_(this,a,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(a.indent||"")+"  ",onChompKeep:r,onComment:l}):JSON.stringify(this)}static from(a,l,r){const{replacer:f}=r,c=new this(a);if(l&&Symbol.iterator in Object(l)){let g=0;for(let _ of l){if(typeof f=="function"){const p=l instanceof Set?_:String(g++);_=f.call(l,p,_)}c.items.push(Ci(_,void 0,r))}}return c}}function Vl(i){let a=Te(i)?i.value:i;return a&&typeof a=="string"&&(a=Number(a)),typeof a=="number"&&Number.isInteger(a)&&a>=0?a:null}const Aa={collection:"seq",default:!0,nodeClass:$s,tag:"tag:yaml.org,2002:seq",resolve(i,a){return ba(i)||a("Expected a sequence for this tag"),i},createNode:(i,a,l)=>$s.from(i,a,l)},pr={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,a,l,r){return a=Object.assign({actualString:!0},a),Oi(i,a,l,r)}},yr={identify:i=>i==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new te(null),stringify:({source:i},a)=>typeof i=="string"&&yr.test.test(i)?i:a.options.nullStr},pf={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new te(i[0]==="t"||i[0]==="T"),stringify({source:i,value:a},l){if(i&&pf.test.test(i)){const r=i[0]==="t"||i[0]==="T";if(a===r)return i}return a?l.options.trueStr:l.options.falseStr}};function Zn({format:i,minFractionDigits:a,tag:l,value:r}){if(typeof r=="bigint")return String(r);const f=typeof r=="number"?r:Number(r);if(!isFinite(f))return isNaN(f)?".nan":f<0?"-.inf":".inf";let c=Object.is(r,-0)?"-0":JSON.stringify(r);if(!i&&a&&(!l||l==="tag:yaml.org,2002:float")&&/^-?\d/.test(c)&&!c.includes("e")){let g=c.indexOf(".");g<0&&(g=c.length,c+=".");let _=a-(c.length-g-1);for(;_-- >0;)c+="0"}return c}const b_={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Zn},z_={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const a=Number(i.value);return isFinite(a)?a.toExponential():Zn(i)}},A_={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const a=new te(parseFloat(i)),l=i.indexOf(".");return l!==-1&&i[i.length-1]==="0"&&(a.minFractionDigits=i.length-l-1),a},stringify:Zn},vr=i=>typeof i=="bigint"||Number.isInteger(i),yf=(i,a,l,{intAsBigInt:r})=>r?BigInt(i):parseInt(i.substring(a),l);function C_(i,a,l){const{value:r}=i;return vr(r)&&r>=0?l+r.toString(a):Zn(i)}const E_={identify:i=>vr(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,a,l)=>yf(i,2,8,l),stringify:i=>C_(i,8,"0o")},M_={identify:vr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,a,l)=>yf(i,0,10,l),stringify:Zn},T_={identify:i=>vr(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,a,l)=>yf(i,2,16,l),stringify:i=>C_(i,16,"0x")},z0=[za,Aa,pr,yr,pf,E_,M_,T_,b_,z_,A_];function Gh(i){return typeof i=="bigint"||Number.isInteger(i)}const $l=({value:i})=>JSON.stringify(i),A0=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:$l},{identify:i=>i==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:$l},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:$l},{identify:Gh,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,a,{intAsBigInt:l})=>l?BigInt(i):parseInt(i,10),stringify:({value:i})=>Gh(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:$l}],C0={default:!0,tag:"",test:/^/,resolve(i,a){return a(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},E0=[za,Aa].concat(A0,C0),vf={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,a){if(typeof atob=="function"){const l=atob(i.replace(/[\n\r]/g,"")),r=new Uint8Array(l.length);for(let f=0;f<l.length;++f)r[f]=l.charCodeAt(f);return r}else return a("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:a,value:l},r,f,c){if(!l)return"";const g=l;let _;if(typeof btoa=="function"){let p="";for(let m=0;m<g.length;++m)p+=String.fromCharCode(g[m]);_=btoa(p)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(a??(a=te.BLOCK_LITERAL),a!==te.QUOTE_DOUBLE){const p=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),m=Math.ceil(_.length/p),O=new Array(m);for(let b=0,A=0;b<m;++b,A+=p)O[b]=_.substr(A,p);_=O.join(a===te.BLOCK_LITERAL?`
`:" ")}return Oi({comment:i,type:a,value:_},r,f,c)}};function O_(i,a){if(ba(i))for(let l=0;l<i.items.length;++l){let r=i.items[l];if(!we(r)){if(Sa(r)){r.items.length>1&&a("Each pair must have its own sequence indicator");const f=r.items[0]||new en(new te(null));if(r.commentBefore&&(f.key.commentBefore=f.key.commentBefore?`${r.commentBefore}
${f.key.commentBefore}`:r.commentBefore),r.comment){const c=f.value??f.key;c.comment=c.comment?`${r.comment}
${c.comment}`:r.comment}r=f}i.items[l]=we(r)?r:new en(r)}}else a("Expected a sequence for this tag");return i}function L_(i,a,l){const{replacer:r}=l,f=new $s(i);f.tag="tag:yaml.org,2002:pairs";let c=0;if(a&&Symbol.iterator in Object(a))for(let g of a){typeof r=="function"&&(g=r.call(a,String(c++),g));let _,p;if(Array.isArray(g))if(g.length===2)_=g[0],p=g[1];else throw new TypeError(`Expected [key, value] tuple: ${g}`);else if(g&&g instanceof Object){const m=Object.keys(g);if(m.length===1)_=m[0],p=g[_];else throw new TypeError(`Expected tuple with one key, not ${m.length} keys`)}else _=g;f.items.push(mf(_,p,l))}return f}const Sf={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:O_,createNode:L_};class _a extends $s{constructor(){super(),this.add=En.prototype.add.bind(this),this.delete=En.prototype.delete.bind(this),this.get=En.prototype.get.bind(this),this.has=En.prototype.has.bind(this),this.set=En.prototype.set.bind(this),this.tag=_a.tag}toJSON(a,l){if(!l)return super.toJSON(a);const r=new Map;l?.onCreate&&l.onCreate(r);for(const f of this.items){let c,g;if(we(f)?(c=Un(f.key,"",l),g=Un(f.value,c,l)):c=Un(f,"",l),r.has(c))throw new Error("Ordered maps must not include duplicate keys");r.set(c,g)}return r}static from(a,l,r){const f=L_(a,l,r),c=new this;return c.items=f.items,c}}_a.tag="tag:yaml.org,2002:omap";const bf={collection:"seq",identify:i=>i instanceof Map,nodeClass:_a,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,a){const l=O_(i,a),r=[];for(const{key:f}of l.items)Te(f)&&(r.includes(f.value)?a(`Ordered maps must not include duplicate keys: ${f.value}`):r.push(f.value));return Object.assign(new _a,l)},createNode:(i,a,l)=>_a.from(i,a,l)};function D_({value:i,source:a},l){return a&&(i?w_:N_).test.test(a)?a:i?l.options.trueStr:l.options.falseStr}const w_={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new te(!0),stringify:D_},N_={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new te(!1),stringify:D_},M0={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Zn},T0={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const a=Number(i.value);return isFinite(a)?a.toExponential():Zn(i)}},O0={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const a=new te(parseFloat(i.replace(/_/g,""))),l=i.indexOf(".");if(l!==-1){const r=i.substring(l+1).replace(/_/g,"");r[r.length-1]==="0"&&(a.minFractionDigits=r.length)}return a},stringify:Zn},Li=i=>typeof i=="bigint"||Number.isInteger(i);function Sr(i,a,l,{intAsBigInt:r}){const f=i[0];if((f==="-"||f==="+")&&(a+=1),i=i.substring(a).replace(/_/g,""),r){switch(l){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const g=BigInt(i);return f==="-"?BigInt(-1)*g:g}const c=parseInt(i,l);return f==="-"?-1*c:c}function zf(i,a,l){const{value:r}=i;if(Li(r)){const f=r.toString(a);return r<0?"-"+l+f.substr(1):l+f}return Zn(i)}const L0={identify:Li,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,a,l)=>Sr(i,2,2,l),stringify:i=>zf(i,2,"0b")},D0={identify:Li,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,a,l)=>Sr(i,1,8,l),stringify:i=>zf(i,8,"0")},w0={identify:Li,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,a,l)=>Sr(i,0,10,l),stringify:Zn},N0={identify:Li,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,a,l)=>Sr(i,2,16,l),stringify:i=>zf(i,16,"0x")};class ma extends En{constructor(a){super(a),this.tag=ma.tag}add(a){let l;we(a)?l=a:a&&typeof a=="object"&&"key"in a&&"value"in a&&a.value===null?l=new en(a.key,null):l=new en(a,null),yt(this.items,l.key)||this.items.push(l)}get(a,l){const r=yt(this.items,a);return!l&&we(r)?Te(r.key)?r.key.value:r.key:r}set(a,l){if(typeof l!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof l}`);const r=yt(this.items,a);r&&!l?this.items.splice(this.items.indexOf(r),1):!r&&l&&this.items.push(new en(a))}toJSON(a,l){return super.toJSON(a,l,Set)}toString(a,l,r){if(!a)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},a,{allNullValues:!0}),l,r);throw new Error("Set items must all have null values")}static from(a,l,r){const{replacer:f}=r,c=new this(a);if(l&&Symbol.iterator in Object(l))for(let g of l)typeof f=="function"&&(g=f.call(l,g,g)),c.items.push(mf(g,null,r));return c}}ma.tag="tag:yaml.org,2002:set";const Af={collection:"map",identify:i=>i instanceof Set,nodeClass:ma,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,a,l)=>ma.from(i,a,l),resolve(i,a){if(Sa(i)){if(i.hasAllNullValues(!0))return Object.assign(new ma,i);a("Set items must all have null values")}else a("Expected a mapping for this tag");return i}};function Cf(i,a){const l=i[0],r=l==="-"||l==="+"?i.substring(1):i,f=g=>a?BigInt(g):Number(g),c=r.replace(/_/g,"").split(":").reduce((g,_)=>g*f(60)+f(_),f(0));return l==="-"?f(-1)*c:c}function Y_(i){let{value:a}=i,l=g=>g;if(typeof a=="bigint")l=g=>BigInt(g);else if(isNaN(a)||!isFinite(a))return Zn(i);let r="";a<0&&(r="-",a*=l(-1));const f=l(60),c=[a%f];return a<60?c.unshift(0):(a=(a-c[0])/f,c.unshift(a%f),a>=60&&(a=(a-c[0])/f,c.unshift(a))),r+c.map(g=>String(g).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const j_={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,a,{intAsBigInt:l})=>Cf(i,l),stringify:Y_},H_={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>Cf(i,!1),stringify:Y_},br={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const a=i.match(br.test);if(!a)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,l,r,f,c,g,_]=a.map(Number),p=a[7]?Number((a[7]+"00").substr(1,3)):0;let m=Date.UTC(l,r-1,f,c||0,g||0,_||0,p);const O=a[8];if(O&&O!=="Z"){let b=Cf(O,!1);Math.abs(b)<30&&(b*=60),m-=6e4*b}return new Date(m)},stringify:({value:i})=>i?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},kh=[za,Aa,pr,yr,w_,N_,L0,D0,w0,N0,M0,T0,O0,vf,bs,bf,Sf,Af,j_,H_,br],Ih=new Map([["core",z0],["failsafe",[za,Aa,pr]],["json",E0],["yaml11",kh],["yaml-1.1",kh]]),xh={binary:vf,bool:pf,float:A_,floatExp:z_,floatNaN:b_,floatTime:H_,int:M_,intHex:T_,intOct:E_,intTime:j_,map:za,merge:bs,null:yr,omap:bf,pairs:Sf,seq:Aa,set:Af,timestamp:br},Y0={"tag:yaml.org,2002:binary":vf,"tag:yaml.org,2002:merge":bs,"tag:yaml.org,2002:omap":bf,"tag:yaml.org,2002:pairs":Sf,"tag:yaml.org,2002:set":Af,"tag:yaml.org,2002:timestamp":br};function Fo(i,a,l){const r=Ih.get(a);if(r&&!i)return l&&!r.includes(bs)?r.concat(bs):r.slice();let f=r;if(!f)if(Array.isArray(i))f=[];else{const c=Array.from(Ih.keys()).filter(g=>g!=="yaml11").map(g=>JSON.stringify(g)).join(", ");throw new Error(`Unknown schema "${a}"; use one of ${c} or define customTags array`)}if(Array.isArray(i))for(const c of i)f=f.concat(c);else typeof i=="function"&&(f=i(f.slice()));return l&&(f=f.concat(bs)),f.reduce((c,g)=>{const _=typeof g=="string"?xh[g]:g;if(!_){const p=JSON.stringify(g),m=Object.keys(xh).map(O=>JSON.stringify(O)).join(", ");throw new Error(`Unknown custom tag ${p}; use one of ${m}`)}return c.includes(_)||c.push(_),c},[])}const j0=(i,a)=>i.key<a.key?-1:i.key>a.key?1:0;class zr{constructor({compat:a,customTags:l,merge:r,resolveKnownTags:f,schema:c,sortMapEntries:g,toStringDefaults:_}){this.compat=Array.isArray(a)?Fo(a,"compat"):a?Fo(null,a):null,this.name=typeof c=="string"&&c||"core",this.knownTags=f?Y0:{},this.tags=Fo(l,this.name,r),this.toStringOptions=_??null,Object.defineProperty(this,Ws,{value:za}),Object.defineProperty(this,es,{value:pr}),Object.defineProperty(this,va,{value:Aa}),this.sortMapEntries=typeof g=="function"?g:g===!0?j0:null}clone(){const a=Object.create(zr.prototype,Object.getOwnPropertyDescriptors(this));return a.tags=this.tags.slice(),a}}function H0(i,a){const l=[];let r=a.directives===!0;if(a.directives!==!1&&i.directives){const p=i.directives.toString(i);p?(l.push(p),r=!0):i.directives.docStart&&(r=!0)}r&&l.push("---");const f=__(i,a),{commentString:c}=f.options;if(i.commentBefore){l.length!==1&&l.unshift("");const p=c(i.commentBefore);l.unshift(Ss(p,""))}let g=!1,_=null;if(i.contents){if(Ye(i.contents)){if(i.contents.spaceBefore&&r&&l.push(""),i.contents.commentBefore){const O=c(i.contents.commentBefore);l.push(Ss(O,""))}f.forceBlockIndent=!!i.comment,_=i.contents.comment}const p=_?void 0:()=>g=!0;let m=pa(i.contents,f,()=>_=null,p);_&&(m+=pt(m,"",c(_))),(m[0]==="|"||m[0]===">")&&l[l.length-1]==="---"?l[l.length-1]=`--- ${m}`:l.push(m)}else l.push(pa(i.contents,f));if(i.directives?.docEnd)if(i.comment){const p=c(i.comment);p.includes(`
`)?(l.push("..."),l.push(Ss(p,""))):l.push(`... ${p}`)}else l.push("...");else{let p=i.comment;p&&g&&(p=p.replace(/^\n+/,"")),p&&((!g||_)&&l[l.length-1]!==""&&l.push(""),l.push(Ss(c(p),"")))}return l.join(`
`)+`
`}class Ca{constructor(a,l,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Xn,{value:lf});let f=null;typeof l=="function"||Array.isArray(l)?f=l:r===void 0&&l&&(r=l,l=void 0);const c=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=c;let{version:g}=c;r?._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(g=this.directives.yaml.version)):this.directives=new an({version:g}),this.setSchema(g,r),this.contents=a===void 0?null:this.createNode(a,f,r)}clone(){const a=Object.create(Ca.prototype,{[Xn]:{value:lf}});return a.commentBefore=this.commentBefore,a.comment=this.comment,a.errors=this.errors.slice(),a.warnings=this.warnings.slice(),a.options=Object.assign({},this.options),this.directives&&(a.directives=this.directives.clone()),a.schema=this.schema.clone(),a.contents=Ye(this.contents)?this.contents.clone(a.schema):this.contents,this.range&&(a.range=this.range.slice()),a}add(a){oa(this.contents)&&this.contents.add(a)}addIn(a,l){oa(this.contents)&&this.contents.addIn(a,l)}createAlias(a,l){if(!a.anchor){const r=f_(this);a.anchor=!l||r.has(l)?c_(l||"a",r):l}return new gr(a.anchor)}createNode(a,l,r){let f;if(typeof l=="function")a=l.call({"":a},"",a),f=l;else if(Array.isArray(l)){const B=x=>typeof x=="number"||x instanceof String||x instanceof Number,I=l.filter(B).map(String);I.length>0&&(l=l.concat(I)),f=l}else r===void 0&&l&&(r=l,l=void 0);const{aliasDuplicateObjects:c,anchorPrefix:g,flow:_,keepUndefined:p,onTagObj:m,tag:O}=r??{},{onAnchor:b,setAnchors:A,sourceObjects:R}=o0(this,g||"a"),U={aliasDuplicateObjects:c??!0,keepUndefined:p??!1,onAnchor:b,onTagObj:m,replacer:f,schema:this.schema,sourceObjects:R},T=Ci(a,O,U);return _&&Ne(T)&&(T.flow=!0),A(),T}createPair(a,l,r={}){const f=this.createNode(a,null,r),c=this.createNode(l,null,r);return new en(f,c)}delete(a){return oa(this.contents)?this.contents.delete(a):!1}deleteIn(a){return bi(a)?this.contents==null?!1:(this.contents=null,!0):oa(this.contents)?this.contents.deleteIn(a):!1}get(a,l){return Ne(this.contents)?this.contents.get(a,l):void 0}getIn(a,l){return bi(a)?!l&&Te(this.contents)?this.contents.value:this.contents:Ne(this.contents)?this.contents.getIn(a,l):void 0}has(a){return Ne(this.contents)?this.contents.has(a):!1}hasIn(a){return bi(a)?this.contents!==void 0:Ne(this.contents)?this.contents.hasIn(a):!1}set(a,l){this.contents==null?this.contents=rr(this.schema,[a],l):oa(this.contents)&&this.contents.set(a,l)}setIn(a,l){bi(a)?this.contents=l:this.contents==null?this.contents=rr(this.schema,Array.from(a),l):oa(this.contents)&&this.contents.setIn(a,l)}setSchema(a,l={}){typeof a=="number"&&(a=String(a));let r;switch(a){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new an({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=a:this.directives=new an({version:a}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{const f=JSON.stringify(a);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${f}`)}}if(l.schema instanceof Object)this.schema=l.schema;else if(r)this.schema=new zr(Object.assign(r,l));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:a,jsonArg:l,mapAsMap:r,maxAliasCount:f,onAnchor:c,reviver:g}={}){const _={anchors:new Map,doc:this,keep:!a,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof f=="number"?f:100},p=Un(this.contents,l??"",_);if(typeof c=="function")for(const{count:m,res:O}of _.anchors.values())c(O,m);return typeof g=="function"?ga(g,{"":p},"",p):p}toJSON(a,l){return this.toJS({json:!0,jsonArg:a,mapAsMap:!1,onAnchor:l})}toString(a={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in a&&(!Number.isInteger(a.indent)||Number(a.indent)<=0)){const l=JSON.stringify(a.indent);throw new Error(`"indent" option must be a positive integer, not ${l}`)}return H0(this,a)}}function oa(i){if(Ne(i))return!0;throw new Error("Expected a YAML collection as document contents")}class Ef extends Error{constructor(a,l,r,f){super(),this.name=a,this.code=r,this.message=f,this.pos=l}}class vt extends Ef{constructor(a,l,r){super("YAMLParseError",a,l,r)}}class B_ extends Ef{constructor(a,l,r){super("YAMLWarning",a,l,r)}}const or=(i,a)=>l=>{if(l.pos[0]===-1)return;l.linePos=l.pos.map(_=>a.linePos(_));const{line:r,col:f}=l.linePos[0];l.message+=` at line ${r}, column ${f}`;let c=f-1,g=i.substring(a.lineStarts[r-1],a.lineStarts[r]).replace(/[\n\r]+$/,"");if(c>=60&&g.length>80){const _=Math.min(c-39,g.length-79);g="…"+g.substring(_),c-=_-1}if(g.length>80&&(g=g.substring(0,79)+"…"),r>1&&/^ *$/.test(g.substring(0,c))){let _=i.substring(a.lineStarts[r-2],a.lineStarts[r-1]);_.length>80&&(_=_.substring(0,79)+`…
`),g=_+g}if(/[^ ]/.test(g)){let _=1;const p=l.linePos[1];p?.line===r&&p.col>f&&(_=Math.max(1,Math.min(p.col-f,80-c)));const m=" ".repeat(c)+"^".repeat(_);l.message+=`:

${g}
${m}
`}};function ya(i,{flow:a,indicator:l,next:r,offset:f,onError:c,parentIndent:g,startOnNewline:_}){let p=!1,m=_,O=_,b="",A="",R=!1,U=!1,T=null,B=null,I=null,x=null,Z=null,V=null,P=null;for(const q of i)switch(U&&(q.type!=="space"&&q.type!=="newline"&&q.type!=="comma"&&c(q.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),U=!1),T&&(m&&q.type!=="comment"&&q.type!=="newline"&&c(T,"TAB_AS_INDENT","Tabs are not allowed as indentation"),T=null),q.type){case"space":!a&&(l!=="doc-start"||r?.type!=="flow-collection")&&q.source.includes("	")&&(T=q),O=!0;break;case"comment":{O||c(q,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const pe=q.source.substring(1)||" ";b?b+=A+pe:b=pe,A="",m=!1;break}case"newline":m?b?b+=q.source:(!V||l!=="seq-item-ind")&&(p=!0):A+=q.source,m=!0,R=!0,(B||I)&&(x=q),O=!0;break;case"anchor":B&&c(q,"MULTIPLE_ANCHORS","A node can have at most one anchor"),q.source.endsWith(":")&&c(q.offset+q.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),B=q,P??(P=q.offset),m=!1,O=!1,U=!0;break;case"tag":{I&&c(q,"MULTIPLE_TAGS","A node can have at most one tag"),I=q,P??(P=q.offset),m=!1,O=!1,U=!0;break}case l:(B||I)&&c(q,"BAD_PROP_ORDER",`Anchors and tags must be after the ${q.source} indicator`),V&&c(q,"UNEXPECTED_TOKEN",`Unexpected ${q.source} in ${a??"collection"}`),V=q,m=l==="seq-item-ind"||l==="explicit-key-ind",O=!1;break;case"comma":if(a){Z&&c(q,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`),Z=q,m=!1,O=!1;break}default:c(q,"UNEXPECTED_TOKEN",`Unexpected ${q.type} token`),m=!1,O=!1}const $=i[i.length-1],K=$?$.offset+$.source.length:f;return U&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&c(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),T&&(m&&T.indent<=g||r?.type==="block-map"||r?.type==="block-seq")&&c(T,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:Z,found:V,spaceBefore:p,comment:b,hasNewline:R,anchor:B,tag:I,newlineAfterProp:x,end:K,start:P??K}}function Ei(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const a of i.end)if(a.type==="newline")return!0}return!1;case"flow-collection":for(const a of i.items){for(const l of a.start)if(l.type==="newline")return!0;if(a.sep){for(const l of a.sep)if(l.type==="newline")return!0}if(Ei(a.key)||Ei(a.value))return!0}return!1;default:return!0}}function ff(i,a,l){if(a?.type==="flow-collection"){const r=a.end[0];r.indent===i&&(r.source==="]"||r.source==="}")&&Ei(a)&&l(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function R_(i,a,l){const{uniqueKeys:r}=i.options;if(r===!1)return!1;const f=typeof r=="function"?r:(c,g)=>c===g||Te(c)&&Te(g)&&c.value===g.value;return a.some(c=>f(c.key,l))}const Zh="All mapping items must start at the same column";function B0({composeNode:i,composeEmptyNode:a},l,r,f,c){const g=c?.nodeClass??En,_=new g(l.schema);l.atRoot&&(l.atRoot=!1);let p=r.offset,m=null;for(const O of r.items){const{start:b,key:A,sep:R,value:U}=O,T=ya(b,{indicator:"explicit-key-ind",next:A??R?.[0],offset:p,onError:f,parentIndent:r.indent,startOnNewline:!0}),B=!T.found;if(B){if(A&&(A.type==="block-seq"?f(p,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in A&&A.indent!==r.indent&&f(p,"BAD_INDENT",Zh)),!T.anchor&&!T.tag&&!R){m=T.end,T.comment&&(_.comment?_.comment+=`
`+T.comment:_.comment=T.comment);continue}(T.newlineAfterProp||Ei(A))&&f(A??b[b.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else T.found?.indent!==r.indent&&f(p,"BAD_INDENT",Zh);l.atKey=!0;const I=T.end,x=A?i(l,A,T,f):a(l,I,b,null,T,f);l.schema.compat&&ff(r.indent,A,f),l.atKey=!1,R_(l,_.items,x)&&f(I,"DUPLICATE_KEY","Map keys must be unique");const Z=ya(R??[],{indicator:"map-value-ind",next:U,offset:x.range[2],onError:f,parentIndent:r.indent,startOnNewline:!A||A.type==="block-scalar"});if(p=Z.end,Z.found){B&&(U?.type==="block-map"&&!Z.hasNewline&&f(p,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),l.options.strict&&T.start<Z.found.offset-1024&&f(x.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const V=U?i(l,U,Z,f):a(l,p,R,null,Z,f);l.schema.compat&&ff(r.indent,U,f),p=V.range[2];const P=new en(x,V);l.options.keepSourceTokens&&(P.srcToken=O),_.items.push(P)}else{B&&f(x.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),Z.comment&&(x.comment?x.comment+=`
`+Z.comment:x.comment=Z.comment);const V=new en(x);l.options.keepSourceTokens&&(V.srcToken=O),_.items.push(V)}}return m&&m<p&&f(m,"IMPOSSIBLE","Map comment with trailing content"),_.range=[r.offset,p,m??p],_}function R0({composeNode:i,composeEmptyNode:a},l,r,f,c){const g=c?.nodeClass??$s,_=new g(l.schema);l.atRoot&&(l.atRoot=!1),l.atKey&&(l.atKey=!1);let p=r.offset,m=null;for(const{start:O,value:b}of r.items){const A=ya(O,{indicator:"seq-item-ind",next:b,offset:p,onError:f,parentIndent:r.indent,startOnNewline:!0});if(!A.found)if(A.anchor||A.tag||b)b?.type==="block-seq"?f(A.end,"BAD_INDENT","All sequence items must start at the same column"):f(p,"MISSING_CHAR","Sequence item without - indicator");else{m=A.end,A.comment&&(_.comment=A.comment);continue}const R=b?i(l,b,A,f):a(l,A.end,O,null,A,f);l.schema.compat&&ff(r.indent,b,f),p=R.range[2],_.items.push(R)}return _.range=[r.offset,p,m??p],_}function Di(i,a,l,r){let f="";if(i){let c=!1,g="";for(const _ of i){const{source:p,type:m}=_;switch(m){case"space":c=!0;break;case"comment":{l&&!c&&r(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const O=p.substring(1)||" ";f?f+=g+O:f=O,g="";break}case"newline":f&&(g+=p),c=!0;break;default:r(_,"UNEXPECTED_TOKEN",`Unexpected ${m} at node end`)}a+=p.length}}return{comment:f,offset:a}}const Po="Block collections are not allowed within flow collections",ef=i=>i&&(i.type==="block-map"||i.type==="block-seq");function U0({composeNode:i,composeEmptyNode:a},l,r,f,c){const g=r.start.source==="{",_=g?"flow map":"flow sequence",p=c?.nodeClass??(g?En:$s),m=new p(l.schema);m.flow=!0;const O=l.atRoot;O&&(l.atRoot=!1),l.atKey&&(l.atKey=!1);let b=r.offset+r.start.source.length;for(let B=0;B<r.items.length;++B){const I=r.items[B],{start:x,key:Z,sep:V,value:P}=I,$=ya(x,{flow:_,indicator:"explicit-key-ind",next:Z??V?.[0],offset:b,onError:f,parentIndent:r.indent,startOnNewline:!1});if(!$.found){if(!$.anchor&&!$.tag&&!V&&!P){B===0&&$.comma?f($.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${_}`):B<r.items.length-1&&f($.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${_}`),$.comment&&(m.comment?m.comment+=`
`+$.comment:m.comment=$.comment),b=$.end;continue}!g&&l.options.strict&&Ei(Z)&&f(Z,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(B===0)$.comma&&f($.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${_}`);else if($.comma||f($.start,"MISSING_CHAR",`Missing , between ${_} items`),$.comment){let K="";e:for(const q of x)switch(q.type){case"comma":case"space":break;case"comment":K=q.source.substring(1);break e;default:break e}if(K){let q=m.items[m.items.length-1];we(q)&&(q=q.value??q.key),q.comment?q.comment+=`
`+K:q.comment=K,$.comment=$.comment.substring(K.length+1)}}if(!g&&!V&&!$.found){const K=P?i(l,P,$,f):a(l,$.end,V,null,$,f);m.items.push(K),b=K.range[2],ef(P)&&f(K.range,"BLOCK_IN_FLOW",Po)}else{l.atKey=!0;const K=$.end,q=Z?i(l,Z,$,f):a(l,K,x,null,$,f);ef(Z)&&f(q.range,"BLOCK_IN_FLOW",Po),l.atKey=!1;const pe=ya(V??[],{flow:_,indicator:"map-value-ind",next:P,offset:q.range[2],onError:f,parentIndent:r.indent,startOnNewline:!1});if(pe.found){if(!g&&!$.found&&l.options.strict){if(V)for(const ge of V){if(ge===pe.found)break;if(ge.type==="newline"){f(ge,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}$.start<pe.found.offset-1024&&f(pe.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else P&&("source"in P&&P.source?.[0]===":"?f(P,"MISSING_CHAR",`Missing space after : in ${_}`):f(pe.start,"MISSING_CHAR",`Missing , or : between ${_} items`));const nn=P?i(l,P,pe,f):pe.found?a(l,pe.end,V,null,pe,f):null;nn?ef(P)&&f(nn.range,"BLOCK_IN_FLOW",Po):pe.comment&&(q.comment?q.comment+=`
`+pe.comment:q.comment=pe.comment);const Ke=new en(q,nn);if(l.options.keepSourceTokens&&(Ke.srcToken=I),g){const ge=m;R_(l,ge.items,q)&&f(K,"DUPLICATE_KEY","Map keys must be unique"),ge.items.push(Ke)}else{const ge=new En(l.schema);ge.flow=!0,ge.items.push(Ke);const Jn=(nn??q).range;ge.range=[q.range[0],Jn[1],Jn[2]],m.items.push(ge)}b=nn?nn.range[2]:pe.end}}const A=g?"}":"]",[R,...U]=r.end;let T=b;if(R?.source===A)T=R.offset+R.source.length;else{const B=_[0].toUpperCase()+_.substring(1),I=O?`${B} must end with a ${A}`:`${B} in block collection must be sufficiently indented and end with a ${A}`;f(b,O?"MISSING_CHAR":"BAD_INDENT",I),R&&R.source.length!==1&&U.unshift(R)}if(U.length>0){const B=Di(U,T,l.options.strict,f);B.comment&&(m.comment?m.comment+=`
`+B.comment:m.comment=B.comment),m.range=[r.offset,T,B.offset]}else m.range=[r.offset,T,T];return m}function nf(i,a,l,r,f,c){const g=l.type==="block-map"?B0(i,a,l,r,c):l.type==="block-seq"?R0(i,a,l,r,c):U0(i,a,l,r,c),_=g.constructor;return f==="!"||f===_.tagName?(g.tag=_.tagName,g):(f&&(g.tag=f),g)}function X0(i,a,l,r,f){const c=r.tag,g=c?a.directives.tagName(c.source,A=>f(c,"TAG_RESOLVE_FAILED",A)):null;if(l.type==="block-seq"){const{anchor:A,newlineAfterProp:R}=r,U=A&&c?A.offset>c.offset?A:c:A??c;U&&(!R||R.offset<U.offset)&&f(U,"MISSING_CHAR","Missing newline after block sequence props")}const _=l.type==="block-map"?"map":l.type==="block-seq"?"seq":l.start.source==="{"?"map":"seq";if(!c||!g||g==="!"||g===En.tagName&&_==="map"||g===$s.tagName&&_==="seq")return nf(i,a,l,f,g);let p=a.schema.tags.find(A=>A.tag===g&&A.collection===_);if(!p){const A=a.schema.knownTags[g];if(A?.collection===_)a.schema.tags.push(Object.assign({},A,{default:!1})),p=A;else return A?f(c,"BAD_COLLECTION_TYPE",`${A.tag} used for ${_} collection, but expects ${A.collection??"scalar"}`,!0):f(c,"TAG_RESOLVE_FAILED",`Unresolved tag: ${g}`,!0),nf(i,a,l,f,g)}const m=nf(i,a,l,f,g,p),O=p.resolve?.(m,A=>f(c,"TAG_RESOLVE_FAILED",A),a.options)??m,b=Ye(O)?O:new te(O);return b.range=m.range,b.tag=g,p?.format&&(b.format=p.format),b}function U_(i,a,l){const r=a.offset,f=q0(a,i.options.strict,l);if(!f)return{value:"",type:null,comment:"",range:[r,r,r]};const c=f.mode===">"?te.BLOCK_FOLDED:te.BLOCK_LITERAL,g=a.source?G0(a.source):[];let _=g.length;for(let T=g.length-1;T>=0;--T){const B=g[T][1];if(B===""||B==="\r")_=T;else break}if(_===0){const T=f.chomp==="+"&&g.length>0?`
`.repeat(Math.max(1,g.length-1)):"";let B=r+f.length;return a.source&&(B+=a.source.length),{value:T,type:c,comment:f.comment,range:[r,B,B]}}let p=a.indent+f.indent,m=a.offset+f.length,O=0;for(let T=0;T<_;++T){const[B,I]=g[T];if(I===""||I==="\r")f.indent===0&&B.length>p&&(p=B.length);else{B.length<p&&l(m+B.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),f.indent===0&&(p=B.length),O=T,p===0&&!i.atRoot&&l(m,"BAD_INDENT","Block scalar values in collections must be indented");break}m+=B.length+I.length+1}for(let T=g.length-1;T>=_;--T)g[T][0].length>p&&(_=T+1);let b="",A="",R=!1;for(let T=0;T<O;++T)b+=g[T][0].slice(p)+`
`;for(let T=O;T<_;++T){let[B,I]=g[T];m+=B.length+I.length+1;const x=I[I.length-1]==="\r";if(x&&(I=I.slice(0,-1)),I&&B.length<p){const V=`Block scalar lines must not be less indented than their ${f.indent?"explicit indentation indicator":"first line"}`;l(m-I.length-(x?2:1),"BAD_INDENT",V),B=""}c===te.BLOCK_LITERAL?(b+=A+B.slice(p)+I,A=`
`):B.length>p||I[0]==="	"?(A===" "?A=`
`:!R&&A===`
`&&(A=`

`),b+=A+B.slice(p)+I,A=`
`,R=!0):I===""?A===`
`?b+=`
`:A=`
`:(b+=A+I,A=" ",R=!1)}switch(f.chomp){case"-":break;case"+":for(let T=_;T<g.length;++T)b+=`
`+g[T][0].slice(p);b[b.length-1]!==`
`&&(b+=`
`);break;default:b+=`
`}const U=r+f.length+a.source.length;return{value:b,type:c,comment:f.comment,range:[r,U,U]}}function q0({offset:i,props:a},l,r){if(a[0].type!=="block-scalar-header")return r(a[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:f}=a[0],c=f[0];let g=0,_="",p=-1;for(let A=1;A<f.length;++A){const R=f[A];if(!_&&(R==="-"||R==="+"))_=R;else{const U=Number(R);!g&&U?g=U:p===-1&&(p=i+A)}}p!==-1&&r(p,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${f}`);let m=!1,O="",b=f.length;for(let A=1;A<a.length;++A){const R=a[A];switch(R.type){case"space":m=!0;case"newline":b+=R.source.length;break;case"comment":l&&!m&&r(R,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),b+=R.source.length,O=R.source.substring(1);break;case"error":r(R,"UNEXPECTED_TOKEN",R.message),b+=R.source.length;break;default:{const U=`Unexpected token in block scalar header: ${R.type}`;r(R,"UNEXPECTED_TOKEN",U);const T=R.source;T&&typeof T=="string"&&(b+=T.length)}}}return{mode:c,indent:g,chomp:_,comment:O,length:b}}function G0(i){const a=i.split(/\n( *)/),l=a[0],r=l.match(/^( *)/),c=[r?.[1]?[r[1],l.slice(r[1].length)]:["",l]];for(let g=1;g<a.length;g+=2)c.push([a[g],a[g+1]]);return c}function X_(i,a,l){const{offset:r,type:f,source:c,end:g}=i;let _,p;const m=(A,R,U)=>l(r+A,R,U);switch(f){case"scalar":_=te.PLAIN,p=k0(c,m);break;case"single-quoted-scalar":_=te.QUOTE_SINGLE,p=I0(c,m);break;case"double-quoted-scalar":_=te.QUOTE_DOUBLE,p=x0(c,m);break;default:return l(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${f}`),{value:"",type:null,comment:"",range:[r,r+c.length,r+c.length]}}const O=r+c.length,b=Di(g,O,a,l);return{value:p,type:_,comment:b.comment,range:[r,O,b.offset]}}function k0(i,a){let l="";switch(i[0]){case"	":l="a tab character";break;case",":l="flow indicator character ,";break;case"%":l="directive indicator character %";break;case"|":case">":{l=`block scalar indicator ${i[0]}`;break}case"@":case"`":{l=`reserved character ${i[0]}`;break}}return l&&a(0,"BAD_SCALAR_START",`Plain value cannot start with ${l}`),q_(i)}function I0(i,a){return(i[i.length-1]!=="'"||i.length===1)&&a(i.length,"MISSING_CHAR","Missing closing 'quote"),q_(i.slice(1,-1)).replace(/''/g,"'")}function q_(i){let a,l;try{a=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),l=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{a=/(.*?)[ \t]*\r?\n/sy,l=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=a.exec(i);if(!r)return i;let f=r[1],c=" ",g=a.lastIndex;for(l.lastIndex=g;r=l.exec(i);)r[1]===""?c===`
`?f+=c:c=`
`:(f+=c+r[1],c=" "),g=l.lastIndex;const _=/[ \t]*(.*)/sy;return _.lastIndex=g,r=_.exec(i),f+c+(r?.[1]??"")}function x0(i,a){let l="";for(let r=1;r<i.length-1;++r){const f=i[r];if(!(f==="\r"&&i[r+1]===`
`))if(f===`
`){const{fold:c,offset:g}=Z0(i,r);l+=c,r=g}else if(f==="\\"){let c=i[++r];const g=J0[c];if(g)l+=g;else if(c===`
`)for(c=i[r+1];c===" "||c==="	";)c=i[++r+1];else if(c==="\r"&&i[r+1]===`
`)for(c=i[++r+1];c===" "||c==="	";)c=i[++r+1];else if(c==="x"||c==="u"||c==="U"){const _=c==="x"?2:c==="u"?4:8;l+=K0(i,r+1,_,a),r+=_}else{const _=i.substr(r-1,2);a(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${_}`),l+=_}}else if(f===" "||f==="	"){const c=r;let g=i[r+1];for(;g===" "||g==="	";)g=i[++r+1];g!==`
`&&!(g==="\r"&&i[r+2]===`
`)&&(l+=r>c?i.slice(c,r+1):f)}else l+=f}return(i[i.length-1]!=='"'||i.length===1)&&a(i.length,"MISSING_CHAR",'Missing closing "quote'),l}function Z0(i,a){let l="",r=i[a+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&i[a+2]!==`
`);)r===`
`&&(l+=`
`),a+=1,r=i[a+1];return l||(l=" "),{fold:l,offset:a}}const J0={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function K0(i,a,l,r){const f=i.substr(a,l),g=f.length===l&&/^[0-9a-fA-F]+$/.test(f)?parseInt(f,16):NaN;try{return String.fromCodePoint(g)}catch{const _=i.substr(a-2,l+2);return r(a-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${_}`),_}}function G_(i,a,l,r){const{value:f,type:c,comment:g,range:_}=a.type==="block-scalar"?U_(i,a,r):X_(a,i.options.strict,r),p=l?i.directives.tagName(l.source,b=>r(l,"TAG_RESOLVE_FAILED",b)):null;let m;i.options.stringKeys&&i.atKey?m=i.schema[es]:p?m=W0(i.schema,f,p,l,r):a.type==="scalar"?m=Q0(i,f,a,r):m=i.schema[es];let O;try{const b=m.resolve(f,A=>r(l??a,"TAG_RESOLVE_FAILED",A),i.options);O=Te(b)?b:new te(b)}catch(b){const A=b instanceof Error?b.message:String(b);r(l??a,"TAG_RESOLVE_FAILED",A),O=new te(f)}return O.range=_,O.source=f,c&&(O.type=c),p&&(O.tag=p),m.format&&(O.format=m.format),g&&(O.comment=g),O}function W0(i,a,l,r,f){if(l==="!")return i[es];const c=[];for(const _ of i.tags)if(!_.collection&&_.tag===l)if(_.default&&_.test)c.push(_);else return _;for(const _ of c)if(_.test?.test(a))return _;const g=i.knownTags[l];return g&&!g.collection?(i.tags.push(Object.assign({},g,{default:!1,test:void 0})),g):(f(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${l}`,l!=="tag:yaml.org,2002:str"),i[es])}function Q0({atKey:i,directives:a,schema:l},r,f,c){const g=l.tags.find(_=>(_.default===!0||i&&_.default==="key")&&_.test?.test(r))||l[es];if(l.compat){const _=l.compat.find(p=>p.default&&p.test?.test(r))??l[es];if(g.tag!==_.tag){const p=a.tagString(g.tag),m=a.tagString(_.tag),O=`Value may be parsed as either ${p} or ${m}`;c(f,"TAG_RESOLVE_FAILED",O,!0)}}return g}function V0(i,a,l){if(a){l??(l=a.length);for(let r=l-1;r>=0;--r){let f=a[r];switch(f.type){case"space":case"comment":case"newline":i-=f.source.length;continue}for(f=a[++r];f?.type==="space";)i+=f.source.length,f=a[++r];break}}return i}const $0={composeNode:k_,composeEmptyNode:Mf};function k_(i,a,l,r){const f=i.atKey,{spaceBefore:c,comment:g,anchor:_,tag:p}=l;let m,O=!0;switch(a.type){case"alias":m=F0(i,a,r),(_||p)&&r(a,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":m=G_(i,a,p,r),_&&(m.anchor=_.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{m=X0($0,i,a,l,r),_&&(m.anchor=_.source.substring(1))}catch(b){const A=b instanceof Error?b.message:String(b);r(a,"RESOURCE_EXHAUSTION",A)}break;default:{const b=a.type==="error"?a.message:`Unsupported token (type: ${a.type})`;r(a,"UNEXPECTED_TOKEN",b),O=!1}}return m??(m=Mf(i,a.offset,void 0,null,l,r)),_&&m.anchor===""&&r(_,"BAD_ALIAS","Anchor cannot be an empty string"),f&&i.options.stringKeys&&(!Te(m)||typeof m.value!="string"||m.tag&&m.tag!=="tag:yaml.org,2002:str")&&r(p??a,"NON_STRING_KEY","With stringKeys, all keys must be strings"),c&&(m.spaceBefore=!0),g&&(a.type==="scalar"&&a.source===""?m.comment=g:m.commentBefore=g),i.options.keepSourceTokens&&O&&(m.srcToken=a),m}function Mf(i,a,l,r,{spaceBefore:f,comment:c,anchor:g,tag:_,end:p},m){const O={type:"scalar",offset:V0(a,l,r),indent:-1,source:""},b=G_(i,O,_,m);return g&&(b.anchor=g.source.substring(1),b.anchor===""&&m(g,"BAD_ALIAS","Anchor cannot be an empty string")),f&&(b.spaceBefore=!0),c&&(b.comment=c,b.range[2]=p),b}function F0({options:i},{offset:a,source:l,end:r},f){const c=new gr(l.substring(1));c.source===""&&f(a,"BAD_ALIAS","Alias cannot be an empty string"),c.source.endsWith(":")&&f(a+l.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const g=a+l.length,_=Di(r,g,i.strict,f);return c.range=[a,g,_.offset],_.comment&&(c.comment=_.comment),c}function P0(i,a,{offset:l,start:r,value:f,end:c},g){const _=Object.assign({_directives:a},i),p=new Ca(void 0,_),m={atKey:!1,atRoot:!0,directives:p.directives,options:p.options,schema:p.schema},O=ya(r,{indicator:"doc-start",next:f??c?.[0],offset:l,onError:g,parentIndent:0,startOnNewline:!0});O.found&&(p.directives.docStart=!0,f&&(f.type==="block-map"||f.type==="block-seq")&&!O.hasNewline&&g(O.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),p.contents=f?k_(m,f,O,g):Mf(m,O.end,r,null,O,g);const b=p.contents.range[2],A=Di(c,b,!1,g);return A.comment&&(p.comment=A.comment),p.range=[l,b,A.offset],p}function Si(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:a,source:l}=i;return[a,a+(typeof l=="string"?l.length:1)]}function Jh(i){let a="",l=!1,r=!1;for(let f=0;f<i.length;++f){const c=i[f];switch(c[0]){case"#":a+=(a===""?"":r?`

`:`
`)+(c.substring(1)||" "),l=!0,r=!1;break;case"%":i[f+1]?.[0]!=="#"&&(f+=1),l=!1;break;default:l||(r=!0),l=!1}}return{comment:a,afterEmptyLine:r}}class Tf{constructor(a={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(l,r,f,c)=>{const g=Si(l);c?this.warnings.push(new B_(g,r,f)):this.errors.push(new vt(g,r,f))},this.directives=new an({version:a.version||"1.2"}),this.options=a}decorate(a,l){const{comment:r,afterEmptyLine:f}=Jh(this.prelude);if(r){const c=a.contents;if(l)a.comment=a.comment?`${a.comment}
${r}`:r;else if(f||a.directives.docStart||!c)a.commentBefore=r;else if(Ne(c)&&!c.flow&&c.items.length>0){let g=c.items[0];we(g)&&(g=g.key);const _=g.commentBefore;g.commentBefore=_?`${r}
${_}`:r}else{const g=c.commentBefore;c.commentBefore=g?`${r}
${g}`:r}}if(l){for(let c=0;c<this.errors.length;++c)a.errors.push(this.errors[c]);for(let c=0;c<this.warnings.length;++c)a.warnings.push(this.warnings[c])}else a.errors=this.errors,a.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Jh(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(a,l=!1,r=-1){for(const f of a)yield*this.next(f);yield*this.end(l,r)}*next(a){switch(a.type){case"directive":this.directives.add(a.source,(l,r,f)=>{const c=Si(a);c[0]+=l,this.onError(c,"BAD_DIRECTIVE",r,f)}),this.prelude.push(a.source),this.atDirectives=!0;break;case"document":{const l=P0(this.options,this.directives,a,this.onError);this.atDirectives&&!l.directives.docStart&&this.onError(a,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(l,!1),this.doc&&(yield this.doc),this.doc=l,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(a.source);break;case"error":{const l=a.source?`${a.message}: ${JSON.stringify(a.source)}`:a.message,r=new vt(Si(a),"UNEXPECTED_TOKEN",l);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){const r="Unexpected doc-end without preceding document";this.errors.push(new vt(Si(a),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;const l=Di(a.end,a.offset+a.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),l.comment){const r=this.doc.comment;this.doc.comment=r?`${r}
${l.comment}`:l.comment}this.doc.range[2]=l.offset;break}default:this.errors.push(new vt(Si(a),"UNEXPECTED_TOKEN",`Unsupported token ${a.type}`))}}*end(a=!1,l=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(a){const r=Object.assign({_directives:this.directives},this.options),f=new Ca(void 0,r);this.atDirectives&&this.onError(l,"MISSING_CHAR","Missing directives-end indicator line"),f.range=[0,l,l],this.decorate(f,!1),yield f}}}function e2(i,a=!0,l){if(i){const r=(f,c,g)=>{const _=typeof f=="number"?f:Array.isArray(f)?f[0]:f.offset;if(l)l(_,c,g);else throw new vt([_,_+1],c,g)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return X_(i,a,r);case"block-scalar":return U_({options:{strict:a}},i,r)}}return null}function n2(i,a){const{implicitKey:l=!1,indent:r,inFlow:f=!1,offset:c=-1,type:g="PLAIN"}=a,_=Oi({type:g,value:i},{implicitKey:l,indent:r>0?" ".repeat(r):"",inFlow:f,options:{blockQuote:!0,lineWidth:-1}}),p=a.end??[{type:"newline",offset:-1,indent:r,source:`
`}];switch(_[0]){case"|":case">":{const m=_.indexOf(`
`),O=_.substring(0,m),b=_.substring(m+1)+`
`,A=[{type:"block-scalar-header",offset:c,indent:r,source:O}];return I_(A,p)||A.push({type:"newline",offset:-1,indent:r,source:`
`}),{type:"block-scalar",offset:c,indent:r,props:A,source:b}}case'"':return{type:"double-quoted-scalar",offset:c,indent:r,source:_,end:p};case"'":return{type:"single-quoted-scalar",offset:c,indent:r,source:_,end:p};default:return{type:"scalar",offset:c,indent:r,source:_,end:p}}}function s2(i,a,l={}){let{afterKey:r=!1,implicitKey:f=!1,inFlow:c=!1,type:g}=l,_="indent"in i?i.indent:null;if(r&&typeof _=="number"&&(_+=2),!g)switch(i.type){case"single-quoted-scalar":g="QUOTE_SINGLE";break;case"double-quoted-scalar":g="QUOTE_DOUBLE";break;case"block-scalar":{const m=i.props[0];if(m.type!=="block-scalar-header")throw new Error("Invalid block scalar header");g=m.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:g="PLAIN"}const p=Oi({type:g,value:a},{implicitKey:f||_===null,indent:_!==null&&_>0?" ".repeat(_):"",inFlow:c,options:{blockQuote:!0,lineWidth:-1}});switch(p[0]){case"|":case">":t2(i,p);break;case'"':sf(i,p,"double-quoted-scalar");break;case"'":sf(i,p,"single-quoted-scalar");break;default:sf(i,p,"scalar")}}function t2(i,a){const l=a.indexOf(`
`),r=a.substring(0,l),f=a.substring(l+1)+`
`;if(i.type==="block-scalar"){const c=i.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");c.source=r,i.source=f}else{const{offset:c}=i,g="indent"in i?i.indent:-1,_=[{type:"block-scalar-header",offset:c,indent:g,source:r}];I_(_,"end"in i?i.end:void 0)||_.push({type:"newline",offset:-1,indent:g,source:`
`});for(const p of Object.keys(i))p!=="type"&&p!=="offset"&&delete i[p];Object.assign(i,{type:"block-scalar",indent:g,props:_,source:f})}}function I_(i,a){if(a)for(const l of a)switch(l.type){case"space":case"comment":i.push(l);break;case"newline":return i.push(l),!0}return!1}function sf(i,a,l){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=l,i.source=a;break;case"block-scalar":{const r=i.props.slice(1);let f=a.length;i.props[0].type==="block-scalar-header"&&(f-=i.props[0].source.length);for(const c of r)c.offset+=f;delete i.props,Object.assign(i,{type:l,source:a,end:r});break}case"block-map":case"block-seq":{const f={type:"newline",offset:i.offset+a.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:l,source:a,end:[f]});break}default:{const r="indent"in i?i.indent:-1,f="end"in i&&Array.isArray(i.end)?i.end.filter(c=>c.type==="space"||c.type==="comment"||c.type==="newline"):[];for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:l,indent:r,source:a,end:f})}}}const a2=i=>"type"in i?fr(i):lr(i);function fr(i){switch(i.type){case"block-scalar":{let a="";for(const l of i.props)a+=fr(l);return a+i.source}case"block-map":case"block-seq":{let a="";for(const l of i.items)a+=lr(l);return a}case"flow-collection":{let a=i.start.source;for(const l of i.items)a+=lr(l);for(const l of i.end)a+=l.source;return a}case"document":{let a=lr(i);if(i.end)for(const l of i.end)a+=l.source;return a}default:{let a=i.source;if("end"in i&&i.end)for(const l of i.end)a+=l.source;return a}}}function lr({start:i,key:a,sep:l,value:r}){let f="";for(const c of i)f+=c.source;if(a&&(f+=fr(a)),l)for(const c of l)f+=c.source;return r&&(f+=fr(r)),f}const cf=Symbol("break visit"),i2=Symbol("skip children"),x_=Symbol("remove item");function St(i,a){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),Z_(Object.freeze([]),i,a)}St.BREAK=cf;St.SKIP=i2;St.REMOVE=x_;St.itemAtPath=(i,a)=>{let l=i;for(const[r,f]of a){const c=l?.[r];if(c&&"items"in c)l=c.items[f];else return}return l};St.parentCollection=(i,a)=>{const l=St.itemAtPath(i,a.slice(0,-1)),r=a[a.length-1][0],f=l?.[r];if(f&&"items"in f)return f;throw new Error("Parent collection not found")};function Z_(i,a,l){let r=l(a,i);if(typeof r=="symbol")return r;for(const f of["key","value"]){const c=a[f];if(c&&"items"in c){for(let g=0;g<c.items.length;++g){const _=Z_(Object.freeze(i.concat([[f,g]])),c.items[g],l);if(typeof _=="number")g=_-1;else{if(_===cf)return cf;_===x_&&(c.items.splice(g,1),g-=1)}}typeof r=="function"&&f==="key"&&(r=r(a,i))}}return typeof r=="function"?r(a,i):r}const Ar="\uFEFF",Cr="",Er="",Mi="",l2=i=>!!i&&"items"in i,r2=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function u2(i){switch(i){case Ar:return"<BOM>";case Cr:return"<DOC>";case Er:return"<FLOW_END>";case Mi:return"<SCALAR>";default:return JSON.stringify(i)}}function J_(i){switch(i){case Ar:return"byte-order-mark";case Cr:return"doc-mode";case Er:return"flow-error-end";case Mi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const o2=Object.freeze(Object.defineProperty({__proto__:null,BOM:Ar,DOCUMENT:Cr,FLOW_END:Er,SCALAR:Mi,createScalarToken:n2,isCollection:l2,isScalar:r2,prettyToken:u2,resolveAsScalar:e2,setScalarValue:s2,stringify:a2,tokenType:J_,visit:St},Symbol.toStringTag,{value:"Module"}));function xn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Kh=new Set("0123456789ABCDEFabcdef"),f2=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Fl=new Set(",[]{}"),c2=new Set(` ,[]{}
\r	`),tf=i=>!i||c2.has(i);class K_{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(a,l=!1){if(a){if(typeof a!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+a:a,this.lineEndPos=null}this.atEnd=!l;let r=this.next??"stream";for(;r&&(l||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let a=this.pos,l=this.buffer[a];for(;l===" "||l==="	";)l=this.buffer[++a];return!l||l==="#"||l===`
`?!0:l==="\r"?this.buffer[a+1]===`
`:!1}charAt(a){return this.buffer[this.pos+a]}continueScalar(a){let l=this.buffer[a];if(this.indentNext>0){let r=0;for(;l===" ";)l=this.buffer[++r+a];if(l==="\r"){const f=this.buffer[r+a+1];if(f===`
`||!f&&!this.atEnd)return a+r+1}return l===`
`||r>=this.indentNext||!l&&!this.atEnd?a+r:-1}if(l==="-"||l==="."){const r=this.buffer.substr(a,3);if((r==="---"||r==="...")&&xn(this.buffer[a+3]))return-1}return a}getLine(){let a=this.lineEndPos;return(typeof a!="number"||a!==-1&&a<this.pos)&&(a=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=a),a===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[a-1]==="\r"&&(a-=1),this.buffer.substring(this.pos,a))}hasChars(a){return this.pos+a<=this.buffer.length}setNext(a){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=a,null}peek(a){return this.buffer.substr(this.pos,a)}*parseNext(a){switch(a){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let a=this.getLine();if(a===null)return this.setNext("stream");if(a[0]===Ar&&(yield*this.pushCount(1),a=a.substring(1)),a[0]==="%"){let l=a.length,r=a.indexOf("#");for(;r!==-1;){const c=a[r-1];if(c===" "||c==="	"){l=r-1;break}else r=a.indexOf("#",r+1)}for(;;){const c=a[l-1];if(c===" "||c==="	")l-=1;else break}const f=(yield*this.pushCount(l))+(yield*this.pushSpaces(!0));return yield*this.pushCount(a.length-f),this.pushNewline(),"stream"}if(this.atLineEnd()){const l=yield*this.pushSpaces(!0);return yield*this.pushCount(a.length-l),yield*this.pushNewline(),"stream"}return yield Cr,yield*this.parseLineStart()}*parseLineStart(){const a=this.charAt(0);if(!a&&!this.atEnd)return this.setNext("line-start");if(a==="-"||a==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const l=this.peek(3);if((l==="---"||l==="...")&&xn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,l==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!xn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[a,l]=this.peek(2);if(!l&&!this.atEnd)return this.setNext("block-start");if((a==="-"||a==="?"||a===":")&&xn(l)){const r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const a=this.getLine();if(a===null)return this.setNext("doc");let l=yield*this.pushIndicators();switch(a[l]){case"#":yield*this.pushCount(a.length-l);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(tf),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return l+=yield*this.parseBlockScalarHeader(),l+=yield*this.pushSpaces(!0),yield*this.pushCount(a.length-l),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let a,l,r=-1;do a=yield*this.pushNewline(),a>0?(l=yield*this.pushSpaces(!1),this.indentValue=r=l):l=0,l+=yield*this.pushSpaces(!0);while(a+l>0);const f=this.getLine();if(f===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&f[0]!=="#"||r===0&&(f.startsWith("---")||f.startsWith("..."))&&xn(f[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(f[0]==="]"||f[0]==="}")))return this.flowLevel=0,yield Er,yield*this.parseLineStart();let c=0;for(;f[c]===",";)c+=yield*this.pushCount(1),c+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(c+=yield*this.pushIndicators(),f[c]){case void 0:return"flow";case"#":return yield*this.pushCount(f.length-c),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(tf),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const g=this.charAt(1);if(this.flowKey||xn(g)||g===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const a=this.charAt(0);let l=this.buffer.indexOf(a,this.pos+1);if(a==="'")for(;l!==-1&&this.buffer[l+1]==="'";)l=this.buffer.indexOf("'",l+2);else for(;l!==-1;){let c=0;for(;this.buffer[l-1-c]==="\\";)c+=1;if(c%2===0)break;l=this.buffer.indexOf('"',l+1)}const r=this.buffer.substring(0,l);let f=r.indexOf(`
`,this.pos);if(f!==-1){for(;f!==-1;){const c=this.continueScalar(f+1);if(c===-1)break;f=r.indexOf(`
`,c)}f!==-1&&(l=f-(r[f-1]==="\r"?2:1))}if(l===-1){if(!this.atEnd)return this.setNext("quoted-scalar");l=this.buffer.length}return yield*this.pushToIndex(l+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let a=this.pos;for(;;){const l=this.buffer[++a];if(l==="+")this.blockScalarKeep=!0;else if(l>"0"&&l<="9")this.blockScalarIndent=Number(l)-1;else if(l!=="-")break}return yield*this.pushUntil(l=>xn(l)||l==="#")}*parseBlockScalar(){let a=this.pos-1,l=0,r;e:for(let c=this.pos;r=this.buffer[c];++c)switch(r){case" ":l+=1;break;case`
`:a=c,l=0;break;case"\r":{const g=this.buffer[c+1];if(!g&&!this.atEnd)return this.setNext("block-scalar");if(g===`
`)break}default:break e}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(l>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=l:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const c=this.continueScalar(a+1);if(c===-1)break;a=this.buffer.indexOf(`
`,c)}while(a!==-1);if(a===-1){if(!this.atEnd)return this.setNext("block-scalar");a=this.buffer.length}}let f=a+1;for(r=this.buffer[f];r===" ";)r=this.buffer[++f];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++f];a=f-1}else if(!this.blockScalarKeep)do{let c=a-1,g=this.buffer[c];g==="\r"&&(g=this.buffer[--c]);const _=c;for(;g===" ";)g=this.buffer[--c];if(g===`
`&&c>=this.pos&&c+1+l>_)a=c;else break}while(!0);return yield Mi,yield*this.pushToIndex(a+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const a=this.flowLevel>0;let l=this.pos-1,r=this.pos-1,f;for(;f=this.buffer[++r];)if(f===":"){const c=this.buffer[r+1];if(xn(c)||a&&Fl.has(c))break;l=r}else if(xn(f)){let c=this.buffer[r+1];if(f==="\r"&&(c===`
`?(r+=1,f=`
`,c=this.buffer[r+1]):l=r),c==="#"||a&&Fl.has(c))break;if(f===`
`){const g=this.continueScalar(r+1);if(g===-1)break;r=Math.max(r,g-2)}}else{if(a&&Fl.has(f))break;l=r}return!f&&!this.atEnd?this.setNext("plain-scalar"):(yield Mi,yield*this.pushToIndex(l+1,!0),a?"flow":"doc")}*pushCount(a){return a>0?(yield this.buffer.substr(this.pos,a),this.pos+=a,a):0}*pushToIndex(a,l){const r=this.buffer.slice(this.pos,a);return r?(yield r,this.pos+=r.length,r.length):(l&&(yield""),0)}*pushIndicators(){let a=0;e:for(;;){switch(this.charAt(0)){case"!":a+=yield*this.pushTag(),a+=yield*this.pushSpaces(!0);continue e;case"&":a+=yield*this.pushUntil(tf),a+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const l=this.flowLevel>0,r=this.charAt(1);if(xn(r)||l&&Fl.has(r)){l?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0);continue e}}}break e}return a}*pushTag(){if(this.charAt(1)==="<"){let a=this.pos+2,l=this.buffer[a];for(;!xn(l)&&l!==">";)l=this.buffer[++a];return yield*this.pushToIndex(l===">"?a+1:a,!1)}else{let a=this.pos+1,l=this.buffer[a];for(;l;)if(f2.has(l))l=this.buffer[++a];else if(l==="%"&&Kh.has(this.buffer[a+1])&&Kh.has(this.buffer[a+2]))l=this.buffer[a+=3];else break;return yield*this.pushToIndex(a,!1)}}*pushNewline(){const a=this.buffer[this.pos];return a===`
`?yield*this.pushCount(1):a==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(a){let l=this.pos-1,r;do r=this.buffer[++l];while(r===" "||a&&r==="	");const f=l-this.pos;return f>0&&(yield this.buffer.substr(this.pos,f),this.pos=l),f}*pushUntil(a){let l=this.pos,r=this.buffer[l];for(;!a(r);)r=this.buffer[++l];return yield*this.pushToIndex(l,!1)}}class W_{constructor(){this.lineStarts=[],this.addNewLine=a=>this.lineStarts.push(a),this.linePos=a=>{let l=0,r=this.lineStarts.length;for(;l<r;){const c=l+r>>1;this.lineStarts[c]<a?l=c+1:r=c}if(this.lineStarts[l]===a)return{line:l+1,col:1};if(l===0)return{line:0,col:a};const f=this.lineStarts[l-1];return{line:l,col:a-f+1}}}}function Ks(i,a){for(let l=0;l<i.length;++l)if(i[l].type===a)return!0;return!1}function Wh(i){for(let a=0;a<i.length;++a)switch(i[a].type){case"space":case"comment":case"newline":break;default:return a}return-1}function Q_(i){switch(i?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Pl(i){switch(i.type){case"document":return i.start;case"block-map":{const a=i.items[i.items.length-1];return a.sep??a.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function fa(i){if(i.length===0)return[];let a=i.length;e:for(;--a>=0;)switch(i[a].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;i[++a]?.type==="space";);return i.splice(a,i.length)}function cr(i,a){if(a.length<1e5)Array.prototype.push.apply(i,a);else for(let l=0;l<a.length;++l)i.push(a[l])}function Qh(i){if(i.start.type==="flow-seq-start")for(const a of i.items)a.sep&&!a.value&&!Ks(a.start,"explicit-key-ind")&&!Ks(a.sep,"map-value-ind")&&(a.key&&(a.value=a.key),delete a.key,Q_(a.value)?a.value.end?cr(a.value.end,a.sep):a.value.end=a.sep:cr(a.start,a.sep),delete a.sep)}class Of{constructor(a){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new K_,this.onNewLine=a}*parse(a,l=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const r of this.lexer.lex(a,l))yield*this.next(r);l||(yield*this.end())}*next(a){if(this.source=a,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=a.length;return}const l=J_(a);if(l)if(l==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=l,yield*this.step(),l){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+a.length);break;case"space":this.atNewLine&&a[0]===" "&&(this.indent+=a.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=a.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=a.length}else{const r=`Not a YAML token: ${a}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:a}),this.offset+=a.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const a=this.peek(1);if(this.type==="doc-end"&&a?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!a)return yield*this.stream();switch(a.type){case"document":return yield*this.document(a);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(a);case"block-scalar":return yield*this.blockScalar(a);case"block-map":return yield*this.blockMap(a);case"block-seq":return yield*this.blockSequence(a);case"flow-collection":return yield*this.flowCollection(a);case"doc-end":return yield*this.documentEnd(a)}yield*this.pop()}peek(a){return this.stack[this.stack.length-a]}*pop(a){const l=a??this.stack.pop();if(!l)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield l;else{const r=this.peek(1);switch(l.type==="block-scalar"?l.indent="indent"in r?r.indent:0:l.type==="flow-collection"&&r.type==="document"&&(l.indent=0),l.type==="flow-collection"&&Qh(l),r.type){case"document":r.value=l;break;case"block-scalar":r.props.push(l);break;case"block-map":{const f=r.items[r.items.length-1];if(f.value){r.items.push({start:[],key:l,sep:[]}),this.onKeyLine=!0;return}else if(f.sep)f.value=l;else{Object.assign(f,{key:l,sep:[]}),this.onKeyLine=!f.explicitKey;return}break}case"block-seq":{const f=r.items[r.items.length-1];f.value?r.items.push({start:[],value:l}):f.value=l;break}case"flow-collection":{const f=r.items[r.items.length-1];!f||f.value?r.items.push({start:[],key:l,sep:[]}):f.sep?f.value=l:Object.assign(f,{key:l,sep:[]});return}default:yield*this.pop(),yield*this.pop(l)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(l.type==="block-map"||l.type==="block-seq")){const f=l.items[l.items.length-1];f&&!f.sep&&!f.value&&f.start.length>0&&Wh(f.start)===-1&&(l.indent===0||f.start.every(c=>c.type!=="comment"||c.indent<l.indent))&&(r.type==="document"?r.end=f.start:r.items.push({start:f.start}),l.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const a={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&a.start.push(this.sourceToken),this.stack.push(a);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(a){if(a.value)return yield*this.lineEnd(a);switch(this.type){case"doc-start":{Wh(a.start)!==-1?(yield*this.pop(),yield*this.step()):a.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":a.start.push(this.sourceToken);return}const l=this.startBlockValue(a);l?this.stack.push(l):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(a){if(this.type==="map-value-ind"){const l=Pl(this.peek(2)),r=fa(l);let f;a.end?(f=a.end,f.push(this.sourceToken),delete a.end):f=[this.sourceToken];const c={type:"block-map",offset:a.offset,indent:a.indent,items:[{start:r,key:a,sep:f}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=c}else yield*this.lineEnd(a)}*blockScalar(a){switch(this.type){case"space":case"comment":case"newline":a.props.push(this.sourceToken);return;case"scalar":if(a.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let l=this.source.indexOf(`
`)+1;for(;l!==0;)this.onNewLine(this.offset+l),l=this.source.indexOf(`
`,l)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(a){const l=a.items[a.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,l.value){const r="end"in l.value?l.value.end:void 0;(Array.isArray(r)?r[r.length-1]:void 0)?.type==="comment"?r?.push(this.sourceToken):a.items.push({start:[this.sourceToken]})}else l.sep?l.sep.push(this.sourceToken):l.start.push(this.sourceToken);return;case"space":case"comment":if(l.value)a.items.push({start:[this.sourceToken]});else if(l.sep)l.sep.push(this.sourceToken);else{if(this.atIndentedComment(l.start,a.indent)){const f=a.items[a.items.length-2]?.value?.end;if(Array.isArray(f)){cr(f,l.start),f.push(this.sourceToken),a.items.pop();return}}l.start.push(this.sourceToken)}return}if(this.indent>=a.indent){const r=!this.onKeyLine&&this.indent===a.indent,f=r&&(l.sep||l.explicitKey)&&this.type!=="seq-item-ind";let c=[];if(f&&l.sep&&!l.value){const g=[];for(let _=0;_<l.sep.length;++_){const p=l.sep[_];switch(p.type){case"newline":g.push(_);break;case"space":break;case"comment":p.indent>a.indent&&(g.length=0);break;default:g.length=0}}g.length>=2&&(c=l.sep.splice(g[1]))}switch(this.type){case"anchor":case"tag":f||l.value?(c.push(this.sourceToken),a.items.push({start:c}),this.onKeyLine=!0):l.sep?l.sep.push(this.sourceToken):l.start.push(this.sourceToken);return;case"explicit-key-ind":!l.sep&&!l.explicitKey?(l.start.push(this.sourceToken),l.explicitKey=!0):f||l.value?(c.push(this.sourceToken),a.items.push({start:c,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(l.explicitKey)if(l.sep)if(l.value)a.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ks(l.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:c,key:null,sep:[this.sourceToken]}]});else if(Q_(l.key)&&!Ks(l.sep,"newline")){const g=fa(l.start),_=l.key,p=l.sep;p.push(this.sourceToken),delete l.key,delete l.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:g,key:_,sep:p}]})}else c.length>0?l.sep=l.sep.concat(c,this.sourceToken):l.sep.push(this.sourceToken);else if(Ks(l.start,"newline"))Object.assign(l,{key:null,sep:[this.sourceToken]});else{const g=fa(l.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:g,key:null,sep:[this.sourceToken]}]})}else l.sep?l.value||f?a.items.push({start:c,key:null,sep:[this.sourceToken]}):Ks(l.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):l.sep.push(this.sourceToken):Object.assign(l,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const g=this.flowScalar(this.type);f||l.value?(a.items.push({start:c,key:g,sep:[]}),this.onKeyLine=!0):l.sep?this.stack.push(g):(Object.assign(l,{key:g,sep:[]}),this.onKeyLine=!0);return}default:{const g=this.startBlockValue(a);if(g){if(g.type==="block-seq"){if(!l.explicitKey&&l.sep&&!Ks(l.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else r&&a.items.push({start:c});this.stack.push(g);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(a){const l=a.items[a.items.length-1];switch(this.type){case"newline":if(l.value){const r="end"in l.value?l.value.end:void 0;(Array.isArray(r)?r[r.length-1]:void 0)?.type==="comment"?r?.push(this.sourceToken):a.items.push({start:[this.sourceToken]})}else l.start.push(this.sourceToken);return;case"space":case"comment":if(l.value)a.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(l.start,a.indent)){const f=a.items[a.items.length-2]?.value?.end;if(Array.isArray(f)){cr(f,l.start),f.push(this.sourceToken),a.items.pop();return}}l.start.push(this.sourceToken)}return;case"anchor":case"tag":if(l.value||this.indent<=a.indent)break;l.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==a.indent)break;l.value||Ks(l.start,"seq-item-ind")?a.items.push({start:[this.sourceToken]}):l.start.push(this.sourceToken);return}if(this.indent>a.indent){const r=this.startBlockValue(a);if(r){this.stack.push(r);return}}yield*this.pop(),yield*this.step()}*flowCollection(a){const l=a.items[a.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while(r?.type==="flow-collection")}else if(a.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!l||l.sep?a.items.push({start:[this.sourceToken]}):l.start.push(this.sourceToken);return;case"map-value-ind":!l||l.value?a.items.push({start:[],key:null,sep:[this.sourceToken]}):l.sep?l.sep.push(this.sourceToken):Object.assign(l,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!l||l.value?a.items.push({start:[this.sourceToken]}):l.sep?l.sep.push(this.sourceToken):l.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const f=this.flowScalar(this.type);!l||l.value?a.items.push({start:[],key:f,sep:[]}):l.sep?this.stack.push(f):Object.assign(l,{key:f,sep:[]});return}case"flow-map-end":case"flow-seq-end":a.end.push(this.sourceToken);return}const r=this.startBlockValue(a);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{const r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===a.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){const f=Pl(r),c=fa(f);Qh(a);const g=a.end.splice(1,a.end.length);g.push(this.sourceToken);const _={type:"block-map",offset:a.offset,indent:a.indent,items:[{start:c,key:a,sep:g}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=_}else yield*this.lineEnd(a)}}flowScalar(a){if(this.onNewLine){let l=this.source.indexOf(`
`)+1;for(;l!==0;)this.onNewLine(this.offset+l),l=this.source.indexOf(`
`,l)+1}return{type:a,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(a){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const l=Pl(a),r=fa(l);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const l=Pl(a),r=fa(l);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(a,l){return this.type!=="comment"||this.indent<=l?!1:a.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(a){this.type!=="doc-mode"&&(a.end?a.end.push(this.sourceToken):a.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(a){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:a.end?a.end.push(this.sourceToken):a.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function V_(i){const a=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||a&&new W_||null,prettyErrors:a}}function d2(i,a={}){const{lineCounter:l,prettyErrors:r}=V_(a),f=new Of(l?.addNewLine),c=new Tf(a),g=Array.from(c.compose(f.parse(i)));if(r&&l)for(const _ of g)_.errors.forEach(or(i,l)),_.warnings.forEach(or(i,l));return g.length>0?g:Object.assign([],{empty:!0},c.streamInfo())}function $_(i,a={}){const{lineCounter:l,prettyErrors:r}=V_(a),f=new Of(l?.addNewLine),c=new Tf(a);let g=null;for(const _ of c.compose(f.parse(i),!0,i.length))if(!g)g=_;else if(g.options.logLevel!=="silent"){g.errors.push(new vt(_.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&l&&(g.errors.forEach(or(i,l)),g.warnings.forEach(or(i,l))),g}function g2(i,a,l){let r;typeof a=="function"?r=a:l===void 0&&a&&typeof a=="object"&&(l=a);const f=$_(i,l);if(!f)return null;if(f.warnings.forEach(c=>m_(f.options.logLevel,c)),f.errors.length>0){if(f.options.logLevel!=="silent")throw f.errors[0];f.errors=[]}return f.toJS(Object.assign({reviver:r},l))}function h2(i,a,l){let r=null;if(typeof a=="function"||Array.isArray(a)?r=a:l===void 0&&a&&(l=a),typeof l=="string"&&(l=l.length),typeof l=="number"){const f=Math.round(l);l=f<1?void 0:f>8?{indent:8}:{indent:f}}if(i===void 0){const{keepUndefined:f}=l??a??{};if(!f)return}return At(i)&&!r?i.toString(l):new Ca(i,r,l).toString(l)}const _2=Object.freeze(Object.defineProperty({__proto__:null,Alias:gr,CST:o2,Composer:Tf,Document:Ca,Lexer:K_,LineCounter:W_,Pair:en,Parser:Of,Scalar:te,Schema:zr,YAMLError:Ef,YAMLMap:En,YAMLParseError:vt,YAMLSeq:$s,YAMLWarning:B_,isAlias:zt,isCollection:Ne,isDocument:At,isMap:Sa,isNode:Ye,isPair:we,isScalar:Te,isSeq:ba,parse:g2,parseAllDocuments:d2,parseDocument:$_,stringify:h2,visit:Ct,visitAsync:dr},Symbol.toStringTag,{value:"Module"})),m2=Object.assign({"../../cv_data/awards.yaml":Gy,"../../cv_data/education.yaml":ky,"../../cv_data/experience.yaml":Iy,"../../cv_data/grants.yaml":xy,"../../cv_data/news.yaml":Zy,"../../cv_data/patents.yaml":Jy,"../../cv_data/personal.yaml":Ky,"../../cv_data/publications/books.yaml":Wy,"../../cv_data/publications/conferences.yaml":Qy,"../../cv_data/publications/journals.yaml":Vy,"../../cv_data/publications/other.yaml":$y,"../../cv_data/publications_bak/books.yaml":Fy,"../../cv_data/publications_bak/conferences.yaml":Py,"../../cv_data/publications_bak/journals.yaml":e0,"../../cv_data/publications_bak/other.yaml":n0,"../../cv_data/research_interests.yaml":s0,"../../cv_data/service.yaml":t0,"../../cv_data/students.yaml":a0,"../../cv_data/talks.yaml":i0,"../../cv_data/teaching.yaml":l0});function Bn(i){return _2.parse(m2[i]??"")}function Rn(i){return Array.isArray(i)?i.filter(a=>!!a&&typeof a=="object"):[]}function X(i){if(i==null)return"";if(typeof i=="string"||typeof i=="number")return String(i);if(typeof i=="object"){const a=i.en??i.zh;return X(a)}return""}function p2(i){const l=X(i).match(/\d{4}/);return l?Number(l[0]):0}function er(i,a){const l=X(i),r=X(a)||"Present";return[l,r].filter(Boolean).join(" - ")}function y2(i){const a=X(i.start),l=X(i.end??i.graduation_year);return a&&l?`${a} - ${l}`:`Graduated ${l}`}function F_(i){const a=X(i.year),l=X(i.year_end);return l?`${a} - ${l}`:a}function gn(i,a=" · "){return i.filter(Boolean).join(a)}function af(i){const a=X(i).toLowerCase();return a==="phd"?"PhD":a==="ms"||a==="master"?"Master":a==="undergraduate"?"Undergraduate":X(i)}function nr(i,a){const l=X(a);return l?`${i}: ${l}`:""}function v2(i){return Rn(i.authors).map(a=>({name:X(a.name),isSelf:!!a.is_self,isCorresponding:!!a.is_corresponding,isStudent:!!a.is_student}))}function sr(i,a,l){const r=Rn(Bn(i)).filter(f=>!f.disabled);return r.map((f,c)=>{const g=X(f.journal??f.conference??f.publisher??f.venue??f.booktitle),_=X(f.journal_short??f.conference_short);return{id:X(f.id)||`[${l}${r.length-c}]`,type:a,authors:v2(f),title:X(f.title),venue:g,venueShort:_,year:p2(f.year),pages:X(f.pages),award:X(f.award),notes:X(f.notes)}}).filter(f=>f.title)}function S2(i){return i.map(l=>{const r=/\b(TOSEM|TSE|ICSE|FSE|ASE|WWW|SIGIR|KDD|NeurIPS|ICLR|ACL|CIKM|WSDM)\b/i.test(`${l.venueShort} ${l.venue}`)?2:0,f=l.award||l.notes?1:0;return{publication:l,score:l.year*10+r+f}}).sort((l,r)=>r.score-l.score).slice(0,8).map(({publication:l})=>l)}const $n=Bn("../../cv_data/personal.yaml"),Vh=[...sr("../../cv_data/publications/journals.yaml","Journal","J"),...sr("../../cv_data/publications/conferences.yaml","Conference","C"),...sr("../../cv_data/publications/books.yaml","Book","B"),...sr("../../cv_data/publications/other.yaml","Other","O")].sort((i,a)=>a.year-i.year||i.type.localeCompare(a.type)),$h=Rn(Bn("../../cv_data/service.yaml")).filter(i=>!i.disabled).map(i=>({group:X(i.service_type),item:{title:X(i.venue),subtitle:X(i.role),meta:F_(i)}})),b2=Array.from(new Set($h.map(({group:i})=>i))).filter(Boolean).map(i=>({title:i,items:$h.filter(a=>a.group===i).map(a=>a.item)})),Fh=Rn(Bn("../../cv_data/students.yaml")).filter(i=>!i.disabled),z2=Rn(Bn("../../cv_data/news.yaml")).filter(i=>!i.disabled).map(i=>({date:X(i.date),title:X(i.title),detail:X(i.detail),link:X(i.link)})).filter(i=>i.date&&i.title),Je={personal:{name:X($n.name),initials:X($n.name).split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase(),title:X($n.title),department:X($n.department),institution:X($n.institution),address:X($n.address),phone:X($n.phone),email:X($n.email),website:X($n.website),orcid:X($n.orcid)},interests:Rn(Bn("../../cv_data/research_interests.yaml")).filter(i=>!i.disabled).map(i=>X(i.interest)).filter(Boolean),publications:Vh,selectedPublications:S2(Vh),grants:Rn(Bn("../../cv_data/grants.yaml")).filter(i=>!i.disabled).map(i=>({title:X(i.title),subtitle:gn([X(i.funder),X(i.role)]),meta:gn([er(i.start,i.end),X(i.amount)]),detail:X(i.award_number??i.collaborators??i.budget)})),teaching:Rn(Bn("../../cv_data/teaching.yaml")).filter(i=>!i.disabled).map(i=>({title:X(i.course_name),subtitle:gn([X(i.role),af(i.level),X(i.institution)]),meta:X(i.term),detail:gn([X(i.course_number),nr("Co-instructor",i.co_instructor),nr("Taught by",i.taught_by)])})),students:{current:Fh.filter(i=>i.status==="current").map(i=>({title:X(i.name),subtitle:gn([af(i.level),X(i.institution)]),meta:er(i.start,i.end),detail:gn([X(i.thesis),nr("Co-supervisor",i.cosupervisor),X(i.awards)])})),graduated:Fh.filter(i=>i.status==="graduated").map(i=>({title:X(i.name),subtitle:af(i.level),meta:y2(i),detail:gn([X(i.thesis),nr("Co-supervisor",i.cosupervisor),X(i.placement),X(i.awards)])}))},talks:Rn(Bn("../../cv_data/talks.yaml")).filter(i=>!i.disabled).map(i=>({title:X(i.title)||X(i.event),subtitle:gn([X(i.type),X(i.event)]),meta:gn([X(i.date),X(i.location)]),detail:X(i.notes)})),awards:Rn(Bn("../../cv_data/awards.yaml")).filter(i=>!i.disabled).map(i=>({title:X(i.award),subtitle:X(i.organization),meta:F_(i)})),serviceGroups:b2,experience:Rn(Bn("../../cv_data/experience.yaml")).filter(i=>!i.disabled).map(i=>({title:X(i.role),subtitle:gn([X(i.department),X(i.institution)]),meta:gn([er(i.start,i.end),X(i.location)]),detail:X(i.description)})),education:Rn(Bn("../../cv_data/education.yaml")).filter(i=>!i.disabled).map(i=>({title:gn([X(i.degree),X(i.major)]," in "),subtitle:X(i.institution),meta:gn([er(i.start,i.end),X(i.location)]),detail:gn([X(i.thesis),X(i.advisor),X(i.honors)])})),news:z2},A2="/assets/profile-G_T3Ihkj.jpg",df=[["Home","home"],["Publications","publications"],["Grants","grants"],["Teaching","teaching"],["Students","students"],["Service","service"],["Awards","awards"],["CV","cv"]];function Ph(){const i=window.location.hash.replace(/^#\/?/,"")||"home";return df.some(([,a])=>a===i)?i:"home"}function Ai(i){return i==="home"?"#/":`#/${i}`}function bt({title:i,children:a}){return D.jsxs("section",{className:"section",children:[D.jsx("div",{className:"section-heading",children:D.jsx("h2",{children:i})}),a]})}function Qs({title:i,children:a}){return D.jsxs("section",{className:"intro",children:[D.jsx("h1",{children:i}),a]})}function Vs({items:i,limit:a}){const l=typeof a=="number"?i.slice(0,a):i;return l.length?D.jsx("div",{className:"timeline-list",children:l.map((r,f)=>D.jsxs("article",{className:"timeline-item",children:[D.jsxs("div",{children:[D.jsx("h3",{children:r.title}),D.jsx("p",{children:r.subtitle}),r.detail?D.jsx("p",{className:"detail",children:r.detail}):null]}),D.jsx("time",{children:r.meta})]},`${r.title}-${r.meta}-${f}`))}):D.jsx("p",{className:"muted",children:"No public entries yet."})}function C2({authors:i}){return D.jsx(D.Fragment,{children:i.map((a,l)=>D.jsxs("span",{children:[l>0?", ":"",a.isSelf?D.jsx("strong",{children:a.name}):a.name,a.isCorresponding?D.jsx("sup",{children:"*"}):null]},`${a.name}-${l}`))})}function E2({publication:i}){return D.jsxs("article",{className:"publication-item",children:[D.jsx("div",{className:"publication-id",children:i.id}),D.jsxs("div",{children:[D.jsx("h3",{children:i.title}),D.jsx("p",{className:"authors",children:D.jsx(C2,{authors:i.authors})}),D.jsxs("p",{className:"venue",children:[D.jsx("strong",{children:i.venueShort||i.venue}),i.venueShort&&i.venue?` · ${i.venue}`:"",i.pages?` · ${i.pages}`:""]}),D.jsxs("div",{className:"publication-meta",children:[D.jsx("span",{children:i.type}),D.jsx("span",{children:i.year}),i.award?D.jsx("span",{className:"highlight",children:i.award}):null,i.notes?D.jsx("span",{children:i.notes}):null]})]})]})}function M2(){const i=Array.from(new Set(Je.publications.map(a=>a.year))).sort((a,l)=>l-a);return D.jsx("div",{className:"publication-groups",children:i.map(a=>D.jsxs("div",{className:"year-group",children:[D.jsx("h3",{children:a||"Forthcoming"}),D.jsx("div",{className:"publication-list",children:Je.publications.filter(l=>l.year===a).map(l=>D.jsx(E2,{publication:l},`${l.type}-${l.id}-${l.title}`))})]},a))})}function e_(i){return i.match(/\d{4}/)?.[0]||"Recent"}function T2(){const i=Je.news.length>0?Je.news:[...Je.publications.slice(0,5).map(a=>({date:String(a.year),title:a.title,detail:`${a.venueShort||a.venue}${a.notes?` · ${a.notes}`:""}`,link:Ai("publications")})),...Je.awards.slice(0,3).map(a=>({date:e_(a.meta),title:a.title,detail:a.subtitle,link:Ai("awards")})),...Je.grants.slice(0,3).map(a=>({date:e_(a.meta),title:a.title,detail:a.subtitle,link:Ai("grants")}))].slice(0,8);return D.jsx("div",{className:"news-list",children:i.map((a,l)=>D.jsxs("article",{className:"news-item",children:[D.jsx("time",{children:a.date}),D.jsxs("div",{children:[D.jsx("h3",{children:a.link?D.jsx("a",{href:a.link,children:a.title}):a.title}),D.jsx("p",{children:a.detail})]})]},`${a.date}-${a.title}-${l}`))})}function O2({personal:i}){return D.jsxs("aside",{className:"author-sidebar","aria-label":"Author profile",children:[D.jsxs("div",{className:"portrait",children:[D.jsx("img",{src:A2,alt:i.name,onError:a=>a.currentTarget.classList.add("missing")}),D.jsx("span",{children:i.initials})]}),D.jsx("h2",{children:i.name}),D.jsxs("p",{className:"author-bio",children:[i.title,D.jsx("br",{}),i.institution]}),D.jsxs("div",{className:"author-links",children:[D.jsxs("span",{children:[D.jsx(Uy,{size:15}),"Beijing, China"]}),D.jsxs("span",{children:[D.jsx(s_,{size:15}),i.department]}),D.jsxs("a",{href:`mailto:${i.email}`,children:[D.jsx(Ry,{size:15}),"Email"]})]})]})}function L2(){const{personal:i}=Je;return D.jsxs(D.Fragment,{children:[D.jsxs(Qs,{title:i.name,children:[D.jsx("p",{children:"I am an Assistant Professor at the Institute for Artificial Intelligence, Peking University. My research lies at the intersection of artificial intelligence and computer software, with a particular focus on leveraging web technologies and infrastructure to support the efficient development and operation of intelligent software systems. I am also interested in multidisciplinary applications of AI in medicine, education, natural sciences, and the humanities and social sciences."}),D.jsx("p",{children:"I received my B.S. degree in 2011 and Ph.D. degree in 2017 from Peking University, where I was advised by Prof. Hong Mei. From 2017 to 2020, I conducted postdoctoral research at Tsinghua University under the mentorship of Prof. Yunhao Liu."}),D.jsx("p",{children:"My research has been supported by the National Natural Science Foundation of China, the National Key R&D Program of China, and the National Science and Technology Major Project, among others. I have received several awards, including the First Prize of Technological Invention from the Chinese Institute of Electronics and the IEEE TCCLD Award for Cloud Computing Technological Innovation."})]}),D.jsx(bt,{title:"Research Interests",children:D.jsx("ul",{className:"interest-list",children:Je.interests.map(a=>D.jsx("li",{children:a},a))})}),D.jsx(bt,{title:"News",children:D.jsx(T2,{})})]})}function D2(){return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Publications",children:D.jsxs("p",{children:["Complete publication information is available on"," ",D.jsx("a",{href:"https://dblp.org/pid/75/7811-2.html",rel:"noreferrer",target:"_blank",children:"DBLP"})," ","and"," ",D.jsx("a",{href:"https://scholar.google.com/citations?user=1hnJ3TgAAAAJ",rel:"noreferrer",target:"_blank",children:"Google Scholar"}),"."]})}),D.jsx(M2,{})]})}function w2(){return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Students"}),D.jsx(bt,{title:"Current Students",children:D.jsx(Vs,{items:Je.students.current})}),D.jsx(bt,{title:"Graduated Students",children:D.jsx(Vs,{items:Je.students.graduated})})]})}function N2(){return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"CV"}),D.jsxs(bt,{title:"Experience",children:[D.jsxs("h3",{className:"subheading",children:[D.jsx(s_,{size:17}),"Experience"]}),D.jsx(Vs,{items:Je.experience})]}),D.jsxs(bt,{title:"Education",children:[D.jsxs("h3",{className:"subheading",children:[D.jsx(qy,{size:17}),"Education"]}),D.jsx(Vs,{items:Je.education})]})]})}function Y2(){return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Professional Service"}),D.jsx("div",{className:"service-stack",children:Je.serviceGroups.map(i=>D.jsx(bt,{title:i.title,children:D.jsx(Vs,{items:i.items})},i.title))})]})}function j2({page:i}){switch(i){case"publications":return D.jsx(D2,{});case"grants":return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Grants"}),D.jsx(Vs,{items:Je.grants})]});case"teaching":return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Teaching"}),D.jsx(Vs,{items:Je.teaching})]});case"students":return D.jsx(w2,{});case"service":return D.jsx(Y2,{});case"awards":return D.jsxs(D.Fragment,{children:[D.jsx(Qs,{title:"Awards"}),D.jsx(Vs,{items:Je.awards})]});case"cv":return D.jsx(N2,{});default:return D.jsx(L2,{})}}function H2(){const{personal:i}=Je,[a,l]=Fn.useState(()=>Ph()),r=Fn.useMemo(()=>df.find(([,f])=>f===a)?.[0]??"Home",[a]);return Fn.useEffect(()=>{const f=()=>{l(Ph()),window.scrollTo(0,0)};return window.addEventListener("hashchange",f),()=>window.removeEventListener("hashchange",f)},[]),Fn.useEffect(()=>{document.title=a==="home"?i.name:`${r} | ${i.name}`},[a,r,i.name]),D.jsxs(D.Fragment,{children:[D.jsxs("header",{className:"site-header",children:[D.jsx("a",{className:"brand",href:Ai("home"),children:i.name}),D.jsx("nav",{"aria-label":"Primary navigation",children:df.map(([f,c])=>D.jsx("a",{"aria-current":a===c?"page":void 0,className:a===c?"active":void 0,href:Ai(c),children:f},c))})]}),D.jsxs("main",{className:"page-shell",children:[D.jsx(O2,{personal:i}),D.jsx("div",{className:"page-content",children:D.jsx(j2,{page:a})})]}),D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{children:[D.jsx(Xy,{size:18}),D.jsxs("span",{children:["© ",new Date().getFullYear()," ",i.name,"."]})]})})]})}Yy.createRoot(document.getElementById("root")).render(D.jsx(My.StrictMode,{children:D.jsx(H2,{})}));
