!function(){var t={6077:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:function(t,e,r){var n=r(5112),i=r(30),o=r(3070),a=n("unscopables"),s=Array.prototype;null==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0}},9670:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1285:function(t,e,r){"use strict";var n=r(7908),i=r(1400),o=r(7466);t.exports=function(t){for(var e=n(this),r=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,u=void 0===c?r:i(c,r);u>s;)e[s++]=t;return e}},1318:function(t,e,r){var n=r(5656),i=r(7466),o=r(1400),a=function(t){return function(e,r,a){var s,c=n(e),u=i(c.length),h=o(a,u);if(t&&r!=r){for(;u>h;)if((s=c[h++])!=s)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===r)return t||h||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},1194:function(t,e,r){var n=r(7293),i=r(5112),o=r(7392),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7475:function(t,e,r){var n=r(111),i=r(3157),o=r(5112)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)?n(e)&&null===(e=e[o])&&(e=void 0):e=void 0),void 0===e?Array:e}},5417:function(t,e,r){var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,r){var n=r(1694),i=r(4326),o=r(5112)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:a?i(e):"Object"==(n=i(e))&&"function"==typeof e.callee?"Arguments":n}},9920:function(t,e,r){var n=r(6656),i=r(3887),o=r(1236),a=r(3070);t.exports=function(t,e){for(var r=i(e),s=a.f,c=o.f,u=0;u<r.length;u++){var h=r[u];n(t,h)||s(t,h,c(e,h))}}},8544:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,r){"use strict";var n=r(3383).IteratorPrototype,i=r(30),o=r(9114),a=r(8003),s=r(7497),c=function(){return this};t.exports=function(t,e,r){var u=e+" Iterator";return t.prototype=i(n,{next:o(1,r)}),a(t,u,!1,!0),s[u]=c,t}},8880:function(t,e,r){var n=r(9781),i=r(3070),o=r(9114);t.exports=n?function(t,e,r){return i.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,r){"use strict";var n=r(4948),i=r(3070),o=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},654:function(t,e,r){"use strict";var n=r(2109),i=r(4994),o=r(9518),a=r(7674),s=r(8003),c=r(8880),u=r(1320),h=r(5112),l=r(1913),f=r(7497),p=r(3383),y=p.IteratorPrototype,v=p.BUGGY_SAFARI_ITERATORS,d=h("iterator"),g="keys",m="values",b="entries",x=function(){return this};t.exports=function(t,e,r,h,p,w,S){i(r,e,h);var O,j,k,T=function(t){if(t===p&&E)return E;if(!v&&t in L)return L[t];switch(t){case g:case m:case b:return function(){return new r(this,t)}}return function(){return new r(this)}},A=e+" Iterator",C=!1,L=t.prototype,P=L[d]||L["@@iterator"]||p&&L[p],E=!v&&P||T(p),M="Array"==e&&L.entries||P;if(M&&(O=o(M.call(new t)),y!==Object.prototype&&O.next&&(l||o(O)===y||(a?a(O,y):"function"!=typeof O[d]&&c(O,d,x)),s(O,A,!0,!0),l&&(f[A]=x))),p==m&&P&&P.name!==m&&(C=!0,E=function(){return P.call(this)}),l&&!S||L[d]===E||c(L,d,E),f[e]=E,p)if(j={values:T(m),keys:w?E:T(g),entries:T(b)},S)for(k in j)(v||C||!(k in L))&&u(L,k,j[k]);else n({target:e,proto:!0,forced:v||C},j);return j}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),i=r(111),o=n.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,i,o=r(7854),a=r(8113),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,h=u&&u.v8;h?i=(n=h.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(i=n[1]),t.exports=i&&+i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),i=r(1236).f,o=r(8880),a=r(1320),s=r(3505),c=r(9920),u=r(4705);t.exports=function(t,e){var r,h,l,f,p,y=t.target,v=t.global,d=t.stat;if(r=v?n:d?n[y]||s(y,{}):(n[y]||{}).prototype)for(h in e){if(f=e[h],l=t.noTargetGet?(p=i(r,h))&&p.value:r[h],!u(v?h:y+(d?".":"#")+h,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;c(f,l)}(t.sham||l&&l.sham)&&o(f,"sham",!0),a(r,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,e,r){var n=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,e,r){var n=r(7908),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(n(t),e)}},3501:function(t){t.exports={}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),i=r(7293),o=r(317);t.exports=!n&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7293),i=r(4326),o="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},2788:function(t,e,r){var n=r(5465),i=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return i.call(t)}),t.exports=n.inspectSource},9909:function(t,e,r){var n,i,o,a=r(8536),s=r(7854),c=r(111),u=r(8880),h=r(6656),l=r(5465),f=r(6200),p=r(3501),y="Object already initialized",v=s.WeakMap;if(a||l.state){var d=l.state||(l.state=new v),g=d.get,m=d.has,b=d.set;n=function(t,e){if(m.call(d,t))throw new TypeError(y);return e.facade=t,b.call(d,t,e),e},i=function(t){return g.call(d,t)||{}},o=function(t){return m.call(d,t)}}else{var x=f("state");p[x]=!0,n=function(t,e){if(h(t,x))throw new TypeError(y);return e.facade=t,u(t,x,e),e},i=function(t){return h(t,x)?t[x]:{}},o=function(t){return h(t,x)}}t.exports={set:n,get:i,has:o,enforce:function(t){return o(t)?i(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),i=/#|\.prototype\./,o=function(t,e){var r=s[a(t)];return r==u||r!=c&&("function"==typeof e?n(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(5005),i=r(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return"function"==typeof e&&Object(t)instanceof e}},3383:function(t,e,r){"use strict";var n,i,o,a=r(7293),s=r(9518),c=r(8880),u=r(6656),h=r(5112),l=r(1913),f=h("iterator"),p=!1;[].keys&&("next"in(o=[].keys())?(i=s(s(o)))!==Object.prototype&&(n=i):p=!0);var y=null==n||a((function(){var t={};return n[f].call(t)!==t}));y&&(n={}),l&&!y||u(n,f)||c(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},7497:function(t){t.exports={}},133:function(t,e,r){var n=r(7392),i=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),i=r(2788),o=n.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},30:function(t,e,r){var n,i=r(9670),o=r(6048),a=r(748),s=r(3501),c=r(490),u=r(317),h=r(6200)("IE_PROTO"),l=function(){},f=function(t){return"<script>"+t+"<\/script>"},p=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}y=document.domain&&n?p(n):function(){var t,e=u("iframe");if(e.style)return e.style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F}()||p(n);for(var t=a.length;t--;)delete y.prototype[a[t]];return y()};s[h]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(l.prototype=i(t),r=new l,l.prototype=null,r[h]=t):r=y(),void 0===e?r:o(r,e)}},6048:function(t,e,r){var n=r(9781),i=r(3070),o=r(9670),a=r(1956);t.exports=n?Object.defineProperties:function(t,e){o(t);for(var r,n=a(e),s=n.length,c=0;s>c;)i.f(t,r=n[c++],e[r]);return t}},3070:function(t,e,r){var n=r(9781),i=r(4664),o=r(9670),a=r(4948),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(o(t),e=a(e),o(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),i=r(5296),o=r(9114),a=r(5656),s=r(4948),c=r(6656),u=r(4664),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=a(t),e=s(e),u)try{return h(t,e)}catch(t){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},8006:function(t,e,r){var n=r(6324),i=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,r){var n=r(6656),i=r(7908),o=r(6200),a=r(8544),s=o("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=i(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:function(t,e,r){var n=r(6656),i=r(5656),o=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,s=i(t),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~o(u,r)||u.push(r));return u}},1956:function(t,e,r){var n=r(6324),i=r(748);t.exports=Object.keys||function(t){return n(t,i)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!r.call({1:2},1);e.f=i?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:function(t,e,r){var n=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,o){return n(r),i(o),e?t.call(r,o):r.__proto__=o,r}}():void 0)},288:function(t,e,r){"use strict";var n=r(1694),i=r(648);t.exports=n?{}.toString:function(){return"[object "+i(this)+"]"}},2140:function(t,e,r){var n=r(111);t.exports=function(t,e){var r,i;if("string"===e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if("string"!==e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),i=r(8006),o=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=o.f;return r?e.concat(r(t)):e}},1320:function(t,e,r){var n=r(7854),i=r(8880),o=r(6656),a=r(3505),s=r(2788),c=r(9909),u=c.get,h=c.enforce,l=String(String).split("String");(t.exports=function(t,e,r,s){var c,u=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof e||o(r,"name")||i(r,"name",e),(c=h(r)).source||(c.source=l.join("string"==typeof e?e:""))),t!==n?(u?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=r:i(t,e,r)):f?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854);t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},8003:function(t,e,r){var n=r(3070).f,i=r(6656),o=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},6200:function(t,e,r){var n=r(2309),i=r(9711),o=n("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,r){var n=r(7854),i=r(3505),o="__core-js_shared__",a=n[o]||i(o,{});t.exports=a},2309:function(t,e,r){var n=r(1913),i=r(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,r){var n=r(9958),i=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):o(r,e)}},5656:function(t,e,r){var n=r(8361),i=r(4488);t.exports=function(t){return n(i(t))}},9958:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:function(t,e,r){var n=r(9958),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,r){var n=r(111),i=r(2190),o=r(2140),a=r(5112)("toPrimitive");t.exports=function(t,e){if(!n(t)||i(t))return t;var r,s=t[a];if(void 0!==s){if(void 0===e&&(e="default"),r=s.call(t,e),!n(r)||i(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},4948:function(t,e,r){var n=r(7593),i=r(2190);t.exports=function(t){var e=n(t,"string");return i(e)?e:String(e)}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9711:function(t){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,r){var n=r(7854),i=r(2309),o=r(6656),a=r(9711),s=r(133),c=r(3307),u=i("wks"),h=n.Symbol,l=c?h:h&&h.withoutSetter||a;t.exports=function(t){return o(u,t)&&(s||"string"==typeof u[t])||(s&&o(h,t)?u[t]=h[t]:u[t]=l("Symbol."+t)),u[t]}},3290:function(t,e,r){var n=r(2109),i=r(1285),o=r(1223);n({target:"Array",proto:!0},{fill:i}),o("fill")},6992:function(t,e,r){"use strict";var n=r(5656),i=r(1223),o=r(7497),a=r(9909),s=r(654),c="Array Iterator",u=a.set,h=a.getterFor(c);t.exports=s(Array,"Array",(function(t,e){u(this,{type:c,target:n(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},561:function(t,e,r){"use strict";var n=r(2109),i=r(1400),o=r(9958),a=r(7466),s=r(7908),c=r(5417),u=r(6135),h=r(1194)("splice"),l=Math.max,f=Math.min,p=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var r,n,h,v,d,g,m=s(this),b=a(m.length),x=i(t,b),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=b-x):(r=w-2,n=f(l(o(e),0),b-x)),b+r-n>p)throw TypeError(y);for(h=c(m,n),v=0;v<n;v++)(d=x+v)in m&&u(h,v,m[d]);if(h.length=n,r<n){for(v=x;v<b-n;v++)g=v+r,(d=v+n)in m?m[g]=m[d]:delete m[g];for(v=b;v>b-n+r;v--)delete m[v-1]}else if(r>n)for(v=b-n;v>x;v--)g=v+r-1,(d=v+n-1)in m?m[g]=m[d]:delete m[g];for(v=0;v<r;v++)m[v+x]=arguments[v+2];return m.length=b-n+r,h}})},1539:function(t,e,r){var n=r(1694),i=r(1320),o=r(288);n||i(Object.prototype,"toString",o,{unsafe:!0})},3948:function(t,e,r){var n=r(7854),i=r(8324),o=r(6992),a=r(8880),s=r(5112),c=s("iterator"),u=s("toStringTag"),h=o.values;for(var l in i){var f=n[l],p=f&&f.prototype;if(p){if(p[c]!==h)try{a(p,c,h)}catch(t){p[c]=h}if(p[u]||a(p,u,l),i[l])for(var y in o)if(p[y]!==o[y])try{a(p,y,o[y])}catch(t){p[y]=o[y]}}}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(3290),r(561),r(6992),r(1539),r(3948);var e=new Image;e.src="src/assets/newPlatform.png";var n=function(){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.ctx=t,this.keys=[],this.char={x:480,y:245,width:116,height:116,spriteSheetX:0,spriteSheetY:0,speed:5,moving:!1,jumping:!1,frameCount:0,jumpStrength:50,gravity:2.5},this.spriteSheet=new Image,this.spriteSheet.src="src/assets/bearBoySpriteSheetUpdated.png"}var n,i;return n=r,(i=[{key:"drawBearBoy",value:function(t,e,r,n,i,o,a,s,c){this.ctx.drawImage(t,e,r,n,i,o,a,s,c)}},{key:"onKeydown",value:function(t){this.keys[t.key]=!0,this.char.moving=!0}},{key:"onKeyup",value:function(t){delete this.keys[t.key],this.char.moving=!1}},{key:"move",value:function(){if(this.char.moving=!1,this.keys.a&&this.char.x>160&&(this.char.frameCount<10?this.char.frameCount++:this.char.spriteSheetY>=17?(this.char.spriteSheetY--,this.char.frameCount=0):(this.char.spriteSheetY=17,this.char.frameCount=0),this.char.x-=this.char.speed,this.char.moving=!0),this.keys.d&&this.char.x<690&&(this.char.frameCount<10?this.char.frameCount++:this.char.spriteSheetY<=10?(this.char.spriteSheetY++,this.char.frameCount=0):(this.char.spriteSheetY=10,this.char.frameCount=0),this.char.x+=this.char.speed,this.char.moving=!0),this.keys[" "]&&!this.char.jumping){var t=new Audio("./src/assets/jump2.wav");t.volume=.2,t.play(),this.char.y-=this.char.jumpStrength,this.char.jumping=!0,this.char.moving=!0,delete this.keys[" "]}!this.keys[" "]&&this.char.y<245&&(this.char.y+=this.char.gravity,this.char.moving=!0,this.char.jumping=!0),this.keys.s&&this.char.spriteSheetY<14&&(this.char.spriteSheetY=13,this.char.moving=!0,this.char.y=252),this.keys.s&&this.char.spriteSheetY>13&&(this.char.spriteSheetY=14,this.char.moving=!0,this.char.y=252)}},{key:"idleAnimationLogic",value:function(){this.char.spriteSheetY<14&&!1===this.char.moving&&(this.char.frameCount<10?this.char.frameCount++:this.char.spriteSheetY<8?(this.char.spriteSheetY++,this.char.frameCount=0):(this.char.spriteSheetY=0,this.char.frameCount=0),this.char.y=245),this.char.spriteSheetY>13&&!1===this.char.moving&&(this.char.frameCount<10?this.char.frameCount++:this.char.spriteSheetY<27?(this.char.spriteSheetY++,this.char.frameCount=0):(this.char.spriteSheetY=19,this.char.frameCount=0),this.char.y=245)}},{key:"animate",value:function(){245===this.char.y?this.char.jumping=!1:this.char.jumping=!0,this.ctx.drawImage(e,200,80),this.drawBearBoy(this.spriteSheet,this.char.spriteSheetY*this.char.width,this.char.spriteSheetX*this.char.width,this.char.width,this.char.height,this.char.x,this.char.y,this.char.width,this.char.height),this.move()}}])&&t(n.prototype,i),r}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=[270,310],s=[0,960],c=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;i(this,t),this.ctx=e,this.ball={x:s[Math.floor(Math.random()*a.length)],y:a[Math.floor(Math.random()*a.length)],width:30,height:30,frameX:0,frameY:0,speed:r,moving:!1},this.initialX=this.ball.x,this.spriteSheet=new Image,this.spriteSheet.src="src/assets/downscaledSnowball.png"}var e,r;return e=t,(r=[{key:"drawSnowball",value:function(t,e,r,n,i,o,a,s,c){this.ctx.drawImage(t,e,r,n,i,o,a,s,c)}},{key:"letFlyRight",value:function(){this.ball.x+=this.ball.speed}},{key:"letFlyLeft",value:function(){this.ball.x-=this.ball.speed}},{key:"animate",value:function(){this.drawSnowball(this.spriteSheet,0,0,this.ball.width,this.ball.height,this.ball.x,this.ball.y,this.ball.width,this.ball.height),0===this.initialX?this.letFlyRight():this.letFlyLeft()}}])&&o(e.prototype,r),t}();function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,(r=[{key:"detectCollision",value:function(t,e){return 0===e.initialX?t.char.spriteSheetY<14?!(t.char.x+50>e.ball.x+50+e.ball.width-50||t.char.x+50+t.char.width-50<e.ball.x+50||t.char.y+50>e.ball.y+50+e.ball.height-50||t.char.y+50+t.char.height-50<e.ball.y+50):!(t.char.x+50>e.ball.x+15+e.ball.width-50||t.char.x+50+t.char.width-50<e.ball.x+50||t.char.y+50>e.ball.y+50+e.ball.height-50||t.char.y+50+t.char.height-50<e.ball.y+50):t.char.spriteSheetY<14?!(t.char.x+50>e.ball.x+50+e.ball.width-50||t.char.x+50+t.char.width-75<e.ball.x+50||t.char.y+50>e.ball.y+50+e.ball.height-50||t.char.y+50+t.char.height-50<e.ball.y+50):!(t.char.x+50>e.ball.x+15+e.ball.width-50||t.char.x+50+t.char.width-50<e.ball.x+50||t.char.y+50>e.ball.y+50+e.ball.height-50||t.char.y+50+t.char.height-50<e.ball.y+50)}}])&&u(e.prototype,r),t}();function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.ctx.font="small-caps bold 36px pixel",this.snowballArray=[],this.player=new n(this.ctx),this.snowball=new c(this.ctx),this.utilities=new h,this.fpsInterval="",this.then="",this.startTime="",this.now="",this.then="",this.elapsed="",this.spawnSnowball=0,this.score=0,this.difficulty=5,this.gameOver=!1,this.movementController()}var e,r;return e=t,(r=[{key:"startGame",value:function(){this.player=new n(this.ctx),this.ctx.font="small-caps bold 36px pixel",this.snowballArray=[],this.spawnSnowball=0,this.score=0,this.difficulty=5,this.gameOver=!1,this.ctx.clearRect(0,0,960,480),this.startAnimating(60)}},{key:"movementController",value:function(){window.addEventListener("keydown",this.inputKeydown.bind(this)),window.addEventListener("keyup",this.inputKeyup.bind(this))}},{key:"inputKeydown",value:function(t){this.player.onKeydown(t)}},{key:"inputKeyup",value:function(t){this.player.onKeyup(t)}},{key:"startAnimating",value:function(t){this.fpsInterval=1e3/t,this.then=Date.now(),this.startTime=this.then,this.animate()}},{key:"animate",value:function(){if(this.gameOver){var t=new Audio("./src/assets/game_over.wav");return t.volume=.1,t.play(),this.ctx.fillStyle="#db4b54",this.ctx.font="small-caps bold 72px pixel",this.ctx.fillText("game over!",360,150),this.ctx.strokeStyle="white",this.ctx.strokeText("game over!",360,150),this.ctx.fillStyle="#db4b54",this.ctx.fillText("press enter to restart",215,220),this.ctx.strokeStyle="white",void this.ctx.strokeText("press enter to restart",215,220)}requestAnimationFrame(this.animate.bind(this)),this.now=Date.now(),this.elapsed=this.now-this.then,this.elapsed>this.fpsInterval&&(this.then=this.now-this.elapsed%this.fpsInterval,this.ctx.clearRect(0,0,980,460),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText("SCORE: "+this.score,410,40),this.player.animate(),this.createSnowball(),this.player.idleAnimationLogic(),this.spawnSnowball++)}},{key:"createSnowball",value:function(){this.spawnSnowball%100==0&&(this.difficulty++,this.snowballArray.push(new c(this.ctx,this.difficulty+.1*(Math.random()+1))));for(var t=0;t<this.snowballArray.length;t++)this.snowballArray[t].animate(),this.utilities.detectCollision(this.player,this.snowballArray[t])&&(this.gameOver=!0),(this.snowballArray[t].ball.x>960&&0===this.snowballArray[t].initialX||this.snowballArray[t].ball.x<0&&960===this.snowballArray[t].initialX)&&(this.snowballArray.splice(t,1),this.score++)}}])&&l(e.prototype,r),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("gameCanvas"),e=t.getContext("2d");t.width=960,t.height=480;var r=new f(e);window.addEventListener("keydown",(function(t){"Enter"===t.key&&(r.startGame(),document.getElementById("instructions").classList.add("hidden"))}));var n=document.getElementById("snowflakes"),i=n.getContext("2d");n.width=960,n.height=480;var o=[];function a(t,e){return t+Math.random()*(e-t+1)}setInterval((function(){i.clearRect(0,0,n.width,n.height),function(){for(var t=0;t<o.length;t++){var e=i.createRadialGradient(o[t].x,o[t].y,0,o[t].x,o[t].y,o[t].radius);e.addColorStop(0,"rgba(255, 255, 255,"+o[t].opacity+")"),e.addColorStop(.5,"rgba(166, 255, 254,"+o[t].opacity+")"),e.addColorStop(1,"rgba(207, 255, 255,"+o[t].opacity+")"),i.beginPath(),i.arc(o[t].x,o[t].y,o[t].radius,0,2*Math.PI,!0),i.fillStyle=e,i.fill()}}(),function(){for(var t=0;t<o.length;t++)o[t].x+=o[t].xVelocity,o[t].y+=o[t].yVelocity,o[t].y>n.height&&(o[t].x=Math.random()*n.width,o[t].y=-50)}()}),50),function(){for(var t=0;t<250;t++)o.push({x:Math.random()*n.width,y:Math.random()*n.height,opacity:Math.random(),xVelocity:a(-10,10),yVelocity:a(-10,10),radius:a(1,5)})}()}))}()}();
//# sourceMappingURL=main.js.map