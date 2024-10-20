import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connect();

export const POST = async (request) => {
  try {
    const productData = await request.json();

    const newProduct = new Product(productData);

    await newProduct.save();

    return NextResponse.json(
      { success: true, product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
