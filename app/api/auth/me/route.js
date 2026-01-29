import { NextResponse } from "next/server";
import { connectMongo } from "../../../../lib/mongodb";
import { User } from "../../../../models/User";
import { TOKEN_COOKIE_NAME, verifyAuthToken } from "../../../../lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const token = req.cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ message: "not logged in" }, { status: 401 });
  }

  const payload = await verifyAuthToken(token);
  if (!payload?.sub) {
    const res = NextResponse.json({ message: "invalid token" }, { status: 401 });
    res.cookies.set(TOKEN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
    return res;
  }

  await connectMongo();
  const user = await User.findById(payload.sub, "username role");
  if (!user) {
    const res = NextResponse.json({ message: "user not found" }, { status: 401 });
    res.cookies.set(TOKEN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
    return res;
  }

  return NextResponse.json({ username: user.username, role: user.role });
}

