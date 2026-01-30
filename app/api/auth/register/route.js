import { NextResponse } from "next/server";
import { connectMongo } from "../../../../lib/mongodb";
import { User } from "../../../../models/User";

export const dynamic = "force-dynamic";

export async function POST(req) {
  // Safety: disabled unless explicitly enabled
  if (process.env.ALLOW_ADMIN_BOOTSTRAP !== "true") {
    return NextResponse.json(
      { message: "Registration disabled" },
      { status: 403 }
    );
  }

  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { message: "username and password are required" },
        { status: 400 }
      );
    }

    await connectMongo();

    // If there is no admin yet, bootstrap first user as admin.
    const adminExists = await User.exists({ role: "admin" });
    const role = adminExists ? "user" : "admin";

    await User.create({ username, password, role });
    return NextResponse.json(
      { success: true, message: "User created successfully", role },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to register" },
      { status: 400 }
    );
  }
}

