(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{7384:function(e,n,t){Promise.resolve().then(t.bind(t,6356)),Promise.resolve().then(t.bind(t,5959)),Promise.resolve().then(t.bind(t,4569)),Promise.resolve().then(t.bind(t,8425)),Promise.resolve().then(t.bind(t,7934))},6356:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var i=t(7437),r=t(9672),s=t(5754),a=t(2706),l=t(7474),o=t(5179),c=t(5509),d=t(3444),u=t(7788),m=t(3410),f=t(8110),x=t(4033),p=t(2265),h=t(1865),g=t(4578);let j=g.z.enum(["Animalia","Plantae","Fungi","Protista","Archaea","Bacteria"]),v=g.z.enum(["True","False"]),b=g.z.object({scientific_name:g.z.string().trim().min(1).transform(e=>null==e?void 0:e.trim()),common_name:g.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),kingdom:j,total_population:g.z.number().int().positive().min(1).nullable(),image:g.z.string().url().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),description:g.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),endangered:v}),N={scientific_name:"",common_name:null,kingdom:"Animalia",total_population:null,image:null,description:null,endangered:"False"};function _(e){let{userId:n}=e,t=(0,x.useRouter)(),[g,_]=(0,p.useState)(!1),y=(0,h.cI)({resolver:(0,f.F)(b),defaultValues:N,mode:"onChange"}),w=async e=>{let i=(0,m.B)(),{error:r}=await i.from("species").insert([{author:n,common_name:e.common_name,description:e.description,kingdom:e.kingdom,scientific_name:e.scientific_name,total_population:e.total_population,image:e.image,endangered:"True"===e.endangered}]);return r?(0,u.Am)({title:"Something went wrong.",description:r.message,variant:"destructive"}):(y.reset(N),_(!1),t.refresh(),(0,u.Am)({title:"New species added!",description:"Successfully added "+e.scientific_name+"."}))};return(0,i.jsxs)(a.Vq,{open:g,onOpenChange:_,children:[(0,i.jsx)(a.hg,{asChild:!0,children:(0,i.jsxs)(s.z,{variant:"secondary",children:[(0,i.jsx)(r.P.add,{className:"mr-3 h-5 w-5"}),"Add Species"]})}),(0,i.jsxs)(a.cZ,{className:"max-h-screen overflow-y-auto sm:max-w-[600px]",children:[(0,i.jsxs)(a.fK,{children:[(0,i.jsx)(a.$N,{children:"Add Species"}),(0,i.jsx)(a.Be,{children:'Add a new species here. Click "Add Species" below when you\'re done.'})]}),(0,i.jsx)(l.l0,{...y,children:(0,i.jsx)("form",{onSubmit:e=>void y.handleSubmit(w)(e),children:(0,i.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,i.jsx)(l.Wi,{control:y.control,name:"scientific_name",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Scientific Name"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{placeholder:"Cavia porcellus",...n})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"common_name",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Common Name"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{value:null!=t?t:"",placeholder:"Guinea pig",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"kingdom",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Kingdom"}),(0,i.jsxs)(c.Ph,{onValueChange:e=>n.onChange(j.parse(e)),value:n.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(c.i4,{children:(0,i.jsx)(c.ki,{placeholder:"Select a kingdom"})})}),(0,i.jsx)(c.Bw,{children:(0,i.jsx)(c.DI,{children:j.options.map((e,n)=>(0,i.jsx)(c.Ql,{value:e,children:e},n))})})]}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"total_population",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Total population"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{type:"number",value:null!=t?t:"",placeholder:"300000",...r,onChange:e=>n.onChange(+e.target.value)})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"endangered",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Endangered"}),(0,i.jsxs)(c.Ph,{onValueChange:e=>n.onChange(e),value:n.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(c.i4,{children:(0,i.jsx)(c.ki,{placeholder:"False"})})}),(0,i.jsx)(c.Bw,{children:(0,i.jsx)(c.DI,{children:v.options.map((e,n)=>(0,i.jsx)(c.Ql,{value:e,children:e},n))})})]}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"image",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Image URL"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{value:null!=t?t:"",placeholder:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/440px-George_the_amazing_guinea_pig.jpg",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:y.control,name:"description",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Description"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(d.g,{value:null!=t?t:"",placeholder:"The guinea pig or domestic guinea pig, also known as the cavy or domestic cavy, is a species of rodent belonging to the genus Cavia in the family Caviidae.",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(s.z,{type:"submit",className:"ml-1 mr-1 flex-auto",children:"Add Species"}),(0,i.jsx)(a.GG,{asChild:!0,children:(0,i.jsx)(s.z,{type:"button",className:"ml-1 mr-1 flex-auto",variant:"secondary",children:"Cancel"})})]})]})})})]})]})}},5959:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var i=t(7437),r=t(9672),s=t(5754),a=t(2706),l=t(7474),o=t(5509),c=t(7788),d=t(3410),u=t(8110),m=t(4033),f=t(2265),x=t(1865),p=t(4578);let h=p.z.enum(["Animalia","Plantae","Fungi","Protista","Archaea","Bacteria"]),g=p.z.object({scientific_name:p.z.string().trim().min(1).transform(e=>null==e?void 0:e.trim()),common_name:p.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),kingdom:h,total_population:p.z.number().int().positive().min(1).nullable(),image:p.z.string().url().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),description:p.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),endangered:p.z.boolean().nullable()}),j={scientific_name:"",common_name:null,kingdom:void 0,total_population:null,image:null,description:null,endangered:null};function v(e){let{userSpecies:n}=e,t=(0,m.useRouter)(),[p,h]=(0,f.useState)(!1),v=(0,x.cI)({resolver:(0,u.F)(g),defaultValues:j,mode:"onChange"}),b=async e=>{let n=(0,d.B)(),{error:i}=await n.from("species").delete().eq("scientific_name",e.scientific_name);return i?(0,c.Am)({title:"Something went wrong.",description:i.message,variant:"destructive"}):(v.reset(j),h(!1),t.refresh(),(0,c.Am)({title:"Species deleted!",description:"Successfully deleted "+e.scientific_name+"."}))};return(0,i.jsxs)(a.Vq,{open:p,onOpenChange:h,children:[(0,i.jsx)(a.hg,{asChild:!0,children:(0,i.jsxs)(s.z,{variant:"secondary",children:[(0,i.jsx)(r.P.add,{className:"mr-3 h-5 w-5"}),"Delete Species"]})}),(0,i.jsxs)(a.cZ,{className:"max-h-screen overflow-y-auto sm:max-w-[600px]",children:[(0,i.jsxs)(a.fK,{children:[(0,i.jsx)(a.$N,{children:"Edit Species"}),(0,i.jsx)(a.Be,{children:'Edit a species you created. Click "Edit Species" below when you\'re done.'})]}),(0,i.jsx)(l.l0,{...v,children:(0,i.jsx)("form",{onSubmit:e=>void v.handleSubmit(b)(e),children:(0,i.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,i.jsx)(l.Wi,{control:v.control,name:"scientific_name",render:e=>{let{field:t}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Scientific Name"}),(0,i.jsxs)(o.Ph,{onValueChange:e=>{let i=n.find(n=>n.scientific_name===e);if(i){var r,s,a,l;v.setValue("scientific_name",i.scientific_name),v.setValue("common_name",null!==(r=i.common_name)&&void 0!==r?r:null),v.setValue("kingdom",i.kingdom),v.setValue("total_population",null!==(s=i.total_population)&&void 0!==s?s:null),v.setValue("image",null!==(a=i.image)&&void 0!==a?a:null),v.setValue("description",null!==(l=i.description)&&void 0!==l?l:null)}t.onChange(e)},value:t.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.i4,{children:(0,i.jsx)(o.ki,{placeholder:"Select a species"})})}),(0,i.jsx)(o.Bw,{children:(0,i.jsx)(o.DI,{children:null==n?void 0:n.map(e=>(0,i.jsx)(o.Ql,{value:e.scientific_name,children:e.scientific_name},e.id))})}),(0,i.jsx)(l.zG,{})]})]})}}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(s.z,{type:"submit",className:"red ml-1 mr-1 flex-auto",children:"Delete Species"}),(0,i.jsx)(a.GG,{asChild:!0,children:(0,i.jsx)(s.z,{type:"button",className:"ml-1 mr-1 flex-auto",variant:"secondary",children:"Cancel"})})]})]})})})]})]})}},4569:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var i=t(7437),r=t(9672),s=t(5754),a=t(2706),l=t(7474),o=t(5179),c=t(5509),d=t(3444),u=t(7788),m=t(3410),f=t(8110),x=t(4033),p=t(2265),h=t(1865),g=t(4578);let j=g.z.enum(["Animalia","Plantae","Fungi","Protista","Archaea","Bacteria"]),v=g.z.enum(["True","False"]),b=g.z.object({scientific_name:g.z.string().trim().min(1).transform(e=>null==e?void 0:e.trim()),common_name:g.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),kingdom:j,total_population:g.z.number().int().positive().min(1).nullable(),image:g.z.string().url().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),description:g.z.string().nullable().transform(e=>e&&""!==e.trim()?e.trim():null),endangered:v}),N={scientific_name:"",common_name:"",kingdom:void 0,total_population:void 0,image:"",description:"",endangered:void 0};function _(e){let{userId:n,userSpecies:t}=e,g=(0,x.useRouter)(),[_,y]=(0,p.useState)(!1),w=(0,h.cI)({resolver:(0,f.F)(b),defaultValues:N,mode:"onChange"}),z=async e=>{let t=(0,m.B)(),{error:i}=await t.from("species").update({author:n,common_name:e.common_name,description:e.description,kingdom:e.kingdom,scientific_name:e.scientific_name,total_population:e.total_population,image:e.image,endangered:"True"===e.endangered}).eq("scientific_name",e.scientific_name);return i?(0,u.Am)({title:"Something went wrong.",description:i.message,variant:"destructive"}):(w.reset(N),y(!1),g.refresh(),(0,u.Am)({title:"Species edited!",description:"Successfully edited "+e.scientific_name+"."}))};return(0,i.jsxs)(a.Vq,{open:_,onOpenChange:y,children:[(0,i.jsx)(a.hg,{asChild:!0,children:(0,i.jsxs)(s.z,{variant:"secondary",children:[(0,i.jsx)(r.P.add,{className:"mr-3 h-5 w-5"}),"Edit Species"]})}),(0,i.jsxs)(a.cZ,{className:"max-h-screen overflow-y-auto sm:max-w-[600px]",children:[(0,i.jsxs)(a.fK,{children:[(0,i.jsx)(a.$N,{children:"Edit Species"}),(0,i.jsx)(a.Be,{children:'Edit a species you created. Click "Edit Species" below when you\'re done.'})]}),(0,i.jsx)(l.l0,{...w,children:(0,i.jsx)("form",{onSubmit:e=>void w.handleSubmit(z)(e),children:(0,i.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,i.jsx)(l.Wi,{control:w.control,name:"scientific_name",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Scientific Name"}),(0,i.jsxs)(c.Ph,{onValueChange:e=>{let i=t.find(n=>n.scientific_name===e);i&&(w.setValue("scientific_name",i.scientific_name),w.setValue("common_name",i.common_name),w.setValue("kingdom",i.kingdom),w.setValue("total_population",i.total_population),w.setValue("image",i.image),w.setValue("description",i.description)),n.onChange(e)},value:n.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(c.i4,{children:(0,i.jsx)(c.ki,{placeholder:"Select a species"})})}),(0,i.jsx)(c.Bw,{children:(0,i.jsx)(c.DI,{children:t.map(e=>(0,i.jsx)(c.Ql,{value:e.scientific_name,children:e.scientific_name},e.id))})}),(0,i.jsx)(l.zG,{})]})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"common_name",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Common Name"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{value:null!=t?t:"",placeholder:"",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"kingdom",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Kingdom"}),(0,i.jsxs)(c.Ph,{onValueChange:e=>n.onChange(e),value:n.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(c.i4,{children:(0,i.jsx)(c.ki,{placeholder:""})})}),(0,i.jsx)(c.Bw,{children:(0,i.jsx)(c.DI,{children:j.options.map((e,n)=>(0,i.jsx)(c.Ql,{value:e,children:e},n))})})]}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"total_population",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Total population"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{type:"number",value:null!=t?t:"",placeholder:"",...r,onChange:e=>n.onChange(+e.target.value)})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"endangered",render:e=>{let{field:n}=e;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Endangered"}),(0,i.jsxs)(c.Ph,{onValueChange:e=>n.onChange(e),value:n.value,children:[(0,i.jsx)(l.NI,{children:(0,i.jsx)(c.i4,{children:(0,i.jsx)(c.ki,{placeholder:""})})}),(0,i.jsx)(c.Bw,{children:(0,i.jsx)(c.DI,{children:v.options.map((e,n)=>(0,i.jsx)(c.Ql,{value:e,children:e},n))})})]}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"image",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Image URL"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(o.I,{value:null!=t?t:"",placeholder:"",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsx)(l.Wi,{control:w.control,name:"description",render:e=>{let{field:n}=e,{value:t,...r}=n;return(0,i.jsxs)(l.xJ,{children:[(0,i.jsx)(l.lX,{children:"Description"}),(0,i.jsx)(l.NI,{children:(0,i.jsx)(d.g,{value:null!=t?t:"",placeholder:"",...r})}),(0,i.jsx)(l.zG,{})]})}}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(s.z,{type:"submit",className:"ml-1 mr-1 flex-auto",children:"Edit Species"}),(0,i.jsx)(a.GG,{asChild:!0,children:(0,i.jsx)(s.z,{type:"button",className:"ml-1 mr-1 flex-auto",variant:"secondary",children:"Cancel"})})]})]})})})]})]})}},8425:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t(7437),r=t(6691),s=t.n(r),a=t(5754),l=t(2706),o=t(2265);function c(e){let{species:n}=e,[t,r]=(0,o.useState)(!1);return(0,i.jsxs)(l.Vq,{open:t,onOpenChange:e=>r(e),children:[(0,i.jsx)(l.hg,{asChild:!0,children:(0,i.jsx)(a.z,{className:"mt-3 w-full",children:"Learn More"})}),(0,i.jsxs)(l.cZ,{className:"p-4",children:[(0,i.jsx)("h3",{className:"text-2xl font-semibold",children:n.scientific_name}),(0,i.jsx)("h4",{className:"text-lg font-light italic",children:n.common_name}),(0,i.jsxs)("p",{children:["Total Population: ",n.total_population]}),(0,i.jsxs)("p",{children:["Kingdom: ",n.kingdom]}),n.endangered&&(0,i.jsx)("p",{children:"Endangered!"})]})]})}function d(e){let{species:n}=e;return(0,i.jsxs)("div",{className:"m-4 w-72 min-w-72 flex-none rounded border-2 p-3 shadow",children:[n.image&&(0,i.jsx)("div",{className:"relative h-40 w-full",children:(0,i.jsx)(s(),{src:n.image,alt:n.scientific_name,fill:!0,style:{objectFit:"cover"}})}),(0,i.jsx)("h3",{className:"mt-3 text-2xl font-semibold",children:n.scientific_name}),(0,i.jsx)("h4",{className:"text-lg font-light italic",children:n.common_name}),(0,i.jsx)("p",{children:n.description?n.description.slice(0,150).trim()+"...":""}),(0,i.jsx)(c,{species:n})]})}},9672:function(e,n,t){"use strict";t.d(n,{P:function(){return S}});var i=t(7437),r=t(5035),s=t(2549),a=t(6264),l=t(1291),o=t(7158),c=t(4737),d=t(6637),u=t(8734),m=t(8438),f=t(9409),x=t(1738),p=t(290),h=t(9883),g=t(2894),j=t(7972),v=t(8291),b=t(5479),N=t(6808),_=t(3239),y=t(3088),w=t(4690),z=t(3039),I=t(2442);let S={logo:r.Z,close:s.Z,spinner:a.Z,chevronLeft:l.Z,chevronRight:o.Z,trash:c.Z,post:d.Z,page:u.Z,media:m.Z,settings:f.Z,billing:x.Z,ellipsis:p.Z,add:h.Z,warning:g.Z,user:j.Z,arrowRight:v.Z,help:b.Z,pizza:N.Z,sun:_.Z,moon:y.Z,laptop:w.Z,gitHub:e=>{let{...n}=e;return(0,i.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...n,children:(0,i.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:z.Z,check:I.Z}},5754:function(e,n,t){"use strict";t.d(n,{d:function(){return o},z:function(){return c}});var i=t(7437),r=t(7256),s=t(6061),a=t(2265),l=t(1657);let o=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,n)=>{let{className:t,variant:s,size:a,asChild:c=!1,...d}=e,u=c?r.g7:"button";return(0,i.jsx)(u,{className:(0,l.cn)(o({variant:s,size:a,className:t})),ref:n,...d})});c.displayName="Button"},2706:function(e,n,t){"use strict";t.d(n,{$N:function(){return p},Be:function(){return h},GG:function(){return u},Vq:function(){return o},cZ:function(){return f},fK:function(){return x},hg:function(){return c}});var i=t(7437),r=t(2265),s=t(8712),a=t(2549),l=t(1657);let o=s.fC,c=s.xz,d=s.h_,u=s.x8,m=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,i.jsx)(s.aV,{ref:n,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});m.displayName=s.aV.displayName;let f=r.forwardRef((e,n)=>{let{className:t,children:r,...o}=e;return(0,i.jsxs)(d,{children:[(0,i.jsx)(m,{}),(0,i.jsxs)(s.VY,{ref:n,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...o,children:[r,(0,i.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,i.jsx)(a.Z,{className:"h-4 w-4"}),(0,i.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=s.VY.displayName;let x=e=>{let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",n),...t})};x.displayName="DialogHeader";let p=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,i.jsx)(s.Dx,{ref:n,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",t),...r})});p.displayName=s.Dx.displayName;let h=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,i.jsx)(s.dk,{ref:n,className:(0,l.cn)("text-sm text-muted-foreground",t),...r})});h.displayName=s.dk.displayName},7474:function(e,n,t){"use strict";t.d(n,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return p},pf:function(){return g},xJ:function(){return x},zG:function(){return j}});var i=t(7437),r=t(7256),s=t(2265),a=t(1865),l=t(9842),o=t(1657);let c=a.RV,d=s.createContext({}),u=e=>{let{...n}=e;return(0,i.jsx)(d.Provider,{value:{name:n.name},children:(0,i.jsx)(a.Qr,{...n})})},m=()=>{let e=s.useContext(d),n=s.useContext(f),{getFieldState:t,formState:i}=(0,a.Gc)(),r=t(e.name,i);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=n;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...r}},f=s.createContext({}),x=s.forwardRef((e,n)=>{let{className:t,...r}=e,a=s.useId();return(0,i.jsx)(f.Provider,{value:{id:a},children:(0,i.jsx)("div",{ref:n,className:(0,o.cn)("space-y-2",t),...r})})});x.displayName="FormItem";let p=s.forwardRef((e,n)=>{let{className:t,...r}=e,{error:s,formItemId:a}=m();return(0,i.jsx)(l._,{ref:n,className:(0,o.cn)(s&&"text-destructive",t),htmlFor:a,...r})});p.displayName="FormLabel";let h=s.forwardRef((e,n)=>{let{...t}=e,{error:s,formItemId:a,formDescriptionId:l,formMessageId:o}=m();return(0,i.jsx)(r.g7,{ref:n,id:a,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...t})});h.displayName="FormControl";let g=s.forwardRef((e,n)=>{let{className:t,...r}=e,{formDescriptionId:s}=m();return(0,i.jsx)("p",{ref:n,id:s,className:(0,o.cn)("text-sm text-muted-foreground",t),...r})});g.displayName="FormDescription";let j=s.forwardRef((e,n)=>{let{className:t,children:r,...s}=e,{error:a,formMessageId:l}=m(),c=a?String(null==a?void 0:a.message):r;return c?(0,i.jsx)("p",{ref:n,id:l,className:(0,o.cn)("text-sm font-medium text-destructive",t),...s,children:c}):null});j.displayName="FormMessage"},5179:function(e,n,t){"use strict";t.d(n,{I:function(){return a}});var i=t(7437),r=t(2265),s=t(1657);let a=r.forwardRef((e,n)=>{let{className:t,type:r,...a}=e;return(0,i.jsx)("input",{type:r,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...a})});a.displayName="Input"},9842:function(e,n,t){"use strict";t.d(n,{_:function(){return c}});var i=t(7437),r=t(6743),s=t(6061),a=t(2265),l=t(1657);let o=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,i.jsx)(r.f,{ref:n,className:(0,l.cn)(o(),t),...s})});c.displayName=r.f.displayName},5509:function(e,n,t){"use strict";t.d(n,{Bw:function(){return f},DI:function(){return d},Ph:function(){return c},Ql:function(){return x},i4:function(){return m},ki:function(){return u}});var i=t(7437),r=t(663),s=t(3523),a=t(2442),l=t(2265),o=t(1657);let c=r.fC,d=r.ZA,u=r.B4,m=l.forwardRef((e,n)=>{let{className:t,children:a,...l}=e;return(0,i.jsxs)(r.xz,{ref:n,className:(0,o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...l,children:[a,(0,i.jsx)(r.JO,{asChild:!0,children:(0,i.jsx)(s.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=r.xz.displayName;let f=l.forwardRef((e,n)=>{let{className:t,children:s,position:a="popper",...l}=e;return(0,i.jsx)(r.h_,{children:(0,i.jsx)(r.VY,{ref:n,className:(0,o.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===a&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:a,...l,children:(0,i.jsx)(r.l_,{className:(0,o.cn)("p-1","popper"===a&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});f.displayName=r.VY.displayName,l.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,i.jsx)(r.__,{ref:n,className:(0,o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...s})}).displayName=r.__.displayName;let x=l.forwardRef((e,n)=>{let{className:t,children:s,...l}=e;return(0,i.jsxs)(r.ck,{ref:n,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l,children:[(0,i.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,i.jsx)(r.wU,{children:(0,i.jsx)(a.Z,{className:"h-4 w-4"})})}),(0,i.jsx)(r.eT,{children:s})]})});x.displayName=r.ck.displayName,l.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,i.jsx)(r.Z0,{ref:n,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",t),...s})}).displayName=r.Z0.displayName},7934:function(e,n,t){"use strict";t.r(n),t.d(n,{Separator:function(){return l}});var i=t(7437),r=t(6823),s=t(2265),a=t(1657);let l=s.forwardRef((e,n)=>{let{className:t,orientation:s="horizontal",decorative:l=!0,...o}=e;return(0,i.jsx)(r.f,{ref:n,decorative:l,orientation:s,className:(0,a.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",t),...o})});l.displayName=r.f.displayName},3444:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var i=t(7437),r=t(2265),s=t(1657);let a=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,i.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...r})});a.displayName="Textarea"},7788:function(e,n,t){"use strict";t.d(n,{Am:function(){return u},pm:function(){return m}});var i=t(2265);let r=0,s=new Map,a=e=>{if(s.has(e))return;let n=setTimeout(()=>{s.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,n)},l=(e,n)=>{switch(n.type){case"ADD_TOAST":return{...e,toasts:[n.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===n.toast.id?{...e,...n.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=n;return t?a(t):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===n.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==n.toastId)}}},o=[],c={toasts:[]};function d(e){c=l(c,e),o.forEach(e=>{e(c)})}function u(e){let{...n}=e,t=(r=(r+1)%Number.MAX_VALUE).toString(),i=()=>d({type:"DISMISS_TOAST",toastId:t});return d({type:"ADD_TOAST",toast:{...n,id:t,open:!0,onOpenChange:e=>{e||i()}}}),{id:t,dismiss:i,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function m(){let[e,n]=i.useState(c);return i.useEffect(()=>(o.push(n),()=>{let e=o.indexOf(n);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},3410:function(e,n,t){"use strict";t.d(n,{B:function(){return o}});var i=t(873),r=t(4578),s=t(2601);let a=(0,i.D)({server:{NODE_ENV:r.z.enum(["development","test","production"])},client:{NEXT_PUBLIC_SUPABASE_URL:r.z.string().url(),NEXT_PUBLIC_SUPABASE_ANON_KEY:r.z.string()},runtimeEnv:{NODE_ENV:"production",NEXT_PUBLIC_SUPABASE_URL:"https://twunrudypmcizrjswrby.supabase.co",NEXT_PUBLIC_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3dW5ydWR5cG1jaXpyanN3cmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwMTQwMzksImV4cCI6MjAyMjU5MDAzOX0.ToGEmSGAZWa5WPFggXx9Z5rbQJGJhZ8oXq6vdQOEDnI"},skipValidation:!!s.env.SKIP_ENV_VALIDATION});var l=t(7710);let o=()=>(0,l.AY)(a.NEXT_PUBLIC_SUPABASE_URL,a.NEXT_PUBLIC_SUPABASE_ANON_KEY)},1657:function(e,n,t){"use strict";t.d(n,{cn:function(){return s}});var i=t(7042),r=t(4769);function s(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.m6)((0,i.W)(n))}}},function(e){e.O(0,[819,811,53,760,822,971,458,744],function(){return e(e.s=7384)}),_N_E=e.O()}]);