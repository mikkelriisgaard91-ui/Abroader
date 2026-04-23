import { type NextRequest, NextResponse } from "next/server";
import { addOrUpdateSubscriber } from "@/lib/mailchimp";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, interests } = body as { email?: string; interests?: string[] };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await addOrUpdateSubscriber(email, interests);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/newsletter] error:", err);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }
}
