import { NextResponse } from "next/server";
import { connectMongo } from "../../../../lib/mongodb";
import { User } from "../../../../models/User";
import {
  getAuthCookieOptions,
  signAuthToken,
  TOKEN_COOKIE_NAME,
} from "../../../../lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { message: "username and password are required" },
        { status: 400 }
      );
    }

    await connectMongo();

    const user = await User.findOne({ username: String(username).toLowerCase() }).select(
      "+password"
    );
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const ok = await user.comparePassword(password);
    if (!ok) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = await signAuthToken({
      userId: user._id,
      username: user.username,
      role: user.role,
    });

    const res = NextResponse.json({ success: true, message: "Login Successfull" });
    res.cookies.set(TOKEN_COOKIE_NAME, token, getAuthCookieOptions());
    return res;
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

