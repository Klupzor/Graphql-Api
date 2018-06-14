const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema in string form
const rootType = require('./rootType')
const negocioType = require('./negocioType')
const personType = require('./personType')

// The resolvers
const resolvers = require('./resolvers')

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs:[rootType, negocioType, personType],
  resolvers
});

module.exports = schema