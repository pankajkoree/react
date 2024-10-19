const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "please provide the user id"],
  },
  deliveryAddress: {
    type: String,
    required: [true, "please provide the address"],
  },
  orderedDate: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: [true, "please provide the product name"],
  },
  quantity: {
    type: String,
    required: [true],
  },
  productPrice: {
    type: String,
    required: [true, "please provide the price"],
  },
  returnPolicy: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productThumbnail: {
    type: String,
    required: true,
  },
});

const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Order;
