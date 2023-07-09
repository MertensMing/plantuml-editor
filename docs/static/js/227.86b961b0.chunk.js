"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[227],{7268:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(9439),o=n(5179),i=n(2791),a=n(1929),c=n(8848);function s(e,t,n){return function(s){var u=s.prefixCls,l=s.style,f=i.useRef(null),m=i.useState(0),p=(0,r.Z)(m,2),d=p[0],v=p[1],y=i.useState(0),g=(0,r.Z)(y,2),h=g[0],b=g[1],O=(0,o.Z)(!1,{value:s.open}),w=(0,r.Z)(O,2),E=w[0],Z=w[1],S=(0,i.useContext(a.E_).getPrefixCls)(t||"select",u);return i.useEffect((function(){if(Z(!0),"undefined"!==typeof ResizeObserver){var e=new ResizeObserver((function(e){var t=e[0].target;v(t.offsetHeight+8),b(t.offsetWidth)})),t=setInterval((function(){var r,o=n?".".concat(n(S)):".".concat(S,"-dropdown"),i=null===(r=f.current)||void 0===r?void 0:r.querySelector(o);i&&(clearInterval(t),e.observe(i))}),10);return function(){clearInterval(t),e.disconnect()}}}),[]),i.createElement(c.default,{theme:{token:{motionDurationFast:"0.01s",motionDurationMid:"0.01s",motionDurationSlow:"0.01s"}}},i.createElement("div",{ref:f,style:{paddingBottom:d,position:"relative",width:"fit-content",minWidth:h}},i.createElement(e,Object.assign({},s,{style:Object.assign(Object.assign({},l),{margin:0}),open:E,visible:E,getPopupContainer:function(){return f.current}}))))}}},5303:function(e,t,n){n.d(t,{u:function(){return v},Z:function(){return h}});var r=n(4942),o=n(9439),i=n(1694),a=n.n(i),c=n(5501),s=n(2791),u=n(1929),l=n(6096);function f(e){var t=e.className,n=e.direction,o=e.index,i=e.marginDirection,a=e.children,c=e.split,u=e.wrap,l=s.useContext(v),f=l.horizontalSize,m=l.verticalSize,p=l.latestIndex,d={};return l.supportFlexGap||("vertical"===n?o<p&&(d={marginBottom:f/(c?2:1)}):d=Object.assign(Object.assign({},o<p&&(0,r.Z)({},i,f/(c?2:1))),u&&{paddingBottom:m})),null===a||void 0===a?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:d},a),o<p&&c&&s.createElement("span",{className:"".concat(t,"-split"),style:d},c))}var m=n(11),p=n(1294),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),y={small:8,middle:16,large:24};var g=function(e){var t,n=s.useContext(u.E_),i=n.getPrefixCls,m=n.space,g=n.direction,h=e.size,b=void 0===h?(null===m||void 0===m?void 0:m.size)||"small":h,O=e.align,w=e.className,E=e.children,Z=e.direction,S=void 0===Z?"horizontal":Z,R=e.prefixCls,C=e.split,j=e.style,x=e.wrap,P=void 0!==x&&x,I=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=function(){var e=s.useState(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1];return s.useEffect((function(){r((0,l.fk)())}),[]),n}(),z=s.useMemo((function(){return(Array.isArray(b)?b:[b,b]).map((function(e){return function(e){return"string"===typeof e?y[e]:e||0}(e)}))}),[b]),M=(0,o.Z)(z,2),K=M[0],k=M[1],D=(0,c.Z)(E,{keepEmpty:!0}),_=void 0===O&&"horizontal"===S?"center":O,F=i("space",R),W=(0,p.Z)(F),T=(0,o.Z)(W,2),X=T[0],Y=T[1],A=a()(F,Y,"".concat(F,"-").concat(S),(t={},(0,r.Z)(t,"".concat(F,"-rtl"),"rtl"===g),(0,r.Z)(t,"".concat(F,"-align-").concat(_),_),t),w),B="".concat(F,"-item"),G="rtl"===g?"marginLeft":"marginRight",H=0,L=D.map((function(e,t){null!==e&&void 0!==e&&(H=t);var n=e&&e.key||"".concat(B,"-").concat(t);return s.createElement(f,{className:B,key:n,direction:S,index:t,marginDirection:G,split:C,wrap:P},e)})),U=s.useMemo((function(){return{horizontalSize:K,verticalSize:k,latestIndex:H,supportFlexGap:N}}),[K,k,H,N]);if(0===D.length)return null;var V={};return P&&(V.flexWrap="wrap",N||(V.marginBottom=-k)),N&&(V.columnGap=K,V.rowGap=k),X(s.createElement("div",Object.assign({className:A,style:Object.assign(Object.assign({},V),j)},I),s.createElement(v.Provider,{value:U},L)))};g.Compact=m.ZP;var h=g},5390:function(e,t,n){n.d(t,{Fm:function(){return p}});var r=n(4942),o=n(3814),i=n(8303),a=new o.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),c=new o.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),s=new o.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),u=new o.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),l=new o.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),f=new o.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),m={"move-up":{inKeyframes:new o.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),outKeyframes:new o.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}})},"move-down":{inKeyframes:a,outKeyframes:c},"move-left":{inKeyframes:s,outKeyframes:u},"move-right":{inKeyframes:l,outKeyframes:f}},p=function(e,t){var n,o=e.antCls,a="".concat(o,"-").concat(t),c=m[t],s=c.inKeyframes,u=c.outKeyframes;return[(0,i.R)(a,s,u,e.motionDurationMid),(n={},(0,r.Z)(n,"\n        ".concat(a,"-enter,\n        ").concat(a,"-appear\n      "),{opacity:0,animationTimingFunction:e.motionEaseOutCirc}),(0,r.Z)(n,"".concat(a,"-leave"),{animationTimingFunction:e.motionEaseInOutCirc}),n)]}},5541:function(e,t,n){n.d(t,{Qt:function(){return s},Uw:function(){return c},fJ:function(){return a},ly:function(){return u},oN:function(){return v}});var r=n(4942),o=n(3814),i=n(8303),a=new o.E4("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),c=new o.E4("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),s=new o.E4("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),u=new o.E4("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),l=new o.E4("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),f=new o.E4("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),m=new o.E4("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),p=new o.E4("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),d={"slide-up":{inKeyframes:a,outKeyframes:c},"slide-down":{inKeyframes:s,outKeyframes:u},"slide-left":{inKeyframes:l,outKeyframes:f},"slide-right":{inKeyframes:m,outKeyframes:p}},v=function(e,t){var n,o=e.antCls,a="".concat(o,"-").concat(t),c=d[t],s=c.inKeyframes,u=c.outKeyframes;return[(0,i.R)(a,s,u,e.motionDurationMid),(n={},(0,r.Z)(n,"\n      ".concat(a,"-enter,\n      ").concat(a,"-appear\n    "),{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint}),(0,r.Z)(n,"".concat(a,"-leave"),{animationTimingFunction:e.motionEaseInQuint}),n)]}},7573:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(7462),o=n(1413),i=n(9439),a=n(4925),c=n(2791),s=n(1694),u=n.n(s),l=n(8184),f=n(1605),m=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],p=void 0;function d(e,t){var n=e.prefixCls,i=e.invalidate,s=e.item,f=e.renderItem,d=e.responsive,v=e.responsiveDisabled,y=e.registerSize,g=e.itemKey,h=e.className,b=e.style,O=e.children,w=e.display,E=e.order,Z=e.component,S=void 0===Z?"div":Z,R=(0,a.Z)(e,m),C=d&&!w;function j(e){y(g,e)}c.useEffect((function(){return function(){j(null)}}),[]);var x,P=f&&s!==p?f(s):O;i||(x={opacity:C?0:1,height:C?0:p,overflowY:C?"hidden":p,order:d?E:p,pointerEvents:C?"none":p,position:C?"absolute":p});var I={};C&&(I["aria-hidden"]=!0);var N=c.createElement(S,(0,r.Z)({className:u()(!i&&n,h),style:(0,o.Z)((0,o.Z)({},x),b)},I,R,{ref:t}),P);return d&&(N=c.createElement(l.Z,{onResize:function(e){j(e.offsetWidth)},disabled:v},N)),N}var v=c.forwardRef(d);v.displayName="Item";var y=v,g=n(5314),h=n(8368);var b=["component"],O=["className"],w=["className"],E=function(e,t){var n=c.useContext(C);if(!n){var o=e.component,i=void 0===o?"div":o,s=(0,a.Z)(e,b);return c.createElement(i,(0,r.Z)({},s,{ref:t}))}var l=n.className,f=(0,a.Z)(n,O),m=e.className,p=(0,a.Z)(e,w);return c.createElement(C.Provider,{value:null},c.createElement(y,(0,r.Z)({ref:t,className:u()(l,m)},f,p)))},Z=c.forwardRef(E);Z.displayName="RawItem";var S=Z,R=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],C=c.createContext(null),j="responsive",x="invalidate";function P(e){return"+ ".concat(e.length," ...")}function I(e,t){var n=e.prefixCls,s=void 0===n?"rc-overflow":n,m=e.data,p=void 0===m?[]:m,d=e.renderItem,v=e.renderRawItem,b=e.itemKey,O=e.itemWidth,w=void 0===O?10:O,E=e.ssr,Z=e.style,S=e.className,I=e.maxCount,N=e.renderRest,z=e.renderRawRest,M=e.suffix,K=e.component,k=void 0===K?"div":K,D=e.itemComponent,_=e.onVisibleChange,F=(0,a.Z)(e,R),W=function(){var e=(0,h.Z)({}),t=(0,i.Z)(e,2)[1],n=(0,c.useRef)([]),r=0,o=0;return function(e){var i=r;return r+=1,n.current.length<i+1&&(n.current[i]=e),[n.current[i],function(e){n.current[i]="function"===typeof e?e(n.current[i]):e,g.Z.cancel(o),o=(0,g.Z)((function(){t({},!0)}))}]}}(),T="full"===E,X=W(null),Y=(0,i.Z)(X,2),A=Y[0],B=Y[1],G=A||0,H=W(new Map),L=(0,i.Z)(H,2),U=L[0],V=L[1],Q=W(0),q=(0,i.Z)(Q,2),J=q[0],$=q[1],ee=W(0),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],oe=W(0),ie=(0,i.Z)(oe,2),ae=ie[0],ce=ie[1],se=(0,c.useState)(null),ue=(0,i.Z)(se,2),le=ue[0],fe=ue[1],me=(0,c.useState)(null),pe=(0,i.Z)(me,2),de=pe[0],ve=pe[1],ye=c.useMemo((function(){return null===de&&T?Number.MAX_SAFE_INTEGER:de||0}),[de,A]),ge=(0,c.useState)(!1),he=(0,i.Z)(ge,2),be=he[0],Oe=he[1],we="".concat(s,"-item"),Ee=Math.max(J,ne),Ze=I===j,Se=p.length&&Ze,Re=I===x,Ce=Se||"number"===typeof I&&p.length>I,je=(0,c.useMemo)((function(){var e=p;return Se?e=null===A&&T?p:p.slice(0,Math.min(p.length,G/w)):"number"===typeof I&&(e=p.slice(0,I)),e}),[p,w,A,I,Se]),xe=(0,c.useMemo)((function(){return Se?p.slice(ye+1):p.slice(je.length)}),[p,je,Se,ye]),Pe=(0,c.useCallback)((function(e,t){var n;return"function"===typeof b?b(e):null!==(n=b&&(null===e||void 0===e?void 0:e[b]))&&void 0!==n?n:t}),[b]),Ie=(0,c.useCallback)(d||function(e){return e},[d]);function Ne(e,t,n){(de!==e||void 0!==t&&t!==le)&&(ve(e),n||(Oe(e<p.length-1),null===_||void 0===_||_(e)),void 0!==t&&fe(t))}function ze(e,t){V((function(n){var r=new Map(n);return null===t?r.delete(e):r.set(e,t),r}))}function Me(e){return U.get(Pe(je[e],e))}(0,f.Z)((function(){if(G&&Ee&&je){var e=ae,t=je.length,n=t-1;if(!t)return void Ne(0,null);for(var r=0;r<t;r+=1){var o=Me(r);if(T&&(o=o||0),void 0===o){Ne(r-1,void 0,!0);break}if(e+=o,0===n&&e<=G||r===n-1&&e+Me(n)<=G){Ne(n,null);break}if(e+Ee>G){Ne(r-1,e-o-ae+ne);break}}M&&Me(0)+ae>G&&fe(null)}}),[G,U,ne,ae,Pe,je]);var Ke=be&&!!xe.length,ke={};null!==le&&Se&&(ke={position:"absolute",left:le,top:0});var De,_e={prefixCls:we,responsive:Se,component:D,invalidate:Re},Fe=v?function(e,t){var n=Pe(e,t);return c.createElement(C.Provider,{key:n,value:(0,o.Z)((0,o.Z)({},_e),{},{order:t,item:e,itemKey:n,registerSize:ze,display:t<=ye})},v(e,t))}:function(e,t){var n=Pe(e,t);return c.createElement(y,(0,r.Z)({},_e,{order:t,key:n,item:e,renderItem:Ie,itemKey:n,registerSize:ze,display:t<=ye}))},We={order:Ke?ye:Number.MAX_SAFE_INTEGER,className:"".concat(we,"-rest"),registerSize:function(e,t){re(t),$(ne)},display:Ke};if(z)z&&(De=c.createElement(C.Provider,{value:(0,o.Z)((0,o.Z)({},_e),We)},z(xe)));else{var Te=N||P;De=c.createElement(y,(0,r.Z)({},_e,We),"function"===typeof Te?Te(xe):Te)}var Xe=c.createElement(k,(0,r.Z)({className:u()(!Re&&s,S),style:Z,ref:t},F),je.map(Fe),Ce?De:null,M&&c.createElement(y,(0,r.Z)({},_e,{responsive:Ze,responsiveDisabled:!Se,order:ye,className:"".concat(we,"-suffix"),registerSize:function(e,t){ce(t)},display:!0,style:ke}),M));return Ze&&(Xe=c.createElement(l.Z,{onResize:function(e,t){B(t.clientWidth)},disabled:!Se},Xe)),Xe}var N=c.forwardRef(I);N.displayName="Overflow",N.Item=S,N.RESPONSIVE=j,N.INVALIDATE=x;var z=N},8184:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return C}});var o=n(2791),i=n(5501);n(632);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function s(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=n(8834),m=n(4304),p=n(474),d=new Map;var v=new p.Z((function(e){e.forEach((function(e){var t,n=e.target;null===(t=d.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function O(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}var E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,o=w(i);function i(){return y(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return this.props.children}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.Component),Z=o.createContext(null);function S(e){var t=e.children,n=e.disabled,r=o.useRef(null),i=o.useRef(null),a=o.useContext(Z),c="function"===typeof t,s=c?t(r):t,u=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),p=!c&&o.isValidElement(s)&&(0,f.Yr)(s),y=p?s.ref:null,g=o.useMemo((function(){return(0,f.sQ)(y,r)}),[y,r]),h=o.useRef(e);h.current=e;var b=o.useCallback((function(e){var t=h.current,n=t.onResize,r=t.data,o=e.getBoundingClientRect(),i=o.width,c=o.height,s=e.offsetWidth,f=e.offsetHeight,m=Math.floor(i),p=Math.floor(c);if(u.current.width!==m||u.current.height!==p||u.current.offsetWidth!==s||u.current.offsetHeight!==f){var d={width:m,height:p,offsetWidth:s,offsetHeight:f};u.current=d;var v=s===Math.round(i)?i:s,y=f===Math.round(c)?c:f,g=l(l({},d),{},{offsetWidth:v,offsetHeight:y});null===a||void 0===a||a(g,e,r),n&&Promise.resolve().then((function(){n(g,e)}))}}),[]);return o.useEffect((function(){var e,t,o=(0,m.Z)(r.current)||(0,m.Z)(i.current);return o&&!n&&(e=o,t=b,d.has(e)||(d.set(e,new Set),v.observe(e)),d.get(e).add(t)),function(){return function(e,t){d.has(e)&&(d.get(e).delete(t),d.get(e).size||(v.unobserve(e),d.delete(e)))}(o,b)}}),[r.current,n]),o.createElement(E,{ref:i},p?o.cloneElement(s,{ref:g}):s)}function R(e){var t=e.children;return("function"===typeof t?[t]:(0,i.Z)(t)).map((function(t,n){var i=(null===t||void 0===t?void 0:t.key)||"".concat("rc-observer-key","-").concat(n);return o.createElement(S,r({},e,{key:i}),t)}))}R.Collection=function(e){var t=e.children,n=e.onBatchResize,r=o.useRef(0),i=o.useRef([]),a=o.useContext(Z),c=o.useCallback((function(e,t,o){r.current+=1;var c=r.current;i.current.push({size:e,element:t,data:o}),Promise.resolve().then((function(){c===r.current&&(null===n||void 0===n||n(i.current),i.current=[])})),null===a||void 0===a||a(e,t,o)}),[n,a]);return o.createElement(Z.Provider,{value:c},t)};var C=R}}]);
//# sourceMappingURL=227.86b961b0.chunk.js.map