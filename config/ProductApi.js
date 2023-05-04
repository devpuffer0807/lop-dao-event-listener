const axios = require("axios");
const logger = require("../logger");

const ProductApi = {
  ProposalCreated: async function (params) {
    try {
      const owner = params[0];
      const proposalId = params[1];
      const metadata = params[2];

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-product-proposal?proposalIndex=${proposalId}&proposer=${owner}&metadata=${metadata}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Proposal Created", params);
    } catch (e) {
      logger.error("ProductApi Proposal Created Error", params, e);
    }
  },
  VoteYes: async function (params) {
    try {
      const proposalIndex = params[0];
      const account = params[1];
      const type = "PRODUCT";
      const approve = "YES";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi VoteYes", params);
    } catch (e) {
      logger.error("ProductApi VoteYes Error", params, e);
    }
  },
  VoteNo: async function (params) {
    try {
      const proposalIndex = params[0];
      const account = params[1];
      const type = "PRODUCT";
      const approve = "NO";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi VoteNo", params);
    } catch (e) {
      logger.error("ProductApi VoteNo Error", params, e);
    }
  },
  Activated: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "PRODUCT";
      const status = "ACTIVE";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Activated", params);
    } catch (e) {
      logger.error("ProductApi Activated Error", params, e);
    }
  },
  Cancelled: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "PRODUCT";
      const status = "CANCELLED";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Cancelled", params);
    } catch (e) {
      logger.error("ProductApi Cancelled Error", params, e);
    }
  },
};

module.exports = ProductApi;
