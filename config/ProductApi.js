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
};

module.exports = ProductApi;
