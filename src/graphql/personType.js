const personType = `
type person {
    id: ID,
    user: String,
    created: String,
    emailPerson: String,
    namePerson: String,
    phonePerson: String,
    password: String,
    jwt: String
}

input NuevaPersona {
    user: String,
    emailPerson: String,
    namePerson: String,
    phonePerson: String,
    password: String
}

input ModificarPersona {
    emailPerson: String,
    namePerson: String,
    phonePerson: String,
    password: String
}
`;

module.exports = personType
