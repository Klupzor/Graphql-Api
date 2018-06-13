const mongoose = require('mongoose')

let db

module.exports = function Connection(){
    
    if (!db) {
        mongoose.connect('mongodb://klupzor:12345qwer@ds135810.mlab.com:35810/test-api-glumsus')
        // .then(() =>  console.log('connection db succesful'))
        .catch((err) => console.error(err));
        db = mongoose.connection
    }

    return db
}