import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import productRout from './routes/productRout.js'
import orderRoutes from "./routes/orderRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";


dotenv.config();
const app = express();
const base_url = process.env.CLIENT_URL


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: base_url,
    credentials: true,
  })
);
// routes


app.use("/api/auth", userRoutes);
app.use("/api/products", productRout);
app.use("/api/orders",authMiddleware, orderRoutes);

connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
