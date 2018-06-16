const mongoose = require('mongoose')

let db

module.exports = function Connection(){
    
    if (!db) {
        // servidor base de datos en mlab:
        mongoose.connect(process.env.DATA_BASE_DEV)


        // servidor base de datos en mongodb atlas:
        // mongoose.connect(process.env.DATA_BASE)

        // .then(() =>  console.log('connection succesful'))
        .catch((err) => console.error(err));
        db = mongoose.connection
    }

    return db
}