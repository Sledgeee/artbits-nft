import * as jsxRuntime from "react/jsx-runtime";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const app = "";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
createInertiaApp({
  title: (title) => `${title} - ArtBits`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.tsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-a82a16fb.mjs"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-5458e09b.mjs"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-3bf1488a.mjs"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-7682f672.mjs"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-7c6939da.mjs"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-a52ded45.mjs"), "./Pages/Collections/AllCollections.tsx": () => import("./assets/AllCollections-4847c90d.mjs"), "./Pages/Collections/CurrentCollection.tsx": () => import("./assets/CurrentCollection-ef0a9007.mjs"), "./Pages/Creators/Index.tsx": () => import("./assets/Index-ff95eb87.mjs"), "./Pages/Creators/Rankings.tsx": () => import("./assets/Rankings-69ea0dec.mjs"), "./Pages/Home.tsx": () => import("./assets/Home-fa055789.mjs"), "./Pages/Nfts/AllNfts.tsx": () => import("./assets/AllNfts-061ecc4d.mjs"), "./Pages/Nfts/ByCategory.tsx": () => import("./assets/ByCategory-0066efe7.mjs"), "./Pages/Nfts/CurrentNft.tsx": () => import("./assets/CurrentNft-0f977cd1.mjs"), "./Pages/Profile/Dashboard.tsx": () => import("./assets/Dashboard-f0a5ebf8.mjs"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-9f67a0ba.mjs") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    delay: 250,
    color: "#384bca",
    includeCSS: true,
    showSpinner: false
  }
});
export {
  Fragment as F,
  jsxs as a,
  jsx as j
};
