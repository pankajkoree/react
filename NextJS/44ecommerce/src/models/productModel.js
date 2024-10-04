import mongoose from "mongoose";
import { number, string } from "zod";

const productSchema = new mongoose.Schema({
  id: number,
  price: number,
  description: String,
  category: String,
  rating: number | String,
  discountPercentage: number | String,
  stock: number,
  warrantyInformation: String,
  shippingInformation: String,
  reviews: Array,
  returnPolicy: String,
  thumbnail: String,
  images: Array,
});
