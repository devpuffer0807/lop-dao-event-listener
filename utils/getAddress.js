const AddressList = require("../config/address");

module.exports.getShareHolderDaoAddress = () => {
  return AddressList[process.env.CHAIN_ID].SHAREHOLDER_DAO;
};
