import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  console.log("📦 Initializing MongoDB cache...");
  cached = global.mongoose = { conn: null };
}

export const connectDB = async () => {
  if (cached.conn) {
    console.log("⚡ Using cached MongoDB connection");
    return cached.conn;
  }

  const uri = process.env.MONGO_URI;
  console.log("🔍 MongoDB URI:", uri);

  if (!uri) {
    console.log("❌ Environment variable MONGO_URI is missing.");
    throw new Error("❌ MONGO_URI is not defined in environment variables");
  }

  try {
    console.log("🔗 Creating new MongoDB connection...");
    const conn = await mongoose.connect(uri);
    cached.conn = conn;
    console.log("🎉 MongoDB connected successfully (fresh connection)");
    return conn;
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
    throw err;
  }
};
