import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import Order from "@/models/orderModel";

connect();

export const POST = async (req) => {
  try {
    const {
      id,
      deliveryAddress,
      orderedDate,
      productName,
      quantity,
      productPrice,
      returnPolicy,
      productDescription,
      productThumbnail,
    } = await req.json();
    const orderedProduct = new Order({
      id,
      deliveryAddress,
      orderedDate,
      productName,
      quantity,
      productPrice,
      returnPolicy,
      productDescription,
      productThumbnail,
    });

    const orderDetails = await orderedProduct.save();

    return NextResponse.json({
      message: "Product ordered successfully",
      success: true,
      orderDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
