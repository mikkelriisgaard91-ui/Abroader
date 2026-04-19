import { Resend } from "resend";

/** Resend’s Node SDK expects a Node runtime (not Edge). */
export const runtime = "nodejs";

const AVAILABILITY_LABELS: Record<string, string> = {
  "weekday-morning": "Weekday mornings (9am–12pm)",
  "weekday-afternoon": "Weekday afternoons (12pm–5pm)",
  "weekday-evening": "Weekday evenings (5pm–8pm)",
  weekends: "Weekends",
};

const DEFAULT_FROM = "Abroader <onboarding@resend.dev>";
const DEFAULT_NOTIFY_TO = "mikkel@abroader.io";

const MISSING_KEY_HINT =
  "Set RESEND_API_KEY for this environment: add it to .env.local in the abroader folder for local dev (then restart the dev server), or under your host’s environment variables for production (e.g. Vercel Project → Settings → Environment Variables), then redeploy.";

/** When Resend rejects the send (sandbox / domain rules), guide operators on env vars. */
function resendRecipientHint(message: string): string | undefined {
  const m = message.toLowerCase();
  if (
    m.includes("testing") ||
    m.includes("only send") ||
    m.includes("verified domain") ||
    m.includes("not allowed to send") ||
    (m.includes("invalid") && (m.includes("to") || m.includes("recipient")))
  ) {
    return "With Resend’s test sender (onboarding@resend.dev), you can only deliver to addresses Resend allows for your account. Verify abroader.io at resend.com/domains and set RESEND_FROM (e.g. Abroader <noreply@abroader.io>) so notifications can reach mikkel@abroader.io.";
  }
  return undefined;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Consultation API: RESEND_API_KEY is not set");
    return Response.json(
      { error: "Consultation email is not configured.", hint: MISSING_KEY_HINT },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, availability, subject } = body as {
      name: string;
      email: string;
      availability: string[];
      subject?: string;
    };

    if (!name || !email || !availability?.length) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const availabilityText = availability
      .map((id) => AVAILABILITY_LABELS[id] ?? id)
      .join("\n  • ");

    const from = process.env.RESEND_FROM?.trim() || DEFAULT_FROM;
    const to = DEFAULT_NOTIFY_TO;

    // Notifications always go to mikkel@abroader.io. Using onboarding@resend.dev until abroader.io is verified at resend.com/domains; then set RESEND_FROM e.g. Abroader <noreply@abroader.io>.
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject ?? `New consultation request from ${name}`,
      text: [
        `You have a new consultation request.`,
        ``,
        `Name:       ${name}`,
        `Email:      ${email}`,
        `Available:`,
        `  • ${availabilityText}`,
        ``,
        `Reply directly to ${email} to send them a meeting invite.`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      const msg = error.message ?? "Failed to send email.";
      const hint = resendRecipientHint(msg);
      return Response.json(
        hint ? { error: msg, hint } : { error: msg },
        { status: 500 },
      );
    }

    console.log("Resend success, email id:", data?.id);
    return Response.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("Consultation API error:", detail, err);
    return Response.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
