import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { router, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-0f9f921b.mjs";
import { Text, Grid, Spacer, Pagination } from "@nextui-org/react";
import { C as CollectionCard } from "./CollectionCard-cbb89a94.mjs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "react";
import "./motion-5288d9b1.mjs";
import "framer-motion";
const CollectionListWithPagination = ({ collections }) => {
  const navigate = (page) => router.replace(`${location.pathname}?page=${page}`);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-2", children: /* @__PURE__ */ jsx(Text, { h2: true, children: "All Collection" }) }),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, children: collections.data.map((value, index) => /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 4, children: /* @__PURE__ */ jsx(CollectionCard, { collection: value }) }, index)) }),
    /* @__PURE__ */ jsx(Spacer, { y: 0.7 }),
    /* @__PURE__ */ jsx(Grid.Container, { justify: "center", children: /* @__PURE__ */ jsx(
      Pagination,
      {
        shadow: true,
        color: "gradient",
        initialPage: 1,
        onChange: navigate,
        page: collections.current_page,
        total: collections.last_page
      }
    ) }),
    /* @__PURE__ */ jsx(Spacer, { y: 0.5 })
  ] }) });
};
const AllCollections = ({
  collections,
  auth
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "All collections" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(
      CollectionListWithPagination,
      {
        collections
      }
    ) })
  ] });
};
export {
  AllCollections as default
};
