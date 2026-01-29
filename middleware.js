import { NextResponse } from "next/server";
import { TOKEN_COOKIE_NAME, verifyAuthToken } from "./lib/auth";

const ADMIN_PATH = "/portal-8f3c2a";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith(ADMIN_PATH)) return NextResponse.next();

  const token = req.cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const payload = await verifyAuthToken(token);
  if (!payload) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    const res = NextResponse.redirect(url);
    res.cookies.set(TOKEN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
    return res;
  }

  if (payload.role !== "admin") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal-8f3c2a/:path*"],
};

