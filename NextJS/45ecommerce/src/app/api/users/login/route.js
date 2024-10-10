import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export const POST = async (request) => {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }
    console.log("User exists");

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Logged In Success",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
