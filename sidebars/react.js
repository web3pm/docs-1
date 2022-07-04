/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  react: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },

    {
      type: "category",
      label: "UI Components",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "UI Components",
        description:
          "Pre-built components for you to use in your React applications.",
        keywords: ["components"],
      },
      items: [
        {
          type: "doc",
          label: "NFT Renderer",
          id: "react.thirdwebnftmedia",
        },
      ],
    },

    {
      type: "category",
      label: "Wallet Connection",
      link: {
        type: "generated-index",
        title: "Wallet Connection",
        description:
          "Hooks to view the connected wallet address, and let users connect and disconnect their wallets.",
        keywords: ["wallet", "connection"],
      },
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "useAddress",
          id: "react.useaddress",
        },
        {
          type: "doc",
          label: "useMetamask",
          id: "react.usemetamask",
        },
        {
          type: "doc",
          label: "useWalletConnect",
          id: "react.usewalletconnect",
        },
        {
          type: "doc",
          label: "useCoinbaseWallet",
          id: "react.usecoinbasewallet",
        },
        {
          type: "doc",
          label: "useMagic",
          id: "react.usemagic",
        },
        {
          type: "doc",
          label: "useGnosis",
          id: "react.usegnosis",
        },
        {
          type: "doc",
          label: "useDisconnect",
          id: "react.usedisconnect",
        },
      ],
    },
    {
      type: "category",
      label: "Network Info",
      link: {
        type: "generated-index",
        title: "Wallet Info",
        description:
          "Hooks to view information about the user's current network, and to switch networks.",
        keywords: ["network", "info"],
      },
      items: [
        {
          type: "doc",
          label: "useChainId",
          id: "react.usechainid",
        },
        {
          type: "doc",
          label: "useNetwork",
          id: "react.usenetwork",
        },
        {
          type: "doc",
          label: "useNetworkMismatch",
          id: "react.usenetworkmismatch",
        },
      ],
    },
    {
      type: "category",
      label: "Get a Contract",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Contracts Hooks",
        description: "Hooks to interact with thirdweb contracts and sdk",
        keywords: ["contract", "hooks"],
      },
      items: [
        {
          type: "doc",
          label: "Custom Contract",
          id: "react.usecontract",
        },
        {
          type: "doc",
          label: "Edition",
          id: "react.useedition",
        },
        {
          type: "doc",
          label: "Edition Drop",
          id: "react.useeditiondrop",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "react.usemarketplace",
        },
        {
          type: "doc",
          label: "Multiwrap",
          id: "react.usemultiwrap",
        },
        {
          type: "doc",
          label: "NFT Collection",
          id: "react.usenftcollection",
        },
        {
          type: "doc",
          label: "NFT Drop",
          id: "react.usenftdrop",
        },
        {
          type: "doc",
          label: "Pack",
          id: "react.usepack",
        },
        {
          type: "doc",
          label: "Signature Drop",
          id: "react.usesignaturedrop",
        },
        {
          type: "doc",
          label: "Split",
          id: "react.usesplit",
        },
        {
          type: "doc",
          label: "Token",
          id: "react.usetoken",
        },
        // {
        //   type: "doc",
        //   label: "useTokenDrop",
        //   id: "react.usetokendrop",
        // },
        {
          type: "doc",
          label: "Vote",
          id: "react.usevote",
        },
      ],
    },
    {
      type: "category",
      label: "NFT & Edition",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "NFT",
        description:
          "Convenient react hooks for NFT contracts that give you out-of-the-box functionality",
        keywords: ["nft", "hooks"],
      },
      items: [
        {
          type: "category",
          label: "Read Hooks",
          items: [
            {
              type: "doc",
              label: "NFT by Token ID",
              id: "react.usenft",
            },
            {
              type: "doc",
              label: "All NFTs",
              id: "react.usenfts",
            },
            {
              type: "doc",
              label: "Unclaimed NFTs",
              id: "react.useunclaimednfts",
            },
            {
              type: "doc",
              label: "Claimed NFTs",
              id: "react.useclaimednfts",
            },
            {
              type: "doc",
              label: "Total Supply",
              id: "react.usetotalcirculatingsupply",
            },
            {
              type: "doc",
              label: "Unclaimed Supply",
              id: "react.useunclaimednftsupply",
            },
            {
              type: "doc",
              label: "Claimed Supply",
              id: "react.useclaimednftsupply",
            },
            {
              type: "doc",
              label: "Owned NFTs",
              id: "react.useownednfts",
            },
            {
              type: "doc",
              label: "NFT Balance",
              id: "react.usenftbalance",
            },
            {
              type: "doc",
              label: "Number of NFTs (ERC-1155)",
              id: "react.usetotalcount",
            },
          ],
        },
        {
          type: "category",
          label: "Write Hooks",
          items: [
            {
              type: "doc",
              label: "Mint an NFT",
              id: "react.usemintnft",
            },
            {
              type: "doc",
              label: "Claim an NFT",
              id: "react.useclaimnft",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Token",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Token",
        description:
          "Convenient react hooks for ERC-20 token contracts that give you out-of-the-box functionality",
        keywords: ["token", "hooks"],
      },
      items: [
        {
          type: "category",
          label: "Read Hooks",
          items: [
            {
              type: "doc",
              label: "Total Supply",
              id: "react.usetokensupply",
            },
            {
              type: "doc",
              label: "Token Balance",
              id: "react.usetokenbalance",
            },
          ],
        },
        {
          type: "category",
          label: "Write Hooks",
          items: [
            {
              type: "doc",
              label: "Mint Tokens",
              id: "react.useminttoken",
            },
            {
              type: "doc",
              label: "Claim Tokens (Token Drop)",
              id: "react.useclaimtoken",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Marketplace",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Marketplace",
        description:
          "Convenient react hooks for the marketplace contract that give you out-of-the-box functionality",
        keywords: ["marketplace", "hooks"],
      },
      items: [
        {
          type: "category",
          label: "Read Hooks",
          items: [
            {
              type: "doc",
              label: "Listing by ID",
              id: "react.uselisting",
            },
            {
              type: "doc",
              label: "All Listings",
              id: "react.uselistings",
            },
            {
              type: "doc",
              label: "Active Listings",
              id: "react.useactivelistings",
            },
            {
              type: "doc",
              label: "Winning Bid (Auction)",
              id: "react.usewinningbid",
            },
            {
              type: "doc",
              label: "Auction Winner (Auction)",
              id: "react.useauctionwinner",
            },
            {
              type: "doc",
              label: "Bid Buffer (Auction)",
              id: "react.usebidbuffer",
            },
          ],
        },
        {
          type: "category",
          label: "Write Hooks",
          items: [
            {
              type: "doc",
              label: "Create Direct Listing",
              id: "react.usecreatedirectlisting",
            },
            {
              type: "doc",
              label: "Create Auction Listing",
              id: "react.usecreateauctionlisting",
            },
            {
              type: "doc",
              label: "Make a Bid",
              id: "react.usemakebid",
            },
            {
              type: "doc",
              label: "Buyout a Listing",
              id: "react.usebuynow",
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Custom Contracts",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Custom Contracts",
        description:
          "Convenient react hooks for custom contracts that give you out-of-the-box functionality",
        keywords: ["custom", "hooks"],
      },
      items: [
        {
          type: "category",
          label: "Read Hooks",
          items: [
            {
              type: "doc",
              label: "Read a Contract's View/Mapping",
              id: "react.usecontractdata",
            },
            {
              type: "doc",
              label: "Read All Contract Events",
              id: "react.useallcontractevents",
            },
            {
              type: "doc",
              label: "Read A Specific Contract Event",
              id: "react.usecontractevents",
            },
            {
              type: "doc",
              label: "Contract Type",
              id: "react.usecontracttype",
            },
            {
              type: "doc",
              label: "Contract Metadata",
              id: "react.usecontractmetadata",
            },
          ],
        },
        {
          type: "category",
          label: "Write Hooks",
          items: [
            {
              type: "doc",
              label: "Call a Contract's Function",
              id: "react.usecontractcall",
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Claim Conditions",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Claim Conditions",
        description:
          "Convenient react hooks to view information about drop contract's claim phases",
        keywords: ["drop", "claim-phases", "hooks"],
      },
      items: [
        {
          type: "doc",
          label: "Active Claim Condition",
          id: "react.useactiveclaimcondition",
        },
        {
          type: "doc",
          label: "All Claim Conditions",
          id: "react.useclaimconditions",
        },
        {
          type: "doc",
          label: "Claim Inelibility Reasons",
          id: "react.useclaimineligibilityreasons",
        },
      ],
    },

    {
      type: "category",
      label: "Configuration",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Configuration",
        description:
          "Convenient react hooks to view and set configuration such as royalty and platform fees on your contract.",
        keywords: ["royalty", "fees", "hooks"],
      },
      items: [
        {
          type: "category",
          label: "Contract Settings",
          items: [
            {
              type: "doc",
              label: "Read Contract Metadata",
              id: "react.usemetadata",
            },
            {
              type: "doc",
              label: "Update Contract Metadata",
              id: "react.useupdatemetadata",
            },
            {
              type: "doc",
              label: "Read Primary Sale Recipient",
              id: "react.useprimarysalerecipient",
            },
            {
              type: "doc",
              label: "Update Primary Sale Recipient",
              id: "react.useupdateprimarysalerecipient",
            },
            {
              type: "doc",
              label: "Read Royalty Settings",
              id: "react.useroyaltysettings",
            },
            {
              type: "doc",
              label: "Update Royalty Settings",
              id: "react.useupdateroyaltysettings",
            },
            {
              type: "doc",
              label: "Read Platform Fees",
              id: "react.useplatformfees",
            },
            {
              type: "doc",
              label: "Update Platform Fees",
              id: "react.useupdateplatformfees",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          items: [
            {
              type: "doc",
              label: "All Members of All Roles",
              id: "react.useallrolemembers",
            },
            {
              type: "doc",
              label: "All Members of One Role",
              id: "react.userolemembers",
            },
            {
              type: "doc",
              label: "Check if Address is Role",
              id: "react.useisaddressrole",
            },
            {
              type: "doc",
              label: "Overwrite All Role Members",
              id: "react.usesetallrolemembers",
            },
            {
              type: "doc",
              label: "Grant Role",
              id: "react.usegrantrole",
            },
            {
              type: "doc",
              label: "Revoke Role",
              id: "react.userevokerole",
            },
          ],
        },
      ],
    },
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    },
  ],
};

module.exports = sidebars;
