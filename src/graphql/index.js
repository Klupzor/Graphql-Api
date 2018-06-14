const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema in string form
const rootType = require('./rootType')
const negocioType = require('./negocioType')

// The resolvers
const resolvers = require('./resolvers')

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs:[rootType, negocioType],
  resolvers
});

module.exports = schema