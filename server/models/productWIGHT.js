const mongoose = require("mongoose");

const productWeightSchema = new mongoose.Schema({
  productWeight: [{
    type: String,
  }],
});

exports.ProductWeight = mongoose.model("ProductWeight", productWeightSchema);