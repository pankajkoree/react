import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { getDataFromToken } from "@/helper/getDataFromToken";

connect();

export const POST = async (request) => {
  const userId = await getDataFromToken(request);
  const user = User.findOne({ _id: userId }.select("-password"));

  //   check if there is no user

  return NextResponse.json({
    message: "User found",
    data: user,
  });
};
