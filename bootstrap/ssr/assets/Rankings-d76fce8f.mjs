import { a as jsxs, j as jsx, F as Fragment } from "../app.mjs";
import { Table, Text, User } from "@nextui-org/react";
import { Link, Head } from "@inertiajs/react";
import { r as rankingsTableColumns } from "./tableColumns-394ae99e.mjs";
import { f as fadeIn } from "./motion-5288d9b1.mjs";
import { motion } from "framer-motion";
import { L as Layout } from "./Layout-8810c63e.mjs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/ai";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "react";
const RankingsTable = ({
  topCreators
}) => {
  return /* @__PURE__ */ jsxs(
    Table,
    {
      className: "z-0",
      selectionMode: "single",
      hoverable: true,
      bordered: true,
      borderWeight: "normal",
      css: { p: "0px" },
      children: [
        /* @__PURE__ */ jsx(Table.Header, { columns: rankingsTableColumns, children: (column) => /* @__PURE__ */ jsx(Table.Column, { children: column.label }, column.key) }),
        /* @__PURE__ */ jsx(Table.Body, { children: topCreators.map((value, index) => /* @__PURE__ */ jsxs(Table.Row, { children: [
          /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { className: "pl-1", children: index + 1 }) }),
          /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: `/creator/${value.username}/created`,
              children: /* @__PURE__ */ jsx(
                User,
                {
                  src: value.avatar_image || "/images/icons/1.png",
                  name: value.username,
                  description: value.email,
                  css: { p: 0 }
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { children: value.transactions_from_count || 0 }) }),
          /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { children: (value.transactions_from_sum_value || 0) + " ETH" }) })
        ] }, index)) }),
        /* @__PURE__ */ jsx(
          Table.Pagination,
          {
            shadow: true,
            css: { pb: "10px" },
            align: "center",
            rowsPerPage: 25
          }
        )
      ]
    }
  );
};
const RankingsContent = ({
  topCreators
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: fadeIn("up", "spring", 0.5, 1),
      className: "mx-2",
      children: [
        /* @__PURE__ */ jsx(Text, { h2: true, className: "flex", children: "Top creators" }),
        /* @__PURE__ */ jsx(Text, { h4: true, children: "Check out Top Rated Creators on the NFT Marketplace" }),
        /* @__PURE__ */ jsx(RankingsTable, { topCreators })
      ]
    }
  ) }) });
};
const Rankings = ({ auth, topCreators }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rankings" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(RankingsContent, { topCreators }) })
  ] });
};
export {
  Rankings as default
};
