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
      const amount = Number(params[1]);

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
};

module.exports = StakingApi;
