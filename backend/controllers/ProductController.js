const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

// Configuration
cloudinary.config({
  cloud_name: "dsomk7srv",
  api_key: "587592628216111",
  api_secret: "kjtYBMsxrsRq9fZTTZCC3Awk3wk",
});

const Product = require("../models/Product");
// Use async/await to handle asynchronous code

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  // handle image uplaod from image input
  if (req.image) {
    try {
      const result = await cloudinary.uploader.upload(req.image.path);
      product.image = result.secure_url;
    } catch (error) {
      console.log(error);
    }
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No product with that id");

  const updatedProduct = await Product.findByIdAndUpdate(
    _id,
    { ...product, _id },
    { new: true }
  );

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  await Product.findByIdAndRemove(id);
  res.json({ message: "Product deleted successfully" });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
