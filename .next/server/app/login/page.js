(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},1218:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),i=r(9108),a=r(2563),n=r.n(a),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,526)),"/Users/dennycao/Projects/s24-eng-r2-deliverable/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8526)),"/Users/dennycao/Projects/s24-eng-r2-deliverable/app/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,7984)),"/Users/dennycao/Projects/s24-eng-r2-deliverable/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"/Users/dennycao/Projects/s24-eng-r2-deliverable/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/dennycao/Projects/s24-eng-r2-deliverable/app/login/page.tsx"],u="/login/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3462:(e,t,r)=>{Promise.resolve().then(r.bind(r,9274))},9274:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(5344),i=r(907),a=r(6212),n=r(2549),o=r(6448),l=r(5092),c=r(5024),d=r(1626),u=r(5453),p=r(3729),m=r(708),x=r(9709);let g=x.z.object({email:x.z.string().email()});function f({className:e,...t}){let{register:r,handleSubmit:x,formState:{errors:f}}=(0,m.cI)({resolver:(0,u.F)(g)}),[h,b]=(0,p.useState)(!1),v=(0,c.B)(),y=async e=>{b(!0);let{error:t}=await v.auth.signInWithOtp({email:e.email.toLowerCase(),options:{emailRedirectTo:`${location.origin}/auth/callback`}});return(b(!1),t)?(0,l.Am)({title:"Something went wrong.",description:t.message,variant:"destructive"}):(0,l.Am)({title:"Check your email",description:"We sent you a login link. Be sure to check your spam too."})};return s.jsx("div",{className:(0,d.cn)("grid gap-6",e),...t,children:s.jsx("form",{onSubmit:e=>void x(y)(e),children:(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[s.jsx(o._,{className:"sr-only",htmlFor:"email",children:"Email"}),s.jsx(n.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:h,...r("email")}),f?.email&&s.jsx("p",{className:"px-1 text-xs text-red-600",children:f.email.message})]}),(0,s.jsxs)(a.z,{disabled:h,children:[h&&s.jsx(i.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Sign In with Email"]})]})})})}},2549:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var s=r(5344),i=r(3729),a=r(1626);let n=i.forwardRef(({className:e,type:t,...r},i)=>s.jsx("input",{type:t,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:i,...r}));n.displayName="Input"},6448:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var s=r(5344),i=r(4217),a=r(9247),n=r(3729),o=r(1626);let l=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef(({className:e,...t},r)=>s.jsx(i.f,{ref:r,className:(0,o.cn)(l(),e),...t}));c.displayName=i.f.displayName},526:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5036),i=r(627),a=r(4551);let n=(0,r(6843).createProxy)(String.raw`/Users/dennycao/Projects/s24-eng-r2-deliverable/app/login/user-auth-form.tsx`),{__esModule:o,$$typeof:l}=n,c=n.default;async function d(){let e=(0,i.f)(),{data:{session:t}}=await e.auth.getSession();return t&&(0,a.redirect)("/species"),(0,s.jsxs)("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[s.jsx("h1",{className:"text-2xl font-semibold tracking-tight",children:"Sign Up / Log In"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter your email below to sign in or create a new account."})]}),s.jsx(c,{})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,360,768,551,982,981],()=>r(1218));module.exports=s})();