import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import Order from "@/models/orderModel";

connect();

export const POST = async () => {
  try {
    const orderedProduct = new Order({
      id,
      deliveryAddress,
      productName,
      quantity,
      productPrice,
    });

    const orderDetails = await orderedProduct.save();
    console.log(orderDetails);

    return NextResponse.json({
      message: "product ordered successfully",
      success: true,
      orderDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};