import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewerName: { type: String, required: true },
  reviewerEmail: { type: String, required: true },
});

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    stock: { type: Number, required: true },
    tags: { type: [String] },
    brand: { type: String, required: true },
    sku: { type: String, required: true },
    weight: { type: String },
    dimensions: { type: String },
    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: { type: String },
    reviews: [reviewSchema],
    returnPolicy: { type: String },
    thumbnail: { type: String },
    images: { type: [String] },
    meta: { type: Object },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.productsdata || mongoose.model("productsdata", productSchema);

export default Product;
