const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", "variables.env")
});
const createServer = require("./createServer");
const db = require("./db");

path.resolve(__dirname, "generated/prisma.graphql");

const server = createServer();

server.start(
  // {
  //   cors: {
  //     credentials: true,
  //     origin: process.env.FRONTEND_URL
  //   }
  // },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
