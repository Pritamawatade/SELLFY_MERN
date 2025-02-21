const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const { SubCat } = require("../models/SubCat.js");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
const pLimit = require("p-limit");
const { RelatedProducts, RecentlyViewd } = require("../models/recentlyViewd.js");

const limit = pLimit(5);

router.get(`/featured`, async (req, res) => {
  const productList = await Product.find({ isFeatured: true });
  if (!productList) {
    res.status(404).json({ message: false });
  }
  res.status(200).json(productList);
});
router.get(`/`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perpage = parseInt(req.query.perpage) || 6;
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perpage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];

  if(req.query.rating !== undefined){
    productList = await Product.find({ subCatId: req.query.subCatId }).populate(
      "category subCategory"
    );
    const filteredProducts = productList.filter((product) => {
      if (req.query.rating != product.rating) {
        return false;
      }
      return true;
    });

    if (!productList) {
      res.status(404).json({ message: false });
    }
    return res.status(200).json({
      products: filteredProducts,
      totalPages: totalPages,
      page: page,
    });
  }

  if (req.query.minPrice !== undefined && req.query.maxPrice !== undefined) {
    productList = await Product.find({ subCatId: req.query.subCatId }).populate(
      "category subCategory"
    );

    const filteredProducts = productList.filter((product) => {
      if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
        return false;
      }
      if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
        return false;
      }
      return true;
    });

    if (!productList) {
      res.status(404).json({ message: false });
    }

    return res.status(200).json({
      products: filteredProducts,
      totalPages: totalPages,
      page: page,
    });
  } else {
    productList = await Product.find(req.query).populate(
      "category subCategory"
    );

    if (!productList) {
      res.status(404).json({ message: false });
    }

    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  }

  // if(req.query.catName !== undefined){
  //   productList = await Product.find({catName:req.query.catName}).populate("category subCategory")
  // }else{
  //   productList = await Product.find().populate("category subCategory")
  //   .skip((page - 1) * perpage)
  //   .limit(perpage)
  //   .exec();
  // }

  // if(req.query.subCatId !== undefined){
  //   productList = await Product.find({subCatId:req.query.subCatId}).populate("category subCategory")
  // }else{
  //   productList = await Product.find().populate("category subCategory")
  //   .skip((page - 1) * perpage)
  //   .limit(perpage)
  //   .exec();
  // }

  //TODO: video 39 28 min 

  if (!productList) {
    res.status(404).json({ message: false });
  }

  return res.status(200).json({
    products: productList,
    totalPages: totalPages,
    page: page,
  });

  // res.send(productList);
});

router.get(`/recentlyviewd`, async (req, res) => {
  try {
    const productList = await RecentlyViewd.find();
    
    if (!productList || productList.length === 0) {
      return res.status(404).json({ message: "No products found" }); // ✅ Stops further execution
    }

    return res.status(200).json(productList); // ✅ Sends only one response
  } catch (error) {
    console.error("Error fetching recently viewed:", error);
    return res.status(500).json({ message: "Server error", error }); // ✅ Stops execution
  }
});

router.post(`/recentlyviewd`, async (req, res) =>{
  const duplicateProducts = await RecentlyViewd.find({prodId:req.body._id});
  if(duplicateProducts.length === 0){
    const {
      name,
      description,
      images,
      brand,
      price,
      oldPrice,
      catName,
      category,
      subCategory,
      subCatId,
      countInStock,
      rating,
      discount,
      productRAMS,
      productSIZE,
      productWEIGHT,
      numReviews,
  } = req.body;

  let products =  new RecentlyViewd({
    prodId:req.body._id,
    name,
    description,
    images,
    brand,
    price,
    oldPrice,
    catName,
    category,
    subCategory,
    subCatId,
    countInStock,
    rating,
    discount,
    productRAMS,
    productSIZE,
    productWEIGHT,
    numReviews,
    isFeatured: req.body.isFeatured === "true",
  })

    products =  await products.save();
  
    if(!products){
      return res.status(400).json({success:false, message:"Failed to create product"})
    }
  
    return  res.status(201).json({success:true, products})
  }
  else{
    return res.status(200).json({success:true, message:"Product already exists"})
  }
  
}) 
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // ✅ Stops execution
    }

    return res.json(product); // ✅ Sends only one response
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Server error", error });
  }
});


router.post(`/recentlyviewd`, async (req, res) => {
  try {
    const duplicateProducts = await RecentlyViewd.find({ _id: req.body._id });

    if (duplicateProducts.length > 0) { // ✅ Fix: Check `.length` instead of `!duplicateProducts`
      return res.status(200).json({ success: true, message: "Product already exists" }); // ✅ Sends response properly
    }
    const {
      name,
      description,
      images,
      brand,
      price,
      oldPrice,
      catName,
      category,
      subCategory,
      subCatId,
      countInStock,
      rating,
      discount,
      productRAMS,
      productSIZE,
      productWEIGHT,
      numReviews,
  } = req.body;


  let product =  new RecentlyViewd({
    name,
    description,
    images,
    brand,
    price,
    oldPrice,
    catName,
    category,
    subCategory,
    subCatId,
    countInStock,
    rating,
    discount,
    productRAMS,
    productSIZE,
    productWEIGHT,
    numReviews,
    isFeatured: req.body.isFeatured === "true",
  })


    const savedProduct = await product.save();

    if (!savedProduct) {
      return res.status(400).json({ success: false, message: "Failed to create product" }); // ✅ Stops execution
    }

    return res.status(201).json({ success: true, product: savedProduct }); // ✅ Sends only one response
  } catch (error) {
    console.error("Error adding to recently viewed:", error);
    return res.status(500).json({ success: false, message: "Server error", error });
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

router.put("/:id", upload.array("images"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ error: "No images uploaded", success: false });
    }

    const imagesToUpload = req.files.map((file) => {
      return limit(async () => {
        try {
          const result = await cloudinary.uploader.upload(file.path);
          await fs.unlink(file.path);
          return result;
        } catch (err) {
          console.error("Error uploading image:", err);
          throw err;
        }
      });
    });

    const uploadStatus = await Promise.allSettled(imagesToUpload);

    const imgurl = uploadStatus
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value.secure_url);

    if (imgurl.length !== req.files.length) {
      return res
        .status(500)
        .json({ error: "Some images could not be uploaded", success: false });
    }

    console.log(req.body);

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,

        catName: req.body.catName,
        images: imgurl,
      },
      { new: true }
    );

    if (!product) {
      return res
        .status(404)
        .json({ error: "Product not found", success: false });
    }

    res
      .status(200)
      .json({ message: "Product updated", success: true, product });
  } catch (err) {
    console.error("Error in update product route:", err);
    res.status(500).json({ error: "Internal server error", success: false });
  }
});

module.exports = router;
