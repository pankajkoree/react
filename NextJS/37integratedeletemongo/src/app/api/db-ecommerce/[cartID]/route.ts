import { connectionString } from "@/lib/database/db_connection";
import { Ecommerce } from "@/lib/database/model/ecommerce";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req: any, res: any) => {
  // <!---------fetching id---------!>
  const getCartId = res.params.cartID;
  const id = { _id: getCartId };
  //   console.log(id);
  // <!---------END---------!>

  // <!---------fetching payload---------!>
  const payload = await req.json();
  //   console.log(payload);

  // <!---------END---------!>

  await mongoose.connect(connectionString);
  const result = await Ecommerce.findOneAndUpdate(id, payload);

  return NextResponse.json({ result, success: true });
};


export const GET = async (req: any, res: any) => {
  // <!---------fetching id---------!>
  const getCartId = res.params.cartID;
  const id = { _id: getCartId };
  //   console.log(id);
  // <!---------END---------!>

  // // <!---------fetching payload---------!>
  // const payload = await req.json();
  // //   console.log(payload);

  // // <!---------END---------!>

  await mongoose.connect(connectionString);
  const result = await Ecommerce.findById(id);

  return NextResponse.json({ result, success: true });
};
