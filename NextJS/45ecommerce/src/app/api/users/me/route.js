import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { getDataFromToken } from "../../../../helper/getDataFromToken";

connect();

export const POST = async (request) => {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
};
