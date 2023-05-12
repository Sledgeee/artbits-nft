import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { N as NftCard } from "./NftCard-274c3c94.mjs";
import { router } from "@inertiajs/react";
import { Text, Button, Grid } from "@nextui-org/react";
import { BsEye } from "react-icons/bs";
import { motion } from "framer-motion";
import { f as fadeIn } from "./motion-5288d9b1.mjs";
const DefaultNftList = ({
  trendingNftList,
  title,
  buttonHref,
  buttonName,
  desc
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn("up", "spring", 0, 1),
        className: "mx-2",
        children: [
          /* @__PURE__ */ jsxs(Text, { h2: true, className: "flex", children: [
            title,
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
          ] }),
          desc && /* @__PURE__ */ jsx(Text, { h4: true, children: desc })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, children: trendingNftList.map((value, index) => /* @__PURE__ */ jsx(Grid, { xs: 6, sm: 3, md: 3, children: /* @__PURE__ */ jsx(NftCard, { item: value }) }, index)) })
  ] }) });
};
export {
  DefaultNftList as D
};
