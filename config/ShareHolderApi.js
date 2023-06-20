const axios = require("axios");
const logger = require("../logger");

const ShareHolderApi = {
  ProposalCreated: async function (params) {
    try {
      const owner = params[0];
      const budget = params[1];
      const proposalId = params[2];
      const metadata = params[3];

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-shareholder-proposal?proposalIndex=${proposalId}&proposer=${owner}&metadata=${metadata}&amount=${budget}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi Proposal Created", params);
    } catch (e) {
      logger.error("ShareHolderApi Proposal Created Error", params, e);
    }
  },
  VoteYes: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = params[1];
      const proposalAmount = params[2];
      const type = "SHAREHOLDER";
      const approve = "YES";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi VoteYes", params);
    } catch (e) {
      logger.error("ShareHolderApi VoteYes Error", params, e);
    }
  },
  VoteNo: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = params[1];
      const proposalAmount = params[2];
      const type = "SHAREHOLDER";
      const approve = "NO";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi VoteNo", params);
    } catch (e) {
      logger.error("ShareHolderApi VoteNo Error", params, e);
    }
  },
  Activated: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "SHAREHOLDER";
      const status = "ACTIVE";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi Activated", params);
    } catch (e) {
      logger.error("ShareHolderApi Activated Error", params, e);
    }
  },
  Cancelled: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "SHAREHOLDER";
      const status = "CANCELLED";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi Cancelled", params);
    } catch (e) {
      logger.error("ShareHolderApi Cancelled Error", params, e);
    }
  },
  EvaluateVoteAmount: async function (params) {
    try {
      const staker = params[0];
      const proposalId = params[1];
      const oldStakeAmount = Number(params[2]);
      let newStakeAmount = Number(params[3]);
      newStakeAmount = parseFloat(newStakeAmount).toLocaleString();
      newStakeAmount = newStakeAmount.replace(/,/g, "");
      const type = "SHAREHOLDER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-evaluate?staker=${staker}&proposalId=${proposalId}&newStakeAmount=${newStakeAmount}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ShareHolderApi EvaluateVoteAmount", params);

    } catch(e){
      logger.error("ShareHolderApi EvaluateVoteAmount Error", params, e);
    }
  }
};

module.exports = ShareHolderApi;
