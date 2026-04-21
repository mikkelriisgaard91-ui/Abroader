import { Resend } from "resend";

export const runtime = "nodejs";

const DEFAULT_FROM = "Abroader <onboarding@resend.dev>";
const DEFAULT_NOTIFY_TO = "mikkel@abroader.io";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured (missing RESEND_API_KEY)." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();
    const { name, company, email, phone, services } = body as {
      name?: string;
      company?: string;
      email?: string;
      phone?: string;
      services?: string[];
    };

    if (!name?.trim() || !company?.trim() || !email?.trim() || !phone?.trim()) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!Array.isArray(services) || services.length === 0) {
      return Response.json({ error: "Select at least one service." }, { status: 400 });
    }

    if (!isValidEmail(email.trim())) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM?.trim() || DEFAULT_FROM;
    const to = process.env.EMPLOYERS_NOTIFY_EMAIL?.trim() || DEFAULT_NOTIFY_TO;
    const cleanServices = services
      .map((item) => item.trim())
      .filter(Boolean);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email.trim(),
      subject: `New employer contact request from ${name.trim()}`,
      text: [
        "New employer enquiry received from the Employers page.",
        "",
        `Name: ${name.trim()}`,
        `Company: ${company.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim()}`,
        "Services of interest:",
        ...cleanServices.map((service) => `  • ${service}`),
      ].join("\n"),
    });

    if (error) {
      return Response.json({ error: error.message ?? "Failed to send email." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
