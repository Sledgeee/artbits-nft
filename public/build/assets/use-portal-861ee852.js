import{r as c}from"./app-ae60eb16.js";import{z as a,A as m}from"./Layout-dcf2d447.js";const u=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t},x=(e=m(),t)=>{const o=`nextui-${e}`,{isBrowser:d}=a(),[i,l]=c.useState(d?u(o):null);return c.useEffect(()=>{const r=(t?t():null)||document.body,n=r==null?void 0:r.querySelector(`#${o}`),s=n||u(o);n||r.appendChild(s),l(s)},[]),i};export{x as o};