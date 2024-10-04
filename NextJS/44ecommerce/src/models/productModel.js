import { Weight } from "lucide-react";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String,
  price: String,
  title: String,
  description: String,
  category: String,
  rating: String,
  discountPercentage: String,
  stock: String,
  tags: String,
  brand: String,
  sku: String,
  Weight: String,
  dimensions: String,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatys: String,
  reviews: Array,
  returnPolicy: String,
  thumbnail: String,
  images: Array,
  meta: Object,
});

const Product =
  mongoose.models.productsData || mongoose.model("productsData", productSchema);

export default Product;
