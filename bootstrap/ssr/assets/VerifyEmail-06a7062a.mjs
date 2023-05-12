import { a as jsxs, F as Fragment, j as jsx } from "../app.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { Button } from "@nextui-org/react";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/ai";
import "react-icons/bs";
import "react-icons/md";
import "react-icons/si";
import "react";
const VerifyEmail = ({ status, auth }) => {
  const { post, processing } = useForm({});
  const submit = (e) => post(route("verification.send"));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsxs(Layout, { auth, children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-400", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
      status === "verification-link-sent" ? /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-400", children: "A new verification link has been sent to the email address you provided during registration." }) : /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Resend Verification Email" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("logout"),
            method: "post",
            as: "button",
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md",
            children: "Log Out"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  VerifyEmail as default
};
