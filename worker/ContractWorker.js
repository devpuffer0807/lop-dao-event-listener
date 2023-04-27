const ethers = require("ethers");
const { getProvider } = require("../utils");
const getEventListFromABI = require("../utils/getEventListFromABI");
const logger = require("../logger");

module.exports = class ContractWorker {
  constructor(chainId, contractAddress, abi, generateApi) {
    this.chainId = chainId;
    this.contractAddress = contractAddress;

    this.provider = getProvider(chainId);

    this.contract = new ethers.Contract(contractAddress, abi, this.provider);

    const _eventList = getEventListFromABI(abi);

    _eventList.map((eventInfo) => {
      this.contract.on(eventInfo.name, async (...params) => {
        let eventResult = [];
        eventInfo.inputs.map((input, index) => {
          eventResult.push(params[index]);
        });

        try {
          generateApi[eventInfo.name](eventResult);
        } catch (e) {
          logger.error(eventInfo.name, e);
        }
      });
    });
  }
};
