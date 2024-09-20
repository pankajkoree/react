import { NextResponse } from "next/server";

// 1st way
export const POST = () => {
  return NextResponse.json({
    name: "rajan",
    age: 20,
  });
};
