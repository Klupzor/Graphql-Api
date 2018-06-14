const negocioType = `
type negocio {
    id: ID,
    name: String,
    type: String, 
    status: Boolean,
    panel: [String], 
    user: String!,
    email: String,
    phone: Int,
    services: Boolean
}

input NuevoNegocio {
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

module.exports = negocioType

