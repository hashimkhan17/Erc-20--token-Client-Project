// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   solidity: "0.8.6",
//   networks: {
//     hardhat: {},
//     // Add other network configurations here (e.g., for testnets or mainnet)
//   },
// };

// when i was facing issue related to hardhat this i import this library and it start working
///// npm install --save-dev hardhat hardhat-ethers ethers

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "9cA0Tf";
const goerli_PRIVATE_KEY = "03b0f6f55";
module.exports = {
  solidity: "0.8.6",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    goerli: {
      url: `http`,
      accounts: [`${goerli_PRIVATE_KEY}`],
    },
  },
};
