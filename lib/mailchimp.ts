import crypto from "crypto";

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
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !server) {
    throw new Error("Mailchimp env vars not configured (MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_SERVER).");
  }

  return { apiKey, audienceId, server };
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

  const res = await fetch(`${baseUrl(server, audienceId)}/members/${hash}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      email_address: email,
      status_if_new: "subscribed",
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error("[mailchimp] addOrUpdateSubscriber failed:", body);
    throw new Error(`Mailchimp member upsert failed: ${res.status}`);
  }

  if (tags && tags.length > 0) {
    await updateTags(email, tags);
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
    console.error("[mailchimp] updateTags failed:", body);
    throw new Error(`Mailchimp tag update failed: ${res.status}`);
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
