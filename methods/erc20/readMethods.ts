import { ethers, logger } from 'ethers';

async function balanceOf(contract : ethers.Contract, address : string): Promise<ethers.providers.TransactionReceipt> {
    logger.info(`reading balance of address...${address}`);
    return await contract.balanceOf(address);
}

export { balanceOf }