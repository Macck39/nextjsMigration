import mongoose from "mongoose";

// Serverless-friendly connection caching
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectMongo() {
  const MONGOURL = process.env.MONGOURL;
  if (!MONGOURL) {
    throw new Error("Missing env var: MONGOURL");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGOURL, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

