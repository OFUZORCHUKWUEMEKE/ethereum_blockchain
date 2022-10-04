require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan")
require('hardhat-gas-reporter')
require('solidity-coverage')

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHER_SCAN = process.env.ETHER_SCAN
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  },
  etherscan: {
    apiKey: ETHER_SCAN
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP_API_KEY
  },
  namedAccounts:{
    deployer:{
      default:0
    },
    user:{
      default:1
    }
  }
};
