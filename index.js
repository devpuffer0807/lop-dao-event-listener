require("dotenv").config();
const ShareHolderDaoABI = require("./abi/ShareHolderDao.json");
const { getShareHolderDaoAddress } = require("./utils/getAddress");

const ContractWorker = require("./worker/ContractWorker");

new ContractWorker(
  process.env.CHAIN_ID,
  getShareHolderDaoAddress(),
  ShareHolderDaoABI
);

console.log("LOP event listener is started");
