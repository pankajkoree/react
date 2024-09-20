import { connectionString } from "@/lib/database/db_connection";
import { Ecommerce } from "@/lib/database/model/ecommerce";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export const GET = async () => {
//   await mongoose.connect(connectionString);

//   return NextResponse.json({ result: "success" });
// };

export const GET = async () => {
  await mongoose.connect(connectionString);

  const cartData = await Ecommerce.find();

  // return NextResponse.json({ result: "success" });
  return NextResponse.json({ result: cartData });
};
