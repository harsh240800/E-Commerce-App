import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import color from "colors";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";

// REST OBJECT
const app = express();
// CONFIGURE ENV
dotenv.config();

//CONFIGURE DATABSE
connectDB();

//esmodeulefix 
const __filename = fileURLToPath(import.meta.url); I
const __dirname = path.dirname(__filename);

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

// routers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("server running on port 8080".bgBlue.white);
});
