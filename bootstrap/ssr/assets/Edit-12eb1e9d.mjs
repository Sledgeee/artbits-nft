import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { useForm, Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-8810c63e.mjs";
import { Card, Text, Spacer, Input, Button, Modal, Textarea } from "@nextui-org/react";
import { BsLockFill, BsLock, BsAt, BsPersonCircle, BsImage } from "react-icons/bs";
import { useState } from "react";
import { u as useUser } from "./useUser-4ec56f42.mjs";
import "react/jsx-runtime";
import "axios";
import "react-dom/client";
import "react-icons/ai";
import "react-icons/md";
import "react-icons/si";
function UpdatePasswordForm() {
  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = () => {
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => {
        if (errors.password) {
          reset("password", "password_confirmation");
        }
        if (errors.current_password) {
          reset("current_password");
        }
      }
    });
  };
  return /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsxs(Card.Body, { children: [
    /* @__PURE__ */ jsx(Text, { h4: true, children: "Update Password" }),
    /* @__PURE__ */ jsx(Text, { color: "gray", size: "$sm", children: "Ensure your account is using a long, random password to stay secure." }),
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        Input.Password,
        {
          value: data.current_password,
          onChange: (e) => setData("current_password", e.target.value),
          helperColor: "error",
          helperText: errors.current_password,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Enter current password",
          contentLeft: /* @__PURE__ */ jsx(BsLockFill, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Input.Password,
        {
          value: data.password,
          onChange: (e) => setData("password", e.target.value),
          helperColor: "error",
          helperText: errors.password,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Enter your password",
          contentLeft: /* @__PURE__ */ jsx(BsLock, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Input.Password,
        {
          value: data.password_confirmation,
          onChange: (e) => setData(
            "password_confirmation",
            e.target.value
          ),
          helperColor: "error",
          helperText: errors.password_confirmation,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Confirm your password",
          contentLeft: /* @__PURE__ */ jsx(BsLock, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsx(
      Button,
      {
        disabled: processing,
        css: { width: "100%" },
        color: "default",
        onPress: updatePassword,
        children: "Update password"
      }
    )
  ] }) });
}
function DeleteUserForm() {
  const [visible, setVisible] = useState();
  const handler = () => setVisible(true);
  const closeModal = () => reset();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = () => destroy(route("profile.destroy"), {
    preserveScroll: true,
    onSuccess: () => closeModal(),
    onFinish: () => reset()
  });
  return /* @__PURE__ */ jsxs(Card, { css: { borderWidth: "0px" }, children: [
    /* @__PURE__ */ jsxs(Card.Body, { children: [
      /* @__PURE__ */ jsx(Text, { h4: true, children: "Delete Account" }),
      /* @__PURE__ */ jsx(Text, { color: "gray", size: "$sm", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." }),
      /* @__PURE__ */ jsx(Spacer, { y: 1 }),
      /* @__PURE__ */ jsx(Button, { auto: true, color: "error", shadow: true, onPress: handler, children: "Delete Account" })
    ] }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        closeButton: true,
        "aria-labelledby": "delete-user-modal",
        open: visible,
        onClose: closeModal,
        children: [
          /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Text, { h3: true, className: "text-center", children: "Delete user" }) }),
          /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx(
            Input.Password,
            {
              value: data.password,
              onChange: (e) => setData("password", e.target.value),
              helperColor: "error",
              helperText: errors.password,
              clearable: true,
              bordered: true,
              fullWidth: true,
              color: "primary",
              size: "lg",
              placeholder: "Enter your password",
              contentLeft: /* @__PURE__ */ jsx(BsLock, {})
            }
          ) }),
          /* @__PURE__ */ jsx(Modal.Footer, { children: /* @__PURE__ */ jsx(
            Button,
            {
              disabled: processing,
              css: { width: "100%" },
              color: "error",
              onPress: deleteUser,
              children: "User delete"
            }
          ) })
        ]
      }
    )
  ] });
}
const UpdateProfileInformation = () => {
  const user = useUser();
  const { data, setData, patch, errors, processing } = useForm({
    username: user.username,
    email: user.email,
    banner_image: user.banner_image,
    avatar_image: user.avatar_image,
    bio: user.bio
  });
  const submit = () => patch(route("profile.update"));
  return /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsxs(Card.Body, { children: [
    /* @__PURE__ */ jsx(Text, { h4: true, children: "Profile Information" }),
    /* @__PURE__ */ jsx(Text, { color: "gray", size: "$sm", children: "Update your account's profile information and email address." }),
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: data.email,
          onChange: (e) => setData("email", e.target.value),
          helperColor: "error",
          helperText: errors.email,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Change email",
          contentLeft: /* @__PURE__ */ jsx(BsAt, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: data.username,
          onChange: (e) => setData("username", e.target.value),
          helperColor: "error",
          helperText: errors.username,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          labelLeft: "username"
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: data.avatar_image,
          onChange: (e) => setData("avatar_image", e.target.value),
          helperColor: "error",
          helperText: errors.avatar_image,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Enter avatar image url",
          contentLeft: /* @__PURE__ */ jsx(BsPersonCircle, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: data.banner_image,
          onChange: (e) => setData("banner_image", e.target.value),
          helperColor: "error",
          helperText: errors.banner_image,
          clearable: true,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Enter banner image url",
          contentLeft: /* @__PURE__ */ jsx(BsImage, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: data.bio,
          onChange: (e) => setData("bio", e.target.value),
          helperColor: "error",
          helperText: errors.bio,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          placeholder: "Enter bio info"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsx(
      Button,
      {
        disabled: processing,
        css: { width: "100%" },
        color: "primary",
        onPress: submit,
        children: "Update user"
      }
    )
  ] }) });
};
const ConnectWalletForm = () => {
  const user = useUser();
  const { data, setData, patch, errors } = useForm({
    email: user.email,
    metamask_address: user.metamask_address
  });
  const saveWallet = () => patch(route("profile.update"));
  return /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsxs(Card.Body, { children: [
    /* @__PURE__ */ jsx(Text, { h4: true, children: "Metamask wallet" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        value: data.metamask_address,
        onChange: (e) => setData("metamask_address", e.target.value),
        helperColor: "error",
        helperText: errors.metamask_address,
        placeholder: "Enter your metamask address",
        clearable: true,
        bordered: true,
        fullWidth: true
      }
    ),
    /* @__PURE__ */ jsx(Spacer, { y: 1 }),
    /* @__PURE__ */ jsx(Button, { onPress: saveWallet, children: "Save wallet" })
  ] }) });
};
const Edit = ({ auth }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "my-8 mx-2 space-y-6", children: [
      /* @__PURE__ */ jsx(UpdateProfileInformation, {}),
      /* @__PURE__ */ jsx(ConnectWalletForm, {}),
      /* @__PURE__ */ jsx(UpdatePasswordForm, {}),
      /* @__PURE__ */ jsx(DeleteUserForm, {})
    ] }) }) })
  ] });
};
export {
  Edit as default
};
