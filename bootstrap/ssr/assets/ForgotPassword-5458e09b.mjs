import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { useForm, Link, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-0f9f921b.mjs";
import { Card, Text, Spacer, Input, Row, Button } from "@nextui-org/react";
import { BsAt } from "react-icons/bs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/md";
import "react-icons/si";
import "react";
const ForgotPassForm = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = () => post(route("password.email"));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex max-w-[1920px] mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex w-full lg:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://cdn.i-scmp.com/sites/default/files/styles/portrait/public/d8/images/canvas/2021/12/17/986e4a7b-7baf-4078-b82c-4c44d1958150_2fa4f97a.jpg?itok=kcHz5C3G&v=1639737717",
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
            /* @__PURE__ */ jsx(Text, { h3: true, className: "text-center", children: "Password reset" }),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
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
                /* @__PURE__ */ jsx(Link, { href: route("login"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Already have account?" }) }),
                /* @__PURE__ */ jsx(Link, { href: route("register"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Not registered yet?" }) })
              ]
            }
          ) })
        ]
      }
    ) })
  ] }) });
};
const ForgotPassword = ({ auth }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot password?" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx(ForgotPassForm, {}) })
  ] });
};
export {
  ForgotPassword as default
};
