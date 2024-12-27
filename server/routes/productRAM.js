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

router.delete('/:id', (req, res)=>{
    ProductRAM.findByIdAndDelete(req.params.id).then(productRAM =>{
        if(productRAM){
            return res.status(200).json({success: true, message: 'the productRAM is deleted!'})
        } else {
            return res.status(404).json({success: false, message: 'productRAM not found!'})
        }
    }).catch(err=>{
        return res.status(400).json({success: false, error: err})
    })
}
)
module.exports = router;