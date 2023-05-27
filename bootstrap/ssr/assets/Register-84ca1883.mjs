import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { useForm, Link, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { useEffect } from "react";
import { Card, Text, Spacer, Input, Button, Row } from "@nextui-org/react";
import { BsFillPersonFill, BsAt, BsLock, BsLockFill } from "react-icons/bs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/ai";
import "react-icons/md";
import "react-icons/si";
const RegisterForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = () => post(route("register"));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex max-w-[1920px] mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex w-full lg:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://airnfts.s3.amazonaws.com/nft-images/20210829/Out_of_space_1630263137497.jpg",
        className: "object-cover h-full"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8", children: /* @__PURE__ */ jsxs(
      Card,
      {
        isHoverable: true,
        css: {
          borderWidth: "0px",
          maxWidth: "400px",
          mt: "120px"
        },
        children: [
          /* @__PURE__ */ jsxs(Card.Body, { children: [
            /* @__PURE__ */ jsx(Text, { h3: true, className: "text-center", children: "Register" }),
            /* @__PURE__ */ jsx(Spacer, { y: 2 }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "username",
                placeholder: "Enter your username",
                value: data.username,
                onChange: (e) => setData("username", e.target.value),
                helperText: errors.username,
                helperColor: "error",
                clearable: true,
                bordered: true,
                fullWidth: true,
                color: "primary",
                size: "lg",
                contentLeft: /* @__PURE__ */ jsx(BsFillPersonFill, {})
              }
            ),
            /* @__PURE__ */ jsx(Spacer, { y: 1.5 }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "email",
                placeholder: "Enter your email",
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
                placeholder: "Enter your password",
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
            /* @__PURE__ */ jsx(Spacer, { y: 1.5 }),
            /* @__PURE__ */ jsx(
              Input.Password,
              {
                type: "password",
                placeholder: "Confirm your password",
                value: data.password_confirmation,
                onChange: (e) => setData(
                  "password_confirmation",
                  e.target.value
                ),
                helperText: errors.password_confirmation,
                helperColor: "error",
                clearable: true,
                bordered: true,
                fullWidth: true,
                color: "primary",
                size: "lg",
                contentLeft: /* @__PURE__ */ jsx(BsLockFill, {})
              }
            ),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onPress: submit,
                disabled: processing,
                css: { width: "100%" },
                children: "Sign up"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Card.Footer, { children: /* @__PURE__ */ jsxs(
            Row,
            {
              justify: "space-between",
              css: { mx: "10px" },
              className: "-mt-3",
              children: [
                /* @__PURE__ */ jsx(Link, { href: route("password.request"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Forgot password?" }) }),
                /* @__PURE__ */ jsx(Link, { href: route("login"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Already have account?" }) })
              ]
            }
          ) })
        ]
      }
    ) })
  ] }) });
};
const Register = ({ auth }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(RegisterForm, {}) })
  ] });
};
export {
  Register as default
};
