import { Resend } from "resend";

const AVAILABILITY_LABELS: Record<string, string> = {
  "weekday-morning": "Weekday mornings (9am–12pm)",
  "weekday-afternoon": "Weekday afternoons (12pm–5pm)",
  "weekday-evening": "Weekday evenings (5pm–8pm)",
  weekends: "Weekends",
};

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
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

    // Using onboarding@resend.dev + Gmail until abroader.io is verified at resend.com/domains.
    // Once verified, change from → "Abroader <noreply@abroader.io>" and to → "mikkel@abroader.io"
    const { data, error } = await resend.emails.send({
      from: "Abroader <onboarding@resend.dev>",
      to: "mikkelriisgaard91@gmail.com",
      reply_to: email,
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
      return Response.json({ error: error.message ?? "Failed to send email." }, { status: 500 });
    }

    console.log("Resend success, email id:", data?.id);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Consultation API error:", err);
    return Response.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
