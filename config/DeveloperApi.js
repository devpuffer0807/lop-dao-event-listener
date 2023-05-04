const axios = require("axios");
const logger = require("../logger");

const DeveloperApi = {
  ProposalCreated: async function (params) {
    try {
      const creator = params[0];
      const proposalIndex = params[1];
      const metadata = params[2];
      const productId = params[3];
      const budget = params[3];

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
      const proposalIndex = params[0];
      const account = params[1];
      const type = "DEVELOPER";
      const approve = "YES";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}`;

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
      const proposalIndex = params[0];
      const account = params[1];
      const type = "DEVELOPER";
      const approve = "NO";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}`;

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

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

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

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

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
};

module.exports = DeveloperApi;
