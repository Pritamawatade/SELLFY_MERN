const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    description :{
        type:String,
        required:true,
    },
    images:[{
        type:String,
        required:true,
        
    }],
    brand:{
        type:String,
        default:''
    },
    price:{
        type:Number,
        default:0,
    },
    oldPrice:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCat',
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        default:0,
    },
    discount:{
        type:Number,
        required:true
    },
    productRAMS:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productRAM',

        
    },
    productSIZE:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productSIZE',
        
    },
    productWEIGHT:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productWEIGHT',
    },

    numReviews:{
        type:Number,
        default:0,
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    dateCreated:{
        type:Date,
        default:Date.now,
    }

})

exports.Product = mongoose.model('Product',productSchema);