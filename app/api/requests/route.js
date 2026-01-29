import { NextResponse } from "next/server";
import { connectMongo } from "../../../lib/mongodb";
import { Request } from "../../../models/Request";
import { TOKEN_COOKIE_NAME, verifyAuthToken } from "../../../lib/auth";

export const dynamic = "force-dynamic";

function formatCreatedAt(date) {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongo();

    const created = await Request.create(body);
    return NextResponse.json(
      { success: true, message: "Request created successfully", requestId: created._id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to create request" },
      { status: 400 }
    );
  }
}

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
  const docs = await Request.find(
    {},
    "createdAt fullname email mobile location service type message"
  ).sort({ createdAt: -1 });

  const formatted = docs.map((d) => ({
    createdAt: formatCreatedAt(d.createdAt),
    fullname: d.fullname,
    email: d.email,
    mobile: d.mobile,
    location: d.location,
    service: d.service,
    type: d.type,
    message: d.message || "",
  }));

  return NextResponse.json(formatted);
}

