// this file connects to remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require("prisma-binding");
const path = require("path");

const db = new Prisma({
  typeDefs: path.resolve(__dirname, "schema_prep.graphql"),
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
  debug: true
});

module.exports = db;
