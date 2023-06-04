import{_ as o,a as t,F as a,j as e,n as d,d as l}from"./app-8ba940f7.js";import{L as m}from"./Layout-ce40832f.js";import{b as c}from"./index.esm-566a47d6.js";const b=({status:i,auth:n})=>{const{post:r,processing:s}=o({});return t(a,{children:[e(d,{title:"Email Verification"}),t(m,{auth:n,children:[e("div",{className:"mb-4 text-sm text-gray-400",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),i==="verification-link-sent"?e("div",{className:"mb-4 font-medium text-sm text-green-400",children:"A new verification link has been sent to the email address you provided during registration."}):e("div",{}),e("form",{onSubmit:f=>r(route("verification.send")),children:t("div",{className:"mt-4 flex items-center justify-between",children:[e(c,{disabled:s,children:"Resend Verification Email"}),e(l,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md",children:"Log Out"})]})})]})]})};export{b as default};