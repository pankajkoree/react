import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connect();

// adding pagination technique and limiting the number of products

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 0;
    const limit = parseInt(searchParams.get("limit")) || 21;

    console.log("Fetching products data...");

    const skip = page * limit;

    const productsData = await Product.find().skip(skip).limit(limit);

    const totalProducts = await Product.countDocuments();

    if (!productsData || productsData.length === 0) {
      return NextResponse.json(
        { error: "Products not available", success: false },
        { status: 400 }
      );
    }

    return NextResponse.json({
      results: productsData,
      total: totalProducts,
      page,
      limit,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
