import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  // console.log(res.params.all)
  // return NextResponse.json({ result: "Success" });

  const details = res.params.all;
  return NextResponse.json({
    result: details,
  });
};
