"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[8457],{48457:($,B,s)=>{s.d(B,{ProtectedEditView:()=>Z,w:()=>V});var e=s(92132),D=s(21272),L=s(38413),p=s(4198),I=s(83997),K=s(94061),u=s(30893),T=s(90151),t=s(68074),M=s(55356),E=s(85963),a=s(2291),G=s(54514),Y=s(61535),y=s(54894),j=s(17703),g=s(12083),R=s(93805),x=s(78454),v=s(99831),O=s(5275),as=s(15126),rs=s(63299),os=s(67014),_s=s(59080),is=s(79275),Es=s(14718),ds=s(82437),ls=s(5790),Ts=s(35223),Ms=s(5409),Ps=s(74930),Ds=s(2600),Os=s(48940),ms=s(41286),fs=s(51187),cs=s(56336),gs=s(39404),vs=s(58692),hs=s(54257),As=s(501),Cs=s(57646),Ls=s(23120),ps=s(44414),Is=s(25962),Rs=s(14664),Us=s(42588),Ws=s(90325),Bs=s(62785),Ks=s(87443),us=s(41032),ys=s(22957),js=s(93179),xs=s(73055),ks=s(15747),Ss=s(85306),Vs=s(77965),Fs=s(26509),zs=s(84624),Ns=s(71210),$s=s(32058),Gs=s(81185),Ys=s(82261);const Q=g.Ik().shape({name:g.Yj().max(100).required(a.iW.required),description:g.Yj().nullable(),lifespan:g.ai().integer().min(0).nullable().defined(a.iW.required),permissions:g.Yj().required(a.iW.required)}),V=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:_,unlockApp:h}=(0,a.MA)(),d=(0,a.hN)(),m=(0,j.W6)(),{state:A}=(0,j.zy)(),[r,f]=D.useState(A&&"accessKey"in A.transferToken?{...A.transferToken}:null),{trackUsage:P}=(0,a.z1)(),{setCurrentStep:X}=(0,a.Cx)(),w=(0,R.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ec)(w),U=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,l=U==="create",{_unstableFormatAPIError:W,_unstableFormatValidationErrors:F}=(0,a.wq)();D.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:v.T})},[l,P]);const{data:k,error:S}=(0,x.u)(U,{skip:l||r!==null||!U});D.useEffect(()=>{S&&d({type:"warning",message:W(S)})},[S,W,d]),D.useEffect(()=>{k&&f(k)},[k]);const[es]=(0,x.a)(),[ts]=(0,x.b)(),ns=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:v.T}),_();const C=i.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(C))try{if(l){const n=await es({...i,permissions:C});if("error"in n){(0,R.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(F(n.error)):d({type:"warning",message:W(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:v.T}),m.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),X("transferTokens.success")}else{const n=await ts({id:U,name:i.name,description:i.description,permissions:C});if("error"in n){(0,R.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(F(n.error)):d({type:"warning",message:W(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:v.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{h()}},z=q&&!l||b&&l;return!l&&!r?(0,e.jsx)(H,{}):(0,e.jsxs)(L.g,{children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(Y.l1,{validationSchema:Q,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan??null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ns(i,c),children:({errors:i,handleChange:c,isSubmitting:C,values:N})=>(0,e.jsxs)(a.lV,{children:[(0,e.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:z,canRegenerate:ss,isSubmitting:C,regenerateUrl:"/admin/transfer/tokens/"}),(0,e.jsx)(p.s,{children:(0,e.jsxs)(I.s,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,e.jsx)(O.c,{token:r.accessKey,tokenType:v.T}),(0,e.jsx)(J,{errors:i,onChange:c,canEditInputs:z,isCreating:l,values:N,transferToken:r})]})})]})})]})},Z=()=>{const o=(0,R.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,e.jsx)(a.kz,{permissions:o,children:(0,e.jsx)(V,{})})},J=({errors:o={},onChange:_,canEditInputs:h,isCreating:d,values:m,transferToken:A={}})=>{const{formatMessage:r}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(K.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(I.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(u.o,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(T.x,{gap:5,children:[(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:h,onChange:_})},"name"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:h,onChange:_})},"description"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:A})},"lifespan"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:h})},"permissions")]})]})})},H=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.A)();return(0,a.L4)(),(0,e.jsxs)(L.g,{"aria-busy":"true",children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(M.Q,{primaryAction:(0,e.jsx)(E.$,{disabled:!0,startIcon:(0,e.jsx)(G.A,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(p.s,{children:(0,e.jsx)(a.Bl,{})})]})}},78454:($,B,s)=>{s.d(B,{a:()=>I,b:()=>u,c:()=>L,d:()=>K,u:()=>p});var e=s(93805);const D=e.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:t=>t.data,providesTags:(t,M)=>[...t?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:t=>`/admin/transfer/tokens/${t}`,transformResponse:t=>t.data,providesTags:(t,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:t=>({url:"/admin/transfer/tokens",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:t=>({url:`/admin/transfer/tokens/${t}`,method:"DELETE"}),transformResponse:t=>t.data,invalidatesTags:(t,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:t,...M})=>({url:`/admin/transfer/tokens/${t}`,method:"PUT",data:M}),transformResponse:t=>t.data,invalidatesTags:(t,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:L,useGetTransferTokenQuery:p,useCreateTransferTokenMutation:I,useDeleteTransferTokenMutation:K,useUpdateTransferTokenMutation:u}=D}}]);
