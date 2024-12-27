const { ProductWeight } = require('../models/productWIGHT');
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
    const productWeightList = await ProductWeight.find();
    if (!productWeightList) {
        return res.status(500).json({ success: false });
    }
    res.send(productWeightList);
});

router.post(`/create`, async (req, res) => {
    let productWeightModel = new ProductWeight({
        productWeight: req.body.productWeight,
    });

    productWeightModel = await productWeightModel.save();

    if (!productWeightModel) {
        return res.status(500).send('The productWeight cannot be created');
    }
    res.status(201).json({ success: true, productWeightModel });
});

router.delete('/:id', (req, res) => {
    ProductWeight.findByIdAndDelete(req.params.id).then(productWeight => {
        if (productWeight) {
            return res.status(200).json({ success: true, message: 'The productWeight is deleted!' });
        } else {
            return res.status(404).json({ success: false, message: 'ProductWeight not found!' });
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;