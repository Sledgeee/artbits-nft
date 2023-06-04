import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { Grid, Card, Row, Text, Badge, User, Button, useInput, Input } from "@nextui-org/react";
import { router, Head } from "@inertiajs/react";
import { f as fadeIn, t as tiltOptions, a as textVariant, s as staggerContainer } from "./motion-5288d9b1.mjs";
import { motion } from "framer-motion";
import { C as CollectionList } from "./CollectionList-8892619f.mjs";
import { Tilt } from "react-tilt";
import { GoRocket } from "react-icons/go";
import { f as faqData, a as Layout } from "./Layout-0f9f921b.mjs";
import { D as DefaultNftList } from "./DefaultNftList-8545a53d.mjs";
import { useMemo } from "react";
import { MdEmail } from "react-icons/md";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "./CollectionCard-cbb89a94.mjs";
import "react-icons/bs";
import "react-icons/si";
import "./NftCard-274c3c94.mjs";
const CategoryCard = ({ category }) => {
  const navigate = (pathname) => router.replace(`category/${pathname}`);
  return /* @__PURE__ */ jsx(Grid, { xs: 6, sm: 3, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn(
        "up",
        "spring",
        category.id * 0.15,
        0.75
      ),
      className: "w-full",
      children: /* @__PURE__ */ jsxs(
        Card,
        {
          isPressable: true,
          isHoverable: true,
          onClick: () => navigate(category.pathname),
          css: { borderWidth: "0px", minWidth: "100%" },
          children: [
            /* @__PURE__ */ jsx(
              Card.Body,
              {
                css: { p: 0 },
                className: "transition duration-500",
                children: /* @__PURE__ */ jsx(
                  Card.Image,
                  {
                    src: category.image,
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    alt: category.name
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(Card.Footer, { css: { justifyItems: "flex-start" }, children: /* @__PURE__ */ jsx(
              Row,
              {
                wrap: "wrap",
                justify: "space-between",
                align: "center",
                children: /* @__PURE__ */ jsx(Text, { b: true, children: category.name })
              }
            ) })
          ]
        }
      )
    }
  ) });
};
const CategoryList = ({
  categories
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: fadeIn("up", "spring", 0.5, 1),
        className: "mx-2",
        children: /* @__PURE__ */ jsx(Text, { h2: true, children: "Browse Categories" })
      }
    ),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, justify: "center", children: categories.map((value) => /* @__PURE__ */ jsx(CategoryCard, { category: value }, value.id)) })
  ] });
};
const CreatorCard = ({
  creator,
  id
}) => {
  return /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 4, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn("up", "spring", id * 0.15, 0.75),
      className: "w-full",
      children: /* @__PURE__ */ jsx(Tilt, { options: tiltOptions(), children: /* @__PURE__ */ jsx(
        Card,
        {
          isHoverable: true,
          isPressable: true,
          variant: "shadow",
          css: { borderWidth: "0px" },
          onPress: () => router.replace(
            `/creator/${creator.username}/created`
          ),
          children: /* @__PURE__ */ jsx(Card.Body, { className: "transition duration-500", children: /* @__PURE__ */ jsx(
            Badge,
            {
              content: id + 1,
              enableShadow: true,
              variant: "bordered",
              children: /* @__PURE__ */ jsx(
                User,
                {
                  size: "xl",
                  src: creator.avatar_image || "/images/icons/1.png",
                  name: creator.username || "username",
                  description: `Total sales: ${creator.transactions_from_sum_value || 0} ETH`
                }
              )
            }
          ) })
        }
      ) })
    }
  ) });
};
const CreatorList = ({
  creators
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: textVariant(0),
        className: "mx-2",
        children: [
          /* @__PURE__ */ jsxs(Text, { h2: true, className: "flex", children: [
            "Top creators",
            /* @__PURE__ */ jsxs(
              Button,
              {
                className: "absolute ml-auto mt-2 z-0",
                bordered: true,
                color: "secondary",
                auto: true,
                onPress: () => router.replace("/rankings"),
                children: [
                  /* @__PURE__ */ jsx(GoRocket, { className: "mr-2" }),
                  "View Rankings"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Text, { h4: true, children: "Checkout Top Rated Creators on the NFT Marketplace" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Grid.Container, { gap: 2, children: creators.map((value, index) => /* @__PURE__ */ jsx(
      CreatorCard,
      {
        id: index,
        creator: value
      },
      index
    )) })
  ] }) });
};
const FaqCard = ({ data, index }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn("up", "spring", index * 0.75, 0.75),
      children: /* @__PURE__ */ jsxs(
        Card,
        {
          isHoverable: true,
          variant: "shadow",
          css: {
            borderWidth: "0px",
            width: "100%"
          },
          children: [
            /* @__PURE__ */ jsx(Card.Body, { css: { p: 0 }, children: /* @__PURE__ */ jsx(
              Card.Image,
              {
                width: "70%",
                height: "70%",
                src: data.img,
                alt: data.title
              }
            ) }),
            /* @__PURE__ */ jsx(Card.Footer, { children: /* @__PURE__ */ jsxs(
              Row,
              {
                wrap: "wrap",
                justify: "space-around",
                align: "center",
                children: [
                  /* @__PURE__ */ jsx(Text, { h5: true, children: data.title }),
                  /* @__PURE__ */ jsx(
                    Text,
                    {
                      className: "mx-3 text-center",
                      color: "#787f85",
                      children: data.desc
                    }
                  )
                ]
              }
            ) })
          ]
        }
      )
    }
  );
};
const FaqSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-3", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: textVariant(0),
        className: "mx-2",
        children: [
          /* @__PURE__ */ jsx(Text, { h2: true, children: "How it works" }),
          /* @__PURE__ */ jsx(Text, { h4: true, children: "Find out how to get started" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4", children: faqData.map((value, index) => /* @__PURE__ */ jsx(FaqCard, { index, data: value }, index)) })
  ] });
};
const HeroCard = ({ nft }) => {
  var _a, _b, _c;
  const navigate = () => {
    var _a2;
    return router.replace(
      `/creator/${(_a2 = nft == null ? void 0 : nft.user) == null ? void 0 : _a2.username}/created`
    );
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeIn("up", "spring", 0.15, 0.75),
      className: "w-full",
      children: /* @__PURE__ */ jsx(Tilt, { options: { max: 45, scale: 1, speed: 450 }, children: /* @__PURE__ */ jsxs(
        Card,
        {
          isPressable: true,
          onPress: navigate,
          css: {
            w: "100%",
            h: "400px",
            borderWidth: "0px"
          },
          children: [
            /* @__PURE__ */ jsx(Card.Body, { css: { p: 0 }, children: /* @__PURE__ */ jsx(
              Card.Image,
              {
                src: nft.image,
                objectFit: "cover",
                width: "100%",
                height: "100%",
                alt: ((_a = nft == null ? void 0 : nft.user) == null ? void 0 : _a.username) + " image"
              }
            ) }),
            /* @__PURE__ */ jsx(
              Card.Footer,
              {
                isBlurred: true,
                css: {
                  position: "absolute",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1
                },
                children: /* @__PURE__ */ jsx(
                  User,
                  {
                    src: (_b = nft == null ? void 0 : nft.user) == null ? void 0 : _b.avatar_image,
                    name: (_c = nft == null ? void 0 : nft.user) == null ? void 0 : _c.username
                  }
                )
              }
            )
          ]
        }
      ) })
    }
  );
};
const HeroSection = ({ nft }) => {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(Grid.Container, { gap: 2, justify: "center", children: [
    /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 5, children: /* @__PURE__ */ jsxs(motion.div, { variants: textVariant(0), children: [
      /* @__PURE__ */ jsx(Text, { h1: true, children: "Discover digital art & Collect NFTs" }),
      /* @__PURE__ */ jsx(Text, { h4: true, children: "NFT marketplace. Collect, buy and sell art from more than 20k NFT artists." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          shadow: true,
          color: "gradient",
          className: "z-0",
          onPress: () => router.replace("/nft"),
          children: "Get Started"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-between mr-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: "240k+" }),
          /* @__PURE__ */ jsx(Text, { h6: true, children: "Total Sale" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: "100k+" }),
          /* @__PURE__ */ jsx(Text, { h6: true, children: "Auctions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: "340k+" }),
          /* @__PURE__ */ jsx(Text, { h6: true, children: "Creators" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 7, children: /* @__PURE__ */ jsx(HeroCard, { nft }) })
  ] }) });
};
const SubsCard = () => {
  const { value, reset, bindings } = useInput("");
  const validateEmail = (value2) => {
    return value2.match(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
    );
  };
  const helper = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: ""
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error"
    };
  }, [value]);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(Grid.Container, { gap: 2, justify: "center", children: [
    /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 7, children: /* @__PURE__ */ jsx(motion.div, { variants: textVariant(0), children: /* @__PURE__ */ jsx(
      Card,
      {
        css: {
          w: "100%",
          h: "300px",
          borderWidth: "0px"
        },
        children: /* @__PURE__ */ jsx(Card.Body, { css: { p: 0 }, children: /* @__PURE__ */ jsx(
          Card.Image,
          {
            src: "https://i.ytimg.com/vi/KtKOZB6Mshc/maxresdefault.jpg",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            alt: "Relaxing app background"
          }
        ) })
      }
    ) }) }),
    /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 5, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: textVariant(0),
        className: "mx-auto",
        children: [
          /* @__PURE__ */ jsx(Text, { h1: true, children: "Join our weekly digest" }),
          /* @__PURE__ */ jsx(Text, { h4: true, className: "mb-4 lg:mb-0", children: "Get exclusive promotions & updates straight to your inbox." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                ...bindings,
                css: { width: "100%" },
                clearable: true,
                shadow: true,
                onClearClick: reset,
                status: helper.color || "default",
                color: helper.color || "default",
                helperColor: helper.color || "default",
                helperText: helper.text,
                type: "email",
                placeholder: "Enter Your Email Address"
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                shadow: true,
                color: "secondary",
                className: "mt-4",
                css: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx(MdEmail, { className: "mr-1" }),
                  /* @__PURE__ */ jsx(Text, { span: true, children: "Subscribe" })
                ]
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
};
const SectionWrapper = ({ children }) => {
  const containerVariants = staggerContainer(0);
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      variants: containerVariants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.25 },
      className: "max-w-7xl mx-auto relative z-0",
      children
    }
  );
};
const Home = ({
  categories,
  auth,
  creators,
  collections,
  trendingNftList,
  heroNft
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsxs(Layout, { auth, children: [
      /* @__PURE__ */ jsx(
        SectionWrapper,
        {
          children: /* @__PURE__ */ jsx(HeroSection, { nft: heroNft })
        }
      ),
      /* @__PURE__ */ jsx(
        SectionWrapper,
        {
          children: /* @__PURE__ */ jsx(CategoryList, { categories })
        }
      ),
      /* @__PURE__ */ jsx(SectionWrapper, { children: /* @__PURE__ */ jsx(
        CollectionList,
        {
          title: "Trending Collection",
          description: "Checkout our weekly updated trending collection.",
          collections
        }
      ) }),
      /* @__PURE__ */ jsx(SectionWrapper, { children: /* @__PURE__ */ jsx(
        DefaultNftList,
        {
          trendingNftList,
          title: "Discover More Nfts",
          desc: "Explore New Trending Nfts",
          buttonHref: "/nft",
          buttonName: "See all"
        }
      ) }),
      /* @__PURE__ */ jsx(
        SectionWrapper,
        {
          children: /* @__PURE__ */ jsx(CreatorList, { creators })
        }
      ),
      /* @__PURE__ */ jsx(SectionWrapper, { children: /* @__PURE__ */ jsx(FaqSection, {}) }),
      /* @__PURE__ */ jsx(SectionWrapper, { children: /* @__PURE__ */ jsx(SubsCard, {}) })
    ] })
  ] });
};
export {
  Home as default
};
