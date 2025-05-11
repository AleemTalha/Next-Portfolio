import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('⚠️ Please define the MONGO_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  console.log("🔄 No cached connection found. Initializing new cache...");
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("✅ Using cached database connection");
    return cached.conn;
  }

  // Agar connection promise exist karta hai, lekin cached connection nahi hai
  if (!cached.promise) {
    console.log("📡 Connecting to MongoDB...");

    // Connection banane ka promise create karna
    cached.promise = mongoose.connect(MONGO_URI, {
    }).then((mongoose) => {
      console.log("🎉 MongoDB connection established");
      return mongoose;
    }).catch((error) => {
      console.error("❌ MongoDB connection error:", error);
      throw error;
    });
  } else {
    console.log("⏳ Awaiting existing connection promise...");
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
