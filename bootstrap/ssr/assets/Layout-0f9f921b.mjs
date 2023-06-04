import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { Row, Text, Spacer, Input, Button, useTheme, Navbar, Switch, Dropdown, Avatar, changeTheme, createTheme, getDocumentTheme, NextUIProvider } from "@nextui-org/react";
import { BsDiscord, BsYoutube, BsInstagram, BsTwitter, BsSunFill, BsMoonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link, router } from "@inertiajs/react";
import { SiCoinmarketcap } from "react-icons/si";
import { useState, useEffect } from "react";
const AppFooter = () => {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("div", { className: "min-h-[20px] container mx-auto border-t-[0.5px] mt-3", children: /* @__PURE__ */ jsxs("div", { className: "my-4 flex justify-between ml-4 mx-4 sm:mr-20", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(SiCoinmarketcap, { className: "mr-2 text-2xl sm:text-md" }),
        /* @__PURE__ */ jsx(Text, { b: true, children: "ArtBits - NFT Marketplace" })
      ] }),
      /* @__PURE__ */ jsx(Text, { color: "#787f85", children: "NFT marketplace." }),
      /* @__PURE__ */ jsx(Spacer, { y: 1 }),
      /* @__PURE__ */ jsx(Text, { small: true, children: "Join our community" }),
      /* @__PURE__ */ jsxs(Row, { className: "gap-x-2 text-gray-500", children: [
        /* @__PURE__ */ jsx(BsDiscord, {}),
        /* @__PURE__ */ jsx(BsYoutube, {}),
        /* @__PURE__ */ jsx(BsInstagram, {}),
        /* @__PURE__ */ jsx(BsTwitter, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: "Explore" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
        /* @__PURE__ */ jsx(Link, { href: "/nft", className: "text-[#787f85]", children: "Marketplace" }),
        /* @__PURE__ */ jsx(Link, { href: "/rankings", className: "text-[#787f85]", children: "Rankings" }),
        /* @__PURE__ */ jsx(Link, { href: "/collections", className: "text-[#787f85]", children: "Collections" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:block", children: [
      /* @__PURE__ */ jsx(Text, { h4: true, b: true, children: "Join our weekly digest" }),
      /* @__PURE__ */ jsx(Text, { h6: true, color: "#787f85", children: "Get exclusive promotions & updates straight to your inbox." }),
      /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "email",
            placeholder: "Enter your email",
            css: { width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "ml-2",
            shadow: true,
            color: "secondary",
            auto: true,
            children: [
              /* @__PURE__ */ jsx(MdEmail, { className: "mr-1" }),
              /* @__PURE__ */ jsx(Text, { span: true, children: "Subscribe" })
            ]
          }
        )
      ] })
    ] })
  ] }) }) });
};
const faqData = [
  {
    title: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    img: "/images/faq/1.png"
  },
  {
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    img: "/images/faq/2.png"
  },
  {
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    img: "/images/faq/3.png"
  }
];
const routes = [
  {
    name: "Marketplace",
    href: "/nft"
  },
  {
    name: "Rankings",
    href: "/rankings"
  },
  {
    name: "Collections",
    href: "/collections"
  }
];
const navigate = (href) => router.replace(href);
const AppHeader = ({ user }) => {
  const { isDark } = useTheme();
  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme);
    changeTheme(nextTheme);
  };
  const checkActive = (href) => location.pathname === href;
  return /* @__PURE__ */ jsxs(Navbar, { isBordered: true, variant: "sticky", children: [
    /* @__PURE__ */ jsxs(
      Navbar.Brand,
      {
        className: "cursor-pointer",
        onClick: () => navigate("/"),
        children: [
          /* @__PURE__ */ jsx(Navbar.Toggle, { showIn: "xs", className: "mr-2" }),
          /* @__PURE__ */ jsx(SiCoinmarketcap, { className: "mr-2 text-3xl sm:text-md" }),
          /* @__PURE__ */ jsx(Text, { b: true, hideIn: "xs", children: "ArtBits" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Navbar.Content,
      {
        enableCursorHighlight: true,
        activeColor: "primary",
        hideIn: "xs",
        variant: "highlight",
        children: routes.map((value, index) => /* @__PURE__ */ jsx(
          Navbar.Link,
          {
            isActive: checkActive(value.href),
            onClick: () => navigate(value.href),
            children: value.name
          },
          index
        ))
      }
    ),
    /* @__PURE__ */ jsxs(Navbar.Content, { children: [
      /* @__PURE__ */ jsx(Navbar.Item, { children: /* @__PURE__ */ jsx(
        Switch,
        {
          checked: isDark,
          onChange: handleChange,
          iconOn: /* @__PURE__ */ jsx(BsSunFill, {}),
          iconOff: /* @__PURE__ */ jsx(BsMoonFill, {})
        }
      ) }),
      /* @__PURE__ */ jsx(Navbar.Item, { children: !user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Spacer, { x: -0.5 }),
        /* @__PURE__ */ jsx(
          Button,
          {
            auto: true,
            bordered: true,
            shadow: true,
            color: "gradient",
            onPress: () => navigate(
              route("login") + "?returnTo=" + window.location.pathname
            ),
            children: "Login"
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Spacer, { x: -0.5 }),
        /* @__PURE__ */ jsxs(Dropdown, { placement: "bottom-right", children: [
          /* @__PURE__ */ jsx(Navbar.Item, { children: /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(
            Avatar,
            {
              bordered: true,
              as: "button",
              color: "primary",
              size: "md",
              src: user.avatar_image
            }
          ) }) }),
          /* @__PURE__ */ jsxs(
            Dropdown.Menu,
            {
              "aria-label": "User menu actions",
              color: "primary",
              children: [
                /* @__PURE__ */ jsxs(
                  Dropdown.Item,
                  {
                    css: { height: "$18" },
                    children: [
                      /* @__PURE__ */ jsx(
                        Text,
                        {
                          b: true,
                          color: "inherit",
                          css: { d: "flex" },
                          children: "Signed in as"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Text,
                        {
                          b: true,
                          color: "inherit",
                          css: { d: "flex" },
                          children: user.email
                        }
                      )
                    ]
                  },
                  "profile"
                ),
                /* @__PURE__ */ jsx(
                  Dropdown.Item,
                  {
                    withDivider: true,
                    children: /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: "Dashboard" })
                  },
                  "dashboard"
                ),
                /* @__PURE__ */ jsx(Dropdown.Item, { children: /* @__PURE__ */ jsx(Link, { href: "/profile", children: "Edit profile" }) }, "edit-profile"),
                /* @__PURE__ */ jsx(Dropdown.Item, { withDivider: true, color: "error", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("logout"),
                    method: "post",
                    children: "Log Out"
                  }
                ) })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Navbar.Collapse, { children: routes.map((item, index) => /* @__PURE__ */ jsx(
      Navbar.CollapseItem,
      {
        activeColor: "warning",
        isActive: checkActive(item.href),
        children: /* @__PURE__ */ jsx(Link, { color: "inherit", href: item.href, children: item.name })
      },
      index
    )) })
  ] });
};
const lightTheme = createTheme({
  type: "light"
});
const darkTheme = createTheme({
  type: "dark"
});
const Layout = ({
  children,
  auth
}) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const theme = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");
    const observer = new MutationObserver(() => {
      const newTheme = getDocumentTheme(
        document == null ? void 0 : document.documentElement
      );
      setIsDark(newTheme === "dark");
    });
    observer.observe(document == null ? void 0 : document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"]
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(NextUIProvider, { theme: isDark ? darkTheme : lightTheme, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ jsx(AppHeader, { user: auth.user }),
    /* @__PURE__ */ jsx("main", { className: "w-full flex-grow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children }) }),
    /* @__PURE__ */ jsx(AppFooter, {})
  ] }) });
};
const Layout$1 = Layout;
export {
  Layout$1 as L,
  Layout as a,
  faqData as f,
  navigate as n
};
