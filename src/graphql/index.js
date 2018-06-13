const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema in string form
const typeDefs = require('./typeDefs')

// The resolvers
const resolvers = require('./resolvers')

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema