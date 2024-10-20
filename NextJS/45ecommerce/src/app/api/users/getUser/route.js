import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";

connect();

export const GET = async () => {
  try {
    const users = await User.find();

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
