// import { connectionString } from "@/lib/database/db_connection";
// import { Ecommerce } from "@/lib/database/model/ecommerce";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//   await mongoose.connect(connectionString);

//   const cartData = await Ecommerce.find();

//   // return NextResponse.json({ result: "success" });
//   return NextResponse.json({ result: cartData });
// };

// // POST

// export const POST = async (req: any) => {
//   const payload = await req.json();
//   await mongoose.connect(connectionString);

//   const cartData = new Ecommerce(payload);

//   const response = await cartData.save();
//   return NextResponse.json({ result: response, success: true });
// };

import { connectionString } from "@/lib/database/db_connection";
import { Ecommerce } from "@/lib/database/model/ecommerce";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Reuse Mongoose connection
let isConnected = false;

const connectToDatabase = async () => {
  if (!isConnected) {
    await mongoose.connect(connectionString);
    isConnected = true; // Set flag to true once connected
  }
};

// GET Handler
export const GET = async () => {
  await connectToDatabase();

  const cartData = await Ecommerce.find();

  return NextResponse.json({ result: cartData });
};

// POST Handler
export const POST = async (req: any) => {
  const payload = await req.json();

  // Convert string values to numbers
  const cartData = new Ecommerce({
    ...payload,
    price: Number(payload.price),
    quantity: Number(payload.quantity),
    total: Number(payload.total),
  });

  await connectToDatabase();

  const response = await cartData.save();

  return NextResponse.json({ result: response, success: true });
};
