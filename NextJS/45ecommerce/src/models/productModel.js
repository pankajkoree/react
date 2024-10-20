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
  tags: [String],
  brand: String,
  sku: String,
  weight: String,
  dimensions: String,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  reviews: Array,
  returnPolicy: String,
  thumbnail: String,
  images: Array,
  meta: Object,
});

const Product =
  mongoose.models.productsdata || mongoose.model("productsdata", productSchema);

export default Product;
