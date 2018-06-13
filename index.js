const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const Business = require('./src/models/business')
const Person = require('./src/models/person')
// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'Andres',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];



// The GraphQL schema in string form
const typeDefs = `
  type Query { 
      books: [Book] 
      negocios: [negocio]
    
    }
  type Book { title: String, author: String }
  type negocio {
    id: ID,
    name: String,
    type: String, 
    status: Boolean,
    panel: [String], 
    user: String,
    email: String,
    phone: Int,
    services: Boolean
}
`;

// The resolvers
const resolvers = {
  Query: { 
      books: () => books,
        negocios: ()=>{
        const users = Business.find().exec()
        if (!users) {
            throw new Error('Error')
          }
          return users
        }
    
    },
 
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

//config server
app.set('port', process.env.PORT || 3000)

// The GraphQL endpoint
app.use('/graphql', express.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(app.get('port'), () => {
  console.log('Go to http://localhost:'+app.get('port')+'/graphiql to run queries!');
});