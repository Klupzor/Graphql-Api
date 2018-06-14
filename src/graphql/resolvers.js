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
            var datos = new Business (args.negocio);
            datos.save(function (err) {
              if (err) return handleError(err);
              // saved!
            });

            return datos
        }
      }
   
  };

  module.exports = resolvers