// fetching all data at once

import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connect();

export const GET = async () => {
  try {
    const productsData = await Product.find();
    if (!productsData) {
      return NextResponse.json(
        { error: "Product not available" },
        { status: 400 }
      );
    }

    return NextResponse.json({ results: productsData, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
