import mongoose from "mongoose";

// Simple connection state tracking
let isConnected = false;

export async function connectMongo() {
  const MONGOURL = process.env.MONGOURL;

  if (!MONGOURL) {
    throw new Error("Missing env var: MONGOURL");
  }

  // If already connected, return
  if (isConnected && mongoose.connection.readyState === 1) {
    return mongoose;
  }

  try {
    const db = await mongoose.connect(MONGOURL, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
    return db;
  } catch (error) {
    isConnected = false;
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
}

