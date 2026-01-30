import { NextResponse } from "next/server";
import { connectMongo } from "../../../lib/mongodb";
import { Request } from "../../../models/Request";
import { TOKEN_COOKIE_NAME, verifyAuthToken } from "../../../lib/auth";

export const dynamic = "force-dynamic";

// Sanitize function to prevent XSS/script injection
function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=, onload=
    .replace(/data:/gi, '') // Remove data: protocol
    .trim()
    .slice(0, 500); // Limit length to prevent abuse
}

// Validate mobile number (Indian format: 10 digits, optionally with +91)
function isValidMobile(mobile) {
  if (typeof mobile !== 'string') return false;
  const cleaned = mobile.replace(/[\s\-]/g, '');
  return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
}

// Validate email format
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Sanitize entire request body
function sanitizeRequestBody(body) {
  const sanitized = {};
  const allowedFields = ['fullname', 'email', 'mobile', 'location', 'service', 'type', 'message'];
  
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      sanitized[field] = sanitizeInput(body[field]);
    }
  }
  
  return sanitized;
}

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
    
    // Sanitize all input fields
    const sanitizedBody = sanitizeRequestBody(body);
    
    // Validate required fields
    if (!sanitizedBody.fullname || sanitizedBody.fullname.length < 2) {
      return NextResponse.json(
        { message: "Please provide a valid name (at least 2 characters)" },
        { status: 400 }
      );
    }
    
    if (!sanitizedBody.mobile || !isValidMobile(sanitizedBody.mobile)) {
      return NextResponse.json(
        { message: "Please provide a valid 10-digit mobile number" },
        { status: 400 }
      );
    }
    
    if (sanitizedBody.email && !isValidEmail(sanitizedBody.email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 }
      );
    }
    
    await connectMongo();

    const created = await Request.create(sanitizedBody);
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

