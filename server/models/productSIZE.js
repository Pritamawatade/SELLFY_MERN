const mongoose = require('mongoose');

const productSIZESchema = mongoose.Schema({
    productSIZE:{
        type:String,
        
    }});


exports.productSIZE = mongoose.model('productSIZE', productSIZESchema);