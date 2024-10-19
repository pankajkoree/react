import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import Order from "@/models/orderModel";

connect();

export const GET = async () => {
  try {
    const orders = await Order.find({});

    return NextResponse.json({
      message: "Orders retrieved successfully",
      success: true,
      orders,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
