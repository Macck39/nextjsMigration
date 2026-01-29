import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: [true, "Email Already Exists"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
      minLength: [8, "Password Should have atleast 8 chars"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function preSave(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function comparePassword(
  enteredPassword
) {
  return bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);

