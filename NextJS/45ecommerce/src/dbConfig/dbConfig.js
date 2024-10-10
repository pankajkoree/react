import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
