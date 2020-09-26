const { GraphQLSchema } = require("graphql");
const Mutation = require("./mutation");
const RootQuery = require("./RootQuery");

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});