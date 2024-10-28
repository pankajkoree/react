import { v2 as cloudinary } from "cloudinary";
import { fs } from "fs";

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null
        
        const response = cloudinary.uploader.upload(
            localFilePath,{
                resource_type: "auto"
            }
        )
    }
    console.log("File uploaded on cloudinary. File src : "+response.url)
    // if once the file is uploaded, we would delete from the server
    fs.unlinkSync(localFilePath)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log(error);
  }
};

export { uploadOnCloudinary };
