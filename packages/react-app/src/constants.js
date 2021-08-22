// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";

// BLOCKNATIVE ID FOR Notify.js:
export const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: "https://rpc.scaffoldeth.io:48544",
    blockExplorer: "https://etherscan.io/",
  },
  kovan: {
    name: "kovan",
    color: "#7003DD",
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://kovan.etherscan.io/",
    faucet: "https://gitter.im/kovan-testnet/faucet", // https://faucet.kovan.network/
  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/",
  },
  ropsten: {
    name: "ropsten",
    color: "#F60D09",
    chainId: 3,
    faucet: "https://faucet.ropsten.be/",
    blockExplorer: "https://ropsten.etherscan.io/",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/",
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//",
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/",
  },
  localArbitrum: {
    name: "localArbitrum",
    color: "#50a0ea",
    chainId: 153869338190755,
    blockExplorer: "",
    rpcUrl: `http://localhost:8547`,
  },
  localArbitrumL1: {
    name: "localArbitrumL1",
    color: "#50a0ea",
    chainId: 44010,
    blockExplorer: "",
    rpcUrl: `http://localhost:7545`,
  },
  rinkebyArbitrum: {
    name: "Arbitrum Testnet",
    color: "#50a0ea",
    chainId: 421611,
    blockExplorer: "https://rinkeby-explorer.arbitrum.io/#/",
    rpcUrl: `https://rinkeby.arbitrum.io/rpc`,
  },
  arbitrum: {
    name: "Arbitrum",
    color: "#50a0ea",
    chainId: 42161,
    blockExplorer: "https://explorer.arbitrum.io/#/",
    rpcUrl: `https://arb1.arbitrum.io/rpc`,
    gasPrice: 0,
  },
  localOptimismL1: {
    name: "localOptimismL1",
    color: "#f01a37",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":9545",
  },
  localOptimism: {
    name: "localOptimism",
    color: "#f01a37",
    chainId: 420,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
    gasPrice: 0,
  },
  kovanOptimism: {
    name: "kovanOptimism",
    color: "#f01a37",
    chainId: 69,
    blockExplorer: "https://kovan-optimistic.etherscan.io/",
    rpcUrl: `https://kovan.optimism.io`,
    gasPrice: 0,
  },
  optimism: {
    name: "optimism",
    color: "#f01a37",
    chainId: 10,
    blockExplorer: "https://optimistic.etherscan.io/",
    rpcUrl: `https://mainnet.optimism.io`,
  },
};

export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};

export const generateSVG = params => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300"><defs><linearGradient id="linear-gradient" x1="150" x2="150" y2="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00bdd0"/><stop offset="1" stop-color="#008ad0"/></linearGradient><linearGradient id="linear-gradient-2" x1="30.7" y1="-8.2" x2="30.7" y2="141.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f16d76"/><stop offset="1" stop-color="#ffa358"/></linearGradient><linearGradient id="linear-gradient-3" x1="34.5" y1="29.9" x2="34.5" y2="144.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffbd58"/><stop offset="1" stop-color="#f6ec47"/></linearGradient><linearGradient id="linear-gradient-4" x1="31.9" y1="2.5" x2="31.9" y2="146.3" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-5" x1="67.8" y1="27.9" x2="67.8" y2="74.5" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-6" x1="36.5" y1="-15.1" x2="36.5" y2="52.8" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-7" x1="33.6" y1="22.5" x2="33.6" y2="148.5" xlink:href="#linear-gradient-3"/><linearGradient id="linear-gradient-8" x1="23.1" y1="-8.3" x2="23.1" y2="155.9" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-9" x1="64.9" y1="6.7" x2="64.9" y2="100" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-10" x1="48.4" y1="-45.8" x2="48.4" y2="80.7" xlink:href="#linear-gradient-2"/><linearGradient id="linear-gradient-11" x1="25.6" y1="8.2" x2="25.6" y2="149.8" xlink:href="#linear-gradient-3"/><linearGradient id="linear-gradient-12" x1="150" y1="300" x2="150" y2="139.8" xlink:href="#linear-gradient-3"/><linearGradient id="linear-gradient-13" x1="96" y1="202.4" x2="150" y2="202.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#574581"/><stop offset="1" stop-color="#4c235b"/></linearGradient><linearGradient id="linear-gradient-14" x1="150" y1="202.4" x2="204" y2="202.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ea496a"/><stop offset="1" stop-color="#ea6b60"/></linearGradient><linearGradient id="linear-gradient-15" x1="150" y1="153.7" x2="204" y2="153.7" xlink:href="#linear-gradient-14"/><linearGradient id="linear-gradient-16" x1="204" y1="105" x2="150" y2="105" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-17" x1="96" y1="105" x2="150" y2="105" xlink:href="#linear-gradient-14"/><linearGradient id="linear-gradient-18" x1="96" y1="153.7" x2="150" y2="153.7" xlink:href="#linear-gradient-13"/><linearGradient id="linear-gradient-19" x1="149.1" y1="24" x2="149.1" y2="276" xlink:href="#linear-gradient-13"/><clipPath id="clip-path"><path class="cls-1" d="M0-42.3h300v188.6H0z"/></clipPath><clipPath id="clip-path-2"><path class="cls-1" d="M.4 0h300v300H.4z"/></clipPath><style>.cls-1{fill:none}.cls-2{fill:url(#linear-gradient)}.cls-4{fill:url(#linear-gradient-2)}.cls-5{fill:url(#linear-gradient-3)}.cls-14{fill:url(#linear-gradient-12)}.cls-15{opacity:.2}.cls-16{clip-path:url(#clip-path-2)}.cls-17{fill:#e75a00}.cls-18{fill:url(#linear-gradient-13)}.cls-19{fill:#fff}.cls-20{fill:url(#linear-gradient-14)}.cls-21{fill:url(#linear-gradient-15)}.cls-22{fill:url(#linear-gradient-16)}.cls-23{fill:url(#linear-gradient-17)}.cls-24{fill:url(#linear-gradient-18)}.cls-25{stroke:#fff;stroke-miterlimit:10;fill:url(#linear-gradient-19)}</style></defs><path class="cls-2" d="M0 0h300v300H0z" id="background"/><g id="fire-layer"><g id="Fire_to_move" data-name="Fire to move"><g id="Fire1"><g id="fire-001"><path class="cls-4" d="M-4.4 139.2c-.4-12.2-17.5-31.5-9.6-49s21-13 24-30c0 0 10.3 9.6 1.1 21.6 0 0 13.3-3.8 12.8-14.6s1.5-15.7-7.4-18-22.2-18.4-9.3-35.5c0 0 2.4 14.4 13.8 8.1s20.7-26 1-26.5c0 0 12.3-8.1 19.7.4s-9.4 27-3.5 31.5S52 33.1 51.5 43 35.8 61.8 41.2 66.3s19.3 1.5 19.7-3.3c.3-4.8-7.9-10.6-1-20a18.7 18.7 0 009 11.8c9.9 5.5 12.2 17.8 2.3 26.8-6.7 6.2-15-3.4-15.9 5.9-.6 5.4 21 13 19 29.1-3.7 29.7 9.3 24.5-33.1 24.5-47.6 0-45.6-1.9-45.6-1.9z"/><path class="cls-5" d="M35 145c-62.2 0-33.8-7.3-27-16.2C19.8 113.2-2.7 113.6-2.2 100s8.9-20.3 8.9-20.3-5.2 16 2.2 16.5S24 91 27.9 76c6.6-26.2.5-40.3-8.4-46.2A37.5 37.5 0 0138 39.6c6 6-4.6 17.3-4.3 26.7.7 24.6 34.8 5 31.7-5.8 0 0 9.5 14.8-2.9 17-22.4 4.2-21.4 20.6-13 26s6 16.3 13.6 24.6c10 11 26 16.8-28.3 16.8z"/></g><use href="#fire-001" x="77"/><use href="#fire-001" x="154"/><use href="#fire-001" x="231"/></g><path class="cls-14" d="M0 139.8h300V300H0z"/></g></g><g class="cls-15" id="ray"><g class="cls-16"><path id="ray1" class="cls-17" d="M153.4 383q8.5-.1 16.9-.8L153.4 211z"/></g><use href="#ray1" transform="rotate(5.6 150 150)"/><use href="#ray1" transform="rotate(11.3 150 150)"/><use href="#ray1" transform="rotate(16.9 150 150)"/><use href="#ray1" transform="rotate(22.5 150 150)"/><use href="#ray1" transform="rotate(28.1 150 150)"/><use href="#ray1" transform="rotate(33.8 150 150)"/><use href="#ray1" transform="rotate(39.4 150 150)"/><use href="#ray1" transform="rotate(45 150 150)"/><use href="#ray1" transform="rotate(50.6 150 150)"/><use href="#ray1" transform="rotate(56.3 150 150)"/><use href="#ray1" transform="rotate(61.9 150 150)"/><use href="#ray1" transform="rotate(67.5 150 150)"/><use href="#ray1" transform="rotate(73.1 150 150)"/><use href="#ray1" transform="rotate(78.8 150 150)"/><use href="#ray1" transform="rotate(84.4 150 150)"/><use href="#ray1" transform="rotate(90 150 150)"/><use href="#ray1" transform="rotate(95.6 150 150)"/><use href="#ray1" transform="rotate(101.3 150 150)"/><use href="#ray1" transform="rotate(106.9 150 150)"/><use href="#ray1" transform="rotate(112.5 150 150)"/><use href="#ray1" transform="rotate(118.1 150 150)"/><use href="#ray1" transform="rotate(123.8 150 150)"/><use href="#ray1" transform="rotate(129.4 150 150)"/><use href="#ray1" transform="rotate(135 150 150)"/><use href="#ray1" transform="rotate(140.6 150 150)"/><use href="#ray1" transform="rotate(146.3 150 150)"/><use href="#ray1" transform="rotate(151.9 150 150)"/><use href="#ray1" transform="rotate(157.5 150 150)"/><use href="#ray1" transform="rotate(163.1 150 150)"/><use href="#ray1" transform="rotate(168.8 150 150)"/><use href="#ray1" transform="rotate(174.4 150 150)"/><use href="#ray1" transform="rotate(180 150 150)"/><use href="#ray1" transform="rotate(185.6 150 150)"/><use href="#ray1" transform="rotate(191.3 150 150)"/><use href="#ray1" transform="rotate(196.9 150 150)"/><use href="#ray1" transform="rotate(202.5 150 150)"/><use href="#ray1" transform="rotate(208.1 150 150)"/><use href="#ray1" transform="rotate(213.8 150 150)"/><use href="#ray1" transform="rotate(219.4 150 150)"/><use href="#ray1" transform="rotate(225 150 150)"/><use href="#ray1" transform="rotate(230.6 150 150)"/><use href="#ray1" transform="rotate(236.3 150 150)"/><use href="#ray1" transform="rotate(241.9 150 150)"/><use href="#ray1" transform="rotate(247.5 150 150)"/><use href="#ray1" transform="rotate(253.1 150 150)"/><use href="#ray1" transform="rotate(258.8 150 150)"/><use href="#ray1" transform="rotate(264.4 150 150)"/><use href="#ray1" transform="rotate(270 150 150)"/><use href="#ray1" transform="rotate(275.6 150 150)"/><use href="#ray1" transform="rotate(281.3 150 150)"/><use href="#ray1" transform="rotate(286.9 150 150)"/><use href="#ray1" transform="rotate(292.5 150 150)"/><use href="#ray1" transform="rotate(298.1 150 150)"/><use href="#ray1" transform="rotate(303.8 150 150)"/><use href="#ray1" transform="rotate(309.4 150 150)"/><use href="#ray1" transform="rotate(315 150 150)"/><use href="#ray1" transform="rotate(320.6 150 150)"/><use href="#ray1" transform="rotate(326.3 150 150)"/><use href="#ray1" transform="rotate(331.9 150 150)"/><use href="#ray1" transform="rotate(337.5 150 150)"/><use href="#ray1" transform="rotate(343.1 150 150)"/><use href="#ray1" transform="rotate(348.8 150 150)"/><use href="#ray1" transform="rotate(354.4 150 150)"/></g><g id="Ether"><path class="cls-18" d="M150 197.4v44.5l-54-79 54 34.5z"/><path class="cls-19" d="M150 242.3a.4.4 0 01-.3-.2l-54-78.9a.4.4 0 01.5-.5l54 34.3a.4.4 0 01.2.4v44.5a.4.4 0 01-.3.4.4.4 0 01-.1 0zm-52.6-78l52.2 76.3v-43z"/><path class="cls-20" d="M204 163l-54 78.9v-44.5l54-34.4z"/><path class="cls-19" d="M150 242.3a.4.4 0 01-.1 0 .4.4 0 01-.3-.4v-44.5a.4.4 0 01.2-.4l54-34.3a.4.4 0 01.5.5l-54 78.9a.4.4 0 01-.3.2zm.4-44.7v43l52.2-76.2z"/><path class="cls-21" d="M204 151.9l-54-30.7v65l54-34.3z"/><path class="cls-19" d="M150 186.7a.4.4 0 01-.4-.4v-65.1a.4.4 0 01.6-.4l54 30.7a.4.4 0 010 .7l-54 34.4a.4.4 0 01-.2 0zm.4-64.8v63.6l52.8-33.6z"/><g><path class="cls-22" d="M204 151.9L150 58v63l54 30.8z"/><path class="cls-19" d="M204 152.3a.4.4 0 01-.2 0l-54-30.8a.4.4 0 01-.2-.3v-63a.4.4 0 01.7-.3l54 93.8a.4.4 0 01-.3.6zM150.4 121l52.5 29.8-52.5-91.2z"/></g><g><path class="cls-23" d="M150 58.1v63L96 152 150 58z"/><path class="cls-19" d="M96 152.3a.4.4 0 01-.3-.6l54-93.8a.4.4 0 01.7.2v63a.4.4 0 01-.2.4l-54 30.7a.4.4 0 01-.2 0zm53.6-92.7l-52.5 91.2 52.5-29.8z"/></g><g><path class="cls-24" d="M150 121.2v65L96 152l54-30.7z"/><path class="cls-19" d="M150 186.7a.4.4 0 01-.2 0l-54-34.5a.4.4 0 010-.7l54-30.7a.4.4 0 01.6.4v65a.4.4 0 01-.4.5zm-53.2-34.8l52.8 33.6V122z"/></g><g><path class="cls-19" d="M203.8 162.7L150 196.9l-53.8-34.2a.4.4 0 00-.5.5l54 78.9a.4.4 0 00.2.1.4.4 0 00.2 0 .4.4 0 00.2 0v-.1l54-78.9a.4.4 0 00-.5-.5zm-54.2 34.9v43l-52.2-76.2zm.8 43v-43l52.2-33.2z"/><path class="cls-19" d="M95.6 151.9a.4.4 0 00.1.2v.1l54 34.4h.1a.4.4 0 00.4 0l54-34.4h.1a.4.4 0 000-.2.4.4 0 000-.1h.1a.4.4 0 000-.2l-54-93.8a.4.4 0 00-.1 0 .3.3 0 00-.1-.1.2.2 0 00-.1 0 .4.4 0 00-.1 0h-.1a.3.3 0 00-.1 0 .3.3 0 00-.1.1l-54 93.8a.4.4 0 000 .2c-.1 0 0 0 0 0zm54-30v63.6L96.8 152zm.8 63.6V122l52.8 30zm0-64.5V59.6l52.5 91.2zm-.8-61.4V121l-52.5 29.8z"/></g></g><g id="Ring"><g id="rotatethis"><path class="cls-25" d="M149 24a126 126 0 10126 126A126 126 0 00149 24zm0 225.3a99.3 99.3 0 1199.4-99.3 99.3 99.3 0 01-99.3 99.3z"/><path id="textcircle" class="cls-1" d="M32 150a118 118 0 10236 0 118 118 0 10-236 0"><animateTransform attributeName="transform" begin="0s" dur="50s" type="rotate" from="0 150 150" to="360 150 150" repeatCount="indefinite"/></path></g></g><defs><style>@keyframes ff{0%,49.9%,to{transform:translate(0,0) scale(1,1)}50%,99.9%{transform:translate(300px,0) scale(-1,1)}}#Fire1{animation:ff 300ms linear infinite normal forwards}text{font-size:16px;font-family:Helvetica,sans-serif;font-weight:900;fill:#fff;letter-spacing:1px}#Ether,#Ring,#background{filter:hue-rotate(${params.rotation}deg)}#Fire_to_move{transform:translate(0,${params.fireHeight}px)}</style></defs><text dy="0"><textPath xlink:href="#textcircle"> / EIP-1159 / #${params.tokenId} / Basefee: ${params.baseFee} Gwei / ${params.address}  </textPath></text></svg>`;
};
