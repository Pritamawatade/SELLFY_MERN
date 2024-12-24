const mongoose = require('mongoose');

const productWEIGHTSchema = mongoose.Schema({
    productWIGHT:{
        type:String,
        
    }});


exports.productWEIGHT = mongoose.model('productWEIGHT', productWEIGHTSchema);