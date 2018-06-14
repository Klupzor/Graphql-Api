const negocioType = `
type negocio {
    id: ID,
    name: String,
    type: Sectores, 
    status: Boolean,
    panel: [String], 
    user: String!,
    email: String,
    phone: String,
    services: Boolean
}

enum Sectores {
    Restaurante
    Bar
    Discoteca
}

input NuevoNegocio {
    name: String,
    type: Sectores, 
    status: Boolean,
    panel: [String], 
    user: String,
    email: String,
    phone: String,
    services: Boolean

}

input ModificarNegocio{
    name: String,
    status: Boolean,
    panel: [String], 
    email: String,
    phone: String,
    services: Boolean

}
`;

module.exports = negocioType

