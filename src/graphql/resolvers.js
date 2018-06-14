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
        negocioAdd: (_,args)=>{
            var datos = new Business (args.negocio);
            datos.save(function (err) {
                if (err) return console.error(err) 
              // saved!
            });
            return datos
        },

        personAdd: (_,args)=>{
            var datos = new Person (args.person);
            datos.save(function (err) {
                if (err) return console.error(err) 
              // saved!
            });
            return datos
        },

        negocioEdit: (_, args) => {
            return Business.findOneAndUpdate({user : args.user}, args.negocio, function (err, post) {
                if (err) return next(err);
            
            });
        }
      }
   
  };

  module.exports = resolvers