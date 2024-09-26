import { connectionString } from "@/lib/database/db_connection";
import { Image } from "@/lib/database/model/image";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) return;
  await mongoose.connect(connectionString);
  isConnected = true;
};

export const GET = async () => {
  try {
    await connectToDatabase();

    const images = await Image.find().select("name data contentType");
    const imagesWithBase64 = images.map((image) => ({
      name: image.name,
      data: image.data.toString("base64"),
      contentType: image.contentType,
    }));

    return NextResponse.json({
      success: true,
      images: imagesWithBase64,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching images.",
    });
  }
};
