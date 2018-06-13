const typeDefs = `
  type Query { 
      books: [Book] 
      negocios: [negocio]
    
    }
  type Book { title: String, author: String }
  
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