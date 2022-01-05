import { BigNumber, ethers, logger, Wallet } from 'ethers';

import { daiAddress, channels, users }  from './methods/epns/epnsReadMethods';
import { addToChannelizationWhitelist } from './methods/epns/epnsAddToChannelizationWhitelist';
import { createChannel }  from './methods//epns/epnsCreateChannel';
import { subscribe }  from './methods//epns/epnsSubscribe';
import { mint } from './methods/ERC20/mint';
import { balanceOf } from './methods/ERC20/readMethods';

// TODO:
// Add hardhat to this project, replace ethers.ethers with hardhat.ethers (leave other ethers.<dependacies>)
// Fork the ropsten network as per config in the deploy repo
// replace provider with hardhat ethers provider hre.network.provider

// Setup env
const config = (require('./config/index.ts')).default;

// Instatiate web3 provider
const NETWORK_TO_MONITOR = config.web3MainnetNetwork; //config.web3RopstenNetwork;
// const provider = ethers.getDefaultProvider(NETWORK_TO_MONITOR, {
//       etherscan: (config.etherscanAPI ? config.etherscanAPI : null),
//       infura: (config.infuraAPI ? {projectId: config.infuraAPI.projectID, projectSecret: config.infuraAPI.projectSecret} : null),
//       alchemy: (config.alchemyAPI ? config.alchemyAPI : null),
// });
// local fork
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

// Instatiate wallet
const MAIN = new Wallet(config.forkWallet, provider); //new Wallet(config.masterWallet, provider);
const CHANNEL_OWNER = new Wallet(config.forkWallet2, provider); //new Wallet(config.secondWallet, provider);
const THIRD_PARTY = new Wallet(config.forkWallet3, provider); //new Wallet(config.thirdWallet, provider);

// Instantiate contract (EPNS)
const contract = new ethers.Contract(config.deployedContract, config.deployedContractABI, provider);
const daiContract = new ethers.Contract(config.daiContract, config.daiContractABI, provider);

async function main() {

    // mint(daiContract, MAIN, CHANNEL_OWNER.address, 1000)
    // .then((result)=>{
    //     logger.info(`result of mint is ${JSON.stringify(result)}`);
    // });

    // balanceOf(daiContract, MAIN.address)
    // .then((result)=>{
    //     logger.info(`result of balanceOf is ${JSON.stringify(ethers.utils.formatEther(String(result)))}`);
    // });

    // addToChannelizationWhitelist(contract, MAIN, CHANNEL_OWNER.address)
    // .then((result)=>{
    //     logger.info(`result of adding to whitelist is ${JSON.stringify(result)}`);
    // });   

    // createChannel(contract, CHANNEL_OWNER, "Test Wallet Tracker")
    // .then((result)=>{
    //     logger.info(`result of channel creation is ${JSON.stringify(result)}`);
    // });

    // channels(contract, CHANNEL_OWNER.address)
    // .then((result)=>{
    //     logger.info(`result of channels is ${JSON.stringify(result)}`);
    // });

    // subscribe(contract, THIRD_PARTY, CHANNEL_OWNER.address)
    // .then((result)=>{
    //     logger.info(`result of subscribe is ${JSON.stringify(result)}`);
    // });

    // const result = await users(contract, CHANNEL_OWNER.address);
    // logger.info(`result of users is ${JSON.stringify(result)}`);
    // let [ , , , userStartBlock, subscribedCount, timeWeightedBalance] = result;
    // logger.info(`userStartBlock is ${userStartBlock.toNumber()}`); 
    // logger.info(`subscribedCount is ${subscribedCount.toNumber()}`);
    // logger.info(`timeWeightedBalance is ${timeWeightedBalance.toNumber()}`);
}

main();



