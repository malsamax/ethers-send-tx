import { ethers, logger } from 'ethers';

async function daiAddress(contract : ethers.Contract): Promise<ethers.providers.TransactionReceipt> {
    logger.info(`reading dai address from epns core contract...`);
    return await contract.daiAddress();
}

async function channels(contract : ethers.Contract, channelAddress: string): Promise<ethers.providers.TransactionReceipt> {
  logger.info(`reading dai address from epns core contract...`);
  return await contract.channels(channelAddress);
}

async function users(contract : ethers.Contract, channelAddress: string): Promise<any> {
  logger.info(`reading users from epns core contract...`);
  return await contract.users(channelAddress);
}

export { daiAddress, channels, users }