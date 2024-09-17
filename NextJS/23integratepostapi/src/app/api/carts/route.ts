import { NextResponse } from "next/server";
import { carts } from "../../../db/db";
export const GET = () => {
  const data = carts;
  return NextResponse.json(data, { status: 200 });
};
