require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177",
      accounts: ["857198dbb3f4ddfbd536444c638dbd3f64aa9a6b77978a94e4d2535af342c4dd"],
      chainId: 80001,
      live: true,
      saveDeployments: true,
      // tags: ["staging"],
       gasPrice: 5000000000,
       gasMultiplier: 2,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1f7482599180423b9b02ffd61886e876",
      accounts: ["857198dbb3f4ddfbd536444c638dbd3f64aa9a6b77978a94e4d2535af342c4dd"],
      chainId: 4,
      live: true,
      saveDeployments: true,
      // tags: ["staging"],
      // gasPrice: 5000000000,
      // gasMultiplier: 2,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/1f7482599180423b9b02ffd61886e876`,
      accounts: ["857198dbb3f4ddfbd536444c638dbd3f64aa9a6b77978a94e4d2535af342c4dd"],
      // gasPrice: 120 * 1000000000,
      // chainId: 1,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    // tests: "./test",s
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    apiKey: "6F2QV99DME1GBEHFT668GJ64M948SMT75N",
  },
  mocha: {
    timeout: 20000
  }
};
