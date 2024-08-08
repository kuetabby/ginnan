export const contractAddress = "0x6Eb2D25dC6e67E0e4a769652d8093e25187ADE71";
export const pairAddress = "-";

export const socialsLink = {
  whitepaper: "/",
  twitter: "https://x.com/Ginnan_Kun",
  telegram: "https://t.me/Ginnankun",
  medium: "/",
  email: "mailto:",
};

export const findUsLink = {
  dextools: `http://dextools.io/app/ether/pair-explorer/${pairAddress}`,
  dexscreener: `https://dexscreener.com/solana/${pairAddress}`,
  solidproof: "https://app.solidproof.io/projects/",
  etherscan: `https://etherscan.io/token/${contractAddress}`,
  uniswap: `https://app.uniswap.org/tokens/ethereum/${contractAddress}`,
  coingecko: `https://www.coingecko.com/en/coins/`,
  raydium: `https://raydium.io/swap/?inputMint=sol&outputMint=${contractAddress}`,
};
