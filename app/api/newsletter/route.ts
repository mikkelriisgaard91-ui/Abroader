import { type NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !server) {
    console.error("Mailchimp env vars not configured.");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  // Mailchimp uses MD5 hash of lowercase email as member ID
  const emailHash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

  const res = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${emailHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
      }),
    }
  );

  if (!res.ok) {
    const data = await res.json();
    console.error("Mailchimp error:", data);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
