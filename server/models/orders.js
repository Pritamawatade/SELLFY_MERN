const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },

    amount: {
      type: Number,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    products: [
      {
        productId:{
          type:String
        },
        productTitle: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
        subTotal: {
          type: Number,
        },
        productId: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

orderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderSchema.set("toJSON", {
  virtuals: true,
});

exports.Order = mongoose.model("Order", orderSchema);
exports.OrderSchema = orderSchema;
