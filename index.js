const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
// const productRoutes = require(".src/routes/productRoutes");
// const orderRoutes = require(".src/routes/orderRoutes");
const errorHandler = require("./src/utils/errorHandler");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));