const typeDefs = `
  type Query { 
      negocios: [negocio]
      negocio(user: String):negocio
    
    }

  
    
  type negocio {
    id: ID,
    name: String,
    type: String, 
    status: Boolean,
    panel: [String], 
    user: String,
    email: String,
    phone: Int,
    services: Boolean
}
`;

module.exports = typeDefs