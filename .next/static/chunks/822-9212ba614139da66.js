(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{3523:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return h}});let r=n(1024),o=n(8533)._(n(2265)),l=r._(n(4887)),i=r._(n(2251)),a=n(8630),u=n(6906),c=n(337);n(6184);let d=n(6993),s=r._(n(536)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,o,l){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){let[t,n]=o.version.split(".",2),r=parseInt(t,10),l=parseInt(n,10);return r>18||18===r&&l>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:l,height:i,width:a,decoding:u,className:c,style:d,fetchPriority:s,placeholder:f,loading:g,unoptimized:v,fill:h,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:E,onLoad:C,onError:_,...S}=e;return o.default.createElement("img",{...S,...m(s),loading:g,width:a,height:i,decoding:u,"data-nimg":h?"fill":"1",className:c,style:d,sizes:l,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&p(e,f,w,y,b,v))},[n,f,w,y,b,_,v,t]),onLoad:e=>{p(e.currentTarget,f,w,y,b,v)},onError:e=>{E(!0),"empty"!==f&&b(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):o.default.createElement(i.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let h=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),l=(0,o.useMemo)(()=>{let e=f||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:i,onLoadingComplete:p}=e,m=(0,o.useRef)(i);(0,o.useEffect)(()=>{m.current=i},[i]);let h=(0,o.useRef)(p);(0,o.useEffect)(()=>{h.current=p},[p]);let[w,y]=(0,o.useState)(!1),[b,E]=(0,o.useState)(!1),{props:C,meta:_}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:l,blurComplete:w,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...C,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:E,ref:t}),_.priority?o.default.createElement(v,{isAppRouter:!n,imgAttributes:C}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(1024)._(n(2265)).default.createContext({})},3044:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(6184);let r=n(7160),o=n(6906);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,c,{src:d,sizes:s,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:v,width:h,height:w,fill:y=!1,style:b,onLoad:E,onLoadingComplete:C,placeholder:_="empty",blurDataURL:S,fetchPriority:x,layout:P,objectFit:M,objectPosition:D,lazyBoundary:R,lazyRoot:O,...I}=e,{imgConf:k,showAltText:T,blurComplete:A,defaultLoader:j}=t,V=k||o.imageConfigDefault;if("allSizes"in V)a=V;else{let e=[...V.deviceSizes,...V.imageSizes].sort((e,t)=>e-t),t=V.deviceSizes.sort((e,t)=>e-t);a={...V,allSizes:e,deviceSizes:t}}let z=I.loader||j;delete I.loader,delete I.srcSet;let W="__next_img_default"in z;if(W){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!s&&(s=t)}let Z="",F=i(h),L=i(w);if("object"==typeof(n=d)&&(l(n)||void 0!==n.src)){let e=l(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,Z=e.src,!y){if(F||L){if(F&&!L){let t=F/e.width;L=Math.round(e.height*t)}else if(!F&&L){let t=L/e.height;F=Math.round(e.width*t)}}else F=e.width,L=e.height}}let N=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:Z)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,N=!1),a.unoptimized&&(f=!0),W&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let B=i(v),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:D}:{},T?{}:{color:"transparent"},b),U=A||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:L,blurWidth:u,blurHeight:c,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+_+'")',K=U?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:i,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,i),d=u.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:l,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:n,quality:l,width:u[d]})}}({config:a,src:d,unoptimized:f,width:F,quality:B,sizes:s,loader:z});return{props:{...I,loading:N?"lazy":m,fetchPriority:x,width:F,height:L,decoding:"async",className:g,style:{...H,...K},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:p,placeholder:_,fill:y}}}},2251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return p}});let r=n(1024),o=n(8533)._(n(2265)),l=r._(n(7392)),i=n(2595),a=n(3634),u=n(3044);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let s=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=s.length;e<t;e++){let t=s[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!i)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let p=function(e){let{children:t}=e,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l,objectFit:i}=e,a=r?40*r:t,u=o?40*o:n,c=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(1024)._(n(2265)),o=n(6906),l=r.default.createContext(o.imageConfigDefault)},6906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return u},default:function(){return c}});let r=n(1024),o=n(8630),l=n(6184),i=n(1749),a=r._(n(536)),u=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=i.Image},536:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(2265),o=r.useLayoutEffect,l=r.useEffect;function i(e){let{headManager:t,reduceComponentsToState:n}=e;function i(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6184:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6691:function(e,t,n){e.exports=n(7447)},8712:function(e,t,n){"use strict";n.d(t,{Dx:function(){return G},VY:function(){return q},aV:function(){return K},dk:function(){return Y},fC:function(){return B},h_:function(){return U},x8:function(){return $},xz:function(){return H}});var r=n(3428),o=n(2265),l=n(5744),i=n(2210),a=n(6989),u=n(966),c=n(3763),d=n(9249),s=n(2759),f=n(2730),p=n(5606),m=n(9381),g=n(1244),v=n(3386),h=n(5859),w=n(7256);let y="Dialog",[b,E]=(0,a.b)(y),[C,_]=b(y),S=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=_("DialogTrigger",n),c=(0,i.e)(t,u.triggerRef);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":F(u.open)},a,{ref:c,onClick:(0,l.M)(e.onClick,u.onOpenToggle)}))}),x="DialogPortal",[P,M]=b(x,{forceMount:void 0}),D="DialogOverlay",R=(0,o.forwardRef)((e,t)=>{let n=M(D,e.__scopeDialog),{forceMount:l=n.forceMount,...i}=e,a=_(D,e.__scopeDialog);return a.modal?(0,o.createElement)(p.z,{present:l||a.open},(0,o.createElement)(O,(0,r.Z)({},i,{ref:t}))):null}),O=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,i=_(D,n);return(0,o.createElement)(v.Z,{as:w.g7,allowPinchZoom:!0,shards:[i.contentRef]},(0,o.createElement)(m.WV.div,(0,r.Z)({"data-state":F(i.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),I="DialogContent",k=(0,o.forwardRef)((e,t)=>{let n=M(I,e.__scopeDialog),{forceMount:l=n.forceMount,...i}=e,a=_(I,e.__scopeDialog);return(0,o.createElement)(p.z,{present:l||a.open},a.modal?(0,o.createElement)(T,(0,r.Z)({},i,{ref:t})):(0,o.createElement)(A,(0,r.Z)({},i,{ref:t})))}),T=(0,o.forwardRef)((e,t)=>{let n=_(I,e.__scopeDialog),a=(0,o.useRef)(null),u=(0,i.e)(t,n.contentRef,a);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,h.Ry)(e)},[]),(0,o.createElement)(j,(0,r.Z)({},e,{ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),A=(0,o.forwardRef)((e,t)=>{let n=_(I,e.__scopeDialog),l=(0,o.useRef)(!1),i=(0,o.useRef)(!1);return(0,o.createElement)(j,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),l.current=!1,i.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let a=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}}))}),j=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:a,onCloseAutoFocus:u,...c}=e,f=_(I,n),p=(0,o.useRef)(null),m=(0,i.e)(t,p);return(0,g.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:a,onUnmountAutoFocus:u},(0,o.createElement)(d.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":F(f.open)},c,{ref:m,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),V="DialogTitle",z=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,i=_(V,n);return(0,o.createElement)(m.WV.h2,(0,r.Z)({id:i.titleId},l,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,i=_("DialogDescription",n);return(0,o.createElement)(m.WV.p,(0,r.Z)({id:i.descriptionId},l,{ref:t}))}),Z=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...i}=e,a=_("DialogClose",n);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button"},i,{ref:t,onClick:(0,l.M)(e.onClick,()=>a.onOpenChange(!1))}))});function F(e){return e?"open":"closed"}let[L,N]=(0,a.k)("DialogTitleWarning",{contentName:I,titleName:V,docsSlug:"dialog"}),B=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:l,onOpenChange:i,modal:a=!0}=e,d=(0,o.useRef)(null),s=(0,o.useRef)(null),[f=!1,p]=(0,c.T)({prop:r,defaultProp:l,onChange:i});return(0,o.createElement)(C,{scope:t,triggerRef:d,contentRef:s,contentId:(0,u.M)(),titleId:(0,u.M)(),descriptionId:(0,u.M)(),open:f,onOpenChange:p,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p]),modal:a},n)},H=S,U=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:l}=e,i=_(x,t);return(0,o.createElement)(P,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(p.z,{present:n||i.open},(0,o.createElement)(f.h,{asChild:!0,container:l},e))))},K=R,q=k,G=z,Y=W,$=Z},663:function(e,t,n){"use strict";n.d(t,{VY:function(){return eb},ZA:function(){return eC},JO:function(){return ew},ck:function(){return eS},wU:function(){return eP},eT:function(){return ex},__:function(){return e_},h_:function(){return ey},fC:function(){return eg},Z0:function(){return eM},xz:function(){return ev},B4:function(){return eh},l_:function(){return eE}});var r=n(3428),o=n(2265),l=n(4887);function i(e,[t,n]){return Math.min(n,Math.max(t,e))}var a=n(5744),u=n(7733),c=n(2210),d=n(6989),s=n(5400),f=n(9249),p=n(1244),m=n(2759),g=n(966),v=n(7649),h=n(2730),w=n(9381),y=n(7256),b=n(6459),E=n(3763),C=n(5655),_=n(8281),S=n(5859),x=n(3386);let P=[" ","Enter","ArrowUp","ArrowDown"],M=[" ","Enter"],D="Select",[R,O,I]=(0,u.B)(D),[k,T]=(0,d.b)(D,[I,v.D7]),A=(0,v.D7)(),[j,V]=k(D),[z,W]=k(D),Z=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:l=!1,...i}=e,u=A(n),d=V("SelectTrigger",n),s=d.disabled||l,f=(0,c.e)(t,d.onTriggerChange),p=O(n),[m,g,h]=ep(e=>{let t=p().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=em(t,e,n);void 0!==r&&d.onValueChange(r.value)}),y=()=>{s||(d.onOpenChange(!0),h())};return(0,o.createElement)(v.ee,(0,r.Z)({asChild:!0},u),(0,o.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":es(d.value)?"":void 0},i,{ref:f,onClick:(0,a.M)(i.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,a.M)(i.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(y(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,a.M)(i.onKeyDown,e=>{let t=""!==m.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||g(e.key),(!t||" "!==e.key)&&P.includes(e.key)&&(y(),e.preventDefault())})})))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:l,style:i,children:a,placeholder:u="",...d}=e,s=V("SelectValue",n),{onValueNodeHasChildrenChange:f}=s,p=void 0!==a,m=(0,c.e)(t,s.onValueNodeChange);return(0,C.b)(()=>{f(p)},[f,p]),(0,o.createElement)(w.WV.span,(0,r.Z)({},d,{ref:m,style:{pointerEvents:"none"}}),es(s.value)?(0,o.createElement)(o.Fragment,null,u):a)}),L=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,children:l,...i}=e;return(0,o.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},i,{ref:t}),l||"▼")}),N="SelectContent",B=(0,o.forwardRef)((e,t)=>{let n=V(N,e.__scopeSelect),[i,a]=(0,o.useState)();return((0,C.b)(()=>{a(new DocumentFragment)},[]),n.open)?(0,o.createElement)(K,(0,r.Z)({},e,{ref:t})):i?(0,l.createPortal)((0,o.createElement)(H,{scope:e.__scopeSelect},(0,o.createElement)(R.Slot,{scope:e.__scopeSelect},(0,o.createElement)("div",null,e.children))),i):null}),[H,U]=k(N),K=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,position:l="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:u,onPointerDownOutside:d,side:s,sideOffset:g,align:v,alignOffset:h,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:C,hideWhenDetached:_,avoidCollisions:P,...M}=e,D=V(N,n),[R,I]=(0,o.useState)(null),[k,T]=(0,o.useState)(null),A=(0,c.e)(t,e=>I(e)),[j,z]=(0,o.useState)(null),[W,Z]=(0,o.useState)(null),F=O(n),[L,B]=(0,o.useState)(!1),U=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(R)return(0,S.Ry)(R)},[R]),(0,p.EW)();let K=(0,o.useCallback)(e=>{let[t,...n]=F().map(e=>e.ref.current),[r]=n.slice(-1),o=document.activeElement;for(let n of e)if(n===o||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&k&&(k.scrollTop=0),n===r&&k&&(k.scrollTop=k.scrollHeight),null==n||n.focus(),document.activeElement!==o))return},[F,k]),Y=(0,o.useCallback)(()=>K([j,R]),[K,j,R]);(0,o.useEffect)(()=>{L&&Y()},[L,Y]);let{onOpenChange:$,triggerPointerDownPosRef:X}=D;(0,o.useEffect)(()=>{if(R){let e={x:0,y:0},t=t=>{var n,r,o,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=X.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(l=X.current)||void 0===l?void 0:l.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():R.contains(n.target)||$(!1),document.removeEventListener("pointermove",t),X.current=null};return null!==X.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[R,$,X]),(0,o.useEffect)(()=>{let e=()=>$(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[$]);let[J,Q]=ep(e=>{let t=F().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=em(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,o.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==D.value&&D.value===t||r)&&(z(e),r&&(U.current=!0))},[D.value]),et=(0,o.useCallback)(()=>null==R?void 0:R.focus(),[R]),en=(0,o.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==D.value&&D.value===t||r)&&Z(e)},[D.value]),er="popper"===l?G:q;return(0,o.createElement)(H,{scope:n,content:R,viewport:k,onViewportChange:T,itemRefCallback:ee,selectedItem:j,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:Y,selectedItemText:W,position:l,isPositioned:L,searchRef:J},(0,o.createElement)(x.Z,{as:y.g7,allowPinchZoom:!0},(0,o.createElement)(m.M,{asChild:!0,trapped:D.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.M)(i,e=>{var t;null===(t=D.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>D.onOpenChange(!1)},(0,o.createElement)(er,(0,r.Z)({role:"listbox",id:D.contentId,"data-state":D.open?"open":"closed",dir:D.dir,onContextMenu:e=>e.preventDefault()},M,er===G?{side:s,sideOffset:g,align:v,alignOffset:h,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:C,hideWhenDetached:_,avoidCollisions:P}:{},{onPlaced:()=>B(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",...M.style},onKeyDown:(0,a.M)(M.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=F().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>K(t)),e.preventDefault()}})}))))))}),q=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:l,...a}=e,u=V(N,n),d=U(N,n),[s,f]=(0,o.useState)(null),[p,m]=(0,o.useState)(null),g=(0,c.e)(t,e=>m(e)),v=O(n),h=(0,o.useRef)(!1),y=(0,o.useRef)(!0),{viewport:b,selectedItem:E,selectedItemText:_,focusSelectedItem:S}=d,x=(0,o.useCallback)(()=>{if(u.trigger&&u.valueNode&&s&&p&&b&&E&&_){let e=u.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),n=u.valueNode.getBoundingClientRect(),r=_.getBoundingClientRect();if("rtl"!==u.dir){let o=r.left-t.left,l=n.left-o,a=e.left-l,u=e.width+a,c=Math.max(u,t.width),d=i(l,[10,window.innerWidth-10-c]);s.style.minWidth=u+"px",s.style.left=d+"px"}else{let o=t.right-r.right,l=window.innerWidth-n.right-o,a=window.innerWidth-e.right-l,u=e.width+a,c=Math.max(u,t.width),d=i(l,[10,window.innerWidth-10-c]);s.style.minWidth=u+"px",s.style.right=d+"px"}let o=v(),a=window.innerHeight-20,c=b.scrollHeight,d=window.getComputedStyle(p),f=parseInt(d.borderTopWidth,10),m=parseInt(d.paddingTop,10),g=parseInt(d.borderBottomWidth,10),w=f+m+c+parseInt(d.paddingBottom,10)+g,y=Math.min(5*E.offsetHeight,w),C=window.getComputedStyle(b),S=parseInt(C.paddingTop,10),x=parseInt(C.paddingBottom,10),P=e.top+e.height/2-10,M=E.offsetHeight/2,D=f+m+(E.offsetTop+M);if(D<=P){let e=E===o[o.length-1].ref.current;s.style.bottom="0px";let t=p.clientHeight-b.offsetTop-b.offsetHeight;s.style.height=D+Math.max(a-P,M+(e?x:0)+t+g)+"px"}else{let e=E===o[0].ref.current;s.style.top="0px";let t=Math.max(P,f+b.offsetTop+(e?S:0)+M);s.style.height=t+(w-D)+"px",b.scrollTop=D-P+b.offsetTop}s.style.margin="10px 0",s.style.minHeight=y+"px",s.style.maxHeight=a+"px",null==l||l(),requestAnimationFrame(()=>h.current=!0)}},[v,u.trigger,u.valueNode,s,p,b,E,_,u.dir,l]);(0,C.b)(()=>x(),[x]);let[P,M]=(0,o.useState)();(0,C.b)(()=>{p&&M(window.getComputedStyle(p).zIndex)},[p]);let D=(0,o.useCallback)(e=>{e&&!0===y.current&&(x(),null==S||S(),y.current=!1)},[x,S]);return(0,o.createElement)(Y,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:h,onScrollButtonChange:D},(0,o.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:P}},(0,o.createElement)(w.WV.div,(0,r.Z)({},a,{ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}}))))}),G=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,align:l="start",collisionPadding:i=10,...a}=e,u=A(n);return(0,o.createElement)(v.VY,(0,r.Z)({},u,a,{ref:t,align:l,collisionPadding:i,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Y,$]=k(N,{}),X="SelectViewport",J=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,i=U(X,n),u=$(X,n),d=(0,c.e)(t,i.onViewportChange),s=(0,o.useRef)(0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(R.Slot,{scope:n},(0,o.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},l,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...l.style},onScroll:(0,a.M)(l.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=u;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,o=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(o<r){let l=o+e,i=Math.min(r,l),a=l-i;n.style.height=i+"px","0px"===n.style.bottom&&(t.scrollTop=a>0?a:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[Q,ee]=k("SelectGroup"),et=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,i=(0,g.M)();return(0,o.createElement)(Q,{scope:n,id:i},(0,o.createElement)(w.WV.div,(0,r.Z)({role:"group","aria-labelledby":i},l,{ref:t})))}),en=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,i=ee("SelectLabel",n);return(0,o.createElement)(w.WV.div,(0,r.Z)({id:i.id},l,{ref:t}))}),er="SelectItem",[eo,el]=k(er),ei=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,value:l,disabled:i=!1,textValue:u,...d}=e,s=V(er,n),f=U(er,n),p=s.value===l,[m,v]=(0,o.useState)(null!=u?u:""),[h,y]=(0,o.useState)(!1),b=(0,c.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,l,i)}),E=(0,g.M)(),C=()=>{i||(s.onValueChange(l),s.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,o.createElement)(eo,{scope:n,value:l,disabled:i,textId:E,isSelected:p,onItemTextChange:(0,o.useCallback)(e=>{v(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,o.createElement)(R.ItemSlot,{scope:n,value:l,disabled:i,textValue:m},(0,o.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":E,"data-highlighted":h?"":void 0,"aria-selected":p&&h,"data-state":p?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1},d,{ref:b,onFocus:(0,a.M)(d.onFocus,()=>y(!0)),onBlur:(0,a.M)(d.onBlur,()=>y(!1)),onPointerUp:(0,a.M)(d.onPointerUp,C),onPointerMove:(0,a.M)(d.onPointerMove,e=>{if(i){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,a.M)(d.onKeyDown,e=>{var t;(null===(t=f.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(M.includes(e.key)&&C()," "===e.key&&e.preventDefault())})}))))}),ea="SelectItemText",eu=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:i,style:a,...u}=e,d=V(ea,n),s=U(ea,n),f=el(ea,n),p=W(ea,n),[m,g]=(0,o.useState)(null),v=(0,c.e)(t,e=>g(e),f.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,f.value,f.disabled)}),h=null==m?void 0:m.textContent,y=(0,o.useMemo)(()=>(0,o.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},h),[f.disabled,f.value,h]),{onNativeOptionAdd:b,onNativeOptionRemove:E}=p;return(0,C.b)(()=>(b(y),()=>E(y)),[b,E,y]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(w.WV.span,(0,r.Z)({id:f.textId},u,{ref:v})),f.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,l.createPortal)(u.children,d.valueNode):null)}),ec=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e;return el("SelectItemIndicator",n).isSelected?(0,o.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},l,{ref:t})):null}),ed=((e,t)=>{let{__scopeSelect:n,onAutoScroll:l,...i}=e,u=U("SelectScrollButton",n),c=(0,o.useRef)(null),d=O(n),s=(0,o.useCallback)(()=>{null!==c.current&&(window.clearInterval(c.current),c.current=null)},[]);return(0,o.useEffect)(()=>()=>s(),[s]),(0,C.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,o.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},i,{ref:t,style:{flexShrink:0,...i.style},onPointerDown:(0,a.M)(i.onPointerDown,()=>{null===c.current&&(c.current=window.setInterval(l,50))}),onPointerMove:(0,a.M)(i.onPointerMove,()=>{var e;null===(e=u.onItemLeave)||void 0===e||e.call(u),null===c.current&&(c.current=window.setInterval(l,50))}),onPointerLeave:(0,a.M)(i.onPointerLeave,()=>{s()})}))},(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e;return(0,o.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},l,{ref:t}))}));function es(e){return""===e||void 0===e}let ef=(0,o.forwardRef)((e,t)=>{let{value:n,...l}=e,i=(0,o.useRef)(null),a=(0,c.e)(t,i),u=function(e){let t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(n);return(0,o.useEffect)(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(u!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[u,n]),(0,o.createElement)(_.T,{asChild:!0},(0,o.createElement)("select",(0,r.Z)({},l,{ref:a,defaultValue:n})))});function ep(e){let t=(0,b.W)(e),n=(0,o.useRef)(""),r=(0,o.useRef)(0),l=(0,o.useCallback)(e=>{let o=n.current+e;t(o),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(o)},[t]),i=(0,o.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,o.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,l,i]}function em(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,l=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(l=l.filter(e=>e!==n));let i=l.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return i!==n?i:void 0}ef.displayName="BubbleSelect";let eg=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:l,onOpenChange:i,value:a,defaultValue:u,onValueChange:c,dir:d,name:f,autoComplete:p,disabled:m,required:h}=e,w=A(t),[y,b]=(0,o.useState)(null),[C,_]=(0,o.useState)(null),[S,x]=(0,o.useState)(!1),P=(0,s.gm)(d),[M=!1,D]=(0,E.T)({prop:r,defaultProp:l,onChange:i}),[O,I]=(0,E.T)({prop:a,defaultProp:u,onChange:c}),k=(0,o.useRef)(null),T=!y||!!y.closest("form"),[V,W]=(0,o.useState)(new Set),Z=Array.from(V).map(e=>e.props.value).join(";");return(0,o.createElement)(v.fC,w,(0,o.createElement)(j,{required:h,scope:t,trigger:y,onTriggerChange:b,valueNode:C,onValueNodeChange:_,valueNodeHasChildren:S,onValueNodeHasChildrenChange:x,contentId:(0,g.M)(),value:O,onValueChange:I,open:M,onOpenChange:D,dir:P,triggerPointerDownPosRef:k,disabled:m},(0,o.createElement)(R.Provider,{scope:t},(0,o.createElement)(z,{scope:e.__scopeSelect,onNativeOptionAdd:(0,o.useCallback)(e=>{W(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,o.useCallback)(e=>{W(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),T?(0,o.createElement)(ef,{key:Z,"aria-hidden":!0,required:h,tabIndex:-1,name:f,autoComplete:p,value:O,onChange:e=>I(e.target.value),disabled:m},void 0===O?(0,o.createElement)("option",{value:""}):null,Array.from(V)):null))},ev=Z,eh=F,ew=L,ey=e=>(0,o.createElement)(h.h,(0,r.Z)({asChild:!0},e)),eb=B,eE=J,eC=et,e_=en,eS=ei,ex=eu,eP=ec,eM=ed},6823:function(e,t,n){"use strict";n.d(t,{f:function(){return d}});var r=n(3428),o=n(2265),l=n(9381);let i="horizontal",a=["horizontal","vertical"],u=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:a=i,...u}=e,d=c(a)?a:i;return(0,o.createElement)(l.WV.div,(0,r.Z)({"data-orientation":d},n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},u,{ref:t}))});function c(e){return a.includes(e)}u.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let d=u}}]);