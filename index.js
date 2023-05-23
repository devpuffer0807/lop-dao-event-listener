require("dotenv").config();
const ShareHolderDaoABI = require("./abi/ShareHolderDao.json");
const DeveloperDaoABI = require("./abi/DeveloperDao.json");
const ProductDaoABI = require("./abi/ProductDao.json");
const StakingABI = require("./abi/Staking.json");
const ShareHolderApi = require("./config/ShareHolderApi");
const DeveloperApi = require("./config/DeveloperApi");
const ProductApi = require("./config/ProductApi");
const StakingApi = require("./config/StakingApi");
const {
  getShareHolderDaoAddress,
  getDeveloperDaoAddress,
  getProductDaoAddress,
  getStakingAddress,
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

new ContractWorker(
  process.env.CHAIN_ID,
  getStakingAddress(),
  StakingABI,
  StakingApi
);

logger.info("LOP event listener is started");
