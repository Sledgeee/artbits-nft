import{a as i,F as m,j as r,n}from"./app-8ba940f7.js";import{L as s}from"./Layout-ce40832f.js";import{N as p}from"./NftListWithPagination-ee27e2e8.js";import"./index.esm-566a47d6.js";import"./NftCard-a904dd3c.js";import"./motion-9634ae7b.js";import"./index-b4c17590.js";import"./col-c359b618.js";import"./index-4ac4fb9c.js";import"./pagination-327f9dc7.js";const N=({collectionItems:a,collection:t,auth:e})=>{var o;return i(m,{children:[r(n,{title:`${t.name} collection`}),r(s,{auth:e,children:r(p,{title:`${t.name} collection`,paginationItems:a,buttonName:"Go to artist page",buttonHref:`/creator/${(o=t.user)==null?void 0:o.username}/created`})})]})};export{N as default};