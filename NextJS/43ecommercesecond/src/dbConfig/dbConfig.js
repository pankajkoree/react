import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOURL);
    const connection = mongoose.connection;

    //
    connection.on("connected", () => {
      alert("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      alert("MongoDB connection error." + err);
    });
  } catch (error) {
    alert("Something went wrong : ", error);
  }
}
