import{R as y,r as S,j as v}from"./app-ae60eb16.js";import{n as H,L as W,a as E}from"./index.esm-c9b5686a.js";import{b as T}from"./index-fa53052e.js";import{y as j}from"./Layout-dcf2d447.js";const C=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],z={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},L=typeof document<"u"&&!!document.documentElement.currentStyle,R=n=>{Object.keys(z).forEach(r=>{n.style.setProperty(r,z[r],"important")})},k=n=>{const r=window.getComputedStyle(n);if(r===null)return null;const e=j(C,r),{boxSizing:d}=e;return d===""?null:(L&&d==="border-box"&&(e.width=parseFloat(e.width)+parseFloat(e.borderRightWidth)+parseFloat(e.borderLeftWidth)+parseFloat(e.paddingRight)+parseFloat(e.paddingLeft)+"px"),{sizingStyle:e,paddingSize:parseFloat(e.paddingBottom)+parseFloat(e.paddingTop),borderSize:parseFloat(e.borderBottomWidth)+parseFloat(e.borderTopWidth)})};let t=null;const B=(n,r,e=1,d=1/0)=>{t||(t=document.createElement("textarea"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),R(t)),t.parentNode===null&&document.body.appendChild(t);const{paddingSize:s,borderSize:m,sizingStyle:c}=n,{boxSizing:f}=c;Object.keys(c).forEach(i=>{const a=i;t.style[a]=c[a]}),R(t),t.value=r;let l=((i,a)=>{const h=i.scrollHeight;return a.sizingStyle.boxSizing==="border-box"?h+a.borderSize:h-a.paddingSize})(t,n);t.value="x";const p=t.scrollHeight-s;let u=p*e;f==="border-box"&&(u=u+s+m),l=Math.max(u,l);let g=p*d;return f==="border-box"&&(g=g+s+m),l=Math.min(g,l),[l,p]},w=y.forwardRef((n,r)=>{const e=S.useRef(null),d=y.useRef(0),s=y.useRef(),{cacheMeasurements:m,rows:c,maxRows:f,minRows:l,onChange:p,onHeightChange:u,css:g,...i}=n;Object.keys(i).forEach(o=>{W.indexOf(o)>-1&&delete i[o]});const a=i.value!==void 0;S.useImperativeHandle(r,()=>e.current);const h=()=>{const o=e.current,x=m&&s.current?s.current:k(o);if(!x)return;s.current=x;const[b,F]=B(x,o.value||o.placeholder||"x",c||l,c||f);d.current!==b&&(d.current=b,o.style.setProperty("height",`${b}px`,"important"),u&&u(b,{rowHeight:F}))};return typeof document<"u"&&(S.useLayoutEffect(h),T(h)),v(E,{ref:e,as:"textarea",css:g,onChange:o=>{a||h(),p&&p(o)},...i})});w.toString=()=>".nextui-textarea";const $=H(w,{minRows:3,maxRows:6,cacheMeasurements:!0,initialValue:""});export{$ as t};