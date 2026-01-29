import { SignJWT, jwtVerify } from "jose";

function getSecretKey() {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("Missing env var: JWT_SECRET");
  }
  return new TextEncoder().encode(JWT_SECRET);
}

export const TOKEN_COOKIE_NAME = "token";

export async function signAuthToken({ userId, username, role }) {
  // Keep role/username in the token so middleware can authorize without DB.
  return new SignJWT({ username, role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(userId))
    .setIssuedAt()
    .setExpirationTime("10d")
    .sign(getSecretKey());
}

export async function verifyAuthToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export function getAuthCookieOptions() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 10 * 24 * 60 * 60, // 10 days (seconds)
  };
}

