import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

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

  const avatarLocalPath = req.files?.avatar?.[0]?.path || null;
  const coverLocalPath = req.files?.coverImage?.[0]?.path || null;

  // Check if avatar is uploaded
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  let avatar;
  let coverImage;

  // Upload avatar
  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("Uploaded avatar:", avatar);
  } catch (error) {
    console.error("Error uploading avatar", error);
    throw new ApiError(500, "Failed to upload avatar");
  }

  // Upload cover image if provided
  if (coverLocalPath) {
    try {
      coverImage = await uploadOnCloudinary(coverLocalPath);
      console.log("Uploaded cover image:", coverImage);
    } catch (error) {
      console.error("Error uploading cover image", error);
      throw new ApiError(500, "Failed to upload cover image");
    }
  }

  // Creating the user
  try {
    const user = await User.create({
      fullname,
      avatar: avatar?.url,
      coverImage: coverImage?.url || "",
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
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a user and images were deleted",
    );
  }
});

export { registerUser };
