import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connect();

export const GET = async () => {
  try {
    const productsData = await Product.find();

    return NextResponse.json({ results: productsData, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
