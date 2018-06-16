const Business = require('../models/business')
const Person = require('../models/person')
const bcrypt = require('bcrypt')

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
          },

          personas: ()=>{
            const datos = Person.find().exec()
            if (!datos) {
                throw new Error('Error')
              }
              return datos
            },
          
            persona: (_, args)=>{
                const dato = Person.findOne({user: args.user}).exec()
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
        },

        personEdit: (_, args) => {
            return Person.findOneAndUpdate({user : args.user}, args.person, function (err, post) {
                if (err) return next(err);
            
            });
        },

        signup: async (_, args) =>{
            //Verificando que no exista usuario
            const existingUser = await Person.findOne({user: args.user})

            if(existingUser){
                throw new Error('Usuario ya registrado!')
            }

            // Creando negocio adjunto a la persona
            var negocio = new Business(args)
            negocio.save(function (err) {
                if (err) return console.error(err) 
              // saved!
            });

            // creando usuario
            const password = await bcrypt.hash(args.userPassword, 10)

            var datos = new Person ({user: args.user, password: password, emailPerson: args.pEmail, businessId: negocio._id});
            datos.save(function (err) {
                if (err) return console.error(err) 
              // saved!
            });
            return datos
        },

        login: async (_, args) => {
            const user =  await Person.findOne({user: args.user})
            if (!user){
                throw new Error('Usuario no encontrado')
            }
            const validPassword = await bcrypt.compare(args.password, user.password)

            if(!validPassword){
                throw new Error('Password incorrecto!')
            }

            return user

        }
    }
   
};

  module.exports = resolvers