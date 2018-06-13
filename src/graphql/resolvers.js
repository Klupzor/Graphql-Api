const Business = require('../models/business')
const Person = require('../models/person')

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

  module.exports = resolvers