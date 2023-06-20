const axios = require("axios");
const logger = require("../logger");

const StakingApi = {
  StakeLop: async function (params) {
    try {
      const owner = params[0];
      const amount = Number(params[1]);

      const type = "LOP";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-stake?owner=${owner}&amount=${amount}&type=${type}`;
      console.log(url);

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi StakeLop", params);
    } catch (e) {
      logger.error("StakingApi StakeLop", params, e);
    }
  },
  StakeVLop: async function (params) {
    try {
      const owner = params[0];
      let amount = Number(params[1]);
      amount = parseFloat(amount).toLocaleString();
      amount = amount.replace(/,/g, "");

      const type = "vLOP";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-stake?owner=${owner}&amount=${amount}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi StakeVLop", params);
    } catch (e) {
      logger.error("StakingApi StakeVLop", params, e);
    }
  },
  WithdrawLop: async function (params) {
    try {
      const owner = params[0];
      let amount = Number(params[1]);
      amount = parseFloat(amount).toLocaleString();
      amount = amount.replace(/,/g, "");

      const type = "LOP";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-withdraw?owner=${owner}&amount=${amount}&type=${type}`;
      console.log(url);

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawLop", params, e);
    }
  },
  WithdrawVLop: async function (params) {
    try {
      const owner = params[0];
      let amount = Number(params[1]);
      amount = parseFloat(amount).toLocaleString();
      amount = amount.replace(/,/g, "");

      const type = "vLOP";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-withdraw?owner=${owner}&amount=${amount}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  AddShareHolderVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "SHAREHOLDER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-add-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  AddProductVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "PRODUCT";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-add-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  AddDevelopmentVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "DEVELOPER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-add-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  RemoveShareHolderVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "SHAREHOLDER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-remove-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  RemoveProductVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "PRODUCT";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-remove-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
  RemoveDevelopmentVotingId: async function (params) {
    try {
      const staker = params[0];
      const proposalId = Number(params[1]);

      const type = "DEVELOPER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-remove-voting-id?staker=${staker}&proposalId=${proposalId}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("StakingApi WithdrawVLop", params);
    } catch (e) {
      logger.error("StakingApi WithdrawVLop", params, e);
    }
  },
};

module.exports = StakingApi;
