import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { L as Layout } from "./Layout-0f9f921b.mjs";
import { useForm, Head } from "@inertiajs/react";
import { Card, Text, Input, Textarea, Dropdown, Progress, Spacer, Button, Table, Avatar, Row, Col, Tooltip as Tooltip$1 } from "@nextui-org/react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from "recharts";
import { useState } from "react";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { AiOutlineFieldNumber, AiOutlineCloudUpload } from "react-icons/ai";
import { BsEye, BsTrash } from "react-icons/bs";
import { u as useUser } from "./useUser-4ec56f42.mjs";
import { u as userNftsTableColumns } from "./tableColumns-394ae99e.mjs";
import axios from "axios";
import "react/jsx-runtime";
import "react-dom/client";
import "react-icons/md";
import "react-icons/si";
const TransactionGraph = ({
  transactions
}) => {
  return /* @__PURE__ */ jsx(Card, { css: { borderWidth: "0px" }, children: /* @__PURE__ */ jsxs(Card.Body, { children: [
    /* @__PURE__ */ jsx(Text, { h3: true, className: "mx-6", children: "Transactions review" }),
    /* @__PURE__ */ jsx("div", { className: "h-[28rem]", children: /* @__PURE__ */ jsx(
      ResponsiveContainer,
      {
        width: "100%",
        height: "100%",
        className: "-mx-4",
        children: /* @__PURE__ */ jsxs(
          AreaChart,
          {
            data: transactions,
            children: [
              /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 9" }),
              /* @__PURE__ */ jsx(
                XAxis,
                {
                  dataKey: "date",
                  name: "Date:",
                  fontSize: 10
                }
              ),
              /* @__PURE__ */ jsx(YAxis, { name: "ETH", fontSize: 10 }),
              /* @__PURE__ */ jsx(Tooltip, {}),
              /* @__PURE__ */ jsx(Legend, {}),
              /* @__PURE__ */ jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "total_value",
                  name: "From",
                  activeDot: { r: 8 }
                }
              ),
              /* @__PURE__ */ jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "total_value_to",
                  stroke: "red",
                  name: "To"
                }
              )
            ]
          }
        )
      }
    ) })
  ] }) });
};
const CreateNftCard = ({
  userItems,
  categories
}) => {
  var _a;
  const {
    data,
    setData,
    errors,
    reset,
    post,
    progress,
    setError
  } = useForm({
    name: "",
    description: "",
    image: {},
    price: 1,
    category_id: 1,
    auction_date: (/* @__PURE__ */ new Date()).getDate() || void 0
  });
  const [buttColor, setButtColor] = useState("primary");
  const submit = () => {
    if (!errors.auction_date || !errors.name)
      post(route("nft.create"), {
        preserveScroll: true,
        onSuccess: () => {
          setButtColor("success");
          setData("name", "");
          setData("description", "");
          setData("price", 1);
          setData("auction_date", void 0);
          setData("category_id", 1);
          setData("image", void 0);
          setTimeout(() => setButtColor("primary"), 4e3);
          location.reload();
        },
        onError: () => setButtColor("error")
      });
    else
      setButtColor("error");
  };
  const validateName = (e) => {
    if (userItems.some((value) => value.name === e.target.value)) {
      setButtColor("error");
      setError("name", "You need to enter a unique name!");
    } else {
      setButtColor("primary");
      setError("name", "");
      setData("name", e.target.value);
    }
  };
  const validateDate = (e) => {
    if (/* @__PURE__ */ new Date() > new Date(e.target.value)) {
      setButtColor("error");
      setError(
        "auction_date",
        "You need to enter a date greater than today!"
      );
    } else {
      setError("auction_date", "");
      setData("auction_date", e.target.value);
      setButtColor("primary");
    }
  };
  return /* @__PURE__ */ jsxs(Card, { css: { borderWidth: "0px" }, children: [
    /* @__PURE__ */ jsx(Card.Header, { children: /* @__PURE__ */ jsx(Text, { h4: true, children: "Create new nft" }) }),
    /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: data.name,
          onChange: validateName,
          helperColor: "error",
          helperText: errors.name,
          clearable: true,
          bordered: true,
          fullWidth: true,
          size: "lg",
          color: "primary",
          label: "Enter nft name",
          contentLeft: /* @__PURE__ */ jsx(RxLetterCaseCapitalize, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: data.description,
          onChange: (e) => setData("description", e.target.value),
          helperColor: "error",
          helperText: errors.description,
          bordered: true,
          fullWidth: true,
          size: "lg",
          color: "primary",
          label: "Enter description for nft"
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "datetime-local",
          value: data.auction_date,
          onChange: validateDate,
          helperColor: "error",
          helperText: errors.auction_date,
          bordered: true,
          fullWidth: true,
          size: "lg",
          color: "primary",
          label: "Enter end auction date"
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "number",
          min: 1,
          value: data.price,
          onChange: (e) => setData("price", Number(e.target.value)),
          helperColor: "error",
          helperText: errors.description,
          bordered: true,
          fullWidth: true,
          color: "primary",
          size: "lg",
          label: "Enter minimum price",
          contentLeft: /* @__PURE__ */ jsx(AiOutlineFieldNumber, {})
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("label", { className: "flex justify-center w-full h-32 px-4 transition border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-blue-300", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(AiOutlineCloudUpload, { className: "w-6 h-6 text-gray-500" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-500", children: ((_a = data.image) == null ? void 0 : _a.name) ? "Image is selected" : "Drop image here" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            onChange: (e) => setData("image", e.target.files[0]),
            className: "hidden"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Button, { flat: true, children: `Current category is ${categories[data.category_id - 1].name}` }),
        /* @__PURE__ */ jsx(Dropdown.Menu, { "aria-label": "All categories", children: categories.map((value) => /* @__PURE__ */ jsx(
          Dropdown.Item,
          {
            color: data.category_id === value.id ? "primary" : "default",
            children: /* @__PURE__ */ jsx(
              "span",
              {
                onClick: () => setData("category_id", value.id),
                children: value.name
              }
            )
          },
          value.id
        )) })
      ] }),
      progress && /* @__PURE__ */ jsx(
        Progress,
        {
          value: progress.percentage,
          color: "gradient",
          indeterminated: true
        }
      ),
      /* @__PURE__ */ jsx(Spacer, { y: 1 }),
      /* @__PURE__ */ jsx(Button, { color: buttColor, onPress: submit, children: "Create nft" })
    ] }) })
  ] });
};
const UserNftsTable = ({
  userItems
}) => {
  const [nfts, setNfts] = useState(userItems);
  const itemsLength = nfts.length;
  const user = useUser();
  const deleteNft = (id) => axios.delete(route("nft.delete", id)).then(() => setNfts(nfts.filter((n) => n.id !== id)));
  return /* @__PURE__ */ jsxs(Card, { css: { borderWidth: "0px" }, children: [
    /* @__PURE__ */ jsx(Card.Header, { children: /* @__PURE__ */ jsx(Text, { h4: true, children: itemsLength > 0 ? "Created items" : "There are no products created" }) }),
    itemsLength > 0 && /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs(
      Table,
      {
        className: "z-0",
        bordered: true,
        css: {
          p: "0px",
          border: 0
        },
        children: [
          /* @__PURE__ */ jsx(Table.Header, { columns: userNftsTableColumns, children: (column) => /* @__PURE__ */ jsx(Table.Column, { children: column.label }, column.key) }),
          /* @__PURE__ */ jsx(Table.Body, { children: nfts.map((value, index) => /* @__PURE__ */ jsxs(Table.Row, { children: [
            /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { className: "pl-1", children: index + 1 }) }),
            /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(
              Avatar,
              {
                squared: true,
                src: value.image,
                css: { p: 0 }
              }
            ) }),
            /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { children: value.name }) }),
            /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsx(Text, { children: value.price }) }),
            /* @__PURE__ */ jsx(Table.Cell, { children: /* @__PURE__ */ jsxs(Row, { justify: "center", align: "center", children: [
              /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(Tooltip$1, { content: "Show in another tab", children: /* @__PURE__ */ jsx(
                "a",
                {
                  target: "_blank",
                  href: `/nft/${user.username}/${value.name}`,
                  children: /* @__PURE__ */ jsx(
                    BsEye,
                    {
                      size: 20,
                      fill: "#979797"
                    }
                  )
                }
              ) }) }),
              /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs(
                Tooltip$1,
                {
                  content: `Delete nft ${value.name}`,
                  color: "error",
                  onClick: () => deleteNft(value.id),
                  children: [
                    " ",
                    /* @__PURE__ */ jsx(
                      BsTrash,
                      {
                        size: 20,
                        fill: "#FF0080"
                      }
                    )
                  ]
                }
              ) })
            ] }) })
          ] }, index)) }),
          /* @__PURE__ */ jsx(
            Table.Pagination,
            {
              shadow: true,
              css: { pb: "10px" },
              align: "center",
              rowsPerPage: itemsLength > 10 ? 10 : itemsLength
            }
          )
        ]
      }
    ) })
  ] });
};
const Dashboard = ({
  auth,
  transactions,
  userItems,
  categories
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(Layout, { auth, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl py-12 px-4", children: [
      /* @__PURE__ */ jsx(Text, { h2: true, children: "Dashboard" }),
      /* @__PURE__ */ jsx(
        CreateNftCard,
        {
          userItems,
          categories
        }
      ),
      /* @__PURE__ */ jsx(Spacer, { y: 1 }),
      /* @__PURE__ */ jsx(UserNftsTable, { userItems }),
      /* @__PURE__ */ jsx(Spacer, { y: 1 }),
      /* @__PURE__ */ jsx(TransactionGraph, { transactions })
    ] }) })
  ] });
};
export {
  Dashboard as default
};
