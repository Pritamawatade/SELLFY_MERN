const { SubCat } = require("../models/SubCat");
const express = require("express");

const router = express.Router();

router.get(`/` , async (req, res) =>{
try {
    
        const SubCatList = await SubCat.find().populate('category');
        if(!SubCatList){
            res.status(500).json({success:false});
        }
        res.send(SubCatList);
} catch (error) {
    res.status(500).json({success:false});
}
});


router.post("/create", async (req, res) => {
    try {
      

        let subCat = new SubCat({
            category: req.body.category,
            subCategory: req.body.subCategory,
           
        });


        subCat = await subCat.save();
        console.log("SubCat successfully created:", subCat.category);
        
        console.log("SubCat successfully created:", subCat);

        res.status(201).json({
            success: true,
            data: subCat
        });
    } catch (error) {
        console.error("Error creating SubCat:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});


router.delete("/:id", async (req, res) => {
    const deleteSubCat = await SubCat.findByIdAndDelete(req.params.id);
    if (!deleteSubCat) {
      console.log("do not find 404");
      
      res.status(404).json({ message: " cetagory not found ", success: false });
    }
    res.status(200).json({ message: "cetagory deleted", success: true });
  });


  router.put("/:id", async (req, res) => {
    try {
       

        const subCat = await SubCat.findByIdAndUpdate(
            req.params.id,
            {
                category: req.body.category,
                subCategory: req.body.subCategory,
            
            },
            { new: true }
        );

        if (!subCat) {
            return res.status(404).json({ 
                message: "Category not found", 
                success: false 
            });
        }

        res.status(200).json({
            success: true,
            data: subCat
        });
    } catch (error) {
        console.error("Error updating subCat:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});

router.get(`/:id`, async (req, res) => {
    try {
        const subCat = await SubCat.findById(req.params.id);
        if (!subCat) {
            console.log("do not find 404");
            res.status(404).json({ success: false });
        }
        res.status(200).send(subCat);
    } catch (error) {
        res.status(500).json({ success: false });
    }
});
module.exports = router;
