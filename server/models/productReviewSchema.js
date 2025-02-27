const mongoose = require('mongoose')

const productReviewsSchema = mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required: true,
        default:""
    },
    customerRating:{
        type:Number,
        required:true,
        default:3
    },
    customerId:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

exports.ProductReviews = mongoose.model("ProductReviews", productReviewsSchema)