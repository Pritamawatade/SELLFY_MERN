const express = require('express');
const Category = require('../models/category.js');
const Product = require('../models/products.js');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const productList = await Product.find().populate("category");

    if(!productList){
        res.status(404).json({message:false});
    }

    res.send(productList)
})

exports.productList = productList;