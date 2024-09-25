import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const response = await request.formData();

  const file = response.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bufferData = await file.arrayBuffer();
  const buffer = Buffer.from(bufferData);

  // Create the absolute path to the public/uploads directory
  const filePath = path.join(process.cwd(), "public/uploads", file.name);

  try {
    await writeFile(filePath, buffer);
    return NextResponse.json({
      response: "successfully uploaded",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
};
