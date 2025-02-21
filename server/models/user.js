const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,

    }
})

exports.User = mongoose.model('User', userScheme);