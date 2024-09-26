import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Image } from "@/lib/database/model/image";

export const POST = async (request: Request) => {
  // Check if Mongoose is already connected
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionString);
  }

  try {
    // Extract form data from the request
    const formData = await request.formData();
    const file = formData.get("file");

    // Validate the file
    if (!file || !(file instanceof File)) {
      return NextResponse.json({
        success: false,
        response: "No file uploaded or invalid file",
      });
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({
        success: false,
        response: "Invalid file type. Only JPEG, PNG, and GIF are allowed.",
      });
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    // Create a new image document
    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    // Save the image document to the database
    await newImage.save();

    return NextResponse.json({
      response: "Successfully uploaded",
      success: true,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({
      response: "Failed to upload image",
      success: false,
      error: (error as Error).message, // Ensure error message is a string
    });
  } finally {
    // Disconnect from the database if it was connected
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
    }
  }
};
