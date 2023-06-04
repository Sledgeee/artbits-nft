import { a as jsxs, F as Fragment, j as jsx } from "../app.mjs";
import { L as Layout } from "./Layout-0f9f921b.mjs";
import { N as NftListWithPagination } from "./NftListWithPagination-dfa1346a.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "@nextui-org/react";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "react";
import "./NftCard-274c3c94.mjs";
import "./motion-5288d9b1.mjs";
import "framer-motion";
const ByCategory = ({
  nfts,
  auth,
  category
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${category.name} category` }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(
      NftListWithPagination,
      {
        paginationItems: nfts,
        title: `${category.name} category`
      }
    ) })
  ] });
};
export {
  ByCategory as default
};
