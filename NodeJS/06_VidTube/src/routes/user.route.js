import { Router } from "express";
import { registerUser, logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; // Adjust path as necessary
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

// Directly use `upload` middleware for handling file uploads
router.route("/register").post(upload, registerUser);

// secured routes
router.routes("/logout").post(verifyJWT, logoutUser);

export default router;
