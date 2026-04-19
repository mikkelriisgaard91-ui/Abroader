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

function missingResendKeyHint(req: Request): string {
  const host = req.headers.get("host") ?? "";
  const local =
    host.includes("localhost") ||
    host.startsWith("127.") ||
    host.endsWith(".local");
  if (local) {
    return "This request ran without RESEND_API_KEY. Add RESEND_API_KEY=re_… to .env.local in the abroader folder (same level as package.json), save the file, stop the dev server completely, then run npm run dev again from that folder.";
  }
  return "This deployment has no RESEND_API_KEY. In the Vercel project that builds this site: Settings → Environment Variables → confirm RESEND_API_KEY exists for Production (and Preview if you use preview URLs). If your Git repo has the Next app inside an abroader subfolder, set Vercel Root Directory to abroader. Then Deployments → open the latest deployment → ⋮ → Redeploy.";
}

/** When Resend rejects the send (sandbox / domain rules), guide operators on env vars. */
function resendRecipientHint(message: string): string | undefined {
  const m = message.toLowerCase();
  const looksLikeRecipientOrSandbox =
    m.includes("testing") ||
    m.includes("only send") ||
    m.includes("your own email") ||
    m.includes("own email address") ||
    m.includes("verified domain") ||
    m.includes("not allowed to send") ||
    (m.includes("invalid") && (m.includes("to") || m.includes("recipient")));
  if (!looksLikeRecipientOrSandbox) return undefined;

  return (
    "Resend blocked this send: with the test sender (onboarding@resend.dev), deliveries are limited until you verify a domain. " +
    "Either set CONSULTATION_NOTIFY_EMAIL to the same email as your Resend account (temporary workaround), " +
    "or verify abroader.io at resend.com/domains, set RESEND_FROM (e.g. Abroader <noreply@abroader.io>), " +
    "then use CONSULTATION_NOTIFY_EMAIL=mikkel@abroader.io or leave it unset for the default team inbox."
  );
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Consultation API: RESEND_API_KEY is not set");
    return Response.json(
      {
        error: "Consultation email is not configured.",
        hint: missingResendKeyHint(req),
      },
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
    const to =
      process.env.CONSULTATION_NOTIFY_EMAIL?.trim() || DEFAULT_NOTIFY_TO;

    // Default To: mikkel@abroader.io. Override with CONSULTATION_NOTIFY_EMAIL while Resend test mode blocks that address (see README).
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
