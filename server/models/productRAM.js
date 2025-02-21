const mongoose = require('mongoose');

const productRAMSchema = mongoose.Schema({
    productRAM:[{
        type:String,

    }]
});


exports.ProductRAM = mongoose.model('ProductRAM', productRAMSchema);
