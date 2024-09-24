import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Image } from "@/lib/database/model/image";

export const POST = async (request: any) => {
  try {
    await mongoose.connect(connectionString);

    const response = await request.formData();
    const file = response.get("file");

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });
    await newImage.save();

    return NextResponse.json({
      response: "Successfully uploaded",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      response: "Failed",
      success: false,
    });
  }
};
