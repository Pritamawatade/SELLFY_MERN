const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const cloudinary = require("cloudinary").v2;
const fs = require('fs').promises;

router.get(`/`, async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(404).json({ message: false });
  }

  res.send(productList);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({ message: "product not found" });
  }

  res.send(product);
});

router.post(`/create`, upload.array('images', 4), async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).json({ success: false, message: "Invalid category" });
    }

    const uploadPromises = req.files.map(async (file) => {
      try {
        const result = await cloudinary.uploader.upload(file.path);
        await fs.unlink(file.path); // Delete the file after upload
        return result;
      } catch (error) {
        console.error('Error uploading to cloudinary:', error);
        throw error;
      }
    });

    const uploadStatus = await Promise.all(uploadPromises);
    const imgurl = uploadStatus.map(item => item.secure_url);

    let product = new Product({
      name: req.body.name,
      description: req.body.description,
      images: imgurl,
      brand: req.body.brand,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured === 'true',
    });

    product = await product.save();

    if (!product) {
      return res.status(400).json({ success: false, message: "Failed to create product" });
    }

    res.status(201).json({ success: true, product });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deleteProduct) {
    console.log("do not find 404");

    res.status(404).json({ message: " product not found ", success: false });
  }
  res.status(200).send({ message: "product deleted", success: true });
});

router.put('/:id', async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      console.log('images upload succefully result: ' + result);
      return result;
    })
  })

  const uploadStatus = await Promise.all(imagesToUpload);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  })

  if (!uploadStatus) {
    console.log('images cannot upload');
    return res.status(500).json({
      error: 'images cannot upload',
      status: false
    })
  }

  const product = await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    images: imgurl,
    brand: req.body.brand,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    category: req.body.category,
    countInStock: req.body.countInStock,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  }, { new: true });

  if (!product) {
    res.status(404).json({
      message: 'product not updated',
      success: false
    })
  }

  res.status(200).json({
    message: 'product updated',
    success: true,
    product: product,
  });

})

module.exports = router;
