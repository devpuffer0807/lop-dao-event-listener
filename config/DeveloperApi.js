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
};

module.exports = DeveloperApi;
