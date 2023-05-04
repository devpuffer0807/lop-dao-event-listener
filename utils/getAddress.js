const AddressList = require("../config/address");

module.exports.getShareHolderDaoAddress = () => {
  return AddressList[process.env.CHAIN_ID].SHAREHOLDER_DAO;
};

module.exports.getDeveloperDaoAddress = () => {
  return AddressList[process.env.CHAIN_ID].DEVELOPER_DAO;
};

module.exports.getProductDaoAddress = () => {
  return AddressList[process.env.CHAIN_ID].PRODUCT_DAO;
};
