import dotenv from 'dotenv';
let staticConfig = require('./staticConfig.json');

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  
  /**
   * Web3 Related
   */
  masterWallet: process.env.MASTER_WALLET_PRIVATE_KEY,
  secondWallet: process.env.SECOND_WALLET_PRIVATE_KEY,
  thirdWallet: process.env.THIRD_WALLET_PRIVATE_KEY,
  forkWallet: process.env.FORK_WALLET_PRIVATE_KEY,
  forkWallet2: process.env.FORK_WALLET_2_PRIVATE_KEY,
  forkWallet3: process.env.FORK_WALLET_3_PRIVATE_KEY,

  etherscanAPI: process.env.ETHERSCAN_API,

  infuraAPI: {
    projectID: process.env.INFURA_PROJECT_ID,
    projectSecret: process.env.INFURA_PROJECT_SECRET,
  },

  alchemyAPI: process.env.ALCHEMY_API,

  web3MainnetProvider: process.env.MAINNET_WEB3_PROVIDER,
  web3MainnetNetwork: staticConfig.MAINNET_WEB3_NETWORK,
  web3MainnetSocket: process.env.MAINNET_WEB3_SOCKET,

  web3RopstenProvider: process.env.ROPSTEN_WEB3_PROVIDER,
  web3RopstenNetwork: staticConfig.ROPSTEN_WEB3_NETWORK,
  web3RopstenSocket: process.env.ROPSTEN_WEB3_SOCKET,

  web3RopstenChainID: staticConfig.OPSTEN_CHAIN_ID,

  web3KovanProvider: process.env.KOVAN_WEB3_PROVIDER,
  web3KovanNetwork: staticConfig.KOVAN_WEB3_NETWORK,
  web3KovanSocket: process.env.KOVAN_WEB3_SOCKET,

  web3PolygonMainnetProvider: process.env.POLYGON_MAINNET_WEB3_PROVIDER,
  web3PolygonMainnetRPC: process.env.POLYGON_MAINNET_RPC,

  web3PolygonMumbaiProvider: process.env.POLYGON_MUMBAI_WEB3_PROVIDER,
  web3PolygonMumbaiRPC: process.env.POLYGON_MUMBAI_RPC,

  /**
   * EPNS Related
   */
  deployedContract: process.env.EPNS_DEPLOYED_CONTRACT,
  deployedContractABI: require('./ABIs/epns_contract.json'),
  daiContract: process.env.DAI_DEPLOYED_CONTRACT,
  daiContractABI: require('./ABIs/dai.json'),

  /**
   * API configs
   */
  api: {
    prefix: '/apis',
  },

  /**
   * Showrunners config, always at last since this is a seperate module
   */
  cmcAPIKey: process.env.CMC_API_KEY,
  cmcEndpoint: process.env.CMC_ENDPOINT,

  // gasAPIKey: process.env.GAS_API_KEY,
  // gasEndpoint: process.env.GAS_ENDPOINT,

  // cmcSandboxAPIKey: process.env.CMS_SANDBOX_API_KEY,
  // cmcSandboxEndpoint: process.env.CMC_SANDBOX_ENDPOINT,

  /**
   * mail config
   */
  supportMailAddress: process.env.SUPPORT_MAIL_ADDRESS,
  supportMailName: process.env.SUPPORT_MAIL_NAME,
  sourceMailAddress: process.env.SOURCE_MAIL_ADDRESS,
  sourceMailName: process.env.SOURCE_MAIL_NAME,

  /**
   * AWS Config
   */
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
};
