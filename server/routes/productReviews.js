const {ProductReviews} = require("../models/productReviewSchema.js")
const express = require('express')
const router = express.Router()

router.get(`/`, async (req,res)=>{
    let reviews = []

    if(req.query.productId !== undefined && req.query.productId !== null && req.query.productId !== "" ){
        reviews = await ProductReviews.find({productId: req.query.productId})
    }else{
        reviews = await ProductReviews.find();
    }

    if(!reviews){
        return res.status(200).json({message:"no revviews found"})
    }
   return res.status(200).json(reviews)
})


router.get(`/:id`, async (req,res)=>{
    const {id} = req.params
    const review = await ProductReviews.find({productId: id})
    if(!review){
        return res.status(404).json({message:"review not found"})
    }
    return res.status(200).send(review)
})

router.post(`/add`, async (req,res)=>{
    let review = new ProductReviews({
        productId: req.body.productId,
        customerName: req.body.customerName,
        review: req.body.review,
        customerRating: req.body.customerRating,
        customerId: req.body.customerId
    })

    review = await review.save()

    if(!review){
        return res.status(400).json({message:"Failed to create review"})
    }
    return res.status(200).json(review)
})


module.exports = router