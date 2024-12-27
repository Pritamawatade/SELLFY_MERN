const {ProductSize} = require('../models/productSIZE');
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
    const ProductSizeList = await ProductSize.find();
    if (!ProductSizeList) {
        res.status(500).json({ success: false });
    }
    res.send(ProductSizeList);
});

router.post(`/create`, async(req, res) =>{
    let ProductSizeModel = new ProductSize({
        productSize: req.body.ProductSize,
    });

    ProductSizeModel = await ProductSizeModel.save();

    if(!ProductSizeModel){
        return res.status(500).send('The ProductSize cannot be created');
    }
    res.status(201).json({ success: true, ProductSizeModel });
})

router.delete('/:id', (req, res)=>{
    ProductSize.findByIdAndDelete(req.params.id).then(ProductSize =>{
        if(ProductSize){
            return res.status(200).json({success: true, message: 'the ProductSize is deleted!'})
        } else {
            return res.status(404).json({success: false, message: 'ProductSize not found!'})
        }
    }).catch(err=>{
        return res.status(400).json({success: false, error: err})
    })
}
)


module.exports = router;