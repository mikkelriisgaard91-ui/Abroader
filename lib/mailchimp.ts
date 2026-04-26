import crypto from "node:crypto";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ALLOWED_TAGS = [
  "seasonal_work",
  "language_jobs",
  "retreats",
  "remote_jobs",
  "travel_inspiration",
  "online_income",
  "high_intent",
] as const;

type AllowedTag = (typeof ALLOWED_TAGS)[number];

/** Content tags that count toward the multi-click high_intent threshold. */
const CONTENT_TAGS: AllowedTag[] = [
  "seasonal_work",
  "language_jobs",
  "retreats",
  "remote_jobs",
  "travel_inspiration",
  "online_income",
];

/** Conversion actions that immediately warrant the high_intent tag. */
const CONVERSION_ACTIONS = new Set(["booked_consultation", "started_application"]);

const ACTION_TO_TAG: Record<string, AllowedTag> = {
  clicked_seasonal_work: "seasonal_work",
  clicked_language_jobs: "language_jobs",
  clicked_retreats: "retreats",
  clicked_remote_jobs: "remote_jobs",
  clicked_travel_inspiration: "travel_inspiration",
  clicked_online_income: "online_income",
  booked_consultation: "high_intent",
  started_application: "high_intent",
};

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

export function isValidTag(tag: string): tag is AllowedTag {
  return (ALLOWED_TAGS as readonly string[]).includes(tag);
}

export function mapActionToTag(action: string): AllowedTag | null {
  return ACTION_TO_TAG[action] ?? null;
}

// ---------------------------------------------------------------------------
// Internal utilities
// ---------------------------------------------------------------------------

function getMemberHash(email: string): string {
  return crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

/** Trim, strip BOM, strip surrounding quotes (common when pasting into Vercel). */
function normalizeMailchimpEnvString(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  let s = value.trim();
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1).trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s || undefined;
}

/** Datacenter prefix is the segment after the last dash in every Mailchimp API key (e.g. …-us21). */
function datacenterFromApiKey(apiKey: string): string | undefined {
  const i = apiKey.lastIndexOf("-");
  if (i <= 0 || i >= apiKey.length - 1) return undefined;
  return apiKey.slice(i + 1);
}

function getMailchimpConfig() {
  const apiKey = normalizeMailchimpEnvString(process.env.MAILCHIMP_API_KEY);
  const audienceId = normalizeMailchimpEnvString(process.env.MAILCHIMP_AUDIENCE_ID);
  const envServer = normalizeMailchimpEnvString(process.env.MAILCHIMP_SERVER);
  const keyServer = apiKey ? datacenterFromApiKey(apiKey) : undefined;

  if (!apiKey || !audienceId) {
    throw new Error("Mailchimp env vars not configured (MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID).");
  }

  const server = keyServer ?? envServer;
  if (!server) {
    throw new Error(
      "MAILCHIMP_SERVER is not set and the API key has no datacenter suffix (expected …-us21). Set MAILCHIMP_SERVER or use a valid Mailchimp API key."
    );
  }

  if (envServer && keyServer && envServer !== keyServer) {
    console.warn(
      `[mailchimp] MAILCHIMP_SERVER="${envServer}" does not match API key suffix "${keyServer}". Using "${keyServer}" for requests.`
    );
  }

  return { apiKey, audienceId, server };
}

/** New members only: `subscribed` (single opt-in) vs `pending` (double opt-in confirmation email). */
function getStatusIfNew(): "subscribed" | "pending" | "transactional" {
  const raw = normalizeMailchimpEnvString(process.env.MAILCHIMP_STATUS_IF_NEW)?.toLowerCase();
  if (raw === "pending" || raw === "transactional") return raw;
  return "subscribed";
}

function formatMailchimpErrorBody(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const o = body as Record<string, unknown>;
  const title = typeof o.title === "string" ? o.title : "";
  const detail = typeof o.detail === "string" ? o.detail : "";
  return [title, detail].filter(Boolean).join(" — ");
}

/** PUT body: include `status` when single opt-in so resubscribes after unsubscribe succeed. */
function buildMemberUpsertPayload(email: string): Record<string, string> {
  const trimmed = email.trim();
  const ifNew = getStatusIfNew();
  const payload: Record<string, string> = {
    email_address: trimmed,
    status_if_new: ifNew,
  };
  if (ifNew === "subscribed") {
    payload.status = "subscribed";
  }
  if (ifNew === "transactional") {
    payload.status = "transactional";
  }
  return payload;
}

function getAuthHeaders(apiKey: string): Record<string, string> {
  return {
    Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
    "Content-Type": "application/json",
  };
}

function baseUrl(server: string, audienceId: string) {
  return `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}`;
}

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

/** Thrown when Mailchimp Marketing API returns a non-2xx response. */
export class MailchimpHttpError extends Error {
  readonly statusCode: number;
  readonly mailchimpBody: unknown;

  constructor(message: string, statusCode: number, mailchimpBody: unknown) {
    super(message);
    this.name = "MailchimpHttpError";
    this.statusCode = statusCode;
    this.mailchimpBody = mailchimpBody;
  }
}

// ---------------------------------------------------------------------------
// Core API functions
// ---------------------------------------------------------------------------

/**
 * Add or update a subscriber in the Mailchimp audience.
 * Uses PUT so it creates the member if missing and updates if they exist.
 * If tags are provided, applies them after the member upsert.
 */
export async function addOrUpdateSubscriber(
  email: string,
  tags?: string[]
): Promise<void> {
  const { apiKey, audienceId, server } = getMailchimpConfig();
  const hash = getMemberHash(email);
  const headers = getAuthHeaders(apiKey);

  const memberUrl = new URL(`${baseUrl(server, audienceId)}/members/${hash}`);
  memberUrl.searchParams.set("skip_merge_validation", "true");

  const res = await fetch(memberUrl.toString(), {
    method: "PUT",
    headers,
    body: JSON.stringify(buildMemberUpsertPayload(email)),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const hint = formatMailchimpErrorBody(body);
    console.error("[mailchimp] addOrUpdateSubscriber failed:", body);
    const msg = hint
      ? `Mailchimp member upsert failed: ${res.status} (${hint})`
      : `Mailchimp member upsert failed: ${res.status}`;
    throw new MailchimpHttpError(msg, res.status, body);
  }

  if (tags && tags.length > 0) {
    try {
      await updateTags(email, tags);
    } catch (tagErr) {
      // Member is already on the list; do not fail the signup UX if tags alone fail.
      console.error("[mailchimp] subscriber saved but interest tags failed:", tagErr);
    }
  }
}

/**
 * Apply tags to an existing Mailchimp member.
 * Invalid tags are silently ignored.
 * Creates the tag in Mailchimp if it does not exist yet (status "active" achieves this).
 */
export async function updateTags(email: string, tags: string[]): Promise<void> {
  const { apiKey, audienceId, server } = getMailchimpConfig();
  const hash = getMemberHash(email);
  const headers = getAuthHeaders(apiKey);

  const validTags = tags.filter(isValidTag);

  if (validTags.length === 0) return;

  const payload = {
    tags: validTags.map((name) => ({ name, status: "active" })),
  };

  const res = await fetch(
    `${baseUrl(server, audienceId)}/members/${hash}/tags`,
    { method: "POST", headers, body: JSON.stringify(payload) }
  );

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const hint = formatMailchimpErrorBody(body);
    console.error("[mailchimp] updateTags failed:", body);
    const msg = hint
      ? `Mailchimp tag update failed: ${res.status} (${hint})`
      : `Mailchimp tag update failed: ${res.status}`;
    throw new MailchimpHttpError(msg, res.status, body);
  }
}

/**
 * Update tags based on a named user action.
 * - Conversion actions (booked_consultation, started_application) also add high_intent.
 * - Content clicks add high_intent when the member reaches 2+ active content tags.
 */
export async function updateUserTagsByAction(
  email: string,
  action: string
): Promise<void> {
  const tag = mapActionToTag(action);

  if (!tag) {
    console.warn(`[mailchimp] Unknown action ignored: "${action}"`);
    return;
  }

  const tagsToApply: AllowedTag[] = [tag];

  if (CONVERSION_ACTIONS.has(action) && tag !== "high_intent") {
    tagsToApply.push("high_intent");
  }

  await updateTags(email, tagsToApply);

  // For content clicks, check if the member now qualifies for high_intent.
  // We skip this check when high_intent was already added above.
  if (!tagsToApply.includes("high_intent") && CONTENT_TAGS.includes(tag as AllowedTag)) {
    await maybeAddHighIntent(email);
  }
}

// ---------------------------------------------------------------------------
// High-intent helper
// ---------------------------------------------------------------------------

/**
 * Fetch the member's active tags and add high_intent if they have ≥ 2 content tags.
 * This is called after content-click actions to detect multi-click engagement.
 */
async function maybeAddHighIntent(email: string): Promise<void> {
  const { apiKey, audienceId, server } = getMailchimpConfig();
  const hash = getMemberHash(email);
  const headers = getAuthHeaders(apiKey);

  const res = await fetch(
    `${baseUrl(server, audienceId)}/members/${hash}/tags?count=100`,
    { method: "GET", headers }
  );

  if (!res.ok) {
    // Non-fatal — just skip high_intent check
    console.warn("[mailchimp] maybeAddHighIntent: could not fetch member tags, skipping.");
    return;
  }

  const data = await res.json() as { tags?: { name: string; status: string }[] };
  const activeTags = (data.tags ?? [])
    .filter((t) => t.status === "active")
    .map((t) => t.name);

  const activeContentTagCount = CONTENT_TAGS.filter((ct) =>
    activeTags.includes(ct)
  ).length;

  if (activeContentTagCount >= 2) {
    await updateTags(email, ["high_intent"]);
  }
}
