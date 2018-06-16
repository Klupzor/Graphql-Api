const rootType = `
  type Query { 
      negocios: [negocio]
      negocio(user: String!):negocio
      personas: [person]
      persona(user: String!): person
    
    }

  type Mutation{
    negocioAdd(negocio: NuevoNegocio): negocio
    negocioEdit(user: String!, negocio: ModificarNegocio): negocio
    personAdd(person: NuevaPersona): person
    personEdit(user: String!, person: ModificarPersona): person
    login(user: String!, password: String!): person
    signup(user: String!, userPassword: String!, pEmail: String!, panel: String!): person

  }
    
 
`;

module.exports = rootType