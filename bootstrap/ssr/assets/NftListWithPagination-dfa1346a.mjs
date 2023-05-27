import { a as jsxs, j as jsx } from "../app.mjs";
import { N as NftCard } from "./NftCard-274c3c94.mjs";
import { router } from "@inertiajs/react";
import { Spacer, Text, Button, Grid, Pagination } from "@nextui-org/react";
import { BsEye } from "react-icons/bs";
const NftListWithPagination = ({
  paginationItems,
  title,
  buttonHref,
  buttonName
}) => {
  const navigate = (page) => router.replace(`${location.pathname}?page=${page}`);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsx("div", { className: "mx-2", children: /* @__PURE__ */ jsxs(Text, { h2: true, className: "flex", children: [
      title || "Discover More NFTs",
      buttonHref && buttonName && /* @__PURE__ */ jsxs(
        Button,
        {
          className: "absolute ml-auto mt-2 z-0",
          bordered: true,
          color: "secondary",
          auto: true,
          onPress: () => router.replace(buttonHref),
          children: [
            /* @__PURE__ */ jsx(BsEye, { className: "mr-2" }),
            buttonName
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, children: paginationItems.data.map((item, index) => /* @__PURE__ */ jsx(Grid, { xs: 6, sm: 3, md: 3, children: /* @__PURE__ */ jsx(NftCard, { item }) }, index)) }),
    /* @__PURE__ */ jsx(Spacer, { y: 0.7 }),
    /* @__PURE__ */ jsx(Grid.Container, { justify: "center", children: /* @__PURE__ */ jsx(
      Pagination,
      {
        shadow: true,
        color: "gradient",
        initialPage: 1,
        onChange: navigate,
        page: paginationItems.current_page,
        total: paginationItems.last_page
      }
    ) }),
    /* @__PURE__ */ jsx(Spacer, { y: 0.5 })
  ] });
};
export {
  NftListWithPagination as N
};
