import{j as t,F as n,a as l,g as c,n as m}from"./app-ae60eb16.js";import{L as p}from"./Layout-dcf2d447.js";import{C as d}from"./CollectionCard-a041532c.js";import{t as h,e as i}from"./index.esm-c9b5686a.js";import{r as o}from"./index-0a5164bc.js";import{t as g}from"./pagination-0f065369.js";import"./motion-8bae9ae2.js";import"./index-fa53052e.js";const u=({collections:a})=>{const e=r=>c.replace(`${location.pathname}?page=${r}`);return t(n,{children:l("div",{className:"container mx-auto",children:[t("div",{className:"mx-2",children:t(h,{h2:!0,children:"All Collection"})}),t(o.Container,{gap:2,children:a.data.map((r,s)=>t(o,{xs:12,sm:4,children:t(d,{collection:r})},s))}),t(i,{y:.7}),t(o.Container,{justify:"center",children:t(g,{shadow:!0,color:"gradient",initialPage:1,onChange:e,page:a.current_page,total:a.last_page})}),t(i,{y:.5})]})})},$=({collections:a,auth:e})=>l(n,{children:[t(m,{title:"All collections"}),t(p,{auth:e,children:t(u,{collections:a})})]});export{$ as default};