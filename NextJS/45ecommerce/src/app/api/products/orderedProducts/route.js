import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";

connect();

export const POST = async (request) => {
  try {
    const orderedProduct = await request.json();

    const orderDetails = await orderedProduct.save();

    return NextResponse.json({
      message: "product ordered successfully",
      success: true,
      orderDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
