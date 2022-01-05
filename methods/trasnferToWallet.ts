import { ethers, logger } from 'ethers';

export default async function transfertoWallet(simulate, main, wallet, ether_amount): Promise<ethers.providers.TransactionReceipt> {
    logger.info(`transferring from main wallet to ${wallet.address}...`);
    if (simulate) {
      logger.info(`
        {
          to: ${wallet.address},
          value: ${ethers.utils.parseEther(ether_amount)}
        };
      `);
    } 
    else {
      let tx = {
        to: wallet.address,
        value: ethers.utils.parseEther(ether_amount)
      };
      const transaction = await main.sendTransaction(tx);
      return transaction.wait();
    }
}