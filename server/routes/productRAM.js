const {ProductRAM} = require('../models/productRAM.js');


const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
    const productRAMList = await ProductRAM.find();
    if (!productRAMList) {
        res.status(500).json({ success: false });
    }
    res.send(productRAMList);
});

router.post(`/create`, async(req, res) =>{
    let productRAMModel = new ProductRAM({
        productRAM: req.body.productRAM,
    });

    productRAMModel = await productRAMModel.save();

    if(!productRAMModel){
        return res.status(500).send('The productRAM cannot be created');
    }
    res.status(201).json({ success: true, productRAMModel });
})


module.exports = router;