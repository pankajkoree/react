import { NextResponse } from "next/server";
import { carts } from "../../../../db/db";

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
