const mongoose = require('mongoose');

const productSIZESchema = mongoose.Schema({
    productSize: [{
        type: String
    }]
});


exports.ProductSize = mongoose.model('ProductSize', productSIZESchema);