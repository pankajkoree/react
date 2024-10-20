import { connect } from "@/dbConfig/dbConfig"; 
import Product from "@/models/productModel"; 
import { NextResponse } from "next/server";

connect();

export const POST = async (request) => {
  try {
    const productData = await request.json(); // Parse the incoming JSON data

    // Create a new product instance
    const newProduct = new Product(productData);

    // Save the product to the database
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
