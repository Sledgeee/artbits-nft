import{R as p,r as $,j as f}from"./app-ae60eb16.js";import{s as y,n as N,i as h}from"./index.esm-c9b5686a.js";y("div",{});const R=y("div",{margin:0,boxSizing:"border-box",padding:"$$gridGapUnit"}),n=s=>{const i=s===0?"none":"inherit";if(typeof s=="number"){const e=8.333333333333334*s,r=e>100?"100%":e<0?"0":`${e}%`;return{flexGrow:0,display:i,maxWidth:r,flexBasis:r}}return{flexGrow:1,display:i,maxWidth:"100%",flexBasis:"0"}},m=p.forwardRef(({xs:s,sm:i,md:e,lg:r,xl:t,css:a,justify:d,direction:c,alignItems:w,alignContent:b,children:I,className:U,...j},S)=>{const C=$.useMemo(()=>{const l={xs:s,sm:i,md:e,lg:r,xl:t};return Object.keys(l).reduce((u,o)=>l[o]!==void 0&&l[o]!==!1?`${u} ${o}`:u,"").trim()},[s,i,e,r,t]);return f(R,{ref:S,className:h("nextui-grid-item",C,U),css:{alignItems:w,alignContent:b,justifyContent:d,flexDirection:c,"&.xs":{...n(s)},"@xsMax":{"&.xs":{...n(s)}},"@sm":{"&.sm":{...n(i)}},"@md":{"&.md":{...n(e)}},"@lg":{"&.lg":{...n(r)}},"@xl":{"&.xl":{...n(t)}},...a},...j,children:I})});m.displayName="NextUI.GridItem",m.toString=()=>".nextui-grid-item";const G=N(m,{xs:!1,sm:!1,md:!1,lg:!1,xl:!1,className:""}),x=p.forwardRef(({children:s,css:i,...e},r)=>f(G,{ref:r,css:i,...e,children:s}));x.displayName="NextUI.Grid",x.toString=()=>".nextui-grid";const v=x,g=p.forwardRef(({gap:s,wrap:i,css:e,children:r,className:t,...a},d)=>{const c=$.useMemo(()=>`calc(${s} * $space$3)`,[s]);return f(G,{ref:d,className:h("nextui-grid-container",t),css:{$$gridGapUnit:c,display:"flex",flexWrap:i,boxSizing:"border-box",margin:"calc(-1 * $$gridGapUnit)",width:"calc(100% + $$gridGapUnit * 2)",...e},...a,children:r})});g.displayName="NextUI.GridContainer",g.toString=()=>".nextui-grid-container";const M=N(g,{gap:0,wrap:"wrap",className:""});v.Container=M;export{v as r};
