(self["webpackChunkozon"]=self["webpackChunkozon"]||[]).push([[998],{8099:function(){},9773:function(){},223:function(e,t,i){"use strict";i.d(t,{BH:function(){return E},DV:function(){return G},GJ:function(){return H},L:function(){return c},LL:function(){return N},P0:function(){return k},Pz:function(){return D},Sg:function(){return C},UG:function(){return B},UI:function(){return Y},US:function(){return u},Wl:function(){return V},Yr:function(){return T},ZR:function(){return O},aH:function(){return v},b$:function(){return q},cI:function(){return U},dS:function(){return se},eu:function(){return R},g5:function(){return n},gK:function(){return oe},gQ:function(){return te},h$:function(){return h},hl:function(){return I},hu:function(){return a},m9:function(){return le},ne:function(){return ie},p$:function(){return d},pd:function(){return ee},q4:function(){return w},r3:function(){return $},ru:function(){return S},tV:function(){return f},uI:function(){return j},ug:function(){return ue},vZ:function(){return J},w1:function(){return A},w9:function(){return W},xO:function(){return X},xb:function(){return K},z$:function(){return x},zd:function(){return Z}});i(3429),i(560);
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw n(t)},n=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let i=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[i++]=a:a<2048?(t[i++]=a>>6|192,t[i++]=63&a|128):55296===(64512&a)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[i++]=a>>18|240,t[i++]=a>>12&63|128,t[i++]=a>>6&63|128,t[i++]=63&a|128):(t[i++]=a>>12|224,t[i++]=a>>6&63|128,t[i++]=63&a|128)}return t},s=function(e){const t=[];let i=0,r=0;while(i<e.length){const a=e[i++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const n=e[i++];t[r++]=String.fromCharCode((31&a)<<6|63&n)}else if(a>239&&a<365){const n=e[i++],o=e[i++],s=e[i++],u=((7&a)<<18|(63&n)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const n=e[i++],o=e[i++];t[r++]=String.fromCharCode((15&a)<<12|(63&n)<<6|63&o)}}return t.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],n=a+1<e.length,o=n?e[a+1]:0,s=a+2<e.length,u=s?e[a+2]:0,l=t>>2,h=(3&t)<<4|o>>4;let c=(15&o)<<2|u>>6,f=63&u;s||(f=64,n||(c=64)),r.push(i[l],i[h],i[c],i[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const t=i[e.charAt(a++)],n=a<e.length,o=n?i[e.charAt(a)]:0;++a;const s=a<e.length,u=s?i[e.charAt(a)]:64;++a;const h=a<e.length,c=h?i[e.charAt(a)]:64;if(++a,null==t||null==o||null==u||null==c)throw new l;const f=t<<2|o>>4;if(r.push(f),64!==u){const e=o<<4&240|u>>2;if(r.push(e),64!==c){const e=u<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(e){const t=o(e);return u.encodeByteArray(t,!0)},c=function(e){return h(e).replace(/\./g,"")},f=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function d(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&g(i)&&(e[i]=_(e[i],t[i]));return e}function g(e){return"__proto__"!==e}
/**
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
 */function F(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof i.g)return i.g;throw new Error("Unable to locate global object.")}
/**
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
 */const m=()=>F().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/chat/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(i){return}const t=e&&f(e[1]);return t&&JSON.parse(t)},y=()=>{try{return m()||p()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,i;return null===(i=null===(t=y())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},k=e=>{const t=w(e);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),r]:[t.substring(0,i),r]},v=()=>{var e;return null===(e=y())||void 0===e?void 0:e.config},D=e=>{var t;return null===(t=y())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}}
/**
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
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",a=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[c(JSON.stringify(i)),c(JSON.stringify(o)),s].join(".")}
/**
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
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function j(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function B(){var e;const t=null===(e=y())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(i.g.process)}catch(r){return!1}}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function q(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=x();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function I(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(i){t(i)}}))}
/**
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
 */
const P="FirebaseError";class O extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=P,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],n=a?M(a,i):"Error",o=`${this.serviceName}: ${n} (${r}).`,s=new O(r,o,i);return s}}function M(e,t){return e.replace(L,((e,i)=>{const r=t[i];return null!=r?String(r):`<${i}?>`}))}const L=/\{\$([^}]+)}/g;
/**
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
 */function U(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}
/**
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
 */const z=function(e){let t={},i={},r={},a="";try{const n=e.split(".");t=U(f(n[0])||""),i=U(f(n[1])||""),a=n[2],r=i["d"]||{},delete i["d"]}catch(n){}return{header:t,claims:i,data:r,signature:a}},W=function(e){const t=z(e),i=t.claims;return!!i&&"object"===typeof i&&i.hasOwnProperty("iat")},H=function(e){const t=z(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function K(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Y(e,t,i){const r={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=t.call(i,e[a],a,e));return r}function J(e,t){if(e===t)return!0;const i=Object.keys(e),r=Object.keys(t);for(const a of i){if(!r.includes(a))return!1;const i=e[a],n=t[a];if(Q(i)&&Q(n)){if(!J(i,n))return!1}else if(i!==n)return!1}for(const a of r)if(!i.includes(a))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function X(e){const t=[];for(const[i,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Z(e){const t={},i=e.replace(/^\?/,"").split("&");return i.forEach((e=>{if(e){const[i,r]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}})),t}function ee(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
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
 */class te{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if("string"===typeof e)for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const e=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=4294967295&(e<<1|e>>>31)}let r,a,n=this.chain_[0],o=this.chain_[1],s=this.chain_[2],u=this.chain_[3],l=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(r=u^o&(s^u),a=1518500249):(r=o^s^u,a=1859775393):h<60?(r=o&s|u&(o|s),a=2400959708):(r=o^s^u,a=3395469782);const e=(n<<5|n>>>27)+r+l+a+i[h]&4294967295;l=u,u=s,s=4294967295&(o<<30|o>>>2),o=n,n=e}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const i=t-this.blockSize;let r=0;const a=this.buf_;let n=this.inbuf_;while(r<t){if(0===n)while(r<=i)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(a[n]=e.charCodeAt(r),++n,++r,n===this.blockSize){this.compress_(a),n=0;break}}else while(r<t)if(a[n]=e[r],++n,++r,n===this.blockSize){this.compress_(a),n=0;break}}this.inbuf_=n,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[i]=this.chain_[r]>>t&255,++i;return e}}function ie(e,t){const i=new re(e,t);return i.subscribe.bind(i)}class re{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let r;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");r=ae(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===r.next&&(r.next=ne),void 0===r.error&&(r.error=ne),void 0===r.complete&&(r.complete=ne);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(i){"undefined"!==typeof console&&console.error&&console.error(i)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ae(e,t){if("object"!==typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"===typeof e[i])return!0;return!1}function ne(){}
/**
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
 */function oe(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const se=function(e){const t=[];let i=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n>=55296&&n<=56319){const t=n-55296;r++,a(r<e.length,"Surrogate pair missing trail surrogate.");const i=e.charCodeAt(r)-56320;n=65536+(t<<10)+i}n<128?t[i++]=n:n<2048?(t[i++]=n>>6|192,t[i++]=63&n|128):n<65536?(t[i++]=n>>12|224,t[i++]=n>>6&63|128,t[i++]=63&n|128):(t[i++]=n>>18|240,t[i++]=n>>12&63|128,t[i++]=n>>6&63|128,t[i++]=63&n|128)}return t},ue=function(e){let t=0;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};
/**
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
 */
function le(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,i){"use strict";i.d(t,{B:function(){return o},BK:function(){return Le},Bj:function(){return n},EB:function(){return l},Fl:function(){return $e},IU:function(){return Ce},Jd:function(){return C},OT:function(){return ye},PG:function(){return ke},SU:function(){return Oe},Um:function(){return be},Vh:function(){return ze},WL:function(){return Me},X$:function(){return S},X3:function(){return Ee},XI:function(){return Ie},Xl:function(){return xe},dq:function(){return Ae},iH:function(){return Te},j:function(){return j},lk:function(){return x},nZ:function(){return u},qj:function(){return pe},qq:function(){return k},yT:function(){return De}});i(560);var r=i(7139);let a;class n{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=a,!e&&a&&(this.index=(a.scopes||(a.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=a;try{return a=this,e()}finally{a=t}}else 0}on(){a=this}off(){a=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e){return new n(e)}function s(e,t=a){t&&t.active&&t.effects.push(e)}function u(){return a}function l(e){a&&a.cleanups.push(e)}const h=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&m)>0,f=e=>(e.n&m)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},_=e=>{const{deps:t}=e;if(t.length){let i=0;for(let r=0;r<t.length;r++){const a=t[r];c(a)&&!f(a)?a.delete(e):t[i++]=a,a.w&=~m,a.n&=~m}t.length=i}},g=new WeakMap;let F=0,m=1;const p=30;let b;const y=Symbol(""),w=Symbol("");class k{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,i)}run(){if(!this.active)return this.fn();let e=b,t=D;while(e){if(e===this)return;e=e.parent}try{return this.parent=b,b=this,D=!0,m=1<<++F,F<=p?d(this):v(this),this.fn()}finally{F<=p&&_(this),m=1<<--F,b=this.parent,D=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(v(this),this.onStop&&this.onStop(),this.active=!1)}}function v(e){const{deps:t}=e;if(t.length){for(let i=0;i<t.length;i++)t[i].delete(e);t.length=0}}let D=!0;const E=[];function C(){E.push(D),D=!1}function x(){const e=E.pop();D=void 0===e||e}function j(e,t,i){if(D&&b){let t=g.get(e);t||g.set(e,t=new Map);let r=t.get(i);r||t.set(i,r=h());const a=void 0;B(r,a)}}function B(e,t){let i=!1;F<=p?f(e)||(e.n|=m,i=!c(e)):i=!e.has(b),i&&(e.add(b),b.deps.push(e))}function S(e,t,i,a,n,o){const s=g.get(e);if(!s)return;let u=[];if("clear"===t)u=[...s.values()];else if("length"===i&&(0,r.kJ)(e)){const e=Number(a);s.forEach(((t,i)=>{("length"===i||!(0,r.yk)(i)&&i>=e)&&u.push(t)}))}else switch(void 0!==i&&u.push(s.get(i)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(i)&&u.push(s.get("length")):(u.push(s.get(y)),(0,r._N)(e)&&u.push(s.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(s.get(y)),(0,r._N)(e)&&u.push(s.get(w)));break;case"set":(0,r._N)(e)&&u.push(s.get(y));break}if(1===u.length)u[0]&&q(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);q(h(e))}}function q(e,t){const i=(0,r.kJ)(e)?e:[...e];for(const r of i)r.computed&&A(r,t);for(const r of i)r.computed||A(r,t)}function A(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function T(e,t){var i;return null==(i=g.get(e))?void 0:i.get(t)}const I=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),P=O();function O(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const i=Ce(this);for(let t=0,a=this.length;t<a;t++)j(i,"get",t+"");const r=i[t](...e);return-1===r||!1===r?i[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){C();const i=Ce(this)[t].apply(this,e);return x(),i}})),e}function N(e){const t=Ce(this);return j(t,"has",e),t.hasOwnProperty(e)}class M{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const a=this._isReadonly,n=this._shallow;if("__v_isReactive"===t)return!a;if("__v_isReadonly"===t)return a;if("__v_isShallow"===t)return n;if("__v_raw"===t&&i===(a?n?ge:_e:n?de:fe).get(e))return e;const o=(0,r.kJ)(e);if(!a){if(o&&(0,r.RI)(P,t))return Reflect.get(P,t,i);if("hasOwnProperty"===t)return N}const s=Reflect.get(e,t,i);return((0,r.yk)(t)?R.has(t):I(t))?s:(a||j(e,"get",t),n?s:Ae(s)?o&&(0,r.S0)(t)?s:s.value:(0,r.Kn)(s)?a?ye(s):pe(s):s)}}class L extends M{constructor(e=!1){super(!1,e)}set(e,t,i,a){let n=e[t];if(ve(n)&&Ae(n)&&!Ae(i))return!1;if(!this._shallow&&(De(i)||ve(i)||(n=Ce(n),i=Ce(i)),!(0,r.kJ)(e)&&Ae(n)&&!Ae(i)))return n.value=i,!0;const o=(0,r.kJ)(e)&&(0,r.S0)(t)?Number(t)<e.length:(0,r.RI)(e,t),s=Reflect.set(e,t,i,a);return e===Ce(a)&&(o?(0,r.aU)(i,n)&&S(e,"set",t,i,n):S(e,"add",t,i)),s}deleteProperty(e,t){const i=(0,r.RI)(e,t),a=e[t],n=Reflect.deleteProperty(e,t);return n&&i&&S(e,"delete",t,void 0,a),n}has(e,t){const i=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||j(e,"has",t),i}ownKeys(e){return j(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}}class U extends M{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const V=new L,z=new U,W=new L(!0),H=e=>e,$=e=>Reflect.getPrototypeOf(e);function G(e,t,i=!1,a=!1){e=e["__v_raw"];const n=Ce(e),o=Ce(t);i||((0,r.aU)(t,o)&&j(n,"get",t),j(n,"get",o));const{has:s}=$(n),u=a?H:i?Be:je;return s.call(n,t)?u(e.get(t)):s.call(n,o)?u(e.get(o)):void(e!==n&&e.get(t))}function K(e,t=!1){const i=this["__v_raw"],a=Ce(i),n=Ce(e);return t||((0,r.aU)(e,n)&&j(a,"has",e),j(a,"has",n)),e===n?i.has(e):i.has(e)||i.has(n)}function Y(e,t=!1){return e=e["__v_raw"],!t&&j(Ce(e),"iterate",y),Reflect.get(e,"size",e)}function J(e){e=Ce(e);const t=Ce(this),i=$(t),r=i.has.call(t,e);return r||(t.add(e),S(t,"add",e,e)),this}function Q(e,t){t=Ce(t);const i=Ce(this),{has:a,get:n}=$(i);let o=a.call(i,e);o||(e=Ce(e),o=a.call(i,e));const s=n.call(i,e);return i.set(e,t),o?(0,r.aU)(t,s)&&S(i,"set",e,t,s):S(i,"add",e,t),this}function X(e){const t=Ce(this),{has:i,get:r}=$(t);let a=i.call(t,e);a||(e=Ce(e),a=i.call(t,e));const n=r?r.call(t,e):void 0,o=t.delete(e);return a&&S(t,"delete",e,void 0,n),o}function Z(){const e=Ce(this),t=0!==e.size,i=void 0,r=e.clear();return t&&S(e,"clear",void 0,void 0,i),r}function ee(e,t){return function(i,r){const a=this,n=a["__v_raw"],o=Ce(n),s=t?H:e?Be:je;return!e&&j(o,"iterate",y),n.forEach(((e,t)=>i.call(r,s(e),s(t),a)))}}function te(e,t,i){return function(...a){const n=this["__v_raw"],o=Ce(n),s=(0,r._N)(o),u="entries"===e||e===Symbol.iterator&&s,l="keys"===e&&s,h=n[e](...a),c=i?H:t?Be:je;return!t&&j(o,"iterate",l?w:y),{next(){const{value:e,done:t}=h.next();return t?{value:e,done:t}:{value:u?[c(e[0]),c(e[1])]:c(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function re(){const e={get(e){return G(this,e)},get size(){return Y(this)},has:K,add:J,set:Q,delete:X,clear:Z,forEach:ee(!1,!1)},t={get(e){return G(this,e,!1,!0)},get size(){return Y(this)},has:K,add:J,set:Q,delete:X,clear:Z,forEach:ee(!1,!0)},i={get(e){return G(this,e,!0)},get size(){return Y(this,!0)},has(e){return K.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ee(!0,!1)},r={get(e){return G(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return K.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ee(!0,!0)},a=["keys","values","entries",Symbol.iterator];return a.forEach((a=>{e[a]=te(a,!1,!1),i[a]=te(a,!0,!1),t[a]=te(a,!1,!0),r[a]=te(a,!0,!0)})),[e,i,t,r]}const[ae,ne,oe,se]=re();function ue(e,t){const i=t?e?se:oe:e?ne:ae;return(t,a,n)=>"__v_isReactive"===a?!e:"__v_isReadonly"===a?e:"__v_raw"===a?t:Reflect.get((0,r.RI)(i,a)&&a in t?i:t,a,n)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},ce={get:ue(!0,!1)};const fe=new WeakMap,de=new WeakMap,_e=new WeakMap,ge=new WeakMap;function Fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Fe((0,r.W7)(e))}function pe(e){return ve(e)?e:we(e,!1,V,le,fe)}function be(e){return we(e,!1,W,he,de)}function ye(e){return we(e,!0,z,ce,_e)}function we(e,t,i,a,n){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=n.get(e);if(o)return o;const s=me(e);if(0===s)return e;const u=new Proxy(e,2===s?a:i);return n.set(e,u),u}function ke(e){return ve(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ve(e){return!(!e||!e["__v_isReadonly"])}function De(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return ke(e)||ve(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function xe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const je=e=>(0,r.Kn)(e)?pe(e):e,Be=e=>(0,r.Kn)(e)?ye(e):e;function Se(e){D&&b&&(e=Ce(e),B(e.dep||(e.dep=h())))}function qe(e,t){e=Ce(e);const i=e.dep;i&&q(i)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function Te(e){return Re(e,!1)}function Ie(e){return Re(e,!0)}function Re(e,t){return Ae(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:je(e)}get value(){return Se(this),this._value}set value(e){const t=this.__v_isShallow||De(e)||ve(e);e=t?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:je(e),qe(this,e))}}function Oe(e){return Ae(e)?e.value:e}const Ne={get:(e,t,i)=>Oe(Reflect.get(e,t,i)),set:(e,t,i,r)=>{const a=e[t];return Ae(a)&&!Ae(i)?(a.value=i,!0):Reflect.set(e,t,i,r)}};function Me(e){return ke(e)?e:new Proxy(e,Ne)}function Le(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const i in e)t[i]=We(e,i);return t}class Ue{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return T(Ce(this._object),this._key)}}class Ve{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ze(e,t,i){return Ae(e)?e:(0,r.mf)(e)?new Ve(e):(0,r.Kn)(e)&&arguments.length>1?We(e,t,i):Te(e)}function We(e,t,i){const r=e[t];return Ae(r)?r:new Ue(e,t,i)}class He{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new k(e,(()=>{this._dirty||(this._dirty=!0,qe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=i}get value(){const e=Ce(this);return Se(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,i=!1){let a,n;const o=(0,r.mf)(e);o?(a=e,n=r.dG):(a=e.get,n=e.set);const s=new He(a,n,o||!n,i);return s}},3396:function(e,t,i){"use strict";i.d(t,{$d:function(){return s},Ah:function(){return Le},Cn:function(){return O},EM:function(){return yt},FN:function(){return Ri},Fl:function(){return er},HY:function(){return ti},Ho:function(){return vi},JJ:function(){return pt},Jd:function(){return Me},Ko:function(){return He},LL:function(){return Y},P$:function(){return Fe},Q2:function(){return J},Q6:function(){return ke},U2:function(){return pe},Uk:function(){return Di},Us:function(){return Lt},WI:function(){return $e},Wm:function(){return yi},Y3:function(){return b},Y8:function(){return fe},YP:function(){return re},ZK:function(){return n},_:function(){return bi},aZ:function(){return ve},bv:function(){return Pe},dD:function(){return P},dG:function(){return Bi},f3:function(){return bt},h:function(){return tr},iD:function(){return fi},ic:function(){return Ne},j4:function(){return di},kq:function(){return Ei},lR:function(){return Zt},m0:function(){return te},nJ:function(){return _e},nK:function(){return we},up:function(){return G},w5:function(){return N},wF:function(){return Re},wg:function(){return si},wy:function(){return ue},xv:function(){return ii}});i(560);var r=i(4870),a=i(7139);function n(e,...t){}function o(e,t,i,r){let a;try{a=r?e(...r):e()}catch(n){u(n,t,i)}return a}function s(e,t,i,r){if((0,a.mf)(e)){const n=o(e,t,i,r);return n&&(0,a.tI)(n)&&n.catch((e=>{u(e,t,i)})),n}const n=[];for(let a=0;a<e.length;a++)n.push(s(e[a],t,i,r));return n}function u(e,t,i,r=!0){const a=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,n=i;while(r){const t=r.ec;if(t)for(let i=0;i<t.length;i++)if(!1===t[i](e,a,n))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void o(s,null,10,[e,a,n])}l(e,i,a,r)}function l(e,t,i,r=!0){console.error(e)}let h=!1,c=!1;const f=[];let d=0;const _=[];let g=null,F=0;const m=Promise.resolve();let p=null;function b(e){const t=p||m;return e?t.then(this?e.bind(this):e):t}function y(e){let t=d+1,i=f.length;while(t<i){const r=t+i>>>1,a=f[r],n=x(a);n<e||n===e&&a.pre?t=r+1:i=r}return t}function w(e){f.length&&f.includes(e,h&&e.allowRecurse?d+1:d)||(null==e.id?f.push(e):f.splice(y(e.id),0,e),k())}function k(){h||c||(c=!0,p=m.then(B))}function v(e){const t=f.indexOf(e);t>d&&f.splice(t,1)}function D(e){(0,a.kJ)(e)?_.push(...e):g&&g.includes(e,e.allowRecurse?F+1:F)||_.push(e),k()}function E(e,t=(h?d+1:0)){for(0;t<f.length;t++){const e=f[t];e&&e.pre&&(f.splice(t,1),t--,e())}}function C(e){if(_.length){const e=[...new Set(_)];if(_.length=0,g)return void g.push(...e);for(g=e,g.sort(((e,t)=>x(e)-x(t))),F=0;F<g.length;F++)g[F]();g=null,F=0}}const x=e=>null==e.id?1/0:e.id,j=(e,t)=>{const i=x(e)-x(t);if(0===i){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return i};function B(e){c=!1,h=!0,f.sort(j);a.dG;try{for(d=0;d<f.length;d++){const e=f[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,f.length=0,C(e),h=!1,p=null,(f.length||_.length)&&B(e)}}function S(e,t,...i){if(e.isUnmounted)return;const r=e.vnode.props||a.kT;let n=i;const o=t.startsWith("update:"),u=o&&t.slice(7);if(u&&u in r){const e=`${"modelValue"===u?"model":u}Modifiers`,{number:t,trim:o}=r[e]||a.kT;o&&(n=i.map((e=>(0,a.HD)(e)?e.trim():e))),t&&(n=i.map(a.h5))}let l;let h=r[l=(0,a.hR)(t)]||r[l=(0,a.hR)((0,a._A)(t))];!h&&o&&(h=r[l=(0,a.hR)((0,a.rs)(t))]),h&&s(h,e,6,n);const c=r[l+"Once"];if(c){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(c,e,6,n)}}function q(e,t,i=!1){const r=t.emitsCache,n=r.get(e);if(void 0!==n)return n;const o=e.emits;let s={},u=!1;if(!(0,a.mf)(e)){const r=e=>{const i=q(e,t,!0);i&&(u=!0,(0,a.l7)(s,i))};!i&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||u?((0,a.kJ)(o)?o.forEach((e=>s[e]=null)):(0,a.l7)(s,o),(0,a.Kn)(e)&&r.set(e,s),s):((0,a.Kn)(e)&&r.set(e,null),null)}function A(e,t){return!(!e||!(0,a.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,a.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,a.RI)(e,(0,a.rs)(t))||(0,a.RI)(e,t))}let T=null,I=null;function R(e){const t=T;return T=e,I=e&&e.type.__scopeId||null,t}function P(e){I=e}function O(){I=null}function N(e,t=T,i){if(!t)return e;if(e._n)return e;const r=(...i)=>{r._d&&hi(-1);const a=R(t);let n;try{n=e(...i)}finally{R(a),r._d&&hi(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:i,proxy:r,withProxy:n,props:o,propsOptions:[s],slots:l,attrs:h,emit:c,render:f,renderCache:d,data:_,setupState:g,ctx:F,inheritAttrs:m}=e;let p,b;const y=R(e);try{if(4&i.shapeFlag){const e=n||r;p=Ci(f.call(e,e,d,o,g,_,F)),b=h}else{const e=t;0,p=Ci(e.length>1?e(o,{attrs:h,slots:l,emit:c}):e(o,null)),b=t.props?h:L(h)}}catch(k){ni.length=0,u(k,e,1),p=yi(ri)}let w=p;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(s&&e.some(a.tR)&&(b=U(b,s)),w=vi(w,b))}return i.dirs&&(w=vi(w),w.dirs=w.dirs?w.dirs.concat(i.dirs):i.dirs),i.transition&&(w.transition=i.transition),p=w,R(y),p}const L=e=>{let t;for(const i in e)("class"===i||"style"===i||(0,a.F7)(i))&&((t||(t={}))[i]=e[i]);return t},U=(e,t)=>{const i={};for(const r in e)(0,a.tR)(r)&&r.slice(9)in t||(i[r]=e[r]);return i};function V(e,t,i){const{props:r,children:a,component:n}=e,{props:o,children:s,patchFlag:u}=t,l=n.emitsOptions;if(t.dirs||t.transition)return!0;if(!(i&&u>=0))return!(!a&&!s||s&&s.$stable)||r!==o&&(r?!o||z(r,o,l):!!o);if(1024&u)return!0;if(16&u)return r?z(r,o,l):!!o;if(8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const i=e[t];if(o[i]!==r[i]&&!A(l,i))return!0}}return!1}function z(e,t,i){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const n=r[a];if(t[n]!==e[n]&&!A(i,n))return!0}return!1}function W({vnode:e,parent:t},i){while(t&&t.subTree===e)(e=t.vnode).el=i,t=t.parent}const H="components",$="directives";function G(e,t){return Q(H,e,!0,t)||e}const K=Symbol.for("v-ndc");function Y(e){return(0,a.HD)(e)?Q(H,e,!1)||e:e||K}function J(e){return Q($,e)}function Q(e,t,i=!0,r=!1){const n=T||Ii;if(n){const i=n.type;if(e===H){const e=Xi(i,!1);if(e&&(e===t||e===(0,a._A)(t)||e===(0,a.kC)((0,a._A)(t))))return i}const o=X(n[e]||i[e],t)||X(n.appContext[e],t);return!o&&r?i:o}}function X(e,t){return e&&(e[t]||e[(0,a._A)(t)]||e[(0,a.kC)((0,a._A)(t))])}const Z=e=>e.__isSuspense;function ee(e,t){t&&t.pendingBranch?(0,a.kJ)(e)?t.effects.push(...e):t.effects.push(e):D(e)}function te(e,t){return ae(e,null,t)}const ie={};function re(e,t,i){return ae(e,t,i)}function ae(e,t,{immediate:i,deep:n,flush:u,onTrack:l,onTrigger:h}=a.kT){var c;const f=(0,r.nZ)()===(null==(c=Ii)?void 0:c.scope)?Ii:null;let d,_,g=!1,F=!1;if((0,r.dq)(e)?(d=()=>e.value,g=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,n=!0):(0,a.kJ)(e)?(F=!0,g=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?se(e):(0,a.mf)(e)?o(e,f,2):void 0))):d=(0,a.mf)(e)?t?()=>o(e,f,2):()=>{if(!f||!f.isUnmounted)return _&&_(),s(e,f,3,[p])}:a.dG,t&&n){const e=d;d=()=>se(e())}let m,p=e=>{_=v.onStop=()=>{o(e,f,4)}};if(Wi){if(p=a.dG,t?i&&s(t,f,3,[d(),F?[]:void 0,p]):d(),"sync"!==u)return a.dG;{const e=rr();m=e.__watcherHandles||(e.__watcherHandles=[])}}let b=F?new Array(e.length).fill(ie):ie;const y=()=>{if(v.active)if(t){const e=v.run();(n||g||(F?e.some(((e,t)=>(0,a.aU)(e,b[t]))):(0,a.aU)(e,b)))&&(_&&_(),s(t,f,3,[e,b===ie?void 0:F&&b[0]===ie?[]:b,p]),b=e)}else v.run()};let k;y.allowRecurse=!!t,"sync"===u?k=y:"post"===u?k=()=>Mt(y,f&&f.suspense):(y.pre=!0,f&&(y.id=f.uid),k=()=>w(y));const v=new r.qq(d,k);t?i?y():b=v.run():"post"===u?Mt(v.run.bind(v),f&&f.suspense):v.run();const D=()=>{v.stop(),f&&f.scope&&(0,a.Od)(f.scope.effects,v)};return m&&m.push(D),D}function ne(e,t,i){const r=this.proxy,n=(0,a.HD)(e)?e.includes(".")?oe(r,e):()=>r[e]:e.bind(r,r);let o;(0,a.mf)(t)?o=t:(o=t.handler,i=t);const s=Ii;Mi(this);const u=ae(n,o.bind(r),i);return s?Mi(s):Li(),u}function oe(e,t){const i=t.split(".");return()=>{let t=e;for(let e=0;e<i.length&&t;e++)t=t[i[e]];return t}}function se(e,t){if(!(0,a.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))se(e.value,t);else if((0,a.kJ)(e))for(let i=0;i<e.length;i++)se(e[i],t);else if((0,a.DM)(e)||(0,a._N)(e))e.forEach((e=>{se(e,t)}));else if((0,a.PO)(e))for(const i in e)se(e[i],t);return e}function ue(e,t){const i=T;if(null===i)return e;const r=Qi(i)||i.proxy,n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,i,s,u=a.kT]=t[o];e&&((0,a.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&se(i),n.push({dir:e,instance:r,value:i,oldValue:void 0,arg:s,modifiers:u}))}return e}function le(e,t,i,a){const n=e.dirs,o=t&&t.dirs;for(let u=0;u<n.length;u++){const l=n[u];o&&(l.oldValue=o[u].value);let h=l.dir[a];h&&((0,r.Jd)(),s(h,i,8,[e.el,l,e,t]),(0,r.lk)())}}const he=Symbol("_leaveCb"),ce=Symbol("_enterCb");function fe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pe((()=>{e.isMounted=!0})),Me((()=>{e.isUnmounting=!0})),e}const de=[Function,Array],_e={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},ge={name:"BaseTransition",props:_e,setup(e,{slots:t}){const i=Ri(),a=fe();let n;return()=>{const o=t.default&&ke(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==ri){0,s=t,e=!0;break}}const u=(0,r.IU)(e),{mode:l}=u;if(a.isLeaving)return be(s);const h=ye(s);if(!h)return be(s);const c=pe(h,u,a,i);we(h,c);const f=i.subTree,d=f&&ye(f);let _=!1;const{getTransitionKey:g}=h.type;if(g){const e=g();void 0===n?n=e:e!==n&&(n=e,_=!0)}if(d&&d.type!==ri&&(!gi(h,d)||_)){const e=pe(d,u,a,i);if(we(d,e),"out-in"===l)return a.isLeaving=!0,e.afterLeave=()=>{a.isLeaving=!1,!1!==i.update.active&&i.update()},be(s);"in-out"===l&&h.type!==ri&&(e.delayLeave=(e,t,i)=>{const r=me(a,d);r[String(d.key)]=d,e[he]=()=>{t(),e[he]=void 0,delete c.delayedLeave},c.delayedLeave=i})}return s}}},Fe=ge;function me(e,t){const{leavingVNodes:i}=e;let r=i.get(t.type);return r||(r=Object.create(null),i.set(t.type,r)),r}function pe(e,t,i,r){const{appear:n,mode:o,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:_,onAfterLeave:g,onLeaveCancelled:F,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:y}=t,w=String(e.key),k=me(i,e),v=(e,t)=>{e&&s(e,r,9,t)},D=(e,t)=>{const i=t[1];v(e,t),(0,a.kJ)(e)?e.every((e=>e.length<=1))&&i():e.length<=1&&i()},E={mode:o,persisted:u,beforeEnter(t){let r=l;if(!i.isMounted){if(!n)return;r=m||l}t[he]&&t[he](!0);const a=k[w];a&&gi(e,a)&&a.el[he]&&a.el[he](),v(r,[t])},enter(e){let t=h,r=c,a=f;if(!i.isMounted){if(!n)return;t=p||h,r=b||c,a=y||f}let o=!1;const s=e[ce]=t=>{o||(o=!0,v(t?a:r,[e]),E.delayedLeave&&E.delayedLeave(),e[ce]=void 0)};t?D(t,[e,s]):s()},leave(t,r){const a=String(e.key);if(t[ce]&&t[ce](!0),i.isUnmounting)return r();v(d,[t]);let n=!1;const o=t[he]=i=>{n||(n=!0,r(),v(i?F:g,[t]),t[he]=void 0,k[a]===e&&delete k[a])};k[a]=e,_?D(_,[t,o]):o()},clone(e){return pe(e,t,i,r)}};return E}function be(e){if(Ee(e))return e=vi(e),e.children=null,e}function ye(e){return Ee(e)?e.children?e.children[0]:void 0:e}function we(e,t){6&e.shapeFlag&&e.component?we(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ke(e,t=!1,i){let r=[],a=0;for(let n=0;n<e.length;n++){let o=e[n];const s=null==i?o.key:String(i)+String(null!=o.key?o.key:n);o.type===ti?(128&o.patchFlag&&a++,r=r.concat(ke(o.children,t,s))):(t||o.type!==ri)&&r.push(null!=s?vi(o,{key:s}):o)}if(a>1)for(let n=0;n<r.length;n++)r[n].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ve(e,t){return(0,a.mf)(e)?(()=>(0,a.l7)({name:e.name},t,{setup:e}))():e}const De=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ee=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ce(e,t){return(0,a.kJ)(e)?e.some((e=>Ce(e,t))):(0,a.HD)(e)?e.split(",").includes(t):!!(0,a.Kj)(e)&&e.test(t)}function xe(e,t){Be(e,"a",t)}function je(e,t){Be(e,"da",t)}function Be(e,t,i=Ii){const r=e.__wdc||(e.__wdc=()=>{let t=i;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Te(t,r,i),i){let e=i.parent;while(e&&e.parent)Ee(e.parent.vnode)&&Se(r,t,i,e),e=e.parent}}function Se(e,t,i,r){const n=Te(t,e,r,!0);Le((()=>{(0,a.Od)(r[t],n)}),i)}function qe(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ae(e){return 128&e.shapeFlag?e.ssContent:e}function Te(e,t,i=Ii,a=!1){if(i){const n=i[e]||(i[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(i.isUnmounted)return;(0,r.Jd)(),Mi(i);const n=s(t,i,e,a);return Li(),(0,r.lk)(),n});return a?n.unshift(o):n.push(o),o}}const Ie=e=>(t,i=Ii)=>(!Wi||"sp"===e)&&Te(e,((...e)=>t(...e)),i),Re=Ie("bm"),Pe=Ie("m"),Oe=Ie("bu"),Ne=Ie("u"),Me=Ie("bum"),Le=Ie("um"),Ue=Ie("sp"),Ve=Ie("rtg"),ze=Ie("rtc");function We(e,t=Ii){Te("ec",e,t)}function He(e,t,i,r){let n;const o=i&&i[r];if((0,a.kJ)(e)||(0,a.HD)(e)){n=new Array(e.length);for(let i=0,r=e.length;i<r;i++)n[i]=t(e[i],i,void 0,o&&o[i])}else if("number"===typeof e){0,n=new Array(e);for(let i=0;i<e;i++)n[i]=t(i+1,i,void 0,o&&o[i])}else if((0,a.Kn)(e))if(e[Symbol.iterator])n=Array.from(e,((e,i)=>t(e,i,void 0,o&&o[i])));else{const i=Object.keys(e);n=new Array(i.length);for(let r=0,a=i.length;r<a;r++){const a=i[r];n[r]=t(e[a],a,r,o&&o[r])}}else n=[];return i&&(i[r]=n),n}function $e(e,t,i={},r,a){if(T.isCE||T.parent&&De(T.parent)&&T.parent.isCE)return"default"!==t&&(i.name=t),yi("slot",i,r&&r());let n=e[t];n&&n._c&&(n._d=!1),si();const o=n&&Ge(n(i)),s=di(ti,{key:i.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),n&&n._c&&(n._d=!0),s}function Ge(e){return e.some((e=>!_i(e)||e.type!==ri&&!(e.type===ti&&!Ge(e.children))))?e:null}const Ke=e=>e?Ui(e)?Qi(e)||e.proxy:Ke(e.parent):null,Ye=(0,a.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ke(e.parent),$root:e=>Ke(e.root),$emit:e=>e.emit,$options:e=>at(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>ne.bind(e)}),Je=(e,t)=>e!==a.kT&&!e.__isScriptSetup&&(0,a.RI)(e,t),Qe={get({_:e},t){const{ctx:i,setupState:n,data:o,props:s,accessCache:u,type:l,appContext:h}=e;let c;if("$"!==t[0]){const r=u[t];if(void 0!==r)switch(r){case 1:return n[t];case 2:return o[t];case 4:return i[t];case 3:return s[t]}else{if(Je(n,t))return u[t]=1,n[t];if(o!==a.kT&&(0,a.RI)(o,t))return u[t]=2,o[t];if((c=e.propsOptions[0])&&(0,a.RI)(c,t))return u[t]=3,s[t];if(i!==a.kT&&(0,a.RI)(i,t))return u[t]=4,i[t];Ze&&(u[t]=0)}}const f=Ye[t];let d,_;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(d=l.__cssModules)&&(d=d[t])?d:i!==a.kT&&(0,a.RI)(i,t)?(u[t]=4,i[t]):(_=h.config.globalProperties,(0,a.RI)(_,t)?_[t]:void 0)},set({_:e},t,i){const{data:r,setupState:n,ctx:o}=e;return Je(n,t)?(n[t]=i,!0):r!==a.kT&&(0,a.RI)(r,t)?(r[t]=i,!0):!(0,a.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=i,!0))},has({_:{data:e,setupState:t,accessCache:i,ctx:r,appContext:n,propsOptions:o}},s){let u;return!!i[s]||e!==a.kT&&(0,a.RI)(e,s)||Je(t,s)||(u=o[0])&&(0,a.RI)(u,s)||(0,a.RI)(r,s)||(0,a.RI)(Ye,s)||(0,a.RI)(n.config.globalProperties,s)},defineProperty(e,t,i){return null!=i.get?e._.accessCache[t]=0:(0,a.RI)(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Xe(e){return(0,a.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ze=!0;function et(e){const t=at(e),i=e.proxy,n=e.ctx;Ze=!1,t.beforeCreate&&it(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:u,watch:l,provide:h,inject:c,created:f,beforeMount:d,mounted:_,beforeUpdate:g,updated:F,activated:m,deactivated:p,beforeDestroy:b,beforeUnmount:y,destroyed:w,unmounted:k,render:v,renderTracked:D,renderTriggered:E,errorCaptured:C,serverPrefetch:x,expose:j,inheritAttrs:B,components:S,directives:q,filters:A}=t,T=null;if(c&&tt(c,n,T),u)for(const r in u){const e=u[r];(0,a.mf)(e)&&(n[r]=e.bind(i))}if(o){0;const t=o.call(i,i);0,(0,a.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ze=!0,s)for(const r in s){const e=s[r],t=(0,a.mf)(e)?e.bind(i,i):(0,a.mf)(e.get)?e.get.bind(i,i):a.dG;0;const o=!(0,a.mf)(e)&&(0,a.mf)(e.set)?e.set.bind(i):a.dG,u=er({get:t,set:o});Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:e=>u.value=e})}if(l)for(const r in l)rt(l[r],n,i,r);if(h){const e=(0,a.mf)(h)?h.call(i):h;Reflect.ownKeys(e).forEach((t=>{pt(t,e[t])}))}function I(e,t){(0,a.kJ)(t)?t.forEach((t=>e(t.bind(i)))):t&&e(t.bind(i))}if(f&&it(f,e,"c"),I(Re,d),I(Pe,_),I(Oe,g),I(Ne,F),I(xe,m),I(je,p),I(We,C),I(ze,D),I(Ve,E),I(Me,y),I(Le,k),I(Ue,x),(0,a.kJ)(j))if(j.length){const t=e.exposed||(e.exposed={});j.forEach((e=>{Object.defineProperty(t,e,{get:()=>i[e],set:t=>i[e]=t})}))}else e.exposed||(e.exposed={});v&&e.render===a.dG&&(e.render=v),null!=B&&(e.inheritAttrs=B),S&&(e.components=S),q&&(e.directives=q)}function tt(e,t,i=a.dG){(0,a.kJ)(e)&&(e=lt(e));for(const n in e){const i=e[n];let o;o=(0,a.Kn)(i)?"default"in i?bt(i.from||n,i.default,!0):bt(i.from||n):bt(i),(0,r.dq)(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[n]=o}}function it(e,t,i){s((0,a.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,i)}function rt(e,t,i,r){const n=r.includes(".")?oe(i,r):()=>i[r];if((0,a.HD)(e)){const i=t[e];(0,a.mf)(i)&&re(n,i)}else if((0,a.mf)(e))re(n,e.bind(i));else if((0,a.Kn)(e))if((0,a.kJ)(e))e.forEach((e=>rt(e,t,i,r)));else{const r=(0,a.mf)(e.handler)?e.handler.bind(i):t[e.handler];(0,a.mf)(r)&&re(n,r,e)}else 0}function at(e){const t=e.type,{mixins:i,extends:r}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,u=o.get(t);let l;return u?l=u:n.length||i||r?(l={},n.length&&n.forEach((e=>nt(l,e,s,!0))),nt(l,t,s)):l=t,(0,a.Kn)(t)&&o.set(t,l),l}function nt(e,t,i,r=!1){const{mixins:a,extends:n}=t;n&&nt(e,n,i,!0),a&&a.forEach((t=>nt(e,t,i,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ot[o]||i&&i[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ot={data:st,props:ft,emits:ft,methods:ct,computed:ct,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ct,directives:ct,watch:dt,provide:st,inject:ut};function st(e,t){return t?e?function(){return(0,a.l7)((0,a.mf)(e)?e.call(this,this):e,(0,a.mf)(t)?t.call(this,this):t)}:t:e}function ut(e,t){return ct(lt(e),lt(t))}function lt(e){if((0,a.kJ)(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function ht(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?(0,a.l7)(Object.create(null),e,t):t}function ft(e,t){return e?(0,a.kJ)(e)&&(0,a.kJ)(t)?[...new Set([...e,...t])]:(0,a.l7)(Object.create(null),Xe(e),Xe(null!=t?t:{})):t}function dt(e,t){if(!e)return t;if(!t)return e;const i=(0,a.l7)(Object.create(null),e);for(const r in t)i[r]=ht(e[r],t[r]);return i}function _t(){return{app:null,config:{isNativeTag:a.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gt=0;function Ft(e,t){return function(i,r=null){(0,a.mf)(i)||(i=(0,a.l7)({},i)),null==r||(0,a.Kn)(r)||(r=null);const n=_t();const o=new WeakSet;let s=!1;const u=n.app={_uid:gt++,_component:i,_props:r,_container:null,_context:n,_instance:null,version:ar,get config(){return n.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,a.mf)(e.install)?(o.add(e),e.install(u,...t)):(0,a.mf)(e)&&(o.add(e),e(u,...t))),u},mixin(e){return n.mixins.includes(e)||n.mixins.push(e),u},component(e,t){return t?(n.components[e]=t,u):n.components[e]},directive(e,t){return t?(n.directives[e]=t,u):n.directives[e]},mount(a,o,l){if(!s){0;const h=yi(i,r);return h.appContext=n,o&&t?t(h,a):e(h,a,l),s=!0,u._container=a,a.__vue_app__=u,Qi(h.component)||h.component.proxy}},unmount(){s&&(e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return n.provides[e]=t,u},runWithContext(e){mt=u;try{return e()}finally{mt=null}}};return u}}let mt=null;function pt(e,t){if(Ii){let i=Ii.provides;const r=Ii.parent&&Ii.parent.provides;r===i&&(i=Ii.provides=Object.create(r)),i[e]=t}else 0}function bt(e,t,i=!1){const r=Ii||T;if(r||mt){const n=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:mt._context.provides;if(n&&e in n)return n[e];if(arguments.length>1)return i&&(0,a.mf)(t)?t.call(r&&r.proxy):t}else 0}function yt(){return!!(Ii||T||mt)}function wt(e,t,i,n=!1){const o={},s={};(0,a.Nj)(s,Fi,1),e.propsDefaults=Object.create(null),vt(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);i?e.props=n?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function kt(e,t,i,n){const{props:o,attrs:s,vnode:{patchFlag:u}}=e,l=(0,r.IU)(o),[h]=e.propsOptions;let c=!1;if(!(n||u>0)||16&u){let r;vt(e,t,o,s)&&(c=!0);for(const n in l)t&&((0,a.RI)(t,n)||(r=(0,a.rs)(n))!==n&&(0,a.RI)(t,r))||(h?!i||void 0===i[n]&&void 0===i[r]||(o[n]=Dt(h,l,n,void 0,e,!0)):delete o[n]);if(s!==l)for(const e in s)t&&(0,a.RI)(t,e)||(delete s[e],c=!0)}else if(8&u){const i=e.vnode.dynamicProps;for(let r=0;r<i.length;r++){let n=i[r];if(A(e.emitsOptions,n))continue;const u=t[n];if(h)if((0,a.RI)(s,n))u!==s[n]&&(s[n]=u,c=!0);else{const t=(0,a._A)(n);o[t]=Dt(h,l,t,u,e,!1)}else u!==s[n]&&(s[n]=u,c=!0)}}c&&(0,r.X$)(e,"set","$attrs")}function vt(e,t,i,n){const[o,s]=e.propsOptions;let u,l=!1;if(t)for(let r in t){if((0,a.Gg)(r))continue;const h=t[r];let c;o&&(0,a.RI)(o,c=(0,a._A)(r))?s&&s.includes(c)?(u||(u={}))[c]=h:i[c]=h:A(e.emitsOptions,r)||r in n&&h===n[r]||(n[r]=h,l=!0)}if(s){const t=(0,r.IU)(i),n=u||a.kT;for(let r=0;r<s.length;r++){const u=s[r];i[u]=Dt(o,t,u,n[u],e,!(0,a.RI)(n,u))}}return l}function Dt(e,t,i,r,n,o){const s=e[i];if(null!=s){const e=(0,a.RI)(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&!s.skipFactory&&(0,a.mf)(e)){const{propsDefaults:a}=n;i in a?r=a[i]:(Mi(n),r=a[i]=e.call(null,t),Li())}else r=e}s[0]&&(o&&!e?r=!1:!s[1]||""!==r&&r!==(0,a.rs)(i)||(r=!0))}return r}function Et(e,t,i=!1){const r=t.propsCache,n=r.get(e);if(n)return n;const o=e.props,s={},u=[];let l=!1;if(!(0,a.mf)(e)){const r=e=>{l=!0;const[i,r]=Et(e,t,!0);(0,a.l7)(s,i),r&&u.push(...r)};!i&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,a.Kn)(e)&&r.set(e,a.Z6),a.Z6;if((0,a.kJ)(o))for(let c=0;c<o.length;c++){0;const e=(0,a._A)(o[c]);Ct(e)&&(s[e]=a.kT)}else if(o){0;for(const e in o){const t=(0,a._A)(e);if(Ct(t)){const i=o[e],r=s[t]=(0,a.kJ)(i)||(0,a.mf)(i)?{type:i}:(0,a.l7)({},i);if(r){const e=Bt(Boolean,r.type),i=Bt(String,r.type);r[0]=e>-1,r[1]=i<0||e<i,(e>-1||(0,a.RI)(r,"default"))&&u.push(t)}}}}const h=[s,u];return(0,a.Kn)(e)&&r.set(e,h),h}function Ct(e){return"$"!==e[0]}function xt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function jt(e,t){return xt(e)===xt(t)}function Bt(e,t){return(0,a.kJ)(t)?t.findIndex((t=>jt(t,e))):(0,a.mf)(t)&&jt(t,e)?0:-1}const St=e=>"_"===e[0]||"$stable"===e,qt=e=>(0,a.kJ)(e)?e.map(Ci):[Ci(e)],At=(e,t,i)=>{if(t._n)return t;const r=N(((...e)=>qt(t(...e))),i);return r._c=!1,r},Tt=(e,t,i)=>{const r=e._ctx;for(const n in e){if(St(n))continue;const i=e[n];if((0,a.mf)(i))t[n]=At(n,i,r);else if(null!=i){0;const e=qt(i);t[n]=()=>e}}},It=(e,t)=>{const i=qt(t);e.slots.default=()=>i},Rt=(e,t)=>{if(32&e.vnode.shapeFlag){const i=t._;i?(e.slots=(0,r.IU)(t),(0,a.Nj)(t,"_",i)):Tt(t,e.slots={})}else e.slots={},t&&It(e,t);(0,a.Nj)(e.slots,Fi,1)},Pt=(e,t,i)=>{const{vnode:r,slots:n}=e;let o=!0,s=a.kT;if(32&r.shapeFlag){const e=t._;e?i&&1===e?o=!1:((0,a.l7)(n,t),i||1!==e||delete n._):(o=!t.$stable,Tt(t,n)),s=t}else t&&(It(e,t),s={default:1});if(o)for(const a in n)St(a)||null!=s[a]||delete n[a]};function Ot(e,t,i,n,s=!1){if((0,a.kJ)(e))return void e.forEach(((e,r)=>Ot(e,t&&((0,a.kJ)(t)?t[r]:t),i,n,s)));if(De(n)&&!s)return;const u=4&n.shapeFlag?Qi(n.component)||n.component.proxy:n.el,l=s?null:u,{i:h,r:c}=e;const f=t&&t.r,d=h.refs===a.kT?h.refs={}:h.refs,_=h.setupState;if(null!=f&&f!==c&&((0,a.HD)(f)?(d[f]=null,(0,a.RI)(_,f)&&(_[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,a.mf)(c))o(c,h,12,[l,d]);else{const t=(0,a.HD)(c),n=(0,r.dq)(c);if(t||n){const r=()=>{if(e.f){const i=t?(0,a.RI)(_,c)?_[c]:d[c]:c.value;s?(0,a.kJ)(i)&&(0,a.Od)(i,u):(0,a.kJ)(i)?i.includes(u)||i.push(u):t?(d[c]=[u],(0,a.RI)(_,c)&&(_[c]=d[c])):(c.value=[u],e.k&&(d[e.k]=c.value))}else t?(d[c]=l,(0,a.RI)(_,c)&&(_[c]=l)):n&&(c.value=l,e.k&&(d[e.k]=l))};l?(r.id=-1,Mt(r,i)):r()}else 0}}function Nt(){}const Mt=ee;function Lt(e){return Ut(e)}function Ut(e,t){Nt();const i=(0,a.E9)();i.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:u,createText:l,createComment:h,setText:c,setElementText:f,parentNode:d,nextSibling:_,setScopeId:g=a.dG,insertStaticContent:F}=e,m=(e,t,i,r=null,a=null,n=null,o=!1,s=null,u=!!t.dynamicChildren)=>{if(e===t)return;e&&!gi(e,t)&&(r=X(e),G(e,a,n,!0),e=null),-2===t.patchFlag&&(u=!1,t.dynamicChildren=null);const{type:l,ref:h,shapeFlag:c}=t;switch(l){case ii:p(e,t,i,r);break;case ri:b(e,t,i,r);break;case ai:null==e&&y(t,i,r,o);break;case ti:I(e,t,i,r,a,n,o,s,u);break;default:1&c?x(e,t,i,r,a,n,o,s,u):6&c?R(e,t,i,r,a,n,o,s,u):(64&c||128&c)&&l.process(e,t,i,r,a,n,o,s,u,ee)}null!=h&&a&&Ot(h,e&&e.ref,n,t||e,!t)},p=(e,t,i,r)=>{if(null==e)n(t.el=l(t.children),i,r);else{const i=t.el=e.el;t.children!==e.children&&c(i,t.children)}},b=(e,t,i,r)=>{null==e?n(t.el=h(t.children||""),i,r):t.el=e.el},y=(e,t,i,r)=>{[e.el,e.anchor]=F(e.children,t,i,r,e.el,e.anchor)},k=({el:e,anchor:t},i,r)=>{let a;while(e&&e!==t)a=_(e),n(e,i,r),e=a;n(t,i,r)},D=({el:e,anchor:t})=>{let i;while(e&&e!==t)i=_(e),o(e),e=i;o(t)},x=(e,t,i,r,a,n,o,s,u)=>{o=o||"svg"===t.type,null==e?j(t,i,r,a,n,o,s,u):q(e,t,a,n,o,s,u)},j=(e,t,i,r,o,l,h,c)=>{let d,_;const{type:g,props:F,shapeFlag:m,transition:p,dirs:b}=e;if(d=e.el=u(e.type,l,F&&F.is,F),8&m?f(d,e.children):16&m&&S(e.children,d,null,r,o,l&&"foreignObject"!==g,h,c),b&&le(e,null,r,"created"),B(d,e,e.scopeId,h,r),F){for(const t in F)"value"===t||(0,a.Gg)(t)||s(d,t,null,F[t],l,e.children,r,o,Q);"value"in F&&s(d,"value",null,F.value),(_=F.onVnodeBeforeMount)&&Si(_,r,e)}b&&le(e,null,r,"beforeMount");const y=zt(o,p);y&&p.beforeEnter(d),n(d,t,i),((_=F&&F.onVnodeMounted)||y||b)&&Mt((()=>{_&&Si(_,r,e),y&&p.enter(d),b&&le(e,null,r,"mounted")}),o)},B=(e,t,i,r,a)=>{if(i&&g(e,i),r)for(let n=0;n<r.length;n++)g(e,r[n]);if(a){let i=a.subTree;if(t===i){const t=a.vnode;B(e,t,t.scopeId,t.slotScopeIds,a.parent)}}},S=(e,t,i,r,a,n,o,s,u=0)=>{for(let l=u;l<e.length;l++){const u=e[l]=s?xi(e[l]):Ci(e[l]);m(null,u,t,i,r,a,n,o,s)}},q=(e,t,i,r,n,o,u)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:c,dirs:d}=t;h|=16&e.patchFlag;const _=e.props||a.kT,g=t.props||a.kT;let F;i&&Vt(i,!1),(F=g.onVnodeBeforeUpdate)&&Si(F,i,t,e),d&&le(t,e,i,"beforeUpdate"),i&&Vt(i,!0);const m=n&&"foreignObject"!==t.type;if(c?A(e.dynamicChildren,c,l,i,r,m,o):u||U(e,t,l,null,i,r,m,o,!1),h>0){if(16&h)T(l,t,_,g,i,r,n);else if(2&h&&_.class!==g.class&&s(l,"class",null,g.class,n),4&h&&s(l,"style",_.style,g.style,n),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const o=a[t],u=_[o],h=g[o];h===u&&"value"!==o||s(l,o,u,h,n,e.children,i,r,Q)}}1&h&&e.children!==t.children&&f(l,t.children)}else u||null!=c||T(l,t,_,g,i,r,n);((F=g.onVnodeUpdated)||d)&&Mt((()=>{F&&Si(F,i,t,e),d&&le(t,e,i,"updated")}),r)},A=(e,t,i,r,a,n,o)=>{for(let s=0;s<t.length;s++){const u=e[s],l=t[s],h=u.el&&(u.type===ti||!gi(u,l)||70&u.shapeFlag)?d(u.el):i;m(u,l,h,null,r,a,n,o,!0)}},T=(e,t,i,r,n,o,u)=>{if(i!==r){if(i!==a.kT)for(const l in i)(0,a.Gg)(l)||l in r||s(e,l,i[l],null,u,t.children,n,o,Q);for(const l in r){if((0,a.Gg)(l))continue;const h=r[l],c=i[l];h!==c&&"value"!==l&&s(e,l,c,h,u,t.children,n,o,Q)}"value"in r&&s(e,"value",i.value,r.value)}},I=(e,t,i,r,a,o,s,u,h)=>{const c=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:_,slotScopeIds:g}=t;g&&(u=u?u.concat(g):g),null==e?(n(c,i,r),n(f,i,r),S(t.children,i,f,a,o,s,u,h)):d>0&&64&d&&_&&e.dynamicChildren?(A(e.dynamicChildren,_,i,a,o,s,u),(null!=t.key||a&&t===a.subTree)&&Wt(e,t,!0)):U(e,t,i,f,a,o,s,u,h)},R=(e,t,i,r,a,n,o,s,u)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?a.ctx.activate(t,i,r,o,u):P(t,i,r,a,n,o,u):O(e,t,u)},P=(e,t,i,r,a,n,o)=>{const s=e.component=Ti(e,r,a);if(Ee(e)&&(s.ctx.renderer=ee),Hi(s),s.asyncDep){if(a&&a.registerDep(s,N),!e.el){const e=s.subTree=yi(ri);b(null,e,t,i)}}else N(s,e,t,i,a,n,o)},O=(e,t,i)=>{const r=t.component=e.component;if(V(e,t,i)){if(r.asyncDep&&!r.asyncResolved)return void L(r,t,i);r.next=t,v(r.update),r.update()}else t.el=e.el,r.vnode=t},N=(e,t,i,n,o,s,u)=>{const l=()=>{if(e.isMounted){let t,{next:i,bu:r,u:n,parent:l,vnode:h}=e,c=i;0,Vt(e,!1),i?(i.el=h.el,L(e,i,u)):i=h,r&&(0,a.ir)(r),(t=i.props&&i.props.onVnodeBeforeUpdate)&&Si(t,l,i,h),Vt(e,!0);const f=M(e);0;const _=e.subTree;e.subTree=f,m(_,f,d(_.el),X(_),e,o,s),i.el=f.el,null===c&&W(e,f.el),n&&Mt(n,o),(t=i.props&&i.props.onVnodeUpdated)&&Mt((()=>Si(t,l,i,h)),o)}else{let r;const{el:u,props:l}=t,{bm:h,m:c,parent:f}=e,d=De(t);if(Vt(e,!1),h&&(0,a.ir)(h),!d&&(r=l&&l.onVnodeBeforeMount)&&Si(r,f,t),Vt(e,!0),u&&ie){const i=()=>{e.subTree=M(e),ie(u,e.subTree,e,o,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&i())):i()}else{0;const r=e.subTree=M(e);0,m(null,r,i,n,e,o,s),t.el=r.el}if(c&&Mt(c,o),!d&&(r=l&&l.onVnodeMounted)){const e=t;Mt((()=>Si(r,f,e)),o)}(256&t.shapeFlag||f&&De(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&Mt(e.a,o),e.isMounted=!0,t=i=n=null}},h=e.effect=new r.qq(l,(()=>w(c)),e.scope),c=e.update=()=>h.run();c.id=e.uid,Vt(e,!0),c()},L=(e,t,i)=>{t.component=e;const a=e.vnode.props;e.vnode=t,e.next=null,kt(e,t.props,a,i),Pt(e,t.children,i),(0,r.Jd)(),E(),(0,r.lk)()},U=(e,t,i,r,a,n,o,s,u=!1)=>{const l=e&&e.children,h=e?e.shapeFlag:0,c=t.children,{patchFlag:d,shapeFlag:_}=t;if(d>0){if(128&d)return void H(l,c,i,r,a,n,o,s,u);if(256&d)return void z(l,c,i,r,a,n,o,s,u)}8&_?(16&h&&Q(l,a,n),c!==l&&f(i,c)):16&h?16&_?H(l,c,i,r,a,n,o,s,u):Q(l,a,n,!0):(8&h&&f(i,""),16&_&&S(c,i,r,a,n,o,s,u))},z=(e,t,i,r,n,o,s,u,l)=>{e=e||a.Z6,t=t||a.Z6;const h=e.length,c=t.length,f=Math.min(h,c);let d;for(d=0;d<f;d++){const r=t[d]=l?xi(t[d]):Ci(t[d]);m(e[d],r,i,null,n,o,s,u,l)}h>c?Q(e,n,o,!0,!1,f):S(t,i,r,n,o,s,u,l,f)},H=(e,t,i,r,n,o,s,u,l)=>{let h=0;const c=t.length;let f=e.length-1,d=c-1;while(h<=f&&h<=d){const r=e[h],a=t[h]=l?xi(t[h]):Ci(t[h]);if(!gi(r,a))break;m(r,a,i,null,n,o,s,u,l),h++}while(h<=f&&h<=d){const r=e[f],a=t[d]=l?xi(t[d]):Ci(t[d]);if(!gi(r,a))break;m(r,a,i,null,n,o,s,u,l),f--,d--}if(h>f){if(h<=d){const e=d+1,a=e<c?t[e].el:r;while(h<=d)m(null,t[h]=l?xi(t[h]):Ci(t[h]),i,a,n,o,s,u,l),h++}}else if(h>d)while(h<=f)G(e[h],n,o,!0),h++;else{const _=h,g=h,F=new Map;for(h=g;h<=d;h++){const e=t[h]=l?xi(t[h]):Ci(t[h]);null!=e.key&&F.set(e.key,h)}let p,b=0;const y=d-g+1;let w=!1,k=0;const v=new Array(y);for(h=0;h<y;h++)v[h]=0;for(h=_;h<=f;h++){const r=e[h];if(b>=y){G(r,n,o,!0);continue}let a;if(null!=r.key)a=F.get(r.key);else for(p=g;p<=d;p++)if(0===v[p-g]&&gi(r,t[p])){a=p;break}void 0===a?G(r,n,o,!0):(v[a-g]=h+1,a>=k?k=a:w=!0,m(r,t[a],i,null,n,o,s,u,l),b++)}const D=w?Ht(v):a.Z6;for(p=D.length-1,h=y-1;h>=0;h--){const e=g+h,a=t[e],f=e+1<c?t[e+1].el:r;0===v[h]?m(null,a,i,f,n,o,s,u,l):w&&(p<0||h!==D[p]?$(a,i,f,2):p--)}}},$=(e,t,i,r,a=null)=>{const{el:o,type:s,transition:u,children:l,shapeFlag:h}=e;if(6&h)return void $(e.component.subTree,t,i,r);if(128&h)return void e.suspense.move(t,i,r);if(64&h)return void s.move(e,t,i,ee);if(s===ti){n(o,t,i);for(let e=0;e<l.length;e++)$(l[e],t,i,r);return void n(e.anchor,t,i)}if(s===ai)return void k(e,t,i);const c=2!==r&&1&h&&u;if(c)if(0===r)u.beforeEnter(o),n(o,t,i),Mt((()=>u.enter(o)),a);else{const{leave:e,delayLeave:r,afterLeave:a}=u,s=()=>n(o,t,i),l=()=>{e(o,(()=>{s(),a&&a()}))};r?r(o,s,l):l()}else n(o,t,i)},G=(e,t,i,r=!1,a=!1)=>{const{type:n,props:o,ref:s,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:c,dirs:f}=e;if(null!=s&&Ot(s,null,i,e,!0),256&h)return void t.ctx.deactivate(e);const d=1&h&&f,_=!De(e);let g;if(_&&(g=o&&o.onVnodeBeforeUnmount)&&Si(g,t,e),6&h)J(e.component,i,r);else{if(128&h)return void e.suspense.unmount(i,r);d&&le(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,i,a,ee,r):l&&(n!==ti||c>0&&64&c)?Q(l,t,i,!1,!0):(n===ti&&384&c||!a&&16&h)&&Q(u,t,i),r&&K(e)}(_&&(g=o&&o.onVnodeUnmounted)||d)&&Mt((()=>{g&&Si(g,t,e),d&&le(e,null,t,"unmounted")}),i)},K=e=>{const{type:t,el:i,anchor:r,transition:a}=e;if(t===ti)return void Y(i,r);if(t===ai)return void D(e);const n=()=>{o(i),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(1&e.shapeFlag&&a&&!a.persisted){const{leave:t,delayLeave:r}=a,o=()=>t(i,n);r?r(e.el,n,o):o()}else n()},Y=(e,t)=>{let i;while(e!==t)i=_(e),o(e),e=i;o(t)},J=(e,t,i)=>{const{bum:r,scope:n,update:o,subTree:s,um:u}=e;r&&(0,a.ir)(r),n.stop(),o&&(o.active=!1,G(s,e,t,i)),u&&Mt(u,t),Mt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,i,r=!1,a=!1,n=0)=>{for(let o=n;o<e.length;o++)G(e[o],t,i,r,a)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():_(e.anchor||e.el),Z=(e,t,i)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,i),E(),C(),t._vnode=e},ee={p:m,um:G,m:$,r:K,mt:P,mc:S,pc:U,pbc:A,n:X,o:e};let te,ie;return t&&([te,ie]=t(ee)),{render:Z,hydrate:te,createApp:Ft(Z,te)}}function Vt({effect:e,update:t},i){e.allowRecurse=t.allowRecurse=i}function zt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wt(e,t,i=!1){const r=e.children,n=t.children;if((0,a.kJ)(r)&&(0,a.kJ)(n))for(let a=0;a<r.length;a++){const e=r[a];let t=n[a];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=n[a]=xi(n[a]),t.el=e.el),i||Wt(e,t)),t.type===ii&&(t.el=e.el)}}function Ht(e){const t=e.slice(),i=[0];let r,a,n,o,s;const u=e.length;for(r=0;r<u;r++){const u=e[r];if(0!==u){if(a=i[i.length-1],e[a]<u){t[r]=a,i.push(r);continue}n=0,o=i.length-1;while(n<o)s=n+o>>1,e[i[s]]<u?n=s+1:o=s;u<e[i[n]]&&(n>0&&(t[r]=i[n-1]),i[n]=r)}}n=i.length,o=i[n-1];while(n-- >0)i[n]=o,o=t[o];return i}const $t=e=>e.__isTeleport,Gt=e=>e&&(e.disabled||""===e.disabled),Kt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Yt=(e,t)=>{const i=e&&e.to;if((0,a.HD)(i)){if(t){const e=t(i);return e}return null}return i},Jt={__isTeleport:!0,process(e,t,i,r,a,n,o,s,u,l){const{mc:h,pc:c,pbc:f,o:{insert:d,querySelector:_,createText:g,createComment:F}}=l,m=Gt(t.props);let{shapeFlag:p,children:b,dynamicChildren:y}=t;if(null==e){const e=t.el=g(""),l=t.anchor=g("");d(e,i,r),d(l,i,r);const c=t.target=Yt(t.props,_),f=t.targetAnchor=g("");c&&(d(f,c),o=o||Kt(c));const F=(e,t)=>{16&p&&h(b,e,t,a,n,o,s,u)};m?F(i,l):c&&F(c,f)}else{t.el=e.el;const r=t.anchor=e.anchor,h=t.target=e.target,d=t.targetAnchor=e.targetAnchor,g=Gt(e.props),F=g?i:h,p=g?r:d;if(o=o||Kt(h),y?(f(e.dynamicChildren,y,F,a,n,o,s),Wt(e,t,!0)):u||c(e,t,F,p,a,n,o,s,!1),m)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Qt(t,i,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Yt(t.props,_);e&&Qt(t,e,null,l,0)}else g&&Qt(t,h,d,l,1)}ei(t)},remove(e,t,i,r,{um:a,o:{remove:n}},o){const{shapeFlag:s,children:u,anchor:l,targetAnchor:h,target:c,props:f}=e;if(c&&n(h),o&&n(l),16&s){const e=o||!Gt(f);for(let r=0;r<u.length;r++){const n=u[r];a(n,t,i,e,!!n.dynamicChildren)}}},move:Qt,hydrate:Xt};function Qt(e,t,i,{o:{insert:r},m:a},n=2){0===n&&r(e.targetAnchor,t,i);const{el:o,anchor:s,shapeFlag:u,children:l,props:h}=e,c=2===n;if(c&&r(o,t,i),(!c||Gt(h))&&16&u)for(let f=0;f<l.length;f++)a(l[f],t,i,2);c&&r(s,t,i)}function Xt(e,t,i,r,a,n,{o:{nextSibling:o,parentNode:s,querySelector:u}},l){const h=t.target=Yt(t.props,u);if(h){const u=h._lpa||h.firstChild;if(16&t.shapeFlag)if(Gt(t.props))t.anchor=l(o(e),t,s(e),i,r,a,n),t.targetAnchor=u;else{t.anchor=o(e);let s=u;while(s)if(s=o(s),s&&8===s.nodeType&&"teleport anchor"===s.data){t.targetAnchor=s,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(u,t,h,i,r,a,n)}ei(t)}return t.anchor&&o(t.anchor)}const Zt=Jt;function ei(e){const t=e.ctx;if(t&&t.ut){let i=e.children[0].el;while(i&&i!==e.targetAnchor)1===i.nodeType&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}const ti=Symbol.for("v-fgt"),ii=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),ai=Symbol.for("v-stc"),ni=[];let oi=null;function si(e=!1){ni.push(oi=e?null:[])}function ui(){ni.pop(),oi=ni[ni.length-1]||null}let li=1;function hi(e){li+=e}function ci(e){return e.dynamicChildren=li>0?oi||a.Z6:null,ui(),li>0&&oi&&oi.push(e),e}function fi(e,t,i,r,a,n){return ci(bi(e,t,i,r,a,n,!0))}function di(e,t,i,r,a){return ci(yi(e,t,i,r,a,!0))}function _i(e){return!!e&&!0===e.__v_isVNode}function gi(e,t){return e.type===t.type&&e.key===t.key}const Fi="__vInternal",mi=({key:e})=>null!=e?e:null,pi=({ref:e,ref_key:t,ref_for:i})=>("number"===typeof e&&(e=""+e),null!=e?(0,a.HD)(e)||(0,r.dq)(e)||(0,a.mf)(e)?{i:T,r:e,k:t,f:!!i}:e:null);function bi(e,t=null,i=null,r=0,n=null,o=(e===ti?0:1),s=!1,u=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mi(t),ref:t&&pi(t),scopeId:I,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:T};return u?(ji(l,i),128&o&&e.normalize(l)):i&&(l.shapeFlag|=(0,a.HD)(i)?8:16),li>0&&!s&&oi&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&oi.push(l),l}const yi=wi;function wi(e,t=null,i=null,n=0,o=null,s=!1){if(e&&e!==K||(e=ri),_i(e)){const r=vi(e,t,!0);return i&&ji(r,i),li>0&&!s&&oi&&(6&r.shapeFlag?oi[oi.indexOf(e)]=r:oi.push(r)),r.patchFlag|=-2,r}if(Zi(e)&&(e=e.__vccOpts),t){t=ki(t);let{class:e,style:i}=t;e&&!(0,a.HD)(e)&&(t.class=(0,a.C_)(e)),(0,a.Kn)(i)&&((0,r.X3)(i)&&!(0,a.kJ)(i)&&(i=(0,a.l7)({},i)),t.style=(0,a.j5)(i))}const u=(0,a.HD)(e)?1:Z(e)?128:$t(e)?64:(0,a.Kn)(e)?4:(0,a.mf)(e)?2:0;return bi(e,t,i,n,o,u,s,!0)}function ki(e){return e?(0,r.X3)(e)||Fi in e?(0,a.l7)({},e):e:null}function vi(e,t,i=!1){const{props:r,ref:n,patchFlag:o,children:s}=e,u=t?Bi(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&mi(u),ref:t&&t.ref?i&&n?(0,a.kJ)(n)?n.concat(pi(t)):[n,pi(t)]:pi(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ti?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vi(e.ssContent),ssFallback:e.ssFallback&&vi(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function Di(e=" ",t=0){return yi(ii,null,e,t)}function Ei(e="",t=!1){return t?(si(),di(ri,null,e)):yi(ri,null,e)}function Ci(e){return null==e||"boolean"===typeof e?yi(ri):(0,a.kJ)(e)?yi(ti,null,e.slice()):"object"===typeof e?xi(e):yi(ii,null,String(e))}function xi(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:vi(e)}function ji(e,t){let i=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,a.kJ)(t))i=16;else if("object"===typeof t){if(65&r){const i=t.default;return void(i&&(i._c&&(i._d=!1),ji(e,i()),i._c&&(i._d=!0)))}{i=32;const r=t._;r||Fi in t?3===r&&T&&(1===T.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=T}}else(0,a.mf)(t)?(t={default:t,_ctx:T},i=32):(t=String(t),64&r?(i=16,t=[Di(t)]):i=8);e.children=t,e.shapeFlag|=i}function Bi(...e){const t={};for(let i=0;i<e.length;i++){const r=e[i];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,a.C_)([t.class,r.class]));else if("style"===e)t.style=(0,a.j5)([t.style,r.style]);else if((0,a.F7)(e)){const i=t[e],n=r[e];!n||i===n||(0,a.kJ)(i)&&i.includes(n)||(t[e]=i?[].concat(i,n):n)}else""!==e&&(t[e]=r[e])}return t}function Si(e,t,i,r=null){s(e,t,7,[i,r])}const qi=_t();let Ai=0;function Ti(e,t,i){const n=e.type,o=(t?t.appContext:e.appContext)||qi,s={uid:Ai++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Et(n,o),emitsOptions:q(n,o),emit:null,emitted:null,propsDefaults:a.kT,inheritAttrs:n.inheritAttrs,ctx:a.kT,data:a.kT,props:a.kT,attrs:a.kT,slots:a.kT,refs:a.kT,setupState:a.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=S.bind(null,s),e.ce&&e.ce(s),s}let Ii=null;const Ri=()=>Ii||T;let Pi,Oi,Ni="__VUE_INSTANCE_SETTERS__";(Oi=(0,a.E9)()[Ni])||(Oi=(0,a.E9)()[Ni]=[]),Oi.push((e=>Ii=e)),Pi=e=>{Oi.length>1?Oi.forEach((t=>t(e))):Oi[0](e)};const Mi=e=>{Pi(e),e.scope.on()},Li=()=>{Ii&&Ii.scope.off(),Pi(null)};function Ui(e){return 4&e.vnode.shapeFlag}let Vi,zi,Wi=!1;function Hi(e,t=!1){Wi=t;const{props:i,children:r}=e.vnode,a=Ui(e);wt(e,i,a,t),Rt(e,r);const n=a?$i(e,t):void 0;return Wi=!1,n}function $i(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Qe));const{setup:n}=i;if(n){const i=e.setupContext=n.length>1?Ji(e):null;Mi(e),(0,r.Jd)();const s=o(n,e,0,[e.props,i]);if((0,r.lk)(),Li(),(0,a.tI)(s)){if(s.then(Li,Li),t)return s.then((i=>{Gi(e,i,t)})).catch((t=>{u(t,e,0)}));e.asyncDep=s}else Gi(e,s,t)}else Ki(e,t)}function Gi(e,t,i){(0,a.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,a.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Ki(e,i)}function Ki(e,t,i){const n=e.type;if(!e.render){if(!t&&Vi&&!n.render){const t=n.template||at(e).template;if(t){0;const{isCustomElement:i,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:s}=n,u=(0,a.l7)((0,a.l7)({isCustomElement:i,delimiters:o},r),s);n.render=Vi(t,u)}}e.render=n.render||a.dG,zi&&zi(e)}Mi(e),(0,r.Jd)();try{et(e)}finally{(0,r.lk)(),Li()}}function Yi(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,i){return(0,r.j)(e,"get","$attrs"),t[i]}}))}function Ji(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Yi(e)},slots:e.slots,emit:e.emit,expose:t}}function Qi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,i){return i in t?t[i]:i in Ye?Ye[i](e):void 0},has(e,t){return t in e||t in Ye}}))}function Xi(e,t=!0){return(0,a.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Zi(e){return(0,a.mf)(e)&&"__vccOpts"in e}const er=(e,t)=>(0,r.Fl)(e,t,Wi);function tr(e,t,i){const r=arguments.length;return 2===r?(0,a.Kn)(t)&&!(0,a.kJ)(t)?_i(t)?yi(e,null,[t]):yi(e,t):yi(e,null,t):(r>3?i=Array.prototype.slice.call(arguments,2):3===r&&_i(i)&&(i=[i]),yi(e,t,i))}const ir=Symbol.for("v-scx"),rr=()=>{{const e=bt(ir);return e}};const ar="3.3.8"},9242:function(e,t,i){"use strict";i.d(t,{D2:function(){return ke},F8:function(){return A},W3:function(){return ue},iM:function(){return ye},nr:function(){return me},ri:function(){return Ce},uT:function(){return d}});i(560);var r=i(3396),a=i(7139),n=i(4870);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,u=s&&s.createElement("template"),l={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,r)=>{const a=t?s.createElementNS(o,e):s.createElement(e,i?{is:i}:void 0);return"select"===e&&r&&null!=r.multiple&&a.setAttribute("multiple",r.multiple),a},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,r,a,n){const o=i?i.previousSibling:t.lastChild;if(a&&(a===n||a.nextSibling)){while(1)if(t.insertBefore(a.cloneNode(!0),i),a===n||!(a=a.nextSibling))break}else{u.innerHTML=r?`<svg>${e}</svg>`:e;const a=u.content;if(r){const e=a.firstChild;while(e.firstChild)a.appendChild(e.firstChild);a.removeChild(e)}t.insertBefore(a,i)}return[o?o.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},h="transition",c="animation",f=Symbol("_vtc"),d=(e,{slots:t})=>(0,r.h)(r.P$,p(e),t);d.displayName="Transition";const _={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=d.props=(0,a.l7)({},r.nJ,_),F=(e,t=[])=>{(0,a.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},m=e=>!!e&&((0,a.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function p(e){const t={};for(const a in e)a in _||(t[a]=e[a]);if(!1===e.css)return t;const{name:i="v",type:r,duration:n,enterFromClass:o=`${i}-enter-from`,enterActiveClass:s=`${i}-enter-active`,enterToClass:u=`${i}-enter-to`,appearFromClass:l=o,appearActiveClass:h=s,appearToClass:c=u,leaveFromClass:f=`${i}-leave-from`,leaveActiveClass:d=`${i}-leave-active`,leaveToClass:g=`${i}-leave-to`}=e,p=b(n),y=p&&p[0],D=p&&p[1],{onBeforeEnter:C,onEnter:x,onEnterCancelled:j,onLeave:S,onLeaveCancelled:q,onBeforeAppear:A=C,onAppear:T=x,onAppearCancelled:I=j}=t,R=(e,t,i)=>{k(e,t?c:u),k(e,t?h:s),i&&i()},P=(e,t)=>{e._isLeaving=!1,k(e,f),k(e,g),k(e,d),t&&t()},O=e=>(t,i)=>{const a=e?T:x,n=()=>R(t,e,i);F(a,[t,n]),v((()=>{k(t,e?l:o),w(t,e?c:u),m(a)||E(t,r,y,n)}))};return(0,a.l7)(t,{onBeforeEnter(e){F(C,[e]),w(e,o),w(e,s)},onBeforeAppear(e){F(A,[e]),w(e,l),w(e,h)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;const i=()=>P(e,t);w(e,f),B(),w(e,d),v((()=>{e._isLeaving&&(k(e,f),w(e,g),m(S)||E(e,r,D,i))})),F(S,[e,i])},onEnterCancelled(e){R(e,!1),F(j,[e])},onAppearCancelled(e){R(e,!0),F(I,[e])},onLeaveCancelled(e){P(e),F(q,[e])}})}function b(e){if(null==e)return null;if((0,a.Kn)(e))return[y(e.enter),y(e.leave)];{const t=y(e);return[t,t]}}function y(e){const t=(0,a.He)(e);return t}function w(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function k(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const i=e[f];i&&(i.delete(t),i.size||(e[f]=void 0))}function v(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let D=0;function E(e,t,i,r){const a=e._endId=++D,n=()=>{a===e._endId&&r()};if(i)return setTimeout(n,i);const{type:o,timeout:s,propCount:u}=C(e,t);if(!o)return r();const l=o+"end";let h=0;const c=()=>{e.removeEventListener(l,f),n()},f=t=>{t.target===e&&++h>=u&&c()};setTimeout((()=>{h<u&&c()}),s+1),e.addEventListener(l,f)}function C(e,t){const i=window.getComputedStyle(e),r=e=>(i[e]||"").split(", "),a=r(`${h}Delay`),n=r(`${h}Duration`),o=x(a,n),s=r(`${c}Delay`),u=r(`${c}Duration`),l=x(s,u);let f=null,d=0,_=0;t===h?o>0&&(f=h,d=o,_=n.length):t===c?l>0&&(f=c,d=l,_=u.length):(d=Math.max(o,l),f=d>0?o>l?h:c:null,_=f?f===h?n.length:u.length:0);const g=f===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:f,timeout:d,propCount:_,hasTransform:g}}function x(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,i)=>j(t)+j(e[i]))))}function j(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function B(){return document.body.offsetHeight}function S(e,t,i){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const q=Symbol("_vod"),A={beforeMount(e,{value:t},{transition:i}){e[q]="none"===e.style.display?"":e.style.display,i&&t?i.beforeEnter(e):T(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:r}){!t!==!i&&(r?t?(r.beforeEnter(e),T(e,!0),r.enter(e)):r.leave(e,(()=>{T(e,!1)})):T(e,t))},beforeUnmount(e,{value:t}){T(e,t)}};function T(e,t){e.style.display=t?e[q]:"none"}function I(e,t,i){const r=e.style,n=(0,a.HD)(i);if(i&&!n){if(t&&!(0,a.HD)(t))for(const e in t)null==i[e]&&P(r,e,"");for(const e in i)P(r,e,i[e])}else{const a=r.display;n?t!==i&&(r.cssText=i):t&&e.removeAttribute("style"),q in e&&(r.display=a)}}const R=/\s*!important$/;function P(e,t,i){if((0,a.kJ)(i))i.forEach((i=>P(e,t,i)));else if(null==i&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const r=M(e,t);R.test(i)?e.setProperty((0,a.rs)(r),i.replace(R,""),"important"):e[r]=i}}const O=["Webkit","Moz","ms"],N={};function M(e,t){const i=N[t];if(i)return i;let r=(0,a._A)(t);if("filter"!==r&&r in e)return N[t]=r;r=(0,a.kC)(r);for(let a=0;a<O.length;a++){const i=O[a]+r;if(i in e)return N[t]=i}return t}const L="http://www.w3.org/1999/xlink";function U(e,t,i,r,n){if(r&&t.startsWith("xlink:"))null==i?e.removeAttributeNS(L,t.slice(6,t.length)):e.setAttributeNS(L,t,i);else{const r=(0,a.Pq)(t);null==i||r&&!(0,a.yA)(i)?e.removeAttribute(t):e.setAttribute(t,r?"":i)}}function V(e,t,i,r,n,o,s){if("innerHTML"===t||"textContent"===t)return r&&s(r,n,o),void(e[t]=null==i?"":i);const u=e.tagName;if("value"===t&&"PROGRESS"!==u&&!u.includes("-")){e._value=i;const r="OPTION"===u?e.getAttribute("value"):e.value,a=null==i?"":i;return r!==a&&(e.value=a),void(null==i&&e.removeAttribute(t))}let l=!1;if(""===i||null==i){const r=typeof e[t];"boolean"===r?i=(0,a.yA)(i):null==i&&"string"===r?(i="",l=!0):"number"===r&&(i=0,l=!0)}try{e[t]=i}catch(h){0}l&&e.removeAttribute(t)}function z(e,t,i,r){e.addEventListener(t,i,r)}function W(e,t,i,r){e.removeEventListener(t,i,r)}const H=Symbol("_vei");function $(e,t,i,r,a=null){const n=e[H]||(e[H]={}),o=n[t];if(r&&o)o.value=r;else{const[i,s]=K(t);if(r){const o=n[t]=X(r,a);z(e,i,o,s)}else o&&(W(e,i,o,s),n[t]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function K(e){let t;if(G.test(e)){let i;t={};while(i=e.match(G))e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}const i=":"===e[2]?e.slice(3):(0,a.rs)(e.slice(2));return[i,t]}let Y=0;const J=Promise.resolve(),Q=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function X(e,t){const i=e=>{if(e._vts){if(e._vts<=i.attached)return}else e._vts=Date.now();(0,r.$d)(Z(e,i.value),t,5,[e])};return i.value=e,i.attached=Q(),i}function Z(e,t){if((0,a.kJ)(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ee=/^on[a-z]/,te=(e,t,i,r,n=!1,o,s,u,l)=>{"class"===t?S(e,r,n):"style"===t?I(e,i,r):(0,a.F7)(t)?(0,a.tR)(t)||$(e,t,i,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ie(e,t,r,n))?V(e,t,r,o,s,u,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),U(e,t,r,n))};function ie(e,t,i,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&ee.test(t)&&(0,a.mf)(i)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!ee.test(t)||!(0,a.HD)(i))&&t in e))))}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const re=new WeakMap,ae=new WeakMap,ne=Symbol("_moveCb"),oe=Symbol("_enterCb"),se={name:"TransitionGroup",props:(0,a.l7)({},g,{tag:String,moveClass:String}),setup(e,{slots:t}){const i=(0,r.FN)(),a=(0,r.Y8)();let o,s;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,i.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(ce);B(),r.forEach((e=>{const i=e.el,r=i.style;w(i,t),r.transform=r.webkitTransform=r.transitionDuration="";const a=i[ne]=e=>{e&&e.target!==i||e&&!/transform$/.test(e.propertyName)||(i.removeEventListener("transitionend",a),i[ne]=null,k(i,t))};i.addEventListener("transitionend",a)}))})),()=>{const u=(0,n.IU)(e),l=p(u);let h=u.tag||r.HY;o=s,s=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,l,a,i))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,l,a,i)),re.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(h,null,s)}}};se.props;const ue=se;function le(e){const t=e.el;t[ne]&&t[ne](),t[oe]&&t[oe]()}function he(e){ae.set(e,e.el.getBoundingClientRect())}function ce(e){const t=re.get(e),i=ae.get(e),r=t.left-i.left,a=t.top-i.top;if(r||a){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${a}px)`,t.transitionDuration="0s",e}}function fe(e,t,i){const r=e.cloneNode(),a=e[f];a&&a.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),i.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const n=1===t.nodeType?t:t.parentNode;n.appendChild(r);const{hasTransform:o}=C(r);return n.removeChild(r),o}const de=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,a.kJ)(t)?e=>(0,a.ir)(t,e):t};function _e(e){e.target.composing=!0}function ge(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Fe=Symbol("_assign"),me={created(e,{modifiers:{lazy:t,trim:i,number:r}},n){e[Fe]=de(n);const o=r||n.props&&"number"===n.props.type;z(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;i&&(r=r.trim()),o&&(r=(0,a.h5)(r)),e[Fe](r)})),i&&z(e,"change",(()=>{e.value=e.value.trim()})),t||(z(e,"compositionstart",_e),z(e,"compositionend",ge),z(e,"change",ge))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:i,trim:r,number:n}},o){if(e[Fe]=de(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(i)return;if(r&&e.value.trim()===t)return;if((n||"number"===e.type)&&(0,a.h5)(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}};const pe=["ctrl","shift","alt","meta"],be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>pe.some((i=>e[`${i}Key`]&&!t.includes(i)))},ye=(e,t)=>(i,...r)=>{for(let e=0;e<t.length;e++){const r=be[t[e]];if(r&&r(i,t))return}return e(i,...r)},we={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ke=(e,t)=>i=>{if(!("key"in i))return;const r=(0,a.rs)(i.key);return t.some((e=>e===r||we[e]===r))?e(i):void 0},ve=(0,a.l7)({patchProp:te},l);let De;function Ee(){return De||(De=(0,r.Us)(ve))}const Ce=(...e)=>{const t=Ee().createApp(...e);const{mount:i}=t;return t.mount=e=>{const r=xe(e);if(!r)return;const n=t._component;(0,a.mf)(n)||n.render||n.template||(n.template=r.innerHTML),r.innerHTML="";const o=i(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function xe(e){if((0,a.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,i){"use strict";i.d(t,{C_:function(){return X},DM:function(){return m},E9:function(){return W},F7:function(){return l},Gg:function(){return S},HD:function(){return w},He:function(){return V},Kj:function(){return b},Kn:function(){return v},NO:function(){return s},Nj:function(){return L},Od:function(){return f},PO:function(){return j},Pq:function(){return ee},RI:function(){return _},S0:function(){return B},W7:function(){return x},WV:function(){return re},Z6:function(){return n},_A:function(){return T},_N:function(){return F},aU:function(){return N},dG:function(){return o},fY:function(){return r},h5:function(){return U},hR:function(){return O},hq:function(){return ae},ir:function(){return M},j5:function(){return G},kC:function(){return P},kJ:function(){return g},kT:function(){return a},l7:function(){return c},mf:function(){return y},rs:function(){return R},tI:function(){return D},tR:function(){return h},yA:function(){return te},yk:function(){return k},yl:function(){return $},zw:function(){return ne}});i(560);function r(e,t){const i=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)i[r[a]]=!0;return t?e=>!!i[e.toLowerCase()]:e=>!!i[e]}const a={},n=[],o=()=>{},s=()=>!1,u=/^on[^a-z]/,l=e=>u.test(e),h=e=>e.startsWith("onUpdate:"),c=Object.assign,f=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},d=Object.prototype.hasOwnProperty,_=(e,t)=>d.call(e,t),g=Array.isArray,F=e=>"[object Map]"===C(e),m=e=>"[object Set]"===C(e),p=e=>"[object Date]"===C(e),b=e=>"[object RegExp]"===C(e),y=e=>"function"===typeof e,w=e=>"string"===typeof e,k=e=>"symbol"===typeof e,v=e=>null!==e&&"object"===typeof e,D=e=>(v(e)||y(e))&&y(e.then)&&y(e.catch),E=Object.prototype.toString,C=e=>E.call(e),x=e=>C(e).slice(8,-1),j=e=>"[object Object]"===C(e),B=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,S=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return i=>{const r=t[i];return r||(t[i]=e(i))}},A=/-(\w)/g,T=q((e=>e.replace(A,((e,t)=>t?t.toUpperCase():"")))),I=/\B([A-Z])/g,R=q((e=>e.replace(I,"-$1").toLowerCase())),P=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),O=q((e=>{const t=e?`on${P(e)}`:"";return t})),N=(e,t)=>!Object.is(e,t),M=(e,t)=>{for(let i=0;i<e.length;i++)e[i](t)},L=(e,t,i)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:i})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let z;const W=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",$=r(H);function G(e){if(g(e)){const t={};for(let i=0;i<e.length;i++){const r=e[i],a=w(r)?Q(r):G(r);if(a)for(const e in a)t[e]=a[e]}return t}if(w(e)||v(e))return e}const K=/;(?![^(]*\))/g,Y=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(J,"").split(K).forEach((e=>{if(e){const i=e.split(Y);i.length>1&&(t[i[0].trim()]=i[1].trim())}})),t}function X(e){let t="";if(w(e))t=e;else if(g(e))for(let i=0;i<e.length;i++){const r=X(e[i]);r&&(t+=r+" ")}else if(v(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ie(e,t){if(e.length!==t.length)return!1;let i=!0;for(let r=0;i&&r<e.length;r++)i=re(e[r],t[r]);return i}function re(e,t){if(e===t)return!0;let i=p(e),r=p(t);if(i||r)return!(!i||!r)&&e.getTime()===t.getTime();if(i=k(e),r=k(t),i||r)return e===t;if(i=g(e),r=g(t),i||r)return!(!i||!r)&&ie(e,t);if(i=v(e),r=v(t),i||r){if(!i||!r)return!1;const a=Object.keys(e).length,n=Object.keys(t).length;if(a!==n)return!1;for(const i in e){const r=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(r&&!a||!r&&a||!re(e[i],t[i]))return!1}}return String(e)===String(t)}function ae(e,t){return e.findIndex((e=>re(e,t)))}const ne=e=>w(e)?e:null==e?"":g(e)||v(e)&&(e.toString===E||!y(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):F(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,i])=>(e[`${t} =>`]=i,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()]}:!v(t)||g(t)||j(t)?t:String(t)},7471:function(e,t,i){"use strict";i.d(t,{xd:function(){return te},cW:function(){return Ye}});var r="emoji-mart";const a=JSON;var n="undefined"!==typeof window&&"localStorage"in window;let o,s;function u(e){e||(e={}),o=e.getter,s=e.setter}function l(e){r=e}function h(e){for(let t in e){let i=e[t];c(t,i)}}function c(e,t){if(s)s(e,t);else{if(!n)return;try{window.localStorage[`${r}.${e}`]=a.stringify(t)}catch(i){}}}function f(e){if(o)return o(e);if(n){try{var t=window.localStorage[`${r}.${e}`]}catch(i){return}return t?JSON.parse(t):void 0}}var d={update:h,set:c,get:f,setNamespace:l,setHandlers:u};i(560);const _={name:"a",unified:"b",non_qualified:"c",has_img_apple:"d",has_img_google:"e",has_img_twitter:"f",has_img_facebook:"h",keywords:"j",sheet:"k",emoticons:"l",text:"m",short_names:"n",added_in:"o"},g=e=>{const t=[];var i=(e,i)=>{e&&(Array.isArray(e)?e:[e]).forEach((e=>{(i?e.split(/[-|_|\s]+/):[e]).forEach((e=>{e=e.toLowerCase(),-1==t.indexOf(e)&&t.push(e)}))}))};return i(e.short_names,!0),i(e.name,!0),i(e.keywords,!1),i(e.emoticons,!1),t.join(",")};function F(e){var t=Object.getOwnPropertyNames(e);for(let i of t){let t=e[i];e[i]=t&&"object"===typeof t?F(t):t}return Object.freeze(e)}const m=e=>{if(!e.compressed)return e;e.compressed=!1;for(let t in e.emojis){let i=e.emojis[t];for(let e in _)i[e]=i[_[e]],delete i[_[e]];i.short_names||(i.short_names=[]),i.short_names.unshift(t),i.sheet_x=i.sheet[0],i.sheet_y=i.sheet[1],delete i.sheet,i.text||(i.text=""),i.added_in||(i.added_in=6),i.added_in=i.added_in.toFixed(1),i.search=g(i)}return e=F(e),e},p=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart","hankey"];let b,y,w={};function k(){y=!0,b=d.get("frequently")}function v(e){y||k();var{id:t}=e;b||(b=w),b[t]||(b[t]=0),b[t]+=1,d.set("last",t),d.set("frequently",b)}function D(e){if(y||k(),!b){w={};const t=[];let i=Math.min(e,p.length);for(let e=0;e<i;e++)w[p[e]]=parseInt((i-e)/4,10)+1,t.push(p[e]);return t}const t=e,i=[];for(let o in b)b.hasOwnProperty(o)&&i.push(o);const r=i.sort(((e,t)=>b[e]-b[t])).reverse(),a=r.slice(0,t),n=d.get("last");return n&&-1==a.indexOf(n)&&(a.pop(),a.push(n)),a}var E={add:v,get:D},C=i(3396),x=i(7139);const j={role:"tablist",class:"emoji-mart-anchors"},B=["aria-label","aria-selected","data-title","onClick"],S=["innerHTML"];function q(e,t,i,r,a,n){return(0,C.wg)(),(0,C.iD)("div",j,[((0,C.wg)(!0),(0,C.iD)(C.HY,null,(0,C.Ko)(i.categories,(t=>((0,C.wg)(),(0,C.iD)("button",{role:"tab",type:"button","aria-label":t.name,"aria-selected":t.id==i.activeCategory.id,key:t.id,class:(0,x.C_)({"emoji-mart-anchor":!0,"emoji-mart-anchor-selected":t.id==i.activeCategory.id}),style:(0,x.j5)({color:t.id==i.activeCategory.id?i.color:""}),"data-title":i.i18n.categories[t.id],onClick:i=>e.$emit("click",t)},[(0,C._)("div",{"aria-hidden":"true",innerHTML:e.svgs[t.id]},null,8,S),(0,C._)("span",{"aria-hidden":"true",class:"emoji-mart-anchor-bar",style:(0,x.j5)({backgroundColor:i.color})},null,4)],14,B)))),128))])}const A={activity:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>',custom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2.000000, 1.000000)"><rect id="Rectangle" x="8" y="0" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect></g></svg>',flags:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>',foods:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>',nature:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>',objects:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>',smileys:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>',people:'<svg xmlns:svg="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"> <path id="path3814" d="m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z" /> <path id="path3816" d="M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z " /> </svg>',places:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>',recent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>',symbols:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'};var T=A,I={props:{i18n:{type:Object,required:!0},color:{type:String},categories:{type:Array,required:!0},activeCategory:{type:Object,default(){return{}}}},created(){this.svgs=T}},R=i(89);const P=(0,R.Z)(I,[["render",q]]);var O=P;const N=["aria-label"],M={class:"emoji-mart-category-label"},L={class:"emoji-mart-category-label"},U=["aria-label","data-title","title","onMouseenter","onMouseleave","onClick"],V={key:0},z={class:"emoji-mart-no-results-label"};function W(e,t,i,r,a,n){const o=(0,C.up)("emoji");return n.isVisible&&(n.isSearch||n.hasResults)?((0,C.wg)(),(0,C.iD)("section",{key:0,class:(0,x.C_)({"emoji-mart-category":!0,"emoji-mart-no-results":!n.hasResults}),"aria-label":i.i18n.categories[i.id]},[(0,C._)("div",M,[(0,C._)("h3",L,(0,x.zw)(i.i18n.categories[i.id]),1)]),((0,C.wg)(!0),(0,C.iD)(C.HY,null,(0,C.Ko)(n.emojiObjects,(({emojiObject:e,emojiView:t})=>((0,C.wg)(),(0,C.iD)(C.HY,null,[t.canRender?((0,C.wg)(),(0,C.iD)("button",{"aria-label":t.ariaLabel,role:"option","aria-selected":"false","aria-posinset":"1","aria-setsize":"1812",type:"button","data-title":e.short_name,key:e.id,title:t.title,class:(0,x.C_)(["emoji-mart-emoji",n.activeClass(e)]),onMouseenter:e=>i.emojiProps.onEnter(t.getEmoji()),onMouseleave:e=>i.emojiProps.onLeave(t.getEmoji()),onClick:e=>i.emojiProps.onClick(t.getEmoji())},[(0,C._)("span",{class:(0,x.C_)(t.cssClass),style:(0,x.j5)(t.cssStyle)},(0,x.zw)(t.content),7)],42,U)):(0,C.kq)("",!0)],64)))),256)),n.hasResults?(0,C.kq)("",!0):((0,C.wg)(),(0,C.iD)("div",V,[(0,C.Wm)(o,{data:i.data,emoji:"sleuth_or_spy",native:i.emojiProps.native,skin:i.emojiProps.skin,set:i.emojiProps.set},null,8,["data","native","skin","set"]),(0,C._)("div",z,(0,x.zw)(i.i18n.notfound),1)]))],10,N)):(0,C.kq)("",!0)}const H=String;var $=H.fromCodePoint||function(){var e,t,i=16384,r=[],a=-1,n=arguments.length;if(!n)return"";var o="";while(++a<n){var s=Number(arguments[a]);if(!isFinite(s)||s<0||s>1114111||Math.floor(s)!=s)throw RangeError("Invalid code point: "+s);s<=65535?r.push(s):(s-=65536,e=55296+(s>>10),t=s%1024+56320,r.push(e,t)),(a+1===n||r.length>i)&&(o+=String.fromCharCode.apply(null,r),r.length=0)}return o};function G(e){var t=e.split("-"),i=t.map((e=>`0x${e}`));return $.apply(null,i)}function K(e){return e.reduce(((e,t)=>(-1===e.indexOf(t)&&e.push(t),e)),[])}function Y(e,t){const i=K(e),r=K(t);return i.filter((e=>r.indexOf(e)>=0))}function J(e,t){var i={};for(let r in e){let a=e[r],n=a;t.hasOwnProperty(r)&&(n=t[r]),"object"===typeof n&&(n=J(a,n)),i[r]=n}return i}function Q(){if("undefined"==typeof document)return 0;const e=document.createElement("div");e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}const X=61,Z=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,ee=["1F3FA","1F3FB","1F3FC","1F3FD","1F3FE","1F3FF"];class te{constructor(e,{emojisToShowFilter:t,include:i,exclude:r,custom:a,recent:n,recentLength:o=20}={}){this._data=m(e),this._emojisFilter=t||null,this._include=i||null,this._exclude=r||null,this._custom=a||[],this._recent=n||E.get(o),this._emojis={},this._nativeEmojis={},this._emoticons={},this._categories=[],this._recentCategory={id:"recent",name:"Recent",emojis:[]},this._customCategory={id:"custom",name:"Custom",emojis:[]},this._searchIndex={},this.buildIndex(),Object.freeze(this)}buildIndex(){let e=this._data.categories;if(this._include&&(e=e.filter((e=>this._include.includes(e.id))),e=e.sort(((e,t)=>{const i=this._include.indexOf(e.id),r=this._include.indexOf(t.id);return i<r?-1:i>r?1:0}))),e.forEach((e=>{if(!this.isCategoryNeeded(e.id))return;let t={id:e.id,name:e.name,emojis:[]};e.emojis.forEach((e=>{let i=this.addEmoji(e);i&&t.emojis.push(i)})),t.emojis.length&&this._categories.push(t)})),this.isCategoryNeeded("custom")){if(this._custom.length>0)for(let e of this._custom)this.addCustomEmoji(e);this._customCategory.emojis.length&&this._categories.push(this._customCategory)}this.isCategoryNeeded("recent")&&(this._recent.length&&this._recent.map((e=>{for(let t of this._customCategory.emojis)if(t.id===e)return void this._recentCategory.emojis.push(t);this.hasEmoji(e)&&this._recentCategory.emojis.push(this.emoji(e))})),this._recentCategory.emojis.length&&this._categories.unshift(this._recentCategory))}findEmoji(e,t){let i=e.match(Z);if(i&&(e=i[1],i[2]&&(t=parseInt(i[2],10))),this._data.aliases.hasOwnProperty(e)&&(e=this._data.aliases[e]),this._emojis.hasOwnProperty(e)){let i=this._emojis[e];return t?i.getSkin(t):i}return this._nativeEmojis.hasOwnProperty(e)?this._nativeEmojis[e]:null}categories(){return this._categories}emoji(e){this._data.aliases.hasOwnProperty(e)&&(e=this._data.aliases[e]);let t=this._emojis[e];if(!t)throw new Error("Can not find emoji by id: "+e);return t}firstEmoji(){let e=this._emojis[Object.keys(this._emojis)[0]];if(!e)throw new Error("Can not get first emoji");return e}hasEmoji(e){return this._data.aliases.hasOwnProperty(e)&&(e=this._data.aliases[e]),!!this._emojis[e]}nativeEmoji(e){return this._nativeEmojis.hasOwnProperty(e)?this._nativeEmojis[e]:null}search(e,t){if(t||(t=75),!e.length)return null;if("-"==e||"-1"==e)return[this.emoji("-1")];let i=e.toLowerCase().split(/[\s|,|\-|_]+/),r=[];i.length>2&&(i=[i[0],i[1]]),r=i.map((e=>{let t=this._emojis,i=this._searchIndex,r=0;for(let a=0;a<e.length;a++){const n=e[a];if(r++,i[n]||(i[n]={}),i=i[n],!i.results){let a={};i.results=[],i.emojis={};for(let n in t){let o=t[n],s=o._data.search,u=e.substr(0,r),l=s.indexOf(u);if(-1!=l){let e=l+1;u==n&&(e=0),i.results.push(o),i.emojis[n]=o,a[n]=e}}i.results.sort(((e,t)=>{var i=a[e.id],r=a[t.id];return i-r}))}t=i.emojis}return i.results})).filter((e=>e));var a=null;return a=r.length>1?Y.apply(null,r):r.length?r[0]:[],a&&a.length>t&&(a=a.slice(0,t)),a}addCustomEmoji(e){let t=Object.assign({},e,{id:e.short_names[0],custom:!0});t.search||(t.search=g(t));let i=new ie(t);return this._emojis[i.id]=i,this._customCategory.emojis.push(i),i}addEmoji(e){let t=this._data.emojis[e];if(!this.isEmojiNeeded(t))return!1;let i=new ie(t);if(this._emojis[e]=i,i.native&&(this._nativeEmojis[i.native]=i),i._skins)for(let r in i._skins){let e=i._skins[r];e.native&&(this._nativeEmojis[e.native]=e)}return i.emoticons&&i.emoticons.forEach((t=>{this._emoticons[t]||(this._emoticons[t]=e)})),i}isCategoryNeeded(e){let t=!this._include||!this._include.length||this._include.indexOf(e)>-1,i=!(!this._exclude||!this._exclude.length)&&this._exclude.indexOf(e)>-1;return!(!t||i)}isEmojiNeeded(e){return!this._emojisFilter||this._emojisFilter(e)}}class ie{constructor(e){if(this._data=Object.assign({},e),this._skins=null,this._data.skin_variations)for(var t in this._skins=[],ee){let i=ee[t],r=this._data.skin_variations[i],a=Object.assign({},e);for(let e in r)a[e]=r[e];delete a.skin_variations,a["skin_tone"]=parseInt(t)+1,this._skins.push(new ie(a))}this._sanitized=ae(this._data);for(let i in this._sanitized)this[i]=this._sanitized[i];this.short_names=this._data.short_names,this.short_name=this._data.short_names[0],Object.freeze(this)}getSkin(e){return e&&"native"!=e&&this._skins?this._skins[e-1]:this}getPosition(){let e=X-1,t=+(100/e*this._data.sheet_x).toFixed(2),i=+(100/e*this._data.sheet_y).toFixed(2);return`${t}% ${i}%`}ariaLabel(){return[this.native].concat(this.short_names).filter(Boolean).join(", ")}}class re{constructor(e,t,i,r,a,n,o){this._emoji=e,this._native=r,this._skin=t,this._set=i,this._fallback=a,this.canRender=this._canRender(),this.cssClass=this._cssClass(),this.cssStyle=this._cssStyle(o),this.content=this._content(),this.title=!0===n?e.short_name:null,this.ariaLabel=e.ariaLabel(),Object.freeze(this)}getEmoji(){return this._emoji.getSkin(this._skin)}_canRender(){return this._isCustom()||this._isNative()||this._hasEmoji()||this._fallback}_cssClass(){return["emoji-set-"+this._set,"emoji-type-"+this._emojiType()]}_cssStyle(e){let t={};return this._isCustom()?t={backgroundImage:"url("+this.getEmoji()._data.imageUrl+")",backgroundSize:"100%",width:e+"px",height:e+"px"}:this._hasEmoji()&&!this._isNative()&&(t={backgroundPosition:this.getEmoji().getPosition()}),e&&(t=this._isNative()?Object.assign(t,{fontSize:Math.round(.95*e*10)/10+"px"}):Object.assign(t,{width:e+"px",height:e+"px"})),t}_content(){return this._isCustom()?"":this._isNative()?this.getEmoji().native:this._hasEmoji()?"":this._fallback?this._fallback(this.getEmoji()):null}_isNative(){return this._native}_isCustom(){return this.getEmoji().custom}_hasEmoji(){if(!this.getEmoji()._data)return!1;const e=this.getEmoji()._data["has_img_"+this._set];return void 0===e||e}_emojiType(){return this._isCustom()?"custom":this._isNative()?"native":this._hasEmoji()?"image":"fallback"}}function ae(e){var{name:t,short_names:i,skin_tone:r,skin_variations:a,emoticons:n,unified:o,custom:s,imageUrl:u}=e,l=e.id||i[0],h=`:${l}:`;return s?{id:l,name:t,colons:h,emoticons:n,custom:s,imageUrl:u}:(r&&(h+=`:skin-tone-${r}:`),{id:l,name:t,colons:h,emoticons:n,unified:o.toLowerCase(),skin:r||(a?1:null),native:G(o)})}function ne(e,t,i,r,a,n){return n.view.canRender?((0,C.wg)(),(0,C.j4)((0,C.LL)(e.tag),{key:0,title:n.view.title,"aria-label":n.view.ariaLabel,"data-title":n.title,class:"emoji-mart-emoji",onMouseenter:n.onMouseEnter,onMouseleave:n.onMouseLeave,onClick:n.onClick},{default:(0,C.w5)((()=>[(0,C._)("span",{class:(0,x.C_)(n.view.cssClass),style:(0,x.j5)(n.view.cssStyle)},(0,x.zw)(n.view.content),7)])),_:1},40,["title","aria-label","data-title","onMouseenter","onMouseleave","onClick"])):(0,C.kq)("",!0)}const oe={native:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},fallback:{type:Function},skin:{type:Number,default:1},set:{type:String,default:"apple"},emoji:{type:[String,Object],required:!0},size:{type:Number,default:null},tag:{type:String,default:"span"}},se={perLine:{type:Number,default:9},maxSearchResults:{type:Number,default:75},emojiSize:{type:Number,default:24},title:{type:String,default:"Emoji Mart™"},emoji:{type:String,default:"department_store"},color:{type:String,default:"#ae65c5"},set:{type:String,default:"apple"},skin:{type:Number,default:null},defaultSkin:{type:Number,default:1},native:{type:Boolean,default:!1},emojiTooltip:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},i18n:{type:Object,default(){return{}}},showPreview:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showCategories:{type:Boolean,default:!0},showSkinTones:{type:Boolean,default:!0},infiniteScroll:{type:Boolean,default:!0},pickerStyles:{type:Object,default(){return{}}}};var ue={props:{...oe,data:{type:Object,required:!0}},emits:["click","mouseenter","mouseleave"],computed:{view(){return new re(this.emojiObject,this.skin,this.set,this.native,this.fallback,this.tooltip,this.size)},sanitizedData(){return this.emojiObject._sanitized},title(){return this.tooltip?this.emojiObject.short_name:null},emojiObject(){return"string"==typeof this.emoji?this.data.findEmoji(this.emoji):this.emoji}},created(){},methods:{onClick(){this.$emit("click",this.emojiObject)},onMouseEnter(){this.$emit("mouseenter",this.emojiObject)},onMouseLeave(){this.$emit("mouseleave",this.emojiObject)}}};const le=(0,R.Z)(ue,[["render",ne]]);var he=le,ce={props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},emojis:{type:Array},emojiProps:{type:Object,required:!0}},methods:{activeClass:function(e){return this.emojiProps.selectedEmoji&&this.emojiProps.selectedEmojiCategory&&this.emojiProps.selectedEmoji.id==e.id&&this.emojiProps.selectedEmojiCategory.id==this.id?"emoji-mart-emoji-selected":""}},computed:{isVisible(){return!!this.emojis},isSearch(){return"Search"==this.name},hasResults(){return this.emojis.length>0},emojiObjects(){return this.emojis.map((e=>{let t=e,i=new re(e,this.emojiProps.skin,this.emojiProps.set,this.emojiProps.native,this.emojiProps.fallback,this.emojiProps.emojiTooltip,this.emojiProps.emojiSize);return{emojiObject:t,emojiView:i}}))}},components:{Emoji:he}};const fe=(0,R.Z)(ce,[["render",W]]);var de=fe;const _e={class:"emoji-mart-preview"},ge={class:"emoji-mart-preview-emoji"},Fe={class:"emoji-mart-preview-data"},me={class:"emoji-mart-preview-name"},pe={class:"emoji-mart-preview-shortnames"},be={class:"emoji-mart-preview-emoticons"},ye={class:"emoji-mart-preview-emoji"},we={class:"emoji-mart-preview-data"},ke={class:"emoji-mart-title-label"},ve={key:0,class:"emoji-mart-preview-skins"};function De(e,t,i,r,a,n){const o=(0,C.up)("emoji"),s=(0,C.up)("skins");return(0,C.wg)(),(0,C.iD)("div",_e,[i.emoji?((0,C.wg)(),(0,C.iD)(C.HY,{key:0},[(0,C._)("div",ge,[(0,C.Wm)(o,{data:i.data,emoji:i.emoji,native:i.emojiProps.native,skin:i.emojiProps.skin,set:i.emojiProps.set},null,8,["data","emoji","native","skin","set"])]),(0,C._)("div",Fe,[(0,C._)("div",me,(0,x.zw)(i.emoji.name),1),(0,C._)("div",pe,[((0,C.wg)(!0),(0,C.iD)(C.HY,null,(0,C.Ko)(n.emojiShortNames,(e=>((0,C.wg)(),(0,C.iD)("span",{key:e,class:"emoji-mart-preview-shortname"},":"+(0,x.zw)(e)+":",1)))),128))]),(0,C._)("div",be,[((0,C.wg)(!0),(0,C.iD)(C.HY,null,(0,C.Ko)(n.emojiEmoticons,(e=>((0,C.wg)(),(0,C.iD)("span",{key:e,class:"emoji-mart-preview-emoticon"},(0,x.zw)(e),1)))),128))])])],64)):((0,C.wg)(),(0,C.iD)(C.HY,{key:1},[(0,C._)("div",ye,[(0,C.Wm)(o,{data:i.data,emoji:i.idleEmoji,native:i.emojiProps.native,skin:i.emojiProps.skin,set:i.emojiProps.set},null,8,["data","emoji","native","skin","set"])]),(0,C._)("div",we,[(0,C._)("span",ke,(0,x.zw)(i.title),1)]),i.showSkinTones?((0,C.wg)(),(0,C.iD)("div",ve,[(0,C.Wm)(s,{skin:i.skinProps.skin,onChange:t[0]||(t[0]=e=>i.onSkinChange(e))},null,8,["skin"])])):(0,C.kq)("",!0)],64))])}const Ee=["onClick"];function Ce(e,t,i,r,a,n){return(0,C.wg)(),(0,C.iD)("div",{class:(0,x.C_)({"emoji-mart-skin-swatches":!0,"emoji-mart-skin-swatches-opened":a.opened})},[((0,C.wg)(),(0,C.iD)(C.HY,null,(0,C.Ko)(6,(e=>(0,C._)("span",{key:e,class:(0,x.C_)({"emoji-mart-skin-swatch":!0,"emoji-mart-skin-swatch-selected":i.skin==e})},[(0,C._)("span",{class:(0,x.C_)("emoji-mart-skin emoji-mart-skin-tone-"+e),onClick:t=>n.onClick(e)},null,10,Ee)],2))),64))],2)}var xe={props:{skin:{type:Number,required:!0}},data(){return{opened:!1}},methods:{onClick(e){this.opened&&e!=this.skin&&this.$emit("change",e),this.opened=!this.opened}}};const je=(0,R.Z)(xe,[["render",Ce]]);var Be=je,Se={props:{data:{type:Object,required:!0},title:{type:String,required:!0},emoji:{type:[String,Object]},idleEmoji:{type:[String,Object],required:!0},showSkinTones:{type:Boolean,default:!0},emojiProps:{type:Object,required:!0},skinProps:{type:Object,required:!0},onSkinChange:{type:Function,required:!0}},computed:{emojiData(){return this.emoji?this.emoji:{}},emojiShortNames(){return this.emojiData.short_names},emojiEmoticons(){return this.emojiData.emoticons}},components:{Emoji:he,Skins:Be}};const qe=(0,R.Z)(Se,[["render",De]]);var Ae=qe,Te=i(9242);const Ie={class:"emoji-mart-search"},Re=["placeholder"],Pe=(0,C._)("span",{class:"hidden",id:"emoji-picker-search-description"},"Use the left, right, up and down arrow keys to navigate the emoji search results.",-1);function Oe(e,t,i,r,a,n){return(0,C.wg)(),(0,C.iD)("div",Ie,[(0,C.wy)((0,C._)("input",{type:"text",placeholder:i.i18n.search,role:"textbox","aria-autocomplete":"list","aria-owns":"emoji-mart-list","aria-label":"Search for an emoji","aria-describedby":"emoji-mart-search-description",onKeydown:[t[0]||(t[0]=(0,Te.D2)((t=>e.$emit("arrowLeft",t)),["left"])),t[1]||(t[1]=(0,Te.D2)((()=>e.$emit("arrowRight")),["right"])),t[2]||(t[2]=(0,Te.D2)((()=>e.$emit("arrowDown")),["down"])),t[3]||(t[3]=(0,Te.D2)((t=>e.$emit("arrowUp",t)),["up"])),t[4]||(t[4]=(0,Te.D2)((()=>e.$emit("enter")),["enter"]))],"onUpdate:modelValue":t[5]||(t[5]=e=>a.value=e)},null,40,Re),[[Te.nr,a.value]]),Pe])}var Ne={props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},autoFocus:{type:Boolean,default:!1},onSearch:{type:Function,required:!0},onArrowLeft:{type:Function,required:!1},onArrowRight:{type:Function,required:!1},onArrowDown:{type:Function,required:!1},onArrowUp:{type:Function,required:!1},onEnter:{type:Function,required:!1}},data(){return{value:""}},computed:{emojiIndex(){return this.data}},watch:{value(){this.$emit("search",this.value)}},methods:{clear(){this.value=""}},mounted(){let e=this.$el.querySelector("input");this.autoFocus&&e.focus()}};const Me=(0,R.Z)(Ne,[["render",Oe]]);var Le=Me;const Ue={key:0,class:"emoji-mart-bar emoji-mart-bar-anchors"},Ve={id:"emoji-mart-list",ref:"scrollContent",role:"listbox","aria-expanded":"true"},ze={key:0,class:"emoji-mart-bar emoji-mart-bar-preview"};function We(e,t,i,r,a,n){const o=(0,C.up)("anchors"),s=(0,C.up)("search"),u=(0,C.up)("category"),l=(0,C.up)("preview");return(0,C.wg)(),(0,C.iD)("section",{class:"emoji-mart emoji-mart-static",style:(0,x.j5)(n.customStyles)},[e.showCategories?((0,C.wg)(),(0,C.iD)("div",Ue,[(0,C.Wm)(o,{data:i.data,i18n:n.mergedI18n,color:e.color,categories:a.view.allCategories,"active-category":a.view.activeCategory,onClick:n.onAnchorClick},null,8,["data","i18n","color","categories","active-category","onClick"])])):(0,C.kq)("",!0),(0,C.WI)(e.$slots,"searchTemplate",{data:i.data,i18n:e.i18n,autoFocus:e.autoFocus,onSearch:n.onSearch},(()=>[e.showSearch?((0,C.wg)(),(0,C.j4)(s,{key:0,ref:"search",data:i.data,i18n:n.mergedI18n,"auto-focus":e.autoFocus,"on-search":n.onSearch,onSearch:n.onSearch,onArrowLeft:n.onArrowLeft,onArrowRight:n.onArrowRight,onArrowDown:n.onArrowDown,onArrowUp:n.onArrowUp,onEnter:n.onEnter,onSelect:n.onTextSelect},null,8,["data","i18n","auto-focus","on-search","onSearch","onArrowLeft","onArrowRight","onArrowDown","onArrowUp","onEnter","onSelect"])):(0,C.kq)("",!0)])),(0,C._)("div",{role:"tabpanel",class:"emoji-mart-scroll",ref:"scroll",onScroll:t[0]||(t[0]=(...e)=>n.onScroll&&n.onScroll(...e))},[(0,C._)("div",Ve,[(0,C.WI)(e.$slots,"customCategory"),((0,C.wg)(!0),(0,C.iD)(C.HY,null,(0,C.Ko)(a.view.filteredCategories,((t,r)=>(0,C.wy)(((0,C.wg)(),(0,C.j4)(u,{ref_for:!0,ref:"categories_"+r,key:t.id,data:i.data,i18n:n.mergedI18n,id:t.id,name:t.name,emojis:t.emojis,"emoji-props":n.emojiProps},null,8,["data","i18n","id","name","emojis","emoji-props"])),[[Te.F8,e.infiniteScroll||t==a.view.activeCategory]]))),128))],512)],544),(0,C.WI)(e.$slots,"previewTemplate",{data:i.data,title:e.title,emoji:a.view.previewEmoji,idleEmoji:n.idleEmoji,showSkinTones:e.showSkinTones,emojiProps:n.emojiProps,skinProps:n.skinProps,onSkinChange:n.onSkinChange},(()=>[e.showPreview?((0,C.wg)(),(0,C.iD)("div",ze,[(0,C.Wm)(l,{data:i.data,title:e.title,emoji:a.view.previewEmoji,"idle-emoji":n.idleEmoji,"show-skin-tones":e.showSkinTones,"emoji-props":n.emojiProps,"skin-props":n.skinProps,"on-skin-change":n.onSkinChange},null,8,["data","title","emoji","idle-emoji","show-skin-tones","emoji-props","skin-props","on-skin-change"])])):(0,C.kq)("",!0)]))],4)}i(3078);class He{constructor(e){this._vm=e,this._data=e.data,this._perLine=e.perLine,this._categories=[],this._categories.push(...this._data.categories()),this._categories=this._categories.filter((e=>e.emojis.length>0)),this._categories[0].first=!0,Object.freeze(this._categories),this.activeCategory=this._categories[0],this.searchEmojis=null,this.previewEmoji=null,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=-1}onScroll(){const e=this._vm.$refs.scroll,t=e.scrollTop;let i=this.filteredCategories[0];for(let r=0,a=this.filteredCategories.length;r<a;r++){let e=this.filteredCategories[r],a=this._vm.getCategoryComponent(r);if(a&&a.$el.offsetTop-50>t)break;i=e}this.activeCategory=i}get allCategories(){return this._categories}get filteredCategories(){return this.searchEmojis?[{id:"search",name:"Search",emojis:this.searchEmojis}]:this._categories.filter((e=>{let t=e.emojis.length>0;return t}))}get previewEmojiCategory(){return this.previewEmojiCategoryIdx>=0?this.filteredCategories[this.previewEmojiCategoryIdx]:null}onAnchorClick(e){if(this.searchEmojis)return;let t=this.filteredCategories.indexOf(e),i=this._vm.getCategoryComponent(t),r=()=>{if(i){let t=i.$el.offsetTop;e.first&&(t=0),this._vm.$refs.scroll.scrollTop=t}};this._vm.infiniteScroll?r():this.activeCategory=this.filteredCategories[t]}onSearch(e){let t=this._data.search(e,this.maxSearchResults);this.searchEmojis=t,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=0,this.updatePreviewEmoji()}onEmojiEnter(e){this.previewEmoji=e,this.previewEmojiIdx=-1,this.previewEmojiCategoryIdx=-1}onEmojiLeave(e){this.previewEmoji=null}onArrowLeft(){this.previewEmojiIdx>0?this.previewEmojiIdx-=1:(this.previewEmojiCategoryIdx-=1,this.previewEmojiCategoryIdx<0?this.previewEmojiCategoryIdx=0:this.previewEmojiIdx=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length-1),this.updatePreviewEmoji()}onArrowRight(){this.previewEmojiIdx<this.emojisLength(this.previewEmojiCategoryIdx)-1?this.previewEmojiIdx+=1:(this.previewEmojiCategoryIdx+=1,this.previewEmojiCategoryIdx>=this.filteredCategories.length?this.previewEmojiCategoryIdx=this.filteredCategories.length-1:this.previewEmojiIdx=0),this.updatePreviewEmoji()}onArrowDown(){if(-1==this.previewEmojiIdx)return this.onArrowRight();const e=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length;let t=this._perLine;this.previewEmojiIdx+t>e&&(t=e%this._perLine);for(let i=0;i<t;i++)this.onArrowRight();this.updatePreviewEmoji()}onArrowUp(){let e=this._perLine;if(this.previewEmojiIdx-e<0)if(this.previewEmojiCategoryIdx>0){const t=this.filteredCategories[this.previewEmojiCategoryIdx-1].emojis.length%this._perLine;e=t}else e=0;for(let t=0;t<e;t++)this.onArrowLeft();this.updatePreviewEmoji()}updatePreviewEmoji(){this.previewEmoji=this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx],this._vm.$nextTick((()=>{const e=this._vm.$refs.scroll,t=e.querySelector(".emoji-mart-emoji-selected"),i=e.offsetTop-e.offsetHeight;t&&t.offsetTop+t.offsetHeight>i+e.scrollTop&&(e.scrollTop+=t.offsetHeight),t&&t.offsetTop<e.scrollTop&&(e.scrollTop-=t.offsetHeight)}))}emojisLength(e){return-1==e?0:this.filteredCategories[e].emojis.length}}const $e={search:"Search",notfound:"No Emoji Found",categories:{search:"Search Results",recent:"Frequently Used",smileys:"Smileys & Emotion",people:"People & Body",nature:"Animals & Nature",foods:"Food & Drink",activity:"Activity",places:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"}};var Ge={props:{...se,data:{type:Object,required:!0}},data(){return{activeSkin:this.skin||d.get("skin")||this.defaultSkin,view:new He(this)}},computed:{customStyles(){return{width:this.calculateWidth+"px",...this.pickerStyles}},emojiProps(){return{native:this.native,skin:this.activeSkin,set:this.set,emojiTooltip:this.emojiTooltip,emojiSize:this.emojiSize,selectedEmoji:this.view.previewEmoji,selectedEmojiCategory:this.view.previewEmojiCategory,onEnter:this.onEmojiEnter.bind(this),onLeave:this.onEmojiLeave.bind(this),onClick:this.onEmojiClick.bind(this)}},skinProps(){return{skin:this.activeSkin}},calculateWidth(){return this.perLine*(this.emojiSize+12)+12+2+Q()},filteredCategories(){return this.view.filteredCategories},mergedI18n(){return Object.freeze(J($e,this.i18n))},idleEmoji(){try{return this.data.emoji(this.emoji)}catch(e){return console.error("Default preview emoji `"+this.emoji+"` is not available, check the Picker `emoji` property"),console.error(e),this.data.firstEmoji()}}},methods:{onScroll(){this.infiniteScroll&&!this.waitingForPaint&&(this.waitingForPaint=!0,window.requestAnimationFrame(this.onScrollPaint.bind(this)))},onScrollPaint(){this.waitingForPaint=!1,this.view.onScroll()},onAnchorClick(e){this.view.onAnchorClick(e)},onSearch(e){this.view.onSearch(e)},onEmojiEnter(e){this.view.onEmojiEnter(e)},onEmojiLeave(e){this.view.onEmojiLeave(e)},onArrowLeft(e){const t=this.view.previewEmojiIdx;this.view.onArrowLeft(),e&&this.view.previewEmojiIdx!==t&&e.preventDefault()},onArrowRight(){this.view.onArrowRight()},onArrowDown(){this.view.onArrowDown()},onArrowUp(e){this.view.onArrowUp(),e.preventDefault()},onEnter(){this.view.previewEmoji&&(this.$emit("select",this.view.previewEmoji),E.add(this.view.previewEmoji))},onEmojiClick(e){this.$emit("select",e),E.add(e)},onTextSelect(e){e.stopPropagation()},onSkinChange(e){this.activeSkin=e,d.update({skin:e}),this.$emit("skin-change",e)},getCategoryComponent(e){let t=this.$refs["categories_"+e];return t&&"0"in t?t["0"]:t}},components:{Anchors:O,Category:de,Preview:Ae,Search:Le}};const Ke=(0,R.Z)(Ge,[["render",We]]);var Ye=Ke},3078:function(){var e="undefined"!==typeof window;e&&function(){for(var e=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,i){var r=(new Date).getTime(),a=Math.max(0,16-(r-e)),n=window.setTimeout((function(){t(r+a)}),a);return e=r+a,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},2492:function(e,t,i){i(560),
/*!
* sweetalert2 v11.10.1
* Released under the MIT License.
*/
function(t,i){e.exports=i()}(0,(function(){"use strict";function e(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,a,n,o,s=[],u=!0,l=!1;try{if(n=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=n.call(i)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(l)throw a}}return s}}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function a(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,i){return l=u()?Reflect.construct.bind():function(e,t,i){var r=[null];r.push.apply(r,t);var a=Function.bind.apply(e,r),n=new a;return i&&s(n,i.prototype),n},l.apply(null,arguments)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function f(e){var t=u();return function(){var i,r=o(e);if(t){var a=o(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return c(this,i)}}function d(e,t){while(!Object.prototype.hasOwnProperty.call(e,t))if(e=o(e),null===e)break;return e}function _(){return _="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var r=d(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(arguments.length<3?e:i):a.value}},_.apply(this,arguments)}function g(t,i){return p(t)||e(t,i)||y(t,i)||v()}function F(e){return m(e)||b(e)||y(e)||k()}function m(e){if(Array.isArray(e))return w(e)}function p(e){if(Array.isArray(e))return e}function b(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function y(e,t){if(e){if("string"===typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function k(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){if("object"!==typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function E(e){var t=D(e,"string");return"symbol"===typeof t?t:String(t)}function C(e,t){var i=j(e,t,"get");return B(e,i)}function x(e,t,i){var r=j(e,t,"set");return S(e,r,i),i}function j(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function B(e,t){return t.get?t.get.call(e):t.value}function S(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}function q(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function A(e,t,i){q(e,t),t.set(e,i)}var T=100,I={},R=function(){I.previousActiveElement instanceof HTMLElement?(I.previousActiveElement.focus(),I.previousActiveElement=null):document.body&&document.body.focus()},P=function(e){return new Promise((function(t){if(!e)return t();var i=window.scrollX,r=window.scrollY;I.restoreFocusTimeout=setTimeout((function(){R(),t()}),T),window.scrollTo(i,r)}))},O="swal2-",N=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],M=N.reduce((function(e,t){return e[t]=O+t,e}),{}),L=["success","warning","info","question","error"],U=L.reduce((function(e,t){return e[t]=O+t,e}),{}),V="SweetAlert2:",z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(e){console.warn("".concat(V," ").concat("object"===t(e)?e.join(" "):e))},H=function(e){console.error("".concat(V," ").concat(e))},$=[],G=function(e){$.includes(e)||($.push(e),W(e))},K=function(e,t){G('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))},Y=function(e){return"function"===typeof e?e():e},J=function(e){return e&&"function"===typeof e.toPromise},Q=function(e){return J(e)?e.toPromise():Promise.resolve(e)},X=function(e){return e&&Promise.resolve(e)===e},Z=function(){return document.body.querySelector(".".concat(M.container))},ee=function(e){var t=Z();return t?t.querySelector(e):null},te=function(e){return ee(".".concat(e))},ie=function(){return te(M.popup)},re=function(){return te(M.icon)},ae=function(){return te(M["icon-content"])},ne=function(){return te(M.title)},oe=function(){return te(M["html-container"])},se=function(){return te(M.image)},ue=function(){return te(M["progress-steps"])},le=function(){return te(M["validation-message"])},he=function(){return ee(".".concat(M.actions," .").concat(M.confirm))},ce=function(){return ee(".".concat(M.actions," .").concat(M.cancel))},fe=function(){return ee(".".concat(M.actions," .").concat(M.deny))},de=function(){return te(M["input-label"])},_e=function(){return ee(".".concat(M.loader))},ge=function(){return te(M.actions)},Fe=function(){return te(M.footer)},me=function(){return te(M["timer-progress-bar"])},pe=function(){return te(M.close)},be='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',ye=function(){var e=ie();if(!e)return[];var t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),i=Array.from(t).sort((function(e,t){var i=parseInt(e.getAttribute("tabindex")||"0"),r=parseInt(t.getAttribute("tabindex")||"0");return i>r?1:i<r?-1:0})),r=e.querySelectorAll(be),a=Array.from(r).filter((function(e){return"-1"!==e.getAttribute("tabindex")}));return F(new Set(i.concat(a))).filter((function(e){return Le(e)}))},we=function(){return Ee(document.body,M.shown)&&!Ee(document.body,M["toast-shown"])&&!Ee(document.body,M["no-backdrop"])},ke=function(){var e=ie();return!!e&&Ee(e,M.toast)},ve=function(){var e=ie();return!!e&&e.hasAttribute("data-loading")},De=function(e,t){if(e.textContent="",t){var i=new DOMParser,r=i.parseFromString(t,"text/html"),a=r.querySelector("head");a&&Array.from(a.childNodes).forEach((function(t){e.appendChild(t)}));var n=r.querySelector("body");n&&Array.from(n.childNodes).forEach((function(t){t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},Ee=function(e,t){if(!t)return!1;for(var i=t.split(/\s+/),r=0;r<i.length;r++)if(!e.classList.contains(i[r]))return!1;return!0},Ce=function(e,t){Array.from(e.classList).forEach((function(i){Object.values(M).includes(i)||Object.values(U).includes(i)||Object.values(t.showClass||{}).includes(i)||e.classList.remove(i)}))},xe=function(e,i,r){if(Ce(e,i),i.customClass&&i.customClass[r]){if("string"!==typeof i.customClass[r]&&!i.customClass[r].forEach)return void W("Invalid type of customClass.".concat(r,'! Expected string or iterable object, got "').concat(t(i.customClass[r]),'"'));qe(e,i.customClass[r])}},je=function(e,t){if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(M.popup," > .").concat(M[t]));case"checkbox":return e.querySelector(".".concat(M.popup," > .").concat(M.checkbox," input"));case"radio":return e.querySelector(".".concat(M.popup," > .").concat(M.radio," input:checked"))||e.querySelector(".".concat(M.popup," > .").concat(M.radio," input:first-child"));case"range":return e.querySelector(".".concat(M.popup," > .").concat(M.range," input"));default:return e.querySelector(".".concat(M.popup," > .").concat(M.input))}},Be=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},Se=function(e,t,i){e&&t&&("string"===typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((function(t){Array.isArray(e)?e.forEach((function(e){i?e.classList.add(t):e.classList.remove(t)})):i?e.classList.add(t):e.classList.remove(t)})))},qe=function(e,t){Se(e,t,!0)},Ae=function(e,t){Se(e,t,!1)},Te=function(e,t){for(var i=Array.from(e.children),r=0;r<i.length;r++){var a=i[r];if(a instanceof HTMLElement&&Ee(a,t))return a}},Ie=function(e,t,i){i==="".concat(parseInt(i))&&(i=parseInt(i)),i||0===parseInt(i)?e.style[t]="number"===typeof i?"".concat(i,"px"):i:e.style.removeProperty(t)},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e&&(e.style.display=t)},Pe=function(e){e&&(e.style.display="none")},Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";e&&new MutationObserver((function(){Me(e,e.innerHTML,t)})).observe(e,{childList:!0,subtree:!0})},Ne=function(e,t,i,r){var a=e.querySelector(t);a&&(a.style[i]=r)},Me=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex";t?Re(e,i):Pe(e)},Le=function(e){return!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))},Ue=function(){return!Le(he())&&!Le(fe())&&!Le(ce())},Ve=function(e){return!!(e.scrollHeight>e.clientHeight)},ze=function(e){var t=window.getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0||r>0},We=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=me();i&&Le(i)&&(t&&(i.style.transition="none",i.style.width="100%"),setTimeout((function(){i.style.transition="width ".concat(e/1e3,"s linear"),i.style.width="0%"}),10))},He=function(){var e=me();if(e){var t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";var i=parseInt(window.getComputedStyle(e).width),r=t/i*100;e.style.width="".concat(r,"%")}},$e=function(){return"undefined"===typeof window||"undefined"===typeof document},Ge='\n <div aria-labelledby="'.concat(M.title,'" aria-describedby="').concat(M["html-container"],'" class="').concat(M.popup,'" tabindex="-1">\n   <button type="button" class="').concat(M.close,'"></button>\n   <ul class="').concat(M["progress-steps"],'"></ul>\n   <div class="').concat(M.icon,'"></div>\n   <img class="').concat(M.image,'" />\n   <h2 class="').concat(M.title,'" id="').concat(M.title,'"></h2>\n   <div class="').concat(M["html-container"],'" id="').concat(M["html-container"],'"></div>\n   <input class="').concat(M.input,'" id="').concat(M.input,'" />\n   <input type="file" class="').concat(M.file,'" />\n   <div class="').concat(M.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(M.select,'" id="').concat(M.select,'"></select>\n   <div class="').concat(M.radio,'"></div>\n   <label class="').concat(M.checkbox,'">\n     <input type="checkbox" id="').concat(M.checkbox,'" />\n     <span class="').concat(M.label,'"></span>\n   </label>\n   <textarea class="').concat(M.textarea,'" id="').concat(M.textarea,'"></textarea>\n   <div class="').concat(M["validation-message"],'" id="').concat(M["validation-message"],'"></div>\n   <div class="').concat(M.actions,'">\n     <div class="').concat(M.loader,'"></div>\n     <button type="button" class="').concat(M.confirm,'"></button>\n     <button type="button" class="').concat(M.deny,'"></button>\n     <button type="button" class="').concat(M.cancel,'"></button>\n   </div>\n   <div class="').concat(M.footer,'"></div>\n   <div class="').concat(M["timer-progress-bar-container"],'">\n     <div class="').concat(M["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Ke=function(){var e=Z();return!!e&&(e.remove(),Ae([document.documentElement,document.body],[M["no-backdrop"],M["toast-shown"],M["has-column"]]),!0)},Ye=function(){I.currentInstance.resetValidationMessage()},Je=function(){var e=ie(),t=Te(e,M.input),i=Te(e,M.file),r=e.querySelector(".".concat(M.range," input")),a=e.querySelector(".".concat(M.range," output")),n=Te(e,M.select),o=e.querySelector(".".concat(M.checkbox," input")),s=Te(e,M.textarea);t.oninput=Ye,i.onchange=Ye,n.onchange=Ye,o.onchange=Ye,s.oninput=Ye,r.oninput=function(){Ye(),a.value=r.value},r.onchange=function(){Ye(),a.value=r.value}},Qe=function(e){return"string"===typeof e?document.querySelector(e):e},Xe=function(e){var t=ie();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Ze=function(e){"rtl"===window.getComputedStyle(e).direction&&qe(Z(),M.rtl)},et=function(e){var t=Ke();if($e())H("SweetAlert2 requires document to initialize");else{var i=document.createElement("div");i.className=M.container,t&&qe(i,M["no-transition"]),De(i,Ge);var r=Qe(e.target);r.appendChild(i),Xe(e),Ze(r),Je()}},tt=function(e,i){e instanceof HTMLElement?i.appendChild(e):"object"===t(e)?it(e,i):e&&De(i,e)},it=function(e,t){e.jquery?rt(t,e):De(t,e.toString())},rt=function(e,t){if(e.textContent="",0 in t)for(var i=0;i in t;i++)e.appendChild(t[i].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},at=function(){if($e())return!1;var e=document.createElement("div");return"undefined"!==typeof e.style.webkitAnimation?"webkitAnimationEnd":"undefined"!==typeof e.style.animation&&"animationend"}(),nt=function(e,t){var i=ge(),r=_e();i&&r&&(t.showConfirmButton||t.showDenyButton||t.showCancelButton?Re(i):Pe(i),xe(i,t,"actions"),ot(i,r,t),De(r,t.loaderHtml||""),xe(r,t,"loader"))};function ot(e,t,i){var r=he(),a=fe(),n=ce();r&&a&&n&&(ut(r,"confirm",i),ut(a,"deny",i),ut(n,"cancel",i),st(r,a,n,i),i.reverseButtons&&(i.toast?(e.insertBefore(n,r),e.insertBefore(a,r)):(e.insertBefore(n,t),e.insertBefore(a,t),e.insertBefore(r,t))))}function st(e,t,i,r){r.buttonsStyling?(qe([e,t,i],M.styled),r.confirmButtonColor&&(e.style.backgroundColor=r.confirmButtonColor,qe(e,M["default-outline"])),r.denyButtonColor&&(t.style.backgroundColor=r.denyButtonColor,qe(t,M["default-outline"])),r.cancelButtonColor&&(i.style.backgroundColor=r.cancelButtonColor,qe(i,M["default-outline"]))):Ae([e,t,i],M.styled)}function ut(e,t,i){var r=z(t);Me(e,i["show".concat(r,"Button")],"inline-block"),De(e,i["".concat(t,"ButtonText")]||""),e.setAttribute("aria-label",i["".concat(t,"ButtonAriaLabel")]||""),e.className=M[t],xe(e,i,"".concat(t,"Button"))}var lt=function(e,t){var i=pe();i&&(De(i,t.closeButtonHtml||""),xe(i,t,"closeButton"),Me(i,t.showCloseButton),i.setAttribute("aria-label",t.closeButtonAriaLabel||""))},ht=function(e,t){var i=Z();i&&(ct(i,t.backdrop),ft(i,t.position),dt(i,t.grow),xe(i,t,"container"))};function ct(e,t){"string"===typeof t?e.style.background=t:t||qe([document.documentElement,document.body],M["no-backdrop"])}function ft(e,t){t&&(t in M?qe(e,M[t]):(W('The "position" parameter is not valid, defaulting to "center"'),qe(e,M.center)))}function dt(e,t){t&&qe(e,M["grow-".concat(t)])}var _t={innerParams:new WeakMap,domCache:new WeakMap},gt=["input","file","range","select","radio","checkbox","textarea"],Ft=function(e,t){var i=ie();if(i){var r=_t.innerParams.get(e),a=!r||t.input!==r.input;gt.forEach((function(e){var r=Te(i,M[e]);r&&(bt(e,t.inputAttributes),r.className=M[e],a&&Pe(r))})),t.input&&(a&&mt(t),yt(t))}},mt=function(e){if(e.input)if(Et[e.input]){var t=vt(e.input),i=Et[e.input](t,e);Re(t),e.inputAutoFocus&&setTimeout((function(){Be(i)}))}else H("Unexpected type of input! Expected ".concat(Object.keys(Et).join(" | "),', got "').concat(e.input,'"'))},pt=function(e){for(var t=0;t<e.attributes.length;t++){var i=e.attributes[t].name;["id","type","value","style"].includes(i)||e.removeAttribute(i)}},bt=function(e,t){var i=je(ie(),e);if(i)for(var r in pt(i),t)i.setAttribute(r,t[r])},yt=function(e){var i=vt(e.input);"object"===t(e.customClass)&&qe(i,e.customClass.input)},wt=function(e,t){e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},kt=function(e,i,r){if(r.inputLabel){var a=document.createElement("label"),n=M["input-label"];a.setAttribute("for",e.id),a.className=n,"object"===t(r.customClass)&&qe(a,r.customClass.inputLabel),a.innerText=r.inputLabel,i.insertAdjacentElement("beforebegin",a)}},vt=function(e){return Te(ie(),M[e]||M.input)},Dt=function(e,i){["string","number"].includes(t(i))?e.value="".concat(i):X(i)||W('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(i),'"'))},Et={};Et.text=Et.email=Et.password=Et.number=Et.tel=Et.url=Et.search=Et.date=Et["datetime-local"]=Et.time=Et.week=Et.month=function(e,t){return Dt(e,t.inputValue),kt(e,e,t),wt(e,t),e.type=t.input,e},Et.file=function(e,t){return kt(e,e,t),wt(e,t),e},Et.range=function(e,t){var i=e.querySelector("input"),r=e.querySelector("output");return Dt(i,t.inputValue),i.type=t.input,Dt(r,t.inputValue),kt(i,e,t),e},Et.select=function(e,t){if(e.textContent="",t.inputPlaceholder){var i=document.createElement("option");De(i,t.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,e.appendChild(i)}return kt(e,e,t),e},Et.radio=function(e){return e.textContent="",e},Et.checkbox=function(e,t){var i=je(ie(),"checkbox");i.value="1",i.checked=Boolean(t.inputValue);var r=e.querySelector("span");return De(r,t.inputPlaceholder),i},Et.textarea=function(e,t){Dt(e,t.inputValue),wt(e,t),kt(e,e,t);var i=function(e){return parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight)};return setTimeout((function(){if("MutationObserver"in window){var r=parseInt(window.getComputedStyle(ie()).width),a=function(){if(document.body.contains(e)){var a=e.offsetWidth+i(e);a>r?ie().style.width="".concat(a,"px"):Ie(ie(),"width",t.width)}};new MutationObserver(a).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};var Ct=function(e,t){var i=oe();i&&(Oe(i),xe(i,t,"htmlContainer"),t.html?(tt(t.html,i),Re(i,"block")):t.text?(i.textContent=t.text,Re(i,"block")):Pe(i),Ft(e,t))},xt=function(e,t){var i=Fe();i&&(Oe(i),Me(i,t.footer,"block"),t.footer&&tt(t.footer,i),xe(i,t,"footer"))},jt=function(e,t){var i=_t.innerParams.get(e),r=re();if(r){if(i&&t.icon===i.icon)return Tt(r,t),void Bt(r,t);if(t.icon||t.iconHtml){if(t.icon&&-1===Object.keys(U).indexOf(t.icon))return H('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),void Pe(r);Re(r),Tt(r,t),Bt(r,t),qe(r,t.showClass&&t.showClass.icon)}else Pe(r)}},Bt=function(e,t){for(var i=0,r=Object.entries(U);i<r.length;i++){var a=g(r[i],2),n=a[0],o=a[1];t.icon!==n&&Ae(e,o)}qe(e,t.icon&&U[t.icon]),It(e,t),St(),xe(e,t,"icon")},St=function(){var e=ie();if(e)for(var t=window.getComputedStyle(e).getPropertyValue("background-color"),i=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),r=0;r<i.length;r++)i[r].style.backgroundColor=t},qt='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',At='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Tt=function(e,t){if(t.icon||t.iconHtml){var i=e.innerHTML,r="";if(t.iconHtml)r=Rt(t.iconHtml);else if("success"===t.icon)r=qt,i=i.replace(/ style=".*?"/g,"");else if("error"===t.icon)r=At;else if(t.icon){var a={question:"?",warning:"!",info:"i"};r=Rt(a[t.icon])}i.trim()!==r.trim()&&De(e,r)}},It=function(e,t){if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(var i=0,r=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];i<r.length;i++){var a=r[i];Ne(e,a,"backgroundColor",t.iconColor)}Ne(e,".swal2-success-ring","borderColor",t.iconColor)}},Rt=function(e){return'<div class="'.concat(M["icon-content"],'">').concat(e,"</div>")},Pt=function(e,t){var i=se();i&&(t.imageUrl?(Re(i,""),i.setAttribute("src",t.imageUrl),i.setAttribute("alt",t.imageAlt||""),Ie(i,"width",t.imageWidth),Ie(i,"height",t.imageHeight),i.className=M.image,xe(i,t,"image")):Pe(i))},Ot=function(e,t){var i=Z(),r=ie();if(i&&r){if(t.toast){Ie(i,"width",t.width),r.style.width="100%";var a=_e();a&&r.insertBefore(a,re())}else Ie(r,"width",t.width);Ie(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),Pe(le()),Nt(r,t)}},Nt=function(e,t){var i=t.showClass||{};e.className="".concat(M.popup," ").concat(Le(e)?i.popup:""),t.toast?(qe([document.documentElement,document.body],M["toast-shown"]),qe(e,M.toast)):qe(e,M.modal),xe(e,t,"popup"),"string"===typeof t.customClass&&qe(e,t.customClass),t.icon&&qe(e,M["icon-".concat(t.icon)])},Mt=function(e,t){var i=ue();if(i){var r=t.progressSteps,a=t.currentProgressStep;r&&0!==r.length&&void 0!==a?(Re(i),i.textContent="",a>=r.length&&W("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((function(e,n){var o=Lt(e);if(i.appendChild(o),n===a&&qe(o,M["active-progress-step"]),n!==r.length-1){var s=Ut(t);i.appendChild(s)}}))):Pe(i)}},Lt=function(e){var t=document.createElement("li");return qe(t,M["progress-step"]),De(t,e),t},Ut=function(e){var t=document.createElement("li");return qe(t,M["progress-step-line"]),e.progressStepsDistance&&Ie(t,"width",e.progressStepsDistance),t},Vt=function(e,t){var i=ne();i&&(Oe(i),Me(i,t.title||t.titleText,"block"),t.title&&tt(t.title,i),t.titleText&&(i.innerText=t.titleText),xe(i,t,"title"))},zt=function(e,t){Ot(e,t),ht(e,t),Mt(e,t),jt(e,t),Pt(e,t),Vt(e,t),lt(e,t),Ct(e,t),nt(e,t),xt(e,t);var i=ie();"function"===typeof t.didRender&&i&&t.didRender(i)},Wt=function(){return Le(ie())},Ht=function(){var e;return null===(e=he())||void 0===e?void 0:e.click()},$t=function(){var e;return null===(e=fe())||void 0===e?void 0:e.click()},Gt=function(){var e;return null===(e=ce())||void 0===e?void 0:e.click()},Kt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Yt=function(e){e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Jt=function(e,t,i){Yt(e),t.toast||(e.keydownHandler=function(e){return ei(t,e,i)},e.keydownTarget=t.keydownListenerCapture?window:ie(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Qt=function(e,t){var i,r=ye();if(r.length)return e+=t,e===r.length?e=0:-1===e&&(e=r.length-1),void r[e].focus();null===(i=ie())||void 0===i||i.focus()},Xt=["ArrowRight","ArrowDown"],Zt=["ArrowLeft","ArrowUp"],ei=function(e,t,i){e&&(t.isComposing||229===t.keyCode||(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?ti(t,e):"Tab"===t.key?ii(t):[].concat(Xt,Zt).includes(t.key)?ri(t.key):"Escape"===t.key&&ai(t,e,i)))},ti=function(e,t){if(Y(t.allowEnterKey)){var i=je(ie(),t.input);if(e.target&&i&&e.target instanceof HTMLElement&&e.target.outerHTML===i.outerHTML){if(["textarea","file"].includes(t.input))return;Ht(),e.preventDefault()}}},ii=function(e){for(var t=e.target,i=ye(),r=-1,a=0;a<i.length;a++)if(t===i[a]){r=a;break}e.shiftKey?Qt(r,-1):Qt(r,1),e.stopPropagation(),e.preventDefault()},ri=function(e){var t=ge(),i=he(),r=fe(),a=ce();if(t&&i&&r&&a){var n=[i,r,a];if(!(document.activeElement instanceof HTMLElement)||n.includes(document.activeElement)){var o=Xt.includes(e)?"nextElementSibling":"previousElementSibling",s=document.activeElement;if(s){for(var u=0;u<t.children.length;u++){if(s=s[o],!s)return;if(s instanceof HTMLButtonElement&&Le(s))break}s instanceof HTMLButtonElement&&s.focus()}}}},ai=function(e,t,i){Y(t.allowEscapeKey)&&(e.preventDefault(),i(Kt.esc))},ni={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},oi=function(){var e=Array.from(document.body.children);e.forEach((function(e){e===Z()||e.contains(Z())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")||""),e.setAttribute("aria-hidden","true"))}))},si=function(){var e=Array.from(document.body.children);e.forEach((function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},ui="undefined"!==typeof window&&!!window.GestureEvent,li=function(){if(ui&&!Ee(document.body,M.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),qe(document.body,M.iosfix),hi()}},hi=function(){var e,t=Z();t&&(t.ontouchstart=function(t){e=ci(t)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())})},ci=function(e){var t=e.target,i=Z(),r=oe();return!(!i||!r)&&(!fi(e)&&!di(e)&&(t===i||!Ve(i)&&t instanceof HTMLElement&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&(!Ve(r)||!r.contains(t))))},fi=function(e){return e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType},di=function(e){return e.touches&&e.touches.length>1},_i=function(){if(Ee(document.body,M.iosfix)){var e=parseInt(document.body.style.top,10);Ae(document.body,M.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},gi=function(){var e=document.createElement("div");e.className=M["scrollbar-measure"],document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Fi=null,mi=function(e){null===Fi&&(document.body.scrollHeight>window.innerHeight||"scroll"===e)&&(Fi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Fi+gi(),"px"))},pi=function(){null!==Fi&&(document.body.style.paddingRight="".concat(Fi,"px"),Fi=null)};function bi(e,t,i,r){ke()?ji(e,r):(P(i).then((function(){return ji(e,r)})),Yt(I)),ui?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),we()&&(pi(),_i(),si()),yi()}function yi(){Ae([document.documentElement,document.body],[M.shown,M["height-auto"],M["no-backdrop"],M["toast-shown"]])}function wi(e){e=Ei(e);var t=ni.swalPromiseResolve.get(this),i=ki(this);this.isAwaitingPromise?e.isDismissed||(Di(this),t(e)):i&&t(e)}var ki=function(e){var t=ie();if(!t)return!1;var i=_t.innerParams.get(e);if(!i||Ee(t,i.hideClass.popup))return!1;Ae(t,i.showClass.popup),qe(t,i.hideClass.popup);var r=Z();return Ae(r,i.showClass.backdrop),qe(r,i.hideClass.backdrop),Ci(e,t,i),!0};function vi(e){var t=ni.swalPromiseReject.get(this);Di(this),t&&t(e)}var Di=function(e){e.isAwaitingPromise&&(delete e.isAwaitingPromise,_t.innerParams.get(e)||e._destroy())},Ei=function(e){return"undefined"===typeof e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e)},Ci=function(e,t,i){var r=Z(),a=at&&ze(t);"function"===typeof i.willClose&&i.willClose(t),a?xi(e,t,r,i.returnFocus,i.didClose):bi(e,r,i.returnFocus,i.didClose)},xi=function(e,t,i,r,a){at&&(I.swalCloseEventFinishedCallback=bi.bind(null,e,i,r,a),t.addEventListener(at,(function(e){e.target===t&&(I.swalCloseEventFinishedCallback(),delete I.swalCloseEventFinishedCallback)})))},ji=function(e,t){setTimeout((function(){"function"===typeof t&&t.bind(e.params)(),e._destroy&&e._destroy()}))},Bi=function(e){var t=ie();if(t||new Sa,t=ie(),t){var i=_e();ke()?Pe(re()):Si(t,e),Re(i),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()}},Si=function(e,t){var i=ge(),r=_e();i&&r&&(!t&&Le(he())&&(t=he()),Re(i),t&&(Pe(t),r.setAttribute("data-button-to-replace",t.className),i.insertBefore(r,t)),qe([e,i],M.loading))},qi=function(e,t){"select"===t.input||"radio"===t.input?Pi(e,t):["text","email","number","tel","textarea"].some((function(e){return e===t.input}))&&(J(t.inputValue)||X(t.inputValue))&&(Bi(he()),Oi(e,t))},Ai=function(e,t){var i=e.getInput();if(!i)return null;switch(t.input){case"checkbox":return Ti(i);case"radio":return Ii(i);case"file":return Ri(i);default:return t.inputAutoTrim?i.value.trim():i.value}},Ti=function(e){return e.checked?1:0},Ii=function(e){return e.checked?e.value:null},Ri=function(e){return e.files&&e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null},Pi=function(e,i){var r=ie();if(r){var a=function(e){"select"===i.input?Ni(r,Li(e),i):"radio"===i.input&&Mi(r,Li(e),i)};J(i.inputOptions)||X(i.inputOptions)?(Bi(he()),Q(i.inputOptions).then((function(t){e.hideLoading(),a(t)}))):"object"===t(i.inputOptions)?a(i.inputOptions):H("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(i.inputOptions)))}},Oi=function(e,t){var i=e.getInput();i&&(Pe(i),Q(t.inputValue).then((function(r){i.value="number"===t.input?"".concat(parseFloat(r)||0):"".concat(r),Re(i),i.focus(),e.hideLoading()}))["catch"]((function(t){H("Error in inputValue promise: ".concat(t)),i.value="",Re(i),i.focus(),e.hideLoading()})))};function Ni(e,t,i){var r=Te(e,M.select);if(r){var a=function(e,t,r){var a=document.createElement("option");a.value=r,De(a,t),a.selected=Ui(r,i.inputValue),e.appendChild(a)};t.forEach((function(e){var t=e[0],i=e[1];if(Array.isArray(i)){var n=document.createElement("optgroup");n.label=t,n.disabled=!1,r.appendChild(n),i.forEach((function(e){return a(n,e[1],e[0])}))}else a(r,i,t)})),r.focus()}}function Mi(e,t,i){var r=Te(e,M.radio);if(r){t.forEach((function(e){var t=e[0],a=e[1],n=document.createElement("input"),o=document.createElement("label");n.type="radio",n.name=M.radio,n.value=t,Ui(t,i.inputValue)&&(n.checked=!0);var s=document.createElement("span");De(s,a),s.className=M.label,o.appendChild(n),o.appendChild(s),r.appendChild(o)}));var a=r.querySelectorAll("input");a.length&&a[0].focus()}}var Li=function e(i){var r=[];return i instanceof Map?i.forEach((function(i,a){var n=i;"object"===t(n)&&(n=e(n)),r.push([a,n])})):Object.keys(i).forEach((function(a){var n=i[a];"object"===t(n)&&(n=e(n)),r.push([a,n])})),r},Ui=function(e,t){return!!t&&t.toString()===e.toString()},Vi=void 0,zi=function(e){var t=_t.innerParams.get(e);e.disableButtons(),t.input?$i(e,"confirm"):Qi(e,!0)},Wi=function(e){var t=_t.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?$i(e,"deny"):Ki(e,!1)},Hi=function(e,t){e.disableButtons(),t(Kt.cancel)},$i=function(e,t){var i=_t.innerParams.get(e);if(i.input){var r=e.getInput(),a=Ai(e,i);i.inputValidator?Gi(e,a,t):r&&!r.checkValidity()?(e.enableButtons(),e.showValidationMessage(i.validationMessage)):"deny"===t?Ki(e,a):Qi(e,a)}else H('The "input" parameter is needed to be set when using returnInputValueOn'.concat(z(t)))},Gi=function(e,t,i){var r=_t.innerParams.get(e);e.disableInput();var a=Promise.resolve().then((function(){return Q(r.inputValidator(t,r.validationMessage))}));a.then((function(r){e.enableButtons(),e.enableInput(),r?e.showValidationMessage(r):"deny"===i?Ki(e,t):Qi(e,t)}))},Ki=function(e,t){var i=_t.innerParams.get(e||Vi);if(i.showLoaderOnDeny&&Bi(fe()),i.preDeny){e.isAwaitingPromise=!0;var r=Promise.resolve().then((function(){return Q(i.preDeny(t,i.validationMessage))}));r.then((function(i){!1===i?(e.hideLoading(),Di(e)):e.close({isDenied:!0,value:"undefined"===typeof i?t:i})}))["catch"]((function(t){return Ji(e||Vi,t)}))}else e.close({isDenied:!0,value:t})},Yi=function(e,t){e.close({isConfirmed:!0,value:t})},Ji=function(e,t){e.rejectPromise(t)},Qi=function(e,t){var i=_t.innerParams.get(e||Vi);if(i.showLoaderOnConfirm&&Bi(),i.preConfirm){e.resetValidationMessage(),e.isAwaitingPromise=!0;var r=Promise.resolve().then((function(){return Q(i.preConfirm(t,i.validationMessage))}));r.then((function(i){Le(le())||!1===i?(e.hideLoading(),Di(e)):Yi(e,"undefined"===typeof i?t:i)}))["catch"]((function(t){return Ji(e||Vi,t)}))}else Yi(e,t)};function Xi(){var e=_t.innerParams.get(this);if(e){var t=_t.domCache.get(this);Pe(t.loader),ke()?e.icon&&Re(re()):Zi(t),Ae([t.popup,t.actions],M.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}}var Zi=function(e){var t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?Re(t[0],"inline-block"):Ue()&&Pe(e.actions)};function er(){var e=_t.innerParams.get(this),t=_t.domCache.get(this);return t?je(t.popup,e.input):null}function tr(e,t,i){var r=_t.domCache.get(e);t.forEach((function(e){r[e].disabled=i}))}function ir(e,t){var i=ie();if(i&&e)if("radio"===e.type)for(var r=i.querySelectorAll('[name="'.concat(M.radio,'"]')),a=0;a<r.length;a++)r[a].disabled=t;else e.disabled=t}function rr(){tr(this,["confirmButton","denyButton","cancelButton"],!1)}function ar(){tr(this,["confirmButton","denyButton","cancelButton"],!0)}function nr(){ir(this.getInput(),!1)}function or(){ir(this.getInput(),!0)}function sr(e){var t=_t.domCache.get(this),i=_t.innerParams.get(this);De(t.validationMessage,e),t.validationMessage.className=M["validation-message"],i.customClass&&i.customClass.validationMessage&&qe(t.validationMessage,i.customClass.validationMessage),Re(t.validationMessage);var r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",M["validation-message"]),Be(r),qe(r,M.inputerror))}function ur(){var e=_t.domCache.get(this);e.validationMessage&&Pe(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Ae(t,M.inputerror))}var lr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},hr=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],cr={},fr=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],dr=function(e){return Object.prototype.hasOwnProperty.call(lr,e)},_r=function(e){return-1!==hr.indexOf(e)},gr=function(e){return cr[e]},Fr=function(e){dr(e)||W('Unknown parameter "'.concat(e,'"'))},mr=function(e){fr.includes(e)&&W('The parameter "'.concat(e,'" is incompatible with toasts'))},pr=function(e){var t=gr(e);t&&K(e,t)},br=function(e){for(var t in!1===e.backdrop&&e.allowOutsideClick&&W('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e)Fr(t),e.toast&&mr(t),pr(t)};function yr(e){var t=ie(),i=_t.innerParams.get(this);if(t&&!Ee(t,i.hideClass.popup)){var r=wr(e),a=Object.assign({},i,r);zt(this,a),_t.innerParams.set(this,a),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}else W("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")}var wr=function(e){var t={};return Object.keys(e).forEach((function(i){_r(i)?t[i]=e[i]:W("Invalid parameter to update: ".concat(i))})),t};function kr(){var e=_t.domCache.get(this),t=_t.innerParams.get(this);t?(e.popup&&I.swalCloseEventFinishedCallback&&(I.swalCloseEventFinishedCallback(),delete I.swalCloseEventFinishedCallback),"function"===typeof t.didDestroy&&t.didDestroy(),vr(this)):Dr(this)}var vr=function(e){Dr(e),delete e.params,delete I.keydownHandler,delete I.keydownTarget,delete I.currentInstance},Dr=function(e){e.isAwaitingPromise?(Er(_t,e),e.isAwaitingPromise=!0):(Er(ni,e),Er(_t,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},Er=function(e,t){for(var i in e)e[i]["delete"](t)},Cr=Object.freeze({__proto__:null,_destroy:kr,close:wi,closeModal:wi,closePopup:wi,closeToast:wi,disableButtons:ar,disableInput:or,disableLoading:Xi,enableButtons:rr,enableInput:nr,getInput:er,handleAwaitingPromise:Di,hideLoading:Xi,rejectPromise:vi,resetValidationMessage:ur,showValidationMessage:sr,update:yr}),xr=function(e,t,i){e.toast?jr(e,t,i):(qr(t),Ar(t),Tr(e,t,i))},jr=function(e,t,i){t.popup.onclick=function(){e&&(Br(e)||e.timer||e.input)||i(Kt.close)}},Br=function(e){return!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton)},Sr=!1,qr=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=function(){},t.target===e.container&&(Sr=!0)}}},Ar=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=function(){},(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(Sr=!0)}}},Tr=function(e,t,i){t.container.onclick=function(r){Sr?Sr=!1:r.target===t.container&&Y(e.allowOutsideClick)&&i(Kt.backdrop)}},Ir=function(e){return"object"===t(e)&&e.jquery},Rr=function(e){return e instanceof Element||Ir(e)},Pr=function(e){var i={};return"object"!==t(e[0])||Rr(e[0])?["title","html","icon"].forEach((function(r,a){var n=e[a];"string"===typeof n||Rr(n)?i[r]=n:void 0!==n&&H("Unexpected type of ".concat(r,'! Expected "string" or "Element", got ').concat(t(n)))})):Object.assign(i,e[0]),i};function Or(){for(var e=this,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return l(e,i)}function Nr(e){var t=function(t){n(s,t);var r=f(s);function s(){return i(this,s),r.apply(this,arguments)}return a(s,[{key:"_main",value:function(t,i){return _(o(s.prototype),"_main",this).call(this,t,Object.assign({},e,i))}}]),s}(this);return t}var Mr=function(){return I.timeout&&I.timeout.getTimerLeft()},Lr=function(){if(I.timeout)return He(),I.timeout.stop()},Ur=function(){if(I.timeout){var e=I.timeout.start();return We(e),e}},Vr=function(){var e=I.timeout;return e&&(e.running?Lr():Ur())},zr=function(e){if(I.timeout){var t=I.timeout.increase(e);return We(t,!0),t}},Wr=function(){return!(!I.timeout||!I.timeout.isRunning())},Hr=!1,$r={};function Gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";$r[e]=this,Hr||(document.body.addEventListener("click",Yr),Hr=!0)}var Kr,Yr=function(e){for(var t=e.target;t&&t!==document;t=t.parentNode)for(var i in $r){var r=t.getAttribute(i);if(r)return void $r[i].fire({template:r})}},Jr=Object.freeze({__proto__:null,argsToParams:Pr,bindClickHandler:Gr,clickCancel:Gt,clickConfirm:Ht,clickDeny:$t,enableLoading:Bi,fire:Or,getActions:ge,getCancelButton:ce,getCloseButton:pe,getConfirmButton:he,getContainer:Z,getDenyButton:fe,getFocusableElements:ye,getFooter:Fe,getHtmlContainer:oe,getIcon:re,getIconContent:ae,getImage:se,getInputLabel:de,getLoader:_e,getPopup:ie,getProgressSteps:ue,getTimerLeft:Mr,getTimerProgressBar:me,getTitle:ne,getValidationMessage:le,increaseTimer:zr,isDeprecatedParameter:gr,isLoading:ve,isTimerRunning:Wr,isUpdatableParameter:_r,isValidParameter:dr,isVisible:Wt,mixin:Nr,resumeTimer:Ur,showLoading:Bi,stopTimer:Lr,toggleTimer:Vr}),Qr=function(){function e(t,r){i(this,e),this.callback=t,this.remaining=r,this.running=!1,this.start()}return a(e,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),e}(),Xr=["swal-title","swal-html","swal-footer"],Zr=function(e){var t="string"===typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};var i=t.content;sa(i);var r=Object.assign(ea(i),ta(i),ia(i),ra(i),aa(i),na(i),oa(i,Xr));return r},ea=function(e){var i={},r=Array.from(e.querySelectorAll("swal-param"));return r.forEach((function(e){ua(e,["name","value"]);var r=e.getAttribute("name"),a=e.getAttribute("value");"boolean"===typeof lr[r]?i[r]="false"!==a:"object"===t(lr[r])?i[r]=JSON.parse(a):i[r]=a})),i},ta=function(e){var t={},i=Array.from(e.querySelectorAll("swal-function-param"));return i.forEach((function(e){var i=e.getAttribute("name"),r=e.getAttribute("value");t[i]=new Function("return ".concat(r))()})),t},ia=function(e){var t={},i=Array.from(e.querySelectorAll("swal-button"));return i.forEach((function(e){ua(e,["type","color","aria-label"]);var i=e.getAttribute("type");t["".concat(i,"ButtonText")]=e.innerHTML,t["show".concat(z(i),"Button")]=!0,e.hasAttribute("color")&&(t["".concat(i,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t["".concat(i,"ButtonAriaLabel")]=e.getAttribute("aria-label"))})),t},ra=function(e){var t={},i=e.querySelector("swal-image");return i&&(ua(i,["src","width","height","alt"]),i.hasAttribute("src")&&(t.imageUrl=i.getAttribute("src")),i.hasAttribute("width")&&(t.imageWidth=i.getAttribute("width")),i.hasAttribute("height")&&(t.imageHeight=i.getAttribute("height")),i.hasAttribute("alt")&&(t.imageAlt=i.getAttribute("alt"))),t},aa=function(e){var t={},i=e.querySelector("swal-icon");return i&&(ua(i,["type","color"]),i.hasAttribute("type")&&(t.icon=i.getAttribute("type")),i.hasAttribute("color")&&(t.iconColor=i.getAttribute("color")),t.iconHtml=i.innerHTML),t},na=function(e){var t={},i=e.querySelector("swal-input");i&&(ua(i,["type","label","placeholder","value"]),t.input=i.getAttribute("type")||"text",i.hasAttribute("label")&&(t.inputLabel=i.getAttribute("label")),i.hasAttribute("placeholder")&&(t.inputPlaceholder=i.getAttribute("placeholder")),i.hasAttribute("value")&&(t.inputValue=i.getAttribute("value")));var r=Array.from(e.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach((function(e){ua(e,["value"]);var i=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[i]=r}))),t},oa=function(e,t){var i={};for(var r in t){var a=t[r],n=e.querySelector(a);n&&(ua(n,[]),i[a.replace(/^swal-/,"")]=n.innerHTML.trim())}return i},sa=function(e){var t=Xr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((function(e){var i=e.tagName.toLowerCase();t.includes(i)||W("Unrecognized element <".concat(i,">"))}))},ua=function(e,t){Array.from(e.attributes).forEach((function(i){-1===t.indexOf(i.name)&&W(['Unrecognized attribute "'.concat(i.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))},la=10,ha=function(e){var t=Z(),i=ie();"function"===typeof e.willOpen&&e.willOpen(i);var r=window.getComputedStyle(document.body),a=r.overflowY;_a(t,i,e),setTimeout((function(){fa(t,i)}),la),we()&&(da(t,e.scrollbarPadding,a),oi()),ke()||I.previousActiveElement||(I.previousActiveElement=document.activeElement),"function"===typeof e.didOpen&&setTimeout((function(){return e.didOpen(i)})),Ae(t,M["no-transition"])},ca=function e(t){var i=ie();if(t.target===i&&at){var r=Z();i.removeEventListener(at,e),r.style.overflowY="auto"}},fa=function(e,t){at&&ze(t)?(e.style.overflowY="hidden",t.addEventListener(at,ca)):e.style.overflowY="auto"},da=function(e,t,i){li(),t&&"hidden"!==i&&mi(i),setTimeout((function(){e.scrollTop=0}))},_a=function(e,t,i){qe(e,i.showClass.backdrop),i.animation?(t.style.setProperty("opacity","0","important"),Re(t,"grid"),setTimeout((function(){qe(t,i.showClass.popup),t.style.removeProperty("opacity")}),la)):Re(t,"grid"),qe([document.documentElement,document.body],M.shown),i.heightAuto&&i.backdrop&&!i.toast&&qe([document.documentElement,document.body],M["height-auto"])},ga={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};function Fa(e){e.inputValidator||("email"===e.input&&(e.inputValidator=ga["email"]),"url"===e.input&&(e.inputValidator=ga["url"]))}function ma(e){(!e.target||"string"===typeof e.target&&!document.querySelector(e.target)||"string"!==typeof e.target&&!e.target.appendChild)&&(W('Target parameter is not valid, defaulting to "body"'),e.target="body")}function pa(e){Fa(e),e.showLoaderOnConfirm&&!e.preConfirm&&W("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),ma(e),"string"===typeof e.title&&(e.title=e.title.split("\n").join("<br />")),et(e)}var ba=new WeakMap,ya=function(){function e(){if(i(this,e),A(this,ba,{writable:!0,value:void 0}),"undefined"!==typeof window){Kr=this;for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var n=Object.freeze(this.constructor.argsToParams(r));this.params=n,this.isAwaitingPromise=!1,x(this,ba,this._main(Kr.params))}}return a(e,[{key:"_main",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(br(Object.assign({},t,e)),I.currentInstance){var i=ni.swalPromiseResolve.get(I.currentInstance),r=I.currentInstance.isAwaitingPromise;I.currentInstance._destroy(),r||i({isDismissed:!0}),we()&&si()}I.currentInstance=Kr;var a=ka(e,t);pa(a),Object.freeze(a),I.timeout&&(I.timeout.stop(),delete I.timeout),clearTimeout(I.restoreFocusTimeout);var n=va(Kr);return zt(Kr,a),_t.innerParams.set(Kr,a),wa(Kr,n,a)}},{key:"then",value:function(e){return C(this,ba).then(e)}},{key:"finally",value:function(e){return C(this,ba)["finally"](e)}}]),e}(),wa=function(e,t,i){return new Promise((function(r,a){var n=function(t){e.close({isDismissed:!0,dismiss:t})};ni.swalPromiseResolve.set(e,r),ni.swalPromiseReject.set(e,a),t.confirmButton.onclick=function(){zi(e)},t.denyButton.onclick=function(){Wi(e)},t.cancelButton.onclick=function(){Hi(e,n)},t.closeButton.onclick=function(){n(Kt.close)},xr(i,t,n),Jt(I,i,n),qi(e,i),ha(i),Da(I,i,n),Ea(t,i),setTimeout((function(){t.container.scrollTop=0}))}))},ka=function(e,t){var i=Zr(e),r=Object.assign({},lr,t,i,e);return r.showClass=Object.assign({},lr.showClass,r.showClass),r.hideClass=Object.assign({},lr.hideClass,r.hideClass),!1===r.animation&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},va=function(e){var t={popup:ie(),container:Z(),actions:ge(),confirmButton:he(),denyButton:fe(),cancelButton:ce(),loader:_e(),closeButton:pe(),validationMessage:le(),progressSteps:ue()};return _t.domCache.set(e,t),t},Da=function(e,t,i){var r=me();Pe(r),t.timer&&(e.timeout=new Qr((function(){i("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(Re(r),xe(r,t,"timerProgressBar"),setTimeout((function(){e.timeout&&e.timeout.running&&We(t.timer)}))))},Ea=function(e,t){t.toast||(Y(t.allowEnterKey)?Ca(e,t)||Qt(-1,1):xa())},Ca=function(e,t){return t.focusDeny&&Le(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Le(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!Le(e.confirmButton))&&(e.confirmButton.focus(),!0)},xa=function(){document.activeElement instanceof HTMLElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!==typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var ja=new Date,Ba=localStorage.getItem("swal-initiation");Ba?(ja.getTime()-Date.parse(Ba))/864e5>3&&setTimeout((function(){document.body.style.pointerEvents="none";var e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout((function(){e.play()["catch"]((function(){}))}),2500)}),500):localStorage.setItem("swal-initiation","".concat(ja))}ya.prototype.disableButtons=ar,ya.prototype.enableButtons=rr,ya.prototype.getInput=er,ya.prototype.disableInput=or,ya.prototype.enableInput=nr,ya.prototype.hideLoading=Xi,ya.prototype.disableLoading=Xi,ya.prototype.showValidationMessage=sr,ya.prototype.resetValidationMessage=ur,ya.prototype.close=wi,ya.prototype.closePopup=wi,ya.prototype.closeModal=wi,ya.prototype.closeToast=wi,ya.prototype.rejectPromise=vi,ya.prototype.update=yr,ya.prototype._destroy=kr,Object.assign(ya,Jr),Object.keys(Cr).forEach((function(e){ya[e]=function(){var t;return Kr&&Kr[e]?(t=Kr)[e].apply(t,arguments):null}})),ya.DismissReason=Kt,ya.version="11.10.1";var Sa=ya;return Sa["default"]=Sa,Sa})),"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var i=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=t);else try{i.innerHTML=t}catch(e){i.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')},89:function(e,t){"use strict";t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[r,a]of t)i[r]=a;return i}},509:function(e,t,i){"use strict";var r=i(9985),a=i(3691),n=TypeError;e.exports=function(e){if(r(e))return e;throw new n(a(e)+" is not a function")}},3550:function(e,t,i){"use strict";var r=i(9985),a=String,n=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw new n("Can't set "+a(e)+" as a prototype")}},767:function(e,t,i){"use strict";var r=i(3622),a=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new a("Incorrect invocation")}},5027:function(e,t,i){"use strict";var r=i(8999),a=String,n=TypeError;e.exports=function(e){if(r(e))return e;throw new n(a(e)+" is not an object")}},7075:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,t,i){"use strict";var r,a,n,o=i(7075),s=i(7697),u=i(9037),l=i(9985),h=i(8999),c=i(6812),f=i(926),d=i(3691),_=i(5773),g=i(1880),F=i(2148),m=i(3622),p=i(1868),b=i(9385),y=i(4201),w=i(4630),k=i(618),v=k.enforce,D=k.get,E=u.Int8Array,C=E&&E.prototype,x=u.Uint8ClampedArray,j=x&&x.prototype,B=E&&p(E),S=C&&p(C),q=Object.prototype,A=u.TypeError,T=y("toStringTag"),I=w("TYPED_ARRAY_TAG"),R="TypedArrayConstructor",P=o&&!!b&&"Opera"!==f(u.opera),O=!1,N={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},L=function(e){if(!h(e))return!1;var t=f(e);return"DataView"===t||c(N,t)||c(M,t)},U=function(e){var t=p(e);if(h(t)){var i=D(t);return i&&c(i,R)?i[R]:U(t)}},V=function(e){if(!h(e))return!1;var t=f(e);return c(N,t)||c(M,t)},z=function(e){if(V(e))return e;throw new A("Target is not a typed array")},W=function(e){if(l(e)&&(!b||m(B,e)))return e;throw new A(d(e)+" is not a typed array constructor")},H=function(e,t,i,r){if(s){if(i)for(var a in N){var n=u[a];if(n&&c(n.prototype,e))try{delete n.prototype[e]}catch(o){try{n.prototype[e]=t}catch(l){}}}S[e]&&!i||g(S,e,i?t:P&&C[e]||t,r)}},$=function(e,t,i){var r,a;if(s){if(b){if(i)for(r in N)if(a=u[r],a&&c(a,e))try{delete a[e]}catch(n){}if(B[e]&&!i)return;try{return g(B,e,i?t:P&&B[e]||t)}catch(n){}}for(r in N)a=u[r],!a||a[e]&&!i||g(a,e,t)}};for(r in N)a=u[r],n=a&&a.prototype,n?v(n)[R]=a:P=!1;for(r in M)a=u[r],n=a&&a.prototype,n&&(v(n)[R]=a);if((!P||!l(B)||B===Function.prototype)&&(B=function(){throw new A("Incorrect invocation")},P))for(r in N)u[r]&&b(u[r],B);if((!P||!S||S===q)&&(S=B.prototype,P))for(r in N)u[r]&&b(u[r].prototype,S);if(P&&p(j)!==S&&b(j,S),s&&!c(S,T))for(r in O=!0,F(S,T,{configurable:!0,get:function(){return h(this)?this[I]:void 0}}),N)u[r]&&_(u[r],I,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:O&&I,aTypedArray:z,aTypedArrayConstructor:W,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:$,getTypedArrayConstructor:U,isView:L,isTypedArray:V,TypedArray:B,TypedArrayPrototype:S}},9976:function(e,t,i){"use strict";var r=i(6310);e.exports=function(e,t){var i=0,a=r(t),n=new e(a);while(a>i)n[i]=t[i++];return n}},4328:function(e,t,i){"use strict";var r=i(5290),a=i(7578),n=i(6310),o=function(e){return function(t,i,o){var s,u=r(t),l=n(u),h=a(o,l);if(e&&i!==i){while(l>h)if(s=u[h++],s!==s)return!0}else for(;l>h;h++)if((e||h in u)&&u[h]===i)return e||h||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,i){"use strict";var r=i(7697),a=i(2297),n=TypeError,o=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(a(e)&&!o(e,"length").writable)throw new n("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6166:function(e,t,i){"use strict";var r=i(6310);e.exports=function(e,t){for(var i=r(e),a=new t(i),n=0;n<i;n++)a[n]=e[i-n-1];return a}},6134:function(e,t,i){"use strict";var r=i(6310),a=i(8700),n=RangeError;e.exports=function(e,t,i,o){var s=r(e),u=a(i),l=u<0?s+u:u;if(l>=s||l<0)throw new n("Incorrect index");for(var h=new t(s),c=0;c<s;c++)h[c]=c===l?o:e[c];return h}},6648:function(e,t,i){"use strict";var r=i(8844),a=r({}.toString),n=r("".slice);e.exports=function(e){return n(a(e),8,-1)}},926:function(e,t,i){"use strict";var r=i(3043),a=i(9985),n=i(6648),o=i(4201),s=o("toStringTag"),u=Object,l="Arguments"===n(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(i){}};e.exports=r?n:function(e){var t,i,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=h(t=u(e),s))?i:l?n(t):"Object"===(r=n(t))&&a(t.callee)?"Arguments":r}},8758:function(e,t,i){"use strict";var r=i(6812),a=i(9152),n=i(2474),o=i(2560);e.exports=function(e,t,i){for(var s=a(t),u=o.f,l=n.f,h=0;h<s.length;h++){var c=s[h];r(e,c)||i&&r(i,c)||u(e,c,l(t,c))}}},1748:function(e,t,i){"use strict";var r=i(3689);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5773:function(e,t,i){"use strict";var r=i(7697),a=i(2560),n=i(5684);e.exports=r?function(e,t,i){return a.f(e,t,n(1,i))}:function(e,t,i){return e[t]=i,e}},5684:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2148:function(e,t,i){"use strict";var r=i(8702),a=i(2560);e.exports=function(e,t,i){return i.get&&r(i.get,t,{getter:!0}),i.set&&r(i.set,t,{setter:!0}),a.f(e,t,i)}},1880:function(e,t,i){"use strict";var r=i(9985),a=i(2560),n=i(8702),o=i(5014);e.exports=function(e,t,i,s){s||(s={});var u=s.enumerable,l=void 0!==s.name?s.name:t;if(r(i)&&n(i,l,s),s.global)u?e[t]=i:o(t,i);else{try{s.unsafe?e[t]&&(u=!0):delete e[t]}catch(h){}u?e[t]=i:a.f(e,t,{value:i,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},5014:function(e,t,i){"use strict";var r=i(9037),a=Object.defineProperty;e.exports=function(e,t){try{a(r,e,{value:t,configurable:!0,writable:!0})}catch(i){r[e]=t}return t}},7697:function(e,t,i){"use strict";var r=i(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){"use strict";var t="object"==typeof document&&document.all,i="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:i}},6420:function(e,t,i){"use strict";var r=i(9037),a=i(8999),n=r.document,o=a(n)&&a(n.createElement);e.exports=function(e){return o?n.createElement(e):{}}},5565:function(e){"use strict";var t=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw t("Maximum allowed index exceeded");return e}},7136:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,i){"use strict";var r,a,n=i(9037),o=i(71),s=n.process,u=n.Deno,l=s&&s.versions||u&&u.version,h=l&&l.v8;h&&(r=h.split("."),a=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!a&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(a=+r[1]))),e.exports=a},2739:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(e,t,i){"use strict";var r=i(8844),a=Error,n=r("".replace),o=function(e){return String(new a(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,u=s.test(o);e.exports=function(e,t){if(u&&"string"==typeof e&&!a.prepareStackTrace)while(t--)e=n(e,s,"");return e}},9989:function(e,t,i){"use strict";var r=i(9037),a=i(2474).f,n=i(5773),o=i(1880),s=i(5014),u=i(8758),l=i(5266);e.exports=function(e,t){var i,h,c,f,d,_,g=e.target,F=e.global,m=e.stat;if(h=F?r:m?r[g]||s(g,{}):(r[g]||{}).prototype,h)for(c in t){if(d=t[c],e.dontCallGetSet?(_=a(h,c),f=_&&_.value):f=h[c],i=l(F?c:g+(m?".":"#")+c,e.forced),!i&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&n(d,"sham",!0),o(h,c,d,e)}}},3689:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,i){"use strict";var r=i(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,i){"use strict";var r=i(7215),a=Function.prototype.call;e.exports=r?a.bind(a):function(){return a.apply(a,arguments)}},1236:function(e,t,i){"use strict";var r=i(7697),a=i(6812),n=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,s=a(n,"name"),u=s&&"something"===function(){}.name,l=s&&(!r||r&&o(n,"name").configurable);e.exports={EXISTS:s,PROPER:u,CONFIGURABLE:l}},2743:function(e,t,i){"use strict";var r=i(8844),a=i(509);e.exports=function(e,t,i){try{return r(a(Object.getOwnPropertyDescriptor(e,t)[i]))}catch(n){}}},8844:function(e,t,i){"use strict";var r=i(7215),a=Function.prototype,n=a.call,o=r&&a.bind.bind(n,n);e.exports=r?o:function(e){return function(){return n.apply(e,arguments)}}},6058:function(e,t,i){"use strict";var r=i(9037),a=i(9985),n=function(e){return a(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?n(r[e]):r[e]&&r[e][t]}},4849:function(e,t,i){"use strict";var r=i(509),a=i(981);e.exports=function(e,t){var i=e[t];return a(i)?void 0:r(i)}},9037:function(e,t,i){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof i.g&&i.g)||function(){return this}()||this||Function("return this")()},6812:function(e,t,i){"use strict";var r=i(8844),a=i(690),n=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return n(a(e),t)}},7248:function(e){"use strict";e.exports={}},8506:function(e,t,i){"use strict";var r=i(7697),a=i(3689),n=i(6420);e.exports=!r&&!a((function(){return 7!==Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,i){"use strict";var r=i(8844),a=i(3689),n=i(6648),o=Object,s=r("".split);e.exports=a((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===n(e)?s(e,""):o(e)}:o},3457:function(e,t,i){"use strict";var r=i(9985),a=i(8999),n=i(9385);e.exports=function(e,t,i){var o,s;return n&&r(o=t.constructor)&&o!==i&&a(s=o.prototype)&&s!==i.prototype&&n(e,s),e}},6738:function(e,t,i){"use strict";var r=i(8844),a=i(9985),n=i(4091),o=r(Function.toString);a(n.inspectSource)||(n.inspectSource=function(e){return o(e)}),e.exports=n.inspectSource},618:function(e,t,i){"use strict";var r,a,n,o=i(9834),s=i(9037),u=i(8999),l=i(5773),h=i(6812),c=i(4091),f=i(2713),d=i(7248),_="Object already initialized",g=s.TypeError,F=s.WeakMap,m=function(e){return n(e)?a(e):r(e,{})},p=function(e){return function(t){var i;if(!u(t)||(i=a(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return i}};if(o||c.state){var b=c.state||(c.state=new F);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new g(_);return t.facade=e,b.set(e,t),t},a=function(e){return b.get(e)||{}},n=function(e){return b.has(e)}}else{var y=f("state");d[y]=!0,r=function(e,t){if(h(e,y))throw new g(_);return t.facade=e,l(e,y,t),t},a=function(e){return h(e,y)?e[y]:{}},n=function(e){return h(e,y)}}e.exports={set:r,get:a,has:n,enforce:m,getterFor:p}},2297:function(e,t,i){"use strict";var r=i(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9401:function(e,t,i){"use strict";var r=i(926);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},9985:function(e,t,i){"use strict";var r=i(2659),a=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===a}:function(e){return"function"==typeof e}},5266:function(e,t,i){"use strict";var r=i(3689),a=i(9985),n=/#|\.prototype\./,o=function(e,t){var i=u[s(e)];return i===h||i!==l&&(a(t)?r(t):!!t)},s=o.normalize=function(e){return String(e).replace(n,".").toLowerCase()},u=o.data={},l=o.NATIVE="N",h=o.POLYFILL="P";e.exports=o},981:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},8999:function(e,t,i){"use strict";var r=i(9985),a=i(2659),n=a.all;e.exports=a.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===n}:function(e){return"object"==typeof e?null!==e:r(e)}},3931:function(e){"use strict";e.exports=!1},734:function(e,t,i){"use strict";var r=i(6058),a=i(9985),n=i(3622),o=i(9525),s=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return a(t)&&n(t.prototype,s(e))}},6310:function(e,t,i){"use strict";var r=i(3126);e.exports=function(e){return r(e.length)}},8702:function(e,t,i){"use strict";var r=i(8844),a=i(3689),n=i(9985),o=i(6812),s=i(7697),u=i(1236).CONFIGURABLE,l=i(6738),h=i(618),c=h.enforce,f=h.get,d=String,_=Object.defineProperty,g=r("".slice),F=r("".replace),m=r([].join),p=s&&!a((function(){return 8!==_((function(){}),"length",{value:8}).length})),b=String(String).split("String"),y=e.exports=function(e,t,i){"Symbol("===g(d(t),0,7)&&(t="["+F(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),i&&i.getter&&(t="get "+t),i&&i.setter&&(t="set "+t),(!o(e,"name")||u&&e.name!==t)&&(s?_(e,"name",{value:t,configurable:!0}):e.name=t),p&&i&&o(i,"arity")&&e.length!==i.arity&&_(e,"length",{value:i.arity});try{i&&o(i,"constructor")&&i.constructor?s&&_(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(a){}var r=c(e);return o(r,"source")||(r.source=m(b,"string"==typeof t?t:"")),e};Function.prototype.toString=y((function(){return n(this)&&f(this).source||l(this)}),"toString")},8828:function(e){"use strict";var t=Math.ceil,i=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?i:t)(r)}},3841:function(e,t,i){"use strict";var r=i(4327);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2560:function(e,t,i){"use strict";var r=i(7697),a=i(8506),n=i(5648),o=i(5027),s=i(8360),u=TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c="enumerable",f="configurable",d="writable";t.f=r?n?function(e,t,i){if(o(e),t=s(t),o(i),"function"===typeof e&&"prototype"===t&&"value"in i&&d in i&&!i[d]){var r=h(e,t);r&&r[d]&&(e[t]=i.value,i={configurable:f in i?i[f]:r[f],enumerable:c in i?i[c]:r[c],writable:!1})}return l(e,t,i)}:l:function(e,t,i){if(o(e),t=s(t),o(i),a)try{return l(e,t,i)}catch(r){}if("get"in i||"set"in i)throw new u("Accessors not supported");return"value"in i&&(e[t]=i.value),e}},2474:function(e,t,i){"use strict";var r=i(7697),a=i(2615),n=i(9556),o=i(5684),s=i(5290),u=i(8360),l=i(6812),h=i(8506),c=Object.getOwnPropertyDescriptor;t.f=r?c:function(e,t){if(e=s(e),t=u(t),h)try{return c(e,t)}catch(i){}if(l(e,t))return o(!a(n.f,e,t),e[t])}},2741:function(e,t,i){"use strict";var r=i(4948),a=i(2739),n=a.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,n)}},7518:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},1868:function(e,t,i){"use strict";var r=i(6812),a=i(9985),n=i(690),o=i(2713),s=i(1748),u=o("IE_PROTO"),l=Object,h=l.prototype;e.exports=s?l.getPrototypeOf:function(e){var t=n(e);if(r(t,u))return t[u];var i=t.constructor;return a(i)&&t instanceof i?i.prototype:t instanceof l?h:null}},3622:function(e,t,i){"use strict";var r=i(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,i){"use strict";var r=i(8844),a=i(6812),n=i(5290),o=i(4328).indexOf,s=i(7248),u=r([].push);e.exports=function(e,t){var i,r=n(e),l=0,h=[];for(i in r)!a(s,i)&&a(r,i)&&u(h,i);while(t.length>l)a(r,i=t[l++])&&(~o(h,i)||u(h,i));return h}},9556:function(e,t){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!i.call({1:2},1);t.f=a?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},9385:function(e,t,i){"use strict";var r=i(2743),a=i(5027),n=i(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,i={};try{e=r(Object.prototype,"__proto__","set"),e(i,[]),t=i instanceof Array}catch(o){}return function(i,r){return a(i),n(r),t?e(i,r):i.__proto__=r,i}}():void 0)},5899:function(e,t,i){"use strict";var r=i(2615),a=i(9985),n=i(8999),o=TypeError;e.exports=function(e,t){var i,s;if("string"===t&&a(i=e.toString)&&!n(s=r(i,e)))return s;if(a(i=e.valueOf)&&!n(s=r(i,e)))return s;if("string"!==t&&a(i=e.toString)&&!n(s=r(i,e)))return s;throw new o("Can't convert object to primitive value")}},9152:function(e,t,i){"use strict";var r=i(6058),a=i(8844),n=i(2741),o=i(7518),s=i(5027),u=a([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=n.f(s(e)),i=o.f;return i?u(t,i(e)):t}},4684:function(e,t,i){"use strict";var r=i(981),a=TypeError;e.exports=function(e){if(r(e))throw new a("Can't call method on "+e);return e}},2713:function(e,t,i){"use strict";var r=i(3430),a=i(4630),n=r("keys");e.exports=function(e){return n[e]||(n[e]=a(e))}},4091:function(e,t,i){"use strict";var r=i(9037),a=i(5014),n="__core-js_shared__",o=r[n]||a(n,{});e.exports=o},3430:function(e,t,i){"use strict";var r=i(3931),a=i(4091);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,i){"use strict";var r=i(3615),a=i(3689),n=i(9037),o=n.String;e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,i){"use strict";var r=i(8700),a=Math.max,n=Math.min;e.exports=function(e,t){var i=r(e);return i<0?a(i+t,0):n(i,t)}},1530:function(e,t,i){"use strict";var r=i(8732),a=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new a("Can't convert number to bigint");return BigInt(t)}},5290:function(e,t,i){"use strict";var r=i(4413),a=i(4684);e.exports=function(e){return r(a(e))}},8700:function(e,t,i){"use strict";var r=i(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:function(e,t,i){"use strict";var r=i(8700),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},690:function(e,t,i){"use strict";var r=i(4684),a=Object;e.exports=function(e){return a(r(e))}},8732:function(e,t,i){"use strict";var r=i(2615),a=i(8999),n=i(734),o=i(4849),s=i(5899),u=i(4201),l=TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!a(e)||n(e))return e;var i,u=o(e,h);if(u){if(void 0===t&&(t="default"),i=r(u,e,t),!a(i)||n(i))return i;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},8360:function(e,t,i){"use strict";var r=i(8732),a=i(734);e.exports=function(e){var t=r(e,"string");return a(t)?t:t+""}},3043:function(e,t,i){"use strict";var r=i(4201),a=r("toStringTag"),n={};n[a]="z",e.exports="[object z]"===String(n)},4327:function(e,t,i){"use strict";var r=i(926),a=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return a(e)}},3691:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(i){return"Object"}}},4630:function(e,t,i){"use strict";var r=i(8844),a=0,n=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++a+n,36)}},9525:function(e,t,i){"use strict";var r=i(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,i){"use strict";var r=i(7697),a=i(3689);e.exports=r&&a((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(e){"use strict";var t=TypeError;e.exports=function(e,i){if(e<i)throw new t("Not enough arguments");return e}},9834:function(e,t,i){"use strict";var r=i(9037),a=i(9985),n=r.WeakMap;e.exports=a(n)&&/native code/.test(String(n))},4201:function(e,t,i){"use strict";var r=i(9037),a=i(3430),n=i(6812),o=i(4630),s=i(146),u=i(9525),l=r.Symbol,h=a("wks"),c=u?l["for"]||l:l&&l.withoutSetter||o;e.exports=function(e){return n(h,e)||(h[e]=s&&n(l,e)?l[e]:c("Symbol."+e)),h[e]}},560:function(e,t,i){"use strict";var r=i(9989),a=i(690),n=i(6310),o=i(5649),s=i(5565),u=i(3689),l=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},c=l||!h();r({target:"Array",proto:!0,arity:1,forced:c},{push:function(e){var t=a(this),i=n(t),r=arguments.length;s(i+r);for(var u=0;u<r;u++)t[i]=arguments[u],i++;return o(t,i),i}})},4224:function(e,t,i){"use strict";var r=i(6166),a=i(4872),n=a.aTypedArray,o=a.exportTypedArrayMethod,s=a.getTypedArrayConstructor;o("toReversed",(function(){return r(n(this),s(this))}))},1121:function(e,t,i){"use strict";var r=i(4872),a=i(8844),n=i(509),o=i(9976),s=r.aTypedArray,u=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,h=a(r.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&n(e);var t=s(this),i=o(u(t),t);return h(i,e)}))},7133:function(e,t,i){"use strict";var r=i(6134),a=i(4872),n=i(9401),o=i(8700),s=i(1530),u=a.aTypedArray,l=a.getTypedArrayConstructor,h=a.exportTypedArrayMethod,c=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();h("with",{with:function(e,t){var i=u(this),a=o(e),h=n(i)?s(t):+t;return r(i,l(i),a,h)}}["with"],!c)},3429:function(e,t,i){"use strict";var r=i(9989),a=i(9037),n=i(6058),o=i(5684),s=i(2560).f,u=i(6812),l=i(767),h=i(3457),c=i(3841),f=i(7136),d=i(6610),_=i(7697),g=i(3931),F="DOMException",m=n("Error"),p=n(F),b=function(){l(this,y);var e=arguments.length,t=c(e<1?void 0:arguments[0]),i=c(e<2?void 0:arguments[1],"Error"),r=new p(t,i),a=new m(t);return a.name=F,s(r,"stack",o(1,d(a.stack,1))),h(r,this,b),r},y=b.prototype=p.prototype,w="stack"in new m(F),k="stack"in new p(1,2),v=p&&_&&Object.getOwnPropertyDescriptor(a,F),D=!!v&&!(v.writable&&v.configurable),E=w&&!D&&!k;r({global:!0,constructor:!0,forced:g||E},{DOMException:E?b:p});var C=n(F),x=C.prototype;if(x.constructor!==C)for(var j in g||s(x,"constructor",o(1,C)),f)if(u(f,j)){var B=f[j],S=B.s;u(C,S)||s(C,S,o(6,B.c))}},8858:function(e,t,i){"use strict";var r=i(1880),a=i(8844),n=i(4327),o=i(1500),s=URLSearchParams,u=s.prototype,l=a(u.append),h=a(u["delete"]),c=a(u.forEach),f=a([].push),d=new s("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(e){var t=arguments.length,i=t<2?void 0:arguments[1];if(t&&void 0===i)return h(this,e);var r=[];c(this,(function(e,t){f(r,{key:t,value:e})})),o(t,1);var a,s=n(e),u=n(i),d=0,_=0,g=!1,F=r.length;while(d<F)a=r[d++],g||a.key===s?(g=!0,h(this,a.key)):_++;while(_<F)a=r[_++],a.key===s&&a.value===u||l(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,t,i){"use strict";var r=i(1880),a=i(8844),n=i(4327),o=i(1500),s=URLSearchParams,u=s.prototype,l=a(u.getAll),h=a(u.has),c=new s("a=1");!c.has("a",2)&&c.has("a",void 0)||r(u,"has",(function(e){var t=arguments.length,i=t<2?void 0:arguments[1];if(t&&void 0===i)return h(this,e);var r=l(this,e);o(t,1);var a=n(i),s=0;while(s<r.length)if(r[s++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,t,i){"use strict";var r=i(7697),a=i(8844),n=i(2148),o=URLSearchParams.prototype,s=a(o.forEach);r&&!("size"in o)&&n(o,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},7077:function(e,t,i){"use strict";i.d(t,{Jn:function(){return ge},qX:function(){return ce},Xd:function(){return he},Mq:function(){return me},ZF:function(){return Fe},KN:function(){return pe}});i(560);var r=i(7142),a=i(5168),n=i(223);i(3429);const o=(e,t)=>t.some((t=>e instanceof t));let s,u;function l(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,f=new WeakMap,d=new WeakMap,_=new WeakMap,g=new WeakMap;function F(e){const t=new Promise(((t,i)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",n)},a=()=>{t(k(e.result)),r()},n=()=>{i(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",n)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),g.set(t,e),t}function m(e){if(f.has(e))return;const t=new Promise(((t,i)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",n),e.removeEventListener("abort",n)},a=()=>{t(),r()},n=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",n),e.addEventListener("abort",n)}));f.set(e,t)}let p={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return k(e[t])},set(e,t,i){return e[t]=i,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){p=e(p)}function y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(e)?function(...t){return e.apply(v(this),t),k(c.get(this))}:function(...t){return k(e.apply(v(this),t))}:function(t,...i){const r=e.call(v(this),t,...i);return d.set(r,t.sort?t.sort():[t]),k(r)}}function w(e){return"function"===typeof e?y(e):(e instanceof IDBTransaction&&m(e),o(e,l())?new Proxy(e,p):e)}function k(e){if(e instanceof IDBRequest)return F(e);if(_.has(e))return _.get(e);const t=w(e);return t!==e&&(_.set(e,t),g.set(t,e)),t}const v=e=>g.get(e);function D(e,t,{blocked:i,upgrade:r,blocking:a,terminated:n}={}){const o=indexedDB.open(e,t),s=k(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(k(o.result),e.oldVersion,e.newVersion,k(o.transaction),e)})),i&&o.addEventListener("blocked",(e=>i(e.oldVersion,e.newVersion,e))),s.then((e=>{n&&e.addEventListener("close",(()=>n())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const E=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],x=new Map;function j(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,a=C.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!E.includes(i))return;const n=async function(e,...t){const n=this.transaction(e,a?"readwrite":"readonly");let o=n.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),a&&n.done]))[0]};return x.set(t,n),n}b((e=>({...e,get:(t,i,r)=>j(t,i)||e.get(t,i,r),has:(t,i)=>!!j(t,i)||e.has(t,i)})));
/**
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
 */
class B{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(S(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function S(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const q="@firebase/app",A="0.9.23",T=new a.Yd("@firebase/app"),I="@firebase/app-compat",R="@firebase/analytics-compat",P="@firebase/analytics",O="@firebase/app-check-compat",N="@firebase/app-check",M="@firebase/auth",L="@firebase/auth-compat",U="@firebase/database",V="@firebase/database-compat",z="@firebase/functions",W="@firebase/functions-compat",H="@firebase/installations",$="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ie="@firebase/firestore-compat",re="firebase",ae="10.6.0",ne="[DEFAULT]",oe={[q]:"fire-core",[I]:"fire-core-compat",[P]:"fire-analytics",[R]:"fire-analytics-compat",[N]:"fire-app-check",[O]:"fire-app-check-compat",[M]:"fire-auth",[L]:"fire-auth-compat",[U]:"fire-rtdb",[V]:"fire-rtdb-compat",[z]:"fire-fn",[W]:"fire-fn-compat",[H]:"fire-iid",[$]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ie]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},se=new Map,ue=new Map;function le(e,t){try{e.container.addComponent(t)}catch(i){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function he(e){const t=e.name;if(ue.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const i of se.values())le(i,e);return!0}function ce(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new n.LL("app","Firebase",fe);
/**
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
 */
class _e{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}
/**
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
 */const ge=ae;function Fe(e,t={}){let i=e;if("object"!==typeof t){const e=t;t={name:e}}const a=Object.assign({name:ne,automaticDataCollectionEnabled:!1},t),o=a.name;if("string"!==typeof o||!o)throw de.create("bad-app-name",{appName:String(o)});if(i||(i=(0,n.aH)()),!i)throw de.create("no-options");const s=se.get(o);if(s){if((0,n.vZ)(i,s.options)&&(0,n.vZ)(a,s.config))return s;throw de.create("duplicate-app",{appName:o})}const u=new r.H0(o);for(const r of ue.values())u.addComponent(r);const l=new _e(i,a,u);return se.set(o,l),l}function me(e=ne){const t=se.get(e);if(!t&&e===ne&&(0,n.aH)())return Fe();if(!t)throw de.create("no-app",{appName:e});return t}function pe(e,t,i){var a;let n=null!==(a=oe[e])&&void 0!==a?a:e;i&&(n+=`-${i}`);const o=n.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${n}" with version "${t}":`];return o&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void T.warn(e.join(" "))}he(new r.wA(`${n}-version`,(()=>({library:n,version:t})),"VERSION"))}
/**
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
 */
const be="firebase-heartbeat-database",ye=1,we="firebase-heartbeat-store";let ke=null;function ve(){return ke||(ke=D(be,ye,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw de.create("idb-open",{originalErrorMessage:e.message})}))),ke}async function De(e){try{const t=await ve(),i=await t.transaction(we).objectStore(we).get(Ce(e));return i}catch(t){if(t instanceof n.ZR)T.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});T.warn(e.message)}}}async function Ee(e,t){try{const i=await ve(),r=i.transaction(we,"readwrite"),a=r.objectStore(we);await a.put(t,Ce(e)),await r.done}catch(i){if(i instanceof n.ZR)T.warn(i.message);else{const e=de.create("idb-set",{originalErrorMessage:null===i||void 0===i?void 0:i.message});T.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const xe=1024,je=2592e6;class Be{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ae(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e;const t=this.container.getProvider("platform-logger").getImmediate(),i=t.getPlatformInfoString(),r=Se();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),i=Date.now();return i-t<=je})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Se(),{heartbeatsToSend:i,unsentEntries:r}=qe(this._heartbeatsCache.heartbeats),a=(0,n.L)(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Se(){const e=new Date;return e.toISOString().substring(0,10)}function qe(e,t=xe){const i=[];let r=e.slice();for(const a of e){const e=i.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Te(i)>t){e.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Te(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,n.hl)()&&(0,n.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await De(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const i=await this._canUseIndexedDBPromise;if(i){const i=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const i=await this._canUseIndexedDBPromise;if(i){const i=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function Te(e){return(0,n.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Ie(e){he(new r.wA("platform-logger",(e=>new B(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Be(e)),"PRIVATE")),pe(q,A,e),pe(q,A,"esm2017"),pe("fire-js","")}Ie("")},7142:function(e,t,i){"use strict";i.d(t,{H0:function(){return l},wA:function(){return a}});var r=i(223);class a{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const n="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(r)return null;throw a}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:n})}catch(t){}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});i.resolve(e)}catch(t){}}}}clearInstance(e=n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=n){return this.instances.has(e)}getOptions(e=n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,n]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(a);i===e&&n.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),a=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;a.add(e),this.onInitCallbacks.set(r,a);const n=this.instances.get(r);return n&&e(n,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(r){}return i||null}normalizeInstanceIdentifier(e=n){return this.component?this.component.multipleInstances?e:n:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===n?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,i){"use strict";i.d(t,{Yd:function(){return l},in:function(){return a}});i(560);
/**
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
 */const r=[];var a;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(a||(a={}));const n={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},o=a.INFO,s={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},u=(e,t,...i)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=s[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...i)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in a))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?n[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...e),this._logHandler(this,a.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...e),this._logHandler(this,a.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,a.INFO,...e),this._logHandler(this,a.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,a.WARN,...e),this._logHandler(this,a.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...e),this._logHandler(this,a.ERROR,...e)}}},7795:function(e,t,i){"use strict";i.d(t,{ZF:function(){return r.ZF}});var r=i(7077),a="firebase",n="10.6.0";
/**
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
 */
(0,r.KN)(a,n,"app")},2689:function(e,t,i){"use strict";i.d(t,{a$:function(){return Yt},Xb:function(){return At},v0:function(){return Hr},Fb:function(){return Pt},e5:function(){return Tt},ck:function(){return Rt}});i(560),i(8858),i(1318),i(3228);var r=i(223),a=i(7077),n=i(5168);function o(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(i[r[a]]=e[r[a]])}return i}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=i(7142);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=u,h=new r.LL("auth","Firebase",u()),c=new n.Yd("@firebase/auth");function f(e,...t){c.logLevel<=n["in"].WARN&&c.warn(`Auth (${a.Jn}): ${e}`,...t)}function d(e,...t){c.logLevel<=n["in"].ERROR&&c.error(`Auth (${a.Jn}): ${e}`,...t)}
/**
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
 */function _(e,...t){throw m(e,...t)}function g(e,...t){return m(e,...t)}function F(e,t,i){const a=Object.assign(Object.assign({},l()),{[t]:i}),n=new r.LL("auth","Firebase",a);return n.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(i,...r)}return h.create(e,...t)}function p(e,t,...i){if(!e)throw m(t,...i)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||b(t)}
/**
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
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===v()||"https:"===v()}function v(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function x(e,t){y(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
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
 */class j{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const B={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},S=new C(3e4,6e4);
/**
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
 */function q(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function A(e,t,i,a,n={}){return T(e,n,(async()=>{let n={},o={};a&&("GET"===t?o=a:n={body:JSON.stringify(a)});const s=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),j.fetch()(R(e,e.config.apiHost,i,s),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},n))}))}async function T(e,t,i){e._canInitEmulator=!1;const a=Object.assign(Object.assign({},B),t);try{const t=new O(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const n=await r.json();if("needConfirmation"in n)throw N(e,"account-exists-with-different-credential",n);if(r.ok&&!("errorMessage"in n))return n;{const t=r.ok?n.errorMessage:n.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw N(e,"credential-already-in-use",n);if("EMAIL_EXISTS"===i)throw N(e,"email-already-in-use",n);if("USER_DISABLED"===i)throw N(e,"user-disabled",n);const s=a[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw F(e,s,o);_(e,s)}}catch(n){if(n instanceof r.ZR)throw n;_(e,"network-request-failed",{message:String(n)})}}async function I(e,t,i,r,a={}){const n=await A(e,t,i,r,a);return"mfaPendingCredential"in n&&_(e,"multi-factor-auth-required",{_serverResponse:n}),n}function R(e,t,i,r){const a=`${t}${i}?${r}`;return e.config.emulator?x(e.config,a):`${e.config.apiScheme}://${a}`}function P(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),S.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function N(e,t,i){const r={appName:e.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const a=g(e,t,r);return a.customData._tokenResponse=i,a}
/**
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
 */function M(e){return void 0!==e&&void 0!==e.enterprise}class L{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return P(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
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
 */async function U(e,t){return A(e,"GET","/v2/recaptchaConfig",q(e,t))}
/**
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
 */async function V(e,t){return A(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return A(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function H(e,t=!1){const i=(0,r.m9)(e),a=await i.getIdToken(t),n=G(a);p(n&&n.exp&&n.auth_time&&n.iat,i.auth,"internal-error");const o="object"===typeof n.firebase?n.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:n,token:a,authTime:W($(n.auth_time)),issuedAtTime:W($(n.iat)),expirationTime:W($(n.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function G(e){const[t,i,a]=e.split(".");if(void 0===t||void 0===i||void 0===a)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(n){return d("Caught error parsing JWT payload as JSON",null===n||void 0===n?void 0:n.toString()),null}}function K(e){const t=G(e);return p(t,"internal-error"),p("undefined"!==typeof t.exp,"internal-error"),p("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function Y(e,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof r.ZR&&J(a)&&e.auth.currentUser===e&&await e.auth.signOut(),a}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=e-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Z(e){var t;const i=e.auth,r=await e.getIdToken(),a=await Y(e,z(i,{idToken:r}));p(null===a||void 0===a?void 0:a.users.length,i,"internal-error");const n=a.users[0];e._notifyReloadListener(n);const o=(null===(t=n.providerUserInfo)||void 0===t?void 0:t.length)?ie(n.providerUserInfo):[],s=te(e.providerData,o),u=e.isAnonymous,l=!(e.email&&n.passwordHash)&&!(null===s||void 0===s?void 0:s.length),h=!!u&&l,c={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new X(n.createdAt,n.lastLoginAt),isAnonymous:h};Object.assign(e,c)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const i=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...i,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,i=o(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}))}
/**
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
 */async function re(e,t){const i=await T(e,{},(async()=>{const i=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:n}=e.config,o=R(e,a,"/v1/token",`key=${n}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(o,{method:"POST",headers:s,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ae(e,t){return A(e,"POST","/v2/accounts:revokeToken",q(e,t))}
/**
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
 */class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p("undefined"!==typeof e.idToken,"internal-error"),p("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return p(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:a}=await re(e,t);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:a}=t,n=new ne;return i&&(p("string"===typeof i,"internal-error",{appName:e}),n.refreshToken=i),r&&(p("string"===typeof r,"internal-error",{appName:e}),n.accessToken=r),a&&(p("number"===typeof a,"internal-error",{appName:e}),n.expirationTime=a),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
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
 */function oe(e,t){p("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,a=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new X(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return p(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Y(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,a,n,o,s,u,l;const h=null!==(i=t.displayName)&&void 0!==i?i:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(a=t.phoneNumber)&&void 0!==a?a:void 0,d=null!==(n=t.photoURL)&&void 0!==n?n:void 0,_=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,F=null!==(u=t.createdAt)&&void 0!==u?u:void 0,m=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:k,stsTokenManager:v}=t;p(b&&v,e,"internal-error");const D=ne.fromJSON(this.name,v);p("string"===typeof b,e,"internal-error"),oe(h,e.name),oe(c,e.name),p("boolean"===typeof y,e,"internal-error"),p("boolean"===typeof w,e,"internal-error"),oe(f,e.name),oe(d,e.name),oe(_,e.name),oe(g,e.name),oe(F,e.name),oe(m,e.name);const E=new se({uid:b,auth:e,email:c,emailVerified:y,displayName:h,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:_,stsTokenManager:D,createdAt:F,lastLoginAt:m});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,i=!1){const r=new ne;r.updateFromServerResponse(t);const a=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Z(a),a}}
/**
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
 */const ue=new Map;function le(e){y(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const ce=he;
/**
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
 */function fe(e,t,i){return`firebase:${e}:${t}:${i}`}class de{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:a}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,a),this.fullPersistenceKey=fe("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new de(le(ce),e,i);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=r[0]||le(ce);const n=fe(i,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(n);if(t){const i=se._fromJSON(e,t);l!==a&&(o=i),a=l;break}}catch(u){}const s=r.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(n,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==a)try{await e._remove(n)}catch(u){}}))),new de(a,e,i)):new de(a,e,i)}}
/**
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
 */function _e(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ye(t))return"Blackberry";if(we(t))return"Webos";if(Fe(t))return"Safari";if((t.includes("chrome/")||me(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null===i||void 0===i?void 0:i.length))return i[1]}return"Other"}function ge(e=(0,r.z$)()){return/firefox\//i.test(e)}function Fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function me(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function be(e=(0,r.z$)()){return/android/i.test(e)}function ye(e=(0,r.z$)()){return/blackberry/i.test(e)}function we(e=(0,r.z$)()){return/webos/i.test(e)}function ke(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,r.z$)()){var t;return ke(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function De(){return(0,r.w1)()&&10===document.documentMode}function Ee(e=(0,r.z$)()){return ke(e)||be(e)||we(e)||ye(e)||/windows phone/i.test(e)||pe(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function xe(e,t=[]){let i;switch(e){case"Browser":i=_e((0,r.z$)());break;case"Worker":i=`${_e((0,r.z$)())}-${e}`;break;default:i=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${a.Jn}/${n}`}
/**
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
 */class je{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=t=>new Promise(((i,r)=>{try{const r=e(t);i(r)}catch(a){r(a)}}));i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===i||void 0===i?void 0:i.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Be(e,t={}){return A(e,"GET","/v2/passwordPolicy",q(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Se=6;class qe{constructor(e){var t,i,r,a;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=n.minPasswordLength)&&void 0!==t?t:Se,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(a=e.forceUpgradeOnSignin)&&void 0!==a&&a,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,a,n,o;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(i=s.meetsMaxPasswordLength)||void 0===i||i),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(a=s.containsUppercaseLetter)||void 0===a||a),s.isValid&&(s.isValid=null===(n=s.containsNumericCharacter)||void 0===n||n),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
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
 */class Ae{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.beforeStateQueue=new je(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await de.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);i&&i!==n||!(null===o||void 0===o?void 0:o.user)||(r=o.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(n){r=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(n)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&p(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Be(this),t=new qe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged((()=>{i(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(i.tenantId=this.tenantId),await ae(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;p(t,this,"argument-error"),this.redirectPersistenceManager=await de.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const a="function"===typeof t?t:t.next.bind(t);let n=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(o,this,"internal-error"),o.then((()=>{n||a(this.currentUser)})),"function"===typeof t){const a=e.addObserver(t,i,r);return()=>{n=!0,a()}}{const i=e.addObserver(t);return()=>{n=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&f(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Te(e){return(0,r.m9)(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function Re(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Pe(e){return new Promise(((t,i)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,i(t)},r.type="text/javascript",r.charset="UTF-8",Re().appendChild(r)}))}function Oe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ne="https://www.google.com/recaptcha/enterprise.js?render=",Me="recaptcha-enterprise",Le="NO_RECAPTCHA";class Ue{constructor(e){this.type=Me,this.auth=Te(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,i)=>{U(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const i=new L(r);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{i(e)}))}))}function r(t,i,r){const a=window.grecaptcha;M(a)?a.enterprise.ready((()=>{a.enterprise.execute(t,{action:e}).then((e=>{i(e)})).catch((()=>{i(Le)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,a)=>{i(this.auth).then((i=>{if(!t&&M(window.grecaptcha))r(i,e,a);else{if("undefined"===typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));Pe(Ne+i).then((()=>{r(i,e,a)})).catch((e=>{a(e)}))}})).catch((e=>{a(e)}))}))}}async function Ve(e,t,i,r=!1){const a=new Ue(e);let n;try{n=await a.verify(i)}catch(s){n=await a.verify(i,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:n}):Object.assign(o,{captchaResponse:n}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ze(e,t,i,r){var a;if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ve(e,t,i,"getOobCode"===i);return r(e,a)}return r(e,t).catch((async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ve(e,t,i,"getOobCode"===i);return r(e,a)}return Promise.reject(a)}))}
/**
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
 */
function We(e,t){const i=(0,a.qX)(e,"auth");if(i.isInitialized()){const e=i.getImmediate(),a=i.getOptions();if((0,r.vZ)(a,null!==t&&void 0!==t?t:{}))return e;_(e,"already-initialized")}const n=i.initialize({options:t});return n}function He(e,t){const i=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function $e(e,t,i){const r=Te(e);p(r._canInitEmulator,r,"emulator-config-failed"),p(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!!(null===i||void 0===i?void 0:i.disableWarnings),n=Ge(t),{host:o,port:s}=Ke(t),u=null===s?"":`:${s}`;r.config.emulator={url:`${n}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||Je()}function Ge(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ke(e){const t=Ge(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const e=a[1];return{host:e,port:Ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class Qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
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
 */async function Xe(e,t){return A(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */
async function Ze(e,t){return I(e,"POST","/v1/accounts:signInWithPassword",q(e,t))}
/**
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
 */
async function et(e,t){return I(e,"POST","/v1/accounts:signInWithEmailLink",q(e,t))}async function tt(e,t){return I(e,"POST","/v1/accounts:signInWithEmailLink",q(e,t))}
/**
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
 */class it extends Qe{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new it(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new it(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ze(e,t,"signInWithPassword",Ze);case"emailLink":return et(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ze(e,i,"signUpPassword",Xe);case"emailLink":return tt(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function rt(e,t){return I(e,"POST","/v1/accounts:signInWithIdp",q(e,t))}
/**
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
 */const at="http://localhost";class nt extends Qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,a=o(t,["providerId","signInMethod"]);if(!i||!r)return null;const n=new nt(i,r);return n.idToken=a.idToken||void 0,n.accessToken=a.accessToken||void 0,n.secret=a.secret,n.nonce=a.nonce,n.pendingToken=a.pendingToken||null,n}_getIdTokenResponse(e){const t=this.buildRequest();return rt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,rt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}buildRequest(){const e={requestUri:at,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function ot(e,t){return A(e,"POST","/v1/accounts:sendVerificationCode",q(e,t))}async function st(e,t){return I(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,t))}async function ut(e,t){const i=await I(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,t));if(i.temporaryProof)throw N(e,"account-exists-with-different-credential",i);return i}const lt={["USER_NOT_FOUND"]:"user-not-found"};async function ht(e,t){const i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return I(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,i),lt)}
/**
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
 */class ct extends Qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ct({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ct({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return st(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ut(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ht(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:a}=e;return i||t||r||a?new ct({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:a}):null}}
/**
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
 */function ft(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],i=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,a=(0,r.zd)((0,r.pd)(e))["deep_link_id"],n=a?(0,r.zd)((0,r.pd)(a))["link"]:null;return n||a||i||t||e}class _t{constructor(e){var t,i,a,n,o,s;const u=(0,r.zd)((0,r.pd)(e)),l=null!==(t=u["apiKey"])&&void 0!==t?t:null,h=null!==(i=u["oobCode"])&&void 0!==i?i:null,c=ft(null!==(a=u["mode"])&&void 0!==a?a:null);p(l&&h&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=h,this.continueUrl=null!==(n=u["continueUrl"])&&void 0!==n?n:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=u["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=dt(e);try{return new _t(t)}catch(i){return null}}}
/**
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
 */
class gt{constructor(){this.providerId=gt.PROVIDER_ID}static credential(e,t){return it._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=_t.parseLink(t);return p(i,"argument-error"),it._fromEmailAndCode(e,i.code,i.tenantId)}}gt.PROVIDER_ID="password",gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Ft{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class mt extends Ft{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class pt extends mt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
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
 */
class bt extends mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return bt.credential(t,i)}catch(r){return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
/**
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
 */
class yt extends mt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch(t){return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
/**
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
 */
class wt extends mt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wt.credential(t,i)}catch(r){return null}}}
/**
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
 */
async function kt(e,t){return I(e,"POST","/v1/accounts:signUp",q(e,t))}
/**
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
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const a=await se._fromIdTokenResponse(e,i,r),n=Dt(i),o=new vt({user:a,providerId:n,_tokenResponse:i,operationType:t});return o}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Dt(i);return new vt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Dt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Et extends r.ZR{constructor(e,t,i,r){var a;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Et.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Et(e,t,i,r)}}function Ct(e,t,i,r){const a="reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return a.catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw Et._fromErrorAndOperation(e,i,t,r);throw i}))}
/**
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
 */async function xt(e,t,i=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return vt._forOperation(e,"link",r)}
/**
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
 */
async function jt(e,t,i=!1){const{auth:r}=e,a="reauthenticate";try{const n=await Y(e,Ct(r,a,t,e),i);p(n.idToken,r,"internal-error");const o=G(n.idToken);p(o,r,"internal-error");const{sub:s}=o;return p(e.uid===s,r,"user-mismatch"),vt._forOperation(e,a,n)}catch(n){throw"auth/user-not-found"===(null===n||void 0===n?void 0:n.code)&&_(r,"user-mismatch"),n}}
/**
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
 */async function Bt(e,t,i=!1){const r="signIn",a=await Ct(e,r,t),n=await vt._fromIdTokenResponse(e,r,a);return i||await e._updateCurrentUser(n.user),n}async function St(e,t){return Bt(Te(e),t)}
/**
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
 */
async function qt(e){const t=Te(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function At(e,t,i){const r=Te(e),a={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},n=ze(r,a,"signUpPassword",kt),o=await n.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&qt(e),t})),s=await vt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function Tt(e,t,i){return St((0,r.m9)(e),gt.credential(t,i)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&qt(e),t}))}
/**
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
 */
/**
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
 */
async function It(e,t){return A(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function Rt(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;const a=(0,r.m9)(e),n=await a.getIdToken(),o={idToken:n,displayName:t,photoUrl:i,returnSecureToken:!0},s=await Y(a,It(a.auth,o));a.displayName=s.displayName||null,a.photoURL=s.photoUrl||null;const u=a.providerData.find((({providerId:e})=>"password"===e));u&&(u.displayName=a.displayName,u.photoURL=a.photoURL),await a._updateTokensIfNecessary(s)}
/**
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
 */
function Pt(e,t){return(0,r.m9)(e).setPersistence(t)}function Ot(e,t,i,a){return(0,r.m9)(e).onIdTokenChanged(t,i,a)}function Nt(e,t,i){return(0,r.m9)(e).beforeAuthStateChanged(t,i)}
/**
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
 */
function Mt(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:start",q(e,t))}function Lt(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:finalize",q(e,t))}function Ut(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:start",q(e,t))}function Vt(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:finalize",q(e,t))}new WeakMap;const zt="__sak";
/**
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
 */class Wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Ht(){const e=(0,r.z$)();return Fe(e)||ke(e)}const $t=1e3,Gt=10;class Kt extends Wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ht()&&Ce(),this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(i);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},a=this.storage.getItem(i);De()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Gt):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kt.type="LOCAL";const Yt=Kt;
/**
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
 */class Jt extends Wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jt.type="SESSION";const Qt=Jt;
/**
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
 */function Xt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new Zt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:a}=t.data,n=this.handlersMap[r];if(!(null===n||void 0===n?void 0:n.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(n).map((async e=>e(t.origin,a))),s=await Xt(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function ei(e="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(10*Math.random());return e+i}
/**
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
 */Zt.receivers=[];class ti{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,n;return new Promise(((o,s)=>{const u=ei("",20);r.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),i);n={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(l),clearTimeout(a),s(new Error("invalid_response"));break}}},this.handlers.add(n),r.port1.addEventListener("message",n.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{n&&this.removeMessageHandler(n)}))}}
/**
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
 */function ii(){return window}function ri(e){ii().location.href=e}
/**
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
 */function ai(){return"undefined"!==typeof ii()["WorkerGlobalScope"]&&"function"===typeof ii()["importScripts"]}async function ni(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function oi(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function si(){return ai()?self:null}
/**
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
 */const ui="firebaseLocalStorageDb",li=1,hi="firebaseLocalStorage",ci="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function di(e,t){return e.transaction([hi],t?"readwrite":"readonly").objectStore(hi)}function _i(){const e=indexedDB.deleteDatabase(ui);return new fi(e).toPromise()}function gi(){const e=indexedDB.open(ui,li);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(hi,{keyPath:ci})}catch(r){i(r)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains(hi)?t(i):(i.close(),await _i(),t(await gi()))}))}))}async function Fi(e,t,i){const r=di(e,!0).put({[ci]:t,value:i});return new fi(r).toPromise()}async function mi(e,t){const i=di(e,!1).get(t),r=await new fi(i).toPromise();return void 0===r?null:r.value}function pi(e,t){const i=di(e,!0).delete(t);return new fi(i).toPromise()}const bi=800,yi=3;class wi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gi()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(i){if(t++>yi)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ai()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(si()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const i=await this._poll();return{keyProcessed:i.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ni(),!this.activeServiceWorker)return;this.sender=new ti(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&oi()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await Fi(e,zt,"1"),await pi(e,zt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>Fi(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>mi(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>pi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=di(e,!1).getAll();return new fi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:r,value:a}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),bi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wi.type="LOCAL";const ki=wi;
/**
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
 */function vi(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:start",q(e,t))}function Di(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:finalize",q(e,t))}function Ei(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:finalize",q(e,t))}
/**
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
 */
/**
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
 */
Oe("rcb"),new C(3e4,6e4);
/**
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
 */
const Ci="recaptcha";async function xi(e,t,i){var r;const a=await i.verify();try{let n;if(p("string"===typeof a,e,"argument-error"),p(i.type===Ci,e,"argument-error"),n="string"===typeof t?{phoneNumber:t}:t,"session"in n){const t=n.session;if("phoneNumber"in n){p("enroll"===t.type,e,"internal-error");const i=await Mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,recaptchaToken:a}});return i.phoneSessionInfo.sessionInfo}{p("signin"===t.type,e,"internal-error");const i=(null===(r=n.multiFactorHint)||void 0===r?void 0:r.uid)||n.multiFactorUid;p(i,e,"missing-multi-factor-info");const o=await vi(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:a}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ot(e,{phoneNumber:n.phoneNumber,recaptchaToken:a});return t}}finally{i._reset()}}
/**
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
 */
class ji{constructor(e){this.providerId=ji.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return xi(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ct._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ji.credentialFromTaggedObject(t)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?ct._fromTokenResponse(t,i):null}}
/**
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
 */
function Bi(e,t){return t?le(t):(p(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */ji.PROVIDER_ID="phone",ji.PHONE_SIGN_IN_METHOD="phone";class Si extends Qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qi(e){return Bt(e.auth,new Si(e),e.bypassAuthState)}function Ai(e){const{auth:t,user:i}=e;return p(i,t,"internal-error"),jt(i,new Si(e),e.bypassAuthState)}async function Ti(e){const{auth:t,user:i}=e;return p(i,t,"internal-error"),xt(i,new Si(e),e.bypassAuthState)}
/**
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
 */class Ii{constructor(e,t,i,r,a=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:a,error:n,type:o}=e;if(n)return void this.reject(n);const s={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qi;case"linkViaPopup":case"linkViaRedirect":return Ti;case"reauthViaPopup":case"reauthViaRedirect":return Ai;default:_(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Ri=new C(2e3,1e4);class Pi extends Ii{constructor(e,t,i,r,a){super(e,t,r,a),this.provider=i,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ri.get())};e()}}Pi.currentPopupAction=null;
/**
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
 */
const Oi="pendingRedirect",Ni=new Map;class Mi extends Ii{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const t=await Li(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Li(e,t){const i=zi(t),r=Vi(e);if(!await r._isAvailable())return!1;const a="true"===await r._get(i);return await r._remove(i),a}function Ui(e,t){Ni.set(e._key(),t)}function Vi(e){return le(e._redirectPersistence)}function zi(e){return fe(Oi,e.config.apiKey,e.name)}
/**
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
 */async function Wi(e,t,i=!1){const r=Te(e),a=Bi(r,t),n=new Mi(r,a,i),o=await n.execute();return o&&!i&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */
const Hi=6e5;class $i{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Yi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ki(e)){const r=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hi&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gi(e))}saveEventToCache(e){this.cachedEventUids.add(Gi(e)),this.lastProcessedEventTime=Date.now()}}function Gi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ki({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Yi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ki(e);default:return!1}}
/**
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
 */async function Ji(e,t={}){return A(e,"GET","/v1/projects",t)}
/**
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
 */const Qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xi=/^https?/;async function Zi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ji(e);for(const r of t)try{if(er(r))return}catch(i){}_(e,"unauthorized-domain")}function er(e){const t=w(),{protocol:i,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===r?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&a.hostname===r}if(!Xi.test(i))return!1;if(Qi.test(e))return r===e;const a=e.replace(/\./g,"\\."),n=new RegExp("^(.+\\."+a+"|"+a+")$","i");return n.test(r)}
/**
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
 */const tr=new C(3e4,6e4);function ir(){const e=ii().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let i=0;i<e.CP.length;i++)e.CP[i]=null}function rr(e){return new Promise(((t,i)=>{var r,a,n;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ir(),i(g(e,"network-request-failed"))},timeout:tr.get()})}if(null===(a=null===(r=ii().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(n=ii().gapi)||void 0===n?void 0:n.load)){const t=Oe("iframefcb");return ii()[t]=()=>{gapi.load?o():i(g(e,"network-request-failed"))},Pe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}o()}})).catch((e=>{throw ar=null,e}))}let ar=null;function nr(e){return ar=ar||rr(e),ar}
/**
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
 */const or=new C(5e3,15e3),sr="__/auth/iframe",ur="emulator/auth/iframe",lr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cr(e){const t=e.config;p(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?x(t,ur):`https://${e.config.authDomain}/${sr}`,n={apiKey:t.apiKey,appName:e.name,v:a.Jn},o=hr.get(e.config.apiHost);o&&(n.eid=o);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${(0,r.xO)(n).slice(1)}`}async function fr(e){const t=await nr(e),i=ii().gapi;return p(i,e,"internal-error"),t.open({where:document.body,url:cr(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lr,dontclear:!0},(t=>new Promise((async(i,r)=>{await t.restyle({setHideOnLeave:!1});const a=g(e,"network-request-failed"),n=ii().setTimeout((()=>{r(a)}),or.get());function o(){ii().clearTimeout(n),i(t)}t.ping(o).then(o,(()=>{r(a)}))}))))}
/**
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
 */const dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_r=500,gr=600,Fr="_blank",mr="http://localhost";class pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function br(e,t,i,a=_r,n=gr){const o=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let u="";const l=Object.assign(Object.assign({},dr),{width:a.toString(),height:n.toString(),top:o,left:s}),h=(0,r.z$)().toLowerCase();i&&(u=me(h)?Fr:i),ge(h)&&(t=t||mr,l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(ve(h)&&"_self"!==u)return yr(t||"",u),new pr(null);const f=window.open(t||"",u,c);p(f,e,"popup-blocked");try{f.focus()}catch(d){}return new pr(f)}function yr(e,t){const i=document.createElement("a");i.href=e,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}
/**
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
 */const wr="__/auth/handler",kr="emulator/auth/handler",vr=encodeURIComponent("fac");async function Dr(e,t,i,n,o,s){p(e.config.authDomain,e,"auth-domain-config-required"),p(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:a.Jn,eventId:o};if(t instanceof Ft){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))u[e]=t}if(t instanceof mt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const l=u;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const h=await e._getAppCheckToken(),c=h?`#${vr}=${encodeURIComponent(h)}`:"";return`${Er(e)}?${(0,r.xO)(l).slice(1)}${c}`}function Er({config:e}){return e.emulator?x(e,kr):`https://${e.authDomain}/${wr}`}
/**
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
 */const Cr="webStorageSupport";class xr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qt,this._completeRedirectFn=Wi,this._overrideRedirectResult=Ui}async _openPopup(e,t,i,r){var a;y(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const n=await Dr(e,t,i,w(),r);return br(e,n,ei())}async _openRedirect(e,t,i,r){await this._originValidation(e);const a=await Dr(e,t,i,w(),r);return ri(a),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(y(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await fr(e),i=new $i(e);return t.register("authEvent",(t=>{p(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=i.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){const i=this.iframes[e._key()];i.send(Cr,{type:Cr},(i=>{var r;const a=null===(r=null===i||void 0===i?void 0:i[0])||void 0===r?void 0:r[Cr];void 0!==a&&t(!!a),_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ee()||Fe()||ke()}}const jr=xr;class Br{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Sr extends Br{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Sr(e)}_finalizeEnroll(e,t,i){return Lt(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Di(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qr{constructor(){}static assertion(e){return Sr._fromCredential(e)}}qr.FACTOR_ID="phone";class Ar{static assertionForEnrollment(e,t){return Tr._fromSecret(e,t)}static assertionForSignIn(e,t){return Tr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const i=e;p("undefined"!==typeof(null===(t=i.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ut(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return Ir._fromStartTotpMfaEnrollmentResponse(r,i.user.auth)}}Ar.FACTOR_ID="totp";class Tr extends Br{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new Tr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Tr(t,e)}async _finalizeEnroll(e,t,i){return p("undefined"!==typeof this.secret,e,"argument-error"),Vt(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){p(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const i={verificationCode:this.otp};return Ei(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Ir{constructor(e,t,i,r,a,n,o){this.sessionInfo=n,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=a}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ir(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let r=!1;return(Rr(e)||Rr(t))&&(r=!0),r&&(Rr(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),Rr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Rr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Pr="@firebase/auth",Or="1.4.0";
/**
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
 */
class Nr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Mr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lr(e){(0,a.Xd)(new s.wA("auth",((t,{options:i})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),n=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},l=new Ae(r,a,n,u);return He(l,i),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,a.Xd)(new s.wA("auth-internal",(e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new Nr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.KN)(Pr,Or,Mr(e)),(0,a.KN)(Pr,Or,"esm2017")}
/**
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
 */const Ur=300,Vr=(0,r.Pz)("authIdTokenMaxAge")||Ur;let zr=null;const Wr=e=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Vr)return;const a=null===i||void 0===i?void 0:i.token;zr!==a&&(zr=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Hr(e=(0,a.Mq)()){const t=(0,a.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const i=We(e,{popupRedirectResolver:jr,persistence:[ki,Yt,Qt]}),n=(0,r.Pz)("authTokenSyncURL");if(n){const e=Wr(n);Nt(i,e,(()=>e(i.currentUser))),Ot(i,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&$e(i,`http://${o}`),i}Lr("Browser")},7130:function(e,t,i){"use strict";i(560);var r=i(7077),a=i(7142),n=i(223),o=i(5168);const s="@firebase/database",u="1.0.1";
/**
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
 */let l="";function h(e){l=e}
/**
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
 */class c{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,n.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,n.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,n.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const d=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new c(t)}}catch(t){}return new f},_=d("localStorage"),g=d("sessionStorage"),F=new o.Yd("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),p=function(e){const t=(0,n.dS)(e),i=new n.gQ;i.update(t);const r=i.digest();return n.US.encodeByteArray(r)},b=function(...e){let t="";for(let i=0;i<e.length;i++){const r=e[i];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?(0,n.Wl)(r):r,t+=" "}return t};let y=null,w=!0;const k=function(e,t){(0,n.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(F.logLevel=o["in"].VERBOSE,y=F.log.bind(F),t&&g.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,g.remove("logging_enabled"))},v=function(...e){if(!0===w&&(w=!1,null===y&&!0===g.get("logging_enabled")&&k(!0)),y){const t=b.apply(null,e);y(t)}},D=function(e){return function(...t){v(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);F.error(t)},C=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw F.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+b(...e);F.warn(t)},j=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},B=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},S=function(e){if((0,n.Yr)()||"complete"===document.readyState)e();else{let t=!1;const i=function(){document.body?t||(t=!0,e()):setTimeout(i,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&i()})),window.attachEvent("onload",i))}},q="[MIN_NAME]",A="[MAX_NAME]",T=function(e,t){if(e===t)return 0;if(e===q||t===A)return-1;if(t===q||e===A)return 1;{const i=H(e),r=H(t);return null!==i?null!==r?i-r===0?e.length-t.length:i-r:-1:null!==r?1:e<t?-1:1}},I=function(e,t){return e===t?0:e<t?-1:1},R=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,n.Wl)(t))},P=function(e){if("object"!==typeof e||null===e)return(0,n.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)0!==r&&(i+=","),i+=(0,n.Wl)(t[r]),i+=":",i+=P(e[t[r]]);return i+="}",i},O=function(e,t){const i=e.length;if(i<=t)return[e];const r=[];for(let a=0;a<i;a+=t)a+t>i?r.push(e.substring(a,i)):r.push(e.substring(a,a+t));return r};function N(e,t){for(const i in e)e.hasOwnProperty(i)&&t(i,e[i])}const M=function(e){(0,n.hu)(!B(e),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let a,o,s,u,l;0===e?(o=0,s=0,a=1/e===-1/0?1:0):(a=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(u=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=u+r,s=Math.round(e*Math.pow(2,i-u)-Math.pow(2,i))):(o=0,s=Math.round(e/Math.pow(2,1-r-i))));const h=[];for(l=i;l;l-=1)h.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(a?1:0),h.reverse();const c=h.join("");let f="";for(l=0;l<64;l+=8){let e=parseInt(c.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),f+=e}return f.toLowerCase()},L=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const V=new RegExp("^-?(0*)\\d{1,10}$"),z=-2147483648,W=2147483647,H=function(e){if(V.test(e)){const t=Number(e);if(t>=z&&t<=W)return t}return null},$=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(e,t){const i=setTimeout(e,t);return"number"===typeof i&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(i):"object"===typeof i&&i["unref"]&&i["unref"](),i};
/**
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
 */
class Y{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,i)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,i):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class J{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(v("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,i)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,i):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
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
 */
const X="5",Z="v",ee="s",te="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ae="ls",ne="p",oe="ac",se="websocket",ue="long_polling";
/**
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
 */
class le{constructor(e,t,i,r,a=!1,n="",o=!1,s=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=a,this.persistenceKey=n,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ce(e,t,i){let r;if((0,n.hu)("string"===typeof t,"typeof type must == string"),(0,n.hu)("object"===typeof i,"typeof params must == object"),t===se)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(i["ns"]=e.namespace);const a=[];return N(i,((e,t)=>{a.push(e+"="+t)})),r+a.join("&")}
/**
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,n.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,n.p$)(this.counters_)}}
/**
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
 */const de={},_e={};function ge(e){const t=e.toString();return de[t]||(de[t]=new fe),de[t]}function Fe(e,t){const i=e.toString();return _e[i]||(_e[i]=t()),_e[i]}
/**
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
 */class me{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&$((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const pe="start",be="close",ye="pLPCommand",we="pRTLPCB",ke="id",ve="pw",De="ser",Ee="cb",Ce="seg",xe="ts",je="d",Be="dframe",Se=1870,qe=30,Ae=Se-qe,Te=25e3,Ie=3e4;class Re{constructor(e,t,i,r,a,n,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.transportSessionId=n,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=D(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),ce(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new me(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Ie)),S((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pe(((...e)=>{const[t,i,r,a,n]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===pe)this.id=i,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[pe]="t",e[De]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[ae]=this.lastSessionId),this.applicationId&&(e[ne]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[te]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Re.forceAllow_=!0}static forceDisallow(){Re.forceDisallow_=!0}static isAvailable(){return!(0,n.Yr)()&&(!!Re.forceAllow_||!Re.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!L()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,n.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=(0,n.h$)(t),r=O(i,Ae);for(let a=0;a<r.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,n.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const i={};i[Be]="t",i[ke]=e,i[ve]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,n.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pe{constructor(e,t,i,r){if(this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,n.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[ye+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pe.createIFrame_();let i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;i='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(a){v("frame writing exception"),a.stack&&v(a.stack),v(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||v("No IE domain setting required")}catch(t){const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[ve]=this.myPW,e[De]=this.currentSerial;let t=this.urlFn(e),i="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+qe+i.length<=Se))break;{const e=this.pendingSegs.shift();i=i+"&"+Ce+r+"="+e.seg+"&"+xe+r+"="+e.ts+"&"+je+r+"="+e.d,r++}}return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(Te)),a=()=>{clearTimeout(r),i()};this.addTag(e,a)}addTag(e,t){(0,n.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{v("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(i){}}),Math.floor(1))}}
/**
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
 */const Oe=16384,Ne=45e3;let Me=null;"undefined"!==typeof MozWebSocket?Me=MozWebSocket:"undefined"!==typeof WebSocket&&(Me=WebSocket);class Le{constructor(e,t,i,r,a,n,o){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=D(this.connId),this.stats_=ge(t),this.connURL=Le.connectionURL_(t,n,o,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,a){const o={};return o[Z]=X,!(0,n.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[te]=ie),t&&(o[ee]=t),i&&(o[ae]=i),r&&(o[oe]=r),a&&(o[ne]=a),ce(e,se,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{let e;if((0,n.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i={NODE_ENV:"production",BASE_URL:"/chat/"},r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Me(this.connURL,[],e)}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&null!==Me&&!Le.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,n.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,n.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,n.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=O(t,Oe);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ne))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2,Le.healthyTimeout=3e4;
/**
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
 */
class Ue{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Re,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Le&&Le["isAvailable"]();let i=t&&!Le.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const e=this.transports_=[];for(const t of Ue.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ue.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ue.globalTransportInitialized_=!1;
/**
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
 */
const Ve=6e4,ze=5e3,We=10240,He=102400,$e="t",Ge="d",Ke="s",Ye="r",Je="e",Qe="o",Xe="a",Ze="n",et="p",tt="h";class it{constructor(e,t,i,r,a,n,o,s,u,l){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=a,this.onMessage_=n,this.onReady_=o,this.onDisconnect_=s,this.onKill_=u,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=D("c:"+this.id+":"),this.transportManager_=new Ue(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,i)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=K((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>We?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($e in e){const t=e[$e];t===Xe?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=R("t",e),i=R("d",e);if("c"===t)this.onSecondaryControl_(i);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(i)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=R("t",e),i=R("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=R($e,e);if(Ge in e){const i=e[Ge];if(t===tt){const e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ke?this.onConnectionShutdown_(i):t===Ye?this.onReset_(i):t===Je?E("Server Error: "+i):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==i&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),K((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(ze))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class rt{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class at{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,n.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let a=0;a<r.length;a++)if(r[a].callback===t&&(!i||i===r[a].context))return void r.splice(a,1)}validateEventType_(e){(0,n.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class nt extends at{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,n.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new nt}getInitialEvent(e){return(0,n.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const ot=32,st=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ct(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function dt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ft(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new ut(t,0)}function mt(e,t){const i=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new ut(i,0)}function pt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const i=ht(e),r=ht(t);if(null===i)return t;if(i===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function yt(e,t){if(ct(e)!==ct(t))return!1;for(let i=e.pieceNum_,r=t.pieceNum_;i<=e.pieces_.length;i++,r++)if(e.pieces_[i]!==t.pieces_[r])return!1;return!0}function wt(e,t){let i=e.pieceNum_,r=t.pieceNum_;if(ct(e)>ct(t))return!1;while(i<e.pieces_.length){if(e.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=(0,n.ug)(this.parts_[i]);Et(this)}}function vt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,n.ug)(t),Et(e)}function Dt(e){const t=e.parts_.pop();e.byteLength_-=(0,n.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>st)throw new Error(e.errorPrefix_+"has a key path longer than "+st+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+Ct(e))}function Ct(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class xt extends at{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new xt}getInitialEvent(e){return(0,n.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const jt=1e3,Bt=3e5,St=3e4,qt=1.3,At=3e4,Tt="server_kill",It=3;class Rt extends rt{constructor(e,t,i,r,a,o,s,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=u,this.id=Rt.nextPersistentConnectionId_++,this.log_=D("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jt,this.maxReconnectDelay_=Bt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!(0,n.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&nt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,a={r:r,a:e,b:t};this.log_((0,n.Wl)(a)),(0,n.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new n.BH,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:e=>{const i=e["d"];"ok"===e["s"]?t.resolve(i):t.reject(i)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,r){this.initConnection_();const a=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+a),this.listens.has(o)||this.listens.set(o,new Map),(0,n.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,n.hu)(!this.listens.get(o).has(a),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(a,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)}))}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const a={p:i},n="q";e.tag&&(a["q"]=t._queryObject,a["t"]=e.tag),a["h"]=e.hashFn(),this.sendRequest(n,a,(a=>{const n=a["d"],o=a["s"];Rt.warnOnListenWarnings_(n,t);const s=this.listens.get(i)&&this.listens.get(i).get(r);s===e&&(this.log_("listen response",a),"ok"!==o&&this.removeListen_(i,r),e.onComplete&&e.onComplete(o,n))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,n.r3)(e,"w")){const i=(0,n.DV)(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,n.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=St)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,n.w9)(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i["noauth"]=!0:"object"===typeof this.authOverride_&&(i["authvar"]=this.authOverride_),this.sendRequest(t,i,(t=>{const i=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],i=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)}))}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),(0,n.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const a=this.removeListen_(i,r);a&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const a={p:e},n="n";r&&(a["q"]=i,a["t"]=r),this.sendRequest(n,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,a){this.initConnection_();const n={p:t,d:i};void 0!==a&&(n["h"]=a),this.outstandingPuts_.push({action:e,request:n,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,(i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(i["s"],i["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,n.Wl)(e));const t=e["r"],i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,n.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,n.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=jt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Rt.nextConnectionId_++,a=this.lastSessionId;let o=!1,s=null;const u=function(){s?s.close():(o=!0,i())},l=function(e){(0,n.hu)(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:u,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[n,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?v("getToken() completed but was canceled"):(v("getToken() completed. Creating connection."),this.authToken_=n&&n.accessToken,this.appCheckToken_=u&&u.token,s=new it(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tt)}),a))}catch(E){this.log_("Failed to get token: "+E),o||(this.repoInfo_.nodeAdmin&&x(E),u())}}}interrupt(e){v("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){v("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,n.xb)(this.interruptReasons_)&&(this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map((e=>P(e))).join("$"):"default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new ut(e).toString();let r;if(this.listens.has(i)){const e=this.listens.get(i);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){v("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=It&&(this.reconnectDelay_=St,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){v("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=It&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,n.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,n.uI)()?e["framework.cordova"]=1:(0,n.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nt.getInstance().currentlyOnline();return(0,n.xb)(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0,Rt.nextConnectionId_=0;
/**
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
 */
class Pt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pt(e,t)}}
/**
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
 */class Ot{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Pt(q,e),r=new Pt(q,t);return 0!==this.compare(i,r)}minPost(){return Pt.MIN}}
/**
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
 */let Nt;class Mt extends Ot{static get __EMPTY_NODE(){return Nt}static set __EMPTY_NODE(e){Nt=e}compare(e,t){return T(e.name,t.name)}isDefinedOn(e){throw(0,n.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pt.MIN}maxPost(){return new Pt(A,Nt)}makePost(e,t){return(0,n.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Pt(e,Nt)}toString(){return".key"}}const Lt=new Mt;
/**
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
 */class Ut{constructor(e,t,i,r,a=null){this.isReverse_=r,this.resultGenerator_=a,this.nodeStack_=[];let n=1;while(!e.isEmpty())if(n=t?i(e.key,t):1,r&&(n*=-1),n<0)e=this.isReverse_?e.left:e.right;else{if(0===n){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,i,r,a){this.key=e,this.value=t,this.color=null!=i?i:Vt.RED,this.left=null!=r?r:Wt.EMPTY_NODE,this.right=null!=a?a:Wt.EMPTY_NODE}copy(e,t,i,r,a){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=a?a:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const a=i(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,i),null):0===a?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return Wt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class zt{copy(e,t,i,r,a){return this}insert(e,t,i){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,t=Wt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Wt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,i=this.root_;while(!i.isEmpty()){if(t=this.comparator_(e,i.key),0===t)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;while(!i.isEmpty()){if(t=this.comparator_(e,i.key),0===t){if(i.left.isEmpty())return r?r.key:null;i=i.left;while(!i.right.isEmpty())i=i.right;return i.key}t<0?i=i.left:t>0&&(r=i,i=i.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ut(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ut(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ut(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ut(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Ht(e,t){return T(e.name,t.name)}function $t(e,t){return T(e,t)}
/**
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
 */let Gt;function Kt(e){Gt=e}Wt.EMPTY_NODE=new zt;const Yt=function(e){return"number"===typeof e?"number:"+M(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();(0,n.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,n.r3)(t,".sv"),"Priority must be a string or number.")}else(0,n.hu)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,n.hu)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Qt,Xt,Zt;class ei{constructor(e,t=ei.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,n.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ei(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ei.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pt(e)?this:".priority"===ht(e)?this.priorityNode_:ei.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ei.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ht(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:((0,n.hu)(".priority"!==i||1===ct(e),".priority must be the last token in a path"),this.updateImmediateChild(i,ei.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?M(this.value_):this.value_,this.lazyHash_=p(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ei.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ei.__childrenNodeConstructor?-1:((0,n.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=ei.VALUE_TYPE_ORDER.indexOf(t),a=ei.VALUE_TYPE_ORDER.indexOf(i);return(0,n.hu)(r>=0,"Unknown leaf type: "+t),(0,n.hu)(a>=0,"Unknown leaf type: "+i),r===a?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function ti(e){Xt=e}function ii(e){Zt=e}ei.VALUE_TYPE_ORDER=["object","boolean","number","string"];class ri extends Ot{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),a=i.compareTo(r);return 0===a?T(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pt.MIN}maxPost(){return new Pt(A,new ei("[PRIORITY-POST]",Zt))}makePost(e,t){const i=Xt(e);return new Pt(t,new ei("[PRIORITY-POST]",i))}toString(){return".priority"}}const ai=new ri,ni=Math.log(2);
/**
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
 */class oi{constructor(e){const t=e=>parseInt(Math.log(e)/ni,10),i=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const si=function(e,t,i,r){e.sort(t);const a=function(t,r){const n=r-t;let o,s;if(0===n)return null;if(1===n)return o=e[t],s=i?i(o):o,new Vt(s,o.node,Vt.BLACK,null,null);{const u=parseInt(n/2,10)+t,l=a(t,u),h=a(u+1,r);return o=e[u],s=i?i(o):o,new Vt(s,o.node,Vt.BLACK,l,h)}},n=function(t){let r=null,n=null,o=e.length;const s=function(t,r){const n=o-t,s=o;o-=t;const l=a(n+1,s),h=e[n],c=i?i(h):h;u(new Vt(c,h.node,r,null,l))},u=function(e){r?(r.left=e,r=e):(n=e,r=e)};for(let e=0;e<t.count;++e){const i=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));i?s(r,Vt.BLACK):(s(r,Vt.BLACK),s(r,Vt.RED))}return n},o=new oi(e.length),s=n(o);return new Wt(r||t,s)};
/**
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
 */let ui;const li={};class hi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,n.hu)(li&&ai,"ChildrenNode.ts has not been loaded"),ui=ui||new hi({".priority":li},{".priority":ai}),ui}get(e){const t=(0,n.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Wt?t:null}hasIndex(e){return(0,n.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,n.hu)(e!==Lt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const a=t.getIterator(Pt.Wrap);let o,s=a.getNext();while(s)r=r||e.isDefinedOn(s.node),i.push(s),s=a.getNext();o=r?si(i,e.getCompare()):li;const u=e.toString(),l=Object.assign({},this.indexSet_);l[u]=e;const h=Object.assign({},this.indexes_);return h[u]=o,new hi(h,l)}addToIndexes(e,t){const i=(0,n.UI)(this.indexes_,((i,r)=>{const a=(0,n.DV)(this.indexSet_,r);if((0,n.hu)(a,"Missing index implementation for "+r),i===li){if(a.isDefinedOn(e.node)){const i=[],r=t.getIterator(Pt.Wrap);let n=r.getNext();while(n)n.name!==e.name&&i.push(n),n=r.getNext();return i.push(e),si(i,a.getCompare())}return li}{const r=t.get(e.name);let a=i;return r&&(a=a.remove(new Pt(e.name,r))),a.insert(e,e.node)}}));return new hi(i,this.indexSet_)}removeFromIndexes(e,t){const i=(0,n.UI)(this.indexes_,(i=>{if(i===li)return i;{const r=t.get(e.name);return r?i.remove(new Pt(e.name,r)):i}}));return new hi(i,this.indexSet_)}}
/**
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
 */let ci;class fi{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&(0,n.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ci||(ci=new fi(new Wt($t),null,hi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ci}updatePriority(e){return this.children_.isEmpty()?this:new fi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ci:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,n.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const i=new Pt(e,t);let r,a;t.isEmpty()?(r=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const n=r.isEmpty()?ci:this.priorityNode_;return new fi(r,n,a)}}updateChild(e,t){const i=ht(e);if(null===i)return t;{(0,n.hu)(".priority"!==ht(e)||1===ct(e),".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ft(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,a=!0;if(this.forEachChild(ai,((n,o)=>{t[n]=o.val(e),i++,a&&fi.INTEGER_REGEXP_.test(n)?r=Math.max(r,Number(n)):a=!1})),!e&&a&&r<2*i){const e=[];for(const i in t)e[i]=t[i];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yt(this.getPriority().val())+":"),this.forEachChild(ai,((t,i)=>{const r=i.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":p(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const i=r.getPredecessorKey(new Pt(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,(e=>e));{const i=this.children_.getIteratorFrom(e.name,Pt.Wrap);let r=i.peek();while(null!=r&&t.compare(r,e)<0)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,(e=>e));{const i=this.children_.getReverseIteratorFrom(e.name,Pt.Wrap);let r=i.peek();while(null!=r&&t.compare(r,e)>0)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_i?-1:0}withIndex(e){if(e===Lt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Lt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ai),i=t.getIterator(ai);let r=e.getNext(),a=i.getNext();while(r&&a){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=e.getNext(),a=i.getNext()}return null===r&&null===a}return!1}return!1}}resolveIndex_(e){return e===Lt?null:this.indexMap_.get(e.toString())}}fi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class di extends fi{constructor(){super(new Wt($t),fi.EMPTY_NODE,hi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fi.EMPTY_NODE}isEmpty(){return!1}}const _i=new di;Object.defineProperties(Pt,{MIN:{value:new Pt(q,fi.EMPTY_NODE)},MAX:{value:new Pt(A,_i)}}),Mt.__EMPTY_NODE=fi.EMPTY_NODE,ei.__childrenNodeConstructor=fi,Kt(_i),ii(_i);
/**
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
 */
const gi=!0;function Fi(e,t=null){if(null===e)return fi.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,n.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const i=e;return new ei(i,Fi(t))}if(e instanceof Array||!gi){let i=fi.EMPTY_NODE;return N(e,((t,r)=>{if((0,n.r3)(e,t)&&"."!==t.substring(0,1)){const e=Fi(r);!e.isLeafNode()&&e.isEmpty()||(i=i.updateImmediateChild(t,e))}})),i.updatePriority(Fi(t))}{const i=[];let r=!1;const a=e;if(N(a,((e,t)=>{if("."!==e.substring(0,1)){const a=Fi(t);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),i.push(new Pt(e,a)))}})),0===i.length)return fi.EMPTY_NODE;const n=si(i,Ht,(e=>e.name),$t);if(r){const e=si(i,ai.getCompare());return new fi(n,Fi(t),new hi({".priority":e},{".priority":ai}))}return new fi(n,Fi(t),hi.Default)}}ti(Fi);
/**
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
 */
class mi extends Ot{constructor(e){super(),this.indexPath_=e,(0,n.hu)(!pt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),a=i.compareTo(r);return 0===a?T(e.name,t.name):a}makePost(e,t){const i=Fi(e),r=fi.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pt(t,r)}maxPost(){const e=fi.EMPTY_NODE.updateChild(this.indexPath_,_i);return new Pt(A,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
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
 */class pi extends Ot{compare(e,t){const i=e.node.compareTo(t.node);return 0===i?T(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pt.MIN}maxPost(){return Pt.MAX}makePost(e,t){const i=Fi(e);return new Pt(t,i)}toString(){return".value"}}const bi=new pi;
/**
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
 */function yi(e){return{type:"value",snapshotNode:e}}function wi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ki(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function vi(e,t,i){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:i}}function Di(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */
/**
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
 */
class Ei{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ai}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,n.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,n.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:q}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,n.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,n.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,n.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ai}copy(){const e=new Ei;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ci(e){const t={};if(e.isDefault())return t;let i;if(e.index_===ai?i="$priority":e.index_===bi?i="$value":e.index_===Lt?i="$key":((0,n.hu)(e.index_ instanceof mi,"Unrecognized index type!"),i=e.index_.toString()),t["orderBy"]=(0,n.Wl)(i),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=(0,n.Wl)(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+(0,n.Wl)(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=(0,n.Wl)(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+(0,n.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function xi(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),t["vf"]=i}return e.index_!==ai&&(t["i"]=e.index_.toString()),t}
/**
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
 */class ji extends rt{constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=D("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,n.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const o=ji.getListenId_(e,i),s={};this.listens_[o]=s;const u=Ci(e._queryParams);this.restRequest_(a+".json",u,((e,t)=>{let u=t;if(404===e&&(u=null,e=null),null===e&&this.onDataUpdate_(a,u,!1,i),(0,n.DV)(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const i=ji.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ci(e._queryParams),i=e._path.toString(),r=new n.BH;return this.restRequest_(i+".json",t,((e,t)=>{let a=t;404===e&&(a=null,e=null),null===e?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,a])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),a&&a.token&&(t["ac"]=a.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,n.xO)(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let t=null;if(s.status>=200&&s.status<300){try{t=(0,n.cI)(s.responseText)}catch(e){x("Failed to parse JSON response for "+o+": "+s.responseText)}i(null,t)}else 401!==s.status&&404!==s.status&&x("Got unsuccessful REST response for "+o+" Status: "+s.status),i(s.status);i=null}},s.open("GET",o,!0),s.send()}))}}
/**
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
 */class Bi{constructor(){this.rootNode_=fi.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Si(){return{value:null,children:new Map}}function qi(e,t,i){if(pt(t))e.value=i,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,i);else{const r=ht(t);e.children.has(r)||e.children.set(r,Si());const a=e.children.get(r);t=ft(t),qi(a,t,i)}}function Ai(e,t,i){null!==e.value?i(t,e.value):Ti(e,((e,r)=>{const a=new ut(t.toString()+"/"+e);Ai(r,a,i)}))}function Ti(e,t){e.children.forEach(((e,i)=>{t(i,e)}))}
/**
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
 */class Ii{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&N(this.last_,((e,i)=>{t[e]=t[e]-i})),this.last_=e,t}}
/**
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
 */const Ri=1e4,Pi=3e4,Oi=3e5;class Ni{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ii(e);const i=Ri+(Pi-Ri)*Math.random();K(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;N(e,((e,r)=>{r>0&&(0,n.r3)(this.statsToReport_,e)&&(t[e]=r,i=!0)})),i&&this.server_.reportStats(t),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Oi))}}
/**
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
 */var Mi;function Li(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Mi||(Mi={}));class zi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Mi.ACK_USER_WRITE,this.source=Li()}operationForChild(e){if(pt(this.path)){if(null!=this.affectedTree.value)return(0,n.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new zi(lt(),t,this.revert)}}return(0,n.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new zi(ft(this.path),this.affectedTree,this.revert)}}
/**
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
 */
/**
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
 */
class Wi{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Mi.OVERWRITE}operationForChild(e){return pt(this.path)?new Wi(this.source,lt(),this.snap.getImmediateChild(e)):new Wi(this.source,ft(this.path),this.snap)}}
/**
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
 */class Hi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Mi.MERGE}operationForChild(e){if(pt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new Wi(this.source,lt(),t.value):new Hi(this.source,lt(),t)}return(0,n.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class $i{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */function Gi(e,t,i,r){const a=[],n=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&n.push(Di(t.childName,t.snapshotNode))})),Ki(e,a,"child_removed",t,r,i),Ki(e,a,"child_added",t,r,i),Ki(e,a,"child_moved",n,r,i),Ki(e,a,"child_changed",t,r,i),Ki(e,a,"value",t,r,i),a}function Ki(e,t,i,r,a,n){const o=r.filter((e=>e.type===i));o.sort(((t,i)=>Ji(e,t,i))),o.forEach((i=>{const r=Yi(e,i,n);a.forEach((a=>{a.respondsTo(i.type)&&t.push(a.createEvent(r,e.query_))}))}))}function Yi(e,t,i){return"value"===t.type||"child_removed"===t.type||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Ji(e,t,i){if(null==t.childName||null==i.childName)throw(0,n.g5)("Should only compare child_ events.");const r=new Pt(t.childName,t.snapshotNode),a=new Pt(i.childName,i.snapshotNode);return e.index_.compare(r,a)}
/**
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
 */function Qi(e,t){return{eventCache:e,serverCache:t}}function Xi(e,t,i,r){return Qi(new $i(t,i,r),e.serverCache)}function Zi(e,t,i,r){return Qi(e.eventCache,new $i(t,i,r))}function er(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ir;const rr=()=>(ir||(ir=new Wt(I)),ir);class ar{constructor(e,t=rr()){this.value=e,this.children=t}static fromObject(e){let t=new ar(null);return N(e,((e,i)=>{t=t.set(new ut(e),i)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(pt(e))return null;{const i=ht(e),r=this.children.get(i);if(null!==r){const a=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=a){const e=mt(new ut(i),a.path);return{path:e,value:a.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(pt(e))return this;{const t=ht(e),i=this.children.get(t);return null!==i?i.subtree(ft(e)):new ar(null)}}set(e,t){if(pt(e))return new ar(t,this.children);{const i=ht(e),r=this.children.get(i)||new ar(null),a=r.set(ft(e),t),n=this.children.insert(i,a);return new ar(this.value,n)}}remove(e){if(pt(e))return this.children.isEmpty()?new ar(null):new ar(null,this.children);{const t=ht(e),i=this.children.get(t);if(i){const r=i.remove(ft(e));let a;return a=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&a.isEmpty()?new ar(null):new ar(this.value,a)}return this}}get(e){if(pt(e))return this.value;{const t=ht(e),i=this.children.get(t);return i?i.get(ft(e)):null}}setTree(e,t){if(pt(e))return t;{const i=ht(e),r=this.children.get(i)||new ar(null),a=r.setTree(ft(e),t);let n;return n=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new ar(this.value,n)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const i={};return this.children.inorderTraversal(((r,a)=>{i[r]=a.fold_(mt(e,r),t)})),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,i){const r=!!this.value&&i(t,this.value);if(r)return r;if(pt(e))return null;{const r=ht(e),a=this.children.get(r);return a?a.findOnPath_(ft(e),mt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,i){if(pt(e))return this;{this.value&&i(t,this.value);const r=ht(e),a=this.children.get(r);return a?a.foreachOnPath_(ft(e),mt(t,r),i):new ar(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((i,r)=>{r.foreach_(mt(e,i),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,i)=>{i.value&&e(t,i.value)}))}}
/**
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
 */class nr{constructor(e){this.writeTree_=e}static empty(){return new nr(new ar(null))}}function or(e,t,i){if(pt(t))return new nr(new ar(i));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const a=r.path;let n=r.value;const o=bt(a,t);return n=n.updateChild(o,i),new nr(e.writeTree_.set(a,n))}{const r=new ar(i),a=e.writeTree_.setTree(t,r);return new nr(a)}}}function sr(e,t,i){let r=e;return N(i,((e,i)=>{r=or(r,mt(t,e),i)})),r}function ur(e,t){if(pt(t))return nr.empty();{const i=e.writeTree_.setTree(t,new ar(null));return new nr(i)}}function lr(e,t){return null!=hr(e,t)}function hr(e,t){const i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(bt(i.path,t)):null}function cr(e){const t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(ai,((e,i)=>{t.push(new Pt(e,i))})):e.writeTree_.children.inorderTraversal(((e,i)=>{null!=i.value&&t.push(new Pt(e,i.value))})),t}function fr(e,t){if(pt(t))return e;{const i=hr(e,t);return new nr(null!=i?new ar(i):e.writeTree_.subtree(t))}}function dr(e){return e.writeTree_.isEmpty()}function _r(e,t){return gr(lt(),e.writeTree_,t)}function gr(e,t,i){if(null!=t.value)return i.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,a)=>{".priority"===t?((0,n.hu)(null!==a.value,"Priority writes must always be leaf nodes"),r=a.value):i=gr(mt(e,t),a,i)})),i.getChild(e).isEmpty()||null===r||(i=i.updateChild(mt(e,".priority"),r)),i}}
/**
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
 */function Fr(e,t){return Nr(t,e)}function mr(e,t,i,r,a){(0,n.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===a&&(a=!0),e.allWrites.push({path:t,snap:i,writeId:r,visible:a}),a&&(e.visibleWrites=or(e.visibleWrites,t,i)),e.lastWriteId=r}function pr(e,t){for(let i=0;i<e.allWrites.length;i++){const r=e.allWrites[i];if(r.writeId===t)return r}return null}function br(e,t){const i=e.allWrites.findIndex((e=>e.writeId===t));(0,n.hu)(i>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[i];e.allWrites.splice(i,1);let a=r.visible,o=!1,s=e.allWrites.length-1;while(a&&s>=0){const t=e.allWrites[s];t.visible&&(s>=i&&yr(t,r.path)?a=!1:wt(r.path,t.path)&&(o=!0)),s--}if(a){if(o)return wr(e),!0;if(r.snap)e.visibleWrites=ur(e.visibleWrites,r.path);else{const t=r.children;N(t,(t=>{e.visibleWrites=ur(e.visibleWrites,mt(r.path,t))}))}return!0}return!1}function yr(e,t){if(e.snap)return wt(e.path,t);for(const i in e.children)if(e.children.hasOwnProperty(i)&&wt(mt(e.path,i),t))return!0;return!1}function wr(e){e.visibleWrites=vr(e.allWrites,kr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function kr(e){return e.visible}function vr(e,t,i){let r=nr.empty();for(let a=0;a<e.length;++a){const o=e[a];if(t(o)){const e=o.path;let t;if(o.snap)wt(i,e)?(t=bt(i,e),r=or(r,t,o.snap)):wt(e,i)&&(t=bt(e,i),r=or(r,lt(),o.snap.getChild(t)));else{if(!o.children)throw(0,n.g5)("WriteRecord should have .snap or .children");if(wt(i,e))t=bt(i,e),r=sr(r,t,o.children);else if(wt(e,i))if(t=bt(e,i),pt(t))r=sr(r,lt(),o.children);else{const e=(0,n.DV)(o.children,ht(t));if(e){const i=e.getChild(ft(t));r=or(r,lt(),i)}}}}}return r}function Dr(e,t,i,r,a){if(r||a){const n=fr(e.visibleWrites,t);if(!a&&dr(n))return i;if(a||null!=i||lr(n,lt())){const n=function(e){return(e.visible||a)&&(!r||!~r.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=vr(e.allWrites,n,t),s=i||fi.EMPTY_NODE;return _r(o,s)}return null}{const r=hr(e.visibleWrites,t);if(null!=r)return r;{const r=fr(e.visibleWrites,t);if(dr(r))return i;if(null!=i||lr(r,lt())){const e=i||fi.EMPTY_NODE;return _r(r,e)}return null}}}function Er(e,t,i){let r=fi.EMPTY_NODE;const a=hr(e.visibleWrites,t);if(a)return a.isLeafNode()||a.forEachChild(ai,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(i){const a=fr(e.visibleWrites,t);return i.forEachChild(ai,((e,t)=>{const i=_r(fr(a,new ut(e)),t);r=r.updateImmediateChild(e,i)})),cr(a).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const i=fr(e.visibleWrites,t);return cr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Cr(e,t,i,r,a){(0,n.hu)(r||a,"Either existingEventSnap or existingServerSnap must exist");const o=mt(t,i);if(lr(e.visibleWrites,o))return null;{const t=fr(e.visibleWrites,o);return dr(t)?a.getChild(i):_r(t,a.getChild(i))}}function xr(e,t,i,r){const a=mt(t,i),n=hr(e.visibleWrites,a);if(null!=n)return n;if(r.isCompleteForChild(i)){const t=fr(e.visibleWrites,a);return _r(t,r.getNode().getImmediateChild(i))}return null}function jr(e,t){return hr(e.visibleWrites,t)}function Br(e,t,i,r,a,n,o){let s;const u=fr(e.visibleWrites,t),l=hr(u,lt());if(null!=l)s=l;else{if(null==i)return[];s=_r(u,i)}if(s=s.withIndex(o),s.isEmpty()||s.isLeafNode())return[];{const e=[],t=o.getCompare(),i=n?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o);let u=i.getNext();while(u&&e.length<a)0!==t(u,r)&&e.push(u),u=i.getNext();return e}}function Sr(){return{visibleWrites:nr.empty(),allWrites:[],lastWriteId:-1}}function qr(e,t,i,r){return Dr(e.writeTree,e.treePath,t,i,r)}function Ar(e,t){return Er(e.writeTree,e.treePath,t)}function Tr(e,t,i,r){return Cr(e.writeTree,e.treePath,t,i,r)}function Ir(e,t){return jr(e.writeTree,mt(e.treePath,t))}function Rr(e,t,i,r,a,n){return Br(e.writeTree,e.treePath,t,i,r,a,n)}function Pr(e,t,i){return xr(e.writeTree,e.treePath,t,i)}function Or(e,t){return Nr(mt(e.treePath,t),e.writeTree)}function Nr(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Mr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;(0,n.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,n.hu)(".priority"!==i,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const a=r.type;if("child_added"===t&&"child_removed"===a)this.changeMap.set(i,vi(i,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===a)this.changeMap.delete(i);else if("child_removed"===t&&"child_changed"===a)this.changeMap.set(i,ki(i,r.oldSnap));else if("child_changed"===t&&"child_added"===a)this.changeMap.set(i,wi(i,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==a)throw(0,n.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(i,vi(i,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Lr{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Ur=new Lr;class Vr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pr(this.writes_,e,t)}}getChildAfterChild(e,t,i){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tr(this.viewCache_),a=Rr(this.writes_,r,t,1,i,e);return 0===a.length?null:a[0]}}
/**
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
 */function zr(e,t){(0,n.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,n.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Wr(e,t,i,r,a){const o=new Mr;let s,u;if(i.type===Mi.OVERWRITE){const l=i;l.source.fromUser?s=Kr(e,t,l.path,l.snap,r,a,o):((0,n.hu)(l.source.fromServer,"Unknown source."),u=l.source.tagged||t.serverCache.isFiltered()&&!pt(l.path),s=Gr(e,t,l.path,l.snap,r,a,u,o))}else if(i.type===Mi.MERGE){const l=i;l.source.fromUser?s=Jr(e,t,l.path,l.children,r,a,o):((0,n.hu)(l.source.fromServer,"Unknown source."),u=l.source.tagged||t.serverCache.isFiltered(),s=Xr(e,t,l.path,l.children,r,a,u,o))}else if(i.type===Mi.ACK_USER_WRITE){const n=i;s=n.revert?ta(e,t,n.path,r,a,o):Zr(e,t,n.path,n.affectedTree,r,a,o)}else{if(i.type!==Mi.LISTEN_COMPLETE)throw(0,n.g5)("Unknown operation type: "+i.type);s=ea(e,t,i.path,r,o)}const l=o.getChanges();return Hr(t,s,l),{viewCache:s,changes:l}}function Hr(e,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const a=r.getNode().isLeafNode()||r.getNode().isEmpty(),n=er(e);(i.length>0||!e.eventCache.isFullyInitialized()||a&&!r.getNode().equals(n)||!r.getNode().getPriority().equals(n.getPriority()))&&i.push(yi(er(t)))}}function $r(e,t,i,r,a,o){const s=t.eventCache;if(null!=Ir(r,i))return t;{let u,l;if(pt(i))if((0,n.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const i=tr(t),a=i instanceof fi?i:fi.EMPTY_NODE,n=Ar(r,a);u=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const i=qr(r,tr(t));u=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const h=ht(i);if(".priority"===h){(0,n.hu)(1===ct(i),"Can't have a priority with additional path components");const a=s.getNode();l=t.serverCache.getNode();const o=Tr(r,i,a,l);u=null!=o?e.filter.updatePriority(a,o):s.getNode()}else{const n=ft(i);let c;if(s.isCompleteForChild(h)){l=t.serverCache.getNode();const e=Tr(r,i,s.getNode(),l);c=null!=e?s.getNode().getImmediateChild(h).updateChild(n,e):s.getNode().getImmediateChild(h)}else c=Pr(r,h,t.serverCache);u=null!=c?e.filter.updateChild(s.getNode(),h,c,n,a,o):s.getNode()}}return Xi(t,u,s.isFullyInitialized()||pt(i),e.filter.filtersNodes())}}function Gr(e,t,i,r,a,n,o,s){const u=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(pt(i))l=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const e=u.getNode().updateChild(i,r);l=h.updateFullNode(u.getNode(),e,null)}else{const e=ht(i);if(!u.isCompleteForPath(i)&&ct(i)>1)return t;const a=ft(i),n=u.getNode().getImmediateChild(e),o=n.updateChild(a,r);l=".priority"===e?h.updatePriority(u.getNode(),o):h.updateChild(u.getNode(),e,o,a,Ur,null)}const c=Zi(t,l,u.isFullyInitialized()||pt(i),h.filtersNodes()),f=new Vr(a,c,n);return $r(e,c,i,a,f,s)}function Kr(e,t,i,r,a,n,o){const s=t.eventCache;let u,l;const h=new Vr(a,t,n);if(pt(i))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),u=Xi(t,l,!0,e.filter.filtersNodes());else{const a=ht(i);if(".priority"===a)l=e.filter.updatePriority(t.eventCache.getNode(),r),u=Xi(t,l,s.isFullyInitialized(),s.isFiltered());else{const n=ft(i),l=s.getNode().getImmediateChild(a);let c;if(pt(n))c=r;else{const e=h.getCompleteChild(a);c=null!=e?".priority"===dt(n)&&e.getChild(Ft(n)).isEmpty()?e:e.updateChild(n,r):fi.EMPTY_NODE}if(l.equals(c))u=t;else{const i=e.filter.updateChild(s.getNode(),a,c,n,h,o);u=Xi(t,i,s.isFullyInitialized(),e.filter.filtersNodes())}}}return u}function Yr(e,t){return e.eventCache.isCompleteForChild(t)}function Jr(e,t,i,r,a,n,o){let s=t;return r.foreach(((r,u)=>{const l=mt(i,r);Yr(t,ht(l))&&(s=Kr(e,s,l,u,a,n,o))})),r.foreach(((r,u)=>{const l=mt(i,r);Yr(t,ht(l))||(s=Kr(e,s,l,u,a,n,o))})),s}function Qr(e,t,i){return i.foreach(((e,i)=>{t=t.updateChild(e,i)})),t}function Xr(e,t,i,r,a,n,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let u,l=t;u=pt(i)?r:new ar(null).setTree(i,r);const h=t.serverCache.getNode();return u.children.inorderTraversal(((i,r)=>{if(h.hasChild(i)){const u=t.serverCache.getNode().getImmediateChild(i),h=Qr(e,u,r);l=Gr(e,l,new ut(i),h,a,n,o,s)}})),u.children.inorderTraversal(((i,r)=>{const u=!t.serverCache.isCompleteForChild(i)&&null===r.value;if(!h.hasChild(i)&&!u){const u=t.serverCache.getNode().getImmediateChild(i),h=Qr(e,u,r);l=Gr(e,l,new ut(i),h,a,n,o,s)}})),l}function Zr(e,t,i,r,a,n,o){if(null!=Ir(a,i))return t;const s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(pt(i)&&u.isFullyInitialized()||u.isCompleteForPath(i))return Gr(e,t,i,u.getNode().getChild(i),a,n,s,o);if(pt(i)){let r=new ar(null);return u.getNode().forEachChild(Lt,((e,t)=>{r=r.set(new ut(e),t)})),Xr(e,t,i,r,a,n,s,o)}return t}{let l=new ar(null);return r.foreach(((e,t)=>{const r=mt(i,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Xr(e,t,i,l,a,n,s,o)}}function ea(e,t,i,r,a){const n=t.serverCache,o=Zi(t,n.getNode(),n.isFullyInitialized()||pt(i),n.isFiltered());return $r(e,o,i,r,Ur,a)}function ta(e,t,i,r,a,o){let s;if(null!=Ir(r,i))return t;{const u=new Vr(r,t,a),l=t.eventCache.getNode();let h;if(pt(i)||".priority"===ht(i)){let i;if(t.serverCache.isFullyInitialized())i=qr(r,tr(t));else{const e=t.serverCache.getNode();(0,n.hu)(e instanceof fi,"serverChildren would be complete if leaf node"),i=Ar(r,e)}h=e.filter.updateFullNode(l,i,o)}else{const a=ht(i);let n=Pr(r,a,t.serverCache);null==n&&t.serverCache.isCompleteForChild(a)&&(n=l.getImmediateChild(a)),h=null!=n?e.filter.updateChild(l,a,n,ft(i),u,o):t.eventCache.getNode().hasChild(a)?e.filter.updateChild(l,a,fi.EMPTY_NODE,ft(i),u,o):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=qr(r,tr(t)),s.isLeafNode()&&(h=e.filter.updateFullNode(h,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=Ir(r,lt()),Xi(t,h,s,e.filter.filtersNodes())}}
/**
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
 */function ia(e,t){const i=tr(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!pt(t)&&!i.getImmediateChild(ht(t)).isEmpty())?i.getChild(t):null}function ra(e,t,i,r){t.type===Mi.MERGE&&null!==t.source.queryId&&((0,n.hu)(tr(e.viewCache_),"We should always have a full cache before handling merges"),(0,n.hu)(er(e.viewCache_),"Missing event cache, even though we have a server cache"));const a=e.viewCache_,o=Wr(e.processor_,a,t,i,r);return zr(e.processor_,o.viewCache),(0,n.hu)(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,aa(e,o.changes,o.viewCache.eventCache.getNode(),null)}function aa(e,t,i,r){const a=r?[r]:e.eventRegistrations_;return Gi(e.eventGenerator_,t,i,a)}
/**
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
 */let na,oa;function sa(e){(0,n.hu)(!na,"__referenceConstructor has already been defined"),na=e}function ua(e,t,i,r){const a=t.source.queryId;if(null!==a){const o=e.views.get(a);return(0,n.hu)(null!=o,"SyncTree gave us an op for an invalid query."),ra(o,t,i,r)}{let a=[];for(const n of e.views.values())a=a.concat(ra(n,t,i,r));return a}}function la(e,t){let i=null;for(const r of e.views.values())i=i||ia(r,t);return i}function ha(e){(0,n.hu)(!oa,"__referenceConstructor has already been defined"),oa=e}class ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ar(null),this.pendingWriteTree_=Sr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fa(e,t,i,r,a){return mr(e.pendingWriteTree_,t,i,r,a),a?ba(e,new Wi(Li(),t,i)):[]}function da(e,t,i=!1){const r=pr(e.pendingWriteTree_,t),a=br(e.pendingWriteTree_,t);if(a){let t=new ar(null);return null!=r.snap?t=t.set(lt(),!0):N(r.children,(e=>{t=t.set(new ut(e),!0)})),ba(e,new zi(r.path,t,i))}return[]}function _a(e,t,i){return ba(e,new Wi(Ui(),t,i))}function ga(e,t,i){const r=ar.fromObject(i);return ba(e,new Hi(Ui(),t,r))}function Fa(e,t,i,r){const a=ka(e,r);if(null!=a){const r=va(a),n=r.path,o=r.queryId,s=bt(n,t),u=new Wi(Vi(o),s,i);return Da(e,n,u)}return[]}function ma(e,t,i,r){const a=ka(e,r);if(a){const r=va(a),n=r.path,o=r.queryId,s=bt(n,t),u=ar.fromObject(i),l=new Hi(Vi(o),s,u);return Da(e,n,l)}return[]}function pa(e,t,i){const r=!0,a=e.pendingWriteTree_,n=e.syncPointTree_.findOnPath(t,((e,i)=>{const r=bt(e,t),a=la(i,r);if(a)return a}));return Dr(a,t,n,i,r)}function ba(e,t){return ya(t,e.syncPointTree_,null,Fr(e.pendingWriteTree_,lt()))}function ya(e,t,i,r){if(pt(e.path))return wa(e,t,i,r);{const a=t.get(lt());null==i&&null!=a&&(i=la(a,lt()));let n=[];const o=ht(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){const e=i?i.getImmediateChild(o):null,t=Or(r,o);n=n.concat(ya(s,u,e,t))}return a&&(n=n.concat(ua(a,e,r,i))),n}}function wa(e,t,i,r){const a=t.get(lt());null==i&&null!=a&&(i=la(a,lt()));let n=[];return t.children.inorderTraversal(((t,a)=>{const o=i?i.getImmediateChild(t):null,s=Or(r,t),u=e.operationForChild(t);u&&(n=n.concat(wa(u,a,o,s)))})),a&&(n=n.concat(ua(a,e,r,i))),n}function ka(e,t){return e.tagToQueryMap.get(t)}function va(e){const t=e.indexOf("$");return(0,n.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function Da(e,t,i){const r=e.syncPointTree_.get(t);(0,n.hu)(r,"Missing sync point for query tag that we're tracking");const a=Fr(e.pendingWriteTree_,t);return ua(r,i,a,null)}
/**
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
 */
class Ea{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ea(t)}node(){return this.node_}}class Ca{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=mt(this.path_,e);return new Ca(this.syncTree_,t)}node(){return pa(this.syncTree_,this.path_)}}const xa=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ja=function(e,t,i){return e&&"object"===typeof e?((0,n.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ba(e[".sv"],t,i):"object"===typeof e[".sv"]?Sa(e[".sv"],t):void(0,n.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ba=function(e,t,i){switch(e){case"timestamp":return i["timestamp"];default:(0,n.hu)(!1,"Unexpected server value: "+e)}},Sa=function(e,t,i){e.hasOwnProperty("increment")||(0,n.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,n.hu)(!1,"Unexpected increment value: "+r);const a=t.node();if((0,n.hu)(null!==a&&"undefined"!==typeof a,"Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return r;const o=a,s=o.getValue();return"number"!==typeof s?r:s+r},qa=function(e,t,i,r){return Ta(t,new Ca(i,e),r)},Aa=function(e,t,i){return Ta(e,new Ea(t),i)};function Ta(e,t,i){const r=e.getPriority().val(),a=ja(r,t.getImmediateChild(".priority"),i);let n;if(e.isLeafNode()){const r=e,n=ja(r.getValue(),t,i);return n!==r.getValue()||a!==r.getPriority().val()?new ei(n,Fi(a)):e}{const r=e;return n=r,a!==r.getPriority().val()&&(n=n.updatePriority(new ei(a))),r.forEachChild(ai,((e,r)=>{const a=Ta(r,t.getImmediateChild(e),i);a!==r&&(n=n.updateImmediateChild(e,a))})),n}}
/**
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
 */class Ia{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ra(e,t){let i=t instanceof ut?t:new ut(t),r=e,a=ht(i);while(null!==a){const e=(0,n.DV)(r.node.children,a)||{children:{},childCount:0};r=new Ia(a,r,e),i=ft(i),a=ht(i)}return r}function Pa(e){return e.node.value}function Oa(e,t){e.node.value=t,Wa(e)}function Na(e){return e.node.childCount>0}function Ma(e){return void 0===Pa(e)&&!Na(e)}function La(e,t){N(e.node.children,((i,r)=>{t(new Ia(i,e,r))}))}function Ua(e,t,i,r){i&&!r&&t(e),La(e,(e=>{Ua(e,t,!0,r)})),i&&r&&t(e)}function Va(e,t,i){let r=i?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function za(e){return new ut(null===e.parent?e.name:za(e.parent)+"/"+e.name)}function Wa(e){null!==e.parent&&Ha(e.parent,e.name,e)}function Ha(e,t,i){const r=Ma(i),a=(0,n.r3)(e.node.children,t);r&&a?(delete e.node.children[t],e.node.childCount--,Wa(e)):r||a||(e.node.children[t]=i.node,e.node.childCount++,Wa(e))}
/**
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
 */const $a=/[\[\].#$\/\u0000-\u001F\u007F]/,Ga=/[\[\].#$\u0000-\u001F\u007F]/,Ka=10485760,Ya=function(e){return"string"===typeof e&&0!==e.length&&!$a.test(e)},Ja=function(e){return"string"===typeof e&&0!==e.length&&!Ga.test(e)},Qa=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ja(e)},Xa=function(e,t,i){const r=i instanceof ut?new kt(i,e):i;if(void 0===t)throw new Error(e+"contains undefined "+Ct(r));if("function"===typeof t)throw new Error(e+"contains a function "+Ct(r)+" with contents = "+t.toString());if(B(t))throw new Error(e+"contains "+t.toString()+" "+Ct(r));if("string"===typeof t&&t.length>Ka/3&&(0,n.ug)(t)>Ka)throw new Error(e+"contains a string greater than "+Ka+" utf8 bytes "+Ct(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let i=!1,a=!1;if(N(t,((t,n)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Ya(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ct(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');vt(r,t),Xa(e,n,r),Dt(r)})),i&&a)throw new Error(e+' contains ".value" child '+Ct(r)+" in addition to actual children.")}},Za=function(e,t){const i=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ya(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!Qa(i))throw new Error((0,n.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class en{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tn(e,t){let i=null;for(let r=0;r<t.length;r++){const a=t[r],n=a.getPath();null===i||yt(n,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:n}),i.events.push(a)}i&&e.eventLists_.push(i)}function rn(e,t,i){tn(e,i),an(e,(e=>wt(e,t)||wt(t,e)))}function an(e,t){e.recursionDepth_++;let i=!0;for(let r=0;r<e.eventLists_.length;r++){const a=e.eventLists_[r];if(a){const n=a.path;t(n)?(nn(e.eventLists_[r]),e.eventLists_[r]=null):i=!1}}i&&(e.eventLists_=[]),e.recursionDepth_--}function nn(e){for(let t=0;t<e.events.length;t++){const i=e.events[t];if(null!==i){e.events[t]=null;const r=i.getEventRunner();y&&v("event: "+i.toString()),$(r)}}}
/**
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
 */const on="repo_interrupt",sn=25;class un{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new en,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Si(),this.transactionQueueTree_=new Ia,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ln(e,t,i){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new ji(e.repoInfo_,((t,i,r,a)=>{fn(e,t,i,r,a)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>dn(e,!0)),0);else{if("undefined"!==typeof i&&null!==i){if("object"!==typeof i)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,n.Wl)(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Rt(e.repoInfo_,t,((t,i,r,a)=>{fn(e,t,i,r,a)}),(t=>{dn(e,t)}),(t=>{_n(e,t)}),e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Fe(e.repoInfo_,(()=>new Ni(e.stats_,e.server_))),e.infoData_=new Bi,e.infoSyncTree_=new ca({startListening:(t,i,r,a)=>{let n=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(n=_a(e.infoSyncTree_,t._path,o),setTimeout((()=>{a("ok")}),0)),n},stopListening:()=>{}}),gn(e,"connected",!1),e.serverSyncTree_=new ca({startListening:(t,i,r,a)=>(e.server_.listen(t,r,i,((i,r)=>{const n=a(i,r);rn(e.eventQueue_,t._path,n)})),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}function hn(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),i=t.val()||0;return(new Date).getTime()+i}function cn(e){return xa({timestamp:hn(e)})}function fn(e,t,i,r,a){e.dataUpdateCount++;const o=new ut(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let s=[];if(a)if(r){const t=(0,n.UI)(i,(e=>Fi(e)));s=ma(e.serverSyncTree_,o,t,a)}else{const t=Fi(i);s=Fa(e.serverSyncTree_,o,t,a)}else if(r){const t=(0,n.UI)(i,(e=>Fi(e)));s=ga(e.serverSyncTree_,o,t)}else{const t=Fi(i);s=_a(e.serverSyncTree_,o,t)}let u=o;s.length>0&&(u=vn(e,o)),rn(e.eventQueue_,u,s)}function dn(e,t){gn(e,"connected",t),!1===t&&mn(e)}function _n(e,t){N(t,((t,i)=>{gn(e,t,i)}))}function gn(e,t,i){const r=new ut("/.info/"+t),a=Fi(i);e.infoData_.updateSnapshot(r,a);const n=_a(e.infoSyncTree_,r,a);rn(e.eventQueue_,r,n)}function Fn(e){return e.nextWriteId_++}function mn(e){bn(e,"onDisconnectEvents");const t=cn(e),i=Si();Ai(e.onDisconnect_,lt(),((r,a)=>{const n=qa(r,a,e.serverSyncTree_,t);qi(i,r,n)}));let r=[];Ai(i,lt(),((t,i)=>{r=r.concat(_a(e.serverSyncTree_,t,i));const a=Bn(e,t);vn(e,a)})),e.onDisconnect_=Si(),rn(e.eventQueue_,lt(),r)}function pn(e){e.persistentConnection_&&e.persistentConnection_.interrupt(on)}function bn(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),v(i,...t)}function yn(e,t,i){return pa(e.serverSyncTree_,t,i)||fi.EMPTY_NODE}function wn(e,t=e.transactionQueueTree_){if(t||jn(e,t),Pa(t)){const i=Cn(e,t);(0,n.hu)(i.length>0,"Sending zero length transaction queue");const r=i.every((e=>0===e.status));r&&kn(e,za(t),i)}else Na(t)&&La(t,(t=>{wn(e,t)}))}function kn(e,t,i){const r=i.map((e=>e.currentWriteId)),a=yn(e,t,r);let o=a;const s=a.hash();for(let h=0;h<i.length;h++){const e=i[h];(0,n.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const u=o.val(!0),l=t;e.server_.put(l.toString(),u,(r=>{bn(e,"transaction put response",{path:l.toString(),status:r});let a=[];if("ok"===r){const r=[];for(let t=0;t<i.length;t++)i[t].status=2,a=a.concat(da(e.serverSyncTree_,i[t].currentWriteId)),i[t].onComplete&&r.push((()=>i[t].onComplete(null,!0,i[t].currentOutputSnapshotResolved))),i[t].unwatcher();jn(e,Ra(e.transactionQueueTree_,t)),wn(e,e.transactionQueueTree_),rn(e.eventQueue_,t,a);for(let e=0;e<r.length;e++)$(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{x("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}vn(e,t)}}),s)}function vn(e,t){const i=En(e,t),r=za(i),a=Cn(e,i);return Dn(e,a,r),r}function Dn(e,t,i){if(0===t.length)return;const r=[];let a=[];const o=t.filter((e=>0===e.status)),s=o.map((e=>e.currentWriteId));for(let u=0;u<t.length;u++){const o=t[u],l=bt(i,o.path);let h,c=!1;if((0,n.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)c=!0,h=o.abortReason,a=a.concat(da(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=sn)c=!0,h="maxretry",a=a.concat(da(e.serverSyncTree_,o.currentWriteId,!0));else{const i=yn(e,o.path,s);o.currentInputSnapshot=i;const r=t[u].update(i.val());if(void 0!==r){Xa("transaction failed: Data returned ",r,o.path);let t=Fi(r);const u="object"===typeof r&&null!=r&&(0,n.r3)(r,".priority");u||(t=t.updatePriority(i.getPriority()));const l=o.currentWriteId,h=cn(e),c=Aa(t,i,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=c,o.currentWriteId=Fn(e),s.splice(s.indexOf(l),1),a=a.concat(fa(e.serverSyncTree_,o.path,c,o.currentWriteId,o.applyLocally)),a=a.concat(da(e.serverSyncTree_,l,!0))}else c=!0,h="nodata",a=a.concat(da(e.serverSyncTree_,o.currentWriteId,!0))}rn(e.eventQueue_,i,a),a=[],c&&(t[u].status=2,function(e){setTimeout(e,Math.floor(0))}(t[u].unwatcher),t[u].onComplete&&("nodata"===h?r.push((()=>t[u].onComplete(null,!1,t[u].currentInputSnapshot))):r.push((()=>t[u].onComplete(new Error(h),!1,null)))))}jn(e,e.transactionQueueTree_);for(let n=0;n<r.length;n++)$(r[n]);wn(e,e.transactionQueueTree_)}function En(e,t){let i,r=e.transactionQueueTree_;i=ht(t);while(null!==i&&void 0===Pa(r))r=Ra(r,i),t=ft(t),i=ht(t);return r}function Cn(e,t){const i=[];return xn(e,t,i),i.sort(((e,t)=>e.order-t.order)),i}function xn(e,t,i){const r=Pa(t);if(r)for(let a=0;a<r.length;a++)i.push(r[a]);La(t,(t=>{xn(e,t,i)}))}function jn(e,t){const i=Pa(t);if(i){let e=0;for(let t=0;t<i.length;t++)2!==i[t].status&&(i[e]=i[t],e++);i.length=e,Oa(t,i.length>0?i:void 0)}La(t,(t=>{jn(e,t)}))}function Bn(e,t){const i=za(En(e,t)),r=Ra(e.transactionQueueTree_,t);return Va(r,(t=>{Sn(e,t)})),Sn(e,r),Ua(r,(t=>{Sn(e,t)})),i}function Sn(e,t){const i=Pa(t);if(i){const r=[];let a=[],o=-1;for(let t=0;t<i.length;t++)3===i[t].status||(1===i[t].status?((0,n.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,i[t].status=3,i[t].abortReason="set"):((0,n.hu)(0===i[t].status,"Unexpected transaction status in abort"),i[t].unwatcher(),a=a.concat(da(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&r.push(i[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Oa(t,void 0):i.length=o+1,rn(e.eventQueue_,za(t),a);for(let e=0;e<r.length;e++)$(r[e])}}
/**
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
 */function qn(e){let t="";const i=e.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let e=i[a];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function An(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const i of e.split("&")){if(0===i.length)continue;const r=i.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):x(`Invalid query segment '${i}' in query '${e}'`)}return t}const Tn=function(e,t){const i=In(e),r=i.namespace;"firebase.com"===i.domain&&C(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===i.domain||C("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||j();const a="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new le(i.host,i.secure,r,a,t,"",r!==i.subdomain),path:new ut(i.pathString)}},In=function(e){let t="",i="",r="",a="",n="",o=!0,s="https",u=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(h,c)),h<c&&(a=qn(e.substring(h,c)));const f=An(e.substring(Math.min(e.length,c)));l=t.indexOf(":"),l>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(l+1),10)):l=t.length;const d=t.slice(0,l);if("localhost"===d.toLowerCase())i="localhost";else if(d.split(".").length<=2)i=d;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),i=t.substring(e+1),n=r}"ns"in f&&(n=f["ns"])}return{host:t,port:u,domain:i,subdomain:r,secure:o,scheme:s,pathString:a,namespace:n}},Rn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
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
 */
class Pn{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return pt(this._path)?null:dt(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=xi(this._queryParams),t=P(e);return"{}"===t?"default":t}get _queryObject(){return xi(this._queryParams)}isEqual(e){if(e=(0,n.m9)(e),!(e instanceof Pn))return!1;const t=this._repo===e._repo,i=yt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class On extends Pn{constructor(e,t){super(e,t,new Ei,!1)}get parent(){const e=Ft(this._path);return null===e?null:new On(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}sa(On),ha(On);
/**
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
 */
const Nn="FIREBASE_DATABASE_EMULATOR_HOST",Mn={};let Ln=!1;function Un(e,t,i,r,a){let n=r||e.options.databaseURL;void 0===n&&(e.options.projectId||C("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),v("Using default host for project ",e.options.projectId),n=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,s,u=Tn(n,a),l=u.repoInfo;"undefined"!==typeof process&&(s={NODE_ENV:"production",BASE_URL:"/chat/"}[Nn]),s?(o=!0,n=`http://${s}?ns=${l.namespace}`,u=Tn(n,a),l=u.repoInfo):o=!u.repoInfo.secure;const h=a&&o?new Q(Q.OWNER):new J(e.name,e.options,t);Za("Invalid Firebase Database URL",u),pt(u.path)||C("Database URL must point to the root of a Firebase Database (not including a child path).");const c=zn(l,e,h,new Y(e.name,i));return new Wn(c,e)}function Vn(e,t){const i=Mn[t];i&&i[e.key]===e||C(`Database ${t}(${e.repoInfo_}) has already been deleted.`),pn(e),delete i[e.key]}function zn(e,t,i,r){let a=Mn[t.name];a||(a={},Mn[t.name]=a);let n=a[e.toURLString()];return n&&C("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),n=new un(e,Ln,i,r),a[e.toURLString()]=n,n}class Wn{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ln(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Vn(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&C("Cannot call "+e+" on a deleted database.")}}
/**
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
 */
function Hn(e){h(r.Jn),(0,r.Xd)(new a.wA("database",((e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return Un(i,r,a,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(s,u,e),(0,r.KN)(s,u,"esm2017")}
/**
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
 */Rt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Rt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Hn()},4287:function(e,t,i){"use strict";i.d(t,{vr:function(){return _f},hJ:function(){return oc},JU:function(){return sc},QT:function(){return sf},ad:function(){return cc},cf:function(){return cf},IO:function(){return Gc},pl:function(){return lf},r7:function(){return hf}});i(4224),i(1121),i(7133),i(560),i(3429);var r,a=i(7077),n=i(7142),o=i(5168),s=i(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},c=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function d(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function _(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++F)}var g="closure_uid_"+(1e9*Math.random()>>>0),F=0;function m(e,t,i){return e.call.apply(e.bind,arguments)}function p(e,t,i){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function b(e,t,i){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:p,b.apply(null,arguments)}function y(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,r){for(var a=Array(arguments.length-2),n=2;n<arguments.length;n++)a[n-2]=arguments[n];return t.prototype[i].apply(e,a)}}function k(){this.s=this.s,this.o=this.o}var v=0;k.prototype.s=!1,k.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==v)||_(this)},k.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const D=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1};function E(e){const t=e.length;if(0<t){const i=Array(t);for(let r=0;r<t;r++)i[r]=e[r];return i}return[]}function C(e,t){for(let i=1;i<arguments.length;i++){const t=arguments[i];if(f(t)){const i=e.length||0,r=t.length||0;e.length=i+r;for(let a=0;a<r;a++)e[i+a]=t[a]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",(()=>{}),t),c.removeEventListener("test",(()=>{}),t)}catch(i){}return e}();function B(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=c.navigator;return e&&(e=e.userAgent)?e:""}function q(e){return-1!=S().indexOf(e)}function A(e){return A[" "](e),e}function T(e,t){var i=br;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}A[" "]=function(){};var I,R,P=q("Opera"),O=q("Trident")||q("MSIE"),N=q("Edge"),M=N||O,L=q("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&!q("Edge"))&&!(q("Trident")||q("MSIE"))&&!q("Edge"),U=-1!=S().toLowerCase().indexOf("webkit")&&!q("Edge");function V(){var e=c.document;return e?e.documentMode:void 0}e:{var z="",W=function(){var e=S();return L?/rv:([^\);]+)(\)|;)/.exec(e):N?/Edge\/([\d\.]+)/.exec(e):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):U?/WebKit\/(\S+)/.exec(e):P?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&(z=W?W[1]:""),O){var H=V();if(null!=H&&H>parseFloat(z)){I=String(H);break e}}I=z}if(c.document&&O){var $=V();R=$||(parseInt(I,10)||void 0)}else R=void 0;var G=R;function K(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(L){e:{try{A(t.nodeName);var a=!0;break e}catch(n){}a=!1}a||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}w(K,x);var Y={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Q=0;function X(e,t,i,r,a){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!r,this.la=a,this.key=++Q,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,i){for(const r in e)t.call(i,e[r],r,e)}function te(e,t){for(const i in e)t.call(void 0,e[i],i,e)}function ie(e){const t={};for(const i in e)t[i]=e[i];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(e,t){let i,r;for(let a=1;a<arguments.length;a++){for(i in r=arguments[a],r)e[i]=r[i];for(let t=0;t<re.length;t++)i=re[t],Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}}function ne(e){this.src=e,this.g={},this.h=0}function oe(e,t){var i=t.type;if(i in e.g){var r,a=e.g[i],n=D(a,t);(r=0<=n)&&Array.prototype.splice.call(a,n,1),r&&(Z(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function se(e,t,i,r){for(var a=0;a<e.length;++a){var n=e[a];if(!n.fa&&n.listener==t&&n.capture==!!i&&n.la==r)return a}return-1}ne.prototype.add=function(e,t,i,r,a){var n=e.toString();e=this.g[n],e||(e=this.g[n]=[],this.h++);var o=se(e,t,r,a);return-1<o?(t=e[o],i||(t.ia=!1)):(t=new X(t,this.src,n,!!r,a),t.ia=i,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,i,r,a){if(r&&r.once)return de(e,t,i,r,a);if(Array.isArray(t)){for(var n=0;n<t.length;n++)he(e,t[n],i,r,a);return null}return i=ye(i),e&&e[J]?e.O(t,i,d(r)?!!r.capture:!!r,a):ce(e,t,i,!1,r,a)}function ce(e,t,i,r,a,n){if(!t)throw Error("Invalid event type");var o=d(a)?!!a.capture:!!a,s=pe(e);if(s||(e[ue]=s=new ne(e)),i=s.add(t,i,r,o,n),i.proxy)return i;if(r=fe(),i.proxy=r,r.src=e,r.listener=i,e.addEventListener)j||(a=o),void 0===a&&(a=!1),e.addEventListener(t.toString(),r,a);else if(e.attachEvent)e.attachEvent(Fe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return i}function fe(){function e(i){return t.call(e.src,e.listener,i)}const t=me;return e}function de(e,t,i,r,a){if(Array.isArray(t)){for(var n=0;n<t.length;n++)de(e,t[n],i,r,a);return null}return i=ye(i),e&&e[J]?e.P(t,i,d(r)?!!r.capture:!!r,a):ce(e,t,i,!0,r,a)}function _e(e,t,i,r,a){if(Array.isArray(t))for(var n=0;n<t.length;n++)_e(e,t[n],i,r,a);else r=d(r)?!!r.capture:!!r,i=ye(i),e&&e[J]?(e=e.i,t=String(t).toString(),t in e.g&&(n=e.g[t],i=se(n,i,r,a),-1<i&&(Z(n[i]),Array.prototype.splice.call(n,i,1),0==n.length&&(delete e.g[t],e.h--)))):e&&(e=pe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,i,r,a)),(i=-1<e?t[e]:null)&&ge(i))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[J])oe(t.i,e);else{var i=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(i,r,e.capture):t.detachEvent?t.detachEvent(Fe(i),r):t.addListener&&t.removeListener&&t.removeListener(r),(i=pe(t))?(oe(i,e),0==i.h&&(i.src=null,t[ue]=null)):Z(e)}}}function Fe(e){return e in le?le[e]:le[e]="on"+e}function me(e,t){if(e.fa)e=!0;else{t=new K(t,this);var i=e.listener,r=e.la||e.src;e.ia&&ge(e),e=i.call(r,t)}return e}function pe(e){return e=e[ue],e instanceof ne?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function we(){k.call(this),this.i=new ne(this),this.S=this,this.J=null}function ke(e,t){var i,r=e.J;if(r)for(i=[];r;r=r.J)i.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var a=t;t=new x(r,e),ae(t,a)}if(a=!0,i)for(var n=i.length-1;0<=n;n--){var o=t.g=i[n];a=ve(o,r,!0,t)&&a}if(o=t.g=e,a=ve(o,r,!0,t)&&a,a=ve(o,r,!1,t)&&a,i)for(n=0;n<i.length;n++)o=t.g=i[n],a=ve(o,r,!1,t)&&a}function ve(e,t,i,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var a=!0,n=0;n<t.length;++n){var o=t[n];if(o&&!o.fa&&o.capture==i){var s=o.listener,u=o.la||o.src;o.ia&&oe(e.i,o),a=!1!==s.call(u,r)&&a}}return a&&!r.defaultPrevented}w(we,k),we.prototype[J]=!0,we.prototype.removeEventListener=function(e,t,i,r){_e(this,e,t,i,r)},we.prototype.N=function(){if(we.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],r=0;r<i.length;r++)Z(i[r]);delete t.g[e],t.h--}}this.J=null},we.prototype.O=function(e,t,i,r){return this.i.add(String(e),t,!1,i,r)},we.prototype.P=function(e,t,i,r){return this.i.add(String(e),t,!0,i,r)};var De=c.JSON.stringify;class Ee{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Ie;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const i=je.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var je=new Ee((()=>new Be),(e=>e.reset()));class Be{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Se(e){var t=1;e=e.split(":");const i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}function qe(e){c.setTimeout((()=>{throw e}),0)}let Ae,Te=!1,Ie=new xe,Re=()=>{const e=c.Promise.resolve(void 0);Ae=()=>{e.then(Pe)}};var Pe=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(i){qe(i)}var t=je;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Te=!1};function Oe(e,t){we.call(this),this.h=e||1,this.g=t||c,this.j=b(this.qb,this),this.l=Date.now()}function Ne(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Me(e,t,i){if("function"===typeof e)i&&(e=b(e,i));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Le(e){e.g=Me((()=>{e.g=null,e.i&&(e.i=!1,Le(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}w(Oe,we),r=Oe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(Ne(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Oe.$.N.call(this),Ne(this),delete this.g};class Ue extends k{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(e){k.call(this),this.h=e,this.g={}}w(Ve,k);var ze=[];function We(e,t,i,r){Array.isArray(i)||(i&&(ze[0]=i.toString()),i=ze);for(var a=0;a<i.length;a++){var n=he(t,i[a],r||e.handleEvent,!1,e.h||e);if(!n)break;e.g[n.key]=n}}function He(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function $e(){this.g=!0}function Ge(e,t,i,r,a,n){e.info((function(){if(e.g)if(n)for(var o="",s=n.split("&"),u=0;u<s.length;u++){var l=s[u].split("=");if(1<l.length){var h=l[0];l=l[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+l+"&":o+(h+"=redacted&")}}else o=null;else o=n;return"XMLHTTP REQ ("+r+") [attempt "+a+"]: "+t+"\n"+i+"\n"+o}))}function Ke(e,t,i,r,a,n,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+a+"]: "+t+"\n"+i+"\n"+n+" "+o}))}function Ye(e,t,i,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Qe(e,i)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Qe(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var r=i[e];if(!(2>r.length)){var a=r[1];if(Array.isArray(a)&&!(1>a.length)){var n=a[0];if("noop"!=n&&"stop"!=n&&"close"!=n)for(var o=1;o<a.length;o++)a[o]=""}}}return De(i)}catch(s){return t}}Ve.prototype.N=function(){Ve.$.N.call(this),He(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Ea=function(){this.g=!1},$e.prototype.info=function(){};var Xe={},Ze=null;function et(){return Ze=Ze||new we}function tt(e){x.call(this,Xe.Ta,e)}function it(e){const t=et();ke(t,new tt(t))}function rt(e,t){x.call(this,Xe.STAT_EVENT,e),this.stat=t}function at(e){const t=et();ke(t,new rt(t,e))}function nt(e,t){x.call(this,Xe.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",w(tt,x),Xe.STAT_EVENT="statevent",w(rt,x),Xe.Ua="timingevent",w(nt,x);var st={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function ct(){}lt.prototype.h=null;var ft,dt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _t(){x.call(this,"d")}function gt(){x.call(this,"c")}function Ft(){}function mt(e,t,i,r){this.l=e,this.j=t,this.m=i,this.W=r||1,this.U=new Ve(this),this.P=bt,e=M?125:void 0,this.V=new Oe(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}w(_t,x),w(gt,x),w(Ft,lt),Ft.prototype.g=function(){return new XMLHttpRequest},Ft.prototype.i=function(){return{}},ft=new Ft;var bt=45e3,yt={},wt={};function kt(e,t,i){e.L=1,e.v=Wt(Mt(t)),e.s=i,e.S=!0,vt(e,null)}function vt(e,t){e.G=Date.now(),xt(e),e.A=Mt(e.v);var i=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ri(i.i,"t",r),e.C=0,i=e.l.J,e.h=new pt,e.g=ur(e.l,i?t:null,!e.s),0<e.O&&(e.M=new Ue(b(e.Pa,e,e.g),e.O)),We(e.U,e.g,"readystatechange",e.nb),t=e.I?ie(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),it(),Ge(e.j,e.u,e.A,e.m,e.W,e.s)}function Dt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Et(e,t,i){let r,a=!0;for(;!e.J&&e.C<i.length;){if(r=Ct(e,i),r==wt){4==t&&(e.o=4,at(14),a=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==yt){e.o=4,at(15),Ye(e.j,e.m,i,"[Invalid Chunk]"),a=!1;break}Ye(e.j,e.m,r,null),At(e,r)}Dt(e)&&r!=wt&&r!=yt&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,at(16),a=!1),e.i=e.i&&a,a?0<i.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),er(t),t.M=!0,at(11))):(Ye(e.j,e.m,i,"[Invalid Chunked Response]"),qt(e),St(e))}function Ct(e,t){var i=e.C,r=t.indexOf("\n",i);return-1==r?wt:(i=Number(t.substring(i,r)),isNaN(i)?yt:(r+=1,r+i>t.length?wt:(t=t.slice(r,r+i),e.C=r+i,t)))}function xt(e){e.Y=Date.now()+e.P,jt(e,e.P)}function jt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(b(e.lb,e),t)}function Bt(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function St(e){0==e.l.H||e.J||rr(e.l,e)}function qt(e){Bt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ne(e.V),He(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function At(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||ci(i.i,e)))if(!e.K&&ci(i.i,e)&&3==i.H){try{var r=i.Ja.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var a=r;if(0==a[0]){e:if(!i.u){if(i.g){if(!(i.g.G+3e3<e.G))break e;ir(i),Hi(i)}Zi(i),at(18)}}else i.Fa=a[1],0<i.Fa-i.V&&37500>a[2]&&i.G&&0==i.A&&!i.v&&(i.v=ot(b(i.ib,i),6e3));if(1>=hi(i.i)&&i.oa){try{i.oa()}catch(l){}i.oa=void 0}}else nr(i,11)}else if((e.K||i.g==e)&&ir(i),!B(t))for(a=i.Ja.g.parse(t),t=0;t<a.length;t++){let l=a[t];if(i.V=l[0],l=l[1],2==i.H)if("c"==l[0]){i.K=l[1],i.pa=l[2];const t=l[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));const a=l[4];null!=a&&(i.Ga=a,i.l.info("SVER="+i.Ga));const h=l[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,i.L=r,i.l.info("backChannelRequestTimeoutMs_="+r)),r=i;const c=e.g;if(c){const e=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var n=r.i;n.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(n.j=n.l,n.g=new Set,n.h&&(fi(n,n.h),n.h=null))}if(r.F){const e=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,zt(r.I,r.F,e))}}i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),r=i;var o=e;if(r.wa=sr(r,r.J?r.pa:null,r.Y),o.K){di(r.i,o);var s=o,u=r.L;u&&s.setTimeout(u),s.B&&(Bt(s),xt(s)),r.g=o}else Xi(r);0<i.j.length&&Gi(i)}else"stop"!=l[0]&&"close"!=l[0]||nr(i,7);else 3==i.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?nr(i,7):Wi(i):"noop"!=l[0]&&i.h&&i.h.Aa(l),i.A=0)}it(4)}catch(l){}}function Tt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],i=e.length,r=0;r<i;r++)t.push(e[r]);return t}for(r in t=[],i=0,e)t[i++]=e[r];return t}function It(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}t=[],i=0;for(const r in e)t[i++]=r;return t}}}function Rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=It(e),r=Tt(e),a=r.length,n=0;n<a;n++)t.call(void 0,r[n],i&&i[n],e)}r=mt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Oi(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const h=Oi(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>h)&&(3!=h||M||this.g&&(this.h.h||this.g.ja()||Ni(this.g)))){this.J||4!=h||7==t||it(8==t||0>=f?3:2),Bt(this);var i=this.g.da();this.ca=i;t:if(Dt(this)){var r=Ni(this.g);e="";var a=r.length,n=4==Oi(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){qt(this),St(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<a;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:n&&t==a-1});r.splice(0,a),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,Ke(this.j,this.u,this.A,this.m,this.W,h,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var s,u=this.g;if((s=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(s)){var l=s;break t}}l=null}if(!(i=l)){this.i=!1,this.o=3,at(12),qt(this),St(this);break e}Ye(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,At(this,i)}this.S?(Et(this,h,o),M&&this.i&&3==h&&(We(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),At(this,o)),4==h&&qt(this),this.i&&!this.J&&(4==h?rr(this.l,this):(this.i=!1,xt(this)))}else Mi(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),qt(this),St(this)}}}catch(h){}},r.mb=function(){if(this.g){var e=Oi(this.g),t=this.g.ja();this.C<t.length&&(Bt(this),Et(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.J=!0,qt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Je(this.j,this.A),2!=this.L&&(it(),at(17)),qt(this),this.o=2,St(this)):jt(this,this.Y-e)};var Pt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ot(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var r=e[i].indexOf("="),a=null;if(0<=r){var n=e[i].substring(0,r);a=e[i].substring(r+1)}else n=e[i];t(n,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function Nt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Nt){this.h=e.h,Lt(this,e.j),this.s=e.s,this.g=e.g,Ut(this,e.m),this.l=e.l;var t=e.i,i=new Zt;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),Vt(this,i),this.o=e.o}else e&&(t=String(e).match(Pt))?(this.h=!1,Lt(this,t[1]||"",!0),this.s=Ht(t[2]||""),this.g=Ht(t[3]||"",!0),Ut(this,t[4]),this.l=Ht(t[5]||"",!0),Vt(this,t[6]||"",!0),this.o=Ht(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Mt(e){return new Nt(e)}function Lt(e,t,i){e.j=i?Ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Vt(e,t,i){t instanceof Zt?(e.i=t,ni(e.i,e.h)):(i||(t=$t(t,Qt)),e.i=new Zt(t,e.h))}function zt(e,t,i){e.i.set(t,i)}function Wt(e){return zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $t(e,t,i){return"string"===typeof e?(e=encodeURI(e).replace(t,Gt),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Nt.prototype.toString=function(){var e=[],t=this.j;t&&e.push($t(t,Kt,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push($t(t,Kt,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.m,null!=i&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push($t(i,"/"==i.charAt(0)?Jt:Yt,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",$t(i,Xt)),e.join("")};var Kt=/[#\/\?@]/g,Yt=/[#\?:]/g,Jt=/[#\?]/g,Qt=/[#\?@]/g,Xt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ei(e){e.g||(e.g=new Map,e.h=0,e.i&&Ot(e.i,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function ti(e,t){ei(e),t=ai(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ii(e,t){return ei(e),t=ai(e,t),e.g.has(t)}function ri(e,t,i){ti(e,t),0<i.length&&(e.i=null,e.g.set(ai(e,t),E(i)),e.h+=i.length)}function ai(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ni(e,t){t&&!e.j&&(ei(e),e.i=null,e.g.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(ti(this,t),ri(this,i,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){ei(this),this.i=null,e=ai(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},r.forEach=function(e,t){ei(this),this.g.forEach((function(i,r){i.forEach((function(i){e.call(t,i,r,this)}),this)}),this)},r.ta=function(){ei(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let r=0;r<t.length;r++){const a=e[r];for(let e=0;e<a.length;e++)i.push(t[r])}return i},r.Z=function(e){ei(this);let t=[];if("string"===typeof e)ii(this,e)&&(t=t.concat(this.g.get(ai(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},r.set=function(e,t){return ei(this),this.i=null,e=ai(this,e),ii(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var r=t[i];const n=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var a=n;""!==o[r]&&(a+="="+encodeURIComponent(String(o[r]))),e.push(a)}}return this.i=e.join("&")};var oi=class{constructor(e,t){this.g=e,this.map=t}};function si(e){this.l=e||ui,c.PerformanceNavigationTiming?(e=c.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ui=10;function li(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hi(e){return e.h?1:e.g?e.g.size:0}function ci(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fi(e,t){e.g?e.g.add(t):e.h=t}function di(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function _i(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const i of e.g.values())t=t.concat(i.F);return t}return E(e.i)}si.prototype.cancel=function(){if(this.i=_i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var gi=class{stringify(e){return c.JSON.stringify(e,void 0)}parse(e){return c.JSON.parse(e,void 0)}};function Fi(){this.g=new gi}function mi(e,t,i){const r=i||"";try{Rt(e,(function(e,i){let a=e;d(e)&&(a=De(e)),t.push(r+i+"="+encodeURIComponent(a))}))}catch(a){throw t.push(r+"type="+encodeURIComponent("_badmap")),a}}function pi(e,t){const i=new $e;if(c.Image){const r=new Image;r.onload=y(bi,i,r,"TestLoadImage: loaded",!0,t),r.onerror=y(bi,i,r,"TestLoadImage: error",!1,t),r.onabort=y(bi,i,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(bi,i,r,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bi(e,t,i,r,a){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,a(r)}catch(n){}}function yi(e){this.l=e.ec||null,this.j=e.ob||!1}function wi(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ki,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(yi,lt),yi.prototype.g=function(){return new wi(this.l,this.j)},yi.prototype.i=function(e){return function(){return e}}({}),w(wi,we);var ki=0;function vi(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Di(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ei(e)}function Ei(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=wi.prototype,r.open=function(e,t){if(this.readyState!=ki)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ei(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||c).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Di(this)),this.readyState=ki},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vi(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Di(this):Ei(this),3==this.readyState&&vi(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Di(this))},r.Ya=function(e){this.g&&(this.response=e,Di(this))},r.ka=function(){this.g&&Di(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var i=t.next();!i.done;)i=i.value,e.push(i[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ci=c.JSON.parse;function xi(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ji,this.L=this.M=!1}w(xi,we);var ji="",Bi=/^https?$/i,Si=["POST","PUT"];function qi(e){return O&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Ai(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ti(e),Ri(e)}function Ti(e){e.F||(e.F=!0,ke(e,"complete"),ke(e,"error"))}function Ii(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Oi(e)||2!=e.da()))if(e.v&&4==Oi(e))Me(e.La,0,e);else if(ke(e,"readystatechange"),4==Oi(e)){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var i;if(!(i=t)){var r;if(r=0===s){var a=String(e.I).match(Pt)[1]||null;!a&&c.self&&c.self.location&&(a=c.self.location.protocol.slice(0,-1)),r=!Bi.test(a?a.toLowerCase():"")}i=r}if(i)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var n=2<Oi(e)?e.g.statusText:""}catch(o){n=""}e.j=n+" ["+e.da()+"]",Ti(e)}}finally{Ri(e)}}}function Ri(e,t){if(e.g){Pi(e);const r=e.g,a=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=a}catch(i){}}}function Pi(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function Oi(e){return e.g?e.g.readyState:0}function Ni(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ji:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Yr){return null}}function Mi(e){const t={};e=(e.g&&2<=Oi(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(B(e[r]))continue;var i=Se(e[r]);const a=i[0];if(i=i[1],"string"!==typeof i)continue;i=i.trim();const n=t[a]||[];t[a]=n,n.push(i)}te(t,(function(e){return e.join(", ")}))}function Li(e){let t="";return ee(e,(function(e,i){t+=i,t+=":",t+=e,t+="\r\n"})),t}function Ui(e,t,i){e:{for(r in i){var r=!1;break e}r=!0}r||(i=Li(i),"string"===typeof e?null!=i&&encodeURIComponent(String(i)):zt(e,t,i))}function Vi(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function zi(e){this.Ga=0,this.j=[],this.l=new $e,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vi("baseRetryDelayMs",5e3,e),this.hb=Vi("retryDelaySeedMs",1e4,e),this.eb=Vi("forwardChannelMaxRetries",2,e),this.xa=Vi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new si(e&&e.concurrentRequestLimit),this.Ja=new Fi,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Wi(e){if($i(e),3==e.H){var t=e.W++,i=Mt(e.I);if(zt(i,"SID",e.K),zt(i,"RID",t),zt(i,"TYPE","terminate"),Ji(e,i),t=new mt(e,e.l,t),t.L=2,t.v=Wt(Mt(i)),i=!1,c.navigator&&c.navigator.sendBeacon)try{i=c.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!i&&c.Image&&((new Image).src=t.v,i=!0),i||(t.g=ur(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xt(t)}or(e)}function Hi(e){e.g&&(er(e),e.g.cancel(),e.g=null)}function $i(e){Hi(e),e.u&&(c.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Gi(e){if(!li(e.i)&&!e.m){e.m=!0;var t=e.Na;Ae||Re(),Te||(Ae(),Te=!0),Ie.add(t,e),e.C=0}}function Ki(e,t){return!(hi(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(b(e.Na,e,t),ar(e,e.C)),e.C++,!0))}function Yi(e,t){var i;i=t?t.m:e.W++;const r=Mt(e.I);zt(r,"SID",e.K),zt(r,"RID",i),zt(r,"AID",e.V),Ji(e,r),e.o&&e.s&&Ui(r,e.o,e.s),i=new mt(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Qi(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fi(e.i,i),kt(i,r,t)}function Ji(e,t){e.na&&ee(e.na,(function(e,i){zt(t,i,e)})),e.h&&Rt({},(function(e,i){zt(t,i,e)}))}function Qi(e,t,i){i=Math.min(e.j.length,i);var r=e.h?b(e.h.Va,e.h,e):null;e:{var a=e.j;let t=-1;for(;;){const e=["count="+i];-1==t?0<i?(t=a[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<i;s++){let i=a[s].g;const u=a[s].map;if(i-=t,0>i)t=Math.max(0,a[s].g-100),o=!1;else try{mi(u,e,"req"+i+"_")}catch(n){r&&r(u)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,r}function Xi(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ae||Re(),Te||(Ae(),Te=!0),Ie.add(t,e),e.A=0}}function Zi(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(b(e.Ma,e),ar(e,e.A)),e.A++,!0)}function er(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function tr(e){e.g=new mt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Mt(e.wa);zt(t,"RID","rpc"),zt(t,"SID",e.K),zt(t,"AID",e.V),zt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&zt(t,"TO",e.qa),zt(t,"TYPE","xmlhttp"),Ji(e,t),e.o&&e.s&&Ui(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.v=Wt(Mt(t)),i.s=null,i.S=!0,vt(i,e)}function ir(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function rr(e,t){var i=null;if(e.g==t){ir(e),er(e),e.g=null;var r=2}else{if(!ci(e.i,t))return;i=t.F,di(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){i=t.s?t.s.length:0,t=Date.now()-t.G;var a=e.C;r=et(),ke(r,new nt(r,i)),Gi(e)}else Xi(e);else if(a=t.o,3==a||0==a&&0<t.ca||!(1==r&&Ki(e,t)||2==r&&Zi(e)))switch(i&&0<i.length&&(t=e.i,t.i=t.i.concat(i)),a){case 1:nr(e,5);break;case 4:nr(e,10);break;case 3:nr(e,6);break;default:nr(e,2)}}function ar(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function nr(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var r=b(e.pb,e);i||(i=new Nt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Lt(i,"https"),Wt(i)),pi(i.toString(),r)}else at(2);e.H=0,e.h&&e.h.za(t),or(e),$i(e)}function or(e){if(e.H=0,e.ma=[],e.h){const t=_i(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,E(e.j),e.j.length=0),e.h.ya()}}function sr(e,t,i){var r=i instanceof Nt?Mt(i):new Nt(i);if(""!=r.g)t&&(r.g=t+"."+r.g),Ut(r,r.m);else{var a=c.location;r=a.protocol,t=t?t+"."+a.hostname:a.hostname,a=+a.port;var n=new Nt(null);r&&Lt(n,r),t&&(n.g=t),a&&Ut(n,a),i&&(n.l=i),r=n}return i=e.F,t=e.Da,i&&t&&zt(r,i,t),zt(r,"VER",e.ra),Ji(e,r),r}function ur(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=i&&e.Ha&&!e.va?new xi(new yi({ob:!0})):new xi(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(O&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function cr(e,t){we.call(this),this.g=new zi(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!B(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!B(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new _r(this)}function fr(e){_t.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dr(){gt.call(this),this.status=1}function _r(e){this.g=e}function gr(){this.blockSize=-1}function Fr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function mr(e,t,i){i||(i=0);var r=Array(16);if("string"===typeof t)for(var a=0;16>a;++a)r[a]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(a=0;16>a;++a)r[a]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],a=e.g[2];var n=e.g[3],o=t+(n^i&(a^n))+r[0]+3614090360&4294967295;t=i+(o<<7&4294967295|o>>>25),o=n+(a^t&(i^a))+r[1]+3905402710&4294967295,n=t+(o<<12&4294967295|o>>>20),o=a+(i^n&(t^i))+r[2]+606105819&4294967295,a=n+(o<<17&4294967295|o>>>15),o=i+(t^a&(n^t))+r[3]+3250441966&4294967295,i=a+(o<<22&4294967295|o>>>10),o=t+(n^i&(a^n))+r[4]+4118548399&4294967295,t=i+(o<<7&4294967295|o>>>25),o=n+(a^t&(i^a))+r[5]+1200080426&4294967295,n=t+(o<<12&4294967295|o>>>20),o=a+(i^n&(t^i))+r[6]+2821735955&4294967295,a=n+(o<<17&4294967295|o>>>15),o=i+(t^a&(n^t))+r[7]+4249261313&4294967295,i=a+(o<<22&4294967295|o>>>10),o=t+(n^i&(a^n))+r[8]+1770035416&4294967295,t=i+(o<<7&4294967295|o>>>25),o=n+(a^t&(i^a))+r[9]+2336552879&4294967295,n=t+(o<<12&4294967295|o>>>20),o=a+(i^n&(t^i))+r[10]+4294925233&4294967295,a=n+(o<<17&4294967295|o>>>15),o=i+(t^a&(n^t))+r[11]+2304563134&4294967295,i=a+(o<<22&4294967295|o>>>10),o=t+(n^i&(a^n))+r[12]+1804603682&4294967295,t=i+(o<<7&4294967295|o>>>25),o=n+(a^t&(i^a))+r[13]+4254626195&4294967295,n=t+(o<<12&4294967295|o>>>20),o=a+(i^n&(t^i))+r[14]+2792965006&4294967295,a=n+(o<<17&4294967295|o>>>15),o=i+(t^a&(n^t))+r[15]+1236535329&4294967295,i=a+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[1]+4129170786&4294967295,t=i+(o<<5&4294967295|o>>>27),o=n+(i^a&(t^i))+r[6]+3225465664&4294967295,n=t+(o<<9&4294967295|o>>>23),o=a+(t^i&(n^t))+r[11]+643717713&4294967295,a=n+(o<<14&4294967295|o>>>18),o=i+(n^t&(a^n))+r[0]+3921069994&4294967295,i=a+(o<<20&4294967295|o>>>12),o=t+(a^n&(i^a))+r[5]+3593408605&4294967295,t=i+(o<<5&4294967295|o>>>27),o=n+(i^a&(t^i))+r[10]+38016083&4294967295,n=t+(o<<9&4294967295|o>>>23),o=a+(t^i&(n^t))+r[15]+3634488961&4294967295,a=n+(o<<14&4294967295|o>>>18),o=i+(n^t&(a^n))+r[4]+3889429448&4294967295,i=a+(o<<20&4294967295|o>>>12),o=t+(a^n&(i^a))+r[9]+568446438&4294967295,t=i+(o<<5&4294967295|o>>>27),o=n+(i^a&(t^i))+r[14]+3275163606&4294967295,n=t+(o<<9&4294967295|o>>>23),o=a+(t^i&(n^t))+r[3]+4107603335&4294967295,a=n+(o<<14&4294967295|o>>>18),o=i+(n^t&(a^n))+r[8]+1163531501&4294967295,i=a+(o<<20&4294967295|o>>>12),o=t+(a^n&(i^a))+r[13]+2850285829&4294967295,t=i+(o<<5&4294967295|o>>>27),o=n+(i^a&(t^i))+r[2]+4243563512&4294967295,n=t+(o<<9&4294967295|o>>>23),o=a+(t^i&(n^t))+r[7]+1735328473&4294967295,a=n+(o<<14&4294967295|o>>>18),o=i+(n^t&(a^n))+r[12]+2368359562&4294967295,i=a+(o<<20&4294967295|o>>>12),o=t+(i^a^n)+r[5]+4294588738&4294967295,t=i+(o<<4&4294967295|o>>>28),o=n+(t^i^a)+r[8]+2272392833&4294967295,n=t+(o<<11&4294967295|o>>>21),o=a+(n^t^i)+r[11]+1839030562&4294967295,a=n+(o<<16&4294967295|o>>>16),o=i+(a^n^t)+r[14]+4259657740&4294967295,i=a+(o<<23&4294967295|o>>>9),o=t+(i^a^n)+r[1]+2763975236&4294967295,t=i+(o<<4&4294967295|o>>>28),o=n+(t^i^a)+r[4]+1272893353&4294967295,n=t+(o<<11&4294967295|o>>>21),o=a+(n^t^i)+r[7]+4139469664&4294967295,a=n+(o<<16&4294967295|o>>>16),o=i+(a^n^t)+r[10]+3200236656&4294967295,i=a+(o<<23&4294967295|o>>>9),o=t+(i^a^n)+r[13]+681279174&4294967295,t=i+(o<<4&4294967295|o>>>28),o=n+(t^i^a)+r[0]+3936430074&4294967295,n=t+(o<<11&4294967295|o>>>21),o=a+(n^t^i)+r[3]+3572445317&4294967295,a=n+(o<<16&4294967295|o>>>16),o=i+(a^n^t)+r[6]+76029189&4294967295,i=a+(o<<23&4294967295|o>>>9),o=t+(i^a^n)+r[9]+3654602809&4294967295,t=i+(o<<4&4294967295|o>>>28),o=n+(t^i^a)+r[12]+3873151461&4294967295,n=t+(o<<11&4294967295|o>>>21),o=a+(n^t^i)+r[15]+530742520&4294967295,a=n+(o<<16&4294967295|o>>>16),o=i+(a^n^t)+r[2]+3299628645&4294967295,i=a+(o<<23&4294967295|o>>>9),o=t+(a^(i|~n))+r[0]+4096336452&4294967295,t=i+(o<<6&4294967295|o>>>26),o=n+(i^(t|~a))+r[7]+1126891415&4294967295,n=t+(o<<10&4294967295|o>>>22),o=a+(t^(n|~i))+r[14]+2878612391&4294967295,a=n+(o<<15&4294967295|o>>>17),o=i+(n^(a|~t))+r[5]+4237533241&4294967295,i=a+(o<<21&4294967295|o>>>11),o=t+(a^(i|~n))+r[12]+1700485571&4294967295,t=i+(o<<6&4294967295|o>>>26),o=n+(i^(t|~a))+r[3]+2399980690&4294967295,n=t+(o<<10&4294967295|o>>>22),o=a+(t^(n|~i))+r[10]+4293915773&4294967295,a=n+(o<<15&4294967295|o>>>17),o=i+(n^(a|~t))+r[1]+2240044497&4294967295,i=a+(o<<21&4294967295|o>>>11),o=t+(a^(i|~n))+r[8]+1873313359&4294967295,t=i+(o<<6&4294967295|o>>>26),o=n+(i^(t|~a))+r[15]+4264355552&4294967295,n=t+(o<<10&4294967295|o>>>22),o=a+(t^(n|~i))+r[6]+2734768916&4294967295,a=n+(o<<15&4294967295|o>>>17),o=i+(n^(a|~t))+r[13]+1309151649&4294967295,i=a+(o<<21&4294967295|o>>>11),o=t+(a^(i|~n))+r[4]+4149444226&4294967295,t=i+(o<<6&4294967295|o>>>26),o=n+(i^(t|~a))+r[11]+3174756917&4294967295,n=t+(o<<10&4294967295|o>>>22),o=a+(t^(n|~i))+r[2]+718787259&4294967295,a=n+(o<<15&4294967295|o>>>17),o=i+(n^(a|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(a+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+a&4294967295,e.g[3]=e.g[3]+n&4294967295}function pr(e,t){this.h=t;for(var i=[],r=!0,a=e.length-1;0<=a;a--){var n=0|e[a];r&&n==t||(i[a]=n,r=!1)}this.g=i}r=xi.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(n){return void Ai(this,n)}if(e=i||"",i=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var a in r)i.set(a,r[a]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())i.set(e,r.get(e))}r=Array.from(i.keys()).find((e=>"content-type"==e.toLowerCase())),a=c.FormData&&e instanceof c.FormData,!(0<=D(Si,t))||r||a||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of i)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pi(this),0<this.B&&((this.L=qi(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Me(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(n){Ai(this,n)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ri(this,!0)),xi.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ii(this):this.kb())},r.kb=function(){Ii(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Oi(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ci(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zi.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const a=new mt(this,this.l,e);let n=this.s;if(this.U&&(n?(n=ie(n),ae(n,this.U)):n=this.U),null!==this.o||this.O||(a.I=n,n=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){var r=this.j[i];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=Qi(this,a,t),i=Mt(this.I),zt(i,"RID",e),zt(i,"CVER",22),this.F&&zt(i,"X-HTTP-Session-Id",this.F),Ji(this,i),n&&(this.O?t="headers="+encodeURIComponent(String(Li(n)))+"&"+t:this.o&&Ui(i,this.o,n)),fi(this.i,a),this.bb&&zt(i,"TYPE","init"),this.P?(zt(i,"$req",t),zt(i,"SID","null"),a.aa=!0,kt(a,i,null)):kt(a,i,t),this.H=2}}else 3==this.H&&(e?Yi(this,e):0==this.j.length||li(this.i)||Yi(this))},r.Ma=function(){if(this.u=null,tr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),Hi(this),tr(this))},r.ib=function(){null!=this.v&&(this.v=null,Hi(this),Zi(this),at(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new cr(e,t)},w(cr,we),cr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;at(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=sr(e,null,e.Y),Gi(e)},cr.prototype.close=function(){Wi(this.g)},cr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var i={};i.__data__=e,e=i}else this.v&&(i={},i.__data__=De(e),e=i);t.j.push(new oi(t.fb++,e)),3==t.H&&Gi(t)},cr.prototype.N=function(){this.g.h=null,delete this.j,Wi(this.g),delete this.g,cr.$.N.call(this)},w(fr,_t),w(dr,gt),w(_r,lr),_r.prototype.Ba=function(){ke(this.g,"a")},_r.prototype.Aa=function(e){ke(this.g,new fr(e))},_r.prototype.za=function(e){ke(this.g,new dr)},_r.prototype.ya=function(){ke(this.g,"b")},w(Fr,gr),Fr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Fr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,r=this.m,a=this.h,n=0;n<t;){if(0==a)for(;n<=i;)mr(this,e,n),n+=this.blockSize;if("string"===typeof e){for(;n<t;)if(r[a++]=e.charCodeAt(n++),a==this.blockSize){mr(this,r),a=0;break}}else for(;n<t;)if(r[a++]=e[n++],a==this.blockSize){mr(this,r),a=0;break}}this.h=a,this.i+=t},Fr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var r=0;32>r;r+=8)e[i++]=this.g[t]>>>r&255;return e};var br={};function yr(e){return-128<=e&&128>e?T(e,(function(e){return new pr([0|e],0>e?-1:0)})):new pr([0|e],0>e?-1:0)}function wr(e){if(isNaN(e)||!isFinite(e))return Dr;if(0>e)return Br(wr(-e));for(var t=[],i=1,r=0;e>=i;r++)t[r]=e/i|0,i*=vr;return new pr(t,0)}function kr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Br(kr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=wr(Math.pow(t,8)),r=Dr,a=0;a<e.length;a+=8){var n=Math.min(8,e.length-a),o=parseInt(e.substring(a,a+n),t);8>n?(n=wr(Math.pow(t,n)),r=r.R(n).add(wr(o))):(r=r.R(i),r=r.add(wr(o)))}return r}var vr=4294967296,Dr=yr(0),Er=yr(1),Cr=yr(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function jr(e){return-1==e.h}function Br(e){for(var t=e.g.length,i=[],r=0;r<t;r++)i[r]=~e.g[r];return new pr(i,~e.h).add(Er)}function Sr(e,t){return e.add(Br(t))}function qr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ar(e,t){this.g=e,this.h=t}function Tr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Ar(Dr,Dr);if(jr(e))return t=Tr(Br(e),t),new Ar(Br(t.g),Br(t.h));if(jr(t))return t=Tr(e,Br(t)),new Ar(Br(t.g),t.h);if(30<e.g.length){if(jr(e)||jr(t))throw Error("slowDivide_ only works with positive integers.");for(var i=Er,r=t;0>=r.X(e);)i=Ir(i),r=Ir(r);var a=Rr(i,1),n=Rr(r,1);for(r=Rr(r,2),i=Rr(i,2);!xr(r);){var o=n.add(r);0>=o.X(e)&&(a=a.add(i),n=o),r=Rr(r,1),i=Rr(i,1)}return t=Sr(e,a.R(t)),new Ar(a,t)}for(a=Dr;0<=e.X(t);){for(i=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(i)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),n=wr(i),o=n.R(t);jr(o)||0<o.X(e);)i-=r,n=wr(i),o=n.R(t);xr(n)&&(n=Er),a=a.add(n),e=Sr(e,o)}return new Ar(a,e)}function Ir(e){for(var t=e.g.length+1,i=[],r=0;r<t;r++)i[r]=e.D(r)<<1|e.D(r-1)>>>31;return new pr(i,e.h)}function Rr(e,t){var i=t>>5;t%=32;for(var r=e.g.length-i,a=[],n=0;n<r;n++)a[n]=0<t?e.D(n+i)>>>t|e.D(n+i+1)<<32-t:e.D(n+i);return new pr(a,e.h)}r=pr.prototype,r.ea=function(){if(jr(this))return-Br(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var r=this.D(i);e+=(0<=r?r:vr+r)*t,t*=vr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(jr(this))return"-"+Br(this).toString(e);for(var t=wr(Math.pow(e,6)),i=this,r="";;){var a=Tr(i,t).g;i=Sr(i,a.R(t));var n=((0<i.g.length?i.g[0]:i.h)>>>0).toString(e);if(i=a,xr(i))return n+r;for(;6>n.length;)n="0"+n;r=n+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Sr(this,e),jr(e)?-1:xr(e)?0:1},r.abs=function(){return jr(this)?Br(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0,a=0;a<=t;a++){var n=r+(65535&this.D(a))+(65535&e.D(a)),o=(n>>>16)+(this.D(a)>>>16)+(e.D(a)>>>16);r=o>>>16,n&=65535,o&=65535,i[a]=o<<16|n}return new pr(i,-2147483648&i[i.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return Dr;if(jr(this))return jr(e)?Br(this).R(Br(e)):Br(Br(this).R(e));if(jr(e))return Br(this.R(Br(e)));if(0>this.X(Cr)&&0>e.X(Cr))return wr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],r=0;r<2*t;r++)i[r]=0;for(r=0;r<this.g.length;r++)for(var a=0;a<e.g.length;a++){var n=this.D(r)>>>16,o=65535&this.D(r),s=e.D(a)>>>16,u=65535&e.D(a);i[2*r+2*a]+=o*u,qr(i,2*r+2*a),i[2*r+2*a+1]+=n*u,qr(i,2*r+2*a+1),i[2*r+2*a+1]+=o*s,qr(i,2*r+2*a+1),i[2*r+2*a+2]+=n*s,qr(i,2*r+2*a+2)}for(r=0;r<t;r++)i[r]=i[2*r+1]<<16|i[2*r];for(r=t;r<2*t;r++)i[r]=0;return new pr(i,0)},r.gb=function(e){return Tr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.D(r)&e.D(r);return new pr(i,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.D(r)|e.D(r);return new pr(i,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.D(r)^e.D(r);return new pr(i,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,cr.prototype.send=cr.prototype.u,cr.prototype.open=cr.prototype.m,cr.prototype.close=cr.prototype.close,st.NO_ERROR=0,st.TIMEOUT=8,st.HTTP_ERROR=6,ut.COMPLETE="complete",ct.EventType=dt,dt.OPEN="a",dt.CLOSE="b",dt.ERROR="c",dt.MESSAGE="d",we.prototype.listen=we.prototype.O,xi.prototype.listenOnce=xi.prototype.P,xi.prototype.getLastError=xi.prototype.Sa,xi.prototype.getLastErrorCode=xi.prototype.Ia,xi.prototype.getStatus=xi.prototype.da,xi.prototype.getResponseJson=xi.prototype.Wa,xi.prototype.getResponseText=xi.prototype.ja,xi.prototype.send=xi.prototype.ha,xi.prototype.setWithCredentials=xi.prototype.Oa,Fr.prototype.digest=Fr.prototype.l,Fr.prototype.reset=Fr.prototype.reset,Fr.prototype.update=Fr.prototype.j,pr.prototype.add=pr.prototype.add,pr.prototype.multiply=pr.prototype.R,pr.prototype.modulo=pr.prototype.gb,pr.prototype.compare=pr.prototype.X,pr.prototype.toNumber=pr.prototype.ea,pr.prototype.toString=pr.prototype.toString,pr.prototype.getBits=pr.prototype.D,pr.fromNumber=wr,pr.fromString=kr;var Pr=l.createWebChannelTransport=function(){return new hr},Or=l.getStatEventTarget=function(){return et()},Nr=l.ErrorCode=st,Mr=l.EventType=ut,Lr=l.Event=Xe,Ur=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vr=l.FetchXmlHttpFactory=yi,zr=l.WebChannel=ct,Wr=l.XhrIo=xi,Hr=l.Md5=Fr,$r=l.Integer=pr;const Gr="@firebase/firestore";
/**
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
 */class Kr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kr.UNAUTHENTICATED=new Kr(null),Kr.GOOGLE_CREDENTIALS=new Kr("google-credentials-uid"),Kr.FIRST_PARTY=new Kr("first-party-uid"),Kr.MOCK_USER=new Kr("mock-user");
/**
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
 */
let Yr="10.5.2";
/**
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
 */const Jr=new o.Yd("@firebase/firestore");function Qr(){return Jr.logLevel}function Xr(e,...t){if(Jr.logLevel<=o["in"].DEBUG){const i=t.map(ta);Jr.debug(`Firestore (${Yr}): ${e}`,...i)}}function Zr(e,...t){if(Jr.logLevel<=o["in"].ERROR){const i=t.map(ta);Jr.error(`Firestore (${Yr}): ${e}`,...i)}}function ea(e,...t){if(Jr.logLevel<=o["in"].WARN){const i=t.map(ta);Jr.warn(`Firestore (${Yr}): ${e}`,...i)}}function ta(e){if("string"==typeof e)return e;try{
/**
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
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
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
 */function ia(e="Unexpected state"){const t=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+e;throw Zr(t),new Error(t)}function ra(e,t){e||ia()}function aa(e,t){return e}
/**
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
 */const na={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oa extends s.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class sa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class ua{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class la{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Kr.UNAUTHENTICATED)))}shutdown(){}}class ha{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ca{constructor(e){this.t=e,this.currentUser=Kr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve();let a=new sa;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new sa,e.enqueueRetryable((()=>r(this.currentUser)))};const n=()=>{const t=a;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Xr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Xr("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new sa)}}),0),n()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Xr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ra("string"==typeof t.accessToken),new ua(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ra(null===e||"string"==typeof e),new Kr(e)}}class fa{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Kr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class da{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new fa(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Kr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _a{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ga{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=e=>{null!=e.error&&Xr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const i=e.token!==this.R;return this.R=e.token,Xr("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>i(t)))};const r=e=>{Xr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Xr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ra("string"==typeof e.token),this.R=e.token,new _a(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Fa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let r=0;r<e;r++)i[r]=Math.floor(256*Math.random());return i}
/**
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
 */class ma{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Fa(40);for(let a=0;a<r.length;++a)i.length<20&&r[a]<t&&(i+=e.charAt(r[a]%e.length))}return i}}function pa(e,t){return e<t?-1:e>t?1:0}function ba(e,t,i){return e.length===t.length&&e.every(((e,r)=>i(e,t[r])))}
/**
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
 */
class ya{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oa(na.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oa(na.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oa(na.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oa(na.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ya.fromMillis(Date.now())}static fromDate(e){return ya.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ya(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pa(this.nanoseconds,e.nanoseconds):pa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class wa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new wa(e)}static min(){return new wa(new ya(0,0))}static max(){return new wa(new ya(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class ka{constructor(e,t,i){void 0===t?t=0:t>e.length&&ia(),void 0===i?i=e.length-t:i>e.length-t&&ia(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===ka.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ka?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class va extends ka{construct(e,t,i){return new va(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new oa(na.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((e=>e.length>0)))}return new va(t)}static emptyPath(){return new va([])}}const Da=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ea extends ka{construct(e,t,i){return new Ea(e,t,i)}static isValidIdentifier(e){return Da.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ea.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ea(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const a=()=>{if(0===i.length)throw new oa(na.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let n=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new oa(na.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new oa(na.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=t,r+=2}else"`"===t?(n=!n,r++):"."!==t||n?(i+=t,r++):(a(),r++)}if(a(),n)throw new oa(na.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ea(t)}static emptyPath(){return new Ea([])}}
/**
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
 */class Ca{constructor(e){this.path=e}static fromPath(e){return new Ca(va.fromString(e))}static fromName(e){return new Ca(va.fromString(e).popFirst(5))}static empty(){return new Ca(va.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===va.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return va.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ca(new va(e.slice()))}}
/**
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
 */class xa{constructor(e,t,i,r){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=r}}xa.UNKNOWN_ID=-1;function ja(e,t){const i=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,a=wa.fromTimestamp(1e9===r?new ya(i+1,0):new ya(i,r));return new Sa(a,Ca.empty(),t)}function Ba(e){return new Sa(e.readTime,e.key,-1)}class Sa{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Sa(wa.min(),Ca.empty(),-1)}static max(){return new Sa(wa.max(),Ca.empty(),-1)}}function qa(e,t){let i=e.readTime.compareTo(t.readTime);return 0!==i?i:(i=Ca.comparator(e.documentKey,t.documentKey),0!==i?i:pa(e.largestBatchId,t.largestBatchId))}
/**
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
 */const Aa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ta{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Ia(e){if(e.code!==na.FAILED_PRECONDITION||e.message!==Aa)throw e;Xr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Ra{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ia(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ra(((i,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(i,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(i,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ra?t:Ra.resolve(t)}catch(e){return Ra.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ra.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ra.reject(t)}static resolve(e){return new Ra(((t,i)=>{t(e)}))}static reject(e){return new Ra(((t,i)=>{i(e)}))}static waitFor(e){return new Ra(((t,i)=>{let r=0,a=0,n=!1;e.forEach((e=>{++r,e.next((()=>{++a,n&&a===r&&t()}),(e=>i(e)))})),n=!0,a===r&&t()}))}static or(e){let t=Ra.resolve(!1);for(const i of e)t=t.next((e=>e?Ra.resolve(e):i()));return t}static forEach(e,t){const i=[];return e.forEach(((e,r)=>{i.push(t.call(this,e,r))})),this.waitFor(i)}static mapArray(e,t){return new Ra(((i,r)=>{const a=e.length,n=new Array(a);let o=0;for(let s=0;s<a;s++){const u=s;t(e[u]).next((e=>{n[u]=e,++o,o===a&&i(n)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ra(((i,r)=>{const a=()=>{!0===e()?t().next((()=>{a()}),r):i()};a()}))}}
/**
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
 */function Pa(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function Na(e){return null==e}function Ma(e){return 0===e&&1/e==-1/0}function La(e){return"number"==typeof e&&Number.isInteger(e)&&!Ma(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */Oa._e=-1;const Ua=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Va=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],za=Va;
/**
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
 */
/**
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
 */
function Wa(e){let t=0;for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&t++;return t}function Ha(e,t){for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&t(i,e[i])}function $a(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Ga{constructor(e,t){this.comparator=e,this.root=t||Ya.EMPTY}insert(e,t){return new Ga(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ya.BLACK,null,null))}remove(e){return new Ga(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ya.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(0===r)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&r&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(0===a){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ya{constructor(e,t,i,r,a){this.key=e,this.value=t,this.color=null!=i?i:Ya.RED,this.left=null!=r?r:Ya.EMPTY,this.right=null!=a?a:Ya.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,a){return new Ya(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=a?a:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const a=i(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,i),null):0===a?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ya.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ya.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ya.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ya.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ia();if(this.right.isRed())throw ia();const e=this.left.check();if(e!==this.right.check())throw ia();return e+(this.isRed()?0:1)}}Ya.EMPTY=null,Ya.RED=!0,Ya.BLACK=!1,Ya.EMPTY=new class{constructor(){this.size=0}get key(){throw ia()}get value(){throw ia()}get color(){throw ia()}get left(){throw ia()}get right(){throw ia()}copy(e,t,i,r,a){return this}insert(e,t,i){return new Ya(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Ja{constructor(e){this.comparator=e,this.data=new Ga(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qa(this.data.getIterator())}getIteratorFrom(e){return new Qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ja))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=i.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ja(this.comparator);return t.data=e,t}}class Qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Xa{constructor(e){this.fields=e,e.sort(Ea.comparator)}static empty(){return new Xa([])}unionWith(e){let t=new Ja(Ea.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Xa(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ba(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Za extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class en{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Za("Invalid base64 string: "+e):e}}(e);return new en(t)}static fromUint8Array(e){const t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const tn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(e){if(ra(!!e),"string"==typeof e){let t=0;const i=tn.exec(e);if(ra(!!i),i[1]){let e=i[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:an(e.seconds),nanos:an(e.nanos)}}function an(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nn(e){return"string"==typeof e?en.fromBase64String(e):en.fromUint8Array(e)}
/**
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
 */function on(e){var t,i;return"server_timestamp"===(null===(i=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function sn(e){const t=e.mapValue.fields.__previous_value__;return on(t)?sn(t):t}function un(e){const t=rn(e.mapValue.fields.__local_write_time__.timestampValue);return new ya(t.seconds,t.nanos)}
/**
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
 */class ln{constructor(e,t,i,r,a,n,o,s,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=a,this.forceLongPolling=n,this.autoDetectLongPolling=o,this.longPollingOptions=s,this.useFetchStreams=u}}class hn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof hn&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?on(e)?4:Cn(e)?9007199254740991:10:ia()}function dn(e,t){if(e===t)return!0;const i=fn(e);if(i!==fn(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return un(e).isEqual(un(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const i=rn(e.timestampValue),r=rn(t.timestampValue);return i.seconds===r.seconds&&i.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return nn(e.bytesValue).isEqual(nn(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return an(e.geoPointValue.latitude)===an(t.geoPointValue.latitude)&&an(e.geoPointValue.longitude)===an(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return an(e.integerValue)===an(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const i=an(e.doubleValue),r=an(t.doubleValue);return i===r?Ma(i)===Ma(r):isNaN(i)&&isNaN(r)}return!1}(e,t);case 9:return ba(e.arrayValue.values||[],t.arrayValue.values||[],dn);case 10:return function(e,t){const i=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Wa(i)!==Wa(r))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(void 0===r[a]||!dn(i[a],r[a])))return!1;return!0}(e,t);default:return ia()}}function _n(e,t){return void 0!==(e.values||[]).find((e=>dn(e,t)))}function gn(e,t){if(e===t)return 0;const i=fn(e),r=fn(t);if(i!==r)return pa(i,r);switch(i){case 0:case 9007199254740991:return 0;case 1:return pa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const i=an(e.integerValue||e.doubleValue),r=an(t.integerValue||t.doubleValue);return i<r?-1:i>r?1:i===r?0:isNaN(i)?isNaN(r)?0:-1:1}(e,t);case 3:return Fn(e.timestampValue,t.timestampValue);case 4:return Fn(un(e),un(t));case 5:return pa(e.stringValue,t.stringValue);case 6:return function(e,t){const i=nn(e),r=nn(t);return i.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const i=e.split("/"),r=t.split("/");for(let a=0;a<i.length&&a<r.length;a++){const e=pa(i[a],r[a]);if(0!==e)return e}return pa(i.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const i=pa(an(e.latitude),an(t.latitude));return 0!==i?i:pa(an(e.longitude),an(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const i=e.values||[],r=t.values||[];for(let a=0;a<i.length&&a<r.length;++a){const e=gn(i[a],r[a]);if(e)return e}return pa(i.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===cn.mapValue&&t===cn.mapValue)return 0;if(e===cn.mapValue)return 1;if(t===cn.mapValue)return-1;const i=e.fields||{},r=Object.keys(i),a=t.fields||{},n=Object.keys(a);r.sort(),n.sort();for(let o=0;o<r.length&&o<n.length;++o){const e=pa(r[o],n[o]);if(0!==e)return e;const t=gn(i[r[o]],a[n[o]]);if(0!==t)return t}return pa(r.length,n.length)}(e.mapValue,t.mapValue);default:throw ia()}}function Fn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pa(e,t);const i=rn(e),r=rn(t),a=pa(i.seconds,r.seconds);return 0!==a?a:pa(i.nanos,r.nanos)}function mn(e){return pn(e)}function pn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=rn(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return nn(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ca.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",i=!0;for(const r of e.values||[])i?i=!1:t+=",",t+=pn(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const a of t)r?r=!1:i+=",",i+=`${a}:${pn(e.fields[a])}`;return i+"}"}(e.mapValue):ia()}function bn(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function yn(e){return!!e&&"integerValue"in e}function wn(e){return!!e&&"arrayValue"in e}function kn(e){return!!e&&"nullValue"in e}function vn(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Dn(e){return!!e&&"mapValue"in e}function En(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ha(e.mapValue.fields,((e,i)=>t.mapValue.fields[e]=En(i))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(e.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=En(e.arrayValue.values[i]);return t}return Object.assign({},e)}function Cn(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Dn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=En(t)}setAll(e){let t=Ea.emptyPath(),i={},r=[];e.forEach(((e,a)=>{if(!t.isImmediateParentOf(a)){const e=this.getFieldsMap(t);this.applyChanges(e,i,r),i={},r=[],t=a.popLast()}e?i[a.lastSegment()]=En(e):r.push(a.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,i,r)}delete(e){const t=this.field(e.popLast());Dn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Dn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Ha(t,((t,i)=>e[t]=i));for(const r of i)delete e[r]}clone(){return new xn(En(this.value))}}function jn(e){const t=[];return Ha(e.fields,((e,i)=>{const r=new Ea([e]);if(Dn(i)){const e=jn(i.mapValue).fields;if(0===e.length)t.push(r);else for(const i of e)t.push(r.child(i))}else t.push(r)})),new Xa(t)
/**
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
 */}class Bn{constructor(e,t,i,r,a,n,o){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=a,this.data=n,this.documentState=o}static newInvalidDocument(e){return new Bn(e,0,wa.min(),wa.min(),wa.min(),xn.empty(),0)}static newFoundDocument(e,t,i,r){return new Bn(e,1,t,wa.min(),i,r,0)}static newNoDocument(e,t){return new Bn(e,2,t,wa.min(),wa.min(),xn.empty(),0)}static newUnknownDocument(e,t){return new Bn(e,3,t,wa.min(),wa.min(),xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(wa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wa.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Sn{constructor(e,t){this.position=e,this.inclusive=t}}function qn(e,t,i){let r=0;for(let a=0;a<e.position.length;a++){const n=t[a],o=e.position[a];if(r=n.field.isKeyField()?Ca.comparator(Ca.fromName(o.referenceValue),i.key):gn(o,i.data.field(n.field)),"desc"===n.dir&&(r*=-1),0!==r)break}return r}function An(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let i=0;i<e.position.length;i++)if(!dn(e.position[i],t.position[i]))return!1;return!0}
/**
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
 */class Tn{constructor(e,t="asc"){this.field=e,this.dir=t}}function In(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Rn{}class Pn extends Rn{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,i):new Wn(e,t,i):"array-contains"===t?new Kn(e,i):"in"===t?new Yn(e,i):"not-in"===t?new Jn(e,i):"array-contains-any"===t?new Qn(e,i):new Pn(e,t,i)}static createKeyFieldInFilter(e,t,i){return"in"===t?new Hn(e,i):new $n(e,i)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(gn(t,this.value)):null!==t&&fn(this.value)===fn(t)&&this.matchesComparison(gn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ia()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Rn{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new On(e,t)}matches(e){return Nn(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Nn(e){return"and"===e.op}function Mn(e){return Ln(e)&&Nn(e)}function Ln(e){for(const t of e.filters)if(t instanceof On)return!1;return!0}function Un(e){if(e instanceof Pn)return e.field.canonicalString()+e.op.toString()+mn(e.value);if(Mn(e))return e.filters.map((e=>Un(e))).join(",");{const t=e.filters.map((e=>Un(e))).join(",");return`${e.op}(${t})`}}function Vn(e,t){return e instanceof Pn?function(e,t){return t instanceof Pn&&e.op===t.op&&e.field.isEqual(t.field)&&dn(e.value,t.value)}(e,t):e instanceof On?function(e,t){return t instanceof On&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,i,r)=>e&&Vn(i,t.filters[r])),!0)}(e,t):void ia()}function zn(e){return e instanceof Pn?function(e){return`${e.field.canonicalString()} ${e.op} ${mn(e.value)}`}(e):e instanceof On?function(e){return e.op.toString()+" {"+e.getFilters().map(zn).join(" ,")+"}"}(e):"Filter"}class Wn extends Pn{constructor(e,t,i){super(e,t,i),this.key=Ca.fromName(i.referenceValue)}matches(e){const t=Ca.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hn extends Pn{constructor(e,t){super(e,"in",t),this.keys=Gn("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $n extends Pn{constructor(e,t){super(e,"not-in",t),this.keys=Gn("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Gn(e,t){var i;return((null===(i=t.arrayValue)||void 0===i?void 0:i.values)||[]).map((e=>Ca.fromName(e.referenceValue)))}class Kn extends Pn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wn(t)&&_n(t.arrayValue,this.value)}}class Yn extends Pn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&_n(this.value.arrayValue,t)}}class Jn extends Pn{constructor(e,t){super(e,"not-in",t)}matches(e){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!_n(this.value.arrayValue,t)}}class Qn extends Pn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>_n(this.value.arrayValue,e)))}}
/**
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
 */class Xn{constructor(e,t=null,i=[],r=[],a=null,n=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=a,this.startAt=n,this.endAt=o,this.ce=null}}function Zn(e,t=null,i=[],r=[],a=null,n=null,o=null){return new Xn(e,t,i,r,a,n,o)}function eo(e){const t=aa(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Un(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Na(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>mn(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>mn(e))).join(",")),t.ce=e}return t.ce}function to(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!In(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(!Vn(e.filters[i],t.filters[i]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!An(e.startAt,t.startAt)&&An(e.endAt,t.endAt)}function io(e){return Ca.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */
class ro{constructor(e,t=null,i=[],r=[],a=null,n="F",o=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=a,this.limitType=n,this.startAt=o,this.endAt=s,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ao(e,t,i,r,a,n,o,s){return new ro(e,t,i,r,a,n,o,s)}function no(e){return new ro(e)}function oo(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function so(e){return null!==e.collectionGroup}function uo(e){const t=aa(e);if(null===t.le){t.le=[];const e=new Set;for(const a of t.explicitOrderBy)t.le.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ja(Ea.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new Tn(r,i))})),e.has(Ea.keyField().canonicalString())||t.le.push(new Tn(Ea.keyField(),i))}return t.le}function lo(e){const t=aa(e);return t.he||(t.he=ho(t,uo(e))),t.he}function ho(e,t){if("F"===e.limitType)return Zn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Tn(e.field,t)}));const i=e.endAt?new Sn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Sn(e.startAt.position,e.startAt.inclusive):null;return Zn(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}}function co(e,t){const i=e.filters.concat([t]);return new ro(e.path,e.collectionGroup,e.explicitOrderBy.slice(),i,e.limit,e.limitType,e.startAt,e.endAt)}function fo(e,t,i){return new ro(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,i,e.startAt,e.endAt)}function _o(e,t){return to(lo(e),lo(t))&&e.limitType===t.limitType}function go(e){return`${eo(lo(e))}|lt:${e.limitType}`}function Fo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>zn(e))).join(", ")}]`),Na(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>mn(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>mn(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function mo(e,t){return t.isFoundDocument()&&function(e,t){const i=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(i):Ca.isDocumentKey(e.path)?e.path.isEqual(i):e.path.isImmediateParentOf(i)}(e,t)&&function(e,t){for(const i of uo(e))if(!i.field.isKeyField()&&null===t.data.field(i.field))return!1;return!0}(e,t)&&function(e,t){for(const i of e.filters)if(!i.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,i){const r=qn(e,t,i);return e.inclusive?r<=0:r<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,i){const r=qn(e,t,i);return e.inclusive?r>=0:r>0}(e.endAt,uo(e),t))}(e,t)}function po(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bo(e){return(t,i)=>{let r=!1;for(const a of uo(e)){const e=yo(a,t,i);if(0!==e)return e;r=r||a.field.isKeyField()}return 0}}function yo(e,t,i){const r=e.field.isKeyField()?Ca.comparator(t.key,i.key):function(e,t,i){const r=t.data.field(e),a=i.data.field(e);return null!==r&&null!==a?gn(r,a):ia()}(e.field,t,i);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ia()}}
/**
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
 */class wo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(void 0!==i)for(const[r,a]of i)if(this.equalsFn(r,e))return a}has(e){return void 0!==this.get(e)}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(void 0===r)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return void(r[a]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(void 0===i)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return 1===i.length?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ha(this.inner,((t,i)=>{for(const[r,a]of i)e(r,a)}))}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}
/**
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
 */const ko=new Ga(Ca.comparator);function vo(){return ko}const Do=new Ga(Ca.comparator);function Eo(...e){let t=Do;for(const i of e)t=t.insert(i.key,i);return t}function Co(e){let t=Do;return e.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function xo(){return Bo()}function jo(){return Bo()}function Bo(){return new wo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const So=new Ga(Ca.comparator),qo=new Ja(Ca.comparator);function Ao(...e){let t=qo;for(const i of e)t=t.add(i);return t}const To=new Ja(pa);function Io(){return To}
/**
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
 */function Ro(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(t)?"-0":t}}function Po(e){return{integerValue:""+e}}function Oo(e,t){return La(t)?Po(t):Ro(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class No{constructor(){this._=void 0}}function Mo(e,t,i){return e instanceof Vo?function(e,t){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&on(t)&&(t=sn(t)),t&&(i.fields.__previous_value__=t),{mapValue:i}}(i,t):e instanceof zo?Wo(e,t):e instanceof Ho?$o(e,t):function(e,t){const i=Uo(e,t),r=Ko(i)+Ko(e.Ie);return yn(i)&&yn(e.Ie)?Po(r):Ro(e.serializer,r)}(e,t)}function Lo(e,t,i){return e instanceof zo?Wo(e,t):e instanceof Ho?$o(e,t):i}function Uo(e,t){return e instanceof Go?function(e){return yn(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Vo extends No{}class zo extends No{constructor(e){super(),this.elements=e}}function Wo(e,t){const i=Yo(t);for(const r of e.elements)i.some((e=>dn(e,r)))||i.push(r);return{arrayValue:{values:i}}}class Ho extends No{constructor(e){super(),this.elements=e}}function $o(e,t){let i=Yo(t);for(const r of e.elements)i=i.filter((e=>!dn(e,r)));return{arrayValue:{values:i}}}class Go extends No{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ko(e){return an(e.integerValue||e.doubleValue)}function Yo(e){return wn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Jo{constructor(e,t){this.field=e,this.transform=t}}function Qo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zo&&t instanceof zo||e instanceof Ho&&t instanceof Ho?ba(e.elements,t.elements,dn):e instanceof Go&&t instanceof Go?dn(e.Ie,t.Ie):e instanceof Vo&&t instanceof Vo}(e.transform,t.transform)}class Xo{constructor(e,t){this.version=e,this.transformResults=t}}class Zo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zo}static exists(e){return new Zo(void 0,e)}static updateTime(e){return new Zo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ts{}function is(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new fs(e.key,Zo.none()):new ss(e.key,e.data,Zo.none());{const i=e.data,r=xn.empty();let a=new Ja(Ea.comparator);for(let e of t.fields)if(!a.has(e)){let t=i.field(e);null===t&&e.length>1&&(e=e.popLast(),t=i.field(e)),null===t?r.delete(e):r.set(e,t),a=a.add(e)}return new us(e.key,r,new Xa(a.toArray()),Zo.none())}}function rs(e,t,i){e instanceof ss?function(e,t,i){const r=e.value.clone(),a=hs(e.fieldTransforms,t,i.transformResults);r.setAll(a),t.convertToFoundDocument(i.version,r).setHasCommittedMutations()}(e,t,i):e instanceof us?function(e,t,i){if(!es(e.precondition,t))return void t.convertToUnknownDocument(i.version);const r=hs(e.fieldTransforms,t,i.transformResults),a=t.data;a.setAll(ls(e)),a.setAll(r),t.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,i):function(e,t,i){t.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,i)}function as(e,t,i,r){return e instanceof ss?function(e,t,i,r){if(!es(e.precondition,t))return i;const a=e.value.clone(),n=cs(e.fieldTransforms,r,t);return a.setAll(n),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null}(e,t,i,r):e instanceof us?function(e,t,i,r){if(!es(e.precondition,t))return i;const a=cs(e.fieldTransforms,r,t),n=t.data;return n.setAll(ls(e)),n.setAll(a),t.convertToFoundDocument(t.version,n).setHasLocalMutations(),null===i?null:i.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,i,r):function(e,t,i){return es(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):i}(e,t,i)}function ns(e,t){let i=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),a=Uo(r.transform,e||null);null!=a&&(null===i&&(i=xn.empty()),i.set(r.field,a))}return i||null}function os(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ba(e,t,((e,t)=>Qo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ss extends ts{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class us extends ts{constructor(e,t,i,r,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ls(e){const t=new Map;return e.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const r=e.data.field(i);t.set(i,r)}})),t}function hs(e,t,i){const r=new Map;ra(e.length===i.length);for(let a=0;a<i.length;a++){const n=e[a],o=n.transform,s=t.data.field(n.field);r.set(n.field,Lo(o,s,i[a]))}return r}function cs(e,t,i){const r=new Map;for(const a of e){const e=a.transform,n=i.data.field(a.field);r.set(a.field,Mo(e,n,t))}return r}class fs extends ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ds extends ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class _s{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&rs(t,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=jo();return this.mutations.forEach((r=>{const a=e.get(r.key),n=a.overlayedDocument;let o=this.applyToLocalView(n,a.mutatedFields);o=t.has(r.key)?null:o;const s=is(n,o);null!==s&&i.set(r.key,s),n.isValidDocument()||n.convertToNoDocument(wa.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ao())}isEqual(e){return this.batchId===e.batchId&&ba(this.mutations,e.mutations,((e,t)=>os(e,t)))&&ba(this.baseMutations,e.baseMutations,((e,t)=>os(e,t)))}}class gs{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){ra(e.mutations.length===i.length);let r=function(){return So}();const a=e.mutations;for(let n=0;n<a.length;n++)r=r.insert(a[n].key,i[n].version);return new gs(e,t,i,r)}}
/**
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
 */class Fs{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
/**
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
 */
class ms{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var ps,bs;function ys(e){switch(e){default:return ia();case na.CANCELLED:case na.UNKNOWN:case na.DEADLINE_EXCEEDED:case na.RESOURCE_EXHAUSTED:case na.INTERNAL:case na.UNAVAILABLE:case na.UNAUTHENTICATED:return!1;case na.INVALID_ARGUMENT:case na.NOT_FOUND:case na.ALREADY_EXISTS:case na.PERMISSION_DENIED:case na.FAILED_PRECONDITION:case na.ABORTED:case na.OUT_OF_RANGE:case na.UNIMPLEMENTED:case na.DATA_LOSS:return!0}}function ws(e){if(void 0===e)return Zr("GRPC error has no .code"),na.UNKNOWN;switch(e){case ps.OK:return na.OK;case ps.CANCELLED:return na.CANCELLED;case ps.UNKNOWN:return na.UNKNOWN;case ps.DEADLINE_EXCEEDED:return na.DEADLINE_EXCEEDED;case ps.RESOURCE_EXHAUSTED:return na.RESOURCE_EXHAUSTED;case ps.INTERNAL:return na.INTERNAL;case ps.UNAVAILABLE:return na.UNAVAILABLE;case ps.UNAUTHENTICATED:return na.UNAUTHENTICATED;case ps.INVALID_ARGUMENT:return na.INVALID_ARGUMENT;case ps.NOT_FOUND:return na.NOT_FOUND;case ps.ALREADY_EXISTS:return na.ALREADY_EXISTS;case ps.PERMISSION_DENIED:return na.PERMISSION_DENIED;case ps.FAILED_PRECONDITION:return na.FAILED_PRECONDITION;case ps.ABORTED:return na.ABORTED;case ps.OUT_OF_RANGE:return na.OUT_OF_RANGE;case ps.UNIMPLEMENTED:return na.UNIMPLEMENTED;case ps.DATA_LOSS:return na.DATA_LOSS;default:return ia()}}(bs=ps||(ps={}))[bs.OK=0]="OK",bs[bs.CANCELLED=1]="CANCELLED",bs[bs.UNKNOWN=2]="UNKNOWN",bs[bs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bs[bs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bs[bs.NOT_FOUND=5]="NOT_FOUND",bs[bs.ALREADY_EXISTS=6]="ALREADY_EXISTS",bs[bs.PERMISSION_DENIED=7]="PERMISSION_DENIED",bs[bs.UNAUTHENTICATED=16]="UNAUTHENTICATED",bs[bs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bs[bs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bs[bs.ABORTED=10]="ABORTED",bs[bs.OUT_OF_RANGE=11]="OUT_OF_RANGE",bs[bs.UNIMPLEMENTED=12]="UNIMPLEMENTED",bs[bs.INTERNAL=13]="INTERNAL",bs[bs.UNAVAILABLE=14]="UNAVAILABLE",bs[bs.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
let ks=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function vs(){return new TextEncoder}
/**
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
 */const Ds=new $r([4294967295,4294967295],0);function Es(e){const t=vs().encode(e),i=new Hr;return i.update(t),new Uint8Array(i.digest())}function Cs(e){const t=new DataView(e.buffer),i=t.getUint32(0,!0),r=t.getUint32(4,!0),a=t.getUint32(8,!0),n=t.getUint32(12,!0);return[new $r([i,r],0),new $r([a,n],0)]}class xs{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new js(`Invalid padding: ${t}`);if(i<0)throw new js(`Invalid hash count: ${i}`);if(e.length>0&&0===this.hashCount)throw new js(`Invalid hash count: ${i}`);if(0===e.length&&0!==t)throw new js(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=$r.fromNumber(this.Te)}de(e,t,i){let r=e.add(t.multiply($r.fromNumber(i)));return 1===r.compare(Ds)&&(r=new $r([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Es(e),[i,r]=Cs(t);for(let a=0;a<this.hashCount;a++){const e=this.de(i,r,a);if(!this.Ae(e))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),n=new xs(a,r,t);return i.forEach((e=>n.insert(e))),n}insert(e){if(0===this.Te)return;const t=Es(e),[i,r]=Cs(t);for(let a=0;a<this.hashCount;a++){const e=this.de(i,r,a);this.Re(e)}}Re(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Bs{constructor(e,t,i,r,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Ss.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Bs(wa.min(),r,new Ga(pa),vo(),Ao())}}class Ss{constructor(e,t,i,r,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ss(i,t,Ao(),Ao(),Ao())}}
/**
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
 */class qs{constructor(e,t,i,r){this.Ve=e,this.removedTargetIds=t,this.key=i,this.me=r}}class As{constructor(e,t){this.targetId=e,this.fe=t}}class Ts{constructor(e,t,i=en.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Is{constructor(){this.ge=0,this.pe=Os(),this.ye=en.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Ao(),t=Ao(),i=Ao();return this.pe.forEach(((r,a)=>{switch(a){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:ia()}})),new Ss(this.ye,this.we,e,t,i)}Fe(){this.Se=!1,this.pe=Os()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Rs{constructor(e){this.Le=e,this.ke=new Map,this.qe=vo(),this.Qe=Ps(),this.Ke=new Ga(pa)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(t);break;case 3:this.je(t)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.Ce(e.resumeToken));break;default:ia()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,i)=>{this.je(i)&&t(i)}))}Je(e){const t=e.targetId,i=e.fe.count,r=this.Ye(t);if(r){const a=r.target;if(io(a))if(0===i){const e=new Ca(a.path);this.We(t,e,Bn.newNoDocument(e,wa.min()))}else ra(1===i);else{const r=this.Ze(t);if(r!==i){const i=this.Xe(e),a=i?this.et(i,e,r):1;if(0!==a){this.He(t);const e=2===a?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==ks||ks.tt(function(e,t,i,r,a){var n,o,s,u,l,h;const c={localCacheCount:e,existenceFilterCount:t.count,databaseId:i.database,projectId:i.projectId},f=t.unchangedNames;return f&&(c.bloomFilter={applied:0===a,hashCount:null!==(n=null==f?void 0:f.hashCount)&&void 0!==n?n:0,bitmapLength:null!==(u=null===(s=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===s?void 0:s.length)&&void 0!==u?u:0,padding:null!==(h=null===(l=null==f?void 0:f.bits)||void 0===l?void 0:l.padding)&&void 0!==h?h:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),c}
/**
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
 */(r,e.fe,this.Le.nt(),i,a))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:a=0}=t;let n,o;try{n=nn(i).toUint8Array()}catch(e){if(e instanceof Za)return ea("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new xs(n,r,a)}catch(e){return ea(e instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,i){return t.fe.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let r=0;return i.forEach((i=>{const a=this.Le.nt(),n=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(n)||(this.We(t,i,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((i,r)=>{const a=this.Ye(r);if(a){if(i.current&&io(a.target)){const t=new Ca(a.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,Bn.newNoDocument(t,e))}i.De&&(t.set(r,i.ve()),i.Fe())}}));let i=Ao();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(i=i.add(e))})),this.qe.forEach(((t,i)=>i.setReadTime(e)));const r=new Bs(e,t,this.Ke,this.qe,i);return this.qe=vo(),this.Qe=Ps(),this.Ke=new Ga(pa),r}Ue(e,t){if(!this.je(e))return;const i=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,i),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),i&&(this.qe=this.qe.insert(t,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Is,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Ja(pa),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Xr("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Is),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ps(){return new Ga(Ca.comparator)}function Os(){return new Ga(Ca.comparator)}const Ns=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ms=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ls=(()=>{const e={and:"AND",or:"OR"};return e})();class Us{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vs(e,t){return e.useProto3Json||Na(t)?t:{value:t}}function zs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ws(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Hs(e,t){return zs(e,t.toTimestamp())}function $s(e){return ra(!!e),wa.fromTimestamp(function(e){const t=rn(e);return new ya(t.seconds,t.nanos)}(e))}function Gs(e,t){return function(e){return new va(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ks(e){const t=va.fromString(e);return ra(mu(t)),t}function Ys(e,t){return Gs(e.databaseId,t.path)}function Js(e,t){const i=Ks(t);if(i.get(1)!==e.databaseId.projectId)throw new oa(na.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+e.databaseId.projectId);if(i.get(3)!==e.databaseId.database)throw new oa(na.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+e.databaseId.database);return new Ca(eu(i))}function Qs(e,t){return Gs(e.databaseId,t)}function Xs(e){const t=Ks(e);return 4===t.length?va.emptyPath():eu(t)}function Zs(e){return new va(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function eu(e){return ra(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tu(e,t,i){return{name:Ys(e,t),fields:i.value.mapValue.fields}}function iu(e,t){let i;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ia()}(t.targetChange.targetChangeType||"NO_CHANGE"),a=t.targetChange.targetIds||[],n=function(e,t){return e.useProto3Json?(ra(void 0===t||"string"==typeof t),en.fromBase64String(t||"")):(ra(void 0===t||t instanceof Uint8Array),en.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,s=o&&function(e){const t=void 0===e.code?na.UNKNOWN:ws(e.code);return new oa(t,e.message||"")}(o);i=new Ts(r,a,n,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const a=Js(e,r.document.name),n=$s(r.document.updateTime),o=r.document.createTime?$s(r.document.createTime):wa.min(),s=new xn({mapValue:{fields:r.document.fields}}),u=Bn.newFoundDocument(a,n,o,s),l=r.targetIds||[],h=r.removedTargetIds||[];i=new qs(l,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const a=Js(e,r.document),n=r.readTime?$s(r.readTime):wa.min(),o=Bn.newNoDocument(a,n),s=r.removedTargetIds||[];i=new qs([],s,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const a=Js(e,r.document),n=r.removedTargetIds||[];i=new qs([],n,a,null)}else{if(!("filter"in t))return ia();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:a}=e,n=new ms(r,a),o=e.targetId;i=new As(o,n)}}return i}function ru(e,t){let i;if(t instanceof ss)i={update:tu(e,t.key,t.value)};else if(t instanceof fs)i={delete:Ys(e,t.key)};else if(t instanceof us)i={update:tu(e,t.key,t.data),updateMask:Fu(t.fieldMask)};else{if(!(t instanceof ds))return ia();i={verify:Ys(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const i=t.transform;if(i instanceof Vo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof zo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Ho)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof Go)return{fieldPath:t.field.canonicalString(),increment:i.Ie};throw ia()}(0,e)))),t.precondition.isNone||(i.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Hs(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ia()}(e,t.precondition)),i}function au(e,t){return e&&e.length>0?(ra(void 0!==t),e.map((e=>function(e,t){let i=e.updateTime?$s(e.updateTime):$s(t);return i.isEqual(wa.min())&&(i=$s(t)),new Xo(i,e.transformResults||[])}(e,t)))):[]}function nu(e,t){return{documents:[Qs(e,t.path)]}}function ou(e,t){const i={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(i.parent=Qs(e,r),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=Qs(e,r.popLast()),i.structuredQuery.from=[{collectionId:r.lastSegment()}]);const a=function(e){if(0!==e.length)return gu(On.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);const n=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:du(e.field),direction:hu(e.dir)}}(e)))}(t.orderBy);n&&(i.structuredQuery.orderBy=n);const o=Vs(e,t.limit);return null!==o&&(i.structuredQuery.limit=o),t.startAt&&(i.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),i}function su(e){let t=Xs(e.parent);const i=e.structuredQuery,r=i.from?i.from.length:0;let a=null;if(r>0){ra(1===r);const e=i.from[0];e.allDescendants?a=e.collectionId:t=t.child(e.collectionId)}let n=[];i.where&&(n=function(e){const t=lu(e);return t instanceof On&&Mn(t)?t.getFilters():[t]}(i.where));let o=[];i.orderBy&&(o=function(e){return e.map((e=>function(e){return new Tn(_u(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(i.orderBy));let s=null;i.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,Na(t)?null:t}(i.limit));let u=null;i.startAt&&(u=function(e){const t=!!e.before,i=e.values||[];return new Sn(i,t)}(i.startAt));let l=null;return i.endAt&&(l=function(e){const t=!e.before,i=e.values||[];return new Sn(i,t)}(i.endAt)),ao(t,a,o,n,s,"F",u,l)}function uu(e,t){const i=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ia()}}(t.purpose);return null==i?null:{"goog-listen-tags":i}}function lu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_u(e.unaryFilter.field);return Pn.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=_u(e.unaryFilter.field);return Pn.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_u(e.unaryFilter.field);return Pn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_u(e.unaryFilter.field);return Pn.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ia()}}(e):void 0!==e.fieldFilter?function(e){return Pn.create(_u(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ia()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return On.create(e.compositeFilter.filters.map((e=>lu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ia()}}(e.compositeFilter.op))}(e):ia()}function hu(e){return Ns[e]}function cu(e){return Ms[e]}function fu(e){return Ls[e]}function du(e){return{fieldPath:e.canonicalString()}}function _u(e){return Ea.fromServerFormat(e.fieldPath)}function gu(e){return e instanceof Pn?function(e){if("=="===e.op){if(vn(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NAN"}};if(kn(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(vn(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NOT_NAN"}};if(kn(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:du(e.field),op:cu(e.op),value:e.value}}}(e):e instanceof On?function(e){const t=e.getFilters().map((e=>gu(e)));return 1===t.length?t[0]:{compositeFilter:{op:fu(e.op),filters:t}}}(e):ia()}function Fu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class pu{constructor(e,t,i,r,a=wa.min(),n=wa.min(),o=en.EMPTY_BYTE_STRING,s=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=n,this.resumeToken=o,this.expectedCount=s}withSequenceNumber(e){return new pu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class bu{constructor(e){this.ut=e}}function yu(e){const t=su({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?fo(t,t.limit,"L"):t}
/**
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
 */class wu{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(an(e.integerValue));else if("doubleValue"in e){const i=an(e.doubleValue);isNaN(i)?this.Tt(t,13):(this.Tt(t,15),Ma(i)?t.Et(0):t.Et(i))}else if("timestampValue"in e){const i=e.timestampValue;this.Tt(t,20),"string"==typeof i?t.dt(i):(t.dt(`${i.seconds||""}`),t.Et(i.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(nn(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Tt(t,45),t.Et(i.latitude||0),t.Et(i.longitude||0)}else"mapValue"in e?Cn(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):ia()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const i=e.fields||{};this.Tt(t,55);for(const r of Object.keys(i))this.At(r,t),this.Pt(i[r],t)}yt(e,t){const i=e.values||[];this.Tt(t,50);for(const r of i)this.Pt(r,t)}ft(e,t){this.Tt(t,37),Ca.fromName(e).path.forEach((e=>{this.Tt(t,60),this.wt(e,t)}))}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}wu.St=new wu;
/**
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
 */
class ku{constructor(){this.on=new vu}addToCollectionParentIndex(e,t){return this.on.add(t),Ra.resolve()}getCollectionParents(e,t){return Ra.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return Ra.resolve()}deleteFieldIndex(e,t){return Ra.resolve()}deleteAllFieldIndexes(e){return Ra.resolve()}createTargetIndexes(e,t){return Ra.resolve()}getDocumentsMatchingTarget(e,t){return Ra.resolve(null)}getIndexType(e,t){return Ra.resolve(0)}getFieldIndexes(e,t){return Ra.resolve([])}getNextCollectionGroupToUpdate(e){return Ra.resolve(null)}getMinOffset(e,t){return Ra.resolve(Sa.min())}getMinOffsetFromCollectionGroup(e,t){return Ra.resolve(Sa.min())}updateCollectionGroup(e,t,i){return Ra.resolve()}updateIndexEntries(e,t){return Ra.resolve()}}class vu{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Ja(va.comparator),a=!r.has(i);return this.index[t]=r.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ja(va.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Du{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Du(e,Du.DEFAULT_COLLECTION_PERCENTILE,Du.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Du.DEFAULT_COLLECTION_PERCENTILE=10,Du.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Du.DEFAULT=new Du(41943040,Du.DEFAULT_COLLECTION_PERCENTILE,Du.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Du.DISABLED=new Du(-1,0,0);
/**
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
 */
class Eu{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Eu(0)}static Nn(){return new Eu(-1)}}
/**
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
 */
/**
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
 */
class Cu{constructor(){this.changes=new wo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return void 0!==i?Ra.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class xu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class ju{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(i=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==i&&as(i.mutation,e,Xa.empty(),ya.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ao()).next((()=>t))))}getLocalViewOfDocuments(e,t,i=Ao()){const r=xo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,i).next((e=>{let t=Eo();return e.forEach(((e,i)=>{t=t.insert(e,i.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const i=xo();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ao())))}populateOverlays(e,t,i){const r=[];return i.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,i)=>{t.set(e,i)}))}))}computeViews(e,t,i,r){let a=vo();const n=Bo(),o=function(){return Bo()}();return t.forEach(((e,t)=>{const o=i.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof us)?a=a.insert(t.key,t):void 0!==o?(n.set(t.key,o.mutation.getFieldMask()),as(o.mutation,t,o.mutation.getFieldMask(),ya.now())):n.set(t.key,Xa.empty())})),this.recalculateAndSaveOverlays(e,a).next((e=>(e.forEach(((e,t)=>n.set(e,t))),t.forEach(((e,t)=>{var i;return o.set(e,new xu(t,null!==(i=n.get(e))&&void 0!==i?i:null))})),o)))}recalculateAndSaveOverlays(e,t){const i=Bo();let r=new Ga(((e,t)=>e-t)),a=Ao();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const a of e)a.keys().forEach((e=>{const n=t.get(e);if(null===n)return;let o=i.get(e)||Xa.empty();o=a.applyToLocalView(n,o),i.set(e,o);const s=(r.get(a.batchId)||Ao()).add(e);r=r.insert(a.batchId,s)}))})).next((()=>{const n=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),s=r.key,u=r.value,l=jo();u.forEach((e=>{if(!a.has(e)){const r=is(t.get(e),i.get(e));null!==r&&l.set(e,r),a=a.add(e)}})),n.push(this.documentOverlayCache.saveOverlays(e,s,l))}return Ra.waitFor(n)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,i,r){return function(e){return Ca.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):so(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next((a=>{const n=r-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-a.size):Ra.resolve(xo());let o=-1,s=a;return n.next((t=>Ra.forEach(t,((t,i)=>(o<i.largestBatchId&&(o=i.largestBatchId),a.get(t)?Ra.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,a))).next((()=>this.computeViews(e,s,t,Ao()))).next((e=>({batchId:o,changes:Co(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ca(t)).next((e=>{let t=Eo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const a=t.collectionGroup;let n=Eo();return this.indexManager.getCollectionParents(e,a).next((o=>Ra.forEach(o,(o=>{const s=function(e,t){return new ro(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(a));return this.getDocumentsMatchingCollectionQuery(e,s,i,r).next((e=>{e.forEach(((e,t)=>{n=n.insert(e,t)}))}))})).next((()=>n))))}getDocumentsMatchingCollectionQuery(e,t,i,r){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((n=>(a=n,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,r)))).next((e=>{a.forEach(((t,i)=>{const r=i.getKey();null===e.get(r)&&(e=e.insert(r,Bn.newInvalidDocument(r)))}));let i=Eo();return e.forEach(((e,r)=>{const n=a.get(e);void 0!==n&&as(n.mutation,r,Xa.empty(),ya.now()),mo(t,r)&&(i=i.insert(e,r))})),i}))}}
/**
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
 */class Bu{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return Ra.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(e){return{id:e.id,version:e.version,createTime:$s(e.createTime)}}(t)),Ra.resolve()}getNamedQuery(e,t){return Ra.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(e){return{name:e.name,query:yu(e.bundledQuery),readTime:$s(e.readTime)}}(t)),Ra.resolve()}}
/**
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
 */class Su{constructor(){this.overlays=new Ga(Ca.comparator),this.lr=new Map}getOverlay(e,t){return Ra.resolve(this.overlays.get(t))}getOverlays(e,t){const i=xo();return Ra.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&i.set(t,e)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((i,r)=>{this.lt(e,t,r)})),Ra.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.lr.get(i);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(i)),Ra.resolve()}getOverlaysForCollection(e,t,i){const r=xo(),a=t.length+1,n=new Ca(t.child("")),o=this.overlays.getIteratorFrom(n);for(;o.hasNext();){const e=o.getNext().value,n=e.getKey();if(!t.isPrefixOf(n.path))break;n.path.length===a&&e.largestBatchId>i&&r.set(e.getKey(),e)}return Ra.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let a=new Ga(((e,t)=>e-t));const n=this.overlays.getIterator();for(;n.hasNext();){const e=n.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>i){let t=a.get(e.largestBatchId);null===t&&(t=xo(),a=a.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=xo(),s=a.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ra.resolve(o)}lt(e,t,i){const r=this.overlays.get(i.key);if(null!==r){const e=this.lr.get(r.largestBatchId).delete(i.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(i.key,new Fs(t,i));let a=this.lr.get(t);void 0===a&&(a=Ao(),this.lr.set(t,a)),this.lr.set(t,a.add(i.key))}}
/**
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
 */class qu{constructor(){this.hr=new Ja(Au.Pr),this.Ir=new Ja(Au.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const i=new Au(e,t);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.dr(new Au(e,t))}Ar(e,t){e.forEach((e=>this.removeReference(e,t)))}Rr(e){const t=new Ca(new va([])),i=new Au(t,e),r=new Au(t,e+1),a=[];return this.Ir.forEachInRange([i,r],(e=>{this.dr(e),a.push(e.key)})),a}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new Ca(new va([])),i=new Au(t,e),r=new Au(t,e+1);let a=Ao();return this.Ir.forEachInRange([i,r],(e=>{a=a.add(e.key)})),a}containsKey(e){const t=new Au(e,0),i=this.hr.firstAfterOrEqual(t);return null!==i&&e.isEqual(i.key)}}class Au{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return Ca.comparator(e.key,t.key)||pa(e.gr,t.gr)}static Tr(e,t){return pa(e.gr,t.gr)||Ca.comparator(e.key,t.key)}}
/**
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
 */class Tu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Ja(Au.Pr)}checkEmpty(e){return Ra.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,i,r){const a=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const n=new _s(a,t,i,r);this.mutationQueue.push(n);for(const o of r)this.yr=this.yr.add(new Au(o.key,a)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ra.resolve(n)}lookupMutationBatch(e,t){return Ra.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.Sr(i),a=r<0?0:r;return Ra.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Ra.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return Ra.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Au(t,0),r=new Au(t,Number.POSITIVE_INFINITY),a=[];return this.yr.forEachInRange([i,r],(e=>{const t=this.wr(e.gr);a.push(t)})),Ra.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ja(pa);return t.forEach((e=>{const t=new Au(e,0),r=new Au(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],(e=>{i=i.add(e.gr)}))})),Ra.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let a=i;Ca.isDocumentKey(a)||(a=a.child(""));const n=new Au(new Ca(a),0);let o=new Ja(pa);return this.yr.forEachWhile((e=>{const t=e.key.path;return!!i.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.gr)),!0)}),n),Ra.resolve(this.br(o))}br(e){const t=[];return e.forEach((e=>{const i=this.wr(e);null!==i&&t.push(i)})),t}removeMutationBatch(e,t){ra(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let i=this.yr;return Ra.forEach(t.mutations,(r=>{const a=new Au(r.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.yr=i}))}Fn(e){}containsKey(e,t){const i=new Au(t,0),r=this.yr.firstAfterOrEqual(i);return Ra.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ra.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class Iu{constructor(e){this.Cr=e,this.docs=function(){return new Ga(Ca.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),a=r?r.size:0,n=this.Cr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:n}),this.size+=n-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Ra.resolve(i?i.document.mutableCopy():Bn.newInvalidDocument(t))}getEntries(e,t){let i=vo();return t.forEach((e=>{const t=this.docs.get(e);i=i.insert(e,t?t.document.mutableCopy():Bn.newInvalidDocument(e))})),Ra.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let a=vo();const n=t.path,o=new Ca(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:e,value:{document:o}}=s.getNext();if(!n.isPrefixOf(e.path))break;e.path.length>n.length+1||qa(Ba(o),i)<=0||(r.has(o.key)||mo(t,o))&&(a=a.insert(o.key,o.mutableCopy()))}return Ra.resolve(a)}getAllFromCollectionGroup(e,t,i,r){ia()}vr(e,t){return Ra.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ru(this)}getSize(e){return Ra.resolve(this.size)}}class Ru extends Cu{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach(((i,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(i)})),Ra.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
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
 */class Pu{constructor(e){this.persistence=e,this.Fr=new wo((e=>eo(e)),to),this.lastRemoteSnapshotVersion=wa.min(),this.highestTargetId=0,this.Mr=0,this.Or=new qu,this.targetCount=0,this.Nr=Eu.On()}forEachTarget(e,t){return this.Fr.forEach(((e,i)=>t(i))),Ra.resolve()}getLastRemoteSnapshotVersion(e){return Ra.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ra.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),Ra.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Mr&&(this.Mr=t),Ra.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Eu(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,Ra.resolve()}updateTargetData(e,t){return this.kn(t),Ra.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,Ra.resolve()}removeTargets(e,t,i){let r=0;const a=[];return this.Fr.forEach(((n,o)=>{o.sequenceNumber<=t&&null===i.get(o.targetId)&&(this.Fr.delete(n),a.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ra.waitFor(a).next((()=>r))}getTargetCount(e){return Ra.resolve(this.targetCount)}getTargetData(e,t){const i=this.Fr.get(t)||null;return Ra.resolve(i)}addMatchingKeys(e,t,i){return this.Or.Er(t,i),Ra.resolve()}removeMatchingKeys(e,t,i){this.Or.Ar(t,i);const r=this.persistence.referenceDelegate,a=[];return r&&t.forEach((t=>{a.push(r.markPotentiallyOrphaned(e,t))})),Ra.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),Ra.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Or.mr(t);return Ra.resolve(i)}containsKey(e,t){return Ra.resolve(this.Or.containsKey(t))}}
/**
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
 */class Ou{constructor(e,t){this.Br={},this.overlays={},this.Lr=new Oa(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Pu(this),this.indexManager=new ku,this.remoteDocumentCache=function(e){return new Iu(e)}((e=>this.referenceDelegate.Qr(e))),this.serializer=new bu(t),this.Kr=new Bu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Su,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new Tu(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,i){Xr("MemoryPersistence","Starting transaction:",e);const r=new Nu(this.Lr.next());return this.referenceDelegate.$r(),i(r).next((e=>this.referenceDelegate.Ur(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Wr(e,t){return Ra.or(Object.values(this.Br).map((i=>()=>i.containsKey(e,t))))}}class Nu extends Ta{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Gr=new qu,this.zr=null}static jr(e){return new Mu(e)}get Hr(){if(this.zr)return this.zr;throw ia()}addReference(e,t,i){return this.Gr.addReference(i,t),this.Hr.delete(i.toString()),Ra.resolve()}removeReference(e,t,i){return this.Gr.removeReference(i,t),this.Hr.add(i.toString()),Ra.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),Ra.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach((e=>this.Hr.add(e.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>i.removeTargetData(e,t)))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ra.forEach(this.Hr,(i=>{const r=Ca.fromPath(i);return this.Jr(e,r).next((e=>{e||t.removeEntry(r,wa.min())}))})).next((()=>(this.zr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Jr(e,t).next((e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())}))}Qr(e){return 0}Jr(e,t){return Ra.or([()=>Ra.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
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
 */
class Lu{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.ki=i,this.qi=r}static Qi(e,t){let i=Ao(),r=Ao();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new Lu(e,t.fromCache,i,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Uu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class Vu{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,i,r){const a={result:null};return this.zi(e,t).next((e=>{a.result=e})).next((()=>{if(!a.result)return this.ji(e,t,r,i).next((e=>{a.result=e}))})).next((()=>{if(a.result)return;const i=new Uu;return this.Hi(e,t,i).next((r=>{if(a.result=r,this.$i)return this.Ji(e,t,i,r.size)}))})).next((()=>a.result))}Ji(e,t,i,r){return i.documentReadCount<this.Ui?(Qr()<=o["in"].DEBUG&&Xr("QueryEngine","SDK will not create cache indexes for query:",Fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Ra.resolve()):(Qr()<=o["in"].DEBUG&&Xr("QueryEngine","Query:",Fo(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Wi*r?(Qr()<=o["in"].DEBUG&&Xr("QueryEngine","The SDK decides to create cache indexes for query:",Fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lo(t))):Ra.resolve())}zi(e,t){if(oo(t))return Ra.resolve(null);let i=lo(t);return this.indexManager.getIndexType(e,i).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=fo(t,null,"F"),i=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const a=Ao(...r);return this.Gi.getDocuments(e,a).next((r=>this.indexManager.getMinOffset(e,i).next((i=>{const n=this.Yi(t,r);return this.Zi(t,n,a,i.readTime)?this.zi(e,fo(t,null,"F")):this.Xi(e,n,t,i)}))))})))))}ji(e,t,i,r){return oo(t)||r.isEqual(wa.min())?Ra.resolve(null):this.Gi.getDocuments(e,i).next((a=>{const n=this.Yi(t,a);return this.Zi(t,n,i,r)?Ra.resolve(null):(Qr()<=o["in"].DEBUG&&Xr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fo(t)),this.Xi(e,n,t,ja(r,-1)).next((e=>e)))}))}Yi(e,t){let i=new Ja(bo(e));return t.forEach(((t,r)=>{mo(e,r)&&(i=i.add(r))})),i}Zi(e,t,i,r){if(null===e.limit)return!1;if(i.size!==t.size)return!0;const a="F"===e.limitType?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}Hi(e,t,i){return Qr()<=o["in"].DEBUG&&Xr("QueryEngine","Using full collection scan to execute query:",Fo(t)),this.Gi.getDocumentsMatchingQuery(e,t,Sa.min(),i)}Xi(e,t,i,r){return this.Gi.getDocumentsMatchingQuery(e,i,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class zu{constructor(e,t,i,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new Ga(pa),this.ns=new wo((e=>eo(e)),to),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ju(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ts)))}}function Wu(e,t,i,r){return new zu(e,t,i,r)}async function Hu(e,t){const i=aa(e);return await i.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return i.mutationQueue.getAllMutationBatches(e).next((a=>(r=a,i.os(t),i.mutationQueue.getAllMutationBatches(e)))).next((t=>{const a=[],n=[];let o=Ao();for(const e of r){a.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.localDocuments.getDocuments(e,o).next((e=>({_s:e,removedBatchIds:a,addedBatchIds:n})))}))}))}function $u(e,t){const i=aa(e);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),a=i.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,i,r){const a=i.batch,n=a.keys();let o=Ra.resolve();return n.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const n=i.docVersions.get(e);ra(null!==n),t.version.compareTo(n)<0&&(a.applyToRemoteDocument(t,i),t.isValidDocument()&&(t.setReadTime(i.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,a)))}(i,e,t,a).next((()=>a.apply(e))).next((()=>i.mutationQueue.performConsistencyCheck(e))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ao();for(let i=0;i<e.mutationResults.length;++i)e.mutationResults[i].transformResults.length>0&&(t=t.add(e.batch.mutations[i].key));return t}(t)))).next((()=>i.localDocuments.getDocuments(e,r)))}))}function Gu(e){const t=aa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qr.getLastRemoteSnapshotVersion(e)))}function Ku(e,t){const i=aa(e),r=t.snapshotVersion;let a=i.ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const n=i.ss.newChangeBuffer({trackRemovals:!0});a=i.ts;const o=[];t.targetChanges.forEach(((n,s)=>{const u=a.get(s);if(!u)return;o.push(i.qr.removeMatchingKeys(e,n.removedDocuments,s).next((()=>i.qr.addMatchingKeys(e,n.addedDocuments,s))));let l=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?l=l.withResumeToken(en.EMPTY_BYTE_STRING,wa.min()).withLastLimboFreeSnapshotVersion(wa.min()):n.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(n.resumeToken,r)),a=a.insert(s,l),function(e,t,i){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)}(u,l,n)&&o.push(i.qr.updateTargetData(e,l))}));let s=vo(),u=Ao();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(i.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Yu(e,n,t.documentUpdates).next((e=>{s=e.us,u=e.cs}))),!r.isEqual(wa.min())){const t=i.qr.getLastRemoteSnapshotVersion(e).next((t=>i.qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ra.waitFor(o).next((()=>n.apply(e))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,s,u))).next((()=>s))})).then((e=>(i.ts=a,e)))}function Yu(e,t,i){let r=Ao(),a=Ao();return i.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=vo();return i.forEach(((i,n)=>{const o=e.get(i);n.isFoundDocument()!==o.isFoundDocument()&&(a=a.add(i)),n.isNoDocument()&&n.version.isEqual(wa.min())?(t.removeEntry(i,n.readTime),r=r.insert(i,n)):!o.isValidDocument()||n.version.compareTo(o.version)>0||0===n.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(n),r=r.insert(i,n)):Xr("LocalStore","Ignoring outdated watch update for ",i,". Current version:",o.version," Watch version:",n.version)})),{us:r,cs:a}}))}function Ju(e,t){const i=aa(e);return i.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),i.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Qu(e,t){const i=aa(e);return i.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return i.qr.getTargetData(e,t).next((a=>a?(r=a,Ra.resolve(r)):i.qr.allocateTargetId(e).next((a=>(r=new pu(t,a,"TargetPurposeListen",e.currentSequenceNumber),i.qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=i.ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(i.ts=i.ts.insert(e.targetId,e),i.ns.set(t,e.targetId)),e}))}async function Xu(e,t,i){const r=aa(e),a=r.ts.get(t),n=i?"readwrite":"readwrite-primary";try{i||await r.persistence.runTransaction("Release target",n,(e=>r.persistence.referenceDelegate.removeTarget(e,a)))}catch(e){if(!Pa(e))throw e;Xr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ts=r.ts.remove(t),r.ns.delete(a.target)}function Zu(e,t,i){const r=aa(e);let a=wa.min(),n=Ao();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,i){const r=aa(e),a=r.ns.get(i);return void 0!==a?Ra.resolve(r.ts.get(a)):r.qr.getTargetData(t,i)}(r,e,lo(t)).next((t=>{if(t)return a=t.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{n=e}))})).next((()=>r.es.getDocumentsMatchingQuery(e,t,i?a:wa.min(),i?n:Ao()))).next((e=>(el(r,po(t),e),{documents:e,ls:n})))))}function el(e,t,i){let r=e.rs.get(t)||wa.min();i.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.rs.set(t,r)}class tl{constructor(){this.activeTargetIds=Io()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class il{constructor(){this.eo=new tl,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,i){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new tl,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class rl{ro(e){}shutdown(){}}
/**
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
 */class al{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Xr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Xr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let nl=null;function ol(){return null===nl?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)
/**
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
 */}const sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class ul{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}
/**
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
 */const ll="WebChannelConnection";class hl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${i}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(e,t,i,r,a){const n=ol(),o=this.So(e,t);Xr("RestConnection",`Sending RPC '${e}' ${n}:`,o,i);const s={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(s,r,a),this.Do(e,o,s,i).then((t=>(Xr("RestConnection",`Received RPC '${e}' ${n}: `,t),t)),(t=>{throw ea("RestConnection",`RPC '${e}' ${n} failed with error: `,t,"url: ",o,"request:",i),t}))}Co(e,t,i,r,a,n){return this.wo(e,t,i,r,a)}bo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,i)=>e[i]=t)),i&&i.headers.forEach(((t,i)=>e[i]=t))}So(e,t){const i=sl[e];return`${this.mo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,i,r){const a=ol();return new Promise(((n,o)=>{const s=new Wr;s.setWithCredentials(!0),s.listenOnce(Mr.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case Nr.NO_ERROR:const t=s.getResponseJson();Xr(ll,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),n(t);break;case Nr.TIMEOUT:Xr(ll,`RPC '${e}' ${a} timed out`),o(new oa(na.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const i=s.getStatus();if(Xr(ll,`RPC '${e}' ${a} failed with status:`,i,"response text:",s.getResponseText()),i>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(na).indexOf(t)>=0?t:na.UNKNOWN}(t.status);o(new oa(e,t.message))}else o(new oa(na.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new oa(na.UNAVAILABLE,"Connection failed."));break;default:ia()}}finally{Xr(ll,`RPC '${e}' ${a} completed.`)}}));const u=JSON.stringify(r);Xr(ll,`RPC '${e}' ${a} sending request:`,r),s.send(t,"POST",u,i,15)}))}vo(e,t,i){const r=ol(),a=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],n=Pr(),o=Or(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(s.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(s.xmlHttpFactory=new Vr({})),this.bo(s.initMessageHeaders,t,i),s.encodeInitMessageHeaders=!0;const l=a.join("");Xr(ll,`Creating RPC '${e}' stream ${r}: ${l}`,s);const h=n.createWebChannel(l,s);let c=!1,f=!1;const d=new ul({co:t=>{f?Xr(ll,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(Xr(ll,`Opening RPC '${e}' stream ${r} transport.`),h.open(),c=!0),Xr(ll,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},lo:()=>h.close()}),_=(e,t,i)=>{e.listen(t,(e=>{try{i(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return _(h,zr.EventType.OPEN,(()=>{f||Xr(ll,`RPC '${e}' stream ${r} transport opened.`)})),_(h,zr.EventType.CLOSE,(()=>{f||(f=!0,Xr(ll,`RPC '${e}' stream ${r} transport closed`),d.Ro())})),_(h,zr.EventType.ERROR,(t=>{f||(f=!0,ea(ll,`RPC '${e}' stream ${r} transport errored:`,t),d.Ro(new oa(na.UNAVAILABLE,"The operation could not be completed")))})),_(h,zr.EventType.MESSAGE,(t=>{var i;if(!f){const a=t.data[0];ra(!!a);const n=a,o=n.error||(null===(i=n[0])||void 0===i?void 0:i.error);if(o){Xr(ll,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let i=function(e){const t=ps[e];if(void 0!==t)return ws(t)}(t),a=o.message;void 0===i&&(i=na.INTERNAL,a="Unknown error status: "+t+" with message "+o.message),f=!0,d.Ro(new oa(i,a)),h.close()}else Xr(ll,`RPC '${e}' stream ${r} received:`,a),d.Vo(a)}})),_(o,Lr.STAT_EVENT,(t=>{t.stat===Ur.PROXY?Xr(ll,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Ur.NOPROXY&&Xr(ll,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Ao()}),0),d}}
/**
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
 */
/**
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
 */function cl(){return"undefined"!=typeof document?document:null}
/**
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
 */function fl(e){return new Us(e,!0)}
/**
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
 */class dl{constructor(e,t,i=1e3,r=1.5,a=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=r,this.xo=a,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-i);r>0&&Xr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),e()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
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
 */class _l{constructor(e,t,i,r,a,n,o,s){this.si=e,this.Ko=i,this.$o=r,this.connection=a,this.authCredentialsProvider=n,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new dl(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===na.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===na.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,i])=>{this.Uo===t&&this.s_(e,i)}),(t=>{e((()=>{const e=new oa(na.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)}))}))}s_(e,t){const i=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho((()=>{i((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((e=>{i((()=>this.o_(e)))})),this.stream.onMessage((e=>{i((()=>this.onMessage(e)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(e){return Xr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget((()=>this.Uo===e?t():(Xr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gl extends _l{constructor(e,t,i,r,a,n){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,n),this.serializer=a}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=iu(this.serializer,e),i=function(e){if(!("targetChange"in e))return wa.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?wa.min():t.readTime?$s(t.readTime):wa.min()}(e);return this.listener.a_(t,i)}u_(e){const t={};t.database=Zs(this.serializer),t.addTarget=function(e,t){let i;const r=t.target;if(i=io(r)?{documents:nu(e,r)}:{query:ou(e,r)},i.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){i.resumeToken=Ws(e,t.resumeToken);const r=Vs(e,t.expectedCount);null!==r&&(i.expectedCount=r)}else if(t.snapshotVersion.compareTo(wa.min())>0){i.readTime=zs(e,t.snapshotVersion.toTimestamp());const r=Vs(e,t.expectedCount);null!==r&&(i.expectedCount=r)}return i}(this.serializer,e);const i=uu(this.serializer,e);i&&(t.labels=i),this.e_(t)}c_(e){const t={};t.database=Zs(this.serializer),t.removeTarget=e,this.e_(t)}}class Fl extends _l{constructor(e,t,i,r,a,n){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,n),this.serializer=a,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(ra(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=au(e.writeResults,e.commitTime),i=$s(e.commitTime);return this.listener.I_(i,t)}return ra(!e.writeResults||0===e.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Zs(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ru(this.serializer,e)))};this.e_(t)}}
/**
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
 */class ml extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new oa(na.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.wo(e,t,i,r,a))).catch((e=>{throw"FirebaseError"===e.name?(e.code===na.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oa(na.UNKNOWN,e.toString())}))}Co(e,t,i,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,n])=>this.connection.Co(e,t,i,a,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===na.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oa(na.UNKNOWN,e.toString())}))}terminate(){this.d_=!0}}class pl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Zr(t),this.f_=!1):Xr("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
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
 */class bl{constructor(e,t,i,r,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=a,this.F_.ro((e=>{i.enqueueAndForget((async()=>{jl(this)&&(Xr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=aa(e);t.C_.add(4),await wl(t),t.M_.set("Unknown"),t.C_.delete(4),await yl(t)}(this))}))})),this.M_=new pl(i,r)}}async function yl(e){if(jl(e))for(const t of e.v_)await t(!0)}async function wl(e){for(const t of e.v_)await t(!1)}function kl(e,t){const i=aa(e);i.D_.has(t.targetId)||(i.D_.set(t.targetId,t),xl(i)?Cl(i):$l(i).Ho()&&Dl(i,t))}function vl(e,t){const i=aa(e),r=$l(i);i.D_.delete(t),r.Ho()&&El(i,t),0===i.D_.size&&(r.Ho()?r.Zo():jl(i)&&i.M_.set("Unknown"))}function Dl(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wa.min())>0){const i=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}$l(e).u_(t)}function El(e,t){e.x_.Oe(t),$l(e).c_(t)}function Cl(e){e.x_=new Rs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),$l(e).start(),e.M_.g_()}function xl(e){return jl(e)&&!$l(e).jo()&&e.D_.size>0}function jl(e){return 0===aa(e).C_.size}function Bl(e){e.x_=void 0}async function Sl(e){e.D_.forEach(((t,i)=>{Dl(e,t)}))}async function ql(e,t){Bl(e),xl(e)?(e.M_.w_(t),Cl(e)):e.M_.set("Unknown")}async function Al(e,t,i){if(e.M_.set("Online"),t instanceof Ts&&2===t.state&&t.cause)try{await async function(e,t){const i=t.cause;for(const r of t.targetIds)e.D_.has(r)&&(await e.remoteSyncer.rejectListen(r,i),e.D_.delete(r),e.x_.removeTarget(r))}(e,t)}catch(i){Xr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Tl(e,i)}else if(t instanceof qs?e.x_.$e(t):t instanceof As?e.x_.Je(t):e.x_.Ge(t),!i.isEqual(wa.min()))try{const t=await Gu(e.localStore);i.compareTo(t)>=0&&await function(e,t){const i=e.x_.it(t);return i.targetChanges.forEach(((i,r)=>{if(i.resumeToken.approximateByteSize()>0){const a=e.D_.get(r);a&&e.D_.set(r,a.withResumeToken(i.resumeToken,t))}})),i.targetMismatches.forEach(((t,i)=>{const r=e.D_.get(t);if(!r)return;e.D_.set(t,r.withResumeToken(en.EMPTY_BYTE_STRING,r.snapshotVersion)),El(e,t);const a=new pu(r.target,t,i,r.sequenceNumber);Dl(e,a)})),e.remoteSyncer.applyRemoteEvent(i)}(e,i)}catch(t){Xr("RemoteStore","Failed to raise snapshot:",t),await Tl(e,t)}}async function Tl(e,t,i){if(!Pa(t))throw t;e.C_.add(1),await wl(e),e.M_.set("Offline"),i||(i=()=>Gu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Xr("RemoteStore","Retrying IndexedDB access"),await i(),e.C_.delete(1),await yl(e)}))}function Il(e,t){return t().catch((i=>Tl(e,i,t)))}async function Rl(e){const t=aa(e),i=Gl(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Pl(t);)try{const e=await Ju(t.localStore,r);if(null===e){0===t.b_.length&&i.Zo();break}r=e.batchId,Ol(t,e)}catch(e){await Tl(t,e)}Nl(t)&&Ml(t)}function Pl(e){return jl(e)&&e.b_.length<10}function Ol(e,t){e.b_.push(t);const i=Gl(e);i.Ho()&&i.h_&&i.P_(t.mutations)}function Nl(e){return jl(e)&&!Gl(e).jo()&&e.b_.length>0}function Ml(e){Gl(e).start()}async function Ll(e){Gl(e).E_()}async function Ul(e){const t=Gl(e);for(const i of e.b_)t.P_(i.mutations)}async function Vl(e,t,i){const r=e.b_.shift(),a=gs.from(r,t,i);await Il(e,(()=>e.remoteSyncer.applySuccessfulWrite(a))),await Rl(e)}async function zl(e,t){t&&Gl(e).h_&&await async function(e,t){if(function(e){return ys(e)&&e!==na.ABORTED}(t.code)){const i=e.b_.shift();Gl(e).Yo(),await Il(e,(()=>e.remoteSyncer.rejectFailedWrite(i.batchId,t))),await Rl(e)}}(e,t),Nl(e)&&Ml(e)}async function Wl(e,t){const i=aa(e);i.asyncQueue.verifyOperationInProgress(),Xr("RemoteStore","RemoteStore received new credentials");const r=jl(i);i.C_.add(3),await wl(i),r&&i.M_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.C_.delete(3),await yl(i)}async function Hl(e,t){const i=aa(e);t?(i.C_.delete(2),await yl(i)):t||(i.C_.add(2),await wl(i),i.M_.set("Unknown"))}function $l(e){return e.O_||(e.O_=function(e,t,i){const r=aa(e);return r.A_(),new gl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{ho:Sl.bind(null,e),Io:ql.bind(null,e),a_:Al.bind(null,e)}),e.v_.push((async t=>{t?(e.O_.Yo(),xl(e)?Cl(e):e.M_.set("Unknown")):(await e.O_.stop(),Bl(e))}))),e.O_}function Gl(e){return e.N_||(e.N_=function(e,t,i){const r=aa(e);return r.A_(),new Fl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(e.datastore,e.asyncQueue,{ho:Ll.bind(null,e),Io:zl.bind(null,e),T_:Ul.bind(null,e),I_:Vl.bind(null,e)}),e.v_.push((async t=>{t?(e.N_.Yo(),await Rl(e)):(await e.N_.stop(),e.b_.length>0&&(Xr("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))}))),e.N_
/**
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
 */}class Kl{constructor(e,t,i,r,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=a,this.deferred=new sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,a){const n=Date.now()+i,o=new Kl(e,t,n,r,a);return o.start(i),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oa(na.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yl(e,t){if(Zr("AsyncQueue",`${t}: ${e}`),Pa(e))return new oa(na.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Jl{constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ca.comparator(t.key,i.key):(e,t)=>Ca.comparator(e.key,t.key),this.keyedMap=Eo(),this.sortedSet=new Ga(this.comparator)}static emptySet(e){return new Jl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=i.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const i=new Jl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}
/**
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
 */class Ql{constructor(){this.B_=new Ga(Ca.comparator)}track(e){const t=e.doc.key,i=this.B_.get(t);i?0!==e.type&&3===i.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==i.type?this.B_=this.B_.insert(t,{type:i.type,doc:e.doc}):2===e.type&&2===i.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===i.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===i.type?this.B_=this.B_.remove(t):1===e.type&&2===i.type?this.B_=this.B_.insert(t,{type:1,doc:i.doc}):0===e.type&&1===i.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):ia():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Xl{constructor(e,t,i,r,a,n,o,s,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=a,this.fromCache=n,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,r,a){const n=[];return t.forEach((e=>{n.push({type:0,doc:e})})),new Xl(e,t,Jl.emptySet(t),n,i,r,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}
/**
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
 */class Zl{constructor(){this.k_=void 0,this.listeners=[]}}class eh{constructor(){this.queries=new wo((e=>go(e)),_o),this.onlineState="Unknown",this.q_=new Set}}async function th(e,t){const i=aa(e),r=t.query;let a=!1,n=i.queries.get(r);if(n||(a=!0,n=new Zl),a)try{n.k_=await i.onListen(r)}catch(e){const i=Yl(e,`Initialization of query '${Fo(t.query)}' failed`);return void t.onError(i)}i.queries.set(r,n),n.listeners.push(t),t.Q_(i.onlineState),n.k_&&t.K_(n.k_)&&nh(i)}async function ih(e,t){const i=aa(e),r=t.query;let a=!1;const n=i.queries.get(r);if(n){const e=n.listeners.indexOf(t);e>=0&&(n.listeners.splice(e,1),a=0===n.listeners.length)}if(a)return i.queries.delete(r),i.onUnlisten(r)}function rh(e,t){const i=aa(e);let r=!1;for(const a of t){const e=a.query,t=i.queries.get(e);if(t){for(const e of t.listeners)e.K_(a)&&(r=!0);t.k_=a}}r&&nh(i)}function ah(e,t,i){const r=aa(e),a=r.queries.get(t);if(a)for(const n of a.listeners)n.onError(i);r.queries.delete(t)}function nh(e){e.q_.forEach((e=>{e.next()}))}class oh{constructor(e,t,i){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const t=[];for(const i of e.docChanges)3!==i.type&&t.push(i);e=new Xl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const i="Offline"!==t;return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=Xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}
/**
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
 */
/**
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
 */
class sh{constructor(e){this.key=e}}class uh{constructor(e){this.key=e}}class lh{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ao(),this.mutatedKeys=Ao(),this._a=bo(e),this.aa=new Jl(this._a)}get ua(){return this.ia}ca(e,t){const i=t?t.la:new Ql,r=t?t.aa:this.aa;let a=t?t.mutatedKeys:this.mutatedKeys,n=r,o=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),h=mo(this.query,t)?t:null,c=!!l&&this.mutatedKeys.has(l.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let d=!1;l&&h?l.data.isEqual(h.data)?c!==f&&(i.track({type:3,doc:h}),d=!0):this.ha(l,h)||(i.track({type:2,doc:h}),d=!0,(s&&this._a(h,s)>0||u&&this._a(h,u)<0)&&(o=!0)):!l&&h?(i.track({type:0,doc:h}),d=!0):l&&!h&&(i.track({type:1,doc:l}),d=!0,(s||u)&&(o=!0)),d&&(h?(n=n.add(h),a=f?a.add(e):a.delete(e)):(n=n.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;n.size>this.query.limit;){const e="F"===this.query.limitType?n.last():n.first();n=n.delete(e.key),a=a.delete(e.key),i.track({type:1,doc:e})}return{aa:n,la:i,Zi:o,mutatedKeys:a}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const a=e.la.L_();a.sort(((e,t)=>function(e,t){const i=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ia()}};return i(e)-i(t)}
/**
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
 */(e.type,t.type)||this._a(e.doc,t.doc))),this.Pa(i);const n=t?this.Ia():[],o=0===this.oa.size&&this.current?1:0,s=o!==this.sa;return this.sa=o,0!==a.length||s?{snapshot:new Xl(this.query,e.aa,r,a,e.mutatedKeys,0===o,s,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:n}:{Ta:n}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ql,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach((e=>this.ia=this.ia.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ia=this.ia.delete(e))),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Ao(),this.aa.forEach((e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))}));const t=[];return e.forEach((e=>{this.oa.has(e)||t.push(new uh(e))})),this.oa.forEach((i=>{e.has(i)||t.push(new sh(i))})),t}da(e){this.ia=e.ls,this.oa=Ao();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Xl.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class hh{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ch{constructor(e){this.key=e,this.Ra=!1}}class fh{constructor(e,t,i,r,a,n){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=n,this.Va={},this.ma=new wo((e=>go(e)),_o),this.fa=new Map,this.ga=new Set,this.pa=new Ga(Ca.comparator),this.ya=new Map,this.wa=new qu,this.Sa={},this.ba=new Map,this.Da=Eu.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function dh(e,t){const i=Ah(e);let r,a;const n=i.ma.get(t);if(n)r=n.targetId,i.sharedClientState.addLocalQueryTarget(r),a=n.view.Aa();else{const e=await Qu(i.localStore,lo(t)),n=i.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,a=await _h(i,t,r,"current"===n,e.resumeToken),i.isPrimaryClient&&kl(i.remoteStore,e)}return a}async function _h(e,t,i,r,a){e.va=(t,i,r)=>async function(e,t,i,r){let a=t.view.ca(i);a.Zi&&(a=await Zu(e.localStore,t.query,!1).then((({documents:e})=>t.view.ca(e,a))));const n=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(a,e.isPrimaryClient,n);return Ch(e,t.targetId,o.Ta),o.snapshot}(e,t,i,r);const n=await Zu(e.localStore,t,!0),o=new lh(t,n.ls),s=o.ca(n.documents),u=Ss.createSynthesizedTargetChangeForCurrentChange(i,r&&"Offline"!==e.onlineState,a),l=o.applyChanges(s,e.isPrimaryClient,u);Ch(e,i,l.Ta);const h=new hh(t,i,o);return e.ma.set(t,h),e.fa.has(i)?e.fa.get(i).push(t):e.fa.set(i,[t]),l.snapshot}async function gh(e,t){const i=aa(e),r=i.ma.get(t),a=i.fa.get(r.targetId);if(a.length>1)return i.fa.set(r.targetId,a.filter((e=>!_o(e,t)))),void i.ma.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Xu(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),vl(i.remoteStore,r.targetId),Dh(i,r.targetId)})).catch(Ia)):(Dh(i,r.targetId),await Xu(i.localStore,r.targetId,!0))}async function Fh(e,t,i){const r=Th(e);try{const e=await function(e,t){const i=aa(e),r=ya.now(),a=t.reduce(((e,t)=>e.add(t.key)),Ao());let n,o;return i.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let s=vo(),u=Ao();return i.ss.getEntries(e,a).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>i.localDocuments.getOverlayedDocuments(e,s))).next((a=>{n=a;const o=[];for(const e of t){const t=ns(e,n.get(e.key).overlayedDocument);null!=t&&o.push(new us(e.key,t,jn(t.value.mapValue),Zo.exists(!0)))}return i.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Co(n)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,i){let r=e.Sa[e.currentUser.toKey()];r||(r=new Ga(pa)),r=r.insert(t,i),e.Sa[e.currentUser.toKey()]=r}(r,e.batchId,i),await Bh(r,e.changes),await Rl(r.remoteStore)}catch(e){const t=Yl(e,"Failed to persist write");i.reject(t)}}async function mh(e,t){const i=aa(e);try{const e=await Ku(i.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=i.ya.get(t);r&&(ra(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ra=!0:e.modifiedDocuments.size>0?ra(r.Ra):e.removedDocuments.size>0&&(ra(r.Ra),r.Ra=!1))})),await Bh(i,e,t)}catch(e){await Ia(e)}}function ph(e,t,i){const r=aa(e);if(r.isPrimaryClient&&0===i||!r.isPrimaryClient&&1===i){const e=[];r.ma.forEach(((i,r)=>{const a=r.view.Q_(t);a.snapshot&&e.push(a.snapshot)})),function(e,t){const i=aa(e);i.onlineState=t;let r=!1;i.queries.forEach(((e,i)=>{for(const a of i.listeners)a.Q_(t)&&(r=!0)})),r&&nh(i)}(r.eventManager,t),e.length&&r.Va.a_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bh(e,t,i){const r=aa(e);r.sharedClientState.updateQueryState(t,"rejected",i);const a=r.ya.get(t),n=a&&a.key;if(n){let e=new Ga(Ca.comparator);e=e.insert(n,Bn.newNoDocument(n,wa.min()));const i=Ao().add(n),a=new Bs(wa.min(),new Map,new Ga(pa),e,i);await mh(r,a),r.pa=r.pa.remove(n),r.ya.delete(t),jh(r)}else await Xu(r.localStore,t,!1).then((()=>Dh(r,t,i))).catch(Ia)}async function yh(e,t){const i=aa(e),r=t.batch.batchId;try{const e=await $u(i.localStore,t);vh(i,r,null),kh(i,r),i.sharedClientState.updateMutationState(r,"acknowledged"),await Bh(i,e)}catch(e){await Ia(e)}}async function wh(e,t,i){const r=aa(e);try{const e=await function(e,t){const i=aa(e);return i.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return i.mutationQueue.lookupMutationBatch(e,t).next((t=>(ra(null!==t),r=t.keys(),i.mutationQueue.removeMutationBatch(e,t)))).next((()=>i.mutationQueue.performConsistencyCheck(e))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>i.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);vh(r,t,i),kh(r,t),r.sharedClientState.updateMutationState(t,"rejected",i),await Bh(r,e)}catch(i){await Ia(i)}}function kh(e,t){(e.ba.get(t)||[]).forEach((e=>{e.resolve()})),e.ba.delete(t)}function vh(e,t,i){const r=aa(e);let a=r.Sa[r.currentUser.toKey()];if(a){const e=a.get(t);e&&(i?e.reject(i):e.resolve(),a=a.remove(t)),r.Sa[r.currentUser.toKey()]=a}}function Dh(e,t,i=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),i&&e.Va.Fa(r,i);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach((t=>{e.wa.containsKey(t)||Eh(e,t)}))}function Eh(e,t){e.ga.delete(t.path.canonicalString());const i=e.pa.get(t);null!==i&&(vl(e.remoteStore,i),e.pa=e.pa.remove(t),e.ya.delete(i),jh(e))}function Ch(e,t,i){for(const r of i)r instanceof sh?(e.wa.addReference(r.key,t),xh(e,r)):r instanceof uh?(Xr("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||Eh(e,r.key)):ia()}function xh(e,t){const i=t.key,r=i.path.canonicalString();e.pa.get(i)||e.ga.has(r)||(Xr("SyncEngine","New document in limbo: "+i),e.ga.add(r),jh(e))}function jh(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const i=new Ca(va.fromString(t)),r=e.Da.next();e.ya.set(r,new ch(i)),e.pa=e.pa.insert(i,r),kl(e.remoteStore,new pu(lo(no(i.path)),r,"TargetPurposeLimboResolution",Oa._e))}}async function Bh(e,t,i){const r=aa(e),a=[],n=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((e,s)=>{o.push(r.va(s,t,i).then((e=>{if((e||i)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(s.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){a.push(e);const t=Lu.Qi(s.targetId,e);n.push(t)}})))})),await Promise.all(o),r.Va.a_(a),await async function(e,t){const i=aa(e);try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ra.forEach(t,(t=>Ra.forEach(t.ki,(r=>i.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ra.forEach(t.qi,(r=>i.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Pa(e))throw e;Xr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=i.ts.get(e),r=t.snapshotVersion,a=t.withLastLimboFreeSnapshotVersion(r);i.ts=i.ts.insert(e,a)}}}(r.localStore,n))}async function Sh(e,t){const i=aa(e);if(!i.currentUser.isEqual(t)){Xr("SyncEngine","User change. New user:",t.toKey());const e=await Hu(i.localStore,t);i.currentUser=t,function(e,t){e.ba.forEach((e=>{e.forEach((e=>{e.reject(new oa(na.CANCELLED,t))}))})),e.ba.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Bh(i,e._s)}}function qh(e,t){const i=aa(e),r=i.ya.get(t);if(r&&r.Ra)return Ao().add(r.key);{let e=Ao();const r=i.fa.get(t);if(!r)return e;for(const t of r){const r=i.ma.get(t);e=e.unionWith(r.view.ua)}return e}}function Ah(e){const t=aa(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=mh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bh.bind(null,t),t.Va.a_=rh.bind(null,t.eventManager),t.Va.Fa=ah.bind(null,t.eventManager),t}function Th(e){const t=aa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wh.bind(null,t),t}class Ih{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Wu(this.persistence,new Vu,e.initialUser,this.serializer)}createPersistence(e){return new Ou(Mu.jr,this.serializer)}createSharedClientState(e){return new il}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ph(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sh.bind(null,this.syncEngine),await Hl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eh}()}createDatastore(e){const t=fl(e.databaseInfo.databaseId),i=function(e){return new hl(e)}(e.databaseInfo);return function(e,t,i,r){return new ml(e,t,i,r)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(e,t,i,r,a){return new bl(e,t,i,r,a)}(this.localStore,this.datastore,e.asyncQueue,(e=>ph(this.syncEngine,e,0)),function(){return al.D()?new al:new rl}())}createSyncEngine(e,t){return function(e,t,i,r,a,n,o){const s=new fh(e,t,i,r,a,n);return o&&(s.Ca=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=aa(e);Xr("RemoteStore","RemoteStore shutting down."),t.C_.add(5),await wl(t),t.F_.shutdown(),t.M_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class Ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Zr("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */
/**
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
 */
class Oh{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=Kr.UNAUTHENTICATED,this.clientId=ma.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async e=>{Xr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(i,(e=>(Xr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oa(na.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Yl(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Nh(e,t){e.asyncQueue.verifyOperationInProgress(),Xr("FirestoreClient","Initializing OfflineComponentProvider");const i=await e.getConfiguration();await t.initialize(i);let r=i.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Hu(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Mh(e,t){e.asyncQueue.verifyOperationInProgress();const i=await Uh(e);Xr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(i,r),e.setCredentialChangeListener((e=>Wl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,i)=>Wl(t.remoteStore,i))),e._onlineComponents=t}function Lh(e){return"FirebaseError"===e.name?e.code===na.FAILED_PRECONDITION||e.code===na.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Uh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Xr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nh(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!Lh(i))throw i;ea("Error using user provided cache. Falling back to memory cache: "+i),await Nh(e,new Ih)}}else Xr("FirestoreClient","Using default OfflineComponentProvider"),await Nh(e,new Ih);return e._offlineComponents}async function Vh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Xr("FirestoreClient","Using user provided OnlineComponentProvider"),await Mh(e,e._uninitializedComponentsProvider._online)):(Xr("FirestoreClient","Using default OnlineComponentProvider"),await Mh(e,new Rh))),e._onlineComponents}function zh(e){return Vh(e).then((e=>e.syncEngine))}async function Wh(e){const t=await Vh(e),i=t.eventManager;return i.onListen=dh.bind(null,t.syncEngine),i.onUnlisten=gh.bind(null,t.syncEngine),i}function Hh(e,t,i={}){const r=new sa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,i,r,a){const n=new Ph({next:n=>{t.enqueueAndForget((()=>ih(e,o)));const s=n.docs.has(i);!s&&n.fromCache?a.reject(new oa(na.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&n.fromCache&&r&&"server"===r.source?a.reject(new oa(na.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(n)},error:e=>a.reject(e)}),o=new oh(no(i.path),n,{includeMetadataChanges:!0,J_:!0});return th(e,o)}(await Wh(e),e.asyncQueue,t,i,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
function $h(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const Gh=new Map;
/**
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
 */function Kh(e,t,i){if(!i)throw new oa(na.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yh(e,t,i,r){if(!0===t&&!0===r)throw new oa(na.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)}function Jh(e){if(!Ca.isDocumentKey(e))throw new oa(na.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qh(e){if(Ca.isDocumentKey(e))throw new oa(na.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ia()}function Zh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new oa(na.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Xh(e);throw new oa(na.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}
/**
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
 */
class ec{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new oa(na.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new oa(na.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$h(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new oa(na.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new oa(na.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new oa(na.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oa(na.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new oa(na.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new la;switch(e.type){case"firstParty":return new da(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new oa(na.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gh.get(e);t&&(Xr("ComponentProvider","Removing Datastore"),Gh.delete(e),t.terminate())}(this),Promise.resolve()}}function ic(e,t,i,r={}){var a;const n=(e=Zh(e,tc))._getSettings(),o=`${t}:${i}`;if("firestore.googleapis.com"!==n.host&&n.host!==o&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},n),{host:o,ssl:!1})),r.mockUserToken){let t,i;if("string"==typeof r.mockUserToken)t=r.mockUserToken,i=Kr.MOCK_USER;else{t=(0,s.Sg)(r.mockUserToken,null===(a=e._app)||void 0===a?void 0:a.options.projectId);const n=r.mockUserToken.sub||r.mockUserToken.user_id;if(!n)throw new oa(na.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Kr(n)}e._authCredentials=new ha(new ua(t,i))}}
/**
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
 */class rc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new rc(this.firestore,e,this._query)}}class ac{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ac(this.firestore,e,this._key)}}class nc extends rc{constructor(e,t,i){super(e,t,no(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ac(this.firestore,null,new Ca(e))}withConverter(e){return new nc(this.firestore,e,this._path)}}function oc(e,t,...i){if(e=(0,s.m9)(e),Kh("collection","path",t),e instanceof tc){const r=va.fromString(t,...i);return Qh(r),new nc(e,null,r)}{if(!(e instanceof ac||e instanceof nc))throw new oa(na.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(va.fromString(t,...i));return Qh(r),new nc(e.firestore,null,r)}}function sc(e,t,...i){if(e=(0,s.m9)(e),1===arguments.length&&(t=ma.newId()),Kh("doc","path",t),e instanceof tc){const r=va.fromString(t,...i);return Jh(r),new ac(e,null,new Ca(r))}{if(!(e instanceof ac||e instanceof nc))throw new oa(na.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(va.fromString(t,...i));return Jh(r),new ac(e.firestore,e instanceof nc?e.converter:null,new Ca(r))}}
/**
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
 */
class uc{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new dl(this,"async_queue_retry"),this.iu=()=>{const e=cl();e&&Xr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const e=cl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=cl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise((()=>{}));const t=new sa;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ya.push(e),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Pa(e))throw e;Xr("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(e){const t=this.Ja.then((()=>(this.tu=!0,e().catch((e=>{this.eu=e,this.tu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw Zr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.tu=!1,e))))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);const r=Kl.createAndSchedule(this,e,t,i,(e=>this.au(e)));return this.Xa.push(r),r}su(){this.eu&&ia()}verifyOperationInProgress(){}async uu(){let e;do{e=this.Ja,await e}while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then((()=>{this.Xa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Xa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()}))}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function lc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const i=e;for(const r of t)if(r in i&&"function"==typeof i[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class hc extends tc{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=function(){return new uc}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dc(this),this._firestoreClient.terminate()}}function cc(e,t){const i="object"==typeof e?e:(0,a.Mq)(),r="string"==typeof e?e:t||"(default)",n=(0,a.qX)(i,"firestore").getImmediate({identifier:r});if(!n._initialized){const e=(0,s.P0)("firestore");e&&ic(n,...e)}return n}function fc(e){return e._firestoreClient||dc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function dc(e){var t,i,r;const a=e._freezeSettings(),n=function(e,t,i,r){return new ln(e,t,i,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,$h(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new Oh(e._authCredentials,e._appCheckCredentials,e._queue,n),(null===(i=a.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(r=a.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}
/**
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
 */
class _c{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _c(en.fromBase64String(e))}catch(e){throw new oa(na.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new _c(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class gc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new oa(na.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ea(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Fc{constructor(e){this._methodName=e}}
/**
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
 */class mc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oa(na.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oa(na.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pa(this._lat,e._lat)||pa(this._long,e._long)}}
/**
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
 */const pc=/^__.*__$/;class bc{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return null!==this.fieldMask?new us(e,this.data,this.fieldMask,t,this.fieldTransforms):new ss(e,this.data,t,this.fieldTransforms)}}class yc{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new us(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ia()}}class kc{constructor(e,t,i,r,a,n){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,void 0===a&&this.Pu(),this.fieldTransforms=a||[],this.fieldMask=n||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const i=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:i,du:!1});return r.Au(e),r}Ru(e){var t;const i=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:i,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Mc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(wc(this.Iu)&&pc.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class vc{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||fl(e)}pu(e,t,i,r=!1){return new kc({Iu:e,methodName:t,gu:i,path:Ea.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(e){const t=e._freezeSettings(),i=fl(e._databaseId);return new vc(e._databaseId,!!t.ignoreUndefinedProperties,i)}function Ec(e,t,i,r,a,n={}){const o=e.pu(n.merge||n.mergeFields?2:0,t,i,a);Rc("Data must be an object, but it was:",o,r);const s=Tc(r,o);let u,l;if(n.merge)u=new Xa(o.fieldMask),l=o.fieldTransforms;else if(n.mergeFields){const e=[];for(const r of n.mergeFields){const a=Pc(t,r,i);if(!o.contains(a))throw new oa(na.INVALID_ARGUMENT,`Field '${a}' is specified in your field mask but missing from your input data.`);Lc(e,a)||e.push(a)}u=new Xa(e),l=o.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,l=o.fieldTransforms;return new bc(new xn(s),u,l)}class Cc extends Fc{_toFieldTransform(e){if(2!==e.Iu)throw 1===e.Iu?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}function xc(e,t,i){return new kc({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class jc extends Fc{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=xc(this,e,!0),i=this.yu.map((e=>Ac(e,t))),r=new zo(i);return new Jo(e.path,r)}isEqual(e){return this===e}}function Bc(e,t,i,r){const a=e.pu(1,t,i);Rc("Data must be an object, but it was:",a,r);const n=[],o=xn.empty();Ha(r,((e,r)=>{const u=Nc(t,e,i);r=(0,s.m9)(r);const l=a.Ru(u);if(r instanceof Cc)n.push(u);else{const e=Ac(r,l);null!=e&&(n.push(u),o.set(u,e))}}));const u=new Xa(n);return new yc(o,u,a.fieldTransforms)}function Sc(e,t,i,r,a,n){const o=e.pu(1,t,i),u=[Pc(t,r,i)],l=[a];if(n.length%2!=0)throw new oa(na.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<n.length;s+=2)u.push(Pc(t,n[s])),l.push(n[s+1]);const h=[],c=xn.empty();for(let d=u.length-1;d>=0;--d)if(!Lc(h,u[d])){const e=u[d];let t=l[d];t=(0,s.m9)(t);const i=o.Ru(e);if(t instanceof Cc)h.push(e);else{const r=Ac(t,i);null!=r&&(h.push(e),c.set(e,r))}}const f=new Xa(h);return new yc(c,f,o.fieldTransforms)}function qc(e,t,i,r=!1){return Ac(i,e.pu(r?4:3,t))}function Ac(e,t){if(Ic(e=(0,s.m9)(e)))return Rc("Unsupported field value:",t,e),Tc(e,t);if(e instanceof Fc)return function(e,t){if(!wc(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);const i=e._toFieldTransform(t);i&&t.fieldTransforms.push(i)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){const i=[];let r=0;for(const a of e){let e=Ac(a,t.Vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),i.push(e),r++}return{arrayValue:{values:i}}}(e,t)}return function(e,t){if(null===(e=(0,s.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Oo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const i=ya.fromDate(e);return{timestampValue:zs(t.serializer,i)}}if(e instanceof ya){const i=new ya(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:zs(t.serializer,i)}}if(e instanceof mc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _c)return{bytesValue:Ws(t.serializer,e._byteString)};if(e instanceof ac){const i=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(i))throw t.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gs(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${Xh(e)}`)}(e,t)}function Tc(e,t){const i={};return $a(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ha(e,((e,r)=>{const a=Ac(r,t.Eu(e));null!=a&&(i[e]=a)})),{mapValue:{fields:i}}}function Ic(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ya||e instanceof mc||e instanceof _c||e instanceof ac||e instanceof Fc)}function Rc(e,t,i){if(!Ic(i)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(i)){const r=Xh(i);throw"an object"===r?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Pc(e,t,i){if((t=(0,s.m9)(t))instanceof gc)return t._internalPath;if("string"==typeof t)return Nc(e,t);throw Mc("Field path arguments must be of type string or ",e,!1,void 0,i)}const Oc=new RegExp("[~\\*/\\[\\]]");function Nc(e,t,i){if(t.search(Oc)>=0)throw Mc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,i);try{return new gc(...t.split("."))._internalPath}catch(w){throw Mc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,i)}}function Mc(e,t,i,r,a){const n=r&&!r.isEmpty(),o=void 0!==a;let s=`Function ${t}() called with invalid data`;i&&(s+=" (via `toFirestore()`)"),s+=". ";let u="";return(n||o)&&(u+=" (found",n&&(u+=` in field ${r}`),o&&(u+=` in document ${a}`),u+=")"),new oa(na.INVALID_ARGUMENT,s+e+u)}function Lc(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Uc{constructor(e,t,i,r,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ac(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Vc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Vc extends Uc{data(){return super.data()}}function zc(e,t){return"string"==typeof t?Nc(e,t):t instanceof gc?t._internalPath:t._delegate._internalPath}
/**
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
 */function Wc(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new oa(na.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hc{}class $c extends Hc{}function Gc(e,t,...i){let r=[];t instanceof Hc&&r.push(t),r=r.concat(i),function(e){const t=e.filter((e=>e instanceof Yc)).length,i=e.filter((e=>e instanceof Kc)).length;if(t>1||t>0&&i>0)throw new oa(na.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const a of r)e=a._apply(e);return e}class Kc extends $c{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Kc(e,t,i)}_apply(e){const t=this._parse(e);return Xc(e._query,t),new rc(e.firestore,e.converter,co(e._query,t))}_parse(e){const t=Dc(e.firestore),i=function(e,t,i,r,a,n,o){let s;if(a.isKeyField()){if("array-contains"===n||"array-contains-any"===n)throw new oa(na.INVALID_ARGUMENT,`Invalid Query. You can't perform '${n}' queries on documentId().`);if("in"===n||"not-in"===n){Qc(o,n);const t=[];for(const i of o)t.push(Jc(r,e,i));s={arrayValue:{values:t}}}else s=Jc(r,e,o)}else"in"!==n&&"not-in"!==n&&"array-contains-any"!==n||Qc(o,n),s=qc(i,t,o,"in"===n||"not-in"===n);return Pn.create(a,n,s)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return i}}class Yc extends Hc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yc(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:On.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let i=e;const r=t.getFlattenedFilters();for(const a of r)Xc(i,a),i=co(i,a)}(e._query,t),new rc(e.firestore,e.converter,co(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Jc(e,t,i){if("string"==typeof(i=(0,s.m9)(i))){if(""===i)throw new oa(na.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!so(t)&&-1!==i.indexOf("/"))throw new oa(na.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const r=t.path.child(va.fromString(i));if(!Ca.isDocumentKey(r))throw new oa(na.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bn(e,new Ca(r))}if(i instanceof ac)return bn(e,i._key);throw new oa(na.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(i)}.`)}function Qc(e,t){if(!Array.isArray(e)||0===e.length)throw new oa(na.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xc(e,t){const i=function(e,t){for(const i of e)for(const e of i.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==i)throw i===t.op?new oa(na.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new oa(na.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class Zc{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return an(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ia()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ha(e,((e,r)=>{i[e]=this.convertValue(r,t)})),i}convertGeoPoint(e){return new mc(an(e.latitude),an(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=sn(e);return null==i?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(un(e));default:return null}}convertTimestamp(e){const t=rn(e);return new ya(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=va.fromString(e);ra(mu(i));const r=new hn(i.get(1),i.get(3)),a=new Ca(i.popFirst(5));return r.isEqual(t)||Zr(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}
/**
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
 */function ef(e,t,i){let r;return r=e?i&&(i.merge||i.mergeFields)?e.toFirestore(t,i):e.toFirestore(t):t,r}
/**
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
 */
class tf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rf extends Uc{constructor(e,t,i,r,a,n){super(e,t,i,r,n),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new af(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(zc("DocumentSnapshot.get",e));if(null!==i)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class af extends rf{data(e={}){return super.data(e)}}class nf{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tf(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new af(this._firestore,this._userDataWriter,i.key,i,new tf(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oa(na.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((i=>{const r=new af(e._firestore,e._userDataWriter,i.doc.key,i.doc,new tf(e._snapshot.mutatedKeys.has(i.doc.key),e._snapshot.fromCache),e.query.converter);return i.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let i=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new af(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let a=-1,n=-1;return 0!==t.type&&(a=i.indexOf(t.doc.key),i=i.delete(t.doc.key)),1!==t.type&&(i=i.add(t.doc),n=i.indexOf(t.doc.key)),{type:of(t.type),doc:r,oldIndex:a,newIndex:n}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function of(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ia()}}
/**
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
 */
function sf(e){e=Zh(e,ac);const t=Zh(e.firestore,hc);return Hh(fc(t),e._key).then((i=>df(t,e,i)))}class uf extends Zc{constructor(e){super(),this.firestore=e}convertBytes(e){return new _c(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ac(this.firestore,null,t)}}function lf(e,t,i){e=Zh(e,ac);const r=Zh(e.firestore,hc),a=ef(e.converter,t,i);return ff(r,[Ec(Dc(r),"setDoc",e._key,a,null!==e.converter,i).toMutation(e._key,Zo.none())])}function hf(e,t,i,...r){e=Zh(e,ac);const a=Zh(e.firestore,hc),n=Dc(a);let o;return o="string"==typeof(t=(0,s.m9)(t))||t instanceof gc?Sc(n,"updateDoc",e._key,t,i,r):Bc(n,"updateDoc",e._key,t),ff(a,[o.toMutation(e._key,Zo.exists(!0))])}function cf(e,...t){var i,r,a;e=(0,s.m9)(e);let n={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||lc(t[o])||(n=t[o],o++);const u={includeMetadataChanges:n.includeMetadataChanges};if(lc(t[o])){const e=t[o];t[o]=null===(i=e.next)||void 0===i?void 0:i.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(a=e.complete)||void 0===a?void 0:a.bind(e)}let l,h,c;if(e instanceof ac)h=Zh(e.firestore,hc),c=no(e._key.path),l={next:i=>{t[o]&&t[o](df(h,e,i))},error:t[o+1],complete:t[o+2]};else{const i=Zh(e,rc);h=Zh(i.firestore,hc),c=i._query;const r=new uf(h);l={next:e=>{t[o]&&t[o](new nf(h,r,i,e))},error:t[o+1],complete:t[o+2]},Wc(e._query)}return function(e,t,i,r){const a=new Ph(r),n=new oh(t,a,i);return e.asyncQueue.enqueueAndForget((async()=>th(await Wh(e),n))),()=>{a.Na(),e.asyncQueue.enqueueAndForget((async()=>ih(await Wh(e),n)))}}(fc(h),c,u,l)}function ff(e,t){return function(e,t){const i=new sa;return e.asyncQueue.enqueueAndForget((async()=>Fh(await zh(e),t,i))),i.promise}(fc(e),t)}function df(e,t,i){const r=i.docs.get(t._key),a=new uf(e);return new rf(e,a,t._key,r,new tf(i.hasPendingWrites,i.fromCache),t.converter)}
/**
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
 */function _f(...e){return new jc("arrayUnion",e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */!function(e,t=!0){!function(e){Yr=e}(a.Jn),(0,a.Xd)(new n.wA("firestore",((e,{instanceIdentifier:i,options:r})=>{const a=e.getProvider("app").getImmediate(),n=new hc(new ca(e.getProvider("auth-internal")),new ga(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new oa(na.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(e.options.projectId,t)}(a,i),a);return r=Object.assign({useFetchStreams:t},r),n._setSettings(r),n}),"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(Gr,"4.3.2",e),(0,a.KN)(Gr,"4.3.2","esm2017")}()},1294:function(e,t,i){"use strict";i.d(t,{Jt:function(){return rt},cF:function(){return nt},iH:function(){return at},KV:function(){return it}});i(3429),i(560),i(4224),i(1121),i(7133);var r=i(7077),a=i(223),n=i(7142);
/**
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
 */
const o="firebasestorage.googleapis.com",s="storageBucket",u=12e4,l=6e5;
/**
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
 */
class h extends a.ZR{constructor(e,t,i=0){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var c,f;function d(e){return"storage/"+e}function _(){const e="An unknown error occurred, please check the error payload for server response.";return new h(c.UNKNOWN,e)}function g(e){return new h(c.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function F(e){return new h(c.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(c.UNAUTHENTICATED,e)}function p(){return new h(c.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(e){return new h(c.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function y(){return new h(c.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new h(c.CANCELED,"User canceled the upload/download.")}function k(e){return new h(c.INVALID_URL,"Invalid URL '"+e+"'.")}function v(e){return new h(c.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function D(){return new h(c.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+s+"' property when initializing the app?")}function E(){return new h(c.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new h(c.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(e){return new h(c.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function j(e){return new h(c.INVALID_ARGUMENT,e)}function B(){return new h(c.APP_DELETED,"The Firebase app was deleted.")}function S(e){return new h(c.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function q(e,t){return new h(c.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function A(e){throw new h(c.INTERNAL_ERROR,"Internal error: "+e)}
/**
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
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(c||(c={}));class T{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=T.makeFromUrl(e,t)}catch(r){return new T(e,"")}if(""===i.path)return i;throw v(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function a(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const n="(/(.*))?$",s=new RegExp("^gs://"+r+n,"i"),u={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const h="v[A-Za-z0-9_]+",c=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${c}/${h}/b/${r}/o${f}`,"i"),_={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",m=new RegExp(`^https?://${g}/${r}/${F}`,"i"),p={bucket:1,path:2},b=[{regex:s,indices:u,postModify:a},{regex:d,indices:_,postModify:l},{regex:m,indices:p,postModify:l}];for(let o=0;o<b.length;o++){const t=b[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let a=r[t.indices.path];a||(a=""),i=new T(e,a),t.postModify(i);break}}if(null==i)throw k(e);return i}}class I{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function R(e,t,i){let r=1,a=null,n=null,o=!1,s=0;function u(){return 2===s}let l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function c(t){a=setTimeout((()=>{a=null,e(d,u())}),t)}function f(){n&&clearTimeout(n)}function d(e,...t){if(l)return void f();if(e)return f(),void h.call(null,e,...t);const i=u()||o;if(i)return f(),void h.call(null,e,...t);let a;r<64&&(r*=2),1===s?(s=2,a=0):a=1e3*(r+Math.random()),c(a)}let _=!1;function g(e){_||(_=!0,f(),l||(null!==a?(e||(s=2),clearTimeout(a),c(0)):e||(s=1)))}return c(0),n=setTimeout((()=>{o=!0,g(!0)}),i),g}function P(e){e(!1)}
/**
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
 */function O(e){return void 0!==e}function N(e){return"object"===typeof e&&!Array.isArray(e)}function M(e){return"string"===typeof e||e instanceof String}function L(e){return U()&&e instanceof Blob}function U(){return"undefined"!==typeof Blob&&!(0,a.UG)()}function V(e,t,i,r){if(r<t)throw j(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>i)throw j(`Invalid value for '${e}'. Expected ${i} or less.`)}
/**
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
 */function z(e,t,i){let r=t;return null==i&&(r=`https://${t}`),`${i}://${r}/v0${e}`}function W(e){const t=encodeURIComponent;let i="?";for(const r in e)if(e.hasOwnProperty(r)){const a=t(r)+"="+t(e[r]);i=i+a+"&"}return i=i.slice(0,-1),i}
/**
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
 */
/**
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
 */
function H(e,t){const i=e>=500&&e<600,r=[408,429],a=-1!==r.indexOf(e),n=-1!==t.indexOf(e);return i||a||n}
/**
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(f||(f={}));class ${constructor(e,t,i,r,a,n,o,s,u,l,h,c=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=a,this.additionalRetryCodes_=n,this.callback_=o,this.errorCallback_=s,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new G(!1,null,!0));const i=this.connectionFactory_();this.pendingConnection_=i;const r=e=>{const t=e.loaded,i=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,i)};null!==this.progressCallback_&&i.addUploadProgressListener(r),i.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&i.removeUploadProgressListener(r),this.pendingConnection_=null;const t=i.getErrorCode()===f.NO_ERROR,a=i.getStatus();if(!t||H(a,this.additionalRetryCodes_)&&this.retry){const t=i.getErrorCode()===f.ABORT;return void e(!1,new G(!1,null,t))}const n=-1!==this.successCodes_.indexOf(a);e(!0,new G(n,i))}))},t=(e,t)=>{const i=this.resolve_,r=this.reject_,a=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(a,a.getResponse());O(e)?i(e):i()}catch(n){r(n)}else if(null!==a){const e=_();e.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,e)):r(e)}else if(t.canceled){const e=this.appDelete_?B():w();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new G(!1,null,!0)):this.backoffId_=R(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class G{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function K(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Q(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,i,r,a,n,o=!0){const s=W(e.urlParams),u=e.url+s,l=Object.assign({},e.headers);return J(l,t),K(l,i),Y(l,n),Q(l,r),new $(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,o)}
/**
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Z();if(void 0!==t){const i=new t;for(let t=0;t<e.length;t++)i.append(e[t]);return i.getBlob()}if(U())return new Blob(e);throw new h(c.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function te(e,t,i){return e.webkitSlice?e.webkitSlice(t,i):e.mozSlice?e.mozSlice(t,i):e.slice?e.slice(t,i):null}
/**
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
 */function ie(e){if("undefined"===typeof atob)throw x("base-64");return atob(e)}
/**
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
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ne(e,t){switch(e){case re.RAW:return new ae(oe(t));case re.BASE64:case re.BASE64URL:return new ae(ue(e,t));case re.DATA_URL:return new ae(he(t),ce(t))}throw _()}function oe(e){const t=[];for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const a=i<e.length-1&&56320===(64512&e.charCodeAt(i+1));if(a){const a=r,n=e.charCodeAt(++i);r=65536|(1023&a)<<10|1023&n,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function se(e){let t;try{t=decodeURIComponent(e)}catch(i){throw q(re.DATA_URL,"Malformed data URL.")}return oe(t)}function ue(e,t){switch(e){case re.BASE64:{const i=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(i||r){const t=i?"-":"_";throw q(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const i=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(i||r){const t=i?"+":"/";throw q(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=ie(t)}catch(a){if(a.message.includes("polyfill"))throw a;throw q(e,"Invalid character found")}const r=new Uint8Array(i.length);for(let n=0;n<i.length;n++)r[n]=i.charCodeAt(n);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw q(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;null!=i&&(this.base64=fe(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function he(e){const t=new le(e);return t.base64?ue(re.BASE64,t.rest):se(t.rest)}function ce(e){const t=new le(e);return t.contentType}function fe(e,t){const i=e.length>=t.length;return!!i&&e.substring(e.length-t.length)===t}
/**
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
 */class de{constructor(e,t){let i=0,r="";L(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(L(this.data_)){const i=this.data_,r=te(i,e,t);return null===r?null:new de(r)}{const i=new Uint8Array(this.data_.buffer,e,t-e);return new de(i,!0)}}static getBlob(...e){if(U()){const t=e.map((e=>e instanceof de?e.data_:e));return new de(ee.apply(null,t))}{const t=e.map((e=>M(e)?ne(re.RAW,e).data:e.data_));let i=0;t.forEach((e=>{i+=e.byteLength}));const r=new Uint8Array(i);let a=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[a++]=e[t]})),new de(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function _e(e){let t;try{t=JSON.parse(e)}catch(i){return null}return N(t)?t:null}
/**
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
 */function ge(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const i=e.slice(0,t);return i}function Fe(e,t){const i=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?i:e+"/"+i}function me(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function pe(e,t){return t}class be{constructor(e,t,i,r){this.server=e,this.local=t||e,this.writable=!!i,this.xform=r||pe}}let ye=null;function we(e){return!M(e)||e.length<2?e:me(e)}function ke(){if(ye)return ye;const e=[];function t(e,t){return we(t)}e.push(new be("bucket")),e.push(new be("generation")),e.push(new be("metageneration")),e.push(new be("name","fullPath",!0));const i=new be("name");function r(e,t){return void 0!==t?Number(t):t}i.xform=t,e.push(i);const a=new be("size");return a.xform=r,e.push(a),e.push(new be("timeCreated")),e.push(new be("updated")),e.push(new be("md5Hash",null,!0)),e.push(new be("cacheControl",null,!0)),e.push(new be("contentDisposition",null,!0)),e.push(new be("contentEncoding",null,!0)),e.push(new be("contentLanguage",null,!0)),e.push(new be("contentType",null,!0)),e.push(new be("metadata","customMetadata",!0)),ye=e,ye}function ve(e,t){function i(){const i=e["bucket"],r=e["fullPath"],a=new T(i,r);return t._makeStorageReference(a)}Object.defineProperty(e,"ref",{get:i})}function De(e,t,i){const r={type:"file"},a=i.length;for(let n=0;n<a;n++){const e=i[n];r[e.local]=e.xform(r,t[e.server])}return ve(r,e),r}function Ee(e,t,i){const r=_e(t);if(null===r)return null;const a=r;return De(e,a,i)}function Ce(e,t,i,r){const a=_e(t);if(null===a)return null;if(!M(a["downloadTokens"]))return null;const n=a["downloadTokens"];if(0===n.length)return null;const o=encodeURIComponent,s=n.split(","),u=s.map((t=>{const a=e["bucket"],n=e["fullPath"],s="/b/"+o(a)+"/o/"+o(n),u=z(s,i,r),l=W({alt:"media",token:t});return u+l}));return u[0]}function xe(e,t){const i={},r=t.length;for(let a=0;a<r;a++){const r=t[a];r.writable&&(i[r.server]=e[r.local])}return JSON.stringify(i)}
/**
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
 */class je{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function Be(e){if(!e)throw _()}function Se(e,t){function i(i,r){const a=Ee(e,r,t);return Be(null!==a),a}return i}function qe(e,t){function i(i,r){const a=Ee(e,r,t);return Be(null!==a),Ce(a,r,e.host,e._protocol)}return i}function Ae(e){function t(t,i){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?p():m():402===t.getStatus()?F(e.bucket):403===t.getStatus()?b(e.path):i,r.status=t.getStatus(),r.serverResponse=i.serverResponse,r}return t}function Te(e){const t=Ae(e);function i(i,r){let a=t(i,r);return 404===i.getStatus()&&(a=g(e.path)),a.serverResponse=r.serverResponse,a}return i}function Ie(e,t,i){const r=t.fullServerUrl(),a=z(r,e.host,e._protocol),n="GET",o=e.maxOperationRetryTime,s=new je(a,n,qe(e,i),o);return s.errorHandler=Te(t),s}function Re(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Pe(e,t,i){const r=Object.assign({},i);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Re(null,t)),r}function Oe(e,t,i,r,a){const n=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function s(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const u=s();o["Content-Type"]="multipart/related; boundary="+u;const l=Pe(t,r,a),h=xe(l,i),c="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+u+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",d=de.getBlob(c,r,f);if(null===d)throw E();const _={name:l["fullPath"]},g=z(n,e.host,e._protocol),F="POST",m=e.maxUploadRetryTime,p=new je(g,F,Se(e,i),m);return p.urlParams=_,p.headers=o,p.body=d.uploadData(),p.errorHandler=Ae(t),p}
/**
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
 */
let Ne=null;class Me{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,i,r){if(this.sent_)throw A("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const a in r)r.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,r[a].toString());return void 0!==i?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw A("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw A("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw A("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw A("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Le extends Me{initXhr(){this.xhr_.responseType="text"}}function Ue(){return Ne?Ne():new Le}
/**
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
 */
class Ve{constructor(e,t){this._service=e,this._location=t instanceof T?t:T.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ve(e,t)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=ge(this._location.path);if(null===e)return null;const t=new T(this._location.bucket,e);return new Ve(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw S(e)}}function ze(e,t,i){e._throwIfRoot("uploadBytes");const r=Oe(e.storage,e._location,ke(),new de(t,!0),i);return e.storage.makeRequestWithTokens(r,Ue).then((t=>({metadata:t,ref:e})))}function We(e){e._throwIfRoot("getDownloadURL");const t=Ie(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,Ue).then((e=>{if(null===e)throw C();return e}))}function He(e,t){const i=Fe(e._location.path,t),r=new T(e._location.bucket,i);return new Ve(e.storage,r)}
/**
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
 */function $e(e){return/^[A-Za-z]+:\/\//.test(e)}function Ge(e,t){return new Ve(e,t)}function Ke(e,t){if(e instanceof Xe){const i=e;if(null==i._bucket)throw D();const r=new Ve(i,i._bucket);return null!=t?Ke(r,t):r}return void 0!==t?He(e,t):e}function Ye(e,t){if(t&&$e(t)){if(e instanceof Xe)return Ge(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}return Ke(e,t)}function Je(e,t){const i=null===t||void 0===t?void 0:t[s];return null==i?null:T.makeFromBucketSpec(i,e)}function Qe(e,t,i,r={}){e.host=`${t}:${i}`,e._protocol="http";const{mockUserToken:n}=r;n&&(e._overrideAuthToken="string"===typeof n?n:(0,a.Sg)(n,e.app.options.projectId))}class Xe{constructor(e,t,i,r,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=a,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?T.makeFromBucketSpec(r,this._host):Je(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=Je(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ve(this,e)}_makeRequest(e,t,i,r,a=!0){if(this._deleted)return new I(B());{const n=X(e,this._appId,i,r,t,this._firebaseVersion,a);return this._requests.add(n),n.getPromise().then((()=>this._requests.delete(n)),(()=>this._requests.delete(n))),n}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const Ze="@firebase/storage",et="0.11.2",tt="storage";function it(e,t,i){return e=(0,a.m9)(e),ze(e,t,i)}function rt(e){return e=(0,a.m9)(e),We(e)}function at(e,t){return e=(0,a.m9)(e),Ye(e,t)}function nt(e=(0,r.Mq)(),t){e=(0,a.m9)(e);const i=(0,r.qX)(e,tt),n=i.getImmediate({identifier:t}),o=(0,a.P0)("storage");return o&&ot(n,...o),n}function ot(e,t,i,r={}){Qe(e,t,i,r)}
/**
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
 */function st(e,{instanceIdentifier:t}){const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new Xe(i,a,n,t,r.Jn)}function ut(){(0,r.Xd)(new n.wA(tt,st,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Ze,et,""),(0,r.KN)(Ze,et,"esm2017")}ut()},1020:function(e,t,i){"use strict";i.d(t,{WB:function(){return fe},Q_:function(){return Ee}});i(8858),i(1318),i(3228),i(560);var r=i(4870),a=i(3396),n=!1;function o(e,t,i){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,i),i):(e[t]=i,i)}function s(){return u().__VUE_DEVTOOLS_GLOBAL_HOOK__}function u(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:{}}const l="function"===typeof Proxy,h="devtools-plugin:setup",c="plugin:settings:set";let f,d,_;function g(){var e;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,d=window.performance):"undefined"!==typeof i.g&&(null===(e=i.g.perf_hooks)||void 0===e?void 0:e.performance)?(f=!0,d=i.g.perf_hooks.performance):f=!1),f}function F(){return g()?d.now():Date.now()}class m{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const t=e.settings[o];i[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},i);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(a,t)}catch(n){}this.fallbacks={getSettings(){return a},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(n){}a=e},now(){return F()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((i=>{this.targetQueue.push({method:t,args:e,resolve:i})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function p(e,t){const i=e,r=u(),a=s(),n=l&&i.enableEarlyProxy;if(!a||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&n){const e=n?new m(i,a):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:i,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else a.emit(h,e,t)}const b=e=>_=e,y=Symbol();function w(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var k;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(k||(k={}));const v="undefined"!==typeof window,D=!1,E=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function C(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function x(e,t,i){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){A(r.response,t,i)},r.onerror=function(){console.error("could not download file")},r.send()}function j(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(i){}return t.status>=200&&t.status<=299}function B(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(i)}}const S="object"===typeof navigator?navigator:{userAgent:""},q=(()=>/Macintosh/.test(S.userAgent)&&/AppleWebKit/.test(S.userAgent)&&!/Safari/.test(S.userAgent))(),A=v?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!q?T:"msSaveOrOpenBlob"in S?I:R:()=>{};function T(e,t="download",i){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?j(r.href)?x(e,t,i):(r.target="_blank",B(r)):B(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){B(r)}),0))}function I(e,t="download",i){if("string"===typeof e)if(j(e))x(e,t,i);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){B(t)}))}else navigator.msSaveOrOpenBlob(C(e,i),t)}function R(e,t,i,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return x(e,t,i);const a="application/octet-stream"===e.type,n=/constructor/i.test(String(E.HTMLElement))||"safari"in E,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||a&&n||q)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function P(e,t){const i="🍍 "+e;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(i,t):"error"===t?console.error(i):"warn"===t?console.warn(i):console.log(i)}function O(e){return"_a"in e&&"install"in e}function N(){if(!("clipboard"in navigator))return P("Your browser doesn't support the Clipboard API","error"),!0}function M(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(P('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function L(e){if(!N())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),P("Global state copied to clipboard.")}catch(t){if(M(t))return;P("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function U(e){if(!N())try{$(e,JSON.parse(await navigator.clipboard.readText())),P("Global state pasted from clipboard.")}catch(t){if(M(t))return;P("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function V(e){try{A(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){P("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let z;function W(){function e(){return new Promise(((e,t)=>{z.onchange=async()=>{const t=z.files;if(!t)return e(null);const i=t.item(0);return e(i?{text:await i.text(),file:i}:null)},z.oncancel=()=>e(null),z.onerror=t,z.click()}))}return z||(z=document.createElement("input"),z.type="file",z.accept=".json"),e}async function H(e){try{const t=W(),i=await t();if(!i)return;const{text:r,file:a}=i;$(e,JSON.parse(r)),P(`Global state imported from "${a.name}".`)}catch(t){P("Failed to import the state from JSON. Check the console for more details.","error"),console.error(t)}}function $(e,t){for(const i in t){const r=e.state.value[i];r?Object.assign(r,t[i]):e.state.value[i]=t[i]}}function G(e){return{_custom:{display:e}}}const K="🍍 Pinia (root)",Y="_root";function J(e){return O(e)?{id:Y,label:K}:{id:e.$id,label:e.$id}}function Q(e){if(O(e)){const t=Array.from(e._s.keys()),i=e._s,r={state:t.map((t=>({editable:!0,key:t,value:e.state.value[t]}))),getters:t.filter((e=>i.get(e)._getters)).map((e=>{const t=i.get(e);return{editable:!1,key:e,value:t._getters.reduce(((e,i)=>(e[i]=t[i],e)),{})}}))};return r}const t={state:Object.keys(e.$state).map((t=>({editable:!0,key:t,value:e.$state[t]})))};return e._getters&&e._getters.length&&(t.getters=e._getters.map((t=>({editable:!1,key:t,value:e[t]})))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map((t=>({editable:!0,key:t,value:e[t]})))),t}function X(e){return e?Array.isArray(e)?e.reduce(((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:G(e.type),key:G(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Z(e){switch(e){case k.direct:return"mutation";case k.patchFunction:return"$patch";case k.patchObject:return"$patch";default:return"unknown"}}let ee=!0;const te=[],ie="pinia:mutations",re="pinia",{assign:ae}=Object,ne=e=>"🍍 "+e;function oe(e,t){p({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:te,app:e},(i=>{"function"!==typeof i.now&&P("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.addTimelineLayer({id:ie,label:"Pinia 🍍",color:15064968}),i.addInspector({id:re,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{L(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await U(t),i.sendInspectorTree(re),i.sendInspectorState(re)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{V(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await H(t),i.sendInspectorTree(re),i.sendInspectorState(re)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:e=>{const i=t._s.get(e);i?"function"!==typeof i.$reset?P(`Cannot reset "${e}" store because it doesn't have a "$reset" method implemented.`,"warn"):(i.$reset(),P(`Store "${e}" reset.`)):P(`Cannot reset "${e}" store because it wasn't found.`,"warn")}}]}),i.on.inspectComponent(((e,t)=>{const i=e.componentInstance&&e.componentInstance.proxy;if(i&&i._pStores){const t=e.componentInstance.proxy._pStores;Object.values(t).forEach((t=>{e.instanceData.state.push({type:ne(t.$id),key:"state",editable:!0,value:t._isOptionsAPI?{_custom:{value:(0,r.IU)(t.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>t.$reset()}]}}:Object.keys(t.$state).reduce(((e,i)=>(e[i]=t.$state[i],e)),{})}),t._getters&&t._getters.length&&e.instanceData.state.push({type:ne(t.$id),key:"getters",editable:!1,value:t._getters.reduce(((e,i)=>{try{e[i]=t[i]}catch(r){e[i]=r}return e}),{})})}))}})),i.on.getInspectorTree((i=>{if(i.app===e&&i.inspectorId===re){let e=[t];e=e.concat(Array.from(t._s.values())),i.rootNodes=(i.filter?e.filter((e=>"$id"in e?e.$id.toLowerCase().includes(i.filter.toLowerCase()):K.toLowerCase().includes(i.filter.toLowerCase()))):e).map(J)}})),i.on.getInspectorState((i=>{if(i.app===e&&i.inspectorId===re){const e=i.nodeId===Y?t:t._s.get(i.nodeId);if(!e)return;e&&(i.state=Q(e))}})),i.on.editInspectorState(((i,r)=>{if(i.app===e&&i.inspectorId===re){const e=i.nodeId===Y?t:t._s.get(i.nodeId);if(!e)return P(`store "${i.nodeId}" not found`,"error");const{path:r}=i;O(e)?r.unshift("state"):1===r.length&&e._customProperties.has(r[0])&&!(r[0]in e.$state)||r.unshift("$state"),ee=!1,i.set(e,r,i.state.value),ee=!0}})),i.on.editComponentState((e=>{if(e.type.startsWith("🍍")){const i=e.type.replace(/^🍍\s*/,""),r=t._s.get(i);if(!r)return P(`store "${i}" not found`,"error");const{path:a}=e;if("state"!==a[0])return P(`Invalid path for store "${i}":\n${a}\nOnly state can be modified.`);a[0]="$state",ee=!1,e.set(r,a,e.state.value),ee=!0}}))}))}function se(e,t){te.includes(ne(t.$id))||te.push(ne(t.$id)),p({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:te,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(e=>{const i="function"===typeof e.now?e.now.bind(e):Date.now;t.$onAction((({after:r,onError:a,name:n,args:o})=>{const s=le++;e.addTimelineEvent({layerId:ie,event:{time:i(),title:"🛫 "+n,subtitle:"start",data:{store:G(t.$id),action:G(n),args:o},groupId:s}}),r((r=>{ue=void 0,e.addTimelineEvent({layerId:ie,event:{time:i(),title:"🛬 "+n,subtitle:"end",data:{store:G(t.$id),action:G(n),args:o,result:r},groupId:s}})})),a((r=>{ue=void 0,e.addTimelineEvent({layerId:ie,event:{time:i(),logType:"error",title:"💥 "+n,subtitle:"end",data:{store:G(t.$id),action:G(n),args:o,error:r},groupId:s}})}))}),!0),t._customProperties.forEach((n=>{(0,a.YP)((()=>(0,r.SU)(t[n])),((t,r)=>{e.notifyComponentUpdate(),e.sendInspectorState(re),ee&&e.addTimelineEvent({layerId:ie,event:{time:i(),title:"Change",subtitle:n,data:{newValue:t,oldValue:r},groupId:ue}})}),{deep:!0})})),t.$subscribe((({events:r,type:a},n)=>{if(e.notifyComponentUpdate(),e.sendInspectorState(re),!ee)return;const o={time:i(),title:Z(a),data:ae({store:G(t.$id)},X(r)),groupId:ue};a===k.patchFunction?o.subtitle="⤵️":a===k.patchObject?o.subtitle="🧩":r&&!Array.isArray(r)&&(o.subtitle=r.type),r&&(o.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),e.addTimelineEvent({layerId:ie,event:o})}),{detached:!0,flush:"sync"});const n=t._hotUpdate;t._hotUpdate=(0,r.Xl)((r=>{n(r),e.addTimelineEvent({layerId:ie,event:{time:i(),title:"🔥 "+t.$id,subtitle:"HMR update",data:{store:G(t.$id),info:G("HMR update")}}}),e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re)}));const{$dispose:o}=t;t.$dispose=()=>{o(),e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re),e.getSettings().logStoreChanges&&P(`Disposed "${t.$id}" store 🗑`)},e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re),e.getSettings().logStoreChanges&&P(`"${t.$id}" store installed 🆕`)}))}let ue,le=0;function he(e,t,i){const a=t.reduce(((t,i)=>(t[i]=(0,r.IU)(e)[i],t)),{});for(const r in a)e[r]=function(){const t=le,n=i?new Proxy(e,{get(...e){return ue=t,Reflect.get(...e)},set(...e){return ue=t,Reflect.set(...e)}}):e;ue=t;const o=a[r].apply(n,arguments);return ue=void 0,o}}function ce({app:e,store:t,options:i}){if(t.$id.startsWith("__hot:"))return;t._isOptionsAPI=!!i.state,he(t,Object.keys(i.actions),t._isOptionsAPI);const a=t._hotUpdate;(0,r.IU)(t)._hotUpdate=function(e){a.apply(this,arguments),he(t,Object.keys(e._hmrPayload.actions),!!t._isOptionsAPI)},se(e,t)}function fe(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let i=[],a=[];const o=(0,r.Xl)({install(e){b(o),n||(o._a=e,e.provide(y,o),e.config.globalProperties.$pinia=o,D&&oe(e,o),a.forEach((e=>i.push(e))),a=[])},use(e){return this._a||n?i.push(e):a.push(e),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return D&&"undefined"!==typeof Proxy&&o.use(ce),o}const de=()=>{};function _e(e,t,i,a=de){e.push(t);const n=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),a())};return!i&&(0,r.nZ)()&&(0,r.EB)(n),n}function ge(e,...t){e.slice().forEach((e=>{e(...t)}))}const Fe=e=>e();function me(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,i)=>e.set(i,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const a=t[i],n=e[i];w(n)&&w(a)&&e.hasOwnProperty(i)&&!(0,r.dq)(a)&&!(0,r.PG)(a)?e[i]=me(n,a):e[i]=a}return e}const pe=Symbol(),be=new WeakMap;function ye(e){return n?!be.has(e):!w(e)||!e.hasOwnProperty(pe)}const{assign:we}=Object;function ke(e){return!(!(0,r.dq)(e)||!e.effect)}function ve(e,t,i,s){const{state:u,actions:l,getters:h}=t,c=i.state.value[e];let f;function d(){c||(n?o(i.state.value,e,u?u():{}):i.state.value[e]=u?u():{});const t=(0,r.BK)(i.state.value[e]);return we(t,l,Object.keys(h||{}).reduce(((t,o)=>(t[o]=(0,r.Xl)((0,a.Fl)((()=>{b(i);const t=i._s.get(e);if(!n||t._r)return h[o].call(t,t)}))),t)),{}))}return f=De(e,d,t,i,s,!0),f}function De(e,t,i={},s,u,l){let h;const c=we({actions:{}},i);const f={deep:!0};let d,_;let g,F=[],m=[];const p=s.state.value[e];l||p||(n?o(s.state.value,e,{}):s.state.value[e]={});const y=(0,r.iH)({});let w;function v(t){let i;d=_=!1,"function"===typeof t?(t(s.state.value[e]),i={type:k.patchFunction,storeId:e,events:g}):(me(s.state.value[e],t),i={type:k.patchObject,payload:t,storeId:e,events:g});const r=w=Symbol();(0,a.Y3)().then((()=>{w===r&&(d=!0)})),_=!0,ge(F,i,s.state.value[e])}const E=l?function(){const{state:e}=i,t=e?e():{};this.$patch((e=>{we(e,t)}))}:de;function C(){h.stop(),F=[],m=[],s._s.delete(e)}function x(t,i){return function(){b(s);const r=Array.from(arguments),a=[],n=[];function o(e){a.push(e)}function u(e){n.push(e)}let l;ge(m,{args:r,name:t,store:S,after:o,onError:u});try{l=i.apply(this&&this.$id===e?this:S,r)}catch(h){throw ge(n,h),h}return l instanceof Promise?l.then((e=>(ge(a,e),e))).catch((e=>(ge(n,e),Promise.reject(e)))):(ge(a,l),l)}}const j=(0,r.Xl)({actions:{},getters:{},state:[],hotState:y}),B={_p:s,$id:e,$onAction:_e.bind(null,m),$patch:v,$reset:E,$subscribe(t,i={}){const r=_e(F,t,i.detached,(()=>n())),n=h.run((()=>(0,a.YP)((()=>s.state.value[e]),(r=>{("sync"===i.flush?_:d)&&t({storeId:e,type:k.direct,events:g},r)}),we({},f,i))));return r},$dispose:C};n&&(B._r=!1);const S=(0,r.qj)(D?we({_hmrPayload:j,_customProperties:(0,r.Xl)(new Set)},B):B);s._s.set(e,S);const q=s._a&&s._a.runWithContext||Fe,A=q((()=>s._e.run((()=>(h=(0,r.B)()).run(t)))));for(const a in A){const t=A[a];if((0,r.dq)(t)&&!ke(t)||(0,r.PG)(t))l||(p&&ye(t)&&((0,r.dq)(t)?t.value=p[a]:me(t,p[a])),n?o(s.state.value[e],a,t):s.state.value[e][a]=t);else if("function"===typeof t){const e=x(a,t);n?o(A,a,e):A[a]=e,c.actions[a]=t}else 0}if(n?Object.keys(A).forEach((e=>{o(S,e,A[e])})):(we(S,A),we((0,r.IU)(S),A)),Object.defineProperty(S,"$state",{get:()=>s.state.value[e],set:e=>{v((t=>{we(t,e)}))}}),D){const e={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((t=>{Object.defineProperty(S,t,we({value:S[t]},e))}))}return n&&(S._r=!0),s._p.forEach((e=>{if(D){const t=h.run((()=>e({store:S,app:s._a,pinia:s,options:c})));Object.keys(t||{}).forEach((e=>S._customProperties.add(e))),we(S,t)}else we(S,h.run((()=>e({store:S,app:s._a,pinia:s,options:c}))))})),p&&l&&i.hydrate&&i.hydrate(S.$state,p),d=!0,_=!0,S}function Ee(e,t,i){let r,n;const o="function"===typeof t;function s(e,i){const s=(0,a.EM)();e=e||(s?(0,a.f3)(y,null):null),e&&b(e),e=_,e._s.has(r)||(o?De(r,t,n,e):ve(r,n,e));const u=e._s.get(r);return u}return"string"===typeof e?(r=e,n=o?i:t):(n=e,r=e.id),s.$id=r,s}},2483:function(e,t,i){"use strict";i.d(t,{p7:function(){return it},r5:function(){return L},tv:function(){return at}});i(560);var r=i(3396),a=i(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
//# sourceMappingURL=chunk-vendors.faec5040.js.map