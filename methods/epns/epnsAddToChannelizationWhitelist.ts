import { ethers, logger, Wallet } from 'ethers';

async function addToChannelizationWhitelist(contract : ethers.Contract, signer : Wallet, address : string): Promise<ethers.providers.TransactionReceipt> {

    logger.info("Adding address to channelization whitelist...%s", address);

    let contractWithSigner = contract.connect(signer)

    let overrides = {
        gasPrice : ethers.utils.parseUnits('1000000', 'gwei'),
        gasLimit: 1000000
    }

    var sendTransactionPromise = contractWithSigner.addToChannelizationWhitelist(address, overrides);
    const tx = await sendTransactionPromise;

    logger.info(tx);
    logger.info("Waiting for whitelist TX to finish...");

    return await tx.wait();
  };

  export { addToChannelizationWhitelist }