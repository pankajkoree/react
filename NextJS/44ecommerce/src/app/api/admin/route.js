import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Assuming passwords are hashed

// Admin schema (or model) can be defined in a separate file and imported
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default async function loginRouteHandler(req, res) {
  console.log("Request : ", req);
  console.log("Response : ", res);
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Check if mongoose is already connected
      if (!mongoose.connection.readyState) {
        await mongoose.connect(connectionString);
      }

      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Validate password (assuming it's hashed)
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // If credentials are valid
      return res.status(200).json({
        success: true,
        message: "Login successful",
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not allowed`);
  }
}
