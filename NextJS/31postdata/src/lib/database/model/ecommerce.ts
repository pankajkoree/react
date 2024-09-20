import mongoose from "mongoose";

const ecommerceModel = new mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
  total: Number,
});

export const Ecommerce =
  mongoose.models.carts || mongoose.model("carts", ecommerceModel);
