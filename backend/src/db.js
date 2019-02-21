// this file connects to remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  // THE WAY YOU ACCESS YOUR ENV VARIABLS IN NODE IS
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
