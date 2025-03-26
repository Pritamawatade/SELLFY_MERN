const { Cart } = require("../models/cart");

const express = require("express");

const router = express.Router();

router.get(`/`, async (req, res) => {
  try {
    const cartList = await Cart.find(req.query);
    if (!cartList) {
      res.status(500).json({ success: false });
    }
    return res.status(200).json(cartList);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const cartItem = await Cart.findByIdAndDelete(req.params.id);
  if (!cartItem) {
    console.log("do not find 404");

    return res
      .status(404)
      .json({ message: " cetagory not found ", success: false });
  }
  return res.status(200).json({ message: "cetagory deleted", success: true });
});

router.put("/:id", async (req, res) => {
  try {
    const cartList = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        productTitle: req.body.productTitle,
        image: req.body.image,
        rating: req.body.rating,
        price: req.body.price,
        quantity: req.body.quantity,
        subTotal: req.body.subTotal,
        productId: req.body.productId,
        userId: req.body.userId,
      },
      { new: true }
    );

    if (!cartList) {
      return res.status(404).json({
        message: "cartList not found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      data: cartList,
    });
  } catch (error) {
    console.error("Error updating cartList:", error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

router.post("/add", async (req, res) => {
  const cartItem = await Cart.find({ productId: req.body.productId });

  if (cartItem.length === 0) {
    try {
      let cartList = new Cart({
        productTitle: req.body.productTitle,
        image: req.body.image,
        rating: req.body.rating,
        price: req.body.price,
        quantity: req.body.quantity,
        subTotal: req.body.subTotal,
        productId: req.body.productId,
        userId: req.body.userId,
      });

      if (!cartList) {
        return res.status(400).json({ message: "error creating Cart" });
      }
      cartList = await cartList.save();

      return res.status(201).json(cartList);
    } catch (error) {
      console.error("Error creating cartList:", error);
      res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }else{
    res.status(200).json({message:"product already exist in cart"})
  }
});

router.delete(`/del`, async (req, res) => {
  try {
    const result = await Cart.deleteMany({});
    return res.status(200).json({
      message: "All cart items deleted successfully",
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all cart items:", error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});
module.exports = router;
