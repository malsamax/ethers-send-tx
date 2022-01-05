import { ethers, logger, Wallet } from 'ethers';

async function subscribe(contract : ethers.Contract, signer : Wallet, address : string): Promise<ethers.providers.TransactionReceipt> {

    logger.info("Subscribing to channel...%s", address);

    let contractWithSigner = contract.connect(signer)

    let overrides = {
        gasPrice : ethers.utils.parseUnits('100', 'gwei'),
        gasLimit: 1000000
    }

    var sendTransactionPromise = contractWithSigner.subscribe(address, overrides);
    const tx = await sendTransactionPromise;

    logger.info(tx);
    logger.info("Waiting for subscribe TX to finish...");

    return await tx.wait();
  };

  export { subscribe }