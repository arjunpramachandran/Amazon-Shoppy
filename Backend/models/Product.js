import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    type:{type:String,required:true},
  title: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratingCount: { type: String, default: "0" },
  view: { type: String, default: "0" },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  delivery: { type: String },
});

export default mongoose.model("Product", productSchema);