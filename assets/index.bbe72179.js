(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function da(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function fa(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=me(i)?P_(i):fa(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(me(t))return t;if(le(t))return t}}const A_=/;(?![^(]*\))/g,k_=/:([^]+)/,N_=/\/\*.*?\*\//gs;function P_(t){const e={};return t.replace(N_,"").split(A_).forEach(n=>{if(n){const i=n.split(k_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pa(t){let e="";if(me(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const i=pa(t[n]);i&&(e+=i+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=da(O_);function nd(t){return!!t||t===""}const Hs=t=>me(t)?t:t==null?"":B(t)||le(t)&&(t.toString===od||!$(t.toString))?JSON.stringify(t,id,2):String(t),id=(t,e)=>e&&e.__v_isRef?id(t,e.value):Gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:sd(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!B(e)&&!ld(e)?String(e):e,re={},Kn=[],lt=()=>{},D_=()=>!1,M_=/^on[^a-z]/,Xr=t=>M_.test(t),ga=t=>t.startsWith("onUpdate:"),Ne=Object.assign,_a=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},L_=Object.prototype.hasOwnProperty,K=(t,e)=>L_.call(t,e),B=Array.isArray,Gn=t=>Jr(t)==="[object Map]",sd=t=>Jr(t)==="[object Set]",$=t=>typeof t=="function",me=t=>typeof t=="string",ma=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",rd=t=>le(t)&&$(t.then)&&$(t.catch),od=Object.prototype.toString,Jr=t=>od.call(t),F_=t=>Jr(t).slice(8,-1),ld=t=>Jr(t)==="[object Object]",ya=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},U_=/-(\w)/g,si=Qr(t=>t.replace(U_,(e,n)=>n?n.toUpperCase():"")),B_=/\B([A-Z])/g,fi=Qr(t=>t.replace(B_,"-$1").toLowerCase()),ad=Qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ho=Qr(t=>t?`on${ad(t)}`:""),Gi=(t,e)=>!Object.is(t,e),$o=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zc;const H_=()=>Zc||(Zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class ud{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function $_(t){return new ud(t)}function j_(t,e=Ve){e&&e.active&&e.effects.push(t)}function W_(){return Ve}function V_(t){Ve&&Ve.cleanups.push(t)}const va=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hd=t=>(t.w&rn)>0,dd=t=>(t.n&rn)>0,z_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rn},q_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];hd(s)&&!dd(s)?s.delete(t):e[n++]=s,s.w&=~rn,s.n&=~rn}e.length=n}},vl=new WeakMap;let Mi=0,rn=1;const El=30;let et;const Sn=Symbol(""),Il=Symbol("");class Ea{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,j_(this,i)}run(){if(!this.active)return this.fn();let e=et,n=Qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=et,et=this,Qt=!0,rn=1<<++Mi,Mi<=El?z_(this):eu(this),this.fn()}finally{Mi<=El&&q_(this),rn=1<<--Mi,et=this.parent,Qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){et===this?this.deferStop=!0:this.active&&(eu(this),this.onStop&&this.onStop(),this.active=!1)}}function eu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Qt=!0;const fd=[];function pi(){fd.push(Qt),Qt=!1}function gi(){const t=fd.pop();Qt=t===void 0?!0:t}function Ge(t,e,n){if(Qt&&et){let i=vl.get(t);i||vl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=va()),pd(s)}}function pd(t,e){let n=!1;Mi<=El?dd(t)||(t.n|=rn,n=!hd(t)):n=!t.has(et),n&&(t.add(et),et.deps.push(t))}function Ut(t,e,n,i,s,r){const o=vl.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&B(t)){const a=cd(i);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":B(t)?ya(n)&&l.push(o.get("length")):(l.push(o.get(Sn)),Gn(t)&&l.push(o.get(Il)));break;case"delete":B(t)||(l.push(o.get(Sn)),Gn(t)&&l.push(o.get(Il)));break;case"set":Gn(t)&&l.push(o.get(Sn));break}if(l.length===1)l[0]&&wl(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);wl(va(a))}}function wl(t,e){const n=B(t)?t:[...t];for(const i of n)i.computed&&tu(i);for(const i of n)i.computed||tu(i)}function tu(t,e){(t!==et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const K_=da("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ma)),G_=Ia(),Y_=Ia(!1,!0),X_=Ia(!0),nu=J_();function J_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Y(this);for(let r=0,o=this.length;r<o;r++)Ge(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pi();const i=Y(this)[e].apply(this,n);return gi(),i}}),t}function Ia(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?fm:Ed:e?vd:yd).get(i))return i;const o=B(i);if(!t&&o&&K(nu,s))return Reflect.get(nu,s,r);const l=Reflect.get(i,s,r);return(ma(s)?gd.has(s):K_(s))||(t||Ge(i,"get",s),e)?l:Te(l)?o&&ya(s)?l:l.value:le(l)?t?Id(l):Ca(l):l}}const Q_=_d(),Z_=_d(!0);function _d(t=!1){return function(n,i,s,r){let o=n[i];if(ri(o)&&Te(o)&&!Te(s))return!1;if(!t&&(!dr(s)&&!ri(s)&&(o=Y(o),s=Y(s)),!B(n)&&Te(o)&&!Te(s)))return o.value=s,!0;const l=B(n)&&ya(i)?Number(i)<n.length:K(n,i),a=Reflect.set(n,i,s,r);return n===Y(r)&&(l?Gi(s,o)&&Ut(n,"set",i,s):Ut(n,"add",i,s)),a}}function em(t,e){const n=K(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ut(t,"delete",e,void 0),i}function tm(t,e){const n=Reflect.has(t,e);return(!ma(e)||!gd.has(e))&&Ge(t,"has",e),n}function nm(t){return Ge(t,"iterate",B(t)?"length":Sn),Reflect.ownKeys(t)}const md={get:G_,set:Q_,deleteProperty:em,has:tm,ownKeys:nm},im={get:X_,set(t,e){return!0},deleteProperty(t,e){return!0}},sm=Ne({},md,{get:Y_,set:Z_}),wa=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function $s(t,e,n=!1,i=!1){t=t.__v_raw;const s=Y(t),r=Y(e);n||(e!==r&&Ge(s,"get",e),Ge(s,"get",r));const{has:o}=Zr(s),l=i?wa:n?Sa:Yi;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function js(t,e=!1){const n=this.__v_raw,i=Y(n),s=Y(t);return e||(t!==s&&Ge(i,"has",t),Ge(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ws(t,e=!1){return t=t.__v_raw,!e&&Ge(Y(t),"iterate",Sn),Reflect.get(t,"size",t)}function iu(t){t=Y(t);const e=Y(this);return Zr(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function su(t,e){e=Y(e);const n=Y(this),{has:i,get:s}=Zr(n);let r=i.call(n,t);r||(t=Y(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Gi(e,o)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function ru(t){const e=Y(this),{has:n,get:i}=Zr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ut(e,"delete",t,void 0),r}function ou(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function Vs(t,e){return function(i,s){const r=this,o=r.__v_raw,l=Y(o),a=e?wa:t?Sa:Yi;return!t&&Ge(l,"iterate",Sn),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function zs(t,e,n){return function(...i){const s=this.__v_raw,r=Y(s),o=Gn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?wa:e?Sa:Yi;return!e&&Ge(r,"iterate",a?Il:Sn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:this}}function rm(){const t={get(r){return $s(this,r)},get size(){return Ws(this)},has:js,add:iu,set:su,delete:ru,clear:ou,forEach:Vs(!1,!1)},e={get(r){return $s(this,r,!1,!0)},get size(){return Ws(this)},has:js,add:iu,set:su,delete:ru,clear:ou,forEach:Vs(!1,!0)},n={get(r){return $s(this,r,!0)},get size(){return Ws(this,!0)},has(r){return js.call(this,r,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:Vs(!0,!1)},i={get(r){return $s(this,r,!0,!0)},get size(){return Ws(this,!0)},has(r){return js.call(this,r,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:Vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=zs(r,!1,!1),n[r]=zs(r,!0,!1),e[r]=zs(r,!1,!0),i[r]=zs(r,!0,!0)}),[t,n,e,i]}const[om,lm,am,cm]=rm();function Ta(t,e){const n=e?t?cm:am:t?lm:om;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(K(n,s)&&s in i?n:i,s,r)}const um={get:Ta(!1,!1)},hm={get:Ta(!1,!0)},dm={get:Ta(!0,!1)},yd=new WeakMap,vd=new WeakMap,Ed=new WeakMap,fm=new WeakMap;function pm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(t){return t.__v_skip||!Object.isExtensible(t)?0:pm(F_(t))}function Ca(t){return ri(t)?t:ba(t,!1,md,um,yd)}function _m(t){return ba(t,!1,sm,hm,vd)}function Id(t){return ba(t,!0,im,dm,Ed)}function ba(t,e,n,i,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=gm(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function Yn(t){return ri(t)?Yn(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function dr(t){return!!(t&&t.__v_isShallow)}function wd(t){return Yn(t)||ri(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Td(t){return hr(t,"__v_skip",!0),t}const Yi=t=>le(t)?Ca(t):t,Sa=t=>le(t)?Id(t):t;function Cd(t){Qt&&et&&(t=Y(t),pd(t.dep||(t.dep=va())))}function bd(t,e){t=Y(t),t.dep&&wl(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Bi(t){return Sd(t,!1)}function mm(t){return Sd(t,!0)}function Sd(t,e){return Te(t)?t:new ym(t,e)}class ym{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Yi(e)}get value(){return Cd(this),this._value}set value(e){const n=this.__v_isShallow||dr(e)||ri(e);e=n?e:Y(e),Gi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yi(e),bd(this))}}function Pt(t){return Te(t)?t.value:t}const vm={get:(t,e,n)=>Pt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Rd(t){return Yn(t)?t:new Proxy(t,vm)}var Ad;class Em{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ad]=!1,this._dirty=!0,this.effect=new Ea(e,()=>{this._dirty||(this._dirty=!0,bd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Y(this);return Cd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ad="__v_isReadonly";function Im(t,e,n=!1){let i,s;const r=$(t);return r?(i=t,s=lt):(i=t.get,s=t.set),new Em(i,s,r||!s,n)}function Zt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){eo(r,e,n)}return s}function Je(t,e,n,i){if($(t)){const r=Zt(t,e,n,i);return r&&rd(r)&&r.catch(o=>{eo(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Je(t[r],e,n,i));return s}function eo(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Zt(a,null,10,[t,o,l]);return}}wm(t,n,s,i)}function wm(t,e,n,i=!0){console.error(t)}let Xi=!1,Tl=!1;const Re=[];let _t=0;const Xn=[];let Nt=null,En=0;const kd=Promise.resolve();let Ra=null;function Tm(t){const e=Ra||kd;return t?e.then(this?t.bind(this):t):e}function Cm(t){let e=_t+1,n=Re.length;for(;e<n;){const i=e+n>>>1;Ji(Re[i])<t?e=i+1:n=i}return e}function Aa(t){(!Re.length||!Re.includes(t,Xi&&t.allowRecurse?_t+1:_t))&&(t.id==null?Re.push(t):Re.splice(Cm(t.id),0,t),Nd())}function Nd(){!Xi&&!Tl&&(Tl=!0,Ra=kd.then(Od))}function bm(t){const e=Re.indexOf(t);e>_t&&Re.splice(e,1)}function Sm(t){B(t)?Xn.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?En+1:En))&&Xn.push(t),Nd()}function lu(t,e=Xi?_t+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function Pd(t){if(Xn.length){const e=[...new Set(Xn)];if(Xn.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,i)=>Ji(n)-Ji(i)),En=0;En<Nt.length;En++)Nt[En]();Nt=null,En=0}}const Ji=t=>t.id==null?1/0:t.id,Rm=(t,e)=>{const n=Ji(t)-Ji(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Od(t){Tl=!1,Xi=!0,Re.sort(Rm);const e=lt;try{for(_t=0;_t<Re.length;_t++){const n=Re[_t];n&&n.active!==!1&&Zt(n,null,14)}}finally{_t=0,Re.length=0,Pd(),Xi=!1,Ra=null,(Re.length||Xn.length)&&Od()}}function Am(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||re;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||re;d&&(s=n.map(g=>me(g)?g.trim():g)),h&&(s=n.map(cd))}let l,a=i[l=Ho(e)]||i[l=Ho(si(e))];!a&&r&&(a=i[l=Ho(fi(e))]),a&&Je(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Je(c,t,6,s)}}function xd(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!$(t)){const a=c=>{const u=xd(c,e,!0);u&&(l=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&i.set(t,null),null):(B(r)?r.forEach(a=>o[a]=null):Ne(o,r),le(t)&&i.set(t,o),o)}function to(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,fi(e))||K(t,e))}let nt=null,Dd=null;function fr(t){const e=nt;return nt=t,Dd=t&&t.type.__scopeId||null,e}function km(t,e=nt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&_u(-1);const r=fr(e);let o;try{o=t(...s)}finally{fr(r),i._d&&_u(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:I}=t;let R,D;const ae=fr(t);try{if(n.shapeFlag&4){const H=s||i;R=gt(u.call(H,H,h,r,g,d,m)),D=a}else{const H=e;R=gt(H.length>1?H(r,{attrs:a,slots:l,emit:c}):H(r,null)),D=e.props?a:Nm(a)}}catch(H){$i.length=0,eo(H,t,1),R=Rn(Lt)}let N=R;if(D&&I!==!1){const H=Object.keys(D),{shapeFlag:ie}=N;H.length&&ie&7&&(o&&H.some(ga)&&(D=Pm(D,o)),N=on(N,D))}return n.dirs&&(N=on(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),R=N,fr(ae),R}const Nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},Pm=(t,e)=>{const n={};for(const i in t)(!ga(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Om(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?au(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!to(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?au(i,o,c):!0:!!o;return!1}function au(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!to(n,r))return!0}return!1}function xm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dm=t=>t.__isSuspense;function Mm(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Sm(t)}function Lm(t,e){if(we){let n=we.provides;const i=we.parent&&we.parent.provides;i===n&&(n=we.provides=Object.create(i)),n[t]=e}}function Jn(t,e,n=!1){const i=we||nt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(i.proxy):e}}const qs={};function sr(t,e,n){return Md(t,e,n)}function Md(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=re){const l=we;let a,c=!1,u=!1;if(Te(t)?(a=()=>t.value,c=dr(t)):Yn(t)?(a=()=>t,i=!0):B(t)?(u=!0,c=t.some(N=>Yn(N)||dr(N)),a=()=>t.map(N=>{if(Te(N))return N.value;if(Yn(N))return jn(N);if($(N))return Zt(N,l,2)})):$(t)?e?a=()=>Zt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Je(t,l,3,[d])}:a=lt,e&&i){const N=a;a=()=>jn(N())}let h,d=N=>{h=D.onStop=()=>{Zt(N,l,4)}},g;if(Zi)if(d=lt,e?n&&Je(e,l,3,[a(),u?[]:void 0,d]):a(),s==="sync"){const N=Py();g=N.__watcherHandles||(N.__watcherHandles=[])}else return lt;let m=u?new Array(t.length).fill(qs):qs;const I=()=>{if(!!D.active)if(e){const N=D.run();(i||c||(u?N.some((H,ie)=>Gi(H,m[ie])):Gi(N,m)))&&(h&&h(),Je(e,l,3,[N,m===qs?void 0:u&&m[0]===qs?[]:m,d]),m=N)}else D.run()};I.allowRecurse=!!e;let R;s==="sync"?R=I:s==="post"?R=()=>Fe(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),R=()=>Aa(I));const D=new Ea(a,R);e?n?I():m=D.run():s==="post"?Fe(D.run.bind(D),l&&l.suspense):D.run();const ae=()=>{D.stop(),l&&l.scope&&_a(l.scope.effects,D)};return g&&g.push(ae),ae}function Fm(t,e,n){const i=this.proxy,s=me(t)?t.includes(".")?Ld(i,t):()=>i[t]:t.bind(i,i);let r;$(e)?r=e:(r=e.handler,n=e);const o=we;oi(this);const l=Md(s,r.bind(i),n);return o?oi(o):An(),l}function Ld(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function jn(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))jn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(sd(t)||Gn(t))t.forEach(n=>{jn(n,e)});else if(ld(t))for(const n in t)jn(t[n],e);return t}function Um(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hd(()=>{t.isMounted=!0}),$d(()=>{t.isUnmounting=!0}),t}const Ye=[Function,Array],Bm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ye,onEnter:Ye,onAfterEnter:Ye,onEnterCancelled:Ye,onBeforeLeave:Ye,onLeave:Ye,onAfterLeave:Ye,onLeaveCancelled:Ye,onBeforeAppear:Ye,onAppear:Ye,onAfterAppear:Ye,onAppearCancelled:Ye},setup(t,{slots:e}){const n=oo(),i=Um();let s;return()=>{const r=e.default&&Ud(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==Lt){o=I;break}}const l=Y(t),{mode:a}=l;if(i.isLeaving)return Wo(o);const c=cu(o);if(!c)return Wo(o);const u=Cl(c,l,i,n);bl(c,u);const h=n.subTree,d=h&&cu(h);let g=!1;const{getTransitionKey:m}=c.type;if(m){const I=m();s===void 0?s=I:I!==s&&(s=I,g=!0)}if(d&&d.type!==Lt&&(!In(c,d)||g)){const I=Cl(d,l,i,n);if(bl(d,I),a==="out-in")return i.isLeaving=!0,I.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Wo(o);a==="in-out"&&c.type!==Lt&&(I.delayLeave=(R,D,ae)=>{const N=Fd(i,d);N[String(d.key)]=d,R._leaveCb=()=>{D(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return o}}},Hm=Bm;function Fd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Cl(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:I,onAppear:R,onAfterAppear:D,onAppearCancelled:ae}=e,N=String(t.key),H=Fd(n,t),ie=(U,ce)=>{U&&Je(U,i,9,ce)},Le=(U,ce)=>{const se=ce[1];ie(U,ce),B(U)?U.every(je=>je.length<=1)&&se():U.length<=1&&se()},$e={mode:r,persisted:o,beforeEnter(U){let ce=l;if(!n.isMounted)if(s)ce=I||l;else return;U._leaveCb&&U._leaveCb(!0);const se=H[N];se&&In(t,se)&&se.el._leaveCb&&se.el._leaveCb(),ie(ce,[U])},enter(U){let ce=a,se=c,je=u;if(!n.isMounted)if(s)ce=R||a,se=D||c,je=ae||u;else return;let ht=!1;const At=U._enterCb=bi=>{ht||(ht=!0,bi?ie(je,[U]):ie(se,[U]),$e.delayedLeave&&$e.delayedLeave(),U._enterCb=void 0)};ce?Le(ce,[U,At]):At()},leave(U,ce){const se=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ce();ie(h,[U]);let je=!1;const ht=U._leaveCb=At=>{je||(je=!0,ce(),At?ie(m,[U]):ie(g,[U]),U._leaveCb=void 0,H[se]===t&&delete H[se])};H[se]=t,d?Le(d,[U,ht]):ht()},clone(U){return Cl(U,e,n,i)}};return $e}function Wo(t){if(no(t))return t=on(t),t.children=null,t}function cu(t){return no(t)?t.children?t.children[0]:void 0:t}function bl(t,e){t.shapeFlag&6&&t.component?bl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ud(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Xe?(o.patchFlag&128&&s++,i=i.concat(Ud(o.children,e,l))):(e||o.type!==Lt)&&i.push(l!=null?on(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const rr=t=>!!t.type.__asyncLoader,no=t=>t.type.__isKeepAlive;function $m(t,e){Bd(t,"a",e)}function jm(t,e){Bd(t,"da",e)}function Bd(t,e,n=we){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(io(e,i,n),n){let s=n.parent;for(;s&&s.parent;)no(s.parent.vnode)&&Wm(i,e,n,s),s=s.parent}}function Wm(t,e,n,i){const s=io(e,t,i,!0);jd(()=>{_a(i[e],s)},n)}function io(t,e,n=we,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pi(),oi(n);const l=Je(e,n,t,o);return An(),gi(),l});return i?s.unshift(r):s.push(r),r}}const Wt=t=>(e,n=we)=>(!Zi||t==="sp")&&io(t,(...i)=>e(...i),n),Vm=Wt("bm"),Hd=Wt("m"),zm=Wt("bu"),qm=Wt("u"),$d=Wt("bum"),jd=Wt("um"),Wd=Wt("sp"),Km=Wt("rtg"),Gm=Wt("rtc");function Ym(t,e=we){io("ec",t,e)}function gn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(pi(),Je(a,n,8,[t.el,l,t,e]),gi())}}const Xm=Symbol();function Jm(t,e,n,i){let s;const r=n&&n[i];if(B(t)||me(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const Sl=t=>t?Zd(t)?Oa(t)||t.proxy:Sl(t.parent):null,Hi=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$emit:t=>t.emit,$options:t=>ka(t),$forceUpdate:t=>t.f||(t.f=()=>Aa(t.update)),$nextTick:t=>t.n||(t.n=Tm.bind(t.proxy)),$watch:t=>Fm.bind(t)}),Vo=(t,e)=>t!==re&&!t.__isScriptSetup&&K(t,e),Qm={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Vo(i,e))return o[e]=1,i[e];if(s!==re&&K(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==re&&K(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const u=Hi[e];let h,d;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==re&&K(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,K(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Vo(s,e)?(s[e]=n,!0):i!==re&&K(i,e)?(i[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==re&&K(t,o)||Vo(e,o)||(l=r[0])&&K(l,o)||K(i,o)||K(Hi,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Rl=!0;function Zm(t){const e=ka(t),n=t.proxy,i=t.ctx;Rl=!1,e.beforeCreate&&uu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:I,deactivated:R,beforeDestroy:D,beforeUnmount:ae,destroyed:N,unmounted:H,render:ie,renderTracked:Le,renderTriggered:$e,errorCaptured:U,serverPrefetch:ce,expose:se,inheritAttrs:je,components:ht,directives:At,filters:bi}=e;if(c&&ey(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const Z=o[ue];$(Z)&&(i[ue]=Z.bind(n))}if(s){const ue=s.call(n,n);le(ue)&&(t.data=Ca(ue))}if(Rl=!0,r)for(const ue in r){const Z=r[ue],fn=$(Z)?Z.bind(n,n):$(Z.get)?Z.get.bind(n,n):lt,Us=!$(Z)&&$(Z.set)?Z.set.bind(n):lt,pn=Ny({get:fn,set:Us});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>pn.value,set:dt=>pn.value=dt})}if(l)for(const ue in l)Vd(l[ue],i,n,ue);if(a){const ue=$(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(Z=>{Lm(Z,ue[Z])})}u&&uu(u,t,"c");function Oe(ue,Z){B(Z)?Z.forEach(fn=>ue(fn.bind(n))):Z&&ue(Z.bind(n))}if(Oe(Vm,h),Oe(Hd,d),Oe(zm,g),Oe(qm,m),Oe($m,I),Oe(jm,R),Oe(Ym,U),Oe(Gm,Le),Oe(Km,$e),Oe($d,ae),Oe(jd,H),Oe(Wd,ce),B(se))if(se.length){const ue=t.exposed||(t.exposed={});se.forEach(Z=>{Object.defineProperty(ue,Z,{get:()=>n[Z],set:fn=>n[Z]=fn})})}else t.exposed||(t.exposed={});ie&&t.render===lt&&(t.render=ie),je!=null&&(t.inheritAttrs=je),ht&&(t.components=ht),At&&(t.directives=At)}function ey(t,e,n=lt,i=!1){B(t)&&(t=Al(t));for(const s in t){const r=t[s];let o;le(r)?"default"in r?o=Jn(r.from||s,r.default,!0):o=Jn(r.from||s):o=Jn(r),Te(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function uu(t,e,n){Je(B(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vd(t,e,n,i){const s=i.includes(".")?Ld(n,i):()=>n[i];if(me(t)){const r=e[t];$(r)&&sr(s,r)}else if($(t))sr(s,t.bind(n));else if(le(t))if(B(t))t.forEach(r=>Vd(r,e,n,i));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&sr(s,r,t)}}function ka(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>pr(a,c,o,!0)),pr(a,e,o)),le(e)&&r.set(e,a),a}function pr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&pr(t,r,n,!0),s&&s.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=ty[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ty={data:hu,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:mn,directives:mn,watch:iy,provide:hu,inject:ny};function hu(t,e){return e?t?function(){return Ne($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function ny(t,e){return mn(Al(t),Al(e))}function Al(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function mn(t,e){return t?Ne(Ne(Object.create(null),t),e):e}function iy(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const i in e)n[i]=xe(t[i],e[i]);return n}function sy(t,e,n,i=!1){const s={},r={};hr(r,ro,1),t.propsDefaults=Object.create(null),zd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:_m(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function ry(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=Y(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(to(t.emitsOptions,d))continue;const g=e[d];if(a)if(K(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const m=si(d);s[m]=kl(a,l,m,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{zd(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!K(e,h)&&((u=fi(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=kl(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!K(e,h)&&!0)&&(delete r[h],c=!0)}c&&Ut(t,"set","$attrs")}function zd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ir(a))continue;const c=e[a];let u;s&&K(s,u=si(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:to(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=Y(n),c=l||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=kl(s,a,h,c[h],t,!K(c,h))}}return o}function kl(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&$(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(oi(s),i=c[n]=a.call(null,e),An())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===fi(n))&&(i=!0))}return i}function qd(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!$(t)){const u=h=>{a=!0;const[d,g]=qd(h,e,!0);Ne(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&i.set(t,Kn),Kn;if(B(r))for(let u=0;u<r.length;u++){const h=si(r[u]);du(h)&&(o[h]=re)}else if(r)for(const u in r){const h=si(u);if(du(h)){const d=r[u],g=o[h]=B(d)||$(d)?{type:d}:Object.assign({},d);if(g){const m=gu(Boolean,g.type),I=gu(String,g.type);g[0]=m>-1,g[1]=I<0||m<I,(m>-1||K(g,"default"))&&l.push(h)}}}const c=[o,l];return le(t)&&i.set(t,c),c}function du(t){return t[0]!=="$"}function fu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function pu(t,e){return fu(t)===fu(e)}function gu(t,e){return B(e)?e.findIndex(n=>pu(n,t)):$(e)&&pu(e,t)?0:-1}const Kd=t=>t[0]==="_"||t==="$stable",Na=t=>B(t)?t.map(gt):[gt(t)],oy=(t,e,n)=>{if(e._n)return e;const i=km((...s)=>Na(e(...s)),n);return i._c=!1,i},Gd=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Kd(s))continue;const r=t[s];if($(r))e[s]=oy(s,r,i);else if(r!=null){const o=Na(r);e[s]=()=>o}}},Yd=(t,e)=>{const n=Na(e);t.slots.default=()=>n},ly=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),hr(e,"_",n)):Gd(e,t.slots={})}else t.slots={},e&&Yd(t,e);hr(t.slots,ro,1)},ay=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=re;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ne(s,e),!n&&l===1&&delete s._):(r=!e.$stable,Gd(e,s)),o=e}else e&&(Yd(t,e),o={default:1});if(r)for(const l in s)!Kd(l)&&!(l in o)&&delete s[l]};function Xd(){return{app:null,config:{isNativeTag:D_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cy=0;function uy(t,e){return function(i,s=null){$(i)||(i=Object.assign({},i)),s!=null&&!le(s)&&(s=null);const r=Xd(),o=new Set;let l=!1;const a=r.app={_uid:cy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Oy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(a,...u)):$(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Rn(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Oa(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Nl(t,e,n,i,s=!1){if(B(t)){t.forEach((d,g)=>Nl(d,e&&(B(e)?e[g]:e),n,i,s));return}if(rr(i)&&!s)return;const r=i.shapeFlag&4?Oa(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===re?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(me(c)?(u[c]=null,K(h,c)&&(h[c]=null)):Te(c)&&(c.value=null)),$(a))Zt(a,l,12,[o,u]);else{const d=me(a),g=Te(a);if(d||g){const m=()=>{if(t.f){const I=d?K(h,a)?h[a]:u[a]:a.value;s?B(I)&&_a(I,r):B(I)?I.includes(r)||I.push(r):d?(u[a]=[r],K(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,K(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Fe(m,n)):m()}}}const Fe=Mm;function hy(t){return dy(t)}function dy(t,e){const n=H_();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=lt,insertStaticContent:m}=t,I=(f,p,_,v=null,y=null,C=null,S=!1,T=null,b=!!p.dynamicChildren)=>{if(f===p)return;f&&!In(f,p)&&(v=Bs(f),dt(f,y,C,!0),f=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:E,ref:P,shapeFlag:A}=p;switch(E){case so:R(f,p,_,v);break;case Lt:D(f,p,_,v);break;case zo:f==null&&ae(p,_,v,S);break;case Xe:ht(f,p,_,v,y,C,S,T,b);break;default:A&1?ie(f,p,_,v,y,C,S,T,b):A&6?At(f,p,_,v,y,C,S,T,b):(A&64||A&128)&&E.process(f,p,_,v,y,C,S,T,b,Bn)}P!=null&&y&&Nl(P,f&&f.ref,C,p||f,!p)},R=(f,p,_,v)=>{if(f==null)i(p.el=l(p.children),_,v);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},D=(f,p,_,v)=>{f==null?i(p.el=a(p.children||""),_,v):p.el=f.el},ae=(f,p,_,v)=>{[f.el,f.anchor]=m(f.children,p,_,v,f.el,f.anchor)},N=({el:f,anchor:p},_,v)=>{let y;for(;f&&f!==p;)y=d(f),i(f,_,v),f=y;i(p,_,v)},H=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),s(f),f=_;s(p)},ie=(f,p,_,v,y,C,S,T,b)=>{S=S||p.type==="svg",f==null?Le(p,_,v,y,C,S,T,b):ce(f,p,y,C,S,T,b)},Le=(f,p,_,v,y,C,S,T)=>{let b,E;const{type:P,props:A,shapeFlag:O,transition:F,dirs:z}=f;if(b=f.el=o(f.type,C,A&&A.is,A),O&8?u(b,f.children):O&16&&U(f.children,b,null,v,y,C&&P!=="foreignObject",S,T),z&&gn(f,null,v,"created"),A){for(const J in A)J!=="value"&&!ir(J)&&r(b,J,null,A[J],C,f.children,v,y,kt);"value"in A&&r(b,"value",null,A.value),(E=A.onVnodeBeforeMount)&&pt(E,v,f)}$e(b,f,f.scopeId,S,v),z&&gn(f,null,v,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;ee&&F.beforeEnter(b),i(b,p,_),((E=A&&A.onVnodeMounted)||ee||z)&&Fe(()=>{E&&pt(E,v,f),ee&&F.enter(b),z&&gn(f,null,v,"mounted")},y)},$e=(f,p,_,v,y)=>{if(_&&g(f,_),v)for(let C=0;C<v.length;C++)g(f,v[C]);if(y){let C=y.subTree;if(p===C){const S=y.vnode;$e(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},U=(f,p,_,v,y,C,S,T,b=0)=>{for(let E=b;E<f.length;E++){const P=f[E]=T?Kt(f[E]):gt(f[E]);I(null,P,p,_,v,y,C,S,T)}},ce=(f,p,_,v,y,C,S)=>{const T=p.el=f.el;let{patchFlag:b,dynamicChildren:E,dirs:P}=p;b|=f.patchFlag&16;const A=f.props||re,O=p.props||re;let F;_&&_n(_,!1),(F=O.onVnodeBeforeUpdate)&&pt(F,_,p,f),P&&gn(p,f,_,"beforeUpdate"),_&&_n(_,!0);const z=y&&p.type!=="foreignObject";if(E?se(f.dynamicChildren,E,T,_,v,z,C):S||Z(f,p,T,null,_,v,z,C,!1),b>0){if(b&16)je(T,p,A,O,_,v,y);else if(b&2&&A.class!==O.class&&r(T,"class",null,O.class,y),b&4&&r(T,"style",A.style,O.style,y),b&8){const ee=p.dynamicProps;for(let J=0;J<ee.length;J++){const pe=ee[J],Ze=A[pe],Hn=O[pe];(Hn!==Ze||pe==="value")&&r(T,pe,Ze,Hn,y,f.children,_,v,kt)}}b&1&&f.children!==p.children&&u(T,p.children)}else!S&&E==null&&je(T,p,A,O,_,v,y);((F=O.onVnodeUpdated)||P)&&Fe(()=>{F&&pt(F,_,p,f),P&&gn(p,f,_,"updated")},v)},se=(f,p,_,v,y,C,S)=>{for(let T=0;T<p.length;T++){const b=f[T],E=p[T],P=b.el&&(b.type===Xe||!In(b,E)||b.shapeFlag&70)?h(b.el):_;I(b,E,P,null,v,y,C,S,!0)}},je=(f,p,_,v,y,C,S)=>{if(_!==v){if(_!==re)for(const T in _)!ir(T)&&!(T in v)&&r(f,T,_[T],null,S,p.children,y,C,kt);for(const T in v){if(ir(T))continue;const b=v[T],E=_[T];b!==E&&T!=="value"&&r(f,T,E,b,S,p.children,y,C,kt)}"value"in v&&r(f,"value",_.value,v.value)}},ht=(f,p,_,v,y,C,S,T,b)=>{const E=p.el=f?f.el:l(""),P=p.anchor=f?f.anchor:l("");let{patchFlag:A,dynamicChildren:O,slotScopeIds:F}=p;F&&(T=T?T.concat(F):F),f==null?(i(E,_,v),i(P,_,v),U(p.children,_,P,y,C,S,T,b)):A>0&&A&64&&O&&f.dynamicChildren?(se(f.dynamicChildren,O,_,y,C,S,T),(p.key!=null||y&&p===y.subTree)&&Jd(f,p,!0)):Z(f,p,_,P,y,C,S,T,b)},At=(f,p,_,v,y,C,S,T,b)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?y.ctx.activate(p,_,v,S,b):bi(p,_,v,y,C,S,b):Kc(f,p,b)},bi=(f,p,_,v,y,C,S)=>{const T=f.component=Cy(f,v,y);if(no(f)&&(T.ctx.renderer=Bn),by(T),T.asyncDep){if(y&&y.registerDep(T,Oe),!f.el){const b=T.subTree=Rn(Lt);D(null,b,p,_)}return}Oe(T,f,p,_,y,C,S)},Kc=(f,p,_)=>{const v=p.component=f.component;if(Om(f,p,_))if(v.asyncDep&&!v.asyncResolved){ue(v,p,_);return}else v.next=p,bm(v.update),v.update();else p.el=f.el,v.vnode=p},Oe=(f,p,_,v,y,C,S)=>{const T=()=>{if(f.isMounted){let{next:P,bu:A,u:O,parent:F,vnode:z}=f,ee=P,J;_n(f,!1),P?(P.el=z.el,ue(f,P,S)):P=z,A&&$o(A),(J=P.props&&P.props.onVnodeBeforeUpdate)&&pt(J,F,P,z),_n(f,!0);const pe=jo(f),Ze=f.subTree;f.subTree=pe,I(Ze,pe,h(Ze.el),Bs(Ze),f,y,C),P.el=pe.el,ee===null&&xm(f,pe.el),O&&Fe(O,y),(J=P.props&&P.props.onVnodeUpdated)&&Fe(()=>pt(J,F,P,z),y)}else{let P;const{el:A,props:O}=p,{bm:F,m:z,parent:ee}=f,J=rr(p);if(_n(f,!1),F&&$o(F),!J&&(P=O&&O.onVnodeBeforeMount)&&pt(P,ee,p),_n(f,!0),A&&Bo){const pe=()=>{f.subTree=jo(f),Bo(A,f.subTree,f,y,null)};J?p.type.__asyncLoader().then(()=>!f.isUnmounted&&pe()):pe()}else{const pe=f.subTree=jo(f);I(null,pe,_,v,f,y,C),p.el=pe.el}if(z&&Fe(z,y),!J&&(P=O&&O.onVnodeMounted)){const pe=p;Fe(()=>pt(P,ee,pe),y)}(p.shapeFlag&256||ee&&rr(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&Fe(f.a,y),f.isMounted=!0,p=_=v=null}},b=f.effect=new Ea(T,()=>Aa(E),f.scope),E=f.update=()=>b.run();E.id=f.uid,_n(f,!0),E()},ue=(f,p,_)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,ry(f,p.props,v,_),ay(f,p.children,_),pi(),lu(),gi()},Z=(f,p,_,v,y,C,S,T,b=!1)=>{const E=f&&f.children,P=f?f.shapeFlag:0,A=p.children,{patchFlag:O,shapeFlag:F}=p;if(O>0){if(O&128){Us(E,A,_,v,y,C,S,T,b);return}else if(O&256){fn(E,A,_,v,y,C,S,T,b);return}}F&8?(P&16&&kt(E,y,C),A!==E&&u(_,A)):P&16?F&16?Us(E,A,_,v,y,C,S,T,b):kt(E,y,C,!0):(P&8&&u(_,""),F&16&&U(A,_,v,y,C,S,T,b))},fn=(f,p,_,v,y,C,S,T,b)=>{f=f||Kn,p=p||Kn;const E=f.length,P=p.length,A=Math.min(E,P);let O;for(O=0;O<A;O++){const F=p[O]=b?Kt(p[O]):gt(p[O]);I(f[O],F,_,null,y,C,S,T,b)}E>P?kt(f,y,C,!0,!1,A):U(p,_,v,y,C,S,T,b,A)},Us=(f,p,_,v,y,C,S,T,b)=>{let E=0;const P=p.length;let A=f.length-1,O=P-1;for(;E<=A&&E<=O;){const F=f[E],z=p[E]=b?Kt(p[E]):gt(p[E]);if(In(F,z))I(F,z,_,null,y,C,S,T,b);else break;E++}for(;E<=A&&E<=O;){const F=f[A],z=p[O]=b?Kt(p[O]):gt(p[O]);if(In(F,z))I(F,z,_,null,y,C,S,T,b);else break;A--,O--}if(E>A){if(E<=O){const F=O+1,z=F<P?p[F].el:v;for(;E<=O;)I(null,p[E]=b?Kt(p[E]):gt(p[E]),_,z,y,C,S,T,b),E++}}else if(E>O)for(;E<=A;)dt(f[E],y,C,!0),E++;else{const F=E,z=E,ee=new Map;for(E=z;E<=O;E++){const We=p[E]=b?Kt(p[E]):gt(p[E]);We.key!=null&&ee.set(We.key,E)}let J,pe=0;const Ze=O-z+1;let Hn=!1,Xc=0;const Si=new Array(Ze);for(E=0;E<Ze;E++)Si[E]=0;for(E=F;E<=A;E++){const We=f[E];if(pe>=Ze){dt(We,y,C,!0);continue}let ft;if(We.key!=null)ft=ee.get(We.key);else for(J=z;J<=O;J++)if(Si[J-z]===0&&In(We,p[J])){ft=J;break}ft===void 0?dt(We,y,C,!0):(Si[ft-z]=E+1,ft>=Xc?Xc=ft:Hn=!0,I(We,p[ft],_,null,y,C,S,T,b),pe++)}const Jc=Hn?fy(Si):Kn;for(J=Jc.length-1,E=Ze-1;E>=0;E--){const We=z+E,ft=p[We],Qc=We+1<P?p[We+1].el:v;Si[E]===0?I(null,ft,_,Qc,y,C,S,T,b):Hn&&(J<0||E!==Jc[J]?pn(ft,_,Qc,2):J--)}}},pn=(f,p,_,v,y=null)=>{const{el:C,type:S,transition:T,children:b,shapeFlag:E}=f;if(E&6){pn(f.component.subTree,p,_,v);return}if(E&128){f.suspense.move(p,_,v);return}if(E&64){S.move(f,p,_,Bn);return}if(S===Xe){i(C,p,_);for(let A=0;A<b.length;A++)pn(b[A],p,_,v);i(f.anchor,p,_);return}if(S===zo){N(f,p,_);return}if(v!==2&&E&1&&T)if(v===0)T.beforeEnter(C),i(C,p,_),Fe(()=>T.enter(C),y);else{const{leave:A,delayLeave:O,afterLeave:F}=T,z=()=>i(C,p,_),ee=()=>{A(C,()=>{z(),F&&F()})};O?O(C,z,ee):ee()}else i(C,p,_)},dt=(f,p,_,v=!1,y=!1)=>{const{type:C,props:S,ref:T,children:b,dynamicChildren:E,shapeFlag:P,patchFlag:A,dirs:O}=f;if(T!=null&&Nl(T,null,_,f,!0),P&256){p.ctx.deactivate(f);return}const F=P&1&&O,z=!rr(f);let ee;if(z&&(ee=S&&S.onVnodeBeforeUnmount)&&pt(ee,p,f),P&6)R_(f.component,_,v);else{if(P&128){f.suspense.unmount(_,v);return}F&&gn(f,null,p,"beforeUnmount"),P&64?f.type.remove(f,p,_,y,Bn,v):E&&(C!==Xe||A>0&&A&64)?kt(E,p,_,!1,!0):(C===Xe&&A&384||!y&&P&16)&&kt(b,p,_),v&&Gc(f)}(z&&(ee=S&&S.onVnodeUnmounted)||F)&&Fe(()=>{ee&&pt(ee,p,f),F&&gn(f,null,p,"unmounted")},_)},Gc=f=>{const{type:p,el:_,anchor:v,transition:y}=f;if(p===Xe){S_(_,v);return}if(p===zo){H(f);return}const C=()=>{s(_),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:T}=y,b=()=>S(_,C);T?T(f.el,C,b):b()}else C()},S_=(f,p)=>{let _;for(;f!==p;)_=d(f),s(f),f=_;s(p)},R_=(f,p,_)=>{const{bum:v,scope:y,update:C,subTree:S,um:T}=f;v&&$o(v),y.stop(),C&&(C.active=!1,dt(S,f,p,_)),T&&Fe(T,p),Fe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},kt=(f,p,_,v=!1,y=!1,C=0)=>{for(let S=C;S<f.length;S++)dt(f[S],p,_,v,y)},Bs=f=>f.shapeFlag&6?Bs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Yc=(f,p,_)=>{f==null?p._vnode&&dt(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,_),lu(),Pd(),p._vnode=f},Bn={p:I,um:dt,m:pn,r:Gc,mt:bi,mc:U,pc:Z,pbc:se,n:Bs,o:t};let Uo,Bo;return e&&([Uo,Bo]=e(Bn)),{render:Yc,hydrate:Uo,createApp:uy(Yc,Uo)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jd(t,e,n=!1){const i=t.children,s=e.children;if(B(i)&&B(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Kt(s[r]),l.el=o.el),n||Jd(o,l)),l.type===so&&(l.el=o.el)}}function fy(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const py=t=>t.__isTeleport,Xe=Symbol(void 0),so=Symbol(void 0),Lt=Symbol(void 0),zo=Symbol(void 0),$i=[];let it=null;function Ri(t=!1){$i.push(it=t?null:[])}function gy(){$i.pop(),it=$i[$i.length-1]||null}let Qi=1;function _u(t){Qi+=t}function _y(t){return t.dynamicChildren=Qi>0?it||Kn:null,gy(),Qi>0&&it&&it.push(t),t}function Ai(t,e,n,i,s,r){return _y(de(t,e,n,i,s,r,!0))}function my(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const ro="__vInternal",Qd=({key:t})=>t!=null?t:null,or=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||Te(t)||$(t)?{i:nt,r:t,k:e,f:!!n}:t:null;function de(t,e=null,n=null,i=0,s=null,r=t===Xe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qd(e),ref:e&&or(e),scopeId:Dd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return l?(Pa(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=me(n)?8:16),Qi>0&&!o&&it&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&it.push(a),a}const Rn=yy;function yy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Xm)&&(t=Lt),my(t)){const l=on(t,e,!0);return n&&Pa(l,n),Qi>0&&!r&&it&&(l.shapeFlag&6?it[it.indexOf(t)]=l:it.push(l)),l.patchFlag|=-2,l}if(ky(t)&&(t=t.__vccOpts),e){e=vy(e);let{class:l,style:a}=e;l&&!me(l)&&(e.class=pa(l)),le(a)&&(wd(a)&&!B(a)&&(a=Ne({},a)),e.style=fa(a))}const o=me(t)?1:Dm(t)?128:py(t)?64:le(t)?4:$(t)?2:0;return de(t,e,n,i,s,o,r,!0)}function vy(t){return t?wd(t)||ro in t?Ne({},t):t:null}function on(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Iy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qd(l),ref:e&&e.ref?n&&s?B(s)?s.concat(or(e)):[s,or(e)]:or(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ey(t=" ",e=0){return Rn(so,null,t,e)}function gt(t){return t==null||typeof t=="boolean"?Rn(Lt):B(t)?Rn(Xe,null,t.slice()):typeof t=="object"?Kt(t):Rn(so,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function Pa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ro in e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),i&64?(n=16,e=[Ey(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pa([e.class,i.class]));else if(s==="style")e.style=fa([e.style,i.style]);else if(Xr(s)){const r=e[s],o=i[s];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function pt(t,e,n,i=null){Je(t,e,7,[n,i])}const wy=Xd();let Ty=0;function Cy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wy,r={uid:Ty++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qd(i,s),emitsOptions:xd(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Am.bind(null,r),t.ce&&t.ce(r),r}let we=null;const oo=()=>we||nt,oi=t=>{we=t,t.scope.on()},An=()=>{we&&we.scope.off(),we=null};function Zd(t){return t.vnode.shapeFlag&4}let Zi=!1;function by(t,e=!1){Zi=e;const{props:n,children:i}=t.vnode,s=Zd(t);sy(t,n,s,e),ly(t,i);const r=s?Sy(t,e):void 0;return Zi=!1,r}function Sy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Td(new Proxy(t.ctx,Qm));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Ay(t):null;oi(t),pi();const r=Zt(i,t,0,[t.props,s]);if(gi(),An(),rd(r)){if(r.then(An,An),e)return r.then(o=>{mu(t,o,e)}).catch(o=>{eo(o,t,0)});t.asyncDep=r}else mu(t,r,e)}else ef(t,e)}function mu(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Rd(e)),ef(t,n)}let yu;function ef(t,e,n){const i=t.type;if(!t.render){if(!e&&yu&&!i.render){const s=i.template||ka(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=Ne(Ne({isCustomElement:r,delimiters:l},o),a);i.render=yu(s,c)}}t.render=i.render||lt}oi(t),pi(),Zm(t),gi(),An()}function Ry(t){return new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}})}function Ay(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Ry(t))},slots:t.slots,emit:t.emit,expose:e}}function Oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rd(Td(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)},has(e,n){return n in e||n in Hi}}))}function ky(t){return $(t)&&"__vccOpts"in t}const Ny=(t,e)=>Im(t,e,Zi),tf=Symbol(""),Py=()=>Jn(tf),Oy="3.2.45",xy="http://www.w3.org/2000/svg",wn=typeof document<"u"?document:null,vu=wn&&wn.createElement("template"),Dy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?wn.createElementNS(xy,t):wn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{vu.innerHTML=i?`<svg>${t}</svg>`:t;const l=vu.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function My(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ly(t,e,n){const i=t.style,s=me(n);if(n&&!s){for(const r in n)Pl(i,r,n[r]);if(e&&!me(e))for(const r in e)n[r]==null&&Pl(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Eu=/\s*!important$/;function Pl(t,e,n){if(B(n))n.forEach(i=>Pl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Fy(t,e);Eu.test(n)?t.setProperty(fi(i),n.replace(Eu,""),"important"):t[i]=n}}const Iu=["Webkit","Moz","ms"],qo={};function Fy(t,e){const n=qo[e];if(n)return n;let i=si(e);if(i!=="filter"&&i in t)return qo[e]=i;i=ad(i);for(let s=0;s<Iu.length;s++){const r=Iu[s]+i;if(r in t)return qo[e]=r}return e}const wu="http://www.w3.org/1999/xlink";function Uy(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wu,e.slice(6,e.length)):t.setAttributeNS(wu,e,n);else{const r=x_(e);n==null||r&&!nd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function By(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=nd(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Hy(t,e,n,i){t.addEventListener(e,n,i)}function $y(t,e,n,i){t.removeEventListener(e,n,i)}function jy(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=Wy(e);if(i){const c=r[e]=qy(i,s);Hy(t,l,c,a)}else o&&($y(t,l,o,a),r[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function Wy(t){let e;if(Tu.test(t)){e={};let i;for(;i=t.match(Tu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fi(t.slice(2)),e]}let Ko=0;const Vy=Promise.resolve(),zy=()=>Ko||(Vy.then(()=>Ko=0),Ko=Date.now());function qy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Je(Ky(i,n.value),e,5,[i])};return n.value=t,n.attached=zy(),n}function Ky(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cu=/^on[a-z]/,Gy=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?My(t,i,s):e==="style"?Ly(t,n,i):Xr(e)?ga(e)||jy(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yy(t,e,i,s))?By(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Uy(t,e,i,s))};function Yy(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Cu.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cu.test(e)&&me(n)?!1:e in t}const Xy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hm.props;const Jy=Ne({patchProp:Gy},Dy);let bu;function Qy(){return bu||(bu=hy(Jy))}const Zy=(...t)=>{const e=Qy().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ev(i);if(!s)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ev(t){return me(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+nf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(i.push(d),c!==64){const g=l<<4&240|c>>2;if(i.push(g),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},rf=function(t){const e=sf(t);return lo.encodeByteArray(e,!0)},gr=function(t){return rf(t).replace(/\./g,"")},_r=function(t){try{return lo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return of(void 0,t)}function of(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iv(n)||(t[n]=of(t[n],e[n]));return t}function iv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function sv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rv(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function af(){return nf.NODE_ADMIN===!0}function cf(){return typeof indexedDB=="object"}function ov(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=()=>lv().__FIREBASE_DEFAULTS__,cv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return av()||cv()||uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uf=t=>{var e,n;return(n=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hv=t=>{const e=uf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},dv=()=>{var t;return(t=Da())===null||t===void 0?void 0:t.config},hf=t=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[gr(JSON.stringify(n)),gr(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="FirebaseError";class bt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=pv,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?gv(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bt(s,l,i)}}function gv(t,e){return t.replace(_v,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _v=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ts(_r(r[0])||""),n=ts(_r(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},mv=function(t){const e=df(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yv=function(t){const e=df(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function li(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Su(r)&&Su(o)){if(!yr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Su(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Ev(t,e){const n=new Iv(t,e);return n.subscribe.bind(n)}class Iv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");wv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Go),s.error===void 0&&(s.error=Go),s.complete===void 0&&(s.complete=Go);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Go(){}function ff(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,w(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ao=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new es;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sv(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bv(t){return t===yn?void 0:t}function Sv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Av={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},kv=X.INFO,Nv={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Pv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Nv[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ys{constructor(e){this.name=e,this._logLevel=kv,this._logHandler=Pv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Av[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ov=(t,e)=>e.some(n=>t instanceof n);let Ru,Au;function xv(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dv(){return Au||(Au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,xl=new WeakMap,gf=new WeakMap,Yo=new WeakMap,Ma=new WeakMap;function Mv(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(en(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pf.set(n,t)}).catch(()=>{}),Ma.set(e,t),e}function Lv(t){if(xl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xl.set(t,e)}let Dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fv(t){Dl=t(Dl)}function Uv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Xo(this),e,...n);return gf.set(i,e.sort?e.sort():[e]),en(i)}:Dv().includes(t)?function(...e){return t.apply(Xo(this),e),en(pf.get(this))}:function(...e){return en(t.apply(Xo(this),e))}}function Bv(t){return typeof t=="function"?Uv(t):(t instanceof IDBTransaction&&Lv(t),Ov(t,xv())?new Proxy(t,Dl):t)}function en(t){if(t instanceof IDBRequest)return Mv(t);if(Yo.has(t))return Yo.get(t);const e=Bv(t);return e!==t&&(Yo.set(t,e),Ma.set(e,t)),e}const Xo=t=>Ma.get(t);function Hv(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=en(o);return i&&o.addEventListener("upgradeneeded",a=>{i(en(o.result),a.oldVersion,a.newVersion,en(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const $v=["get","getKey","getAll","getAllKeys","count"],jv=["put","add","delete","clear"],Jo=new Map;function ku(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jo.get(e))return Jo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=jv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$v.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Jo.set(e,r),r}Fv(t=>({...t,get:(e,n,i)=>ku(e,n)||t.get(e,n,i),has:(e,n)=>!!ku(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Vv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",Nu="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new ys("@firebase/app"),zv="@firebase/app-compat",qv="@firebase/analytics-compat",Kv="@firebase/analytics",Gv="@firebase/app-check-compat",Yv="@firebase/app-check",Xv="@firebase/auth",Jv="@firebase/auth-compat",Qv="@firebase/database",Zv="@firebase/database-compat",eE="@firebase/functions",tE="@firebase/functions-compat",nE="@firebase/installations",iE="@firebase/installations-compat",sE="@firebase/messaging",rE="@firebase/messaging-compat",oE="@firebase/performance",lE="@firebase/performance-compat",aE="@firebase/remote-config",cE="@firebase/remote-config-compat",uE="@firebase/storage",hE="@firebase/storage-compat",dE="@firebase/firestore",fE="@firebase/firestore-compat",pE="firebase",gE="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="[DEFAULT]",_E={[Ml]:"fire-core",[zv]:"fire-core-compat",[Kv]:"fire-analytics",[qv]:"fire-analytics-compat",[Yv]:"fire-app-check",[Gv]:"fire-app-check-compat",[Xv]:"fire-auth",[Jv]:"fire-auth-compat",[Qv]:"fire-rtdb",[Zv]:"fire-rtdb-compat",[eE]:"fire-fn",[tE]:"fire-fn-compat",[nE]:"fire-iid",[iE]:"fire-iid-compat",[sE]:"fire-fcm",[rE]:"fire-fcm-compat",[oE]:"fire-perf",[lE]:"fire-perf-compat",[aE]:"fire-rc",[cE]:"fire-rc-compat",[uE]:"fire-gcs",[hE]:"fire-gcs-compat",[dE]:"fire-fst",[fE]:"fire-fst-compat","fire-js":"fire-js",[pE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,Fl=new Map;function mE(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t){const e=t.name;if(Fl.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Fl.set(e,t);for(const n of vr.values())mE(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tn=new mi("app","Firebase",yE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=gE;function _f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ll,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(n||(n=dv()),!n)throw tn.create("no-options");const r=vr.get(s);if(r){if(yr(n,r.options)&&yr(i,r.config))return r;throw tn.create("duplicate-app",{appName:s})}const o=new Rv(s);for(const a of Fl.values())o.addComponent(a);const l=new vE(n,i,o);return vr.set(s,l),l}function Fa(t=Ll){const e=vr.get(t);if(!e&&t===Ll)return _f();if(!e)throw tn.create("no-app",{appName:t});return e}function qe(t,e,n){var i;let s=(i=_E[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}Tt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="firebase-heartbeat-database",IE=1,ns="firebase-heartbeat-store";let Qo=null;function mf(){return Qo||(Qo=Hv(EE,IE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw tn.create("idb-open",{originalErrorMessage:t.message})})),Qo}async function wE(t){var e;try{return(await mf()).transaction(ns).objectStore(ns).get(yf(t))}catch(n){if(n instanceof bt)On.warn(n.message);else{const i=tn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});On.warn(i.message)}}}async function Pu(t,e){var n;try{const s=(await mf()).transaction(ns,"readwrite");return await s.objectStore(ns).put(e,yf(t)),s.done}catch(i){if(i instanceof bt)On.warn(i.message);else{const s=tn.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});On.warn(s.message)}}}function yf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=1024,CE=30*24*60*60*1e3;class bE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RE(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ou();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=CE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ou(),{heartbeatsToSend:n,unsentEntries:i}=SE(this._heartbeatsCache.heartbeats),s=gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ou(){return new Date().toISOString().substring(0,10)}function SE(t,e=TE){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),xu(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class RE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cf()?ov().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xu(t){return gr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){Tt(new ct("platform-logger",e=>new Wv(e),"PRIVATE")),Tt(new ct("heartbeat",e=>new bE(e),"PRIVATE")),qe(Ml,Nu,t),qe(Ml,Nu,"esm2017"),qe("fire-js","")}AE("");var kE="firebase",NE="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(kE,NE,"app");const Du="@firebase/database",Mu="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf="";function PE(t){vf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OE(e)}}catch{}return new xE},Tn=Ef("localStorage"),Ul=Ef("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new ys("@firebase/database"),DE=function(){let t=1;return function(){return t++}}(),If=function(t){const e=Tv(t),n=new vv;n.update(e);const i=n.digest();return lo.encodeByteArray(i)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vs.apply(null,i):typeof i=="object"?e+=ge(i):e+=i,e+=" "}return e};let kn=null,Lu=!0;const ME=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qn.logLevel=X.VERBOSE,kn=Qn.log.bind(Qn),e&&Ul.set("logging_enabled",!0)):typeof t=="function"?kn=t:(kn=null,Ul.remove("logging_enabled"))},Se=function(...t){if(Lu===!0&&(Lu=!1,kn===null&&Ul.get("logging_enabled")===!0&&ME(!0)),kn){const e=vs.apply(null,t);kn(e)}},Es=function(t){return function(...e){Se(t,...e)}},Bl=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);Qn.error(e)},Bt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw Qn.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+vs(...t);Qn.warn(e)},LE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},FE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ai="[MIN_NAME]",xn="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===ai||e===xn)return-1;if(e===ai||t===xn)return 1;{const n=Fu(t),i=Fu(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},UE=function(t,e){return t===e?0:t<e?-1:1},ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Ua=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ge(e[i]),n+=":",n+=Ua(t[e[i]]);return n+="}",n},Tf=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cf=function(t){w(!wf(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},BE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $E(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const jE=new RegExp("^-?(0*)\\d{1,10}$"),WE=-2147483648,VE=2147483647,Fu=function(t){if(jE.test(t)){const e=Number(t);if(e>=WE&&e<=VE)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},zE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Zn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="5",bf="v",Sf="s",Rf="r",Af="f",kf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nf="ls",Pf="p",Hl="ac",Of="websocket",xf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,i,s,r=!1,o="",l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mf(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let i;if(e===Of)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xf)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GE(t)&&(n.ns=t.namespace);const s=[];return He(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={},el={};function Ha(t){const e=t.toString();return Zo[e]||(Zo[e]=new YE),Zo[e]}function XE(t,e){const n=t.toString();return el[n]||(el[n]=e()),el[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Is(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="start",QE="close",ZE="pLPCommand",eI="pRTLPCB",Lf="id",Ff="pw",Uf="ser",tI="cb",nI="seg",iI="ts",sI="d",rI="dframe",Bf=1870,Hf=30,oI=Bf-Hf,lI=25e3,aI=3e4;class Wn{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Ha(n),this.urlFn=a=>(this.appCheckToken&&(a[Hl]=this.appCheckToken),Mf(n,xf,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aI)),FE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $a((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uu)this.id=l,this.password=a;else if(o===QE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Uu]="t",i[Uf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[bf]=Ba,this.transportSessionId&&(i[Sf]=this.transportSessionId),this.lastSessionId&&(i[Nf]=this.lastSessionId),this.applicationId&&(i[Pf]=this.applicationId),this.appCheckToken&&(i[Hl]=this.appCheckToken),typeof location<"u"&&location.hostname&&kf.test(location.hostname)&&(i[Rf]=Af);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wn.forceAllow_=!0}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){return Wn.forceAllow_?!0:!Wn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BE()&&!HE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=rf(n),s=Tf(i,oI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[rI]="t",i[Lf]=e,i[Ff]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $a{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DE(),window[ZE+this.uniqueCallbackIdentifier]=e,window[eI+this.uniqueCallbackIdentifier]=n,this.myIFrame=$a.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lf]=this.myID,e[Ff]=this.myPW,e[Uf]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hf+i.length<=Bf;){const o=this.pendingSegs.shift();i=i+"&"+nI+s+"="+o.seg+"&"+iI+s+"="+o.ts+"&"+sI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(lI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=16384,uI=45e3;let Er=null;typeof MozWebSocket<"u"?Er=MozWebSocket:typeof WebSocket<"u"&&(Er=WebSocket);class tt{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Ha(n),this.connURL=tt.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[bf]=Ba,typeof location<"u"&&location.hostname&&kf.test(location.hostname)&&(o[Rf]=Af),n&&(o[Sf]=n),i&&(o[Nf]=i),s&&(o[Hl]=s),r&&(o[Pf]=r),Mf(e,Of,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let i;af(),this.mySock=new Er(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Er!==null&&!tt.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||Tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ts(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Tf(n,cI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tt&&tt.isAvailable();let i=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[tt];else{const s=this.transports_=[];for(const r of is.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=6e4,dI=5e3,fI=10*1024,pI=100*1024,tl="t",Bu="d",gI="s",Hu="r",_I="e",$u="o",ju="a",Wu="n",Vu="p",mI="h";class yI{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tl in e){const n=e[tl];n===ju?this.upgradeIfSecondaryHealthy_():n===Hu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$u&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ki("t",e),i=ki("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ju,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ki("t",e),i=ki("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ki(tl,e);if(Bu in e){const i=e[Bu];if(n===mI)this.onHandshake_(i);else if(n===Wu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gI?this.onConnectionShutdown_(i):n===Hu?this.onReset_(i):n===_I?Bl("Server Error: "+i):n===$u?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ba!==i&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends jf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ir}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=32,qu=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Q("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ln(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Wf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function _e(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Q(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=W(t),i=W(e);if(n===null)return e;if(n===i)return De(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ja(t,e){if(ln(t)!==ln(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function st(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ln(t)>ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class EI{constructor(e,n){this.errorPrefix_=n,this.parts_=Vf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ao(this.parts_[i]);qf(this)}}function II(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ao(e),qf(t)}function wI(t){const e=t.parts_.pop();t.byteLength_-=ao(e),t.parts_.length>0&&(t.byteLength_-=1)}function qf(t){if(t.byteLength_>qu)throw new Error(t.errorPrefix_+"has a key path longer than "+qu+" bytes ("+t.byteLength_+").");if(t.parts_.length>zu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zu+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends jf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Wa}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=1e3,TI=60*5*1e3,Ku=30*1e3,CI=1.3,bI=3e4,SI="server_kill",Gu=3;class Ft extends $f{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ft.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=TI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!af())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ir.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ge(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new es,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ft.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const i=li(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ku)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bl("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bI&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new yI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(SI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ol(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Ua(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Q(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gu&&(this.reconnectDelay_=Ku,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vf.replace(/\./g,"-")]=1,xa()?e["framework.cordova"]=1:lf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ir.getInstance().currentlyOnline();return Ol(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new j(ai,e),s=new j(ai,n);return this.compare(i,s)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class Kf extends co{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(xn,Ks)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ks)}toString(){return".key"}}const ei=new Kf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:ve.RED,this.left=s!=null?s:Be.EMPTY_NODE,this.right=r!=null?r:Be.EMPTY_NODE}copy(e,n,i,s,r){return new ve(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class RI{copy(e,n,i,s,r){return this}insert(e,n,i){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gs(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new RI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){return vi(t.name,e.name)}function Va(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;function kI(t){$l=t}const Gf=function(t){return typeof t=="number"?"number:"+Cf(t):"string:"+t},Yf=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else w(t===$l||t.isEmpty(),"priority of unexpected type.");w(t===$l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yf(this.priorityNode_)}static set __childrenNodeConstructor(e){Yu=e}static get __childrenNodeConstructor(){return Yu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:W(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=W(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cf(this.value_):e+=this.value_,this.lazyHash_=If(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(i);return w(s>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf,Jf;function NI(t){Xf=t}function PI(t){Jf=t}class OI extends co{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(xn,new ye("[PRIORITY-POST]",Jf))}makePost(e,n){const i=Xf(e);return new j(n,new ye("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new OI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=Math.log(2);class DI{constructor(e){const n=r=>parseInt(Math.log(r)/xI,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ve(d,h.node,ve.BLACK,null,null);{const g=parseInt(u/2,10)+a,m=s(a,g),I=s(g+1,c);return h=t[g],d=n?n(h):h,new ve(d,h.node,ve.BLACK,m,I)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,I){const R=h-m,D=h;h-=m;const ae=s(R+1,D),N=t[R],H=n?n(N):N;g(new ve(H,N.node,I,null,ae))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const I=a.nextBitIsOne(),R=Math.pow(2,a.count-(m+1));I?d(R,ve.BLACK):(d(R,ve.BLACK),d(R,ve.RED))}return u},o=new DI(t.length),l=r(o);return new Be(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;const $n={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w($n&&he,"ChildrenNode.ts has not been loaded"),nl=nl||new Ot({".priority":$n},{".priority":he}),nl}get(e){const n=li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=wr(i,e.getCompare()):l=$n;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Ot(u,c)}addToIndexes(e,n){const i=mr(this.indexes_,(s,r)=>{const o=li(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),s===$n)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),wr(l,o.getCompare())}else return $n;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Ot(i,this.indexSet_)}removeFromIndexes(e,n){const i=mr(this.indexes_,s=>{if(s===$n)return s;{const r=n.get(e.name);return r?s.remove(new j(e.name,r)):s}});return new Ot(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class x{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Yf(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pi||(Pi=new x(new Be(Va),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new j(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Pi:this.priorityNode_;return new x(s,o,r)}}updateChild(e,n){const i=W(e);if(i===null)return n;{w(W(e)!==".priority"||ln(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(te(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),i++,r&&x.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gf(this.getPriority().val())+":"),this.forEachChild(he,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":If(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(he),s=n.getIterator(he);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MI extends x{constructor(){super(new Be(Va),x.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const ws=new MI;Object.defineProperties(j,{MIN:{value:new j(ai,x.EMPTY_NODE)},MAX:{value:new j(xn,ws)}});Kf.__EMPTY_NODE=x.EMPTY_NODE;ye.__childrenNodeConstructor=x;kI(ws);PI(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function Ie(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ie(e))}if(!(t instanceof Array)&&LI){const n=[];let i=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return x.EMPTY_NODE;const r=wr(n,AI,o=>o.name,Va);if(i){const o=wr(n,he.getCompare());return new x(r,Ie(e),new Ot({".priority":o},{".priority":he}))}else return new x(r,Ie(e),Ot.Default)}else{let n=x.EMPTY_NODE;return He(t,(i,s)=>{if(Vt(t,i)&&i.substring(0,1)!=="."){const r=Ie(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ie(e))}}NI(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends co{constructor(e){super(),this.indexPath_=e,w(!V(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?vi(e.name,n.name):r}makePost(e,n){const i=Ie(e),s=x.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(n,s)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,ws);return new j(xn,e)}toString(){return Vf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends co{compare(e,n){const i=e.node.compareTo(n.node);return i===0?vi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const i=Ie(e);return new j(n,i)}toString(){return".value"}}const BI=new UI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){return{type:"value",snapshotNode:t}}function ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ss(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ci(n,i)):o.trackChildChange(rs(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(s,r)=>{n.hasChild(s)||i.trackChildChange(ss(s,r))}),n.isLeafNode()||n.forEachChild(he,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(rs(s,r,o))}else i.trackChildChange(ci(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.indexedFilter_=new za(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new j(n,i))||(i=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=x.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,l)=>{r.matches(new j(o,l))||(s=s.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new j(n,i))||(i=x.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(x.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:s=s.updateImmediateChild(h.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new j(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(rs(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(ss(n,h));const I=l.updateImmediateChild(n,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ci(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ss(c.name,c.node)),r.trackChildChange(ci(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new qa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jI(t){return t.loadsAllData()?new za(t.getIndex()):t.hasLimit()?new $I(t):new os(t)}function Xu(t){const e={};if(t.isDefault())return e;let n;return t.index_===he?n="$priority":t.index_===BI?n="$value":t.index_===ei?n="$key":(w(t.index_ instanceof FI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_&&(e.startAt=ge(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ge(t.indexStartName_))),t.endSet_&&(e.endAt=ge(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ge(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ju(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends $f{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Tr.getListenId_(e,i),l={};this.listens_[o]=l;const a=Xu(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),li(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Tr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Xu(e._queryParams),i=e._path.toString(),s=new es;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ts(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){return{value:null,children:new Map}}function Zf(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=W(e);t.children.has(i)||t.children.set(i,Cr());const s=t.children.get(i);e=te(e),Zf(s,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):VI(t,(i,s)=>{const r=new Q(e.toString()+"/"+i);jl(s,r,n)})}function VI(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=10*1e3,qI=30*1e3,KI=5*60*1e3;class GI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zI(e);const i=Qu+(qI-Qu)*Math.random();ji(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;He(e,(s,r)=>{r>0&&Vt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*KI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rt||(rt={}));function ep(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ka(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ga(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=rt.ACK_USER_WRITE,this.source=ep()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new br(G(),n,this.revert)}}else return w(W(this.path)===e,"operationForChild called for unrelated child."),new br(te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.source=e,this.path=n,this.type=rt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new ls(this.source,G()):new ls(this.source,te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=rt.OVERWRITE}operationForChild(e){return V(this.path)?new Dn(this.source,G(),this.snap.getImmediateChild(e)):new Dn(this.source,te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=rt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new Dn(this.source,G(),n.value):new as(this.source,G(),n)}else return w(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new as(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XI(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(HI(o.childName,o.snapshotNode))}),Oi(t,s,"child_removed",e,i,n),Oi(t,s,"child_added",e,i,n),Oi(t,s,"child_moved",r,i,n),Oi(t,s,"child_changed",e,i,n),Oi(t,s,"value",e,i,n),s}function Oi(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>QI(t,l,a)),o.forEach(l=>{const a=JI(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function JI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QI(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const i=new j(e.childName,e.snapshotNode),s=new j(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e){return{eventCache:t,serverCache:e}}function Wi(t,e,n,i){return uo(new an(e,n,i),t.serverCache)}function tp(t,e,n,i){return uo(t.eventCache,new an(e,n,i))}function Sr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Mn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;const ZI=()=>(il||(il=new Be(UE)),il);class ne{constructor(e,n=ZI()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return He(e,(i,s)=>{n=n.set(new Q(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(V(e))return null;{const i=W(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:_e(new Q(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=W(e),i=this.children.get(n);return i!==null?i.subtree(te(e)):new ne(null)}}set(e,n){if(V(e))return new ne(n,this.children);{const i=W(e),r=(this.children.get(i)||new ne(null)).set(te(e),n),o=this.children.insert(i,r);return new ne(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=W(e),i=this.children.get(n);if(i){const s=i.remove(te(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=W(e),i=this.children.get(n);return i?i.get(te(e)):null}}setTree(e,n){if(V(e))return n;{const i=W(e),r=(this.children.get(i)||new ne(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ne(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(_e(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(V(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(te(e),_e(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,i){if(V(e))return this;{this.value&&i(n,this.value);const s=W(e),r=this.children.get(s);return r?r.foreachOnPath_(te(e),_e(n,s),i):new ne(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(_e(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new ne(null))}}function Vi(t,e,n){if(V(e))return new at(new ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=De(s,e);return r=r.updateChild(o,n),new at(t.writeTree_.set(s,r))}else{const s=new ne(n),r=t.writeTree_.setTree(e,s);return new at(r)}}}function Zu(t,e,n){let i=t;return He(n,(s,r)=>{i=Vi(i,_e(e,s),r)}),i}function eh(t,e){if(V(e))return at.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new at(n)}}function Wl(t,e){return Un(t,e)!=null}function Un(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function th(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(i,s)=>{e.push(new j(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new j(i,s.value))}),e}function nn(t,e){if(V(e))return t;{const n=Un(t,e);return n!=null?new at(new ne(n)):new at(t.writeTree_.subtree(e))}}function Vl(t){return t.writeTree_.isEmpty()}function ui(t,e){return np(G(),t.writeTree_,e)}function np(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=np(_e(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(_e(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e){return op(e,t)}function ew(t,e,n,i,s){w(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Vi(t.visibleWrites,e,n)),t.lastWriteId=i}function tw(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function nw(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&iw(l,i.path)?s=!1:st(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return sw(t),!0;if(i.snap)t.visibleWrites=eh(t.visibleWrites,i.path);else{const l=i.children;He(l,a=>{t.visibleWrites=eh(t.visibleWrites,_e(i.path,a))})}return!0}else return!1}function iw(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(_e(t.path,n),e))return!0;return!1}function sw(t){t.visibleWrites=ip(t.allWrites,rw,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rw(t){return t.visible}function ip(t,e,n){let i=at.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)st(n,o)?(l=De(n,o),i=Vi(i,l,r.snap)):st(o,n)&&(l=De(o,n),i=Vi(i,G(),r.snap.getChild(l)));else if(r.children){if(st(n,o))l=De(n,o),i=Zu(i,l,r.children);else if(st(o,n))if(l=De(o,n),V(l))i=Zu(i,G(),r.children);else{const a=li(r.children,W(l));if(a){const c=a.getChild(te(l));i=Vi(i,G(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return i}function sp(t,e,n,i,s){if(!i&&!s){const r=Un(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(Vl(o))return n;if(n==null&&!Wl(o,G()))return null;{const l=n||x.EMPTY_NODE;return ui(o,l)}}}else{const r=nn(t.visibleWrites,e);if(!s&&Vl(r))return n;if(!s&&n==null&&!Wl(r,G()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},l=ip(t.allWrites,o,e),a=n||x.EMPTY_NODE;return ui(l,a)}}}function ow(t,e,n){let i=x.EMPTY_NODE;const s=Un(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(he,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=ui(nn(r,new Q(o)),l);i=i.updateImmediateChild(o,a)}),th(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=nn(t.visibleWrites,e);return th(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function lw(t,e,n,i,s){w(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Wl(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return Vl(o)?s.getChild(n):ui(o,s.getChild(n))}}function aw(t,e,n,i){const s=_e(e,n),r=Un(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=nn(t.visibleWrites,s);return ui(o,i.getNode().getImmediateChild(n))}else return null}function cw(t,e){return Un(t.visibleWrites,e)}function uw(t,e,n,i,s,r,o){let l;const a=nn(t.visibleWrites,e),c=Un(a,G());if(c!=null)l=c;else if(n!=null)l=ui(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function hw(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Rr(t,e,n,i){return sp(t.writeTree,t.treePath,e,n,i)}function Ya(t,e){return ow(t.writeTree,t.treePath,e)}function nh(t,e,n,i){return lw(t.writeTree,t.treePath,e,n,i)}function Ar(t,e){return cw(t.writeTree,_e(t.treePath,e))}function dw(t,e,n,i,s,r){return uw(t.writeTree,t.treePath,e,n,i,s,r)}function Xa(t,e,n){return aw(t.writeTree,t.treePath,e,n)}function rp(t,e){return op(_e(t.treePath,e),t.writeTree)}function op(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,rs(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ss(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ci(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,rs(i,e.snapshotNode,s.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const lp=new pw;class Ja{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xa(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mn(this.viewCache_),r=dw(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){return{filter:t}}function _w(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mw(t,e,n,i,s){const r=new fw;let o,l;if(n.type===rt.OVERWRITE){const c=n;c.source.fromUser?o=zl(t,e,c.path,c.snap,i,s,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=kr(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===rt.MERGE){const c=n;c.source.fromUser?o=vw(t,e,c.path,c.children,i,s,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ql(t,e,c.path,c.children,i,s,l,r))}else if(n.type===rt.ACK_USER_WRITE){const c=n;c.revert?o=ww(t,e,c.path,i,s,r):o=Ew(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===rt.LISTEN_COMPLETE)o=Iw(t,e,n.path,i,r);else throw _i("Unknown operation type: "+n.type);const a=r.getChanges();return yw(e,o,a),{viewCache:o,changes:a}}function yw(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Sr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Qf(Sr(e)))}}function ap(t,e,n,i,s,r){const o=e.eventCache;if(Ar(i,n)!=null)return e;{let l,a;if(V(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Mn(e),u=c instanceof x?c:x.EMPTY_NODE,h=Ya(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Rr(i,Mn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(n);if(c===".priority"){w(ln(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=nh(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=nh(i,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Xa(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Wi(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function kr(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),g,null)}else{const g=W(n);if(!a.isCompleteForPath(n)&&ln(n)>1)return e;const m=te(n),R=a.getNode().getImmediateChild(g).updateChild(m,i);g===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),g,R,m,lp,null)}const h=tp(e,c,a.isFullyInitialized()||V(n),u.filtersNodes()),d=new Ja(s,h,r);return ap(t,h,n,s,d,l)}function zl(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new Ja(s,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Wi(e,c,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Wi(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=te(n),g=l.getNode().getImmediateChild(h);let m;if(V(d))m=i;else{const I=u.getCompleteChild(h);I!=null?Wf(d)===".priority"&&I.getChild(zf(d)).isEmpty()?m=I:m=I.updateChild(d,i):m=x.EMPTY_NODE}if(g.equals(m))a=e;else{const I=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=Wi(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ih(t,e){return t.eventCache.isCompleteForChild(e)}function vw(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=_e(n,a);ih(e,W(u))&&(l=zl(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=_e(n,a);ih(e,W(u))||(l=zl(t,l,u,c,s,r,o))}),l}function sh(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ql(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=i:c=new ne(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=sh(t,g,d);a=kr(t,a,new Q(h),m,s,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),I=sh(t,m,d);a=kr(t,a,new Q(h),I,s,r,o,l)}}),a}function Ew(t,e,n,i,s,r,o){if(Ar(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return kr(t,e,n,a.getNode().getChild(n),s,r,l,o);if(V(n)){let c=new ne(null);return a.getNode().forEachChild(ei,(u,h)=>{c=c.set(new Q(u),h)}),ql(t,e,n,c,s,r,l,o)}else return e}else{let c=new ne(null);return i.foreach((u,h)=>{const d=_e(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),ql(t,e,n,c,s,r,l,o)}}function Iw(t,e,n,i,s){const r=e.serverCache,o=tp(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return ap(t,o,n,i,lp,s)}function ww(t,e,n,i,s,r){let o;if(Ar(i,n)!=null)return e;{const l=new Ja(i,e,s),a=e.eventCache.getNode();let c;if(V(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rr(i,Mn(e));else{const h=e.serverCache.getNode();w(h instanceof x,"serverChildren would be complete if leaf node"),u=Ya(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=W(n);let h=Xa(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,x.EMPTY_NODE,te(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rr(i,Mn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ar(i,G())!=null,Wi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new za(i.getIndex()),r=jI(i);this.processor_=gw(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,l.getNode(),null),u=new an(a,o.isFullyInitialized(),s.filtersNodes()),h=new an(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=uo(h,u),this.eventGenerator_=new YI(this.query_)}get query(){return this.query_}}function Cw(t){return t.viewCache_.serverCache.getNode()}function bw(t){return Sr(t.viewCache_)}function Sw(t,e){const n=Mn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function rh(t){return t.eventRegistrations_.length===0}function Rw(t,e){t.eventRegistrations_.push(e)}function oh(t,e,n){const i=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function lh(t,e,n,i){e.type===rt.MERGE&&e.source.queryId!==null&&(w(Mn(t.viewCache_),"We should always have a full cache before handling merges"),w(Sr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=mw(t.processor_,s,e,n,i);return _w(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,cp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Aw(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(r,o)=>{i.push(ci(r,o))}),n.isFullyInitialized()&&i.push(Qf(n.getNode())),cp(t,i,n.getNode(),e)}function cp(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return XI(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;class up{constructor(){this.views=new Map}}function kw(t){w(!Nr,"__referenceConstructor has already been defined"),Nr=t}function Nw(){return w(Nr,"Reference.ts has not been loaded"),Nr}function Pw(t){return t.views.size===0}function Qa(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return w(r!=null,"SyncTree gave us an op for an invalid query."),lh(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(lh(o,e,n,i));return r}}function hp(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Rr(n,s?i:null),a=!1;l?a=!0:i instanceof x?(l=Ya(n,i),a=!1):(l=x.EMPTY_NODE,a=!1);const c=uo(new an(l,a,!1),new an(i,s,!1));return new Tw(e,c)}return o}function Ow(t,e,n,i,s,r){const o=hp(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Rw(o,n),Aw(o,n)}function xw(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=cn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(oh(c,n,i)),rh(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(oh(a,n,i)),rh(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!cn(t)&&r.push(new(Nw())(e._repo,e._path)),{removed:r,events:o}}function dp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function sn(t,e){let n=null;for(const i of t.views.values())n=n||Sw(i,e);return n}function fp(t,e){if(e._queryParams.loadsAllData())return fo(t);{const i=e._queryIdentifier;return t.views.get(i)}}function pp(t,e){return fp(t,e)!=null}function cn(t){return fo(t)!=null}function fo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;function Dw(t){w(!Pr,"__referenceConstructor has already been defined"),Pr=t}function Mw(){return w(Pr,"Reference.ts has not been loaded"),Pr}let Lw=1;class ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=hw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fw(t,e,n,i,s){return ew(t.pendingWriteTree_,e,n,i,s),s?Cs(t,new Dn(ep(),e,n)):[]}function Vn(t,e,n=!1){const i=tw(t.pendingWriteTree_,e);if(nw(t.pendingWriteTree_,e)){let r=new ne(null);return i.snap!=null?r=r.set(G(),!0):He(i.children,o=>{r=r.set(new Q(o),!0)}),Cs(t,new br(i.path,r,n))}else return[]}function Ts(t,e,n){return Cs(t,new Dn(Ka(),e,n))}function Uw(t,e,n){const i=ne.fromObject(n);return Cs(t,new as(Ka(),e,i))}function Bw(t,e){return Cs(t,new ls(Ka(),e))}function Hw(t,e,n){const i=Za(t,n);if(i){const s=ec(i),r=s.path,o=s.queryId,l=De(r,e),a=new ls(Ga(o),l);return tc(t,r,a)}else return[]}function Or(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||pp(o,e))){const a=xw(o,e,n,i);Pw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>cn(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Ww(d);for(let m=0;m<g.length;++m){const I=g[m],R=I.query,D=vp(t,I);t.listenProvider_.startListening(zi(R),cs(t,R),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(zi(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(po(d));t.listenProvider_.stopListening(zi(d),g)}))}Vw(t,c)}return l}function gp(t,e,n,i){const s=Za(t,i);if(s!=null){const r=ec(s),o=r.path,l=r.queryId,a=De(o,e),c=new Dn(Ga(l),a,n);return tc(t,o,c)}else return[]}function $w(t,e,n,i){const s=Za(t,i);if(s){const r=ec(s),o=r.path,l=r.queryId,a=De(o,e),c=ne.fromObject(n),u=new as(Ga(l),a,c);return tc(t,o,u)}else return[]}function Kl(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,g)=>{const m=De(d,s);r=r||sn(g,m),o=o||cn(g)});let l=t.syncPointTree_.get(s);l?(o=o||cn(l),r=r||sn(l,G())):(l=new up,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=x.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,m)=>{const I=sn(m,G());I&&(r=r.updateImmediateChild(g,I))}));const c=pp(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=po(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=zw();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=ho(t.pendingWriteTree_,s);let h=Ow(l,e,n,u,r,a);if(!c&&!o&&!i){const d=fp(l,e);h=h.concat(qw(t,e,d))}return h}function _p(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),c=sn(l,a);if(c)return c});return sp(s,e,r,n,!0)}function jw(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=De(c,n);i=i||sn(u,h)});let s=t.syncPointTree_.get(n);s?i=i||sn(s,G()):(s=new up,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new an(i,!0,!1):null,l=ho(t.pendingWriteTree_,e._path),a=hp(s,e,l,r?o.getNode():x.EMPTY_NODE,r);return bw(a)}function Cs(t,e){return mp(e,t.syncPointTree_,null,ho(t.pendingWriteTree_,G()))}function mp(t,e,n,i){if(V(t.path))return yp(t,e,n,i);{const s=e.get(G());n==null&&s!=null&&(n=sn(s,G()));let r=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=rp(i,o);r=r.concat(mp(l,a,c,u))}return s&&(r=r.concat(Qa(s,t,i,n))),r}}function yp(t,e,n,i){const s=e.get(G());n==null&&s!=null&&(n=sn(s,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=rp(i,o),u=t.operationForChild(o);u&&(r=r.concat(yp(u,l,a,c)))}),s&&(r=r.concat(Qa(s,t,i,n))),r}function vp(t,e){const n=e.query,i=cs(t,n);return{hashFn:()=>(Cw(e)||x.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Hw(t,n._path,i):Bw(t,n._path);{const r=$E(s,n);return Or(t,n,null,r)}}}}function cs(t,e){const n=po(e);return t.queryToTagMap.get(n)}function po(t){return t._path.toString()+"$"+t._queryIdentifier}function Za(t,e){return t.tagToQueryMap.get(e)}function ec(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function tc(t,e,n){const i=t.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const s=ho(t.pendingWriteTree_,e);return Qa(i,n,s,null)}function Ww(t){return t.fold((e,n,i)=>{if(n&&cn(n))return[fo(n)];{let s=[];return n&&(s=dp(n)),He(i,(r,o)=>{s=s.concat(o)}),s}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Mw())(t._repo,t._path):t}function Vw(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=po(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function zw(){return Lw++}function qw(t,e,n){const i=e._path,s=cs(t,e),r=vp(t,n),o=t.listenProvider_.startListening(zi(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)w(!cn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!V(c)&&u&&cn(u))return[fo(u).query];{let d=[];return u&&(d=d.concat(dp(u).map(g=>g.query))),He(h,(g,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(zi(u),cs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nc(n)}node(){return this.node_}}class ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new ic(this.syncTree_,n)}node(){return _p(this.syncTree_,this.path_)}}const Kw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ch=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Gw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Yw(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Gw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Yw=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const s=e.node();if(w(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Xw=function(t,e,n,i){return sc(e,new ic(n,t),i)},Jw=function(t,e,n){return sc(t,new nc(e),n)};function sc(t,e,n){const i=t.getPriority().val(),s=ch(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ch(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new ye(l,Ie(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ye(s))),o.forEachChild(he,(l,a)=>{const c=sc(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function oc(t,e){let n=e instanceof Q?e:new Q(e),i=t,s=W(n);for(;s!==null;){const r=li(i.node.children,s)||{children:{},childCount:0};i=new rc(s,i,r),n=te(n),s=W(n)}return i}function Ei(t){return t.node.value}function Ep(t,e){t.node.value=e,Gl(t)}function Ip(t){return t.node.childCount>0}function Qw(t){return Ei(t)===void 0&&!Ip(t)}function go(t,e){He(t.node.children,(n,i)=>{e(new rc(n,t,i))})}function wp(t,e,n,i){n&&!i&&e(t),go(t,s=>{wp(s,e,!0,i)}),n&&i&&e(t)}function Zw(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function bs(t){return new Q(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function Gl(t){t.parent!==null&&eT(t.parent,t.name,t)}function eT(t,e,n){const i=Qw(n),s=Vt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Gl(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Gl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=/[\[\].#$\/\u0000-\u001F\u007F]/,nT=/[\[\].#$\u0000-\u001F\u007F]/,sl=10*1024*1024,Tp=function(t){return typeof t=="string"&&t.length!==0&&!tT.test(t)},Cp=function(t){return typeof t=="string"&&t.length!==0&&!nT.test(t)},iT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cp(t)},bp=function(t,e,n){const i=n instanceof Q?new EI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(i));if(typeof e=="function")throw new Error(t+"contains a function "+vn(i)+" with contents = "+e.toString());if(wf(e))throw new Error(t+"contains "+e.toString()+" "+vn(i));if(typeof e=="string"&&e.length>sl/3&&ao(e)>sl)throw new Error(t+"contains a string greater than "+sl+" utf8 bytes "+vn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tp(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);II(i,o),bp(t,l,i),wI(i)}),s&&r)throw new Error(t+' contains ".value" child '+vn(i)+" in addition to actual children.")}},Sp=function(t,e,n,i){if(!(i&&n===void 0)&&!Cp(n))throw new Error(ff(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sT=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sp(t,e,n,i)},rT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iT(n))throw new Error(ff(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rp(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!ja(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ap(t,e,n){Rp(t,n),kp(t,i=>ja(i,e))}function un(t,e,n){Rp(t,n),kp(t,i=>st(i,e)||st(e,i))}function kp(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(lT(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();kn&&Se("event: "+n.toString()),Is(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="repo_interrupt",cT=25;class uT{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cr(),this.transactionQueueTree_=new rc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hT(t,e,n){if(t.stats_=Ha(t.repoInfo_),t.forceRestClient_||zE())t.server_=new Tr(t.repoInfo_,(i,s,r,o)=>{uh(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(i,s,r,o)=>{uh(t,i,s,r,o)},i=>{hh(t,i)},i=>{fT(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=XE(t.repoInfo_,()=>new GI(t.stats_,t.server_)),t.infoData_=new WI,t.infoSyncTree_=new ah({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=Ts(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lc(t,"connected",!1),t.serverSyncTree_=new ah({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);un(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function dT(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Np(t){return Kw({timestamp:dT(t)})}function uh(t,e,n,i,s){t.dataUpdateCount++;const r=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=mr(n,c=>Ie(c));o=$w(t.serverSyncTree_,r,a,s)}else{const a=Ie(n);o=gp(t.serverSyncTree_,r,a,s)}else if(i){const a=mr(n,c=>Ie(c));o=Uw(t.serverSyncTree_,r,a)}else{const a=Ie(n);o=Ts(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=uc(t,r)),un(t.eventQueue_,l,o)}function hh(t,e){lc(t,"connected",e),e===!1&&_T(t)}function fT(t,e){He(e,(n,i)=>{lc(t,n,i)})}function lc(t,e,n){const i=new Q("/.info/"+e),s=Ie(n);t.infoData_.updateSnapshot(i,s);const r=Ts(t.infoSyncTree_,i,s);un(t.eventQueue_,i,r)}function pT(t){return t.nextWriteId_++}function gT(t,e,n){const i=jw(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Ie(s).withIndex(e._queryParams.getIndex());Kl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ts(t.serverSyncTree_,e._path,r);else{const l=cs(t.serverSyncTree_,e);o=gp(t.serverSyncTree_,e._path,r,l)}return un(t.eventQueue_,e._path,o),Or(t.serverSyncTree_,e,n,null,!0),r},s=>(ac(t,"get for query "+ge(e)+" failed: "+s),Promise.reject(new Error(s))))}function _T(t){ac(t,"onDisconnectEvents");const e=Np(t),n=Cr();jl(t.onDisconnect_,G(),(s,r)=>{const o=Xw(s,r,t.serverSyncTree_,e);Zf(n,s,o)});let i=[];jl(n,G(),(s,r)=>{i=i.concat(Ts(t.serverSyncTree_,s,r));const o=IT(t,s);uc(t,o)}),t.onDisconnect_=Cr(),un(t.eventQueue_,G(),i)}function mT(t,e,n){let i;W(e._path)===".info"?i=Kl(t.infoSyncTree_,e,n):i=Kl(t.serverSyncTree_,e,n),Ap(t.eventQueue_,e._path,i)}function dh(t,e,n){let i;W(e._path)===".info"?i=Or(t.infoSyncTree_,e,n):i=Or(t.serverSyncTree_,e,n),Ap(t.eventQueue_,e._path,i)}function yT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(aT)}function ac(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function Pp(t,e,n){return _p(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function cc(t,e=t.transactionQueueTree_){if(e||_o(t,e),Ei(e)){const n=xp(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&vT(t,bs(e),n)}else Ip(e)&&go(e,n=>{cc(t,n)})}function vT(t,e,n){const i=n.map(c=>c.currentWriteId),s=Pp(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=De(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ac(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Vn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();_o(t,oc(t.transactionQueueTree_,e)),cc(t,t.transactionQueueTree_),un(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Is(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}uc(t,e)}},o)}function uc(t,e){const n=Op(t,e),i=bs(n),s=xp(t,n);return ET(t,s,i),i}function ET(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=De(n,a.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cT)u=!0,h="maxretry",s=s.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Pp(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){bp("transaction failed: Data returned ",g,a.path);let m=Ie(g);typeof g=="object"&&g!=null&&Vt(g,".priority")||(m=m.updatePriority(d.getPriority()));const R=a.currentWriteId,D=Np(t),ae=Jw(m,d,D);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=ae,a.currentWriteId=pT(t),o.splice(o.indexOf(R),1),s=s.concat(Fw(t.serverSyncTree_,a.path,ae,a.currentWriteId,a.applyLocally)),s=s.concat(Vn(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",s=s.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0))}un(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}_o(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)Is(i[l]);cc(t,t.transactionQueueTree_)}function Op(t,e){let n,i=t.transactionQueueTree_;for(n=W(e);n!==null&&Ei(i)===void 0;)i=oc(i,n),e=te(e),n=W(e);return i}function xp(t,e){const n=[];return Dp(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Dp(t,e,n){const i=Ei(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);go(e,s=>{Dp(t,s,n)})}function _o(t,e){const n=Ei(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Ep(e,n.length>0?n:void 0)}go(e,i=>{_o(t,i)})}function IT(t,e){const n=bs(Op(t,e)),i=oc(t.transactionQueueTree_,e);return Zw(i,s=>{rl(t,s)}),rl(t,i),wp(i,s=>{rl(t,s)}),n}function rl(t,e){const n=Ei(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ep(e,void 0):n.length=r+1,un(t.eventQueue_,bs(e),s);for(let o=0;o<i.length;o++)Is(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function TT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const fh=function(t,e){const n=CT(t),i=n.namespace;n.domain==="firebase.com"&&Bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LE();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Df(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Q(n.pathString)}},CT=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=wT(t.substring(u,h)));const d=TT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class Lp{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return V(this._path)?null:Wf(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=Ju(this._queryParams),n=Ua(e);return n==="{}"?"default":n}get _queryObject(){return Ju(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof hc))return!1;const n=this._repo===e._repo,i=ja(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+vI(this._path)}}class St extends hc{constructor(e,n){super(e,n,new qa,!1)}get parent(){const e=zf(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),i=xr(this.ref,e);return new hi(this._node.getChild(n),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new hi(s,xr(this.ref,i),he)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bT(t,e){return t=ut(t),t._checkNotDeleted("ref"),e!==void 0?xr(t._root,e):t._root}function xr(t,e){return t=ut(t),W(t._path)===null?sT("child","path",e,!1):Sp("child","path",e,!1),new St(t._repo,_e(t._path,e))}function Up(t){t=ut(t);const e=new Fp(()=>{}),n=new mo(e);return gT(t._repo,t,n).then(i=>new hi(i,new St(t._repo,t._path),t._queryParams.getIndex()))}class mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Mp("value",this,new hi(e.snapshotNode,new St(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lp(this,e,n):null}matches(e){return e instanceof mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lp(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const i=xr(new St(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Mp(e.type,this,new hi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ss(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(u,h)=>{dh(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Fp(n,r||void 0),l=e==="value"?new mo(o):new dc(e,o);return mT(t._repo,t,l),()=>dh(t._repo,t,l)}function Bp(t,e,n,i){return Ss(t,"value",e,n,i)}function ST(t,e,n,i){return Ss(t,"child_added",e,n,i)}function RT(t,e,n,i){return Ss(t,"child_changed",e,n,i)}function AT(t,e,n,i){return Ss(t,"child_moved",e,n,i)}function kT(t,e,n,i){return Ss(t,"child_removed",e,n,i)}kw(St);Dw(St);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="FIREBASE_DATABASE_EMULATOR_HOST",Yl={};let PT=!1;function OT(t,e,n,i){t.repoInfo_=new Df(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function xT(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fh(r,s),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[NT]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=fh(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new Zn(Zn.OWNER):new KE(t.name,t.options,e);rT("Invalid Firebase Database URL",o),V(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=MT(l,t,u,new qE(t.name,n));return new LT(h,t)}function DT(t,e){const n=Yl[e];(!n||n[t.key]!==t)&&Bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yT(t),delete n[t.key]}function MT(t,e,n,i){let s=Yl[e.name];s||(s={},Yl[e.name]=s);let r=s[t.toURLString()];return r&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uT(t,PT,n,i),s[t.toURLString()]=r,r}class LT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function FT(t=Fa(),e){const n=La(t,"database").getImmediate({identifier:e}),i=hv("database");return i&&UT(n,...i),n}function UT(t,e,n,i={}){t=ut(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zn(Zn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:fv(i.mockUserToken,t.app.options.projectId);r=new Zn(o)}OT(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){PE(Fn),Tt(new ct("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xT(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),qe(Du,Mu,t),qe(Du,Mu,"esm2017")}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BT();var HT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,fc=fc||{},L=HT||self;function Dr(){}function yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $T(t){return Object.prototype.hasOwnProperty.call(t,ol)&&t[ol]||(t[ol]=++jT)}var ol="closure_uid_"+(1e9*Math.random()>>>0),jT=0;function WT(t,e,n){return t.call.apply(t.bind,arguments)}function VT(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=WT:Ae=VT,Ae.apply(null,arguments)}function Ys(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function hn(){this.s=this.s,this.o=this.o}var zT=0;hn.prototype.s=!1;hn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zT!=0)&&$T(this)};hn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ph(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(yo(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var qT=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Dr,e),L.removeEventListener("test",Dr,e)}catch{}return t}();function Mr(t){return/^[\s\xa0]*$/.test(t)}var gh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ll(t,e){return t<e?-1:t>e?1:0}function vo(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return vo().indexOf(t)!=-1}function gc(t){return gc[" "](t),t}gc[" "]=Dr;function KT(t){var e=XT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var GT=mt("Opera"),us=mt("Trident")||mt("MSIE"),$p=mt("Edge"),Xl=$p||us,jp=mt("Gecko")&&!(vo().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),YT=vo().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function Wp(){var t=L.document;return t?t.documentMode:void 0}var Jl;e:{var al="",cl=function(){var t=vo();if(jp)return/rv:([^\);]+)(\)|;)/.exec(t);if($p)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YT)return/WebKit\/(\S+)/.exec(t);if(GT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cl&&(al=cl?cl[1]:""),us){var ul=Wp();if(ul!=null&&ul>parseFloat(al)){Jl=String(ul);break e}}Jl=al}var XT={};function JT(){return KT(function(){let t=0;const e=gh(String(Jl)).split("."),n=gh("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=ll(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ll(s[2].length==0,r[2].length==0)||ll(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}L.document&&us&&Wp();function hs(t,e){if(ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jp){e:{try{gc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hs.X.h.call(this)}}be(hs,ke);var QT={2:"touch",3:"pen",4:"mouse"};hs.prototype.h=function(){hs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),ZT=0;function eC(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++ZT,this.ba=this.ea=!1}function Eo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function _c(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Vp(t){const e={};for(const n in t)e[n]=t[n];return e}const _h="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zp(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<_h.length;r++)n=_h[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Io(t){this.src=t,this.g={},this.h=0}Io.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Zl(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new eC(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Ql(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Hp(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Eo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zl(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var mc="closure_lm_"+(1e6*Math.random()|0),hl={};function qp(t,e,n,i,s){if(i&&i.once)return Gp(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qp(t,e[r],n,i,s);return null}return n=Ec(n),t&&t[As]?t.N(e,n,Rs(i)?!!i.capture:!!i,s):Kp(t,e,n,!1,i,s)}function Kp(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Rs(s)?!!s.capture:!!s,l=vc(t);if(l||(t[mc]=l=new Io(t)),n=l.add(e,n,i,o,r),n.proxy)return n;if(i=tC(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)qT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Xp(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tC(){function t(n){return e.call(t.src,t.listener,n)}const e=nC;return t}function Gp(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gp(t,e[r],n,i,s);return null}return n=Ec(n),t&&t[As]?t.O(e,n,Rs(i)?!!i.capture:!!i,s):Kp(t,e,n,!0,i,s)}function Yp(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yp(t,e[r],n,i,s);else i=Rs(i)?!!i.capture:!!i,n=Ec(n),t&&t[As]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Zl(r,n,i,s),-1<n&&(Eo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=vc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zl(e,n,i,s)),(n=-1<t?e[t]:null)&&yc(n))}function yc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[As])Ql(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Xp(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vc(e))?(Ql(n,t),n.h==0&&(n.src=null,e[mc]=null)):Eo(t)}}}function Xp(t){return t in hl?hl[t]:hl[t]="on"+t}function nC(t,e){if(t.ba)t=!0;else{e=new hs(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&yc(t),t=n.call(i,e)}return t}function vc(t){return t=t[mc],t instanceof Io?t:null}var dl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ec(t){return typeof t=="function"?t:(t[dl]||(t[dl]=function(e){return t.handleEvent(e)}),t[dl])}function Ee(){hn.call(this),this.i=new Io(this),this.P=this,this.I=null}be(Ee,hn);Ee.prototype[As]=!0;Ee.prototype.removeEventListener=function(t,e,n,i){Yp(this,t,e,n,i)};function Ce(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new ke(e,t);else if(e instanceof ke)e.target=e.target||t;else{var s=e;e=new ke(i,t),zp(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Xs(o,i,!0,e)&&s}if(o=e.g=t,s=Xs(o,i,!0,e)&&s,s=Xs(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Xs(o,i,!1,e)&&s}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Eo(n[i]);delete t.g[e],t.h--}}this.I=null};Ee.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ee.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Xs(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&Ql(t.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ic=L.JSON.stringify;function iC(){var t=Zp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sC{constructor(){this.h=this.g=null}add(e,n){const i=Jp.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Jp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rC,t=>t.reset());class rC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oC(t){L.setTimeout(()=>{throw t},0)}function Qp(t,e){ea||lC(),ta||(ea(),ta=!0),Zp.add(t,e)}var ea;function lC(){var t=L.Promise.resolve(void 0);ea=function(){t.then(aC)}}var ta=!1,Zp=new sC;function aC(){for(var t;t=iC();){try{t.h.call(t.g)}catch(n){oC(n)}var e=Jp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ta=!1}function wo(t,e){Ee.call(this),this.h=t||1,this.g=e||L,this.j=Ae(this.lb,this),this.l=Date.now()}be(wo,Ee);k=wo.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&(wc(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){wo.X.M.call(this),wc(this),delete this.g};function Tc(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function eg(t){t.g=Tc(()=>{t.g=null,t.i&&(t.i=!1,eg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cC extends hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eg(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(t){hn.call(this),this.h=t,this.g={}}be(ds,hn);var mh=[];function tg(t,e,n,i){Array.isArray(n)||(n&&(mh[0]=n.toString()),n=mh);for(var s=0;s<n.length;s++){var r=qp(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ng(t){_c(t.g,function(e,n){this.g.hasOwnProperty(n)&&yc(e)},t),t.g={}}ds.prototype.M=function(){ds.X.M.call(this),ng(this)};ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function To(){this.g=!0}To.prototype.Aa=function(){this.g=!1};function uC(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function hC(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function zn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fC(t,n)+(i?" "+i:"")})}function dC(t,e){t.info(function(){return"TIMEOUT: "+e})}To.prototype.info=function(){};function fC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ic(n)}catch{return e}}var Ii={},yh=null;function Cc(){return yh=yh||new Ee}Ii.Pa="serverreachability";function ig(t){ke.call(this,Ii.Pa,t)}be(ig,ke);function fs(t){const e=Cc();Ce(e,new ig(e))}Ii.STAT_EVENT="statevent";function sg(t,e){ke.call(this,Ii.STAT_EVENT,t),this.stat=e}be(sg,ke);function Me(t){const e=Cc();Ce(e,new sg(e,t))}Ii.Qa="timingevent";function rg(t,e){ke.call(this,Ii.Qa,t),this.size=e}be(rg,ke);function ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var bc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pC={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sc(){}Sc.prototype.h=null;function vh(t){return t.h||(t.h=t.i())}function gC(){}var Ns={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rc(){ke.call(this,"d")}be(Rc,ke);function Ac(){ke.call(this,"c")}be(Ac,ke);var na;function Co(){}be(Co,Sc);Co.prototype.g=function(){return new XMLHttpRequest};Co.prototype.i=function(){return{}};na=new Co;function Ps(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new ds(this),this.O=_C,t=Xl?125:void 0,this.T=new wo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new og}function og(){this.i=null,this.g="",this.h=!1}var _C=45e3,ia={},Lr={};k=Ps.prototype;k.setTimeout=function(t){this.O=t};function sa(t,e,n){t.K=1,t.v=So(Ht(e)),t.s=n,t.P=!0,lg(t,null)}function lg(t,e){t.F=Date.now(),Os(t),t.A=Ht(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),gg(n.i,"t",i),t.C=0,n=t.l.H,t.h=new og,t.g=Lg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new cC(Ae(t.La,t,t.g),t.N)),tg(t.S,t.g,"readystatechange",t.ib),e=t.H?Vp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fs(),uC(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Xl||this.g&&(this.h.h||this.g.fa()||Th(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?fs(3):fs(2)),bo(this);var n=this.g.aa();this.Y=n;t:if(ag(this)){var i=Th(this.g);t="";var s=i.length,r=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),qi(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,hC(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mr(l)){var c=l;break t}}c=null}if(n=c)zn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ra(this,n);else{this.i=!1,this.o=3,Me(12),Cn(this),qi(this);break e}}this.P?(cg(this,u,o),Xl&&this.i&&u==3&&(tg(this.S,this.T,"tick",this.hb),this.T.start())):(zn(this.j,this.m,o,null),ra(this,o)),u==4&&Cn(this),this.i&&!this.I&&(u==4?Og(this.l,this):(this.i=!1,Os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Cn(this),qi(this)}}}catch{}finally{}};function ag(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cg(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=mC(t,n),s==Lr){e==4&&(t.o=4,Me(14),i=!1),zn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ia){t.o=4,Me(15),zn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else zn(t.j,t.m,s,null),ra(t,s);ag(t)&&s!=Lr&&s!=ia&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mc(e),e.K=!0,Me(11))):(zn(t.j,t.m,n,"[Invalid Chunked Response]"),Cn(t),qi(t))}k.hb=function(){if(this.g){var t=xt(this.g),e=this.g.fa();this.C<e.length&&(bo(this),cg(this,t,e),this.i&&t!=4&&Os(this))}};function mC(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Lr:(n=Number(e.substring(n,i)),isNaN(n)?ia:(i+=1,i+n>e.length?Lr:(e=e.substr(i,n),t.C=i+n,e)))}k.cancel=function(){this.I=!0,Cn(this)};function Os(t){t.V=Date.now()+t.O,ug(t,t.O)}function ug(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ks(Ae(t.gb,t),e)}function bo(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(dC(this.j,this.A),this.K!=2&&(fs(),Me(17)),Cn(this),this.o=2,qi(this)):ug(this,this.V-t)};function qi(t){t.l.G==0||t.I||Og(t.l,t)}function Cn(t){bo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wc(t.T),ng(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ra(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||oa(n.h,t))){if(!t.J&&oa(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Br(n),No(n);else break e;Dc(n),Me(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=ks(Ae(n.cb,n),6e3));if(1>=yg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else bn(n,11)}else if((t.J||n.g==t)&&Br(n),!Mr(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(kc(r,r.h),r.h=null))}if(i.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.za=I,oe(i.F,i.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Mg(i,i.H?i.ka:null,i.V),o.J){vg(i.h,o);var l=o,a=i.J;a&&l.setTimeout(a),l.B&&(bo(l),Os(l)),i.g=o}else Ng(i);0<n.i.length&&Po(n)}else c[0]!="stop"&&c[0]!="close"||bn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?bn(n,7):xc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}fs(4)}catch{}}function yC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yo(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function vC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function hg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vC(t),i=yC(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Nn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nn){this.h=e!==void 0?e:t.h,Fr(this,t.j),this.s=t.s,this.g=t.g,Ur(this,t.m),this.l=t.l,e=t.i;var n=new ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Eh(this,n),this.o=t.o}else t&&(n=String(t).match(dg))?(this.h=!!e,Fr(this,n[1]||"",!0),this.s=Li(n[2]||""),this.g=Li(n[3]||"",!0),Ur(this,n[4]),this.l=Li(n[5]||"",!0),Eh(this,n[6]||"",!0),this.o=Li(n[7]||"")):(this.h=!!e,this.i=new ps(null,this.h))}Nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fi(e,Ih,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fi(e,Ih,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fi(n,n.charAt(0)=="/"?TC:wC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fi(n,bC)),t.join("")};function Ht(t){return new Nn(t)}function Fr(t,e,n){t.j=n?Li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ur(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Eh(t,e,n){e instanceof ps?(t.i=e,SC(t.i,t.h)):(n||(e=Fi(e,CC)),t.i=new ps(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function So(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ih=/[#\/\?@]/g,wC=/[#\?:]/g,TC=/[#\?]/g,CC=/[#\?@]/g,bC=/#/g;function ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new Map,t.h=0,t.i&&EC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=ps.prototype;k.add=function(t,e){dn(this),this.i=null,t=wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fg(t,e){dn(t),e=wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pg(t,e){return dn(t),e=wi(t,e),t.g.has(e)}k.forEach=function(t,e){dn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};k.oa=function(){dn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};k.W=function(t){dn(this);let e=[];if(typeof t=="string")pg(this,t)&&(e=e.concat(this.g.get(wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return dn(this),this.i=null,t=wi(this,t),pg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function gg(t,e,n){fg(t,e),0<n.length&&(t.i=null,t.g.set(wi(t,e),pc(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SC(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(fg(this,i),gg(this,s,n))},t)),t.j=e}var RC=class{constructor(t,e){this.h=t,this.g=e}};function _g(t){this.l=t||AC,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AC=10;function mg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yg(t){return t.h?1:t.g?t.g.size:0}function oa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kc(t,e){t.g?t.g.add(e):t.h=e}function vg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_g.prototype.cancel=function(){if(this.i=Eg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Eg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pc(t.i)}function Nc(){}Nc.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Nc.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function kC(){this.g=new Nc}function NC(t,e,n){const i=n||"";try{hg(t,function(s,r){let o=s;Rs(s)&&(o=Ic(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function PC(t,e){const n=new To;if(L.Image){const i=new Image;i.onload=Ys(Js,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ys(Js,n,i,"TestLoadImage: error",!1,e),i.onabort=Ys(Js,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ys(Js,n,i,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Js(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ro(t){this.l=t.ac||null,this.j=t.jb||!1}be(Ro,Sc);Ro.prototype.g=function(){return new Ao(this.l,this.j)};Ro.prototype.i=function(t){return function(){return t}}({});function Ao(t,e){Ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(Ao,Ee);var Pc=0;k=Ao.prototype;k.open=function(t,e){if(this.readyState!=Pc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=Pc};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ig(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ig(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xs(this):gs(this),this.readyState==3&&Ig(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,xs(this))};k.Ua=function(t){this.g&&(this.response=t,xs(this))};k.ga=function(){this.g&&xs(this)};function xs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OC=L.JSON.parse;function fe(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wg,this.K=this.L=!1}be(fe,Ee);var wg="",xC=/^https?$/i,DC=["POST","PUT"];k=fe.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():na.g(),this.C=this.u?vh(this.u):vh(na),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wh(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=L.FormData&&t instanceof L.FormData,!(0<=Hp(DC,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bg(this),0<this.B&&((this.K=MC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Tc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wh(this,r)}};function MC(t){return us&&JT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof fc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))};function wh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tg(t),ko(t)}function Tg(t){t.D||(t.D=!0,Ce(t,"complete"),Ce(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),ko(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ko(this,!0)),fe.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?Cg(this):this.fb())};k.fb=function(){Cg(this)};function Cg(t){if(t.h&&typeof fc<"u"&&(!t.C[1]||xt(t)!=4||t.aa()!=2)){if(t.v&&xt(t)==4)Tc(t.Ha,0,t);else if(Ce(t,"readystatechange"),xt(t)==4){t.h=!1;try{const l=t.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=l===0){var s=String(t.H).match(dg)[1]||null;if(!s&&L.self&&L.self.location){var r=L.self.location.protocol;s=r.substr(0,r.length-1)}i=!xC.test(s?s.toLowerCase():"")}n=i}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Tg(t)}}finally{ko(t)}}}}function ko(t,e){if(t.g){bg(t);const n=t.g,i=t.C[0]?Dr:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=i}catch{}}}function bg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OC(e)}};function Th(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sg(t){let e="";return _c(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Oc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Sg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rg(t){this.Ca=0,this.i=[],this.j=new To,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xi("baseRetryDelayMs",5e3,t),this.bb=xi("retryDelaySeedMs",1e4,t),this.$a=xi("forwardChannelMaxRetries",2,t),this.ta=xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _g(t&&t.concurrentRequestLimit),this.Fa=new kC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=Rg.prototype;k.ma=8;k.G=1;function xc(t){if(Ag(t),t.G==3){var e=t.U++,n=Ht(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),Ds(t,n),e=new Ps(t,t.j,e,void 0),e.K=2,e.v=So(Ht(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Os(e)}Dg(t)}function No(t){t.g&&(Mc(t),t.g.cancel(),t.g=null)}function Ag(t){No(t),t.u&&(L.clearTimeout(t.u),t.u=null),Br(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Po(t){mg(t.h)||t.m||(t.m=!0,Qp(t.Ja,t),t.C=0)}function LC(t,e){return yg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ks(Ae(t.Ja,t,e),xg(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ps(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Vp(r),zp(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kg(this,s,e),n=Ht(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),Ds(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Sg(r)))+"&"+e:this.o&&Oc(n,this.o,r)),kc(this.h,s),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),s.Z=!0,sa(s,n,null)):sa(s,n,e),this.G=2}}else this.G==3&&(t?Ch(this,t):this.i.length==0||mg(this.h)||Ch(this))};function Ch(t,e){var n;e?n=e.m:n=t.U++;const i=Ht(t.F);oe(i,"SID",t.I),oe(i,"RID",n),oe(i,"AID",t.T),Ds(t,i),t.o&&t.s&&Oc(i,t.o,t.s),n=new Ps(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=kg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kc(t.h,n),sa(n,i,e)}function Ds(t,e){t.ia&&_c(t.ia,function(n,i){oe(e,i,n)}),t.l&&hg({},function(n,i){oe(e,i,n)})}function kg(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Ae(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].h;const u=s[a].g;if(c-=r,0>c)r=Math.max(0,s[a].h-100),l=!1;else try{NC(u,o,"req"+c+"_")}catch{i&&i(u)}}if(l){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Ng(t){t.g||t.u||(t.Z=1,Qp(t.Ia,t),t.A=0)}function Dc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ks(Ae(t.Ia,t),xg(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,Pg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ks(Ae(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),No(this),Pg(this))};function Mc(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Pg(t){t.g=new Ps(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ht(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),Ds(t,e),t.o&&t.s&&Oc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=So(Ht(e)),n.s=null,n.P=!0,lg(n,t)}k.cb=function(){this.v!=null&&(this.v=null,No(this),Dc(this),Me(19))};function Br(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Og(t,e){var n=null;if(t.g==e){Br(t),Mc(t),t.g=null;var i=2}else if(oa(t.h,e))n=e.D,vg(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Cc(),Ce(i,new rg(i,n)),Po(t)}else Ng(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&LC(t,e)||i==2&&Dc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:bn(t,5);break;case 4:bn(t,10);break;case 3:bn(t,6);break;default:bn(t,2)}}}function xg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function bn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Ae(t.kb,t);n||(n=new Nn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Fr(n,"https"),So(n)),PC(n.toString(),i)}else Me(2);t.G=0,t.l&&t.l.va(e),Dg(t),Ag(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Dg(t){if(t.G=0,t.la=[],t.l){const e=Eg(t.h);(e.length!=0||t.i.length!=0)&&(ph(t.la,e),ph(t.la,t.i),t.h.i.length=0,pc(t.i),t.i.length=0),t.l.ua()}}function Mg(t,e,n){var i=n instanceof Nn?Ht(n):new Nn(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Ur(i,i.m);else{var s=L.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Nn(null,void 0);i&&Fr(r,i),e&&(r.g=e),s&&Ur(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&oe(i,n,e),oe(i,"VER",t.ma),Ds(t,i),i}function Lg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new fe(new Ro({jb:!0})):new fe(t.ra),e.Ka(t.H),e}function Fg(){}k=Fg.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function Qe(t,e){Ee.call(this),this.g=new Rg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ti(this)}be(Qe,Ee);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mg(t,null,t.V),Po(t)};Qe.prototype.close=function(){xc(this.g)};Qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ic(t),t=n);e.i.push(new RC(e.ab++,t)),e.G==3&&Po(e)};Qe.prototype.M=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Qe.X.M.call(this)};function Ug(t){Rc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}be(Ug,Rc);function Bg(){Ac.call(this),this.status=1}be(Bg,Ac);function Ti(t){this.g=t}be(Ti,Fg);Ti.prototype.xa=function(){Ce(this.g,"a")};Ti.prototype.wa=function(t){Ce(this.g,new Ug(t))};Ti.prototype.va=function(t){Ce(this.g,new Bg)};Ti.prototype.ua=function(){Ce(this.g,"b")};Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;bc.NO_ERROR=0;bc.TIMEOUT=8;bc.HTTP_ERROR=6;pC.COMPLETE="complete";gC.EventType=Ns;Ns.OPEN="a";Ns.CLOSE="b";Ns.ERROR="c";Ns.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Oa;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Sa;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;fe.prototype.setWithCredentials=fe.prototype.Ka;const bh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new ys("@firebase/firestore");function ze(t,...e){if(Hr.logLevel<=X.DEBUG){const n=e.map(Hg);Hr.debug(`Firestore (${Oo}): ${t}`,...n)}}function Lc(t,...e){if(Hr.logLevel<=X.ERROR){const n=e.map(Hg);Hr.error(`Firestore (${Oo}): ${t}`,...n)}}function Hg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+t;throw Lc(e),new Error(e)}function $r(t,e){t||$g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Et extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class BC{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ti,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{ze("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(ze("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ze("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($r(typeof i.accessToken=="string"),new FC(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $r(e===null||typeof e=="string"),new Ue(e)}}class HC{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():($r(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class $C{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new HC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&ze("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,ze("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ze("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):ze("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($r(typeof n.token=="string"),this.A=n.token,new jC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=VC(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function jg(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,i,s,r,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class jr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sh,q;(q=Sh||(Sh={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";function fl(){return typeof document<"u"?document:null}class KC{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&ze("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new Fc(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Et(vt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function GC(t,e){if(Lc("AsyncQueue",`${e}: ${t}`),jg(t))return new Et(vt.UNAVAILABLE,`${e}: ${t}`);throw t}function YC(t,e,n,i){if(e===!0&&i===!0)throw new Et(vt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;class Ah{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Et(vt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Et(vt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Et(vt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Et(vt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UC;switch(n.type){case"gapi":const i=n.client;return new $C(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Et(vt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rh.get(e);n&&(ze("ComponentProvider","Removing Datastore"),Rh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=zC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ze("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ze("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Et(vt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=GC(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class QC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new KC(this,"async_queue_retry"),this.Wc=()=>{const n=fl();n&&ze("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ti;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!jg(e))throw e;ze("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Lc("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Fc.createAndSchedule(this,e,n,i,r=>this.Yc(r));return this.qc.push(s),s}zc(){this.Kc&&$g()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class ZC extends XC{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new QC,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eb(this),this._firestoreClient.terminate()}}function eb(t){var e;const n=t._freezeSettings(),i=function(s,r,o,l){return new qC(s,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new JC(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){Oo=n})(Fn),Tt(new ct("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new ZC(new BC(n.getProvider("auth-internal")),new WC(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Et(vt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(l.options.projectId,a)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),qe(bh,"3.7.3",t),qe(bh,"3.7.3","esm2017")})();function Uc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Wg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tb=Wg,Vg=new mi("auth","Firebase",Wg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new ys("@firebase/auth");function lr(t,...e){kh.logLevel<=X.ERROR&&kh.error(`Auth (${Fn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Bc(t,...e)}function It(t,...e){return Bc(t,...e)}function nb(t,e,n){const i=Object.assign(Object.assign({},tb()),{[e]:n});return new mi("auth","Firebase",i).create(e,{appName:t.name})}function Bc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Vg.create(t,...e)}function M(t,e,...n){if(!t)throw Bc(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function jt(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new Map;function Mt(t){jt(t instanceof Function,"Expected a class definition");let e=Nh.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(yr(r,e!=null?e:{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function sb(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rb(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rb()||sv()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=xa()||lf()}get(){return ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Ms(3e4,6e4);function ub(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xo(t,e,n,i,s={}){return qg(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=yi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),zg.fetch()(Kg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function qg(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ab),e);try{const s=new db(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Qs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Qs(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nb(t,u,c);$t(t,u)}}catch(s){if(s instanceof bt)throw s;$t(t,"network-request-failed")}}async function hb(t,e,n,i,s={}){const r=await xo(t,e,n,i,s);return"mfaPendingCredential"in r&&$t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Kg(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Hc(t.config,s):`${t.config.apiScheme}://${s}`}class db{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(It(this.auth,"network-request-failed")),cb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=It(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(t,e){return xo(t,"POST","/v1/accounts:delete",e)}async function pb(t,e){return xo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gb(t,e=!1){const n=ut(t),i=await n.getIdToken(e),s=$c(i);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ki(pl(s.auth_time)),issuedAtTime:Ki(pl(s.iat)),expirationTime:Ki(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function $c(t){var e;const[n,i,s]=t.split(".");if(n===void 0||i===void 0||s===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=_r(i);return r?JSON.parse(r):(lr("Failed to decode base64 JWT payload"),null)}catch(r){return lr("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function _b(t){const e=$c(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof bt&&mb(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function mb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await _s(t,pb(n,{idToken:i}));M(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ib(r.providerUserInfo):[],l=Eb(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Gg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vb(t){const e=ut(t);await Wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ib(t){return t.map(e=>{var{providerId:n}=e,i=Uc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){const n=await qg(t,{},async()=>{const i=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Kg(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",zg.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_b(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await wb(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ms;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gb(this,e)}reload(){return vb(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Wr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _s(this,fb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ae=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:H,isAnonymous:ie,providerData:Le,stsTokenManager:$e}=n;M(N&&$e,e,"internal-error");const U=ms.fromJSON(this.name,$e);M(typeof N=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),M(typeof H=="boolean",e,"internal-error"),M(typeof ie=="boolean",e,"internal-error"),qt(g,e.name),qt(m,e.name),qt(I,e.name),qt(R,e.name),qt(D,e.name),qt(ae,e.name);const ce=new Pn({uid:N,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:ie,photoURL:m,phoneNumber:g,tenantId:I,stsTokenManager:U,createdAt:D,lastLoginAt:ae});return Le&&Array.isArray(Le)&&(ce.providerData=Le.map(se=>Object.assign({},se))),R&&(ce._redirectEventId=R),ce}static async _fromIdTokenResponse(e,n,i=!1){const s=new ms;s.updateFromServerResponse(n);const r=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yg.type="NONE";const Oh=Yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ar(this.userKey,s.apiKey,r),this.fullPersistenceKey=ar("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ni(Mt(Oh),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Mt(Oh);const o=ar(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Pn._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new ni(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ni(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e_(e))return"Blackberry";if(t_(e))return"Webos";if(jc(e))return"Safari";if((e.includes("chrome/")||Jg(e))&&!e.includes("edge/"))return"Chrome";if(Zg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xg(t=Pe()){return/firefox\//i.test(t)}function jc(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jg(t=Pe()){return/crios\//i.test(t)}function Qg(t=Pe()){return/iemobile/i.test(t)}function Zg(t=Pe()){return/android/i.test(t)}function e_(t=Pe()){return/blackberry/i.test(t)}function t_(t=Pe()){return/webos/i.test(t)}function Do(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tb(t=Pe()){var e;return Do(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cb(){return rv()&&document.documentMode===10}function n_(t=Pe()){return Do(t)||Zg(t)||t_(t)||e_(t)||/windows phone/i.test(t)||Qg(t)}function bb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=xh(Pe());break;case"Worker":n=`${xh(Pe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dh(this),this.idTokenSubscription=new Dh(this),this.beforeStateQueue=new Sb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Wr(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Wc(t){return ut(t)}class Dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ev(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ab(t,e,n){const i=Wc(t);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=s_(e),{host:o,port:l}=kb(e),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Nb()}function s_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kb(t){const e=s_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Mh(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Mh(o)}}}function Mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return hb(t,"POST","/v1/accounts:signInWithIdp",ub(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="http://localhost";class Ln extends r_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Uc(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ln(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ii(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:Pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ls{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ls{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ls{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Jt.credential(n,i)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Pn._fromIdTokenResponse(e,i,s),o=Lh(i);return new di({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Lh(i);return new di({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Lh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends bt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Vr(e,n,i,s)}}function l_(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(t,r,e,i):r})}async function Ob(t,e,n=!1){const i=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e,n=!1){var i;const{auth:s}=t,r="reauthenticate";try{const o=await _s(t,l_(s,r,e,t),n);M(o.idToken,s,"internal-error");const l=$c(o.idToken);M(l,s,"internal-error");const{sub:a}=l;return M(t.uid===a,s,"user-mismatch"),di._forOperation(t,r,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&$t(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e,n=!1){const i="signIn",s=await l_(t,i,e),r=await di._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function a_(t,e,n,i){return ut(t).onIdTokenChanged(e,n,i)}function Mb(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zr,"1"),this.storage.removeItem(zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){const t=Pe();return jc(t)||Do(t)}const Fb=1e3,Ub=10;class u_ extends c_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lb()&&bb(),this.fallbackToPolling=n_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ub):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u_.type="LOCAL";const Bb=u_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends c_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const d_=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Mo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await Hb(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=Vc("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(d.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function jb(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Wb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zb(){return f_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="firebaseLocalStorageDb",qb=1,qr="firebaseLocalStorage",g_="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lo(t,e){return t.transaction([qr],e?"readwrite":"readonly").objectStore(qr)}function Kb(){const t=indexedDB.deleteDatabase(p_);return new Fs(t).toPromise()}function aa(){const t=indexedDB.open(p_,qb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(qr,{keyPath:g_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(qr)?e(i):(i.close(),await Kb(),e(await aa()))})})}async function Fh(t,e,n){const i=Lo(t,!0).put({[g_]:e,value:n});return new Fs(i).toPromise()}async function Gb(t,e){const n=Lo(t,!1).get(e),i=await new Fs(n).toPromise();return i===void 0?null:i.value}function Uh(t,e){const n=Lo(t,!0).delete(e);return new Fs(n).toPromise()}const Yb=800,Xb=3;class __{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await aa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Xb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mo._getInstance(zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wb(),!this.activeServiceWorker)return;this.sender=new $b(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await aa();return await Fh(e,zr,"1"),await Uh(e,zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Gb(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Lo(s,!1).getAll();return new Fs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}__.type="LOCAL";const Jb=__;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Zb(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=It("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Qb().appendChild(i)})}function e0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){return e?Mt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends r_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n0(t){return Db(t.auth,new zc(t),t.bypassAuthState)}function i0(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),xb(n,new zc(t),t.bypassAuthState)}async function s0(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Ob(n,new zc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n0;case"linkViaPopup":case"linkViaRedirect":return s0;case"reauthViaPopup":case"reauthViaRedirect":return i0;default:$t(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Ms(2e3,1e4);class qn extends m_{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,r0.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="pendingRedirect",cr=new Map;class l0 extends m_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const i=await a0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a0(t,e){const n=h0(e),i=u0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function c0(t,e){cr.set(t._key(),e)}function u0(t){return Mt(t._redirectPersistence)}function h0(t){return ar(o0,t.config.apiKey,t.name)}async function d0(t,e,n=!1){const i=Wc(t),s=t0(i,e),o=await new l0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=10*60*1e3;class p0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!y_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bh(e))}saveEventToCache(e){this.cachedEventUids.add(Bh(e)),this.lastProcessedEventTime=Date.now()}}function Bh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e={}){return xo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y0=/^https?/;async function v0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _0(t);for(const n of e)try{if(E0(n))return}catch{}$t(t,"unauthorized-domain")}function E0(t){const e=la(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!y0.test(n))return!1;if(m0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Ms(3e4,6e4);function Hh(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w0(t){return new Promise((e,n)=>{var i,s,r;function o(){Hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hh(),n(It(t,"network-request-failed"))},timeout:I0.get()})}if(!((s=(i=wt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=wt().gapi)===null||r===void 0)&&r.load)o();else{const l=e0("iframefcb");return wt()[l]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Zb(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ur=null,e})}let ur=null;function T0(t){return ur=ur||w0(t),ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Ms(5e3,15e3),b0="__/auth/iframe",S0="emulator/auth/iframe",R0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k0(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hc(e,S0):`https://${t.config.authDomain}/${b0}`,i={apiKey:e.apiKey,appName:t.name,v:Fn},s=A0.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${yi(i).slice(1)}`}async function N0(t){const e=await T0(t),n=wt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:k0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R0,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=wt().setTimeout(()=>{r(o)},C0.get());function a(){wt().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O0=500,x0=600,D0="_blank",M0="http://localhost";class $h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L0(t,e,n,i=O0,s=x0){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},P0),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Pe().toLowerCase();n&&(l=Jg(c)?D0:n),Xg(c)&&(e=e||M0,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Tb(c)&&l!=="_self")return F0(e||"",l),new $h(null);const h=window.open(e||"",l,u);M(h,t,"popup-blocked");try{h.focus()}catch{}return new $h(h)}function F0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="__/auth/handler",B0="emulator/auth/handler";function jh(t,e,n,i,s,r){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Fn,eventId:s};if(e instanceof o_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(r||{}))o[a]=c}if(e instanceof Ls){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${H0(t)}?${yi(l).slice(1)}`}function H0({config:t}){return t.emulator?Hc(t,B0):`https://${t.authDomain}/${U0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="webStorageSupport";class $0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=d0,this._overrideRedirectResult=c0}async _openPopup(e,n,i,s){var r;jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=jh(e,n,i,la(),s);return L0(e,o,Vc())}async _openRedirect(e,n,i,s){return await this._originValidation(e),jb(jh(e,n,i,la(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(jt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await N0(e),i=new p0(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gl,{type:gl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[gl];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n_()||jc()||Do()}}const j0=$0;var Wh="@firebase/auth",Vh="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function z0(t){Tt(new ct("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((l,a)=>{M(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},u=new Rb(l,a,c);return sb(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Tt(new ct("auth-internal",e=>{const n=Wc(e.getProvider("auth").getImmediate());return(i=>new W0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(Wh,Vh,V0(t)),qe(Wh,Vh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=5*60,K0=hf("authIdTokenMaxAge")||q0;let zh=null;const G0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>K0)return;const s=n==null?void 0:n.token;zh!==s&&(zh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Y0(t=Fa()){const e=La(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ib(t,{popupRedirectResolver:j0,persistence:[Jb,Bb,d_]}),i=hf("authTokenSyncURL");if(i){const r=G0(i);Mb(n,r,()=>r(n.currentUser)),a_(n,o=>r(o))}const s=uf("auth");return s&&Ab(n,`http://${s}`),n}z0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Map,J0={activated:!1,tokenObservers:[]};function Ct(t){return X0.get(t)||Object.assign({},J0)}const qh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new es,await Z0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new es,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Z0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Kr=new mi("appCheck","AppCheck",eS);function tS(t){if(!Ct(t).activated)throw Kr.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-app-check-database",iS=1,ca="firebase-app-check-store";let Zs=null;function sS(){return Zs||(Zs=new Promise((t,e)=>{var n;try{const i=indexedDB.open(nS,iS);i.onsuccess=s=>{t(s.target.result)},i.onerror=s=>{var r;e(Kr.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},i.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ca,{keyPath:"compositeKey"})}}}catch(i){e(Kr.create("storage-open",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message}))}}),Zs)}function rS(t,e){return oS(lS(t),e)}async function oS(t,e){const i=(await sS()).transaction(ca,"readwrite"),r=i.objectStore(ca).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},i.onerror=a=>{var c;l(Kr.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function lS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new ys("@firebase/app-check");function Kh(t,e){return cf()?rS(t,e).catch(n=>{ua.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={error:"UNKNOWN_ERROR"};function cS(t){return lo.encodeString(JSON.stringify(t),!1)}async function ha(t,e=!1){const n=t.app;tS(n);const i=Ct(n);let s=i.token,r;if(s&&!Ui(s)&&(i.token=void 0,s=void 0),!s){const a=await i.cachedTokenPromise;a&&(Ui(a)?s=a:await Kh(n,void 0))}if(!e&&s&&Ui(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ct(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?ua.warn(a.message):ua.error(a),r=a}let l;return s?r?Ui(s)?l={token:s.token,internalError:r}:l=Yh(r):(l={token:s.token},i.token=s,await Kh(n,s)):l=Yh(r),o&&dS(n,l),l}function uS(t,e,n,i){const{app:s}=t,r=Ct(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ui(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Gh(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Gh(t))}function v_(t,e){const n=Ct(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Gh(t){const{app:e}=t,n=Ct(e);let i=n.tokenRefresher;i||(i=hS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function hS(t){const{app:e}=t;return new Q0(async()=>{const n=Ct(e);let i;if(n.token?i=await ha(t,!0):i=await ha(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ct(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},qh.RETRIAL_MIN_WAIT,qh.RETRIAL_MAX_WAIT)}function dS(t,e){const n=Ct(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ui(t){return t.expireTimeMillis-Date.now()>0}function Yh(t){return{token:cS(aS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ct(this.app);for(const n of e)v_(this.app,n.next);return Promise.resolve()}}function pS(t,e){return new fS(t,e)}function gS(t){return{getToken:e=>ha(t,e),addTokenListener:e=>uS(t,"INTERNAL",e),removeTokenListener:e=>v_(t.app,e)}}const _S="@firebase/app-check",mS="0.5.17",yS="app-check",Xh="app-check-internal";function vS(){Tt(new ct(yS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return pS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Xh).initialize()})),Tt(new ct(Xh,t=>{const e=t.getProvider("app-check").getImmediate();return gS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),qe(_S,mS)}vS();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebasestorage.googleapis.com",ES="storageBucket",IS=2*60*1e3,wS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends bt{constructor(e,n,i=0){super(_l(e),`Firebase Storage: ${n} (${_l(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _l(t){return"storage/"+t}function TS(){const t="An unknown error occurred, please check the error payload for server response.";return new Rt("unknown",t)}function CS(){return new Rt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function bS(){return new Rt("canceled","User canceled the upload/download.")}function SS(t){return new Rt("invalid-url","Invalid URL '"+t+"'.")}function RS(t){return new Rt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Jh(t){return new Rt("invalid-argument",t)}function I_(){return new Rt("app-deleted","The Firebase app was deleted.")}function AS(t){return new Rt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(i.path==="")return i;throw RS(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(H){H.path_=decodeURIComponent(H.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},I=n===E_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",D=new RegExp(`^https?://${I}/${s}/${R}`,"i"),N=[{regex:l,indices:a,postModify:r},{regex:g,indices:m,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let H=0;H<N.length;H++){const ie=N[H],Le=ie.regex.exec(e);if(Le){const $e=Le[ie.indices.bucket];let U=Le[ie.indices.path];U||(U=""),i=new ot($e,U),ie.postModify(i);break}}if(i==null)throw SS(e);return i}}class kS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...R){c||(c=!0,e.apply(null,R))}function h(R){s=setTimeout(()=>{s=null,t(g,a())},R)}function d(){r&&clearTimeout(r)}function g(R,...D){if(c){d();return}if(R){d(),u.call(null,R,...D);return}if(a()||o){d(),u.call(null,R,...D);return}i<64&&(i*=2);let N;l===1?(l=2,N=0):N=(i+Math.random())*1e3,h(N)}let m=!1;function I(R){m||(m=!0,d(),!c&&(s!==null?(R||(l=2),clearTimeout(s),h(0)):R||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,I(!0)},n),I}function PS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){return t!==void 0}function Qh(t,e,n,i){if(i<e)throw Jh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Jh(`Invalid value for '${t}'. Expected ${n} or less.`)}function xS(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,i,s,r,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new er(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Gr.NO_ERROR,a=r.getStatus();if((!l||DS(a,this.additionalRetryCodes_))&&this.retry){const u=r.getErrorCode()===Gr.ABORT;i(!1,new er(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new er(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());OS(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=TS();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?I_():bS();o(a)}else{const a=CS();o(a)}};this.canceled_?n(!1,new er(!1,null,!0)):this.backoffId_=NS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class er{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function LS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function US(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function HS(t,e,n,i,s,r,o=!0){const l=xS(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return US(c,e),LS(c,n),FS(c,r),BS(c,i),new MS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yr(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jS(this._location.path)}get storage(){return this._service}get parent(){const e=$S(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new Yr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AS(e)}}function Zh(t,e){const n=e==null?void 0:e[ES];return n==null?null:ot.makeFromBucketSpec(n,t)}class WS{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=E_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IS,this._maxUploadRetryTime=wS,this._requests=new Set,s!=null?this._bucket=ot.makeFromBucketSpec(s,this._host):this._bucket=Zh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=Zh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yr(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new kS(I_());{const o=HS(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const ed="@firebase/storage",td="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="storage";function zS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new WS(n,i,s,e,Fn)}function qS(){Tt(new ct(VS,zS,"PUBLIC").setMultipleInstances(!0)),qe(ed,td,""),qe(ed,td,"esm2017")}qS();const w_=Symbol("firebaseApp");function Fo(t){return oo()&&Jn(w_,null)||Fa(t)}const yt=()=>{};function Ci(t){return t&&typeof t=="object"}function KS(t){return Ci(t)&&t.type==="document"}function GS(t){return Ci(t)&&t.type==="collection"}function YS(t){return KS(t)||GS(t)}function XS(t){return Ci(t)&&t.type==="query"}function JS(t){return Ci(t)&&"ref"in t}function QS(t){return Ci(t)&&typeof t.bucket=="string"}function ZS(){return!!(oo()&&Jn(tf,null))}const tr=new WeakMap;function eR(t,e){if(!tr.has(t)){const n=$_(!0);tr.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),tr.delete(t)}}return tr.get(t)}function tR(t){const e=t.val(),n=Ci(e)?e:Object.defineProperty({},".value",{value:e});return Object.defineProperty(n,"id",{value:t.key}),n}function Di(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const qc={reset:!1,serialize:tR,wait:!0};function nR(t,e,n,i,s){const r=Object.assign({},qc,s);let o=yt;function l(a){const c=r.serialize(a);t.value=c,n(c)}return r.once?Up(e).then(l).catch(i):o=Bp(e,l,i),a=>{if(o(),a){const c=typeof a=="function"?a():null;t.value=c}}}function iR(t,e,n,i,s){const r=Object.assign({},qc,s);let o=r.wait?[]:t;r.wait||(t.value=[]);let l=yt,a=yt,c=yt,u=yt,h=yt;return r.once?Up(e).then(d=>{const g=[];d.forEach(m=>{g.push(r.serialize(m))}),n(t.value=g)}).catch(i):(l=ST(e,(d,g)=>{const m=Pt(o),I=g?Di(m,g)+1:0;m.splice(I,0,r.serialize(d))},i),c=kT(e,d=>{const g=Pt(o);g.splice(Di(g,d.key),1)},i),a=RT(e,d=>{const g=Pt(o);g.splice(Di(g,d.key),1,r.serialize(d))},i),u=AT(e,(d,g)=>{const m=Pt(o),I=Di(m,d.key),R=m.splice(I,1)[0],D=g?Di(m,g)+1:0;m.splice(D,0,R)},i),h=Bp(e,()=>{const d=Pt(o);r.wait&&(t.value=d,o=t),n(d),h()},i)),d=>{if(h(),l(),c(),a(),u(),d){const g=typeof d=="function"?d():[];t.value=g}}}const ml=new WeakMap;function T_(t,e=Fo()){return ml.has(e)||ml.set(e,t||{f:{},r:{},s:{},u:{}}),ml.get(e)}function sR(t,e,n){if(!t)return n;const[i,s]=C_(t);if(!i)return n;const r=T_()[i]||{},o=e||s;return o&&o in r?r[o]:n}function rR(t,e,n){if(!t)return;const[i,s]=C_(t);if(!i)return;const r=T_()[i],o=e||s;if(o)return n.then(l=>{r[o]=l}),o}function C_(t){return YS(t)||XS(t)?["f",t.path]:JS(t)?["r",t.toString()]:QS(t)?["s",t.toString()]:[]}const yl=new WeakMap;function oR(t,e,n){const i=Fo();yl.has(i)||yl.set(i,new Map);const s=yl.get(i),r=rR(e,n,t);return r&&s.set(r,t),r?()=>s.delete(r):yt}function lR(t,e={}){let n;const i=Object.assign({},qc,e);ZS()&&(i.once=!0);const s=Pt(t),r=i.target||Bi();r.value=sR(s,i.ssrKey,r.value);const o=Bi(),l=Bi(!0),a=mm(),c=W_();let u=yt;function h(){let m=Pt(t);const I=new Promise((R,D)=>{if(!m)return n=yt,R(null);Array.isArray(r.value)?n=iR(r,m,R,D,i):n=nR(r,m,R,D,i)});a.value=I,I.catch(R=>{o.value=R}).finally(()=>{l.value=!1})}let d=yt;Te(t)?d=sr(t,h,{immediate:!0}):h(),s&&(u=oR(a.value,s)),c&&(V_(g),oo()&&Wd(()=>a.value));function g(m=i.reset){d(),u(),n(m)}return Object.defineProperties(r,{data:{get:()=>r},error:{get:()=>o},pending:{get:()=>l},promise:{get:()=>a},stop:{get:()=>g}})}function aR(t,e){const n=Bi([]);return lR(t,{target:n,...e})}function cR(t){return FT(Fo(t))}const uR=new WeakMap,nr=new WeakMap;function hR(){const t=Fo();if(!nr.has(t)){let e;const i=[new Promise(s=>{e=s}),s=>{nr.set(t,s),e(s.value)}];nr.set(t,i)}return nr.get(t)}function dR(t,e){const n=Y0(e);a_(n,i=>{const s=hR();t.value=i,Array.isArray(s)&&s[1](t)})}function fR(t){return(e,n)=>{const i=eR(e,n).run(()=>Bi());uR.set(e,i),dR(i,e)}}function pR(t,{firebaseApp:e,modules:n=[]}){t.provide(w_,e);for(const i of n)t.use(i.bind(null,e))}const gR=de("nav",{class:"navbar navbar-dark bg-primary"},[de("a",{href:"/",class:"navbar-brand"},"Salones ocupados")],-1),_R={class:"container"},mR={class:"row"},yR={class:"row-sm-8"},vR={class:"table table-striped table-bordered"},ER=de("thead",null,[de("tr",null,[de("th",{scope:"col"},"Laboratorio"),de("th",{scope:"col"},"Entrada"),de("th",{scope:"col"},"Salida"),de("th",{scope:"col"},"Maestro"),de("th",{scope:"col"},"Estatus")])],-1),IR={key:0,type:"button",class:"btn btn-success"},wR={key:1,type:"button",class:"btn btn-danger"},TR={__name:"App",setup(t){const e=cR(),n=aR(bT(e,"Salones"));return(i,s)=>(Ri(),Ai(Xe,null,[gR,de("div",_R,[de("div",mR,[de("div",yR,[de("table",vR,[ER,de("tbody",null,[(Ri(!0),Ai(Xe,null,Jm(Pt(n),r=>(Ri(),Ai("tr",null,[de("td",null,Hs(r.Name),1),de("td",null,Hs(r.HoraEntrada),1),de("td",null,Hs(r.HoraSalida),1),de("td",null,Hs(r.Maestro),1),de("td",null,[r.Status?(Ri(),Ai("button",IR,"Success")):(Ri(),Ai("button",wR,"Ocupado"))])]))),256))])])])])])],64))}},CR={apiKey:"AIzaSyC5-KJi3ABqVXdrwQo3IT6r7CVK5FBLG2E",authDomain:"doorbell-school.firebaseapp.com",databaseURL:"https://doorbell-school-default-rtdb.firebaseio.com",projectId:"doorbell-school",storageBucket:"doorbell-school.appspot.com",messagingSenderId:"239514347888",appId:"1:239514347888:web:133b2d68a112f06bb207b5",measurementId:"G-JF8M9GNG3L"},bR=_f(CR),b_=Zy(TR);b_.use(pR,{firebaseApp:bR,modules:[fR()]});b_.mount("#app");
