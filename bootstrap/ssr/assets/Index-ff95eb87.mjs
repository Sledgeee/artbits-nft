import { a as jsxs, j as jsx, F as Fragment } from "../app.mjs";
import { C as CollectionList } from "./CollectionList-8892619f.mjs";
import { router, Link, Head } from "@inertiajs/react";
import { Button, Spacer, Grid, Avatar, Text, Badge } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsClipboard } from "react-icons/bs";
import { u as useUser } from "./useUser-4ec56f42.mjs";
import { n as navigate, L as Layout } from "./Layout-0f9f921b.mjs";
import { D as DefaultNftList } from "./DefaultNftList-8545a53d.mjs";
import { H as HeaderImageSection } from "./HeaderImageSection-0186f290.mjs";
import "react/jsx-runtime";
import "react-dom/client";
import "./CollectionCard-cbb89a94.mjs";
import "./motion-5288d9b1.mjs";
import "framer-motion";
import "react-icons/md";
import "react-icons/si";
import "./NftCard-274c3c94.mjs";
const CreatorButtons = ({
  creator,
  followers
}) => {
  const user = useUser();
  const wallet = (creator == null ? void 0 : creator.metamask_address) || "";
  const shortText = wallet.substring(0, 8) + "..." + wallet.substring(wallet.length - 5);
  const [buttonText, setButtonText] = useState(shortText);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(wallet);
    setButtonText("Copied to clipboard!");
    setTimeout(() => setButtonText(shortText), 3e3);
  };
  const [color, setColor] = useState(
    "primary"
  );
  const [followBtnIsDisabled, setFollowBtnIsDisabled] = useState(false);
  const [followed, setFollowed] = useState(
    followers == null ? void 0 : followers.some((x) => x.to_user_id === creator.id)
  );
  const submit = () => {
    setFollowBtnIsDisabled(true);
    const handle = (url, state) => {
      axios.get(`/${url}/${creator.id}`).then((response) => {
        if (response.status === 200) {
          setFollowed(state);
          setFollowBtnIsDisabled(false);
        }
      }).catch(() => {
        setFollowBtnIsDisabled(false);
        setColor("error");
      });
    };
    followBtnIsDisabled ? navigate(
      route("login") + "?returnTo=" + window.location.pathname
    ) : !followed ? handle("follow", true) : handle("unfollow", false);
  };
  useEffect(() => {
    if (!user)
      setFollowBtnIsDisabled(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex z-0 mx-auto md:ml-auto", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onPress: submit,
        color,
        auto: true,
        children: followed ? "Unfollow" : "Follow"
      }
    ),
    /* @__PURE__ */ jsx(Spacer, { y: 0.5 }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        bordered: true,
        onPress: copyToClipboard,
        color: "gradient",
        children: [
          /* @__PURE__ */ jsx(BsClipboard, { className: "mr-2" }),
          buttonText
        ]
      }
    )
  ] });
};
const CreatorSection = ({
  followers,
  creator
}) => {
  const checkActiveRoute = (href) => location.pathname == `/creator/${creator.username}/${href}`;
  const routes = [
    {
      href: "created",
      name: "Created",
      count: creator.createdCount
    },
    {
      href: "owned",
      name: "Owned",
      count: creator.ownedCount
    },
    {
      href: "collections",
      name: "Collections",
      count: creator.collectionCount
    }
  ];
  useEffect(() => {
    const hasZeroCreatedCount = routes[0].count === 0 && routes[1].count !== 0 && location.pathname !== `/creator/${creator.username}/collections`;
    if (hasZeroCreatedCount)
      router.replace(`/creator/${creator.username}/owned`);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs(Grid.Container, { gap: 2, children: [
      /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 7, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto md:mx-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Spacer, { y: -2 }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              size: "xl",
              src: creator.avatar_image,
              alt: creator.username + " image"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Text, { h1: true, children: creator.username }),
        /* @__PURE__ */ jsx(Spacer, { y: 1 }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mr-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: creator.transactions_from_sum_value || 0 }),
            /* @__PURE__ */ jsx(Text, { h6: true, children: "Volume" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: creator.transactions_from_count || 0 }),
            /* @__PURE__ */ jsx(Text, { h6: true, children: "Nfts Sold" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: creator.followers_to_count || 0 }),
            /* @__PURE__ */ jsx(Text, { h6: true, children: "Followers" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Text, { span: true, color: "#787f85", children: "Bio" }),
          /* @__PURE__ */ jsx(Text, { size: "$md", css: { maxW: "400px" }, children: creator.bio })
        ] }),
        /* @__PURE__ */ jsx(Spacer, { y: 0.7 })
      ] }) }),
      /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 5, className: "flex-end", children: /* @__PURE__ */ jsx(
        CreatorButtons,
        {
          creator,
          followers
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex border-b-[1px] gap-x-10 border-gray-700 px-4", children: routes.map((value, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `pb-1 ${checkActiveRoute(value.href) && "border-b-2 border-blue-400"}`,
        children: value.count !== 0 ? /* @__PURE__ */ jsx(
          Link,
          {
            href: `/creator/${creator.username}/${value.href}`,
            children: /* @__PURE__ */ jsxs(
              Text,
              {
                h5: true,
                color: checkActiveRoute(value.href) ? "primary" : "gray",
                children: [
                  value.name,
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      children: value.count,
                      size: "xs",
                      className: "ml-3"
                    }
                  )
                ]
              }
            )
          }
        ) : /* @__PURE__ */ jsxs(
          Text,
          {
            h5: true,
            color: "gray",
            className: "cursor-no-drop",
            children: [
              value.name,
              /* @__PURE__ */ jsx(
                Badge,
                {
                  children: value.count,
                  size: "xs",
                  className: "ml-3"
                }
              )
            ]
          }
        )
      },
      index
    )) })
  ] });
};
const Index = ({
  creatorItems,
  creatorCollections,
  followers,
  auth,
  creator
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: creator == null ? void 0 : creator.username }),
    /* @__PURE__ */ jsxs(Layout, { auth, children: [
      /* @__PURE__ */ jsx(HeaderImageSection, { image: creator.banner_image }),
      /* @__PURE__ */ jsx(
        CreatorSection,
        {
          followers,
          creator
        }
      ),
      location.pathname === `/creator/${creator.username}/collections` ? /* @__PURE__ */ jsx(
        CollectionList,
        {
          collections: creatorCollections
        }
      ) : /* @__PURE__ */ jsx(DefaultNftList, { trendingNftList: creatorItems })
    ] })
  ] });
};
export {
  Index as default
};
