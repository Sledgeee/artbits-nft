import{r as l,a as n,j as e,b as B,g as F,F as g,d as z,n as L}from"./app-ae60eb16.js";import{e as x,C as j}from"./CollectionList-a7aa16d1.js";import{b,e as m,g as D,t as o}from"./index.esm-c9b5686a.js";import{u as I}from"./useUser-9f8f40a5.js";import{n as E,r as k,L as H}from"./Layout-dcf2d447.js";import{r as h}from"./index-0a5164bc.js";import{D as P}from"./DefaultNftList-2270e33b.js";import{H as U}from"./HeaderImageSection-8728b557.js";import"./CollectionCard-a041532c.js";import"./motion-8bae9ae2.js";import"./index-fa53052e.js";import"./NftCard-07c0ebd9.js";import"./col-438b23ee.js";const Z=({creator:a,followers:t})=>{const i=I(),r=(a==null?void 0:a.metamask_address)||"",s=r.substring(0,8)+"..."+r.substring(r.length-5),[u,f]=l.useState(s),C=async()=>{await navigator.clipboard.writeText(r),f("Copied to clipboard!"),setTimeout(()=>f(s),3e3)},[w,N]=l.useState("primary"),[$,c]=l.useState(!1),[p,y]=l.useState(t==null?void 0:t.some(d=>d.to_user_id===a.id)),_=()=>{c(!0);const d=(v,S)=>{B.get(`/${v}/${a.id}`).then(T=>{T.status===200&&(y(S),c(!1))}).catch(()=>{c(!1),N("error")})};$?E(route("login")+"?returnTo="+window.location.pathname):p?d("unfollow",!1):d("follow",!0)};return l.useEffect(()=>{i||c(!0)},[]),n("div",{className:"flex z-0 mx-auto md:ml-auto",children:[e(b,{onPress:_,color:w,auto:!0,children:p?"Unfollow":"Follow"}),e(m,{y:.5}),n(b,{bordered:!0,onPress:C,color:"gradient",children:[e(D,{className:"mr-2"}),u]})]})},A=({followers:a,creator:t})=>{const i=s=>location.pathname==`/creator/${t.username}/${s}`,r=[{href:"created",name:"Created",count:t.createdCount},{href:"owned",name:"Owned",count:t.ownedCount},{href:"collections",name:"Collections",count:t.collectionCount}];return l.useEffect(()=>{r[0].count===0&&r[1].count!==0&&location.pathname!==`/creator/${t.username}/collections`&&F.replace(`/creator/${t.username}/owned`)},[]),n("div",{className:"container mx-auto",children:[n(h.Container,{gap:2,children:[e(h,{xs:12,sm:7,children:n("div",{className:"mx-auto md:mx-0",children:[n("div",{children:[e(m,{y:-2}),e(k,{size:"xl",src:t.avatar_image,alt:t.username+" image"})]}),e(o,{h1:!0,children:t.username}),e(m,{y:1}),n("div",{className:"flex justify-between mr-6",children:[n("div",{children:[e(o,{h4:!0,b:!0,children:t.transactions_from_sum_value||0}),e(o,{h6:!0,children:"Volume"})]}),n("div",{children:[e(o,{h4:!0,b:!0,children:t.transactions_from_count||0}),e(o,{h6:!0,children:"Nfts Sold"})]}),n("div",{children:[e(o,{h4:!0,b:!0,children:t.followers_to_count||0}),e(o,{h6:!0,children:"Followers"})]})]}),n(g,{children:[e(o,{span:!0,color:"#787f85",children:"Bio"}),e(o,{size:"$md",css:{maxW:"400px"},children:t.bio})]}),e(m,{y:.7})]})}),e(h,{xs:12,sm:5,className:"flex-end",children:e(Z,{creator:t,followers:a})})]}),e("div",{className:"flex border-b-[1px] gap-x-10 border-gray-700 px-4",children:r.map((s,u)=>e("div",{className:`pb-1 ${i(s.href)&&"border-b-2 border-blue-400"}`,children:s.count!==0?e(z,{href:`/creator/${t.username}/${s.href}`,children:n(o,{h5:!0,color:i(s.href)?"primary":"gray",children:[s.name,e(x,{children:s.count,size:"xs",className:"ml-3"})]})}):n(o,{h5:!0,color:"gray",className:"cursor-no-drop",children:[s.name,e(x,{children:s.count,size:"xs",className:"ml-3"})]})},u))})]})},te=({creatorItems:a,creatorCollections:t,followers:i,auth:r,creator:s})=>n(g,{children:[e(L,{title:s==null?void 0:s.username}),n(H,{auth:r,children:[e(U,{image:s.banner_image}),e(A,{followers:i,creator:s}),location.pathname===`/creator/${s.username}/collections`?e(j,{collections:t}):e(P,{trendingNftList:a})]})]});export{te as default};
