import { NextResponse } from "next/server";
import { connectMongo } from "../../../lib/mongodb";
import { User } from "../../../models/User";
import { TOKEN_COOKIE_NAME, verifyAuthToken } from "../../../lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const token = req.cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ message: "not logged in" }, { status: 401 });

  const payload = await verifyAuthToken(token);
  if (!payload) return NextResponse.json({ message: "invalid token" }, { status: 401 });
  if (payload.role !== "admin") {
    return NextResponse.json(
      { message: "You are not Admin, only admin Allowed!" },
      { status: 403 }
    );
  }

  await connectMongo();
  const users = await User.find({}, "username role -_id").sort({ createdAt: -1 });
  return NextResponse.json(users);
}

