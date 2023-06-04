import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { D as DefaultNftList } from "./DefaultNftList-8545a53d.mjs";
import { H as HeaderImageSection } from "./HeaderImageSection-0186f290.mjs";
import { Card, Text, Spacer, Button, Modal, Table, User, Input, Grid } from "@nextui-org/react";
import { useForm, Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import moment from "moment";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { b as betsTableColumns } from "./tableColumns-394ae99e.mjs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "./NftCard-274c3c94.mjs";
import "./motion-5288d9b1.mjs";
import "framer-motion";
const AuctionsBetsModal = ({
  auction,
  available,
  minPrice
}) => {
  var _a, _b;
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const minRate = Math.max.apply(
    null,
    ((_a = auction == null ? void 0 : auction.auction_bets) == null ? void 0 : _a.map((a) => a.value).concat([minPrice])) || [0]
  );
  const { data, setData, errors, post } = useForm({
    value: minRate,
    auction_id: (auction == null ? void 0 : auction.id) || 0
  });
  const sendBet = () => post(route("bet.create"));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onPress: handler,
        shadow: true,
        color: "gradient",
        disabled: !available,
        children: "Place Bid"
      }
    ),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        closeButton: true,
        blur: true,
        "aria-labelledby": "auctions-bets-modal",
        open: visible,
        onClose: closeModal,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Text, { h5: true, children: "Place bet" }) }),
          /* @__PURE__ */ jsxs(Modal.Body, { children: [
            /* @__PURE__ */ jsxs(
              Table,
              {
                className: "z-0",
                bordered: true,
                css: {
                  p: "0px"
                },
                children: [
                  /* @__PURE__ */ jsx(Table.Header, { columns: betsTableColumns, children: (column) => /* @__PURE__ */ jsx(Table.Column, { children: column.label }, column.key) }),
                  /* @__PURE__ */ jsx(Table.Body, { children: (auction == null ? void 0 : auction.auction_bets) ? (_b = auction == null ? void 0 : auction.auction_bets) == null ? void 0 : _b.slice(0, 5).map((value, index) => /* @__PURE__ */ jsxs(Table.Row, { children: [
                    /* @__PURE__ */ jsx(Table.Cell, { children: value.id }),
                    /* @__PURE__ */ jsx(Table.Cell, { children: value.value }),
                    /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(
                      User,
                      {
                        size: "xs",
                        src: value.user.avatar_image,
                        name: value.user.username,
                        css: { p: 0 }
                      }
                    ) })
                  ] }, index)) : /* @__PURE__ */ jsxs(Table.Row, { children: [
                    /* @__PURE__ */ jsx(Table.Cell, { children: "Bets not found" }),
                    /* @__PURE__ */ jsx(Table.Cell, { children: "Bet first!" })
                  ] }, "-1") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: minRate,
                  value: data.value,
                  onChange: (e) => setData("value", Number(e.target.value)),
                  helperColor: "error",
                  helperText: errors.value,
                  bordered: true,
                  fullWidth: true,
                  color: "primary",
                  size: "lg",
                  placeholder: "Enter minimum price",
                  contentLeft: /* @__PURE__ */ jsx(AiOutlineFieldNumber, {})
                }
              ),
              /* @__PURE__ */ jsx(Spacer, { y: 1 }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  css: { width: "100%" },
                  color: "gradient",
                  onClick: sendBet,
                  children: "Place bet"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
const AuctionCard = ({
  auction,
  minPrice
}) => {
  const endDate = new Date((auction == null ? void 0 : auction.end_at) || /* @__PURE__ */ new Date());
  const [diff, setDiff] = useState(
    moment.duration(moment(endDate).diff(/* @__PURE__ */ new Date()))
  );
  const available = diff.seconds() > 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (available)
        setDiff(
          moment.duration(moment(endDate).diff(/* @__PURE__ */ new Date()))
        );
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "ml-auto w-full sm:max-w-min", children: /* @__PURE__ */ jsx(
    Card,
    {
      css: {
        minWidth: "340px",
        borderWidth: "0px"
      },
      children: /* @__PURE__ */ jsxs(Card.Body, { children: [
        /* @__PURE__ */ jsxs(Text, { children: [
          "Auction ends in: ",
          endDate.toString()
        ] }),
        /* @__PURE__ */ jsx(Spacer, { y: 1 }),
        available && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mx-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: diff.days() }),
              /* @__PURE__ */ jsx(Text, { h6: true, children: "Days" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: ":" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: diff.hours() }),
              /* @__PURE__ */ jsx(Text, { h6: true, children: "Hours" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: ":" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: diff.minutes() }),
              /* @__PURE__ */ jsx(Text, { h6: true, children: "Minutes" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: ":" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { h3: true, b: true, children: diff.seconds() }),
              /* @__PURE__ */ jsx(Text, { h6: true, children: "Seconds" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Spacer, { y: 0.5 })
        ] }),
        /* @__PURE__ */ jsx(
          AuctionsBetsModal,
          {
            available,
            auction,
            minPrice
          }
        )
      ] })
    }
  ) });
};
const NftSection = ({
  nft,
  auction
}) => {
  var _a;
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(Grid.Container, { gap: 2, justify: "center", children: [
    /* @__PURE__ */ jsx(Grid, { xs: 12, sm: 7, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Text, { h1: true, children: nft == null ? void 0 : nft.name }),
      /* @__PURE__ */ jsxs(Text, { h5: true, color: "#787f85", children: [
        "Minted on",
        " ",
        new Date(nft.created_at).toDateString()
      ] }),
      /* @__PURE__ */ jsx(Spacer, { y: 0.5 }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: `/creator/${nft.user.username}/created`,
          children: /* @__PURE__ */ jsxs(
            Text,
            {
              h5: true,
              color: "#787f85",
              className: "flex items-center",
              children: [
                "Minted by",
                /* @__PURE__ */ jsx(
                  User,
                  {
                    src: nft.user.avatar_image,
                    name: nft.user.username
                  }
                )
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Spacer, { y: 0.5 }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Text, { span: true, color: "#787f85", children: "Description" }),
        /* @__PURE__ */ jsx(Text, { size: "$md", css: { maxW: "400px" }, children: nft.description })
      ] }),
      /* @__PURE__ */ jsx(Spacer, { y: 0.5 }),
      /* @__PURE__ */ jsx(Text, { span: true, color: "#787f85", children: "Details" }),
      /* @__PURE__ */ jsx(Text, { size: "$md", children: /* @__PURE__ */ jsx(
        "a",
        {
          target: "_blank",
          href: "https://etherscan.io/address/" + nft.user.metamask_address,
          children: "View on Etherscan"
        }
      ) }),
      /* @__PURE__ */ jsx(Spacer, { y: 0.7 }),
      nft.nft_item_tags.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Text, { span: true, color: "#787f85", children: "Tags" }),
        /* @__PURE__ */ jsx(Grid.Container, { gap: 1, children: (_a = nft.nft_item_tags) == null ? void 0 : _a.map((value) => /* @__PURE__ */ jsx(Grid, { xs: 6, lg: 3, children: /* @__PURE__ */ jsx(
          Card,
          {
            isPressable: true,
            css: { borderWidth: "0px" },
            children: /* @__PURE__ */ jsx(Card.Header, { children: /* @__PURE__ */ jsx(Text, { b: true, children: value.name }) })
          }
        ) }, value.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Grid, { sm: 5, children: /* @__PURE__ */ jsx(
      AuctionCard,
      {
        auction,
        minPrice: Number(nft.price)
      }
    ) })
  ] }) });
};
const CurrentNft = ({
  auth,
  nft,
  nfts,
  auction
}) => {
  var _a;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: nft.name }),
    /* @__PURE__ */ jsxs(Layout, { auth, children: [
      /* @__PURE__ */ jsx(HeaderImageSection, { image: nft.header_image }),
      /* @__PURE__ */ jsx(NftSection, { nft, auction }),
      /* @__PURE__ */ jsx(
        DefaultNftList,
        {
          trendingNftList: nfts,
          title: "More From This Artist",
          buttonName: "Go to artist page",
          buttonHref: `/creator/${(_a = nft.user) == null ? void 0 : _a.username}/created`
        }
      )
    ] })
  ] });
};
export {
  CurrentNft as default
};
