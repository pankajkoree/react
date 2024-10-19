import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";

// Establish the database connection
connect();

export const POST = async (request) => {
  try {
    // Parse the request body to get the token
    const reqBody = await request.json();
    const { token } = reqBody;

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    console.log("Received token:", token);

    // Find the user with the matching token and ensure it's not expired
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() }, // Ensure the token hasn't expired
    });

    // If no user is found or token is expired, return an error
    if (!user) {
      console.log("Invalid token or token expired");
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Log the user details for debugging purposes
    console.log("User found:", user);

    // Mark the user as verified and clear the token and expiry fields
    user.isVerified = true;
    user.verifyToken = undefined; // Clear the token
    user.verifyTokenExpiry = undefined; // Clear the expiry

    // Save the updated user back to the database
    await user.save();

    // Return a success response
    return NextResponse.json(
      { message: "Email verified successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error verifying email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
