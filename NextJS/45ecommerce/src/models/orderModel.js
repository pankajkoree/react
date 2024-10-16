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
  productName: {
    type: String,
    required: [true, "please provide the product name"],
  },
  productPrice: {
    type: String,
    required: [true, "please provide the price"],
  },
});

const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Order;
