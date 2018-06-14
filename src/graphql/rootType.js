const rootType = `
  type Query { 
      negocios: [negocio]
      negocio(user: String):negocio
    
    }

  type Mutation{
    negocioAdd(negocio: NuevoNegocio): negocio
  }
    
 
`;

module.exports = rootType