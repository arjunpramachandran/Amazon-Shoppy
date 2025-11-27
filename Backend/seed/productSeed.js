import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import { homeProducts } from "../products.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");

    for (const item of homeProducts) {
    
      const updatedItem = {
        ...item,
        type: item.type || "Home Appliances",
      };

      await Product.findOneAndUpdate(
        { title: item.title },     
        { $set: updatedItem },      
        { upsert: true, new: true } 
      );

      console.log(`✔ Updated/Inserted: ${item.title}`);
    }

    console.log("🎉 Product Seed Completed Successfully!");
    process.exit();
  } catch (error) {
    console.log("❌ Seed Error:", error);
    process.exit(1);
  }
};

seedProducts();
