import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionString);

  return NextResponse.json({ result: "success" });
};
