import{a as i,j as e,d as l,F as o,n as c}from"./app-ae60eb16.js";import{e as n,r as d}from"./tableColumns-cc38176b.js";import{t as s}from"./index.esm-c9b5686a.js";import{e as m,m as h,f as p}from"./motion-8bae9ae2.js";import{L as g}from"./Layout-dcf2d447.js";import"./index-2aa59de3.js";import"./pagination-0f065369.js";const u=({topCreators:a})=>i(n,{className:"z-0",selectionMode:"single",hoverable:!0,bordered:!0,borderWeight:"normal",css:{p:"0px"},children:[e(n.Header,{columns:d,children:r=>e(n.Column,{children:r.label},r.key)}),e(n.Body,{children:a.map((r,t)=>i(n.Row,{children:[e(n.Cell,{children:e(s,{className:"pl-1",children:t+1})}),e(n.Cell,{children:e(l,{href:`/creator/${r.username}/created`,children:e(m,{src:r.avatar_image||"/images/icons/1.png",name:r.username,description:r.email,css:{p:0}})})}),e(n.Cell,{children:e(s,{children:r.transactions_from_count||0})}),e(n.Cell,{children:e(s,{children:(r.transactions_from_sum_value||0)+" ETH"})})]},t))}),e(n.Pagination,{shadow:!0,css:{pb:"10px"},align:"center",rowsPerPage:25})]}),f=({topCreators:a})=>e(o,{children:e("div",{className:"container mx-auto",children:i(h.div,{variants:p("up","spring",.5,1),className:"mx-2",children:[e(s,{h2:!0,className:"flex",children:"Top creators"}),e(s,{h4:!0,children:"Check out Top Rated Creators on the NFT Marketplace"}),e(u,{topCreators:a})]})})}),_=({auth:a,topCreators:r})=>i(o,{children:[e(c,{title:"Rankings"}),e(g,{auth:a,children:e(f,{topCreators:r})})]});export{_ as default};
