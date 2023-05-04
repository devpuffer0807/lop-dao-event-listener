require("dotenv").config();
const ShareHolderDaoABI = require("./abi/ShareHolderDao.json");
const DeveloperDaoABI = require("./abi/DeveloperDao.json");
const ProductDaoABI = require("./abi/ProductDao.json");
const ShareHolderApi = require("./config/ShareHolderApi");
const DeveloperApi = require("./config/DeveloperApi");
const ProductApi = require("./config/ProductApi");
const {
  getShareHolderDaoAddress,
  getDeveloperDaoAddress,
  getProductDaoAddress
} = require("./utils/getAddress");
const logger = require("./logger");

const ContractWorker = require("./worker/ContractWorker");

new ContractWorker(
  process.env.CHAIN_ID,
  getShareHolderDaoAddress(),
  ShareHolderDaoABI,
  ShareHolderApi
);

new ContractWorker(
  process.env.CHAIN_ID,
  getDeveloperDaoAddress(),
  DeveloperDaoABI,
  DeveloperApi
);

new ContractWorker(
  process.env.CHAIN_ID,
  getProductDaoAddress(),
  ProductDaoABI,
  ProductApi
);

logger.info("LOP event listener is started");
