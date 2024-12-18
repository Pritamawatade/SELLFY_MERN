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
    try {
        const result = await cloudinary.uploader.upload(req.body.image);
        
        if (!result) {
            return res.status(500).json({
                message: "Failed to upload image",
                success: false
            });
        }

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                subCategory: req.body.subCategory,
                image: result.secure_url,
                color: req.body.color
            },
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ 
                message: "Category not found", 
                success: false 
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});

router.post("/create", async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.body.image);
        
        if (!result) {
            return res.status(500).json({
                message: "Failed to upload image",
                success: false
            });
        }

        let category = new Category({
            name: req.body.name,
            subCategory: req.body.subCategory,
            image: result.secure_url,
            color: req.body.color,
        });

        category = await category.save();
        console.log("Category successfully created:", category);

        res.status(201).json({
            success: true,
            data: category
        });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});

module.exports = router;
