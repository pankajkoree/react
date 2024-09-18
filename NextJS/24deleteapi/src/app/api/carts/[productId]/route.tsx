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

export const DELETE = (req: any, res: any) => {
  console.log(res.params.productId);
  const productDeleteData = carts.filter((product) => {
    return product.id === res.params.productId;
  });

  let deleteResult =
    productDeleteData.length === 0
      ? { result: "no product found..." }
      : { result: "product deleted successfully.." };

  return NextResponse.json(deleteResult);

  // if (productId)
  //   return NextResponse.json(
  //     { result: "product deleted successfully..." },
  //     { status: 200 }
  //   );
  // else
  //   return NextResponse.json(
  //     { result: "product not found..." },
  //     { status: 404 }
  //   );
};
