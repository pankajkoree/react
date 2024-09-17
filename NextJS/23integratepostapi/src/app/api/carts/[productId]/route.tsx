import { NextResponse } from "next/server";
import { carts } from "../../../../db/db";

export const GET = (req: any, value: any) => {
  const productData = carts.filter((product) => {
    console.log(product.id);
    return product.id == value.params.productId;
  });
  let result =
    productData.length === 0
      ? { result: "no product found..." }
      : { result: productData };

  return NextResponse.json(result);
};
