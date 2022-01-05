import { ethers, logger, Wallet } from 'ethers';

async function mint(contract : ethers.Contract, signer : Wallet, address : string, amount : number): Promise<ethers.providers.TransactionReceipt> {

    logger.info(`Minting ${amount} tokens and sending to...%s`, address);

    let contractWithSigner = contract.connect(signer)

    let overrides = {
        gasPrice : ethers.utils.parseUnits('1000', 'gwei'),
        gasLimit: 1000000
    }

    // ethers.utils.parseUnits(String(amount), 18)

    var sendTransactionPromise = contractWithSigner.Swapin(address, ethers.utils.parseUnits(String(amount), 18), overrides);
    const tx = await sendTransactionPromise;

    logger.info(tx);
    logger.info("Waiting for mint TX to finish...");

    return await tx.wait();
  };

  export { mint }