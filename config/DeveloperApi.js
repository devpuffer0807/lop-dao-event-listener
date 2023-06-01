const axios = require("axios");
const logger = require("../logger");

const DeveloperApi = {
  ProposalCreated: async function (params) {
    try {
      const creator = params[0];
      const proposalIndex = params[1];
      const metadata = params[2];
      const productId = params[3];
      const budget = Number(params[4]);

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-developer-proposal?proposalIndex=${proposalIndex}&proposer=${creator}&metadata=${metadata}&productId=${productId}&amount=${budget}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi Proposal Created", params);
    } catch (e) {
      logger.error("DeveloperApi Proposal Created Error", params, e);
    }
  },
  VoteYes: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = Number(params[1]);
      const proposalAmount = params[2];
      const type = "DEVELOPER";
      const approve = "YES";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi VoteYes", params);
    } catch (e) {
      logger.error("DeveloperApi VoteYes Error", params, e);
    }
  },
  VoteNo: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = Number(params[1]);
      const proposalAmount = params[2];
      const type = "DEVELOPER";
      const approve = "NO";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi VoteNo", params);
    } catch (e) {
      logger.error("DeveloperApi VoteNo Error", params, e);
    }
  },
  Activated: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "DEVELOPER";
      const status = "ACTIVE";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi Activated", params);
    } catch (e) {
      logger.error("DeveloperApi Activated Error", params, e);
    }
  },
  Cancelled: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "DEVELOPER";
      const status = "CANCELLED";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi Cancelled", params);
    } catch (e) {
      logger.error("DeveloperApi Cancelled Error", params, e);
    }
  },
  EvaluateVoteAmount: async function (params) {
    try {
      const staker = params[0];
      const proposalId = params[1];
      const oldStakeAmount = Number(params[2]);
      const newStakeAmount = Number(params[3]);
      const type = "DEVELOPER";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-evaluate?staker=${staker}&proposalId=${proposalId}&newStakeAmount=${newStakeAmount}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("DeveloperApi EvaluateVoteAmount", params);

    } catch(e){
      logger.error("DeveloperApi EvaluateVoteAmount Error", params, e);
    }
  }
};

module.exports = DeveloperApi;
