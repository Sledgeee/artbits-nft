const userNftsTableColumns = [
  {
    key: "key",
    label: "№"
  },
  {
    key: "img",
    label: "Image"
  },
  {
    key: "name",
    label: "Name"
  },
  {
    key: "price",
    label: "Price"
  },
  {
    key: "tools",
    label: "Tools"
  }
];
const rankingsTableColumns = [
  {
    key: "key",
    label: "Number"
  },
  {
    key: "creatorName",
    label: "Creators"
  },
  {
    key: "nftSoled",
    label: "NFTs Sold"
  },
  {
    key: "volume",
    label: "Volume"
  }
];
const betsTableColumns = [
  { key: "key", label: "Number" },
  { key: "value", label: "Bet Price" },
  { key: "user", label: "User" }
];
export {
  betsTableColumns as b,
  rankingsTableColumns as r,
  userNftsTableColumns as u
};
