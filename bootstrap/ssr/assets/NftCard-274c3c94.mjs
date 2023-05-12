import { j as jsx, a as jsxs } from "../app.mjs";
import { router } from "@inertiajs/react";
import { Card, Row, Col, Grid, Text, User } from "@nextui-org/react";
import { f as fadeIn } from "./motion-5288d9b1.mjs";
import { motion } from "framer-motion";
const NftCard = ({ item }) => {
  const user = item == null ? void 0 : item.user;
  const navigate = () => router.replace(`/nft/${user == null ? void 0 : user.username}/${item == null ? void 0 : item.name}`);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn("up", "spring", 0, 0.75),
      className: "w-full",
      children: /* @__PURE__ */ jsxs(
        Card,
        {
          isPressable: true,
          isHoverable: true,
          css: {
            w: "100%",
            h: "400px",
            borderWidth: "0px"
          },
          onPress: navigate,
          children: [
            /* @__PURE__ */ jsx(Card.Body, { css: { p: 0 }, children: /* @__PURE__ */ jsx(
              Card.Image,
              {
                src: (item == null ? void 0 : item.image) || "",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                alt: item == null ? void 0 : item.name
              }
            ) }),
            /* @__PURE__ */ jsx(Card.Footer, { className: "my-2", children: /* @__PURE__ */ jsxs(Row, { children: [
              /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs(Grid.Container, { children: [
                /* @__PURE__ */ jsx(Grid, { xs: 12, children: /* @__PURE__ */ jsx(Text, { h5: true, className: "pl-3", children: item == null ? void 0 : item.name }) }),
                /* @__PURE__ */ jsx(Grid, { xs: 12, children: /* @__PURE__ */ jsx(
                  User,
                  {
                    size: "xs",
                    name: "",
                    description: user == null ? void 0 : user.username,
                    src: user == null ? void 0 : user.avatar_image
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ jsx(Row, { justify: "flex-end", children: /* @__PURE__ */ jsxs("div", { className: "mr-2 mt-3 text-right", children: [
                /* @__PURE__ */ jsx(Text, { h6: true, color: "#858584", children: "Price" }),
                /* @__PURE__ */ jsxs(Text, { h5: true, children: [
                  item == null ? void 0 : item.price,
                  " ETH"
                ] })
              ] }) })
            ] }) })
          ]
        }
      )
    }
  );
};
export {
  NftCard as N
};
