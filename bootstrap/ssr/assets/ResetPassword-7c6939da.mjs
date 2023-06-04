import { a as jsxs, F as Fragment, j as jsx } from "../app.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import { useEffect } from "react";
import { L as Layout } from "./Layout-0f9f921b.mjs";
import { Card, Text, Spacer, Input, Row, Button } from "@nextui-org/react";
import { BsAt } from "react-icons/bs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/md";
import "react-icons/si";
function ResetPassword({
  token,
  email,
  auth
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = () => post(route("password.store"));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(Text, { h3: true, className: "text-center", children: "Reset Password" }),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
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
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
            /* @__PURE__ */ jsx(
              Input,
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
                contentLeft: /* @__PURE__ */ jsx(BsAt, {})
              }
            ),
            /* @__PURE__ */ jsx(Spacer, { y: 1 }),
            /* @__PURE__ */ jsx(
              Input,
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
  ] });
}
export {
  ResetPassword as default
};
