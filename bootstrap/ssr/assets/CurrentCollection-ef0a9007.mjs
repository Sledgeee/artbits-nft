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
const CurrentCollection = ({
  collectionItems,
  collection,
  auth
}) => {
  var _a;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${collection.name} collection` }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(
      NftListWithPagination,
      {
        title: `${collection.name} collection`,
        paginationItems: collectionItems,
        buttonName: "Go to artist page",
        buttonHref: `/creator/${(_a = collection.user) == null ? void 0 : _a.username}/created`
      }
    ) })
  ] });
};
export {
  CurrentCollection as default
};
