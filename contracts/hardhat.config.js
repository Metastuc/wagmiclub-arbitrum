require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.2",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
    },
    viction: {
      url: "https://rpc-testnet.viction.xyz",
      accounts: [process.env.PRIVATE_KEY]
    },
    Arbitrum: {
      url: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
