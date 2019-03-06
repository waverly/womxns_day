// import graphQL yoga server
const { GraphQLServer } = require("graphql-yoga");
const path = require("path");

const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

function createServer() {
  return new GraphQLServer({
    typeDefs: __dirname + "/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
