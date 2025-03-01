const { Order } = require("../models/orders");

const express = require("express");

const router = express.Router();


router.get(`/`, async (req, res) => {
  const orderList = await Order.find();
  if (!orderList) {
    res.status(500).json({ success: false });
  }
  res.send(orderList);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    console.log("do not find 404");

    res.status(404).json({ success: false });
  }
  res.status(200).send(order);
});

router.delete("/:id", async (req, res) => {
  const deleteOrder = await Order.findByIdAndDelete(req.params.id);
  if (!deleteOrder) {
    console.log("do not find 404");
    
    res.status(404).json({ message: " order not found ", success: false });
  }
  res.status(200).json({ message: "order deleted", success: true });
});

router.put("/:id", async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address,
                amount: req.body.amount,
                paymentId: req.body.paymentId,
                userId: req.body.userId,
                email: req.body.email,
                products: req.body.products
            },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ 
                message: "Order not found", 
                success: false 
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});

router.post("/create", async (req, res) => {
    try {
        let order = new Order({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            amount: req.body.amount,
            paymentId: req.body.paymentId,
            userId: req.body.userId,
            email: req.body.email,
            products: req.body.products
        });

        order = await order.save();
        console.log("Order successfully created:", order);

        res.status(201).json({
            success: true,
            data: order
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ 
            message: error.message, 
            success: false 
        });
    }
});

module.exports = router;
