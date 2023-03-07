const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB with try catch
try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

app.use("/api/products", productRoutes);
