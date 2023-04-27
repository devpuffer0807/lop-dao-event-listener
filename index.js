require("dotenv").config();
const ShareHolderDaoABI = require("./abi/ShareHolderDao.json");
const ShareHolderApi = require("./config/ShareHolderApi");
const { getShareHolderDaoAddress } = require("./utils/getAddress");
const logger = require("./logger");

const ContractWorker = require("./worker/ContractWorker");

new ContractWorker(
  process.env.CHAIN_ID,
  getShareHolderDaoAddress(),
  ShareHolderDaoABI,
  ShareHolderApi
);

logger.info("LOP event listener is started");
