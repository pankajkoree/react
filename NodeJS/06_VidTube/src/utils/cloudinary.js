import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Await the response from Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Log the URL of the uploaded file
    console.log("File uploaded on Cloudinary. File src:", response.secure_url);

    // Once the file is uploaded, delete it from the server
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    // Clean up the local file in case of an error
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deleted from Cloudinary", publicId);
  } catch (err) {
    console.error("Error deleting from Cloudinary", err);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
