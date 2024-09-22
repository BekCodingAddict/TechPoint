import express from "express";
import Product from "../models/Product.js";

const productRoutes = express.Router();

const getPropducts = async (req, res) => {
  const products = await Product.find({});

  res.json({
    products,
    pagination: {},
  });
};

productRoutes.route("/").get(getPropducts);

export default productRoutes;
