const personType = `
type person {
    id: ID,
    user: String,
    created: String,
    emailPerson: String,
    namePerson: String,
    phonePerson: String,
    password: String
}

input NuevaPersona {
    user: String,
    emailPerson: String,
    namePerson: String,
    phonePerson: String,
    password: String

}
`;

module.exports = personType
