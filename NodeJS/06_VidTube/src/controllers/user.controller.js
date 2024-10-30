import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generateAccessAndRefreshToken = async (userId) => {
  const user = await User.findById(userId);

  // todo for if user is found or not

  try {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
  
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return {accessToken, refreshToken}
  } catch (error) {
    
  }
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { fullname, email, username, password } = req.body;

  // Validation
  if (
    [fullname, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, `User with ${username} or ${email} already exists`);
  }

  // Handling images
  console.log("Files received:", req.files);

  // Resolve the paths to the cover image and avatar
  const coverLocalPath = path.join(
    process.cwd(),
    "public",
    "temp",
    req.files?.coverImage?.[0]?.filename || "",
  );

  const avatarLocalPath = path.join(
    process.cwd(),
    "public",
    "temp",
    req.files?.avatar?.[0]?.filename || "",
  );

  console.log("Cover image local path:", coverLocalPath);
  console.log("Avatar image local path:", avatarLocalPath);

  let coverImage, avatarImage;

  // Upload cover image if provided
  if (fs.existsSync(coverLocalPath)) {
    try {
      coverImage = await uploadOnCloudinary(coverLocalPath);
      console.log("Uploaded cover image:", coverImage);
    } catch (error) {
      console.error("Error uploading cover image", error);
      throw new ApiError(500, "Failed to upload cover image");
    }
  } else {
    console.error("Cover image file does not exist:", coverLocalPath);
    throw new ApiError(400, "Cover image file does not exist");
  }

  // Upload avatar image if provided
  if (fs.existsSync(avatarLocalPath)) {
    try {
      avatarImage = await uploadOnCloudinary(avatarLocalPath);
      console.log("Uploaded avatar image:", avatarImage);
    } catch (error) {
      console.error("Error uploading avatar image", error);
      throw new ApiError(500, "Failed to upload avatar image");
    }
  } else {
    console.error("Avatar image file does not exist:", avatarLocalPath);
    throw new ApiError(400, "Avatar image file does not exist");
  }

  // Creating the user
  try {
    const user = await User.create({
      fullname,
      coverImage: coverImage?.url || "",
      avatar: avatarImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken",
    );
    if (!createdUser) {
      throw new ApiError(500, "User creation failed");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (err) {
    console.error("User creation failed", err);

    // Cleanup uploaded images if user creation fails
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }
    if (avatarImage) {
      await deleteFromCloudinary(avatarImage.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a user and images were deleted",
    );
  }
});

export { registerUser };
