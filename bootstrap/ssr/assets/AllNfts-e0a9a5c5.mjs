import { a as jsxs, F as Fragment, j as jsx } from "../app.mjs";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { N as NftListWithPagination } from "./NftListWithPagination-dfa1346a.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "@nextui-org/react";
import "react-icons/ai";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "react";
import "./NftCard-274c3c94.mjs";
import "./motion-5288d9b1.mjs";
import "framer-motion";
const AllNfts = ({ nfts, auth }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Marketplace" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(NftListWithPagination, { paginationItems: nfts }) })
  ] });
};
export {
  AllNfts as default
};
