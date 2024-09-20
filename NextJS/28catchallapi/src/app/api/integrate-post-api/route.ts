import { NextResponse } from "next/server";

// 2nd way
export const POST = async (req: any, res: any) => {
  const data = await req.json();
  console.log(data);

  if (data.age) {
    return NextResponse.json({ result: "Bad Request" }, { status: 400 });
  }
  //   return NextResponse.json({
  //     name: "rajan poudel",
  //     age: 20,
  //   });

  return NextResponse.json(
    {
      result: "Sucsess",
    },
    {
      status: 200,
    }
  );
};
