import { NextResponse } from "next/server";
import { TOKEN_COOKIE_NAME } from "../../../../lib/auth";

export const dynamic = "force-dynamic";

export async function POST() {
  const res = NextResponse.json({
    success: true,
    message: "Logged Out Successfully!",
  });

  res.cookies.set(TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return res;
}

