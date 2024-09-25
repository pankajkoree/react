import { NextResponse } from "next/server";
import { carts } from "../../../../db/db";
import { Result } from "postcss";

export const GET = (req: any, value: any) => {
  const productData = carts.filter((product) => {
    return product.id == value.params.productId;
  });
  let result =
    productData.length === 0
      ? { result: "no product found..." }
      : { result: productData };

  return NextResponse.json(result);
};

export const DELETE = (req: any, res: any) => {
  const productId = res.params.productId;
  if (productId)
    return NextResponse.json(
      { result: "product deleted successfully...", success: true },
      { status: 200 }
    );
  else
    return NextResponse.json(
      { result: "product not found...", success: false },
      { status: 404 }
    );
};

export const PUT = async (req: any, res: any) => {
  // let productId = res.params.productId
  let payload = await req.json();
  // console.log(payload);
  // return NextResponse.json({ success: true });
  payload.productId = res.params.productId;

  if (!payload.productId) {
    return NextResponse.json({
      result: "Error",
      success: false,
    });
  }
  return NextResponse.json({
    Result: "Success",
    success: true,
  });
};
