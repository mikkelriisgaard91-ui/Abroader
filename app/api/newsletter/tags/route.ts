import { type NextRequest, NextResponse } from "next/server";
import { updateUserTagsByAction } from "@/lib/mailchimp";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, action } = body as { email?: string; action?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!action || typeof action !== "string") {
    return NextResponse.json({ error: "Missing or invalid action." }, { status: 400 });
  }

  try {
    await updateUserTagsByAction(email, action);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/newsletter/tags] error:", err);
    return NextResponse.json(
      { error: "Could not update tags. Please try again." },
      { status: 500 }
    );
  }
}
