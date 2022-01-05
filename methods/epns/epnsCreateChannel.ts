import { ethers, logger, Wallet } from 'ethers';
const config = (require('../../config/index.ts')).default;

async function createChannel(contract : ethers.Contract, signer : Wallet, channelName : string): Promise<ethers.providers.TransactionReceipt> {

    const input = JSON.stringify({
      name: channelName,
      info: channelName,
      url: "https://twitter.com/0xmalsamax",
      icon: null,
      blockchain: config.web3MainnetNetwork, //config.web3RopstenNetwork,
      chain_id: config.web3MainnetChainID, //config.web3RopstenChainID,
      address: false,
    });

    const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

    logger.info("Uploading Payload...");
    const storagePointer = await ipfs.add(input);
    logger.info(`IPFS storagePointer: ${storagePointer}`);
    logger.info("Payload Uploaded, Approval to transfer DAI...");
    //console.log(await ipfs.cat(storagePointer));

    // Send Transaction
    // First Approve DAI

    let daiContract = new ethers.Contract(config.daiContract, config.daiContractABI, signer);

    // Pick between 50 DAI AND 25K DAI
    const fees = ethers.utils.parseUnits("50", 18);

    let overrides = {
        gasPrice : ethers.utils.parseUnits('100', 'gwei'),
        gasLimit: 1000000
    }

    if (true) { // if already approved no need to approve again
        var sendTransactionPromise = daiContract.approve(contract.address, fees, overrides);
        const tx = await sendTransactionPromise;

        logger.info(tx);
        logger.info("Waiting for Approval TX to finish...");

        await tx.wait();
    }

    const channelType = 2; // Open Channel
    const identity = "1+" + storagePointer; // IPFS Storage Type and HASH
    const identityBytes = ethers.utils.toUtf8Bytes(identity);

    let contractWithSigner = contract.connect(signer)

    var anotherSendTxPromise = contractWithSigner.createChannelWithFees(
      channelType,
      identityBytes,
      overrides
    );

    logger.info("Creating Channel TX in progress");
    return anotherSendTxPromise
      .then(async function(tx : ethers.providers.TransactionResponse) {
        logger.info(tx);
        let res = await tx.wait();
        logger.info("Channel Created");
        return res;
      })
      .catch((err : string) => {
        logger.info("Error --> %o", err);
        logger.info({err});
        logger.info(
          "!!!PRODUCTION ENV!!! Contact support@epns.io to whitelist your wallet"
        );
      });
  };

  export { createChannel }