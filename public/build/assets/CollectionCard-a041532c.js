import{j as e,g as o,a as f}from"./app-ae60eb16.js";import{m as h,f as p,e as c}from"./motion-8bae9ae2.js";import{e as r}from"./index-fa53052e.js";import{e as m}from"./index.esm-c9b5686a.js";import{r as n}from"./index-0a5164bc.js";const b=({collection:i})=>{var t,s;return e(h.div,{variants:p("up","spring",0,.75),className:"w-full h-full",children:e(r,{css:{borderWidth:"0px"},isPressable:!0,isHoverable:!0,onPress:()=>o.replace(`/collection/${i.id}`),children:f("div",{className:"p-1 transition duration-500",children:[e(r,{css:{borderWidth:"0px"},children:e(r.Image,{src:i.nft_items_limited[0].nft_item.image,objectFit:"cover",width:"100%",height:250,alt:i.nft_items_limited[0].nft_item.name})}),e(m,{y:.2}),e("div",{children:e(n.Container,{gap:1,justify:"flex-start",children:i.nft_items_limited.map((a,d)=>e(n,{xs:!0,children:e(r,{css:{borderWidth:"0px"},children:e(r.Image,{src:a.nft_item.image,objectFit:"cover",width:"100%",height:"100%",alt:a.nft_item.name})})},d))})}),e(m,{y:.2}),e(c,{name:i.name,src:((t=i.user)==null?void 0:t.avatar_image)||"/images/icons/1.png",description:(s=i.user)==null?void 0:s.username})]})})})};export{b as C};
