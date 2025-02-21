const mongoose = require('mongoose')

const recentlyViewdSchema = mongoose.Schema({
    prodId:{
        type: String,
        default: '',
    },
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
    catName:{
        type:String,
        default:''
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
    subCatId:{
        type:String,
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

exports.RecentlyViewd = mongoose.model('RecentlyViewd',recentlyViewdSchema);