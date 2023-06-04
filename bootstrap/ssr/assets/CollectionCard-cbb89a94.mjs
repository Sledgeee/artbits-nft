import { j as jsx, a as jsxs } from "../app.mjs";
import { router } from "@inertiajs/react";
import { Card, Spacer, Grid, User } from "@nextui-org/react";
import { f as fadeIn } from "./motion-5288d9b1.mjs";
import { motion } from "framer-motion";
const CollectionCard = ({
  collection
}) => {
  var _a, _b;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn("up", "spring", 0, 0.75),
      className: "w-full h-full",
      children: /* @__PURE__ */ jsx(
        Card,
        {
          css: { borderWidth: "0px" },
          isPressable: true,
          isHoverable: true,
          onPress: () => router.replace(`/collection/${collection.id}`),
          children: /* @__PURE__ */ jsxs("div", { className: "p-1 transition duration-500", children: [
            /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsx(
              Card.Image,
              {
                src: collection.nft_items_limited[0].nft_item.image,
                objectFit: "cover",
                width: "100%",
                height: 250,
                alt: collection.nft_items_limited[0].nft_item.name
              }
            ) }),
            /* @__PURE__ */ jsx(Spacer, { y: 0.2 }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Grid.Container, { gap: 1, justify: "flex-start", children: collection.nft_items_limited.map(
              (value, index) => /* @__PURE__ */ jsx(Grid, { xs: true, children: /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsx(
                Card.Image,
                {
                  src: value.nft_item.image,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  alt: value.nft_item.name
                }
              ) }) }, index)
            ) }) }),
            /* @__PURE__ */ jsx(Spacer, { y: 0.2 }),
            /* @__PURE__ */ jsx(
              User,
              {
                name: collection.name,
                src: ((_a = collection.user) == null ? void 0 : _a.avatar_image) || "/images/icons/1.png",
                description: (_b = collection.user) == null ? void 0 : _b.username
              }
            )
          ] })
        }
      )
    }
  );
};
export {
  CollectionCard as C
};
