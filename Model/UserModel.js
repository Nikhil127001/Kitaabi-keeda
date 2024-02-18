const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    name : {
         type : String
    },
    phoneNumber : {
        type : Number,
        length : 10
    }
})

const UserData = mongoose.model('Users' , UserSchema)

module.exports = UserData;