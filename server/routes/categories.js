const { Category }  = require('../models/category.js')

const express = require('express')

const router = express.Router()

router.get(`/` , async (req, res) => {
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.sendStatus(categoryList)

})


module.exports = router





//TODO video 20 18min




