import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { C as CollectionCard } from "./CollectionCard-cbb89a94.mjs";
import { Text, Grid } from "@nextui-org/react";
import { a as textVariant } from "./motion-5288d9b1.mjs";
import { motion } from "framer-motion";
const CollectionList = ({
  collections,
  title,
  description
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: textVariant(0),
        className: "mx-2",
        children: [
          title && /* @__PURE__ */ jsx(Text, { h2: true, children: title }),
          description && /* @__PURE__ */ jsx(Text, { h4: true, children: description })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, children: collections.map((value, index) => /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 4, children: /* @__PURE__ */ jsx(CollectionCard, { collection: value }) }, index)) })
  ] }) });
};
export {
  CollectionList as C
};
