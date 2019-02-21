const { forwardTo } = require("prisma-binding");

const Query = {
  women: forwardTo("db")
};

module.exports = Query;
