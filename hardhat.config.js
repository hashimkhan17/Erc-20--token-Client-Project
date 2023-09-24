// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   solidity: "0.8.6",
//   networks: {
//     hardhat: {},
//     // Add other network configurations here (e.g., for testnets or mainnet)
//   },
// };
//0x8E915DF57C6180a5fb1C524087f7ade7c920f38c
// when i was facing issue related to hardhat this i import this library and it start working
///// npm install --save-dev hardhat hardhat-ethers ethers
//https://goerli.etherscan.io/tx/0x88b192f45a72c15c63033c404f8a7866246449a48ff89fd0b8560fb9fbe9984c
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "_RbSlPKZeZ9jNnoC-lh9cA0T9gIdb4jf";
const goerli_PRIVATE_KEY =
  "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
module.exports = {
  solidity: "0.8.6",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/_RbSlPKZeZ9jNnoC-lh9cA0T9gIdb4jf`,
      accounts: [`${goerli_PRIVATE_KEY}`],
    },
  },
};
