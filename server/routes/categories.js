const { Category } = require("../models/category");

const express = require("express");

const router = express.Router();

const pLimit = require("p-limit");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
});

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    console.log("do not find 404");

    res.status(404).json({ success: false });
  }
  res.status(200).send(category);
});

router.delete("/:id", async (req, res) => {
  const deleteUser = await Category.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    console.log("do not find 404");

    res.status(404).json({ message: " cetagory not found ", success: false });
  }
  res.status(200).json({ message: "cetagory deleted", success: true });
});

router.put("/:id", async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      console.log("images upload succefully result: " + result);

      return result;
    });
  });

  const uploadStatus = await Promise.all(imagesToUpload);

  console.log(" uploadStatus = " + uploadStatus);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    console.log("images cannot upload");
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, images: imgurl, color: req.body.color },
    { new: true }
  );
  if (!category) {
    console.log("do not find 404");

    res.status(404).json({ message: " cetagory not found ", success: false });
  }
  res.status(200).send(category);
});

router.post("/create", async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      console.log("images upload succefully result: " + result);

      return result;
    });
  });

  const uploadStatus = await Promise.all(imagesToUpload);

  console.log(" uploadStatus = " + uploadStatus);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    console.log("images cannot upload");
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  let category = new Category({
    name: req.body.name,
    images: imgurl,
    color: req.body.color,
  });

  if (!category) {
    console.log("category cannot create");
    res.status(500).json({ error: err, success: false });
  }

  category = await category.save();
  console.log("category successfully created" + category);

  res.status(201).json(category);
});

module.exports = router;
