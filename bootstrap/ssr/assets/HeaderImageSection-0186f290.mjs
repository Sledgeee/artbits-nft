import { j as jsx } from "../app.mjs";
import { Image } from "@nextui-org/react";
const HeaderImageSection = ({
  image
}) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    Image,
    {
      showSkeleton: true,
      width: "100%",
      objectFit: "cover",
      height: 350,
      src: image,
      alt: "Header Image"
    }
  ) });
};
export {
  HeaderImageSection as H
};
