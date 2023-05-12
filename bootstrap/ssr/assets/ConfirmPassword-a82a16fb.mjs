import { j as jsx, a as jsxs } from "../app.mjs";
import { useForm, Link } from "@inertiajs/react";
import { useEffect } from "react";
import { Card, Text, Spacer, Input, Row, Button } from "@nextui-org/react";
import { BsAt } from "react-icons/bs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
const ConfirmPassword = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = () => post(route("password.email"));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
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
              type: "password",
              placeholder: "Confirm your password",
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
        /* @__PURE__ */ jsx(Card.Footer, { children: /* @__PURE__ */ jsxs(Row, { justify: "space-between", css: { mx: "10px" }, children: [
          /* @__PURE__ */ jsx(Link, { href: route("login"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Already have account?" }) }),
          /* @__PURE__ */ jsx(Link, { href: route("register"), children: /* @__PURE__ */ jsx(Text, { size: 14, children: "Not registered yet?" }) })
        ] }) })
      ]
    }
  ) });
};
export {
  ConfirmPassword as default
};
