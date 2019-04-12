let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MovieSchema = new Schema({
    name: String,
    genre: String,
    team:{
        mainActor: String,
        mainActress: String,
        supportingActor: String,
        supportingActress: String
    }
});

module.exports = mongoose.model('movie', MovieSchema);