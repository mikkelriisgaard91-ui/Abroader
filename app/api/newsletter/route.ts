import { type NextRequest, NextResponse } from "next/server";
import { addOrUpdateSubscriber, MailchimpHttpError } from "@/lib/mailchimp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function userFacingMailchimpMessage(statusCode: number): string {
  switch (statusCode) {
    case 401:
      return "Could not subscribe: Mailchimp rejected the API key (401). In Vercel, set MAILCHIMP_API_KEY to the key from Mailchimp → Account → Extras → API keys (ends with -us10, etc.), save, then redeploy.";
    case 404:
      return "Could not subscribe: Mailchimp could not find this audience (404). In Vercel, set MAILCHIMP_AUDIENCE_ID to Audience → Settings → Audience name and defaults → Audience ID, save, then redeploy.";
    case 403:
      return "Could not subscribe: Mailchimp blocked the request (403). Check the Mailchimp account, API key permissions, and audience compliance settings.";
    case 400:
      return "Could not subscribe: Mailchimp rejected the request (400). In Vercel → this deployment → Functions → Logs, search for [mailchimp] for the exact reason.";
    default:
      return `Could not subscribe: Mailchimp returned HTTP ${statusCode}. Check Vercel function logs for [mailchimp].`;
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const { email: rawEmail, interests } = body as { email?: string; interests?: string[] };
  const email = typeof rawEmail === "string" ? rawEmail.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await addOrUpdateSubscriber(email, interests);
    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const misconfigured =
      msg.includes("Mailchimp env vars not configured") ||
      msg.includes("MAILCHIMP_SERVER is not set");
    console.error("[api/newsletter] error:", err);

    if (err instanceof MailchimpHttpError) {
      return NextResponse.json(
        { error: userFacingMailchimpMessage(err.statusCode) },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: misconfigured ? 503 : 500 }
    );
  }
}
