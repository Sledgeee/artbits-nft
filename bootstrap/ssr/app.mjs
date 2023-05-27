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
    /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-a82a16fb.mjs"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-eb25b766.mjs"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-4b00bf9c.mjs"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-84ca1883.mjs"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-cdf56afe.mjs"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-06a7062a.mjs"), "./Pages/Collections/AllCollections.tsx": () => import("./assets/AllCollections-c4fb0d09.mjs"), "./Pages/Collections/CurrentCollection.tsx": () => import("./assets/CurrentCollection-1f083465.mjs"), "./Pages/Creators/Index.tsx": () => import("./assets/Index-dc1c6ba8.mjs"), "./Pages/Creators/Rankings.tsx": () => import("./assets/Rankings-d76fce8f.mjs"), "./Pages/Home.tsx": () => import("./assets/Home-3498cc7d.mjs"), "./Pages/Nfts/AllNfts.tsx": () => import("./assets/AllNfts-e0a9a5c5.mjs"), "./Pages/Nfts/ByCategory.tsx": () => import("./assets/ByCategory-0df44189.mjs"), "./Pages/Nfts/CurrentNft.tsx": () => import("./assets/CurrentNft-6276483d.mjs"), "./Pages/Profile/Dashboard.tsx": () => import("./assets/Dashboard-d5a37914.mjs"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-12eb1e9d.mjs") })
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
