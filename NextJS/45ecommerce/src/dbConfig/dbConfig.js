import mongoose from "mongoose";

export async function connect() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error(
      "MongoDB connection URI is not defined. Please set MONGO_URI in your environment variables."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 45000,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error: " + err);
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong during MongoDB connection: ");
    console.error(error);
    process.exit(1);
  }
}
