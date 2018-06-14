const Business = require('../models/business')
const Person = require('../models/person')

const resolvers = {
    Query: { 
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

      Mutation:{
        negocioAdd: (_,args, context)=>{

            Business.create(args.negocio), (err, data) =>{
                if (err) return handleError(err);
                console.log(data)
            }
        }
      }
   
  };

  module.exports = resolvers