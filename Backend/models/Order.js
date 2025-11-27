
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        title: String,
        image: String,
        price: Number,
        qty: Number,
      }
    ],

    shippingAddress: {
      name: String,
      address: String,
      city: String,
      pincode: String,
      phone: String,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Card", "UPI", "NetBanking"],
      default: "Card"
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending"
    },

    orderStatus: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Processing"
    },

    totalAmount: { type: Number, required: true },
  },

  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
