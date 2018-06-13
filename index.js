const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');


//import schema graphql
const schema = require('./src/graphql/index')


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