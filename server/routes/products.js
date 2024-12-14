const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const cloudinary = require("cloudinary").v2;
const fs = require('fs').promises;
const pLimit = require('p-limit');



const limit = pLimit(5);

router.get(`/`, async (req, res) => {


  const page = parseInt(req.query.page) || 1;
  const perpage = parseInt(req.query.perpage) || 4;
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perpage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }


  const productList = await Product.find().populate("category")
    .skip((page - 1) * perpage)
    .limit(perpage)
    .exec();


  if (!productList) {
    res.status(404).json({ message: false });
  }

  return res.status(200).json({
    "products": productList,
    "totalPages": totalPages,
    "page": page
  });

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

router.put('/:id', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded', success: false });
    }

    const imagesToUpload = req.files.map((file) => {
      return limit(async () => {
        try {
          const result = await cloudinary.uploader.upload(file.path);
          await fs.unlink(file.path);
          return result;
        } catch (err) {
          console.error('Error uploading image:', err);
          throw err;
        }
      });
    });

    const uploadStatus = await Promise.allSettled(imagesToUpload);

    const imgurl = uploadStatus
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value.secure_url);

    if (imgurl.length !== req.files.length) {
      return res.status(500).json({ error: 'Some images could not be uploaded', success: false });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        images: imgurl,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found', success: false });
    }

    res.status(200).json({ message: 'Product updated', success: true, product });
  } catch (err) {
    console.error('Error in update product route:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});


module.exports = router;
