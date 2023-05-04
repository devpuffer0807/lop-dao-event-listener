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
};

module.exports = ShareHolderApi;
