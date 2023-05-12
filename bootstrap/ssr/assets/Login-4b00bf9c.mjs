import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { useForm, Link, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { useEffect } from "react";
import { Card, Text, Spacer, Input, Row, Checkbox, Button } from "@nextui-org/react";
import { BsAt, BsLock } from "react-icons/bs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/ai";
import "react-icons/md";
import "react-icons/si";
const LoginForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => reset("password");
  }, []);
  const submit = () => post(route("login"));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex max-w-[1920px] mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex w-full lg:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://airnfts.s3.amazonaws.com/nft-images/20210830/Blue_space__1630266520997.jpg",
        className: "object-cover h-full"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8", children: /* @__PURE__ */ jsxs(
      Card,
      {
        css: {
          borderWidth: "0px",
          maxWidth: "400px",
          mt: "120px"
        },
        isHoverable: true,
        children: [
          /* @__PURE__ */ jsxs(Card.Body, { children: [
            /* @__PURE__ */ jsx(Text, { h3: true, className: "text-center", children: "Login" }),
            /* @__PURE__ */ jsx(Spacer, { y: 2 }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "email",
                placeholder: "Email",
                value: data.email,
                onChange: (e) => setData("email", e.target.value),
                helperText: errors.email,
                helperColor: "error",
                clearable: true,
                bordered: true,
                fullWidth: true,
                color: "primary",
                size: "lg",
                contentLeft: /* @__PURE__ */ jsx(BsAt, {})
              }
            ),
            /* @__PURE__ */ jsx(Spacer, { y: 1.5 }),
            /* @__PURE__ */ jsx(
              Input.Password,
              {
                type: "password",
                placeholder: "Password",
                value: data.password,
                onChange: (e) => setData("password", e.target.value),
                helperText: errors.password,
                helperColor: "error",
                clearable: true,
                bordered: true,
                fullWidth: true,
                color: "primary",
                size: "lg",
                contentLeft: /* @__PURE__ */ jsx(BsLock, {})
              }
            ),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
            /* @__PURE__ */ jsx(Row, { justify: "space-between", children: /* @__PURE__ */ jsx(
              Checkbox,
              {
                value: data.remember,
                onChange: (isSelected) => setData("remember", isSelected + ""),
                children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Remember me" })
              }
            ) }),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(
              Button,
              {
                onPress: submit,
                disabled: processing,
                css: { width: "100%" },
                children: "Sign in"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(Card.Footer, { children: /* @__PURE__ */ jsxs(
            Row,
            {
              justify: "space-between",
              css: { mx: "10px" },
              children: [
                /* @__PURE__ */ jsx(Link, { href: route("password.request"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Forgot password?" }) }),
                /* @__PURE__ */ jsx(Link, { href: route("register"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Not registered yet?" }) })
              ]
            }
          ) })
        ]
      }
    ) })
  ] }) });
};
const Login = ({ auth }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(LoginForm, {}) })
  ] });
};
export {
  Login as default
};
