import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    mobile: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["callback", "enquiry"],
    },
    message: {
      type: String,
      trim: true,
      default: "",
      required: false,
    },
  },
  { timestamps: true }
);

export const Request =
  mongoose.models.Request || mongoose.model("Request", requestSchema);

