const rootType = `
  type Query { 
      negocios: [negocio]
      negocio(user: String!):negocio
    
    }

  type Mutation{
    negocioAdd(negocio: NuevoNegocio): negocio
    negocioEdit(user: String!, negocio: ModificarNegocio): negocio
    personAdd(person: NuevaPersona): person
    personEdit(user: String!, person: ModificarPersona): person
  }
    
 
`;

module.exports = rootType