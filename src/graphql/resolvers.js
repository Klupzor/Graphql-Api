const Business = require('../models/business')
const Person = require('../models/person')

const resolvers = {
    Query: { 
        books: () => books,
          negocios: ()=>{
          const datos = Business.find().exec()
          if (!datos) {
              throw new Error('Error')
            }
            return datos
          },

          negocio: (root, args, context, info)=>{
           const dato = Business.findOne({user: args.user}).exec()
           if (!dato) {
            throw new Error('Error')
          }
          return dato 
          }

      
      },
   
  };

  module.exports = resolvers