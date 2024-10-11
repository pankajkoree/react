// fetching all data at once

// import { connect } from "@/dbConfig/dbConfig";
// import Product from "@/models/productModel";
// import { NextResponse } from "next/server";

// connect();

// export const GET = async () => {
//   try {
//     console.log("Fetching products data...");
//     const productsData = await Product.find();
//     if (!productsData) {
//       return NextResponse.json(
//         { error: "Product not available" },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json({ results: productsData, success: true });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// };

// adding pagination technique and limiting the number of products

import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connect();

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
